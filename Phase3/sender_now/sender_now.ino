/*
Upload config : 
board ai thinker esp32 cam
cpu 240 MHz
flash freq 80 Mhz
flash mode qio
partition scheme huge app (3mb no ota / 1MB spiffs)
core debug level nothing
erase all flash before code upload disabled
programmer esptool
*/

#include <esp_now.h>
#include <WiFi.h>
#include <esp_wifi.h>

#include "wifi_connect.h" // Library for wifi connections
#include "bmp280.h" // Library for BMP280 sensor
#include "dht22.h" // Library for DHT22 sensor
#include "ds18b20.h" // Library for DS18B20 sensor
#include "temt6000.h" // Library for TEMT6000 sensor

/********************************************************
** Create sensor objects                               **
********************************************************/
#define dht_pin 2 // DHT22 pin
#define oneWireBus 4 // DS18B20 pin
#define temt6000Pin 36 // TEMT6000 pin
BMP280_SENSOR bmp280; // Create an instance of the BMP280 class
DHT22_SENSOR dht22(dht_pin); // Create an instance of the DHT22 class
DS18B20_SENSOR ds18b20(oneWireBus); // Create an instance of the DS18B20 class
TEMT6000_SENSOR temt6000(temt6000Pin); // Create an instance of the TEMT6000 class

/********************************************************
** Communication variables                             **
********************************************************/
uint8_t broadcastAddress[] = {0x30, 0xC6, 0xF7, 0x20, 0x65, 0x74}; // ESP32 MAC Address
typedef struct struct_message {
  float temperatureDS18B20; // C
  float temperatureBMP280; // C
  float pressureBMP280; // hPa
  float humidityDHT22; // %
  float temperatureDHT22; // Temperature C
  float lightTEMT6000;
} struct_message; // Data structure - Must match receiver structure
struct_message myData; // Create a struct_message called myData

esp_now_peer_info_t peerInfo; // Stores info about the peer

bool channelFound = false;
uint8_t channel = 1; // Currently used WiFi channel, set to 1 by default

// SSID and password of the Soft Access Point created in the ESP32-CAM
char* SSID_AP = "Soft-Access-Point";
char*  PASSWORD_AP = "123456789";
/********************************************************
** Functions used in this program                      **
********************************************************/
void tryNextChannel(); // Offsets wifi channel by 1 when called 
void onDataSent(const uint8_t* mac_addr, esp_now_send_status_t status); // Callback function executed when data is sent
void add_peer(int channel); // Setup esp-now communication with esp32 cam 

/********************************************************
** Setup + loop start here                             **
********************************************************/

void WiFiReset() {
  WiFi.persistent(false);
  WiFi.disconnect();
  WiFi.mode(WIFI_OFF);
}

void setup() {
  Serial.begin(9600);
  // WiFiReset();

  while (!Serial)
    delay(100); // wait for native usb

  bmp280.setup(); // Initialize the BMP280
  dht22.setup(); 
  ds18b20.setup();
  // TEMT6000 does not require setup
  
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);
  WiFi.setSleep(WIFI_PS_NONE);

  connect_esp32_wifi_network(SSID_AP, PASSWORD_AP);
  WiFi.printDiag(Serial);

  add_peer(channel); // Start esp32 now, register and add esp32 cam as peer with callback function on message sent
}
 
void loop() {
  float bmp280Temperature = bmp280.readTemperature(); // Read temperature from BMP280
  float bmp280Pressure = bmp280.readPressure();       // Read pressure from BMP280
  float dht22Temperature = dht22.readTemperature(); // Read temperature from DHT22
  float dht22Humidity = dht22.readHumidity(); // Read pressure from DHT22
  float ds18b20Temperature = ds18b20.readTemperature(); // Read temperature from DS18B20
  float temt6000Luminosity = temt6000.readLuminosity(); // Read luminosity from TEMT6000

  // Set values to send 
  myData.temperatureDS18B20 = ds18b20Temperature;
  myData.temperatureBMP280 = bmp280Temperature;
  myData.pressureBMP280 = bmp280Pressure;  
  myData.humidityDHT22 = dht22Humidity;
  myData.temperatureDHT22 = dht22Temperature;
  myData.lightTEMT6000 = temt6000Luminosity;
  
  // Send message via ESP-NOW
  esp_now_send(broadcastAddress, (uint8_t *) &myData, sizeof(myData));

  /*
  broadcastAddress: This is the destination MAC address of the receiver device. It is of type uint8_t[], which represents an array of unsigned 8-bit integers. 
  In this case, broadcastAddress is an array containing the MAC address of the receiver device.
 
  (uint8_t *) &myData: This parameter represents the data to be sent. It is cast to (uint8_t *) to treat it as an array of unsigned 8-bit integers. 
  The & operator is used to get the memory address of the myData structure. By casting it to (uint8_t *), the structure is treated as a byte array, allowing it to be sent via ESP-NOW.
  
  sizeof(myData): This specifies the size of the data being sent, which is the size of the myData structure. 
  The sizeof operator is used to determine the number of bytes occupied by the structure in memory. This ensures that the correct amount of data is sent.
   */
   
  delay(20000); // Send the message every twenty seconds 
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Call back function for when data is sent            **
********************************************************/
void onDataSent(const uint8_t* mac_addr, esp_now_send_status_t status) {
  if (!channelFound && status != ESP_NOW_SEND_SUCCESS) {
    Serial.println("Delivery Fail because channel" + String(channel) + " does not match receiver channel.");
    tryNextChannel(); // If message was not delivered, it tries on another wifi channel.
  }
  else {
    Serial.println("Delivery Successful ! Using channel : " + String(channel));
    channelFound = true;
  }
}

/********************************************************
** Offsets wifi channel by 1 when called               **
********************************************************/
void tryNextChannel() {
  Serial.println("Changing channel from " + String(channel) + " to " + String(channel+1));
  channel = channel % 13 + 1;
  esp_wifi_set_promiscuous(true);
  esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
  esp_wifi_set_promiscuous(false);
}

/********************************************************
** Setup esp32 communication with esp32cam             **
********************************************************/
void add_peer(int channel) {
  // Initialyze ESP-NOW
  Serial.println("Initializing ESP-NOW");
  if (esp_now_init() != ESP_OK) {
    Serial.println("ESP_Now init failed...");
    delay(1000);
    ESP.restart();
  } else {
    Serial.println("ESP_Now init OK");
  }
  
  // Register peer
  Serial.println("Registering esp32 cam as peer"); 
  memcpy(peerInfo.peer_addr, broadcastAddress, 6); // Copy the MAC address of the receiver device into the peerInfo.peer_addr variable (6 bytes for the mac addr)
  peerInfo.encrypt = false; // The communication will not be encrypted

  esp_wifi_set_promiscuous(true);
  esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
  esp_wifi_set_promiscuous(false);
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  } else {
    Serial.println("Successfully added esp32 cam as peer");
  }

  // After successfully initializing ESP-NOW, register the callback function that will be called when a message is sent. In this case, we register for the OnDataSent() function created previously.
  esp_now_register_send_cb(onDataSent); // Every time a message is sent, it will call OnDataSent and pass the two input variables 
}
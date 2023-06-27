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

/********************************************************
** Setup to communicate with server                    **
********************************************************/
// Wi-Fi constants
#define NETWORK_SSID "ssid"
#define NETWORK_PASS "pass"

/********************************************************
** ESP32 NOW Communication variables                   **
********************************************************/
typedef struct struct_message {
  float temperatureDS18B20; // C
  float temperatureBMP280; // C
  float pressureBMP280; // hPa
  float humidityDHT22; // %
  float temperatureDHT22; // Temperature C
  float lightTEMT6000;
} struct_message; // Data structure - Must match sender structure
struct_message myData; // Create a struct_message called myData

// SSID and password of the Soft Access Point created in the ESP32-CAM
const char* SSID_AP = "Soft-Access-Point";
const char*  PASSWORD_AP = "123456789";

/********************************************************
** Functions used in this program                      **
********************************************************/
void initialize_ESP_NOW();
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len);

/********************************************************
** Setup + loop start here                             **
********************************************************/
void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);
  
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_AP_STA);
  esp_wifi_set_ps(WIFI_PS_NONE);

  WiFi.softAP(SSID_AP, PASSWORD_AP);
  connect_esp32_wifi_network(NETWORK_SSID, NETWORK_PASS);  

  initialize_ESP_NOW();
}
 
void loop() {
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Initialize ESP NOW et setup callback                **
********************************************************/
void initialize_ESP_NOW() {
  // Initialize ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    delay(1000);
    ESP.restart();
  } else {
    Serial.println("ESP NOW OK");
  }
  // Register for a callback function that will be called when data is received. In this case, we register for the OnDataRecv() function that was created previously.
  esp_now_register_recv_cb(OnDataRecv); 
}

/********************************************************
** Call back function for when data is received        **
********************************************************/
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData)); // We copy the content of the incomingData data variable into the myData variable. 
  Serial.print("Bytes received: ");
  Serial.println(len);
  
  Serial.println("temperatureDS18B20: " + String(myData.temperatureDS18B20));
  Serial.println("temperatureBMP280: " + String(myData.temperatureBMP280));
  Serial.println("pressureBMP280: " + String(myData.pressureBMP280));
  Serial.println("humidityDHT22: " + String(myData.humidityDHT22));
  Serial.println("temperatureDHT22: " + String(myData.temperatureDHT22));
  Serial.println("lightTEMT6000: " + String(myData.lightTEMT6000));
}
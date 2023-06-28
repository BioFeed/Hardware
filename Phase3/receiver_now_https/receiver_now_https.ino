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

https://randomnerdtutorials.com/esp32-https-requests/
*/

#include <esp_now.h>
#include <WiFi.h>
#include <esp_wifi.h>
#include <Arduino.h>
#include <base64.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>

#include "communications_https.h" // Library for communications with server
#include "camera.h" // Library for camera configuration and taking pictures
#include "wifi_connect.h" // Library for wifi connections

/********************************************************
** Setup to communicate with server                    **
********************************************************/
#define NETWORK_SSID "abcdef"
#define NETWORK_PASS "1234567891"

#define TOKEN "BBj4AZcijsDXwfiG8Trh" // Token used for authentification
String server = "https://biofeed.vitavault.fr/store_data"; // Server complete url 

const char* rootCACertificate = \
"-----BEGIN CERTIFICATE-----\n" \
"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\n" \
"-----END CERTIFICATE-----\n";
 
WiFiClientSecure *client = new WiFiClientSecure;
bool sendToServer = false; // when sendData = true, the loop will send a photo and and latest received data
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
char* SSID_AP = "Soft-Access-Point";
char*  PASSWORD_AP = "123456789";

/********************************************************
** Functions used in this program                      **
********************************************************/
void initialize_ESP_NOW();
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len);
void sendPhoto(WiFiClientSecure* client, String server_url);
void sendData(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, WiFiClientSecure* client, String server_url);

/********************************************************
** Setup + loop start here                             **
********************************************************/
void setup() {
  // Initialize Serial Monitor
  Serial.begin(9600);

  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); 
  
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_AP_STA);
  esp_wifi_set_ps(WIFI_PS_NONE); // Otherwise wifi card goes to sleep if inactive
  connect_esp32_wifi_network(NETWORK_SSID, NETWORK_PASS);
  WiFi.printDiag(Serial);

  WiFi.softAP(SSID_AP, PASSWORD_AP); // Start local access point

  client->setCACert(rootCACertificate); // Use server certificate

  config_camera();
  
  initialize_ESP_NOW();

  // Test with:
  // sendPhoto(client, server);
  // sendData(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, client, server);
}

void loop() {
  if ( WiFi.status() ==  WL_CONNECTED ) {
    if (sendToServer) {
      sendPhoto(client, server);
      sendData(myData.temperatureDS18B20, myData.temperatureBMP280, myData.pressureBMP280, myData.humidityDHT22, myData.temperatureDHT22, myData.lightTEMT6000, client, server);
      sendToServer = false;
    }
  } else {
    connect_esp32_wifi_network(NETWORK_SSID, NETWORK_PASS);
  }
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
    delay(100000);
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
  sendToServer = true;
}

/********************************************************
** Send photo using HTTPS POST request                 **
********************************************************/
void sendPhoto(WiFiClientSecure* client, String server_url) {
  Serial.println("Sending photo to server");
  
  camera_fb_t * fb = capturePhoto();
  
  HTTPClient https1;

  if(connectToServerSucessful(server_url, https1, client)) {
    String payload = createPhotoPayload(fb, TOKEN);
    sendRequest(payload, https1);
    Serial.println("Sent payload");
  }
}

/********************************************************
** Send data using HTTPS POST request                  **
********************************************************/
void sendData(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, WiFiClientSecure* client, String server_url) {
  Serial.println("Sending data to server");

  HTTPClient https2;

  if(connectToServerSucessful(server_url, https2, client)) {
    String payload = createDataPayload(temperatureDS18B20, temperatureBMP280, pressureBMP280, humidityDHT22, temperatureDHT22, lightTEMT6000, TOKEN);
    sendRequest(payload, https2);
    Serial.println("Sent payload");
  }
}
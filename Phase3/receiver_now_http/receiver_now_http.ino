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
#include <Arduino.h>

#include "communications_http.h" // Library for communications with server
#include "camera.h" // Library for camera configuration and taking pictures
#include "wifi_connect.h" // Library for wifi connections

/********************************************************
** Setup to communicate with server                    **
********************************************************/
#define TOKEN "token" // Token used for authentification
String serverName = "192.168.9.196";   // REPLACE WITH YOUR Raspberry Pi IP ADDRESS
String serverPath = "/store_data";
const int serverPort = 5000;

// Wi-Fi constants
#define NETWORK_SSID "ssid"
#define NETWORK_PASS "pass"

WiFiClient client;

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
void sendData(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, String serverPath, String serverName, int serverPort, WiFiClient client);
void sendPhoto(String serverPath, String serverName, int serverPort, WiFiClient client);

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

  WiFi.softAP(SSID_AP, PASSWORD_AP); // Start local access point

  connect_esp32_wifi_network(NETWORK_SSID, NETWORK_PASS);  
  
  config_camera();
  
  void initialize_ESP_NOW();

  // Test with:
  // sendPhoto(serverPath, serverName, serverPort, client);
  // sendData(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, serverPath, serverName, serverPort, client);
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
  sendPhoto(serverPath, serverName, serverPort, client);
  memcpy(&myData, incomingData, sizeof(myData)); // We copy the content of the incomingData data variable into the myData variable. 
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.println("temperatureDS18B20: " + String(myData.temperatureDS18B20));
  Serial.println("temperatureBMP280: " + String(myData.temperatureBMP280));
  Serial.println("pressureBMP280: " + String(myData.pressureBMP280));
  Serial.println("humidityDHT22: " + String(myData.humidityDHT22));
  Serial.println("temperatureDHT22: " + String(myData.temperatureDHT22));
  Serial.println("lightTEMT6000: " + String(myData.lightTEMT6000));
  sendData(myData.temperatureDS18B20, myData.temperatureBMP280, myData.pressureBMP280, myData.humidityDHT22, myData.temperatureDHT22, myData.lightTEMT6000, serverPath, serverName, serverPort, client);
}

/********************************************************
** Send photo using HTTP POST request                  **
********************************************************/
void sendPhoto(String serverPath, String serverName, int serverPort, WiFiClient client) {
  camera_fb_t * fb = capturePhoto();
  
  Serial.println("Connecting to server: " + serverName);

  if (connectToServerSucessful(serverName, serverPort, client)) {
    Serial.println("Connection to server successful!");    
    String payload = createPhotoPayload(fb, TOKEN);
    sendRequest(payload, serverPath, serverName, client);
    Serial.println("Sent payload");
  }
}

/********************************************************
** Send data using HTTP POST request                   **
********************************************************/
void sendData(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, String serverPath, String serverName, int serverPort, WiFiClient client) {
  Serial.println("Connecting to server: " + serverName);

  if (connectToServerSucessful(serverName, serverPort, client)) {
    Serial.println("Connection to server successful!");
    String payload = createDataPayload(temperatureDS18B20, temperatureBMP280, pressureBMP280, humidityDHT22, temperatureDHT22, lightTEMT6000, TOKEN);
    sendRequest(payload, serverPath, serverName, client);
    Serial.println("Sent payload");
  }
}
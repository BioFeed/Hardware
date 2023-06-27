/*
  Upload config : 
  board ai thinker esp32 cam
  cpu 240 MHz
  flash freq 80 Mhz
  flash mode qio
  partition scheme huge app (3mb no ota / 1MB spiffs)
  core debug level nothing
  erase all flash before code upload disabled
  programmateur esptool
  
*/

#include <esp_now.h>
#include <WiFi.h>

// Structure example to receive data
// Must match the sender structure
typedef struct struct_message {
    char a[32];
    int b;
    float c;
    bool d;
} struct_message;

// Create a struct_message called myData
struct_message myData;

// callback function that will be executed when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData)); // We copy the content of the incomingData data variable into the myData variable. 
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Char: ");
  Serial.println(myData.a);
  Serial.print("Int: ");
  Serial.println(myData.b);
  Serial.print("Float: ");
  Serial.println(myData.c);
  Serial.print("Bool: ");
  Serial.println(myData.d);
  Serial.println();
}
 
void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);
  
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Initialize ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }
  
  // Register for a callback function that will be called when data is received. In this case, we register for the OnDataRecv() function that was created previously.
  esp_now_register_recv_cb(OnDataRecv);
}
 
void loop() {

}

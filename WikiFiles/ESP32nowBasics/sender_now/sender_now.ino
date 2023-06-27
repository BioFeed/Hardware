/*
  esp_now_init() Initializes ESP-NOW. You must initialize Wi-Fi before initializing ESP-NOW.
  esp_now_add_peer() Call this function to pair a device and pass as an argument the peer MAC address.
  esp_now_send() Send data with ESP-NOW.
  esp_now_register_send_cb() Register a callback function that is triggered upon sending data. When a message is sent, a function is called – this function returns whether the delivery was successful or not.
  esp_now_register_rcv_cb() Register a callback function that is triggered upon receiving data. When data is received via ESP-NOW, a function is called. 

Upload config : 
ESP32 Dev module
Upload speed 921600
CPU 240 MHz
Flash freq 80 MHz
Flash mode QIO
Flash size 4 Mb
Partition scheme Default 4 Mb with spiffs (1.2Mb app)
Programmateur esptool
*/

#include <esp_now.h>
#include <WiFi.h>

// REPLACE WITH YOUR RECEIVER MAC Address
uint8_t broadcastAddress[] = {0x30, 0xC6, 0xF7, 0x20, 0x65, 0x74};

// Structure example to send data
// Must match the receiver structure
typedef struct struct_message {
  char a[32]; // Can contain up to 32 chars
  int b;
  float c;
  bool d;
} struct_message;

// Create a struct_message called myData
struct_message myData;

esp_now_peer_info_t peerInfo; // Stores info about the peer

// callback executed when data is sent - In this case, this function simply prints if the message was successfully delivered or not.
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nLast Packet Send Status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
}
 
void setup() {
  // Init Serial Monitor
  Serial.begin(115200); // initialize the serial monitor for debugging purposes
 
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Initialyze ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // After successfully initializing ESP-NOW, register the callback function that will be called when a message is sent. In this case, we register for the OnDataSent() function created previously.
  esp_now_register_send_cb(OnDataSent); // Every time a message is sent, it will call OnDataSent and pass the two input variables 
  
  // Register peer
  memcpy(peerInfo.peer_addr, broadcastAddress, 6); // Copy the MAC address of the receiver device into the peerInfo.peer_addr variable (6 bytes for the mac addr)
  peerInfo.channel = 0; //  The channel represents the Wi-Fi channel over which the ESP-NOW communication will take place. Wi-Fi channels are numbered from 0 to 13, 
  // and each channel corresponds to a specific frequency band. By setting channel to 0, it indicates that the ESP-NOW communication will occur on the Wi-Fi channel 1 (2.412 GHz frequency band). 
  // This channel selection ensures that both the sender and receiver devices are using the same channel for communication.
  peerInfo.encrypt = false; // The communication will not be encrypted
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }
}
 
void loop() {
  // Set values to send
  strcpy(myData.a, "THIS IS A CHAR");
  myData.b = random(1,20);
  myData.c = 1.2;
  myData.d = false;
  
  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &myData, sizeof(myData));

  /*
  broadcastAddress: This is the destination MAC address of the receiver device. It is of type uint8_t[], which represents an array of unsigned 8-bit integers. 
  In this case, broadcastAddress is an array containing the MAC address of the receiver device.
 
  (uint8_t *) &myData: This parameter represents the data to be sent. It is cast to (uint8_t *) to treat it as an array of unsigned 8-bit integers. 
  The & operator is used to get the memory address of the myData structure. By casting it to (uint8_t *), the structure is treated as a byte array, allowing it to be sent via ESP-NOW.
  
  sizeof(myData): This specifies the size of the data being sent, which is the size of the myData structure. 
  The sizeof operator is used to determine the number of bytes occupied by the structure in memory. This ensures that the correct amount of data is sent.
   */
   
  if (result == ESP_OK) {
    Serial.println("Sent with success");
  }
  else {
    Serial.println("Error sending the data");
  }
  delay(2000); // Send the message every two seconds 
}

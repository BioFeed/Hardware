/*
Upload config : 
ESP32 Dev module
Upload speed 921600
CPU 240 MHz
Flash freq 80 MHz
Flash mode QIO
Flash size 4 Mb
Partition scheme Default 4 Mb with spiffs (1.2Mb app)
programmer esptool
*/

#include "bmp280.h"
#include "dht22.h"
#include "ds18b20.h"
#include "temt6000.h"

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
** Setup + loop start here                             **
********************************************************/
void setup() {
  Serial.begin(9600);
  while (!Serial)
    delay(100); // wait for native usb

  bmp280.setup(); // Call the setup function to initialize the BMP280
  dht22.setup(); 
  ds18b20.setup();
  // TEMT6000 does not require setup
}

void loop() {
  Serial.println("EOC");
  float bmp280Temperature = bmp280.readTemperature(); // Read temperature from BMP280
  float bmp280Pressure = bmp280.readPressure();       // Read pressure from BMP280
  float dht22Temperature = dht22.readTemperature();   // Read temperature from DHT22
  float dht22Humidity = dht22.readHumidity();         // Read humidity from DHT22
  float ds18b20Temperature = ds18b20.readTemperature();// Read temperature from DS18B20
  float temt6000Luminosity = temt6000.readLuminosity();// Read luminosity from TEMT6000

  Serial.print("DS18B20T ");
  Serial.print(ds18b20Temperature);
  
  Serial.print(" BMP280T ");
  Serial.print(bmp280Temperature);
  Serial.print(" BMP280P ");
  Serial.print(bmp280Pressure);
  
  Serial.print(" DHT22H ");
  Serial.print(dht22Humidity);
  Serial.print(" DHT22T ");
  Serial.print(dht22Temperature);
  
  Serial.print(" TEMT6000 ");
  Serial.println(temt6000Luminosity);
}

/********************************************************
** Setup + loop end here                               **
********************************************************/
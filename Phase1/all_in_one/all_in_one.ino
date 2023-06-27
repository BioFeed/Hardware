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
  float bmp280Temperature = bmp280.readTemperature(); // Read temperature from BMP280
  Serial.println("BMP280 Temperature : " + String(bmp280Temperature) + "C");
  float bmp280Pressure = bmp280.readPressure();       // Read pressure from BMP280
  Serial.println("BMP280 Pressure : " + String(bmp280Pressure) + " hPa");

  float dht22Temperature = dht22.readTemperature(); // Read temperature from DHT22
  Serial.println("DHT22 Temperature : " + String(dht22Temperature) + "C");
  float dht22Humidity = dht22.readHumidity(); // Read pressure from DHT22
  Serial.println("DHT22 Humidity : " + String(dht22Humidity) + "%");

  float ds18b20Temperature = ds18b20.readTemperature();
  Serial.println("DS18B20 Temperature : " + String(ds18b20Temperature) + "C");

  float temt6000Luminosity = temt6000.readLuminosity();
  Serial.println("TEMT6000 Luminosity : " + String(temt6000Luminosity));
}

/********************************************************
** Setup + loop end here                               **
********************************************************/
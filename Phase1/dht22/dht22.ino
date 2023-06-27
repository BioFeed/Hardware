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

https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/
Note DHTPIN 4 -> 2
*/

/********************************************************
** Create DHT22 sensor objects                         **
********************************************************/
#include "DHT.h"
#define DHTPIN 2     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT22   // DHT 22  (AM2302), AM2321
DHT dht(DHTPIN, DHTTYPE);

/********************************************************
** Functions used in this program                      **
********************************************************/
void setup_dht22();
float readHumidity();
float readTemperature();

/********************************************************
** Setup + loop start here                             **
********************************************************/

void setup() {
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));
  setup_dht22();
}

void loop() {
  float h = readHumidity();
  float t = readTemperature();

  Serial.println("Humidity: " + String(h) + "%");
  Serial.println("Temperature: " + String(t) + "°C");
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Setup DHT22 sensor                                  **
********************************************************/
void setup_dht22() {
  dht.begin();
}

/********************************************************
** Read DHT22 humidity                                 **
********************************************************/
float readHumidity() { 
  float humidity = dht.readHumidity();
  if (isnan(humidity)) {
    Serial.println(F("Failed to read humidity from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return humidity;
}

/********************************************************
** Read DHT22 temperature                              **
********************************************************/
float readTemperature() {
  float temperature = dht.readTemperature();
  if (isnan(temperature)) {
    Serial.println(F("Failed to read temperature from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return temperature;
}
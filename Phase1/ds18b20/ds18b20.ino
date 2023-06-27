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

https://randomnerdtutorials.com/esp32-ds18b20-temperature-arduino-ide/
*/

#include <OneWire.h>
#include <DallasTemperature.h>

/********************************************************
** Create DS18B20 sensor objects                       **
********************************************************/
const int oneWireBus = 4; // GPIO where the DS18B20 is connected to
OneWire oneWire(oneWireBus); // Setup a oneWire instance to communicate with any OneWire devices
DallasTemperature sensors(&oneWire); // Pass our oneWire reference to Dallas Temperature sensor

/********************************************************
** Functions used in this program                      **
********************************************************/
void setup_ds18b20();
float readTemperature();

/********************************************************
** Setup + loop start here                             **
********************************************************/
void setup() {
  // Start the Serial Monitor
  Serial.begin(9600);
}

void loop() {
  float temperature = readTemperature();
  Serial.println("Temperature : " + String(temperature) + "ºC");
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Setup DS18B20 sensor                                **
********************************************************/
void setup_ds18b20() {
  sensors.begin();
}

/********************************************************
** Read DS18B20 temperature                            **
********************************************************/
float readTemperature() {
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);
  delay(5000);
  return temperature;
}
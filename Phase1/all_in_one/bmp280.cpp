// https://randomnerdtutorials.com/esp32-bme280-arduino-ide-pressure-temperature-humidity/

/***************************************************************************
Using sensor events instead of direct readings
SPI protocol
Board : esp32 dev module
 ***************************************************************************/

#include "bmp280.h"

BMP280_SENSOR::BMP280_SENSOR() {
// Nothing to do here
}

void BMP280_SENSOR::setup() {
  Serial.println("Setting up BMP280 sensor");
  unsigned status;
  status = bmp.begin(0x76, 0x58); // 0x76 is the I2C address, 0x58 is the Chip-ID
  if (!status) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring or try a different address!"));
    Serial.print("SensorID was: 0x");
    Serial.println(bmp.sensorID(), 16);
    while (1)
      delay(10);
  }

  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */

  bmp_temp = bmp.getTemperatureSensor(); // Initialize bmp_temp with temperature sensor object
  bmp_pressure = bmp.getPressureSensor(); // Initialize bmp_pressure with pressure sensor object
}

float BMP280_SENSOR::readTemperature() {
  Serial.println("Reading temperature from BMP280");
  sensors_event_t temp_event;
  bmp_temp->getEvent(&temp_event);
  delay(1000);
  return temp_event.temperature;
}

float BMP280_SENSOR::readPressure() {
  Serial.println("Reading pressure from BMP280");
  sensors_event_t pressure_event;
  bmp_pressure->getEvent(&pressure_event);
  delay(1000);
  return pressure_event.pressure;
}

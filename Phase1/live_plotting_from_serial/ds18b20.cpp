#include "ds18b20.h"

DS18B20_SENSOR::DS18B20_SENSOR(int oneWireBus) : oneWireBus(oneWireBus), oneWire(oneWireBus), sensors(&oneWire) {}

void DS18B20_SENSOR::setup() {
  sensors.begin();
}

float DS18B20_SENSOR::readTemperature() {
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);
  delay(5000);
  return temperature;
}

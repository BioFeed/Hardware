#include <DHT.h>
#include "dht22.h"

DHT22_SENSOR::DHT22_SENSOR(int pin) : dht(pin, DHT22) {
  dhtPin = pin;
}

void DHT22_SENSOR::setup() {
  dht.begin();
}

float DHT22_SENSOR::readTemperature() {
  float temperature = dht.readTemperature();

  if (isnan(temperature)) {
    Serial.println(F("Failed to read temperature from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return temperature;
}

float DHT22_SENSOR::readHumidity() {
  float humidity = dht.readHumidity();

  if (isnan(humidity)) {
    Serial.println(F("Failed to read humidity from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return humidity;
}

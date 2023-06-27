#include <DHT.h>
#include "dht22.h"

DHT22_SENSOR::DHT22_SENSOR(int pin) : dht(pin, DHT22) {
  dhtPin = pin;
}

void DHT22_SENSOR::setup() {
  Serial.println("Setting up DHT22 sensor");
  dht.begin();
}

float DHT22_SENSOR::readTemperature() {
  Serial.println("Reading temperature from DHT22");
  float temperature = dht.readTemperature();

  if (isnan(temperature)) {
    Serial.println(F("Failed to read temperature from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return temperature;
}

float DHT22_SENSOR::readHumidity() {
  
  Serial.println("Reading humidity from DHT22");
  float humidity = dht.readHumidity();

  if (isnan(humidity)) {
    Serial.println(F("Failed to read humidity from DHT sensor!"));
    return 0.0f;
  }
  delay(2000);
  return humidity;
}

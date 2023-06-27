#ifndef DHT22_H
#define DHT22_H

#include <DHT.h>

class DHT22_SENSOR {
public:
  DHT22_SENSOR(int pin); // Default constructor
  void setup();
  float readTemperature();
  float readHumidity();

private:
  int dhtPin;
  DHT dht;
};

#endif

#ifndef BMP280_H
#define BMP280_H

#include <Adafruit_BMP280.h>
#include <Wire.h>
#include <SPI.h>

class BMP280_SENSOR {
public:
  BMP280_SENSOR();
  void setup();
  float readTemperature();
  float readPressure();

private:
  Adafruit_BMP280 bmp;
  Adafruit_Sensor *bmp_temp;
  Adafruit_Sensor *bmp_pressure;
};

#endif

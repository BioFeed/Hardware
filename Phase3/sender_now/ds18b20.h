#ifndef DS18B20_H
#define DS18B20_H

#include <OneWire.h>
#include <DallasTemperature.h>

class DS18B20_SENSOR {
  private:
    const int oneWireBus;
    OneWire oneWire;
    DallasTemperature sensors;
  
  public:
    DS18B20_SENSOR(int oneWireBus);
    void setup();
    float readTemperature();
};

#endif

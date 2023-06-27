#ifndef TEMT6000_H
#define TEMT6000_H

#include <Arduino.h>

class TEMT6000_SENSOR {
  private:
    const int temt6000Pin;
  
  public:
    TEMT6000_SENSOR(int pin);
    float readLuminosity();
};

#endif


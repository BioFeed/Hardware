#include "temt6000.h"

TEMT6000_SENSOR::TEMT6000_SENSOR(int pin) : temt6000Pin(pin) {}

float TEMT6000_SENSOR::readLuminosity() {
  Serial.println("Reading luminosity from TEMT6000");
  float sum = 0;

  for (int i = 0; i < 500; i++) {
    sum += analogRead(temt6000Pin);
  }
  sum /= 500;

  delay(200);
  return sum;
}

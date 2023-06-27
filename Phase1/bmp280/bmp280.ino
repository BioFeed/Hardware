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

https://randomnerdtutorials.com/esp32-bme280-arduino-ide-pressure-temperature-humidity/
*/

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_BMP280.h>

/********************************************************
** Create BMP280 sensor objects                        **
********************************************************/
Adafruit_BMP280 bmp; // use I2C interface
Adafruit_Sensor *bmp_temp = bmp.getTemperatureSensor(); // Gets an Adafruit Unified Sensor object for the temp sensor component and returns Adafruit_Sensor pointer to temperature sensor
Adafruit_Sensor *bmp_pressure = bmp.getPressureSensor(); // Gets an Adafruit Unified Sensor object for the pressure sensor component and returns Adafruit_Sensor pointer to pressure sensor

/********************************************************
** Functions used in this program                      **
********************************************************/
void setup_bmp();
float read_bmp_temperature();
float read_bmp_pressure();

/********************************************************
** Setup + loop start here                             **
********************************************************/

void setup() {
  Serial.begin(9600);
  while ( !Serial ) delay(100);   // wait for native usb
  setup_bmp();
}

void loop() {
  float bmp_temperature = read_bmp_temperature();
  float bmp_pressure = read_bmp_pressure();
    
  Serial.print(F("Temperature = "));
  Serial.print(bmp_temperature);
  Serial.println(" *C");
  
  Serial.print(F("Pressure = "));
  Serial.print(bmp_pressure);
  Serial.println(" hPa");
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Setup BMP280 sensor                                 **
********************************************************/
void setup_bmp() {
  unsigned status;
  status = bmp.begin(0x76,0x58); // 0x76 is the i2c address, 0x58 is the Chip-ID
  if (!status) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring or "
                      "try a different address!"));
    Serial.print("SensorID was: 0x"); 
    Serial.println(bmp.sensorID(),16);
    while (1) delay(10);
  }

  /* Default settings from datasheet. */
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */

  // bmp_temp->printSensorDetails();
}

/********************************************************
** Read BMP280 temperature                             **
********************************************************/
float read_bmp_temperature() {
  sensors_event_t temp_event;
  bmp_temp->getEvent(&temp_event);
  delay(1000);
  return temp_event.temperature;
}

/********************************************************
** Read BMP280 pressure                                **
********************************************************/
float read_bmp_pressure() {
  sensors_event_t pressure_event;
  bmp_pressure->getEvent(&pressure_event);
  delay(1000);
  return pressure_event.pressure;
  // bmp_pressure contains float pressure in hPa 
}
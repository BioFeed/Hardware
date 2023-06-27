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

https://github.com/CraftzAdmin/esp32/blob/main/Sensors/TEMT6000/README.md
*/

int temt6000Pin = 36;

/********************************************************
** Functions used in this program                      **
********************************************************/
float readLuminosity();

/********************************************************
** Setup + loop start here                             **
********************************************************/

void setup() {
  Serial.begin(9600);
}

void loop() {
  float lumiosity = readLuminosity();
  Serial.println("Luminosity : " + String(luminosity);
}

/********************************************************
** Setup + loop end here                               **
********************************************************/

/********************************************************
** Read TEMT6000 luminosity                            **
********************************************************/
float readLuminosity() {
  float sum = 0;

  for (int i = 0; i < 500; i++) {
    sum += analogRead(temt6000Pin);
  }
  sum /= 500;
  
  delay(200);
  return luminosity;
}
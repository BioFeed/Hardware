# Phase 1

Phase 1 of development involved testing the sensors and the camera individually and proposing a library to interact with each of them.

## Important Folders

- `all_in_one` contains code to read data from all the sensors.
- `CameraLiveStream` contains example code to set up a web server on the esp32-cam and use it remotely.
- `live_plotting_from_serial` contains a Python script to display real-time data from the sensors collected via serial.

## Libraries to install

BMP280 sensor:
- Adafruit BMP280 Library by Adafruit
- Adafruit BusIO by Adafruit
- Adafruit Unified Sensor by Adafruit

DHT22:
- DHT sensor library by Adafruit
- Adafruit Unified Sensor by Adafruit

DS18B20:
- OneWire by Jim Studt, Tom Pollard, Robbin James, Glenn Trewitt, Jason Dangel, Guillermo Lovato, Paul Stoffregen, Scott Roberts
- DallasTemperature by Miles Burton

Add this URL to File->Preferences->Additional boards manager URLs and click OK: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`.

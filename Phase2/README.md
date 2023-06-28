# Phase 2

Phase 2 of development involved testing the communication between the esp32 and the esp32-cam.
The communication is done using the esp-now protocol, which allows direct and bidirectional communication between the ESP32 modules without going through a router or Wi-Fi access point.

The sensor measurements from the esp32 (sender) are sent to the esp32-cam (receiver) with a constraint: the esp32-cam must be connected to a WLAN network to relay the measurement data and images to a remote server.
This constraint requires:
- Setting up a local access point (AP) on the esp32-cam, which the esp32 connects to before sending the sensor data.
- The Wi-Fi channel used to send the sensor data via local AP must be the same as the one used by the esp32-cam to relay that data to the remote server.

Note: This channel is often either 0 or 1, but since we do not know it, the sender tries all channels from 1 to 13 until it finds one that works.

## Important Folders

- `receiver_now`: Code for the esp32 to connect to the local AP and send data to the esp32-cam identified by its MAC address.
- `sender_now`: Code for the esp32-cam to configure the local AP, connect to the WLAN network, and receive and display data in the serial.

Note: It is possible to obtain the Wi-Fi channel from the SSID. However, to configure Wi-Fi only on the esp32-cam, the esp32 will test all 13 channels to find the appropriate one and save it. This avoids reconfiguring it every time the SSID changes.

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

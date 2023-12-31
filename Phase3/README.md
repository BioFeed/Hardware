# Phase 3

Phase 3 of development involved testing the communication between the esp32-cam and the remote server via a WLAN (WiFi) network.

Sending data from the local AP (as obtained in Phase 2) to the server, along with images, is done using POST requests of type application/json, protected by the HTTPS protocol.
The images are sent in base64 format to facilitate their transmission. Since anyone can potentially send HTTPS POST requests to the server, we have added a private key to the request content to eliminate any unwanted requests.

Only the `receiver_now` folder has been modified compared to Phase 2 development.

Note: You can use `format_cert.py` to change the format of the certificate downloaded from Chrome, following the tutorial: [https://randomnerdtutorials.com/esp32-https-requests/](https://randomnerdtutorials.com/esp32-https-requests/).
Also, when the callback function is executed receiver side (after data is receivedà, the built in wifi card is not able to transmit any data and will kill any HTTP(s) requests. That is why a bool variable is used and the send requests are made in loop(). 

## Important Folders

- `receiver_now_https`: Code for the esp32-cam to configure the local AP, connect to the WLAN network, receive data using esp-now protocol, take pictures, and relay everything to the server using HTTPS requests
- `receiver_now_http`: Same as `receiver_now_https` but using HTTP requests. Only use this on a local network !
- `sender_now`: Code for the esp32 to connect to the local AP and send data to the esp32-cam identified by its MAC address.

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
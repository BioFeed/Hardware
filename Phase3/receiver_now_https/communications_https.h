#ifndef COMMUNICATIONS_HTTPS_H
#define COMMUNICATIONS__HTTPS_H

#include <esp_camera.h>
#include <HTTPClient.h>

bool connectToServerSucessful(String server_url, HTTPClient& https, WiFiClientSecure* client);
String createPhotoPayload(camera_fb_t* fb, String token);
void sendRequest(String payload, HTTPClient& https);
String createDataPayload(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, String token);

#endif

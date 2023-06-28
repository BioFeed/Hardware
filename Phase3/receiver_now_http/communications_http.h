#ifndef COMMUNICATIONS_HTTP_H
#define COMMUNICATIONS__HTTP_H

#include <esp_camera.h>
#include <esp_wifi.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino.h>
#include <base64.h>

bool connectToServerSucessful(String serverName, WiFiClient client);
String createPhotoPayload(camera_fb_t* fb, String token);
String createDataPayload(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, String token);
void sendRequest(String payload, String serverName, WiFiClient client);

#endif

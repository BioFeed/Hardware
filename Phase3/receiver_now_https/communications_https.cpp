#include "communications_https.h"
#include <base64.h>

/********************************************************
** Test HTTPS Connection To Server                     **
********************************************************/
bool connectToServerSucessful(String server_url, HTTPClient& https, WiFiClientSecure* client) {
  Serial.println("Connecting to server using url : " + server_url);
  if (https.begin(*client, server_url)) {
    Serial.println("Connected to server using HTTPS !");
    return true;
  } else {
    Serial.printf("[HTTPS] Unable to connect\n");
    return false;
  }
}

/********************************************************
** Generate image payload                              **
********************************************************/
String createPhotoPayload(camera_fb_t* fb, String token) {
  Serial.println("Creating photo payload");
  String payload = "{";
  payload += "\"token\": \"" + String(token) + "\",";
  payload += "\"image\": \"";
  String encodedImage = base64::encode(fb->buf, fb->len);
  payload += encodedImage;
  payload += "\"}";
  return payload;
}

/********************************************************
** Generate data payload                               **
********************************************************/
String createDataPayload(float temperatureDS18B20, float temperatureBMP280, float pressureBMP280, float humidityDHT22, float temperatureDHT22, float lightTEMT6000, String token) {
  Serial.println("Creating data payload");
  String payload = "{";
  payload += "\"token\": \"" + String(token) + "\",";
  payload += "\"command\": \"save\",";
  payload += "\"temperatureDS18B20\": \"" + String(temperatureDS18B20) + "\",";
  payload += "\"temperatureBMP280\": \"" + String(temperatureBMP280) + "\",";
  payload += "\"pressureBMP280\": \"" + String(pressureBMP280) + "\",";
  payload += "\"humidityDHT22\": \"" + String(humidityDHT22) + "\",";
  payload += "\"lightTEMT6000\": \"" + String(lightTEMT6000) + "\"";
  payload += "}";
  return payload;
}

/********************************************************
** Send POST HTTPS request containing payload          **
********************************************************/
void sendRequest(String payload, HTTPClient& https) {
  Serial.println("Sending payload");
  https.addHeader("Content-Type", "application/json");
  int httpCode = https.POST(payload);
  if (httpCode > 0) {
    Serial.printf("[HTTPS] POST request code: %d\n", httpCode);
    if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
      String response = https.getString();
      Serial.println("Server response : " + response);
    }
  } else {
    Serial.printf("[HTTPS] POST request failed, error: %s\n", https.errorToString(httpCode).c_str());
  }
  https.end();
}

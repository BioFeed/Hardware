#include "communications_http.h"

/********************************************************
** Test HTTPS Connection To Server                     **
********************************************************/
bool connectToServerSucessful(String serverName, int serverPort, WiFiClient client) {
  Serial.println("Connecting to server : " + serverName);
  if (client.connect(serverName.c_str(), serverPort)) {
    Serial.println("Connected to server using HTTP !");
    return true;
  } else {
    Serial.printf("Unable to connect using HTTP");
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
  payload += "\"command\": \"save\",";
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
void sendRequest(String payload, String serverName, WiFiClient client) {
  HTTPClient http;
  http.begin(client, serverName);
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(payload);

  Serial.println("HTTP request sent");
  Serial.print("HTTP Response code: ");
  Serial.println(httpResponseCode);
  http.end();
}

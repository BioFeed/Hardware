# pip3 uninstall serial -> pip3 install pyserial before running ! 

import serial
import matplotlib.pyplot as plt
import numpy as np
import time

ser = serial.Serial() 
# Serial should receive lines of this format : 
# BMP280T 0.0 BMP280P 0.0 DHT22H 0.0 DHT22T 0.0 TEMT6000 0.0 DS18B20T 0.0
# EOC
# Alternating between EOC and the line containing values

ser.baudrate = 9600
ser.port = '/dev/ttyUSB0'
ser.open()

time_data = []
BMP280T = []
BMP280P = []
DHT22H = []
DHT22T = []
TEMT6000 = []
DS18B20T = []

fig, axs = plt.subplots(6, 1, sharex=True)
lines = []

# Create separate subplots for each dataset
for i, label in enumerate(['BMP280T', 'BMP280P', 'DHT22H', 'DHT22T', 'TEMT6000', 'DS18B20T']):
    line, = axs[i].plot(time_data, [], label=label)
    lines.append(line)
    axs[i].set_ylabel(label)

# Adjust the spacing between subplots
plt.subplots_adjust(hspace=0.5)

# Add legend to the first subplot

def update_plot():
    # Update the data for each line
    lines[0].set_data(time_data, BMP280T)
    lines[1].set_data(time_data, BMP280P)
    lines[2].set_data(time_data, DHT22H)
    lines[3].set_data(time_data, DHT22T)
    lines[4].set_data(time_data, TEMT6000)
    lines[5].set_data(time_data, DS18B20T)

    # Update the x-axis limits based on the time data
    axs[0].set_xlim(min(time_data), max(time_data))

    # Update the y-axis limits for each subplot individually
    for ax, data in zip(axs, [BMP280T, BMP280P, DHT22H, DHT22T, TEMT6000, DS18B20T]):
        ax.relim()
        ax.autoscale_view()

    plt.pause(0.01)
    fig.canvas.draw()

    plt.draw()

def process(line):
    # Split the line into individual parameter-value pairs
    parts = line.split(" ")

    if line.startswith("DS18B20T"):
        # Process each parameter-value pair
        for i in range(0, len(parts), 2):
            if parts[i] == "DS18B20T":
                DS18B20T.append(float(parts[i+1]))
            elif parts[i] == "BMP280T":
                BMP280T.append(float(parts[i+1]))
            elif parts[i] == "BMP280P":
                BMP280P.append(float(parts[i+1]))
            elif parts[i] == "DHT22H":
                DHT22H.append(float(parts[i+1]))
            elif parts[i] == "DHT22T":
                DHT22T.append(float(parts[i+1]))
            elif parts[i] == "TEMT6000":
                TEMT6000.append(float(parts[i+1]))

        # Update the time data
        current_time = time.time() - start_time
        time_data.append(current_time)
        update_plot()

line = ser.readline().decode('utf-8').rstrip()
while not line.startswith("EOC"):
    line = ser.readline().decode('utf-8').rstrip()
    print(line)

start_time = time.time()

while True:
    line = ser.readline().decode('utf-8').rstrip()
    print(line)
    process(line)
    print(line)

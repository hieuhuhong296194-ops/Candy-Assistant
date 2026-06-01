// WeatherWidget.js - Widget hiển thị thời tiết nhỏ gọn

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { weatherService } from '../services/WeatherAPI';
import * as Location from 'expo-location';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const loc = await Location.getCurrentPositionAsync({});
        const weatherData = await weatherService.getCurrentWeather(
          loc.coords.latitude,
          loc.coords.longitude
        );
        setWeather(weatherData);
      } catch (error) {
        console.error('Widget Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
    const interval = setInterval(getWeather, 600000); // Cập nhật mỗi 10 phút
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#007AFF" />
      </View>
    );
  }

  if (!weather) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        {weatherService.getWeatherIcon(weather.weather[0].icon)}
      </Text>
      <View style={styles.info}>
        <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
        <Text style={styles.city}>{weather.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 32,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  temp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  city: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

export default WeatherWidget;

# 🌤️ Weather Dashboard Implementation Guide

## Tổng Quan
Thêm dashboard thời tiết tích hợp OpenWeatherMap API vào Candy Assistant.

## ✨ Tính Năng
- ✅ Lấy thời tiết hiện tại theo vị trí GPS
- ✅ Tìm kiếm thành phố
- ✅ Dự báo 5 ngày
- ✅ Widget thời tiết nhỏ gọn
- ✅ Refresh dữ liệu tự động
- ✅ Hiển thị emoji icon thời tiết

## 🚀 Setup

### 1. Lấy API Key
1. Truy cập: https://openweathermap.org/api
2. Đăng ký tài khoản miễn phí
3. Lấy API key từ tab "API keys"

### 2. Cập nhật WeatherAPI.js
```javascript
const OPENWEATHER_API_KEY = 'YOUR_ACTUAL_API_KEY';
```

### 3. Cài đặt dependencies
```bash
npm install expo-location
```

### 4. Cập nhật app.json
```json
"permissions": ["RECORD_AUDIO", "INTERNET", "ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"]
```

### 5. Tích hợp vào App.js
```javascript
import WeatherScreen from './screens/WeatherScreen';
import WeatherWidget from './components/WeatherWidget';

// Thêm vào navigation hoặc render trực tiếp
```

## 📁 File Structure
```
candy-assistant/
├── services/
│   └── WeatherAPI.js (API Service)
├── screens/
│   └── WeatherScreen.js (Dashboard chính)
├── components/
│   └── WeatherWidget.js (Widget nhỏ gọn)
├── app.json (Cập nhật permissions)
└── package.json (Thêm expo-location)
```

## 🔌 API Endpoints

### 1. Current Weather
```
GET https://api.openweathermap.org/data/2.5/weather
Params: lat, lon, appid, units=metric, lang=vi
Response: Dữ liệu thời tiết hiện tại
```

### 2. 5-Day Forecast
```
GET https://api.openweathermap.org/data/2.5/forecast
Params: lat, lon, appid, units=metric, lang=vi
Response: Dự báo 5 ngày (3 giờ/lần)
```

### 3. City Search (Geocoding)
```
GET https://api.openweathermap.org/geo/1.0/direct
Params: q=cityname, limit=5, appid
Response: Danh sách thành phố khớp
```

### 4. Reverse Geocoding
```
GET https://api.openweathermap.org/geo/1.0/reverse
Params: lat, lon, limit=1, appid
Response: Tên thành phố từ tọa độ
```

## 📊 Dữ Liệu Trả Về

### Weather Object
```javascript
{
  name: "Hanoi",
  sys: { country: "VN" },
  main: {
    temp: 28,
    feels_like: 30,
    humidity: 65,
    pressure: 1013
  },
  weather: [{
    main: "Clouds",
    description: "mây phân tán",
    icon: "03d"
  }],
  wind: { speed: 5 }
}
```

### Forecast Object
```javascript
{
  list: [
    {
      dt: 1234567890,
      main: {
        temp: 28,
        temp_max: 32,
        temp_min: 25
      },
      weather: [{ icon: "03d" }]
    },
    // ... nhiều entry hơn
  ]
}
```

## 🎨 Weather Icons
```
'01d': '☀️' - Nắng ban ngày
'01n': '🌙' - Nắng ban đêm
'02d': '⛅' - Ít mây ban ngày
'02n': '🌤️' - Ít mây ban đêm
'03d': '☁️' - Mây phân tán
'09d': '🌧️' - Mưa nhẹ
'10d': '🌦️' - Mưa vừa
'11d': '⛈️' - Bão
'13d': '❄️' - Tuyết
'50d': '🌫️' - Sương mù
```

## 📱 Quyền Hệ Thống
- `INTERNET` - Kết nối API
- `ACCESS_FINE_LOCATION` - GPS chính xác
- `ACCESS_COARSE_LOCATION` - GPS gần đúng
- `RECORD_AUDIO` - (từ Candy Assistant)

## 🧪 Testing

### Test Trên Expo Go
```bash
npm start
# Quét QR code bằng Expo Go
```

### Test Trên Android
```bash
eas build --platform android --profile preview
```

## 🐛 Troubleshooting

| Lỗi | Nguyên nhân | Giải pháp |
|-----|-----------|----------|
| "Failed to fetch weather" | API key không hợp lệ | Kiểm tra API key |
| "City not found" | Tên thành phố không đúng | Thử tìm bằng tiếng Anh |
| Vị trí không được cấp | Quyền bị từ chối | Cho phép quyền vị trí |
| API rate limit | Vượt quota miễn phí | Nâng cấp tài khoản |

## 🔄 Cập Nhật Tự Động
- Widget cập nhật mỗi 10 phút
- Pull-to-refresh để cập nhật ngay

## 🚀 Mở Rộng Tương Lai
- 🔔 Thông báo cảnh báo thời tiết
- 📊 Biểu đồ nhiệt độ theo giờ
- 🗺️ Bản đồ thời tiết
- 💾 Lưu thành phố yêu thích
- 🌙 Chế độ tối
- 📈 Biểu đồ chỉ số UV
- 💧 Thông tin độ ẩm chi tiết

## 🔑 Biến Môi Trường (Tuỳ chọn)
```javascript
// Có thể sử dụng env variables thay vì hardcode
import Constants from 'expo-constants';
const OPENWEATHER_API_KEY = Constants.manifest.extra.openweatherKey;
```

---

**Mã Nguồn**: candy-assistant-weather
**Phiên Bản**: 1.1.0
**Ngày Tạo**: 2026-06-01

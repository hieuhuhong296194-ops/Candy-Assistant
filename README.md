# 🍬 Candy Assistant - Voice Command AI App

**Mã Nguồn: candy-assistant-voice-command**

## 📱 Về Ứng Dụng

Candy Assistant là một ứng dụng trợ lý giọng nói thông minh chạy trên nền tảng React Native/Expo. Ứng dụng có khả năng nhận diện lệnh tiếng Việt offline và kết nối với AI Gemini để xử lý các truy vấn phức tạp hơn khi có kết nối internet.

## ✨ Tính Năng Chính

### Offline Mode (Offline thông minh)
- 🎙️ Nhận diện giọng nói tiếng Việt
- 📞 Gọi điện thoại
- 💬 Gửi tin nhắn SMS
- 📷 Mở camera
- 🔧 Truy cập cài đặt hệ thống (WiFi, Bluetooth, âm thanh, pin)
- 🎬 Mở ứng dụng (YouTube, Zalo, Facebook, Chrome)
- 🗺️ Chỉ đường Google Maps
- 🧮 Tính toán toán học
- ⏰ Xem giờ và ngày

### Online Mode (Gemini AI)
- 🤖 Kết nối với Google Gemini AI
- 💬 Trò chuyện tự nhiên bằng tiếng Việt
- 📝 Lịch sử cuộc trò chuyện thông minh
- 🎯 Tự động thực thi lệnh dựa trên phản hồi AI

## 🛠️ Công Nghệ Sử Dụng

```json
{
  "React Native": "0.74.0",
  "Expo": "~51.0.0",
  "React": "18.2.0",
  "Expo Speech": "~13.0.1",
  "Expo Intent Launcher": "~11.0.1",
  "Expo Linking": "~6.3.1",
  "React Native WebView": "13.8.6"
}
```

## 📋 Cấu Hình Dự Án

### package.json
- Quản lý phụ thuộc
- Scripts khởi động: `npm start`

### app.json
- Cấu hình Expo
- Quyền Android: RECORD_AUDIO, INTERNET
- Package: com.candy.assistant

### eas.json
- Cấu hình build với EAS
- Hỗ trợ build APK cho Android

## 🚀 Cách Chạy Ứng Dụng

### 1. Chuẩn bị
```bash
npm install
```

### 2. Chạy trong Expo Go
```bash
npm start
# Quét QR code bằng Expo Go app
```

### 3. Build APK
```bash
eas build --platform android --profile preview
```

## ⚙️ Cấu Hình AI Gemini

1. Mở file `App.js`
2. Tìm dòng: `const GEMINI_KEY = 'THAY_API_KEY_VÀO_ĐÂY';`
3. Thay thế bằng API key của bạn từ [Google AI Studio](https://makersuite.google.com/app/apikey)

## 📌 Hạn Chế Hiện Tại

- ⚠️ Nhận diện giọng nói phụ thuộc vào WebView Speech Recognition
- ⚠️ Cần kết nối internet để sử dụng Gemini AI
- ⚠️ Một số lệnh chỉ hoạt động trên Android

## 🔄 Trạng Thái Build

✅ **Build thành công** - Commit: `07c16795ee60c0da16f9e84241cf2600478d2e47`

### Phiên Bản Phục Hồi
- App.js: Cấu trúc chính, không có mã trùng lặp
- package.json: Tất cả phụ thuộc cần thiết
- app.json: Cấu hình Expo
- eas.json: Cấu hình build

## 📝 Ghi Chú

- Ứng dụng sử dụng Google Speech Recognition API qua WebView
- Text-to-speech được hỗ trợ bởi Expo Speech
- Tất cả lệnh hệ thống sử dụng Intent Launcher và Linking

## 👨‍💻 Tác Giả

**hieuhuhong296194-ops**

---

💡 **Mã Nguồn Đầy Đủ**: candy-assistant-voice-command

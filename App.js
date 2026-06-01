import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView, TextInput
} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('Xin chào! Em là Candy 🍬');
  const [logs, setLogs] = useState([]);

  const commands = {
    'xin chào': 'Xin chào anh! Em là Candy, sẵn sàng hỗ trợ!',
    'mấy giờ rồi': `Bây giờ là ${new Date().toLocaleTimeString('vi-VN')}`,
    'hôm nay thứ mấy': `Hôm nay là ${new Date().toLocaleDateString('vi-VN', {weekday:'long', day:'numeric', month:'long'})}`,
    'mở camera': 'Đang mở Camera...',
    'mở cài đặt': 'Đang mở Cài đặt...',
    'tăng âm lượng': 'Đang tăng âm lượng...',
    'giảm âm lượng': 'Đang giảm âm lượng...',
    'bật wifi': 'Đang bật WiFi...',
    'tắt wifi': 'Đang tắt WiFi...',
    'cảm ơn': 'Không có gì ạ! Em luôn sẵn sàng!',
    'candy ơi': 'Dạ anh gọi em ạ!',
  };

  const handleCommand = (text) => {
    if (!text.trim()) return;
    const t = text.toLowerCase();
    let found = false;
    for (const [key, val] of Object.entries(commands)) {
      if (t.includes(key)) {
        respond(val); found = true; break;
      }
    }
    if (!found) respond(`Em chưa hiểu lệnh này anh ơi: "${text}"`);
    setInput('');
  };

  const respond = (msg) => {
    setResult(msg);
    setLogs(p => [
      `${new Date().toLocaleTimeString('vi-VN')}: ${msg}`,
      ...p
    ].slice(0, 15));
    Speech.speak(msg, { language: 'vi-VN', pitch: 1.1, rate: 0.9 });
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>🍬 Candy Assistant</Text>
        <Text style={s.subtitle}>Trợ lý giọng nói tiếng Việt</Text>
      </View>

      <View style={s.resultBox}>
        <Text style={s.resultLabel}>Candy nói:</Text>
        <Text style={s.resultText}>{result}</Text>
      </View>

      <TextInput
        style={s.input}
        value={input}
        onChangeText={setInput}
        placeholder="Nhập lệnh tiếng Việt..."
        placeholderTextColor="#666"
        onSubmitEditing={() => handleCommand(input)}
        returnKeyType="send"
      />

      <TouchableOpacity
        style={s.btn}
        onPress={() => handleCommand(input)}
      >
        <Text style={s.btnText}>🍬 Gửi lệnh cho Candy</Text>
      </TouchableOpacity>

      <View style={s.hintBox}>
        <Text style={s.hintTitle}>Lệnh mẫu:</Text>
        <Text style={s.hint}>• Xin chào · Mấy giờ rồi</Text>
        <Text style={s.hint}>• Mở camera · Mở cài đặt</Text>
        <Text style={s.hint}>• Tăng âm lượng · Bật wifi</Text>
      </View>

      <ScrollView style={s.log}>
        <Text style={s.logTitle}>Nhật ký:</Text>
        {logs.map((l, i) => (
          <Text key={i} style={s.logText}>• {l}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1a0533',
    padding: 20, paddingTop: 50,
  },
  header: { alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#f9a8d4' },
  subtitle: { fontSize: 13, color: '#9d6ea0', marginTop: 4 },
  resultBox: {
    backgroundColor: '#2d1050', borderRadius: 14,
    padding: 16, marginBottom: 14, minHeight: 80,
    borderWidth: 1, borderColor: '#6b21a8',
  },
  resultLabel: { color: '#c084fc', fontSize: 11, marginBottom: 6 },
  resultText: { color: '#fff', fontSize: 16, lineHeight: 24 },
  input: {
    backgroundColor: '#2d1050', borderRadius: 12,
    padding: 14, color: '#fff', fontSize: 15,
    marginBottom: 10, borderWidth: 1, borderColor: '#6b21a8',
  },
  btn: {
    backgroundColor: '#7e22ce', borderRadius: 12,
    padding: 14, alignItems: 'center', marginBottom: 14,
    elevation: 4,
  },
  btnText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  hintBox: {
    backgroundColor: '#2d1050', borderRadius: 12,
    padding: 12, marginBottom: 14,
    borderWidth: 1, borderColor: '#3b1065',
  },
  hintTitle: { color: '#c084fc', fontSize: 12, marginBottom: 4 },
  hint: { color: '#9d6ea0', fontSize: 12, lineHeight: 20 },
  log: {
    flex: 1, backgroundColor: '#2d1050',
    borderRadius: 12, padding: 10,
  },
  logTitle: { color: '#c084fc', fontSize: 12, marginBottom: 6 },
  logText: { color: '#9d6ea0', fontSize: 12, marginBottom: 4 },
});

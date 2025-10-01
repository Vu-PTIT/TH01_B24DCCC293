import { useState } from "react";

function TextCounter() {
  const [text, setText] = useState("");

  const maxLength = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
        <p><strong>Bài 1: Bộ đếm ký tự</strong>: Tạo component TextCounter. Có một ô input để người dùng nhập văn bản. Dùng state để lưu giá trị nhập vào. Hiển thị số ký tự đã nhập ngay bên dưới. Giới hạn tối đa 100 ký tự, nếu vượt thì hiện cảnh báo màu đỏ.</p>
        <h2>Bộ đếm ký tự</h2>
        <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Nhập văn bản..."
        />
        <p>
            Số ký tự : {text.length}
        </p>
        {text.length > maxLength && (
            <p style={{ color: 'red' }}>
            Bạn đã nhập quá {maxLength} ký tự!
            </p>
        )}
    </div>
  );
}
export default TextCounter;
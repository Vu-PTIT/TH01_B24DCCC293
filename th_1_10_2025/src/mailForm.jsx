import { useState } from "react";

function FormInput({ placeholder, value, setValue, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

function MailForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !mail || !pass) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div>
      <p>
        <strong>Bài 5: Form Đăng ký</strong>: Tạo form gồm: Tên, Email, Mật khẩu.
        Kiểm tra nếu để trống trường nào thì báo lỗi. Khi bấm Đăng ký, hiển thị
        thông tin vừa nhập bên dưới.
      </p>

      <h2>Form Đăng ký</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "10px",
        }}
      >
        <FormInput placeholder="Tên" value={name} setValue={setName} />
        <FormInput
          placeholder="Email"
          value={mail}
          setValue={setMail}
          type="email"
        />
        <FormInput
          placeholder="Mật khẩu"
          value={pass}
          setValue={setPass}
          type="password"
        />
        <button onClick={handleSubmit}>Đăng ký</button>
      </div>


      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {name}</p>
          <p>Email: {mail}</p>
          <p>Mật khẩu: {pass}</p>
        </div>
      )}
    </div>
  );
}

export default MailForm;

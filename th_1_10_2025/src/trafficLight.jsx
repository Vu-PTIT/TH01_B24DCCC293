import { useState, useEffect } from "react";

function Light({ color, active }) {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        margin: "10px",
        backgroundColor: active ? color : "gray",
      }}
    ></div>
  );
}

function TrafficLight() {
  const [current, setCurrent] = useState("red");

  const lights = ["red", "green", "yellow"];

  const changeLight = () => {
    const idx = lights.indexOf(current);
    const next = lights[(idx + 1) % lights.length];
    setCurrent(next);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      changeLight();
    }, 2000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div>
        <p><strong>Bài 2: Đèn giao thông:</strong> Tạo component TrafficLight. Có 3 đèn: Đỏ, Vàng, Xanh. Thêm nút Chuyển đèn, mỗi lần bấm sẽ chuyển lần lượt: Đỏ → Xanh → Vàng → Đỏ … Cho chạy tự động 2 giây đổi 1 đèn bằng setInterval.</p>
        <h2 >Đèn giao thông</h2>
        <div>
            <Light color="red" active={current === "red"} />
            <Light color="yellow" active={current === "yellow"} />
            <Light color="green" active={current === "green"} />
        </div>
        <button onClick={changeLight}>
            Chuyển đèn
        </button>
    </div>
  );
}
export default TrafficLight;
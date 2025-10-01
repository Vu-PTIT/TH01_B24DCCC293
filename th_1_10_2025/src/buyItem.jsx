import { useState } from "react";

function ProductItem({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
} 

function BuyItem() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
        <p><strong>Bài 4: Giỏ hàng</strong>: Tạo danh sách sản phẩm (mảng object: id, name, price). Hiển thị danh sách bằng component ProductItem (dùng props). Mỗi sản phẩm có nút Thêm vào giỏ. Hiển thị tổng số sản phẩm, tổng tiền trong giỏ hàng.</p>
        <h2>
            Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
        </h2>

        {products.map((p) => (
            <ProductItem key={p.id} product={p} onAdd={handleAddToCart} />
        ))}
    </div>
  );
}

export default BuyItem;

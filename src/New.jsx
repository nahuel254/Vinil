import "./New.css";

function New() {
  const productos = [
    { id: 1, img: "/src/assets/new/portada.jpg", nombre: "Pantalón gris" },
    { id: 2, img: "/src/assets/new/dorso.jpg", nombre: "Zapatos negros" },
  ];

  return (
    <section className="shop-section">
      {/* Imagen del look completo */}
      <div className="look-container">
        <img src="/src/assets/new/persona.jpg" alt="Look completo" className="look-img" />
      </div>

      {/* Productos del look */}
      <div className="products-container">
        <h2 className="shop-title">NUEVO</h2>

        <div className="product-list">
          {productos.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.nombre} className="product-img" />
              <p>{item.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default New;
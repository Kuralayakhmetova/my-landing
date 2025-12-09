import Card from "./Card";
import Greeting from "./Greeting";
function App() {
  const products = [
    {
      id: 1,
      title: "Горный рюкзак",
      price: 18990,
      description: "Прочный рюкзак для походов",
      image:
        "https://plus.unsplash.com/premium_photo-1763187900214-6793469845e8?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Кроссовки",
      price: 24990,
      description: "Лёгкие и удобные",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      title: "Наушники",
      price: 15990,
      description: "Чистый звук и шумоподавление",
      image:
        "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Смарт-часы",
      price: 29990,
      description: "Отслеживание активности и уведомления",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Фитнес-коврик",
      price: 7990,
      description: "Удобный коврик для йоги и тренировок",
      image:
        "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dc",
    },
    {
      id: 6,
      title: "Смартфон",
      price: 49990,
      description: "Мощный и удобный смартфон",
      image:
        "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Беспроводная колонка",
      price: 21990,
      description: "Компактная колонка с мощным звуком",
      image:
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="cards-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;

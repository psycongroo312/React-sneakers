import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const array = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 12000,
    imageUrl: '/img/sneaker1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', 
    price: 12999,
    imageUrl: '/img/sneaker2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 8499,
    imageUrl: '/img/sneaker3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider', 
    price: 8999,
    imageUrl: '/img/sneaker4.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {array.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
         />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

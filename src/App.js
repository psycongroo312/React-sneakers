import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue ] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

 React.useEffect(() => {
  fetch('https://66d7100a006bfbe2e64faa98.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
 },[]); 

 const onAddToCart = (obj) => {
  setCartItems([...cartItems, obj]);
 };

 const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
 };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40"> 
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={() => console.log("Добавили в закладки")}
            onPlus={onAddToCart}
         />
          ))}   
        </div>
      </div>
    </div>
  );
}

export default App;

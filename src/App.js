
function App() {
  return (
    <div className="wrapper clear">
     <header className="d-flex justify-between align-center p-40" >
      <div className="d-flex align-center">
      <img width={40} height={40} heig alt="logo" src="/img/logo.png"/>
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} heig alt="cart" src="/img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} heig alt="User" src="/img/User.svg"/>
          </li>
        </ul>
     </header>

     <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>

      <div className="d-flex">

      <div className="card">  
        <img width={133} height={112} src="/img/sneaker1.jpg" alt="sneaker1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      <div className="card">  
        <img width={133} height={112} src="/img/sneaker2.jpg" alt="sneaker1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      <div className="card">  
        <img width={133} height={112} src="/img/sneaker3.jpg" alt="sneaker1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      <div className="card">  
        <img width={133} height={112} src="/img/sneaker4.jpg" alt="sneaker1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      <div className="card">  
        <img width={133} height={112} src="/img/sneaker5.jpg" alt="sneaker1"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>

      </div>

     </div>
    </div>
  );
}

export default App;

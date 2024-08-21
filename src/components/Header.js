function Header() {
    return (
      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} heig alt="logo" src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} heig alt="cart" src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} heig alt="User" src="/img/User.svg" />
        </li>
      </ul>
    </header>
    )
}

export default Header;
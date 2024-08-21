function Drawer() {
    return(
        <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
          </h2>

          <div className="cartItems">
            <div className="cartItem d-flex align-center p-10 mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneaker1.jpg"
                alt="sneaker1"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>

            <div className="cartItem d-flex align-center p-10 mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneaker1.jpg"
                alt="sneaker1"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>

            <div className="cartItem d-flex align-center p-10 mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneaker1.jpg"
                alt="sneaker1"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить закаказ <img src="/img/pointer.svg" alt="arrow" />
            </button>
          </div>
        </div>
        </div>
    )
}

export default Drawer;
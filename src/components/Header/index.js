import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="header-image">
      <div className="nav-bar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="trend-img"
          alt="website logo"
        />

        <button className="nav-mobile-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logo"
            className="mobile-view-button"
          />
        </button>
      </div>
      <div className="nav-larger-trend-img">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="large-trend-img"
        />
        <ul className="cont">
          <li className="home-paragraph"> Home </li>
          <li className="product-para"> Products</li>
          <li className="cart-para"> Cart</li>
          <button className="button" type="button">
            Logout
          </button>
        </ul>
      </div>
    </div>
    <ul className="mobile-list">
      <li className="mobile-home-images">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="icon"
        />
      </li>
      <li className="mobile-home-images">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt=" nav products"
          className="icon"
        />
      </li>
      <li className="mobile-home-images">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="icon"
        />
      </li>
    </ul>
  </nav>
)

export default Header

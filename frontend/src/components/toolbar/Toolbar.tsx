import './Toolbar.css';
import logo from '../../logo.svg';

const Toolbar = () => {
  return (
    <header className="toolbar" role="toolbar" aria-label="Main toolbar">
      <div className="toolbar__section toolbar__section--left">
        <img
          src={logo}
          alt="React logo"
          className="toolbar__logo"
        />
      </div>

      <div className="toolbar__section toolbar__section--center">
        <h1 className="toolbar__title">ALTEN SHOP</h1>
      </div>

      <div className="toolbar__section toolbar__section--right">
        <button className="toolbar__cart-button" aria-label="View shopping cart">
          🛒
        </button>
      </div>
    </header>
  );
};

export default Toolbar;

import { useState , useRef } from 'react';
import './App.css';
import icon from './img/schoolicon.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbar = useRef(null)

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    if ( menuOpen === false ) {
      navbar.current.style.right = '0'
    }else {
      navbar.current.style.right = '-100px'
    }
    console.log(menuOpen)
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <img src={icon} className="image" alt="iconschool" />
        </div>

        <button id="hams" onClick={handleClick}>
          <div className={`hoverham ${menuOpen ? 'active' : ''}`}>
            <div className="hambar hamfirst"></div>
            <div className="hambar hamsecond"></div>
            <div className="hambar hamthird"></div>
          </div>
        </button>

        <div className={`hamburger ${menuOpen ? 'show' : ''}`} ref={navbar}>
          <div>Teacher</div>
          <div>News</div>
          <div>About School</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default App;

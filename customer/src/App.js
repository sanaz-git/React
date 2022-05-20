import Guarantee from './components/Guarantee';
import freeShipping from './img/freeShipping.png';
import coin from './img/coin.png';
import chat from './img/chat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="guarantee">
        <Guarantee
          img={freeShipping}
          title="Free Shipping"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Guarantee
          img={coin}
          title="100% Money Back"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Guarantee
          img={chat}
          title="Online Support 24/7"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default App;

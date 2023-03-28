import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Merch from './components/Merch/Merch';
import MusicForm from './components/Musicform/MusicForm';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
    {cartIsShown && <Cart />}
    <Header onShowCart={showCartHandler} />
    <MusicForm />
    <Merch />
    <Footer />
    </>
  );
}

export default App;

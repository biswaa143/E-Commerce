import './App.css';
import Header from './components/Layout/Header';
import Merch from './components/Merch/Merch';
import MusicForm from './components/Musicform/MusicForm';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
    <Header />
    <MusicForm />
    <Merch />
    <Cart />
    <Footer />
    </>
  );
}

export default App;

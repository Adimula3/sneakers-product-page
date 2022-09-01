
import './App.css';
import Navbar from "./components/navbar";
import Product from "./pages/product";
import {useState} from "react";

function App() {
    const [productQuantity, setProductQuantity] = useState(0);
    const [cartProductQuantity, setCartProductQuantity] = useState(0);

  return (

          <div className="App">
              <Navbar
                  cartProductQuantity={cartProductQuantity}
                  setCartProductQuantity={setCartProductQuantity}
              />
              <Product
                  productQuantity={productQuantity}
                  setProductQuantity={setProductQuantity}
                  setCartProductQuantity={setCartProductQuantity}
              />
          </div>
  );
}

export default App;

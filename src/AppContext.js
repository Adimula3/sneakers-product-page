import React, {createContext, useState} from "react";


const AppContext = createContext({productQuantity: 0, setProductQuantity: null, cartProductQuantity: 0, setCartProductQuantity: null} );

 const AppProvider = (props) => {
     const [productQuantity, setProductQuantity] = useState(0);
     const [cartProductQuantity, setCartProductQuantity] = useState(0);

       return (
           <AppContext.Provider
             value={{productQuantity, setProductQuantity, cartProductQuantity, setCartProductQuantity}}
           >
               {props.children}
           </AppContext.Provider>
       );
 }
// eslint-disable-next-line import/no-anonymous-default-export
 export default {AppContext,AppProvider};


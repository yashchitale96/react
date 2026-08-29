import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToProduct, increment } from "./redux/action/productAction";
import Products from "./Products";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const handleAddToProduct = (detail) => {
    dispatch(addToProduct(detail));
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Hello</h1>
      {/* <button onClick={()=>dispatch(addToProduct({
        'name': 'Yash'
      }))}>Click</button> */}

      <button
        onClick={() =>
          handleAddToProduct({
            id: 1,
            name: "Yash",
          })
        }
      >
        Click
      </button>

      <button onClick={handleIncrement}>Increment</button>

      <Products />
    </div>
  );
};

export default App;

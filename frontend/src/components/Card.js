import React from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

let dispatch = useDispatchCart();
let data = useCart()
const [qty,setQty] = useState(1)
const [size,setSize] = useState("")

const handleAddToCart = async () => {
  await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name, price:props.finalPrince, qty:qty, size})
  console.log(data)
}
let finalPrince = qty * parseInt(options[size]);
const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://mcdn.wallpapersafari.com/medium/2/53/7tfp8U.jpg"
        className="card-img-top"
        alt="Alt Text"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is some important text.</p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          {/* <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select> */}
          <div className="d-inline h-100 fs-5">Total Price</div>
            <hr></hr>
            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

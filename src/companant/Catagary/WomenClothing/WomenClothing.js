import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Productcart from "../../Cart/ProductCart";
import "./WomenClothing.css";
import { useEffect, useState } from "react";
import Navbara from "../../unshared/Navbara";

function WomenClothing() {
  //console.log("rerendering");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
    // const [count, setCount] = useState();
  //   const [click2, setClick2] = useState(0);
  // async call.a

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((jsonResponse) => {
        //console.log("response received");
        // we are changing state of component.
        setProducts(jsonResponse);
        setError();
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  // function notifyHome(count){
  //   console.log("Home is notified");
  //   setCount(count);
  // }

  return (
    <div>
      <Navbar  />
      <Navbara />
      <div className="container mt-3">
        {error && <h2 className="mt-3">No Products to Show</h2>}
        {/* <h2>{click}</h2>
      <button
        onClick={() => {
          setClick(click + 1);
        }}>
        Click
      </button>
      <h2>{click2}</h2>
      <button
        onClick={() => {
          setClick2(click2 + 1);
        }}>
        Click 2
      </button> */}

        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col-md-3">
              <Productcart 
              item={p} 
              key={i}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WomenClothing;
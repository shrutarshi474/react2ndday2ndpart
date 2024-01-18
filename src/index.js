import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName:
      "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName:
      "https://www.eatingwell.com/thmb/PhRj8Sp6g5m-Cn9AJL2zeLi1LM4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegan-pizza-1x1-002-a224f13696b3483d8099b7ae5b494250.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName:
      "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName:
      "https://www.cookclickndevour.com/wp-content/uploads/2019/09/paneer-pizza-recipe-500x500.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName:
      "https://img1.exportersindia.com/product_images/bc-full/2023/1/11662802/paneer-tikka-pizza-1675069884-6739951.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <>
      <main>
        <h2>Our Menu</h2>
        <div>
          {numPizzas > 0 ? (
            <div>
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza}></Pizza>
              ))}
            </div>
          ) : null}
        </div>
      </main>
      {/* <div className="text-center">
        <h2 className="text-center">Our Menu</h2>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Pizza
                name="Pizza Spinac9i"
                ingredient="Tomato, mozarella, spinach,"
                photoName="https://img1.exportersindia.com/product_images/bc-full/2023/1/11662802/paneer-tikka-pizza-1675069884-6739951.jpg"
                price="10"
              ></Pizza>
            </div>
            <div class="col">
              <Pizza
                name="Pizza Spinac9i"
                ingredient="Tomato, mozarella, spinach,"
                photoName="https://img1.exportersindia.com/product_images/bc-full/2023/1/11662802/paneer-tikka-pizza-1675069884-6739951.jpg"
                price={10}
              ></Pizza>
            </div>
            <div class="col">Column</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

function Header() {
  return (
    <>
      <h1
        className="text-center"
        style={{ color: "red", fontSize: "32px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // var mssg = "open";
  // if (hour >= openHour && hour <= closeHour) {
  //   mssg = "We're currently open!";
  // } else {
  //   mssg = "Sorry we are closed..";
  // }
  return (
    <>
      {isOpen && (
        <div>
          <p>We are open until {closeHour}:00. come Visit us</p>
          <button>Order</button>
        </div>
      )}
    </>
  );
}
function Pizza(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.pizzaObj.photoName}
        className="card-img-top"
        alt={props.pizzaObj.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.pizzaObj.name}</h5>
        <p className="card-text">{props.pizzaObj.ingredient}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

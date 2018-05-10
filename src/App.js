import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CartHeader from "./components/CartHeader.js";
import CartItems from "./components/CartItems.js";
import CartTotal from "./components/CartTotal.js";
import AddItem from "./components/AddItem.js";
import CartFooter from "./components/CartFooter.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cartItemsList: []
    };
  }

  async componentDidMount() {
    const items = await fetch("http://localhost:8082/api/items");
    const products = await fetch("http://localhost:8082/api/products");
    const json_items = await items.json();
    const json_products = await products.json();
    this.setState({
      cartItemsList: json_items,
      products: json_products
    });
  }

  addItem = item => {
    const { cartItemsList } = this.state;
    this.setState({
      cartItemsList: [...cartItemsList, item]
    });
  };

  getProductFromItem = item => {
    let product = this.state.products.find(
      product => product.id === item.product_id
    );
    return product;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
          <CartItems
            cartItemsList={this.state.cartItemsList}
            getProductFromItem={this.getProductFromItem}
          />
          <CartTotal
            cartItemsList={this.state.cartItemsList}
            getProductFromItem={this.getProductFromItem}
          />
          <AddItem products={this.state.products} addItem={this.addItem} />
          <CartFooter copyright="2018" />
        </header>
      </div>
    );
  }
}

export default App;

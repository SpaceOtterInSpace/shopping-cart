import React, { Component } from "react";

class CartTotal extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  total = () => {
    const { cartItemsList } = this.props;
    return cartItemsList.reduce((sum, item) => {
      return (
        sum + item.quantity * this.props.getProductFromItem(item).priceInCents
      );
    }, 0);
  };

  render() {
    return (
      <div className="container">
        <div className="collection-item">
          <div className="row">
            <div className="col-md-12">Total Price ${this.total() / 100}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartTotal;

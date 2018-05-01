import React from "react";

function CartItems({ cartItemsList }) {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItemsList.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
}

function CartItem({ cartItem }) {
  return (
    <div className="list-group-item">
      <div className="collection-item">
        <div className="row">
          <div className="col-md-8">{cartItem.product.name}</div>
          <div className="col-md-2">${cartItem.product.priceInCents / 100}</div>
          <div className="col-md-2">{cartItem.quantity}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

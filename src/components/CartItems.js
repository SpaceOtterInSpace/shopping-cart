import React from "react";

function CartItems({ cartItemsList, getProductFromItem }) {
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
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            getProductFromItem={getProductFromItem}
          />
        ))}
      </div>
    </div>
  );
}

function CartItem({ cartItem, getProductFromItem }) {
  return (
    <div className="list-group-item">
      <div className="collection-item">
        <div className="row">
          <div className="col-md-8">{getProductFromItem(cartItem).name}</div>
          <div className="col-md-2">
            ${getProductFromItem(cartItem).priceInCents / 100}
          </div>
          <div className="col-md-2">{cartItem.quantity}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container">
          <div className="list-group">
            <div className="row">
              <label>Quantity</label>
              <input className="col-md-12" />
            </div>
            <div className="row">
              <label>Products</label>
              <select className="col-md-12 custom-select" defaultValue={0}>
                <option value={0}>Select an Option...</option>
                {this.state.products.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row">
              <div>
                <button className="btn btn-primary" type="Submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddItem;

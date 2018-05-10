import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.products };
  }

  onSubmit = e => {
    e.preventDefault();
    const { id, name, priceInCents, quantity } = this.state;
    const newProduct = {
      product: {
        id,
        name,
        priceInCents
      },
      quantity
    };
    this.props.addItem(newProduct);
  };

  handleChange = e => {
    const id = e.target.value;
    const { products } = this.props;
    const product = products.filter(element => {
      return +id === +element.id;
    });

    this.setState({
      name: product[0].name,
      priceInCents: product[0].priceInCents
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container">
          <div className="list-group">
            <div className="row">
              <label>Quantity</label>
              <input
                className="col-md-12"
                onChange={e => this.setState({ quantity: e.target.value })}
              />
            </div>
            <div className="row">
              <label>Products</label>
              <select
                className="col-md-12 custom-select"
                defaultValue={0}
                onChange={this.handleChange}
              >
                <option value={this.state.value}>Select an Option...</option>
                {this.props.products.map(product => (
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

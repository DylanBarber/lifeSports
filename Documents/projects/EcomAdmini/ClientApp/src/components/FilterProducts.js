import React from "react";
import ProductsArray from "../../../ClientApp/src/products.json";
import Product from "../components/Product";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ProductsArray,
      //not using at moment
      maxPrice: false,
      minPrice: false,
      type: "All"
    };
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    //new value
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
    const { products, maxPrice, minPrice, type } = this.state;

    console.log(products, maxPrice, minPrice, type);

    let filteredProducts = products

    // If Max Price, Remove Products that are above that Value
    //filters through product and their prices
    if(maxPrice){
        filteredProducts = filteredProducts.filter(product => product.price <= parseInt(maxPrice));
    }
    if(minPrice){
      filteredProducts = filteredProducts.filter(product => product.price <= parseInt(minPrice));
  }
  //filters through products and their types
  //skips over if "All", and compare
    if(type !== "All"){
      filteredProducts = filteredProducts.filter(product => product.type === type);
    }

    return (
      <div>
        <div className="productsPage">
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-12">
                <div className="product-header">
                  <h2>THE STASH</h2>
                  <p className="ShopMens">Shop Men's </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Price Input */}
              <div className="col-12">
                <div className="price-filter">
                  <label>Price Filter</label>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="maxPrice"
                    value={maxPrice}
                    placeholder="Maximum Price"
                    onChange={this.handleChange}
                  />
                                  <input
                    type="number"
                    className="form-control form-control-sm"
                    name="minPrice"
                    value={minPrice}
                    placeholder="Minimum Price"
                    onChange={this.handleChange}
                  />
                  
                      <h2>Filter by Type</h2>
                    <div>
                    <form>
                    {/* onChange=sets to new value */}
                      <select name="type" className="filterType" onChange={this.handleChange} as="select">
                        <option value="All">All</option>
                        <option value="t-shirt">T-SHIRTS</option>
                        <option value="hoodie">HOODIES</option>
                        <option value="jeans">JEANS</option>
                        <option value="tops">TOPS</option>
                        <option value="suit">SUITS</option>
                        <option value="skirt">SKIRTS</option>
                        <option value="shoes">SHOES</option>
                        <option value="accessories">ACCESSORIES</option>
                        <option value="skateboard">SKATEBOARDS</option>
                        <option value="snowboard">SNOWBOARDS</option>
                      </select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                  {filteredProducts.map((product, index) => {
                    return (
                      <div key={index}>
                        <div className="work" />
                        <div className="filter">
                          {/* connects with Product.js */}
                          <Product product={product} />
                        </div>
                      </div>
                      );
                    })}
                  </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Products;

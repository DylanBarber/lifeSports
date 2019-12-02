import React from 'react'
import FilterProducts from "../components/FilterProducts";
import Product from "../components/Product";

class Products extends React.Component {
    render() {
        return (
            <div>
                <FilterProducts />
                <Product />
            </div>

        )
    }
}

export default Products;
import React from './node_modules/react'
import FilterProducts from "../ClientApp/src/components/FilterProducts";
import Product from "../ClientApp/src/components/Product";

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
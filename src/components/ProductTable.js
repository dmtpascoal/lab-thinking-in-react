import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {

    render() {
        return (
          <table>
            <thead>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              {this.props.visibleProducts.map((product) => {
                return (
                  <ProductRow
                    key={product.id}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
            </tbody>
          </table>
        );
    }
}

export default ProductTable;
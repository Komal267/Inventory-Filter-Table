import React from "react";
import "./table.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly}) => {
  const rows = [];
  let lastCategory = null;
  console.log("sfhkjdshf", filterText);
  products.forEach((product) => {
    
    const matchesText = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesPrice = product.price === `${parseInt(filterText)}$`;

    if (filterText && !matchesText && !matchesPrice) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="main-head">
            <th className="head-1">Name</th>
            <th className="head-2">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;

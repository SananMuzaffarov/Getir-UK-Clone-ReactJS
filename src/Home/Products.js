import React from "react";
import productPhoto from '../Assets/product.webp';

const Product = () => {
    return(
        <div className="product">
            <img alt="productPhoto" src={productPhoto} />
            <div className="product-wrapper">
                <h4>Plenty to choose from</h4>
                <p>Want or need something? We’ve got a wide range of everyday products from the brands you love.</p>
            </div>
        </div>
    );
}
export default Product;
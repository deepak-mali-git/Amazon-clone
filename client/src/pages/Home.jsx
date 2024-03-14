import products from "../data/products";
import "./EStyle.css";

const Index = () => {


    return (
        <div className="main">
         <div className="products-grid js-products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <div className="product-image-container-home">
            <img className="product-image-home" src={product.image} alt={product.name} />
          </div>
          <div className="product-name-home limit-text-to-2-lines">{product.name}</div>
          <div className="product-rating-container">
            <img
              className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars * 10}.png`}
              alt={`Rating: ${product.rating.stars}`}
            />
            <div className="product-rating-count link-primary">{product.rating.count}</div>
          </div>
          <div className="product-price">${(product.priceCents / 100).toFixed(2)}</div>
          <div className="product-quantity-container">
            <select>
              {[...Array(10).keys()].map((option) => (
                <option key={option + 1} value={option + 1}>
                  {option + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="product-spacer"></div>
          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Added to Cart" />
            Added
          </div>
          <button
            className="add-to-cart-button  js-add-to-cart"
            data-product-id={product.id}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </div>
    );
};
export default Index;
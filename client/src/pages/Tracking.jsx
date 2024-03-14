import Header from "../Header";
import "./Tracking.css"

const Tracking = () => {
    return (
        <div>

            <Header />

             <div className="main-tracking">
      <div className="order-tracking">
        <a className="back-to-orders-link link-primary" href="orders.html"/>
          View all orders
    

        <div className="delivery-date-tracking">
          Arriving on Monday, June 13
        </div>

        <div className="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div className="product-info-tracking">
          Quantity: 1
        </div>

        <img className="product-image-tracking" src="images/products/athletic-cotton-socks-6-pairs.jpg"/>

        <div className="progress-labels-container">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Tracking;
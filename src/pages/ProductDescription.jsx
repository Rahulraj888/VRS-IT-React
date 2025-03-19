import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/productdescription.css';

function ProductDescription() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("1 Week");
  const [computedPrice, setComputedPrice] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  // Get product id (in this case, product name) from URL query parameters
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');

  // Load products from JSON and set up product details
  useEffect(() => {
    fetch('/json/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        const prod = data.find(p => p.name === productId);
        if (prod) {
          setProduct(prod);
          setMainImage(prod.image);
          // Default price based on "1 Week" period
          setComputedPrice(prod.price.toFixed(2));
          // Compute suggested products: filter by same category first
          const sameCategory = data.filter(p => p.category === prod.category && p.name !== prod.name);
          let suggested = sameCategory.slice(0, 3);
          if (suggested.length < 3) {
            const others = data.filter(p => p.name !== prod.name && !sameCategory.includes(p));
            suggested = suggested.concat(others.slice(0, 3 - suggested.length));
          }
          setSuggestedProducts(suggested);
        } else {
          alert('Product not found');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, [productId]);

  // Handle rental period changes and update computed price
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    if (product) {
      let multiplier = 1;
      if (period === "15 Days") multiplier = 1.5;
      else if (period === "1 Month") multiplier = 2;
      else if (period === "3 Months") multiplier = 5;
      const newPrice = (product.price * multiplier).toFixed(2);
      setComputedPrice(newPrice);
    }
  };

  // Handle add-to-cart button click
  const handleAddToCart = () => {
    if (!product) return;
    const cartProduct = {
      name: product.name,
      image: product.image,
      quantity: parseInt(quantity, 10),
      price: parseFloat(computedPrice),
      period: selectedPeriod
    };
    addToCart(cartProduct);
    alert("Item successfully added to cart");
  };

  // Handle thumbnail click to change main image
  const handleChangeImage = (src) => {
    setMainImage(src);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Background Image Section */}
      <section
        className="background-image-section"
        style={{ backgroundImage: product ? `url(${product.background})` : 'none' }}
      >
        <div className="overlay">
          <div className="heading">
            <h1>{product?.name}</h1>
          </div>
        </div>
      </section>

      {/* Product Rental Section */}
      <div className="container my-5">
        <div className="row">
          {/* Left Column: Product Images */}
          <div className="col-md-6">
            <img
              id="main-product-image"
              src={mainImage}
              className="img-fluid"
              alt="Product"
            />
          </div>
          {/* Right Column: Product Details */}
          <div className="col-md-6">
            <div className="product-price-range">
              <h3>
                ₹{computedPrice}{" "}
                <small>Exc GST per month + A Refundable Deposit to be added in Cart</small>
              </h3>
            </div>
            <div className="product-key-features">
              <h5>Key Features:</h5>
              <p>{`Processor: ${product.processor}, Brand: ${product.brand}`}</p>
            </div>
            <div className="rental-period">
              <h5>
                Rental Period: <span id="selected-period">{selectedPeriod}</span>
              </h5>
              <div className="btn-group" role="group">
                {["1 Week", "15 Days", "1 Month", "3 Months"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`btn btn-outline-primary rental-option ${selectedPeriod === option ? 'active' : ''}`}
                    onClick={() => handlePeriodChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="product-price">
              {/* Price already displayed above */}
            </div>
            <div className="add-to-cart">
              <input
                type="number"
                value={quantity}
                min="1"
                className="form-control quantity-input"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className="btn btn-primary mt-2" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
            <div className="product-meta">
              <p>{`Category: ${product.category}`}</p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <ol className="flex-control-nav flex-control-thumbs mt-4">
          <li>
            <img
              src={product?.image}
              className="thumb-img"
              draggable="false"
              width="100"
              height="100"
              alt="Thumbnail 1"
              onClick={() => handleChangeImage(product.image)}
            />
          </li>
          <li>
            <img
              src={product?.background}
              className="thumb-img"
              draggable="false"
              width="100"
              height="100"
              alt="Thumbnail 2"
              onClick={() => handleChangeImage(product.background)}
            />
          </li>
        </ol>
        <hr />

        {/* Related Products Section */}
        <div className="my-5">
          <h2>Related products</h2>
        </div>
        <div className="col-md-9">
          <div className="row" id="product-list">
            {suggestedProducts.map((prod, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={prod.image} className="card-img-top" alt={prod.name} />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">₹{prod.price}</p>
                    <a
                      href={`/product-description?id=${encodeURIComponent(prod.name)}`}
                      className="btn btn-primary"
                    >
                      Select Options
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

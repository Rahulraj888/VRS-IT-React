// src/pages/ProductDescription.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/productdescription.css';
import ProductHeader from '../components/productdescription/ProductHeader';
import ProductMainSection from '../components/productdescription/ProductMainSection';
import ThumbnailList from '../components/productdescription/ThumbnailList';
import RelatedProducts from '../components/productdescription/RelatedProducts';

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

  // Get product id (using product name as id) from URL query parameters
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
          // Compute suggested products: first filter same category, then fill if needed
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
      <ProductHeader product={product} />

      <ProductMainSection
        mainImage={mainImage}
        product={product}
        computedPrice={computedPrice}
        selectedPeriod={selectedPeriod}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onPeriodChange={handlePeriodChange}
        onAddToCart={handleAddToCart}
      />

      <ThumbnailList
        thumbnails={[product.image, product.background]}
        onThumbnailClick={handleChangeImage}
      />

      <hr />

      <div className="my-5">
        <h2>Related products</h2>
      </div>
      <RelatedProducts products={suggestedProducts} />
    </div>
  );
}

export default ProductDescription;

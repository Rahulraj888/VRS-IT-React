import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Dashboard.Module.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Products loaded from JSON
  const [products, setProducts] = useState([]);

  // Filter state: categories, brands, processors, and maxPrice.
  const [filters, setFilters] = useState({
    selectedCategories: [],
    selectedBrands: [],
    selectedProcessors: [],
    maxPrice: 23999, // default maximum price
  });

  // React Router search params (for query parameters)
  const [searchParams] = useSearchParams();

  // Load products from JSON once on mount
  useEffect(() => {
    fetch('../json/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error loading products:', error));
  }, []);

  // On mount, read query params and update filters
  useEffect(() => {
    const queryCategory = searchParams.get('category') || '';
    const queryBrand = searchParams.get('brand') || '';
    const queryProcessor = searchParams.get('processor') || '';
    const queryMaxPrice = searchParams.get('maxPrice') || '23999';

    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedCategories: queryCategory ? [queryCategory] : [],
      selectedBrands: queryBrand ? [queryBrand] : [],
      selectedProcessors: queryProcessor ? [queryProcessor] : [],
      maxPrice: parseInt(queryMaxPrice, 10),
    }));
  }, [searchParams]);

  // Compute filtered products based on filters state
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(product.category);
    const matchesBrand =
      filters.selectedBrands.length === 0 ||
      filters.selectedBrands.includes(product.brand);
    const matchesProcessor =
      filters.selectedProcessors.length === 0 ||
      filters.selectedProcessors.includes(product.processor);
    const matchesPrice = product.price <= filters.maxPrice;
    return matchesCategory && matchesBrand && matchesProcessor && matchesPrice;
  });

  // Handle change for checkboxes (categories, brands, processors)
  const handleCheckboxChange = (filterKey, value, checked) => {
    setFilters((prevFilters) => {
      const currentArray = prevFilters[filterKey];
      let newArray;
      if (checked) {
        newArray = [...currentArray, value];
      } else {
        newArray = currentArray.filter((item) => item !== value);
      }
      return { ...prevFilters, [filterKey]: newArray };
    });
  };

  // Handle change for the price range input
  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: newPrice,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Filters Section */}
        <div className="col-md-3">
          <h5>Filter By Price</h5>
          <input
            type="range"
            className="form-control-range"
            min="1"
            max="23999"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            id="priceRange"
          />
          <p>
            Price: ₹<span id="priceMin">1</span> - ₹<span id="priceMax">{filters.maxPrice}</span>
          </p>

          <h5>Filter By Categories</h5>
          {['Laptop', 'IPad', 'MacBook', 'Projector', 'Printer'].map((category) => (
            <div className="form-check" key={category}>
              <input
                type="checkbox"
                className="form-check-input category-filter"
                id={category.toLowerCase()}
                value={category}
                checked={filters.selectedCategories.includes(category)}
                onChange={(e) =>
                  handleCheckboxChange('selectedCategories', e.target.value, e.target.checked)
                }
              />
              <label className="form-check-label" htmlFor={category.toLowerCase()}>
                {category}
              </label>
            </div>
          ))}

          <h5>Filter By Brand</h5>
          {['Acer', 'Apple', 'Dell', 'Lenovo', 'HP', 'Sony'].map((brand) => (
            <div className="form-check" key={brand}>
              <input
                type="checkbox"
                className="form-check-input brand-filter"
                id={brand.toLowerCase()}
                value={brand}
                checked={filters.selectedBrands.includes(brand)}
                onChange={(e) =>
                  handleCheckboxChange('selectedBrands', e.target.value, e.target.checked)
                }
              />
              <label className="form-check-label" htmlFor={brand.toLowerCase()}>
                {brand}
              </label>
            </div>
          ))}

          <h5>Filter By Processor</h5>
          {['Intel', 'AMD', 'Apple Chip'].map((processor) => (
            <div className="form-check" key={processor}>
              <input
                type="checkbox"
                className="form-check-input processor-filter"
                id={processor.replace(' ', '-').toLowerCase()}
                value={processor}
                checked={filters.selectedProcessors.includes(processor)}
                onChange={(e) =>
                  handleCheckboxChange('selectedProcessors', e.target.value, e.target.checked)
                }
              />
              <label
                className="form-check-label"
                htmlFor={processor.replace(' ', '-').toLowerCase()}
              >
                {processor}
              </label>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="col-md-9">
          <div className="row" id="product-list">
            {filteredProducts.length === 0 ? (
              <div className="col-12 text-center mt-4 no-products-message">
                <div className="alert alert-warning" role="alert">
                  <i className="bi bi-exclamation-circle"></i> No products were found matching your
                  selection.
                </div>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <div className="card h-100">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">₹{product.price}</p>
                      <Link to={`/product-description?id=${encodeURIComponent(product.name)}`}
                        className="btn btn-primary">
                        Select Options
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

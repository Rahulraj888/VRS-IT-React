import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Dashboard.Module.css';
import FilterPanel from '../components/dashboard/FilterPanel';
import ProductList from '../components/dashboard/ProductList';

function Dashboard() {
  // Products loaded from JSON
  const [products, setProducts] = useState([]);

  // Filter state: categories, brands, processors, and maxPrice.
  const [filters, setFilters] = useState({
    selectedCategories: [],
    selectedBrands: [],
    selectedProcessors: [],
    maxPrice: 23999,
  });

  // React Router search params (for query parameters)
  const [searchParams] = useSearchParams();

  // Load products from JSON once on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
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
        <FilterPanel
          filters={filters}
          onPriceChange={handlePriceChange}
          onCheckboxChange={handleCheckboxChange}
        />
        <div className="col-md-9">
          <div className="row" id="product-list">
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

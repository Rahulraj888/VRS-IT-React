// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Dashboard.Module.css";
import FilterPanel from "../components/dashboard/FilterPanel";
import ProductList from "../components/dashboard/ProductList";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    selectedCategories: [],
    selectedBrands: [],
    selectedProcessors: [],
    maxPrice: 23999,
  });

  const [searchParams] = useSearchParams();

  // Fetch products from your backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // Update filters based on query parameters
  useEffect(() => {
    const queryCategory = searchParams.get("category") || "";
    const queryBrand = searchParams.get("brand") || "";
    const queryProcessor = searchParams.get("processor") || "";
    const queryMaxPrice = searchParams.get("maxPrice") || "23999";

    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedCategories: queryCategory ? [queryCategory] : [],
      selectedBrands: queryBrand ? [queryBrand] : [],
      selectedProcessors: queryProcessor ? [queryProcessor] : [],
      maxPrice: parseInt(queryMaxPrice, 10),
    }));
  }, [searchParams]);

  // Filter logic
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

  // Handlers for FilterPanel
  const handleCheckboxChange = (filterKey, value, checked) => {
    setFilters((prevFilters) => {
      const currentArray = prevFilters[filterKey];
      const newArray = checked
        ? [...currentArray, value]
        : currentArray.filter((item) => item !== value);
      return { ...prevFilters, [filterKey]: newArray };
    });
  };

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
        {/* Left Filter Panel */}
        <FilterPanel
          filters={filters}
          onPriceChange={handlePriceChange}
          onCheckboxChange={handleCheckboxChange}
        />
        <div className="col-md-9">
          {/* ProductList is responsible for arranging items */}
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

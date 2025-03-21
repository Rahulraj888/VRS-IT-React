import React from 'react';

const categories = ['Laptop', 'IPad', 'MacBook', 'Projector', 'Printer'];
const brands = ['Acer', 'Apple', 'Dell', 'Lenovo', 'HP', 'Sony'];
const processors = ['Intel', 'AMD', 'Apple Chip'];

export default function FilterPanel({ filters, onPriceChange, onCheckboxChange }) {
  return (
    <div className="col-md-3">
      <h5>Filter By Price</h5>
      <input
        type="range"
        className="form-control-range"
        min="1"
        max="23999"
        value={filters.maxPrice}
        onChange={onPriceChange}
        id="priceRange"
      />
      <p>
        Price: ₹<span id="priceMin">1</span> - ₹<span id="priceMax">{filters.maxPrice}</span>
      </p>

      <h5>Filter By Categories</h5>
      {categories.map((category) => (
        <div className="form-check" key={category}>
          <input
            type="checkbox"
            className="form-check-input category-filter"
            id={category.toLowerCase()}
            value={category}
            checked={filters.selectedCategories.includes(category)}
            onChange={(e) =>
              onCheckboxChange('selectedCategories', e.target.value, e.target.checked)
            }
          />
          <label className="form-check-label" htmlFor={category.toLowerCase()}>
            {category}
          </label>
        </div>
      ))}

      <h5>Filter By Brand</h5>
      {brands.map((brand) => (
        <div className="form-check" key={brand}>
          <input
            type="checkbox"
            className="form-check-input brand-filter"
            id={brand.toLowerCase()}
            value={brand}
            checked={filters.selectedBrands.includes(brand)}
            onChange={(e) =>
              onCheckboxChange('selectedBrands', e.target.value, e.target.checked)
            }
          />
          <label className="form-check-label" htmlFor={brand.toLowerCase()}>
            {brand}
          </label>
        </div>
      ))}

      <h5>Filter By Processor</h5>
      {processors.map((processor) => (
        <div className="form-check" key={processor}>
          <input
            type="checkbox"
            className="form-check-input processor-filter"
            id={processor.replace(' ', '-').toLowerCase()}
            value={processor}
            checked={filters.selectedProcessors.includes(processor)}
            onChange={(e) =>
              onCheckboxChange('selectedProcessors', e.target.value, e.target.checked)
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
  );
}

// components/CategoryProducts.jsx
// components/CategoryProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/CategoryProducts.css";

const CategoryProducts = ({ categoryId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            axios.get(`http://localhost:5335/api/products/category/${categoryId}`)
                .then((res) => setProducts(res.data))
                .catch((err) => console.error("Error fetching products:", err));
        }
    }, [categoryId]);

    return (
        <div className="category-products">
            <h2>Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.product_id}>
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>₹{product.price}</p>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default CategoryProducts;

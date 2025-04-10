import React, { useEffect, useState } from "react";
import axios from "axios";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/CategorySection.css";

const CategorySection = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("http://localhost:5335/categories/");
                setCategories(res.data);
                console.log("Fetched Categories:", res.data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-section">
            <h2>Shop by Category</h2>
            <div className="category-list">
                {categories.map((category) => (
                    <div
                        key={category.category_id}
                        className="category-item"
                        onClick={() => onSelectCategory(category.category_id)}
                    >
                        <img
                            src={
                                category.image_url
                                    ? category.image_url
                                    : `/images/categories/${category.name}.jpg`
                            }
                            alt={category.name}
                            className="category-image"
                        />
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;

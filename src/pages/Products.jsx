import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [retry, setRetry] = useState(0);

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);
            setError("");

            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError("Unable to load products. Please check your internet connection.");
            } finally {
                setLoading(false);
            }

        };

        fetchProducts();

    }, [retry]);

    const categories = [
        "all",
        ...new Set(products.map(product => product.category))
    ];

    const filteredProducts = products.filter(product => {

        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;

    });

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
                onRetry={() => setRetry(retry + 1)}
            />
        );
    }

    return (

        <div className="products-page">

            <h1>Our Products</h1>

            <div className="product-filters">

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    {categories.map((item) => (

                        <option key={item} value={item}>
                            {item === "all" ? "All Categories" : item}
                        </option>

                    ))}

                </select>

            </div>

            <div className="products-grid">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))

                ) : (

                    <h2 className="no-products">
                        No products found!
                    </h2>

                )}

            </div>

        </div>

    );

}

export default Products;
import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="home">

            <section className="hero">

                <div className="hero-content">

                    <h1>Welcome to ShopEase</h1>

                    <h2>Your One-Stop Online Shopping Destination</h2>

                    <p>
                        Discover amazing products at amazing prices.
                        Shop your favourites from the comfort of your home.
                    </p>

                    <Link to="/products" className="shop-btn">
                        Shop Now
                    </Link>

                </div>

            </section>

            <section className="features">

                <h2>Why Choose ShopEase?</h2>

                <div className="feature-container">

                    <div className="feature-card">
                        <h3>🚚 Fast Delivery</h3>
                        <p>Get your favourite products delivered to your doorstep.</p>
                    </div>

                    <div className="feature-card">
                        <h3>💰 Best Prices</h3>
                        <p>Enjoy great products at affordable prices.</p>
                    </div>

                    <div className="feature-card">
                        <h3>🔒 Secure Shopping</h3>
                        <p>Enjoy a simple and secure shopping experience.</p>
                    </div>

                </div>

            </section>

        </div>

    );

}

export default Home;
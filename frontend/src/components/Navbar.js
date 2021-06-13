import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const colors = ["#0bf", "#f0b", "#fb0", "#b0f"];

const Navbar = ({ click }) => {
	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};

	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<Link to="/">
					<h2>
						<span style={{ color: "#539E45" }}>M</span>
						<span style={{ color: "#C37E75" }}>E</span>
						<span style={{ color: "#71D4EC" }}>R</span>
						<span style={{ color: "#98C049" }}>N</span>
						<span> Shopping Cart</span>
					</h2>
				</Link>
			</div>

			<ul className="navbar__links">
				<li>
					<Link to="/cart" className="cart__link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart <span className="cartlogo__badge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
			<div className="hamburger__menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;

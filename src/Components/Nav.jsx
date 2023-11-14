import { Link } from "react-router-dom";
import Home from "./Pages/Home";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">SpendWise</Link>
        <button>
          <Link to="transactions/new">New Transaction</Link>
        </button>
      </nav>
    </>
  );
};

export default Nav;

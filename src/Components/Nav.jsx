import { Link } from "react-router-dom";
import Home from "./Pages/Home";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">SpendWise</Link>
        <button>New Transaction</button>
        <h1></h1>
      </nav>
    </>
  );
};

export default Nav;

import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, randomId }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} randomId={randomId} />
            <button>
                <NavLink to="/about">About</NavLink>
            </button>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
        </div>
    );
};

export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";


function Nav({ onSearch, randomId, logOut, /*noMove*/ }) {

    return (
        <div>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/favorites">
                <button>Favorites</button>
            </Link>
            <Link to="/">
                <button onClick={logOut/*noMove*/}>Log Out</button>
            </Link>
            <SearchBar onSearch={onSearch} randomId={randomId} />

        </div>
    );
};

export default Nav;
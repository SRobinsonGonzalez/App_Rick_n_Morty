import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

function Nav({ onSearch, randomId, logOut, /*noMove*/ }) {

    return (
        <div className={style.navBar} >
            <Link to="/about">
                <button className={style.navButton} >About</button>
            </Link>
            <Link to="/home">
                <button className={style.navButton} >Home</button>
            </Link>
            <Link to="/favorites">
                <button className={style.navButton} >Favorites</button>
            </Link>
            <Link to="/">
                <button className={style.navButton}  onClick={logOut/*noMove*/}>Log Out</button>
            </Link>
            <SearchBar onSearch={onSearch} randomId={randomId} />

        </div>
    );
};

export default Nav;
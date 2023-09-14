import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { GiCardRandom } from 'react-icons/gi'
import { FcHome, FcLike } from 'react-icons/fc'


function Nav({ onSearch, randomId, logOut }) {

    return (
        <div className={style.navBar} >
            <div>
                <Link to="/home">
                    <button className={style.navButton} ><FcHome size="1.4rem" /></button>
                </Link>
                <Link to="/favorites">
                    <button className={style.navButton} ><FcLike size="1.4rem" /></button>
                </Link>
                <Link to="/about">
                    <button className={style.navButton} >About</button>
                </Link>
                <Link to="/">
                    <button className={style.logOut} onClick={logOut}>Log Out</button>
                </Link>
            </div>
            <div>
                <button className={style.random} onClick={randomId}>
                    <GiCardRandom className={style.giCardRandom} size="6rem" />
                </button>
            </div>
            <div className={style.search}>
                <SearchBar onSearch={onSearch} randomId={randomId} />
            </div>
        </div>
    );
};

export default Nav;
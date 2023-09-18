import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { GiCardRandom } from 'react-icons/gi'
import { FcHome } from 'react-icons/fc'
import { useSelector } from "react-redux";
import { BsHearts, BsHouseDown } from "react-icons/bs"




function Nav({ onSearch, randomId, logOut }) {

    const favorites = useSelector((state) => state.myFavorites);
    const myFavorites = favorites.length;

    return (
        <div className={style.navBar} >
            <div className={style.backgroundBar}>
                <div className={style.buttonsBar}>
                    <div className={style.home}>
                        <Link to="/home">
                            <button className={style.homeButton} >
                                <BsHouseDown size="2rem" /></button>
                        </Link>
                    </div>
                    <div className={style.favorites}>
                        <Link to="/favorites">
                            <button className={style.favoritesButton} >
                                <BsHearts size="2rem" />
                                <span className={style.notification} class="notification" >{myFavorites}</span>
                            </button>
                        </Link>
                    </div>
                    <div className={style.about}>
                        <Link to="/about">
                            <button className={style.aboutButton} >About</button>
                        </Link>
                    </div>
                    <div className={style.logOut}>
                        <Link to="/">
                            <button className={style.logOutButton} onClick={logOut}>Log Out</button>
                        </Link>
                    </div>
                </div>
            </div>
            <button className={style.random} onClick={randomId}>
                <GiCardRandom className={style.giCardRandom} size="6rem" />
            </button>
            <div className={style.backgroundBar}>
                <div className={style.navSearch}>
                    <SearchBar onSearch={onSearch} randomId={randomId} />
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
            </style>
        </div>
    );
};

export default Nav;
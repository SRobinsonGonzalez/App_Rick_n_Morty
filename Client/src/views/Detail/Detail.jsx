import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from './Detail.module.css'

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.box}>
            <div>
                <div>
                    {character.name ? (
                        <>
                            <h1>Id: {character.id}</h1>
                            <h2>Name: {character.name}</h2>
                            <h3>Status: {character.status}</h3>
                            <h3>Species: {character.species}</h3>
                            <h3>Gender: {character.gender}</h3>
                            <h3>Origin: {character.origin?.name}</h3>
                        </>
                    ) : (
                        ''
                    )}
                </div>
                <hr />
                <img className={style.image} src={character.image} alt="img" />
            </div>
            <img className={style.sticker} src="../src/assets/img/01.png" />
            <img className={style.bubble} src="../src/assets/img/18.png" />
            <div className={style.bubbleText}>
                <h2 className={style.typeWriter}>.Hahaha loser!</h2>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            </style>
        </div>

    );
};

export default Detail;
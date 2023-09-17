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
        <div>
            <div >
                {character.name ? (
                    <>
                        <h1>Id: {character.id}</h1>
                        <h2>Name: {character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin?.name}</p>
                        <img src={character.image} alt="img" />
                    </>
                ) : (
                    'This character does not exist'
                )}
            </div>
            <div className={style.stickerBox} >
                <img className={style.sticker} src="../src/assets/img/01.png" />
            </div>
        </div>

    );
};

export default Detail;
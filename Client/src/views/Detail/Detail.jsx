import { useEffect } from "react";
import style from './Detail.module.css'
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getChacarterById } from "../../redux/Actions/actions";

const Detail = ({ characterId, handleDetailClose }) => {
  const characterData = useSelector((state) => state.characterData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChacarterById(characterId));
    return () => {
      dispatch(cleanDetail());
    };
  }, []);

  const url = characterData?.episode?.map((episode) => episode.split('/'));
  const episodes = url?.map((chapter) => parseInt(chapter[chapter.length - 1]));

  const seasons = {
    seasonOne: episodes?.filter((chapter) => chapter < 12),
    seasonTwo: episodes?.filter((chapter) => chapter > 11 && chapter < 22),
    seasonThree: episodes?.filter((chapter) => chapter > 21 && chapter < 32),
    seasonFour: episodes?.filter((chapter) => chapter > 31 && chapter < 42),
    seasonFive: episodes?.filter((chapter) => chapter > 41 && chapter < 52),
  };

  return (
    <div className={style.box}>
      <div className={style.detailBox}>
        <div className={style.topInformation}>
          <img className={style.image} src={characterData?.image} alt="img" />
          <div className={style.box1}>
            <h1>Id: {characterData?.id}</h1>
            <h2>Name: {characterData?.name}</h2>
            <h3>Status: {characterData?.status}</h3>
            <h3>Species: {characterData?.species}</h3>
            <h3>Gender: {characterData?.gender}</h3>
            <h3>Origin: {characterData?.origin?.name}</h3>
          </div>
          <button className={style.closeButton} onClick={() => handleDetailClose()}>✖</button>
        </div>
        <hr />
        <div className={style.bottomInformation}>
          <h1>Episodes</h1>
          <div className={style.episodesBox}>
            {seasons?.seasonOne?.length === 0 ? null : (
              <div className={style.seasonBox}>
                <h3>Season One</h3>
                {seasons?.seasonOne?.map((episode) => (
                  <p key={episode}>{`Chapter: ${episode}`}</p>
                ))}
              </div>
            )}
            {seasons?.seasonTwo?.length === 0 ? null : (
              <div className={style.seasonBox}>
                <h3>Season Two</h3>
                {seasons?.seasonTwo?.map((episode) => (
                  <p key={episode}>{`Chapter: ${episode}`}</p>
                ))}
              </div>
            )}
            {seasons?.seasonThree?.length === 0 ? null : (
              <div className={style.seasonBox}>
                <h3>Season Three</h3>
                {seasons?.seasonThree?.map((episode) => (
                  <p key={episode}>{`Chapter: ${episode}`}</p>
                ))}
              </div>
            )}
            {seasons?.seasonFour?.length === 0 ? null : (
              <div className={style.seasonBox}>
                <h3>Season Four</h3>
                {seasons?.seasonFour?.map((episode) => (
                  <p key={episode}>{`Chapter: ${episode}`}</p>
                ))}
              </div>
            )}
            {seasons?.seasonFive?.length === 0 ? null : (
              <div className={style.seasonBox}>
                <h3>Season Five</h3>
                {seasons?.seasonFive?.map((episode) => (
                  <p key={episode}>{`Chapter: ${episode}`}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img className={style.sticker} src="../src/assets/img/01.png" />
      <img className={style.bubble} src="../src/assets/img/18.png" />
      <div className={style.bubbleText}>
        <h2 className={style.typeWriter}>It's me again, loser!</h2>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
    </div >

  );
};

export default Detail;
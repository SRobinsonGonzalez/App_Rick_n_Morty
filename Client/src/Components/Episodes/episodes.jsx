import SeasonsCarousel from "./Carousel/carousel";
import style from "./episodes.module.css";

const Episodes = () => {
  return (
    <div className={style.episodesBox}>
      <SeasonsCarousel />
    </div>
  )
};

export default Episodes;
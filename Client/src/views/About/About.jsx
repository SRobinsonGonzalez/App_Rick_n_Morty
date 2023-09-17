import style from './About.module.css'

const About = () => {
    return (
        <div className={style.generalBox}>
            <div className=''>
                <h1>About</h1>
            </div>
            <div className={style.stickerBox}>
                <img className={style.sticker} src="./src/assets/img/01.png" />
            </div>
        </div>
    )
}

export default About;
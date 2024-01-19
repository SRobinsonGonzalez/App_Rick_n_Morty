import style from './About.module.css'
import { ImTwitch } from 'react-icons/im'
import { FaXTwitter } from 'react-icons/fa6'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'
import { ImPaypal } from 'react-icons/im'

const About = () => {
  return (
    <div className={style.all}>
      <div className={style.aboutBox}>
        <img className={style.photo} src="./src/assets/img/21.jpg" />
        <div className={style.socialBar}>
          <a
            className={style.icon}
            href='https://www.linkedin.com/in/robinson-gonz%C3%A1lez-661073188/'
            target='_blank'
            rel='noopener noreferrer' ><BsLinkedin size="1.3rem" /></a>
          <a
            className={style.icon}
            href='https://github.com/SRobinsonGonzalez'
            target='_blank'
            rel='noopener noreferrer'><BsGithub size="1.3rem" /></a>
          <a
            className={style.icon}
            href='https://twitter.com/RobinsaurioHH'
            target='_blank'
            rel='noopener noreferrer'><FaXTwitter size="1.3rem" /></a>
          <a
            className={style.icon}
            href='https://www.twitch.tv/robinsauriohh'
            target='_blank'
            rel='noopener noreferrer'><ImTwitch size="1.3rem" /></a>
          <a
            className={style.icon}
            href='https://www.tiktok.com/@robinson.hh'
            target='_blank'
            rel='noopener noreferrer'><SiTiktok size="1.3rem" /></a>
          <a
            className={style.icon}
            href='https://paypal.me/RobinsonHH4?country.x=CO&locale.x=es_XC'
            target='_blank'
            rel='noopener noreferrer'><ImPaypal size="1.3rem" /></a>
        </div>
        <div className={style.box}>
          <div className={style.text1}>
            <h2 className={style.h2} >Hola que tal, mi nombre es <strong>Robinson</strong>, es un placer conocerte. Soy un apasionado <em>Desarrollador Web Full Stack</em> graduado de
              <strong>
                <u><a
                  className={style.text}
                  href='https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_COL_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwx5qoBhDyARIsAPbMagDRu6mfhXglN0P2dw0IVJaNtkdKEk1Um7VVYspFc_yEPImRhcDNlsoaAk0REALw_wcB'
                  target='_blank'
                  rel='noopener noreferrer'> Henry.</a></u>
              </strong>
              <p>Con conocimientos en lenguaje y herramientas de programación como Javascript, HTML5, CSS3, React.js, Node.js, Express junto con otras tecnologías que completan el desarrollo profesional del front y back-end.</p>
            </h2>
          </div>
          <hr />
          <div className={style.text2}>
            <h2 className={style.h3}>¿Algo sobre mí? Tengo 28 años, soy de Colombia. Nací y crecí
              👉🏻<a
                className={style.text}
                href='https://www.google.com/maps/@5.3237395,-73.4905309,3a,75y,170.28h,103.08t/data=!3m6!1e1!3m4!1ssa9hGuenn23CVfREJDMAZw!2e0!7i16384!8i8192?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'> justo aquí </a>👈🏻
              es un pueblo bonito, pero actualmente estoy viviendo en la ciudad de Bogotá, desde el 2012. <p>Si, amo el café, los videojuegos y el anime. 🎮</p>
            </h2>
            <iframe
              className={style.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308525.1503781172!2d-74.27261683854!3d4.648620627923876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e1!3m2!1ses-419!2sco!4v1694981006482!5m2!1ses-419!2sco"
              loading="lazy"
              cookiepolicy='single-host-origin'
              target='_blank'>
            </iframe>
          </div>
        </div>
      </div>
      <img className={style.sticker} src="./src/assets/img/01.png" />
      <img className={style.bubble} src="./src/assets/img/18.png" />
      <div className={style.bubbleText}>
        <h1 className={style.typeWriter}>Ayúdenme con una pequeña donación. ¡Cualquier contribución cuenta y hace que mi cafetera y yo sonriamos! ☕😊</h1>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      </style>
    </div>
  )
}

export default About;
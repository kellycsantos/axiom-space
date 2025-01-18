import style from './home.module.scss'
import mars from '../../assets/MARS.png'
import marsFull from '../../assets/full_mart.png'
export default function Home() {
    return (
        <section id={style.home}>
            <article>
                <h3>planet</h3>
                <h1>mars</h1>
                <h4>BECOME A MARTIAN</h4>
                <p>Embark on an extraordinary journey to Mars and unlock the secrets of the Red Planet's captivating landscapes and ancient mysteries</p>
             <span>
                <button>BOOK TICKET</button>
                <button>WATCH VIDEOS</button>
             </span>
            </article>
            <article>
                <picture>
                    <source srcSet={marsFull} media='(min-width:1080px)' />
                    <img src={mars} alt='mars'/>
                </picture>

            </article>
        </section>

    )
}
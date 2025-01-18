import DesertCity from '../../assets/leonardo_diffusion_astonaut.png'
import Travel from '../../assets/travel.png'
import Exploration from '../../assets/exploration.png'
import style from './services.module.scss'
export default function OurServices(){
    return(
        <section id={style.services}>
            <h2>Our Services</h2>
          
            <section>
                <article>
                    <img src={DesertCity} alt="Desert City"/>
                    <p>Desert City</p>
                </article>
                <article>
                    <img src={Exploration} alt="Exploration"/>
                    <p>Exploration</p>
                </article>
                <article>
                    <img src={Travel} alt="Travel"/>
                    <p>Travel</p>
                </article>
            </section>

            <article>
                <h3>We are reliable Travel Agency</h3>
                <p>Our team of experienced professionals is dedicated to providing you with a safe and unforgettable Mars exploration experience</p>
                <button>EXPLORE MORE</button>
            </article>
        </section>
    )
}
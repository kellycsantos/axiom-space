import style from './yourway.module.scss'
import Earth from '../../assets/terra.png'
import Mars from '../../assets/mars_planet.png'
export default function YourWay() {
    return (
        <section id={style.yourway}>
            <h2>YOUR WAY TO MARS</h2>
            <div className={style.route}>
                <div className={style.primeira}>
                    <img src={Earth} alt='Earth' />
                </div>

                <div className={style.segunda}>
                    <span>
                        <h4>30 Days</h4>
                        <p>of medical and Physiical preparation</p>
                    </span>
                    <span>
                        <h4>10 Days</h4>
                        <p>transfer to a moon</p>
                    </span>
                    <span>
                        <h4>160 Days</h4>
                        <p> spaceship flight to mars </p>
                    </span>
                </div>
                <div className={style.terceira}>
                    <span>
                        <h4>10 Days</h4>
                        <p>preparation of document and agreement</p>
                    </span>
                    <span>
                        <h4>2 Days</h4>
                        <p>transfer to a Axiom spaceship</p>
                    </span>
                    <span>
                        <h4>5 Days</h4>
                        <p> Adaptation and Medical Examination </p>
                    </span>
                </div>

                <div className={style.quarta}>
                    <img src={Mars} alt='Mars' />
                </div>
            </div>
        </section>
    )
}
import Card from "../../components/Card";
import style from './reliable.module.scss'

import iconCheap from '../../assets/solar_tag-price-outline.png'
import iconQuick from '../../assets/carbon_time.png'
import iconHealth from '../../assets/fluent-mdl2_health.png'
import iconSecure from '../../assets/bi_shield-lock.png'

const info = [
    {
        title: 'Cheap',
        description: 'Experience the wonders of Mars with our affordable tickets, ensuring a seamless and hassle-free journey of a lifetime',
        icon: iconCheap
    },
    {
        title: 'Health',
        description: 'Rest assured with our round-the-clock medical facility onboard, providing continuous care and dedicated quarantine chambers for your well-being',
        icon: iconHealth
    },
    {
        title: 'Secure',
        description: 'Uncompromising safety measures for astronauts on their Mars journey, ensuring a secure mission',
        icon: iconSecure
    },
    {
        title: 'Quick',
        description: 'Effortlessly embark on your Mars adventure with our expedited preparations, eliminating long wait times',
        icon: iconQuick
    }
]

export default function Reliable() {
    return (
        <section id={style.reliable}>
            <h2>how reliable we are</h2>
            <section>
                {
                    info.map((info, index) =>

                        <Card key={index} icon={info.icon} title={info.title} description={info.description}/>
                    )
                }

            </section>
            <button>LEARN MORE</button>
        </section>
    )
}
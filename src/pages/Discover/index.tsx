import style from './discover.module.scss'
import view1 from '../../assets/image_01.png'
import view2 from '../../assets/image_02.png'
import view3 from '../../assets/image_03.png'
export default function Discover() {
    return (
        <section id={style.discover}>
            <h2>DISCOVER THE THRILL OF SPACE TRAVEL</h2>
            <div className={style.galery}>
                <img src={view1} alt="" />
                <img src={view2} alt="" />
                <img src={view3} alt="" />
            </div>
            <p>Panoramic Views: Enjoy breathtaking views of the cosmos through large, specially designed windows, offering a glimpse into the wonders of space.</p>
            <button>EXPLORE MORE</button>
        </section>
    )
}
import style from './card.module.scss'
interface ICard{
    title: String,
    description : String,
    icon?: string
}
export default function Card({title, description, icon}: ICard) {
    return (
        <article id={style.card}>
            <img src={icon} alt='' />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}
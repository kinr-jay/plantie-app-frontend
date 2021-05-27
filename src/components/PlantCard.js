import { Link } from "react-router-dom"
const Card = (props) => {
    return (
        <Link to={`/plant/${props.name}`}>
            <div className="plantcard">
                <img src={props.img}/>
                <h2>{props.name}</h2>
                <h4>{props.type}</h4>
            </div>
        </Link>
    )
}

export default Card
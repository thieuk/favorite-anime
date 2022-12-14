import StudiosInfo from "./StudiosInfo";
import "./Information.css"

export default function Information(props)
{
    return (
       <div className="info m-auto text-amber-300">
            <div className="flex-container flex m-auto">
                <img className="w-[245px] h-[350px] shadow-xl" src={require("../images/thumbnails/" + props.img)} alt="anime cover" />
                <ul className="textShadow">
                    <li><b>Title:</b> {props.name}</li>
                    <li><b>Type:</b> {props.type}</li>
                    <li><b>Premiered:</b> {props.premiered}</li>
                    <li><b>Source:</b> {props.source}</li>
                    <li><b>Duration:</b> {props.duration}</li>
                    <li><b>Studio: </b> <StudiosInfo studio={props.studio}/></li>
                    <li><b>Genres:</b> {props.genres}</li>
                    <li><b>Producers:</b> {props.producers}</li>
                </ul>
            </div>
            <p className="textShadow"><b>Summary:</b> {props.summary}</p>
        </div>
    );
}
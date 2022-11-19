import AnimeOverlay from "./AnimeOverlay";

export default function Anime(props){
    return (
        <div className="relative m-3 p-3 w-fit h-fit text-sm text-center text-amber-200 shadow-xl rounded-xl">
            <AnimeOverlay />
            <img src={props.img} className="rounded-xl w-[155px] h-[220px] border-solid border-2 border-amber-400" alt="anime cover"/>
            <p className="textShadow break-word font-bold" id="title">{props.title}</p>
            <p className="textShadow m-0">{props.season}</p>
        </div>
    );
}
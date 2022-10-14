import AnimeOverlay from "./AnimeOverlay";

function Anime(props){
    return (
        <div className="relative m-3 p-3 w-fit h-fit text-center shadow-xl rounded-xl">
            <AnimeOverlay />
            <img src={props.img} className="rounded-xl w-40 h-55 border-solid border-2 border-white" alt="anime cover"/>
            <p className="break-word font-bold" id="title">{props.title}</p>
            <p className="m-0">{props.season}</p>
        </div>
    );
}

export default Anime;
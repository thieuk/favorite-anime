function Anime(props){
    return (
        <div className="mx-2 mt-4 px-4 w-fit h-fit text-center hover:shadow-xl rounded-xl">
            <img src={props.img} className="rounded-xl w-40 h-55 border-solid border-2 border-white" alt="anime cover"/>
            <p className="break-word font-bold" id="title">{props.title}</p>
            <p>{props.season}</p>
        </div>
    );
}

export default Anime;
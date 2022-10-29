function Information(props)
{
    return (
        <>
            <div className="m-auto w-3/4 h-fit text-amber-300">
                <div className="flex m-auto my-4 w-fit h-fit">
                    <img className="w-[245px] h-[350px] shadow-2xl" src={props.img} alt="anime cover" />
                    <div className="ml-6">
                    <p><b className="text-amber-400">Title:</b> {props.name}</p>
                        <p><b className="text-amber-400">Type:</b> {props.type}</p>
                        <p><b className="text-amber-400">Episodes:</b> {props.ep}</p>
                        <p><b className="text-amber-400">Source:</b> {props.source}</p>
                        <p><b className="text-amber-400">Studios:</b> {props.studio}</p>
                        <p><b className="text-amber-400">Demographic:</b> {props.demographic}</p>
                        <p><b className="text-amber-400">Genres:</b> {props.genres}</p>
                        <p><b className="text-amber-400">Producer:</b> {props.producer}</p>
                        <p><b className="text-amber-400">Director:</b> {props.director}</p>
                    </div>
                </div>
                <p className="m-auto max-w-4xl"><b className="text-amber-400">Synopsis:</b> {props.synopsis}</p>
            </div>
            
        </>
    );
}

export default Information;
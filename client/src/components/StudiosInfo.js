import { useEffect, useState } from 'react';
import axios from 'axios';

function showStudioInfo() {
    document.getElementById("studio-info").style.display = "flex";
}

function hideStudioInfo() {
    document.getElementById("studio-info").style.display = "none";
}

export default function StudiosInfo(props) {
    const [studio, setStudio] = useState([]);

    useEffect(() => {
        const fetchInfo = async() => {
            try {
                const res = await axios.get(`http://localhost:8800/studio/${props.studio}`);
                setStudio(res.data);
            }
            catch(err) {
                console.log(err);
            }
        };
        fetchInfo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <span className="textShadow underline underline-offset-2 cursor-pointer" onClick={showStudioInfo}>{props.studio}</span>
            <div id="studio-info" className="hidden fixed top-0 left-0 w-full h-full z-50 sheer-gray">
                <div className="relative w-[400px] md:w-[300px] h-fit m-auto bg-neutral-700 p-8 md:!p-5 rounded-2xl">
                    <img src={require("../images/icons/closeIcon.png")} alt="close icon"
                        className="!w-7 !h-7 absolute top-4 right-0 cursor-pointer sm:right-3 sm:!w-5 sm:!h-5 bg-neutral-800 hover:bg-neutral-600 rounded-full" 
                        onClick={hideStudioInfo} />
                    
                    {studio.map((info) => (
                        <>
                            <img className="!m-auto !w-[150px] !h-[150px] md:!w-[100px] md:!h-[100px] !mb-4" src={require("../images/studiosLogos/" + info.logo)} alt="studio logo" />
                            <p>Established: {info.established}</p> <br />
                            <p>Location(s): {info.location}</p> <br />
                            <p>Founder(s): {info.founder}</p>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
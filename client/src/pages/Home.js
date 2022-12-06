import Anime from '../components/Anime';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home()
{
    const [home, setHome] = useState([]);
    const [query, setQuery] = useState("");

    const inputStyle = ["rounded", "p-1", "placeholder-neutral-600", "bg-white border-solid", "border-2", "w-[50vw]",
                        "max-w-[200px]", "border-amber-400", "caret-amber-400", "focus:outline-0", "focus:text-amber-400", 
                        "focus:bg-neutral-700", "focus:placeholder-amber-300"].join(" ");

    useEffect(() => {
        const fetchInfo = async() => {
            try {
                const res = await axios.get("http://localhost:8800/");
                setHome(res.data);
            }
            catch(err) {
                console.log(err);
            }
        };
        fetchInfo();
    }, []);

    return (
        <>
            <nav className="bg-neutral-900 fixed top-0 z-50 w-full h-[50px]">
                <Link to="/"><h1 className="text-amber-400 absolute left-0 m-2">Home</h1></Link>
                <form className="absolute right-10 m-2" onSubmit={e => { e.preventDefault(); }}>
                    <input className={inputStyle} type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                </form>
                <img src={require("../images/icons/searchIcon.png")} alt="search icon" className="absolute w-[35px] h-[35px] right-0 m-2" />
            </nav>

            <main className="flex flex-wrap m-auto w-[1018px] xl:w-[815px] lg:w-[610px] md:w-[408px] sm:w-[200px]">
                {home.filter((data) => data.title.toLowerCase().includes(query)).map((info) => (
                    <Link to="/info" key={info.title} state={{title: info.title, image: info.thumbnails}} className="no-underline">
                        <Anime key={info.title} title={info.title} img={info.thumbnails} />
                    </Link>
                ))}
            </main>

            <Footer />
        </>
    );
}
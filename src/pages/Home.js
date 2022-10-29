import { animeInfo } from '../exampleInfo';
import NavBar from '../components/NavBar';
import Anime from '../components/Anime';
import { Link } from 'react-router-dom';

function Home()
{
    document.body.style.backgroundImage = "none";

    return (
        <>
        <nav>
            <NavBar />
        </nav>
        <main className="flex flex-wrap m-auto w-[1018px] xl:w-[815px] lg:w-[610px] md:w-[408px] sm:w-[200px]">
            {animeInfo.map((info) => {
                return (
                    <Link to="/info" state={{title: info.title, image: info.img}} className="no-underline">
                        <Anime key={info.title} title={info.title} img={info.img} season={info.season} />
                    </Link>
                )
            })}
        </main>
        </>
    );
}

export default Home;
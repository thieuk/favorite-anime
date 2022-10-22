import { animeInfo } from '../exampleInfo';
import NavBar from '../components/NavBar';
import Anime from '../components/Anime';
import { Link } from 'react-router-dom';

function Home()
{
    return (
        <>
        <nav>
            <NavBar />
        </nav>
        <main className="flex flex-wrap m-auto xl:w-[910px] lg:w-[680px] md:w-[460px] sm:w-[230px]">
            {animeInfo.map((info) => {
                return (
                    <Link to="/info" state={{title: info.title}} className="no-underline">
                        <Anime key={info.title} title={info.title} img={info.img} season={info.season} />
                    </Link>
                )
            })}
        </main>
        </>
    );
}

export default Home;
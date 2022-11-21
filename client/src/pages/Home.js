import HomeNav from '../components/HomeNav';
import Anime from '../components/Anime';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home()
{
    const [home, setHome] = useState([]);

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
            <HomeNav />

            <main className="flex flex-wrap m-auto w-[1018px] xl:w-[815px] lg:w-[610px] md:w-[408px] sm:w-[200px]">
                {home.map(info => (
                    <Link to="/info" state={{title: info.title, image: info.thumbnails}} className="no-underline">
                        <Anime key={info.title} title={info.title} img={info.thumbnails} />
                    </Link>
                ))}
            </main>

            <Footer />
        </>
    );
}
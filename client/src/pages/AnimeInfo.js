import Information from '../components/Information';
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AnimeInfo()
{
    const location = useLocation();
    const { title } = location.state;

    const [infomation, setInfo] = useState([]);

    useEffect(() => {
        const fetchInfo = async() => {
            try {
                const res = await axios.get(`http://localhost:8800/info/${title}`);
                setInfo(res.data);
            }
            catch(err) {
                console.log(err);
            }
        };
        fetchInfo();
    }, []);

    return (
        <div>
            <nav className="w-full fixed top-0 h-[50px] bg-neutral-900">
                <div className="w-fit">
                    <Link to="/" className>
                        <img className="w-[40px] h-[40px]" src="https://w7.pngwing.com/pngs/1020/217/png-transparent-computer-icons-arrow-button-back-angle-rectangle-photography-thumbnail.png" alt="go back icon"/>
                    </Link>
                </div>
            </nav>
            <div>
                {infomation.map((info) => (
                    <Information 
                        key={title} name={title} img={info.thumbnails} type={info.type} studio={info.studio} source={info.source} 
                        summary={info.summary} genres={info.genres} premiered={info.year_premiered} producers={info.producers}
                        duration={info.duration}
                    />
                ))}
            </div>
        </div>
    );
}
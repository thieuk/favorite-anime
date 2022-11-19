import { extraInfo } from '../exampleInfo';
import Information from '../components/Information';
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AnimeInfo()
{
    const location = useLocation();
    const { title, image } = location.state;

    return (
        <div>
            <nav className="w-full fixed top-0 h-[50px] bg-neutral-900">
                <div className="w-fit">
                    <Link to="/" className>
                        <img className="w-[40px] h-[40px]" src="https://cdn4.iconfinder.com/data/icons/controls-add-on-flat/48/Contols_-_Add_On-32-512.png" alt="go back icon"/>
                    </Link>
                </div>
            </nav>
            <div>
                {extraInfo.map((info) => {
                    return (
                        <Information 
                            key={title} name={title} img={image} type={info.type} studio={info.studio} source={info.source} 
                            summary={info.summary} genres={info.genres} premiered={info.premiered} producers={info.producers}
                            duration={info.duration}
                        />
                    );
                })}
            </div>
        </div>
    );
}
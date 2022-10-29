import { v4 as uuidv4 } from 'uuid';
import { extraInfo } from '../exampleInfo';
import Information from '../components/Information';
import { useLocation  } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AnimeInfo()
{
    const location = useLocation();
    const { title, image } = location.state;

    return (
        <div>
            <nav className="w-full h-[50px] bg-neutral-900">
                <div className="w-fit">
                    <Link to="/" className>
                        <img className="w-[40px] h=[40px]" src="https://cdn4.iconfinder.com/data/icons/controls-add-on-flat/48/Contols_-_Add_On-32-512.png" alt="go back icon"/>
                    </Link>
                </div>
            </nav>
            <div>
                {extraInfo.map((info) => {
                    return <Information key={uuidv4()} name={title} img={image} type={info.type} studio={info.studio} synopsis={info.synopsis} />;
                })}
            </div>
        </div>
    );
}

export default AnimeInfo;
import { v4 as uuidv4 } from 'uuid';
import { extraInfo } from '../exampleInfo';
import Information from '../components/Information';
import { useLocation  } from 'react-router-dom';

function AnimeInfo()
{
    const location = useLocation();
    const { title } = location.state

    return (
        extraInfo.map((info) => {
            return <Information key={uuidv4()} name={title} img={info.img} type={info.type} synopsis={info.synopsis} />;
        })
    );
}

export default AnimeInfo;
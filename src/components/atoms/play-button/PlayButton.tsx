import './PlayButton.scss';
import playbutton from '../../../assets/images/playbutton.png';

const PlayButton = () => {
    return (
        <button className='play__button'>
            <span>
                <img src={playbutton} alt="playbutton" />
            </span>
        </button>
    )
}

export default PlayButton
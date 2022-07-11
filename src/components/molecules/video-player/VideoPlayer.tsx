import PlayButton from '../../atoms/play-button/PlayButton';
import './VideoPlayer.scss';

const VideoPlayer = () => {
  return (
    <section className="video__player-box">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="video__player-button">
              <PlayButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;

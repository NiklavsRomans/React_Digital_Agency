import VideoPlayer from '../../molecules/video-player/VideoPlayer';
import './VideoSection.scss';

const VideoSection = () => {
  return (
    <section className="video__hero">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="video__text">
              <h2 className="video__text-title">
                Why Enver Is The Best Choice?
              </h2>
              <p className="video__text-para">
                Watch this one minute video so you understand why you should use
                our services!
              </p>
            </div>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

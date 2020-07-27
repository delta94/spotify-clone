import React, { useContext } from 'react';
import './card.scss';
import { CardPlay } from '../icons';
import CurrentSong from '../../context/CurrentSong';

interface Props {
  song: { _id: string; name: string; artist: string; cover: string };
}

const Card: React.FC<Props> = ({ song }) => {
  const { setCurrentSong } = useContext(CurrentSong);
  return (
    <div className="card-content">
      <div className="card-cover-container">
        <img
          className="card-cover"
          alt=""
          src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`}
        />
      </div>
      <div className="card-info-area">
        <div className="card-title-area">
          <span className="card-title" title={song.name}>
            {song.name}
          </span>
        </div>
        <div className="card-description-area" title={song.artist}>
          {song.artist}
        </div>
      </div>
      <div
        className="card-fab"
        role="button"
        tabIndex={0}
        aria-hidden="true"
        title="Play"
        onClick={() => setCurrentSong?.(song)}
      >
        <CardPlay className="card-fab-icon" />
      </div>
    </div>
  );
};

export default Card;

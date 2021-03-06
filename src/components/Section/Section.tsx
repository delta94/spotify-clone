import React from 'react';
import './Section.scss';
import Card from '../Card/Card';

interface Props {
  title: string;
  data: Array<Songs>;
}

interface Songs {
  _id: string;
  name: string;
  artist: string;
  cover: string;
}

const Section: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="section">
      <div className="section-titlebar">
        <div className="section-title">
          <span className="section-title-text">{title}</span>
        </div>
        <div className="section-titlebar-btn">
          <span className="section-titlebar-btn-text">SEE ALL</span>
        </div>
      </div>
      <div className="section-content">
        {data.map((song: Songs) => {
          // eslint-disable-next-line no-underscore-dangle
          return <Card song={song} key={song._id} />;
        })}
      </div>
    </div>
  );
};

export default Section;

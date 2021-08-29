import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const AlbumItem = ({ album }) => {
  return (
    <li key={album.id} className="album_item">
      <div className="album_item-content">
        <div>
          <img src={album.thumbnailUrl} alt={album.title} />
        </div>
        <p>
          <b>{album.title}</b>
        </p>
      </div>
    </li>
  );
};

AlbumItem.propTypes = {};

export default AlbumItem;

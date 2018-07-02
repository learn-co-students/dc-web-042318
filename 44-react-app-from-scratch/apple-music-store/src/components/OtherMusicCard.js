import React from 'react';

const OtherMusicCard = (props) => {
  return(
    <div style={{width: '15%'}}>
      <p><b>{props.music.trackName}</b></p>
      <img style={{width: '100%'}} alt={props.music.trackName} src={props.music.artworkUrl60}/>
      <p>{props.music.artistName}</p>
    </div>
  );
}

export default OtherMusicCard;

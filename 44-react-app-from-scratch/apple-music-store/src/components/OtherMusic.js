import React from 'react';
import OtherMusicCard from './OtherMusicCard'

const OtherMusic = (props) => {
  return(
    <div style={{display:'flex'}}>{props.otherMusicList.map((music) => <OtherMusicCard key={music.trackId} music={music}/>)}</div>
  );
}

export default OtherMusic;

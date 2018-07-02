import React from 'react';
import FeaturedMusicCard from './FeaturedMusicCard';

const FeaturedMusic = (props) => {
  return(
    <div style={{display:'flex'}}>{props.featuredMusicList.map((music) => <FeaturedMusicCard key={music.trackId} music={music}/>)}</div>
  );
}

export default FeaturedMusic;

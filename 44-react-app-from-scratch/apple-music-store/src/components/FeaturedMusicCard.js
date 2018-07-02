import React, {Component} from 'react';
import ReactPlayer from 'react-player'


class FeaturedMusicCard extends Component{

  constructor(props){
    super(props)
    this.state = {
      playing : false
    }
  }

  togglePlay = () => {
    this.setState({playing: !this.state.playing})
  }

  render(){
    return(
      <div style={{width: '30%'}}>
        <p><b>{this.props.music.trackName}</b></p>
        <img style={{width: '100%'}} alt={this.props.music.trackName} src={this.props.music.artworkUrl100}/>
        <p>{this.props.music.artistName}</p>
        <button onClick={this.togglePlay}>Play/Pause</button>
        <ReactPlayer url={this.props.music.previewUrl} playing={this.state.playing} width={200} height={100}/>
      </div>
    );
  }
}

export default FeaturedMusicCard;

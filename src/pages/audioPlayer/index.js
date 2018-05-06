import React, {Component} from 'react';
import ReactAplayer from 'react-aplayer';
import {connect} from 'react-redux'
import {toogleTrack, setTrack} from '../../store/actions'

class AudioPlayer extends Component {

  onPlay = () => {
    this.props.dispatch(toogleTrack(true));
  };

  onPause = () => {
    this.props.dispatch(toogleTrack(false));
  };

  onInit = ap => {
    this.ap = ap;
  };

  onEnded = () => {
    let {song, queue} = this.props;
    let index = queue.findIndex(track => track.id === song.id);
    if(index !== -1) {
      let track = queue[index+1];
      if(track) {
        this.props.dispatch(setTrack(track));
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.song && this.props.song.id !== newProps.song.id) {
      this.ap.destroy();
    }
    if(this.props.song && this.props.song.id === newProps.song.id) {
      if(newProps.playing !== this.props.playing) {
        if(newProps.playing) {
          this.ap.play();
        } else {
          this.ap.pause();
        }
      }
    }
  }


  render() {
    let {song, playing} = this.props;
    if(!song) return null;
    
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      autoplay: playing,
      audio: [
        {
          name: song.title,
          artist: song.artist,
          cover: song.artwork,
          theme: '#ebd0c2',
          url: song.url,
        }
      ]
    };

    return (
      <div className="fixedBottom">
        <ReactAplayer
          key={song.id}
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onEnded={this.onEnded}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    song: state.track.song, 
    playing: state.track.playing, 
    queue: state.queue
  })

export default connect(mapStateToProps)(AudioPlayer)
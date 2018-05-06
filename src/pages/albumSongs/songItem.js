import React, {Component} from 'react';
import PlayBtn from './playBtn'

class SongItem extends Component {

	render() {
		let {track, playing, onTrack, pushTrack, pauseTrack} = this.props;
		let className = "songItem";
		if(onTrack) className += ' selected';

		return (<div className={className} onClick={e => pushTrack(track, e)}>
						<PlayBtn playing={onTrack && playing} artwork={track.artwork} pauseTrack={pauseTrack}/>
						<span> {track.title} </span>
				</div>)
	}
}


export default SongItem;
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setTrack, toogleTrack, addQueue} from '../../store/actions'
import SongItem from './songItem'

class SongList extends Component {

	pushTrack(track, e) {
		e.stopPropagation();
		this.props.dispatch(setTrack(track));
		this.props.dispatch(addQueue(track));
	}
	
	pauseTrack(e) {
		e.stopPropagation();
		this.props.dispatch(toogleTrack(false));
	}

	render() {
		let {song, playing, songsList} = this.props;
		return (
			<div className="song-list=cont">
				{songsList.map(track => (
					<SongItem 
						key={track.id} 
						track={track}
						onTrack={song.id === track.id}
						playing={playing}
						pushTrack={this.pushTrack.bind(this)}
						pauseTrack={this.pauseTrack.bind(this)}
					/>)
				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	song: state.track.song || {},
	playing: state.track.playing
})

export default connect(mapStateToProps)(SongList);
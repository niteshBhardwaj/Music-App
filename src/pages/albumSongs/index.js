import React, {Component} from 'react';
import Api from '../../utils/apiUrl';
import {connect} from 'react-redux'
import {setTrack} from '../../store/actions'
import SongList from './songList'

class AlbumSongs extends Component {

	constructor() {
		super();
		this.state = {
			album: null,
			songsList: []
		}
	}

	playAll() {
		let {songsList} = this.state;
		if(songsList.length) {
			this.pushTrack(songsList[0]);
		}
		// add all songs to queue;
	}

	pushTrack(track) {
		this.props.dispatch(setTrack(track));
	}

	componentDidMount() {
		let {id} = this.props.match.params;
		this.getSongsList(id);
	}

	getSongsList(id) {
		fetch(Api.songs + id)
		.then(resp => resp.json())
		.then(data => {
			if(data.success) {
				this.setState({album: data.result.album, songsList: data.result.songsList})
			}
		})
	}

	render() {
		let {album, songsList} = this.state;
		if(!album) return null;
		return (
			<div className="album-page">
				<div className="center-items">
					<img alt={`${album.title}`} src={album.artwork} />
					<h2> {album.title} </h2>
					<button onClick={_ => this.playAll()} className="solid-btn"> Play All </button>
				</div>
				<SongList songsList={songsList}/>
			</div>
		)
	}
}

export default connect()(AlbumSongs);
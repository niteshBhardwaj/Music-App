import React, {Component} from 'react';
import Api from '../../utils/apiUrl';
import { Link } from 'react-router-dom'

class Home extends Component {

	constructor() {
		super()
		this.state = {
			albumList: []
		}
	}

	componentDidMount() {
		fetch(Api.albumList)
		.then((resp) => resp.json())
		.then((data) => {
			if(data.success) {
				this.setState({albumList: data.result})
			}
		})

	}

	render() {
		let {albumList} = this.state;
		return (
			<div className="column-wrap">
				<h2> Albums </h2>
				<div className="album-wrap">
					{albumList.map(album => <Link key={album.id} to={`album/${album.id}`}>
					<div className="album-cont">
						<img alt={`${album}`} src={album.artwork} />
						<p> {album.title} </p>
					</div>
					</Link>)
					}
				</div>
			</div>
		)
	}
}


export default Home
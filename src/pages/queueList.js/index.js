import React, {Component} from 'react';
import connect from 'react-redux'

class QueueList extends Component {

	render() {
		return (
			<div>
				Queue list
			</div>
		)
	}
}

export default connect()(QueueList);
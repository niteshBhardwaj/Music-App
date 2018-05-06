const responseHandler = require('../utils/responseHandler');
const {albumList, songs} = require('../data');


const albumController = function() {

	return {
		getAll(req, res) {
			return responseHandler.success(res, albumList);
		},
		songList(req, res) {
			let {params} = req;
			let {id} = params;
			let album = albumList.find(album => album.id === Number(id));
			if(!album) return responseHandler.error(res, 'invalid album!');

			let songsList = songs.filter(song => song.albumId === album.id);
			return responseHandler.success(res, {album, songsList});
		}
	}
}

module.exports = albumController();
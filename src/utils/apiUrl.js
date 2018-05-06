const apis = function(host = 'http://localhost:3001/api') {

	return {
		albumList: `${host}/albums`,
		songs: `${host}/songsByAlbum/`
	}
}



export default apis();
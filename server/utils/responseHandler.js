

exports.success = function(res, data) {
	res.json({
		success: true,
		result: data
	})
}

exports.error = function(res, msg) {
	res.json({
		success: false,
		msg
	})
}
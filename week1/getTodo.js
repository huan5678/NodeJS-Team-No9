const getTodo = (res, data) => {
	if ( data ) {
		res.write(
			JSON.stringify({
				'status': "Success",
				'data': data
			})
		)
	} else {
		res.write(
			JSON.stringify({
				'status': "Fail",
				'message': 'Cant get Data.'
			})
		)
	}

	res.end();
}

module.exports = getTodo;

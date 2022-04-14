const getTodo = (res, data, headers) => {
  if (data) {
    res.writeHead(200, headers)
		res.write(
			JSON.stringify({
				'status': "Success",
				'data': data
			})
		)
  } else {
    res.writeHead(400, headers)
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

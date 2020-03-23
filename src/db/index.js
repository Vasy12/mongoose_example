const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fe_mongoose', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, (err) => {
	if (err) {
		process.exit(1);
	} else {
		console.log('Connection success!');
	}
});

module.exports = mongoose.connection;

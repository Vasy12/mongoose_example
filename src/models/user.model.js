const mongoose = require('mongoose');
const connection = require('./../db');

const yup = require('yup');

const emailValidationSchema = yup.string().email();

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minLength: 1,
		required: true,
	},
	lastName: {
		type: String,
		minLength: 1,
		required: true,

	},
	role: {
		type: String,
		enum: ['ADMIN', 'MODERATOR', 'USER'],
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: value => emailValidationSchema.validate(value),
		},
	},
});

const User = connection.model('User', userSchema);

module.exports = User;

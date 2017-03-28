import mongoose from 'mongoose';
import config from './config';

module.exports = () => {
	let db = mongoose.connect(config.mongodb);
	//include the model files
	require('../models/account.server.model');
	require('../models/namespace.server.model');
	require('../models/transaction.server.model');
	return db;
}
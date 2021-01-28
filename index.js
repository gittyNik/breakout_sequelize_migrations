const { Sequelize } = require('sequelize');
const { User } = require('./models/user');
const { Address } = require('./models/address');
// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://dzgiogdv:ldFN96AsZnyWKFXQpGJGt1Ob0J6ZYjEC@ziggy.db.elephantsql.com:5432/dzgiogdv');

sequelize
.authenticate()
.then(data => {
	// sequelize.query('')
	console.log('Db connected')
	// User.create({
	// 	id: 3,
	// 	firstName: "Nik",
	// 	location: "Kanpur",
		// createdAt: new Date(),
		// updatedAt: new Date()
	// })
	// .then(data => console.log('Added: ', data))
	// .catch(err => console.error('Error: ', err));
	// Address.create({
	// 	userId: 3,
	// 	address: "This is a new address 2 for user 3",
	// 	createdAt: new Date(),
	// 	updatedAt: new Date()
	// })
	// .then(data => console.log('Added: ', data))
	// .catch(err => console.error('Error: ', err));
	Address.findAll()
	.then(data => data.map(dt => dt.dataValues))
	.then(data => console.log('Added: ', data))
	.catch(err => console.error('Error: ', err));
})
.catch(err => console.log('Got error: ', err));

module.exports = {
	sequelize
}
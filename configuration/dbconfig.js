var Sequelize = require('sequelize')

var sequelize = new Sequelize('dms','root', '', {
	host : 'localhost',
	dialect: 'mysql',
	logging: false

});

sequelize.authenticate()
.then(function (){
console.log('Database connected connected');
})
.catch(function(err)
{
console.log(err);
}
)

module.exports = { 
Sequelize,
sequelize
}
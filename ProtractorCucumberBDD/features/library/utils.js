var utilities = function() {	
	this.getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}; 
};
module.exports = new utilities();
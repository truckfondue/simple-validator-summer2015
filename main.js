// var phoneNumber = prompt('Please enter your 10-digit telephone number.\n xxx-xxx-xxxx');
var phoneVerification = function(str){
	if ( (str.length === 12) && (str.charAt(3) === '-') && (str.charAt(7) === '-') ){
		return true;
	}
	else {
		return false;
	}
};

// console.log(phoneVerification(phoneNumber))

// var birthDate = prompt('What\'s your Birthday? \n mm/dd/yy');
var birthDateVerification = function(str){
	if ( (str.length === 8) && (str.charAt(2) === '/') && (str.charAt(5) === '/') ) {
		return true;
	}
	else {
		return false;
	}
};

// console.log(birthDateVerification(birthDate))

// var zip = prompt('Please enter your zip: \n xxxxx or xxxxx-xxxx');
var zipValidator = function(str){
	if ( str.length === 5 && typeof(parseInt(str)) === 'number' ) {
		return true;
	}
	else if ( str.length === 10 && str.charAt(5) === '-') {
		var arr = str.split('-');
		if (typeof(parseInt(arr.join(''))) === 'number') {
			return true;
		}
	}
	else {
		return false;
	}
};

// console.log(zipValidator(zip));

// var stateAbbreviation = prompt('Please enter any states two letter abbreviation. \n All CAPS please.')
var stateAbbreviationValidator = function(str){
	if ( str.length === 2 && str.toUpperCase() === str ){
		return true;
	}
	else {
		return 'Guess it\'s time you review your elementary education?';
	}

};

// console.log(stateAbbreviationValidator(stateAbbreviation));

var maritailStatus = prompt('Are you married? \n YES, Yes, yes, NO, no');
var maritailStatusValidator = function(str){
	if ( str.toLowerCase() === 'yes') {
		return 'YES';
	}
	else if ( str.toLowerCase() === 'no') {
		return 'NO'
	}
	else {
		return 'You must be confused?';
	}
};

console.log(maritailStatusValidator(maritailStatus));


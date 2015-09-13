var emojis = {

	happy: [
		':smile:', 
		':smile_cat',
		':smiling_imp:', 
		':sunglasses:',
		':dancers:',
		':+1:',
		':v:',
		':grinning:',
		':heart_eyes:',
		':heart_eyes_cat:',
		':tada:',
	],

	sad: [
		':crying_cat_face:', 
		':-1:', 
		':imp:',
		':broken_heart:',
		':hankey:',
		':unamused:',
		':confused:',
		':pouting_cat:',
		':no_good:'
	],

	neutral: [
		':neutral_face:',
		':expressionless:',
		':cat2:',
		':cat:',
	]
} 

module.exports.getEmoji = function (mood) {
	var range = emojis[mood];

	if (!range) {
		throw new Error ('This mood is not supported');
	}

	return range[Math.floor(Math.random() * range.length)];
}
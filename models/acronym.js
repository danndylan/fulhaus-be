const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const Acronym = mongoose.Schema({
	acronym: String,
	definition: String,
}, {
    versionKey: false
});

Acronym.plugin(mongoose_fuzzy_searching, { fields: ['acronym', 'definition'] });

module.exports = mongoose.model('Acronym', Acronym);
'use strict';

var getType = require('../util/get_type');
var ValidationError = require('../error/validation_error');

module.exports = function validateString(options) {
    var value = options.value;
    var key = options.key;
    var type = getType(value);

    if (type === 'number' && ( //!
            key.indexOf('bubble-outline-width') !== -1 || //!
            key.indexOf('bubble-radius') !== -1 //!
        )) { //!
        return []; //!
    } //!

    if (type !== 'string') {
        return [new ValidationError(key, value, 'string expected, %s found', type)];
    }

    return [];
};

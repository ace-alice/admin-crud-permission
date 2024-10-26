'use strict';

var getUser = function (name) {
    return name;
};
console.log(getUser('tom'));

exports.getUser = getUser;

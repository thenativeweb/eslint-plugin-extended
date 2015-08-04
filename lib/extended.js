'use strict';

module.exports = {
  rules: {
    'consistent-err-names': require('./consistent-err-names')
  },
  rulesConfig: {
    'consistent-err-names': [ 2, 'prefix' ]
  }
};

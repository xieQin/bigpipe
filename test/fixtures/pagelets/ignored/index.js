'use strict';

var Pagelet = require('pagelet');

module.exports = Pagelet.extend({
  name: 'ignored',

  /**
   * Render the supplied template.
   *
   * @param {Function} next Continuation callback.
   * @api private
   */
  get: function get(next) {
    next(undefined, {});
  },

  /**
   * Handle incoming POST requests.
   *
   * @param {Object} body Contents of the POST.
   * @param {Array} files Array of uploaded files.
   * @param {Function} next Continuation callback.
   * @api private
   */
  post: function post(body, files, next) {
    if (!body.to) return next(new Error('A valid e-mail is required'));
    next();
  },
});

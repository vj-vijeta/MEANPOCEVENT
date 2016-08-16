
/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
  Schema    = mongoose.Schema,
  crypto    = require('crypto'),
  _   = require('lodash');

/**
 * Getter
 */
var escapeProperty = function(value) {
  return _.escape(value);
};

/**
 * Event Schema
 */

var PurchaseSchema = new Schema({
  tenant: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
    ref: 'User'
  },
  admin: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
    ref: 'User'
  },
  user: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
    ref: 'User'
  },
  event: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
    ref: 'Event'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

/**
 * Hide security sensitive fields
 *
 * @returns {*|Array|Binary|Object}
 */
PurchaseSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return obj;
};

module.exports = mongoose.model('Purchase', PurchaseSchema);
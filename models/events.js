
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

var EventSchema = new Schema({
  name: {
    type: String,
    required: true,
    get: escapeProperty
  },
  venue: {
    type: String,
    required: false,
    get: escapeProperty
  },
  description: {
    type: String,
    required: true,
    default: 'user'
  },
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
  start: {
    type: Date,
    required: true,
    default: Date.now
  },
  end: {
    type: Date,
    required: true,
    default: Date.now
  },
  price: {
    type: Number,
    required: true,
    get: escapeProperty
  }
});

/**
 * Hide security sensitive fields
 *
 * @returns {*|Array|Binary|Object}
 */
EventSchema.methods.toJSON = function() {
  var obj = this.toObject();
  return obj;
};

module.exports = mongoose.model('Event', EventSchema);
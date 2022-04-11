const { Schema, Types } = require('mongoose');
const convertDate = require ("../utils/dateFormat")

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

reactionSchema.virtual('displayDate')
.get(function () { return convertDate(this.createdAt)});

module.exports = reactionSchema;

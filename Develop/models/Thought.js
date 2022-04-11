const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { reactions } = require ('./Reaction');
const convertDate = require ("../utils/dateFormat")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
   createdAt: {
      type: Date,
      default: Date.now,
    },
    
    userName: 
    {
      type: String,
      required: true,
    },
    reactions: [ reactionSchema ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//change the date format
thoughtSchema.virtual('displayDate')
.get(function () { return convertDate(this.createdAt)});
 


thoughtSchema
.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

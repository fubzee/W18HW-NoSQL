const { Schema, model } = require('mongoose');
const { thoughtSchema } = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max_length: 20,
      trimmed: true,
    },
    email: {
      type: String,
      required: [true, "An email address is required"],
      unique: [true, "This email address is already used"],
      max_length: 50,
      validate: {
        validator: function(e1) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e1);
        }, 
        message: data => "Check email address format - invalid"
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual property `friendCount` that gets the amount of friends in the array
userSchema
.virtual('friendCount')
.get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;

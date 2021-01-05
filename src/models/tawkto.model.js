const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const messageSenderSchema = new mongoose.Schema({ type: String });
const messageSchema = new mongoose.Schema({ text: String, type: String, sender: messageSenderSchema });
const visitorSchema = new mongoose.Schema({ name: String, email: String, city: String, country: String });
const propertySchema = new mongoose.Schema({ id: String, name: String });
const requesterSchema = new mongoose.Schema({ name: String, email: String, type: String });
const ticketSchema = new mongoose.Schema({ id: String, humanId: Number, subject: String, message: String });

const tawktoSchema = mongoose.Schema(
  {
    projectId: {
      type: 'Number',
    },
    chatId: {
      type: 'String',
    },
    visitor: {
      name: {
        type: 'String',
      },
      city: {
        type: 'String',
      },
      country: {
        type: 'String',
      },
      email: {
        type: 'String',
      },
    },
    message: {
      sender: {
        type: {
          type: 'String',
        },
      },
      text: {
        type: 'String',
      },
      type: {
        type: 'String',
      },
    },
    time: {
      type: 'Date',
    },
    property: {
      id: {
        type: 'ObjectId',
      },
      name: {
        type: 'String',
      },
    },
    event: {
      type: 'String',
    },
    requester: {
      name: {
        type: 'String',
      },
      email: {
        type: 'String',
      },
      type: {
        type: 'String',
      },
    },
    ticket: {
      id: {
        type: 'String',
      },
      humanId: {
        type: 'Number',
      },
      subject: {
        type: 'String',
      },
      message: {
        type: 'String',
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tawktoSchema.plugin(toJSON);
tawktoSchema.plugin(paginate);

// tawktoSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

/**
 * @typedef TawkTo
 */
const TawkTo = mongoose.model('TawkTo', tawktoSchema, 'tawktos');

module.exports = TawkTo;

const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const webhook = catchAsync(async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send({ foo: 'bar' });
});
module.exports = {
  webhook,
};

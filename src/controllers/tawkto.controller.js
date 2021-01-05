const catchAsync = require('../utils/catchAsync');
const { tawktoService } = require('../services');
const webhook = catchAsync(async (req, res) => {
  console.log('get webhook');
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.headers);
  res.send({ foo: 'get webhook' });
});
const postwebhook = catchAsync(async (req, res) => {
  console.log('post webhook');
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.headers);
  const data = req.body;
  data.projectId = req.params.projectId;
  const newHookSaved = await tawktoService.saveHook(data);
  res.send({ foo: 'post webhook' });
});
module.exports = {
  webhook,
  postwebhook,
};

const cors = require('cors');
let whiteList = ['http://localhost:5173'];
const corsMiddleware = {
  origin: function (origin, callBack) {
    if (whiteList.indexOf(origin) !== -1) {
      callBack(null, true);
    } else {
      callBack(new Error('Not allowd by CORS'));
    }
  },
};
module.exports = cors(corsMiddleware);

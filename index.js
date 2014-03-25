
module.exports = function(poweredBy) {
  return function(req, res, next) {
    if(!poweredBy) {
      res.removeHeader('X-Powered-By');
    } else {
      res.setHeader('X-Powered-By', poweredBy);
    }
    if(next) {
      next();
    }
  };
};

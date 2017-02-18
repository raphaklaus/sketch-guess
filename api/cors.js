module.exports = function() {
  return function(req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
};

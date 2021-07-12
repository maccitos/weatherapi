const handleError = (err, res) => {
  const { statusCode = 500, message} = err;
  res.status(statusCode).jsonp({
    status: 'Error',
    statusCode,
    message,
  });
};

export default handleError;

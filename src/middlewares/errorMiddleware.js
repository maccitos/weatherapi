import handleError from '../common/helpers/error/handleError.js';

const errorMiddleware = (err, req, res, next) => {
  handleError(err, res);
};

export default errorMiddleware;

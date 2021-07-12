export default class ErrorHandlerClass extends Error {
  
    constructor(statusCode, message) {
      super();
      const defaultCode = 500;
      const defaultMessage = 'Something went wrong';
      this.statusCode = statusCode || defaultCode;
      this.message = message || defaultMessage;
    }
  }
  
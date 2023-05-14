export class ApiError extends Error {
  status: number;
  errors: object;

  constructor(status: number, message: string, errors = {}) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: object) {
    return new ApiError(400, message, errors);
  }

  static Unauthorised() {
    return new ApiError(401, 'User is not authorized');
  }

  static NotFound() {
    return new ApiError(404, 'Not found');
  }
}
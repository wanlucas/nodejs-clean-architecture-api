import { Handler } from "../../application/interfaces/http";

export default class ResponseHandler implements Handler {
  private statusCode: number;

  constructor() {
    this.statusCode = 200;
  }

  status(status: number) {
    this.statusCode = status;

    return this;
  }

  payload(payload: any) {
    return {
      status: this.statusCode,
      payload,
    };
  }
}
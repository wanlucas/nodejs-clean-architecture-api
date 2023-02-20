export interface Response {
  status: number,
  payload: any, 
}

export interface Request {
  body?: any,
  params?: any,
  query?: any,
}

export interface Handler {
  status(status: number): this,
  payload(payload: any): Response,
}

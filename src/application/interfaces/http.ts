export interface IResponse {
  status: number,
  payload: any, 
}

export interface IRequest {
  body?: any,
  params?: any,
  query?: any,
}
import axios, {AxiosInstance} from 'axios';

export class AxiosConstructor {
  public get instance(): AxiosInstance {
    return axios.create({
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export const client: AxiosInstance = new AxiosConstructor().instance;

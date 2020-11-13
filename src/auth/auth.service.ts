import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor() {}

  async getAccessToken(code: string): Promise<any> {
    const { data: jwtToken } = await axios.post(
      'https://dev-lnwkc070.eu.auth0.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: '1Cnfh5qfsETLC5pIjTSDDA1V8Joiq61p',
        client_secret:
          'mgtmfCQx4FeTsYrRe90ieqtcEt0DL-I3a_aZTOSKir6EGY5DXp2WXMS8J1230AMa',
        code: code,
        redirect_uri: 'http://localhost:3000/api/users',
      },
    );
    return jwtToken;
  }
}

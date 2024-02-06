import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_secret_key',
    });
  }

  async validate(payload: any) {
    // Since we don't have direct access to the request object in JwtStrategy,
    // we'll return the payload itself. Any necessary request-specific data
    // should be included in the payload during token creation.
    console.log('Decoded JWT Payload:', payload);
  }
}

import { CookieOptions } from '@/(shared)/lib/auth/auth-cookie/model/types';
import { JwtService } from '@/(shared)/lib/jwt';

class AuthCookieService {
  private readonly accessTokenKey = 'access_token';

  setAccessToken(token: string, options?: CookieOptions): void {
    if (!this.isBrowser()) return;
    const maxAge = JwtService.getMaxAge(token);

    if (maxAge === null) return;

    document.cookie = this.serializeCookie(this.accessTokenKey, token, {
      maxAge: maxAge,
      ...options,
    });
  }

  removeAccessToken(): void {
    if (!this.isBrowser()) return;

    document.cookie = this.serializeCookie(this.accessTokenKey, '', {
      maxAge: 0,
    });
  }

  getAccessToken(): string | null {
    if (!this.isBrowser()) return null;

    const match = document.cookie.match(
      new RegExp(`(^| )${this.accessTokenKey}=([^;]+)`),
    );

    return match?.[2] ?? null;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  private serializeCookie(
    name: string,
    value: string,
    options: CookieOptions = {},
  ): string {
    const {
      path = '/',
      maxAge,
      domain,
      secure = true,
      sameSite = 'Lax',
    } = options;

    return [
      `${name}=${value}`,
      `Path=${path}`,
      domain ? `Domain=${domain}` : '',
      typeof maxAge === 'number' ? `Max-Age=${maxAge}` : '',
      secure ? 'Secure' : '',
      sameSite ? `SameSite=${sameSite}` : '',
    ]
      .filter(Boolean)
      .join('; ');
  }
}

export const authCookieService = new AuthCookieService();

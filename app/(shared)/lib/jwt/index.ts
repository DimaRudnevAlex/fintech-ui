export interface JwtPayload {
  exp: number;
  iat: number;
  sub: string;
  user_name: string;
  typ: string;
  jti: string;
  is_admin?: boolean;
  [key: string]: string | number | boolean | undefined;
}

export class JwtService {
  static parse<T = JwtPayload>(token: string): T | Record<string, never> {
    try {
      const [, payload] = token.split('.');
      if (!payload) return {};

      return JSON.parse(this.base64UrlDecode(payload));
    } catch {
      return {};
    }
  }

  static isExpired(token: string): boolean {
    const payload = this.parse(token);
    if (typeof payload?.exp === 'undefined') return false;

    return payload.exp * 1000 < Date.now();
  }

  static getMaxAge(token: string): number | null {
    const payload = this.parse(token);
    if (!payload?.exp) return null;

    const expiresAt = payload.exp * 1000;
    const maxAgeMs = expiresAt - Date.now();

    return maxAgeMs > 0 ? Math.floor(maxAgeMs / 1000) : 0;
  }

  private static base64UrlDecode(str: string): string {
    const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');

    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));

    return new TextDecoder().decode(bytes);
  }
}

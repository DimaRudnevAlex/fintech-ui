export type CookieOptions = {
  path?: string;
  domain?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: 'Lax' | 'Strict' | 'None';
};

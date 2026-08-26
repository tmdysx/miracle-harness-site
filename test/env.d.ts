import type { D1Migration } from "cloudflare:test";

declare global {
  namespace Cloudflare {
    interface Env {
      readonly TURNSTILE_SITE_KEY: string;
      readonly TURNSTILE_SECRET: string;
      readonly TURNSTILE_HOSTNAMES: string;
      readonly IP_HASH_SALT: string;
      readonly ADMIN_API_TOKEN: string;
      readonly TEST_MIGRATIONS: D1Migration[];
    }
  }
}

export {};

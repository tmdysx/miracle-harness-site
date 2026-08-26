import { cloudflareTest, readD1Migrations } from "@cloudflare/vitest-plugin";
import { defineConfig } from "vitest/config";

const TEST_TURNSTILE_SITE_KEY = "1x00000000000000000000AA";
const TEST_TURNSTILE_SECRET = "1x0000000000000000000000000000000AA";

export default defineConfig({
  plugins: [
    cloudflareTest(async () => {
      const migrations = await readD1Migrations("./migrations");
      return {
        wrangler: { configPath: "./wrangler.jsonc" },
        miniflare: {
          bindings: {
            ENVIRONMENT: "test",
            TURNSTILE_SITE_KEY: TEST_TURNSTILE_SITE_KEY,
            TURNSTILE_SECRET: TEST_TURNSTILE_SECRET,
            TURNSTILE_HOSTNAMES: "miracleharness.com",
            IP_HASH_SALT: "test-ip-hash-salt-with-at-least-32-characters",
            ADMIN_API_TOKEN: "test-admin-api-token-with-at-least-32-characters",
            TEST_MIGRATIONS: migrations,
          },
        },
      };
    }),
  ],
  test: {
    include: ["test/**/*.test.ts"],
    setupFiles: ["./test/setup.ts"],
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  build: { format: 'directory' },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        'font-src https://fonts.gstatic.com',
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.googleapis.com'],
      },
    },
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://project.denny.li',
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
      scriptDirective: {
        hashes: ['sha256-iECsteS0kvEyJj9vEdnhAozZ6uzsYEKreLo7Trm4V4g='],
      },
    },
  },
});

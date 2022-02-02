# Remix CT8 template

Remix boilerplate for building modern web applications. As I plan to often use it, I decided to make this template.

## Remix + CT8

Remix is a full-stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff. That's Remix description from their website.

CT8 is a free hosting that you can use to host your apps and databases.

## CT8 integration

- `app.js` is the entrypoint required by CT8
- `public` directory is implicitly handled by Nginx, therefore `static` is used in place to manually config caching, etc.
- Deploying and restarting app through FTP and SSH automatically via GitHub Actions

## Other stuff

- TypeScript, I hope that doesn't need an explanation
- ESLint and Prettier for code style enforcement
- Testing pre-configured, with codecov integration
- Tailwind for styling with dark mode setup (check out `ThemeSetter` component), also PostCSS for auto-prefixing and minifying
- Storybook with essential addons for designing components in isolation
- Express used as node.js framework with strict caching configured
- GitHub Actions for CI/CD pipeline

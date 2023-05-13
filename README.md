# Onelink

> **Note**
> This project is a SvelteKit implementation of [Nuxt Onelink](https://github.com/fayazara/onelink) by [**@fayazara**](https://github.com/fayazara).

Onelink is an experimental link-in-bio tool, where the data lives in the URL.

![Screenshot](./screenshot.png)

> **Note**
> Since the URL can become very long, it's better to use a link shortener like https://dub.sh

[Here's a demo page](https://onelink-sv.vercel.app/eyJuYW1lIjoiSm9obiBTbm93IiwiZGVzY3JpcHRpb24iOiJJ4oCZbSBKb2huIFNub3csIHRoZSBraW5nIGluIHRoZSBub3J0aC4gSSBrbm93IE5vdGhpbmcuIiwiaW1hZ2UiOiJodHRwczovL2kuaW5zaWRlci5jb20vNTY3NDNmYWQ3MmYyYzEyYTAwOGI2Y2MwIiwiZmFjZWJvb2siOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vam9obl9zbm93IiwidHdpdHRlciI6Imh0dHBzOi8vdHdpdHRlci5jb20vam9obl9zbm93IiwiaW5zdGFncmFtIjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb2huX3Nub3ciLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vam9obl9zbm93IiwidGVsZWdyYW0iOiJodHRwczovL3QubWUvam9obl9zbm93IiwibGlua2VkaW4iOiJodHRwczovL2xpbmtlZGluLmNvbS9qb2huX3Nub3ciLCJlbWFpbCI6Im1haWxAam9obl9zbm93LmNjIiwid2hhdHNhcHAiOiIrOTE4ODg4ODg4ODg4IiwieW91dHViZSI6Imh0dHBzOi8veW91dHViZS5jb20vQGpvaG5fc25vdyIsImxpbmtzIjpbeyJsYWJlbCI6Ik15IFdlYnNpdGUiLCJpY29uIjoicGg6Z2xvYmUtZHVvdG9uZSIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20ifSx7ImxhYmVsIjoiQW1hem9uIHdpc2hsaXN0IiwiaWNvbiI6ImFudC1kZXNpZ246YW1hem9uLW91dGxpbmVkIiwidXJsIjoiaHR0cHM6Ly9hbWF6b24uaW4ifSx7ImxhYmVsIjoiUmVhY3QgSlMgY291cnNlIiwiaWNvbiI6Imdyb21tZXQtaWNvbnM6cmVhY3RqcyIsInVybCI6Imh0dHBzOi8vcmVhY3Rqcy5vcmcvIn0seyJsYWJlbCI6IkRvbmF0ZSBmb3Igb3VyIGNhdXNlIiwiaWNvbiI6Imljb25vaXI6ZG9uYXRlIiwidXJsIjoiaHR0cHM6Ly93aG8uaW50In0seyJsYWJlbCI6IkRvd25sb2FkIG15IHJlc3VtZSIsImljb24iOiJwaDpmaWxlLXBkZiIsInVybCI6Imh0dHBzOi8vZ29vZ2xlLmNvbSJ9XSwidGhlbWUiOiJzbmVzIn0=)

## How it works

The data is converted to a base 64 string which we onelink uses as a query parameter. I have tried to reduce the json keys to be as small as possible

## Setup locally

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev -- --open
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmagarcia%2Fonelink)

const isDev = process.env.NODE_ENV === "development";

// Client-safe variables can be used in React components
export const clientConfig = {
  authUrl:
    process.env.AUTH_URL ||
    (isDev
      ? "http://localhost:3000"
      : "https://nextjs-financial-dashboard.vercel.app"),
  stackProjectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  stackClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
};

// Server-only (don’t import these into client React components)
export const serverConfig = {
  stackServerKey: process.env.STACK_SECRET_SERVER_KEY,
  authSecret: process.env.AUTH_SECRET,
};

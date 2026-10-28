export type MaybeErr = {
  code?: unknown;
  message?: unknown;
  cause?: { code?: unknown; message?: unknown };
};

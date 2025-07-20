/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTHOR_NAME: string;
  readonly VITE_AUTHOR_ADDRESS: string;
  readonly VITE_AUTHOR_CITY: string;
  readonly VITE_AUTHOR_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

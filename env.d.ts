/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// This file provides type information for Vue files
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, values?: Record<string, any>) => string;
  }
}

export {};

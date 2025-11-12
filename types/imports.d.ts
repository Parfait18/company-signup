// Déclarations de types pour les imports Nuxt
declare module '#imports' {
  import { Ref, ComputedRef, reactive, ref, computed } from 'vue';
  
  export {
    Ref,
    ComputedRef,
    reactive,
    ref,
    computed,
    // Ajoutez d'autres imports Vue si nécessaire
  };
}

// Déclaration pour les variables d'environnement
declare namespace NodeJS {
  interface Process {
    dev: boolean;
  }
}

// Pour la compatibilité avec import.meta.env
interface ImportMeta {
  env: {
    MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
  };
}

// Déclaration pour les modules Nuxt
declare module '~/.nuxt/imports.d' {
  const autoImports: any;
  export default autoImports;
}

// Déclaration pour les modules de composants
declare module '#components' {
  const components: any;
  export default components;
}

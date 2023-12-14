declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CHANNEL_ACCESS_TOKEN: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}
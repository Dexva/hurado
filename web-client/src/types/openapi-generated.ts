/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/auth/login": {
    post: {
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["User"];
          };
        };
        /** Bad request */
        400: {
          content: {
            "application/json": components["schemas"]["UserError"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["AuthLogin"];
        };
      };
    };
  };
  "/auth/register": {
    post: {
      responses: {
        /** OK */
        200: unknown;
        /** Bad request */
        400: {
          content: {
            "application/json": components["schemas"]["UserError"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["AuthRegister"];
        };
      };
    };
  };
  "/users/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** OK */
        200: unknown;
        /** Bad request */
        400: unknown;
      };
    };
    patch: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["User"];
          };
        };
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UserPatch"];
        };
      };
    };
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/tasks": {
    get: {
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskList"][];
          };
        };
      };
    };
  };
  "/tasks/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskRead"];
          };
        };
      };
    };
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/tasks/find/{idOrSlug}": {
    get: {
      parameters: {
        path: {
          /** A task id or taks slug */
          idOrSlug: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskRead"];
          };
        };
      };
    };
    parameters: {
      path: {
        /** A task id or taks slug */
        idOrSlug: string;
      };
    };
  };
  "/judge/tasks": {
    post: {
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskList"][];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["TaskSetter"];
        };
      };
    };
  };
  "/judge/tasks/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskSetter"];
          };
        };
      };
    };
    patch: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["TaskSetter"];
          };
        };
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["TaskSetter"];
        };
      };
    };
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/files/upload": {
    post: {
      responses: {
        /** OK */
        200: {
          content: {
            "application/json": components["schemas"]["FileRead"];
          };
        };
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["FileCreate"];
        };
      };
    };
  };
  "/scripts/create": {
    post: {
      responses: {
        /** OK */
        200: unknown;
        /** Bad request */
        400: unknown;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["Script"];
        };
      };
    };
  };
}

export interface components {
  schemas: {
    AuthLogin: {
      email: string;
      password: string;
    };
    AuthRegister: {
      email: string;
      username: string;
      password: string;
    };
    User: {
      id: number;
      email: string;
      username: string;
      school?: string;
      name?: string;
      country?: string;
      isAdmin: boolean;
    };
    UserPatch: {
      id: number;
      email: string;
      username: string;
      password?: string;
      school?: string;
      name?: string;
      country?: string;
    };
    FileRead: {
      id: number;
      fileURL: string;
      name: string;
    };
    FileCreate: {
      fileURL: string;
      name: string;
    };
    Script: {
      id: number;
      file: components["schemas"]["FileRead"];
      languageCode: string;
      runtimeArgs: string;
    };
    TaskRead: {
      id: number;
      title: string;
      slug: string;
      description?: string;
      allowedLanguages: string;
      taskType: string;
      scoreMax: number;
      timeLimit: number;
      memoryLimit: number;
      compileTimeLimit: number;
      compileMemoryLimit?: number;
      submissionSizeLimit: number;
      validatorId?: number;
      isPublicInArchive: boolean;
      language: string;
    } & {
      statement: unknown;
    };
    TaskList: {
      tasks: components["schemas"]["TaskRead"][];
    };
    TaskSetter: components["schemas"]["TaskRead"] & {
      checkerId: number;
      validatorId?: number;
    };
    UserError: {
      id?: string;
      raw?: { [key: string]: unknown };
      email?: string;
      username?: string;
      password?: string;
      passwordConfirm?: string;
      country?: string;
      show?: string;
    };
  };
}

export interface operations {}

export interface external {}

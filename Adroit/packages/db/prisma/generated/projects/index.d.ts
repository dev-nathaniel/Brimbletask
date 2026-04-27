
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model Environment
 * 
 */
export type Environment = $Result.DefaultSelection<Prisma.$EnvironmentPayload>
/**
 * Model EnvironmentVariable
 * 
 */
export type EnvironmentVariable = $Result.DefaultSelection<Prisma.$EnvironmentVariablePayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model ManagedDatabase
 * 
 */
export type ManagedDatabase = $Result.DefaultSelection<Prisma.$ManagedDatabasePayload>
/**
 * Model DeploymentConfig
 * 
 */
export type DeploymentConfig = $Result.DefaultSelection<Prisma.$DeploymentConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environment`: Exposes CRUD operations for the **Environment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Environments
    * const environments = await prisma.environment.findMany()
    * ```
    */
  get environment(): Prisma.EnvironmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentVariable`: Exposes CRUD operations for the **EnvironmentVariable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentVariables
    * const environmentVariables = await prisma.environmentVariable.findMany()
    * ```
    */
  get environmentVariable(): Prisma.EnvironmentVariableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **Deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.DeploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managedDatabase`: Exposes CRUD operations for the **ManagedDatabase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagedDatabases
    * const managedDatabases = await prisma.managedDatabase.findMany()
    * ```
    */
  get managedDatabase(): Prisma.ManagedDatabaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deploymentConfig`: Exposes CRUD operations for the **DeploymentConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeploymentConfigs
    * const deploymentConfigs = await prisma.deploymentConfig.findMany()
    * ```
    */
  get deploymentConfig(): Prisma.DeploymentConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    Domain: 'Domain',
    Environment: 'Environment',
    EnvironmentVariable: 'EnvironmentVariable',
    Deployment: 'Deployment',
    ManagedDatabase: 'ManagedDatabase',
    DeploymentConfig: 'DeploymentConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "domain" | "environment" | "environmentVariable" | "deployment" | "managedDatabase" | "deploymentConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      Environment: {
        payload: Prisma.$EnvironmentPayload<ExtArgs>
        fields: Prisma.EnvironmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          findMany: {
            args: Prisma.EnvironmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>[]
          }
          create: {
            args: Prisma.EnvironmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          createMany: {
            args: Prisma.EnvironmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          update: {
            args: Prisma.EnvironmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironment>
          }
          groupBy: {
            args: Prisma.EnvironmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentVariable: {
        payload: Prisma.$EnvironmentVariablePayload<ExtArgs>
        fields: Prisma.EnvironmentVariableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentVariableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findFirst: {
            args: Prisma.EnvironmentVariableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findMany: {
            args: Prisma.EnvironmentVariableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          create: {
            args: Prisma.EnvironmentVariableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          createMany: {
            args: Prisma.EnvironmentVariableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          delete: {
            args: Prisma.EnvironmentVariableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          update: {
            args: Prisma.EnvironmentVariableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentVariableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentVariableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentVariableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          aggregate: {
            args: Prisma.EnvironmentVariableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentVariable>
          }
          groupBy: {
            args: Prisma.EnvironmentVariableGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentVariableCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableCountAggregateOutputType> | number
          }
        }
      }
      Deployment: {
        payload: Prisma.$DeploymentPayload<ExtArgs>
        fields: Prisma.DeploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findFirst: {
            args: Prisma.DeploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findMany: {
            args: Prisma.DeploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          create: {
            args: Prisma.DeploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          createMany: {
            args: Prisma.DeploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          delete: {
            args: Prisma.DeploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          update: {
            args: Prisma.DeploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeploymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          upsert: {
            args: Prisma.DeploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.DeploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      ManagedDatabase: {
        payload: Prisma.$ManagedDatabasePayload<ExtArgs>
        fields: Prisma.ManagedDatabaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagedDatabaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagedDatabaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          findFirst: {
            args: Prisma.ManagedDatabaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagedDatabaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          findMany: {
            args: Prisma.ManagedDatabaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>[]
          }
          create: {
            args: Prisma.ManagedDatabaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          createMany: {
            args: Prisma.ManagedDatabaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagedDatabaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>[]
          }
          delete: {
            args: Prisma.ManagedDatabaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          update: {
            args: Prisma.ManagedDatabaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          deleteMany: {
            args: Prisma.ManagedDatabaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagedDatabaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagedDatabaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>[]
          }
          upsert: {
            args: Prisma.ManagedDatabaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagedDatabasePayload>
          }
          aggregate: {
            args: Prisma.ManagedDatabaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagedDatabase>
          }
          groupBy: {
            args: Prisma.ManagedDatabaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagedDatabaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagedDatabaseCountArgs<ExtArgs>
            result: $Utils.Optional<ManagedDatabaseCountAggregateOutputType> | number
          }
        }
      }
      DeploymentConfig: {
        payload: Prisma.$DeploymentConfigPayload<ExtArgs>
        fields: Prisma.DeploymentConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          findFirst: {
            args: Prisma.DeploymentConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          findMany: {
            args: Prisma.DeploymentConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>[]
          }
          create: {
            args: Prisma.DeploymentConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          createMany: {
            args: Prisma.DeploymentConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>[]
          }
          delete: {
            args: Prisma.DeploymentConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          update: {
            args: Prisma.DeploymentConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeploymentConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>[]
          }
          upsert: {
            args: Prisma.DeploymentConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentConfigPayload>
          }
          aggregate: {
            args: Prisma.DeploymentConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeploymentConfig>
          }
          groupBy: {
            args: Prisma.DeploymentConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentConfigCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    domain?: DomainOmit
    environment?: EnvironmentOmit
    environmentVariable?: EnvironmentVariableOmit
    deployment?: DeploymentOmit
    managedDatabase?: ManagedDatabaseOmit
    deploymentConfig?: DeploymentConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    environments: number
    deployments: number
    databases: number
    domains: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environments?: boolean | ProjectCountOutputTypeCountEnvironmentsArgs
    deployments?: boolean | ProjectCountOutputTypeCountDeploymentsArgs
    databases?: boolean | ProjectCountOutputTypeCountDatabasesArgs
    domains?: boolean | ProjectCountOutputTypeCountDomainsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDatabasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagedDatabaseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
  }


  /**
   * Count Type EnvironmentCountOutputType
   */

  export type EnvironmentCountOutputType = {
    variables: number
  }

  export type EnvironmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variables?: boolean | EnvironmentCountOutputTypeCountVariablesArgs
  }

  // Custom InputTypes
  /**
   * EnvironmentCountOutputType without action
   */
  export type EnvironmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentCountOutputType
     */
    select?: EnvironmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvironmentCountOutputType without action
   */
  export type EnvironmentCountOutputTypeCountVariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    teamId: string | null
    description: string | null
    sourceType: string | null
    sourceUrl: string | null
    repositoryUrl: string | null
    defaultBranch: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    teamId: string | null
    description: string | null
    sourceType: string | null
    sourceUrl: string | null
    repositoryUrl: string | null
    defaultBranch: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    teamId: number
    description: number
    sourceType: number
    sourceUrl: number
    repositoryUrl: number
    defaultBranch: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    teamId?: true
    description?: true
    sourceType?: true
    sourceUrl?: true
    repositoryUrl?: true
    defaultBranch?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    teamId?: true
    description?: true
    sourceType?: true
    sourceUrl?: true
    repositoryUrl?: true
    defaultBranch?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    teamId?: true
    description?: true
    sourceType?: true
    sourceUrl?: true
    repositoryUrl?: true
    defaultBranch?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    slug: string
    teamId: string
    description: string | null
    sourceType: string
    sourceUrl: string | null
    repositoryUrl: string | null
    defaultBranch: string
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    teamId?: boolean
    description?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    repositoryUrl?: boolean
    defaultBranch?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environments?: boolean | Project$environmentsArgs<ExtArgs>
    deployments?: boolean | Project$deploymentsArgs<ExtArgs>
    databases?: boolean | Project$databasesArgs<ExtArgs>
    domains?: boolean | Project$domainsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    teamId?: boolean
    description?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    repositoryUrl?: boolean
    defaultBranch?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    teamId?: boolean
    description?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    repositoryUrl?: boolean
    defaultBranch?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    teamId?: boolean
    description?: boolean
    sourceType?: boolean
    sourceUrl?: boolean
    repositoryUrl?: boolean
    defaultBranch?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "teamId" | "description" | "sourceType" | "sourceUrl" | "repositoryUrl" | "defaultBranch" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environments?: boolean | Project$environmentsArgs<ExtArgs>
    deployments?: boolean | Project$deploymentsArgs<ExtArgs>
    databases?: boolean | Project$databasesArgs<ExtArgs>
    domains?: boolean | Project$domainsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      environments: Prisma.$EnvironmentPayload<ExtArgs>[]
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      databases: Prisma.$ManagedDatabasePayload<ExtArgs>[]
      domains: Prisma.$DomainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      teamId: string
      description: string | null
      sourceType: string
      sourceUrl: string | null
      repositoryUrl: string | null
      defaultBranch: string
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    environments<T extends Project$environmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$environmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deployments<T extends Project$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    databases<T extends Project$databasesArgs<ExtArgs> = {}>(args?: Subset<T, Project$databasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    domains<T extends Project$domainsArgs<ExtArgs> = {}>(args?: Subset<T, Project$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly teamId: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly sourceType: FieldRef<"Project", 'String'>
    readonly sourceUrl: FieldRef<"Project", 'String'>
    readonly repositoryUrl: FieldRef<"Project", 'String'>
    readonly defaultBranch: FieldRef<"Project", 'String'>
    readonly url: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.environments
   */
  export type Project$environmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    where?: EnvironmentWhereInput
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    cursor?: EnvironmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Project.deployments
   */
  export type Project$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    cursor?: DeploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Project.databases
   */
  export type Project$databasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    where?: ManagedDatabaseWhereInput
    orderBy?: ManagedDatabaseOrderByWithRelationInput | ManagedDatabaseOrderByWithRelationInput[]
    cursor?: ManagedDatabaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagedDatabaseScalarFieldEnum | ManagedDatabaseScalarFieldEnum[]
  }

  /**
   * Project.domains
   */
  export type Project$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    cursor?: DomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    hostname: string | null
    status: string | null
    sslStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    hostname: string | null
    status: string | null
    sslStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    projectId: number
    hostname: number
    status: number
    sslStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    projectId?: true
    hostname?: true
    status?: true
    sslStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    projectId?: true
    hostname?: true
    status?: true
    sslStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    projectId?: true
    hostname?: true
    status?: true
    sslStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    projectId: string
    hostname: string
    status: string
    sslStatus: string
    createdAt: Date
    updatedAt: Date
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    hostname?: boolean
    status?: boolean
    sslStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    hostname?: boolean
    status?: boolean
    sslStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    hostname?: boolean
    status?: boolean
    sslStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    projectId?: boolean
    hostname?: boolean
    status?: boolean
    sslStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "hostname" | "status" | "sslStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["domain"]>
  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      hostname: string
      status: string
      sslStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainFindUniqueArgs>(args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainFindFirstArgs>(args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainFindManyArgs>(args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
     */
    create<T extends DomainCreateArgs>(args: SelectSubset<T, DomainCreateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCreateManyArgs>(args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
     */
    delete<T extends DomainDeleteArgs>(args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainUpdateArgs>(args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainDeleteManyArgs>(args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainUpdateManyArgs>(args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains and returns the data updated in the database.
     * @param {DomainUpdateManyAndReturnArgs} args - Arguments to update many Domains.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DomainUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
     */
    upsert<T extends DomainUpsertArgs>(args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Domain model
   */
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly projectId: FieldRef<"Domain", 'String'>
    readonly hostname: FieldRef<"Domain", 'String'>
    readonly status: FieldRef<"Domain", 'String'>
    readonly sslStatus: FieldRef<"Domain", 'String'>
    readonly createdAt: FieldRef<"Domain", 'DateTime'>
    readonly updatedAt: FieldRef<"Domain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
  }

  /**
   * Domain updateManyAndReturn
   */
  export type DomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to delete.
     */
    limit?: number
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model Environment
   */

  export type AggregateEnvironment = {
    _count: EnvironmentCountAggregateOutputType | null
    _min: EnvironmentMinAggregateOutputType | null
    _max: EnvironmentMaxAggregateOutputType | null
  }

  export type EnvironmentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    branch: string | null
    autoDeploy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    branch: string | null
    autoDeploy: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    type: number
    branch: number
    autoDeploy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    branch?: true
    autoDeploy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    branch?: true
    autoDeploy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    branch?: true
    autoDeploy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Environment to aggregate.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Environments
    **/
    _count?: true | EnvironmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentMaxAggregateInputType
  }

  export type GetEnvironmentAggregateType<T extends EnvironmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironment[P]>
      : GetScalarType<T[P], AggregateEnvironment[P]>
  }




  export type EnvironmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentWhereInput
    orderBy?: EnvironmentOrderByWithAggregationInput | EnvironmentOrderByWithAggregationInput[]
    by: EnvironmentScalarFieldEnum[] | EnvironmentScalarFieldEnum
    having?: EnvironmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentCountAggregateInputType | true
    _min?: EnvironmentMinAggregateInputType
    _max?: EnvironmentMaxAggregateInputType
  }

  export type EnvironmentGroupByOutputType = {
    id: string
    projectId: string
    name: string
    type: string
    branch: string | null
    autoDeploy: boolean
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentCountAggregateOutputType | null
    _min: EnvironmentMinAggregateOutputType | null
    _max: EnvironmentMaxAggregateOutputType | null
  }

  type GetEnvironmentGroupByPayload<T extends EnvironmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    branch?: boolean
    autoDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    variables?: boolean | Environment$variablesArgs<ExtArgs>
    _count?: boolean | EnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environment"]>

  export type EnvironmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    branch?: boolean
    autoDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environment"]>

  export type EnvironmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    branch?: boolean
    autoDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environment"]>

  export type EnvironmentSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    branch?: boolean
    autoDeploy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "type" | "branch" | "autoDeploy" | "createdAt" | "updatedAt", ExtArgs["result"]["environment"]>
  export type EnvironmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    variables?: boolean | Environment$variablesArgs<ExtArgs>
    _count?: boolean | EnvironmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnvironmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EnvironmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $EnvironmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Environment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      variables: Prisma.$EnvironmentVariablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      type: string
      branch: string | null
      autoDeploy: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environment"]>
    composites: {}
  }

  type EnvironmentGetPayload<S extends boolean | null | undefined | EnvironmentDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentPayload, S>

  type EnvironmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentCountAggregateInputType | true
    }

  export interface EnvironmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Environment'], meta: { name: 'Environment' } }
    /**
     * Find zero or one Environment that matches the filter.
     * @param {EnvironmentFindUniqueArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentFindUniqueArgs>(args: SelectSubset<T, EnvironmentFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Environment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentFindUniqueOrThrowArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindFirstArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentFindFirstArgs>(args?: SelectSubset<T, EnvironmentFindFirstArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindFirstOrThrowArgs} args - Arguments to find a Environment
     * @example
     * // Get one Environment
     * const environment = await prisma.environment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Environments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Environments
     * const environments = await prisma.environment.findMany()
     * 
     * // Get first 10 Environments
     * const environments = await prisma.environment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentWithIdOnly = await prisma.environment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentFindManyArgs>(args?: SelectSubset<T, EnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Environment.
     * @param {EnvironmentCreateArgs} args - Arguments to create a Environment.
     * @example
     * // Create one Environment
     * const Environment = await prisma.environment.create({
     *   data: {
     *     // ... data to create a Environment
     *   }
     * })
     * 
     */
    create<T extends EnvironmentCreateArgs>(args: SelectSubset<T, EnvironmentCreateArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Environments.
     * @param {EnvironmentCreateManyArgs} args - Arguments to create many Environments.
     * @example
     * // Create many Environments
     * const environment = await prisma.environment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentCreateManyArgs>(args?: SelectSubset<T, EnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Environments and returns the data saved in the database.
     * @param {EnvironmentCreateManyAndReturnArgs} args - Arguments to create many Environments.
     * @example
     * // Create many Environments
     * const environment = await prisma.environment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Environments and only return the `id`
     * const environmentWithIdOnly = await prisma.environment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Environment.
     * @param {EnvironmentDeleteArgs} args - Arguments to delete one Environment.
     * @example
     * // Delete one Environment
     * const Environment = await prisma.environment.delete({
     *   where: {
     *     // ... filter to delete one Environment
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentDeleteArgs>(args: SelectSubset<T, EnvironmentDeleteArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Environment.
     * @param {EnvironmentUpdateArgs} args - Arguments to update one Environment.
     * @example
     * // Update one Environment
     * const environment = await prisma.environment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentUpdateArgs>(args: SelectSubset<T, EnvironmentUpdateArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Environments.
     * @param {EnvironmentDeleteManyArgs} args - Arguments to filter Environments to delete.
     * @example
     * // Delete a few Environments
     * const { count } = await prisma.environment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentDeleteManyArgs>(args?: SelectSubset<T, EnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Environments
     * const environment = await prisma.environment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentUpdateManyArgs>(args: SelectSubset<T, EnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environments and returns the data updated in the database.
     * @param {EnvironmentUpdateManyAndReturnArgs} args - Arguments to update many Environments.
     * @example
     * // Update many Environments
     * const environment = await prisma.environment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Environments and only return the `id`
     * const environmentWithIdOnly = await prisma.environment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Environment.
     * @param {EnvironmentUpsertArgs} args - Arguments to update or create a Environment.
     * @example
     * // Update or create a Environment
     * const environment = await prisma.environment.upsert({
     *   create: {
     *     // ... data to create a Environment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Environment we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentUpsertArgs>(args: SelectSubset<T, EnvironmentUpsertArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentCountArgs} args - Arguments to filter Environments to count.
     * @example
     * // Count the number of Environments
     * const count = await prisma.environment.count({
     *   where: {
     *     // ... the filter for the Environments we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentCountArgs>(
      args?: Subset<T, EnvironmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Environment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentAggregateArgs>(args: Subset<T, EnvironmentAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentAggregateType<T>>

    /**
     * Group by Environment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Environment model
   */
  readonly fields: EnvironmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Environment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variables<T extends Environment$variablesArgs<ExtArgs> = {}>(args?: Subset<T, Environment$variablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Environment model
   */
  interface EnvironmentFieldRefs {
    readonly id: FieldRef<"Environment", 'String'>
    readonly projectId: FieldRef<"Environment", 'String'>
    readonly name: FieldRef<"Environment", 'String'>
    readonly type: FieldRef<"Environment", 'String'>
    readonly branch: FieldRef<"Environment", 'String'>
    readonly autoDeploy: FieldRef<"Environment", 'Boolean'>
    readonly createdAt: FieldRef<"Environment", 'DateTime'>
    readonly updatedAt: FieldRef<"Environment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Environment findUnique
   */
  export type EnvironmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment findUniqueOrThrow
   */
  export type EnvironmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment findFirst
   */
  export type EnvironmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Environments.
     */
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment findFirstOrThrow
   */
  export type EnvironmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environment to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Environments.
     */
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment findMany
   */
  export type EnvironmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter, which Environments to fetch.
     */
    where?: EnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Environments to fetch.
     */
    orderBy?: EnvironmentOrderByWithRelationInput | EnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Environments.
     */
    cursor?: EnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Environments.
     */
    skip?: number
    distinct?: EnvironmentScalarFieldEnum | EnvironmentScalarFieldEnum[]
  }

  /**
   * Environment create
   */
  export type EnvironmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Environment.
     */
    data: XOR<EnvironmentCreateInput, EnvironmentUncheckedCreateInput>
  }

  /**
   * Environment createMany
   */
  export type EnvironmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Environments.
     */
    data: EnvironmentCreateManyInput | EnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Environment createManyAndReturn
   */
  export type EnvironmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * The data used to create many Environments.
     */
    data: EnvironmentCreateManyInput | EnvironmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Environment update
   */
  export type EnvironmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Environment.
     */
    data: XOR<EnvironmentUpdateInput, EnvironmentUncheckedUpdateInput>
    /**
     * Choose, which Environment to update.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment updateMany
   */
  export type EnvironmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Environments.
     */
    data: XOR<EnvironmentUpdateManyMutationInput, EnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which Environments to update
     */
    where?: EnvironmentWhereInput
    /**
     * Limit how many Environments to update.
     */
    limit?: number
  }

  /**
   * Environment updateManyAndReturn
   */
  export type EnvironmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * The data used to update Environments.
     */
    data: XOR<EnvironmentUpdateManyMutationInput, EnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which Environments to update
     */
    where?: EnvironmentWhereInput
    /**
     * Limit how many Environments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Environment upsert
   */
  export type EnvironmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Environment to update in case it exists.
     */
    where: EnvironmentWhereUniqueInput
    /**
     * In case the Environment found by the `where` argument doesn't exist, create a new Environment with this data.
     */
    create: XOR<EnvironmentCreateInput, EnvironmentUncheckedCreateInput>
    /**
     * In case the Environment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentUpdateInput, EnvironmentUncheckedUpdateInput>
  }

  /**
   * Environment delete
   */
  export type EnvironmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
    /**
     * Filter which Environment to delete.
     */
    where: EnvironmentWhereUniqueInput
  }

  /**
   * Environment deleteMany
   */
  export type EnvironmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Environments to delete
     */
    where?: EnvironmentWhereInput
    /**
     * Limit how many Environments to delete.
     */
    limit?: number
  }

  /**
   * Environment.variables
   */
  export type Environment$variablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    cursor?: EnvironmentVariableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * Environment without action
   */
  export type EnvironmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Environment
     */
    select?: EnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Environment
     */
    omit?: EnvironmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentVariable
   */

  export type AggregateEnvironmentVariable = {
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  export type EnvironmentVariableMinAggregateOutputType = {
    id: string | null
    environmentId: string | null
    key: string | null
    encryptedValue: string | null
    isSecret: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableMaxAggregateOutputType = {
    id: string | null
    environmentId: string | null
    key: string | null
    encryptedValue: string | null
    isSecret: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableCountAggregateOutputType = {
    id: number
    environmentId: number
    key: number
    encryptedValue: number
    isSecret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentVariableMinAggregateInputType = {
    id?: true
    environmentId?: true
    key?: true
    encryptedValue?: true
    isSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableMaxAggregateInputType = {
    id?: true
    environmentId?: true
    key?: true
    encryptedValue?: true
    isSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableCountAggregateInputType = {
    id?: true
    environmentId?: true
    key?: true
    encryptedValue?: true
    isSecret?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentVariableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariable to aggregate.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentVariables
    **/
    _count?: true | EnvironmentVariableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentVariableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type GetEnvironmentVariableAggregateType<T extends EnvironmentVariableAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentVariable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
      : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
  }




  export type EnvironmentVariableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithAggregationInput | EnvironmentVariableOrderByWithAggregationInput[]
    by: EnvironmentVariableScalarFieldEnum[] | EnvironmentVariableScalarFieldEnum
    having?: EnvironmentVariableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentVariableCountAggregateInputType | true
    _min?: EnvironmentVariableMinAggregateInputType
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type EnvironmentVariableGroupByOutputType = {
    id: string
    environmentId: string
    key: string
    encryptedValue: string
    isSecret: boolean
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  type GetEnvironmentVariableGroupByPayload<T extends EnvironmentVariableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentVariableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentVariableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentVariableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    environmentId?: boolean
    key?: boolean
    encryptedValue?: boolean
    isSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    environmentId?: boolean
    key?: boolean
    encryptedValue?: boolean
    isSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    environmentId?: boolean
    key?: boolean
    encryptedValue?: boolean
    isSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectScalar = {
    id?: boolean
    environmentId?: boolean
    key?: boolean
    encryptedValue?: boolean
    isSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentVariableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "environmentId" | "key" | "encryptedValue" | "isSecret" | "createdAt" | "updatedAt", ExtArgs["result"]["environmentVariable"]>
  export type EnvironmentVariableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    environment?: boolean | EnvironmentDefaultArgs<ExtArgs>
  }

  export type $EnvironmentVariablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentVariable"
    objects: {
      environment: Prisma.$EnvironmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      environmentId: string
      key: string
      encryptedValue: string
      isSecret: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environmentVariable"]>
    composites: {}
  }

  type EnvironmentVariableGetPayload<S extends boolean | null | undefined | EnvironmentVariableDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentVariablePayload, S>

  type EnvironmentVariableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentVariableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentVariableCountAggregateInputType | true
    }

  export interface EnvironmentVariableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentVariable'], meta: { name: 'EnvironmentVariable' } }
    /**
     * Find zero or one EnvironmentVariable that matches the filter.
     * @param {EnvironmentVariableFindUniqueArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentVariableFindUniqueArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentVariable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentVariableFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentVariableFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentVariableFindFirstArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentVariableFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentVariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany()
     * 
     * // Get first 10 EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentVariableFindManyArgs>(args?: SelectSubset<T, EnvironmentVariableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentVariable.
     * @param {EnvironmentVariableCreateArgs} args - Arguments to create a EnvironmentVariable.
     * @example
     * // Create one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.create({
     *   data: {
     *     // ... data to create a EnvironmentVariable
     *   }
     * })
     * 
     */
    create<T extends EnvironmentVariableCreateArgs>(args: SelectSubset<T, EnvironmentVariableCreateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentVariables.
     * @param {EnvironmentVariableCreateManyArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentVariableCreateManyArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentVariables and returns the data saved in the database.
     * @param {EnvironmentVariableCreateManyAndReturnArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentVariableCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnvironmentVariable.
     * @param {EnvironmentVariableDeleteArgs} args - Arguments to delete one EnvironmentVariable.
     * @example
     * // Delete one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentVariable
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentVariableDeleteArgs>(args: SelectSubset<T, EnvironmentVariableDeleteArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentVariable.
     * @param {EnvironmentVariableUpdateArgs} args - Arguments to update one EnvironmentVariable.
     * @example
     * // Update one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentVariableUpdateArgs>(args: SelectSubset<T, EnvironmentVariableUpdateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentVariables.
     * @param {EnvironmentVariableDeleteManyArgs} args - Arguments to filter EnvironmentVariables to delete.
     * @example
     * // Delete a few EnvironmentVariables
     * const { count } = await prisma.environmentVariable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentVariableDeleteManyArgs>(args?: SelectSubset<T, EnvironmentVariableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentVariableUpdateManyArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables and returns the data updated in the database.
     * @param {EnvironmentVariableUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentVariables.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentVariableUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnvironmentVariable.
     * @param {EnvironmentVariableUpsertArgs} args - Arguments to update or create a EnvironmentVariable.
     * @example
     * // Update or create a EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.upsert({
     *   create: {
     *     // ... data to create a EnvironmentVariable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentVariable we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentVariableUpsertArgs>(args: SelectSubset<T, EnvironmentVariableUpsertArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableCountArgs} args - Arguments to filter EnvironmentVariables to count.
     * @example
     * // Count the number of EnvironmentVariables
     * const count = await prisma.environmentVariable.count({
     *   where: {
     *     // ... the filter for the EnvironmentVariables we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentVariableCountArgs>(
      args?: Subset<T, EnvironmentVariableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentVariableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentVariableAggregateArgs>(args: Subset<T, EnvironmentVariableAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentVariableAggregateType<T>>

    /**
     * Group by EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentVariableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentVariableGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentVariableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentVariableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentVariableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentVariable model
   */
  readonly fields: EnvironmentVariableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentVariable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentVariableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    environment<T extends EnvironmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnvironmentDefaultArgs<ExtArgs>>): Prisma__EnvironmentClient<$Result.GetResult<Prisma.$EnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentVariable model
   */
  interface EnvironmentVariableFieldRefs {
    readonly id: FieldRef<"EnvironmentVariable", 'String'>
    readonly environmentId: FieldRef<"EnvironmentVariable", 'String'>
    readonly key: FieldRef<"EnvironmentVariable", 'String'>
    readonly encryptedValue: FieldRef<"EnvironmentVariable", 'String'>
    readonly isSecret: FieldRef<"EnvironmentVariable", 'Boolean'>
    readonly createdAt: FieldRef<"EnvironmentVariable", 'DateTime'>
    readonly updatedAt: FieldRef<"EnvironmentVariable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentVariable findUnique
   */
  export type EnvironmentVariableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findUniqueOrThrow
   */
  export type EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findFirst
   */
  export type EnvironmentVariableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findFirstOrThrow
   */
  export type EnvironmentVariableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findMany
   */
  export type EnvironmentVariableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariables to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable create
   */
  export type EnvironmentVariableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
  }

  /**
   * EnvironmentVariable createMany
   */
  export type EnvironmentVariableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentVariable createManyAndReturn
   */
  export type EnvironmentVariableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable update
   */
  export type EnvironmentVariableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentVariable to update.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable updateMany
   */
  export type EnvironmentVariableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable updateManyAndReturn
   */
  export type EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable upsert
   */
  export type EnvironmentVariableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentVariable to update in case it exists.
     */
    where: EnvironmentVariableWhereUniqueInput
    /**
     * In case the EnvironmentVariable found by the `where` argument doesn't exist, create a new EnvironmentVariable with this data.
     */
    create: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
    /**
     * In case the EnvironmentVariable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
  }

  /**
   * EnvironmentVariable delete
   */
  export type EnvironmentVariableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentVariable to delete.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable deleteMany
   */
  export type EnvironmentVariableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariables to delete
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable without action
   */
  export type EnvironmentVariableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    buildId: string | null
    imageTag: string | null
    url: string | null
    status: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    buildId: string | null
    imageTag: string | null
    url: string | null
    status: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    projectId: number
    buildId: number
    imageTag: number
    url: number
    status: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeploymentMinAggregateInputType = {
    id?: true
    projectId?: true
    buildId?: true
    imageTag?: true
    url?: true
    status?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    projectId?: true
    buildId?: true
    imageTag?: true
    url?: true
    status?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    projectId?: true
    buildId?: true
    imageTag?: true
    url?: true
    status?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployment to aggregate.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type DeploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithAggregationInput | DeploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: DeploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    projectId: string
    buildId: string
    imageTag: string
    url: string | null
    status: string
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends DeploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buildId?: boolean
    imageTag?: boolean
    url?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buildId?: boolean
    imageTag?: boolean
    url?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buildId?: boolean
    imageTag?: boolean
    url?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    projectId?: boolean
    buildId?: boolean
    imageTag?: boolean
    url?: boolean
    status?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "buildId" | "imageTag" | "url" | "status" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["deployment"]>
  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      buildId: string
      imageTag: string
      url: string | null
      status: string
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type DeploymentGetPayload<S extends boolean | null | undefined | DeploymentDefaultArgs> = $Result.GetResult<Prisma.$DeploymentPayload, S>

  type DeploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface DeploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deployment'], meta: { name: 'Deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {DeploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentFindUniqueArgs>(args: SelectSubset<T, DeploymentFindUniqueArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentFindFirstArgs>(args?: SelectSubset<T, DeploymentFindFirstArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentFindManyArgs>(args?: SelectSubset<T, DeploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deployment.
     * @param {DeploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends DeploymentCreateArgs>(args: SelectSubset<T, DeploymentCreateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deployments.
     * @param {DeploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentCreateManyArgs>(args?: SelectSubset<T, DeploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {DeploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deployment.
     * @param {DeploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends DeploymentDeleteArgs>(args: SelectSubset<T, DeploymentDeleteArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deployment.
     * @param {DeploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentUpdateArgs>(args: SelectSubset<T, DeploymentUpdateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deployments.
     * @param {DeploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentDeleteManyArgs>(args?: SelectSubset<T, DeploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentUpdateManyArgs>(args: SelectSubset<T, DeploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments and returns the data updated in the database.
     * @param {DeploymentUpdateManyAndReturnArgs} args - Arguments to update many Deployments.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeploymentUpdateManyAndReturnArgs>(args: SelectSubset<T, DeploymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deployment.
     * @param {DeploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentUpsertArgs>(args: SelectSubset<T, DeploymentUpsertArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends DeploymentCountArgs>(
      args?: Subset<T, DeploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deployment model
   */
  readonly fields: DeploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deployment model
   */
  interface DeploymentFieldRefs {
    readonly id: FieldRef<"Deployment", 'String'>
    readonly projectId: FieldRef<"Deployment", 'String'>
    readonly buildId: FieldRef<"Deployment", 'String'>
    readonly imageTag: FieldRef<"Deployment", 'String'>
    readonly url: FieldRef<"Deployment", 'String'>
    readonly status: FieldRef<"Deployment", 'String'>
    readonly error: FieldRef<"Deployment", 'String'>
    readonly createdAt: FieldRef<"Deployment", 'DateTime'>
    readonly updatedAt: FieldRef<"Deployment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deployment findUnique
   */
  export type DeploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findUniqueOrThrow
   */
  export type DeploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findFirst
   */
  export type DeploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findFirstOrThrow
   */
  export type DeploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findMany
   */
  export type DeploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployments to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment create
   */
  export type DeploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Deployment.
     */
    data: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
  }

  /**
   * Deployment createMany
   */
  export type DeploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deployment createManyAndReturn
   */
  export type DeploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment update
   */
  export type DeploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Deployment.
     */
    data: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
    /**
     * Choose, which Deployment to update.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment updateMany
   */
  export type DeploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
  }

  /**
   * Deployment updateManyAndReturn
   */
  export type DeploymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment upsert
   */
  export type DeploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Deployment to update in case it exists.
     */
    where: DeploymentWhereUniqueInput
    /**
     * In case the Deployment found by the `where` argument doesn't exist, create a new Deployment with this data.
     */
    create: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
    /**
     * In case the Deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
  }

  /**
   * Deployment delete
   */
  export type DeploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter which Deployment to delete.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment deleteMany
   */
  export type DeploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployments to delete
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to delete.
     */
    limit?: number
  }

  /**
   * Deployment without action
   */
  export type DeploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
  }


  /**
   * Model ManagedDatabase
   */

  export type AggregateManagedDatabase = {
    _count: ManagedDatabaseCountAggregateOutputType | null
    _avg: ManagedDatabaseAvgAggregateOutputType | null
    _sum: ManagedDatabaseSumAggregateOutputType | null
    _min: ManagedDatabaseMinAggregateOutputType | null
    _max: ManagedDatabaseMaxAggregateOutputType | null
  }

  export type ManagedDatabaseAvgAggregateOutputType = {
    port: number | null
  }

  export type ManagedDatabaseSumAggregateOutputType = {
    port: number | null
  }

  export type ManagedDatabaseMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    version: string | null
    status: string | null
    host: string | null
    port: number | null
    user: string | null
    dbName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagedDatabaseMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    type: string | null
    version: string | null
    status: string | null
    host: string | null
    port: number | null
    user: string | null
    dbName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManagedDatabaseCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    type: number
    version: number
    status: number
    host: number
    port: number
    user: number
    dbName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManagedDatabaseAvgAggregateInputType = {
    port?: true
  }

  export type ManagedDatabaseSumAggregateInputType = {
    port?: true
  }

  export type ManagedDatabaseMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    version?: true
    status?: true
    host?: true
    port?: true
    user?: true
    dbName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagedDatabaseMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    version?: true
    status?: true
    host?: true
    port?: true
    user?: true
    dbName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManagedDatabaseCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    type?: true
    version?: true
    status?: true
    host?: true
    port?: true
    user?: true
    dbName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManagedDatabaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagedDatabase to aggregate.
     */
    where?: ManagedDatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagedDatabases to fetch.
     */
    orderBy?: ManagedDatabaseOrderByWithRelationInput | ManagedDatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagedDatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagedDatabases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagedDatabases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagedDatabases
    **/
    _count?: true | ManagedDatabaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagedDatabaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagedDatabaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagedDatabaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagedDatabaseMaxAggregateInputType
  }

  export type GetManagedDatabaseAggregateType<T extends ManagedDatabaseAggregateArgs> = {
        [P in keyof T & keyof AggregateManagedDatabase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagedDatabase[P]>
      : GetScalarType<T[P], AggregateManagedDatabase[P]>
  }




  export type ManagedDatabaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagedDatabaseWhereInput
    orderBy?: ManagedDatabaseOrderByWithAggregationInput | ManagedDatabaseOrderByWithAggregationInput[]
    by: ManagedDatabaseScalarFieldEnum[] | ManagedDatabaseScalarFieldEnum
    having?: ManagedDatabaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagedDatabaseCountAggregateInputType | true
    _avg?: ManagedDatabaseAvgAggregateInputType
    _sum?: ManagedDatabaseSumAggregateInputType
    _min?: ManagedDatabaseMinAggregateInputType
    _max?: ManagedDatabaseMaxAggregateInputType
  }

  export type ManagedDatabaseGroupByOutputType = {
    id: string
    projectId: string
    name: string
    type: string
    version: string
    status: string
    host: string | null
    port: number
    user: string
    dbName: string
    createdAt: Date
    updatedAt: Date
    _count: ManagedDatabaseCountAggregateOutputType | null
    _avg: ManagedDatabaseAvgAggregateOutputType | null
    _sum: ManagedDatabaseSumAggregateOutputType | null
    _min: ManagedDatabaseMinAggregateOutputType | null
    _max: ManagedDatabaseMaxAggregateOutputType | null
  }

  type GetManagedDatabaseGroupByPayload<T extends ManagedDatabaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagedDatabaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagedDatabaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagedDatabaseGroupByOutputType[P]>
            : GetScalarType<T[P], ManagedDatabaseGroupByOutputType[P]>
        }
      >
    >


  export type ManagedDatabaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    version?: boolean
    status?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    dbName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managedDatabase"]>

  export type ManagedDatabaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    version?: boolean
    status?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    dbName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managedDatabase"]>

  export type ManagedDatabaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    version?: boolean
    status?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    dbName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managedDatabase"]>

  export type ManagedDatabaseSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    type?: boolean
    version?: boolean
    status?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    dbName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManagedDatabaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "type" | "version" | "status" | "host" | "port" | "user" | "dbName" | "createdAt" | "updatedAt", ExtArgs["result"]["managedDatabase"]>
  export type ManagedDatabaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ManagedDatabaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ManagedDatabaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ManagedDatabasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagedDatabase"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      type: string
      version: string
      status: string
      host: string | null
      port: number
      user: string
      dbName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["managedDatabase"]>
    composites: {}
  }

  type ManagedDatabaseGetPayload<S extends boolean | null | undefined | ManagedDatabaseDefaultArgs> = $Result.GetResult<Prisma.$ManagedDatabasePayload, S>

  type ManagedDatabaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagedDatabaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagedDatabaseCountAggregateInputType | true
    }

  export interface ManagedDatabaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagedDatabase'], meta: { name: 'ManagedDatabase' } }
    /**
     * Find zero or one ManagedDatabase that matches the filter.
     * @param {ManagedDatabaseFindUniqueArgs} args - Arguments to find a ManagedDatabase
     * @example
     * // Get one ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagedDatabaseFindUniqueArgs>(args: SelectSubset<T, ManagedDatabaseFindUniqueArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagedDatabase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagedDatabaseFindUniqueOrThrowArgs} args - Arguments to find a ManagedDatabase
     * @example
     * // Get one ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagedDatabaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagedDatabaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagedDatabase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseFindFirstArgs} args - Arguments to find a ManagedDatabase
     * @example
     * // Get one ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagedDatabaseFindFirstArgs>(args?: SelectSubset<T, ManagedDatabaseFindFirstArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagedDatabase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseFindFirstOrThrowArgs} args - Arguments to find a ManagedDatabase
     * @example
     * // Get one ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagedDatabaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagedDatabaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagedDatabases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagedDatabases
     * const managedDatabases = await prisma.managedDatabase.findMany()
     * 
     * // Get first 10 ManagedDatabases
     * const managedDatabases = await prisma.managedDatabase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managedDatabaseWithIdOnly = await prisma.managedDatabase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagedDatabaseFindManyArgs>(args?: SelectSubset<T, ManagedDatabaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagedDatabase.
     * @param {ManagedDatabaseCreateArgs} args - Arguments to create a ManagedDatabase.
     * @example
     * // Create one ManagedDatabase
     * const ManagedDatabase = await prisma.managedDatabase.create({
     *   data: {
     *     // ... data to create a ManagedDatabase
     *   }
     * })
     * 
     */
    create<T extends ManagedDatabaseCreateArgs>(args: SelectSubset<T, ManagedDatabaseCreateArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagedDatabases.
     * @param {ManagedDatabaseCreateManyArgs} args - Arguments to create many ManagedDatabases.
     * @example
     * // Create many ManagedDatabases
     * const managedDatabase = await prisma.managedDatabase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagedDatabaseCreateManyArgs>(args?: SelectSubset<T, ManagedDatabaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManagedDatabases and returns the data saved in the database.
     * @param {ManagedDatabaseCreateManyAndReturnArgs} args - Arguments to create many ManagedDatabases.
     * @example
     * // Create many ManagedDatabases
     * const managedDatabase = await prisma.managedDatabase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManagedDatabases and only return the `id`
     * const managedDatabaseWithIdOnly = await prisma.managedDatabase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagedDatabaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagedDatabaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManagedDatabase.
     * @param {ManagedDatabaseDeleteArgs} args - Arguments to delete one ManagedDatabase.
     * @example
     * // Delete one ManagedDatabase
     * const ManagedDatabase = await prisma.managedDatabase.delete({
     *   where: {
     *     // ... filter to delete one ManagedDatabase
     *   }
     * })
     * 
     */
    delete<T extends ManagedDatabaseDeleteArgs>(args: SelectSubset<T, ManagedDatabaseDeleteArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagedDatabase.
     * @param {ManagedDatabaseUpdateArgs} args - Arguments to update one ManagedDatabase.
     * @example
     * // Update one ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagedDatabaseUpdateArgs>(args: SelectSubset<T, ManagedDatabaseUpdateArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagedDatabases.
     * @param {ManagedDatabaseDeleteManyArgs} args - Arguments to filter ManagedDatabases to delete.
     * @example
     * // Delete a few ManagedDatabases
     * const { count } = await prisma.managedDatabase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagedDatabaseDeleteManyArgs>(args?: SelectSubset<T, ManagedDatabaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagedDatabases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagedDatabases
     * const managedDatabase = await prisma.managedDatabase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagedDatabaseUpdateManyArgs>(args: SelectSubset<T, ManagedDatabaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagedDatabases and returns the data updated in the database.
     * @param {ManagedDatabaseUpdateManyAndReturnArgs} args - Arguments to update many ManagedDatabases.
     * @example
     * // Update many ManagedDatabases
     * const managedDatabase = await prisma.managedDatabase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManagedDatabases and only return the `id`
     * const managedDatabaseWithIdOnly = await prisma.managedDatabase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManagedDatabaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagedDatabaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManagedDatabase.
     * @param {ManagedDatabaseUpsertArgs} args - Arguments to update or create a ManagedDatabase.
     * @example
     * // Update or create a ManagedDatabase
     * const managedDatabase = await prisma.managedDatabase.upsert({
     *   create: {
     *     // ... data to create a ManagedDatabase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagedDatabase we want to update
     *   }
     * })
     */
    upsert<T extends ManagedDatabaseUpsertArgs>(args: SelectSubset<T, ManagedDatabaseUpsertArgs<ExtArgs>>): Prisma__ManagedDatabaseClient<$Result.GetResult<Prisma.$ManagedDatabasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagedDatabases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseCountArgs} args - Arguments to filter ManagedDatabases to count.
     * @example
     * // Count the number of ManagedDatabases
     * const count = await prisma.managedDatabase.count({
     *   where: {
     *     // ... the filter for the ManagedDatabases we want to count
     *   }
     * })
    **/
    count<T extends ManagedDatabaseCountArgs>(
      args?: Subset<T, ManagedDatabaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagedDatabaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagedDatabase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagedDatabaseAggregateArgs>(args: Subset<T, ManagedDatabaseAggregateArgs>): Prisma.PrismaPromise<GetManagedDatabaseAggregateType<T>>

    /**
     * Group by ManagedDatabase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagedDatabaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagedDatabaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagedDatabaseGroupByArgs['orderBy'] }
        : { orderBy?: ManagedDatabaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagedDatabaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagedDatabaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagedDatabase model
   */
  readonly fields: ManagedDatabaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagedDatabase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagedDatabaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagedDatabase model
   */
  interface ManagedDatabaseFieldRefs {
    readonly id: FieldRef<"ManagedDatabase", 'String'>
    readonly projectId: FieldRef<"ManagedDatabase", 'String'>
    readonly name: FieldRef<"ManagedDatabase", 'String'>
    readonly type: FieldRef<"ManagedDatabase", 'String'>
    readonly version: FieldRef<"ManagedDatabase", 'String'>
    readonly status: FieldRef<"ManagedDatabase", 'String'>
    readonly host: FieldRef<"ManagedDatabase", 'String'>
    readonly port: FieldRef<"ManagedDatabase", 'Int'>
    readonly user: FieldRef<"ManagedDatabase", 'String'>
    readonly dbName: FieldRef<"ManagedDatabase", 'String'>
    readonly createdAt: FieldRef<"ManagedDatabase", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagedDatabase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManagedDatabase findUnique
   */
  export type ManagedDatabaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter, which ManagedDatabase to fetch.
     */
    where: ManagedDatabaseWhereUniqueInput
  }

  /**
   * ManagedDatabase findUniqueOrThrow
   */
  export type ManagedDatabaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter, which ManagedDatabase to fetch.
     */
    where: ManagedDatabaseWhereUniqueInput
  }

  /**
   * ManagedDatabase findFirst
   */
  export type ManagedDatabaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter, which ManagedDatabase to fetch.
     */
    where?: ManagedDatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagedDatabases to fetch.
     */
    orderBy?: ManagedDatabaseOrderByWithRelationInput | ManagedDatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagedDatabases.
     */
    cursor?: ManagedDatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagedDatabases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagedDatabases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagedDatabases.
     */
    distinct?: ManagedDatabaseScalarFieldEnum | ManagedDatabaseScalarFieldEnum[]
  }

  /**
   * ManagedDatabase findFirstOrThrow
   */
  export type ManagedDatabaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter, which ManagedDatabase to fetch.
     */
    where?: ManagedDatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagedDatabases to fetch.
     */
    orderBy?: ManagedDatabaseOrderByWithRelationInput | ManagedDatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagedDatabases.
     */
    cursor?: ManagedDatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagedDatabases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagedDatabases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagedDatabases.
     */
    distinct?: ManagedDatabaseScalarFieldEnum | ManagedDatabaseScalarFieldEnum[]
  }

  /**
   * ManagedDatabase findMany
   */
  export type ManagedDatabaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter, which ManagedDatabases to fetch.
     */
    where?: ManagedDatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagedDatabases to fetch.
     */
    orderBy?: ManagedDatabaseOrderByWithRelationInput | ManagedDatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagedDatabases.
     */
    cursor?: ManagedDatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagedDatabases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagedDatabases.
     */
    skip?: number
    distinct?: ManagedDatabaseScalarFieldEnum | ManagedDatabaseScalarFieldEnum[]
  }

  /**
   * ManagedDatabase create
   */
  export type ManagedDatabaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagedDatabase.
     */
    data: XOR<ManagedDatabaseCreateInput, ManagedDatabaseUncheckedCreateInput>
  }

  /**
   * ManagedDatabase createMany
   */
  export type ManagedDatabaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagedDatabases.
     */
    data: ManagedDatabaseCreateManyInput | ManagedDatabaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagedDatabase createManyAndReturn
   */
  export type ManagedDatabaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * The data used to create many ManagedDatabases.
     */
    data: ManagedDatabaseCreateManyInput | ManagedDatabaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagedDatabase update
   */
  export type ManagedDatabaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagedDatabase.
     */
    data: XOR<ManagedDatabaseUpdateInput, ManagedDatabaseUncheckedUpdateInput>
    /**
     * Choose, which ManagedDatabase to update.
     */
    where: ManagedDatabaseWhereUniqueInput
  }

  /**
   * ManagedDatabase updateMany
   */
  export type ManagedDatabaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagedDatabases.
     */
    data: XOR<ManagedDatabaseUpdateManyMutationInput, ManagedDatabaseUncheckedUpdateManyInput>
    /**
     * Filter which ManagedDatabases to update
     */
    where?: ManagedDatabaseWhereInput
    /**
     * Limit how many ManagedDatabases to update.
     */
    limit?: number
  }

  /**
   * ManagedDatabase updateManyAndReturn
   */
  export type ManagedDatabaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * The data used to update ManagedDatabases.
     */
    data: XOR<ManagedDatabaseUpdateManyMutationInput, ManagedDatabaseUncheckedUpdateManyInput>
    /**
     * Filter which ManagedDatabases to update
     */
    where?: ManagedDatabaseWhereInput
    /**
     * Limit how many ManagedDatabases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagedDatabase upsert
   */
  export type ManagedDatabaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagedDatabase to update in case it exists.
     */
    where: ManagedDatabaseWhereUniqueInput
    /**
     * In case the ManagedDatabase found by the `where` argument doesn't exist, create a new ManagedDatabase with this data.
     */
    create: XOR<ManagedDatabaseCreateInput, ManagedDatabaseUncheckedCreateInput>
    /**
     * In case the ManagedDatabase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagedDatabaseUpdateInput, ManagedDatabaseUncheckedUpdateInput>
  }

  /**
   * ManagedDatabase delete
   */
  export type ManagedDatabaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
    /**
     * Filter which ManagedDatabase to delete.
     */
    where: ManagedDatabaseWhereUniqueInput
  }

  /**
   * ManagedDatabase deleteMany
   */
  export type ManagedDatabaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagedDatabases to delete
     */
    where?: ManagedDatabaseWhereInput
    /**
     * Limit how many ManagedDatabases to delete.
     */
    limit?: number
  }

  /**
   * ManagedDatabase without action
   */
  export type ManagedDatabaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagedDatabase
     */
    select?: ManagedDatabaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagedDatabase
     */
    omit?: ManagedDatabaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagedDatabaseInclude<ExtArgs> | null
  }


  /**
   * Model DeploymentConfig
   */

  export type AggregateDeploymentConfig = {
    _count: DeploymentConfigCountAggregateOutputType | null
    _avg: DeploymentConfigAvgAggregateOutputType | null
    _sum: DeploymentConfigSumAggregateOutputType | null
    _min: DeploymentConfigMinAggregateOutputType | null
    _max: DeploymentConfigMaxAggregateOutputType | null
  }

  export type DeploymentConfigAvgAggregateOutputType = {
    instanceCount: number | null
  }

  export type DeploymentConfigSumAggregateOutputType = {
    instanceCount: number | null
  }

  export type DeploymentConfigMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    instanceSize: string | null
    instanceCount: number | null
    region: string | null
    healthCheckPath: string | null
    buildCommand: string | null
    startCommand: string | null
    dockerfilePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentConfigMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    instanceSize: string | null
    instanceCount: number | null
    region: string | null
    healthCheckPath: string | null
    buildCommand: string | null
    startCommand: string | null
    dockerfilePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentConfigCountAggregateOutputType = {
    id: number
    projectId: number
    instanceSize: number
    instanceCount: number
    region: number
    healthCheckPath: number
    buildCommand: number
    startCommand: number
    dockerfilePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeploymentConfigAvgAggregateInputType = {
    instanceCount?: true
  }

  export type DeploymentConfigSumAggregateInputType = {
    instanceCount?: true
  }

  export type DeploymentConfigMinAggregateInputType = {
    id?: true
    projectId?: true
    instanceSize?: true
    instanceCount?: true
    region?: true
    healthCheckPath?: true
    buildCommand?: true
    startCommand?: true
    dockerfilePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentConfigMaxAggregateInputType = {
    id?: true
    projectId?: true
    instanceSize?: true
    instanceCount?: true
    region?: true
    healthCheckPath?: true
    buildCommand?: true
    startCommand?: true
    dockerfilePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentConfigCountAggregateInputType = {
    id?: true
    projectId?: true
    instanceSize?: true
    instanceCount?: true
    region?: true
    healthCheckPath?: true
    buildCommand?: true
    startCommand?: true
    dockerfilePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeploymentConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeploymentConfig to aggregate.
     */
    where?: DeploymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeploymentConfigs to fetch.
     */
    orderBy?: DeploymentConfigOrderByWithRelationInput | DeploymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeploymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeploymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeploymentConfigs
    **/
    _count?: true | DeploymentConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeploymentConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeploymentConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentConfigMaxAggregateInputType
  }

  export type GetDeploymentConfigAggregateType<T extends DeploymentConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateDeploymentConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeploymentConfig[P]>
      : GetScalarType<T[P], AggregateDeploymentConfig[P]>
  }




  export type DeploymentConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentConfigWhereInput
    orderBy?: DeploymentConfigOrderByWithAggregationInput | DeploymentConfigOrderByWithAggregationInput[]
    by: DeploymentConfigScalarFieldEnum[] | DeploymentConfigScalarFieldEnum
    having?: DeploymentConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentConfigCountAggregateInputType | true
    _avg?: DeploymentConfigAvgAggregateInputType
    _sum?: DeploymentConfigSumAggregateInputType
    _min?: DeploymentConfigMinAggregateInputType
    _max?: DeploymentConfigMaxAggregateInputType
  }

  export type DeploymentConfigGroupByOutputType = {
    id: string
    projectId: string
    instanceSize: string
    instanceCount: number
    region: string
    healthCheckPath: string
    buildCommand: string | null
    startCommand: string | null
    dockerfilePath: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeploymentConfigCountAggregateOutputType | null
    _avg: DeploymentConfigAvgAggregateOutputType | null
    _sum: DeploymentConfigSumAggregateOutputType | null
    _min: DeploymentConfigMinAggregateOutputType | null
    _max: DeploymentConfigMaxAggregateOutputType | null
  }

  type GetDeploymentConfigGroupByPayload<T extends DeploymentConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentConfigGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentConfigGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    instanceSize?: boolean
    instanceCount?: boolean
    region?: boolean
    healthCheckPath?: boolean
    buildCommand?: boolean
    startCommand?: boolean
    dockerfilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deploymentConfig"]>

  export type DeploymentConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    instanceSize?: boolean
    instanceCount?: boolean
    region?: boolean
    healthCheckPath?: boolean
    buildCommand?: boolean
    startCommand?: boolean
    dockerfilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deploymentConfig"]>

  export type DeploymentConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    instanceSize?: boolean
    instanceCount?: boolean
    region?: boolean
    healthCheckPath?: boolean
    buildCommand?: boolean
    startCommand?: boolean
    dockerfilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["deploymentConfig"]>

  export type DeploymentConfigSelectScalar = {
    id?: boolean
    projectId?: boolean
    instanceSize?: boolean
    instanceCount?: boolean
    region?: boolean
    healthCheckPath?: boolean
    buildCommand?: boolean
    startCommand?: boolean
    dockerfilePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeploymentConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "instanceSize" | "instanceCount" | "region" | "healthCheckPath" | "buildCommand" | "startCommand" | "dockerfilePath" | "createdAt" | "updatedAt", ExtArgs["result"]["deploymentConfig"]>

  export type $DeploymentConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeploymentConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      instanceSize: string
      instanceCount: number
      region: string
      healthCheckPath: string
      buildCommand: string | null
      startCommand: string | null
      dockerfilePath: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deploymentConfig"]>
    composites: {}
  }

  type DeploymentConfigGetPayload<S extends boolean | null | undefined | DeploymentConfigDefaultArgs> = $Result.GetResult<Prisma.$DeploymentConfigPayload, S>

  type DeploymentConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeploymentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentConfigCountAggregateInputType | true
    }

  export interface DeploymentConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeploymentConfig'], meta: { name: 'DeploymentConfig' } }
    /**
     * Find zero or one DeploymentConfig that matches the filter.
     * @param {DeploymentConfigFindUniqueArgs} args - Arguments to find a DeploymentConfig
     * @example
     * // Get one DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentConfigFindUniqueArgs>(args: SelectSubset<T, DeploymentConfigFindUniqueArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeploymentConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeploymentConfigFindUniqueOrThrowArgs} args - Arguments to find a DeploymentConfig
     * @example
     * // Get one DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeploymentConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigFindFirstArgs} args - Arguments to find a DeploymentConfig
     * @example
     * // Get one DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentConfigFindFirstArgs>(args?: SelectSubset<T, DeploymentConfigFindFirstArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeploymentConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigFindFirstOrThrowArgs} args - Arguments to find a DeploymentConfig
     * @example
     * // Get one DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeploymentConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeploymentConfigs
     * const deploymentConfigs = await prisma.deploymentConfig.findMany()
     * 
     * // Get first 10 DeploymentConfigs
     * const deploymentConfigs = await prisma.deploymentConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentConfigWithIdOnly = await prisma.deploymentConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentConfigFindManyArgs>(args?: SelectSubset<T, DeploymentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeploymentConfig.
     * @param {DeploymentConfigCreateArgs} args - Arguments to create a DeploymentConfig.
     * @example
     * // Create one DeploymentConfig
     * const DeploymentConfig = await prisma.deploymentConfig.create({
     *   data: {
     *     // ... data to create a DeploymentConfig
     *   }
     * })
     * 
     */
    create<T extends DeploymentConfigCreateArgs>(args: SelectSubset<T, DeploymentConfigCreateArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeploymentConfigs.
     * @param {DeploymentConfigCreateManyArgs} args - Arguments to create many DeploymentConfigs.
     * @example
     * // Create many DeploymentConfigs
     * const deploymentConfig = await prisma.deploymentConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentConfigCreateManyArgs>(args?: SelectSubset<T, DeploymentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeploymentConfigs and returns the data saved in the database.
     * @param {DeploymentConfigCreateManyAndReturnArgs} args - Arguments to create many DeploymentConfigs.
     * @example
     * // Create many DeploymentConfigs
     * const deploymentConfig = await prisma.deploymentConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeploymentConfigs and only return the `id`
     * const deploymentConfigWithIdOnly = await prisma.deploymentConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeploymentConfig.
     * @param {DeploymentConfigDeleteArgs} args - Arguments to delete one DeploymentConfig.
     * @example
     * // Delete one DeploymentConfig
     * const DeploymentConfig = await prisma.deploymentConfig.delete({
     *   where: {
     *     // ... filter to delete one DeploymentConfig
     *   }
     * })
     * 
     */
    delete<T extends DeploymentConfigDeleteArgs>(args: SelectSubset<T, DeploymentConfigDeleteArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeploymentConfig.
     * @param {DeploymentConfigUpdateArgs} args - Arguments to update one DeploymentConfig.
     * @example
     * // Update one DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentConfigUpdateArgs>(args: SelectSubset<T, DeploymentConfigUpdateArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeploymentConfigs.
     * @param {DeploymentConfigDeleteManyArgs} args - Arguments to filter DeploymentConfigs to delete.
     * @example
     * // Delete a few DeploymentConfigs
     * const { count } = await prisma.deploymentConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentConfigDeleteManyArgs>(args?: SelectSubset<T, DeploymentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeploymentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeploymentConfigs
     * const deploymentConfig = await prisma.deploymentConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentConfigUpdateManyArgs>(args: SelectSubset<T, DeploymentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeploymentConfigs and returns the data updated in the database.
     * @param {DeploymentConfigUpdateManyAndReturnArgs} args - Arguments to update many DeploymentConfigs.
     * @example
     * // Update many DeploymentConfigs
     * const deploymentConfig = await prisma.deploymentConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeploymentConfigs and only return the `id`
     * const deploymentConfigWithIdOnly = await prisma.deploymentConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeploymentConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, DeploymentConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeploymentConfig.
     * @param {DeploymentConfigUpsertArgs} args - Arguments to update or create a DeploymentConfig.
     * @example
     * // Update or create a DeploymentConfig
     * const deploymentConfig = await prisma.deploymentConfig.upsert({
     *   create: {
     *     // ... data to create a DeploymentConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeploymentConfig we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentConfigUpsertArgs>(args: SelectSubset<T, DeploymentConfigUpsertArgs<ExtArgs>>): Prisma__DeploymentConfigClient<$Result.GetResult<Prisma.$DeploymentConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeploymentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigCountArgs} args - Arguments to filter DeploymentConfigs to count.
     * @example
     * // Count the number of DeploymentConfigs
     * const count = await prisma.deploymentConfig.count({
     *   where: {
     *     // ... the filter for the DeploymentConfigs we want to count
     *   }
     * })
    **/
    count<T extends DeploymentConfigCountArgs>(
      args?: Subset<T, DeploymentConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeploymentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeploymentConfigAggregateArgs>(args: Subset<T, DeploymentConfigAggregateArgs>): Prisma.PrismaPromise<GetDeploymentConfigAggregateType<T>>

    /**
     * Group by DeploymentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeploymentConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentConfigGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeploymentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeploymentConfig model
   */
  readonly fields: DeploymentConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeploymentConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeploymentConfig model
   */
  interface DeploymentConfigFieldRefs {
    readonly id: FieldRef<"DeploymentConfig", 'String'>
    readonly projectId: FieldRef<"DeploymentConfig", 'String'>
    readonly instanceSize: FieldRef<"DeploymentConfig", 'String'>
    readonly instanceCount: FieldRef<"DeploymentConfig", 'Int'>
    readonly region: FieldRef<"DeploymentConfig", 'String'>
    readonly healthCheckPath: FieldRef<"DeploymentConfig", 'String'>
    readonly buildCommand: FieldRef<"DeploymentConfig", 'String'>
    readonly startCommand: FieldRef<"DeploymentConfig", 'String'>
    readonly dockerfilePath: FieldRef<"DeploymentConfig", 'String'>
    readonly createdAt: FieldRef<"DeploymentConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"DeploymentConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeploymentConfig findUnique
   */
  export type DeploymentConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which DeploymentConfig to fetch.
     */
    where: DeploymentConfigWhereUniqueInput
  }

  /**
   * DeploymentConfig findUniqueOrThrow
   */
  export type DeploymentConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which DeploymentConfig to fetch.
     */
    where: DeploymentConfigWhereUniqueInput
  }

  /**
   * DeploymentConfig findFirst
   */
  export type DeploymentConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which DeploymentConfig to fetch.
     */
    where?: DeploymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeploymentConfigs to fetch.
     */
    orderBy?: DeploymentConfigOrderByWithRelationInput | DeploymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeploymentConfigs.
     */
    cursor?: DeploymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeploymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeploymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeploymentConfigs.
     */
    distinct?: DeploymentConfigScalarFieldEnum | DeploymentConfigScalarFieldEnum[]
  }

  /**
   * DeploymentConfig findFirstOrThrow
   */
  export type DeploymentConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which DeploymentConfig to fetch.
     */
    where?: DeploymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeploymentConfigs to fetch.
     */
    orderBy?: DeploymentConfigOrderByWithRelationInput | DeploymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeploymentConfigs.
     */
    cursor?: DeploymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeploymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeploymentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeploymentConfigs.
     */
    distinct?: DeploymentConfigScalarFieldEnum | DeploymentConfigScalarFieldEnum[]
  }

  /**
   * DeploymentConfig findMany
   */
  export type DeploymentConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter, which DeploymentConfigs to fetch.
     */
    where?: DeploymentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeploymentConfigs to fetch.
     */
    orderBy?: DeploymentConfigOrderByWithRelationInput | DeploymentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeploymentConfigs.
     */
    cursor?: DeploymentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeploymentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeploymentConfigs.
     */
    skip?: number
    distinct?: DeploymentConfigScalarFieldEnum | DeploymentConfigScalarFieldEnum[]
  }

  /**
   * DeploymentConfig create
   */
  export type DeploymentConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a DeploymentConfig.
     */
    data: XOR<DeploymentConfigCreateInput, DeploymentConfigUncheckedCreateInput>
  }

  /**
   * DeploymentConfig createMany
   */
  export type DeploymentConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeploymentConfigs.
     */
    data: DeploymentConfigCreateManyInput | DeploymentConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeploymentConfig createManyAndReturn
   */
  export type DeploymentConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * The data used to create many DeploymentConfigs.
     */
    data: DeploymentConfigCreateManyInput | DeploymentConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeploymentConfig update
   */
  export type DeploymentConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a DeploymentConfig.
     */
    data: XOR<DeploymentConfigUpdateInput, DeploymentConfigUncheckedUpdateInput>
    /**
     * Choose, which DeploymentConfig to update.
     */
    where: DeploymentConfigWhereUniqueInput
  }

  /**
   * DeploymentConfig updateMany
   */
  export type DeploymentConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeploymentConfigs.
     */
    data: XOR<DeploymentConfigUpdateManyMutationInput, DeploymentConfigUncheckedUpdateManyInput>
    /**
     * Filter which DeploymentConfigs to update
     */
    where?: DeploymentConfigWhereInput
    /**
     * Limit how many DeploymentConfigs to update.
     */
    limit?: number
  }

  /**
   * DeploymentConfig updateManyAndReturn
   */
  export type DeploymentConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * The data used to update DeploymentConfigs.
     */
    data: XOR<DeploymentConfigUpdateManyMutationInput, DeploymentConfigUncheckedUpdateManyInput>
    /**
     * Filter which DeploymentConfigs to update
     */
    where?: DeploymentConfigWhereInput
    /**
     * Limit how many DeploymentConfigs to update.
     */
    limit?: number
  }

  /**
   * DeploymentConfig upsert
   */
  export type DeploymentConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the DeploymentConfig to update in case it exists.
     */
    where: DeploymentConfigWhereUniqueInput
    /**
     * In case the DeploymentConfig found by the `where` argument doesn't exist, create a new DeploymentConfig with this data.
     */
    create: XOR<DeploymentConfigCreateInput, DeploymentConfigUncheckedCreateInput>
    /**
     * In case the DeploymentConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentConfigUpdateInput, DeploymentConfigUncheckedUpdateInput>
  }

  /**
   * DeploymentConfig delete
   */
  export type DeploymentConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
    /**
     * Filter which DeploymentConfig to delete.
     */
    where: DeploymentConfigWhereUniqueInput
  }

  /**
   * DeploymentConfig deleteMany
   */
  export type DeploymentConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeploymentConfigs to delete
     */
    where?: DeploymentConfigWhereInput
    /**
     * Limit how many DeploymentConfigs to delete.
     */
    limit?: number
  }

  /**
   * DeploymentConfig without action
   */
  export type DeploymentConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentConfig
     */
    select?: DeploymentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeploymentConfig
     */
    omit?: DeploymentConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    teamId: 'teamId',
    description: 'description',
    sourceType: 'sourceType',
    sourceUrl: 'sourceUrl',
    repositoryUrl: 'repositoryUrl',
    defaultBranch: 'defaultBranch',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    hostname: 'hostname',
    status: 'status',
    sslStatus: 'sslStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const EnvironmentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    type: 'type',
    branch: 'branch',
    autoDeploy: 'autoDeploy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentScalarFieldEnum = (typeof EnvironmentScalarFieldEnum)[keyof typeof EnvironmentScalarFieldEnum]


  export const EnvironmentVariableScalarFieldEnum: {
    id: 'id',
    environmentId: 'environmentId',
    key: 'key',
    encryptedValue: 'encryptedValue',
    isSecret: 'isSecret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentVariableScalarFieldEnum = (typeof EnvironmentVariableScalarFieldEnum)[keyof typeof EnvironmentVariableScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    buildId: 'buildId',
    imageTag: 'imageTag',
    url: 'url',
    status: 'status',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const ManagedDatabaseScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    type: 'type',
    version: 'version',
    status: 'status',
    host: 'host',
    port: 'port',
    user: 'user',
    dbName: 'dbName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManagedDatabaseScalarFieldEnum = (typeof ManagedDatabaseScalarFieldEnum)[keyof typeof ManagedDatabaseScalarFieldEnum]


  export const DeploymentConfigScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    instanceSize: 'instanceSize',
    instanceCount: 'instanceCount',
    region: 'region',
    healthCheckPath: 'healthCheckPath',
    buildCommand: 'buildCommand',
    startCommand: 'startCommand',
    dockerfilePath: 'dockerfilePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeploymentConfigScalarFieldEnum = (typeof DeploymentConfigScalarFieldEnum)[keyof typeof DeploymentConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    sourceType?: StringFilter<"Project"> | string
    sourceUrl?: StringNullableFilter<"Project"> | string | null
    repositoryUrl?: StringNullableFilter<"Project"> | string | null
    defaultBranch?: StringFilter<"Project"> | string
    url?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    environments?: EnvironmentListRelationFilter
    deployments?: DeploymentListRelationFilter
    databases?: ManagedDatabaseListRelationFilter
    domains?: DomainListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    teamId?: SortOrder
    description?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    defaultBranch?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    environments?: EnvironmentOrderByRelationAggregateInput
    deployments?: DeploymentOrderByRelationAggregateInput
    databases?: ManagedDatabaseOrderByRelationAggregateInput
    domains?: DomainOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_slug?: ProjectTeamIdSlugCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    sourceType?: StringFilter<"Project"> | string
    sourceUrl?: StringNullableFilter<"Project"> | string | null
    repositoryUrl?: StringNullableFilter<"Project"> | string | null
    defaultBranch?: StringFilter<"Project"> | string
    url?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    environments?: EnvironmentListRelationFilter
    deployments?: DeploymentListRelationFilter
    databases?: ManagedDatabaseListRelationFilter
    domains?: DomainListRelationFilter
  }, "id" | "teamId_slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    teamId?: SortOrder
    description?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    repositoryUrl?: SortOrderInput | SortOrder
    defaultBranch?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    teamId?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    sourceType?: StringWithAggregatesFilter<"Project"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    repositoryUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    defaultBranch?: StringWithAggregatesFilter<"Project"> | string
    url?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    projectId?: StringFilter<"Domain"> | string
    hostname?: StringFilter<"Domain"> | string
    status?: StringFilter<"Domain"> | string
    sslStatus?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    hostname?: SortOrder
    status?: SortOrder
    sslStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hostname?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    projectId?: StringFilter<"Domain"> | string
    status?: StringFilter<"Domain"> | string
    sslStatus?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "hostname">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    hostname?: SortOrder
    status?: SortOrder
    sslStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    projectId?: StringWithAggregatesFilter<"Domain"> | string
    hostname?: StringWithAggregatesFilter<"Domain"> | string
    status?: StringWithAggregatesFilter<"Domain"> | string
    sslStatus?: StringWithAggregatesFilter<"Domain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
  }

  export type EnvironmentWhereInput = {
    AND?: EnvironmentWhereInput | EnvironmentWhereInput[]
    OR?: EnvironmentWhereInput[]
    NOT?: EnvironmentWhereInput | EnvironmentWhereInput[]
    id?: StringFilter<"Environment"> | string
    projectId?: StringFilter<"Environment"> | string
    name?: StringFilter<"Environment"> | string
    type?: StringFilter<"Environment"> | string
    branch?: StringNullableFilter<"Environment"> | string | null
    autoDeploy?: BoolFilter<"Environment"> | boolean
    createdAt?: DateTimeFilter<"Environment"> | Date | string
    updatedAt?: DateTimeFilter<"Environment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    variables?: EnvironmentVariableListRelationFilter
  }

  export type EnvironmentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    branch?: SortOrderInput | SortOrder
    autoDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    variables?: EnvironmentVariableOrderByRelationAggregateInput
  }

  export type EnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_name?: EnvironmentProjectIdNameCompoundUniqueInput
    AND?: EnvironmentWhereInput | EnvironmentWhereInput[]
    OR?: EnvironmentWhereInput[]
    NOT?: EnvironmentWhereInput | EnvironmentWhereInput[]
    projectId?: StringFilter<"Environment"> | string
    name?: StringFilter<"Environment"> | string
    type?: StringFilter<"Environment"> | string
    branch?: StringNullableFilter<"Environment"> | string | null
    autoDeploy?: BoolFilter<"Environment"> | boolean
    createdAt?: DateTimeFilter<"Environment"> | Date | string
    updatedAt?: DateTimeFilter<"Environment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    variables?: EnvironmentVariableListRelationFilter
  }, "id" | "projectId_name">

  export type EnvironmentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    branch?: SortOrderInput | SortOrder
    autoDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentCountOrderByAggregateInput
    _max?: EnvironmentMaxOrderByAggregateInput
    _min?: EnvironmentMinOrderByAggregateInput
  }

  export type EnvironmentScalarWhereWithAggregatesInput = {
    AND?: EnvironmentScalarWhereWithAggregatesInput | EnvironmentScalarWhereWithAggregatesInput[]
    OR?: EnvironmentScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentScalarWhereWithAggregatesInput | EnvironmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Environment"> | string
    projectId?: StringWithAggregatesFilter<"Environment"> | string
    name?: StringWithAggregatesFilter<"Environment"> | string
    type?: StringWithAggregatesFilter<"Environment"> | string
    branch?: StringNullableWithAggregatesFilter<"Environment"> | string | null
    autoDeploy?: BoolWithAggregatesFilter<"Environment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Environment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Environment"> | Date | string
  }

  export type EnvironmentVariableWhereInput = {
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    environmentId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    encryptedValue?: StringFilter<"EnvironmentVariable"> | string
    isSecret?: BoolFilter<"EnvironmentVariable"> | boolean
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    environment?: XOR<EnvironmentScalarRelationFilter, EnvironmentWhereInput>
  }

  export type EnvironmentVariableOrderByWithRelationInput = {
    id?: SortOrder
    environmentId?: SortOrder
    key?: SortOrder
    encryptedValue?: SortOrder
    isSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    environment?: EnvironmentOrderByWithRelationInput
  }

  export type EnvironmentVariableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    environmentId_key?: EnvironmentVariableEnvironmentIdKeyCompoundUniqueInput
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    environmentId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    encryptedValue?: StringFilter<"EnvironmentVariable"> | string
    isSecret?: BoolFilter<"EnvironmentVariable"> | boolean
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    environment?: XOR<EnvironmentScalarRelationFilter, EnvironmentWhereInput>
  }, "id" | "environmentId_key">

  export type EnvironmentVariableOrderByWithAggregationInput = {
    id?: SortOrder
    environmentId?: SortOrder
    key?: SortOrder
    encryptedValue?: SortOrder
    isSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentVariableCountOrderByAggregateInput
    _max?: EnvironmentVariableMaxOrderByAggregateInput
    _min?: EnvironmentVariableMinOrderByAggregateInput
  }

  export type EnvironmentVariableScalarWhereWithAggregatesInput = {
    AND?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    OR?: EnvironmentVariableScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    environmentId?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    key?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    encryptedValue?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    isSecret?: BoolWithAggregatesFilter<"EnvironmentVariable"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: StringFilter<"Deployment"> | string
    projectId?: StringFilter<"Deployment"> | string
    buildId?: StringFilter<"Deployment"> | string
    imageTag?: StringFilter<"Deployment"> | string
    url?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    error?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buildId?: SortOrder
    imageTag?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    projectId?: StringFilter<"Deployment"> | string
    buildId?: StringFilter<"Deployment"> | string
    imageTag?: StringFilter<"Deployment"> | string
    url?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    error?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buildId?: SortOrder
    imageTag?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deployment"> | string
    projectId?: StringWithAggregatesFilter<"Deployment"> | string
    buildId?: StringWithAggregatesFilter<"Deployment"> | string
    imageTag?: StringWithAggregatesFilter<"Deployment"> | string
    url?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    status?: StringWithAggregatesFilter<"Deployment"> | string
    error?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
  }

  export type ManagedDatabaseWhereInput = {
    AND?: ManagedDatabaseWhereInput | ManagedDatabaseWhereInput[]
    OR?: ManagedDatabaseWhereInput[]
    NOT?: ManagedDatabaseWhereInput | ManagedDatabaseWhereInput[]
    id?: StringFilter<"ManagedDatabase"> | string
    projectId?: StringFilter<"ManagedDatabase"> | string
    name?: StringFilter<"ManagedDatabase"> | string
    type?: StringFilter<"ManagedDatabase"> | string
    version?: StringFilter<"ManagedDatabase"> | string
    status?: StringFilter<"ManagedDatabase"> | string
    host?: StringNullableFilter<"ManagedDatabase"> | string | null
    port?: IntFilter<"ManagedDatabase"> | number
    user?: StringFilter<"ManagedDatabase"> | string
    dbName?: StringFilter<"ManagedDatabase"> | string
    createdAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
    updatedAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ManagedDatabaseOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    status?: SortOrder
    host?: SortOrderInput | SortOrder
    port?: SortOrder
    user?: SortOrder
    dbName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ManagedDatabaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManagedDatabaseWhereInput | ManagedDatabaseWhereInput[]
    OR?: ManagedDatabaseWhereInput[]
    NOT?: ManagedDatabaseWhereInput | ManagedDatabaseWhereInput[]
    projectId?: StringFilter<"ManagedDatabase"> | string
    name?: StringFilter<"ManagedDatabase"> | string
    type?: StringFilter<"ManagedDatabase"> | string
    version?: StringFilter<"ManagedDatabase"> | string
    status?: StringFilter<"ManagedDatabase"> | string
    host?: StringNullableFilter<"ManagedDatabase"> | string | null
    port?: IntFilter<"ManagedDatabase"> | number
    user?: StringFilter<"ManagedDatabase"> | string
    dbName?: StringFilter<"ManagedDatabase"> | string
    createdAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
    updatedAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ManagedDatabaseOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    status?: SortOrder
    host?: SortOrderInput | SortOrder
    port?: SortOrder
    user?: SortOrder
    dbName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManagedDatabaseCountOrderByAggregateInput
    _avg?: ManagedDatabaseAvgOrderByAggregateInput
    _max?: ManagedDatabaseMaxOrderByAggregateInput
    _min?: ManagedDatabaseMinOrderByAggregateInput
    _sum?: ManagedDatabaseSumOrderByAggregateInput
  }

  export type ManagedDatabaseScalarWhereWithAggregatesInput = {
    AND?: ManagedDatabaseScalarWhereWithAggregatesInput | ManagedDatabaseScalarWhereWithAggregatesInput[]
    OR?: ManagedDatabaseScalarWhereWithAggregatesInput[]
    NOT?: ManagedDatabaseScalarWhereWithAggregatesInput | ManagedDatabaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    projectId?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    name?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    type?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    version?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    status?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    host?: StringNullableWithAggregatesFilter<"ManagedDatabase"> | string | null
    port?: IntWithAggregatesFilter<"ManagedDatabase"> | number
    user?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    dbName?: StringWithAggregatesFilter<"ManagedDatabase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ManagedDatabase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagedDatabase"> | Date | string
  }

  export type DeploymentConfigWhereInput = {
    AND?: DeploymentConfigWhereInput | DeploymentConfigWhereInput[]
    OR?: DeploymentConfigWhereInput[]
    NOT?: DeploymentConfigWhereInput | DeploymentConfigWhereInput[]
    id?: StringFilter<"DeploymentConfig"> | string
    projectId?: StringFilter<"DeploymentConfig"> | string
    instanceSize?: StringFilter<"DeploymentConfig"> | string
    instanceCount?: IntFilter<"DeploymentConfig"> | number
    region?: StringFilter<"DeploymentConfig"> | string
    healthCheckPath?: StringFilter<"DeploymentConfig"> | string
    buildCommand?: StringNullableFilter<"DeploymentConfig"> | string | null
    startCommand?: StringNullableFilter<"DeploymentConfig"> | string | null
    dockerfilePath?: StringNullableFilter<"DeploymentConfig"> | string | null
    createdAt?: DateTimeFilter<"DeploymentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"DeploymentConfig"> | Date | string
  }

  export type DeploymentConfigOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    instanceSize?: SortOrder
    instanceCount?: SortOrder
    region?: SortOrder
    healthCheckPath?: SortOrder
    buildCommand?: SortOrderInput | SortOrder
    startCommand?: SortOrderInput | SortOrder
    dockerfilePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: DeploymentConfigWhereInput | DeploymentConfigWhereInput[]
    OR?: DeploymentConfigWhereInput[]
    NOT?: DeploymentConfigWhereInput | DeploymentConfigWhereInput[]
    instanceSize?: StringFilter<"DeploymentConfig"> | string
    instanceCount?: IntFilter<"DeploymentConfig"> | number
    region?: StringFilter<"DeploymentConfig"> | string
    healthCheckPath?: StringFilter<"DeploymentConfig"> | string
    buildCommand?: StringNullableFilter<"DeploymentConfig"> | string | null
    startCommand?: StringNullableFilter<"DeploymentConfig"> | string | null
    dockerfilePath?: StringNullableFilter<"DeploymentConfig"> | string | null
    createdAt?: DateTimeFilter<"DeploymentConfig"> | Date | string
    updatedAt?: DateTimeFilter<"DeploymentConfig"> | Date | string
  }, "id" | "projectId">

  export type DeploymentConfigOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    instanceSize?: SortOrder
    instanceCount?: SortOrder
    region?: SortOrder
    healthCheckPath?: SortOrder
    buildCommand?: SortOrderInput | SortOrder
    startCommand?: SortOrderInput | SortOrder
    dockerfilePath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeploymentConfigCountOrderByAggregateInput
    _avg?: DeploymentConfigAvgOrderByAggregateInput
    _max?: DeploymentConfigMaxOrderByAggregateInput
    _min?: DeploymentConfigMinOrderByAggregateInput
    _sum?: DeploymentConfigSumOrderByAggregateInput
  }

  export type DeploymentConfigScalarWhereWithAggregatesInput = {
    AND?: DeploymentConfigScalarWhereWithAggregatesInput | DeploymentConfigScalarWhereWithAggregatesInput[]
    OR?: DeploymentConfigScalarWhereWithAggregatesInput[]
    NOT?: DeploymentConfigScalarWhereWithAggregatesInput | DeploymentConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeploymentConfig"> | string
    projectId?: StringWithAggregatesFilter<"DeploymentConfig"> | string
    instanceSize?: StringWithAggregatesFilter<"DeploymentConfig"> | string
    instanceCount?: IntWithAggregatesFilter<"DeploymentConfig"> | number
    region?: StringWithAggregatesFilter<"DeploymentConfig"> | string
    healthCheckPath?: StringWithAggregatesFilter<"DeploymentConfig"> | string
    buildCommand?: StringNullableWithAggregatesFilter<"DeploymentConfig"> | string | null
    startCommand?: StringNullableWithAggregatesFilter<"DeploymentConfig"> | string | null
    dockerfilePath?: StringNullableWithAggregatesFilter<"DeploymentConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeploymentConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeploymentConfig"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentCreateNestedManyWithoutProjectInput
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseCreateNestedManyWithoutProjectInput
    domains?: DomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentUncheckedCreateNestedManyWithoutProjectInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseUncheckedCreateNestedManyWithoutProjectInput
    domains?: DomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUpdateManyWithoutProjectNestedInput
    domains?: DomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUncheckedUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUncheckedUpdateManyWithoutProjectNestedInput
    domains?: DomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateInput = {
    id?: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    projectId: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateManyInput = {
    id?: string
    projectId: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentCreateInput = {
    id?: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEnvironmentsInput
    variables?: EnvironmentVariableCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variables?: EnvironmentVariableUncheckedCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEnvironmentsNestedInput
    variables?: EnvironmentVariableUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variables?: EnvironmentVariableUncheckedUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentCreateManyInput = {
    id?: string
    projectId: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateInput = {
    id?: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    environment: EnvironmentCreateNestedOneWithoutVariablesInput
  }

  export type EnvironmentVariableUncheckedCreateInput = {
    id?: string
    environmentId: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environment?: EnvironmentUpdateOneRequiredWithoutVariablesNestedInput
  }

  export type EnvironmentVariableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateManyInput = {
    id?: string
    environmentId: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    environmentId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    id?: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: string
    projectId: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyInput = {
    id?: string
    projectId: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseCreateInput = {
    id?: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDatabasesInput
  }

  export type ManagedDatabaseUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagedDatabaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDatabasesNestedInput
  }

  export type ManagedDatabaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseCreateManyInput = {
    id?: string
    projectId: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagedDatabaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentConfigCreateInput = {
    id?: string
    projectId: string
    instanceSize?: string
    instanceCount?: number
    region?: string
    healthCheckPath?: string
    buildCommand?: string | null
    startCommand?: string | null
    dockerfilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentConfigUncheckedCreateInput = {
    id?: string
    projectId: string
    instanceSize?: string
    instanceCount?: number
    region?: string
    healthCheckPath?: string
    buildCommand?: string | null
    startCommand?: string | null
    dockerfilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    instanceSize?: StringFieldUpdateOperationsInput | string
    instanceCount?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    healthCheckPath?: StringFieldUpdateOperationsInput | string
    buildCommand?: NullableStringFieldUpdateOperationsInput | string | null
    startCommand?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    instanceSize?: StringFieldUpdateOperationsInput | string
    instanceCount?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    healthCheckPath?: StringFieldUpdateOperationsInput | string
    buildCommand?: NullableStringFieldUpdateOperationsInput | string | null
    startCommand?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentConfigCreateManyInput = {
    id?: string
    projectId: string
    instanceSize?: string
    instanceCount?: number
    region?: string
    healthCheckPath?: string
    buildCommand?: string | null
    startCommand?: string | null
    dockerfilePath?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    instanceSize?: StringFieldUpdateOperationsInput | string
    instanceCount?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    healthCheckPath?: StringFieldUpdateOperationsInput | string
    buildCommand?: NullableStringFieldUpdateOperationsInput | string | null
    startCommand?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    instanceSize?: StringFieldUpdateOperationsInput | string
    instanceCount?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    healthCheckPath?: StringFieldUpdateOperationsInput | string
    buildCommand?: NullableStringFieldUpdateOperationsInput | string | null
    startCommand?: NullableStringFieldUpdateOperationsInput | string | null
    dockerfilePath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnvironmentListRelationFilter = {
    every?: EnvironmentWhereInput
    some?: EnvironmentWhereInput
    none?: EnvironmentWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type ManagedDatabaseListRelationFilter = {
    every?: ManagedDatabaseWhereInput
    some?: ManagedDatabaseWhereInput
    none?: ManagedDatabaseWhereInput
  }

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnvironmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagedDatabaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTeamIdSlugCompoundUniqueInput = {
    teamId: string
    slug: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    teamId?: SortOrder
    description?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    repositoryUrl?: SortOrder
    defaultBranch?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    teamId?: SortOrder
    description?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    repositoryUrl?: SortOrder
    defaultBranch?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    teamId?: SortOrder
    description?: SortOrder
    sourceType?: SortOrder
    sourceUrl?: SortOrder
    repositoryUrl?: SortOrder
    defaultBranch?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    hostname?: SortOrder
    status?: SortOrder
    sslStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    hostname?: SortOrder
    status?: SortOrder
    sslStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    hostname?: SortOrder
    status?: SortOrder
    sslStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnvironmentVariableListRelationFilter = {
    every?: EnvironmentVariableWhereInput
    some?: EnvironmentVariableWhereInput
    none?: EnvironmentVariableWhereInput
  }

  export type EnvironmentVariableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvironmentProjectIdNameCompoundUniqueInput = {
    projectId: string
    name: string
  }

  export type EnvironmentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    branch?: SortOrder
    autoDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    branch?: SortOrder
    autoDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    branch?: SortOrder
    autoDeploy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnvironmentScalarRelationFilter = {
    is?: EnvironmentWhereInput
    isNot?: EnvironmentWhereInput
  }

  export type EnvironmentVariableEnvironmentIdKeyCompoundUniqueInput = {
    environmentId: string
    key: string
  }

  export type EnvironmentVariableCountOrderByAggregateInput = {
    id?: SortOrder
    environmentId?: SortOrder
    key?: SortOrder
    encryptedValue?: SortOrder
    isSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMaxOrderByAggregateInput = {
    id?: SortOrder
    environmentId?: SortOrder
    key?: SortOrder
    encryptedValue?: SortOrder
    isSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMinOrderByAggregateInput = {
    id?: SortOrder
    environmentId?: SortOrder
    key?: SortOrder
    encryptedValue?: SortOrder
    isSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buildId?: SortOrder
    imageTag?: SortOrder
    url?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buildId?: SortOrder
    imageTag?: SortOrder
    url?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buildId?: SortOrder
    imageTag?: SortOrder
    url?: SortOrder
    status?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ManagedDatabaseCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    status?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    dbName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagedDatabaseAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type ManagedDatabaseMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    status?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    dbName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagedDatabaseMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    version?: SortOrder
    status?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    dbName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManagedDatabaseSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DeploymentConfigCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    instanceSize?: SortOrder
    instanceCount?: SortOrder
    region?: SortOrder
    healthCheckPath?: SortOrder
    buildCommand?: SortOrder
    startCommand?: SortOrder
    dockerfilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentConfigAvgOrderByAggregateInput = {
    instanceCount?: SortOrder
  }

  export type DeploymentConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    instanceSize?: SortOrder
    instanceCount?: SortOrder
    region?: SortOrder
    healthCheckPath?: SortOrder
    buildCommand?: SortOrder
    startCommand?: SortOrder
    dockerfilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentConfigMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    instanceSize?: SortOrder
    instanceCount?: SortOrder
    region?: SortOrder
    healthCheckPath?: SortOrder
    buildCommand?: SortOrder
    startCommand?: SortOrder
    dockerfilePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentConfigSumOrderByAggregateInput = {
    instanceCount?: SortOrder
  }

  export type EnvironmentCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput> | EnvironmentCreateWithoutProjectInput[] | EnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentCreateOrConnectWithoutProjectInput | EnvironmentCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentCreateManyProjectInputEnvelope
    connect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
  }

  export type DeploymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ManagedDatabaseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput> | ManagedDatabaseCreateWithoutProjectInput[] | ManagedDatabaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagedDatabaseCreateOrConnectWithoutProjectInput | ManagedDatabaseCreateOrConnectWithoutProjectInput[]
    createMany?: ManagedDatabaseCreateManyProjectInputEnvelope
    connect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
  }

  export type DomainCreateNestedManyWithoutProjectInput = {
    create?: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput> | DomainCreateWithoutProjectInput[] | DomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProjectInput | DomainCreateOrConnectWithoutProjectInput[]
    createMany?: DomainCreateManyProjectInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type EnvironmentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput> | EnvironmentCreateWithoutProjectInput[] | EnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentCreateOrConnectWithoutProjectInput | EnvironmentCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentCreateManyProjectInputEnvelope
    connect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ManagedDatabaseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput> | ManagedDatabaseCreateWithoutProjectInput[] | ManagedDatabaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagedDatabaseCreateOrConnectWithoutProjectInput | ManagedDatabaseCreateOrConnectWithoutProjectInput[]
    createMany?: ManagedDatabaseCreateManyProjectInputEnvelope
    connect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
  }

  export type DomainUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput> | DomainCreateWithoutProjectInput[] | DomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProjectInput | DomainCreateOrConnectWithoutProjectInput[]
    createMany?: DomainCreateManyProjectInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnvironmentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput> | EnvironmentCreateWithoutProjectInput[] | EnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentCreateOrConnectWithoutProjectInput | EnvironmentCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentUpsertWithWhereUniqueWithoutProjectInput | EnvironmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentCreateManyProjectInputEnvelope
    set?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    disconnect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    delete?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    connect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    update?: EnvironmentUpdateWithWhereUniqueWithoutProjectInput | EnvironmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentUpdateManyWithWhereWithoutProjectInput | EnvironmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentScalarWhereInput | EnvironmentScalarWhereInput[]
  }

  export type DeploymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectInput | DeploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectInput | DeploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectInput | DeploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ManagedDatabaseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput> | ManagedDatabaseCreateWithoutProjectInput[] | ManagedDatabaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagedDatabaseCreateOrConnectWithoutProjectInput | ManagedDatabaseCreateOrConnectWithoutProjectInput[]
    upsert?: ManagedDatabaseUpsertWithWhereUniqueWithoutProjectInput | ManagedDatabaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ManagedDatabaseCreateManyProjectInputEnvelope
    set?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    disconnect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    delete?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    connect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    update?: ManagedDatabaseUpdateWithWhereUniqueWithoutProjectInput | ManagedDatabaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ManagedDatabaseUpdateManyWithWhereWithoutProjectInput | ManagedDatabaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ManagedDatabaseScalarWhereInput | ManagedDatabaseScalarWhereInput[]
  }

  export type DomainUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput> | DomainCreateWithoutProjectInput[] | DomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProjectInput | DomainCreateOrConnectWithoutProjectInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutProjectInput | DomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DomainCreateManyProjectInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutProjectInput | DomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutProjectInput | DomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type EnvironmentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput> | EnvironmentCreateWithoutProjectInput[] | EnvironmentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentCreateOrConnectWithoutProjectInput | EnvironmentCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentUpsertWithWhereUniqueWithoutProjectInput | EnvironmentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentCreateManyProjectInputEnvelope
    set?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    disconnect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    delete?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    connect?: EnvironmentWhereUniqueInput | EnvironmentWhereUniqueInput[]
    update?: EnvironmentUpdateWithWhereUniqueWithoutProjectInput | EnvironmentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentUpdateManyWithWhereWithoutProjectInput | EnvironmentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentScalarWhereInput | EnvironmentScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectInput | DeploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectInput | DeploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectInput | DeploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ManagedDatabaseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput> | ManagedDatabaseCreateWithoutProjectInput[] | ManagedDatabaseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagedDatabaseCreateOrConnectWithoutProjectInput | ManagedDatabaseCreateOrConnectWithoutProjectInput[]
    upsert?: ManagedDatabaseUpsertWithWhereUniqueWithoutProjectInput | ManagedDatabaseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ManagedDatabaseCreateManyProjectInputEnvelope
    set?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    disconnect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    delete?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    connect?: ManagedDatabaseWhereUniqueInput | ManagedDatabaseWhereUniqueInput[]
    update?: ManagedDatabaseUpdateWithWhereUniqueWithoutProjectInput | ManagedDatabaseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ManagedDatabaseUpdateManyWithWhereWithoutProjectInput | ManagedDatabaseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ManagedDatabaseScalarWhereInput | ManagedDatabaseScalarWhereInput[]
  }

  export type DomainUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput> | DomainCreateWithoutProjectInput[] | DomainUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProjectInput | DomainCreateOrConnectWithoutProjectInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutProjectInput | DomainUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DomainCreateManyProjectInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutProjectInput | DomainUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutProjectInput | DomainUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDomainsInput = {
    create?: XOR<ProjectCreateWithoutDomainsInput, ProjectUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDomainsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDomainsNestedInput = {
    create?: XOR<ProjectCreateWithoutDomainsInput, ProjectUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDomainsInput
    upsert?: ProjectUpsertWithoutDomainsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDomainsInput, ProjectUpdateWithoutDomainsInput>, ProjectUncheckedUpdateWithoutDomainsInput>
  }

  export type ProjectCreateNestedOneWithoutEnvironmentsInput = {
    create?: XOR<ProjectCreateWithoutEnvironmentsInput, ProjectUncheckedCreateWithoutEnvironmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvironmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnvironmentVariableCreateNestedManyWithoutEnvironmentInput = {
    create?: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput> | EnvironmentVariableCreateWithoutEnvironmentInput[] | EnvironmentVariableUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutEnvironmentInput | EnvironmentVariableCreateOrConnectWithoutEnvironmentInput[]
    createMany?: EnvironmentVariableCreateManyEnvironmentInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type EnvironmentVariableUncheckedCreateNestedManyWithoutEnvironmentInput = {
    create?: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput> | EnvironmentVariableCreateWithoutEnvironmentInput[] | EnvironmentVariableUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutEnvironmentInput | EnvironmentVariableCreateOrConnectWithoutEnvironmentInput[]
    createMany?: EnvironmentVariableCreateManyEnvironmentInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutEnvironmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutEnvironmentsInput, ProjectUncheckedCreateWithoutEnvironmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvironmentsInput
    upsert?: ProjectUpsertWithoutEnvironmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEnvironmentsInput, ProjectUpdateWithoutEnvironmentsInput>, ProjectUncheckedUpdateWithoutEnvironmentsInput>
  }

  export type EnvironmentVariableUpdateManyWithoutEnvironmentNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput> | EnvironmentVariableCreateWithoutEnvironmentInput[] | EnvironmentVariableUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutEnvironmentInput | EnvironmentVariableCreateOrConnectWithoutEnvironmentInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutEnvironmentInput | EnvironmentVariableUpsertWithWhereUniqueWithoutEnvironmentInput[]
    createMany?: EnvironmentVariableCreateManyEnvironmentInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutEnvironmentInput | EnvironmentVariableUpdateWithWhereUniqueWithoutEnvironmentInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutEnvironmentInput | EnvironmentVariableUpdateManyWithWhereWithoutEnvironmentInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutEnvironmentNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput> | EnvironmentVariableCreateWithoutEnvironmentInput[] | EnvironmentVariableUncheckedCreateWithoutEnvironmentInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutEnvironmentInput | EnvironmentVariableCreateOrConnectWithoutEnvironmentInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutEnvironmentInput | EnvironmentVariableUpsertWithWhereUniqueWithoutEnvironmentInput[]
    createMany?: EnvironmentVariableCreateManyEnvironmentInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutEnvironmentInput | EnvironmentVariableUpdateWithWhereUniqueWithoutEnvironmentInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutEnvironmentInput | EnvironmentVariableUpdateManyWithWhereWithoutEnvironmentInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type EnvironmentCreateNestedOneWithoutVariablesInput = {
    create?: XOR<EnvironmentCreateWithoutVariablesInput, EnvironmentUncheckedCreateWithoutVariablesInput>
    connectOrCreate?: EnvironmentCreateOrConnectWithoutVariablesInput
    connect?: EnvironmentWhereUniqueInput
  }

  export type EnvironmentUpdateOneRequiredWithoutVariablesNestedInput = {
    create?: XOR<EnvironmentCreateWithoutVariablesInput, EnvironmentUncheckedCreateWithoutVariablesInput>
    connectOrCreate?: EnvironmentCreateOrConnectWithoutVariablesInput
    upsert?: EnvironmentUpsertWithoutVariablesInput
    connect?: EnvironmentWhereUniqueInput
    update?: XOR<XOR<EnvironmentUpdateToOneWithWhereWithoutVariablesInput, EnvironmentUpdateWithoutVariablesInput>, EnvironmentUncheckedUpdateWithoutVariablesInput>
  }

  export type ProjectCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeploymentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeploymentsInput
    upsert?: ProjectUpsertWithoutDeploymentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDeploymentsInput, ProjectUpdateWithoutDeploymentsInput>, ProjectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ProjectCreateNestedOneWithoutDatabasesInput = {
    create?: XOR<ProjectCreateWithoutDatabasesInput, ProjectUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDatabasesInput
    connect?: ProjectWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutDatabasesNestedInput = {
    create?: XOR<ProjectCreateWithoutDatabasesInput, ProjectUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDatabasesInput
    upsert?: ProjectUpsertWithoutDatabasesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDatabasesInput, ProjectUpdateWithoutDatabasesInput>, ProjectUncheckedUpdateWithoutDatabasesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnvironmentCreateWithoutProjectInput = {
    id?: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variables?: EnvironmentVariableCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    variables?: EnvironmentVariableUncheckedCreateNestedManyWithoutEnvironmentInput
  }

  export type EnvironmentCreateOrConnectWithoutProjectInput = {
    where: EnvironmentWhereUniqueInput
    create: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentCreateManyProjectInputEnvelope = {
    data: EnvironmentCreateManyProjectInput | EnvironmentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type DeploymentCreateWithoutProjectInput = {
    id?: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUncheckedCreateWithoutProjectInput = {
    id?: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateOrConnectWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput>
  }

  export type DeploymentCreateManyProjectInputEnvelope = {
    data: DeploymentCreateManyProjectInput | DeploymentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ManagedDatabaseCreateWithoutProjectInput = {
    id?: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagedDatabaseUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagedDatabaseCreateOrConnectWithoutProjectInput = {
    where: ManagedDatabaseWhereUniqueInput
    create: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput>
  }

  export type ManagedDatabaseCreateManyProjectInputEnvelope = {
    data: ManagedDatabaseCreateManyProjectInput | ManagedDatabaseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type DomainCreateWithoutProjectInput = {
    id?: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUncheckedCreateWithoutProjectInput = {
    id?: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainCreateOrConnectWithoutProjectInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput>
  }

  export type DomainCreateManyProjectInputEnvelope = {
    data: DomainCreateManyProjectInput | DomainCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type EnvironmentUpsertWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentWhereUniqueInput
    update: XOR<EnvironmentUpdateWithoutProjectInput, EnvironmentUncheckedUpdateWithoutProjectInput>
    create: XOR<EnvironmentCreateWithoutProjectInput, EnvironmentUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentUpdateWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentWhereUniqueInput
    data: XOR<EnvironmentUpdateWithoutProjectInput, EnvironmentUncheckedUpdateWithoutProjectInput>
  }

  export type EnvironmentUpdateManyWithWhereWithoutProjectInput = {
    where: EnvironmentScalarWhereInput
    data: XOR<EnvironmentUpdateManyMutationInput, EnvironmentUncheckedUpdateManyWithoutProjectInput>
  }

  export type EnvironmentScalarWhereInput = {
    AND?: EnvironmentScalarWhereInput | EnvironmentScalarWhereInput[]
    OR?: EnvironmentScalarWhereInput[]
    NOT?: EnvironmentScalarWhereInput | EnvironmentScalarWhereInput[]
    id?: StringFilter<"Environment"> | string
    projectId?: StringFilter<"Environment"> | string
    name?: StringFilter<"Environment"> | string
    type?: StringFilter<"Environment"> | string
    branch?: StringNullableFilter<"Environment"> | string | null
    autoDeploy?: BoolFilter<"Environment"> | boolean
    createdAt?: DateTimeFilter<"Environment"> | Date | string
    updatedAt?: DateTimeFilter<"Environment"> | Date | string
  }

  export type DeploymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutProjectInput, DeploymentUncheckedUpdateWithoutProjectInput>
    create: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutProjectInput, DeploymentUncheckedUpdateWithoutProjectInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutProjectInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: StringFilter<"Deployment"> | string
    projectId?: StringFilter<"Deployment"> | string
    buildId?: StringFilter<"Deployment"> | string
    imageTag?: StringFilter<"Deployment"> | string
    url?: StringNullableFilter<"Deployment"> | string | null
    status?: StringFilter<"Deployment"> | string
    error?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
  }

  export type ManagedDatabaseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ManagedDatabaseWhereUniqueInput
    update: XOR<ManagedDatabaseUpdateWithoutProjectInput, ManagedDatabaseUncheckedUpdateWithoutProjectInput>
    create: XOR<ManagedDatabaseCreateWithoutProjectInput, ManagedDatabaseUncheckedCreateWithoutProjectInput>
  }

  export type ManagedDatabaseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ManagedDatabaseWhereUniqueInput
    data: XOR<ManagedDatabaseUpdateWithoutProjectInput, ManagedDatabaseUncheckedUpdateWithoutProjectInput>
  }

  export type ManagedDatabaseUpdateManyWithWhereWithoutProjectInput = {
    where: ManagedDatabaseScalarWhereInput
    data: XOR<ManagedDatabaseUpdateManyMutationInput, ManagedDatabaseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ManagedDatabaseScalarWhereInput = {
    AND?: ManagedDatabaseScalarWhereInput | ManagedDatabaseScalarWhereInput[]
    OR?: ManagedDatabaseScalarWhereInput[]
    NOT?: ManagedDatabaseScalarWhereInput | ManagedDatabaseScalarWhereInput[]
    id?: StringFilter<"ManagedDatabase"> | string
    projectId?: StringFilter<"ManagedDatabase"> | string
    name?: StringFilter<"ManagedDatabase"> | string
    type?: StringFilter<"ManagedDatabase"> | string
    version?: StringFilter<"ManagedDatabase"> | string
    status?: StringFilter<"ManagedDatabase"> | string
    host?: StringNullableFilter<"ManagedDatabase"> | string | null
    port?: IntFilter<"ManagedDatabase"> | number
    user?: StringFilter<"ManagedDatabase"> | string
    dbName?: StringFilter<"ManagedDatabase"> | string
    createdAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
    updatedAt?: DateTimeFilter<"ManagedDatabase"> | Date | string
  }

  export type DomainUpsertWithWhereUniqueWithoutProjectInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutProjectInput, DomainUncheckedUpdateWithoutProjectInput>
    create: XOR<DomainCreateWithoutProjectInput, DomainUncheckedCreateWithoutProjectInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutProjectInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutProjectInput, DomainUncheckedUpdateWithoutProjectInput>
  }

  export type DomainUpdateManyWithWhereWithoutProjectInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutProjectInput>
  }

  export type DomainScalarWhereInput = {
    AND?: DomainScalarWhereInput | DomainScalarWhereInput[]
    OR?: DomainScalarWhereInput[]
    NOT?: DomainScalarWhereInput | DomainScalarWhereInput[]
    id?: StringFilter<"Domain"> | string
    projectId?: StringFilter<"Domain"> | string
    hostname?: StringFilter<"Domain"> | string
    status?: StringFilter<"Domain"> | string
    sslStatus?: StringFilter<"Domain"> | string
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
  }

  export type ProjectCreateWithoutDomainsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentCreateNestedManyWithoutProjectInput
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDomainsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentUncheckedCreateNestedManyWithoutProjectInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDomainsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDomainsInput, ProjectUncheckedCreateWithoutDomainsInput>
  }

  export type ProjectUpsertWithoutDomainsInput = {
    update: XOR<ProjectUpdateWithoutDomainsInput, ProjectUncheckedUpdateWithoutDomainsInput>
    create: XOR<ProjectCreateWithoutDomainsInput, ProjectUncheckedCreateWithoutDomainsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDomainsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDomainsInput, ProjectUncheckedUpdateWithoutDomainsInput>
  }

  export type ProjectUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUncheckedUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutEnvironmentsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseCreateNestedManyWithoutProjectInput
    domains?: DomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEnvironmentsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseUncheckedCreateNestedManyWithoutProjectInput
    domains?: DomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEnvironmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEnvironmentsInput, ProjectUncheckedCreateWithoutEnvironmentsInput>
  }

  export type EnvironmentVariableCreateWithoutEnvironmentInput = {
    id?: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUncheckedCreateWithoutEnvironmentInput = {
    id?: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableCreateOrConnectWithoutEnvironmentInput = {
    where: EnvironmentVariableWhereUniqueInput
    create: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput>
  }

  export type EnvironmentVariableCreateManyEnvironmentInputEnvelope = {
    data: EnvironmentVariableCreateManyEnvironmentInput | EnvironmentVariableCreateManyEnvironmentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutEnvironmentsInput = {
    update: XOR<ProjectUpdateWithoutEnvironmentsInput, ProjectUncheckedUpdateWithoutEnvironmentsInput>
    create: XOR<ProjectCreateWithoutEnvironmentsInput, ProjectUncheckedCreateWithoutEnvironmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEnvironmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEnvironmentsInput, ProjectUncheckedUpdateWithoutEnvironmentsInput>
  }

  export type ProjectUpdateWithoutEnvironmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUpdateManyWithoutProjectNestedInput
    domains?: DomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEnvironmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUncheckedUpdateManyWithoutProjectNestedInput
    domains?: DomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type EnvironmentVariableUpsertWithWhereUniqueWithoutEnvironmentInput = {
    where: EnvironmentVariableWhereUniqueInput
    update: XOR<EnvironmentVariableUpdateWithoutEnvironmentInput, EnvironmentVariableUncheckedUpdateWithoutEnvironmentInput>
    create: XOR<EnvironmentVariableCreateWithoutEnvironmentInput, EnvironmentVariableUncheckedCreateWithoutEnvironmentInput>
  }

  export type EnvironmentVariableUpdateWithWhereUniqueWithoutEnvironmentInput = {
    where: EnvironmentVariableWhereUniqueInput
    data: XOR<EnvironmentVariableUpdateWithoutEnvironmentInput, EnvironmentVariableUncheckedUpdateWithoutEnvironmentInput>
  }

  export type EnvironmentVariableUpdateManyWithWhereWithoutEnvironmentInput = {
    where: EnvironmentVariableScalarWhereInput
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyWithoutEnvironmentInput>
  }

  export type EnvironmentVariableScalarWhereInput = {
    AND?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    OR?: EnvironmentVariableScalarWhereInput[]
    NOT?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    environmentId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    encryptedValue?: StringFilter<"EnvironmentVariable"> | string
    isSecret?: BoolFilter<"EnvironmentVariable"> | boolean
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
  }

  export type EnvironmentCreateWithoutVariablesInput = {
    id?: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEnvironmentsInput
  }

  export type EnvironmentUncheckedCreateWithoutVariablesInput = {
    id?: string
    projectId: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentCreateOrConnectWithoutVariablesInput = {
    where: EnvironmentWhereUniqueInput
    create: XOR<EnvironmentCreateWithoutVariablesInput, EnvironmentUncheckedCreateWithoutVariablesInput>
  }

  export type EnvironmentUpsertWithoutVariablesInput = {
    update: XOR<EnvironmentUpdateWithoutVariablesInput, EnvironmentUncheckedUpdateWithoutVariablesInput>
    create: XOR<EnvironmentCreateWithoutVariablesInput, EnvironmentUncheckedCreateWithoutVariablesInput>
    where?: EnvironmentWhereInput
  }

  export type EnvironmentUpdateToOneWithWhereWithoutVariablesInput = {
    where?: EnvironmentWhereInput
    data: XOR<EnvironmentUpdateWithoutVariablesInput, EnvironmentUncheckedUpdateWithoutVariablesInput>
  }

  export type EnvironmentUpdateWithoutVariablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEnvironmentsNestedInput
  }

  export type EnvironmentUncheckedUpdateWithoutVariablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseCreateNestedManyWithoutProjectInput
    domains?: DomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentUncheckedCreateNestedManyWithoutProjectInput
    databases?: ManagedDatabaseUncheckedCreateNestedManyWithoutProjectInput
    domains?: DomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDeploymentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
  }

  export type ProjectUpsertWithoutDeploymentsInput = {
    update: XOR<ProjectUpdateWithoutDeploymentsInput, ProjectUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDeploymentsInput, ProjectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ProjectUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUpdateManyWithoutProjectNestedInput
    domains?: DomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUncheckedUpdateManyWithoutProjectNestedInput
    databases?: ManagedDatabaseUncheckedUpdateManyWithoutProjectNestedInput
    domains?: DomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutDatabasesInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentCreateNestedManyWithoutProjectInput
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
    domains?: DomainCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDatabasesInput = {
    id?: string
    name: string
    slug: string
    teamId: string
    description?: string | null
    sourceType?: string
    sourceUrl?: string | null
    repositoryUrl?: string | null
    defaultBranch?: string
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    environments?: EnvironmentUncheckedCreateNestedManyWithoutProjectInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
    domains?: DomainUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDatabasesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDatabasesInput, ProjectUncheckedCreateWithoutDatabasesInput>
  }

  export type ProjectUpsertWithoutDatabasesInput = {
    update: XOR<ProjectUpdateWithoutDatabasesInput, ProjectUncheckedUpdateWithoutDatabasesInput>
    create: XOR<ProjectCreateWithoutDatabasesInput, ProjectUncheckedCreateWithoutDatabasesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDatabasesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDatabasesInput, ProjectUncheckedUpdateWithoutDatabasesInput>
  }

  export type ProjectUpdateWithoutDatabasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
    domains?: DomainUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDatabasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    repositoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    defaultBranch?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    environments?: EnvironmentUncheckedUpdateManyWithoutProjectNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
    domains?: DomainUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type EnvironmentCreateManyProjectInput = {
    id?: string
    name: string
    type?: string
    branch?: string | null
    autoDeploy?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateManyProjectInput = {
    id?: string
    buildId: string
    imageTag: string
    url?: string | null
    status?: string
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagedDatabaseCreateManyProjectInput = {
    id?: string
    name: string
    type?: string
    version?: string
    status?: string
    host?: string | null
    port?: number
    user?: string
    dbName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainCreateManyProjectInput = {
    id?: string
    hostname: string
    status?: string
    sslStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variables?: EnvironmentVariableUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variables?: EnvironmentVariableUncheckedUpdateManyWithoutEnvironmentNestedInput
  }

  export type EnvironmentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    autoDeploy?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildId?: StringFieldUpdateOperationsInput | string
    imageTag?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagedDatabaseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    host?: NullableStringFieldUpdateOperationsInput | string | null
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostname?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sslStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateManyEnvironmentInput = {
    id?: string
    key: string
    encryptedValue: string
    isSecret?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutEnvironmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    encryptedValue?: StringFieldUpdateOperationsInput | string
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
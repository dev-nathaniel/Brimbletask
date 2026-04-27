
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model OAuthAccount
 * 
 */
export type OAuthAccount = $Result.DefaultSelection<Prisma.$OAuthAccountPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthAccount`: Exposes CRUD operations for the **OAuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthAccounts
    * const oAuthAccounts = await prisma.oAuthAccount.findMany()
    * ```
    */
  get oAuthAccount(): Prisma.OAuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Team: 'Team',
    TeamMember: 'TeamMember',
    ApiKey: 'ApiKey',
    OAuthAccount: 'OAuthAccount',
    Referral: 'Referral',
    RefreshToken: 'RefreshToken'
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
      modelProps: "user" | "team" | "teamMember" | "apiKey" | "oAuthAccount" | "referral" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      OAuthAccount: {
        payload: Prisma.$OAuthAccountPayload<ExtArgs>
        fields: Prisma.OAuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findFirst: {
            args: Prisma.OAuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findMany: {
            args: Prisma.OAuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          create: {
            args: Prisma.OAuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          createMany: {
            args: Prisma.OAuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          delete: {
            args: Prisma.OAuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          update: {
            args: Prisma.OAuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.OAuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.OAuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          aggregate: {
            args: Prisma.OAuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthAccount>
          }
          groupBy: {
            args: Prisma.OAuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
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
    user?: UserOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    apiKey?: ApiKeyOmit
    oAuthAccount?: OAuthAccountOmit
    referral?: ReferralOmit
    refreshToken?: RefreshTokenOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teamMembers: number
    apiKeys: number
    referralsGiven: number
    oauthAccounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | UserCountOutputTypeCountTeamMembersArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    referralsGiven?: boolean | UserCountOutputTypeCountReferralsGivenArgs
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    apiKeys: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    apiKeys?: boolean | TeamCountOutputTypeCountApiKeysArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    avatarUrl: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    avatarUrl: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    avatarUrl: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    passwordHash: string
    avatarUrl: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    referralsGiven?: boolean | User$referralsGivenArgs<ExtArgs>
    referralUsed?: boolean | User$referralUsedArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "avatarUrl" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    referralsGiven?: boolean | User$referralsGivenArgs<ExtArgs>
    referralUsed?: boolean | User$referralUsedArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teamMembers: Prisma.$TeamMemberPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      referralsGiven: Prisma.$ReferralPayload<ExtArgs>[]
      referralUsed: Prisma.$ReferralPayload<ExtArgs> | null
      oauthAccounts: Prisma.$OAuthAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      passwordHash: string
      avatarUrl: string | null
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamMembers<T extends User$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralsGiven<T extends User$referralsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralUsed<T extends User$referralUsedArgs<ExtArgs> = {}>(args?: Subset<T, User$referralUsedArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teamMembers
   */
  export type User$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.referralsGiven
   */
  export type User$referralsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User.referralUsed
   */
  export type User$referralUsedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
  }

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    cursor?: OAuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    apiKeys?: boolean | Team$apiKeysArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    apiKeys?: boolean | Team$apiKeysArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends Team$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Team$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly slug: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team.apiKeys
   */
  export type Team$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    role: string
    joinedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "role" | "joinedAt", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'String'>
    readonly joinedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyPrefix: string | null
    hashedKey: string | null
    userId: string | null
    teamId: string | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyPrefix: string | null
    hashedKey: string | null
    userId: string | null
    teamId: string | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyPrefix: number
    hashedKey: number
    userId: number
    teamId: number
    scopes: number
    lastUsedAt: number
    expiresAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    hashedKey?: true
    userId?: true
    teamId?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    hashedKey?: true
    userId?: true
    teamId?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    hashedKey?: true
    userId?: true
    teamId?: true
    scopes?: true
    lastUsedAt?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    keyPrefix: string
    hashedKey: string
    userId: string
    teamId: string | null
    scopes: string[]
    lastUsedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    hashedKey?: boolean
    userId?: boolean
    teamId?: boolean
    scopes?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    hashedKey?: boolean
    userId?: boolean
    teamId?: boolean
    scopes?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    hashedKey?: boolean
    userId?: boolean
    teamId?: boolean
    scopes?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    hashedKey?: boolean
    userId?: boolean
    teamId?: boolean
    scopes?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyPrefix" | "hashedKey" | "userId" | "teamId" | "scopes" | "lastUsedAt" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | ApiKey$teamArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyPrefix: string
      hashedKey: string
      userId: string
      teamId: string | null
      scopes: string[]
      lastUsedAt: Date | null
      expiresAt: Date | null
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends ApiKey$teamArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyPrefix: FieldRef<"ApiKey", 'String'>
    readonly hashedKey: FieldRef<"ApiKey", 'String'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly teamId: FieldRef<"ApiKey", 'String'>
    readonly scopes: FieldRef<"ApiKey", 'String[]'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.team
   */
  export type ApiKey$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model OAuthAccount
   */

  export type AggregateOAuthAccount = {
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  export type OAuthAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthAccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OAuthAccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthAccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OAuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccount to aggregate.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthAccounts
    **/
    _count?: true | OAuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type GetOAuthAccountAggregateType<T extends OAuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthAccount[P]>
      : GetScalarType<T[P], AggregateOAuthAccount[P]>
  }




  export type OAuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithAggregationInput | OAuthAccountOrderByWithAggregationInput[]
    by: OAuthAccountScalarFieldEnum[] | OAuthAccountScalarFieldEnum
    having?: OAuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthAccountCountAggregateInputType | true
    _min?: OAuthAccountMinAggregateInputType
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type OAuthAccountGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  type GetOAuthAccountGroupByPayload<T extends OAuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type OAuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OAuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt" | "createdAt", ExtArgs["result"]["oAuthAccount"]>
  export type OAuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerAccountId: string
      accessToken: string
      refreshToken: string | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["oAuthAccount"]>
    composites: {}
  }

  type OAuthAccountGetPayload<S extends boolean | null | undefined | OAuthAccountDefaultArgs> = $Result.GetResult<Prisma.$OAuthAccountPayload, S>

  type OAuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthAccountCountAggregateInputType | true
    }

  export interface OAuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthAccount'], meta: { name: 'OAuthAccount' } }
    /**
     * Find zero or one OAuthAccount that matches the filter.
     * @param {OAuthAccountFindUniqueArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthAccountFindUniqueArgs>(args: SelectSubset<T, OAuthAccountFindUniqueArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthAccountFindUniqueOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthAccountFindFirstArgs>(args?: SelectSubset<T, OAuthAccountFindFirstArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany()
     * 
     * // Get first 10 OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthAccountFindManyArgs>(args?: SelectSubset<T, OAuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthAccount.
     * @param {OAuthAccountCreateArgs} args - Arguments to create a OAuthAccount.
     * @example
     * // Create one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.create({
     *   data: {
     *     // ... data to create a OAuthAccount
     *   }
     * })
     * 
     */
    create<T extends OAuthAccountCreateArgs>(args: SelectSubset<T, OAuthAccountCreateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthAccounts.
     * @param {OAuthAccountCreateManyArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthAccountCreateManyArgs>(args?: SelectSubset<T, OAuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthAccounts and returns the data saved in the database.
     * @param {OAuthAccountCreateManyAndReturnArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthAccount.
     * @param {OAuthAccountDeleteArgs} args - Arguments to delete one OAuthAccount.
     * @example
     * // Delete one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.delete({
     *   where: {
     *     // ... filter to delete one OAuthAccount
     *   }
     * })
     * 
     */
    delete<T extends OAuthAccountDeleteArgs>(args: SelectSubset<T, OAuthAccountDeleteArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthAccount.
     * @param {OAuthAccountUpdateArgs} args - Arguments to update one OAuthAccount.
     * @example
     * // Update one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthAccountUpdateArgs>(args: SelectSubset<T, OAuthAccountUpdateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthAccounts.
     * @param {OAuthAccountDeleteManyArgs} args - Arguments to filter OAuthAccounts to delete.
     * @example
     * // Delete a few OAuthAccounts
     * const { count } = await prisma.oAuthAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthAccountDeleteManyArgs>(args?: SelectSubset<T, OAuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthAccountUpdateManyArgs>(args: SelectSubset<T, OAuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts and returns the data updated in the database.
     * @param {OAuthAccountUpdateManyAndReturnArgs} args - Arguments to update many OAuthAccounts.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends OAuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuthAccount.
     * @param {OAuthAccountUpsertArgs} args - Arguments to update or create a OAuthAccount.
     * @example
     * // Update or create a OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.upsert({
     *   create: {
     *     // ... data to create a OAuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends OAuthAccountUpsertArgs>(args: SelectSubset<T, OAuthAccountUpsertArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountCountArgs} args - Arguments to filter OAuthAccounts to count.
     * @example
     * // Count the number of OAuthAccounts
     * const count = await prisma.oAuthAccount.count({
     *   where: {
     *     // ... the filter for the OAuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends OAuthAccountCountArgs>(
      args?: Subset<T, OAuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthAccountAggregateArgs>(args: Subset<T, OAuthAccountAggregateArgs>): Prisma.PrismaPromise<GetOAuthAccountAggregateType<T>>

    /**
     * Group by OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountGroupByArgs} args - Group by arguments.
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
      T extends OAuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: OAuthAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthAccount model
   */
  readonly fields: OAuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuthAccount model
   */
  interface OAuthAccountFieldRefs {
    readonly id: FieldRef<"OAuthAccount", 'String'>
    readonly userId: FieldRef<"OAuthAccount", 'String'>
    readonly provider: FieldRef<"OAuthAccount", 'String'>
    readonly providerAccountId: FieldRef<"OAuthAccount", 'String'>
    readonly accessToken: FieldRef<"OAuthAccount", 'String'>
    readonly refreshToken: FieldRef<"OAuthAccount", 'String'>
    readonly expiresAt: FieldRef<"OAuthAccount", 'DateTime'>
    readonly createdAt: FieldRef<"OAuthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthAccount findUnique
   */
  export type OAuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findUniqueOrThrow
   */
  export type OAuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findFirst
   */
  export type OAuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findFirstOrThrow
   */
  export type OAuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findMany
   */
  export type OAuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccounts to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount create
   */
  export type OAuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthAccount.
     */
    data: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
  }

  /**
   * OAuthAccount createMany
   */
  export type OAuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthAccount createManyAndReturn
   */
  export type OAuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount update
   */
  export type OAuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthAccount.
     */
    data: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
    /**
     * Choose, which OAuthAccount to update.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount updateMany
   */
  export type OAuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
  }

  /**
   * OAuthAccount updateManyAndReturn
   */
  export type OAuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount upsert
   */
  export type OAuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthAccount to update in case it exists.
     */
    where: OAuthAccountWhereUniqueInput
    /**
     * In case the OAuthAccount found by the `where` argument doesn't exist, create a new OAuthAccount with this data.
     */
    create: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
    /**
     * In case the OAuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
  }

  /**
   * OAuthAccount delete
   */
  export type OAuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter which OAuthAccount to delete.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount deleteMany
   */
  export type OAuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccounts to delete
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * OAuthAccount without action
   */
  export type OAuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredUserId: string | null
    code: string | null
    redeemed: boolean | null
    redeemedAt: Date | null
    createdAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredUserId: string | null
    code: string | null
    redeemed: boolean | null
    redeemedAt: Date | null
    createdAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    referrerId: number
    referredUserId: number
    code: number
    redeemed: number
    redeemedAt: number
    createdAt: number
    _all: number
  }


  export type ReferralMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    code?: true
    redeemed?: true
    redeemedAt?: true
    createdAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    code?: true
    redeemed?: true
    redeemedAt?: true
    createdAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    code?: true
    redeemed?: true
    redeemedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    referrerId: string
    referredUserId: string | null
    code: string
    redeemed: boolean
    redeemedAt: Date | null
    createdAt: Date
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    code?: boolean
    redeemed?: boolean
    redeemedAt?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    code?: boolean
    redeemed?: boolean
    redeemedAt?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    code?: boolean
    redeemed?: boolean
    redeemedAt?: boolean
    createdAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    code?: boolean
    redeemed?: boolean
    redeemedAt?: boolean
    createdAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referrerId" | "referredUserId" | "code" | "redeemed" | "redeemedAt" | "createdAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | Referral$referredUserArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referredUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredUserId: string | null
      code: string
      redeemed: boolean
      redeemedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
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
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends Referral$referredUserArgs<ExtArgs> = {}>(args?: Subset<T, Referral$referredUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Referral model
   */
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'String'>
    readonly referrerId: FieldRef<"Referral", 'String'>
    readonly referredUserId: FieldRef<"Referral", 'String'>
    readonly code: FieldRef<"Referral", 'String'>
    readonly redeemed: FieldRef<"Referral", 'Boolean'>
    readonly redeemedAt: FieldRef<"Referral", 'DateTime'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral.referredUser
   */
  export type Referral$referredUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    revokedAt: Date | null
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["refreshToken"]>

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyPrefix: 'keyPrefix',
    hashedKey: 'hashedKey',
    userId: 'userId',
    teamId: 'teamId',
    scopes: 'scopes',
    lastUsedAt: 'lastUsedAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const OAuthAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OAuthAccountScalarFieldEnum = (typeof OAuthAccountScalarFieldEnum)[keyof typeof OAuthAccountScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredUserId: 'referredUserId',
    code: 'code',
    redeemed: 'redeemed',
    redeemedAt: 'redeemedAt',
    createdAt: 'createdAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamMembers?: TeamMemberListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    referralsGiven?: ReferralListRelationFilter
    referralUsed?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    oauthAccounts?: OAuthAccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamMembers?: TeamMemberOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    referralsGiven?: ReferralOrderByRelationAggregateInput
    referralUsed?: ReferralOrderByWithRelationInput
    oauthAccounts?: OAuthAccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamMembers?: TeamMemberListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    referralsGiven?: ReferralListRelationFilter
    referralUsed?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    oauthAccounts?: OAuthAccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    members?: TeamMemberListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
  }, "id" | "slug">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    slug?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: TeamMemberUserIdTeamIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: StringWithAggregatesFilter<"TeamMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    hashedKey?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    teamId?: StringNullableFilter<"ApiKey"> | string | null
    scopes?: StringNullableListFilter<"ApiKey">
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    hashedKey?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    scopes?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hashedKey?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    teamId?: StringNullableFilter<"ApiKey"> | string | null
    scopes?: StringNullableListFilter<"ApiKey">
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id" | "hashedKey">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    hashedKey?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    scopes?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyPrefix?: StringWithAggregatesFilter<"ApiKey"> | string
    hashedKey?: StringWithAggregatesFilter<"ApiKey"> | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    teamId?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    scopes?: StringNullableListFilter<"ApiKey">
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type OAuthAccountWhereInput = {
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringFilter<"OAuthAccount"> | string
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OAuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: OAuthAccountProviderProviderAccountIdCompoundUniqueInput
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringFilter<"OAuthAccount"> | string
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type OAuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OAuthAccountCountOrderByAggregateInput
    _max?: OAuthAccountMaxOrderByAggregateInput
    _min?: OAuthAccountMinOrderByAggregateInput
  }

  export type OAuthAccountScalarWhereWithAggregatesInput = {
    AND?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    OR?: OAuthAccountScalarWhereWithAggregatesInput[]
    NOT?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthAccount"> | string
    userId?: StringWithAggregatesFilter<"OAuthAccount"> | string
    provider?: StringWithAggregatesFilter<"OAuthAccount"> | string
    providerAccountId?: StringWithAggregatesFilter<"OAuthAccount"> | string
    accessToken?: StringWithAggregatesFilter<"OAuthAccount"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"OAuthAccount"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"OAuthAccount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OAuthAccount"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: StringFilter<"Referral"> | string
    referrerId?: StringFilter<"Referral"> | string
    referredUserId?: StringNullableFilter<"Referral"> | string | null
    code?: StringFilter<"Referral"> | string
    redeemed?: BoolFilter<"Referral"> | boolean
    redeemedAt?: DateTimeNullableFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrderInput | SortOrder
    code?: SortOrder
    redeemed?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referredUser?: UserOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referredUserId?: string
    code?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    referrerId?: StringFilter<"Referral"> | string
    redeemed?: BoolFilter<"Referral"> | boolean
    redeemedAt?: DateTimeNullableFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "referredUserId" | "code">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrderInput | SortOrder
    code?: SortOrder
    redeemed?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referral"> | string
    referrerId?: StringWithAggregatesFilter<"Referral"> | string
    referredUserId?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    code?: StringWithAggregatesFilter<"Referral"> | string
    redeemed?: BoolWithAggregatesFilter<"Referral"> | boolean
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralUncheckedCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUncheckedUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    apiKeys?: ApiKeyCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMembersInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
    team?: TeamCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    userId: string
    teamId?: string | null
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
    team?: TeamUpdateOneWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    userId: string
    teamId?: string | null
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOauthAccountsInput
  }

  export type OAuthAccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput
  }

  export type OAuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    id?: string
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralsGivenInput
    referredUser?: UserCreateNestedOneWithoutReferralUsedInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredUserId?: string | null
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReferralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralsGivenNestedInput
    referredUser?: UserUpdateOneWithoutReferralUsedNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredUserId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: string
    referrerId: string
    referredUserId?: string | null
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredUserId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type ReferralNullableScalarRelationFilter = {
    is?: ReferralWhereInput | null
    isNot?: ReferralWhereInput | null
  }

  export type OAuthAccountListRelationFilter = {
    every?: OAuthAccountWhereInput
    some?: OAuthAccountWhereInput
    none?: OAuthAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    emailVerified?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    hashedKey?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    scopes?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    hashedKey?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    hashedKey?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OAuthAccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type OAuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    code?: SortOrder
    redeemed?: SortOrder
    redeemedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    code?: SortOrder
    redeemed?: SortOrder
    redeemedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    code?: SortOrder
    redeemed?: SortOrder
    redeemedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralCreateNestedOneWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput
    connect?: ReferralWhereUniqueInput
  }

  export type OAuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedOneWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput
    connect?: ReferralWhereUniqueInput
  }

  export type OAuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferrerInput | ReferralUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferrerInput | ReferralUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferrerInput | ReferralUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUpdateOneWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput
    upsert?: ReferralUpsertWithoutReferredUserInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutReferredUserInput, ReferralUpdateWithoutReferredUserInput>, ReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type OAuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferrerInput | ReferralUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferrerInput | ReferralUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferrerInput | ReferralUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateOneWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput
    upsert?: ReferralUpsertWithoutReferredUserInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutReferredUserInput, ReferralUpdateWithoutReferredUserInput>, ReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutTeamInput = {
    create?: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput> | ApiKeyCreateWithoutTeamInput[] | ApiKeyUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTeamInput | ApiKeyCreateOrConnectWithoutTeamInput[]
    createMany?: ApiKeyCreateManyTeamInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput> | ApiKeyCreateWithoutTeamInput[] | ApiKeyUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTeamInput | ApiKeyCreateOrConnectWithoutTeamInput[]
    createMany?: ApiKeyCreateManyTeamInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput> | ApiKeyCreateWithoutTeamInput[] | ApiKeyUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTeamInput | ApiKeyCreateOrConnectWithoutTeamInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutTeamInput | ApiKeyUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ApiKeyCreateManyTeamInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutTeamInput | ApiKeyUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutTeamInput | ApiKeyUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput> | ApiKeyCreateWithoutTeamInput[] | ApiKeyUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutTeamInput | ApiKeyCreateOrConnectWithoutTeamInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutTeamInput | ApiKeyUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ApiKeyCreateManyTeamInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutTeamInput | ApiKeyUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutTeamInput | ApiKeyUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    upsert?: UserUpsertWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembersInput, UserUpdateWithoutTeamMembersInput>, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type ApiKeyCreatescopesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<TeamCreateWithoutApiKeysInput, TeamUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutApiKeysInput
    connect?: TeamWhereUniqueInput
  }

  export type ApiKeyUpdatescopesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type TeamUpdateOneWithoutApiKeysNestedInput = {
    create?: XOR<TeamCreateWithoutApiKeysInput, TeamUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: TeamCreateOrConnectWithoutApiKeysInput
    upsert?: TeamUpsertWithoutApiKeysInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutApiKeysInput, TeamUpdateWithoutApiKeysInput>, TeamUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    upsert?: UserUpsertWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthAccountsInput, UserUpdateWithoutOauthAccountsInput>, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserCreateNestedOneWithoutReferralsGivenInput = {
    create?: XOR<UserCreateWithoutReferralsGivenInput, UserUncheckedCreateWithoutReferralsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralUsedInput = {
    create?: XOR<UserCreateWithoutReferralUsedInput, UserUncheckedCreateWithoutReferralUsedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReferralsGivenInput, UserUncheckedCreateWithoutReferralsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsGivenInput
    upsert?: UserUpsertWithoutReferralsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsGivenInput, UserUpdateWithoutReferralsGivenInput>, UserUncheckedUpdateWithoutReferralsGivenInput>
  }

  export type UserUpdateOneWithoutReferralUsedNestedInput = {
    create?: XOR<UserCreateWithoutReferralUsedInput, UserUncheckedCreateWithoutReferralUsedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsedInput
    upsert?: UserUpsertWithoutReferralUsedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralUsedInput, UserUpdateWithoutReferralUsedInput>, UserUncheckedUpdateWithoutReferralUsedInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    teamId?: string | null
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReferrerInput = {
    id?: string
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
    referredUser?: UserCreateNestedOneWithoutReferralUsedInput
  }

  export type ReferralUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredUserId?: string | null
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralCreateManyReferrerInputEnvelope = {
    data: ReferralCreateManyReferrerInput | ReferralCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReferredUserInput = {
    id?: string
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralsGivenInput
  }

  export type ReferralUncheckedCreateWithoutReferredUserInput = {
    id?: string
    referrerId: string
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type OAuthAccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OAuthAccountCreateOrConnectWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountCreateManyUserInputEnvelope = {
    data: OAuthAccountCreateManyUserInput | OAuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    hashedKey?: StringFilter<"ApiKey"> | string
    userId?: StringFilter<"ApiKey"> | string
    teamId?: StringNullableFilter<"ApiKey"> | string | null
    scopes?: StringNullableListFilter<"ApiKey">
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReferrerInput, ReferralUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReferrerInput, ReferralUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: StringFilter<"Referral"> | string
    referrerId?: StringFilter<"Referral"> | string
    referredUserId?: StringNullableFilter<"Referral"> | string | null
    code?: StringFilter<"Referral"> | string
    redeemed?: BoolFilter<"Referral"> | boolean
    redeemedAt?: DateTimeNullableFilter<"Referral"> | Date | string | null
    createdAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type ReferralUpsertWithoutReferredUserInput = {
    update: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutReferredUserInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type ReferralUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralsGivenNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    update: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    data: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type OAuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: OAuthAccountScalarWhereInput
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthAccountScalarWhereInput = {
    AND?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    OR?: OAuthAccountScalarWhereInput[]
    NOT?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerAccountId?: StringFilter<"OAuthAccount"> | string
    accessToken?: StringFilter<"OAuthAccount"> | string
    refreshToken?: StringNullableFilter<"OAuthAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutTeamInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    userId: string
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutTeamInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput>
  }

  export type ApiKeyCreateManyTeamInputEnvelope = {
    data: ApiKeyCreateManyTeamInput | ApiKeyCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutTeamInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutTeamInput, ApiKeyUncheckedUpdateWithoutTeamInput>
    create: XOR<ApiKeyCreateWithoutTeamInput, ApiKeyUncheckedCreateWithoutTeamInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutTeamInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutTeamInput, ApiKeyUncheckedUpdateWithoutTeamInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutTeamInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutTeamMembersInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralUncheckedCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutTeamMembersInput = {
    update: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUncheckedUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralUncheckedCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type TeamCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutApiKeysInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutApiKeysInput, TeamUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUncheckedUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutApiKeysInput = {
    update: XOR<TeamUpdateWithoutApiKeysInput, TeamUncheckedUpdateWithoutApiKeysInput>
    create: XOR<TeamCreateWithoutApiKeysInput, TeamUncheckedCreateWithoutApiKeysInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutApiKeysInput, TeamUncheckedUpdateWithoutApiKeysInput>
  }

  export type TeamUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralCreateNestedOneWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referralUsed?: ReferralUncheckedCreateNestedOneWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
  }

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUpdateOneWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsed?: ReferralUncheckedUpdateOneWithoutReferredUserNestedInput
  }

  export type UserCreateWithoutReferralsGivenInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    referralUsed?: ReferralCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralsGivenInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    referralUsed?: ReferralUncheckedCreateNestedOneWithoutReferredUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsGivenInput, UserUncheckedCreateWithoutReferralsGivenInput>
  }

  export type UserCreateWithoutReferralUsedInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralCreateNestedManyWithoutReferrerInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralUsedInput = {
    id?: string
    email: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    referralsGiven?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralUsedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralUsedInput, UserUncheckedCreateWithoutReferralUsedInput>
  }

  export type UserUpsertWithoutReferralsGivenInput = {
    update: XOR<UserUpdateWithoutReferralsGivenInput, UserUncheckedUpdateWithoutReferralsGivenInput>
    create: XOR<UserCreateWithoutReferralsGivenInput, UserUncheckedCreateWithoutReferralsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsGivenInput, UserUncheckedUpdateWithoutReferralsGivenInput>
  }

  export type UserUpdateWithoutReferralsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    referralUsed?: ReferralUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    referralUsed?: ReferralUncheckedUpdateOneWithoutReferredUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReferralUsedInput = {
    update: XOR<UserUpdateWithoutReferralUsedInput, UserUncheckedUpdateWithoutReferralUsedInput>
    create: XOR<UserCreateWithoutReferralUsedInput, UserUncheckedCreateWithoutReferralUsedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralUsedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralUsedInput, UserUncheckedUpdateWithoutReferralUsedInput>
  }

  export type UserUpdateWithoutReferralUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUpdateManyWithoutReferrerNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralUsedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    referralsGiven?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    teamId: string
    role?: string
    joinedAt?: Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    teamId?: string | null
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReferralCreateManyReferrerInput = {
    id?: string
    referredUserId?: string | null
    code: string
    redeemed?: boolean
    redeemedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OAuthAccountCreateManyUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUser?: UserUpdateOneWithoutReferralUsedNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredUserId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredUserId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    redeemed?: BoolFieldUpdateOperationsInput | boolean
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type ApiKeyCreateManyTeamInput = {
    id?: string
    name: string
    keyPrefix: string
    hashedKey: string
    userId: string
    scopes?: ApiKeyCreatescopesInput | string[]
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    hashedKey?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scopes?: ApiKeyUpdatescopesInput | string[]
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
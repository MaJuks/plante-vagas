
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
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model UserCandidate
 * 
 */
export type UserCandidate = $Result.DefaultSelection<Prisma.$UserCandidatePayload>
/**
 * Model AddressCompany
 * 
 */
export type AddressCompany = $Result.DefaultSelection<Prisma.$AddressCompanyPayload>
/**
 * Model UserCompany
 * 
 */
export type UserCompany = $Result.DefaultSelection<Prisma.$UserCompanyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCandidate`: Exposes CRUD operations for the **UserCandidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCandidates
    * const userCandidates = await prisma.userCandidate.findMany()
    * ```
    */
  get userCandidate(): Prisma.UserCandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addressCompany`: Exposes CRUD operations for the **AddressCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddressCompanies
    * const addressCompanies = await prisma.addressCompany.findMany()
    * ```
    */
  get addressCompany(): Prisma.AddressCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCompany`: Exposes CRUD operations for the **UserCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCompanies
    * const userCompanies = await prisma.userCompany.findMany()
    * ```
    */
  get userCompany(): Prisma.UserCompanyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Address: 'Address',
    UserCandidate: 'UserCandidate',
    AddressCompany: 'AddressCompany',
    UserCompany: 'UserCompany'
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
      modelProps: "address" | "userCandidate" | "addressCompany" | "userCompany"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      UserCandidate: {
        payload: Prisma.$UserCandidatePayload<ExtArgs>
        fields: Prisma.UserCandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          findFirst: {
            args: Prisma.UserCandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          findMany: {
            args: Prisma.UserCandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>[]
          }
          create: {
            args: Prisma.UserCandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          createMany: {
            args: Prisma.UserCandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>[]
          }
          delete: {
            args: Prisma.UserCandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          update: {
            args: Prisma.UserCandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          deleteMany: {
            args: Prisma.UserCandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>[]
          }
          upsert: {
            args: Prisma.UserCandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCandidatePayload>
          }
          aggregate: {
            args: Prisma.UserCandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCandidate>
          }
          groupBy: {
            args: Prisma.UserCandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCandidateCountArgs<ExtArgs>
            result: $Utils.Optional<UserCandidateCountAggregateOutputType> | number
          }
        }
      }
      AddressCompany: {
        payload: Prisma.$AddressCompanyPayload<ExtArgs>
        fields: Prisma.AddressCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          findFirst: {
            args: Prisma.AddressCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          findMany: {
            args: Prisma.AddressCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>[]
          }
          create: {
            args: Prisma.AddressCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          createMany: {
            args: Prisma.AddressCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>[]
          }
          delete: {
            args: Prisma.AddressCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          update: {
            args: Prisma.AddressCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          deleteMany: {
            args: Prisma.AddressCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>[]
          }
          upsert: {
            args: Prisma.AddressCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressCompanyPayload>
          }
          aggregate: {
            args: Prisma.AddressCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddressCompany>
          }
          groupBy: {
            args: Prisma.AddressCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCompanyCountAggregateOutputType> | number
          }
        }
      }
      UserCompany: {
        payload: Prisma.$UserCompanyPayload<ExtArgs>
        fields: Prisma.UserCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          findFirst: {
            args: Prisma.UserCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          findMany: {
            args: Prisma.UserCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>[]
          }
          create: {
            args: Prisma.UserCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          createMany: {
            args: Prisma.UserCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>[]
          }
          delete: {
            args: Prisma.UserCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          update: {
            args: Prisma.UserCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          deleteMany: {
            args: Prisma.UserCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>[]
          }
          upsert: {
            args: Prisma.UserCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCompanyPayload>
          }
          aggregate: {
            args: Prisma.UserCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCompany>
          }
          groupBy: {
            args: Prisma.UserCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<UserCompanyCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    address?: AddressOmit
    userCandidate?: UserCandidateOmit
    addressCompany?: AddressCompanyOmit
    userCompany?: UserCompanyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userCandidateId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userCandidateId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    postalCode: string | null
    userCandidateId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    postalCode: string | null
    userCandidateId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    country: number
    state: number
    city: number
    district: number
    street: number
    number: number
    complement: number
    postalCode: number
    userCandidateId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userCandidateId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userCandidateId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCandidateId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCandidateId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCandidateId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    country: string | null
    state: string | null
    city: string
    district: string
    street: string
    number: string
    complement: string | null
    postalCode: string
    userCandidateId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCandidateId?: boolean
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCandidateId?: boolean
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCandidateId?: boolean
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCandidateId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "state" | "city" | "district" | "street" | "number" | "complement" | "postalCode" | "userCandidateId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserCandidate?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      UserCandidate: Prisma.$UserCandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string | null
      state: string | null
      city: string
      district: string
      street: string
      number: string
      complement: string | null
      postalCode: string
      userCandidateId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserCandidate<T extends UserCandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCandidateDefaultArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly country: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly userCandidateId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model UserCandidate
   */

  export type AggregateUserCandidate = {
    _count: UserCandidateCountAggregateOutputType | null
    _avg: UserCandidateAvgAggregateOutputType | null
    _sum: UserCandidateSumAggregateOutputType | null
    _min: UserCandidateMinAggregateOutputType | null
    _max: UserCandidateMaxAggregateOutputType | null
  }

  export type UserCandidateAvgAggregateOutputType = {
    id: number | null
  }

  export type UserCandidateSumAggregateOutputType = {
    id: number | null
  }

  export type UserCandidateMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    dateNasc: Date | null
    cpf: string | null
    phone: string | null
    gender: string | null
    disablePerson: string | null
    createdAt: Date | null
  }

  export type UserCandidateMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    dateNasc: Date | null
    cpf: string | null
    phone: string | null
    gender: string | null
    disablePerson: string | null
    createdAt: Date | null
  }

  export type UserCandidateCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    dateNasc: number
    cpf: number
    phone: number
    gender: number
    disablePerson: number
    createdAt: number
    _all: number
  }


  export type UserCandidateAvgAggregateInputType = {
    id?: true
  }

  export type UserCandidateSumAggregateInputType = {
    id?: true
  }

  export type UserCandidateMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    dateNasc?: true
    cpf?: true
    phone?: true
    gender?: true
    disablePerson?: true
    createdAt?: true
  }

  export type UserCandidateMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    dateNasc?: true
    cpf?: true
    phone?: true
    gender?: true
    disablePerson?: true
    createdAt?: true
  }

  export type UserCandidateCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    dateNasc?: true
    cpf?: true
    phone?: true
    gender?: true
    disablePerson?: true
    createdAt?: true
    _all?: true
  }

  export type UserCandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCandidate to aggregate.
     */
    where?: UserCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCandidates to fetch.
     */
    orderBy?: UserCandidateOrderByWithRelationInput | UserCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCandidates
    **/
    _count?: true | UserCandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCandidateMaxAggregateInputType
  }

  export type GetUserCandidateAggregateType<T extends UserCandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCandidate[P]>
      : GetScalarType<T[P], AggregateUserCandidate[P]>
  }




  export type UserCandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCandidateWhereInput
    orderBy?: UserCandidateOrderByWithAggregationInput | UserCandidateOrderByWithAggregationInput[]
    by: UserCandidateScalarFieldEnum[] | UserCandidateScalarFieldEnum
    having?: UserCandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCandidateCountAggregateInputType | true
    _avg?: UserCandidateAvgAggregateInputType
    _sum?: UserCandidateSumAggregateInputType
    _min?: UserCandidateMinAggregateInputType
    _max?: UserCandidateMaxAggregateInputType
  }

  export type UserCandidateGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    dateNasc: Date
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt: Date
    _count: UserCandidateCountAggregateOutputType | null
    _avg: UserCandidateAvgAggregateOutputType | null
    _sum: UserCandidateSumAggregateOutputType | null
    _min: UserCandidateMinAggregateOutputType | null
    _max: UserCandidateMaxAggregateOutputType | null
  }

  type GetUserCandidateGroupByPayload<T extends UserCandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCandidateGroupByOutputType[P]>
            : GetScalarType<T[P], UserCandidateGroupByOutputType[P]>
        }
      >
    >


  export type UserCandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    dateNasc?: boolean
    cpf?: boolean
    phone?: boolean
    gender?: boolean
    disablePerson?: boolean
    createdAt?: boolean
    Address?: boolean | UserCandidate$AddressArgs<ExtArgs>
  }, ExtArgs["result"]["userCandidate"]>

  export type UserCandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    dateNasc?: boolean
    cpf?: boolean
    phone?: boolean
    gender?: boolean
    disablePerson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCandidate"]>

  export type UserCandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    dateNasc?: boolean
    cpf?: boolean
    phone?: boolean
    gender?: boolean
    disablePerson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCandidate"]>

  export type UserCandidateSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    dateNasc?: boolean
    cpf?: boolean
    phone?: boolean
    gender?: boolean
    disablePerson?: boolean
    createdAt?: boolean
  }

  export type UserCandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "dateNasc" | "cpf" | "phone" | "gender" | "disablePerson" | "createdAt", ExtArgs["result"]["userCandidate"]>
  export type UserCandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | UserCandidate$AddressArgs<ExtArgs>
  }
  export type UserCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCandidate"
    objects: {
      Address: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      dateNasc: Date
      cpf: string
      phone: string
      gender: string
      disablePerson: string
      createdAt: Date
    }, ExtArgs["result"]["userCandidate"]>
    composites: {}
  }

  type UserCandidateGetPayload<S extends boolean | null | undefined | UserCandidateDefaultArgs> = $Result.GetResult<Prisma.$UserCandidatePayload, S>

  type UserCandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCandidateCountAggregateInputType | true
    }

  export interface UserCandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCandidate'], meta: { name: 'UserCandidate' } }
    /**
     * Find zero or one UserCandidate that matches the filter.
     * @param {UserCandidateFindUniqueArgs} args - Arguments to find a UserCandidate
     * @example
     * // Get one UserCandidate
     * const userCandidate = await prisma.userCandidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCandidateFindUniqueArgs>(args: SelectSubset<T, UserCandidateFindUniqueArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCandidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCandidateFindUniqueOrThrowArgs} args - Arguments to find a UserCandidate
     * @example
     * // Get one UserCandidate
     * const userCandidate = await prisma.userCandidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCandidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateFindFirstArgs} args - Arguments to find a UserCandidate
     * @example
     * // Get one UserCandidate
     * const userCandidate = await prisma.userCandidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCandidateFindFirstArgs>(args?: SelectSubset<T, UserCandidateFindFirstArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCandidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateFindFirstOrThrowArgs} args - Arguments to find a UserCandidate
     * @example
     * // Get one UserCandidate
     * const userCandidate = await prisma.userCandidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCandidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCandidates
     * const userCandidates = await prisma.userCandidate.findMany()
     * 
     * // Get first 10 UserCandidates
     * const userCandidates = await prisma.userCandidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCandidateWithIdOnly = await prisma.userCandidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCandidateFindManyArgs>(args?: SelectSubset<T, UserCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCandidate.
     * @param {UserCandidateCreateArgs} args - Arguments to create a UserCandidate.
     * @example
     * // Create one UserCandidate
     * const UserCandidate = await prisma.userCandidate.create({
     *   data: {
     *     // ... data to create a UserCandidate
     *   }
     * })
     * 
     */
    create<T extends UserCandidateCreateArgs>(args: SelectSubset<T, UserCandidateCreateArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCandidates.
     * @param {UserCandidateCreateManyArgs} args - Arguments to create many UserCandidates.
     * @example
     * // Create many UserCandidates
     * const userCandidate = await prisma.userCandidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCandidateCreateManyArgs>(args?: SelectSubset<T, UserCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCandidates and returns the data saved in the database.
     * @param {UserCandidateCreateManyAndReturnArgs} args - Arguments to create many UserCandidates.
     * @example
     * // Create many UserCandidates
     * const userCandidate = await prisma.userCandidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCandidates and only return the `id`
     * const userCandidateWithIdOnly = await prisma.userCandidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCandidate.
     * @param {UserCandidateDeleteArgs} args - Arguments to delete one UserCandidate.
     * @example
     * // Delete one UserCandidate
     * const UserCandidate = await prisma.userCandidate.delete({
     *   where: {
     *     // ... filter to delete one UserCandidate
     *   }
     * })
     * 
     */
    delete<T extends UserCandidateDeleteArgs>(args: SelectSubset<T, UserCandidateDeleteArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCandidate.
     * @param {UserCandidateUpdateArgs} args - Arguments to update one UserCandidate.
     * @example
     * // Update one UserCandidate
     * const userCandidate = await prisma.userCandidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCandidateUpdateArgs>(args: SelectSubset<T, UserCandidateUpdateArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCandidates.
     * @param {UserCandidateDeleteManyArgs} args - Arguments to filter UserCandidates to delete.
     * @example
     * // Delete a few UserCandidates
     * const { count } = await prisma.userCandidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCandidateDeleteManyArgs>(args?: SelectSubset<T, UserCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCandidates
     * const userCandidate = await prisma.userCandidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCandidateUpdateManyArgs>(args: SelectSubset<T, UserCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCandidates and returns the data updated in the database.
     * @param {UserCandidateUpdateManyAndReturnArgs} args - Arguments to update many UserCandidates.
     * @example
     * // Update many UserCandidates
     * const userCandidate = await prisma.userCandidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCandidates and only return the `id`
     * const userCandidateWithIdOnly = await prisma.userCandidate.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCandidate.
     * @param {UserCandidateUpsertArgs} args - Arguments to update or create a UserCandidate.
     * @example
     * // Update or create a UserCandidate
     * const userCandidate = await prisma.userCandidate.upsert({
     *   create: {
     *     // ... data to create a UserCandidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCandidate we want to update
     *   }
     * })
     */
    upsert<T extends UserCandidateUpsertArgs>(args: SelectSubset<T, UserCandidateUpsertArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCandidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateCountArgs} args - Arguments to filter UserCandidates to count.
     * @example
     * // Count the number of UserCandidates
     * const count = await prisma.userCandidate.count({
     *   where: {
     *     // ... the filter for the UserCandidates we want to count
     *   }
     * })
    **/
    count<T extends UserCandidateCountArgs>(
      args?: Subset<T, UserCandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCandidateAggregateArgs>(args: Subset<T, UserCandidateAggregateArgs>): Prisma.PrismaPromise<GetUserCandidateAggregateType<T>>

    /**
     * Group by UserCandidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCandidateGroupByArgs} args - Group by arguments.
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
      T extends UserCandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCandidateGroupByArgs['orderBy'] }
        : { orderBy?: UserCandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCandidate model
   */
  readonly fields: UserCandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCandidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Address<T extends UserCandidate$AddressArgs<ExtArgs> = {}>(args?: Subset<T, UserCandidate$AddressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCandidate model
   */
  interface UserCandidateFieldRefs {
    readonly id: FieldRef<"UserCandidate", 'Int'>
    readonly email: FieldRef<"UserCandidate", 'String'>
    readonly password: FieldRef<"UserCandidate", 'String'>
    readonly name: FieldRef<"UserCandidate", 'String'>
    readonly dateNasc: FieldRef<"UserCandidate", 'DateTime'>
    readonly cpf: FieldRef<"UserCandidate", 'String'>
    readonly phone: FieldRef<"UserCandidate", 'String'>
    readonly gender: FieldRef<"UserCandidate", 'String'>
    readonly disablePerson: FieldRef<"UserCandidate", 'String'>
    readonly createdAt: FieldRef<"UserCandidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCandidate findUnique
   */
  export type UserCandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter, which UserCandidate to fetch.
     */
    where: UserCandidateWhereUniqueInput
  }

  /**
   * UserCandidate findUniqueOrThrow
   */
  export type UserCandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter, which UserCandidate to fetch.
     */
    where: UserCandidateWhereUniqueInput
  }

  /**
   * UserCandidate findFirst
   */
  export type UserCandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter, which UserCandidate to fetch.
     */
    where?: UserCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCandidates to fetch.
     */
    orderBy?: UserCandidateOrderByWithRelationInput | UserCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCandidates.
     */
    cursor?: UserCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCandidates.
     */
    distinct?: UserCandidateScalarFieldEnum | UserCandidateScalarFieldEnum[]
  }

  /**
   * UserCandidate findFirstOrThrow
   */
  export type UserCandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter, which UserCandidate to fetch.
     */
    where?: UserCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCandidates to fetch.
     */
    orderBy?: UserCandidateOrderByWithRelationInput | UserCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCandidates.
     */
    cursor?: UserCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCandidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCandidates.
     */
    distinct?: UserCandidateScalarFieldEnum | UserCandidateScalarFieldEnum[]
  }

  /**
   * UserCandidate findMany
   */
  export type UserCandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter, which UserCandidates to fetch.
     */
    where?: UserCandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCandidates to fetch.
     */
    orderBy?: UserCandidateOrderByWithRelationInput | UserCandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCandidates.
     */
    cursor?: UserCandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCandidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCandidates.
     */
    skip?: number
    distinct?: UserCandidateScalarFieldEnum | UserCandidateScalarFieldEnum[]
  }

  /**
   * UserCandidate create
   */
  export type UserCandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCandidate.
     */
    data: XOR<UserCandidateCreateInput, UserCandidateUncheckedCreateInput>
  }

  /**
   * UserCandidate createMany
   */
  export type UserCandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCandidates.
     */
    data: UserCandidateCreateManyInput | UserCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCandidate createManyAndReturn
   */
  export type UserCandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * The data used to create many UserCandidates.
     */
    data: UserCandidateCreateManyInput | UserCandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCandidate update
   */
  export type UserCandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCandidate.
     */
    data: XOR<UserCandidateUpdateInput, UserCandidateUncheckedUpdateInput>
    /**
     * Choose, which UserCandidate to update.
     */
    where: UserCandidateWhereUniqueInput
  }

  /**
   * UserCandidate updateMany
   */
  export type UserCandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCandidates.
     */
    data: XOR<UserCandidateUpdateManyMutationInput, UserCandidateUncheckedUpdateManyInput>
    /**
     * Filter which UserCandidates to update
     */
    where?: UserCandidateWhereInput
    /**
     * Limit how many UserCandidates to update.
     */
    limit?: number
  }

  /**
   * UserCandidate updateManyAndReturn
   */
  export type UserCandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * The data used to update UserCandidates.
     */
    data: XOR<UserCandidateUpdateManyMutationInput, UserCandidateUncheckedUpdateManyInput>
    /**
     * Filter which UserCandidates to update
     */
    where?: UserCandidateWhereInput
    /**
     * Limit how many UserCandidates to update.
     */
    limit?: number
  }

  /**
   * UserCandidate upsert
   */
  export type UserCandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCandidate to update in case it exists.
     */
    where: UserCandidateWhereUniqueInput
    /**
     * In case the UserCandidate found by the `where` argument doesn't exist, create a new UserCandidate with this data.
     */
    create: XOR<UserCandidateCreateInput, UserCandidateUncheckedCreateInput>
    /**
     * In case the UserCandidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCandidateUpdateInput, UserCandidateUncheckedUpdateInput>
  }

  /**
   * UserCandidate delete
   */
  export type UserCandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
    /**
     * Filter which UserCandidate to delete.
     */
    where: UserCandidateWhereUniqueInput
  }

  /**
   * UserCandidate deleteMany
   */
  export type UserCandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCandidates to delete
     */
    where?: UserCandidateWhereInput
    /**
     * Limit how many UserCandidates to delete.
     */
    limit?: number
  }

  /**
   * UserCandidate.Address
   */
  export type UserCandidate$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * UserCandidate without action
   */
  export type UserCandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCandidate
     */
    select?: UserCandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCandidate
     */
    omit?: UserCandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCandidateInclude<ExtArgs> | null
  }


  /**
   * Model AddressCompany
   */

  export type AggregateAddressCompany = {
    _count: AddressCompanyCountAggregateOutputType | null
    _avg: AddressCompanyAvgAggregateOutputType | null
    _sum: AddressCompanySumAggregateOutputType | null
    _min: AddressCompanyMinAggregateOutputType | null
    _max: AddressCompanyMaxAggregateOutputType | null
  }

  export type AddressCompanyAvgAggregateOutputType = {
    id: number | null
    userCompanyId: number | null
  }

  export type AddressCompanySumAggregateOutputType = {
    id: number | null
    userCompanyId: number | null
  }

  export type AddressCompanyMinAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    postalCode: string | null
    userCompanyId: number | null
  }

  export type AddressCompanyMaxAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    postalCode: string | null
    userCompanyId: number | null
  }

  export type AddressCompanyCountAggregateOutputType = {
    id: number
    country: number
    state: number
    city: number
    district: number
    street: number
    number: number
    complement: number
    postalCode: number
    userCompanyId: number
    _all: number
  }


  export type AddressCompanyAvgAggregateInputType = {
    id?: true
    userCompanyId?: true
  }

  export type AddressCompanySumAggregateInputType = {
    id?: true
    userCompanyId?: true
  }

  export type AddressCompanyMinAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCompanyId?: true
  }

  export type AddressCompanyMaxAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCompanyId?: true
  }

  export type AddressCompanyCountAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    postalCode?: true
    userCompanyId?: true
    _all?: true
  }

  export type AddressCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressCompany to aggregate.
     */
    where?: AddressCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressCompanies to fetch.
     */
    orderBy?: AddressCompanyOrderByWithRelationInput | AddressCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddressCompanies
    **/
    _count?: true | AddressCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressCompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressCompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressCompanyMaxAggregateInputType
  }

  export type GetAddressCompanyAggregateType<T extends AddressCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateAddressCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddressCompany[P]>
      : GetScalarType<T[P], AggregateAddressCompany[P]>
  }




  export type AddressCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressCompanyWhereInput
    orderBy?: AddressCompanyOrderByWithAggregationInput | AddressCompanyOrderByWithAggregationInput[]
    by: AddressCompanyScalarFieldEnum[] | AddressCompanyScalarFieldEnum
    having?: AddressCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCompanyCountAggregateInputType | true
    _avg?: AddressCompanyAvgAggregateInputType
    _sum?: AddressCompanySumAggregateInputType
    _min?: AddressCompanyMinAggregateInputType
    _max?: AddressCompanyMaxAggregateInputType
  }

  export type AddressCompanyGroupByOutputType = {
    id: number
    country: string | null
    state: string | null
    city: string
    district: string
    street: string
    number: string
    complement: string | null
    postalCode: string
    userCompanyId: number
    _count: AddressCompanyCountAggregateOutputType | null
    _avg: AddressCompanyAvgAggregateOutputType | null
    _sum: AddressCompanySumAggregateOutputType | null
    _min: AddressCompanyMinAggregateOutputType | null
    _max: AddressCompanyMaxAggregateOutputType | null
  }

  type GetAddressCompanyGroupByPayload<T extends AddressCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], AddressCompanyGroupByOutputType[P]>
        }
      >
    >


  export type AddressCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCompanyId?: boolean
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addressCompany"]>

  export type AddressCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCompanyId?: boolean
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addressCompany"]>

  export type AddressCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCompanyId?: boolean
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addressCompany"]>

  export type AddressCompanySelectScalar = {
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    postalCode?: boolean
    userCompanyId?: boolean
  }

  export type AddressCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "state" | "city" | "district" | "street" | "number" | "complement" | "postalCode" | "userCompanyId", ExtArgs["result"]["addressCompany"]>
  export type AddressCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }
  export type AddressCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }
  export type AddressCompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCompany?: boolean | UserCompanyDefaultArgs<ExtArgs>
  }

  export type $AddressCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddressCompany"
    objects: {
      userCompany: Prisma.$UserCompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string | null
      state: string | null
      city: string
      district: string
      street: string
      number: string
      complement: string | null
      postalCode: string
      userCompanyId: number
    }, ExtArgs["result"]["addressCompany"]>
    composites: {}
  }

  type AddressCompanyGetPayload<S extends boolean | null | undefined | AddressCompanyDefaultArgs> = $Result.GetResult<Prisma.$AddressCompanyPayload, S>

  type AddressCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCompanyCountAggregateInputType | true
    }

  export interface AddressCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddressCompany'], meta: { name: 'AddressCompany' } }
    /**
     * Find zero or one AddressCompany that matches the filter.
     * @param {AddressCompanyFindUniqueArgs} args - Arguments to find a AddressCompany
     * @example
     * // Get one AddressCompany
     * const addressCompany = await prisma.addressCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressCompanyFindUniqueArgs>(args: SelectSubset<T, AddressCompanyFindUniqueArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddressCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressCompanyFindUniqueOrThrowArgs} args - Arguments to find a AddressCompany
     * @example
     * // Get one AddressCompany
     * const addressCompany = await prisma.addressCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyFindFirstArgs} args - Arguments to find a AddressCompany
     * @example
     * // Get one AddressCompany
     * const addressCompany = await prisma.addressCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressCompanyFindFirstArgs>(args?: SelectSubset<T, AddressCompanyFindFirstArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyFindFirstOrThrowArgs} args - Arguments to find a AddressCompany
     * @example
     * // Get one AddressCompany
     * const addressCompany = await prisma.addressCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddressCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressCompanies
     * const addressCompanies = await prisma.addressCompany.findMany()
     * 
     * // Get first 10 AddressCompanies
     * const addressCompanies = await prisma.addressCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressCompanyWithIdOnly = await prisma.addressCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressCompanyFindManyArgs>(args?: SelectSubset<T, AddressCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddressCompany.
     * @param {AddressCompanyCreateArgs} args - Arguments to create a AddressCompany.
     * @example
     * // Create one AddressCompany
     * const AddressCompany = await prisma.addressCompany.create({
     *   data: {
     *     // ... data to create a AddressCompany
     *   }
     * })
     * 
     */
    create<T extends AddressCompanyCreateArgs>(args: SelectSubset<T, AddressCompanyCreateArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddressCompanies.
     * @param {AddressCompanyCreateManyArgs} args - Arguments to create many AddressCompanies.
     * @example
     * // Create many AddressCompanies
     * const addressCompany = await prisma.addressCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCompanyCreateManyArgs>(args?: SelectSubset<T, AddressCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddressCompanies and returns the data saved in the database.
     * @param {AddressCompanyCreateManyAndReturnArgs} args - Arguments to create many AddressCompanies.
     * @example
     * // Create many AddressCompanies
     * const addressCompany = await prisma.addressCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddressCompanies and only return the `id`
     * const addressCompanyWithIdOnly = await prisma.addressCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddressCompany.
     * @param {AddressCompanyDeleteArgs} args - Arguments to delete one AddressCompany.
     * @example
     * // Delete one AddressCompany
     * const AddressCompany = await prisma.addressCompany.delete({
     *   where: {
     *     // ... filter to delete one AddressCompany
     *   }
     * })
     * 
     */
    delete<T extends AddressCompanyDeleteArgs>(args: SelectSubset<T, AddressCompanyDeleteArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddressCompany.
     * @param {AddressCompanyUpdateArgs} args - Arguments to update one AddressCompany.
     * @example
     * // Update one AddressCompany
     * const addressCompany = await prisma.addressCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressCompanyUpdateArgs>(args: SelectSubset<T, AddressCompanyUpdateArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddressCompanies.
     * @param {AddressCompanyDeleteManyArgs} args - Arguments to filter AddressCompanies to delete.
     * @example
     * // Delete a few AddressCompanies
     * const { count } = await prisma.addressCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressCompanyDeleteManyArgs>(args?: SelectSubset<T, AddressCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressCompanies
     * const addressCompany = await prisma.addressCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressCompanyUpdateManyArgs>(args: SelectSubset<T, AddressCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressCompanies and returns the data updated in the database.
     * @param {AddressCompanyUpdateManyAndReturnArgs} args - Arguments to update many AddressCompanies.
     * @example
     * // Update many AddressCompanies
     * const addressCompany = await prisma.addressCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddressCompanies and only return the `id`
     * const addressCompanyWithIdOnly = await prisma.addressCompany.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddressCompany.
     * @param {AddressCompanyUpsertArgs} args - Arguments to update or create a AddressCompany.
     * @example
     * // Update or create a AddressCompany
     * const addressCompany = await prisma.addressCompany.upsert({
     *   create: {
     *     // ... data to create a AddressCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressCompany we want to update
     *   }
     * })
     */
    upsert<T extends AddressCompanyUpsertArgs>(args: SelectSubset<T, AddressCompanyUpsertArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddressCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyCountArgs} args - Arguments to filter AddressCompanies to count.
     * @example
     * // Count the number of AddressCompanies
     * const count = await prisma.addressCompany.count({
     *   where: {
     *     // ... the filter for the AddressCompanies we want to count
     *   }
     * })
    **/
    count<T extends AddressCompanyCountArgs>(
      args?: Subset<T, AddressCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddressCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressCompanyAggregateArgs>(args: Subset<T, AddressCompanyAggregateArgs>): Prisma.PrismaPromise<GetAddressCompanyAggregateType<T>>

    /**
     * Group by AddressCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCompanyGroupByArgs} args - Group by arguments.
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
      T extends AddressCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressCompanyGroupByArgs['orderBy'] }
        : { orderBy?: AddressCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddressCompany model
   */
  readonly fields: AddressCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddressCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCompany<T extends UserCompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCompanyDefaultArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AddressCompany model
   */
  interface AddressCompanyFieldRefs {
    readonly id: FieldRef<"AddressCompany", 'Int'>
    readonly country: FieldRef<"AddressCompany", 'String'>
    readonly state: FieldRef<"AddressCompany", 'String'>
    readonly city: FieldRef<"AddressCompany", 'String'>
    readonly district: FieldRef<"AddressCompany", 'String'>
    readonly street: FieldRef<"AddressCompany", 'String'>
    readonly number: FieldRef<"AddressCompany", 'String'>
    readonly complement: FieldRef<"AddressCompany", 'String'>
    readonly postalCode: FieldRef<"AddressCompany", 'String'>
    readonly userCompanyId: FieldRef<"AddressCompany", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AddressCompany findUnique
   */
  export type AddressCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter, which AddressCompany to fetch.
     */
    where: AddressCompanyWhereUniqueInput
  }

  /**
   * AddressCompany findUniqueOrThrow
   */
  export type AddressCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter, which AddressCompany to fetch.
     */
    where: AddressCompanyWhereUniqueInput
  }

  /**
   * AddressCompany findFirst
   */
  export type AddressCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter, which AddressCompany to fetch.
     */
    where?: AddressCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressCompanies to fetch.
     */
    orderBy?: AddressCompanyOrderByWithRelationInput | AddressCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressCompanies.
     */
    cursor?: AddressCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressCompanies.
     */
    distinct?: AddressCompanyScalarFieldEnum | AddressCompanyScalarFieldEnum[]
  }

  /**
   * AddressCompany findFirstOrThrow
   */
  export type AddressCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter, which AddressCompany to fetch.
     */
    where?: AddressCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressCompanies to fetch.
     */
    orderBy?: AddressCompanyOrderByWithRelationInput | AddressCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressCompanies.
     */
    cursor?: AddressCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressCompanies.
     */
    distinct?: AddressCompanyScalarFieldEnum | AddressCompanyScalarFieldEnum[]
  }

  /**
   * AddressCompany findMany
   */
  export type AddressCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter, which AddressCompanies to fetch.
     */
    where?: AddressCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressCompanies to fetch.
     */
    orderBy?: AddressCompanyOrderByWithRelationInput | AddressCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddressCompanies.
     */
    cursor?: AddressCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressCompanies.
     */
    skip?: number
    distinct?: AddressCompanyScalarFieldEnum | AddressCompanyScalarFieldEnum[]
  }

  /**
   * AddressCompany create
   */
  export type AddressCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a AddressCompany.
     */
    data: XOR<AddressCompanyCreateInput, AddressCompanyUncheckedCreateInput>
  }

  /**
   * AddressCompany createMany
   */
  export type AddressCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddressCompanies.
     */
    data: AddressCompanyCreateManyInput | AddressCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddressCompany createManyAndReturn
   */
  export type AddressCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many AddressCompanies.
     */
    data: AddressCompanyCreateManyInput | AddressCompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddressCompany update
   */
  export type AddressCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a AddressCompany.
     */
    data: XOR<AddressCompanyUpdateInput, AddressCompanyUncheckedUpdateInput>
    /**
     * Choose, which AddressCompany to update.
     */
    where: AddressCompanyWhereUniqueInput
  }

  /**
   * AddressCompany updateMany
   */
  export type AddressCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddressCompanies.
     */
    data: XOR<AddressCompanyUpdateManyMutationInput, AddressCompanyUncheckedUpdateManyInput>
    /**
     * Filter which AddressCompanies to update
     */
    where?: AddressCompanyWhereInput
    /**
     * Limit how many AddressCompanies to update.
     */
    limit?: number
  }

  /**
   * AddressCompany updateManyAndReturn
   */
  export type AddressCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * The data used to update AddressCompanies.
     */
    data: XOR<AddressCompanyUpdateManyMutationInput, AddressCompanyUncheckedUpdateManyInput>
    /**
     * Filter which AddressCompanies to update
     */
    where?: AddressCompanyWhereInput
    /**
     * Limit how many AddressCompanies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AddressCompany upsert
   */
  export type AddressCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the AddressCompany to update in case it exists.
     */
    where: AddressCompanyWhereUniqueInput
    /**
     * In case the AddressCompany found by the `where` argument doesn't exist, create a new AddressCompany with this data.
     */
    create: XOR<AddressCompanyCreateInput, AddressCompanyUncheckedCreateInput>
    /**
     * In case the AddressCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressCompanyUpdateInput, AddressCompanyUncheckedUpdateInput>
  }

  /**
   * AddressCompany delete
   */
  export type AddressCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    /**
     * Filter which AddressCompany to delete.
     */
    where: AddressCompanyWhereUniqueInput
  }

  /**
   * AddressCompany deleteMany
   */
  export type AddressCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressCompanies to delete
     */
    where?: AddressCompanyWhereInput
    /**
     * Limit how many AddressCompanies to delete.
     */
    limit?: number
  }

  /**
   * AddressCompany without action
   */
  export type AddressCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
  }


  /**
   * Model UserCompany
   */

  export type AggregateUserCompany = {
    _count: UserCompanyCountAggregateOutputType | null
    _avg: UserCompanyAvgAggregateOutputType | null
    _sum: UserCompanySumAggregateOutputType | null
    _min: UserCompanyMinAggregateOutputType | null
    _max: UserCompanyMaxAggregateOutputType | null
  }

  export type UserCompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type UserCompanySumAggregateOutputType = {
    id: number | null
  }

  export type UserCompanyMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    openingDate: Date | null
    cnpj: string | null
    description: string | null
    socialReason: string | null
    fantasyName: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserCompanyMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    openingDate: Date | null
    cnpj: string | null
    description: string | null
    socialReason: string | null
    fantasyName: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserCompanyCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    openingDate: number
    cnpj: number
    description: number
    socialReason: number
    fantasyName: number
    phone: number
    createdAt: number
    _all: number
  }


  export type UserCompanyAvgAggregateInputType = {
    id?: true
  }

  export type UserCompanySumAggregateInputType = {
    id?: true
  }

  export type UserCompanyMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    openingDate?: true
    cnpj?: true
    description?: true
    socialReason?: true
    fantasyName?: true
    phone?: true
    createdAt?: true
  }

  export type UserCompanyMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    openingDate?: true
    cnpj?: true
    description?: true
    socialReason?: true
    fantasyName?: true
    phone?: true
    createdAt?: true
  }

  export type UserCompanyCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    openingDate?: true
    cnpj?: true
    description?: true
    socialReason?: true
    fantasyName?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type UserCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCompany to aggregate.
     */
    where?: UserCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompanies to fetch.
     */
    orderBy?: UserCompanyOrderByWithRelationInput | UserCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCompanies
    **/
    _count?: true | UserCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCompanyMaxAggregateInputType
  }

  export type GetUserCompanyAggregateType<T extends UserCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCompany[P]>
      : GetScalarType<T[P], AggregateUserCompany[P]>
  }




  export type UserCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCompanyWhereInput
    orderBy?: UserCompanyOrderByWithAggregationInput | UserCompanyOrderByWithAggregationInput[]
    by: UserCompanyScalarFieldEnum[] | UserCompanyScalarFieldEnum
    having?: UserCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCompanyCountAggregateInputType | true
    _avg?: UserCompanyAvgAggregateInputType
    _sum?: UserCompanySumAggregateInputType
    _min?: UserCompanyMinAggregateInputType
    _max?: UserCompanyMaxAggregateInputType
  }

  export type UserCompanyGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    openingDate: Date
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt: Date
    _count: UserCompanyCountAggregateOutputType | null
    _avg: UserCompanyAvgAggregateOutputType | null
    _sum: UserCompanySumAggregateOutputType | null
    _min: UserCompanyMinAggregateOutputType | null
    _max: UserCompanyMaxAggregateOutputType | null
  }

  type GetUserCompanyGroupByPayload<T extends UserCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], UserCompanyGroupByOutputType[P]>
        }
      >
    >


  export type UserCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    openingDate?: boolean
    cnpj?: boolean
    description?: boolean
    socialReason?: boolean
    fantasyName?: boolean
    phone?: boolean
    createdAt?: boolean
    Address?: boolean | UserCompany$AddressArgs<ExtArgs>
  }, ExtArgs["result"]["userCompany"]>

  export type UserCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    openingDate?: boolean
    cnpj?: boolean
    description?: boolean
    socialReason?: boolean
    fantasyName?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCompany"]>

  export type UserCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    openingDate?: boolean
    cnpj?: boolean
    description?: boolean
    socialReason?: boolean
    fantasyName?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCompany"]>

  export type UserCompanySelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    openingDate?: boolean
    cnpj?: boolean
    description?: boolean
    socialReason?: boolean
    fantasyName?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type UserCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "openingDate" | "cnpj" | "description" | "socialReason" | "fantasyName" | "phone" | "createdAt", ExtArgs["result"]["userCompany"]>
  export type UserCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | UserCompany$AddressArgs<ExtArgs>
  }
  export type UserCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserCompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCompany"
    objects: {
      Address: Prisma.$AddressCompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      openingDate: Date
      cnpj: string
      description: string
      socialReason: string
      fantasyName: string
      phone: string
      createdAt: Date
    }, ExtArgs["result"]["userCompany"]>
    composites: {}
  }

  type UserCompanyGetPayload<S extends boolean | null | undefined | UserCompanyDefaultArgs> = $Result.GetResult<Prisma.$UserCompanyPayload, S>

  type UserCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCompanyCountAggregateInputType | true
    }

  export interface UserCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCompany'], meta: { name: 'UserCompany' } }
    /**
     * Find zero or one UserCompany that matches the filter.
     * @param {UserCompanyFindUniqueArgs} args - Arguments to find a UserCompany
     * @example
     * // Get one UserCompany
     * const userCompany = await prisma.userCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCompanyFindUniqueArgs>(args: SelectSubset<T, UserCompanyFindUniqueArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCompanyFindUniqueOrThrowArgs} args - Arguments to find a UserCompany
     * @example
     * // Get one UserCompany
     * const userCompany = await prisma.userCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyFindFirstArgs} args - Arguments to find a UserCompany
     * @example
     * // Get one UserCompany
     * const userCompany = await prisma.userCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCompanyFindFirstArgs>(args?: SelectSubset<T, UserCompanyFindFirstArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyFindFirstOrThrowArgs} args - Arguments to find a UserCompany
     * @example
     * // Get one UserCompany
     * const userCompany = await prisma.userCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCompanies
     * const userCompanies = await prisma.userCompany.findMany()
     * 
     * // Get first 10 UserCompanies
     * const userCompanies = await prisma.userCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCompanyWithIdOnly = await prisma.userCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCompanyFindManyArgs>(args?: SelectSubset<T, UserCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCompany.
     * @param {UserCompanyCreateArgs} args - Arguments to create a UserCompany.
     * @example
     * // Create one UserCompany
     * const UserCompany = await prisma.userCompany.create({
     *   data: {
     *     // ... data to create a UserCompany
     *   }
     * })
     * 
     */
    create<T extends UserCompanyCreateArgs>(args: SelectSubset<T, UserCompanyCreateArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCompanies.
     * @param {UserCompanyCreateManyArgs} args - Arguments to create many UserCompanies.
     * @example
     * // Create many UserCompanies
     * const userCompany = await prisma.userCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCompanyCreateManyArgs>(args?: SelectSubset<T, UserCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCompanies and returns the data saved in the database.
     * @param {UserCompanyCreateManyAndReturnArgs} args - Arguments to create many UserCompanies.
     * @example
     * // Create many UserCompanies
     * const userCompany = await prisma.userCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCompanies and only return the `id`
     * const userCompanyWithIdOnly = await prisma.userCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCompany.
     * @param {UserCompanyDeleteArgs} args - Arguments to delete one UserCompany.
     * @example
     * // Delete one UserCompany
     * const UserCompany = await prisma.userCompany.delete({
     *   where: {
     *     // ... filter to delete one UserCompany
     *   }
     * })
     * 
     */
    delete<T extends UserCompanyDeleteArgs>(args: SelectSubset<T, UserCompanyDeleteArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCompany.
     * @param {UserCompanyUpdateArgs} args - Arguments to update one UserCompany.
     * @example
     * // Update one UserCompany
     * const userCompany = await prisma.userCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCompanyUpdateArgs>(args: SelectSubset<T, UserCompanyUpdateArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCompanies.
     * @param {UserCompanyDeleteManyArgs} args - Arguments to filter UserCompanies to delete.
     * @example
     * // Delete a few UserCompanies
     * const { count } = await prisma.userCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCompanyDeleteManyArgs>(args?: SelectSubset<T, UserCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCompanies
     * const userCompany = await prisma.userCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCompanyUpdateManyArgs>(args: SelectSubset<T, UserCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCompanies and returns the data updated in the database.
     * @param {UserCompanyUpdateManyAndReturnArgs} args - Arguments to update many UserCompanies.
     * @example
     * // Update many UserCompanies
     * const userCompany = await prisma.userCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCompanies and only return the `id`
     * const userCompanyWithIdOnly = await prisma.userCompany.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCompany.
     * @param {UserCompanyUpsertArgs} args - Arguments to update or create a UserCompany.
     * @example
     * // Update or create a UserCompany
     * const userCompany = await prisma.userCompany.upsert({
     *   create: {
     *     // ... data to create a UserCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCompany we want to update
     *   }
     * })
     */
    upsert<T extends UserCompanyUpsertArgs>(args: SelectSubset<T, UserCompanyUpsertArgs<ExtArgs>>): Prisma__UserCompanyClient<$Result.GetResult<Prisma.$UserCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyCountArgs} args - Arguments to filter UserCompanies to count.
     * @example
     * // Count the number of UserCompanies
     * const count = await prisma.userCompany.count({
     *   where: {
     *     // ... the filter for the UserCompanies we want to count
     *   }
     * })
    **/
    count<T extends UserCompanyCountArgs>(
      args?: Subset<T, UserCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCompanyAggregateArgs>(args: Subset<T, UserCompanyAggregateArgs>): Prisma.PrismaPromise<GetUserCompanyAggregateType<T>>

    /**
     * Group by UserCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCompanyGroupByArgs} args - Group by arguments.
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
      T extends UserCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCompanyGroupByArgs['orderBy'] }
        : { orderBy?: UserCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCompany model
   */
  readonly fields: UserCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Address<T extends UserCompany$AddressArgs<ExtArgs> = {}>(args?: Subset<T, UserCompany$AddressArgs<ExtArgs>>): Prisma__AddressCompanyClient<$Result.GetResult<Prisma.$AddressCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCompany model
   */
  interface UserCompanyFieldRefs {
    readonly id: FieldRef<"UserCompany", 'Int'>
    readonly email: FieldRef<"UserCompany", 'String'>
    readonly password: FieldRef<"UserCompany", 'String'>
    readonly name: FieldRef<"UserCompany", 'String'>
    readonly openingDate: FieldRef<"UserCompany", 'DateTime'>
    readonly cnpj: FieldRef<"UserCompany", 'String'>
    readonly description: FieldRef<"UserCompany", 'String'>
    readonly socialReason: FieldRef<"UserCompany", 'String'>
    readonly fantasyName: FieldRef<"UserCompany", 'String'>
    readonly phone: FieldRef<"UserCompany", 'String'>
    readonly createdAt: FieldRef<"UserCompany", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCompany findUnique
   */
  export type UserCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompany to fetch.
     */
    where: UserCompanyWhereUniqueInput
  }

  /**
   * UserCompany findUniqueOrThrow
   */
  export type UserCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompany to fetch.
     */
    where: UserCompanyWhereUniqueInput
  }

  /**
   * UserCompany findFirst
   */
  export type UserCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompany to fetch.
     */
    where?: UserCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompanies to fetch.
     */
    orderBy?: UserCompanyOrderByWithRelationInput | UserCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCompanies.
     */
    cursor?: UserCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCompanies.
     */
    distinct?: UserCompanyScalarFieldEnum | UserCompanyScalarFieldEnum[]
  }

  /**
   * UserCompany findFirstOrThrow
   */
  export type UserCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompany to fetch.
     */
    where?: UserCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompanies to fetch.
     */
    orderBy?: UserCompanyOrderByWithRelationInput | UserCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCompanies.
     */
    cursor?: UserCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCompanies.
     */
    distinct?: UserCompanyScalarFieldEnum | UserCompanyScalarFieldEnum[]
  }

  /**
   * UserCompany findMany
   */
  export type UserCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter, which UserCompanies to fetch.
     */
    where?: UserCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCompanies to fetch.
     */
    orderBy?: UserCompanyOrderByWithRelationInput | UserCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCompanies.
     */
    cursor?: UserCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCompanies.
     */
    skip?: number
    distinct?: UserCompanyScalarFieldEnum | UserCompanyScalarFieldEnum[]
  }

  /**
   * UserCompany create
   */
  export type UserCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCompany.
     */
    data: XOR<UserCompanyCreateInput, UserCompanyUncheckedCreateInput>
  }

  /**
   * UserCompany createMany
   */
  export type UserCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCompanies.
     */
    data: UserCompanyCreateManyInput | UserCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCompany createManyAndReturn
   */
  export type UserCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many UserCompanies.
     */
    data: UserCompanyCreateManyInput | UserCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCompany update
   */
  export type UserCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCompany.
     */
    data: XOR<UserCompanyUpdateInput, UserCompanyUncheckedUpdateInput>
    /**
     * Choose, which UserCompany to update.
     */
    where: UserCompanyWhereUniqueInput
  }

  /**
   * UserCompany updateMany
   */
  export type UserCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCompanies.
     */
    data: XOR<UserCompanyUpdateManyMutationInput, UserCompanyUncheckedUpdateManyInput>
    /**
     * Filter which UserCompanies to update
     */
    where?: UserCompanyWhereInput
    /**
     * Limit how many UserCompanies to update.
     */
    limit?: number
  }

  /**
   * UserCompany updateManyAndReturn
   */
  export type UserCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * The data used to update UserCompanies.
     */
    data: XOR<UserCompanyUpdateManyMutationInput, UserCompanyUncheckedUpdateManyInput>
    /**
     * Filter which UserCompanies to update
     */
    where?: UserCompanyWhereInput
    /**
     * Limit how many UserCompanies to update.
     */
    limit?: number
  }

  /**
   * UserCompany upsert
   */
  export type UserCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCompany to update in case it exists.
     */
    where: UserCompanyWhereUniqueInput
    /**
     * In case the UserCompany found by the `where` argument doesn't exist, create a new UserCompany with this data.
     */
    create: XOR<UserCompanyCreateInput, UserCompanyUncheckedCreateInput>
    /**
     * In case the UserCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCompanyUpdateInput, UserCompanyUncheckedUpdateInput>
  }

  /**
   * UserCompany delete
   */
  export type UserCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
    /**
     * Filter which UserCompany to delete.
     */
    where: UserCompanyWhereUniqueInput
  }

  /**
   * UserCompany deleteMany
   */
  export type UserCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCompanies to delete
     */
    where?: UserCompanyWhereInput
    /**
     * Limit how many UserCompanies to delete.
     */
    limit?: number
  }

  /**
   * UserCompany.Address
   */
  export type UserCompany$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCompany
     */
    select?: AddressCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressCompany
     */
    omit?: AddressCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressCompanyInclude<ExtArgs> | null
    where?: AddressCompanyWhereInput
  }

  /**
   * UserCompany without action
   */
  export type UserCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCompany
     */
    select?: UserCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCompany
     */
    omit?: UserCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCompanyInclude<ExtArgs> | null
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


  export const AddressScalarFieldEnum: {
    id: 'id',
    country: 'country',
    state: 'state',
    city: 'city',
    district: 'district',
    street: 'street',
    number: 'number',
    complement: 'complement',
    postalCode: 'postalCode',
    userCandidateId: 'userCandidateId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const UserCandidateScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    dateNasc: 'dateNasc',
    cpf: 'cpf',
    phone: 'phone',
    gender: 'gender',
    disablePerson: 'disablePerson',
    createdAt: 'createdAt'
  };

  export type UserCandidateScalarFieldEnum = (typeof UserCandidateScalarFieldEnum)[keyof typeof UserCandidateScalarFieldEnum]


  export const AddressCompanyScalarFieldEnum: {
    id: 'id',
    country: 'country',
    state: 'state',
    city: 'city',
    district: 'district',
    street: 'street',
    number: 'number',
    complement: 'complement',
    postalCode: 'postalCode',
    userCompanyId: 'userCompanyId'
  };

  export type AddressCompanyScalarFieldEnum = (typeof AddressCompanyScalarFieldEnum)[keyof typeof AddressCompanyScalarFieldEnum]


  export const UserCompanyScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    openingDate: 'openingDate',
    cnpj: 'cnpj',
    description: 'description',
    socialReason: 'socialReason',
    fantasyName: 'fantasyName',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type UserCompanyScalarFieldEnum = (typeof UserCompanyScalarFieldEnum)[keyof typeof UserCompanyScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    country?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringFilter<"Address"> | string
    userCandidateId?: IntFilter<"Address"> | number
    UserCandidate?: XOR<UserCandidateScalarRelationFilter, UserCandidateWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    userCandidateId?: SortOrder
    UserCandidate?: UserCandidateOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userCandidateId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    country?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringFilter<"Address"> | string
    UserCandidate?: XOR<UserCandidateScalarRelationFilter, UserCandidateWhereInput>
  }, "id" | "userCandidateId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    userCandidateId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postalCode?: StringWithAggregatesFilter<"Address"> | string
    userCandidateId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type UserCandidateWhereInput = {
    AND?: UserCandidateWhereInput | UserCandidateWhereInput[]
    OR?: UserCandidateWhereInput[]
    NOT?: UserCandidateWhereInput | UserCandidateWhereInput[]
    id?: IntFilter<"UserCandidate"> | number
    email?: StringFilter<"UserCandidate"> | string
    password?: StringFilter<"UserCandidate"> | string
    name?: StringFilter<"UserCandidate"> | string
    dateNasc?: DateTimeFilter<"UserCandidate"> | Date | string
    cpf?: StringFilter<"UserCandidate"> | string
    phone?: StringFilter<"UserCandidate"> | string
    gender?: StringFilter<"UserCandidate"> | string
    disablePerson?: StringFilter<"UserCandidate"> | string
    createdAt?: DateTimeFilter<"UserCandidate"> | Date | string
    Address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type UserCandidateOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dateNasc?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    disablePerson?: SortOrder
    createdAt?: SortOrder
    Address?: AddressOrderByWithRelationInput
  }

  export type UserCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UserCandidateWhereInput | UserCandidateWhereInput[]
    OR?: UserCandidateWhereInput[]
    NOT?: UserCandidateWhereInput | UserCandidateWhereInput[]
    password?: StringFilter<"UserCandidate"> | string
    name?: StringFilter<"UserCandidate"> | string
    dateNasc?: DateTimeFilter<"UserCandidate"> | Date | string
    phone?: StringFilter<"UserCandidate"> | string
    gender?: StringFilter<"UserCandidate"> | string
    disablePerson?: StringFilter<"UserCandidate"> | string
    createdAt?: DateTimeFilter<"UserCandidate"> | Date | string
    Address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id" | "email" | "cpf">

  export type UserCandidateOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dateNasc?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    disablePerson?: SortOrder
    createdAt?: SortOrder
    _count?: UserCandidateCountOrderByAggregateInput
    _avg?: UserCandidateAvgOrderByAggregateInput
    _max?: UserCandidateMaxOrderByAggregateInput
    _min?: UserCandidateMinOrderByAggregateInput
    _sum?: UserCandidateSumOrderByAggregateInput
  }

  export type UserCandidateScalarWhereWithAggregatesInput = {
    AND?: UserCandidateScalarWhereWithAggregatesInput | UserCandidateScalarWhereWithAggregatesInput[]
    OR?: UserCandidateScalarWhereWithAggregatesInput[]
    NOT?: UserCandidateScalarWhereWithAggregatesInput | UserCandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCandidate"> | number
    email?: StringWithAggregatesFilter<"UserCandidate"> | string
    password?: StringWithAggregatesFilter<"UserCandidate"> | string
    name?: StringWithAggregatesFilter<"UserCandidate"> | string
    dateNasc?: DateTimeWithAggregatesFilter<"UserCandidate"> | Date | string
    cpf?: StringWithAggregatesFilter<"UserCandidate"> | string
    phone?: StringWithAggregatesFilter<"UserCandidate"> | string
    gender?: StringWithAggregatesFilter<"UserCandidate"> | string
    disablePerson?: StringWithAggregatesFilter<"UserCandidate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCandidate"> | Date | string
  }

  export type AddressCompanyWhereInput = {
    AND?: AddressCompanyWhereInput | AddressCompanyWhereInput[]
    OR?: AddressCompanyWhereInput[]
    NOT?: AddressCompanyWhereInput | AddressCompanyWhereInput[]
    id?: IntFilter<"AddressCompany"> | number
    country?: StringNullableFilter<"AddressCompany"> | string | null
    state?: StringNullableFilter<"AddressCompany"> | string | null
    city?: StringFilter<"AddressCompany"> | string
    district?: StringFilter<"AddressCompany"> | string
    street?: StringFilter<"AddressCompany"> | string
    number?: StringFilter<"AddressCompany"> | string
    complement?: StringNullableFilter<"AddressCompany"> | string | null
    postalCode?: StringFilter<"AddressCompany"> | string
    userCompanyId?: IntFilter<"AddressCompany"> | number
    userCompany?: XOR<UserCompanyScalarRelationFilter, UserCompanyWhereInput>
  }

  export type AddressCompanyOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    userCompanyId?: SortOrder
    userCompany?: UserCompanyOrderByWithRelationInput
  }

  export type AddressCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userCompanyId?: number
    AND?: AddressCompanyWhereInput | AddressCompanyWhereInput[]
    OR?: AddressCompanyWhereInput[]
    NOT?: AddressCompanyWhereInput | AddressCompanyWhereInput[]
    country?: StringNullableFilter<"AddressCompany"> | string | null
    state?: StringNullableFilter<"AddressCompany"> | string | null
    city?: StringFilter<"AddressCompany"> | string
    district?: StringFilter<"AddressCompany"> | string
    street?: StringFilter<"AddressCompany"> | string
    number?: StringFilter<"AddressCompany"> | string
    complement?: StringNullableFilter<"AddressCompany"> | string | null
    postalCode?: StringFilter<"AddressCompany"> | string
    userCompany?: XOR<UserCompanyScalarRelationFilter, UserCompanyWhereInput>
  }, "id" | "userCompanyId">

  export type AddressCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    userCompanyId?: SortOrder
    _count?: AddressCompanyCountOrderByAggregateInput
    _avg?: AddressCompanyAvgOrderByAggregateInput
    _max?: AddressCompanyMaxOrderByAggregateInput
    _min?: AddressCompanyMinOrderByAggregateInput
    _sum?: AddressCompanySumOrderByAggregateInput
  }

  export type AddressCompanyScalarWhereWithAggregatesInput = {
    AND?: AddressCompanyScalarWhereWithAggregatesInput | AddressCompanyScalarWhereWithAggregatesInput[]
    OR?: AddressCompanyScalarWhereWithAggregatesInput[]
    NOT?: AddressCompanyScalarWhereWithAggregatesInput | AddressCompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddressCompany"> | number
    country?: StringNullableWithAggregatesFilter<"AddressCompany"> | string | null
    state?: StringNullableWithAggregatesFilter<"AddressCompany"> | string | null
    city?: StringWithAggregatesFilter<"AddressCompany"> | string
    district?: StringWithAggregatesFilter<"AddressCompany"> | string
    street?: StringWithAggregatesFilter<"AddressCompany"> | string
    number?: StringWithAggregatesFilter<"AddressCompany"> | string
    complement?: StringNullableWithAggregatesFilter<"AddressCompany"> | string | null
    postalCode?: StringWithAggregatesFilter<"AddressCompany"> | string
    userCompanyId?: IntWithAggregatesFilter<"AddressCompany"> | number
  }

  export type UserCompanyWhereInput = {
    AND?: UserCompanyWhereInput | UserCompanyWhereInput[]
    OR?: UserCompanyWhereInput[]
    NOT?: UserCompanyWhereInput | UserCompanyWhereInput[]
    id?: IntFilter<"UserCompany"> | number
    email?: StringFilter<"UserCompany"> | string
    password?: StringFilter<"UserCompany"> | string
    name?: StringFilter<"UserCompany"> | string
    openingDate?: DateTimeFilter<"UserCompany"> | Date | string
    cnpj?: StringFilter<"UserCompany"> | string
    description?: StringFilter<"UserCompany"> | string
    socialReason?: StringFilter<"UserCompany"> | string
    fantasyName?: StringFilter<"UserCompany"> | string
    phone?: StringFilter<"UserCompany"> | string
    createdAt?: DateTimeFilter<"UserCompany"> | Date | string
    Address?: XOR<AddressCompanyNullableScalarRelationFilter, AddressCompanyWhereInput> | null
  }

  export type UserCompanyOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    openingDate?: SortOrder
    cnpj?: SortOrder
    description?: SortOrder
    socialReason?: SortOrder
    fantasyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    Address?: AddressCompanyOrderByWithRelationInput
  }

  export type UserCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cnpj?: string
    AND?: UserCompanyWhereInput | UserCompanyWhereInput[]
    OR?: UserCompanyWhereInput[]
    NOT?: UserCompanyWhereInput | UserCompanyWhereInput[]
    password?: StringFilter<"UserCompany"> | string
    name?: StringFilter<"UserCompany"> | string
    openingDate?: DateTimeFilter<"UserCompany"> | Date | string
    description?: StringFilter<"UserCompany"> | string
    socialReason?: StringFilter<"UserCompany"> | string
    fantasyName?: StringFilter<"UserCompany"> | string
    phone?: StringFilter<"UserCompany"> | string
    createdAt?: DateTimeFilter<"UserCompany"> | Date | string
    Address?: XOR<AddressCompanyNullableScalarRelationFilter, AddressCompanyWhereInput> | null
  }, "id" | "email" | "cnpj">

  export type UserCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    openingDate?: SortOrder
    cnpj?: SortOrder
    description?: SortOrder
    socialReason?: SortOrder
    fantasyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    _count?: UserCompanyCountOrderByAggregateInput
    _avg?: UserCompanyAvgOrderByAggregateInput
    _max?: UserCompanyMaxOrderByAggregateInput
    _min?: UserCompanyMinOrderByAggregateInput
    _sum?: UserCompanySumOrderByAggregateInput
  }

  export type UserCompanyScalarWhereWithAggregatesInput = {
    AND?: UserCompanyScalarWhereWithAggregatesInput | UserCompanyScalarWhereWithAggregatesInput[]
    OR?: UserCompanyScalarWhereWithAggregatesInput[]
    NOT?: UserCompanyScalarWhereWithAggregatesInput | UserCompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCompany"> | number
    email?: StringWithAggregatesFilter<"UserCompany"> | string
    password?: StringWithAggregatesFilter<"UserCompany"> | string
    name?: StringWithAggregatesFilter<"UserCompany"> | string
    openingDate?: DateTimeWithAggregatesFilter<"UserCompany"> | Date | string
    cnpj?: StringWithAggregatesFilter<"UserCompany"> | string
    description?: StringWithAggregatesFilter<"UserCompany"> | string
    socialReason?: StringWithAggregatesFilter<"UserCompany"> | string
    fantasyName?: StringWithAggregatesFilter<"UserCompany"> | string
    phone?: StringWithAggregatesFilter<"UserCompany"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCompany"> | Date | string
  }

  export type AddressCreateInput = {
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    UserCandidate: UserCandidateCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    userCandidateId: number
  }

  export type AddressUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    UserCandidate?: UserCandidateUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    userCandidateId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    userCandidateId: number
  }

  export type AddressUpdateManyMutationInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    userCandidateId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCandidateCreateInput = {
    email: string
    password: string
    name: string
    dateNasc: Date | string
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt?: Date | string
    Address?: AddressCreateNestedOneWithoutUserCandidateInput
  }

  export type UserCandidateUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    dateNasc: Date | string
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt?: Date | string
    Address?: AddressUncheckedCreateNestedOneWithoutUserCandidateInput
  }

  export type UserCandidateUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUpdateOneWithoutUserCandidateNestedInput
  }

  export type UserCandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressUncheckedUpdateOneWithoutUserCandidateNestedInput
  }

  export type UserCandidateCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    dateNasc: Date | string
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt?: Date | string
  }

  export type UserCandidateUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCompanyCreateInput = {
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    userCompany: UserCompanyCreateNestedOneWithoutAddressInput
  }

  export type AddressCompanyUncheckedCreateInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    userCompanyId: number
  }

  export type AddressCompanyUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    userCompany?: UserCompanyUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressCompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    userCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCompanyCreateManyInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
    userCompanyId: number
  }

  export type AddressCompanyUpdateManyMutationInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    userCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCompanyCreateInput = {
    email: string
    password: string
    name: string
    openingDate: Date | string
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt?: Date | string
    Address?: AddressCompanyCreateNestedOneWithoutUserCompanyInput
  }

  export type UserCompanyUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    openingDate: Date | string
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt?: Date | string
    Address?: AddressCompanyUncheckedCreateNestedOneWithoutUserCompanyInput
  }

  export type UserCompanyUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressCompanyUpdateOneWithoutUserCompanyNestedInput
  }

  export type UserCompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Address?: AddressCompanyUncheckedUpdateOneWithoutUserCompanyNestedInput
  }

  export type UserCompanyCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    openingDate: Date | string
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt?: Date | string
  }

  export type UserCompanyUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCandidateScalarRelationFilter = {
    is?: UserCandidateWhereInput
    isNot?: UserCandidateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCandidateId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userCandidateId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCandidateId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCandidateId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userCandidateId?: SortOrder
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

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserCandidateCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dateNasc?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    disablePerson?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCandidateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dateNasc?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    disablePerson?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCandidateMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dateNasc?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    disablePerson?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCandidateSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserCompanyScalarRelationFilter = {
    is?: UserCompanyWhereInput
    isNot?: UserCompanyWhereInput
  }

  export type AddressCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCompanyId?: SortOrder
  }

  export type AddressCompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    userCompanyId?: SortOrder
  }

  export type AddressCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCompanyId?: SortOrder
  }

  export type AddressCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    postalCode?: SortOrder
    userCompanyId?: SortOrder
  }

  export type AddressCompanySumOrderByAggregateInput = {
    id?: SortOrder
    userCompanyId?: SortOrder
  }

  export type AddressCompanyNullableScalarRelationFilter = {
    is?: AddressCompanyWhereInput | null
    isNot?: AddressCompanyWhereInput | null
  }

  export type UserCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    openingDate?: SortOrder
    cnpj?: SortOrder
    description?: SortOrder
    socialReason?: SortOrder
    fantasyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    openingDate?: SortOrder
    cnpj?: SortOrder
    description?: SortOrder
    socialReason?: SortOrder
    fantasyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    openingDate?: SortOrder
    cnpj?: SortOrder
    description?: SortOrder
    socialReason?: SortOrder
    fantasyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCandidateCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCandidateCreateWithoutAddressInput, UserCandidateUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCandidateCreateOrConnectWithoutAddressInput
    connect?: UserCandidateWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserCandidateUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCandidateCreateWithoutAddressInput, UserCandidateUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCandidateCreateOrConnectWithoutAddressInput
    upsert?: UserCandidateUpsertWithoutAddressInput
    connect?: UserCandidateWhereUniqueInput
    update?: XOR<XOR<UserCandidateUpdateToOneWithWhereWithoutAddressInput, UserCandidateUpdateWithoutAddressInput>, UserCandidateUncheckedUpdateWithoutAddressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressCreateNestedOneWithoutUserCandidateInput = {
    create?: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserCandidateInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutUserCandidateInput = {
    create?: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserCandidateInput
    connect?: AddressWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateOneWithoutUserCandidateNestedInput = {
    create?: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserCandidateInput
    upsert?: AddressUpsertWithoutUserCandidateInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserCandidateInput, AddressUpdateWithoutUserCandidateInput>, AddressUncheckedUpdateWithoutUserCandidateInput>
  }

  export type AddressUncheckedUpdateOneWithoutUserCandidateNestedInput = {
    create?: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserCandidateInput
    upsert?: AddressUpsertWithoutUserCandidateInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserCandidateInput, AddressUpdateWithoutUserCandidateInput>, AddressUncheckedUpdateWithoutUserCandidateInput>
  }

  export type UserCompanyCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCompanyCreateWithoutAddressInput, UserCompanyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCompanyCreateOrConnectWithoutAddressInput
    connect?: UserCompanyWhereUniqueInput
  }

  export type UserCompanyUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCompanyCreateWithoutAddressInput, UserCompanyUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCompanyCreateOrConnectWithoutAddressInput
    upsert?: UserCompanyUpsertWithoutAddressInput
    connect?: UserCompanyWhereUniqueInput
    update?: XOR<XOR<UserCompanyUpdateToOneWithWhereWithoutAddressInput, UserCompanyUpdateWithoutAddressInput>, UserCompanyUncheckedUpdateWithoutAddressInput>
  }

  export type AddressCompanyCreateNestedOneWithoutUserCompanyInput = {
    create?: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
    connectOrCreate?: AddressCompanyCreateOrConnectWithoutUserCompanyInput
    connect?: AddressCompanyWhereUniqueInput
  }

  export type AddressCompanyUncheckedCreateNestedOneWithoutUserCompanyInput = {
    create?: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
    connectOrCreate?: AddressCompanyCreateOrConnectWithoutUserCompanyInput
    connect?: AddressCompanyWhereUniqueInput
  }

  export type AddressCompanyUpdateOneWithoutUserCompanyNestedInput = {
    create?: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
    connectOrCreate?: AddressCompanyCreateOrConnectWithoutUserCompanyInput
    upsert?: AddressCompanyUpsertWithoutUserCompanyInput
    disconnect?: AddressCompanyWhereInput | boolean
    delete?: AddressCompanyWhereInput | boolean
    connect?: AddressCompanyWhereUniqueInput
    update?: XOR<XOR<AddressCompanyUpdateToOneWithWhereWithoutUserCompanyInput, AddressCompanyUpdateWithoutUserCompanyInput>, AddressCompanyUncheckedUpdateWithoutUserCompanyInput>
  }

  export type AddressCompanyUncheckedUpdateOneWithoutUserCompanyNestedInput = {
    create?: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
    connectOrCreate?: AddressCompanyCreateOrConnectWithoutUserCompanyInput
    upsert?: AddressCompanyUpsertWithoutUserCompanyInput
    disconnect?: AddressCompanyWhereInput | boolean
    delete?: AddressCompanyWhereInput | boolean
    connect?: AddressCompanyWhereUniqueInput
    update?: XOR<XOR<AddressCompanyUpdateToOneWithWhereWithoutUserCompanyInput, AddressCompanyUpdateWithoutUserCompanyInput>, AddressCompanyUncheckedUpdateWithoutUserCompanyInput>
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

  export type UserCandidateCreateWithoutAddressInput = {
    email: string
    password: string
    name: string
    dateNasc: Date | string
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt?: Date | string
  }

  export type UserCandidateUncheckedCreateWithoutAddressInput = {
    id?: number
    email: string
    password: string
    name: string
    dateNasc: Date | string
    cpf: string
    phone: string
    gender: string
    disablePerson: string
    createdAt?: Date | string
  }

  export type UserCandidateCreateOrConnectWithoutAddressInput = {
    where: UserCandidateWhereUniqueInput
    create: XOR<UserCandidateCreateWithoutAddressInput, UserCandidateUncheckedCreateWithoutAddressInput>
  }

  export type UserCandidateUpsertWithoutAddressInput = {
    update: XOR<UserCandidateUpdateWithoutAddressInput, UserCandidateUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCandidateCreateWithoutAddressInput, UserCandidateUncheckedCreateWithoutAddressInput>
    where?: UserCandidateWhereInput
  }

  export type UserCandidateUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserCandidateWhereInput
    data: XOR<UserCandidateUpdateWithoutAddressInput, UserCandidateUncheckedUpdateWithoutAddressInput>
  }

  export type UserCandidateUpdateWithoutAddressInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCandidateUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateNasc?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    disablePerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateWithoutUserCandidateInput = {
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
  }

  export type AddressUncheckedCreateWithoutUserCandidateInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
  }

  export type AddressCreateOrConnectWithoutUserCandidateInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
  }

  export type AddressUpsertWithoutUserCandidateInput = {
    update: XOR<AddressUpdateWithoutUserCandidateInput, AddressUncheckedUpdateWithoutUserCandidateInput>
    create: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserCandidateInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserCandidateInput, AddressUncheckedUpdateWithoutUserCandidateInput>
  }

  export type AddressUpdateWithoutUserCandidateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutUserCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type UserCompanyCreateWithoutAddressInput = {
    email: string
    password: string
    name: string
    openingDate: Date | string
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt?: Date | string
  }

  export type UserCompanyUncheckedCreateWithoutAddressInput = {
    id?: number
    email: string
    password: string
    name: string
    openingDate: Date | string
    cnpj: string
    description: string
    socialReason: string
    fantasyName: string
    phone: string
    createdAt?: Date | string
  }

  export type UserCompanyCreateOrConnectWithoutAddressInput = {
    where: UserCompanyWhereUniqueInput
    create: XOR<UserCompanyCreateWithoutAddressInput, UserCompanyUncheckedCreateWithoutAddressInput>
  }

  export type UserCompanyUpsertWithoutAddressInput = {
    update: XOR<UserCompanyUpdateWithoutAddressInput, UserCompanyUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCompanyCreateWithoutAddressInput, UserCompanyUncheckedCreateWithoutAddressInput>
    where?: UserCompanyWhereInput
  }

  export type UserCompanyUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserCompanyWhereInput
    data: XOR<UserCompanyUpdateWithoutAddressInput, UserCompanyUncheckedUpdateWithoutAddressInput>
  }

  export type UserCompanyUpdateWithoutAddressInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCompanyUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnpj?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    socialReason?: StringFieldUpdateOperationsInput | string
    fantasyName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCompanyCreateWithoutUserCompanyInput = {
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
  }

  export type AddressCompanyUncheckedCreateWithoutUserCompanyInput = {
    id?: number
    country?: string | null
    state?: string | null
    city: string
    district: string
    street: string
    number: string
    complement?: string | null
    postalCode: string
  }

  export type AddressCompanyCreateOrConnectWithoutUserCompanyInput = {
    where: AddressCompanyWhereUniqueInput
    create: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
  }

  export type AddressCompanyUpsertWithoutUserCompanyInput = {
    update: XOR<AddressCompanyUpdateWithoutUserCompanyInput, AddressCompanyUncheckedUpdateWithoutUserCompanyInput>
    create: XOR<AddressCompanyCreateWithoutUserCompanyInput, AddressCompanyUncheckedCreateWithoutUserCompanyInput>
    where?: AddressCompanyWhereInput
  }

  export type AddressCompanyUpdateToOneWithWhereWithoutUserCompanyInput = {
    where?: AddressCompanyWhereInput
    data: XOR<AddressCompanyUpdateWithoutUserCompanyInput, AddressCompanyUncheckedUpdateWithoutUserCompanyInput>
  }

  export type AddressCompanyUpdateWithoutUserCompanyInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCompanyUncheckedUpdateWithoutUserCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
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
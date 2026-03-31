
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
 * Model Curriculo
 * 
 */
export type Curriculo = $Result.DefaultSelection<Prisma.$CurriculoPayload>
/**
 * Model ExperienciaProfissional
 * 
 */
export type ExperienciaProfissional = $Result.DefaultSelection<Prisma.$ExperienciaProfissionalPayload>
/**
 * Model FormacaoAcademica
 * 
 */
export type FormacaoAcademica = $Result.DefaultSelection<Prisma.$FormacaoAcademicaPayload>
/**
 * Model Certificado
 * 
 */
export type Certificado = $Result.DefaultSelection<Prisma.$CertificadoPayload>
/**
 * Model Idioma
 * 
 */
export type Idioma = $Result.DefaultSelection<Prisma.$IdiomaPayload>
/**
 * Model Diferencial
 * 
 */
export type Diferencial = $Result.DefaultSelection<Prisma.$DiferencialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

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

  /**
   * `prisma.curriculo`: Exposes CRUD operations for the **Curriculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curriculos
    * const curriculos = await prisma.curriculo.findMany()
    * ```
    */
  get curriculo(): Prisma.CurriculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienciaProfissional`: Exposes CRUD operations for the **ExperienciaProfissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienciaProfissionals
    * const experienciaProfissionals = await prisma.experienciaProfissional.findMany()
    * ```
    */
  get experienciaProfissional(): Prisma.ExperienciaProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formacaoAcademica`: Exposes CRUD operations for the **FormacaoAcademica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormacaoAcademicas
    * const formacaoAcademicas = await prisma.formacaoAcademica.findMany()
    * ```
    */
  get formacaoAcademica(): Prisma.FormacaoAcademicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificado`: Exposes CRUD operations for the **Certificado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificados
    * const certificados = await prisma.certificado.findMany()
    * ```
    */
  get certificado(): Prisma.CertificadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idioma`: Exposes CRUD operations for the **Idioma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idiomas
    * const idiomas = await prisma.idioma.findMany()
    * ```
    */
  get idioma(): Prisma.IdiomaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diferencial`: Exposes CRUD operations for the **Diferencial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diferencials
    * const diferencials = await prisma.diferencial.findMany()
    * ```
    */
  get diferencial(): Prisma.DiferencialDelegate<ExtArgs, ClientOptions>;
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
    UserCompany: 'UserCompany',
    Curriculo: 'Curriculo',
    ExperienciaProfissional: 'ExperienciaProfissional',
    FormacaoAcademica: 'FormacaoAcademica',
    Certificado: 'Certificado',
    Idioma: 'Idioma',
    Diferencial: 'Diferencial'
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
      modelProps: "address" | "userCandidate" | "addressCompany" | "userCompany" | "curriculo" | "experienciaProfissional" | "formacaoAcademica" | "certificado" | "idioma" | "diferencial"
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
      Curriculo: {
        payload: Prisma.$CurriculoPayload<ExtArgs>
        fields: Prisma.CurriculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurriculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurriculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          findFirst: {
            args: Prisma.CurriculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurriculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          findMany: {
            args: Prisma.CurriculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>[]
          }
          create: {
            args: Prisma.CurriculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          createMany: {
            args: Prisma.CurriculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurriculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>[]
          }
          delete: {
            args: Prisma.CurriculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          update: {
            args: Prisma.CurriculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          deleteMany: {
            args: Prisma.CurriculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurriculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurriculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>[]
          }
          upsert: {
            args: Prisma.CurriculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculoPayload>
          }
          aggregate: {
            args: Prisma.CurriculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurriculo>
          }
          groupBy: {
            args: Prisma.CurriculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurriculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurriculoCountArgs<ExtArgs>
            result: $Utils.Optional<CurriculoCountAggregateOutputType> | number
          }
        }
      }
      ExperienciaProfissional: {
        payload: Prisma.$ExperienciaProfissionalPayload<ExtArgs>
        fields: Prisma.ExperienciaProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienciaProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienciaProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ExperienciaProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienciaProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          findMany: {
            args: Prisma.ExperienciaProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>[]
          }
          create: {
            args: Prisma.ExperienciaProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          createMany: {
            args: Prisma.ExperienciaProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienciaProfissionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>[]
          }
          delete: {
            args: Prisma.ExperienciaProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          update: {
            args: Prisma.ExperienciaProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ExperienciaProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienciaProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienciaProfissionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>[]
          }
          upsert: {
            args: Prisma.ExperienciaProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienciaProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ExperienciaProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienciaProfissional>
          }
          groupBy: {
            args: Prisma.ExperienciaProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienciaProfissionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienciaProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienciaProfissionalCountAggregateOutputType> | number
          }
        }
      }
      FormacaoAcademica: {
        payload: Prisma.$FormacaoAcademicaPayload<ExtArgs>
        fields: Prisma.FormacaoAcademicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormacaoAcademicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormacaoAcademicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          findFirst: {
            args: Prisma.FormacaoAcademicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormacaoAcademicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          findMany: {
            args: Prisma.FormacaoAcademicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>[]
          }
          create: {
            args: Prisma.FormacaoAcademicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          createMany: {
            args: Prisma.FormacaoAcademicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormacaoAcademicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>[]
          }
          delete: {
            args: Prisma.FormacaoAcademicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          update: {
            args: Prisma.FormacaoAcademicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          deleteMany: {
            args: Prisma.FormacaoAcademicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormacaoAcademicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormacaoAcademicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>[]
          }
          upsert: {
            args: Prisma.FormacaoAcademicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormacaoAcademicaPayload>
          }
          aggregate: {
            args: Prisma.FormacaoAcademicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormacaoAcademica>
          }
          groupBy: {
            args: Prisma.FormacaoAcademicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormacaoAcademicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormacaoAcademicaCountArgs<ExtArgs>
            result: $Utils.Optional<FormacaoAcademicaCountAggregateOutputType> | number
          }
        }
      }
      Certificado: {
        payload: Prisma.$CertificadoPayload<ExtArgs>
        fields: Prisma.CertificadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findFirst: {
            args: Prisma.CertificadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findMany: {
            args: Prisma.CertificadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          create: {
            args: Prisma.CertificadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          createMany: {
            args: Prisma.CertificadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          delete: {
            args: Prisma.CertificadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          update: {
            args: Prisma.CertificadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          deleteMany: {
            args: Prisma.CertificadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          upsert: {
            args: Prisma.CertificadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          aggregate: {
            args: Prisma.CertificadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificado>
          }
          groupBy: {
            args: Prisma.CertificadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificadoCountArgs<ExtArgs>
            result: $Utils.Optional<CertificadoCountAggregateOutputType> | number
          }
        }
      }
      Idioma: {
        payload: Prisma.$IdiomaPayload<ExtArgs>
        fields: Prisma.IdiomaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdiomaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdiomaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          findFirst: {
            args: Prisma.IdiomaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdiomaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          findMany: {
            args: Prisma.IdiomaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>[]
          }
          create: {
            args: Prisma.IdiomaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          createMany: {
            args: Prisma.IdiomaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdiomaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>[]
          }
          delete: {
            args: Prisma.IdiomaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          update: {
            args: Prisma.IdiomaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          deleteMany: {
            args: Prisma.IdiomaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdiomaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdiomaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>[]
          }
          upsert: {
            args: Prisma.IdiomaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomaPayload>
          }
          aggregate: {
            args: Prisma.IdiomaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdioma>
          }
          groupBy: {
            args: Prisma.IdiomaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdiomaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdiomaCountArgs<ExtArgs>
            result: $Utils.Optional<IdiomaCountAggregateOutputType> | number
          }
        }
      }
      Diferencial: {
        payload: Prisma.$DiferencialPayload<ExtArgs>
        fields: Prisma.DiferencialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiferencialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiferencialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          findFirst: {
            args: Prisma.DiferencialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiferencialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          findMany: {
            args: Prisma.DiferencialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>[]
          }
          create: {
            args: Prisma.DiferencialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          createMany: {
            args: Prisma.DiferencialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiferencialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>[]
          }
          delete: {
            args: Prisma.DiferencialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          update: {
            args: Prisma.DiferencialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          deleteMany: {
            args: Prisma.DiferencialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiferencialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiferencialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>[]
          }
          upsert: {
            args: Prisma.DiferencialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiferencialPayload>
          }
          aggregate: {
            args: Prisma.DiferencialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiferencial>
          }
          groupBy: {
            args: Prisma.DiferencialGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiferencialGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiferencialCountArgs<ExtArgs>
            result: $Utils.Optional<DiferencialCountAggregateOutputType> | number
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
    curriculo?: CurriculoOmit
    experienciaProfissional?: ExperienciaProfissionalOmit
    formacaoAcademica?: FormacaoAcademicaOmit
    certificado?: CertificadoOmit
    idioma?: IdiomaOmit
    diferencial?: DiferencialOmit
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
   * Count Type CurriculoCountOutputType
   */

  export type CurriculoCountOutputType = {
    experiencias: number
    formacoes: number
    certificados: number
    idiomas: number
    diferenciais: number
  }

  export type CurriculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiencias?: boolean | CurriculoCountOutputTypeCountExperienciasArgs
    formacoes?: boolean | CurriculoCountOutputTypeCountFormacoesArgs
    certificados?: boolean | CurriculoCountOutputTypeCountCertificadosArgs
    idiomas?: boolean | CurriculoCountOutputTypeCountIdiomasArgs
    diferenciais?: boolean | CurriculoCountOutputTypeCountDiferenciaisArgs
  }

  // Custom InputTypes
  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurriculoCountOutputType
     */
    select?: CurriculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeCountExperienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienciaProfissionalWhereInput
  }

  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeCountFormacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormacaoAcademicaWhereInput
  }

  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }

  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeCountIdiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdiomaWhereInput
  }

  /**
   * CurriculoCountOutputType without action
   */
  export type CurriculoCountOutputTypeCountDiferenciaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiferencialWhereInput
  }


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
    curriculo?: boolean | UserCandidate$curriculoArgs<ExtArgs>
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
    curriculo?: boolean | UserCandidate$curriculoArgs<ExtArgs>
  }
  export type UserCandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserCandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserCandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCandidate"
    objects: {
      Address: Prisma.$AddressPayload<ExtArgs> | null
      curriculo: Prisma.$CurriculoPayload<ExtArgs> | null
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
    curriculo<T extends UserCandidate$curriculoArgs<ExtArgs> = {}>(args?: Subset<T, UserCandidate$curriculoArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * UserCandidate.curriculo
   */
  export type UserCandidate$curriculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    where?: CurriculoWhereInput
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
   * Model Curriculo
   */

  export type AggregateCurriculo = {
    _count: CurriculoCountAggregateOutputType | null
    _avg: CurriculoAvgAggregateOutputType | null
    _sum: CurriculoSumAggregateOutputType | null
    _min: CurriculoMinAggregateOutputType | null
    _max: CurriculoMaxAggregateOutputType | null
  }

  export type CurriculoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CurriculoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CurriculoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurriculoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurriculoCountAggregateOutputType = {
    id: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CurriculoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CurriculoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CurriculoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurriculoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurriculoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CurriculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curriculo to aggregate.
     */
    where?: CurriculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculos to fetch.
     */
    orderBy?: CurriculoOrderByWithRelationInput | CurriculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurriculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curriculos
    **/
    _count?: true | CurriculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurriculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurriculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurriculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurriculoMaxAggregateInputType
  }

  export type GetCurriculoAggregateType<T extends CurriculoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurriculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurriculo[P]>
      : GetScalarType<T[P], AggregateCurriculo[P]>
  }




  export type CurriculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurriculoWhereInput
    orderBy?: CurriculoOrderByWithAggregationInput | CurriculoOrderByWithAggregationInput[]
    by: CurriculoScalarFieldEnum[] | CurriculoScalarFieldEnum
    having?: CurriculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurriculoCountAggregateInputType | true
    _avg?: CurriculoAvgAggregateInputType
    _sum?: CurriculoSumAggregateInputType
    _min?: CurriculoMinAggregateInputType
    _max?: CurriculoMaxAggregateInputType
  }

  export type CurriculoGroupByOutputType = {
    id: number
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: CurriculoCountAggregateOutputType | null
    _avg: CurriculoAvgAggregateOutputType | null
    _sum: CurriculoSumAggregateOutputType | null
    _min: CurriculoMinAggregateOutputType | null
    _max: CurriculoMaxAggregateOutputType | null
  }

  type GetCurriculoGroupByPayload<T extends CurriculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurriculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurriculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurriculoGroupByOutputType[P]>
            : GetScalarType<T[P], CurriculoGroupByOutputType[P]>
        }
      >
    >


  export type CurriculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
    experiencias?: boolean | Curriculo$experienciasArgs<ExtArgs>
    formacoes?: boolean | Curriculo$formacoesArgs<ExtArgs>
    certificados?: boolean | Curriculo$certificadosArgs<ExtArgs>
    idiomas?: boolean | Curriculo$idiomasArgs<ExtArgs>
    diferenciais?: boolean | Curriculo$diferenciaisArgs<ExtArgs>
    _count?: boolean | CurriculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculo"]>

  export type CurriculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculo"]>

  export type CurriculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curriculo"]>

  export type CurriculoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CurriculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["curriculo"]>
  export type CurriculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
    experiencias?: boolean | Curriculo$experienciasArgs<ExtArgs>
    formacoes?: boolean | Curriculo$formacoesArgs<ExtArgs>
    certificados?: boolean | Curriculo$certificadosArgs<ExtArgs>
    idiomas?: boolean | Curriculo$idiomasArgs<ExtArgs>
    diferenciais?: boolean | Curriculo$diferenciaisArgs<ExtArgs>
    _count?: boolean | CurriculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurriculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }
  export type CurriculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserCandidateDefaultArgs<ExtArgs>
  }

  export type $CurriculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curriculo"
    objects: {
      usuario: Prisma.$UserCandidatePayload<ExtArgs>
      experiencias: Prisma.$ExperienciaProfissionalPayload<ExtArgs>[]
      formacoes: Prisma.$FormacaoAcademicaPayload<ExtArgs>[]
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
      idiomas: Prisma.$IdiomaPayload<ExtArgs>[]
      diferenciais: Prisma.$DiferencialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curriculo"]>
    composites: {}
  }

  type CurriculoGetPayload<S extends boolean | null | undefined | CurriculoDefaultArgs> = $Result.GetResult<Prisma.$CurriculoPayload, S>

  type CurriculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurriculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurriculoCountAggregateInputType | true
    }

  export interface CurriculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curriculo'], meta: { name: 'Curriculo' } }
    /**
     * Find zero or one Curriculo that matches the filter.
     * @param {CurriculoFindUniqueArgs} args - Arguments to find a Curriculo
     * @example
     * // Get one Curriculo
     * const curriculo = await prisma.curriculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurriculoFindUniqueArgs>(args: SelectSubset<T, CurriculoFindUniqueArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curriculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurriculoFindUniqueOrThrowArgs} args - Arguments to find a Curriculo
     * @example
     * // Get one Curriculo
     * const curriculo = await prisma.curriculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurriculoFindUniqueOrThrowArgs>(args: SelectSubset<T, CurriculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoFindFirstArgs} args - Arguments to find a Curriculo
     * @example
     * // Get one Curriculo
     * const curriculo = await prisma.curriculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurriculoFindFirstArgs>(args?: SelectSubset<T, CurriculoFindFirstArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoFindFirstOrThrowArgs} args - Arguments to find a Curriculo
     * @example
     * // Get one Curriculo
     * const curriculo = await prisma.curriculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurriculoFindFirstOrThrowArgs>(args?: SelectSubset<T, CurriculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curriculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curriculos
     * const curriculos = await prisma.curriculo.findMany()
     * 
     * // Get first 10 Curriculos
     * const curriculos = await prisma.curriculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curriculoWithIdOnly = await prisma.curriculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurriculoFindManyArgs>(args?: SelectSubset<T, CurriculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curriculo.
     * @param {CurriculoCreateArgs} args - Arguments to create a Curriculo.
     * @example
     * // Create one Curriculo
     * const Curriculo = await prisma.curriculo.create({
     *   data: {
     *     // ... data to create a Curriculo
     *   }
     * })
     * 
     */
    create<T extends CurriculoCreateArgs>(args: SelectSubset<T, CurriculoCreateArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curriculos.
     * @param {CurriculoCreateManyArgs} args - Arguments to create many Curriculos.
     * @example
     * // Create many Curriculos
     * const curriculo = await prisma.curriculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurriculoCreateManyArgs>(args?: SelectSubset<T, CurriculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curriculos and returns the data saved in the database.
     * @param {CurriculoCreateManyAndReturnArgs} args - Arguments to create many Curriculos.
     * @example
     * // Create many Curriculos
     * const curriculo = await prisma.curriculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curriculos and only return the `id`
     * const curriculoWithIdOnly = await prisma.curriculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurriculoCreateManyAndReturnArgs>(args?: SelectSubset<T, CurriculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curriculo.
     * @param {CurriculoDeleteArgs} args - Arguments to delete one Curriculo.
     * @example
     * // Delete one Curriculo
     * const Curriculo = await prisma.curriculo.delete({
     *   where: {
     *     // ... filter to delete one Curriculo
     *   }
     * })
     * 
     */
    delete<T extends CurriculoDeleteArgs>(args: SelectSubset<T, CurriculoDeleteArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curriculo.
     * @param {CurriculoUpdateArgs} args - Arguments to update one Curriculo.
     * @example
     * // Update one Curriculo
     * const curriculo = await prisma.curriculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurriculoUpdateArgs>(args: SelectSubset<T, CurriculoUpdateArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curriculos.
     * @param {CurriculoDeleteManyArgs} args - Arguments to filter Curriculos to delete.
     * @example
     * // Delete a few Curriculos
     * const { count } = await prisma.curriculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurriculoDeleteManyArgs>(args?: SelectSubset<T, CurriculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curriculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curriculos
     * const curriculo = await prisma.curriculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurriculoUpdateManyArgs>(args: SelectSubset<T, CurriculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curriculos and returns the data updated in the database.
     * @param {CurriculoUpdateManyAndReturnArgs} args - Arguments to update many Curriculos.
     * @example
     * // Update many Curriculos
     * const curriculo = await prisma.curriculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curriculos and only return the `id`
     * const curriculoWithIdOnly = await prisma.curriculo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CurriculoUpdateManyAndReturnArgs>(args: SelectSubset<T, CurriculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curriculo.
     * @param {CurriculoUpsertArgs} args - Arguments to update or create a Curriculo.
     * @example
     * // Update or create a Curriculo
     * const curriculo = await prisma.curriculo.upsert({
     *   create: {
     *     // ... data to create a Curriculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curriculo we want to update
     *   }
     * })
     */
    upsert<T extends CurriculoUpsertArgs>(args: SelectSubset<T, CurriculoUpsertArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curriculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoCountArgs} args - Arguments to filter Curriculos to count.
     * @example
     * // Count the number of Curriculos
     * const count = await prisma.curriculo.count({
     *   where: {
     *     // ... the filter for the Curriculos we want to count
     *   }
     * })
    **/
    count<T extends CurriculoCountArgs>(
      args?: Subset<T, CurriculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurriculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curriculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurriculoAggregateArgs>(args: Subset<T, CurriculoAggregateArgs>): Prisma.PrismaPromise<GetCurriculoAggregateType<T>>

    /**
     * Group by Curriculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculoGroupByArgs} args - Group by arguments.
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
      T extends CurriculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurriculoGroupByArgs['orderBy'] }
        : { orderBy?: CurriculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurriculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurriculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curriculo model
   */
  readonly fields: CurriculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curriculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurriculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserCandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserCandidateDefaultArgs<ExtArgs>>): Prisma__UserCandidateClient<$Result.GetResult<Prisma.$UserCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experiencias<T extends Curriculo$experienciasArgs<ExtArgs> = {}>(args?: Subset<T, Curriculo$experienciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formacoes<T extends Curriculo$formacoesArgs<ExtArgs> = {}>(args?: Subset<T, Curriculo$formacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificados<T extends Curriculo$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, Curriculo$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    idiomas<T extends Curriculo$idiomasArgs<ExtArgs> = {}>(args?: Subset<T, Curriculo$idiomasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diferenciais<T extends Curriculo$diferenciaisArgs<ExtArgs> = {}>(args?: Subset<T, Curriculo$diferenciaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Curriculo model
   */
  interface CurriculoFieldRefs {
    readonly id: FieldRef<"Curriculo", 'Int'>
    readonly usuarioId: FieldRef<"Curriculo", 'Int'>
    readonly createdAt: FieldRef<"Curriculo", 'DateTime'>
    readonly updatedAt: FieldRef<"Curriculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curriculo findUnique
   */
  export type CurriculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter, which Curriculo to fetch.
     */
    where: CurriculoWhereUniqueInput
  }

  /**
   * Curriculo findUniqueOrThrow
   */
  export type CurriculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter, which Curriculo to fetch.
     */
    where: CurriculoWhereUniqueInput
  }

  /**
   * Curriculo findFirst
   */
  export type CurriculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter, which Curriculo to fetch.
     */
    where?: CurriculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculos to fetch.
     */
    orderBy?: CurriculoOrderByWithRelationInput | CurriculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curriculos.
     */
    cursor?: CurriculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curriculos.
     */
    distinct?: CurriculoScalarFieldEnum | CurriculoScalarFieldEnum[]
  }

  /**
   * Curriculo findFirstOrThrow
   */
  export type CurriculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter, which Curriculo to fetch.
     */
    where?: CurriculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculos to fetch.
     */
    orderBy?: CurriculoOrderByWithRelationInput | CurriculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curriculos.
     */
    cursor?: CurriculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curriculos.
     */
    distinct?: CurriculoScalarFieldEnum | CurriculoScalarFieldEnum[]
  }

  /**
   * Curriculo findMany
   */
  export type CurriculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter, which Curriculos to fetch.
     */
    where?: CurriculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curriculos to fetch.
     */
    orderBy?: CurriculoOrderByWithRelationInput | CurriculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curriculos.
     */
    cursor?: CurriculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curriculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curriculos.
     */
    skip?: number
    distinct?: CurriculoScalarFieldEnum | CurriculoScalarFieldEnum[]
  }

  /**
   * Curriculo create
   */
  export type CurriculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curriculo.
     */
    data: XOR<CurriculoCreateInput, CurriculoUncheckedCreateInput>
  }

  /**
   * Curriculo createMany
   */
  export type CurriculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curriculos.
     */
    data: CurriculoCreateManyInput | CurriculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curriculo createManyAndReturn
   */
  export type CurriculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * The data used to create many Curriculos.
     */
    data: CurriculoCreateManyInput | CurriculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculo update
   */
  export type CurriculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curriculo.
     */
    data: XOR<CurriculoUpdateInput, CurriculoUncheckedUpdateInput>
    /**
     * Choose, which Curriculo to update.
     */
    where: CurriculoWhereUniqueInput
  }

  /**
   * Curriculo updateMany
   */
  export type CurriculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curriculos.
     */
    data: XOR<CurriculoUpdateManyMutationInput, CurriculoUncheckedUpdateManyInput>
    /**
     * Filter which Curriculos to update
     */
    where?: CurriculoWhereInput
    /**
     * Limit how many Curriculos to update.
     */
    limit?: number
  }

  /**
   * Curriculo updateManyAndReturn
   */
  export type CurriculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * The data used to update Curriculos.
     */
    data: XOR<CurriculoUpdateManyMutationInput, CurriculoUncheckedUpdateManyInput>
    /**
     * Filter which Curriculos to update
     */
    where?: CurriculoWhereInput
    /**
     * Limit how many Curriculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculo upsert
   */
  export type CurriculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curriculo to update in case it exists.
     */
    where: CurriculoWhereUniqueInput
    /**
     * In case the Curriculo found by the `where` argument doesn't exist, create a new Curriculo with this data.
     */
    create: XOR<CurriculoCreateInput, CurriculoUncheckedCreateInput>
    /**
     * In case the Curriculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurriculoUpdateInput, CurriculoUncheckedUpdateInput>
  }

  /**
   * Curriculo delete
   */
  export type CurriculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
    /**
     * Filter which Curriculo to delete.
     */
    where: CurriculoWhereUniqueInput
  }

  /**
   * Curriculo deleteMany
   */
  export type CurriculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curriculos to delete
     */
    where?: CurriculoWhereInput
    /**
     * Limit how many Curriculos to delete.
     */
    limit?: number
  }

  /**
   * Curriculo.experiencias
   */
  export type Curriculo$experienciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    where?: ExperienciaProfissionalWhereInput
    orderBy?: ExperienciaProfissionalOrderByWithRelationInput | ExperienciaProfissionalOrderByWithRelationInput[]
    cursor?: ExperienciaProfissionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienciaProfissionalScalarFieldEnum | ExperienciaProfissionalScalarFieldEnum[]
  }

  /**
   * Curriculo.formacoes
   */
  export type Curriculo$formacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    where?: FormacaoAcademicaWhereInput
    orderBy?: FormacaoAcademicaOrderByWithRelationInput | FormacaoAcademicaOrderByWithRelationInput[]
    cursor?: FormacaoAcademicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormacaoAcademicaScalarFieldEnum | FormacaoAcademicaScalarFieldEnum[]
  }

  /**
   * Curriculo.certificados
   */
  export type Curriculo$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Curriculo.idiomas
   */
  export type Curriculo$idiomasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    where?: IdiomaWhereInput
    orderBy?: IdiomaOrderByWithRelationInput | IdiomaOrderByWithRelationInput[]
    cursor?: IdiomaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdiomaScalarFieldEnum | IdiomaScalarFieldEnum[]
  }

  /**
   * Curriculo.diferenciais
   */
  export type Curriculo$diferenciaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    where?: DiferencialWhereInput
    orderBy?: DiferencialOrderByWithRelationInput | DiferencialOrderByWithRelationInput[]
    cursor?: DiferencialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiferencialScalarFieldEnum | DiferencialScalarFieldEnum[]
  }

  /**
   * Curriculo without action
   */
  export type CurriculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculo
     */
    select?: CurriculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculo
     */
    omit?: CurriculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculoInclude<ExtArgs> | null
  }


  /**
   * Model ExperienciaProfissional
   */

  export type AggregateExperienciaProfissional = {
    _count: ExperienciaProfissionalCountAggregateOutputType | null
    _avg: ExperienciaProfissionalAvgAggregateOutputType | null
    _sum: ExperienciaProfissionalSumAggregateOutputType | null
    _min: ExperienciaProfissionalMinAggregateOutputType | null
    _max: ExperienciaProfissionalMaxAggregateOutputType | null
  }

  export type ExperienciaProfissionalAvgAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type ExperienciaProfissionalSumAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type ExperienciaProfissionalMinAggregateOutputType = {
    id: number | null
    cargo: string | null
    empresa: string | null
    descricao: string | null
    inicioData: Date | null
    fimData: Date | null
    empregoAtual: boolean | null
    curriculoId: number | null
  }

  export type ExperienciaProfissionalMaxAggregateOutputType = {
    id: number | null
    cargo: string | null
    empresa: string | null
    descricao: string | null
    inicioData: Date | null
    fimData: Date | null
    empregoAtual: boolean | null
    curriculoId: number | null
  }

  export type ExperienciaProfissionalCountAggregateOutputType = {
    id: number
    cargo: number
    empresa: number
    descricao: number
    inicioData: number
    fimData: number
    empregoAtual: number
    curriculoId: number
    _all: number
  }


  export type ExperienciaProfissionalAvgAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type ExperienciaProfissionalSumAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type ExperienciaProfissionalMinAggregateInputType = {
    id?: true
    cargo?: true
    empresa?: true
    descricao?: true
    inicioData?: true
    fimData?: true
    empregoAtual?: true
    curriculoId?: true
  }

  export type ExperienciaProfissionalMaxAggregateInputType = {
    id?: true
    cargo?: true
    empresa?: true
    descricao?: true
    inicioData?: true
    fimData?: true
    empregoAtual?: true
    curriculoId?: true
  }

  export type ExperienciaProfissionalCountAggregateInputType = {
    id?: true
    cargo?: true
    empresa?: true
    descricao?: true
    inicioData?: true
    fimData?: true
    empregoAtual?: true
    curriculoId?: true
    _all?: true
  }

  export type ExperienciaProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienciaProfissional to aggregate.
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciaProfissionals to fetch.
     */
    orderBy?: ExperienciaProfissionalOrderByWithRelationInput | ExperienciaProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienciaProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciaProfissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciaProfissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienciaProfissionals
    **/
    _count?: true | ExperienciaProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienciaProfissionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienciaProfissionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienciaProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienciaProfissionalMaxAggregateInputType
  }

  export type GetExperienciaProfissionalAggregateType<T extends ExperienciaProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienciaProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienciaProfissional[P]>
      : GetScalarType<T[P], AggregateExperienciaProfissional[P]>
  }




  export type ExperienciaProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienciaProfissionalWhereInput
    orderBy?: ExperienciaProfissionalOrderByWithAggregationInput | ExperienciaProfissionalOrderByWithAggregationInput[]
    by: ExperienciaProfissionalScalarFieldEnum[] | ExperienciaProfissionalScalarFieldEnum
    having?: ExperienciaProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienciaProfissionalCountAggregateInputType | true
    _avg?: ExperienciaProfissionalAvgAggregateInputType
    _sum?: ExperienciaProfissionalSumAggregateInputType
    _min?: ExperienciaProfissionalMinAggregateInputType
    _max?: ExperienciaProfissionalMaxAggregateInputType
  }

  export type ExperienciaProfissionalGroupByOutputType = {
    id: number
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date
    fimData: Date | null
    empregoAtual: boolean
    curriculoId: number
    _count: ExperienciaProfissionalCountAggregateOutputType | null
    _avg: ExperienciaProfissionalAvgAggregateOutputType | null
    _sum: ExperienciaProfissionalSumAggregateOutputType | null
    _min: ExperienciaProfissionalMinAggregateOutputType | null
    _max: ExperienciaProfissionalMaxAggregateOutputType | null
  }

  type GetExperienciaProfissionalGroupByPayload<T extends ExperienciaProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienciaProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienciaProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienciaProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienciaProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ExperienciaProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    empresa?: boolean
    descricao?: boolean
    inicioData?: boolean
    fimData?: boolean
    empregoAtual?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienciaProfissional"]>

  export type ExperienciaProfissionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    empresa?: boolean
    descricao?: boolean
    inicioData?: boolean
    fimData?: boolean
    empregoAtual?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienciaProfissional"]>

  export type ExperienciaProfissionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargo?: boolean
    empresa?: boolean
    descricao?: boolean
    inicioData?: boolean
    fimData?: boolean
    empregoAtual?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienciaProfissional"]>

  export type ExperienciaProfissionalSelectScalar = {
    id?: boolean
    cargo?: boolean
    empresa?: boolean
    descricao?: boolean
    inicioData?: boolean
    fimData?: boolean
    empregoAtual?: boolean
    curriculoId?: boolean
  }

  export type ExperienciaProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargo" | "empresa" | "descricao" | "inicioData" | "fimData" | "empregoAtual" | "curriculoId", ExtArgs["result"]["experienciaProfissional"]>
  export type ExperienciaProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type ExperienciaProfissionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type ExperienciaProfissionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }

  export type $ExperienciaProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienciaProfissional"
    objects: {
      curriculo: Prisma.$CurriculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cargo: string
      empresa: string
      descricao: string
      inicioData: Date
      fimData: Date | null
      empregoAtual: boolean
      curriculoId: number
    }, ExtArgs["result"]["experienciaProfissional"]>
    composites: {}
  }

  type ExperienciaProfissionalGetPayload<S extends boolean | null | undefined | ExperienciaProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ExperienciaProfissionalPayload, S>

  type ExperienciaProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienciaProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienciaProfissionalCountAggregateInputType | true
    }

  export interface ExperienciaProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienciaProfissional'], meta: { name: 'ExperienciaProfissional' } }
    /**
     * Find zero or one ExperienciaProfissional that matches the filter.
     * @param {ExperienciaProfissionalFindUniqueArgs} args - Arguments to find a ExperienciaProfissional
     * @example
     * // Get one ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienciaProfissionalFindUniqueArgs>(args: SelectSubset<T, ExperienciaProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienciaProfissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienciaProfissionalFindUniqueOrThrowArgs} args - Arguments to find a ExperienciaProfissional
     * @example
     * // Get one ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienciaProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienciaProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienciaProfissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalFindFirstArgs} args - Arguments to find a ExperienciaProfissional
     * @example
     * // Get one ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienciaProfissionalFindFirstArgs>(args?: SelectSubset<T, ExperienciaProfissionalFindFirstArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienciaProfissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalFindFirstOrThrowArgs} args - Arguments to find a ExperienciaProfissional
     * @example
     * // Get one ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienciaProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienciaProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienciaProfissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienciaProfissionals
     * const experienciaProfissionals = await prisma.experienciaProfissional.findMany()
     * 
     * // Get first 10 ExperienciaProfissionals
     * const experienciaProfissionals = await prisma.experienciaProfissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienciaProfissionalWithIdOnly = await prisma.experienciaProfissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienciaProfissionalFindManyArgs>(args?: SelectSubset<T, ExperienciaProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienciaProfissional.
     * @param {ExperienciaProfissionalCreateArgs} args - Arguments to create a ExperienciaProfissional.
     * @example
     * // Create one ExperienciaProfissional
     * const ExperienciaProfissional = await prisma.experienciaProfissional.create({
     *   data: {
     *     // ... data to create a ExperienciaProfissional
     *   }
     * })
     * 
     */
    create<T extends ExperienciaProfissionalCreateArgs>(args: SelectSubset<T, ExperienciaProfissionalCreateArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienciaProfissionals.
     * @param {ExperienciaProfissionalCreateManyArgs} args - Arguments to create many ExperienciaProfissionals.
     * @example
     * // Create many ExperienciaProfissionals
     * const experienciaProfissional = await prisma.experienciaProfissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienciaProfissionalCreateManyArgs>(args?: SelectSubset<T, ExperienciaProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienciaProfissionals and returns the data saved in the database.
     * @param {ExperienciaProfissionalCreateManyAndReturnArgs} args - Arguments to create many ExperienciaProfissionals.
     * @example
     * // Create many ExperienciaProfissionals
     * const experienciaProfissional = await prisma.experienciaProfissional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienciaProfissionals and only return the `id`
     * const experienciaProfissionalWithIdOnly = await prisma.experienciaProfissional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienciaProfissionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienciaProfissionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienciaProfissional.
     * @param {ExperienciaProfissionalDeleteArgs} args - Arguments to delete one ExperienciaProfissional.
     * @example
     * // Delete one ExperienciaProfissional
     * const ExperienciaProfissional = await prisma.experienciaProfissional.delete({
     *   where: {
     *     // ... filter to delete one ExperienciaProfissional
     *   }
     * })
     * 
     */
    delete<T extends ExperienciaProfissionalDeleteArgs>(args: SelectSubset<T, ExperienciaProfissionalDeleteArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienciaProfissional.
     * @param {ExperienciaProfissionalUpdateArgs} args - Arguments to update one ExperienciaProfissional.
     * @example
     * // Update one ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienciaProfissionalUpdateArgs>(args: SelectSubset<T, ExperienciaProfissionalUpdateArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienciaProfissionals.
     * @param {ExperienciaProfissionalDeleteManyArgs} args - Arguments to filter ExperienciaProfissionals to delete.
     * @example
     * // Delete a few ExperienciaProfissionals
     * const { count } = await prisma.experienciaProfissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienciaProfissionalDeleteManyArgs>(args?: SelectSubset<T, ExperienciaProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienciaProfissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienciaProfissionals
     * const experienciaProfissional = await prisma.experienciaProfissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienciaProfissionalUpdateManyArgs>(args: SelectSubset<T, ExperienciaProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienciaProfissionals and returns the data updated in the database.
     * @param {ExperienciaProfissionalUpdateManyAndReturnArgs} args - Arguments to update many ExperienciaProfissionals.
     * @example
     * // Update many ExperienciaProfissionals
     * const experienciaProfissional = await prisma.experienciaProfissional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienciaProfissionals and only return the `id`
     * const experienciaProfissionalWithIdOnly = await prisma.experienciaProfissional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienciaProfissionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienciaProfissionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienciaProfissional.
     * @param {ExperienciaProfissionalUpsertArgs} args - Arguments to update or create a ExperienciaProfissional.
     * @example
     * // Update or create a ExperienciaProfissional
     * const experienciaProfissional = await prisma.experienciaProfissional.upsert({
     *   create: {
     *     // ... data to create a ExperienciaProfissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienciaProfissional we want to update
     *   }
     * })
     */
    upsert<T extends ExperienciaProfissionalUpsertArgs>(args: SelectSubset<T, ExperienciaProfissionalUpsertArgs<ExtArgs>>): Prisma__ExperienciaProfissionalClient<$Result.GetResult<Prisma.$ExperienciaProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienciaProfissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalCountArgs} args - Arguments to filter ExperienciaProfissionals to count.
     * @example
     * // Count the number of ExperienciaProfissionals
     * const count = await prisma.experienciaProfissional.count({
     *   where: {
     *     // ... the filter for the ExperienciaProfissionals we want to count
     *   }
     * })
    **/
    count<T extends ExperienciaProfissionalCountArgs>(
      args?: Subset<T, ExperienciaProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienciaProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienciaProfissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienciaProfissionalAggregateArgs>(args: Subset<T, ExperienciaProfissionalAggregateArgs>): Prisma.PrismaPromise<GetExperienciaProfissionalAggregateType<T>>

    /**
     * Group by ExperienciaProfissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienciaProfissionalGroupByArgs} args - Group by arguments.
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
      T extends ExperienciaProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienciaProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ExperienciaProfissionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienciaProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienciaProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienciaProfissional model
   */
  readonly fields: ExperienciaProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienciaProfissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienciaProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculo<T extends CurriculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurriculoDefaultArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExperienciaProfissional model
   */
  interface ExperienciaProfissionalFieldRefs {
    readonly id: FieldRef<"ExperienciaProfissional", 'Int'>
    readonly cargo: FieldRef<"ExperienciaProfissional", 'String'>
    readonly empresa: FieldRef<"ExperienciaProfissional", 'String'>
    readonly descricao: FieldRef<"ExperienciaProfissional", 'String'>
    readonly inicioData: FieldRef<"ExperienciaProfissional", 'DateTime'>
    readonly fimData: FieldRef<"ExperienciaProfissional", 'DateTime'>
    readonly empregoAtual: FieldRef<"ExperienciaProfissional", 'Boolean'>
    readonly curriculoId: FieldRef<"ExperienciaProfissional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExperienciaProfissional findUnique
   */
  export type ExperienciaProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciaProfissional to fetch.
     */
    where: ExperienciaProfissionalWhereUniqueInput
  }

  /**
   * ExperienciaProfissional findUniqueOrThrow
   */
  export type ExperienciaProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciaProfissional to fetch.
     */
    where: ExperienciaProfissionalWhereUniqueInput
  }

  /**
   * ExperienciaProfissional findFirst
   */
  export type ExperienciaProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciaProfissional to fetch.
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciaProfissionals to fetch.
     */
    orderBy?: ExperienciaProfissionalOrderByWithRelationInput | ExperienciaProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienciaProfissionals.
     */
    cursor?: ExperienciaProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciaProfissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciaProfissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienciaProfissionals.
     */
    distinct?: ExperienciaProfissionalScalarFieldEnum | ExperienciaProfissionalScalarFieldEnum[]
  }

  /**
   * ExperienciaProfissional findFirstOrThrow
   */
  export type ExperienciaProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciaProfissional to fetch.
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciaProfissionals to fetch.
     */
    orderBy?: ExperienciaProfissionalOrderByWithRelationInput | ExperienciaProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienciaProfissionals.
     */
    cursor?: ExperienciaProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciaProfissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciaProfissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienciaProfissionals.
     */
    distinct?: ExperienciaProfissionalScalarFieldEnum | ExperienciaProfissionalScalarFieldEnum[]
  }

  /**
   * ExperienciaProfissional findMany
   */
  export type ExperienciaProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which ExperienciaProfissionals to fetch.
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienciaProfissionals to fetch.
     */
    orderBy?: ExperienciaProfissionalOrderByWithRelationInput | ExperienciaProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienciaProfissionals.
     */
    cursor?: ExperienciaProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienciaProfissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienciaProfissionals.
     */
    skip?: number
    distinct?: ExperienciaProfissionalScalarFieldEnum | ExperienciaProfissionalScalarFieldEnum[]
  }

  /**
   * ExperienciaProfissional create
   */
  export type ExperienciaProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienciaProfissional.
     */
    data: XOR<ExperienciaProfissionalCreateInput, ExperienciaProfissionalUncheckedCreateInput>
  }

  /**
   * ExperienciaProfissional createMany
   */
  export type ExperienciaProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienciaProfissionals.
     */
    data: ExperienciaProfissionalCreateManyInput | ExperienciaProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienciaProfissional createManyAndReturn
   */
  export type ExperienciaProfissionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienciaProfissionals.
     */
    data: ExperienciaProfissionalCreateManyInput | ExperienciaProfissionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienciaProfissional update
   */
  export type ExperienciaProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienciaProfissional.
     */
    data: XOR<ExperienciaProfissionalUpdateInput, ExperienciaProfissionalUncheckedUpdateInput>
    /**
     * Choose, which ExperienciaProfissional to update.
     */
    where: ExperienciaProfissionalWhereUniqueInput
  }

  /**
   * ExperienciaProfissional updateMany
   */
  export type ExperienciaProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienciaProfissionals.
     */
    data: XOR<ExperienciaProfissionalUpdateManyMutationInput, ExperienciaProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which ExperienciaProfissionals to update
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * Limit how many ExperienciaProfissionals to update.
     */
    limit?: number
  }

  /**
   * ExperienciaProfissional updateManyAndReturn
   */
  export type ExperienciaProfissionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * The data used to update ExperienciaProfissionals.
     */
    data: XOR<ExperienciaProfissionalUpdateManyMutationInput, ExperienciaProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which ExperienciaProfissionals to update
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * Limit how many ExperienciaProfissionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienciaProfissional upsert
   */
  export type ExperienciaProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienciaProfissional to update in case it exists.
     */
    where: ExperienciaProfissionalWhereUniqueInput
    /**
     * In case the ExperienciaProfissional found by the `where` argument doesn't exist, create a new ExperienciaProfissional with this data.
     */
    create: XOR<ExperienciaProfissionalCreateInput, ExperienciaProfissionalUncheckedCreateInput>
    /**
     * In case the ExperienciaProfissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienciaProfissionalUpdateInput, ExperienciaProfissionalUncheckedUpdateInput>
  }

  /**
   * ExperienciaProfissional delete
   */
  export type ExperienciaProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
    /**
     * Filter which ExperienciaProfissional to delete.
     */
    where: ExperienciaProfissionalWhereUniqueInput
  }

  /**
   * ExperienciaProfissional deleteMany
   */
  export type ExperienciaProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienciaProfissionals to delete
     */
    where?: ExperienciaProfissionalWhereInput
    /**
     * Limit how many ExperienciaProfissionals to delete.
     */
    limit?: number
  }

  /**
   * ExperienciaProfissional without action
   */
  export type ExperienciaProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienciaProfissional
     */
    select?: ExperienciaProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienciaProfissional
     */
    omit?: ExperienciaProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienciaProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model FormacaoAcademica
   */

  export type AggregateFormacaoAcademica = {
    _count: FormacaoAcademicaCountAggregateOutputType | null
    _avg: FormacaoAcademicaAvgAggregateOutputType | null
    _sum: FormacaoAcademicaSumAggregateOutputType | null
    _min: FormacaoAcademicaMinAggregateOutputType | null
    _max: FormacaoAcademicaMaxAggregateOutputType | null
  }

  export type FormacaoAcademicaAvgAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type FormacaoAcademicaSumAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type FormacaoAcademicaMinAggregateOutputType = {
    id: number | null
    nivelFormacao: string | null
    grauFormacao: string | null
    curso: string | null
    nomeInstituicao: string | null
    status: string | null
    inicioData: Date | null
    fimData: Date | null
    curriculoId: number | null
  }

  export type FormacaoAcademicaMaxAggregateOutputType = {
    id: number | null
    nivelFormacao: string | null
    grauFormacao: string | null
    curso: string | null
    nomeInstituicao: string | null
    status: string | null
    inicioData: Date | null
    fimData: Date | null
    curriculoId: number | null
  }

  export type FormacaoAcademicaCountAggregateOutputType = {
    id: number
    nivelFormacao: number
    grauFormacao: number
    curso: number
    nomeInstituicao: number
    status: number
    inicioData: number
    fimData: number
    curriculoId: number
    _all: number
  }


  export type FormacaoAcademicaAvgAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type FormacaoAcademicaSumAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type FormacaoAcademicaMinAggregateInputType = {
    id?: true
    nivelFormacao?: true
    grauFormacao?: true
    curso?: true
    nomeInstituicao?: true
    status?: true
    inicioData?: true
    fimData?: true
    curriculoId?: true
  }

  export type FormacaoAcademicaMaxAggregateInputType = {
    id?: true
    nivelFormacao?: true
    grauFormacao?: true
    curso?: true
    nomeInstituicao?: true
    status?: true
    inicioData?: true
    fimData?: true
    curriculoId?: true
  }

  export type FormacaoAcademicaCountAggregateInputType = {
    id?: true
    nivelFormacao?: true
    grauFormacao?: true
    curso?: true
    nomeInstituicao?: true
    status?: true
    inicioData?: true
    fimData?: true
    curriculoId?: true
    _all?: true
  }

  export type FormacaoAcademicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormacaoAcademica to aggregate.
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoAcademicas to fetch.
     */
    orderBy?: FormacaoAcademicaOrderByWithRelationInput | FormacaoAcademicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormacaoAcademicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoAcademicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoAcademicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormacaoAcademicas
    **/
    _count?: true | FormacaoAcademicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormacaoAcademicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormacaoAcademicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormacaoAcademicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormacaoAcademicaMaxAggregateInputType
  }

  export type GetFormacaoAcademicaAggregateType<T extends FormacaoAcademicaAggregateArgs> = {
        [P in keyof T & keyof AggregateFormacaoAcademica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormacaoAcademica[P]>
      : GetScalarType<T[P], AggregateFormacaoAcademica[P]>
  }




  export type FormacaoAcademicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormacaoAcademicaWhereInput
    orderBy?: FormacaoAcademicaOrderByWithAggregationInput | FormacaoAcademicaOrderByWithAggregationInput[]
    by: FormacaoAcademicaScalarFieldEnum[] | FormacaoAcademicaScalarFieldEnum
    having?: FormacaoAcademicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormacaoAcademicaCountAggregateInputType | true
    _avg?: FormacaoAcademicaAvgAggregateInputType
    _sum?: FormacaoAcademicaSumAggregateInputType
    _min?: FormacaoAcademicaMinAggregateInputType
    _max?: FormacaoAcademicaMaxAggregateInputType
  }

  export type FormacaoAcademicaGroupByOutputType = {
    id: number
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date
    fimData: Date | null
    curriculoId: number
    _count: FormacaoAcademicaCountAggregateOutputType | null
    _avg: FormacaoAcademicaAvgAggregateOutputType | null
    _sum: FormacaoAcademicaSumAggregateOutputType | null
    _min: FormacaoAcademicaMinAggregateOutputType | null
    _max: FormacaoAcademicaMaxAggregateOutputType | null
  }

  type GetFormacaoAcademicaGroupByPayload<T extends FormacaoAcademicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormacaoAcademicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormacaoAcademicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormacaoAcademicaGroupByOutputType[P]>
            : GetScalarType<T[P], FormacaoAcademicaGroupByOutputType[P]>
        }
      >
    >


  export type FormacaoAcademicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelFormacao?: boolean
    grauFormacao?: boolean
    curso?: boolean
    nomeInstituicao?: boolean
    status?: boolean
    inicioData?: boolean
    fimData?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formacaoAcademica"]>

  export type FormacaoAcademicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelFormacao?: boolean
    grauFormacao?: boolean
    curso?: boolean
    nomeInstituicao?: boolean
    status?: boolean
    inicioData?: boolean
    fimData?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formacaoAcademica"]>

  export type FormacaoAcademicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nivelFormacao?: boolean
    grauFormacao?: boolean
    curso?: boolean
    nomeInstituicao?: boolean
    status?: boolean
    inicioData?: boolean
    fimData?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formacaoAcademica"]>

  export type FormacaoAcademicaSelectScalar = {
    id?: boolean
    nivelFormacao?: boolean
    grauFormacao?: boolean
    curso?: boolean
    nomeInstituicao?: boolean
    status?: boolean
    inicioData?: boolean
    fimData?: boolean
    curriculoId?: boolean
  }

  export type FormacaoAcademicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nivelFormacao" | "grauFormacao" | "curso" | "nomeInstituicao" | "status" | "inicioData" | "fimData" | "curriculoId", ExtArgs["result"]["formacaoAcademica"]>
  export type FormacaoAcademicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type FormacaoAcademicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type FormacaoAcademicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }

  export type $FormacaoAcademicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormacaoAcademica"
    objects: {
      curriculo: Prisma.$CurriculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nivelFormacao: string
      grauFormacao: string
      curso: string
      nomeInstituicao: string
      status: string
      inicioData: Date
      fimData: Date | null
      curriculoId: number
    }, ExtArgs["result"]["formacaoAcademica"]>
    composites: {}
  }

  type FormacaoAcademicaGetPayload<S extends boolean | null | undefined | FormacaoAcademicaDefaultArgs> = $Result.GetResult<Prisma.$FormacaoAcademicaPayload, S>

  type FormacaoAcademicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormacaoAcademicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormacaoAcademicaCountAggregateInputType | true
    }

  export interface FormacaoAcademicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormacaoAcademica'], meta: { name: 'FormacaoAcademica' } }
    /**
     * Find zero or one FormacaoAcademica that matches the filter.
     * @param {FormacaoAcademicaFindUniqueArgs} args - Arguments to find a FormacaoAcademica
     * @example
     * // Get one FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormacaoAcademicaFindUniqueArgs>(args: SelectSubset<T, FormacaoAcademicaFindUniqueArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormacaoAcademica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormacaoAcademicaFindUniqueOrThrowArgs} args - Arguments to find a FormacaoAcademica
     * @example
     * // Get one FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormacaoAcademicaFindUniqueOrThrowArgs>(args: SelectSubset<T, FormacaoAcademicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormacaoAcademica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaFindFirstArgs} args - Arguments to find a FormacaoAcademica
     * @example
     * // Get one FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormacaoAcademicaFindFirstArgs>(args?: SelectSubset<T, FormacaoAcademicaFindFirstArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormacaoAcademica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaFindFirstOrThrowArgs} args - Arguments to find a FormacaoAcademica
     * @example
     * // Get one FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormacaoAcademicaFindFirstOrThrowArgs>(args?: SelectSubset<T, FormacaoAcademicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormacaoAcademicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormacaoAcademicas
     * const formacaoAcademicas = await prisma.formacaoAcademica.findMany()
     * 
     * // Get first 10 FormacaoAcademicas
     * const formacaoAcademicas = await prisma.formacaoAcademica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formacaoAcademicaWithIdOnly = await prisma.formacaoAcademica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormacaoAcademicaFindManyArgs>(args?: SelectSubset<T, FormacaoAcademicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormacaoAcademica.
     * @param {FormacaoAcademicaCreateArgs} args - Arguments to create a FormacaoAcademica.
     * @example
     * // Create one FormacaoAcademica
     * const FormacaoAcademica = await prisma.formacaoAcademica.create({
     *   data: {
     *     // ... data to create a FormacaoAcademica
     *   }
     * })
     * 
     */
    create<T extends FormacaoAcademicaCreateArgs>(args: SelectSubset<T, FormacaoAcademicaCreateArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormacaoAcademicas.
     * @param {FormacaoAcademicaCreateManyArgs} args - Arguments to create many FormacaoAcademicas.
     * @example
     * // Create many FormacaoAcademicas
     * const formacaoAcademica = await prisma.formacaoAcademica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormacaoAcademicaCreateManyArgs>(args?: SelectSubset<T, FormacaoAcademicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormacaoAcademicas and returns the data saved in the database.
     * @param {FormacaoAcademicaCreateManyAndReturnArgs} args - Arguments to create many FormacaoAcademicas.
     * @example
     * // Create many FormacaoAcademicas
     * const formacaoAcademica = await prisma.formacaoAcademica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormacaoAcademicas and only return the `id`
     * const formacaoAcademicaWithIdOnly = await prisma.formacaoAcademica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormacaoAcademicaCreateManyAndReturnArgs>(args?: SelectSubset<T, FormacaoAcademicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormacaoAcademica.
     * @param {FormacaoAcademicaDeleteArgs} args - Arguments to delete one FormacaoAcademica.
     * @example
     * // Delete one FormacaoAcademica
     * const FormacaoAcademica = await prisma.formacaoAcademica.delete({
     *   where: {
     *     // ... filter to delete one FormacaoAcademica
     *   }
     * })
     * 
     */
    delete<T extends FormacaoAcademicaDeleteArgs>(args: SelectSubset<T, FormacaoAcademicaDeleteArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormacaoAcademica.
     * @param {FormacaoAcademicaUpdateArgs} args - Arguments to update one FormacaoAcademica.
     * @example
     * // Update one FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormacaoAcademicaUpdateArgs>(args: SelectSubset<T, FormacaoAcademicaUpdateArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormacaoAcademicas.
     * @param {FormacaoAcademicaDeleteManyArgs} args - Arguments to filter FormacaoAcademicas to delete.
     * @example
     * // Delete a few FormacaoAcademicas
     * const { count } = await prisma.formacaoAcademica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormacaoAcademicaDeleteManyArgs>(args?: SelectSubset<T, FormacaoAcademicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormacaoAcademicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormacaoAcademicas
     * const formacaoAcademica = await prisma.formacaoAcademica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormacaoAcademicaUpdateManyArgs>(args: SelectSubset<T, FormacaoAcademicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormacaoAcademicas and returns the data updated in the database.
     * @param {FormacaoAcademicaUpdateManyAndReturnArgs} args - Arguments to update many FormacaoAcademicas.
     * @example
     * // Update many FormacaoAcademicas
     * const formacaoAcademica = await prisma.formacaoAcademica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormacaoAcademicas and only return the `id`
     * const formacaoAcademicaWithIdOnly = await prisma.formacaoAcademica.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormacaoAcademicaUpdateManyAndReturnArgs>(args: SelectSubset<T, FormacaoAcademicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormacaoAcademica.
     * @param {FormacaoAcademicaUpsertArgs} args - Arguments to update or create a FormacaoAcademica.
     * @example
     * // Update or create a FormacaoAcademica
     * const formacaoAcademica = await prisma.formacaoAcademica.upsert({
     *   create: {
     *     // ... data to create a FormacaoAcademica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormacaoAcademica we want to update
     *   }
     * })
     */
    upsert<T extends FormacaoAcademicaUpsertArgs>(args: SelectSubset<T, FormacaoAcademicaUpsertArgs<ExtArgs>>): Prisma__FormacaoAcademicaClient<$Result.GetResult<Prisma.$FormacaoAcademicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormacaoAcademicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaCountArgs} args - Arguments to filter FormacaoAcademicas to count.
     * @example
     * // Count the number of FormacaoAcademicas
     * const count = await prisma.formacaoAcademica.count({
     *   where: {
     *     // ... the filter for the FormacaoAcademicas we want to count
     *   }
     * })
    **/
    count<T extends FormacaoAcademicaCountArgs>(
      args?: Subset<T, FormacaoAcademicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormacaoAcademicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormacaoAcademica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormacaoAcademicaAggregateArgs>(args: Subset<T, FormacaoAcademicaAggregateArgs>): Prisma.PrismaPromise<GetFormacaoAcademicaAggregateType<T>>

    /**
     * Group by FormacaoAcademica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormacaoAcademicaGroupByArgs} args - Group by arguments.
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
      T extends FormacaoAcademicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormacaoAcademicaGroupByArgs['orderBy'] }
        : { orderBy?: FormacaoAcademicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormacaoAcademicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormacaoAcademicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormacaoAcademica model
   */
  readonly fields: FormacaoAcademicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormacaoAcademica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormacaoAcademicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculo<T extends CurriculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurriculoDefaultArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FormacaoAcademica model
   */
  interface FormacaoAcademicaFieldRefs {
    readonly id: FieldRef<"FormacaoAcademica", 'Int'>
    readonly nivelFormacao: FieldRef<"FormacaoAcademica", 'String'>
    readonly grauFormacao: FieldRef<"FormacaoAcademica", 'String'>
    readonly curso: FieldRef<"FormacaoAcademica", 'String'>
    readonly nomeInstituicao: FieldRef<"FormacaoAcademica", 'String'>
    readonly status: FieldRef<"FormacaoAcademica", 'String'>
    readonly inicioData: FieldRef<"FormacaoAcademica", 'DateTime'>
    readonly fimData: FieldRef<"FormacaoAcademica", 'DateTime'>
    readonly curriculoId: FieldRef<"FormacaoAcademica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FormacaoAcademica findUnique
   */
  export type FormacaoAcademicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoAcademica to fetch.
     */
    where: FormacaoAcademicaWhereUniqueInput
  }

  /**
   * FormacaoAcademica findUniqueOrThrow
   */
  export type FormacaoAcademicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoAcademica to fetch.
     */
    where: FormacaoAcademicaWhereUniqueInput
  }

  /**
   * FormacaoAcademica findFirst
   */
  export type FormacaoAcademicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoAcademica to fetch.
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoAcademicas to fetch.
     */
    orderBy?: FormacaoAcademicaOrderByWithRelationInput | FormacaoAcademicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormacaoAcademicas.
     */
    cursor?: FormacaoAcademicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoAcademicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoAcademicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormacaoAcademicas.
     */
    distinct?: FormacaoAcademicaScalarFieldEnum | FormacaoAcademicaScalarFieldEnum[]
  }

  /**
   * FormacaoAcademica findFirstOrThrow
   */
  export type FormacaoAcademicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoAcademica to fetch.
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoAcademicas to fetch.
     */
    orderBy?: FormacaoAcademicaOrderByWithRelationInput | FormacaoAcademicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormacaoAcademicas.
     */
    cursor?: FormacaoAcademicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoAcademicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoAcademicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormacaoAcademicas.
     */
    distinct?: FormacaoAcademicaScalarFieldEnum | FormacaoAcademicaScalarFieldEnum[]
  }

  /**
   * FormacaoAcademica findMany
   */
  export type FormacaoAcademicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter, which FormacaoAcademicas to fetch.
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormacaoAcademicas to fetch.
     */
    orderBy?: FormacaoAcademicaOrderByWithRelationInput | FormacaoAcademicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormacaoAcademicas.
     */
    cursor?: FormacaoAcademicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormacaoAcademicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormacaoAcademicas.
     */
    skip?: number
    distinct?: FormacaoAcademicaScalarFieldEnum | FormacaoAcademicaScalarFieldEnum[]
  }

  /**
   * FormacaoAcademica create
   */
  export type FormacaoAcademicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * The data needed to create a FormacaoAcademica.
     */
    data: XOR<FormacaoAcademicaCreateInput, FormacaoAcademicaUncheckedCreateInput>
  }

  /**
   * FormacaoAcademica createMany
   */
  export type FormacaoAcademicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormacaoAcademicas.
     */
    data: FormacaoAcademicaCreateManyInput | FormacaoAcademicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormacaoAcademica createManyAndReturn
   */
  export type FormacaoAcademicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * The data used to create many FormacaoAcademicas.
     */
    data: FormacaoAcademicaCreateManyInput | FormacaoAcademicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormacaoAcademica update
   */
  export type FormacaoAcademicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * The data needed to update a FormacaoAcademica.
     */
    data: XOR<FormacaoAcademicaUpdateInput, FormacaoAcademicaUncheckedUpdateInput>
    /**
     * Choose, which FormacaoAcademica to update.
     */
    where: FormacaoAcademicaWhereUniqueInput
  }

  /**
   * FormacaoAcademica updateMany
   */
  export type FormacaoAcademicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormacaoAcademicas.
     */
    data: XOR<FormacaoAcademicaUpdateManyMutationInput, FormacaoAcademicaUncheckedUpdateManyInput>
    /**
     * Filter which FormacaoAcademicas to update
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * Limit how many FormacaoAcademicas to update.
     */
    limit?: number
  }

  /**
   * FormacaoAcademica updateManyAndReturn
   */
  export type FormacaoAcademicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * The data used to update FormacaoAcademicas.
     */
    data: XOR<FormacaoAcademicaUpdateManyMutationInput, FormacaoAcademicaUncheckedUpdateManyInput>
    /**
     * Filter which FormacaoAcademicas to update
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * Limit how many FormacaoAcademicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormacaoAcademica upsert
   */
  export type FormacaoAcademicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * The filter to search for the FormacaoAcademica to update in case it exists.
     */
    where: FormacaoAcademicaWhereUniqueInput
    /**
     * In case the FormacaoAcademica found by the `where` argument doesn't exist, create a new FormacaoAcademica with this data.
     */
    create: XOR<FormacaoAcademicaCreateInput, FormacaoAcademicaUncheckedCreateInput>
    /**
     * In case the FormacaoAcademica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormacaoAcademicaUpdateInput, FormacaoAcademicaUncheckedUpdateInput>
  }

  /**
   * FormacaoAcademica delete
   */
  export type FormacaoAcademicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
    /**
     * Filter which FormacaoAcademica to delete.
     */
    where: FormacaoAcademicaWhereUniqueInput
  }

  /**
   * FormacaoAcademica deleteMany
   */
  export type FormacaoAcademicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormacaoAcademicas to delete
     */
    where?: FormacaoAcademicaWhereInput
    /**
     * Limit how many FormacaoAcademicas to delete.
     */
    limit?: number
  }

  /**
   * FormacaoAcademica without action
   */
  export type FormacaoAcademicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormacaoAcademica
     */
    select?: FormacaoAcademicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormacaoAcademica
     */
    omit?: FormacaoAcademicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormacaoAcademicaInclude<ExtArgs> | null
  }


  /**
   * Model Certificado
   */

  export type AggregateCertificado = {
    _count: CertificadoCountAggregateOutputType | null
    _avg: CertificadoAvgAggregateOutputType | null
    _sum: CertificadoSumAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  export type CertificadoAvgAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type CertificadoSumAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type CertificadoMinAggregateOutputType = {
    id: number | null
    nomeInstituicao: string | null
    descricao: string | null
    dataEmissao: Date | null
    curriculoId: number | null
  }

  export type CertificadoMaxAggregateOutputType = {
    id: number | null
    nomeInstituicao: string | null
    descricao: string | null
    dataEmissao: Date | null
    curriculoId: number | null
  }

  export type CertificadoCountAggregateOutputType = {
    id: number
    nomeInstituicao: number
    descricao: number
    dataEmissao: number
    curriculoId: number
    _all: number
  }


  export type CertificadoAvgAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type CertificadoSumAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type CertificadoMinAggregateInputType = {
    id?: true
    nomeInstituicao?: true
    descricao?: true
    dataEmissao?: true
    curriculoId?: true
  }

  export type CertificadoMaxAggregateInputType = {
    id?: true
    nomeInstituicao?: true
    descricao?: true
    dataEmissao?: true
    curriculoId?: true
  }

  export type CertificadoCountAggregateInputType = {
    id?: true
    nomeInstituicao?: true
    descricao?: true
    dataEmissao?: true
    curriculoId?: true
    _all?: true
  }

  export type CertificadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificado to aggregate.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificados
    **/
    _count?: true | CertificadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificadoMaxAggregateInputType
  }

  export type GetCertificadoAggregateType<T extends CertificadoAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificado[P]>
      : GetScalarType<T[P], AggregateCertificado[P]>
  }




  export type CertificadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithAggregationInput | CertificadoOrderByWithAggregationInput[]
    by: CertificadoScalarFieldEnum[] | CertificadoScalarFieldEnum
    having?: CertificadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificadoCountAggregateInputType | true
    _avg?: CertificadoAvgAggregateInputType
    _sum?: CertificadoSumAggregateInputType
    _min?: CertificadoMinAggregateInputType
    _max?: CertificadoMaxAggregateInputType
  }

  export type CertificadoGroupByOutputType = {
    id: number
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date
    curriculoId: number
    _count: CertificadoCountAggregateOutputType | null
    _avg: CertificadoAvgAggregateOutputType | null
    _sum: CertificadoSumAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  type GetCertificadoGroupByPayload<T extends CertificadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
            : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
        }
      >
    >


  export type CertificadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeInstituicao?: boolean
    descricao?: boolean
    dataEmissao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeInstituicao?: boolean
    descricao?: boolean
    dataEmissao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeInstituicao?: boolean
    descricao?: boolean
    dataEmissao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectScalar = {
    id?: boolean
    nomeInstituicao?: boolean
    descricao?: boolean
    dataEmissao?: boolean
    curriculoId?: boolean
  }

  export type CertificadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeInstituicao" | "descricao" | "dataEmissao" | "curriculoId", ExtArgs["result"]["certificado"]>
  export type CertificadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type CertificadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type CertificadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }

  export type $CertificadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificado"
    objects: {
      curriculo: Prisma.$CurriculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeInstituicao: string
      descricao: string
      dataEmissao: Date
      curriculoId: number
    }, ExtArgs["result"]["certificado"]>
    composites: {}
  }

  type CertificadoGetPayload<S extends boolean | null | undefined | CertificadoDefaultArgs> = $Result.GetResult<Prisma.$CertificadoPayload, S>

  type CertificadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificadoCountAggregateInputType | true
    }

  export interface CertificadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificado'], meta: { name: 'Certificado' } }
    /**
     * Find zero or one Certificado that matches the filter.
     * @param {CertificadoFindUniqueArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificadoFindUniqueArgs>(args: SelectSubset<T, CertificadoFindUniqueArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificadoFindUniqueOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificadoFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificadoFindFirstArgs>(args?: SelectSubset<T, CertificadoFindFirstArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificadoFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificados
     * const certificados = await prisma.certificado.findMany()
     * 
     * // Get first 10 Certificados
     * const certificados = await prisma.certificado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificadoWithIdOnly = await prisma.certificado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificadoFindManyArgs>(args?: SelectSubset<T, CertificadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificado.
     * @param {CertificadoCreateArgs} args - Arguments to create a Certificado.
     * @example
     * // Create one Certificado
     * const Certificado = await prisma.certificado.create({
     *   data: {
     *     // ... data to create a Certificado
     *   }
     * })
     * 
     */
    create<T extends CertificadoCreateArgs>(args: SelectSubset<T, CertificadoCreateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificados.
     * @param {CertificadoCreateManyArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificadoCreateManyArgs>(args?: SelectSubset<T, CertificadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificados and returns the data saved in the database.
     * @param {CertificadoCreateManyAndReturnArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificados and only return the `id`
     * const certificadoWithIdOnly = await prisma.certificado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificadoCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificado.
     * @param {CertificadoDeleteArgs} args - Arguments to delete one Certificado.
     * @example
     * // Delete one Certificado
     * const Certificado = await prisma.certificado.delete({
     *   where: {
     *     // ... filter to delete one Certificado
     *   }
     * })
     * 
     */
    delete<T extends CertificadoDeleteArgs>(args: SelectSubset<T, CertificadoDeleteArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificado.
     * @param {CertificadoUpdateArgs} args - Arguments to update one Certificado.
     * @example
     * // Update one Certificado
     * const certificado = await prisma.certificado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificadoUpdateArgs>(args: SelectSubset<T, CertificadoUpdateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificados.
     * @param {CertificadoDeleteManyArgs} args - Arguments to filter Certificados to delete.
     * @example
     * // Delete a few Certificados
     * const { count } = await prisma.certificado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificadoDeleteManyArgs>(args?: SelectSubset<T, CertificadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificadoUpdateManyArgs>(args: SelectSubset<T, CertificadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados and returns the data updated in the database.
     * @param {CertificadoUpdateManyAndReturnArgs} args - Arguments to update many Certificados.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificados and only return the `id`
     * const certificadoWithIdOnly = await prisma.certificado.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificadoUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificado.
     * @param {CertificadoUpsertArgs} args - Arguments to update or create a Certificado.
     * @example
     * // Update or create a Certificado
     * const certificado = await prisma.certificado.upsert({
     *   create: {
     *     // ... data to create a Certificado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificado we want to update
     *   }
     * })
     */
    upsert<T extends CertificadoUpsertArgs>(args: SelectSubset<T, CertificadoUpsertArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoCountArgs} args - Arguments to filter Certificados to count.
     * @example
     * // Count the number of Certificados
     * const count = await prisma.certificado.count({
     *   where: {
     *     // ... the filter for the Certificados we want to count
     *   }
     * })
    **/
    count<T extends CertificadoCountArgs>(
      args?: Subset<T, CertificadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificadoAggregateArgs>(args: Subset<T, CertificadoAggregateArgs>): Prisma.PrismaPromise<GetCertificadoAggregateType<T>>

    /**
     * Group by Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoGroupByArgs} args - Group by arguments.
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
      T extends CertificadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificadoGroupByArgs['orderBy'] }
        : { orderBy?: CertificadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificado model
   */
  readonly fields: CertificadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculo<T extends CurriculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurriculoDefaultArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificado model
   */
  interface CertificadoFieldRefs {
    readonly id: FieldRef<"Certificado", 'Int'>
    readonly nomeInstituicao: FieldRef<"Certificado", 'String'>
    readonly descricao: FieldRef<"Certificado", 'String'>
    readonly dataEmissao: FieldRef<"Certificado", 'DateTime'>
    readonly curriculoId: FieldRef<"Certificado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Certificado findUnique
   */
  export type CertificadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findUniqueOrThrow
   */
  export type CertificadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findFirst
   */
  export type CertificadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findFirstOrThrow
   */
  export type CertificadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findMany
   */
  export type CertificadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificados to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado create
   */
  export type CertificadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificado.
     */
    data: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
  }

  /**
   * Certificado createMany
   */
  export type CertificadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificado createManyAndReturn
   */
  export type CertificadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificado update
   */
  export type CertificadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificado.
     */
    data: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
    /**
     * Choose, which Certificado to update.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado updateMany
   */
  export type CertificadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to update.
     */
    limit?: number
  }

  /**
   * Certificado updateManyAndReturn
   */
  export type CertificadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificado upsert
   */
  export type CertificadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificado to update in case it exists.
     */
    where: CertificadoWhereUniqueInput
    /**
     * In case the Certificado found by the `where` argument doesn't exist, create a new Certificado with this data.
     */
    create: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
    /**
     * In case the Certificado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
  }

  /**
   * Certificado delete
   */
  export type CertificadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter which Certificado to delete.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado deleteMany
   */
  export type CertificadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificados to delete
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to delete.
     */
    limit?: number
  }

  /**
   * Certificado without action
   */
  export type CertificadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
  }


  /**
   * Model Idioma
   */

  export type AggregateIdioma = {
    _count: IdiomaCountAggregateOutputType | null
    _avg: IdiomaAvgAggregateOutputType | null
    _sum: IdiomaSumAggregateOutputType | null
    _min: IdiomaMinAggregateOutputType | null
    _max: IdiomaMaxAggregateOutputType | null
  }

  export type IdiomaAvgAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type IdiomaSumAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type IdiomaMinAggregateOutputType = {
    id: number | null
    idioma: string | null
    nivel: string | null
    curriculoId: number | null
  }

  export type IdiomaMaxAggregateOutputType = {
    id: number | null
    idioma: string | null
    nivel: string | null
    curriculoId: number | null
  }

  export type IdiomaCountAggregateOutputType = {
    id: number
    idioma: number
    nivel: number
    curriculoId: number
    _all: number
  }


  export type IdiomaAvgAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type IdiomaSumAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type IdiomaMinAggregateInputType = {
    id?: true
    idioma?: true
    nivel?: true
    curriculoId?: true
  }

  export type IdiomaMaxAggregateInputType = {
    id?: true
    idioma?: true
    nivel?: true
    curriculoId?: true
  }

  export type IdiomaCountAggregateInputType = {
    id?: true
    idioma?: true
    nivel?: true
    curriculoId?: true
    _all?: true
  }

  export type IdiomaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idioma to aggregate.
     */
    where?: IdiomaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomaOrderByWithRelationInput | IdiomaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdiomaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Idiomas
    **/
    _count?: true | IdiomaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdiomaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdiomaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdiomaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdiomaMaxAggregateInputType
  }

  export type GetIdiomaAggregateType<T extends IdiomaAggregateArgs> = {
        [P in keyof T & keyof AggregateIdioma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdioma[P]>
      : GetScalarType<T[P], AggregateIdioma[P]>
  }




  export type IdiomaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdiomaWhereInput
    orderBy?: IdiomaOrderByWithAggregationInput | IdiomaOrderByWithAggregationInput[]
    by: IdiomaScalarFieldEnum[] | IdiomaScalarFieldEnum
    having?: IdiomaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdiomaCountAggregateInputType | true
    _avg?: IdiomaAvgAggregateInputType
    _sum?: IdiomaSumAggregateInputType
    _min?: IdiomaMinAggregateInputType
    _max?: IdiomaMaxAggregateInputType
  }

  export type IdiomaGroupByOutputType = {
    id: number
    idioma: string
    nivel: string
    curriculoId: number
    _count: IdiomaCountAggregateOutputType | null
    _avg: IdiomaAvgAggregateOutputType | null
    _sum: IdiomaSumAggregateOutputType | null
    _min: IdiomaMinAggregateOutputType | null
    _max: IdiomaMaxAggregateOutputType | null
  }

  type GetIdiomaGroupByPayload<T extends IdiomaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdiomaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdiomaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdiomaGroupByOutputType[P]>
            : GetScalarType<T[P], IdiomaGroupByOutputType[P]>
        }
      >
    >


  export type IdiomaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idioma?: boolean
    nivel?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idioma"]>

  export type IdiomaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idioma?: boolean
    nivel?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idioma"]>

  export type IdiomaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idioma?: boolean
    nivel?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idioma"]>

  export type IdiomaSelectScalar = {
    id?: boolean
    idioma?: boolean
    nivel?: boolean
    curriculoId?: boolean
  }

  export type IdiomaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idioma" | "nivel" | "curriculoId", ExtArgs["result"]["idioma"]>
  export type IdiomaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type IdiomaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type IdiomaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }

  export type $IdiomaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idioma"
    objects: {
      curriculo: Prisma.$CurriculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idioma: string
      nivel: string
      curriculoId: number
    }, ExtArgs["result"]["idioma"]>
    composites: {}
  }

  type IdiomaGetPayload<S extends boolean | null | undefined | IdiomaDefaultArgs> = $Result.GetResult<Prisma.$IdiomaPayload, S>

  type IdiomaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdiomaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdiomaCountAggregateInputType | true
    }

  export interface IdiomaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idioma'], meta: { name: 'Idioma' } }
    /**
     * Find zero or one Idioma that matches the filter.
     * @param {IdiomaFindUniqueArgs} args - Arguments to find a Idioma
     * @example
     * // Get one Idioma
     * const idioma = await prisma.idioma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdiomaFindUniqueArgs>(args: SelectSubset<T, IdiomaFindUniqueArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idioma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdiomaFindUniqueOrThrowArgs} args - Arguments to find a Idioma
     * @example
     * // Get one Idioma
     * const idioma = await prisma.idioma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdiomaFindUniqueOrThrowArgs>(args: SelectSubset<T, IdiomaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idioma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaFindFirstArgs} args - Arguments to find a Idioma
     * @example
     * // Get one Idioma
     * const idioma = await prisma.idioma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdiomaFindFirstArgs>(args?: SelectSubset<T, IdiomaFindFirstArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idioma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaFindFirstOrThrowArgs} args - Arguments to find a Idioma
     * @example
     * // Get one Idioma
     * const idioma = await prisma.idioma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdiomaFindFirstOrThrowArgs>(args?: SelectSubset<T, IdiomaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idiomas
     * const idiomas = await prisma.idioma.findMany()
     * 
     * // Get first 10 Idiomas
     * const idiomas = await prisma.idioma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idiomaWithIdOnly = await prisma.idioma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdiomaFindManyArgs>(args?: SelectSubset<T, IdiomaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idioma.
     * @param {IdiomaCreateArgs} args - Arguments to create a Idioma.
     * @example
     * // Create one Idioma
     * const Idioma = await prisma.idioma.create({
     *   data: {
     *     // ... data to create a Idioma
     *   }
     * })
     * 
     */
    create<T extends IdiomaCreateArgs>(args: SelectSubset<T, IdiomaCreateArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idiomas.
     * @param {IdiomaCreateManyArgs} args - Arguments to create many Idiomas.
     * @example
     * // Create many Idiomas
     * const idioma = await prisma.idioma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdiomaCreateManyArgs>(args?: SelectSubset<T, IdiomaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idiomas and returns the data saved in the database.
     * @param {IdiomaCreateManyAndReturnArgs} args - Arguments to create many Idiomas.
     * @example
     * // Create many Idiomas
     * const idioma = await prisma.idioma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idiomas and only return the `id`
     * const idiomaWithIdOnly = await prisma.idioma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdiomaCreateManyAndReturnArgs>(args?: SelectSubset<T, IdiomaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idioma.
     * @param {IdiomaDeleteArgs} args - Arguments to delete one Idioma.
     * @example
     * // Delete one Idioma
     * const Idioma = await prisma.idioma.delete({
     *   where: {
     *     // ... filter to delete one Idioma
     *   }
     * })
     * 
     */
    delete<T extends IdiomaDeleteArgs>(args: SelectSubset<T, IdiomaDeleteArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idioma.
     * @param {IdiomaUpdateArgs} args - Arguments to update one Idioma.
     * @example
     * // Update one Idioma
     * const idioma = await prisma.idioma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdiomaUpdateArgs>(args: SelectSubset<T, IdiomaUpdateArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idiomas.
     * @param {IdiomaDeleteManyArgs} args - Arguments to filter Idiomas to delete.
     * @example
     * // Delete a few Idiomas
     * const { count } = await prisma.idioma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdiomaDeleteManyArgs>(args?: SelectSubset<T, IdiomaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idiomas
     * const idioma = await prisma.idioma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdiomaUpdateManyArgs>(args: SelectSubset<T, IdiomaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idiomas and returns the data updated in the database.
     * @param {IdiomaUpdateManyAndReturnArgs} args - Arguments to update many Idiomas.
     * @example
     * // Update many Idiomas
     * const idioma = await prisma.idioma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idiomas and only return the `id`
     * const idiomaWithIdOnly = await prisma.idioma.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdiomaUpdateManyAndReturnArgs>(args: SelectSubset<T, IdiomaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idioma.
     * @param {IdiomaUpsertArgs} args - Arguments to update or create a Idioma.
     * @example
     * // Update or create a Idioma
     * const idioma = await prisma.idioma.upsert({
     *   create: {
     *     // ... data to create a Idioma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idioma we want to update
     *   }
     * })
     */
    upsert<T extends IdiomaUpsertArgs>(args: SelectSubset<T, IdiomaUpsertArgs<ExtArgs>>): Prisma__IdiomaClient<$Result.GetResult<Prisma.$IdiomaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaCountArgs} args - Arguments to filter Idiomas to count.
     * @example
     * // Count the number of Idiomas
     * const count = await prisma.idioma.count({
     *   where: {
     *     // ... the filter for the Idiomas we want to count
     *   }
     * })
    **/
    count<T extends IdiomaCountArgs>(
      args?: Subset<T, IdiomaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdiomaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idioma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdiomaAggregateArgs>(args: Subset<T, IdiomaAggregateArgs>): Prisma.PrismaPromise<GetIdiomaAggregateType<T>>

    /**
     * Group by Idioma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomaGroupByArgs} args - Group by arguments.
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
      T extends IdiomaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdiomaGroupByArgs['orderBy'] }
        : { orderBy?: IdiomaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdiomaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdiomaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idioma model
   */
  readonly fields: IdiomaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idioma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdiomaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculo<T extends CurriculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurriculoDefaultArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Idioma model
   */
  interface IdiomaFieldRefs {
    readonly id: FieldRef<"Idioma", 'Int'>
    readonly idioma: FieldRef<"Idioma", 'String'>
    readonly nivel: FieldRef<"Idioma", 'String'>
    readonly curriculoId: FieldRef<"Idioma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Idioma findUnique
   */
  export type IdiomaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter, which Idioma to fetch.
     */
    where: IdiomaWhereUniqueInput
  }

  /**
   * Idioma findUniqueOrThrow
   */
  export type IdiomaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter, which Idioma to fetch.
     */
    where: IdiomaWhereUniqueInput
  }

  /**
   * Idioma findFirst
   */
  export type IdiomaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter, which Idioma to fetch.
     */
    where?: IdiomaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomaOrderByWithRelationInput | IdiomaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idiomas.
     */
    cursor?: IdiomaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idiomas.
     */
    distinct?: IdiomaScalarFieldEnum | IdiomaScalarFieldEnum[]
  }

  /**
   * Idioma findFirstOrThrow
   */
  export type IdiomaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter, which Idioma to fetch.
     */
    where?: IdiomaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomaOrderByWithRelationInput | IdiomaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idiomas.
     */
    cursor?: IdiomaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idiomas.
     */
    distinct?: IdiomaScalarFieldEnum | IdiomaScalarFieldEnum[]
  }

  /**
   * Idioma findMany
   */
  export type IdiomaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where?: IdiomaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomaOrderByWithRelationInput | IdiomaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Idiomas.
     */
    cursor?: IdiomaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    distinct?: IdiomaScalarFieldEnum | IdiomaScalarFieldEnum[]
  }

  /**
   * Idioma create
   */
  export type IdiomaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * The data needed to create a Idioma.
     */
    data: XOR<IdiomaCreateInput, IdiomaUncheckedCreateInput>
  }

  /**
   * Idioma createMany
   */
  export type IdiomaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Idiomas.
     */
    data: IdiomaCreateManyInput | IdiomaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Idioma createManyAndReturn
   */
  export type IdiomaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * The data used to create many Idiomas.
     */
    data: IdiomaCreateManyInput | IdiomaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idioma update
   */
  export type IdiomaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * The data needed to update a Idioma.
     */
    data: XOR<IdiomaUpdateInput, IdiomaUncheckedUpdateInput>
    /**
     * Choose, which Idioma to update.
     */
    where: IdiomaWhereUniqueInput
  }

  /**
   * Idioma updateMany
   */
  export type IdiomaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Idiomas.
     */
    data: XOR<IdiomaUpdateManyMutationInput, IdiomaUncheckedUpdateManyInput>
    /**
     * Filter which Idiomas to update
     */
    where?: IdiomaWhereInput
    /**
     * Limit how many Idiomas to update.
     */
    limit?: number
  }

  /**
   * Idioma updateManyAndReturn
   */
  export type IdiomaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * The data used to update Idiomas.
     */
    data: XOR<IdiomaUpdateManyMutationInput, IdiomaUncheckedUpdateManyInput>
    /**
     * Filter which Idiomas to update
     */
    where?: IdiomaWhereInput
    /**
     * Limit how many Idiomas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idioma upsert
   */
  export type IdiomaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * The filter to search for the Idioma to update in case it exists.
     */
    where: IdiomaWhereUniqueInput
    /**
     * In case the Idioma found by the `where` argument doesn't exist, create a new Idioma with this data.
     */
    create: XOR<IdiomaCreateInput, IdiomaUncheckedCreateInput>
    /**
     * In case the Idioma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdiomaUpdateInput, IdiomaUncheckedUpdateInput>
  }

  /**
   * Idioma delete
   */
  export type IdiomaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
    /**
     * Filter which Idioma to delete.
     */
    where: IdiomaWhereUniqueInput
  }

  /**
   * Idioma deleteMany
   */
  export type IdiomaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idiomas to delete
     */
    where?: IdiomaWhereInput
    /**
     * Limit how many Idiomas to delete.
     */
    limit?: number
  }

  /**
   * Idioma without action
   */
  export type IdiomaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idioma
     */
    select?: IdiomaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idioma
     */
    omit?: IdiomaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomaInclude<ExtArgs> | null
  }


  /**
   * Model Diferencial
   */

  export type AggregateDiferencial = {
    _count: DiferencialCountAggregateOutputType | null
    _avg: DiferencialAvgAggregateOutputType | null
    _sum: DiferencialSumAggregateOutputType | null
    _min: DiferencialMinAggregateOutputType | null
    _max: DiferencialMaxAggregateOutputType | null
  }

  export type DiferencialAvgAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type DiferencialSumAggregateOutputType = {
    id: number | null
    curriculoId: number | null
  }

  export type DiferencialMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    curriculoId: number | null
  }

  export type DiferencialMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    curriculoId: number | null
  }

  export type DiferencialCountAggregateOutputType = {
    id: number
    descricao: number
    curriculoId: number
    _all: number
  }


  export type DiferencialAvgAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type DiferencialSumAggregateInputType = {
    id?: true
    curriculoId?: true
  }

  export type DiferencialMinAggregateInputType = {
    id?: true
    descricao?: true
    curriculoId?: true
  }

  export type DiferencialMaxAggregateInputType = {
    id?: true
    descricao?: true
    curriculoId?: true
  }

  export type DiferencialCountAggregateInputType = {
    id?: true
    descricao?: true
    curriculoId?: true
    _all?: true
  }

  export type DiferencialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diferencial to aggregate.
     */
    where?: DiferencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diferencials to fetch.
     */
    orderBy?: DiferencialOrderByWithRelationInput | DiferencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiferencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diferencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diferencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diferencials
    **/
    _count?: true | DiferencialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiferencialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiferencialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiferencialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiferencialMaxAggregateInputType
  }

  export type GetDiferencialAggregateType<T extends DiferencialAggregateArgs> = {
        [P in keyof T & keyof AggregateDiferencial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiferencial[P]>
      : GetScalarType<T[P], AggregateDiferencial[P]>
  }




  export type DiferencialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiferencialWhereInput
    orderBy?: DiferencialOrderByWithAggregationInput | DiferencialOrderByWithAggregationInput[]
    by: DiferencialScalarFieldEnum[] | DiferencialScalarFieldEnum
    having?: DiferencialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiferencialCountAggregateInputType | true
    _avg?: DiferencialAvgAggregateInputType
    _sum?: DiferencialSumAggregateInputType
    _min?: DiferencialMinAggregateInputType
    _max?: DiferencialMaxAggregateInputType
  }

  export type DiferencialGroupByOutputType = {
    id: number
    descricao: string
    curriculoId: number
    _count: DiferencialCountAggregateOutputType | null
    _avg: DiferencialAvgAggregateOutputType | null
    _sum: DiferencialSumAggregateOutputType | null
    _min: DiferencialMinAggregateOutputType | null
    _max: DiferencialMaxAggregateOutputType | null
  }

  type GetDiferencialGroupByPayload<T extends DiferencialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiferencialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiferencialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiferencialGroupByOutputType[P]>
            : GetScalarType<T[P], DiferencialGroupByOutputType[P]>
        }
      >
    >


  export type DiferencialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diferencial"]>

  export type DiferencialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diferencial"]>

  export type DiferencialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    curriculoId?: boolean
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diferencial"]>

  export type DiferencialSelectScalar = {
    id?: boolean
    descricao?: boolean
    curriculoId?: boolean
  }

  export type DiferencialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "curriculoId", ExtArgs["result"]["diferencial"]>
  export type DiferencialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type DiferencialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }
  export type DiferencialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curriculo?: boolean | CurriculoDefaultArgs<ExtArgs>
  }

  export type $DiferencialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diferencial"
    objects: {
      curriculo: Prisma.$CurriculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      curriculoId: number
    }, ExtArgs["result"]["diferencial"]>
    composites: {}
  }

  type DiferencialGetPayload<S extends boolean | null | undefined | DiferencialDefaultArgs> = $Result.GetResult<Prisma.$DiferencialPayload, S>

  type DiferencialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiferencialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiferencialCountAggregateInputType | true
    }

  export interface DiferencialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diferencial'], meta: { name: 'Diferencial' } }
    /**
     * Find zero or one Diferencial that matches the filter.
     * @param {DiferencialFindUniqueArgs} args - Arguments to find a Diferencial
     * @example
     * // Get one Diferencial
     * const diferencial = await prisma.diferencial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiferencialFindUniqueArgs>(args: SelectSubset<T, DiferencialFindUniqueArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diferencial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiferencialFindUniqueOrThrowArgs} args - Arguments to find a Diferencial
     * @example
     * // Get one Diferencial
     * const diferencial = await prisma.diferencial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiferencialFindUniqueOrThrowArgs>(args: SelectSubset<T, DiferencialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diferencial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialFindFirstArgs} args - Arguments to find a Diferencial
     * @example
     * // Get one Diferencial
     * const diferencial = await prisma.diferencial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiferencialFindFirstArgs>(args?: SelectSubset<T, DiferencialFindFirstArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diferencial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialFindFirstOrThrowArgs} args - Arguments to find a Diferencial
     * @example
     * // Get one Diferencial
     * const diferencial = await prisma.diferencial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiferencialFindFirstOrThrowArgs>(args?: SelectSubset<T, DiferencialFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diferencials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diferencials
     * const diferencials = await prisma.diferencial.findMany()
     * 
     * // Get first 10 Diferencials
     * const diferencials = await prisma.diferencial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diferencialWithIdOnly = await prisma.diferencial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiferencialFindManyArgs>(args?: SelectSubset<T, DiferencialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diferencial.
     * @param {DiferencialCreateArgs} args - Arguments to create a Diferencial.
     * @example
     * // Create one Diferencial
     * const Diferencial = await prisma.diferencial.create({
     *   data: {
     *     // ... data to create a Diferencial
     *   }
     * })
     * 
     */
    create<T extends DiferencialCreateArgs>(args: SelectSubset<T, DiferencialCreateArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diferencials.
     * @param {DiferencialCreateManyArgs} args - Arguments to create many Diferencials.
     * @example
     * // Create many Diferencials
     * const diferencial = await prisma.diferencial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiferencialCreateManyArgs>(args?: SelectSubset<T, DiferencialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diferencials and returns the data saved in the database.
     * @param {DiferencialCreateManyAndReturnArgs} args - Arguments to create many Diferencials.
     * @example
     * // Create many Diferencials
     * const diferencial = await prisma.diferencial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diferencials and only return the `id`
     * const diferencialWithIdOnly = await prisma.diferencial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiferencialCreateManyAndReturnArgs>(args?: SelectSubset<T, DiferencialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diferencial.
     * @param {DiferencialDeleteArgs} args - Arguments to delete one Diferencial.
     * @example
     * // Delete one Diferencial
     * const Diferencial = await prisma.diferencial.delete({
     *   where: {
     *     // ... filter to delete one Diferencial
     *   }
     * })
     * 
     */
    delete<T extends DiferencialDeleteArgs>(args: SelectSubset<T, DiferencialDeleteArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diferencial.
     * @param {DiferencialUpdateArgs} args - Arguments to update one Diferencial.
     * @example
     * // Update one Diferencial
     * const diferencial = await prisma.diferencial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiferencialUpdateArgs>(args: SelectSubset<T, DiferencialUpdateArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diferencials.
     * @param {DiferencialDeleteManyArgs} args - Arguments to filter Diferencials to delete.
     * @example
     * // Delete a few Diferencials
     * const { count } = await prisma.diferencial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiferencialDeleteManyArgs>(args?: SelectSubset<T, DiferencialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diferencials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diferencials
     * const diferencial = await prisma.diferencial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiferencialUpdateManyArgs>(args: SelectSubset<T, DiferencialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diferencials and returns the data updated in the database.
     * @param {DiferencialUpdateManyAndReturnArgs} args - Arguments to update many Diferencials.
     * @example
     * // Update many Diferencials
     * const diferencial = await prisma.diferencial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diferencials and only return the `id`
     * const diferencialWithIdOnly = await prisma.diferencial.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiferencialUpdateManyAndReturnArgs>(args: SelectSubset<T, DiferencialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diferencial.
     * @param {DiferencialUpsertArgs} args - Arguments to update or create a Diferencial.
     * @example
     * // Update or create a Diferencial
     * const diferencial = await prisma.diferencial.upsert({
     *   create: {
     *     // ... data to create a Diferencial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diferencial we want to update
     *   }
     * })
     */
    upsert<T extends DiferencialUpsertArgs>(args: SelectSubset<T, DiferencialUpsertArgs<ExtArgs>>): Prisma__DiferencialClient<$Result.GetResult<Prisma.$DiferencialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diferencials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialCountArgs} args - Arguments to filter Diferencials to count.
     * @example
     * // Count the number of Diferencials
     * const count = await prisma.diferencial.count({
     *   where: {
     *     // ... the filter for the Diferencials we want to count
     *   }
     * })
    **/
    count<T extends DiferencialCountArgs>(
      args?: Subset<T, DiferencialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiferencialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diferencial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiferencialAggregateArgs>(args: Subset<T, DiferencialAggregateArgs>): Prisma.PrismaPromise<GetDiferencialAggregateType<T>>

    /**
     * Group by Diferencial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiferencialGroupByArgs} args - Group by arguments.
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
      T extends DiferencialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiferencialGroupByArgs['orderBy'] }
        : { orderBy?: DiferencialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiferencialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiferencialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diferencial model
   */
  readonly fields: DiferencialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diferencial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiferencialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curriculo<T extends CurriculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurriculoDefaultArgs<ExtArgs>>): Prisma__CurriculoClient<$Result.GetResult<Prisma.$CurriculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diferencial model
   */
  interface DiferencialFieldRefs {
    readonly id: FieldRef<"Diferencial", 'Int'>
    readonly descricao: FieldRef<"Diferencial", 'String'>
    readonly curriculoId: FieldRef<"Diferencial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Diferencial findUnique
   */
  export type DiferencialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter, which Diferencial to fetch.
     */
    where: DiferencialWhereUniqueInput
  }

  /**
   * Diferencial findUniqueOrThrow
   */
  export type DiferencialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter, which Diferencial to fetch.
     */
    where: DiferencialWhereUniqueInput
  }

  /**
   * Diferencial findFirst
   */
  export type DiferencialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter, which Diferencial to fetch.
     */
    where?: DiferencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diferencials to fetch.
     */
    orderBy?: DiferencialOrderByWithRelationInput | DiferencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diferencials.
     */
    cursor?: DiferencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diferencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diferencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diferencials.
     */
    distinct?: DiferencialScalarFieldEnum | DiferencialScalarFieldEnum[]
  }

  /**
   * Diferencial findFirstOrThrow
   */
  export type DiferencialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter, which Diferencial to fetch.
     */
    where?: DiferencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diferencials to fetch.
     */
    orderBy?: DiferencialOrderByWithRelationInput | DiferencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diferencials.
     */
    cursor?: DiferencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diferencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diferencials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diferencials.
     */
    distinct?: DiferencialScalarFieldEnum | DiferencialScalarFieldEnum[]
  }

  /**
   * Diferencial findMany
   */
  export type DiferencialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter, which Diferencials to fetch.
     */
    where?: DiferencialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diferencials to fetch.
     */
    orderBy?: DiferencialOrderByWithRelationInput | DiferencialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diferencials.
     */
    cursor?: DiferencialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diferencials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diferencials.
     */
    skip?: number
    distinct?: DiferencialScalarFieldEnum | DiferencialScalarFieldEnum[]
  }

  /**
   * Diferencial create
   */
  export type DiferencialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * The data needed to create a Diferencial.
     */
    data: XOR<DiferencialCreateInput, DiferencialUncheckedCreateInput>
  }

  /**
   * Diferencial createMany
   */
  export type DiferencialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diferencials.
     */
    data: DiferencialCreateManyInput | DiferencialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diferencial createManyAndReturn
   */
  export type DiferencialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * The data used to create many Diferencials.
     */
    data: DiferencialCreateManyInput | DiferencialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diferencial update
   */
  export type DiferencialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * The data needed to update a Diferencial.
     */
    data: XOR<DiferencialUpdateInput, DiferencialUncheckedUpdateInput>
    /**
     * Choose, which Diferencial to update.
     */
    where: DiferencialWhereUniqueInput
  }

  /**
   * Diferencial updateMany
   */
  export type DiferencialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diferencials.
     */
    data: XOR<DiferencialUpdateManyMutationInput, DiferencialUncheckedUpdateManyInput>
    /**
     * Filter which Diferencials to update
     */
    where?: DiferencialWhereInput
    /**
     * Limit how many Diferencials to update.
     */
    limit?: number
  }

  /**
   * Diferencial updateManyAndReturn
   */
  export type DiferencialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * The data used to update Diferencials.
     */
    data: XOR<DiferencialUpdateManyMutationInput, DiferencialUncheckedUpdateManyInput>
    /**
     * Filter which Diferencials to update
     */
    where?: DiferencialWhereInput
    /**
     * Limit how many Diferencials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diferencial upsert
   */
  export type DiferencialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * The filter to search for the Diferencial to update in case it exists.
     */
    where: DiferencialWhereUniqueInput
    /**
     * In case the Diferencial found by the `where` argument doesn't exist, create a new Diferencial with this data.
     */
    create: XOR<DiferencialCreateInput, DiferencialUncheckedCreateInput>
    /**
     * In case the Diferencial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiferencialUpdateInput, DiferencialUncheckedUpdateInput>
  }

  /**
   * Diferencial delete
   */
  export type DiferencialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
    /**
     * Filter which Diferencial to delete.
     */
    where: DiferencialWhereUniqueInput
  }

  /**
   * Diferencial deleteMany
   */
  export type DiferencialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diferencials to delete
     */
    where?: DiferencialWhereInput
    /**
     * Limit how many Diferencials to delete.
     */
    limit?: number
  }

  /**
   * Diferencial without action
   */
  export type DiferencialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diferencial
     */
    select?: DiferencialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diferencial
     */
    omit?: DiferencialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiferencialInclude<ExtArgs> | null
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


  export const CurriculoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CurriculoScalarFieldEnum = (typeof CurriculoScalarFieldEnum)[keyof typeof CurriculoScalarFieldEnum]


  export const ExperienciaProfissionalScalarFieldEnum: {
    id: 'id',
    cargo: 'cargo',
    empresa: 'empresa',
    descricao: 'descricao',
    inicioData: 'inicioData',
    fimData: 'fimData',
    empregoAtual: 'empregoAtual',
    curriculoId: 'curriculoId'
  };

  export type ExperienciaProfissionalScalarFieldEnum = (typeof ExperienciaProfissionalScalarFieldEnum)[keyof typeof ExperienciaProfissionalScalarFieldEnum]


  export const FormacaoAcademicaScalarFieldEnum: {
    id: 'id',
    nivelFormacao: 'nivelFormacao',
    grauFormacao: 'grauFormacao',
    curso: 'curso',
    nomeInstituicao: 'nomeInstituicao',
    status: 'status',
    inicioData: 'inicioData',
    fimData: 'fimData',
    curriculoId: 'curriculoId'
  };

  export type FormacaoAcademicaScalarFieldEnum = (typeof FormacaoAcademicaScalarFieldEnum)[keyof typeof FormacaoAcademicaScalarFieldEnum]


  export const CertificadoScalarFieldEnum: {
    id: 'id',
    nomeInstituicao: 'nomeInstituicao',
    descricao: 'descricao',
    dataEmissao: 'dataEmissao',
    curriculoId: 'curriculoId'
  };

  export type CertificadoScalarFieldEnum = (typeof CertificadoScalarFieldEnum)[keyof typeof CertificadoScalarFieldEnum]


  export const IdiomaScalarFieldEnum: {
    id: 'id',
    idioma: 'idioma',
    nivel: 'nivel',
    curriculoId: 'curriculoId'
  };

  export type IdiomaScalarFieldEnum = (typeof IdiomaScalarFieldEnum)[keyof typeof IdiomaScalarFieldEnum]


  export const DiferencialScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    curriculoId: 'curriculoId'
  };

  export type DiferencialScalarFieldEnum = (typeof DiferencialScalarFieldEnum)[keyof typeof DiferencialScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    curriculo?: XOR<CurriculoNullableScalarRelationFilter, CurriculoWhereInput> | null
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
    curriculo?: CurriculoOrderByWithRelationInput
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
    curriculo?: XOR<CurriculoNullableScalarRelationFilter, CurriculoWhereInput> | null
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

  export type CurriculoWhereInput = {
    AND?: CurriculoWhereInput | CurriculoWhereInput[]
    OR?: CurriculoWhereInput[]
    NOT?: CurriculoWhereInput | CurriculoWhereInput[]
    id?: IntFilter<"Curriculo"> | number
    usuarioId?: IntFilter<"Curriculo"> | number
    createdAt?: DateTimeFilter<"Curriculo"> | Date | string
    updatedAt?: DateTimeFilter<"Curriculo"> | Date | string
    usuario?: XOR<UserCandidateScalarRelationFilter, UserCandidateWhereInput>
    experiencias?: ExperienciaProfissionalListRelationFilter
    formacoes?: FormacaoAcademicaListRelationFilter
    certificados?: CertificadoListRelationFilter
    idiomas?: IdiomaListRelationFilter
    diferenciais?: DiferencialListRelationFilter
  }

  export type CurriculoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UserCandidateOrderByWithRelationInput
    experiencias?: ExperienciaProfissionalOrderByRelationAggregateInput
    formacoes?: FormacaoAcademicaOrderByRelationAggregateInput
    certificados?: CertificadoOrderByRelationAggregateInput
    idiomas?: IdiomaOrderByRelationAggregateInput
    diferenciais?: DiferencialOrderByRelationAggregateInput
  }

  export type CurriculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: CurriculoWhereInput | CurriculoWhereInput[]
    OR?: CurriculoWhereInput[]
    NOT?: CurriculoWhereInput | CurriculoWhereInput[]
    createdAt?: DateTimeFilter<"Curriculo"> | Date | string
    updatedAt?: DateTimeFilter<"Curriculo"> | Date | string
    usuario?: XOR<UserCandidateScalarRelationFilter, UserCandidateWhereInput>
    experiencias?: ExperienciaProfissionalListRelationFilter
    formacoes?: FormacaoAcademicaListRelationFilter
    certificados?: CertificadoListRelationFilter
    idiomas?: IdiomaListRelationFilter
    diferenciais?: DiferencialListRelationFilter
  }, "id" | "usuarioId">

  export type CurriculoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CurriculoCountOrderByAggregateInput
    _avg?: CurriculoAvgOrderByAggregateInput
    _max?: CurriculoMaxOrderByAggregateInput
    _min?: CurriculoMinOrderByAggregateInput
    _sum?: CurriculoSumOrderByAggregateInput
  }

  export type CurriculoScalarWhereWithAggregatesInput = {
    AND?: CurriculoScalarWhereWithAggregatesInput | CurriculoScalarWhereWithAggregatesInput[]
    OR?: CurriculoScalarWhereWithAggregatesInput[]
    NOT?: CurriculoScalarWhereWithAggregatesInput | CurriculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curriculo"> | number
    usuarioId?: IntWithAggregatesFilter<"Curriculo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Curriculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Curriculo"> | Date | string
  }

  export type ExperienciaProfissionalWhereInput = {
    AND?: ExperienciaProfissionalWhereInput | ExperienciaProfissionalWhereInput[]
    OR?: ExperienciaProfissionalWhereInput[]
    NOT?: ExperienciaProfissionalWhereInput | ExperienciaProfissionalWhereInput[]
    id?: IntFilter<"ExperienciaProfissional"> | number
    cargo?: StringFilter<"ExperienciaProfissional"> | string
    empresa?: StringFilter<"ExperienciaProfissional"> | string
    descricao?: StringFilter<"ExperienciaProfissional"> | string
    inicioData?: DateTimeFilter<"ExperienciaProfissional"> | Date | string
    fimData?: DateTimeNullableFilter<"ExperienciaProfissional"> | Date | string | null
    empregoAtual?: BoolFilter<"ExperienciaProfissional"> | boolean
    curriculoId?: IntFilter<"ExperienciaProfissional"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }

  export type ExperienciaProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    cargo?: SortOrder
    empresa?: SortOrder
    descricao?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrderInput | SortOrder
    empregoAtual?: SortOrder
    curriculoId?: SortOrder
    curriculo?: CurriculoOrderByWithRelationInput
  }

  export type ExperienciaProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienciaProfissionalWhereInput | ExperienciaProfissionalWhereInput[]
    OR?: ExperienciaProfissionalWhereInput[]
    NOT?: ExperienciaProfissionalWhereInput | ExperienciaProfissionalWhereInput[]
    cargo?: StringFilter<"ExperienciaProfissional"> | string
    empresa?: StringFilter<"ExperienciaProfissional"> | string
    descricao?: StringFilter<"ExperienciaProfissional"> | string
    inicioData?: DateTimeFilter<"ExperienciaProfissional"> | Date | string
    fimData?: DateTimeNullableFilter<"ExperienciaProfissional"> | Date | string | null
    empregoAtual?: BoolFilter<"ExperienciaProfissional"> | boolean
    curriculoId?: IntFilter<"ExperienciaProfissional"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }, "id">

  export type ExperienciaProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    cargo?: SortOrder
    empresa?: SortOrder
    descricao?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrderInput | SortOrder
    empregoAtual?: SortOrder
    curriculoId?: SortOrder
    _count?: ExperienciaProfissionalCountOrderByAggregateInput
    _avg?: ExperienciaProfissionalAvgOrderByAggregateInput
    _max?: ExperienciaProfissionalMaxOrderByAggregateInput
    _min?: ExperienciaProfissionalMinOrderByAggregateInput
    _sum?: ExperienciaProfissionalSumOrderByAggregateInput
  }

  export type ExperienciaProfissionalScalarWhereWithAggregatesInput = {
    AND?: ExperienciaProfissionalScalarWhereWithAggregatesInput | ExperienciaProfissionalScalarWhereWithAggregatesInput[]
    OR?: ExperienciaProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ExperienciaProfissionalScalarWhereWithAggregatesInput | ExperienciaProfissionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienciaProfissional"> | number
    cargo?: StringWithAggregatesFilter<"ExperienciaProfissional"> | string
    empresa?: StringWithAggregatesFilter<"ExperienciaProfissional"> | string
    descricao?: StringWithAggregatesFilter<"ExperienciaProfissional"> | string
    inicioData?: DateTimeWithAggregatesFilter<"ExperienciaProfissional"> | Date | string
    fimData?: DateTimeNullableWithAggregatesFilter<"ExperienciaProfissional"> | Date | string | null
    empregoAtual?: BoolWithAggregatesFilter<"ExperienciaProfissional"> | boolean
    curriculoId?: IntWithAggregatesFilter<"ExperienciaProfissional"> | number
  }

  export type FormacaoAcademicaWhereInput = {
    AND?: FormacaoAcademicaWhereInput | FormacaoAcademicaWhereInput[]
    OR?: FormacaoAcademicaWhereInput[]
    NOT?: FormacaoAcademicaWhereInput | FormacaoAcademicaWhereInput[]
    id?: IntFilter<"FormacaoAcademica"> | number
    nivelFormacao?: StringFilter<"FormacaoAcademica"> | string
    grauFormacao?: StringFilter<"FormacaoAcademica"> | string
    curso?: StringFilter<"FormacaoAcademica"> | string
    nomeInstituicao?: StringFilter<"FormacaoAcademica"> | string
    status?: StringFilter<"FormacaoAcademica"> | string
    inicioData?: DateTimeFilter<"FormacaoAcademica"> | Date | string
    fimData?: DateTimeNullableFilter<"FormacaoAcademica"> | Date | string | null
    curriculoId?: IntFilter<"FormacaoAcademica"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }

  export type FormacaoAcademicaOrderByWithRelationInput = {
    id?: SortOrder
    nivelFormacao?: SortOrder
    grauFormacao?: SortOrder
    curso?: SortOrder
    nomeInstituicao?: SortOrder
    status?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrderInput | SortOrder
    curriculoId?: SortOrder
    curriculo?: CurriculoOrderByWithRelationInput
  }

  export type FormacaoAcademicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormacaoAcademicaWhereInput | FormacaoAcademicaWhereInput[]
    OR?: FormacaoAcademicaWhereInput[]
    NOT?: FormacaoAcademicaWhereInput | FormacaoAcademicaWhereInput[]
    nivelFormacao?: StringFilter<"FormacaoAcademica"> | string
    grauFormacao?: StringFilter<"FormacaoAcademica"> | string
    curso?: StringFilter<"FormacaoAcademica"> | string
    nomeInstituicao?: StringFilter<"FormacaoAcademica"> | string
    status?: StringFilter<"FormacaoAcademica"> | string
    inicioData?: DateTimeFilter<"FormacaoAcademica"> | Date | string
    fimData?: DateTimeNullableFilter<"FormacaoAcademica"> | Date | string | null
    curriculoId?: IntFilter<"FormacaoAcademica"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }, "id">

  export type FormacaoAcademicaOrderByWithAggregationInput = {
    id?: SortOrder
    nivelFormacao?: SortOrder
    grauFormacao?: SortOrder
    curso?: SortOrder
    nomeInstituicao?: SortOrder
    status?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrderInput | SortOrder
    curriculoId?: SortOrder
    _count?: FormacaoAcademicaCountOrderByAggregateInput
    _avg?: FormacaoAcademicaAvgOrderByAggregateInput
    _max?: FormacaoAcademicaMaxOrderByAggregateInput
    _min?: FormacaoAcademicaMinOrderByAggregateInput
    _sum?: FormacaoAcademicaSumOrderByAggregateInput
  }

  export type FormacaoAcademicaScalarWhereWithAggregatesInput = {
    AND?: FormacaoAcademicaScalarWhereWithAggregatesInput | FormacaoAcademicaScalarWhereWithAggregatesInput[]
    OR?: FormacaoAcademicaScalarWhereWithAggregatesInput[]
    NOT?: FormacaoAcademicaScalarWhereWithAggregatesInput | FormacaoAcademicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormacaoAcademica"> | number
    nivelFormacao?: StringWithAggregatesFilter<"FormacaoAcademica"> | string
    grauFormacao?: StringWithAggregatesFilter<"FormacaoAcademica"> | string
    curso?: StringWithAggregatesFilter<"FormacaoAcademica"> | string
    nomeInstituicao?: StringWithAggregatesFilter<"FormacaoAcademica"> | string
    status?: StringWithAggregatesFilter<"FormacaoAcademica"> | string
    inicioData?: DateTimeWithAggregatesFilter<"FormacaoAcademica"> | Date | string
    fimData?: DateTimeNullableWithAggregatesFilter<"FormacaoAcademica"> | Date | string | null
    curriculoId?: IntWithAggregatesFilter<"FormacaoAcademica"> | number
  }

  export type CertificadoWhereInput = {
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    id?: IntFilter<"Certificado"> | number
    nomeInstituicao?: StringFilter<"Certificado"> | string
    descricao?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    curriculoId?: IntFilter<"Certificado"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }

  export type CertificadoOrderByWithRelationInput = {
    id?: SortOrder
    nomeInstituicao?: SortOrder
    descricao?: SortOrder
    dataEmissao?: SortOrder
    curriculoId?: SortOrder
    curriculo?: CurriculoOrderByWithRelationInput
  }

  export type CertificadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    nomeInstituicao?: StringFilter<"Certificado"> | string
    descricao?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    curriculoId?: IntFilter<"Certificado"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }, "id">

  export type CertificadoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeInstituicao?: SortOrder
    descricao?: SortOrder
    dataEmissao?: SortOrder
    curriculoId?: SortOrder
    _count?: CertificadoCountOrderByAggregateInput
    _avg?: CertificadoAvgOrderByAggregateInput
    _max?: CertificadoMaxOrderByAggregateInput
    _min?: CertificadoMinOrderByAggregateInput
    _sum?: CertificadoSumOrderByAggregateInput
  }

  export type CertificadoScalarWhereWithAggregatesInput = {
    AND?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    OR?: CertificadoScalarWhereWithAggregatesInput[]
    NOT?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Certificado"> | number
    nomeInstituicao?: StringWithAggregatesFilter<"Certificado"> | string
    descricao?: StringWithAggregatesFilter<"Certificado"> | string
    dataEmissao?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
    curriculoId?: IntWithAggregatesFilter<"Certificado"> | number
  }

  export type IdiomaWhereInput = {
    AND?: IdiomaWhereInput | IdiomaWhereInput[]
    OR?: IdiomaWhereInput[]
    NOT?: IdiomaWhereInput | IdiomaWhereInput[]
    id?: IntFilter<"Idioma"> | number
    idioma?: StringFilter<"Idioma"> | string
    nivel?: StringFilter<"Idioma"> | string
    curriculoId?: IntFilter<"Idioma"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }

  export type IdiomaOrderByWithRelationInput = {
    id?: SortOrder
    idioma?: SortOrder
    nivel?: SortOrder
    curriculoId?: SortOrder
    curriculo?: CurriculoOrderByWithRelationInput
  }

  export type IdiomaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IdiomaWhereInput | IdiomaWhereInput[]
    OR?: IdiomaWhereInput[]
    NOT?: IdiomaWhereInput | IdiomaWhereInput[]
    idioma?: StringFilter<"Idioma"> | string
    nivel?: StringFilter<"Idioma"> | string
    curriculoId?: IntFilter<"Idioma"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }, "id">

  export type IdiomaOrderByWithAggregationInput = {
    id?: SortOrder
    idioma?: SortOrder
    nivel?: SortOrder
    curriculoId?: SortOrder
    _count?: IdiomaCountOrderByAggregateInput
    _avg?: IdiomaAvgOrderByAggregateInput
    _max?: IdiomaMaxOrderByAggregateInput
    _min?: IdiomaMinOrderByAggregateInput
    _sum?: IdiomaSumOrderByAggregateInput
  }

  export type IdiomaScalarWhereWithAggregatesInput = {
    AND?: IdiomaScalarWhereWithAggregatesInput | IdiomaScalarWhereWithAggregatesInput[]
    OR?: IdiomaScalarWhereWithAggregatesInput[]
    NOT?: IdiomaScalarWhereWithAggregatesInput | IdiomaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Idioma"> | number
    idioma?: StringWithAggregatesFilter<"Idioma"> | string
    nivel?: StringWithAggregatesFilter<"Idioma"> | string
    curriculoId?: IntWithAggregatesFilter<"Idioma"> | number
  }

  export type DiferencialWhereInput = {
    AND?: DiferencialWhereInput | DiferencialWhereInput[]
    OR?: DiferencialWhereInput[]
    NOT?: DiferencialWhereInput | DiferencialWhereInput[]
    id?: IntFilter<"Diferencial"> | number
    descricao?: StringFilter<"Diferencial"> | string
    curriculoId?: IntFilter<"Diferencial"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }

  export type DiferencialOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    curriculoId?: SortOrder
    curriculo?: CurriculoOrderByWithRelationInput
  }

  export type DiferencialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiferencialWhereInput | DiferencialWhereInput[]
    OR?: DiferencialWhereInput[]
    NOT?: DiferencialWhereInput | DiferencialWhereInput[]
    descricao?: StringFilter<"Diferencial"> | string
    curriculoId?: IntFilter<"Diferencial"> | number
    curriculo?: XOR<CurriculoScalarRelationFilter, CurriculoWhereInput>
  }, "id">

  export type DiferencialOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    curriculoId?: SortOrder
    _count?: DiferencialCountOrderByAggregateInput
    _avg?: DiferencialAvgOrderByAggregateInput
    _max?: DiferencialMaxOrderByAggregateInput
    _min?: DiferencialMinOrderByAggregateInput
    _sum?: DiferencialSumOrderByAggregateInput
  }

  export type DiferencialScalarWhereWithAggregatesInput = {
    AND?: DiferencialScalarWhereWithAggregatesInput | DiferencialScalarWhereWithAggregatesInput[]
    OR?: DiferencialScalarWhereWithAggregatesInput[]
    NOT?: DiferencialScalarWhereWithAggregatesInput | DiferencialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diferencial"> | number
    descricao?: StringWithAggregatesFilter<"Diferencial"> | string
    curriculoId?: IntWithAggregatesFilter<"Diferencial"> | number
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
    curriculo?: CurriculoCreateNestedOneWithoutUsuarioInput
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
    curriculo?: CurriculoUncheckedCreateNestedOneWithoutUsuarioInput
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
    curriculo?: CurriculoUpdateOneWithoutUsuarioNestedInput
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
    curriculo?: CurriculoUncheckedUpdateOneWithoutUsuarioNestedInput
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

  export type CurriculoCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoCreateManyInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurriculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienciaProfissionalCreateInput = {
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
    curriculo: CurriculoCreateNestedOneWithoutExperienciasInput
  }

  export type ExperienciaProfissionalUncheckedCreateInput = {
    id?: number
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
    curriculoId: number
  }

  export type ExperienciaProfissionalUpdateInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
    curriculo?: CurriculoUpdateOneRequiredWithoutExperienciasNestedInput
  }

  export type ExperienciaProfissionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienciaProfissionalCreateManyInput = {
    id?: number
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
    curriculoId: number
  }

  export type ExperienciaProfissionalUpdateManyMutationInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienciaProfissionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type FormacaoAcademicaCreateInput = {
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
    curriculo: CurriculoCreateNestedOneWithoutFormacoesInput
  }

  export type FormacaoAcademicaUncheckedCreateInput = {
    id?: number
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
    curriculoId: number
  }

  export type FormacaoAcademicaUpdateInput = {
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curriculo?: CurriculoUpdateOneRequiredWithoutFormacoesNestedInput
  }

  export type FormacaoAcademicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type FormacaoAcademicaCreateManyInput = {
    id?: number
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
    curriculoId: number
  }

  export type FormacaoAcademicaUpdateManyMutationInput = {
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormacaoAcademicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type CertificadoCreateInput = {
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
    curriculo: CurriculoCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateInput = {
    id?: number
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
    curriculoId: number
  }

  export type CertificadoUpdateInput = {
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculo?: CurriculoUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type CertificadoCreateManyInput = {
    id?: number
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
    curriculoId: number
  }

  export type CertificadoUpdateManyMutationInput = {
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type IdiomaCreateInput = {
    idioma: string
    nivel: string
    curriculo: CurriculoCreateNestedOneWithoutIdiomasInput
  }

  export type IdiomaUncheckedCreateInput = {
    id?: number
    idioma: string
    nivel: string
    curriculoId: number
  }

  export type IdiomaUpdateInput = {
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    curriculo?: CurriculoUpdateOneRequiredWithoutIdiomasNestedInput
  }

  export type IdiomaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type IdiomaCreateManyInput = {
    id?: number
    idioma: string
    nivel: string
    curriculoId: number
  }

  export type IdiomaUpdateManyMutationInput = {
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type IdiomaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type DiferencialCreateInput = {
    descricao: string
    curriculo: CurriculoCreateNestedOneWithoutDiferenciaisInput
  }

  export type DiferencialUncheckedCreateInput = {
    id?: number
    descricao: string
    curriculoId: number
  }

  export type DiferencialUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    curriculo?: CurriculoUpdateOneRequiredWithoutDiferenciaisNestedInput
  }

  export type DiferencialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    curriculoId?: IntFieldUpdateOperationsInput | number
  }

  export type DiferencialCreateManyInput = {
    id?: number
    descricao: string
    curriculoId: number
  }

  export type DiferencialUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DiferencialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    curriculoId?: IntFieldUpdateOperationsInput | number
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

  export type CurriculoNullableScalarRelationFilter = {
    is?: CurriculoWhereInput | null
    isNot?: CurriculoWhereInput | null
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

  export type ExperienciaProfissionalListRelationFilter = {
    every?: ExperienciaProfissionalWhereInput
    some?: ExperienciaProfissionalWhereInput
    none?: ExperienciaProfissionalWhereInput
  }

  export type FormacaoAcademicaListRelationFilter = {
    every?: FormacaoAcademicaWhereInput
    some?: FormacaoAcademicaWhereInput
    none?: FormacaoAcademicaWhereInput
  }

  export type CertificadoListRelationFilter = {
    every?: CertificadoWhereInput
    some?: CertificadoWhereInput
    none?: CertificadoWhereInput
  }

  export type IdiomaListRelationFilter = {
    every?: IdiomaWhereInput
    some?: IdiomaWhereInput
    none?: IdiomaWhereInput
  }

  export type DiferencialListRelationFilter = {
    every?: DiferencialWhereInput
    some?: DiferencialWhereInput
    none?: DiferencialWhereInput
  }

  export type ExperienciaProfissionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormacaoAcademicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdiomaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiferencialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurriculoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CurriculoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CurriculoScalarRelationFilter = {
    is?: CurriculoWhereInput
    isNot?: CurriculoWhereInput
  }

  export type ExperienciaProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    empresa?: SortOrder
    descricao?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    empregoAtual?: SortOrder
    curriculoId?: SortOrder
  }

  export type ExperienciaProfissionalAvgOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type ExperienciaProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    empresa?: SortOrder
    descricao?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    empregoAtual?: SortOrder
    curriculoId?: SortOrder
  }

  export type ExperienciaProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    cargo?: SortOrder
    empresa?: SortOrder
    descricao?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    empregoAtual?: SortOrder
    curriculoId?: SortOrder
  }

  export type ExperienciaProfissionalSumOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FormacaoAcademicaCountOrderByAggregateInput = {
    id?: SortOrder
    nivelFormacao?: SortOrder
    grauFormacao?: SortOrder
    curso?: SortOrder
    nomeInstituicao?: SortOrder
    status?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    curriculoId?: SortOrder
  }

  export type FormacaoAcademicaAvgOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type FormacaoAcademicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nivelFormacao?: SortOrder
    grauFormacao?: SortOrder
    curso?: SortOrder
    nomeInstituicao?: SortOrder
    status?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    curriculoId?: SortOrder
  }

  export type FormacaoAcademicaMinOrderByAggregateInput = {
    id?: SortOrder
    nivelFormacao?: SortOrder
    grauFormacao?: SortOrder
    curso?: SortOrder
    nomeInstituicao?: SortOrder
    status?: SortOrder
    inicioData?: SortOrder
    fimData?: SortOrder
    curriculoId?: SortOrder
  }

  export type FormacaoAcademicaSumOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type CertificadoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeInstituicao?: SortOrder
    descricao?: SortOrder
    dataEmissao?: SortOrder
    curriculoId?: SortOrder
  }

  export type CertificadoAvgOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type CertificadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeInstituicao?: SortOrder
    descricao?: SortOrder
    dataEmissao?: SortOrder
    curriculoId?: SortOrder
  }

  export type CertificadoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeInstituicao?: SortOrder
    descricao?: SortOrder
    dataEmissao?: SortOrder
    curriculoId?: SortOrder
  }

  export type CertificadoSumOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type IdiomaCountOrderByAggregateInput = {
    id?: SortOrder
    idioma?: SortOrder
    nivel?: SortOrder
    curriculoId?: SortOrder
  }

  export type IdiomaAvgOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type IdiomaMaxOrderByAggregateInput = {
    id?: SortOrder
    idioma?: SortOrder
    nivel?: SortOrder
    curriculoId?: SortOrder
  }

  export type IdiomaMinOrderByAggregateInput = {
    id?: SortOrder
    idioma?: SortOrder
    nivel?: SortOrder
    curriculoId?: SortOrder
  }

  export type IdiomaSumOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type DiferencialCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    curriculoId?: SortOrder
  }

  export type DiferencialAvgOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
  }

  export type DiferencialMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    curriculoId?: SortOrder
  }

  export type DiferencialMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    curriculoId?: SortOrder
  }

  export type DiferencialSumOrderByAggregateInput = {
    id?: SortOrder
    curriculoId?: SortOrder
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

  export type CurriculoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutUsuarioInput
    connect?: CurriculoWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutUserCandidateInput = {
    create?: XOR<AddressCreateWithoutUserCandidateInput, AddressUncheckedCreateWithoutUserCandidateInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserCandidateInput
    connect?: AddressWhereUniqueInput
  }

  export type CurriculoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutUsuarioInput
    connect?: CurriculoWhereUniqueInput
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

  export type CurriculoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutUsuarioInput
    upsert?: CurriculoUpsertWithoutUsuarioInput
    disconnect?: CurriculoWhereInput | boolean
    delete?: CurriculoWhereInput | boolean
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutUsuarioInput, CurriculoUpdateWithoutUsuarioInput>, CurriculoUncheckedUpdateWithoutUsuarioInput>
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

  export type CurriculoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutUsuarioInput
    upsert?: CurriculoUpsertWithoutUsuarioInput
    disconnect?: CurriculoWhereInput | boolean
    delete?: CurriculoWhereInput | boolean
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutUsuarioInput, CurriculoUpdateWithoutUsuarioInput>, CurriculoUncheckedUpdateWithoutUsuarioInput>
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

  export type UserCandidateCreateNestedOneWithoutCurriculoInput = {
    create?: XOR<UserCandidateCreateWithoutCurriculoInput, UserCandidateUncheckedCreateWithoutCurriculoInput>
    connectOrCreate?: UserCandidateCreateOrConnectWithoutCurriculoInput
    connect?: UserCandidateWhereUniqueInput
  }

  export type ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput> | ExperienciaProfissionalCreateWithoutCurriculoInput[] | ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput | ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput[]
    createMany?: ExperienciaProfissionalCreateManyCurriculoInputEnvelope
    connect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
  }

  export type FormacaoAcademicaCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput> | FormacaoAcademicaCreateWithoutCurriculoInput[] | FormacaoAcademicaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: FormacaoAcademicaCreateOrConnectWithoutCurriculoInput | FormacaoAcademicaCreateOrConnectWithoutCurriculoInput[]
    createMany?: FormacaoAcademicaCreateManyCurriculoInputEnvelope
    connect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
  }

  export type CertificadoCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput> | CertificadoCreateWithoutCurriculoInput[] | CertificadoUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCurriculoInput | CertificadoCreateOrConnectWithoutCurriculoInput[]
    createMany?: CertificadoCreateManyCurriculoInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type IdiomaCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput> | IdiomaCreateWithoutCurriculoInput[] | IdiomaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: IdiomaCreateOrConnectWithoutCurriculoInput | IdiomaCreateOrConnectWithoutCurriculoInput[]
    createMany?: IdiomaCreateManyCurriculoInputEnvelope
    connect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
  }

  export type DiferencialCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput> | DiferencialCreateWithoutCurriculoInput[] | DiferencialUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: DiferencialCreateOrConnectWithoutCurriculoInput | DiferencialCreateOrConnectWithoutCurriculoInput[]
    createMany?: DiferencialCreateManyCurriculoInputEnvelope
    connect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
  }

  export type ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput> | ExperienciaProfissionalCreateWithoutCurriculoInput[] | ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput | ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput[]
    createMany?: ExperienciaProfissionalCreateManyCurriculoInputEnvelope
    connect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
  }

  export type FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput> | FormacaoAcademicaCreateWithoutCurriculoInput[] | FormacaoAcademicaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: FormacaoAcademicaCreateOrConnectWithoutCurriculoInput | FormacaoAcademicaCreateOrConnectWithoutCurriculoInput[]
    createMany?: FormacaoAcademicaCreateManyCurriculoInputEnvelope
    connect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
  }

  export type CertificadoUncheckedCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput> | CertificadoCreateWithoutCurriculoInput[] | CertificadoUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCurriculoInput | CertificadoCreateOrConnectWithoutCurriculoInput[]
    createMany?: CertificadoCreateManyCurriculoInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type IdiomaUncheckedCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput> | IdiomaCreateWithoutCurriculoInput[] | IdiomaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: IdiomaCreateOrConnectWithoutCurriculoInput | IdiomaCreateOrConnectWithoutCurriculoInput[]
    createMany?: IdiomaCreateManyCurriculoInputEnvelope
    connect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
  }

  export type DiferencialUncheckedCreateNestedManyWithoutCurriculoInput = {
    create?: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput> | DiferencialCreateWithoutCurriculoInput[] | DiferencialUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: DiferencialCreateOrConnectWithoutCurriculoInput | DiferencialCreateOrConnectWithoutCurriculoInput[]
    createMany?: DiferencialCreateManyCurriculoInputEnvelope
    connect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
  }

  export type UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput = {
    create?: XOR<UserCandidateCreateWithoutCurriculoInput, UserCandidateUncheckedCreateWithoutCurriculoInput>
    connectOrCreate?: UserCandidateCreateOrConnectWithoutCurriculoInput
    upsert?: UserCandidateUpsertWithoutCurriculoInput
    connect?: UserCandidateWhereUniqueInput
    update?: XOR<XOR<UserCandidateUpdateToOneWithWhereWithoutCurriculoInput, UserCandidateUpdateWithoutCurriculoInput>, UserCandidateUncheckedUpdateWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput> | ExperienciaProfissionalCreateWithoutCurriculoInput[] | ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput | ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput[]
    upsert?: ExperienciaProfissionalUpsertWithWhereUniqueWithoutCurriculoInput | ExperienciaProfissionalUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: ExperienciaProfissionalCreateManyCurriculoInputEnvelope
    set?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    disconnect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    delete?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    connect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    update?: ExperienciaProfissionalUpdateWithWhereUniqueWithoutCurriculoInput | ExperienciaProfissionalUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: ExperienciaProfissionalUpdateManyWithWhereWithoutCurriculoInput | ExperienciaProfissionalUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: ExperienciaProfissionalScalarWhereInput | ExperienciaProfissionalScalarWhereInput[]
  }

  export type FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput> | FormacaoAcademicaCreateWithoutCurriculoInput[] | FormacaoAcademicaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: FormacaoAcademicaCreateOrConnectWithoutCurriculoInput | FormacaoAcademicaCreateOrConnectWithoutCurriculoInput[]
    upsert?: FormacaoAcademicaUpsertWithWhereUniqueWithoutCurriculoInput | FormacaoAcademicaUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: FormacaoAcademicaCreateManyCurriculoInputEnvelope
    set?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    disconnect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    delete?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    connect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    update?: FormacaoAcademicaUpdateWithWhereUniqueWithoutCurriculoInput | FormacaoAcademicaUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: FormacaoAcademicaUpdateManyWithWhereWithoutCurriculoInput | FormacaoAcademicaUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: FormacaoAcademicaScalarWhereInput | FormacaoAcademicaScalarWhereInput[]
  }

  export type CertificadoUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput> | CertificadoCreateWithoutCurriculoInput[] | CertificadoUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCurriculoInput | CertificadoCreateOrConnectWithoutCurriculoInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutCurriculoInput | CertificadoUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: CertificadoCreateManyCurriculoInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutCurriculoInput | CertificadoUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutCurriculoInput | CertificadoUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type IdiomaUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput> | IdiomaCreateWithoutCurriculoInput[] | IdiomaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: IdiomaCreateOrConnectWithoutCurriculoInput | IdiomaCreateOrConnectWithoutCurriculoInput[]
    upsert?: IdiomaUpsertWithWhereUniqueWithoutCurriculoInput | IdiomaUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: IdiomaCreateManyCurriculoInputEnvelope
    set?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    disconnect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    delete?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    connect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    update?: IdiomaUpdateWithWhereUniqueWithoutCurriculoInput | IdiomaUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: IdiomaUpdateManyWithWhereWithoutCurriculoInput | IdiomaUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: IdiomaScalarWhereInput | IdiomaScalarWhereInput[]
  }

  export type DiferencialUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput> | DiferencialCreateWithoutCurriculoInput[] | DiferencialUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: DiferencialCreateOrConnectWithoutCurriculoInput | DiferencialCreateOrConnectWithoutCurriculoInput[]
    upsert?: DiferencialUpsertWithWhereUniqueWithoutCurriculoInput | DiferencialUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: DiferencialCreateManyCurriculoInputEnvelope
    set?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    disconnect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    delete?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    connect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    update?: DiferencialUpdateWithWhereUniqueWithoutCurriculoInput | DiferencialUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: DiferencialUpdateManyWithWhereWithoutCurriculoInput | DiferencialUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: DiferencialScalarWhereInput | DiferencialScalarWhereInput[]
  }

  export type ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput> | ExperienciaProfissionalCreateWithoutCurriculoInput[] | ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput | ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput[]
    upsert?: ExperienciaProfissionalUpsertWithWhereUniqueWithoutCurriculoInput | ExperienciaProfissionalUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: ExperienciaProfissionalCreateManyCurriculoInputEnvelope
    set?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    disconnect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    delete?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    connect?: ExperienciaProfissionalWhereUniqueInput | ExperienciaProfissionalWhereUniqueInput[]
    update?: ExperienciaProfissionalUpdateWithWhereUniqueWithoutCurriculoInput | ExperienciaProfissionalUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: ExperienciaProfissionalUpdateManyWithWhereWithoutCurriculoInput | ExperienciaProfissionalUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: ExperienciaProfissionalScalarWhereInput | ExperienciaProfissionalScalarWhereInput[]
  }

  export type FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput> | FormacaoAcademicaCreateWithoutCurriculoInput[] | FormacaoAcademicaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: FormacaoAcademicaCreateOrConnectWithoutCurriculoInput | FormacaoAcademicaCreateOrConnectWithoutCurriculoInput[]
    upsert?: FormacaoAcademicaUpsertWithWhereUniqueWithoutCurriculoInput | FormacaoAcademicaUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: FormacaoAcademicaCreateManyCurriculoInputEnvelope
    set?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    disconnect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    delete?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    connect?: FormacaoAcademicaWhereUniqueInput | FormacaoAcademicaWhereUniqueInput[]
    update?: FormacaoAcademicaUpdateWithWhereUniqueWithoutCurriculoInput | FormacaoAcademicaUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: FormacaoAcademicaUpdateManyWithWhereWithoutCurriculoInput | FormacaoAcademicaUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: FormacaoAcademicaScalarWhereInput | FormacaoAcademicaScalarWhereInput[]
  }

  export type CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput> | CertificadoCreateWithoutCurriculoInput[] | CertificadoUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutCurriculoInput | CertificadoCreateOrConnectWithoutCurriculoInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutCurriculoInput | CertificadoUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: CertificadoCreateManyCurriculoInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutCurriculoInput | CertificadoUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutCurriculoInput | CertificadoUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput> | IdiomaCreateWithoutCurriculoInput[] | IdiomaUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: IdiomaCreateOrConnectWithoutCurriculoInput | IdiomaCreateOrConnectWithoutCurriculoInput[]
    upsert?: IdiomaUpsertWithWhereUniqueWithoutCurriculoInput | IdiomaUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: IdiomaCreateManyCurriculoInputEnvelope
    set?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    disconnect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    delete?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    connect?: IdiomaWhereUniqueInput | IdiomaWhereUniqueInput[]
    update?: IdiomaUpdateWithWhereUniqueWithoutCurriculoInput | IdiomaUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: IdiomaUpdateManyWithWhereWithoutCurriculoInput | IdiomaUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: IdiomaScalarWhereInput | IdiomaScalarWhereInput[]
  }

  export type DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput = {
    create?: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput> | DiferencialCreateWithoutCurriculoInput[] | DiferencialUncheckedCreateWithoutCurriculoInput[]
    connectOrCreate?: DiferencialCreateOrConnectWithoutCurriculoInput | DiferencialCreateOrConnectWithoutCurriculoInput[]
    upsert?: DiferencialUpsertWithWhereUniqueWithoutCurriculoInput | DiferencialUpsertWithWhereUniqueWithoutCurriculoInput[]
    createMany?: DiferencialCreateManyCurriculoInputEnvelope
    set?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    disconnect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    delete?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    connect?: DiferencialWhereUniqueInput | DiferencialWhereUniqueInput[]
    update?: DiferencialUpdateWithWhereUniqueWithoutCurriculoInput | DiferencialUpdateWithWhereUniqueWithoutCurriculoInput[]
    updateMany?: DiferencialUpdateManyWithWhereWithoutCurriculoInput | DiferencialUpdateManyWithWhereWithoutCurriculoInput[]
    deleteMany?: DiferencialScalarWhereInput | DiferencialScalarWhereInput[]
  }

  export type CurriculoCreateNestedOneWithoutExperienciasInput = {
    create?: XOR<CurriculoCreateWithoutExperienciasInput, CurriculoUncheckedCreateWithoutExperienciasInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutExperienciasInput
    connect?: CurriculoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CurriculoUpdateOneRequiredWithoutExperienciasNestedInput = {
    create?: XOR<CurriculoCreateWithoutExperienciasInput, CurriculoUncheckedCreateWithoutExperienciasInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutExperienciasInput
    upsert?: CurriculoUpsertWithoutExperienciasInput
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutExperienciasInput, CurriculoUpdateWithoutExperienciasInput>, CurriculoUncheckedUpdateWithoutExperienciasInput>
  }

  export type CurriculoCreateNestedOneWithoutFormacoesInput = {
    create?: XOR<CurriculoCreateWithoutFormacoesInput, CurriculoUncheckedCreateWithoutFormacoesInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutFormacoesInput
    connect?: CurriculoWhereUniqueInput
  }

  export type CurriculoUpdateOneRequiredWithoutFormacoesNestedInput = {
    create?: XOR<CurriculoCreateWithoutFormacoesInput, CurriculoUncheckedCreateWithoutFormacoesInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutFormacoesInput
    upsert?: CurriculoUpsertWithoutFormacoesInput
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutFormacoesInput, CurriculoUpdateWithoutFormacoesInput>, CurriculoUncheckedUpdateWithoutFormacoesInput>
  }

  export type CurriculoCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<CurriculoCreateWithoutCertificadosInput, CurriculoUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutCertificadosInput
    connect?: CurriculoWhereUniqueInput
  }

  export type CurriculoUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<CurriculoCreateWithoutCertificadosInput, CurriculoUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutCertificadosInput
    upsert?: CurriculoUpsertWithoutCertificadosInput
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutCertificadosInput, CurriculoUpdateWithoutCertificadosInput>, CurriculoUncheckedUpdateWithoutCertificadosInput>
  }

  export type CurriculoCreateNestedOneWithoutIdiomasInput = {
    create?: XOR<CurriculoCreateWithoutIdiomasInput, CurriculoUncheckedCreateWithoutIdiomasInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutIdiomasInput
    connect?: CurriculoWhereUniqueInput
  }

  export type CurriculoUpdateOneRequiredWithoutIdiomasNestedInput = {
    create?: XOR<CurriculoCreateWithoutIdiomasInput, CurriculoUncheckedCreateWithoutIdiomasInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutIdiomasInput
    upsert?: CurriculoUpsertWithoutIdiomasInput
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutIdiomasInput, CurriculoUpdateWithoutIdiomasInput>, CurriculoUncheckedUpdateWithoutIdiomasInput>
  }

  export type CurriculoCreateNestedOneWithoutDiferenciaisInput = {
    create?: XOR<CurriculoCreateWithoutDiferenciaisInput, CurriculoUncheckedCreateWithoutDiferenciaisInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutDiferenciaisInput
    connect?: CurriculoWhereUniqueInput
  }

  export type CurriculoUpdateOneRequiredWithoutDiferenciaisNestedInput = {
    create?: XOR<CurriculoCreateWithoutDiferenciaisInput, CurriculoUncheckedCreateWithoutDiferenciaisInput>
    connectOrCreate?: CurriculoCreateOrConnectWithoutDiferenciaisInput
    upsert?: CurriculoUpsertWithoutDiferenciaisInput
    connect?: CurriculoWhereUniqueInput
    update?: XOR<XOR<CurriculoUpdateToOneWithWhereWithoutDiferenciaisInput, CurriculoUpdateWithoutDiferenciaisInput>, CurriculoUncheckedUpdateWithoutDiferenciaisInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    curriculo?: CurriculoCreateNestedOneWithoutUsuarioInput
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
    curriculo?: CurriculoUncheckedCreateNestedOneWithoutUsuarioInput
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
    curriculo?: CurriculoUpdateOneWithoutUsuarioNestedInput
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
    curriculo?: CurriculoUncheckedUpdateOneWithoutUsuarioNestedInput
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

  export type CurriculoCreateWithoutUsuarioInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutUsuarioInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
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

  export type CurriculoUpsertWithoutUsuarioInput = {
    update: XOR<CurriculoUpdateWithoutUsuarioInput, CurriculoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CurriculoCreateWithoutUsuarioInput, CurriculoUncheckedCreateWithoutUsuarioInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutUsuarioInput, CurriculoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CurriculoUpdateWithoutUsuarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
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

  export type UserCandidateCreateWithoutCurriculoInput = {
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

  export type UserCandidateUncheckedCreateWithoutCurriculoInput = {
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

  export type UserCandidateCreateOrConnectWithoutCurriculoInput = {
    where: UserCandidateWhereUniqueInput
    create: XOR<UserCandidateCreateWithoutCurriculoInput, UserCandidateUncheckedCreateWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalCreateWithoutCurriculoInput = {
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
  }

  export type ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput = {
    id?: number
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
  }

  export type ExperienciaProfissionalCreateOrConnectWithoutCurriculoInput = {
    where: ExperienciaProfissionalWhereUniqueInput
    create: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalCreateManyCurriculoInputEnvelope = {
    data: ExperienciaProfissionalCreateManyCurriculoInput | ExperienciaProfissionalCreateManyCurriculoInput[]
    skipDuplicates?: boolean
  }

  export type FormacaoAcademicaCreateWithoutCurriculoInput = {
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
  }

  export type FormacaoAcademicaUncheckedCreateWithoutCurriculoInput = {
    id?: number
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
  }

  export type FormacaoAcademicaCreateOrConnectWithoutCurriculoInput = {
    where: FormacaoAcademicaWhereUniqueInput
    create: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput>
  }

  export type FormacaoAcademicaCreateManyCurriculoInputEnvelope = {
    data: FormacaoAcademicaCreateManyCurriculoInput | FormacaoAcademicaCreateManyCurriculoInput[]
    skipDuplicates?: boolean
  }

  export type CertificadoCreateWithoutCurriculoInput = {
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
  }

  export type CertificadoUncheckedCreateWithoutCurriculoInput = {
    id?: number
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
  }

  export type CertificadoCreateOrConnectWithoutCurriculoInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput>
  }

  export type CertificadoCreateManyCurriculoInputEnvelope = {
    data: CertificadoCreateManyCurriculoInput | CertificadoCreateManyCurriculoInput[]
    skipDuplicates?: boolean
  }

  export type IdiomaCreateWithoutCurriculoInput = {
    idioma: string
    nivel: string
  }

  export type IdiomaUncheckedCreateWithoutCurriculoInput = {
    id?: number
    idioma: string
    nivel: string
  }

  export type IdiomaCreateOrConnectWithoutCurriculoInput = {
    where: IdiomaWhereUniqueInput
    create: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput>
  }

  export type IdiomaCreateManyCurriculoInputEnvelope = {
    data: IdiomaCreateManyCurriculoInput | IdiomaCreateManyCurriculoInput[]
    skipDuplicates?: boolean
  }

  export type DiferencialCreateWithoutCurriculoInput = {
    descricao: string
  }

  export type DiferencialUncheckedCreateWithoutCurriculoInput = {
    id?: number
    descricao: string
  }

  export type DiferencialCreateOrConnectWithoutCurriculoInput = {
    where: DiferencialWhereUniqueInput
    create: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput>
  }

  export type DiferencialCreateManyCurriculoInputEnvelope = {
    data: DiferencialCreateManyCurriculoInput | DiferencialCreateManyCurriculoInput[]
    skipDuplicates?: boolean
  }

  export type UserCandidateUpsertWithoutCurriculoInput = {
    update: XOR<UserCandidateUpdateWithoutCurriculoInput, UserCandidateUncheckedUpdateWithoutCurriculoInput>
    create: XOR<UserCandidateCreateWithoutCurriculoInput, UserCandidateUncheckedCreateWithoutCurriculoInput>
    where?: UserCandidateWhereInput
  }

  export type UserCandidateUpdateToOneWithWhereWithoutCurriculoInput = {
    where?: UserCandidateWhereInput
    data: XOR<UserCandidateUpdateWithoutCurriculoInput, UserCandidateUncheckedUpdateWithoutCurriculoInput>
  }

  export type UserCandidateUpdateWithoutCurriculoInput = {
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

  export type UserCandidateUncheckedUpdateWithoutCurriculoInput = {
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

  export type ExperienciaProfissionalUpsertWithWhereUniqueWithoutCurriculoInput = {
    where: ExperienciaProfissionalWhereUniqueInput
    update: XOR<ExperienciaProfissionalUpdateWithoutCurriculoInput, ExperienciaProfissionalUncheckedUpdateWithoutCurriculoInput>
    create: XOR<ExperienciaProfissionalCreateWithoutCurriculoInput, ExperienciaProfissionalUncheckedCreateWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalUpdateWithWhereUniqueWithoutCurriculoInput = {
    where: ExperienciaProfissionalWhereUniqueInput
    data: XOR<ExperienciaProfissionalUpdateWithoutCurriculoInput, ExperienciaProfissionalUncheckedUpdateWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalUpdateManyWithWhereWithoutCurriculoInput = {
    where: ExperienciaProfissionalScalarWhereInput
    data: XOR<ExperienciaProfissionalUpdateManyMutationInput, ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoInput>
  }

  export type ExperienciaProfissionalScalarWhereInput = {
    AND?: ExperienciaProfissionalScalarWhereInput | ExperienciaProfissionalScalarWhereInput[]
    OR?: ExperienciaProfissionalScalarWhereInput[]
    NOT?: ExperienciaProfissionalScalarWhereInput | ExperienciaProfissionalScalarWhereInput[]
    id?: IntFilter<"ExperienciaProfissional"> | number
    cargo?: StringFilter<"ExperienciaProfissional"> | string
    empresa?: StringFilter<"ExperienciaProfissional"> | string
    descricao?: StringFilter<"ExperienciaProfissional"> | string
    inicioData?: DateTimeFilter<"ExperienciaProfissional"> | Date | string
    fimData?: DateTimeNullableFilter<"ExperienciaProfissional"> | Date | string | null
    empregoAtual?: BoolFilter<"ExperienciaProfissional"> | boolean
    curriculoId?: IntFilter<"ExperienciaProfissional"> | number
  }

  export type FormacaoAcademicaUpsertWithWhereUniqueWithoutCurriculoInput = {
    where: FormacaoAcademicaWhereUniqueInput
    update: XOR<FormacaoAcademicaUpdateWithoutCurriculoInput, FormacaoAcademicaUncheckedUpdateWithoutCurriculoInput>
    create: XOR<FormacaoAcademicaCreateWithoutCurriculoInput, FormacaoAcademicaUncheckedCreateWithoutCurriculoInput>
  }

  export type FormacaoAcademicaUpdateWithWhereUniqueWithoutCurriculoInput = {
    where: FormacaoAcademicaWhereUniqueInput
    data: XOR<FormacaoAcademicaUpdateWithoutCurriculoInput, FormacaoAcademicaUncheckedUpdateWithoutCurriculoInput>
  }

  export type FormacaoAcademicaUpdateManyWithWhereWithoutCurriculoInput = {
    where: FormacaoAcademicaScalarWhereInput
    data: XOR<FormacaoAcademicaUpdateManyMutationInput, FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoInput>
  }

  export type FormacaoAcademicaScalarWhereInput = {
    AND?: FormacaoAcademicaScalarWhereInput | FormacaoAcademicaScalarWhereInput[]
    OR?: FormacaoAcademicaScalarWhereInput[]
    NOT?: FormacaoAcademicaScalarWhereInput | FormacaoAcademicaScalarWhereInput[]
    id?: IntFilter<"FormacaoAcademica"> | number
    nivelFormacao?: StringFilter<"FormacaoAcademica"> | string
    grauFormacao?: StringFilter<"FormacaoAcademica"> | string
    curso?: StringFilter<"FormacaoAcademica"> | string
    nomeInstituicao?: StringFilter<"FormacaoAcademica"> | string
    status?: StringFilter<"FormacaoAcademica"> | string
    inicioData?: DateTimeFilter<"FormacaoAcademica"> | Date | string
    fimData?: DateTimeNullableFilter<"FormacaoAcademica"> | Date | string | null
    curriculoId?: IntFilter<"FormacaoAcademica"> | number
  }

  export type CertificadoUpsertWithWhereUniqueWithoutCurriculoInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutCurriculoInput, CertificadoUncheckedUpdateWithoutCurriculoInput>
    create: XOR<CertificadoCreateWithoutCurriculoInput, CertificadoUncheckedCreateWithoutCurriculoInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutCurriculoInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutCurriculoInput, CertificadoUncheckedUpdateWithoutCurriculoInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutCurriculoInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutCurriculoInput>
  }

  export type CertificadoScalarWhereInput = {
    AND?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    OR?: CertificadoScalarWhereInput[]
    NOT?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    id?: IntFilter<"Certificado"> | number
    nomeInstituicao?: StringFilter<"Certificado"> | string
    descricao?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    curriculoId?: IntFilter<"Certificado"> | number
  }

  export type IdiomaUpsertWithWhereUniqueWithoutCurriculoInput = {
    where: IdiomaWhereUniqueInput
    update: XOR<IdiomaUpdateWithoutCurriculoInput, IdiomaUncheckedUpdateWithoutCurriculoInput>
    create: XOR<IdiomaCreateWithoutCurriculoInput, IdiomaUncheckedCreateWithoutCurriculoInput>
  }

  export type IdiomaUpdateWithWhereUniqueWithoutCurriculoInput = {
    where: IdiomaWhereUniqueInput
    data: XOR<IdiomaUpdateWithoutCurriculoInput, IdiomaUncheckedUpdateWithoutCurriculoInput>
  }

  export type IdiomaUpdateManyWithWhereWithoutCurriculoInput = {
    where: IdiomaScalarWhereInput
    data: XOR<IdiomaUpdateManyMutationInput, IdiomaUncheckedUpdateManyWithoutCurriculoInput>
  }

  export type IdiomaScalarWhereInput = {
    AND?: IdiomaScalarWhereInput | IdiomaScalarWhereInput[]
    OR?: IdiomaScalarWhereInput[]
    NOT?: IdiomaScalarWhereInput | IdiomaScalarWhereInput[]
    id?: IntFilter<"Idioma"> | number
    idioma?: StringFilter<"Idioma"> | string
    nivel?: StringFilter<"Idioma"> | string
    curriculoId?: IntFilter<"Idioma"> | number
  }

  export type DiferencialUpsertWithWhereUniqueWithoutCurriculoInput = {
    where: DiferencialWhereUniqueInput
    update: XOR<DiferencialUpdateWithoutCurriculoInput, DiferencialUncheckedUpdateWithoutCurriculoInput>
    create: XOR<DiferencialCreateWithoutCurriculoInput, DiferencialUncheckedCreateWithoutCurriculoInput>
  }

  export type DiferencialUpdateWithWhereUniqueWithoutCurriculoInput = {
    where: DiferencialWhereUniqueInput
    data: XOR<DiferencialUpdateWithoutCurriculoInput, DiferencialUncheckedUpdateWithoutCurriculoInput>
  }

  export type DiferencialUpdateManyWithWhereWithoutCurriculoInput = {
    where: DiferencialScalarWhereInput
    data: XOR<DiferencialUpdateManyMutationInput, DiferencialUncheckedUpdateManyWithoutCurriculoInput>
  }

  export type DiferencialScalarWhereInput = {
    AND?: DiferencialScalarWhereInput | DiferencialScalarWhereInput[]
    OR?: DiferencialScalarWhereInput[]
    NOT?: DiferencialScalarWhereInput | DiferencialScalarWhereInput[]
    id?: IntFilter<"Diferencial"> | number
    descricao?: StringFilter<"Diferencial"> | string
    curriculoId?: IntFilter<"Diferencial"> | number
  }

  export type CurriculoCreateWithoutExperienciasInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutExperienciasInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutExperienciasInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutExperienciasInput, CurriculoUncheckedCreateWithoutExperienciasInput>
  }

  export type CurriculoUpsertWithoutExperienciasInput = {
    update: XOR<CurriculoUpdateWithoutExperienciasInput, CurriculoUncheckedUpdateWithoutExperienciasInput>
    create: XOR<CurriculoCreateWithoutExperienciasInput, CurriculoUncheckedCreateWithoutExperienciasInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutExperienciasInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutExperienciasInput, CurriculoUncheckedUpdateWithoutExperienciasInput>
  }

  export type CurriculoUpdateWithoutExperienciasInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutExperienciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoCreateWithoutFormacoesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutFormacoesInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutFormacoesInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutFormacoesInput, CurriculoUncheckedCreateWithoutFormacoesInput>
  }

  export type CurriculoUpsertWithoutFormacoesInput = {
    update: XOR<CurriculoUpdateWithoutFormacoesInput, CurriculoUncheckedUpdateWithoutFormacoesInput>
    create: XOR<CurriculoCreateWithoutFormacoesInput, CurriculoUncheckedCreateWithoutFormacoesInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutFormacoesInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutFormacoesInput, CurriculoUncheckedUpdateWithoutFormacoesInput>
  }

  export type CurriculoUpdateWithoutFormacoesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutFormacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoCreateWithoutCertificadosInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutCertificadosInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutCertificadosInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutCertificadosInput, CurriculoUncheckedCreateWithoutCertificadosInput>
  }

  export type CurriculoUpsertWithoutCertificadosInput = {
    update: XOR<CurriculoUpdateWithoutCertificadosInput, CurriculoUncheckedUpdateWithoutCertificadosInput>
    create: XOR<CurriculoCreateWithoutCertificadosInput, CurriculoUncheckedCreateWithoutCertificadosInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutCertificadosInput, CurriculoUncheckedUpdateWithoutCertificadosInput>
  }

  export type CurriculoUpdateWithoutCertificadosInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutCertificadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoCreateWithoutIdiomasInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutIdiomasInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    diferenciais?: DiferencialUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutIdiomasInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutIdiomasInput, CurriculoUncheckedCreateWithoutIdiomasInput>
  }

  export type CurriculoUpsertWithoutIdiomasInput = {
    update: XOR<CurriculoUpdateWithoutIdiomasInput, CurriculoUncheckedUpdateWithoutIdiomasInput>
    create: XOR<CurriculoCreateWithoutIdiomasInput, CurriculoUncheckedCreateWithoutIdiomasInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutIdiomasInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutIdiomasInput, CurriculoUncheckedUpdateWithoutIdiomasInput>
  }

  export type CurriculoUpdateWithoutIdiomasInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutIdiomasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    diferenciais?: DiferencialUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoCreateWithoutDiferenciaisInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCandidateCreateNestedOneWithoutCurriculoInput
    experiencias?: ExperienciaProfissionalCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoUncheckedCreateWithoutDiferenciaisInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    experiencias?: ExperienciaProfissionalUncheckedCreateNestedManyWithoutCurriculoInput
    formacoes?: FormacaoAcademicaUncheckedCreateNestedManyWithoutCurriculoInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutCurriculoInput
    idiomas?: IdiomaUncheckedCreateNestedManyWithoutCurriculoInput
  }

  export type CurriculoCreateOrConnectWithoutDiferenciaisInput = {
    where: CurriculoWhereUniqueInput
    create: XOR<CurriculoCreateWithoutDiferenciaisInput, CurriculoUncheckedCreateWithoutDiferenciaisInput>
  }

  export type CurriculoUpsertWithoutDiferenciaisInput = {
    update: XOR<CurriculoUpdateWithoutDiferenciaisInput, CurriculoUncheckedUpdateWithoutDiferenciaisInput>
    create: XOR<CurriculoCreateWithoutDiferenciaisInput, CurriculoUncheckedCreateWithoutDiferenciaisInput>
    where?: CurriculoWhereInput
  }

  export type CurriculoUpdateToOneWithWhereWithoutDiferenciaisInput = {
    where?: CurriculoWhereInput
    data: XOR<CurriculoUpdateWithoutDiferenciaisInput, CurriculoUncheckedUpdateWithoutDiferenciaisInput>
  }

  export type CurriculoUpdateWithoutDiferenciaisInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserCandidateUpdateOneRequiredWithoutCurriculoNestedInput
    experiencias?: ExperienciaProfissionalUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUpdateManyWithoutCurriculoNestedInput
  }

  export type CurriculoUncheckedUpdateWithoutDiferenciaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiencias?: ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoNestedInput
    formacoes?: FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutCurriculoNestedInput
    idiomas?: IdiomaUncheckedUpdateManyWithoutCurriculoNestedInput
  }

  export type ExperienciaProfissionalCreateManyCurriculoInput = {
    id?: number
    cargo: string
    empresa: string
    descricao: string
    inicioData: Date | string
    fimData?: Date | string | null
    empregoAtual?: boolean
  }

  export type FormacaoAcademicaCreateManyCurriculoInput = {
    id?: number
    nivelFormacao: string
    grauFormacao: string
    curso: string
    nomeInstituicao: string
    status: string
    inicioData: Date | string
    fimData?: Date | string | null
  }

  export type CertificadoCreateManyCurriculoInput = {
    id?: number
    nomeInstituicao: string
    descricao: string
    dataEmissao: Date | string
  }

  export type IdiomaCreateManyCurriculoInput = {
    id?: number
    idioma: string
    nivel: string
  }

  export type DiferencialCreateManyCurriculoInput = {
    id?: number
    descricao: string
  }

  export type ExperienciaProfissionalUpdateWithoutCurriculoInput = {
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienciaProfissionalUncheckedUpdateWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienciaProfissionalUncheckedUpdateManyWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargo?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    empregoAtual?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FormacaoAcademicaUpdateWithoutCurriculoInput = {
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormacaoAcademicaUncheckedUpdateWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormacaoAcademicaUncheckedUpdateManyWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nivelFormacao?: StringFieldUpdateOperationsInput | string
    grauFormacao?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    inicioData?: DateTimeFieldUpdateOperationsInput | Date | string
    fimData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CertificadoUpdateWithoutCurriculoInput = {
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeInstituicao?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdiomaUpdateWithoutCurriculoInput = {
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type IdiomaUncheckedUpdateWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type IdiomaUncheckedUpdateManyWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idioma?: StringFieldUpdateOperationsInput | string
    nivel?: StringFieldUpdateOperationsInput | string
  }

  export type DiferencialUpdateWithoutCurriculoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DiferencialUncheckedUpdateWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DiferencialUncheckedUpdateManyWithoutCurriculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
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
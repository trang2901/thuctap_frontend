
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model coquan_tuyendung
 * 
 */
export type coquan_tuyendung = {
  coquan_id: bigint
  coquan_ma: string
  coquan_ten: string
  coquan_diachi: string
  coquan_sdt: string
  coquan_email: string
  coquan_website: string
  nguoilienhe: string
  co_quan_mota: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model dm_dantoc
 * 
 */
export type dm_dantoc = {
  dantoc_id: bigint
  dantoc_ma: string
  dantoc_ten: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model dm_tongiao
 * 
 */
export type dm_tongiao = {
  tongiao_id: bigint
  tongiao_ma: string
  tongiao_ten: string
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model failed_jobs
 * 
 */
export type failed_jobs = {
  id: bigint
  connection: string
  queue: string
  payload: string
  exception: string
  failed_at: Date
}

/**
 * Model hoso_ungvien
 * 
 */
export type hoso_ungvien = {
  hoso_id: bigint
  hoso_ma: string
  hoso_ngaynop: Date
  hoten_ungvien: string
  gioi_tinh: boolean
  sdt: string
  email: string
  CMND: string
  que_quan: string
  diachi_lienhe: string
  tinhtrang_honnhan: boolean
  nguoilienhe_sdt: string
  nguoilienhe_diachi: string
  ngayvao_doan: Date
  ngayvao_dang: Date
  congviec_truoctuyendung: string
  trangthai_tuyendung: string
  dantoc_id: bigint
  tongiao_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model hoso_ungvien_cauhoi_tuyendung
 * 
 */
export type hoso_ungvien_cauhoi_tuyendung = {
  cauhoi_id: bigint
  cauhoi_noidung: string
  cauhoi_trangthai: boolean
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model hoso_ungvien_skill
 * 
 */
export type hoso_ungvien_skill = {
  skill_id: bigint
  skill_code: string
  skill_name: string
  skill_status: boolean
  group_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model hoso_ungvien_skillgroup
 * 
 */
export type hoso_ungvien_skillgroup = {
  group_id: bigint
  group_name: string
  group_code: string
  group_status: boolean
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model hoso_ungvien_thongtin_giadinh
 * 
 */
export type hoso_ungvien_thongtin_giadinh = {
  thongtingiadinh_id: bigint
  hoten: string
  namsinh: Date
  Nghenghiep: string
  CMND: string
  quanhe: string
  diachi_hientai: string
  hoso_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model ketqua_thituyen
 * 
 */
export type ketqua_thituyen = {
  ketqua_id: bigint
  tongdiem: string
  danhgia_baithi: string
  ketqua: string
  upload_file: string
  trangthai: boolean
  lichthi_ct_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model lich_thituyen
 * 
 */
export type lich_thituyen = {
  lichthi_id: bigint
  ngaythi: Date
  diadiem: string
  noidung_thituyen: string
  thoigian: Date
  soluong: number
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model lich_thituyen_chitiet
 * 
 */
export type lich_thituyen_chitiet = {
  lichthi_ct_id: bigint
  ungtuyen_id: bigint
  lichthi_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model migrations
 * 
 */
export type migrations = {
  id: number
  migration: string
  batch: number
}

/**
 * Model quatrinh_congtac
 * 
 */
export type quatrinh_congtac = {
  quatrinh_congtac_id: bigint
  tungay: Date
  denngay: Date
  ten_coquan_donvi: string
  chuvu: string
  congviec_phutrach: string
  thanhtich_noibac: string
  hoso_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model quatrinh_hoctap
 * 
 */
export type quatrinh_hoctap = {
  quatrinh_hoctap_id: bigint
  tungay: Date
  denngay: Date
  bac_kynang: string
  ten_donvi_daotao: string
  ten_chungnhan_vanbang: string
  xeploai: string
  namcap: Date
  hoso_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model thongbao_tuyendung
 * 
 */
export type thongbao_tuyendung = {
  thongbao_id: bigint
  thongbao_ma: string
  thongbao_ngaylap: Date
  thongbao_hannop: Date
  thongbao_noidung: string
  quyenloi: string
  thanhphan_hoso: string
  phuongthuc_nophs: string
  thongbao_trangthai: boolean
  coquan_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model thongbao_tuyendung_chitiet
 * 
 */
export type thongbao_tuyendung_chitiet = {
  thongbao_ct_id: bigint
  vitri_tuyendung: string
  soluong: number
  mota: string
  yeucauchung: string
  muc_luong_min: string
  muc_luong_max: string
  thongbao_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model ungtuyen
 * 
 */
export type ungtuyen = {
  ungtuyen_id: bigint
  thongbao_ct_id: bigint
  hoso_id: bigint
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model users
 * 
 */
export type users = {
  id: bigint
  name: string
  email: string
  email_verified_at: Date | null
  password: string
  remember_token: string | null
  created_at: Date | null
  updated_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coquan_tuyendungs
 * const coquan_tuyendungs = await prisma.coquan_tuyendung.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coquan_tuyendungs
   * const coquan_tuyendungs = await prisma.coquan_tuyendung.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.coquan_tuyendung`: Exposes CRUD operations for the **coquan_tuyendung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coquan_tuyendungs
    * const coquan_tuyendungs = await prisma.coquan_tuyendung.findMany()
    * ```
    */
  get coquan_tuyendung(): Prisma.coquan_tuyendungDelegate<GlobalReject>;

  /**
   * `prisma.dm_dantoc`: Exposes CRUD operations for the **dm_dantoc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dm_dantocs
    * const dm_dantocs = await prisma.dm_dantoc.findMany()
    * ```
    */
  get dm_dantoc(): Prisma.dm_dantocDelegate<GlobalReject>;

  /**
   * `prisma.dm_tongiao`: Exposes CRUD operations for the **dm_tongiao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dm_tongiaos
    * const dm_tongiaos = await prisma.dm_tongiao.findMany()
    * ```
    */
  get dm_tongiao(): Prisma.dm_tongiaoDelegate<GlobalReject>;

  /**
   * `prisma.failed_jobs`: Exposes CRUD operations for the **failed_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Failed_jobs
    * const failed_jobs = await prisma.failed_jobs.findMany()
    * ```
    */
  get failed_jobs(): Prisma.failed_jobsDelegate<GlobalReject>;

  /**
   * `prisma.hoso_ungvien`: Exposes CRUD operations for the **hoso_ungvien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoso_ungviens
    * const hoso_ungviens = await prisma.hoso_ungvien.findMany()
    * ```
    */
  get hoso_ungvien(): Prisma.hoso_ungvienDelegate<GlobalReject>;

  /**
   * `prisma.hoso_ungvien_cauhoi_tuyendung`: Exposes CRUD operations for the **hoso_ungvien_cauhoi_tuyendung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoso_ungvien_cauhoi_tuyendungs
    * const hoso_ungvien_cauhoi_tuyendungs = await prisma.hoso_ungvien_cauhoi_tuyendung.findMany()
    * ```
    */
  get hoso_ungvien_cauhoi_tuyendung(): Prisma.hoso_ungvien_cauhoi_tuyendungDelegate<GlobalReject>;

  /**
   * `prisma.hoso_ungvien_skill`: Exposes CRUD operations for the **hoso_ungvien_skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoso_ungvien_skills
    * const hoso_ungvien_skills = await prisma.hoso_ungvien_skill.findMany()
    * ```
    */
  get hoso_ungvien_skill(): Prisma.hoso_ungvien_skillDelegate<GlobalReject>;

  /**
   * `prisma.hoso_ungvien_skillgroup`: Exposes CRUD operations for the **hoso_ungvien_skillgroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoso_ungvien_skillgroups
    * const hoso_ungvien_skillgroups = await prisma.hoso_ungvien_skillgroup.findMany()
    * ```
    */
  get hoso_ungvien_skillgroup(): Prisma.hoso_ungvien_skillgroupDelegate<GlobalReject>;

  /**
   * `prisma.hoso_ungvien_thongtin_giadinh`: Exposes CRUD operations for the **hoso_ungvien_thongtin_giadinh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hoso_ungvien_thongtin_giadinhs
    * const hoso_ungvien_thongtin_giadinhs = await prisma.hoso_ungvien_thongtin_giadinh.findMany()
    * ```
    */
  get hoso_ungvien_thongtin_giadinh(): Prisma.hoso_ungvien_thongtin_giadinhDelegate<GlobalReject>;

  /**
   * `prisma.ketqua_thituyen`: Exposes CRUD operations for the **ketqua_thituyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ketqua_thituyens
    * const ketqua_thituyens = await prisma.ketqua_thituyen.findMany()
    * ```
    */
  get ketqua_thituyen(): Prisma.ketqua_thituyenDelegate<GlobalReject>;

  /**
   * `prisma.lich_thituyen`: Exposes CRUD operations for the **lich_thituyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lich_thituyens
    * const lich_thituyens = await prisma.lich_thituyen.findMany()
    * ```
    */
  get lich_thituyen(): Prisma.lich_thituyenDelegate<GlobalReject>;

  /**
   * `prisma.lich_thituyen_chitiet`: Exposes CRUD operations for the **lich_thituyen_chitiet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lich_thituyen_chitiets
    * const lich_thituyen_chitiets = await prisma.lich_thituyen_chitiet.findMany()
    * ```
    */
  get lich_thituyen_chitiet(): Prisma.lich_thituyen_chitietDelegate<GlobalReject>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<GlobalReject>;

  /**
   * `prisma.quatrinh_congtac`: Exposes CRUD operations for the **quatrinh_congtac** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quatrinh_congtacs
    * const quatrinh_congtacs = await prisma.quatrinh_congtac.findMany()
    * ```
    */
  get quatrinh_congtac(): Prisma.quatrinh_congtacDelegate<GlobalReject>;

  /**
   * `prisma.quatrinh_hoctap`: Exposes CRUD operations for the **quatrinh_hoctap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quatrinh_hoctaps
    * const quatrinh_hoctaps = await prisma.quatrinh_hoctap.findMany()
    * ```
    */
  get quatrinh_hoctap(): Prisma.quatrinh_hoctapDelegate<GlobalReject>;

  /**
   * `prisma.thongbao_tuyendung`: Exposes CRUD operations for the **thongbao_tuyendung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thongbao_tuyendungs
    * const thongbao_tuyendungs = await prisma.thongbao_tuyendung.findMany()
    * ```
    */
  get thongbao_tuyendung(): Prisma.thongbao_tuyendungDelegate<GlobalReject>;

  /**
   * `prisma.thongbao_tuyendung_chitiet`: Exposes CRUD operations for the **thongbao_tuyendung_chitiet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thongbao_tuyendung_chitiets
    * const thongbao_tuyendung_chitiets = await prisma.thongbao_tuyendung_chitiet.findMany()
    * ```
    */
  get thongbao_tuyendung_chitiet(): Prisma.thongbao_tuyendung_chitietDelegate<GlobalReject>;

  /**
   * `prisma.ungtuyen`: Exposes CRUD operations for the **ungtuyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ungtuyens
    * const ungtuyens = await prisma.ungtuyen.findMany()
    * ```
    */
  get ungtuyen(): Prisma.ungtuyenDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    coquan_tuyendung: 'coquan_tuyendung',
    dm_dantoc: 'dm_dantoc',
    dm_tongiao: 'dm_tongiao',
    failed_jobs: 'failed_jobs',
    hoso_ungvien: 'hoso_ungvien',
    hoso_ungvien_cauhoi_tuyendung: 'hoso_ungvien_cauhoi_tuyendung',
    hoso_ungvien_skill: 'hoso_ungvien_skill',
    hoso_ungvien_skillgroup: 'hoso_ungvien_skillgroup',
    hoso_ungvien_thongtin_giadinh: 'hoso_ungvien_thongtin_giadinh',
    ketqua_thituyen: 'ketqua_thituyen',
    lich_thituyen: 'lich_thituyen',
    lich_thituyen_chitiet: 'lich_thituyen_chitiet',
    migrations: 'migrations',
    quatrinh_congtac: 'quatrinh_congtac',
    quatrinh_hoctap: 'quatrinh_hoctap',
    thongbao_tuyendung: 'thongbao_tuyendung',
    thongbao_tuyendung_chitiet: 'thongbao_tuyendung_chitiet',
    ungtuyen: 'ungtuyen',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Coquan_tuyendungCountOutputType
   */


  export type Coquan_tuyendungCountOutputType = {
    thongbao_tuyendung: number
  }

  export type Coquan_tuyendungCountOutputTypeSelect = {
    thongbao_tuyendung?: boolean
  }

  export type Coquan_tuyendungCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Coquan_tuyendungCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Coquan_tuyendungCountOutputType
    : S extends undefined
    ? never
    : S extends Coquan_tuyendungCountOutputTypeArgs
    ?'include' extends U
    ? Coquan_tuyendungCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Coquan_tuyendungCountOutputType ? Coquan_tuyendungCountOutputType[P] : never
  } 
    : Coquan_tuyendungCountOutputType
  : Coquan_tuyendungCountOutputType




  // Custom InputTypes

  /**
   * Coquan_tuyendungCountOutputType without action
   */
  export type Coquan_tuyendungCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Coquan_tuyendungCountOutputType
     * 
    **/
    select?: Coquan_tuyendungCountOutputTypeSelect | null
  }



  /**
   * Count Type Dm_dantocCountOutputType
   */


  export type Dm_dantocCountOutputType = {
    hoso_ungvien: number
  }

  export type Dm_dantocCountOutputTypeSelect = {
    hoso_ungvien?: boolean
  }

  export type Dm_dantocCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Dm_dantocCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Dm_dantocCountOutputType
    : S extends undefined
    ? never
    : S extends Dm_dantocCountOutputTypeArgs
    ?'include' extends U
    ? Dm_dantocCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Dm_dantocCountOutputType ? Dm_dantocCountOutputType[P] : never
  } 
    : Dm_dantocCountOutputType
  : Dm_dantocCountOutputType




  // Custom InputTypes

  /**
   * Dm_dantocCountOutputType without action
   */
  export type Dm_dantocCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Dm_dantocCountOutputType
     * 
    **/
    select?: Dm_dantocCountOutputTypeSelect | null
  }



  /**
   * Count Type Dm_tongiaoCountOutputType
   */


  export type Dm_tongiaoCountOutputType = {
    hoso_ungvien: number
  }

  export type Dm_tongiaoCountOutputTypeSelect = {
    hoso_ungvien?: boolean
  }

  export type Dm_tongiaoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Dm_tongiaoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Dm_tongiaoCountOutputType
    : S extends undefined
    ? never
    : S extends Dm_tongiaoCountOutputTypeArgs
    ?'include' extends U
    ? Dm_tongiaoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Dm_tongiaoCountOutputType ? Dm_tongiaoCountOutputType[P] : never
  } 
    : Dm_tongiaoCountOutputType
  : Dm_tongiaoCountOutputType




  // Custom InputTypes

  /**
   * Dm_tongiaoCountOutputType without action
   */
  export type Dm_tongiaoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Dm_tongiaoCountOutputType
     * 
    **/
    select?: Dm_tongiaoCountOutputTypeSelect | null
  }



  /**
   * Count Type Hoso_ungvienCountOutputType
   */


  export type Hoso_ungvienCountOutputType = {
    hoso_ungvien_thongtin_giadinh: number
    quatrinh_congtac: number
    quatrinh_hoctap: number
    ungtuyen: number
  }

  export type Hoso_ungvienCountOutputTypeSelect = {
    hoso_ungvien_thongtin_giadinh?: boolean
    quatrinh_congtac?: boolean
    quatrinh_hoctap?: boolean
    ungtuyen?: boolean
  }

  export type Hoso_ungvienCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Hoso_ungvienCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Hoso_ungvienCountOutputType
    : S extends undefined
    ? never
    : S extends Hoso_ungvienCountOutputTypeArgs
    ?'include' extends U
    ? Hoso_ungvienCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Hoso_ungvienCountOutputType ? Hoso_ungvienCountOutputType[P] : never
  } 
    : Hoso_ungvienCountOutputType
  : Hoso_ungvienCountOutputType




  // Custom InputTypes

  /**
   * Hoso_ungvienCountOutputType without action
   */
  export type Hoso_ungvienCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Hoso_ungvienCountOutputType
     * 
    **/
    select?: Hoso_ungvienCountOutputTypeSelect | null
  }



  /**
   * Count Type Hoso_ungvien_skillgroupCountOutputType
   */


  export type Hoso_ungvien_skillgroupCountOutputType = {
    hoso_ungvien_skill: number
  }

  export type Hoso_ungvien_skillgroupCountOutputTypeSelect = {
    hoso_ungvien_skill?: boolean
  }

  export type Hoso_ungvien_skillgroupCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Hoso_ungvien_skillgroupCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Hoso_ungvien_skillgroupCountOutputType
    : S extends undefined
    ? never
    : S extends Hoso_ungvien_skillgroupCountOutputTypeArgs
    ?'include' extends U
    ? Hoso_ungvien_skillgroupCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Hoso_ungvien_skillgroupCountOutputType ? Hoso_ungvien_skillgroupCountOutputType[P] : never
  } 
    : Hoso_ungvien_skillgroupCountOutputType
  : Hoso_ungvien_skillgroupCountOutputType




  // Custom InputTypes

  /**
   * Hoso_ungvien_skillgroupCountOutputType without action
   */
  export type Hoso_ungvien_skillgroupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Hoso_ungvien_skillgroupCountOutputType
     * 
    **/
    select?: Hoso_ungvien_skillgroupCountOutputTypeSelect | null
  }



  /**
   * Count Type Lich_thituyenCountOutputType
   */


  export type Lich_thituyenCountOutputType = {
    lich_thituyen_chitiet: number
  }

  export type Lich_thituyenCountOutputTypeSelect = {
    lich_thituyen_chitiet?: boolean
  }

  export type Lich_thituyenCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Lich_thituyenCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Lich_thituyenCountOutputType
    : S extends undefined
    ? never
    : S extends Lich_thituyenCountOutputTypeArgs
    ?'include' extends U
    ? Lich_thituyenCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Lich_thituyenCountOutputType ? Lich_thituyenCountOutputType[P] : never
  } 
    : Lich_thituyenCountOutputType
  : Lich_thituyenCountOutputType




  // Custom InputTypes

  /**
   * Lich_thituyenCountOutputType without action
   */
  export type Lich_thituyenCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Lich_thituyenCountOutputType
     * 
    **/
    select?: Lich_thituyenCountOutputTypeSelect | null
  }



  /**
   * Count Type Lich_thituyen_chitietCountOutputType
   */


  export type Lich_thituyen_chitietCountOutputType = {
    ketqua_thituyen: number
  }

  export type Lich_thituyen_chitietCountOutputTypeSelect = {
    ketqua_thituyen?: boolean
  }

  export type Lich_thituyen_chitietCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Lich_thituyen_chitietCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Lich_thituyen_chitietCountOutputType
    : S extends undefined
    ? never
    : S extends Lich_thituyen_chitietCountOutputTypeArgs
    ?'include' extends U
    ? Lich_thituyen_chitietCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Lich_thituyen_chitietCountOutputType ? Lich_thituyen_chitietCountOutputType[P] : never
  } 
    : Lich_thituyen_chitietCountOutputType
  : Lich_thituyen_chitietCountOutputType




  // Custom InputTypes

  /**
   * Lich_thituyen_chitietCountOutputType without action
   */
  export type Lich_thituyen_chitietCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Lich_thituyen_chitietCountOutputType
     * 
    **/
    select?: Lich_thituyen_chitietCountOutputTypeSelect | null
  }



  /**
   * Count Type Thongbao_tuyendungCountOutputType
   */


  export type Thongbao_tuyendungCountOutputType = {
    thongbao_tuyendung_chitiet: number
  }

  export type Thongbao_tuyendungCountOutputTypeSelect = {
    thongbao_tuyendung_chitiet?: boolean
  }

  export type Thongbao_tuyendungCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Thongbao_tuyendungCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Thongbao_tuyendungCountOutputType
    : S extends undefined
    ? never
    : S extends Thongbao_tuyendungCountOutputTypeArgs
    ?'include' extends U
    ? Thongbao_tuyendungCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Thongbao_tuyendungCountOutputType ? Thongbao_tuyendungCountOutputType[P] : never
  } 
    : Thongbao_tuyendungCountOutputType
  : Thongbao_tuyendungCountOutputType




  // Custom InputTypes

  /**
   * Thongbao_tuyendungCountOutputType without action
   */
  export type Thongbao_tuyendungCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Thongbao_tuyendungCountOutputType
     * 
    **/
    select?: Thongbao_tuyendungCountOutputTypeSelect | null
  }



  /**
   * Count Type Thongbao_tuyendung_chitietCountOutputType
   */


  export type Thongbao_tuyendung_chitietCountOutputType = {
    ungtuyen: number
  }

  export type Thongbao_tuyendung_chitietCountOutputTypeSelect = {
    ungtuyen?: boolean
  }

  export type Thongbao_tuyendung_chitietCountOutputTypeGetPayload<
    S extends boolean | null | undefined | Thongbao_tuyendung_chitietCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? Thongbao_tuyendung_chitietCountOutputType
    : S extends undefined
    ? never
    : S extends Thongbao_tuyendung_chitietCountOutputTypeArgs
    ?'include' extends U
    ? Thongbao_tuyendung_chitietCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Thongbao_tuyendung_chitietCountOutputType ? Thongbao_tuyendung_chitietCountOutputType[P] : never
  } 
    : Thongbao_tuyendung_chitietCountOutputType
  : Thongbao_tuyendung_chitietCountOutputType




  // Custom InputTypes

  /**
   * Thongbao_tuyendung_chitietCountOutputType without action
   */
  export type Thongbao_tuyendung_chitietCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Thongbao_tuyendung_chitietCountOutputType
     * 
    **/
    select?: Thongbao_tuyendung_chitietCountOutputTypeSelect | null
  }



  /**
   * Count Type UngtuyenCountOutputType
   */


  export type UngtuyenCountOutputType = {
    lich_thituyen_chitiet: number
  }

  export type UngtuyenCountOutputTypeSelect = {
    lich_thituyen_chitiet?: boolean
  }

  export type UngtuyenCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UngtuyenCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UngtuyenCountOutputType
    : S extends undefined
    ? never
    : S extends UngtuyenCountOutputTypeArgs
    ?'include' extends U
    ? UngtuyenCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UngtuyenCountOutputType ? UngtuyenCountOutputType[P] : never
  } 
    : UngtuyenCountOutputType
  : UngtuyenCountOutputType




  // Custom InputTypes

  /**
   * UngtuyenCountOutputType without action
   */
  export type UngtuyenCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UngtuyenCountOutputType
     * 
    **/
    select?: UngtuyenCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model coquan_tuyendung
   */


  export type AggregateCoquan_tuyendung = {
    _count: Coquan_tuyendungCountAggregateOutputType | null
    _avg: Coquan_tuyendungAvgAggregateOutputType | null
    _sum: Coquan_tuyendungSumAggregateOutputType | null
    _min: Coquan_tuyendungMinAggregateOutputType | null
    _max: Coquan_tuyendungMaxAggregateOutputType | null
  }

  export type Coquan_tuyendungAvgAggregateOutputType = {
    coquan_id: number | null
  }

  export type Coquan_tuyendungSumAggregateOutputType = {
    coquan_id: bigint | null
  }

  export type Coquan_tuyendungMinAggregateOutputType = {
    coquan_id: bigint | null
    coquan_ma: string | null
    coquan_ten: string | null
    coquan_diachi: string | null
    coquan_sdt: string | null
    coquan_email: string | null
    coquan_website: string | null
    nguoilienhe: string | null
    co_quan_mota: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Coquan_tuyendungMaxAggregateOutputType = {
    coquan_id: bigint | null
    coquan_ma: string | null
    coquan_ten: string | null
    coquan_diachi: string | null
    coquan_sdt: string | null
    coquan_email: string | null
    coquan_website: string | null
    nguoilienhe: string | null
    co_quan_mota: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Coquan_tuyendungCountAggregateOutputType = {
    coquan_id: number
    coquan_ma: number
    coquan_ten: number
    coquan_diachi: number
    coquan_sdt: number
    coquan_email: number
    coquan_website: number
    nguoilienhe: number
    co_quan_mota: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Coquan_tuyendungAvgAggregateInputType = {
    coquan_id?: true
  }

  export type Coquan_tuyendungSumAggregateInputType = {
    coquan_id?: true
  }

  export type Coquan_tuyendungMinAggregateInputType = {
    coquan_id?: true
    coquan_ma?: true
    coquan_ten?: true
    coquan_diachi?: true
    coquan_sdt?: true
    coquan_email?: true
    coquan_website?: true
    nguoilienhe?: true
    co_quan_mota?: true
    created_at?: true
    updated_at?: true
  }

  export type Coquan_tuyendungMaxAggregateInputType = {
    coquan_id?: true
    coquan_ma?: true
    coquan_ten?: true
    coquan_diachi?: true
    coquan_sdt?: true
    coquan_email?: true
    coquan_website?: true
    nguoilienhe?: true
    co_quan_mota?: true
    created_at?: true
    updated_at?: true
  }

  export type Coquan_tuyendungCountAggregateInputType = {
    coquan_id?: true
    coquan_ma?: true
    coquan_ten?: true
    coquan_diachi?: true
    coquan_sdt?: true
    coquan_email?: true
    coquan_website?: true
    nguoilienhe?: true
    co_quan_mota?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Coquan_tuyendungAggregateArgs = {
    /**
     * Filter which coquan_tuyendung to aggregate.
     * 
    **/
    where?: coquan_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coquan_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<coquan_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: coquan_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coquan_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coquan_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coquan_tuyendungs
    **/
    _count?: true | Coquan_tuyendungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Coquan_tuyendungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Coquan_tuyendungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Coquan_tuyendungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Coquan_tuyendungMaxAggregateInputType
  }

  export type GetCoquan_tuyendungAggregateType<T extends Coquan_tuyendungAggregateArgs> = {
        [P in keyof T & keyof AggregateCoquan_tuyendung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoquan_tuyendung[P]>
      : GetScalarType<T[P], AggregateCoquan_tuyendung[P]>
  }




  export type Coquan_tuyendungGroupByArgs = {
    where?: coquan_tuyendungWhereInput
    orderBy?: Enumerable<coquan_tuyendungOrderByWithAggregationInput>
    by: Array<Coquan_tuyendungScalarFieldEnum>
    having?: coquan_tuyendungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Coquan_tuyendungCountAggregateInputType | true
    _avg?: Coquan_tuyendungAvgAggregateInputType
    _sum?: Coquan_tuyendungSumAggregateInputType
    _min?: Coquan_tuyendungMinAggregateInputType
    _max?: Coquan_tuyendungMaxAggregateInputType
  }


  export type Coquan_tuyendungGroupByOutputType = {
    coquan_id: bigint
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at: Date | null
    updated_at: Date | null
    _count: Coquan_tuyendungCountAggregateOutputType | null
    _avg: Coquan_tuyendungAvgAggregateOutputType | null
    _sum: Coquan_tuyendungSumAggregateOutputType | null
    _min: Coquan_tuyendungMinAggregateOutputType | null
    _max: Coquan_tuyendungMaxAggregateOutputType | null
  }

  type GetCoquan_tuyendungGroupByPayload<T extends Coquan_tuyendungGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Coquan_tuyendungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Coquan_tuyendungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coquan_tuyendungGroupByOutputType[P]>
            : GetScalarType<T[P], Coquan_tuyendungGroupByOutputType[P]>
        }
      >
    >


  export type coquan_tuyendungSelect = {
    coquan_id?: boolean
    coquan_ma?: boolean
    coquan_ten?: boolean
    coquan_diachi?: boolean
    coquan_sdt?: boolean
    coquan_email?: boolean
    coquan_website?: boolean
    nguoilienhe?: boolean
    co_quan_mota?: boolean
    created_at?: boolean
    updated_at?: boolean
    thongbao_tuyendung?: boolean | thongbao_tuyendungFindManyArgs
    _count?: boolean | Coquan_tuyendungCountOutputTypeArgs
  }

  export type coquan_tuyendungInclude = {
    thongbao_tuyendung?: boolean | thongbao_tuyendungFindManyArgs
    _count?: boolean | Coquan_tuyendungCountOutputTypeArgs
  }

  export type coquan_tuyendungGetPayload<
    S extends boolean | null | undefined | coquan_tuyendungArgs,
    U = keyof S
      > = S extends true
        ? coquan_tuyendung
    : S extends undefined
    ? never
    : S extends coquan_tuyendungArgs | coquan_tuyendungFindManyArgs
    ?'include' extends U
    ? coquan_tuyendung  & {
    [P in TrueKeys<S['include']>]:
        P extends 'thongbao_tuyendung' ? Array < thongbao_tuyendungGetPayload<S['include'][P]>>  :
        P extends '_count' ? Coquan_tuyendungCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'thongbao_tuyendung' ? Array < thongbao_tuyendungGetPayload<S['select'][P]>>  :
        P extends '_count' ? Coquan_tuyendungCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof coquan_tuyendung ? coquan_tuyendung[P] : never
  } 
    : coquan_tuyendung
  : coquan_tuyendung


  type coquan_tuyendungCountArgs = Merge<
    Omit<coquan_tuyendungFindManyArgs, 'select' | 'include'> & {
      select?: Coquan_tuyendungCountAggregateInputType | true
    }
  >

  export interface coquan_tuyendungDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Coquan_tuyendung that matches the filter.
     * @param {coquan_tuyendungFindUniqueArgs} args - Arguments to find a Coquan_tuyendung
     * @example
     * // Get one Coquan_tuyendung
     * const coquan_tuyendung = await prisma.coquan_tuyendung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends coquan_tuyendungFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, coquan_tuyendungFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'coquan_tuyendung'> extends True ? CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung | null >, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T> | null >>

    /**
     * Find the first Coquan_tuyendung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coquan_tuyendungFindFirstArgs} args - Arguments to find a Coquan_tuyendung
     * @example
     * // Get one Coquan_tuyendung
     * const coquan_tuyendung = await prisma.coquan_tuyendung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends coquan_tuyendungFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, coquan_tuyendungFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'coquan_tuyendung'> extends True ? CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung | null >, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T> | null >>

    /**
     * Find zero or more Coquan_tuyendungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coquan_tuyendungFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coquan_tuyendungs
     * const coquan_tuyendungs = await prisma.coquan_tuyendung.findMany()
     * 
     * // Get first 10 Coquan_tuyendungs
     * const coquan_tuyendungs = await prisma.coquan_tuyendung.findMany({ take: 10 })
     * 
     * // Only select the `coquan_id`
     * const coquan_tuyendungWithCoquan_idOnly = await prisma.coquan_tuyendung.findMany({ select: { coquan_id: true } })
     * 
    **/
    findMany<T extends coquan_tuyendungFindManyArgs>(
      args?: SelectSubset<T, coquan_tuyendungFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<coquan_tuyendung>>, PrismaPromise<Array<coquan_tuyendungGetPayload<T>>>>

    /**
     * Create a Coquan_tuyendung.
     * @param {coquan_tuyendungCreateArgs} args - Arguments to create a Coquan_tuyendung.
     * @example
     * // Create one Coquan_tuyendung
     * const Coquan_tuyendung = await prisma.coquan_tuyendung.create({
     *   data: {
     *     // ... data to create a Coquan_tuyendung
     *   }
     * })
     * 
    **/
    create<T extends coquan_tuyendungCreateArgs>(
      args: SelectSubset<T, coquan_tuyendungCreateArgs>
    ): CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>>

    /**
     * Create many Coquan_tuyendungs.
     *     @param {coquan_tuyendungCreateManyArgs} args - Arguments to create many Coquan_tuyendungs.
     *     @example
     *     // Create many Coquan_tuyendungs
     *     const coquan_tuyendung = await prisma.coquan_tuyendung.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends coquan_tuyendungCreateManyArgs>(
      args?: SelectSubset<T, coquan_tuyendungCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coquan_tuyendung.
     * @param {coquan_tuyendungDeleteArgs} args - Arguments to delete one Coquan_tuyendung.
     * @example
     * // Delete one Coquan_tuyendung
     * const Coquan_tuyendung = await prisma.coquan_tuyendung.delete({
     *   where: {
     *     // ... filter to delete one Coquan_tuyendung
     *   }
     * })
     * 
    **/
    delete<T extends coquan_tuyendungDeleteArgs>(
      args: SelectSubset<T, coquan_tuyendungDeleteArgs>
    ): CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>>

    /**
     * Update one Coquan_tuyendung.
     * @param {coquan_tuyendungUpdateArgs} args - Arguments to update one Coquan_tuyendung.
     * @example
     * // Update one Coquan_tuyendung
     * const coquan_tuyendung = await prisma.coquan_tuyendung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends coquan_tuyendungUpdateArgs>(
      args: SelectSubset<T, coquan_tuyendungUpdateArgs>
    ): CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>>

    /**
     * Delete zero or more Coquan_tuyendungs.
     * @param {coquan_tuyendungDeleteManyArgs} args - Arguments to filter Coquan_tuyendungs to delete.
     * @example
     * // Delete a few Coquan_tuyendungs
     * const { count } = await prisma.coquan_tuyendung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends coquan_tuyendungDeleteManyArgs>(
      args?: SelectSubset<T, coquan_tuyendungDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coquan_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coquan_tuyendungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coquan_tuyendungs
     * const coquan_tuyendung = await prisma.coquan_tuyendung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends coquan_tuyendungUpdateManyArgs>(
      args: SelectSubset<T, coquan_tuyendungUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coquan_tuyendung.
     * @param {coquan_tuyendungUpsertArgs} args - Arguments to update or create a Coquan_tuyendung.
     * @example
     * // Update or create a Coquan_tuyendung
     * const coquan_tuyendung = await prisma.coquan_tuyendung.upsert({
     *   create: {
     *     // ... data to create a Coquan_tuyendung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coquan_tuyendung we want to update
     *   }
     * })
    **/
    upsert<T extends coquan_tuyendungUpsertArgs>(
      args: SelectSubset<T, coquan_tuyendungUpsertArgs>
    ): CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung>, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T>>>

    /**
     * Count the number of Coquan_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coquan_tuyendungCountArgs} args - Arguments to filter Coquan_tuyendungs to count.
     * @example
     * // Count the number of Coquan_tuyendungs
     * const count = await prisma.coquan_tuyendung.count({
     *   where: {
     *     // ... the filter for the Coquan_tuyendungs we want to count
     *   }
     * })
    **/
    count<T extends coquan_tuyendungCountArgs>(
      args?: Subset<T, coquan_tuyendungCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Coquan_tuyendungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coquan_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coquan_tuyendungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Coquan_tuyendungAggregateArgs>(args: Subset<T, Coquan_tuyendungAggregateArgs>): PrismaPromise<GetCoquan_tuyendungAggregateType<T>>

    /**
     * Group by Coquan_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coquan_tuyendungGroupByArgs} args - Group by arguments.
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
      T extends Coquan_tuyendungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coquan_tuyendungGroupByArgs['orderBy'] }
        : { orderBy?: Coquan_tuyendungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Coquan_tuyendungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoquan_tuyendungGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for coquan_tuyendung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__coquan_tuyendungClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thongbao_tuyendung<T extends thongbao_tuyendungFindManyArgs = {}>(args?: Subset<T, thongbao_tuyendungFindManyArgs>): CheckSelect<T, PrismaPromise<Array<thongbao_tuyendung>>, PrismaPromise<Array<thongbao_tuyendungGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * coquan_tuyendung findUnique
   */
  export type coquan_tuyendungFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * Throw an Error if a coquan_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which coquan_tuyendung to fetch.
     * 
    **/
    where: coquan_tuyendungWhereUniqueInput
  }


  /**
   * coquan_tuyendung findFirst
   */
  export type coquan_tuyendungFindFirstArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * Throw an Error if a coquan_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which coquan_tuyendung to fetch.
     * 
    **/
    where?: coquan_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coquan_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<coquan_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coquan_tuyendungs.
     * 
    **/
    cursor?: coquan_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coquan_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coquan_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coquan_tuyendungs.
     * 
    **/
    distinct?: Enumerable<Coquan_tuyendungScalarFieldEnum>
  }


  /**
   * coquan_tuyendung findMany
   */
  export type coquan_tuyendungFindManyArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * Filter, which coquan_tuyendungs to fetch.
     * 
    **/
    where?: coquan_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coquan_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<coquan_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coquan_tuyendungs.
     * 
    **/
    cursor?: coquan_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coquan_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coquan_tuyendungs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Coquan_tuyendungScalarFieldEnum>
  }


  /**
   * coquan_tuyendung create
   */
  export type coquan_tuyendungCreateArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * The data needed to create a coquan_tuyendung.
     * 
    **/
    data: XOR<coquan_tuyendungCreateInput, coquan_tuyendungUncheckedCreateInput>
  }


  /**
   * coquan_tuyendung createMany
   */
  export type coquan_tuyendungCreateManyArgs = {
    /**
     * The data used to create many coquan_tuyendungs.
     * 
    **/
    data: Enumerable<coquan_tuyendungCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * coquan_tuyendung update
   */
  export type coquan_tuyendungUpdateArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * The data needed to update a coquan_tuyendung.
     * 
    **/
    data: XOR<coquan_tuyendungUpdateInput, coquan_tuyendungUncheckedUpdateInput>
    /**
     * Choose, which coquan_tuyendung to update.
     * 
    **/
    where: coquan_tuyendungWhereUniqueInput
  }


  /**
   * coquan_tuyendung updateMany
   */
  export type coquan_tuyendungUpdateManyArgs = {
    /**
     * The data used to update coquan_tuyendungs.
     * 
    **/
    data: XOR<coquan_tuyendungUpdateManyMutationInput, coquan_tuyendungUncheckedUpdateManyInput>
    /**
     * Filter which coquan_tuyendungs to update
     * 
    **/
    where?: coquan_tuyendungWhereInput
  }


  /**
   * coquan_tuyendung upsert
   */
  export type coquan_tuyendungUpsertArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * The filter to search for the coquan_tuyendung to update in case it exists.
     * 
    **/
    where: coquan_tuyendungWhereUniqueInput
    /**
     * In case the coquan_tuyendung found by the `where` argument doesn't exist, create a new coquan_tuyendung with this data.
     * 
    **/
    create: XOR<coquan_tuyendungCreateInput, coquan_tuyendungUncheckedCreateInput>
    /**
     * In case the coquan_tuyendung was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<coquan_tuyendungUpdateInput, coquan_tuyendungUncheckedUpdateInput>
  }


  /**
   * coquan_tuyendung delete
   */
  export type coquan_tuyendungDeleteArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
    /**
     * Filter which coquan_tuyendung to delete.
     * 
    **/
    where: coquan_tuyendungWhereUniqueInput
  }


  /**
   * coquan_tuyendung deleteMany
   */
  export type coquan_tuyendungDeleteManyArgs = {
    /**
     * Filter which coquan_tuyendungs to delete
     * 
    **/
    where?: coquan_tuyendungWhereInput
  }


  /**
   * coquan_tuyendung without action
   */
  export type coquan_tuyendungArgs = {
    /**
     * Select specific fields to fetch from the coquan_tuyendung
     * 
    **/
    select?: coquan_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: coquan_tuyendungInclude | null
  }



  /**
   * Model dm_dantoc
   */


  export type AggregateDm_dantoc = {
    _count: Dm_dantocCountAggregateOutputType | null
    _avg: Dm_dantocAvgAggregateOutputType | null
    _sum: Dm_dantocSumAggregateOutputType | null
    _min: Dm_dantocMinAggregateOutputType | null
    _max: Dm_dantocMaxAggregateOutputType | null
  }

  export type Dm_dantocAvgAggregateOutputType = {
    dantoc_id: number | null
  }

  export type Dm_dantocSumAggregateOutputType = {
    dantoc_id: bigint | null
  }

  export type Dm_dantocMinAggregateOutputType = {
    dantoc_id: bigint | null
    dantoc_ma: string | null
    dantoc_ten: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dm_dantocMaxAggregateOutputType = {
    dantoc_id: bigint | null
    dantoc_ma: string | null
    dantoc_ten: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dm_dantocCountAggregateOutputType = {
    dantoc_id: number
    dantoc_ma: number
    dantoc_ten: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Dm_dantocAvgAggregateInputType = {
    dantoc_id?: true
  }

  export type Dm_dantocSumAggregateInputType = {
    dantoc_id?: true
  }

  export type Dm_dantocMinAggregateInputType = {
    dantoc_id?: true
    dantoc_ma?: true
    dantoc_ten?: true
    created_at?: true
    updated_at?: true
  }

  export type Dm_dantocMaxAggregateInputType = {
    dantoc_id?: true
    dantoc_ma?: true
    dantoc_ten?: true
    created_at?: true
    updated_at?: true
  }

  export type Dm_dantocCountAggregateInputType = {
    dantoc_id?: true
    dantoc_ma?: true
    dantoc_ten?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Dm_dantocAggregateArgs = {
    /**
     * Filter which dm_dantoc to aggregate.
     * 
    **/
    where?: dm_dantocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_dantocs to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_dantocOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: dm_dantocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_dantocs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_dantocs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dm_dantocs
    **/
    _count?: true | Dm_dantocCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dm_dantocAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dm_dantocSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dm_dantocMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dm_dantocMaxAggregateInputType
  }

  export type GetDm_dantocAggregateType<T extends Dm_dantocAggregateArgs> = {
        [P in keyof T & keyof AggregateDm_dantoc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDm_dantoc[P]>
      : GetScalarType<T[P], AggregateDm_dantoc[P]>
  }




  export type Dm_dantocGroupByArgs = {
    where?: dm_dantocWhereInput
    orderBy?: Enumerable<dm_dantocOrderByWithAggregationInput>
    by: Array<Dm_dantocScalarFieldEnum>
    having?: dm_dantocScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dm_dantocCountAggregateInputType | true
    _avg?: Dm_dantocAvgAggregateInputType
    _sum?: Dm_dantocSumAggregateInputType
    _min?: Dm_dantocMinAggregateInputType
    _max?: Dm_dantocMaxAggregateInputType
  }


  export type Dm_dantocGroupByOutputType = {
    dantoc_id: bigint
    dantoc_ma: string
    dantoc_ten: string
    created_at: Date | null
    updated_at: Date | null
    _count: Dm_dantocCountAggregateOutputType | null
    _avg: Dm_dantocAvgAggregateOutputType | null
    _sum: Dm_dantocSumAggregateOutputType | null
    _min: Dm_dantocMinAggregateOutputType | null
    _max: Dm_dantocMaxAggregateOutputType | null
  }

  type GetDm_dantocGroupByPayload<T extends Dm_dantocGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Dm_dantocGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dm_dantocGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dm_dantocGroupByOutputType[P]>
            : GetScalarType<T[P], Dm_dantocGroupByOutputType[P]>
        }
      >
    >


  export type dm_dantocSelect = {
    dantoc_id?: boolean
    dantoc_ma?: boolean
    dantoc_ten?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienFindManyArgs
    _count?: boolean | Dm_dantocCountOutputTypeArgs
  }

  export type dm_dantocInclude = {
    hoso_ungvien?: boolean | hoso_ungvienFindManyArgs
    _count?: boolean | Dm_dantocCountOutputTypeArgs
  }

  export type dm_dantocGetPayload<
    S extends boolean | null | undefined | dm_dantocArgs,
    U = keyof S
      > = S extends true
        ? dm_dantoc
    : S extends undefined
    ? never
    : S extends dm_dantocArgs | dm_dantocFindManyArgs
    ?'include' extends U
    ? dm_dantoc  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? Array < hoso_ungvienGetPayload<S['include'][P]>>  :
        P extends '_count' ? Dm_dantocCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? Array < hoso_ungvienGetPayload<S['select'][P]>>  :
        P extends '_count' ? Dm_dantocCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof dm_dantoc ? dm_dantoc[P] : never
  } 
    : dm_dantoc
  : dm_dantoc


  type dm_dantocCountArgs = Merge<
    Omit<dm_dantocFindManyArgs, 'select' | 'include'> & {
      select?: Dm_dantocCountAggregateInputType | true
    }
  >

  export interface dm_dantocDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dm_dantoc that matches the filter.
     * @param {dm_dantocFindUniqueArgs} args - Arguments to find a Dm_dantoc
     * @example
     * // Get one Dm_dantoc
     * const dm_dantoc = await prisma.dm_dantoc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dm_dantocFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dm_dantocFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dm_dantoc'> extends True ? CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>> : CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc | null >, Prisma__dm_dantocClient<dm_dantocGetPayload<T> | null >>

    /**
     * Find the first Dm_dantoc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_dantocFindFirstArgs} args - Arguments to find a Dm_dantoc
     * @example
     * // Get one Dm_dantoc
     * const dm_dantoc = await prisma.dm_dantoc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dm_dantocFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dm_dantocFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dm_dantoc'> extends True ? CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>> : CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc | null >, Prisma__dm_dantocClient<dm_dantocGetPayload<T> | null >>

    /**
     * Find zero or more Dm_dantocs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_dantocFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dm_dantocs
     * const dm_dantocs = await prisma.dm_dantoc.findMany()
     * 
     * // Get first 10 Dm_dantocs
     * const dm_dantocs = await prisma.dm_dantoc.findMany({ take: 10 })
     * 
     * // Only select the `dantoc_id`
     * const dm_dantocWithDantoc_idOnly = await prisma.dm_dantoc.findMany({ select: { dantoc_id: true } })
     * 
    **/
    findMany<T extends dm_dantocFindManyArgs>(
      args?: SelectSubset<T, dm_dantocFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<dm_dantoc>>, PrismaPromise<Array<dm_dantocGetPayload<T>>>>

    /**
     * Create a Dm_dantoc.
     * @param {dm_dantocCreateArgs} args - Arguments to create a Dm_dantoc.
     * @example
     * // Create one Dm_dantoc
     * const Dm_dantoc = await prisma.dm_dantoc.create({
     *   data: {
     *     // ... data to create a Dm_dantoc
     *   }
     * })
     * 
    **/
    create<T extends dm_dantocCreateArgs>(
      args: SelectSubset<T, dm_dantocCreateArgs>
    ): CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>>

    /**
     * Create many Dm_dantocs.
     *     @param {dm_dantocCreateManyArgs} args - Arguments to create many Dm_dantocs.
     *     @example
     *     // Create many Dm_dantocs
     *     const dm_dantoc = await prisma.dm_dantoc.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dm_dantocCreateManyArgs>(
      args?: SelectSubset<T, dm_dantocCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dm_dantoc.
     * @param {dm_dantocDeleteArgs} args - Arguments to delete one Dm_dantoc.
     * @example
     * // Delete one Dm_dantoc
     * const Dm_dantoc = await prisma.dm_dantoc.delete({
     *   where: {
     *     // ... filter to delete one Dm_dantoc
     *   }
     * })
     * 
    **/
    delete<T extends dm_dantocDeleteArgs>(
      args: SelectSubset<T, dm_dantocDeleteArgs>
    ): CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>>

    /**
     * Update one Dm_dantoc.
     * @param {dm_dantocUpdateArgs} args - Arguments to update one Dm_dantoc.
     * @example
     * // Update one Dm_dantoc
     * const dm_dantoc = await prisma.dm_dantoc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dm_dantocUpdateArgs>(
      args: SelectSubset<T, dm_dantocUpdateArgs>
    ): CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>>

    /**
     * Delete zero or more Dm_dantocs.
     * @param {dm_dantocDeleteManyArgs} args - Arguments to filter Dm_dantocs to delete.
     * @example
     * // Delete a few Dm_dantocs
     * const { count } = await prisma.dm_dantoc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dm_dantocDeleteManyArgs>(
      args?: SelectSubset<T, dm_dantocDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dm_dantocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_dantocUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dm_dantocs
     * const dm_dantoc = await prisma.dm_dantoc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dm_dantocUpdateManyArgs>(
      args: SelectSubset<T, dm_dantocUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dm_dantoc.
     * @param {dm_dantocUpsertArgs} args - Arguments to update or create a Dm_dantoc.
     * @example
     * // Update or create a Dm_dantoc
     * const dm_dantoc = await prisma.dm_dantoc.upsert({
     *   create: {
     *     // ... data to create a Dm_dantoc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dm_dantoc we want to update
     *   }
     * })
    **/
    upsert<T extends dm_dantocUpsertArgs>(
      args: SelectSubset<T, dm_dantocUpsertArgs>
    ): CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc>, Prisma__dm_dantocClient<dm_dantocGetPayload<T>>>

    /**
     * Count the number of Dm_dantocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_dantocCountArgs} args - Arguments to filter Dm_dantocs to count.
     * @example
     * // Count the number of Dm_dantocs
     * const count = await prisma.dm_dantoc.count({
     *   where: {
     *     // ... the filter for the Dm_dantocs we want to count
     *   }
     * })
    **/
    count<T extends dm_dantocCountArgs>(
      args?: Subset<T, dm_dantocCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dm_dantocCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dm_dantoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dm_dantocAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dm_dantocAggregateArgs>(args: Subset<T, Dm_dantocAggregateArgs>): PrismaPromise<GetDm_dantocAggregateType<T>>

    /**
     * Group by Dm_dantoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dm_dantocGroupByArgs} args - Group by arguments.
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
      T extends Dm_dantocGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dm_dantocGroupByArgs['orderBy'] }
        : { orderBy?: Dm_dantocGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Dm_dantocGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDm_dantocGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for dm_dantoc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dm_dantocClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienFindManyArgs = {}>(args?: Subset<T, hoso_ungvienFindManyArgs>): CheckSelect<T, PrismaPromise<Array<hoso_ungvien>>, PrismaPromise<Array<hoso_ungvienGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * dm_dantoc findUnique
   */
  export type dm_dantocFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * Throw an Error if a dm_dantoc can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which dm_dantoc to fetch.
     * 
    **/
    where: dm_dantocWhereUniqueInput
  }


  /**
   * dm_dantoc findFirst
   */
  export type dm_dantocFindFirstArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * Throw an Error if a dm_dantoc can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which dm_dantoc to fetch.
     * 
    **/
    where?: dm_dantocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_dantocs to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_dantocOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dm_dantocs.
     * 
    **/
    cursor?: dm_dantocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_dantocs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_dantocs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dm_dantocs.
     * 
    **/
    distinct?: Enumerable<Dm_dantocScalarFieldEnum>
  }


  /**
   * dm_dantoc findMany
   */
  export type dm_dantocFindManyArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * Filter, which dm_dantocs to fetch.
     * 
    **/
    where?: dm_dantocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_dantocs to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_dantocOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dm_dantocs.
     * 
    **/
    cursor?: dm_dantocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_dantocs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_dantocs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Dm_dantocScalarFieldEnum>
  }


  /**
   * dm_dantoc create
   */
  export type dm_dantocCreateArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * The data needed to create a dm_dantoc.
     * 
    **/
    data: XOR<dm_dantocCreateInput, dm_dantocUncheckedCreateInput>
  }


  /**
   * dm_dantoc createMany
   */
  export type dm_dantocCreateManyArgs = {
    /**
     * The data used to create many dm_dantocs.
     * 
    **/
    data: Enumerable<dm_dantocCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dm_dantoc update
   */
  export type dm_dantocUpdateArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * The data needed to update a dm_dantoc.
     * 
    **/
    data: XOR<dm_dantocUpdateInput, dm_dantocUncheckedUpdateInput>
    /**
     * Choose, which dm_dantoc to update.
     * 
    **/
    where: dm_dantocWhereUniqueInput
  }


  /**
   * dm_dantoc updateMany
   */
  export type dm_dantocUpdateManyArgs = {
    /**
     * The data used to update dm_dantocs.
     * 
    **/
    data: XOR<dm_dantocUpdateManyMutationInput, dm_dantocUncheckedUpdateManyInput>
    /**
     * Filter which dm_dantocs to update
     * 
    **/
    where?: dm_dantocWhereInput
  }


  /**
   * dm_dantoc upsert
   */
  export type dm_dantocUpsertArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * The filter to search for the dm_dantoc to update in case it exists.
     * 
    **/
    where: dm_dantocWhereUniqueInput
    /**
     * In case the dm_dantoc found by the `where` argument doesn't exist, create a new dm_dantoc with this data.
     * 
    **/
    create: XOR<dm_dantocCreateInput, dm_dantocUncheckedCreateInput>
    /**
     * In case the dm_dantoc was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<dm_dantocUpdateInput, dm_dantocUncheckedUpdateInput>
  }


  /**
   * dm_dantoc delete
   */
  export type dm_dantocDeleteArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
    /**
     * Filter which dm_dantoc to delete.
     * 
    **/
    where: dm_dantocWhereUniqueInput
  }


  /**
   * dm_dantoc deleteMany
   */
  export type dm_dantocDeleteManyArgs = {
    /**
     * Filter which dm_dantocs to delete
     * 
    **/
    where?: dm_dantocWhereInput
  }


  /**
   * dm_dantoc without action
   */
  export type dm_dantocArgs = {
    /**
     * Select specific fields to fetch from the dm_dantoc
     * 
    **/
    select?: dm_dantocSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_dantocInclude | null
  }



  /**
   * Model dm_tongiao
   */


  export type AggregateDm_tongiao = {
    _count: Dm_tongiaoCountAggregateOutputType | null
    _avg: Dm_tongiaoAvgAggregateOutputType | null
    _sum: Dm_tongiaoSumAggregateOutputType | null
    _min: Dm_tongiaoMinAggregateOutputType | null
    _max: Dm_tongiaoMaxAggregateOutputType | null
  }

  export type Dm_tongiaoAvgAggregateOutputType = {
    tongiao_id: number | null
  }

  export type Dm_tongiaoSumAggregateOutputType = {
    tongiao_id: bigint | null
  }

  export type Dm_tongiaoMinAggregateOutputType = {
    tongiao_id: bigint | null
    tongiao_ma: string | null
    tongiao_ten: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dm_tongiaoMaxAggregateOutputType = {
    tongiao_id: bigint | null
    tongiao_ma: string | null
    tongiao_ten: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Dm_tongiaoCountAggregateOutputType = {
    tongiao_id: number
    tongiao_ma: number
    tongiao_ten: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Dm_tongiaoAvgAggregateInputType = {
    tongiao_id?: true
  }

  export type Dm_tongiaoSumAggregateInputType = {
    tongiao_id?: true
  }

  export type Dm_tongiaoMinAggregateInputType = {
    tongiao_id?: true
    tongiao_ma?: true
    tongiao_ten?: true
    created_at?: true
    updated_at?: true
  }

  export type Dm_tongiaoMaxAggregateInputType = {
    tongiao_id?: true
    tongiao_ma?: true
    tongiao_ten?: true
    created_at?: true
    updated_at?: true
  }

  export type Dm_tongiaoCountAggregateInputType = {
    tongiao_id?: true
    tongiao_ma?: true
    tongiao_ten?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Dm_tongiaoAggregateArgs = {
    /**
     * Filter which dm_tongiao to aggregate.
     * 
    **/
    where?: dm_tongiaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_tongiaos to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_tongiaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: dm_tongiaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_tongiaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_tongiaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dm_tongiaos
    **/
    _count?: true | Dm_tongiaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dm_tongiaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dm_tongiaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dm_tongiaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dm_tongiaoMaxAggregateInputType
  }

  export type GetDm_tongiaoAggregateType<T extends Dm_tongiaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDm_tongiao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDm_tongiao[P]>
      : GetScalarType<T[P], AggregateDm_tongiao[P]>
  }




  export type Dm_tongiaoGroupByArgs = {
    where?: dm_tongiaoWhereInput
    orderBy?: Enumerable<dm_tongiaoOrderByWithAggregationInput>
    by: Array<Dm_tongiaoScalarFieldEnum>
    having?: dm_tongiaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dm_tongiaoCountAggregateInputType | true
    _avg?: Dm_tongiaoAvgAggregateInputType
    _sum?: Dm_tongiaoSumAggregateInputType
    _min?: Dm_tongiaoMinAggregateInputType
    _max?: Dm_tongiaoMaxAggregateInputType
  }


  export type Dm_tongiaoGroupByOutputType = {
    tongiao_id: bigint
    tongiao_ma: string
    tongiao_ten: string
    created_at: Date | null
    updated_at: Date | null
    _count: Dm_tongiaoCountAggregateOutputType | null
    _avg: Dm_tongiaoAvgAggregateOutputType | null
    _sum: Dm_tongiaoSumAggregateOutputType | null
    _min: Dm_tongiaoMinAggregateOutputType | null
    _max: Dm_tongiaoMaxAggregateOutputType | null
  }

  type GetDm_tongiaoGroupByPayload<T extends Dm_tongiaoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Dm_tongiaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dm_tongiaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dm_tongiaoGroupByOutputType[P]>
            : GetScalarType<T[P], Dm_tongiaoGroupByOutputType[P]>
        }
      >
    >


  export type dm_tongiaoSelect = {
    tongiao_id?: boolean
    tongiao_ma?: boolean
    tongiao_ten?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienFindManyArgs
    _count?: boolean | Dm_tongiaoCountOutputTypeArgs
  }

  export type dm_tongiaoInclude = {
    hoso_ungvien?: boolean | hoso_ungvienFindManyArgs
    _count?: boolean | Dm_tongiaoCountOutputTypeArgs
  }

  export type dm_tongiaoGetPayload<
    S extends boolean | null | undefined | dm_tongiaoArgs,
    U = keyof S
      > = S extends true
        ? dm_tongiao
    : S extends undefined
    ? never
    : S extends dm_tongiaoArgs | dm_tongiaoFindManyArgs
    ?'include' extends U
    ? dm_tongiao  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? Array < hoso_ungvienGetPayload<S['include'][P]>>  :
        P extends '_count' ? Dm_tongiaoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? Array < hoso_ungvienGetPayload<S['select'][P]>>  :
        P extends '_count' ? Dm_tongiaoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof dm_tongiao ? dm_tongiao[P] : never
  } 
    : dm_tongiao
  : dm_tongiao


  type dm_tongiaoCountArgs = Merge<
    Omit<dm_tongiaoFindManyArgs, 'select' | 'include'> & {
      select?: Dm_tongiaoCountAggregateInputType | true
    }
  >

  export interface dm_tongiaoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dm_tongiao that matches the filter.
     * @param {dm_tongiaoFindUniqueArgs} args - Arguments to find a Dm_tongiao
     * @example
     * // Get one Dm_tongiao
     * const dm_tongiao = await prisma.dm_tongiao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dm_tongiaoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, dm_tongiaoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'dm_tongiao'> extends True ? CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>> : CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao | null >, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T> | null >>

    /**
     * Find the first Dm_tongiao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_tongiaoFindFirstArgs} args - Arguments to find a Dm_tongiao
     * @example
     * // Get one Dm_tongiao
     * const dm_tongiao = await prisma.dm_tongiao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dm_tongiaoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, dm_tongiaoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'dm_tongiao'> extends True ? CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>> : CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao | null >, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T> | null >>

    /**
     * Find zero or more Dm_tongiaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_tongiaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dm_tongiaos
     * const dm_tongiaos = await prisma.dm_tongiao.findMany()
     * 
     * // Get first 10 Dm_tongiaos
     * const dm_tongiaos = await prisma.dm_tongiao.findMany({ take: 10 })
     * 
     * // Only select the `tongiao_id`
     * const dm_tongiaoWithTongiao_idOnly = await prisma.dm_tongiao.findMany({ select: { tongiao_id: true } })
     * 
    **/
    findMany<T extends dm_tongiaoFindManyArgs>(
      args?: SelectSubset<T, dm_tongiaoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<dm_tongiao>>, PrismaPromise<Array<dm_tongiaoGetPayload<T>>>>

    /**
     * Create a Dm_tongiao.
     * @param {dm_tongiaoCreateArgs} args - Arguments to create a Dm_tongiao.
     * @example
     * // Create one Dm_tongiao
     * const Dm_tongiao = await prisma.dm_tongiao.create({
     *   data: {
     *     // ... data to create a Dm_tongiao
     *   }
     * })
     * 
    **/
    create<T extends dm_tongiaoCreateArgs>(
      args: SelectSubset<T, dm_tongiaoCreateArgs>
    ): CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>>

    /**
     * Create many Dm_tongiaos.
     *     @param {dm_tongiaoCreateManyArgs} args - Arguments to create many Dm_tongiaos.
     *     @example
     *     // Create many Dm_tongiaos
     *     const dm_tongiao = await prisma.dm_tongiao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends dm_tongiaoCreateManyArgs>(
      args?: SelectSubset<T, dm_tongiaoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dm_tongiao.
     * @param {dm_tongiaoDeleteArgs} args - Arguments to delete one Dm_tongiao.
     * @example
     * // Delete one Dm_tongiao
     * const Dm_tongiao = await prisma.dm_tongiao.delete({
     *   where: {
     *     // ... filter to delete one Dm_tongiao
     *   }
     * })
     * 
    **/
    delete<T extends dm_tongiaoDeleteArgs>(
      args: SelectSubset<T, dm_tongiaoDeleteArgs>
    ): CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>>

    /**
     * Update one Dm_tongiao.
     * @param {dm_tongiaoUpdateArgs} args - Arguments to update one Dm_tongiao.
     * @example
     * // Update one Dm_tongiao
     * const dm_tongiao = await prisma.dm_tongiao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dm_tongiaoUpdateArgs>(
      args: SelectSubset<T, dm_tongiaoUpdateArgs>
    ): CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>>

    /**
     * Delete zero or more Dm_tongiaos.
     * @param {dm_tongiaoDeleteManyArgs} args - Arguments to filter Dm_tongiaos to delete.
     * @example
     * // Delete a few Dm_tongiaos
     * const { count } = await prisma.dm_tongiao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dm_tongiaoDeleteManyArgs>(
      args?: SelectSubset<T, dm_tongiaoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dm_tongiaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_tongiaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dm_tongiaos
     * const dm_tongiao = await prisma.dm_tongiao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dm_tongiaoUpdateManyArgs>(
      args: SelectSubset<T, dm_tongiaoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dm_tongiao.
     * @param {dm_tongiaoUpsertArgs} args - Arguments to update or create a Dm_tongiao.
     * @example
     * // Update or create a Dm_tongiao
     * const dm_tongiao = await prisma.dm_tongiao.upsert({
     *   create: {
     *     // ... data to create a Dm_tongiao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dm_tongiao we want to update
     *   }
     * })
    **/
    upsert<T extends dm_tongiaoUpsertArgs>(
      args: SelectSubset<T, dm_tongiaoUpsertArgs>
    ): CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao>, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T>>>

    /**
     * Count the number of Dm_tongiaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dm_tongiaoCountArgs} args - Arguments to filter Dm_tongiaos to count.
     * @example
     * // Count the number of Dm_tongiaos
     * const count = await prisma.dm_tongiao.count({
     *   where: {
     *     // ... the filter for the Dm_tongiaos we want to count
     *   }
     * })
    **/
    count<T extends dm_tongiaoCountArgs>(
      args?: Subset<T, dm_tongiaoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dm_tongiaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dm_tongiao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dm_tongiaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dm_tongiaoAggregateArgs>(args: Subset<T, Dm_tongiaoAggregateArgs>): PrismaPromise<GetDm_tongiaoAggregateType<T>>

    /**
     * Group by Dm_tongiao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dm_tongiaoGroupByArgs} args - Group by arguments.
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
      T extends Dm_tongiaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dm_tongiaoGroupByArgs['orderBy'] }
        : { orderBy?: Dm_tongiaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Dm_tongiaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDm_tongiaoGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for dm_tongiao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__dm_tongiaoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienFindManyArgs = {}>(args?: Subset<T, hoso_ungvienFindManyArgs>): CheckSelect<T, PrismaPromise<Array<hoso_ungvien>>, PrismaPromise<Array<hoso_ungvienGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * dm_tongiao findUnique
   */
  export type dm_tongiaoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * Throw an Error if a dm_tongiao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which dm_tongiao to fetch.
     * 
    **/
    where: dm_tongiaoWhereUniqueInput
  }


  /**
   * dm_tongiao findFirst
   */
  export type dm_tongiaoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * Throw an Error if a dm_tongiao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which dm_tongiao to fetch.
     * 
    **/
    where?: dm_tongiaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_tongiaos to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_tongiaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dm_tongiaos.
     * 
    **/
    cursor?: dm_tongiaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_tongiaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_tongiaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dm_tongiaos.
     * 
    **/
    distinct?: Enumerable<Dm_tongiaoScalarFieldEnum>
  }


  /**
   * dm_tongiao findMany
   */
  export type dm_tongiaoFindManyArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * Filter, which dm_tongiaos to fetch.
     * 
    **/
    where?: dm_tongiaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dm_tongiaos to fetch.
     * 
    **/
    orderBy?: Enumerable<dm_tongiaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dm_tongiaos.
     * 
    **/
    cursor?: dm_tongiaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dm_tongiaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dm_tongiaos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Dm_tongiaoScalarFieldEnum>
  }


  /**
   * dm_tongiao create
   */
  export type dm_tongiaoCreateArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * The data needed to create a dm_tongiao.
     * 
    **/
    data: XOR<dm_tongiaoCreateInput, dm_tongiaoUncheckedCreateInput>
  }


  /**
   * dm_tongiao createMany
   */
  export type dm_tongiaoCreateManyArgs = {
    /**
     * The data used to create many dm_tongiaos.
     * 
    **/
    data: Enumerable<dm_tongiaoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * dm_tongiao update
   */
  export type dm_tongiaoUpdateArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * The data needed to update a dm_tongiao.
     * 
    **/
    data: XOR<dm_tongiaoUpdateInput, dm_tongiaoUncheckedUpdateInput>
    /**
     * Choose, which dm_tongiao to update.
     * 
    **/
    where: dm_tongiaoWhereUniqueInput
  }


  /**
   * dm_tongiao updateMany
   */
  export type dm_tongiaoUpdateManyArgs = {
    /**
     * The data used to update dm_tongiaos.
     * 
    **/
    data: XOR<dm_tongiaoUpdateManyMutationInput, dm_tongiaoUncheckedUpdateManyInput>
    /**
     * Filter which dm_tongiaos to update
     * 
    **/
    where?: dm_tongiaoWhereInput
  }


  /**
   * dm_tongiao upsert
   */
  export type dm_tongiaoUpsertArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * The filter to search for the dm_tongiao to update in case it exists.
     * 
    **/
    where: dm_tongiaoWhereUniqueInput
    /**
     * In case the dm_tongiao found by the `where` argument doesn't exist, create a new dm_tongiao with this data.
     * 
    **/
    create: XOR<dm_tongiaoCreateInput, dm_tongiaoUncheckedCreateInput>
    /**
     * In case the dm_tongiao was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<dm_tongiaoUpdateInput, dm_tongiaoUncheckedUpdateInput>
  }


  /**
   * dm_tongiao delete
   */
  export type dm_tongiaoDeleteArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
    /**
     * Filter which dm_tongiao to delete.
     * 
    **/
    where: dm_tongiaoWhereUniqueInput
  }


  /**
   * dm_tongiao deleteMany
   */
  export type dm_tongiaoDeleteManyArgs = {
    /**
     * Filter which dm_tongiaos to delete
     * 
    **/
    where?: dm_tongiaoWhereInput
  }


  /**
   * dm_tongiao without action
   */
  export type dm_tongiaoArgs = {
    /**
     * Select specific fields to fetch from the dm_tongiao
     * 
    **/
    select?: dm_tongiaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: dm_tongiaoInclude | null
  }



  /**
   * Model failed_jobs
   */


  export type AggregateFailed_jobs = {
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  export type Failed_jobsAvgAggregateOutputType = {
    id: number | null
  }

  export type Failed_jobsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Failed_jobsMinAggregateOutputType = {
    id: bigint | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsMaxAggregateOutputType = {
    id: bigint | null
    connection: string | null
    queue: string | null
    payload: string | null
    exception: string | null
    failed_at: Date | null
  }

  export type Failed_jobsCountAggregateOutputType = {
    id: number
    connection: number
    queue: number
    payload: number
    exception: number
    failed_at: number
    _all: number
  }


  export type Failed_jobsAvgAggregateInputType = {
    id?: true
  }

  export type Failed_jobsSumAggregateInputType = {
    id?: true
  }

  export type Failed_jobsMinAggregateInputType = {
    id?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsMaxAggregateInputType = {
    id?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
  }

  export type Failed_jobsCountAggregateInputType = {
    id?: true
    connection?: true
    queue?: true
    payload?: true
    exception?: true
    failed_at?: true
    _all?: true
  }

  export type Failed_jobsAggregateArgs = {
    /**
     * Filter which failed_jobs to aggregate.
     * 
    **/
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<failed_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned failed_jobs
    **/
    _count?: true | Failed_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Failed_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Failed_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Failed_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Failed_jobsMaxAggregateInputType
  }

  export type GetFailed_jobsAggregateType<T extends Failed_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailed_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailed_jobs[P]>
      : GetScalarType<T[P], AggregateFailed_jobs[P]>
  }




  export type Failed_jobsGroupByArgs = {
    where?: failed_jobsWhereInput
    orderBy?: Enumerable<failed_jobsOrderByWithAggregationInput>
    by: Array<Failed_jobsScalarFieldEnum>
    having?: failed_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Failed_jobsCountAggregateInputType | true
    _avg?: Failed_jobsAvgAggregateInputType
    _sum?: Failed_jobsSumAggregateInputType
    _min?: Failed_jobsMinAggregateInputType
    _max?: Failed_jobsMaxAggregateInputType
  }


  export type Failed_jobsGroupByOutputType = {
    id: bigint
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at: Date
    _count: Failed_jobsCountAggregateOutputType | null
    _avg: Failed_jobsAvgAggregateOutputType | null
    _sum: Failed_jobsSumAggregateOutputType | null
    _min: Failed_jobsMinAggregateOutputType | null
    _max: Failed_jobsMaxAggregateOutputType | null
  }

  type GetFailed_jobsGroupByPayload<T extends Failed_jobsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Failed_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Failed_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Failed_jobsGroupByOutputType[P]>
        }
      >
    >


  export type failed_jobsSelect = {
    id?: boolean
    connection?: boolean
    queue?: boolean
    payload?: boolean
    exception?: boolean
    failed_at?: boolean
  }

  export type failed_jobsGetPayload<
    S extends boolean | null | undefined | failed_jobsArgs,
    U = keyof S
      > = S extends true
        ? failed_jobs
    : S extends undefined
    ? never
    : S extends failed_jobsArgs | failed_jobsFindManyArgs
    ?'include' extends U
    ? failed_jobs 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof failed_jobs ? failed_jobs[P] : never
  } 
    : failed_jobs
  : failed_jobs


  type failed_jobsCountArgs = Merge<
    Omit<failed_jobsFindManyArgs, 'select' | 'include'> & {
      select?: Failed_jobsCountAggregateInputType | true
    }
  >

  export interface failed_jobsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Failed_jobs that matches the filter.
     * @param {failed_jobsFindUniqueArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends failed_jobsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, failed_jobsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'failed_jobs'> extends True ? CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>> : CheckSelect<T, Prisma__failed_jobsClient<failed_jobs | null >, Prisma__failed_jobsClient<failed_jobsGetPayload<T> | null >>

    /**
     * Find the first Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindFirstArgs} args - Arguments to find a Failed_jobs
     * @example
     * // Get one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends failed_jobsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, failed_jobsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'failed_jobs'> extends True ? CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>> : CheckSelect<T, Prisma__failed_jobsClient<failed_jobs | null >, Prisma__failed_jobsClient<failed_jobsGetPayload<T> | null >>

    /**
     * Find zero or more Failed_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany()
     * 
     * // Get first 10 Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failed_jobsWithIdOnly = await prisma.failed_jobs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends failed_jobsFindManyArgs>(
      args?: SelectSubset<T, failed_jobsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<failed_jobs>>, PrismaPromise<Array<failed_jobsGetPayload<T>>>>

    /**
     * Create a Failed_jobs.
     * @param {failed_jobsCreateArgs} args - Arguments to create a Failed_jobs.
     * @example
     * // Create one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.create({
     *   data: {
     *     // ... data to create a Failed_jobs
     *   }
     * })
     * 
    **/
    create<T extends failed_jobsCreateArgs>(
      args: SelectSubset<T, failed_jobsCreateArgs>
    ): CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>>

    /**
     * Create many Failed_jobs.
     *     @param {failed_jobsCreateManyArgs} args - Arguments to create many Failed_jobs.
     *     @example
     *     // Create many Failed_jobs
     *     const failed_jobs = await prisma.failed_jobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends failed_jobsCreateManyArgs>(
      args?: SelectSubset<T, failed_jobsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Failed_jobs.
     * @param {failed_jobsDeleteArgs} args - Arguments to delete one Failed_jobs.
     * @example
     * // Delete one Failed_jobs
     * const Failed_jobs = await prisma.failed_jobs.delete({
     *   where: {
     *     // ... filter to delete one Failed_jobs
     *   }
     * })
     * 
    **/
    delete<T extends failed_jobsDeleteArgs>(
      args: SelectSubset<T, failed_jobsDeleteArgs>
    ): CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>>

    /**
     * Update one Failed_jobs.
     * @param {failed_jobsUpdateArgs} args - Arguments to update one Failed_jobs.
     * @example
     * // Update one Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends failed_jobsUpdateArgs>(
      args: SelectSubset<T, failed_jobsUpdateArgs>
    ): CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>>

    /**
     * Delete zero or more Failed_jobs.
     * @param {failed_jobsDeleteManyArgs} args - Arguments to filter Failed_jobs to delete.
     * @example
     * // Delete a few Failed_jobs
     * const { count } = await prisma.failed_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends failed_jobsDeleteManyArgs>(
      args?: SelectSubset<T, failed_jobsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends failed_jobsUpdateManyArgs>(
      args: SelectSubset<T, failed_jobsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Failed_jobs.
     * @param {failed_jobsUpsertArgs} args - Arguments to update or create a Failed_jobs.
     * @example
     * // Update or create a Failed_jobs
     * const failed_jobs = await prisma.failed_jobs.upsert({
     *   create: {
     *     // ... data to create a Failed_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Failed_jobs we want to update
     *   }
     * })
    **/
    upsert<T extends failed_jobsUpsertArgs>(
      args: SelectSubset<T, failed_jobsUpsertArgs>
    ): CheckSelect<T, Prisma__failed_jobsClient<failed_jobs>, Prisma__failed_jobsClient<failed_jobsGetPayload<T>>>

    /**
     * Count the number of Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {failed_jobsCountArgs} args - Arguments to filter Failed_jobs to count.
     * @example
     * // Count the number of Failed_jobs
     * const count = await prisma.failed_jobs.count({
     *   where: {
     *     // ... the filter for the Failed_jobs we want to count
     *   }
     * })
    **/
    count<T extends failed_jobsCountArgs>(
      args?: Subset<T, failed_jobsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Failed_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Failed_jobsAggregateArgs>(args: Subset<T, Failed_jobsAggregateArgs>): PrismaPromise<GetFailed_jobsAggregateType<T>>

    /**
     * Group by Failed_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Failed_jobsGroupByArgs} args - Group by arguments.
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
      T extends Failed_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Failed_jobsGroupByArgs['orderBy'] }
        : { orderBy?: Failed_jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Failed_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailed_jobsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for failed_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__failed_jobsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * failed_jobs findUnique
   */
  export type failed_jobsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * Throw an Error if a failed_jobs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which failed_jobs to fetch.
     * 
    **/
    where: failed_jobsWhereUniqueInput
  }


  /**
   * failed_jobs findFirst
   */
  export type failed_jobsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * Throw an Error if a failed_jobs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which failed_jobs to fetch.
     * 
    **/
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<failed_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for failed_jobs.
     * 
    **/
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of failed_jobs.
     * 
    **/
    distinct?: Enumerable<Failed_jobsScalarFieldEnum>
  }


  /**
   * failed_jobs findMany
   */
  export type failed_jobsFindManyArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * Filter, which failed_jobs to fetch.
     * 
    **/
    where?: failed_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of failed_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<failed_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing failed_jobs.
     * 
    **/
    cursor?: failed_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` failed_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` failed_jobs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Failed_jobsScalarFieldEnum>
  }


  /**
   * failed_jobs create
   */
  export type failed_jobsCreateArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * The data needed to create a failed_jobs.
     * 
    **/
    data: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
  }


  /**
   * failed_jobs createMany
   */
  export type failed_jobsCreateManyArgs = {
    /**
     * The data used to create many failed_jobs.
     * 
    **/
    data: Enumerable<failed_jobsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * failed_jobs update
   */
  export type failed_jobsUpdateArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * The data needed to update a failed_jobs.
     * 
    **/
    data: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
    /**
     * Choose, which failed_jobs to update.
     * 
    **/
    where: failed_jobsWhereUniqueInput
  }


  /**
   * failed_jobs updateMany
   */
  export type failed_jobsUpdateManyArgs = {
    /**
     * The data used to update failed_jobs.
     * 
    **/
    data: XOR<failed_jobsUpdateManyMutationInput, failed_jobsUncheckedUpdateManyInput>
    /**
     * Filter which failed_jobs to update
     * 
    **/
    where?: failed_jobsWhereInput
  }


  /**
   * failed_jobs upsert
   */
  export type failed_jobsUpsertArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * The filter to search for the failed_jobs to update in case it exists.
     * 
    **/
    where: failed_jobsWhereUniqueInput
    /**
     * In case the failed_jobs found by the `where` argument doesn't exist, create a new failed_jobs with this data.
     * 
    **/
    create: XOR<failed_jobsCreateInput, failed_jobsUncheckedCreateInput>
    /**
     * In case the failed_jobs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<failed_jobsUpdateInput, failed_jobsUncheckedUpdateInput>
  }


  /**
   * failed_jobs delete
   */
  export type failed_jobsDeleteArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
    /**
     * Filter which failed_jobs to delete.
     * 
    **/
    where: failed_jobsWhereUniqueInput
  }


  /**
   * failed_jobs deleteMany
   */
  export type failed_jobsDeleteManyArgs = {
    /**
     * Filter which failed_jobs to delete
     * 
    **/
    where?: failed_jobsWhereInput
  }


  /**
   * failed_jobs without action
   */
  export type failed_jobsArgs = {
    /**
     * Select specific fields to fetch from the failed_jobs
     * 
    **/
    select?: failed_jobsSelect | null
  }



  /**
   * Model hoso_ungvien
   */


  export type AggregateHoso_ungvien = {
    _count: Hoso_ungvienCountAggregateOutputType | null
    _avg: Hoso_ungvienAvgAggregateOutputType | null
    _sum: Hoso_ungvienSumAggregateOutputType | null
    _min: Hoso_ungvienMinAggregateOutputType | null
    _max: Hoso_ungvienMaxAggregateOutputType | null
  }

  export type Hoso_ungvienAvgAggregateOutputType = {
    hoso_id: number | null
    dantoc_id: number | null
    tongiao_id: number | null
  }

  export type Hoso_ungvienSumAggregateOutputType = {
    hoso_id: bigint | null
    dantoc_id: bigint | null
    tongiao_id: bigint | null
  }

  export type Hoso_ungvienMinAggregateOutputType = {
    hoso_id: bigint | null
    hoso_ma: string | null
    hoso_ngaynop: Date | null
    hoten_ungvien: string | null
    gioi_tinh: boolean | null
    sdt: string | null
    email: string | null
    CMND: string | null
    que_quan: string | null
    diachi_lienhe: string | null
    tinhtrang_honnhan: boolean | null
    nguoilienhe_sdt: string | null
    nguoilienhe_diachi: string | null
    ngayvao_doan: Date | null
    ngayvao_dang: Date | null
    congviec_truoctuyendung: string | null
    trangthai_tuyendung: string | null
    dantoc_id: bigint | null
    tongiao_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvienMaxAggregateOutputType = {
    hoso_id: bigint | null
    hoso_ma: string | null
    hoso_ngaynop: Date | null
    hoten_ungvien: string | null
    gioi_tinh: boolean | null
    sdt: string | null
    email: string | null
    CMND: string | null
    que_quan: string | null
    diachi_lienhe: string | null
    tinhtrang_honnhan: boolean | null
    nguoilienhe_sdt: string | null
    nguoilienhe_diachi: string | null
    ngayvao_doan: Date | null
    ngayvao_dang: Date | null
    congviec_truoctuyendung: string | null
    trangthai_tuyendung: string | null
    dantoc_id: bigint | null
    tongiao_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvienCountAggregateOutputType = {
    hoso_id: number
    hoso_ma: number
    hoso_ngaynop: number
    hoten_ungvien: number
    gioi_tinh: number
    sdt: number
    email: number
    CMND: number
    que_quan: number
    diachi_lienhe: number
    tinhtrang_honnhan: number
    nguoilienhe_sdt: number
    nguoilienhe_diachi: number
    ngayvao_doan: number
    ngayvao_dang: number
    congviec_truoctuyendung: number
    trangthai_tuyendung: number
    dantoc_id: number
    tongiao_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hoso_ungvienAvgAggregateInputType = {
    hoso_id?: true
    dantoc_id?: true
    tongiao_id?: true
  }

  export type Hoso_ungvienSumAggregateInputType = {
    hoso_id?: true
    dantoc_id?: true
    tongiao_id?: true
  }

  export type Hoso_ungvienMinAggregateInputType = {
    hoso_id?: true
    hoso_ma?: true
    hoso_ngaynop?: true
    hoten_ungvien?: true
    gioi_tinh?: true
    sdt?: true
    email?: true
    CMND?: true
    que_quan?: true
    diachi_lienhe?: true
    tinhtrang_honnhan?: true
    nguoilienhe_sdt?: true
    nguoilienhe_diachi?: true
    ngayvao_doan?: true
    ngayvao_dang?: true
    congviec_truoctuyendung?: true
    trangthai_tuyendung?: true
    dantoc_id?: true
    tongiao_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvienMaxAggregateInputType = {
    hoso_id?: true
    hoso_ma?: true
    hoso_ngaynop?: true
    hoten_ungvien?: true
    gioi_tinh?: true
    sdt?: true
    email?: true
    CMND?: true
    que_quan?: true
    diachi_lienhe?: true
    tinhtrang_honnhan?: true
    nguoilienhe_sdt?: true
    nguoilienhe_diachi?: true
    ngayvao_doan?: true
    ngayvao_dang?: true
    congviec_truoctuyendung?: true
    trangthai_tuyendung?: true
    dantoc_id?: true
    tongiao_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvienCountAggregateInputType = {
    hoso_id?: true
    hoso_ma?: true
    hoso_ngaynop?: true
    hoten_ungvien?: true
    gioi_tinh?: true
    sdt?: true
    email?: true
    CMND?: true
    que_quan?: true
    diachi_lienhe?: true
    tinhtrang_honnhan?: true
    nguoilienhe_sdt?: true
    nguoilienhe_diachi?: true
    ngayvao_doan?: true
    ngayvao_dang?: true
    congviec_truoctuyendung?: true
    trangthai_tuyendung?: true
    dantoc_id?: true
    tongiao_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hoso_ungvienAggregateArgs = {
    /**
     * Filter which hoso_ungvien to aggregate.
     * 
    **/
    where?: hoso_ungvienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungviens to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvienOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hoso_ungvienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungviens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungviens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hoso_ungviens
    **/
    _count?: true | Hoso_ungvienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hoso_ungvienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hoso_ungvienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hoso_ungvienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hoso_ungvienMaxAggregateInputType
  }

  export type GetHoso_ungvienAggregateType<T extends Hoso_ungvienAggregateArgs> = {
        [P in keyof T & keyof AggregateHoso_ungvien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoso_ungvien[P]>
      : GetScalarType<T[P], AggregateHoso_ungvien[P]>
  }




  export type Hoso_ungvienGroupByArgs = {
    where?: hoso_ungvienWhereInput
    orderBy?: Enumerable<hoso_ungvienOrderByWithAggregationInput>
    by: Array<Hoso_ungvienScalarFieldEnum>
    having?: hoso_ungvienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hoso_ungvienCountAggregateInputType | true
    _avg?: Hoso_ungvienAvgAggregateInputType
    _sum?: Hoso_ungvienSumAggregateInputType
    _min?: Hoso_ungvienMinAggregateInputType
    _max?: Hoso_ungvienMaxAggregateInputType
  }


  export type Hoso_ungvienGroupByOutputType = {
    hoso_id: bigint
    hoso_ma: string
    hoso_ngaynop: Date
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date
    ngayvao_dang: Date
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint
    tongiao_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Hoso_ungvienCountAggregateOutputType | null
    _avg: Hoso_ungvienAvgAggregateOutputType | null
    _sum: Hoso_ungvienSumAggregateOutputType | null
    _min: Hoso_ungvienMinAggregateOutputType | null
    _max: Hoso_ungvienMaxAggregateOutputType | null
  }

  type GetHoso_ungvienGroupByPayload<T extends Hoso_ungvienGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Hoso_ungvienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hoso_ungvienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hoso_ungvienGroupByOutputType[P]>
            : GetScalarType<T[P], Hoso_ungvienGroupByOutputType[P]>
        }
      >
    >


  export type hoso_ungvienSelect = {
    hoso_id?: boolean
    hoso_ma?: boolean
    hoso_ngaynop?: boolean
    hoten_ungvien?: boolean
    gioi_tinh?: boolean
    sdt?: boolean
    email?: boolean
    CMND?: boolean
    que_quan?: boolean
    diachi_lienhe?: boolean
    tinhtrang_honnhan?: boolean
    nguoilienhe_sdt?: boolean
    nguoilienhe_diachi?: boolean
    ngayvao_doan?: boolean
    ngayvao_dang?: boolean
    congviec_truoctuyendung?: boolean
    trangthai_tuyendung?: boolean
    dantoc_id?: boolean
    tongiao_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    dm_dantoc?: boolean | dm_dantocArgs
    dm_tongiao?: boolean | dm_tongiaoArgs
    hoso_ungvien_thongtin_giadinh?: boolean | hoso_ungvien_thongtin_giadinhFindManyArgs
    quatrinh_congtac?: boolean | quatrinh_congtacFindManyArgs
    quatrinh_hoctap?: boolean | quatrinh_hoctapFindManyArgs
    ungtuyen?: boolean | ungtuyenFindManyArgs
    _count?: boolean | Hoso_ungvienCountOutputTypeArgs
  }

  export type hoso_ungvienInclude = {
    dm_dantoc?: boolean | dm_dantocArgs
    dm_tongiao?: boolean | dm_tongiaoArgs
    hoso_ungvien_thongtin_giadinh?: boolean | hoso_ungvien_thongtin_giadinhFindManyArgs
    quatrinh_congtac?: boolean | quatrinh_congtacFindManyArgs
    quatrinh_hoctap?: boolean | quatrinh_hoctapFindManyArgs
    ungtuyen?: boolean | ungtuyenFindManyArgs
    _count?: boolean | Hoso_ungvienCountOutputTypeArgs
  }

  export type hoso_ungvienGetPayload<
    S extends boolean | null | undefined | hoso_ungvienArgs,
    U = keyof S
      > = S extends true
        ? hoso_ungvien
    : S extends undefined
    ? never
    : S extends hoso_ungvienArgs | hoso_ungvienFindManyArgs
    ?'include' extends U
    ? hoso_ungvien  & {
    [P in TrueKeys<S['include']>]:
        P extends 'dm_dantoc' ? dm_dantocGetPayload<S['include'][P]> :
        P extends 'dm_tongiao' ? dm_tongiaoGetPayload<S['include'][P]> :
        P extends 'hoso_ungvien_thongtin_giadinh' ? Array < hoso_ungvien_thongtin_giadinhGetPayload<S['include'][P]>>  :
        P extends 'quatrinh_congtac' ? Array < quatrinh_congtacGetPayload<S['include'][P]>>  :
        P extends 'quatrinh_hoctap' ? Array < quatrinh_hoctapGetPayload<S['include'][P]>>  :
        P extends 'ungtuyen' ? Array < ungtuyenGetPayload<S['include'][P]>>  :
        P extends '_count' ? Hoso_ungvienCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'dm_dantoc' ? dm_dantocGetPayload<S['select'][P]> :
        P extends 'dm_tongiao' ? dm_tongiaoGetPayload<S['select'][P]> :
        P extends 'hoso_ungvien_thongtin_giadinh' ? Array < hoso_ungvien_thongtin_giadinhGetPayload<S['select'][P]>>  :
        P extends 'quatrinh_congtac' ? Array < quatrinh_congtacGetPayload<S['select'][P]>>  :
        P extends 'quatrinh_hoctap' ? Array < quatrinh_hoctapGetPayload<S['select'][P]>>  :
        P extends 'ungtuyen' ? Array < ungtuyenGetPayload<S['select'][P]>>  :
        P extends '_count' ? Hoso_ungvienCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof hoso_ungvien ? hoso_ungvien[P] : never
  } 
    : hoso_ungvien
  : hoso_ungvien


  type hoso_ungvienCountArgs = Merge<
    Omit<hoso_ungvienFindManyArgs, 'select' | 'include'> & {
      select?: Hoso_ungvienCountAggregateInputType | true
    }
  >

  export interface hoso_ungvienDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hoso_ungvien that matches the filter.
     * @param {hoso_ungvienFindUniqueArgs} args - Arguments to find a Hoso_ungvien
     * @example
     * // Get one Hoso_ungvien
     * const hoso_ungvien = await prisma.hoso_ungvien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoso_ungvienFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hoso_ungvienFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hoso_ungvien'> extends True ? CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>

    /**
     * Find the first Hoso_ungvien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvienFindFirstArgs} args - Arguments to find a Hoso_ungvien
     * @example
     * // Get one Hoso_ungvien
     * const hoso_ungvien = await prisma.hoso_ungvien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoso_ungvienFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hoso_ungvienFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hoso_ungvien'> extends True ? CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>

    /**
     * Find zero or more Hoso_ungviens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvienFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoso_ungviens
     * const hoso_ungviens = await prisma.hoso_ungvien.findMany()
     * 
     * // Get first 10 Hoso_ungviens
     * const hoso_ungviens = await prisma.hoso_ungvien.findMany({ take: 10 })
     * 
     * // Only select the `hoso_id`
     * const hoso_ungvienWithHoso_idOnly = await prisma.hoso_ungvien.findMany({ select: { hoso_id: true } })
     * 
    **/
    findMany<T extends hoso_ungvienFindManyArgs>(
      args?: SelectSubset<T, hoso_ungvienFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hoso_ungvien>>, PrismaPromise<Array<hoso_ungvienGetPayload<T>>>>

    /**
     * Create a Hoso_ungvien.
     * @param {hoso_ungvienCreateArgs} args - Arguments to create a Hoso_ungvien.
     * @example
     * // Create one Hoso_ungvien
     * const Hoso_ungvien = await prisma.hoso_ungvien.create({
     *   data: {
     *     // ... data to create a Hoso_ungvien
     *   }
     * })
     * 
    **/
    create<T extends hoso_ungvienCreateArgs>(
      args: SelectSubset<T, hoso_ungvienCreateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>>

    /**
     * Create many Hoso_ungviens.
     *     @param {hoso_ungvienCreateManyArgs} args - Arguments to create many Hoso_ungviens.
     *     @example
     *     // Create many Hoso_ungviens
     *     const hoso_ungvien = await prisma.hoso_ungvien.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hoso_ungvienCreateManyArgs>(
      args?: SelectSubset<T, hoso_ungvienCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hoso_ungvien.
     * @param {hoso_ungvienDeleteArgs} args - Arguments to delete one Hoso_ungvien.
     * @example
     * // Delete one Hoso_ungvien
     * const Hoso_ungvien = await prisma.hoso_ungvien.delete({
     *   where: {
     *     // ... filter to delete one Hoso_ungvien
     *   }
     * })
     * 
    **/
    delete<T extends hoso_ungvienDeleteArgs>(
      args: SelectSubset<T, hoso_ungvienDeleteArgs>
    ): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>>

    /**
     * Update one Hoso_ungvien.
     * @param {hoso_ungvienUpdateArgs} args - Arguments to update one Hoso_ungvien.
     * @example
     * // Update one Hoso_ungvien
     * const hoso_ungvien = await prisma.hoso_ungvien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoso_ungvienUpdateArgs>(
      args: SelectSubset<T, hoso_ungvienUpdateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>>

    /**
     * Delete zero or more Hoso_ungviens.
     * @param {hoso_ungvienDeleteManyArgs} args - Arguments to filter Hoso_ungviens to delete.
     * @example
     * // Delete a few Hoso_ungviens
     * const { count } = await prisma.hoso_ungvien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoso_ungvienDeleteManyArgs>(
      args?: SelectSubset<T, hoso_ungvienDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoso_ungviens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoso_ungviens
     * const hoso_ungvien = await prisma.hoso_ungvien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoso_ungvienUpdateManyArgs>(
      args: SelectSubset<T, hoso_ungvienUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoso_ungvien.
     * @param {hoso_ungvienUpsertArgs} args - Arguments to update or create a Hoso_ungvien.
     * @example
     * // Update or create a Hoso_ungvien
     * const hoso_ungvien = await prisma.hoso_ungvien.upsert({
     *   create: {
     *     // ... data to create a Hoso_ungvien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoso_ungvien we want to update
     *   }
     * })
    **/
    upsert<T extends hoso_ungvienUpsertArgs>(
      args: SelectSubset<T, hoso_ungvienUpsertArgs>
    ): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien>, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T>>>

    /**
     * Count the number of Hoso_ungviens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvienCountArgs} args - Arguments to filter Hoso_ungviens to count.
     * @example
     * // Count the number of Hoso_ungviens
     * const count = await prisma.hoso_ungvien.count({
     *   where: {
     *     // ... the filter for the Hoso_ungviens we want to count
     *   }
     * })
    **/
    count<T extends hoso_ungvienCountArgs>(
      args?: Subset<T, hoso_ungvienCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hoso_ungvienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoso_ungvien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hoso_ungvienAggregateArgs>(args: Subset<T, Hoso_ungvienAggregateArgs>): PrismaPromise<GetHoso_ungvienAggregateType<T>>

    /**
     * Group by Hoso_ungvien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvienGroupByArgs} args - Group by arguments.
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
      T extends Hoso_ungvienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hoso_ungvienGroupByArgs['orderBy'] }
        : { orderBy?: Hoso_ungvienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Hoso_ungvienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoso_ungvienGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hoso_ungvien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hoso_ungvienClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dm_dantoc<T extends dm_dantocArgs = {}>(args?: Subset<T, dm_dantocArgs>): CheckSelect<T, Prisma__dm_dantocClient<dm_dantoc | null >, Prisma__dm_dantocClient<dm_dantocGetPayload<T> | null >>;

    dm_tongiao<T extends dm_tongiaoArgs = {}>(args?: Subset<T, dm_tongiaoArgs>): CheckSelect<T, Prisma__dm_tongiaoClient<dm_tongiao | null >, Prisma__dm_tongiaoClient<dm_tongiaoGetPayload<T> | null >>;

    hoso_ungvien_thongtin_giadinh<T extends hoso_ungvien_thongtin_giadinhFindManyArgs = {}>(args?: Subset<T, hoso_ungvien_thongtin_giadinhFindManyArgs>): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_thongtin_giadinh>>, PrismaPromise<Array<hoso_ungvien_thongtin_giadinhGetPayload<T>>>>;

    quatrinh_congtac<T extends quatrinh_congtacFindManyArgs = {}>(args?: Subset<T, quatrinh_congtacFindManyArgs>): CheckSelect<T, PrismaPromise<Array<quatrinh_congtac>>, PrismaPromise<Array<quatrinh_congtacGetPayload<T>>>>;

    quatrinh_hoctap<T extends quatrinh_hoctapFindManyArgs = {}>(args?: Subset<T, quatrinh_hoctapFindManyArgs>): CheckSelect<T, PrismaPromise<Array<quatrinh_hoctap>>, PrismaPromise<Array<quatrinh_hoctapGetPayload<T>>>>;

    ungtuyen<T extends ungtuyenFindManyArgs = {}>(args?: Subset<T, ungtuyenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ungtuyen>>, PrismaPromise<Array<ungtuyenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hoso_ungvien findUnique
   */
  export type hoso_ungvienFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * Throw an Error if a hoso_ungvien can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien to fetch.
     * 
    **/
    where: hoso_ungvienWhereUniqueInput
  }


  /**
   * hoso_ungvien findFirst
   */
  export type hoso_ungvienFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * Throw an Error if a hoso_ungvien can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien to fetch.
     * 
    **/
    where?: hoso_ungvienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungviens to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvienOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hoso_ungviens.
     * 
    **/
    cursor?: hoso_ungvienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungviens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungviens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hoso_ungviens.
     * 
    **/
    distinct?: Enumerable<Hoso_ungvienScalarFieldEnum>
  }


  /**
   * hoso_ungvien findMany
   */
  export type hoso_ungvienFindManyArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * Filter, which hoso_ungviens to fetch.
     * 
    **/
    where?: hoso_ungvienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungviens to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvienOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hoso_ungviens.
     * 
    **/
    cursor?: hoso_ungvienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungviens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungviens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Hoso_ungvienScalarFieldEnum>
  }


  /**
   * hoso_ungvien create
   */
  export type hoso_ungvienCreateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * The data needed to create a hoso_ungvien.
     * 
    **/
    data: XOR<hoso_ungvienCreateInput, hoso_ungvienUncheckedCreateInput>
  }


  /**
   * hoso_ungvien createMany
   */
  export type hoso_ungvienCreateManyArgs = {
    /**
     * The data used to create many hoso_ungviens.
     * 
    **/
    data: Enumerable<hoso_ungvienCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hoso_ungvien update
   */
  export type hoso_ungvienUpdateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * The data needed to update a hoso_ungvien.
     * 
    **/
    data: XOR<hoso_ungvienUpdateInput, hoso_ungvienUncheckedUpdateInput>
    /**
     * Choose, which hoso_ungvien to update.
     * 
    **/
    where: hoso_ungvienWhereUniqueInput
  }


  /**
   * hoso_ungvien updateMany
   */
  export type hoso_ungvienUpdateManyArgs = {
    /**
     * The data used to update hoso_ungviens.
     * 
    **/
    data: XOR<hoso_ungvienUpdateManyMutationInput, hoso_ungvienUncheckedUpdateManyInput>
    /**
     * Filter which hoso_ungviens to update
     * 
    **/
    where?: hoso_ungvienWhereInput
  }


  /**
   * hoso_ungvien upsert
   */
  export type hoso_ungvienUpsertArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * The filter to search for the hoso_ungvien to update in case it exists.
     * 
    **/
    where: hoso_ungvienWhereUniqueInput
    /**
     * In case the hoso_ungvien found by the `where` argument doesn't exist, create a new hoso_ungvien with this data.
     * 
    **/
    create: XOR<hoso_ungvienCreateInput, hoso_ungvienUncheckedCreateInput>
    /**
     * In case the hoso_ungvien was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hoso_ungvienUpdateInput, hoso_ungvienUncheckedUpdateInput>
  }


  /**
   * hoso_ungvien delete
   */
  export type hoso_ungvienDeleteArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
    /**
     * Filter which hoso_ungvien to delete.
     * 
    **/
    where: hoso_ungvienWhereUniqueInput
  }


  /**
   * hoso_ungvien deleteMany
   */
  export type hoso_ungvienDeleteManyArgs = {
    /**
     * Filter which hoso_ungviens to delete
     * 
    **/
    where?: hoso_ungvienWhereInput
  }


  /**
   * hoso_ungvien without action
   */
  export type hoso_ungvienArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien
     * 
    **/
    select?: hoso_ungvienSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvienInclude | null
  }



  /**
   * Model hoso_ungvien_cauhoi_tuyendung
   */


  export type AggregateHoso_ungvien_cauhoi_tuyendung = {
    _count: Hoso_ungvien_cauhoi_tuyendungCountAggregateOutputType | null
    _avg: Hoso_ungvien_cauhoi_tuyendungAvgAggregateOutputType | null
    _sum: Hoso_ungvien_cauhoi_tuyendungSumAggregateOutputType | null
    _min: Hoso_ungvien_cauhoi_tuyendungMinAggregateOutputType | null
    _max: Hoso_ungvien_cauhoi_tuyendungMaxAggregateOutputType | null
  }

  export type Hoso_ungvien_cauhoi_tuyendungAvgAggregateOutputType = {
    cauhoi_id: number | null
  }

  export type Hoso_ungvien_cauhoi_tuyendungSumAggregateOutputType = {
    cauhoi_id: bigint | null
  }

  export type Hoso_ungvien_cauhoi_tuyendungMinAggregateOutputType = {
    cauhoi_id: bigint | null
    cauhoi_noidung: string | null
    cauhoi_trangthai: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_cauhoi_tuyendungMaxAggregateOutputType = {
    cauhoi_id: bigint | null
    cauhoi_noidung: string | null
    cauhoi_trangthai: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_cauhoi_tuyendungCountAggregateOutputType = {
    cauhoi_id: number
    cauhoi_noidung: number
    cauhoi_trangthai: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hoso_ungvien_cauhoi_tuyendungAvgAggregateInputType = {
    cauhoi_id?: true
  }

  export type Hoso_ungvien_cauhoi_tuyendungSumAggregateInputType = {
    cauhoi_id?: true
  }

  export type Hoso_ungvien_cauhoi_tuyendungMinAggregateInputType = {
    cauhoi_id?: true
    cauhoi_noidung?: true
    cauhoi_trangthai?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_cauhoi_tuyendungMaxAggregateInputType = {
    cauhoi_id?: true
    cauhoi_noidung?: true
    cauhoi_trangthai?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_cauhoi_tuyendungCountAggregateInputType = {
    cauhoi_id?: true
    cauhoi_noidung?: true
    cauhoi_trangthai?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hoso_ungvien_cauhoi_tuyendungAggregateArgs = {
    /**
     * Filter which hoso_ungvien_cauhoi_tuyendung to aggregate.
     * 
    **/
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_cauhoi_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_cauhoi_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_cauhoi_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hoso_ungvien_cauhoi_tuyendungs
    **/
    _count?: true | Hoso_ungvien_cauhoi_tuyendungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hoso_ungvien_cauhoi_tuyendungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hoso_ungvien_cauhoi_tuyendungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hoso_ungvien_cauhoi_tuyendungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hoso_ungvien_cauhoi_tuyendungMaxAggregateInputType
  }

  export type GetHoso_ungvien_cauhoi_tuyendungAggregateType<T extends Hoso_ungvien_cauhoi_tuyendungAggregateArgs> = {
        [P in keyof T & keyof AggregateHoso_ungvien_cauhoi_tuyendung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoso_ungvien_cauhoi_tuyendung[P]>
      : GetScalarType<T[P], AggregateHoso_ungvien_cauhoi_tuyendung[P]>
  }




  export type Hoso_ungvien_cauhoi_tuyendungGroupByArgs = {
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
    orderBy?: Enumerable<hoso_ungvien_cauhoi_tuyendungOrderByWithAggregationInput>
    by: Array<Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum>
    having?: hoso_ungvien_cauhoi_tuyendungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hoso_ungvien_cauhoi_tuyendungCountAggregateInputType | true
    _avg?: Hoso_ungvien_cauhoi_tuyendungAvgAggregateInputType
    _sum?: Hoso_ungvien_cauhoi_tuyendungSumAggregateInputType
    _min?: Hoso_ungvien_cauhoi_tuyendungMinAggregateInputType
    _max?: Hoso_ungvien_cauhoi_tuyendungMaxAggregateInputType
  }


  export type Hoso_ungvien_cauhoi_tuyendungGroupByOutputType = {
    cauhoi_id: bigint
    cauhoi_noidung: string
    cauhoi_trangthai: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: Hoso_ungvien_cauhoi_tuyendungCountAggregateOutputType | null
    _avg: Hoso_ungvien_cauhoi_tuyendungAvgAggregateOutputType | null
    _sum: Hoso_ungvien_cauhoi_tuyendungSumAggregateOutputType | null
    _min: Hoso_ungvien_cauhoi_tuyendungMinAggregateOutputType | null
    _max: Hoso_ungvien_cauhoi_tuyendungMaxAggregateOutputType | null
  }

  type GetHoso_ungvien_cauhoi_tuyendungGroupByPayload<T extends Hoso_ungvien_cauhoi_tuyendungGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Hoso_ungvien_cauhoi_tuyendungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hoso_ungvien_cauhoi_tuyendungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hoso_ungvien_cauhoi_tuyendungGroupByOutputType[P]>
            : GetScalarType<T[P], Hoso_ungvien_cauhoi_tuyendungGroupByOutputType[P]>
        }
      >
    >


  export type hoso_ungvien_cauhoi_tuyendungSelect = {
    cauhoi_id?: boolean
    cauhoi_noidung?: boolean
    cauhoi_trangthai?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type hoso_ungvien_cauhoi_tuyendungGetPayload<
    S extends boolean | null | undefined | hoso_ungvien_cauhoi_tuyendungArgs,
    U = keyof S
      > = S extends true
        ? hoso_ungvien_cauhoi_tuyendung
    : S extends undefined
    ? never
    : S extends hoso_ungvien_cauhoi_tuyendungArgs | hoso_ungvien_cauhoi_tuyendungFindManyArgs
    ?'include' extends U
    ? hoso_ungvien_cauhoi_tuyendung 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof hoso_ungvien_cauhoi_tuyendung ? hoso_ungvien_cauhoi_tuyendung[P] : never
  } 
    : hoso_ungvien_cauhoi_tuyendung
  : hoso_ungvien_cauhoi_tuyendung


  type hoso_ungvien_cauhoi_tuyendungCountArgs = Merge<
    Omit<hoso_ungvien_cauhoi_tuyendungFindManyArgs, 'select' | 'include'> & {
      select?: Hoso_ungvien_cauhoi_tuyendungCountAggregateInputType | true
    }
  >

  export interface hoso_ungvien_cauhoi_tuyendungDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hoso_ungvien_cauhoi_tuyendung that matches the filter.
     * @param {hoso_ungvien_cauhoi_tuyendungFindUniqueArgs} args - Arguments to find a Hoso_ungvien_cauhoi_tuyendung
     * @example
     * // Get one Hoso_ungvien_cauhoi_tuyendung
     * const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoso_ungvien_cauhoi_tuyendungFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hoso_ungvien_cauhoi_tuyendung'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung | null >, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T> | null >>

    /**
     * Find the first Hoso_ungvien_cauhoi_tuyendung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_cauhoi_tuyendungFindFirstArgs} args - Arguments to find a Hoso_ungvien_cauhoi_tuyendung
     * @example
     * // Get one Hoso_ungvien_cauhoi_tuyendung
     * const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoso_ungvien_cauhoi_tuyendungFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hoso_ungvien_cauhoi_tuyendung'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung | null >, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T> | null >>

    /**
     * Find zero or more Hoso_ungvien_cauhoi_tuyendungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_cauhoi_tuyendungFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoso_ungvien_cauhoi_tuyendungs
     * const hoso_ungvien_cauhoi_tuyendungs = await prisma.hoso_ungvien_cauhoi_tuyendung.findMany()
     * 
     * // Get first 10 Hoso_ungvien_cauhoi_tuyendungs
     * const hoso_ungvien_cauhoi_tuyendungs = await prisma.hoso_ungvien_cauhoi_tuyendung.findMany({ take: 10 })
     * 
     * // Only select the `cauhoi_id`
     * const hoso_ungvien_cauhoi_tuyendungWithCauhoi_idOnly = await prisma.hoso_ungvien_cauhoi_tuyendung.findMany({ select: { cauhoi_id: true } })
     * 
    **/
    findMany<T extends hoso_ungvien_cauhoi_tuyendungFindManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_cauhoi_tuyendung>>, PrismaPromise<Array<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>>>

    /**
     * Create a Hoso_ungvien_cauhoi_tuyendung.
     * @param {hoso_ungvien_cauhoi_tuyendungCreateArgs} args - Arguments to create a Hoso_ungvien_cauhoi_tuyendung.
     * @example
     * // Create one Hoso_ungvien_cauhoi_tuyendung
     * const Hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.create({
     *   data: {
     *     // ... data to create a Hoso_ungvien_cauhoi_tuyendung
     *   }
     * })
     * 
    **/
    create<T extends hoso_ungvien_cauhoi_tuyendungCreateArgs>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungCreateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>>

    /**
     * Create many Hoso_ungvien_cauhoi_tuyendungs.
     *     @param {hoso_ungvien_cauhoi_tuyendungCreateManyArgs} args - Arguments to create many Hoso_ungvien_cauhoi_tuyendungs.
     *     @example
     *     // Create many Hoso_ungvien_cauhoi_tuyendungs
     *     const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hoso_ungvien_cauhoi_tuyendungCreateManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hoso_ungvien_cauhoi_tuyendung.
     * @param {hoso_ungvien_cauhoi_tuyendungDeleteArgs} args - Arguments to delete one Hoso_ungvien_cauhoi_tuyendung.
     * @example
     * // Delete one Hoso_ungvien_cauhoi_tuyendung
     * const Hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.delete({
     *   where: {
     *     // ... filter to delete one Hoso_ungvien_cauhoi_tuyendung
     *   }
     * })
     * 
    **/
    delete<T extends hoso_ungvien_cauhoi_tuyendungDeleteArgs>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungDeleteArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>>

    /**
     * Update one Hoso_ungvien_cauhoi_tuyendung.
     * @param {hoso_ungvien_cauhoi_tuyendungUpdateArgs} args - Arguments to update one Hoso_ungvien_cauhoi_tuyendung.
     * @example
     * // Update one Hoso_ungvien_cauhoi_tuyendung
     * const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoso_ungvien_cauhoi_tuyendungUpdateArgs>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungUpdateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>>

    /**
     * Delete zero or more Hoso_ungvien_cauhoi_tuyendungs.
     * @param {hoso_ungvien_cauhoi_tuyendungDeleteManyArgs} args - Arguments to filter Hoso_ungvien_cauhoi_tuyendungs to delete.
     * @example
     * // Delete a few Hoso_ungvien_cauhoi_tuyendungs
     * const { count } = await prisma.hoso_ungvien_cauhoi_tuyendung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoso_ungvien_cauhoi_tuyendungDeleteManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoso_ungvien_cauhoi_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_cauhoi_tuyendungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoso_ungvien_cauhoi_tuyendungs
     * const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoso_ungvien_cauhoi_tuyendungUpdateManyArgs>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoso_ungvien_cauhoi_tuyendung.
     * @param {hoso_ungvien_cauhoi_tuyendungUpsertArgs} args - Arguments to update or create a Hoso_ungvien_cauhoi_tuyendung.
     * @example
     * // Update or create a Hoso_ungvien_cauhoi_tuyendung
     * const hoso_ungvien_cauhoi_tuyendung = await prisma.hoso_ungvien_cauhoi_tuyendung.upsert({
     *   create: {
     *     // ... data to create a Hoso_ungvien_cauhoi_tuyendung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoso_ungvien_cauhoi_tuyendung we want to update
     *   }
     * })
    **/
    upsert<T extends hoso_ungvien_cauhoi_tuyendungUpsertArgs>(
      args: SelectSubset<T, hoso_ungvien_cauhoi_tuyendungUpsertArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendung>, Prisma__hoso_ungvien_cauhoi_tuyendungClient<hoso_ungvien_cauhoi_tuyendungGetPayload<T>>>

    /**
     * Count the number of Hoso_ungvien_cauhoi_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_cauhoi_tuyendungCountArgs} args - Arguments to filter Hoso_ungvien_cauhoi_tuyendungs to count.
     * @example
     * // Count the number of Hoso_ungvien_cauhoi_tuyendungs
     * const count = await prisma.hoso_ungvien_cauhoi_tuyendung.count({
     *   where: {
     *     // ... the filter for the Hoso_ungvien_cauhoi_tuyendungs we want to count
     *   }
     * })
    **/
    count<T extends hoso_ungvien_cauhoi_tuyendungCountArgs>(
      args?: Subset<T, hoso_ungvien_cauhoi_tuyendungCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hoso_ungvien_cauhoi_tuyendungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoso_ungvien_cauhoi_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_cauhoi_tuyendungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hoso_ungvien_cauhoi_tuyendungAggregateArgs>(args: Subset<T, Hoso_ungvien_cauhoi_tuyendungAggregateArgs>): PrismaPromise<GetHoso_ungvien_cauhoi_tuyendungAggregateType<T>>

    /**
     * Group by Hoso_ungvien_cauhoi_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_cauhoi_tuyendungGroupByArgs} args - Group by arguments.
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
      T extends Hoso_ungvien_cauhoi_tuyendungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hoso_ungvien_cauhoi_tuyendungGroupByArgs['orderBy'] }
        : { orderBy?: Hoso_ungvien_cauhoi_tuyendungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Hoso_ungvien_cauhoi_tuyendungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoso_ungvien_cauhoi_tuyendungGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hoso_ungvien_cauhoi_tuyendung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hoso_ungvien_cauhoi_tuyendungClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hoso_ungvien_cauhoi_tuyendung findUnique
   */
  export type hoso_ungvien_cauhoi_tuyendungFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * Throw an Error if a hoso_ungvien_cauhoi_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_cauhoi_tuyendung to fetch.
     * 
    **/
    where: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung findFirst
   */
  export type hoso_ungvien_cauhoi_tuyendungFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * Throw an Error if a hoso_ungvien_cauhoi_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_cauhoi_tuyendung to fetch.
     * 
    **/
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_cauhoi_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_cauhoi_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    cursor?: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_cauhoi_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    distinct?: Enumerable<Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum>
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung findMany
   */
  export type hoso_ungvien_cauhoi_tuyendungFindManyArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * Filter, which hoso_ungvien_cauhoi_tuyendungs to fetch.
     * 
    **/
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_cauhoi_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_cauhoi_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    cursor?: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_cauhoi_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum>
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung create
   */
  export type hoso_ungvien_cauhoi_tuyendungCreateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * The data needed to create a hoso_ungvien_cauhoi_tuyendung.
     * 
    **/
    data: XOR<hoso_ungvien_cauhoi_tuyendungCreateInput, hoso_ungvien_cauhoi_tuyendungUncheckedCreateInput>
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung createMany
   */
  export type hoso_ungvien_cauhoi_tuyendungCreateManyArgs = {
    /**
     * The data used to create many hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    data: Enumerable<hoso_ungvien_cauhoi_tuyendungCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung update
   */
  export type hoso_ungvien_cauhoi_tuyendungUpdateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * The data needed to update a hoso_ungvien_cauhoi_tuyendung.
     * 
    **/
    data: XOR<hoso_ungvien_cauhoi_tuyendungUpdateInput, hoso_ungvien_cauhoi_tuyendungUncheckedUpdateInput>
    /**
     * Choose, which hoso_ungvien_cauhoi_tuyendung to update.
     * 
    **/
    where: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung updateMany
   */
  export type hoso_ungvien_cauhoi_tuyendungUpdateManyArgs = {
    /**
     * The data used to update hoso_ungvien_cauhoi_tuyendungs.
     * 
    **/
    data: XOR<hoso_ungvien_cauhoi_tuyendungUpdateManyMutationInput, hoso_ungvien_cauhoi_tuyendungUncheckedUpdateManyInput>
    /**
     * Filter which hoso_ungvien_cauhoi_tuyendungs to update
     * 
    **/
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung upsert
   */
  export type hoso_ungvien_cauhoi_tuyendungUpsertArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * The filter to search for the hoso_ungvien_cauhoi_tuyendung to update in case it exists.
     * 
    **/
    where: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
    /**
     * In case the hoso_ungvien_cauhoi_tuyendung found by the `where` argument doesn't exist, create a new hoso_ungvien_cauhoi_tuyendung with this data.
     * 
    **/
    create: XOR<hoso_ungvien_cauhoi_tuyendungCreateInput, hoso_ungvien_cauhoi_tuyendungUncheckedCreateInput>
    /**
     * In case the hoso_ungvien_cauhoi_tuyendung was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hoso_ungvien_cauhoi_tuyendungUpdateInput, hoso_ungvien_cauhoi_tuyendungUncheckedUpdateInput>
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung delete
   */
  export type hoso_ungvien_cauhoi_tuyendungDeleteArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
    /**
     * Filter which hoso_ungvien_cauhoi_tuyendung to delete.
     * 
    **/
    where: hoso_ungvien_cauhoi_tuyendungWhereUniqueInput
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung deleteMany
   */
  export type hoso_ungvien_cauhoi_tuyendungDeleteManyArgs = {
    /**
     * Filter which hoso_ungvien_cauhoi_tuyendungs to delete
     * 
    **/
    where?: hoso_ungvien_cauhoi_tuyendungWhereInput
  }


  /**
   * hoso_ungvien_cauhoi_tuyendung without action
   */
  export type hoso_ungvien_cauhoi_tuyendungArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_cauhoi_tuyendung
     * 
    **/
    select?: hoso_ungvien_cauhoi_tuyendungSelect | null
  }



  /**
   * Model hoso_ungvien_skill
   */


  export type AggregateHoso_ungvien_skill = {
    _count: Hoso_ungvien_skillCountAggregateOutputType | null
    _avg: Hoso_ungvien_skillAvgAggregateOutputType | null
    _sum: Hoso_ungvien_skillSumAggregateOutputType | null
    _min: Hoso_ungvien_skillMinAggregateOutputType | null
    _max: Hoso_ungvien_skillMaxAggregateOutputType | null
  }

  export type Hoso_ungvien_skillAvgAggregateOutputType = {
    skill_id: number | null
    group_id: number | null
  }

  export type Hoso_ungvien_skillSumAggregateOutputType = {
    skill_id: bigint | null
    group_id: bigint | null
  }

  export type Hoso_ungvien_skillMinAggregateOutputType = {
    skill_id: bigint | null
    skill_code: string | null
    skill_name: string | null
    skill_status: boolean | null
    group_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_skillMaxAggregateOutputType = {
    skill_id: bigint | null
    skill_code: string | null
    skill_name: string | null
    skill_status: boolean | null
    group_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_skillCountAggregateOutputType = {
    skill_id: number
    skill_code: number
    skill_name: number
    skill_status: number
    group_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hoso_ungvien_skillAvgAggregateInputType = {
    skill_id?: true
    group_id?: true
  }

  export type Hoso_ungvien_skillSumAggregateInputType = {
    skill_id?: true
    group_id?: true
  }

  export type Hoso_ungvien_skillMinAggregateInputType = {
    skill_id?: true
    skill_code?: true
    skill_name?: true
    skill_status?: true
    group_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_skillMaxAggregateInputType = {
    skill_id?: true
    skill_code?: true
    skill_name?: true
    skill_status?: true
    group_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_skillCountAggregateInputType = {
    skill_id?: true
    skill_code?: true
    skill_name?: true
    skill_status?: true
    group_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hoso_ungvien_skillAggregateArgs = {
    /**
     * Filter which hoso_ungvien_skill to aggregate.
     * 
    **/
    where?: hoso_ungvien_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skills to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hoso_ungvien_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hoso_ungvien_skills
    **/
    _count?: true | Hoso_ungvien_skillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hoso_ungvien_skillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hoso_ungvien_skillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hoso_ungvien_skillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hoso_ungvien_skillMaxAggregateInputType
  }

  export type GetHoso_ungvien_skillAggregateType<T extends Hoso_ungvien_skillAggregateArgs> = {
        [P in keyof T & keyof AggregateHoso_ungvien_skill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoso_ungvien_skill[P]>
      : GetScalarType<T[P], AggregateHoso_ungvien_skill[P]>
  }




  export type Hoso_ungvien_skillGroupByArgs = {
    where?: hoso_ungvien_skillWhereInput
    orderBy?: Enumerable<hoso_ungvien_skillOrderByWithAggregationInput>
    by: Array<Hoso_ungvien_skillScalarFieldEnum>
    having?: hoso_ungvien_skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hoso_ungvien_skillCountAggregateInputType | true
    _avg?: Hoso_ungvien_skillAvgAggregateInputType
    _sum?: Hoso_ungvien_skillSumAggregateInputType
    _min?: Hoso_ungvien_skillMinAggregateInputType
    _max?: Hoso_ungvien_skillMaxAggregateInputType
  }


  export type Hoso_ungvien_skillGroupByOutputType = {
    skill_id: bigint
    skill_code: string
    skill_name: string
    skill_status: boolean
    group_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Hoso_ungvien_skillCountAggregateOutputType | null
    _avg: Hoso_ungvien_skillAvgAggregateOutputType | null
    _sum: Hoso_ungvien_skillSumAggregateOutputType | null
    _min: Hoso_ungvien_skillMinAggregateOutputType | null
    _max: Hoso_ungvien_skillMaxAggregateOutputType | null
  }

  type GetHoso_ungvien_skillGroupByPayload<T extends Hoso_ungvien_skillGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Hoso_ungvien_skillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hoso_ungvien_skillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hoso_ungvien_skillGroupByOutputType[P]>
            : GetScalarType<T[P], Hoso_ungvien_skillGroupByOutputType[P]>
        }
      >
    >


  export type hoso_ungvien_skillSelect = {
    skill_id?: boolean
    skill_code?: boolean
    skill_name?: boolean
    skill_status?: boolean
    group_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien_skillgroup?: boolean | hoso_ungvien_skillgroupArgs
  }

  export type hoso_ungvien_skillInclude = {
    hoso_ungvien_skillgroup?: boolean | hoso_ungvien_skillgroupArgs
  }

  export type hoso_ungvien_skillGetPayload<
    S extends boolean | null | undefined | hoso_ungvien_skillArgs,
    U = keyof S
      > = S extends true
        ? hoso_ungvien_skill
    : S extends undefined
    ? never
    : S extends hoso_ungvien_skillArgs | hoso_ungvien_skillFindManyArgs
    ?'include' extends U
    ? hoso_ungvien_skill  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien_skillgroup' ? hoso_ungvien_skillgroupGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien_skillgroup' ? hoso_ungvien_skillgroupGetPayload<S['select'][P]> :  P extends keyof hoso_ungvien_skill ? hoso_ungvien_skill[P] : never
  } 
    : hoso_ungvien_skill
  : hoso_ungvien_skill


  type hoso_ungvien_skillCountArgs = Merge<
    Omit<hoso_ungvien_skillFindManyArgs, 'select' | 'include'> & {
      select?: Hoso_ungvien_skillCountAggregateInputType | true
    }
  >

  export interface hoso_ungvien_skillDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hoso_ungvien_skill that matches the filter.
     * @param {hoso_ungvien_skillFindUniqueArgs} args - Arguments to find a Hoso_ungvien_skill
     * @example
     * // Get one Hoso_ungvien_skill
     * const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoso_ungvien_skillFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hoso_ungvien_skillFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hoso_ungvien_skill'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill | null >, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T> | null >>

    /**
     * Find the first Hoso_ungvien_skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillFindFirstArgs} args - Arguments to find a Hoso_ungvien_skill
     * @example
     * // Get one Hoso_ungvien_skill
     * const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoso_ungvien_skillFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hoso_ungvien_skillFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hoso_ungvien_skill'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill | null >, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T> | null >>

    /**
     * Find zero or more Hoso_ungvien_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoso_ungvien_skills
     * const hoso_ungvien_skills = await prisma.hoso_ungvien_skill.findMany()
     * 
     * // Get first 10 Hoso_ungvien_skills
     * const hoso_ungvien_skills = await prisma.hoso_ungvien_skill.findMany({ take: 10 })
     * 
     * // Only select the `skill_id`
     * const hoso_ungvien_skillWithSkill_idOnly = await prisma.hoso_ungvien_skill.findMany({ select: { skill_id: true } })
     * 
    **/
    findMany<T extends hoso_ungvien_skillFindManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_skill>>, PrismaPromise<Array<hoso_ungvien_skillGetPayload<T>>>>

    /**
     * Create a Hoso_ungvien_skill.
     * @param {hoso_ungvien_skillCreateArgs} args - Arguments to create a Hoso_ungvien_skill.
     * @example
     * // Create one Hoso_ungvien_skill
     * const Hoso_ungvien_skill = await prisma.hoso_ungvien_skill.create({
     *   data: {
     *     // ... data to create a Hoso_ungvien_skill
     *   }
     * })
     * 
    **/
    create<T extends hoso_ungvien_skillCreateArgs>(
      args: SelectSubset<T, hoso_ungvien_skillCreateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>>

    /**
     * Create many Hoso_ungvien_skills.
     *     @param {hoso_ungvien_skillCreateManyArgs} args - Arguments to create many Hoso_ungvien_skills.
     *     @example
     *     // Create many Hoso_ungvien_skills
     *     const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hoso_ungvien_skillCreateManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hoso_ungvien_skill.
     * @param {hoso_ungvien_skillDeleteArgs} args - Arguments to delete one Hoso_ungvien_skill.
     * @example
     * // Delete one Hoso_ungvien_skill
     * const Hoso_ungvien_skill = await prisma.hoso_ungvien_skill.delete({
     *   where: {
     *     // ... filter to delete one Hoso_ungvien_skill
     *   }
     * })
     * 
    **/
    delete<T extends hoso_ungvien_skillDeleteArgs>(
      args: SelectSubset<T, hoso_ungvien_skillDeleteArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>>

    /**
     * Update one Hoso_ungvien_skill.
     * @param {hoso_ungvien_skillUpdateArgs} args - Arguments to update one Hoso_ungvien_skill.
     * @example
     * // Update one Hoso_ungvien_skill
     * const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoso_ungvien_skillUpdateArgs>(
      args: SelectSubset<T, hoso_ungvien_skillUpdateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>>

    /**
     * Delete zero or more Hoso_ungvien_skills.
     * @param {hoso_ungvien_skillDeleteManyArgs} args - Arguments to filter Hoso_ungvien_skills to delete.
     * @example
     * // Delete a few Hoso_ungvien_skills
     * const { count } = await prisma.hoso_ungvien_skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoso_ungvien_skillDeleteManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoso_ungvien_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoso_ungvien_skills
     * const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoso_ungvien_skillUpdateManyArgs>(
      args: SelectSubset<T, hoso_ungvien_skillUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoso_ungvien_skill.
     * @param {hoso_ungvien_skillUpsertArgs} args - Arguments to update or create a Hoso_ungvien_skill.
     * @example
     * // Update or create a Hoso_ungvien_skill
     * const hoso_ungvien_skill = await prisma.hoso_ungvien_skill.upsert({
     *   create: {
     *     // ... data to create a Hoso_ungvien_skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoso_ungvien_skill we want to update
     *   }
     * })
    **/
    upsert<T extends hoso_ungvien_skillUpsertArgs>(
      args: SelectSubset<T, hoso_ungvien_skillUpsertArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skill>, Prisma__hoso_ungvien_skillClient<hoso_ungvien_skillGetPayload<T>>>

    /**
     * Count the number of Hoso_ungvien_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillCountArgs} args - Arguments to filter Hoso_ungvien_skills to count.
     * @example
     * // Count the number of Hoso_ungvien_skills
     * const count = await prisma.hoso_ungvien_skill.count({
     *   where: {
     *     // ... the filter for the Hoso_ungvien_skills we want to count
     *   }
     * })
    **/
    count<T extends hoso_ungvien_skillCountArgs>(
      args?: Subset<T, hoso_ungvien_skillCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hoso_ungvien_skillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoso_ungvien_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_skillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hoso_ungvien_skillAggregateArgs>(args: Subset<T, Hoso_ungvien_skillAggregateArgs>): PrismaPromise<GetHoso_ungvien_skillAggregateType<T>>

    /**
     * Group by Hoso_ungvien_skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_skillGroupByArgs} args - Group by arguments.
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
      T extends Hoso_ungvien_skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hoso_ungvien_skillGroupByArgs['orderBy'] }
        : { orderBy?: Hoso_ungvien_skillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Hoso_ungvien_skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoso_ungvien_skillGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hoso_ungvien_skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hoso_ungvien_skillClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien_skillgroup<T extends hoso_ungvien_skillgroupArgs = {}>(args?: Subset<T, hoso_ungvien_skillgroupArgs>): CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup | null >, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hoso_ungvien_skill findUnique
   */
  export type hoso_ungvien_skillFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * Throw an Error if a hoso_ungvien_skill can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_skill to fetch.
     * 
    **/
    where: hoso_ungvien_skillWhereUniqueInput
  }


  /**
   * hoso_ungvien_skill findFirst
   */
  export type hoso_ungvien_skillFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * Throw an Error if a hoso_ungvien_skill can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_skill to fetch.
     * 
    **/
    where?: hoso_ungvien_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skills to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hoso_ungvien_skills.
     * 
    **/
    cursor?: hoso_ungvien_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skills.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hoso_ungvien_skills.
     * 
    **/
    distinct?: Enumerable<Hoso_ungvien_skillScalarFieldEnum>
  }


  /**
   * hoso_ungvien_skill findMany
   */
  export type hoso_ungvien_skillFindManyArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * Filter, which hoso_ungvien_skills to fetch.
     * 
    **/
    where?: hoso_ungvien_skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skills to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hoso_ungvien_skills.
     * 
    **/
    cursor?: hoso_ungvien_skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skills from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skills.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Hoso_ungvien_skillScalarFieldEnum>
  }


  /**
   * hoso_ungvien_skill create
   */
  export type hoso_ungvien_skillCreateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * The data needed to create a hoso_ungvien_skill.
     * 
    **/
    data: XOR<hoso_ungvien_skillCreateInput, hoso_ungvien_skillUncheckedCreateInput>
  }


  /**
   * hoso_ungvien_skill createMany
   */
  export type hoso_ungvien_skillCreateManyArgs = {
    /**
     * The data used to create many hoso_ungvien_skills.
     * 
    **/
    data: Enumerable<hoso_ungvien_skillCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hoso_ungvien_skill update
   */
  export type hoso_ungvien_skillUpdateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * The data needed to update a hoso_ungvien_skill.
     * 
    **/
    data: XOR<hoso_ungvien_skillUpdateInput, hoso_ungvien_skillUncheckedUpdateInput>
    /**
     * Choose, which hoso_ungvien_skill to update.
     * 
    **/
    where: hoso_ungvien_skillWhereUniqueInput
  }


  /**
   * hoso_ungvien_skill updateMany
   */
  export type hoso_ungvien_skillUpdateManyArgs = {
    /**
     * The data used to update hoso_ungvien_skills.
     * 
    **/
    data: XOR<hoso_ungvien_skillUpdateManyMutationInput, hoso_ungvien_skillUncheckedUpdateManyInput>
    /**
     * Filter which hoso_ungvien_skills to update
     * 
    **/
    where?: hoso_ungvien_skillWhereInput
  }


  /**
   * hoso_ungvien_skill upsert
   */
  export type hoso_ungvien_skillUpsertArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * The filter to search for the hoso_ungvien_skill to update in case it exists.
     * 
    **/
    where: hoso_ungvien_skillWhereUniqueInput
    /**
     * In case the hoso_ungvien_skill found by the `where` argument doesn't exist, create a new hoso_ungvien_skill with this data.
     * 
    **/
    create: XOR<hoso_ungvien_skillCreateInput, hoso_ungvien_skillUncheckedCreateInput>
    /**
     * In case the hoso_ungvien_skill was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hoso_ungvien_skillUpdateInput, hoso_ungvien_skillUncheckedUpdateInput>
  }


  /**
   * hoso_ungvien_skill delete
   */
  export type hoso_ungvien_skillDeleteArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
    /**
     * Filter which hoso_ungvien_skill to delete.
     * 
    **/
    where: hoso_ungvien_skillWhereUniqueInput
  }


  /**
   * hoso_ungvien_skill deleteMany
   */
  export type hoso_ungvien_skillDeleteManyArgs = {
    /**
     * Filter which hoso_ungvien_skills to delete
     * 
    **/
    where?: hoso_ungvien_skillWhereInput
  }


  /**
   * hoso_ungvien_skill without action
   */
  export type hoso_ungvien_skillArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skill
     * 
    **/
    select?: hoso_ungvien_skillSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillInclude | null
  }



  /**
   * Model hoso_ungvien_skillgroup
   */


  export type AggregateHoso_ungvien_skillgroup = {
    _count: Hoso_ungvien_skillgroupCountAggregateOutputType | null
    _avg: Hoso_ungvien_skillgroupAvgAggregateOutputType | null
    _sum: Hoso_ungvien_skillgroupSumAggregateOutputType | null
    _min: Hoso_ungvien_skillgroupMinAggregateOutputType | null
    _max: Hoso_ungvien_skillgroupMaxAggregateOutputType | null
  }

  export type Hoso_ungvien_skillgroupAvgAggregateOutputType = {
    group_id: number | null
  }

  export type Hoso_ungvien_skillgroupSumAggregateOutputType = {
    group_id: bigint | null
  }

  export type Hoso_ungvien_skillgroupMinAggregateOutputType = {
    group_id: bigint | null
    group_name: string | null
    group_code: string | null
    group_status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_skillgroupMaxAggregateOutputType = {
    group_id: bigint | null
    group_name: string | null
    group_code: string | null
    group_status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_skillgroupCountAggregateOutputType = {
    group_id: number
    group_name: number
    group_code: number
    group_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hoso_ungvien_skillgroupAvgAggregateInputType = {
    group_id?: true
  }

  export type Hoso_ungvien_skillgroupSumAggregateInputType = {
    group_id?: true
  }

  export type Hoso_ungvien_skillgroupMinAggregateInputType = {
    group_id?: true
    group_name?: true
    group_code?: true
    group_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_skillgroupMaxAggregateInputType = {
    group_id?: true
    group_name?: true
    group_code?: true
    group_status?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_skillgroupCountAggregateInputType = {
    group_id?: true
    group_name?: true
    group_code?: true
    group_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hoso_ungvien_skillgroupAggregateArgs = {
    /**
     * Filter which hoso_ungvien_skillgroup to aggregate.
     * 
    **/
    where?: hoso_ungvien_skillgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skillgroups to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillgroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hoso_ungvien_skillgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skillgroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skillgroups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hoso_ungvien_skillgroups
    **/
    _count?: true | Hoso_ungvien_skillgroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hoso_ungvien_skillgroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hoso_ungvien_skillgroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hoso_ungvien_skillgroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hoso_ungvien_skillgroupMaxAggregateInputType
  }

  export type GetHoso_ungvien_skillgroupAggregateType<T extends Hoso_ungvien_skillgroupAggregateArgs> = {
        [P in keyof T & keyof AggregateHoso_ungvien_skillgroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoso_ungvien_skillgroup[P]>
      : GetScalarType<T[P], AggregateHoso_ungvien_skillgroup[P]>
  }




  export type Hoso_ungvien_skillgroupGroupByArgs = {
    where?: hoso_ungvien_skillgroupWhereInput
    orderBy?: Enumerable<hoso_ungvien_skillgroupOrderByWithAggregationInput>
    by: Array<Hoso_ungvien_skillgroupScalarFieldEnum>
    having?: hoso_ungvien_skillgroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hoso_ungvien_skillgroupCountAggregateInputType | true
    _avg?: Hoso_ungvien_skillgroupAvgAggregateInputType
    _sum?: Hoso_ungvien_skillgroupSumAggregateInputType
    _min?: Hoso_ungvien_skillgroupMinAggregateInputType
    _max?: Hoso_ungvien_skillgroupMaxAggregateInputType
  }


  export type Hoso_ungvien_skillgroupGroupByOutputType = {
    group_id: bigint
    group_name: string
    group_code: string
    group_status: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: Hoso_ungvien_skillgroupCountAggregateOutputType | null
    _avg: Hoso_ungvien_skillgroupAvgAggregateOutputType | null
    _sum: Hoso_ungvien_skillgroupSumAggregateOutputType | null
    _min: Hoso_ungvien_skillgroupMinAggregateOutputType | null
    _max: Hoso_ungvien_skillgroupMaxAggregateOutputType | null
  }

  type GetHoso_ungvien_skillgroupGroupByPayload<T extends Hoso_ungvien_skillgroupGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Hoso_ungvien_skillgroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hoso_ungvien_skillgroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hoso_ungvien_skillgroupGroupByOutputType[P]>
            : GetScalarType<T[P], Hoso_ungvien_skillgroupGroupByOutputType[P]>
        }
      >
    >


  export type hoso_ungvien_skillgroupSelect = {
    group_id?: boolean
    group_name?: boolean
    group_code?: boolean
    group_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien_skill?: boolean | hoso_ungvien_skillFindManyArgs
    _count?: boolean | Hoso_ungvien_skillgroupCountOutputTypeArgs
  }

  export type hoso_ungvien_skillgroupInclude = {
    hoso_ungvien_skill?: boolean | hoso_ungvien_skillFindManyArgs
    _count?: boolean | Hoso_ungvien_skillgroupCountOutputTypeArgs
  }

  export type hoso_ungvien_skillgroupGetPayload<
    S extends boolean | null | undefined | hoso_ungvien_skillgroupArgs,
    U = keyof S
      > = S extends true
        ? hoso_ungvien_skillgroup
    : S extends undefined
    ? never
    : S extends hoso_ungvien_skillgroupArgs | hoso_ungvien_skillgroupFindManyArgs
    ?'include' extends U
    ? hoso_ungvien_skillgroup  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien_skill' ? Array < hoso_ungvien_skillGetPayload<S['include'][P]>>  :
        P extends '_count' ? Hoso_ungvien_skillgroupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien_skill' ? Array < hoso_ungvien_skillGetPayload<S['select'][P]>>  :
        P extends '_count' ? Hoso_ungvien_skillgroupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof hoso_ungvien_skillgroup ? hoso_ungvien_skillgroup[P] : never
  } 
    : hoso_ungvien_skillgroup
  : hoso_ungvien_skillgroup


  type hoso_ungvien_skillgroupCountArgs = Merge<
    Omit<hoso_ungvien_skillgroupFindManyArgs, 'select' | 'include'> & {
      select?: Hoso_ungvien_skillgroupCountAggregateInputType | true
    }
  >

  export interface hoso_ungvien_skillgroupDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hoso_ungvien_skillgroup that matches the filter.
     * @param {hoso_ungvien_skillgroupFindUniqueArgs} args - Arguments to find a Hoso_ungvien_skillgroup
     * @example
     * // Get one Hoso_ungvien_skillgroup
     * const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoso_ungvien_skillgroupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hoso_ungvien_skillgroupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hoso_ungvien_skillgroup'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup | null >, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T> | null >>

    /**
     * Find the first Hoso_ungvien_skillgroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillgroupFindFirstArgs} args - Arguments to find a Hoso_ungvien_skillgroup
     * @example
     * // Get one Hoso_ungvien_skillgroup
     * const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoso_ungvien_skillgroupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hoso_ungvien_skillgroupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hoso_ungvien_skillgroup'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup | null >, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T> | null >>

    /**
     * Find zero or more Hoso_ungvien_skillgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillgroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoso_ungvien_skillgroups
     * const hoso_ungvien_skillgroups = await prisma.hoso_ungvien_skillgroup.findMany()
     * 
     * // Get first 10 Hoso_ungvien_skillgroups
     * const hoso_ungvien_skillgroups = await prisma.hoso_ungvien_skillgroup.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const hoso_ungvien_skillgroupWithGroup_idOnly = await prisma.hoso_ungvien_skillgroup.findMany({ select: { group_id: true } })
     * 
    **/
    findMany<T extends hoso_ungvien_skillgroupFindManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillgroupFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_skillgroup>>, PrismaPromise<Array<hoso_ungvien_skillgroupGetPayload<T>>>>

    /**
     * Create a Hoso_ungvien_skillgroup.
     * @param {hoso_ungvien_skillgroupCreateArgs} args - Arguments to create a Hoso_ungvien_skillgroup.
     * @example
     * // Create one Hoso_ungvien_skillgroup
     * const Hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.create({
     *   data: {
     *     // ... data to create a Hoso_ungvien_skillgroup
     *   }
     * })
     * 
    **/
    create<T extends hoso_ungvien_skillgroupCreateArgs>(
      args: SelectSubset<T, hoso_ungvien_skillgroupCreateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>>

    /**
     * Create many Hoso_ungvien_skillgroups.
     *     @param {hoso_ungvien_skillgroupCreateManyArgs} args - Arguments to create many Hoso_ungvien_skillgroups.
     *     @example
     *     // Create many Hoso_ungvien_skillgroups
     *     const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hoso_ungvien_skillgroupCreateManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillgroupCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hoso_ungvien_skillgroup.
     * @param {hoso_ungvien_skillgroupDeleteArgs} args - Arguments to delete one Hoso_ungvien_skillgroup.
     * @example
     * // Delete one Hoso_ungvien_skillgroup
     * const Hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.delete({
     *   where: {
     *     // ... filter to delete one Hoso_ungvien_skillgroup
     *   }
     * })
     * 
    **/
    delete<T extends hoso_ungvien_skillgroupDeleteArgs>(
      args: SelectSubset<T, hoso_ungvien_skillgroupDeleteArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>>

    /**
     * Update one Hoso_ungvien_skillgroup.
     * @param {hoso_ungvien_skillgroupUpdateArgs} args - Arguments to update one Hoso_ungvien_skillgroup.
     * @example
     * // Update one Hoso_ungvien_skillgroup
     * const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoso_ungvien_skillgroupUpdateArgs>(
      args: SelectSubset<T, hoso_ungvien_skillgroupUpdateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>>

    /**
     * Delete zero or more Hoso_ungvien_skillgroups.
     * @param {hoso_ungvien_skillgroupDeleteManyArgs} args - Arguments to filter Hoso_ungvien_skillgroups to delete.
     * @example
     * // Delete a few Hoso_ungvien_skillgroups
     * const { count } = await prisma.hoso_ungvien_skillgroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoso_ungvien_skillgroupDeleteManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_skillgroupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoso_ungvien_skillgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillgroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoso_ungvien_skillgroups
     * const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoso_ungvien_skillgroupUpdateManyArgs>(
      args: SelectSubset<T, hoso_ungvien_skillgroupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoso_ungvien_skillgroup.
     * @param {hoso_ungvien_skillgroupUpsertArgs} args - Arguments to update or create a Hoso_ungvien_skillgroup.
     * @example
     * // Update or create a Hoso_ungvien_skillgroup
     * const hoso_ungvien_skillgroup = await prisma.hoso_ungvien_skillgroup.upsert({
     *   create: {
     *     // ... data to create a Hoso_ungvien_skillgroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoso_ungvien_skillgroup we want to update
     *   }
     * })
    **/
    upsert<T extends hoso_ungvien_skillgroupUpsertArgs>(
      args: SelectSubset<T, hoso_ungvien_skillgroupUpsertArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroup>, Prisma__hoso_ungvien_skillgroupClient<hoso_ungvien_skillgroupGetPayload<T>>>

    /**
     * Count the number of Hoso_ungvien_skillgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_skillgroupCountArgs} args - Arguments to filter Hoso_ungvien_skillgroups to count.
     * @example
     * // Count the number of Hoso_ungvien_skillgroups
     * const count = await prisma.hoso_ungvien_skillgroup.count({
     *   where: {
     *     // ... the filter for the Hoso_ungvien_skillgroups we want to count
     *   }
     * })
    **/
    count<T extends hoso_ungvien_skillgroupCountArgs>(
      args?: Subset<T, hoso_ungvien_skillgroupCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hoso_ungvien_skillgroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoso_ungvien_skillgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_skillgroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hoso_ungvien_skillgroupAggregateArgs>(args: Subset<T, Hoso_ungvien_skillgroupAggregateArgs>): PrismaPromise<GetHoso_ungvien_skillgroupAggregateType<T>>

    /**
     * Group by Hoso_ungvien_skillgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_skillgroupGroupByArgs} args - Group by arguments.
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
      T extends Hoso_ungvien_skillgroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hoso_ungvien_skillgroupGroupByArgs['orderBy'] }
        : { orderBy?: Hoso_ungvien_skillgroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Hoso_ungvien_skillgroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoso_ungvien_skillgroupGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hoso_ungvien_skillgroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hoso_ungvien_skillgroupClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien_skill<T extends hoso_ungvien_skillFindManyArgs = {}>(args?: Subset<T, hoso_ungvien_skillFindManyArgs>): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_skill>>, PrismaPromise<Array<hoso_ungvien_skillGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hoso_ungvien_skillgroup findUnique
   */
  export type hoso_ungvien_skillgroupFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * Throw an Error if a hoso_ungvien_skillgroup can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_skillgroup to fetch.
     * 
    **/
    where: hoso_ungvien_skillgroupWhereUniqueInput
  }


  /**
   * hoso_ungvien_skillgroup findFirst
   */
  export type hoso_ungvien_skillgroupFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * Throw an Error if a hoso_ungvien_skillgroup can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_skillgroup to fetch.
     * 
    **/
    where?: hoso_ungvien_skillgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skillgroups to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillgroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hoso_ungvien_skillgroups.
     * 
    **/
    cursor?: hoso_ungvien_skillgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skillgroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skillgroups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hoso_ungvien_skillgroups.
     * 
    **/
    distinct?: Enumerable<Hoso_ungvien_skillgroupScalarFieldEnum>
  }


  /**
   * hoso_ungvien_skillgroup findMany
   */
  export type hoso_ungvien_skillgroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * Filter, which hoso_ungvien_skillgroups to fetch.
     * 
    **/
    where?: hoso_ungvien_skillgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_skillgroups to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_skillgroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hoso_ungvien_skillgroups.
     * 
    **/
    cursor?: hoso_ungvien_skillgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_skillgroups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_skillgroups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Hoso_ungvien_skillgroupScalarFieldEnum>
  }


  /**
   * hoso_ungvien_skillgroup create
   */
  export type hoso_ungvien_skillgroupCreateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * The data needed to create a hoso_ungvien_skillgroup.
     * 
    **/
    data: XOR<hoso_ungvien_skillgroupCreateInput, hoso_ungvien_skillgroupUncheckedCreateInput>
  }


  /**
   * hoso_ungvien_skillgroup createMany
   */
  export type hoso_ungvien_skillgroupCreateManyArgs = {
    /**
     * The data used to create many hoso_ungvien_skillgroups.
     * 
    **/
    data: Enumerable<hoso_ungvien_skillgroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hoso_ungvien_skillgroup update
   */
  export type hoso_ungvien_skillgroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * The data needed to update a hoso_ungvien_skillgroup.
     * 
    **/
    data: XOR<hoso_ungvien_skillgroupUpdateInput, hoso_ungvien_skillgroupUncheckedUpdateInput>
    /**
     * Choose, which hoso_ungvien_skillgroup to update.
     * 
    **/
    where: hoso_ungvien_skillgroupWhereUniqueInput
  }


  /**
   * hoso_ungvien_skillgroup updateMany
   */
  export type hoso_ungvien_skillgroupUpdateManyArgs = {
    /**
     * The data used to update hoso_ungvien_skillgroups.
     * 
    **/
    data: XOR<hoso_ungvien_skillgroupUpdateManyMutationInput, hoso_ungvien_skillgroupUncheckedUpdateManyInput>
    /**
     * Filter which hoso_ungvien_skillgroups to update
     * 
    **/
    where?: hoso_ungvien_skillgroupWhereInput
  }


  /**
   * hoso_ungvien_skillgroup upsert
   */
  export type hoso_ungvien_skillgroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * The filter to search for the hoso_ungvien_skillgroup to update in case it exists.
     * 
    **/
    where: hoso_ungvien_skillgroupWhereUniqueInput
    /**
     * In case the hoso_ungvien_skillgroup found by the `where` argument doesn't exist, create a new hoso_ungvien_skillgroup with this data.
     * 
    **/
    create: XOR<hoso_ungvien_skillgroupCreateInput, hoso_ungvien_skillgroupUncheckedCreateInput>
    /**
     * In case the hoso_ungvien_skillgroup was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hoso_ungvien_skillgroupUpdateInput, hoso_ungvien_skillgroupUncheckedUpdateInput>
  }


  /**
   * hoso_ungvien_skillgroup delete
   */
  export type hoso_ungvien_skillgroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
    /**
     * Filter which hoso_ungvien_skillgroup to delete.
     * 
    **/
    where: hoso_ungvien_skillgroupWhereUniqueInput
  }


  /**
   * hoso_ungvien_skillgroup deleteMany
   */
  export type hoso_ungvien_skillgroupDeleteManyArgs = {
    /**
     * Filter which hoso_ungvien_skillgroups to delete
     * 
    **/
    where?: hoso_ungvien_skillgroupWhereInput
  }


  /**
   * hoso_ungvien_skillgroup without action
   */
  export type hoso_ungvien_skillgroupArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_skillgroup
     * 
    **/
    select?: hoso_ungvien_skillgroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_skillgroupInclude | null
  }



  /**
   * Model hoso_ungvien_thongtin_giadinh
   */


  export type AggregateHoso_ungvien_thongtin_giadinh = {
    _count: Hoso_ungvien_thongtin_giadinhCountAggregateOutputType | null
    _avg: Hoso_ungvien_thongtin_giadinhAvgAggregateOutputType | null
    _sum: Hoso_ungvien_thongtin_giadinhSumAggregateOutputType | null
    _min: Hoso_ungvien_thongtin_giadinhMinAggregateOutputType | null
    _max: Hoso_ungvien_thongtin_giadinhMaxAggregateOutputType | null
  }

  export type Hoso_ungvien_thongtin_giadinhAvgAggregateOutputType = {
    thongtingiadinh_id: number | null
    hoso_id: number | null
  }

  export type Hoso_ungvien_thongtin_giadinhSumAggregateOutputType = {
    thongtingiadinh_id: bigint | null
    hoso_id: bigint | null
  }

  export type Hoso_ungvien_thongtin_giadinhMinAggregateOutputType = {
    thongtingiadinh_id: bigint | null
    hoten: string | null
    namsinh: Date | null
    Nghenghiep: string | null
    CMND: string | null
    quanhe: string | null
    diachi_hientai: string | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_thongtin_giadinhMaxAggregateOutputType = {
    thongtingiadinh_id: bigint | null
    hoten: string | null
    namsinh: Date | null
    Nghenghiep: string | null
    CMND: string | null
    quanhe: string | null
    diachi_hientai: string | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hoso_ungvien_thongtin_giadinhCountAggregateOutputType = {
    thongtingiadinh_id: number
    hoten: number
    namsinh: number
    Nghenghiep: number
    CMND: number
    quanhe: number
    diachi_hientai: number
    hoso_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hoso_ungvien_thongtin_giadinhAvgAggregateInputType = {
    thongtingiadinh_id?: true
    hoso_id?: true
  }

  export type Hoso_ungvien_thongtin_giadinhSumAggregateInputType = {
    thongtingiadinh_id?: true
    hoso_id?: true
  }

  export type Hoso_ungvien_thongtin_giadinhMinAggregateInputType = {
    thongtingiadinh_id?: true
    hoten?: true
    namsinh?: true
    Nghenghiep?: true
    CMND?: true
    quanhe?: true
    diachi_hientai?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_thongtin_giadinhMaxAggregateInputType = {
    thongtingiadinh_id?: true
    hoten?: true
    namsinh?: true
    Nghenghiep?: true
    CMND?: true
    quanhe?: true
    diachi_hientai?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Hoso_ungvien_thongtin_giadinhCountAggregateInputType = {
    thongtingiadinh_id?: true
    hoten?: true
    namsinh?: true
    Nghenghiep?: true
    CMND?: true
    quanhe?: true
    diachi_hientai?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hoso_ungvien_thongtin_giadinhAggregateArgs = {
    /**
     * Filter which hoso_ungvien_thongtin_giadinh to aggregate.
     * 
    **/
    where?: hoso_ungvien_thongtin_giadinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_thongtin_giadinhs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_thongtin_giadinhOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_thongtin_giadinhs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hoso_ungvien_thongtin_giadinhs
    **/
    _count?: true | Hoso_ungvien_thongtin_giadinhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hoso_ungvien_thongtin_giadinhAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hoso_ungvien_thongtin_giadinhSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hoso_ungvien_thongtin_giadinhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hoso_ungvien_thongtin_giadinhMaxAggregateInputType
  }

  export type GetHoso_ungvien_thongtin_giadinhAggregateType<T extends Hoso_ungvien_thongtin_giadinhAggregateArgs> = {
        [P in keyof T & keyof AggregateHoso_ungvien_thongtin_giadinh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoso_ungvien_thongtin_giadinh[P]>
      : GetScalarType<T[P], AggregateHoso_ungvien_thongtin_giadinh[P]>
  }




  export type Hoso_ungvien_thongtin_giadinhGroupByArgs = {
    where?: hoso_ungvien_thongtin_giadinhWhereInput
    orderBy?: Enumerable<hoso_ungvien_thongtin_giadinhOrderByWithAggregationInput>
    by: Array<Hoso_ungvien_thongtin_giadinhScalarFieldEnum>
    having?: hoso_ungvien_thongtin_giadinhScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hoso_ungvien_thongtin_giadinhCountAggregateInputType | true
    _avg?: Hoso_ungvien_thongtin_giadinhAvgAggregateInputType
    _sum?: Hoso_ungvien_thongtin_giadinhSumAggregateInputType
    _min?: Hoso_ungvien_thongtin_giadinhMinAggregateInputType
    _max?: Hoso_ungvien_thongtin_giadinhMaxAggregateInputType
  }


  export type Hoso_ungvien_thongtin_giadinhGroupByOutputType = {
    thongtingiadinh_id: bigint
    hoten: string
    namsinh: Date
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    hoso_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Hoso_ungvien_thongtin_giadinhCountAggregateOutputType | null
    _avg: Hoso_ungvien_thongtin_giadinhAvgAggregateOutputType | null
    _sum: Hoso_ungvien_thongtin_giadinhSumAggregateOutputType | null
    _min: Hoso_ungvien_thongtin_giadinhMinAggregateOutputType | null
    _max: Hoso_ungvien_thongtin_giadinhMaxAggregateOutputType | null
  }

  type GetHoso_ungvien_thongtin_giadinhGroupByPayload<T extends Hoso_ungvien_thongtin_giadinhGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Hoso_ungvien_thongtin_giadinhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hoso_ungvien_thongtin_giadinhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hoso_ungvien_thongtin_giadinhGroupByOutputType[P]>
            : GetScalarType<T[P], Hoso_ungvien_thongtin_giadinhGroupByOutputType[P]>
        }
      >
    >


  export type hoso_ungvien_thongtin_giadinhSelect = {
    thongtingiadinh_id?: boolean
    hoten?: boolean
    namsinh?: boolean
    Nghenghiep?: boolean
    CMND?: boolean
    quanhe?: boolean
    diachi_hientai?: boolean
    hoso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type hoso_ungvien_thongtin_giadinhInclude = {
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type hoso_ungvien_thongtin_giadinhGetPayload<
    S extends boolean | null | undefined | hoso_ungvien_thongtin_giadinhArgs,
    U = keyof S
      > = S extends true
        ? hoso_ungvien_thongtin_giadinh
    : S extends undefined
    ? never
    : S extends hoso_ungvien_thongtin_giadinhArgs | hoso_ungvien_thongtin_giadinhFindManyArgs
    ?'include' extends U
    ? hoso_ungvien_thongtin_giadinh  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['select'][P]> :  P extends keyof hoso_ungvien_thongtin_giadinh ? hoso_ungvien_thongtin_giadinh[P] : never
  } 
    : hoso_ungvien_thongtin_giadinh
  : hoso_ungvien_thongtin_giadinh


  type hoso_ungvien_thongtin_giadinhCountArgs = Merge<
    Omit<hoso_ungvien_thongtin_giadinhFindManyArgs, 'select' | 'include'> & {
      select?: Hoso_ungvien_thongtin_giadinhCountAggregateInputType | true
    }
  >

  export interface hoso_ungvien_thongtin_giadinhDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Hoso_ungvien_thongtin_giadinh that matches the filter.
     * @param {hoso_ungvien_thongtin_giadinhFindUniqueArgs} args - Arguments to find a Hoso_ungvien_thongtin_giadinh
     * @example
     * // Get one Hoso_ungvien_thongtin_giadinh
     * const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hoso_ungvien_thongtin_giadinhFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hoso_ungvien_thongtin_giadinh'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh | null >, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T> | null >>

    /**
     * Find the first Hoso_ungvien_thongtin_giadinh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_thongtin_giadinhFindFirstArgs} args - Arguments to find a Hoso_ungvien_thongtin_giadinh
     * @example
     * // Get one Hoso_ungvien_thongtin_giadinh
     * const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hoso_ungvien_thongtin_giadinhFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hoso_ungvien_thongtin_giadinhFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hoso_ungvien_thongtin_giadinh'> extends True ? CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>> : CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh | null >, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T> | null >>

    /**
     * Find zero or more Hoso_ungvien_thongtin_giadinhs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_thongtin_giadinhFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hoso_ungvien_thongtin_giadinhs
     * const hoso_ungvien_thongtin_giadinhs = await prisma.hoso_ungvien_thongtin_giadinh.findMany()
     * 
     * // Get first 10 Hoso_ungvien_thongtin_giadinhs
     * const hoso_ungvien_thongtin_giadinhs = await prisma.hoso_ungvien_thongtin_giadinh.findMany({ take: 10 })
     * 
     * // Only select the `thongtingiadinh_id`
     * const hoso_ungvien_thongtin_giadinhWithThongtingiadinh_idOnly = await prisma.hoso_ungvien_thongtin_giadinh.findMany({ select: { thongtingiadinh_id: true } })
     * 
    **/
    findMany<T extends hoso_ungvien_thongtin_giadinhFindManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_thongtin_giadinhFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<hoso_ungvien_thongtin_giadinh>>, PrismaPromise<Array<hoso_ungvien_thongtin_giadinhGetPayload<T>>>>

    /**
     * Create a Hoso_ungvien_thongtin_giadinh.
     * @param {hoso_ungvien_thongtin_giadinhCreateArgs} args - Arguments to create a Hoso_ungvien_thongtin_giadinh.
     * @example
     * // Create one Hoso_ungvien_thongtin_giadinh
     * const Hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.create({
     *   data: {
     *     // ... data to create a Hoso_ungvien_thongtin_giadinh
     *   }
     * })
     * 
    **/
    create<T extends hoso_ungvien_thongtin_giadinhCreateArgs>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhCreateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>>

    /**
     * Create many Hoso_ungvien_thongtin_giadinhs.
     *     @param {hoso_ungvien_thongtin_giadinhCreateManyArgs} args - Arguments to create many Hoso_ungvien_thongtin_giadinhs.
     *     @example
     *     // Create many Hoso_ungvien_thongtin_giadinhs
     *     const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hoso_ungvien_thongtin_giadinhCreateManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_thongtin_giadinhCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Hoso_ungvien_thongtin_giadinh.
     * @param {hoso_ungvien_thongtin_giadinhDeleteArgs} args - Arguments to delete one Hoso_ungvien_thongtin_giadinh.
     * @example
     * // Delete one Hoso_ungvien_thongtin_giadinh
     * const Hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.delete({
     *   where: {
     *     // ... filter to delete one Hoso_ungvien_thongtin_giadinh
     *   }
     * })
     * 
    **/
    delete<T extends hoso_ungvien_thongtin_giadinhDeleteArgs>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhDeleteArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>>

    /**
     * Update one Hoso_ungvien_thongtin_giadinh.
     * @param {hoso_ungvien_thongtin_giadinhUpdateArgs} args - Arguments to update one Hoso_ungvien_thongtin_giadinh.
     * @example
     * // Update one Hoso_ungvien_thongtin_giadinh
     * const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hoso_ungvien_thongtin_giadinhUpdateArgs>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhUpdateArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>>

    /**
     * Delete zero or more Hoso_ungvien_thongtin_giadinhs.
     * @param {hoso_ungvien_thongtin_giadinhDeleteManyArgs} args - Arguments to filter Hoso_ungvien_thongtin_giadinhs to delete.
     * @example
     * // Delete a few Hoso_ungvien_thongtin_giadinhs
     * const { count } = await prisma.hoso_ungvien_thongtin_giadinh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hoso_ungvien_thongtin_giadinhDeleteManyArgs>(
      args?: SelectSubset<T, hoso_ungvien_thongtin_giadinhDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hoso_ungvien_thongtin_giadinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_thongtin_giadinhUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hoso_ungvien_thongtin_giadinhs
     * const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hoso_ungvien_thongtin_giadinhUpdateManyArgs>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Hoso_ungvien_thongtin_giadinh.
     * @param {hoso_ungvien_thongtin_giadinhUpsertArgs} args - Arguments to update or create a Hoso_ungvien_thongtin_giadinh.
     * @example
     * // Update or create a Hoso_ungvien_thongtin_giadinh
     * const hoso_ungvien_thongtin_giadinh = await prisma.hoso_ungvien_thongtin_giadinh.upsert({
     *   create: {
     *     // ... data to create a Hoso_ungvien_thongtin_giadinh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hoso_ungvien_thongtin_giadinh we want to update
     *   }
     * })
    **/
    upsert<T extends hoso_ungvien_thongtin_giadinhUpsertArgs>(
      args: SelectSubset<T, hoso_ungvien_thongtin_giadinhUpsertArgs>
    ): CheckSelect<T, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinh>, Prisma__hoso_ungvien_thongtin_giadinhClient<hoso_ungvien_thongtin_giadinhGetPayload<T>>>

    /**
     * Count the number of Hoso_ungvien_thongtin_giadinhs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hoso_ungvien_thongtin_giadinhCountArgs} args - Arguments to filter Hoso_ungvien_thongtin_giadinhs to count.
     * @example
     * // Count the number of Hoso_ungvien_thongtin_giadinhs
     * const count = await prisma.hoso_ungvien_thongtin_giadinh.count({
     *   where: {
     *     // ... the filter for the Hoso_ungvien_thongtin_giadinhs we want to count
     *   }
     * })
    **/
    count<T extends hoso_ungvien_thongtin_giadinhCountArgs>(
      args?: Subset<T, hoso_ungvien_thongtin_giadinhCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hoso_ungvien_thongtin_giadinhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hoso_ungvien_thongtin_giadinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_thongtin_giadinhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hoso_ungvien_thongtin_giadinhAggregateArgs>(args: Subset<T, Hoso_ungvien_thongtin_giadinhAggregateArgs>): PrismaPromise<GetHoso_ungvien_thongtin_giadinhAggregateType<T>>

    /**
     * Group by Hoso_ungvien_thongtin_giadinh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hoso_ungvien_thongtin_giadinhGroupByArgs} args - Group by arguments.
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
      T extends Hoso_ungvien_thongtin_giadinhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hoso_ungvien_thongtin_giadinhGroupByArgs['orderBy'] }
        : { orderBy?: Hoso_ungvien_thongtin_giadinhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Hoso_ungvien_thongtin_giadinhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoso_ungvien_thongtin_giadinhGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for hoso_ungvien_thongtin_giadinh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hoso_ungvien_thongtin_giadinhClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienArgs = {}>(args?: Subset<T, hoso_ungvienArgs>): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * hoso_ungvien_thongtin_giadinh findUnique
   */
  export type hoso_ungvien_thongtin_giadinhFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * Throw an Error if a hoso_ungvien_thongtin_giadinh can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_thongtin_giadinh to fetch.
     * 
    **/
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
  }


  /**
   * hoso_ungvien_thongtin_giadinh findFirst
   */
  export type hoso_ungvien_thongtin_giadinhFindFirstArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * Throw an Error if a hoso_ungvien_thongtin_giadinh can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which hoso_ungvien_thongtin_giadinh to fetch.
     * 
    **/
    where?: hoso_ungvien_thongtin_giadinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_thongtin_giadinhs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_thongtin_giadinhOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    cursor?: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_thongtin_giadinhs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    distinct?: Enumerable<Hoso_ungvien_thongtin_giadinhScalarFieldEnum>
  }


  /**
   * hoso_ungvien_thongtin_giadinh findMany
   */
  export type hoso_ungvien_thongtin_giadinhFindManyArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * Filter, which hoso_ungvien_thongtin_giadinhs to fetch.
     * 
    **/
    where?: hoso_ungvien_thongtin_giadinhWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hoso_ungvien_thongtin_giadinhs to fetch.
     * 
    **/
    orderBy?: Enumerable<hoso_ungvien_thongtin_giadinhOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    cursor?: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hoso_ungvien_thongtin_giadinhs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Hoso_ungvien_thongtin_giadinhScalarFieldEnum>
  }


  /**
   * hoso_ungvien_thongtin_giadinh create
   */
  export type hoso_ungvien_thongtin_giadinhCreateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * The data needed to create a hoso_ungvien_thongtin_giadinh.
     * 
    **/
    data: XOR<hoso_ungvien_thongtin_giadinhCreateInput, hoso_ungvien_thongtin_giadinhUncheckedCreateInput>
  }


  /**
   * hoso_ungvien_thongtin_giadinh createMany
   */
  export type hoso_ungvien_thongtin_giadinhCreateManyArgs = {
    /**
     * The data used to create many hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    data: Enumerable<hoso_ungvien_thongtin_giadinhCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * hoso_ungvien_thongtin_giadinh update
   */
  export type hoso_ungvien_thongtin_giadinhUpdateArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * The data needed to update a hoso_ungvien_thongtin_giadinh.
     * 
    **/
    data: XOR<hoso_ungvien_thongtin_giadinhUpdateInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateInput>
    /**
     * Choose, which hoso_ungvien_thongtin_giadinh to update.
     * 
    **/
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
  }


  /**
   * hoso_ungvien_thongtin_giadinh updateMany
   */
  export type hoso_ungvien_thongtin_giadinhUpdateManyArgs = {
    /**
     * The data used to update hoso_ungvien_thongtin_giadinhs.
     * 
    **/
    data: XOR<hoso_ungvien_thongtin_giadinhUpdateManyMutationInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateManyInput>
    /**
     * Filter which hoso_ungvien_thongtin_giadinhs to update
     * 
    **/
    where?: hoso_ungvien_thongtin_giadinhWhereInput
  }


  /**
   * hoso_ungvien_thongtin_giadinh upsert
   */
  export type hoso_ungvien_thongtin_giadinhUpsertArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * The filter to search for the hoso_ungvien_thongtin_giadinh to update in case it exists.
     * 
    **/
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    /**
     * In case the hoso_ungvien_thongtin_giadinh found by the `where` argument doesn't exist, create a new hoso_ungvien_thongtin_giadinh with this data.
     * 
    **/
    create: XOR<hoso_ungvien_thongtin_giadinhCreateInput, hoso_ungvien_thongtin_giadinhUncheckedCreateInput>
    /**
     * In case the hoso_ungvien_thongtin_giadinh was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<hoso_ungvien_thongtin_giadinhUpdateInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateInput>
  }


  /**
   * hoso_ungvien_thongtin_giadinh delete
   */
  export type hoso_ungvien_thongtin_giadinhDeleteArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
    /**
     * Filter which hoso_ungvien_thongtin_giadinh to delete.
     * 
    **/
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
  }


  /**
   * hoso_ungvien_thongtin_giadinh deleteMany
   */
  export type hoso_ungvien_thongtin_giadinhDeleteManyArgs = {
    /**
     * Filter which hoso_ungvien_thongtin_giadinhs to delete
     * 
    **/
    where?: hoso_ungvien_thongtin_giadinhWhereInput
  }


  /**
   * hoso_ungvien_thongtin_giadinh without action
   */
  export type hoso_ungvien_thongtin_giadinhArgs = {
    /**
     * Select specific fields to fetch from the hoso_ungvien_thongtin_giadinh
     * 
    **/
    select?: hoso_ungvien_thongtin_giadinhSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: hoso_ungvien_thongtin_giadinhInclude | null
  }



  /**
   * Model ketqua_thituyen
   */


  export type AggregateKetqua_thituyen = {
    _count: Ketqua_thituyenCountAggregateOutputType | null
    _avg: Ketqua_thituyenAvgAggregateOutputType | null
    _sum: Ketqua_thituyenSumAggregateOutputType | null
    _min: Ketqua_thituyenMinAggregateOutputType | null
    _max: Ketqua_thituyenMaxAggregateOutputType | null
  }

  export type Ketqua_thituyenAvgAggregateOutputType = {
    ketqua_id: number | null
    lichthi_ct_id: number | null
  }

  export type Ketqua_thituyenSumAggregateOutputType = {
    ketqua_id: bigint | null
    lichthi_ct_id: bigint | null
  }

  export type Ketqua_thituyenMinAggregateOutputType = {
    ketqua_id: bigint | null
    tongdiem: string | null
    danhgia_baithi: string | null
    ketqua: string | null
    upload_file: string | null
    trangthai: boolean | null
    lichthi_ct_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ketqua_thituyenMaxAggregateOutputType = {
    ketqua_id: bigint | null
    tongdiem: string | null
    danhgia_baithi: string | null
    ketqua: string | null
    upload_file: string | null
    trangthai: boolean | null
    lichthi_ct_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Ketqua_thituyenCountAggregateOutputType = {
    ketqua_id: number
    tongdiem: number
    danhgia_baithi: number
    ketqua: number
    upload_file: number
    trangthai: number
    lichthi_ct_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Ketqua_thituyenAvgAggregateInputType = {
    ketqua_id?: true
    lichthi_ct_id?: true
  }

  export type Ketqua_thituyenSumAggregateInputType = {
    ketqua_id?: true
    lichthi_ct_id?: true
  }

  export type Ketqua_thituyenMinAggregateInputType = {
    ketqua_id?: true
    tongdiem?: true
    danhgia_baithi?: true
    ketqua?: true
    upload_file?: true
    trangthai?: true
    lichthi_ct_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Ketqua_thituyenMaxAggregateInputType = {
    ketqua_id?: true
    tongdiem?: true
    danhgia_baithi?: true
    ketqua?: true
    upload_file?: true
    trangthai?: true
    lichthi_ct_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Ketqua_thituyenCountAggregateInputType = {
    ketqua_id?: true
    tongdiem?: true
    danhgia_baithi?: true
    ketqua?: true
    upload_file?: true
    trangthai?: true
    lichthi_ct_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Ketqua_thituyenAggregateArgs = {
    /**
     * Filter which ketqua_thituyen to aggregate.
     * 
    **/
    where?: ketqua_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ketqua_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ketqua_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ketqua_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ketqua_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ketqua_thituyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ketqua_thituyens
    **/
    _count?: true | Ketqua_thituyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ketqua_thituyenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ketqua_thituyenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ketqua_thituyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ketqua_thituyenMaxAggregateInputType
  }

  export type GetKetqua_thituyenAggregateType<T extends Ketqua_thituyenAggregateArgs> = {
        [P in keyof T & keyof AggregateKetqua_thituyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKetqua_thituyen[P]>
      : GetScalarType<T[P], AggregateKetqua_thituyen[P]>
  }




  export type Ketqua_thituyenGroupByArgs = {
    where?: ketqua_thituyenWhereInput
    orderBy?: Enumerable<ketqua_thituyenOrderByWithAggregationInput>
    by: Array<Ketqua_thituyenScalarFieldEnum>
    having?: ketqua_thituyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ketqua_thituyenCountAggregateInputType | true
    _avg?: Ketqua_thituyenAvgAggregateInputType
    _sum?: Ketqua_thituyenSumAggregateInputType
    _min?: Ketqua_thituyenMinAggregateInputType
    _max?: Ketqua_thituyenMaxAggregateInputType
  }


  export type Ketqua_thituyenGroupByOutputType = {
    ketqua_id: bigint
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    lichthi_ct_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Ketqua_thituyenCountAggregateOutputType | null
    _avg: Ketqua_thituyenAvgAggregateOutputType | null
    _sum: Ketqua_thituyenSumAggregateOutputType | null
    _min: Ketqua_thituyenMinAggregateOutputType | null
    _max: Ketqua_thituyenMaxAggregateOutputType | null
  }

  type GetKetqua_thituyenGroupByPayload<T extends Ketqua_thituyenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Ketqua_thituyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ketqua_thituyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ketqua_thituyenGroupByOutputType[P]>
            : GetScalarType<T[P], Ketqua_thituyenGroupByOutputType[P]>
        }
      >
    >


  export type ketqua_thituyenSelect = {
    ketqua_id?: boolean
    tongdiem?: boolean
    danhgia_baithi?: boolean
    ketqua?: boolean
    upload_file?: boolean
    trangthai?: boolean
    lichthi_ct_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietArgs
  }

  export type ketqua_thituyenInclude = {
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietArgs
  }

  export type ketqua_thituyenGetPayload<
    S extends boolean | null | undefined | ketqua_thituyenArgs,
    U = keyof S
      > = S extends true
        ? ketqua_thituyen
    : S extends undefined
    ? never
    : S extends ketqua_thituyenArgs | ketqua_thituyenFindManyArgs
    ?'include' extends U
    ? ketqua_thituyen  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lich_thituyen_chitiet' ? lich_thituyen_chitietGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lich_thituyen_chitiet' ? lich_thituyen_chitietGetPayload<S['select'][P]> :  P extends keyof ketqua_thituyen ? ketqua_thituyen[P] : never
  } 
    : ketqua_thituyen
  : ketqua_thituyen


  type ketqua_thituyenCountArgs = Merge<
    Omit<ketqua_thituyenFindManyArgs, 'select' | 'include'> & {
      select?: Ketqua_thituyenCountAggregateInputType | true
    }
  >

  export interface ketqua_thituyenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ketqua_thituyen that matches the filter.
     * @param {ketqua_thituyenFindUniqueArgs} args - Arguments to find a Ketqua_thituyen
     * @example
     * // Get one Ketqua_thituyen
     * const ketqua_thituyen = await prisma.ketqua_thituyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ketqua_thituyenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ketqua_thituyenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ketqua_thituyen'> extends True ? CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>> : CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen | null >, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T> | null >>

    /**
     * Find the first Ketqua_thituyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ketqua_thituyenFindFirstArgs} args - Arguments to find a Ketqua_thituyen
     * @example
     * // Get one Ketqua_thituyen
     * const ketqua_thituyen = await prisma.ketqua_thituyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ketqua_thituyenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ketqua_thituyenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ketqua_thituyen'> extends True ? CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>> : CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen | null >, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T> | null >>

    /**
     * Find zero or more Ketqua_thituyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ketqua_thituyenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ketqua_thituyens
     * const ketqua_thituyens = await prisma.ketqua_thituyen.findMany()
     * 
     * // Get first 10 Ketqua_thituyens
     * const ketqua_thituyens = await prisma.ketqua_thituyen.findMany({ take: 10 })
     * 
     * // Only select the `ketqua_id`
     * const ketqua_thituyenWithKetqua_idOnly = await prisma.ketqua_thituyen.findMany({ select: { ketqua_id: true } })
     * 
    **/
    findMany<T extends ketqua_thituyenFindManyArgs>(
      args?: SelectSubset<T, ketqua_thituyenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ketqua_thituyen>>, PrismaPromise<Array<ketqua_thituyenGetPayload<T>>>>

    /**
     * Create a Ketqua_thituyen.
     * @param {ketqua_thituyenCreateArgs} args - Arguments to create a Ketqua_thituyen.
     * @example
     * // Create one Ketqua_thituyen
     * const Ketqua_thituyen = await prisma.ketqua_thituyen.create({
     *   data: {
     *     // ... data to create a Ketqua_thituyen
     *   }
     * })
     * 
    **/
    create<T extends ketqua_thituyenCreateArgs>(
      args: SelectSubset<T, ketqua_thituyenCreateArgs>
    ): CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>>

    /**
     * Create many Ketqua_thituyens.
     *     @param {ketqua_thituyenCreateManyArgs} args - Arguments to create many Ketqua_thituyens.
     *     @example
     *     // Create many Ketqua_thituyens
     *     const ketqua_thituyen = await prisma.ketqua_thituyen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ketqua_thituyenCreateManyArgs>(
      args?: SelectSubset<T, ketqua_thituyenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ketqua_thituyen.
     * @param {ketqua_thituyenDeleteArgs} args - Arguments to delete one Ketqua_thituyen.
     * @example
     * // Delete one Ketqua_thituyen
     * const Ketqua_thituyen = await prisma.ketqua_thituyen.delete({
     *   where: {
     *     // ... filter to delete one Ketqua_thituyen
     *   }
     * })
     * 
    **/
    delete<T extends ketqua_thituyenDeleteArgs>(
      args: SelectSubset<T, ketqua_thituyenDeleteArgs>
    ): CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>>

    /**
     * Update one Ketqua_thituyen.
     * @param {ketqua_thituyenUpdateArgs} args - Arguments to update one Ketqua_thituyen.
     * @example
     * // Update one Ketqua_thituyen
     * const ketqua_thituyen = await prisma.ketqua_thituyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ketqua_thituyenUpdateArgs>(
      args: SelectSubset<T, ketqua_thituyenUpdateArgs>
    ): CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>>

    /**
     * Delete zero or more Ketqua_thituyens.
     * @param {ketqua_thituyenDeleteManyArgs} args - Arguments to filter Ketqua_thituyens to delete.
     * @example
     * // Delete a few Ketqua_thituyens
     * const { count } = await prisma.ketqua_thituyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ketqua_thituyenDeleteManyArgs>(
      args?: SelectSubset<T, ketqua_thituyenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ketqua_thituyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ketqua_thituyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ketqua_thituyens
     * const ketqua_thituyen = await prisma.ketqua_thituyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ketqua_thituyenUpdateManyArgs>(
      args: SelectSubset<T, ketqua_thituyenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ketqua_thituyen.
     * @param {ketqua_thituyenUpsertArgs} args - Arguments to update or create a Ketqua_thituyen.
     * @example
     * // Update or create a Ketqua_thituyen
     * const ketqua_thituyen = await prisma.ketqua_thituyen.upsert({
     *   create: {
     *     // ... data to create a Ketqua_thituyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ketqua_thituyen we want to update
     *   }
     * })
    **/
    upsert<T extends ketqua_thituyenUpsertArgs>(
      args: SelectSubset<T, ketqua_thituyenUpsertArgs>
    ): CheckSelect<T, Prisma__ketqua_thituyenClient<ketqua_thituyen>, Prisma__ketqua_thituyenClient<ketqua_thituyenGetPayload<T>>>

    /**
     * Count the number of Ketqua_thituyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ketqua_thituyenCountArgs} args - Arguments to filter Ketqua_thituyens to count.
     * @example
     * // Count the number of Ketqua_thituyens
     * const count = await prisma.ketqua_thituyen.count({
     *   where: {
     *     // ... the filter for the Ketqua_thituyens we want to count
     *   }
     * })
    **/
    count<T extends ketqua_thituyenCountArgs>(
      args?: Subset<T, ketqua_thituyenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ketqua_thituyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ketqua_thituyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ketqua_thituyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ketqua_thituyenAggregateArgs>(args: Subset<T, Ketqua_thituyenAggregateArgs>): PrismaPromise<GetKetqua_thituyenAggregateType<T>>

    /**
     * Group by Ketqua_thituyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ketqua_thituyenGroupByArgs} args - Group by arguments.
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
      T extends Ketqua_thituyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ketqua_thituyenGroupByArgs['orderBy'] }
        : { orderBy?: Ketqua_thituyenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Ketqua_thituyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKetqua_thituyenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ketqua_thituyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ketqua_thituyenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    lich_thituyen_chitiet<T extends lich_thituyen_chitietArgs = {}>(args?: Subset<T, lich_thituyen_chitietArgs>): CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet | null >, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ketqua_thituyen findUnique
   */
  export type ketqua_thituyenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * Throw an Error if a ketqua_thituyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ketqua_thituyen to fetch.
     * 
    **/
    where: ketqua_thituyenWhereUniqueInput
  }


  /**
   * ketqua_thituyen findFirst
   */
  export type ketqua_thituyenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * Throw an Error if a ketqua_thituyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ketqua_thituyen to fetch.
     * 
    **/
    where?: ketqua_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ketqua_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ketqua_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ketqua_thituyens.
     * 
    **/
    cursor?: ketqua_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ketqua_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ketqua_thituyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ketqua_thituyens.
     * 
    **/
    distinct?: Enumerable<Ketqua_thituyenScalarFieldEnum>
  }


  /**
   * ketqua_thituyen findMany
   */
  export type ketqua_thituyenFindManyArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * Filter, which ketqua_thituyens to fetch.
     * 
    **/
    where?: ketqua_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ketqua_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ketqua_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ketqua_thituyens.
     * 
    **/
    cursor?: ketqua_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ketqua_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ketqua_thituyens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Ketqua_thituyenScalarFieldEnum>
  }


  /**
   * ketqua_thituyen create
   */
  export type ketqua_thituyenCreateArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * The data needed to create a ketqua_thituyen.
     * 
    **/
    data: XOR<ketqua_thituyenCreateInput, ketqua_thituyenUncheckedCreateInput>
  }


  /**
   * ketqua_thituyen createMany
   */
  export type ketqua_thituyenCreateManyArgs = {
    /**
     * The data used to create many ketqua_thituyens.
     * 
    **/
    data: Enumerable<ketqua_thituyenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ketqua_thituyen update
   */
  export type ketqua_thituyenUpdateArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * The data needed to update a ketqua_thituyen.
     * 
    **/
    data: XOR<ketqua_thituyenUpdateInput, ketqua_thituyenUncheckedUpdateInput>
    /**
     * Choose, which ketqua_thituyen to update.
     * 
    **/
    where: ketqua_thituyenWhereUniqueInput
  }


  /**
   * ketqua_thituyen updateMany
   */
  export type ketqua_thituyenUpdateManyArgs = {
    /**
     * The data used to update ketqua_thituyens.
     * 
    **/
    data: XOR<ketqua_thituyenUpdateManyMutationInput, ketqua_thituyenUncheckedUpdateManyInput>
    /**
     * Filter which ketqua_thituyens to update
     * 
    **/
    where?: ketqua_thituyenWhereInput
  }


  /**
   * ketqua_thituyen upsert
   */
  export type ketqua_thituyenUpsertArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * The filter to search for the ketqua_thituyen to update in case it exists.
     * 
    **/
    where: ketqua_thituyenWhereUniqueInput
    /**
     * In case the ketqua_thituyen found by the `where` argument doesn't exist, create a new ketqua_thituyen with this data.
     * 
    **/
    create: XOR<ketqua_thituyenCreateInput, ketqua_thituyenUncheckedCreateInput>
    /**
     * In case the ketqua_thituyen was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ketqua_thituyenUpdateInput, ketqua_thituyenUncheckedUpdateInput>
  }


  /**
   * ketqua_thituyen delete
   */
  export type ketqua_thituyenDeleteArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
    /**
     * Filter which ketqua_thituyen to delete.
     * 
    **/
    where: ketqua_thituyenWhereUniqueInput
  }


  /**
   * ketqua_thituyen deleteMany
   */
  export type ketqua_thituyenDeleteManyArgs = {
    /**
     * Filter which ketqua_thituyens to delete
     * 
    **/
    where?: ketqua_thituyenWhereInput
  }


  /**
   * ketqua_thituyen without action
   */
  export type ketqua_thituyenArgs = {
    /**
     * Select specific fields to fetch from the ketqua_thituyen
     * 
    **/
    select?: ketqua_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ketqua_thituyenInclude | null
  }



  /**
   * Model lich_thituyen
   */


  export type AggregateLich_thituyen = {
    _count: Lich_thituyenCountAggregateOutputType | null
    _avg: Lich_thituyenAvgAggregateOutputType | null
    _sum: Lich_thituyenSumAggregateOutputType | null
    _min: Lich_thituyenMinAggregateOutputType | null
    _max: Lich_thituyenMaxAggregateOutputType | null
  }

  export type Lich_thituyenAvgAggregateOutputType = {
    lichthi_id: number | null
    soluong: number | null
  }

  export type Lich_thituyenSumAggregateOutputType = {
    lichthi_id: bigint | null
    soluong: number | null
  }

  export type Lich_thituyenMinAggregateOutputType = {
    lichthi_id: bigint | null
    ngaythi: Date | null
    diadiem: string | null
    noidung_thituyen: string | null
    thoigian: Date | null
    soluong: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lich_thituyenMaxAggregateOutputType = {
    lichthi_id: bigint | null
    ngaythi: Date | null
    diadiem: string | null
    noidung_thituyen: string | null
    thoigian: Date | null
    soluong: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lich_thituyenCountAggregateOutputType = {
    lichthi_id: number
    ngaythi: number
    diadiem: number
    noidung_thituyen: number
    thoigian: number
    soluong: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lich_thituyenAvgAggregateInputType = {
    lichthi_id?: true
    soluong?: true
  }

  export type Lich_thituyenSumAggregateInputType = {
    lichthi_id?: true
    soluong?: true
  }

  export type Lich_thituyenMinAggregateInputType = {
    lichthi_id?: true
    ngaythi?: true
    diadiem?: true
    noidung_thituyen?: true
    thoigian?: true
    soluong?: true
    created_at?: true
    updated_at?: true
  }

  export type Lich_thituyenMaxAggregateInputType = {
    lichthi_id?: true
    ngaythi?: true
    diadiem?: true
    noidung_thituyen?: true
    thoigian?: true
    soluong?: true
    created_at?: true
    updated_at?: true
  }

  export type Lich_thituyenCountAggregateInputType = {
    lichthi_id?: true
    ngaythi?: true
    diadiem?: true
    noidung_thituyen?: true
    thoigian?: true
    soluong?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lich_thituyenAggregateArgs = {
    /**
     * Filter which lich_thituyen to aggregate.
     * 
    **/
    where?: lich_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: lich_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lich_thituyens
    **/
    _count?: true | Lich_thituyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lich_thituyenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lich_thituyenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lich_thituyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lich_thituyenMaxAggregateInputType
  }

  export type GetLich_thituyenAggregateType<T extends Lich_thituyenAggregateArgs> = {
        [P in keyof T & keyof AggregateLich_thituyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLich_thituyen[P]>
      : GetScalarType<T[P], AggregateLich_thituyen[P]>
  }




  export type Lich_thituyenGroupByArgs = {
    where?: lich_thituyenWhereInput
    orderBy?: Enumerable<lich_thituyenOrderByWithAggregationInput>
    by: Array<Lich_thituyenScalarFieldEnum>
    having?: lich_thituyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lich_thituyenCountAggregateInputType | true
    _avg?: Lich_thituyenAvgAggregateInputType
    _sum?: Lich_thituyenSumAggregateInputType
    _min?: Lich_thituyenMinAggregateInputType
    _max?: Lich_thituyenMaxAggregateInputType
  }


  export type Lich_thituyenGroupByOutputType = {
    lichthi_id: bigint
    ngaythi: Date
    diadiem: string
    noidung_thituyen: string
    thoigian: Date
    soluong: number
    created_at: Date | null
    updated_at: Date | null
    _count: Lich_thituyenCountAggregateOutputType | null
    _avg: Lich_thituyenAvgAggregateOutputType | null
    _sum: Lich_thituyenSumAggregateOutputType | null
    _min: Lich_thituyenMinAggregateOutputType | null
    _max: Lich_thituyenMaxAggregateOutputType | null
  }

  type GetLich_thituyenGroupByPayload<T extends Lich_thituyenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Lich_thituyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lich_thituyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lich_thituyenGroupByOutputType[P]>
            : GetScalarType<T[P], Lich_thituyenGroupByOutputType[P]>
        }
      >
    >


  export type lich_thituyenSelect = {
    lichthi_id?: boolean
    ngaythi?: boolean
    diadiem?: boolean
    noidung_thituyen?: boolean
    thoigian?: boolean
    soluong?: boolean
    created_at?: boolean
    updated_at?: boolean
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietFindManyArgs
    _count?: boolean | Lich_thituyenCountOutputTypeArgs
  }

  export type lich_thituyenInclude = {
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietFindManyArgs
    _count?: boolean | Lich_thituyenCountOutputTypeArgs
  }

  export type lich_thituyenGetPayload<
    S extends boolean | null | undefined | lich_thituyenArgs,
    U = keyof S
      > = S extends true
        ? lich_thituyen
    : S extends undefined
    ? never
    : S extends lich_thituyenArgs | lich_thituyenFindManyArgs
    ?'include' extends U
    ? lich_thituyen  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lich_thituyen_chitiet' ? Array < lich_thituyen_chitietGetPayload<S['include'][P]>>  :
        P extends '_count' ? Lich_thituyenCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lich_thituyen_chitiet' ? Array < lich_thituyen_chitietGetPayload<S['select'][P]>>  :
        P extends '_count' ? Lich_thituyenCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof lich_thituyen ? lich_thituyen[P] : never
  } 
    : lich_thituyen
  : lich_thituyen


  type lich_thituyenCountArgs = Merge<
    Omit<lich_thituyenFindManyArgs, 'select' | 'include'> & {
      select?: Lich_thituyenCountAggregateInputType | true
    }
  >

  export interface lich_thituyenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lich_thituyen that matches the filter.
     * @param {lich_thituyenFindUniqueArgs} args - Arguments to find a Lich_thituyen
     * @example
     * // Get one Lich_thituyen
     * const lich_thituyen = await prisma.lich_thituyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lich_thituyenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, lich_thituyenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'lich_thituyen'> extends True ? CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>> : CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen | null >, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T> | null >>

    /**
     * Find the first Lich_thituyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyenFindFirstArgs} args - Arguments to find a Lich_thituyen
     * @example
     * // Get one Lich_thituyen
     * const lich_thituyen = await prisma.lich_thituyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lich_thituyenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, lich_thituyenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'lich_thituyen'> extends True ? CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>> : CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen | null >, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T> | null >>

    /**
     * Find zero or more Lich_thituyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lich_thituyens
     * const lich_thituyens = await prisma.lich_thituyen.findMany()
     * 
     * // Get first 10 Lich_thituyens
     * const lich_thituyens = await prisma.lich_thituyen.findMany({ take: 10 })
     * 
     * // Only select the `lichthi_id`
     * const lich_thituyenWithLichthi_idOnly = await prisma.lich_thituyen.findMany({ select: { lichthi_id: true } })
     * 
    **/
    findMany<T extends lich_thituyenFindManyArgs>(
      args?: SelectSubset<T, lich_thituyenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<lich_thituyen>>, PrismaPromise<Array<lich_thituyenGetPayload<T>>>>

    /**
     * Create a Lich_thituyen.
     * @param {lich_thituyenCreateArgs} args - Arguments to create a Lich_thituyen.
     * @example
     * // Create one Lich_thituyen
     * const Lich_thituyen = await prisma.lich_thituyen.create({
     *   data: {
     *     // ... data to create a Lich_thituyen
     *   }
     * })
     * 
    **/
    create<T extends lich_thituyenCreateArgs>(
      args: SelectSubset<T, lich_thituyenCreateArgs>
    ): CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>>

    /**
     * Create many Lich_thituyens.
     *     @param {lich_thituyenCreateManyArgs} args - Arguments to create many Lich_thituyens.
     *     @example
     *     // Create many Lich_thituyens
     *     const lich_thituyen = await prisma.lich_thituyen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lich_thituyenCreateManyArgs>(
      args?: SelectSubset<T, lich_thituyenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lich_thituyen.
     * @param {lich_thituyenDeleteArgs} args - Arguments to delete one Lich_thituyen.
     * @example
     * // Delete one Lich_thituyen
     * const Lich_thituyen = await prisma.lich_thituyen.delete({
     *   where: {
     *     // ... filter to delete one Lich_thituyen
     *   }
     * })
     * 
    **/
    delete<T extends lich_thituyenDeleteArgs>(
      args: SelectSubset<T, lich_thituyenDeleteArgs>
    ): CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>>

    /**
     * Update one Lich_thituyen.
     * @param {lich_thituyenUpdateArgs} args - Arguments to update one Lich_thituyen.
     * @example
     * // Update one Lich_thituyen
     * const lich_thituyen = await prisma.lich_thituyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lich_thituyenUpdateArgs>(
      args: SelectSubset<T, lich_thituyenUpdateArgs>
    ): CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>>

    /**
     * Delete zero or more Lich_thituyens.
     * @param {lich_thituyenDeleteManyArgs} args - Arguments to filter Lich_thituyens to delete.
     * @example
     * // Delete a few Lich_thituyens
     * const { count } = await prisma.lich_thituyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lich_thituyenDeleteManyArgs>(
      args?: SelectSubset<T, lich_thituyenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lich_thituyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lich_thituyens
     * const lich_thituyen = await prisma.lich_thituyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lich_thituyenUpdateManyArgs>(
      args: SelectSubset<T, lich_thituyenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lich_thituyen.
     * @param {lich_thituyenUpsertArgs} args - Arguments to update or create a Lich_thituyen.
     * @example
     * // Update or create a Lich_thituyen
     * const lich_thituyen = await prisma.lich_thituyen.upsert({
     *   create: {
     *     // ... data to create a Lich_thituyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lich_thituyen we want to update
     *   }
     * })
    **/
    upsert<T extends lich_thituyenUpsertArgs>(
      args: SelectSubset<T, lich_thituyenUpsertArgs>
    ): CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen>, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T>>>

    /**
     * Count the number of Lich_thituyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyenCountArgs} args - Arguments to filter Lich_thituyens to count.
     * @example
     * // Count the number of Lich_thituyens
     * const count = await prisma.lich_thituyen.count({
     *   where: {
     *     // ... the filter for the Lich_thituyens we want to count
     *   }
     * })
    **/
    count<T extends lich_thituyenCountArgs>(
      args?: Subset<T, lich_thituyenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lich_thituyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lich_thituyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lich_thituyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lich_thituyenAggregateArgs>(args: Subset<T, Lich_thituyenAggregateArgs>): PrismaPromise<GetLich_thituyenAggregateType<T>>

    /**
     * Group by Lich_thituyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lich_thituyenGroupByArgs} args - Group by arguments.
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
      T extends Lich_thituyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lich_thituyenGroupByArgs['orderBy'] }
        : { orderBy?: Lich_thituyenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Lich_thituyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLich_thituyenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for lich_thituyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__lich_thituyenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    lich_thituyen_chitiet<T extends lich_thituyen_chitietFindManyArgs = {}>(args?: Subset<T, lich_thituyen_chitietFindManyArgs>): CheckSelect<T, PrismaPromise<Array<lich_thituyen_chitiet>>, PrismaPromise<Array<lich_thituyen_chitietGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * lich_thituyen findUnique
   */
  export type lich_thituyenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * Throw an Error if a lich_thituyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lich_thituyen to fetch.
     * 
    **/
    where: lich_thituyenWhereUniqueInput
  }


  /**
   * lich_thituyen findFirst
   */
  export type lich_thituyenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * Throw an Error if a lich_thituyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lich_thituyen to fetch.
     * 
    **/
    where?: lich_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lich_thituyens.
     * 
    **/
    cursor?: lich_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lich_thituyens.
     * 
    **/
    distinct?: Enumerable<Lich_thituyenScalarFieldEnum>
  }


  /**
   * lich_thituyen findMany
   */
  export type lich_thituyenFindManyArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * Filter, which lich_thituyens to fetch.
     * 
    **/
    where?: lich_thituyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyens to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lich_thituyens.
     * 
    **/
    cursor?: lich_thituyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Lich_thituyenScalarFieldEnum>
  }


  /**
   * lich_thituyen create
   */
  export type lich_thituyenCreateArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * The data needed to create a lich_thituyen.
     * 
    **/
    data: XOR<lich_thituyenCreateInput, lich_thituyenUncheckedCreateInput>
  }


  /**
   * lich_thituyen createMany
   */
  export type lich_thituyenCreateManyArgs = {
    /**
     * The data used to create many lich_thituyens.
     * 
    **/
    data: Enumerable<lich_thituyenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * lich_thituyen update
   */
  export type lich_thituyenUpdateArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * The data needed to update a lich_thituyen.
     * 
    **/
    data: XOR<lich_thituyenUpdateInput, lich_thituyenUncheckedUpdateInput>
    /**
     * Choose, which lich_thituyen to update.
     * 
    **/
    where: lich_thituyenWhereUniqueInput
  }


  /**
   * lich_thituyen updateMany
   */
  export type lich_thituyenUpdateManyArgs = {
    /**
     * The data used to update lich_thituyens.
     * 
    **/
    data: XOR<lich_thituyenUpdateManyMutationInput, lich_thituyenUncheckedUpdateManyInput>
    /**
     * Filter which lich_thituyens to update
     * 
    **/
    where?: lich_thituyenWhereInput
  }


  /**
   * lich_thituyen upsert
   */
  export type lich_thituyenUpsertArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * The filter to search for the lich_thituyen to update in case it exists.
     * 
    **/
    where: lich_thituyenWhereUniqueInput
    /**
     * In case the lich_thituyen found by the `where` argument doesn't exist, create a new lich_thituyen with this data.
     * 
    **/
    create: XOR<lich_thituyenCreateInput, lich_thituyenUncheckedCreateInput>
    /**
     * In case the lich_thituyen was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<lich_thituyenUpdateInput, lich_thituyenUncheckedUpdateInput>
  }


  /**
   * lich_thituyen delete
   */
  export type lich_thituyenDeleteArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
    /**
     * Filter which lich_thituyen to delete.
     * 
    **/
    where: lich_thituyenWhereUniqueInput
  }


  /**
   * lich_thituyen deleteMany
   */
  export type lich_thituyenDeleteManyArgs = {
    /**
     * Filter which lich_thituyens to delete
     * 
    **/
    where?: lich_thituyenWhereInput
  }


  /**
   * lich_thituyen without action
   */
  export type lich_thituyenArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen
     * 
    **/
    select?: lich_thituyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyenInclude | null
  }



  /**
   * Model lich_thituyen_chitiet
   */


  export type AggregateLich_thituyen_chitiet = {
    _count: Lich_thituyen_chitietCountAggregateOutputType | null
    _avg: Lich_thituyen_chitietAvgAggregateOutputType | null
    _sum: Lich_thituyen_chitietSumAggregateOutputType | null
    _min: Lich_thituyen_chitietMinAggregateOutputType | null
    _max: Lich_thituyen_chitietMaxAggregateOutputType | null
  }

  export type Lich_thituyen_chitietAvgAggregateOutputType = {
    lichthi_ct_id: number | null
    ungtuyen_id: number | null
    lichthi_id: number | null
  }

  export type Lich_thituyen_chitietSumAggregateOutputType = {
    lichthi_ct_id: bigint | null
    ungtuyen_id: bigint | null
    lichthi_id: bigint | null
  }

  export type Lich_thituyen_chitietMinAggregateOutputType = {
    lichthi_ct_id: bigint | null
    ungtuyen_id: bigint | null
    lichthi_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lich_thituyen_chitietMaxAggregateOutputType = {
    lichthi_ct_id: bigint | null
    ungtuyen_id: bigint | null
    lichthi_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Lich_thituyen_chitietCountAggregateOutputType = {
    lichthi_ct_id: number
    ungtuyen_id: number
    lichthi_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Lich_thituyen_chitietAvgAggregateInputType = {
    lichthi_ct_id?: true
    ungtuyen_id?: true
    lichthi_id?: true
  }

  export type Lich_thituyen_chitietSumAggregateInputType = {
    lichthi_ct_id?: true
    ungtuyen_id?: true
    lichthi_id?: true
  }

  export type Lich_thituyen_chitietMinAggregateInputType = {
    lichthi_ct_id?: true
    ungtuyen_id?: true
    lichthi_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Lich_thituyen_chitietMaxAggregateInputType = {
    lichthi_ct_id?: true
    ungtuyen_id?: true
    lichthi_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Lich_thituyen_chitietCountAggregateInputType = {
    lichthi_ct_id?: true
    ungtuyen_id?: true
    lichthi_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Lich_thituyen_chitietAggregateArgs = {
    /**
     * Filter which lich_thituyen_chitiet to aggregate.
     * 
    **/
    where?: lich_thituyen_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyen_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyen_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: lich_thituyen_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyen_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyen_chitiets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lich_thituyen_chitiets
    **/
    _count?: true | Lich_thituyen_chitietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lich_thituyen_chitietAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lich_thituyen_chitietSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lich_thituyen_chitietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lich_thituyen_chitietMaxAggregateInputType
  }

  export type GetLich_thituyen_chitietAggregateType<T extends Lich_thituyen_chitietAggregateArgs> = {
        [P in keyof T & keyof AggregateLich_thituyen_chitiet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLich_thituyen_chitiet[P]>
      : GetScalarType<T[P], AggregateLich_thituyen_chitiet[P]>
  }




  export type Lich_thituyen_chitietGroupByArgs = {
    where?: lich_thituyen_chitietWhereInput
    orderBy?: Enumerable<lich_thituyen_chitietOrderByWithAggregationInput>
    by: Array<Lich_thituyen_chitietScalarFieldEnum>
    having?: lich_thituyen_chitietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lich_thituyen_chitietCountAggregateInputType | true
    _avg?: Lich_thituyen_chitietAvgAggregateInputType
    _sum?: Lich_thituyen_chitietSumAggregateInputType
    _min?: Lich_thituyen_chitietMinAggregateInputType
    _max?: Lich_thituyen_chitietMaxAggregateInputType
  }


  export type Lich_thituyen_chitietGroupByOutputType = {
    lichthi_ct_id: bigint
    ungtuyen_id: bigint
    lichthi_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Lich_thituyen_chitietCountAggregateOutputType | null
    _avg: Lich_thituyen_chitietAvgAggregateOutputType | null
    _sum: Lich_thituyen_chitietSumAggregateOutputType | null
    _min: Lich_thituyen_chitietMinAggregateOutputType | null
    _max: Lich_thituyen_chitietMaxAggregateOutputType | null
  }

  type GetLich_thituyen_chitietGroupByPayload<T extends Lich_thituyen_chitietGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Lich_thituyen_chitietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lich_thituyen_chitietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lich_thituyen_chitietGroupByOutputType[P]>
            : GetScalarType<T[P], Lich_thituyen_chitietGroupByOutputType[P]>
        }
      >
    >


  export type lich_thituyen_chitietSelect = {
    lichthi_ct_id?: boolean
    ungtuyen_id?: boolean
    lichthi_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    lich_thituyen?: boolean | lich_thituyenArgs
    ungtuyen?: boolean | ungtuyenArgs
    ketqua_thituyen?: boolean | ketqua_thituyenFindManyArgs
    _count?: boolean | Lich_thituyen_chitietCountOutputTypeArgs
  }

  export type lich_thituyen_chitietInclude = {
    lich_thituyen?: boolean | lich_thituyenArgs
    ungtuyen?: boolean | ungtuyenArgs
    ketqua_thituyen?: boolean | ketqua_thituyenFindManyArgs
    _count?: boolean | Lich_thituyen_chitietCountOutputTypeArgs
  }

  export type lich_thituyen_chitietGetPayload<
    S extends boolean | null | undefined | lich_thituyen_chitietArgs,
    U = keyof S
      > = S extends true
        ? lich_thituyen_chitiet
    : S extends undefined
    ? never
    : S extends lich_thituyen_chitietArgs | lich_thituyen_chitietFindManyArgs
    ?'include' extends U
    ? lich_thituyen_chitiet  & {
    [P in TrueKeys<S['include']>]:
        P extends 'lich_thituyen' ? lich_thituyenGetPayload<S['include'][P]> :
        P extends 'ungtuyen' ? ungtuyenGetPayload<S['include'][P]> :
        P extends 'ketqua_thituyen' ? Array < ketqua_thituyenGetPayload<S['include'][P]>>  :
        P extends '_count' ? Lich_thituyen_chitietCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'lich_thituyen' ? lich_thituyenGetPayload<S['select'][P]> :
        P extends 'ungtuyen' ? ungtuyenGetPayload<S['select'][P]> :
        P extends 'ketqua_thituyen' ? Array < ketqua_thituyenGetPayload<S['select'][P]>>  :
        P extends '_count' ? Lich_thituyen_chitietCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof lich_thituyen_chitiet ? lich_thituyen_chitiet[P] : never
  } 
    : lich_thituyen_chitiet
  : lich_thituyen_chitiet


  type lich_thituyen_chitietCountArgs = Merge<
    Omit<lich_thituyen_chitietFindManyArgs, 'select' | 'include'> & {
      select?: Lich_thituyen_chitietCountAggregateInputType | true
    }
  >

  export interface lich_thituyen_chitietDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lich_thituyen_chitiet that matches the filter.
     * @param {lich_thituyen_chitietFindUniqueArgs} args - Arguments to find a Lich_thituyen_chitiet
     * @example
     * // Get one Lich_thituyen_chitiet
     * const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends lich_thituyen_chitietFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, lich_thituyen_chitietFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'lich_thituyen_chitiet'> extends True ? CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>> : CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet | null >, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T> | null >>

    /**
     * Find the first Lich_thituyen_chitiet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyen_chitietFindFirstArgs} args - Arguments to find a Lich_thituyen_chitiet
     * @example
     * // Get one Lich_thituyen_chitiet
     * const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends lich_thituyen_chitietFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, lich_thituyen_chitietFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'lich_thituyen_chitiet'> extends True ? CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>> : CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet | null >, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T> | null >>

    /**
     * Find zero or more Lich_thituyen_chitiets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyen_chitietFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lich_thituyen_chitiets
     * const lich_thituyen_chitiets = await prisma.lich_thituyen_chitiet.findMany()
     * 
     * // Get first 10 Lich_thituyen_chitiets
     * const lich_thituyen_chitiets = await prisma.lich_thituyen_chitiet.findMany({ take: 10 })
     * 
     * // Only select the `lichthi_ct_id`
     * const lich_thituyen_chitietWithLichthi_ct_idOnly = await prisma.lich_thituyen_chitiet.findMany({ select: { lichthi_ct_id: true } })
     * 
    **/
    findMany<T extends lich_thituyen_chitietFindManyArgs>(
      args?: SelectSubset<T, lich_thituyen_chitietFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<lich_thituyen_chitiet>>, PrismaPromise<Array<lich_thituyen_chitietGetPayload<T>>>>

    /**
     * Create a Lich_thituyen_chitiet.
     * @param {lich_thituyen_chitietCreateArgs} args - Arguments to create a Lich_thituyen_chitiet.
     * @example
     * // Create one Lich_thituyen_chitiet
     * const Lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.create({
     *   data: {
     *     // ... data to create a Lich_thituyen_chitiet
     *   }
     * })
     * 
    **/
    create<T extends lich_thituyen_chitietCreateArgs>(
      args: SelectSubset<T, lich_thituyen_chitietCreateArgs>
    ): CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>>

    /**
     * Create many Lich_thituyen_chitiets.
     *     @param {lich_thituyen_chitietCreateManyArgs} args - Arguments to create many Lich_thituyen_chitiets.
     *     @example
     *     // Create many Lich_thituyen_chitiets
     *     const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends lich_thituyen_chitietCreateManyArgs>(
      args?: SelectSubset<T, lich_thituyen_chitietCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lich_thituyen_chitiet.
     * @param {lich_thituyen_chitietDeleteArgs} args - Arguments to delete one Lich_thituyen_chitiet.
     * @example
     * // Delete one Lich_thituyen_chitiet
     * const Lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.delete({
     *   where: {
     *     // ... filter to delete one Lich_thituyen_chitiet
     *   }
     * })
     * 
    **/
    delete<T extends lich_thituyen_chitietDeleteArgs>(
      args: SelectSubset<T, lich_thituyen_chitietDeleteArgs>
    ): CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>>

    /**
     * Update one Lich_thituyen_chitiet.
     * @param {lich_thituyen_chitietUpdateArgs} args - Arguments to update one Lich_thituyen_chitiet.
     * @example
     * // Update one Lich_thituyen_chitiet
     * const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends lich_thituyen_chitietUpdateArgs>(
      args: SelectSubset<T, lich_thituyen_chitietUpdateArgs>
    ): CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>>

    /**
     * Delete zero or more Lich_thituyen_chitiets.
     * @param {lich_thituyen_chitietDeleteManyArgs} args - Arguments to filter Lich_thituyen_chitiets to delete.
     * @example
     * // Delete a few Lich_thituyen_chitiets
     * const { count } = await prisma.lich_thituyen_chitiet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends lich_thituyen_chitietDeleteManyArgs>(
      args?: SelectSubset<T, lich_thituyen_chitietDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lich_thituyen_chitiets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyen_chitietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lich_thituyen_chitiets
     * const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends lich_thituyen_chitietUpdateManyArgs>(
      args: SelectSubset<T, lich_thituyen_chitietUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lich_thituyen_chitiet.
     * @param {lich_thituyen_chitietUpsertArgs} args - Arguments to update or create a Lich_thituyen_chitiet.
     * @example
     * // Update or create a Lich_thituyen_chitiet
     * const lich_thituyen_chitiet = await prisma.lich_thituyen_chitiet.upsert({
     *   create: {
     *     // ... data to create a Lich_thituyen_chitiet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lich_thituyen_chitiet we want to update
     *   }
     * })
    **/
    upsert<T extends lich_thituyen_chitietUpsertArgs>(
      args: SelectSubset<T, lich_thituyen_chitietUpsertArgs>
    ): CheckSelect<T, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitiet>, Prisma__lich_thituyen_chitietClient<lich_thituyen_chitietGetPayload<T>>>

    /**
     * Count the number of Lich_thituyen_chitiets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lich_thituyen_chitietCountArgs} args - Arguments to filter Lich_thituyen_chitiets to count.
     * @example
     * // Count the number of Lich_thituyen_chitiets
     * const count = await prisma.lich_thituyen_chitiet.count({
     *   where: {
     *     // ... the filter for the Lich_thituyen_chitiets we want to count
     *   }
     * })
    **/
    count<T extends lich_thituyen_chitietCountArgs>(
      args?: Subset<T, lich_thituyen_chitietCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lich_thituyen_chitietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lich_thituyen_chitiet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lich_thituyen_chitietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lich_thituyen_chitietAggregateArgs>(args: Subset<T, Lich_thituyen_chitietAggregateArgs>): PrismaPromise<GetLich_thituyen_chitietAggregateType<T>>

    /**
     * Group by Lich_thituyen_chitiet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lich_thituyen_chitietGroupByArgs} args - Group by arguments.
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
      T extends Lich_thituyen_chitietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lich_thituyen_chitietGroupByArgs['orderBy'] }
        : { orderBy?: Lich_thituyen_chitietGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Lich_thituyen_chitietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLich_thituyen_chitietGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for lich_thituyen_chitiet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__lich_thituyen_chitietClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    lich_thituyen<T extends lich_thituyenArgs = {}>(args?: Subset<T, lich_thituyenArgs>): CheckSelect<T, Prisma__lich_thituyenClient<lich_thituyen | null >, Prisma__lich_thituyenClient<lich_thituyenGetPayload<T> | null >>;

    ungtuyen<T extends ungtuyenArgs = {}>(args?: Subset<T, ungtuyenArgs>): CheckSelect<T, Prisma__ungtuyenClient<ungtuyen | null >, Prisma__ungtuyenClient<ungtuyenGetPayload<T> | null >>;

    ketqua_thituyen<T extends ketqua_thituyenFindManyArgs = {}>(args?: Subset<T, ketqua_thituyenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ketqua_thituyen>>, PrismaPromise<Array<ketqua_thituyenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * lich_thituyen_chitiet findUnique
   */
  export type lich_thituyen_chitietFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * Throw an Error if a lich_thituyen_chitiet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lich_thituyen_chitiet to fetch.
     * 
    **/
    where: lich_thituyen_chitietWhereUniqueInput
  }


  /**
   * lich_thituyen_chitiet findFirst
   */
  export type lich_thituyen_chitietFindFirstArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * Throw an Error if a lich_thituyen_chitiet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which lich_thituyen_chitiet to fetch.
     * 
    **/
    where?: lich_thituyen_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyen_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyen_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lich_thituyen_chitiets.
     * 
    **/
    cursor?: lich_thituyen_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyen_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyen_chitiets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lich_thituyen_chitiets.
     * 
    **/
    distinct?: Enumerable<Lich_thituyen_chitietScalarFieldEnum>
  }


  /**
   * lich_thituyen_chitiet findMany
   */
  export type lich_thituyen_chitietFindManyArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * Filter, which lich_thituyen_chitiets to fetch.
     * 
    **/
    where?: lich_thituyen_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lich_thituyen_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<lich_thituyen_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lich_thituyen_chitiets.
     * 
    **/
    cursor?: lich_thituyen_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lich_thituyen_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lich_thituyen_chitiets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Lich_thituyen_chitietScalarFieldEnum>
  }


  /**
   * lich_thituyen_chitiet create
   */
  export type lich_thituyen_chitietCreateArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * The data needed to create a lich_thituyen_chitiet.
     * 
    **/
    data: XOR<lich_thituyen_chitietCreateInput, lich_thituyen_chitietUncheckedCreateInput>
  }


  /**
   * lich_thituyen_chitiet createMany
   */
  export type lich_thituyen_chitietCreateManyArgs = {
    /**
     * The data used to create many lich_thituyen_chitiets.
     * 
    **/
    data: Enumerable<lich_thituyen_chitietCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * lich_thituyen_chitiet update
   */
  export type lich_thituyen_chitietUpdateArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * The data needed to update a lich_thituyen_chitiet.
     * 
    **/
    data: XOR<lich_thituyen_chitietUpdateInput, lich_thituyen_chitietUncheckedUpdateInput>
    /**
     * Choose, which lich_thituyen_chitiet to update.
     * 
    **/
    where: lich_thituyen_chitietWhereUniqueInput
  }


  /**
   * lich_thituyen_chitiet updateMany
   */
  export type lich_thituyen_chitietUpdateManyArgs = {
    /**
     * The data used to update lich_thituyen_chitiets.
     * 
    **/
    data: XOR<lich_thituyen_chitietUpdateManyMutationInput, lich_thituyen_chitietUncheckedUpdateManyInput>
    /**
     * Filter which lich_thituyen_chitiets to update
     * 
    **/
    where?: lich_thituyen_chitietWhereInput
  }


  /**
   * lich_thituyen_chitiet upsert
   */
  export type lich_thituyen_chitietUpsertArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * The filter to search for the lich_thituyen_chitiet to update in case it exists.
     * 
    **/
    where: lich_thituyen_chitietWhereUniqueInput
    /**
     * In case the lich_thituyen_chitiet found by the `where` argument doesn't exist, create a new lich_thituyen_chitiet with this data.
     * 
    **/
    create: XOR<lich_thituyen_chitietCreateInput, lich_thituyen_chitietUncheckedCreateInput>
    /**
     * In case the lich_thituyen_chitiet was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<lich_thituyen_chitietUpdateInput, lich_thituyen_chitietUncheckedUpdateInput>
  }


  /**
   * lich_thituyen_chitiet delete
   */
  export type lich_thituyen_chitietDeleteArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
    /**
     * Filter which lich_thituyen_chitiet to delete.
     * 
    **/
    where: lich_thituyen_chitietWhereUniqueInput
  }


  /**
   * lich_thituyen_chitiet deleteMany
   */
  export type lich_thituyen_chitietDeleteManyArgs = {
    /**
     * Filter which lich_thituyen_chitiets to delete
     * 
    **/
    where?: lich_thituyen_chitietWhereInput
  }


  /**
   * lich_thituyen_chitiet without action
   */
  export type lich_thituyen_chitietArgs = {
    /**
     * Select specific fields to fetch from the lich_thituyen_chitiet
     * 
    **/
    select?: lich_thituyen_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: lich_thituyen_chitietInclude | null
  }



  /**
   * Model migrations
   */


  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs = {
    /**
     * Filter which migrations to aggregate.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type MigrationsGroupByArgs = {
    where?: migrationsWhereInput
    orderBy?: Enumerable<migrationsOrderByWithAggregationInput>
    by: Array<MigrationsScalarFieldEnum>
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }


  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends MigrationsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsGetPayload<
    S extends boolean | null | undefined | migrationsArgs,
    U = keyof S
      > = S extends true
        ? migrations
    : S extends undefined
    ? never
    : S extends migrationsArgs | migrationsFindManyArgs
    ?'include' extends U
    ? migrations 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof migrations ? migrations[P] : never
  } 
    : migrations
  : migrations


  type migrationsCountArgs = Merge<
    Omit<migrationsFindManyArgs, 'select' | 'include'> & {
      select?: MigrationsCountAggregateInputType | true
    }
  >

  export interface migrationsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'migrations'> extends True ? CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>> : CheckSelect<T, Prisma__migrationsClient<migrations | null >, Prisma__migrationsClient<migrationsGetPayload<T> | null >>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'migrations'> extends True ? CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>> : CheckSelect<T, Prisma__migrationsClient<migrations | null >, Prisma__migrationsClient<migrationsGetPayload<T> | null >>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends migrationsFindManyArgs>(
      args?: SelectSubset<T, migrationsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<migrations>>, PrismaPromise<Array<migrationsGetPayload<T>>>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
    **/
    create<T extends migrationsCreateArgs>(
      args: SelectSubset<T, migrationsCreateArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Create many Migrations.
     *     @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     *     @example
     *     // Create many Migrations
     *     const migrations = await prisma.migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends migrationsCreateManyArgs>(
      args?: SelectSubset<T, migrationsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
    **/
    delete<T extends migrationsDeleteArgs>(
      args: SelectSubset<T, migrationsDeleteArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends migrationsUpdateArgs>(
      args: SelectSubset<T, migrationsUpdateArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends migrationsDeleteManyArgs>(
      args?: SelectSubset<T, migrationsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends migrationsUpdateManyArgs>(
      args: SelectSubset<T, migrationsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
    **/
    upsert<T extends migrationsUpsertArgs>(
      args: SelectSubset<T, migrationsUpsertArgs>
    ): CheckSelect<T, Prisma__migrationsClient<migrations>, Prisma__migrationsClient<migrationsGetPayload<T>>>

    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsGroupByArgs} args - Group by arguments.
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
      T extends MigrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MigrationsGroupByArgs['orderBy'] }
        : { orderBy?: MigrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MigrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__migrationsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Throw an Error if a migrations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Throw an Error if a migrations can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     * 
    **/
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Filter, which migrations to fetch.
     * 
    **/
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     * 
    **/
    orderBy?: Enumerable<migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     * 
    **/
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MigrationsScalarFieldEnum>
  }


  /**
   * migrations create
   */
  export type migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The data needed to create a migrations.
     * 
    **/
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }


  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs = {
    /**
     * The data used to create many migrations.
     * 
    **/
    data: Enumerable<migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * migrations update
   */
  export type migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The data needed to update a migrations.
     * 
    **/
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs = {
    /**
     * The data used to update migrations.
     * 
    **/
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     * 
    **/
    where?: migrationsWhereInput
  }


  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * The filter to search for the migrations to update in case it exists.
     * 
    **/
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     * 
    **/
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }


  /**
   * migrations delete
   */
  export type migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
    /**
     * Filter which migrations to delete.
     * 
    **/
    where: migrationsWhereUniqueInput
  }


  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs = {
    /**
     * Filter which migrations to delete
     * 
    **/
    where?: migrationsWhereInput
  }


  /**
   * migrations without action
   */
  export type migrationsArgs = {
    /**
     * Select specific fields to fetch from the migrations
     * 
    **/
    select?: migrationsSelect | null
  }



  /**
   * Model quatrinh_congtac
   */


  export type AggregateQuatrinh_congtac = {
    _count: Quatrinh_congtacCountAggregateOutputType | null
    _avg: Quatrinh_congtacAvgAggregateOutputType | null
    _sum: Quatrinh_congtacSumAggregateOutputType | null
    _min: Quatrinh_congtacMinAggregateOutputType | null
    _max: Quatrinh_congtacMaxAggregateOutputType | null
  }

  export type Quatrinh_congtacAvgAggregateOutputType = {
    quatrinh_congtac_id: number | null
    hoso_id: number | null
  }

  export type Quatrinh_congtacSumAggregateOutputType = {
    quatrinh_congtac_id: bigint | null
    hoso_id: bigint | null
  }

  export type Quatrinh_congtacMinAggregateOutputType = {
    quatrinh_congtac_id: bigint | null
    tungay: Date | null
    denngay: Date | null
    ten_coquan_donvi: string | null
    chuvu: string | null
    congviec_phutrach: string | null
    thanhtich_noibac: string | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quatrinh_congtacMaxAggregateOutputType = {
    quatrinh_congtac_id: bigint | null
    tungay: Date | null
    denngay: Date | null
    ten_coquan_donvi: string | null
    chuvu: string | null
    congviec_phutrach: string | null
    thanhtich_noibac: string | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quatrinh_congtacCountAggregateOutputType = {
    quatrinh_congtac_id: number
    tungay: number
    denngay: number
    ten_coquan_donvi: number
    chuvu: number
    congviec_phutrach: number
    thanhtich_noibac: number
    hoso_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Quatrinh_congtacAvgAggregateInputType = {
    quatrinh_congtac_id?: true
    hoso_id?: true
  }

  export type Quatrinh_congtacSumAggregateInputType = {
    quatrinh_congtac_id?: true
    hoso_id?: true
  }

  export type Quatrinh_congtacMinAggregateInputType = {
    quatrinh_congtac_id?: true
    tungay?: true
    denngay?: true
    ten_coquan_donvi?: true
    chuvu?: true
    congviec_phutrach?: true
    thanhtich_noibac?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Quatrinh_congtacMaxAggregateInputType = {
    quatrinh_congtac_id?: true
    tungay?: true
    denngay?: true
    ten_coquan_donvi?: true
    chuvu?: true
    congviec_phutrach?: true
    thanhtich_noibac?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Quatrinh_congtacCountAggregateInputType = {
    quatrinh_congtac_id?: true
    tungay?: true
    denngay?: true
    ten_coquan_donvi?: true
    chuvu?: true
    congviec_phutrach?: true
    thanhtich_noibac?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Quatrinh_congtacAggregateArgs = {
    /**
     * Filter which quatrinh_congtac to aggregate.
     * 
    **/
    where?: quatrinh_congtacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_congtacs to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_congtacOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: quatrinh_congtacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_congtacs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_congtacs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quatrinh_congtacs
    **/
    _count?: true | Quatrinh_congtacCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quatrinh_congtacAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quatrinh_congtacSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quatrinh_congtacMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quatrinh_congtacMaxAggregateInputType
  }

  export type GetQuatrinh_congtacAggregateType<T extends Quatrinh_congtacAggregateArgs> = {
        [P in keyof T & keyof AggregateQuatrinh_congtac]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuatrinh_congtac[P]>
      : GetScalarType<T[P], AggregateQuatrinh_congtac[P]>
  }




  export type Quatrinh_congtacGroupByArgs = {
    where?: quatrinh_congtacWhereInput
    orderBy?: Enumerable<quatrinh_congtacOrderByWithAggregationInput>
    by: Array<Quatrinh_congtacScalarFieldEnum>
    having?: quatrinh_congtacScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quatrinh_congtacCountAggregateInputType | true
    _avg?: Quatrinh_congtacAvgAggregateInputType
    _sum?: Quatrinh_congtacSumAggregateInputType
    _min?: Quatrinh_congtacMinAggregateInputType
    _max?: Quatrinh_congtacMaxAggregateInputType
  }


  export type Quatrinh_congtacGroupByOutputType = {
    quatrinh_congtac_id: bigint
    tungay: Date
    denngay: Date
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    hoso_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Quatrinh_congtacCountAggregateOutputType | null
    _avg: Quatrinh_congtacAvgAggregateOutputType | null
    _sum: Quatrinh_congtacSumAggregateOutputType | null
    _min: Quatrinh_congtacMinAggregateOutputType | null
    _max: Quatrinh_congtacMaxAggregateOutputType | null
  }

  type GetQuatrinh_congtacGroupByPayload<T extends Quatrinh_congtacGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Quatrinh_congtacGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quatrinh_congtacGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quatrinh_congtacGroupByOutputType[P]>
            : GetScalarType<T[P], Quatrinh_congtacGroupByOutputType[P]>
        }
      >
    >


  export type quatrinh_congtacSelect = {
    quatrinh_congtac_id?: boolean
    tungay?: boolean
    denngay?: boolean
    ten_coquan_donvi?: boolean
    chuvu?: boolean
    congviec_phutrach?: boolean
    thanhtich_noibac?: boolean
    hoso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type quatrinh_congtacInclude = {
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type quatrinh_congtacGetPayload<
    S extends boolean | null | undefined | quatrinh_congtacArgs,
    U = keyof S
      > = S extends true
        ? quatrinh_congtac
    : S extends undefined
    ? never
    : S extends quatrinh_congtacArgs | quatrinh_congtacFindManyArgs
    ?'include' extends U
    ? quatrinh_congtac  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['select'][P]> :  P extends keyof quatrinh_congtac ? quatrinh_congtac[P] : never
  } 
    : quatrinh_congtac
  : quatrinh_congtac


  type quatrinh_congtacCountArgs = Merge<
    Omit<quatrinh_congtacFindManyArgs, 'select' | 'include'> & {
      select?: Quatrinh_congtacCountAggregateInputType | true
    }
  >

  export interface quatrinh_congtacDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Quatrinh_congtac that matches the filter.
     * @param {quatrinh_congtacFindUniqueArgs} args - Arguments to find a Quatrinh_congtac
     * @example
     * // Get one Quatrinh_congtac
     * const quatrinh_congtac = await prisma.quatrinh_congtac.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends quatrinh_congtacFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, quatrinh_congtacFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'quatrinh_congtac'> extends True ? CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>> : CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac | null >, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T> | null >>

    /**
     * Find the first Quatrinh_congtac that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_congtacFindFirstArgs} args - Arguments to find a Quatrinh_congtac
     * @example
     * // Get one Quatrinh_congtac
     * const quatrinh_congtac = await prisma.quatrinh_congtac.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends quatrinh_congtacFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, quatrinh_congtacFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'quatrinh_congtac'> extends True ? CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>> : CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac | null >, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T> | null >>

    /**
     * Find zero or more Quatrinh_congtacs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_congtacFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quatrinh_congtacs
     * const quatrinh_congtacs = await prisma.quatrinh_congtac.findMany()
     * 
     * // Get first 10 Quatrinh_congtacs
     * const quatrinh_congtacs = await prisma.quatrinh_congtac.findMany({ take: 10 })
     * 
     * // Only select the `quatrinh_congtac_id`
     * const quatrinh_congtacWithQuatrinh_congtac_idOnly = await prisma.quatrinh_congtac.findMany({ select: { quatrinh_congtac_id: true } })
     * 
    **/
    findMany<T extends quatrinh_congtacFindManyArgs>(
      args?: SelectSubset<T, quatrinh_congtacFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<quatrinh_congtac>>, PrismaPromise<Array<quatrinh_congtacGetPayload<T>>>>

    /**
     * Create a Quatrinh_congtac.
     * @param {quatrinh_congtacCreateArgs} args - Arguments to create a Quatrinh_congtac.
     * @example
     * // Create one Quatrinh_congtac
     * const Quatrinh_congtac = await prisma.quatrinh_congtac.create({
     *   data: {
     *     // ... data to create a Quatrinh_congtac
     *   }
     * })
     * 
    **/
    create<T extends quatrinh_congtacCreateArgs>(
      args: SelectSubset<T, quatrinh_congtacCreateArgs>
    ): CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>>

    /**
     * Create many Quatrinh_congtacs.
     *     @param {quatrinh_congtacCreateManyArgs} args - Arguments to create many Quatrinh_congtacs.
     *     @example
     *     // Create many Quatrinh_congtacs
     *     const quatrinh_congtac = await prisma.quatrinh_congtac.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends quatrinh_congtacCreateManyArgs>(
      args?: SelectSubset<T, quatrinh_congtacCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Quatrinh_congtac.
     * @param {quatrinh_congtacDeleteArgs} args - Arguments to delete one Quatrinh_congtac.
     * @example
     * // Delete one Quatrinh_congtac
     * const Quatrinh_congtac = await prisma.quatrinh_congtac.delete({
     *   where: {
     *     // ... filter to delete one Quatrinh_congtac
     *   }
     * })
     * 
    **/
    delete<T extends quatrinh_congtacDeleteArgs>(
      args: SelectSubset<T, quatrinh_congtacDeleteArgs>
    ): CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>>

    /**
     * Update one Quatrinh_congtac.
     * @param {quatrinh_congtacUpdateArgs} args - Arguments to update one Quatrinh_congtac.
     * @example
     * // Update one Quatrinh_congtac
     * const quatrinh_congtac = await prisma.quatrinh_congtac.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends quatrinh_congtacUpdateArgs>(
      args: SelectSubset<T, quatrinh_congtacUpdateArgs>
    ): CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>>

    /**
     * Delete zero or more Quatrinh_congtacs.
     * @param {quatrinh_congtacDeleteManyArgs} args - Arguments to filter Quatrinh_congtacs to delete.
     * @example
     * // Delete a few Quatrinh_congtacs
     * const { count } = await prisma.quatrinh_congtac.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends quatrinh_congtacDeleteManyArgs>(
      args?: SelectSubset<T, quatrinh_congtacDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quatrinh_congtacs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_congtacUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quatrinh_congtacs
     * const quatrinh_congtac = await prisma.quatrinh_congtac.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends quatrinh_congtacUpdateManyArgs>(
      args: SelectSubset<T, quatrinh_congtacUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Quatrinh_congtac.
     * @param {quatrinh_congtacUpsertArgs} args - Arguments to update or create a Quatrinh_congtac.
     * @example
     * // Update or create a Quatrinh_congtac
     * const quatrinh_congtac = await prisma.quatrinh_congtac.upsert({
     *   create: {
     *     // ... data to create a Quatrinh_congtac
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quatrinh_congtac we want to update
     *   }
     * })
    **/
    upsert<T extends quatrinh_congtacUpsertArgs>(
      args: SelectSubset<T, quatrinh_congtacUpsertArgs>
    ): CheckSelect<T, Prisma__quatrinh_congtacClient<quatrinh_congtac>, Prisma__quatrinh_congtacClient<quatrinh_congtacGetPayload<T>>>

    /**
     * Count the number of Quatrinh_congtacs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_congtacCountArgs} args - Arguments to filter Quatrinh_congtacs to count.
     * @example
     * // Count the number of Quatrinh_congtacs
     * const count = await prisma.quatrinh_congtac.count({
     *   where: {
     *     // ... the filter for the Quatrinh_congtacs we want to count
     *   }
     * })
    **/
    count<T extends quatrinh_congtacCountArgs>(
      args?: Subset<T, quatrinh_congtacCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quatrinh_congtacCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quatrinh_congtac.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quatrinh_congtacAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quatrinh_congtacAggregateArgs>(args: Subset<T, Quatrinh_congtacAggregateArgs>): PrismaPromise<GetQuatrinh_congtacAggregateType<T>>

    /**
     * Group by Quatrinh_congtac.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quatrinh_congtacGroupByArgs} args - Group by arguments.
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
      T extends Quatrinh_congtacGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Quatrinh_congtacGroupByArgs['orderBy'] }
        : { orderBy?: Quatrinh_congtacGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Quatrinh_congtacGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuatrinh_congtacGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for quatrinh_congtac.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__quatrinh_congtacClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienArgs = {}>(args?: Subset<T, hoso_ungvienArgs>): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * quatrinh_congtac findUnique
   */
  export type quatrinh_congtacFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * Throw an Error if a quatrinh_congtac can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which quatrinh_congtac to fetch.
     * 
    **/
    where: quatrinh_congtacWhereUniqueInput
  }


  /**
   * quatrinh_congtac findFirst
   */
  export type quatrinh_congtacFindFirstArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * Throw an Error if a quatrinh_congtac can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which quatrinh_congtac to fetch.
     * 
    **/
    where?: quatrinh_congtacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_congtacs to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_congtacOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quatrinh_congtacs.
     * 
    **/
    cursor?: quatrinh_congtacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_congtacs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_congtacs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quatrinh_congtacs.
     * 
    **/
    distinct?: Enumerable<Quatrinh_congtacScalarFieldEnum>
  }


  /**
   * quatrinh_congtac findMany
   */
  export type quatrinh_congtacFindManyArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * Filter, which quatrinh_congtacs to fetch.
     * 
    **/
    where?: quatrinh_congtacWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_congtacs to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_congtacOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quatrinh_congtacs.
     * 
    **/
    cursor?: quatrinh_congtacWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_congtacs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_congtacs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Quatrinh_congtacScalarFieldEnum>
  }


  /**
   * quatrinh_congtac create
   */
  export type quatrinh_congtacCreateArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * The data needed to create a quatrinh_congtac.
     * 
    **/
    data: XOR<quatrinh_congtacCreateInput, quatrinh_congtacUncheckedCreateInput>
  }


  /**
   * quatrinh_congtac createMany
   */
  export type quatrinh_congtacCreateManyArgs = {
    /**
     * The data used to create many quatrinh_congtacs.
     * 
    **/
    data: Enumerable<quatrinh_congtacCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * quatrinh_congtac update
   */
  export type quatrinh_congtacUpdateArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * The data needed to update a quatrinh_congtac.
     * 
    **/
    data: XOR<quatrinh_congtacUpdateInput, quatrinh_congtacUncheckedUpdateInput>
    /**
     * Choose, which quatrinh_congtac to update.
     * 
    **/
    where: quatrinh_congtacWhereUniqueInput
  }


  /**
   * quatrinh_congtac updateMany
   */
  export type quatrinh_congtacUpdateManyArgs = {
    /**
     * The data used to update quatrinh_congtacs.
     * 
    **/
    data: XOR<quatrinh_congtacUpdateManyMutationInput, quatrinh_congtacUncheckedUpdateManyInput>
    /**
     * Filter which quatrinh_congtacs to update
     * 
    **/
    where?: quatrinh_congtacWhereInput
  }


  /**
   * quatrinh_congtac upsert
   */
  export type quatrinh_congtacUpsertArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * The filter to search for the quatrinh_congtac to update in case it exists.
     * 
    **/
    where: quatrinh_congtacWhereUniqueInput
    /**
     * In case the quatrinh_congtac found by the `where` argument doesn't exist, create a new quatrinh_congtac with this data.
     * 
    **/
    create: XOR<quatrinh_congtacCreateInput, quatrinh_congtacUncheckedCreateInput>
    /**
     * In case the quatrinh_congtac was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<quatrinh_congtacUpdateInput, quatrinh_congtacUncheckedUpdateInput>
  }


  /**
   * quatrinh_congtac delete
   */
  export type quatrinh_congtacDeleteArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
    /**
     * Filter which quatrinh_congtac to delete.
     * 
    **/
    where: quatrinh_congtacWhereUniqueInput
  }


  /**
   * quatrinh_congtac deleteMany
   */
  export type quatrinh_congtacDeleteManyArgs = {
    /**
     * Filter which quatrinh_congtacs to delete
     * 
    **/
    where?: quatrinh_congtacWhereInput
  }


  /**
   * quatrinh_congtac without action
   */
  export type quatrinh_congtacArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_congtac
     * 
    **/
    select?: quatrinh_congtacSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_congtacInclude | null
  }



  /**
   * Model quatrinh_hoctap
   */


  export type AggregateQuatrinh_hoctap = {
    _count: Quatrinh_hoctapCountAggregateOutputType | null
    _avg: Quatrinh_hoctapAvgAggregateOutputType | null
    _sum: Quatrinh_hoctapSumAggregateOutputType | null
    _min: Quatrinh_hoctapMinAggregateOutputType | null
    _max: Quatrinh_hoctapMaxAggregateOutputType | null
  }

  export type Quatrinh_hoctapAvgAggregateOutputType = {
    quatrinh_hoctap_id: number | null
    hoso_id: number | null
  }

  export type Quatrinh_hoctapSumAggregateOutputType = {
    quatrinh_hoctap_id: bigint | null
    hoso_id: bigint | null
  }

  export type Quatrinh_hoctapMinAggregateOutputType = {
    quatrinh_hoctap_id: bigint | null
    tungay: Date | null
    denngay: Date | null
    bac_kynang: string | null
    ten_donvi_daotao: string | null
    ten_chungnhan_vanbang: string | null
    xeploai: string | null
    namcap: Date | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quatrinh_hoctapMaxAggregateOutputType = {
    quatrinh_hoctap_id: bigint | null
    tungay: Date | null
    denngay: Date | null
    bac_kynang: string | null
    ten_donvi_daotao: string | null
    ten_chungnhan_vanbang: string | null
    xeploai: string | null
    namcap: Date | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quatrinh_hoctapCountAggregateOutputType = {
    quatrinh_hoctap_id: number
    tungay: number
    denngay: number
    bac_kynang: number
    ten_donvi_daotao: number
    ten_chungnhan_vanbang: number
    xeploai: number
    namcap: number
    hoso_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Quatrinh_hoctapAvgAggregateInputType = {
    quatrinh_hoctap_id?: true
    hoso_id?: true
  }

  export type Quatrinh_hoctapSumAggregateInputType = {
    quatrinh_hoctap_id?: true
    hoso_id?: true
  }

  export type Quatrinh_hoctapMinAggregateInputType = {
    quatrinh_hoctap_id?: true
    tungay?: true
    denngay?: true
    bac_kynang?: true
    ten_donvi_daotao?: true
    ten_chungnhan_vanbang?: true
    xeploai?: true
    namcap?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Quatrinh_hoctapMaxAggregateInputType = {
    quatrinh_hoctap_id?: true
    tungay?: true
    denngay?: true
    bac_kynang?: true
    ten_donvi_daotao?: true
    ten_chungnhan_vanbang?: true
    xeploai?: true
    namcap?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Quatrinh_hoctapCountAggregateInputType = {
    quatrinh_hoctap_id?: true
    tungay?: true
    denngay?: true
    bac_kynang?: true
    ten_donvi_daotao?: true
    ten_chungnhan_vanbang?: true
    xeploai?: true
    namcap?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Quatrinh_hoctapAggregateArgs = {
    /**
     * Filter which quatrinh_hoctap to aggregate.
     * 
    **/
    where?: quatrinh_hoctapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_hoctaps to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_hoctapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: quatrinh_hoctapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_hoctaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_hoctaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quatrinh_hoctaps
    **/
    _count?: true | Quatrinh_hoctapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quatrinh_hoctapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quatrinh_hoctapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quatrinh_hoctapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quatrinh_hoctapMaxAggregateInputType
  }

  export type GetQuatrinh_hoctapAggregateType<T extends Quatrinh_hoctapAggregateArgs> = {
        [P in keyof T & keyof AggregateQuatrinh_hoctap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuatrinh_hoctap[P]>
      : GetScalarType<T[P], AggregateQuatrinh_hoctap[P]>
  }




  export type Quatrinh_hoctapGroupByArgs = {
    where?: quatrinh_hoctapWhereInput
    orderBy?: Enumerable<quatrinh_hoctapOrderByWithAggregationInput>
    by: Array<Quatrinh_hoctapScalarFieldEnum>
    having?: quatrinh_hoctapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quatrinh_hoctapCountAggregateInputType | true
    _avg?: Quatrinh_hoctapAvgAggregateInputType
    _sum?: Quatrinh_hoctapSumAggregateInputType
    _min?: Quatrinh_hoctapMinAggregateInputType
    _max?: Quatrinh_hoctapMaxAggregateInputType
  }


  export type Quatrinh_hoctapGroupByOutputType = {
    quatrinh_hoctap_id: bigint
    tungay: Date
    denngay: Date
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date
    hoso_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Quatrinh_hoctapCountAggregateOutputType | null
    _avg: Quatrinh_hoctapAvgAggregateOutputType | null
    _sum: Quatrinh_hoctapSumAggregateOutputType | null
    _min: Quatrinh_hoctapMinAggregateOutputType | null
    _max: Quatrinh_hoctapMaxAggregateOutputType | null
  }

  type GetQuatrinh_hoctapGroupByPayload<T extends Quatrinh_hoctapGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Quatrinh_hoctapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quatrinh_hoctapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quatrinh_hoctapGroupByOutputType[P]>
            : GetScalarType<T[P], Quatrinh_hoctapGroupByOutputType[P]>
        }
      >
    >


  export type quatrinh_hoctapSelect = {
    quatrinh_hoctap_id?: boolean
    tungay?: boolean
    denngay?: boolean
    bac_kynang?: boolean
    ten_donvi_daotao?: boolean
    ten_chungnhan_vanbang?: boolean
    xeploai?: boolean
    namcap?: boolean
    hoso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type quatrinh_hoctapInclude = {
    hoso_ungvien?: boolean | hoso_ungvienArgs
  }

  export type quatrinh_hoctapGetPayload<
    S extends boolean | null | undefined | quatrinh_hoctapArgs,
    U = keyof S
      > = S extends true
        ? quatrinh_hoctap
    : S extends undefined
    ? never
    : S extends quatrinh_hoctapArgs | quatrinh_hoctapFindManyArgs
    ?'include' extends U
    ? quatrinh_hoctap  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['select'][P]> :  P extends keyof quatrinh_hoctap ? quatrinh_hoctap[P] : never
  } 
    : quatrinh_hoctap
  : quatrinh_hoctap


  type quatrinh_hoctapCountArgs = Merge<
    Omit<quatrinh_hoctapFindManyArgs, 'select' | 'include'> & {
      select?: Quatrinh_hoctapCountAggregateInputType | true
    }
  >

  export interface quatrinh_hoctapDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Quatrinh_hoctap that matches the filter.
     * @param {quatrinh_hoctapFindUniqueArgs} args - Arguments to find a Quatrinh_hoctap
     * @example
     * // Get one Quatrinh_hoctap
     * const quatrinh_hoctap = await prisma.quatrinh_hoctap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends quatrinh_hoctapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, quatrinh_hoctapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'quatrinh_hoctap'> extends True ? CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>> : CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap | null >, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T> | null >>

    /**
     * Find the first Quatrinh_hoctap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_hoctapFindFirstArgs} args - Arguments to find a Quatrinh_hoctap
     * @example
     * // Get one Quatrinh_hoctap
     * const quatrinh_hoctap = await prisma.quatrinh_hoctap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends quatrinh_hoctapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, quatrinh_hoctapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'quatrinh_hoctap'> extends True ? CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>> : CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap | null >, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T> | null >>

    /**
     * Find zero or more Quatrinh_hoctaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_hoctapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quatrinh_hoctaps
     * const quatrinh_hoctaps = await prisma.quatrinh_hoctap.findMany()
     * 
     * // Get first 10 Quatrinh_hoctaps
     * const quatrinh_hoctaps = await prisma.quatrinh_hoctap.findMany({ take: 10 })
     * 
     * // Only select the `quatrinh_hoctap_id`
     * const quatrinh_hoctapWithQuatrinh_hoctap_idOnly = await prisma.quatrinh_hoctap.findMany({ select: { quatrinh_hoctap_id: true } })
     * 
    **/
    findMany<T extends quatrinh_hoctapFindManyArgs>(
      args?: SelectSubset<T, quatrinh_hoctapFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<quatrinh_hoctap>>, PrismaPromise<Array<quatrinh_hoctapGetPayload<T>>>>

    /**
     * Create a Quatrinh_hoctap.
     * @param {quatrinh_hoctapCreateArgs} args - Arguments to create a Quatrinh_hoctap.
     * @example
     * // Create one Quatrinh_hoctap
     * const Quatrinh_hoctap = await prisma.quatrinh_hoctap.create({
     *   data: {
     *     // ... data to create a Quatrinh_hoctap
     *   }
     * })
     * 
    **/
    create<T extends quatrinh_hoctapCreateArgs>(
      args: SelectSubset<T, quatrinh_hoctapCreateArgs>
    ): CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>>

    /**
     * Create many Quatrinh_hoctaps.
     *     @param {quatrinh_hoctapCreateManyArgs} args - Arguments to create many Quatrinh_hoctaps.
     *     @example
     *     // Create many Quatrinh_hoctaps
     *     const quatrinh_hoctap = await prisma.quatrinh_hoctap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends quatrinh_hoctapCreateManyArgs>(
      args?: SelectSubset<T, quatrinh_hoctapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Quatrinh_hoctap.
     * @param {quatrinh_hoctapDeleteArgs} args - Arguments to delete one Quatrinh_hoctap.
     * @example
     * // Delete one Quatrinh_hoctap
     * const Quatrinh_hoctap = await prisma.quatrinh_hoctap.delete({
     *   where: {
     *     // ... filter to delete one Quatrinh_hoctap
     *   }
     * })
     * 
    **/
    delete<T extends quatrinh_hoctapDeleteArgs>(
      args: SelectSubset<T, quatrinh_hoctapDeleteArgs>
    ): CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>>

    /**
     * Update one Quatrinh_hoctap.
     * @param {quatrinh_hoctapUpdateArgs} args - Arguments to update one Quatrinh_hoctap.
     * @example
     * // Update one Quatrinh_hoctap
     * const quatrinh_hoctap = await prisma.quatrinh_hoctap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends quatrinh_hoctapUpdateArgs>(
      args: SelectSubset<T, quatrinh_hoctapUpdateArgs>
    ): CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>>

    /**
     * Delete zero or more Quatrinh_hoctaps.
     * @param {quatrinh_hoctapDeleteManyArgs} args - Arguments to filter Quatrinh_hoctaps to delete.
     * @example
     * // Delete a few Quatrinh_hoctaps
     * const { count } = await prisma.quatrinh_hoctap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends quatrinh_hoctapDeleteManyArgs>(
      args?: SelectSubset<T, quatrinh_hoctapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quatrinh_hoctaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_hoctapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quatrinh_hoctaps
     * const quatrinh_hoctap = await prisma.quatrinh_hoctap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends quatrinh_hoctapUpdateManyArgs>(
      args: SelectSubset<T, quatrinh_hoctapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Quatrinh_hoctap.
     * @param {quatrinh_hoctapUpsertArgs} args - Arguments to update or create a Quatrinh_hoctap.
     * @example
     * // Update or create a Quatrinh_hoctap
     * const quatrinh_hoctap = await prisma.quatrinh_hoctap.upsert({
     *   create: {
     *     // ... data to create a Quatrinh_hoctap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quatrinh_hoctap we want to update
     *   }
     * })
    **/
    upsert<T extends quatrinh_hoctapUpsertArgs>(
      args: SelectSubset<T, quatrinh_hoctapUpsertArgs>
    ): CheckSelect<T, Prisma__quatrinh_hoctapClient<quatrinh_hoctap>, Prisma__quatrinh_hoctapClient<quatrinh_hoctapGetPayload<T>>>

    /**
     * Count the number of Quatrinh_hoctaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quatrinh_hoctapCountArgs} args - Arguments to filter Quatrinh_hoctaps to count.
     * @example
     * // Count the number of Quatrinh_hoctaps
     * const count = await prisma.quatrinh_hoctap.count({
     *   where: {
     *     // ... the filter for the Quatrinh_hoctaps we want to count
     *   }
     * })
    **/
    count<T extends quatrinh_hoctapCountArgs>(
      args?: Subset<T, quatrinh_hoctapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quatrinh_hoctapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quatrinh_hoctap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quatrinh_hoctapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quatrinh_hoctapAggregateArgs>(args: Subset<T, Quatrinh_hoctapAggregateArgs>): PrismaPromise<GetQuatrinh_hoctapAggregateType<T>>

    /**
     * Group by Quatrinh_hoctap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quatrinh_hoctapGroupByArgs} args - Group by arguments.
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
      T extends Quatrinh_hoctapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Quatrinh_hoctapGroupByArgs['orderBy'] }
        : { orderBy?: Quatrinh_hoctapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Quatrinh_hoctapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuatrinh_hoctapGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for quatrinh_hoctap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__quatrinh_hoctapClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienArgs = {}>(args?: Subset<T, hoso_ungvienArgs>): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * quatrinh_hoctap findUnique
   */
  export type quatrinh_hoctapFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * Throw an Error if a quatrinh_hoctap can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which quatrinh_hoctap to fetch.
     * 
    **/
    where: quatrinh_hoctapWhereUniqueInput
  }


  /**
   * quatrinh_hoctap findFirst
   */
  export type quatrinh_hoctapFindFirstArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * Throw an Error if a quatrinh_hoctap can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which quatrinh_hoctap to fetch.
     * 
    **/
    where?: quatrinh_hoctapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_hoctaps to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_hoctapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quatrinh_hoctaps.
     * 
    **/
    cursor?: quatrinh_hoctapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_hoctaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_hoctaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quatrinh_hoctaps.
     * 
    **/
    distinct?: Enumerable<Quatrinh_hoctapScalarFieldEnum>
  }


  /**
   * quatrinh_hoctap findMany
   */
  export type quatrinh_hoctapFindManyArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * Filter, which quatrinh_hoctaps to fetch.
     * 
    **/
    where?: quatrinh_hoctapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quatrinh_hoctaps to fetch.
     * 
    **/
    orderBy?: Enumerable<quatrinh_hoctapOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quatrinh_hoctaps.
     * 
    **/
    cursor?: quatrinh_hoctapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quatrinh_hoctaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quatrinh_hoctaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Quatrinh_hoctapScalarFieldEnum>
  }


  /**
   * quatrinh_hoctap create
   */
  export type quatrinh_hoctapCreateArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * The data needed to create a quatrinh_hoctap.
     * 
    **/
    data: XOR<quatrinh_hoctapCreateInput, quatrinh_hoctapUncheckedCreateInput>
  }


  /**
   * quatrinh_hoctap createMany
   */
  export type quatrinh_hoctapCreateManyArgs = {
    /**
     * The data used to create many quatrinh_hoctaps.
     * 
    **/
    data: Enumerable<quatrinh_hoctapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * quatrinh_hoctap update
   */
  export type quatrinh_hoctapUpdateArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * The data needed to update a quatrinh_hoctap.
     * 
    **/
    data: XOR<quatrinh_hoctapUpdateInput, quatrinh_hoctapUncheckedUpdateInput>
    /**
     * Choose, which quatrinh_hoctap to update.
     * 
    **/
    where: quatrinh_hoctapWhereUniqueInput
  }


  /**
   * quatrinh_hoctap updateMany
   */
  export type quatrinh_hoctapUpdateManyArgs = {
    /**
     * The data used to update quatrinh_hoctaps.
     * 
    **/
    data: XOR<quatrinh_hoctapUpdateManyMutationInput, quatrinh_hoctapUncheckedUpdateManyInput>
    /**
     * Filter which quatrinh_hoctaps to update
     * 
    **/
    where?: quatrinh_hoctapWhereInput
  }


  /**
   * quatrinh_hoctap upsert
   */
  export type quatrinh_hoctapUpsertArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * The filter to search for the quatrinh_hoctap to update in case it exists.
     * 
    **/
    where: quatrinh_hoctapWhereUniqueInput
    /**
     * In case the quatrinh_hoctap found by the `where` argument doesn't exist, create a new quatrinh_hoctap with this data.
     * 
    **/
    create: XOR<quatrinh_hoctapCreateInput, quatrinh_hoctapUncheckedCreateInput>
    /**
     * In case the quatrinh_hoctap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<quatrinh_hoctapUpdateInput, quatrinh_hoctapUncheckedUpdateInput>
  }


  /**
   * quatrinh_hoctap delete
   */
  export type quatrinh_hoctapDeleteArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
    /**
     * Filter which quatrinh_hoctap to delete.
     * 
    **/
    where: quatrinh_hoctapWhereUniqueInput
  }


  /**
   * quatrinh_hoctap deleteMany
   */
  export type quatrinh_hoctapDeleteManyArgs = {
    /**
     * Filter which quatrinh_hoctaps to delete
     * 
    **/
    where?: quatrinh_hoctapWhereInput
  }


  /**
   * quatrinh_hoctap without action
   */
  export type quatrinh_hoctapArgs = {
    /**
     * Select specific fields to fetch from the quatrinh_hoctap
     * 
    **/
    select?: quatrinh_hoctapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: quatrinh_hoctapInclude | null
  }



  /**
   * Model thongbao_tuyendung
   */


  export type AggregateThongbao_tuyendung = {
    _count: Thongbao_tuyendungCountAggregateOutputType | null
    _avg: Thongbao_tuyendungAvgAggregateOutputType | null
    _sum: Thongbao_tuyendungSumAggregateOutputType | null
    _min: Thongbao_tuyendungMinAggregateOutputType | null
    _max: Thongbao_tuyendungMaxAggregateOutputType | null
  }

  export type Thongbao_tuyendungAvgAggregateOutputType = {
    thongbao_id: number | null
    coquan_id: number | null
  }

  export type Thongbao_tuyendungSumAggregateOutputType = {
    thongbao_id: bigint | null
    coquan_id: bigint | null
  }

  export type Thongbao_tuyendungMinAggregateOutputType = {
    thongbao_id: bigint | null
    thongbao_ma: string | null
    thongbao_ngaylap: Date | null
    thongbao_hannop: Date | null
    thongbao_noidung: string | null
    quyenloi: string | null
    thanhphan_hoso: string | null
    phuongthuc_nophs: string | null
    thongbao_trangthai: boolean | null
    coquan_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Thongbao_tuyendungMaxAggregateOutputType = {
    thongbao_id: bigint | null
    thongbao_ma: string | null
    thongbao_ngaylap: Date | null
    thongbao_hannop: Date | null
    thongbao_noidung: string | null
    quyenloi: string | null
    thanhphan_hoso: string | null
    phuongthuc_nophs: string | null
    thongbao_trangthai: boolean | null
    coquan_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Thongbao_tuyendungCountAggregateOutputType = {
    thongbao_id: number
    thongbao_ma: number
    thongbao_ngaylap: number
    thongbao_hannop: number
    thongbao_noidung: number
    quyenloi: number
    thanhphan_hoso: number
    phuongthuc_nophs: number
    thongbao_trangthai: number
    coquan_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Thongbao_tuyendungAvgAggregateInputType = {
    thongbao_id?: true
    coquan_id?: true
  }

  export type Thongbao_tuyendungSumAggregateInputType = {
    thongbao_id?: true
    coquan_id?: true
  }

  export type Thongbao_tuyendungMinAggregateInputType = {
    thongbao_id?: true
    thongbao_ma?: true
    thongbao_ngaylap?: true
    thongbao_hannop?: true
    thongbao_noidung?: true
    quyenloi?: true
    thanhphan_hoso?: true
    phuongthuc_nophs?: true
    thongbao_trangthai?: true
    coquan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Thongbao_tuyendungMaxAggregateInputType = {
    thongbao_id?: true
    thongbao_ma?: true
    thongbao_ngaylap?: true
    thongbao_hannop?: true
    thongbao_noidung?: true
    quyenloi?: true
    thanhphan_hoso?: true
    phuongthuc_nophs?: true
    thongbao_trangthai?: true
    coquan_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Thongbao_tuyendungCountAggregateInputType = {
    thongbao_id?: true
    thongbao_ma?: true
    thongbao_ngaylap?: true
    thongbao_hannop?: true
    thongbao_noidung?: true
    quyenloi?: true
    thanhphan_hoso?: true
    phuongthuc_nophs?: true
    thongbao_trangthai?: true
    coquan_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Thongbao_tuyendungAggregateArgs = {
    /**
     * Filter which thongbao_tuyendung to aggregate.
     * 
    **/
    where?: thongbao_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: thongbao_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned thongbao_tuyendungs
    **/
    _count?: true | Thongbao_tuyendungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Thongbao_tuyendungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Thongbao_tuyendungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Thongbao_tuyendungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Thongbao_tuyendungMaxAggregateInputType
  }

  export type GetThongbao_tuyendungAggregateType<T extends Thongbao_tuyendungAggregateArgs> = {
        [P in keyof T & keyof AggregateThongbao_tuyendung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThongbao_tuyendung[P]>
      : GetScalarType<T[P], AggregateThongbao_tuyendung[P]>
  }




  export type Thongbao_tuyendungGroupByArgs = {
    where?: thongbao_tuyendungWhereInput
    orderBy?: Enumerable<thongbao_tuyendungOrderByWithAggregationInput>
    by: Array<Thongbao_tuyendungScalarFieldEnum>
    having?: thongbao_tuyendungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Thongbao_tuyendungCountAggregateInputType | true
    _avg?: Thongbao_tuyendungAvgAggregateInputType
    _sum?: Thongbao_tuyendungSumAggregateInputType
    _min?: Thongbao_tuyendungMinAggregateInputType
    _max?: Thongbao_tuyendungMaxAggregateInputType
  }


  export type Thongbao_tuyendungGroupByOutputType = {
    thongbao_id: bigint
    thongbao_ma: string
    thongbao_ngaylap: Date
    thongbao_hannop: Date
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    coquan_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Thongbao_tuyendungCountAggregateOutputType | null
    _avg: Thongbao_tuyendungAvgAggregateOutputType | null
    _sum: Thongbao_tuyendungSumAggregateOutputType | null
    _min: Thongbao_tuyendungMinAggregateOutputType | null
    _max: Thongbao_tuyendungMaxAggregateOutputType | null
  }

  type GetThongbao_tuyendungGroupByPayload<T extends Thongbao_tuyendungGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Thongbao_tuyendungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Thongbao_tuyendungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Thongbao_tuyendungGroupByOutputType[P]>
            : GetScalarType<T[P], Thongbao_tuyendungGroupByOutputType[P]>
        }
      >
    >


  export type thongbao_tuyendungSelect = {
    thongbao_id?: boolean
    thongbao_ma?: boolean
    thongbao_ngaylap?: boolean
    thongbao_hannop?: boolean
    thongbao_noidung?: boolean
    quyenloi?: boolean
    thanhphan_hoso?: boolean
    phuongthuc_nophs?: boolean
    thongbao_trangthai?: boolean
    coquan_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    coquan_tuyendung?: boolean | coquan_tuyendungArgs
    thongbao_tuyendung_chitiet?: boolean | thongbao_tuyendung_chitietFindManyArgs
    _count?: boolean | Thongbao_tuyendungCountOutputTypeArgs
  }

  export type thongbao_tuyendungInclude = {
    coquan_tuyendung?: boolean | coquan_tuyendungArgs
    thongbao_tuyendung_chitiet?: boolean | thongbao_tuyendung_chitietFindManyArgs
    _count?: boolean | Thongbao_tuyendungCountOutputTypeArgs
  }

  export type thongbao_tuyendungGetPayload<
    S extends boolean | null | undefined | thongbao_tuyendungArgs,
    U = keyof S
      > = S extends true
        ? thongbao_tuyendung
    : S extends undefined
    ? never
    : S extends thongbao_tuyendungArgs | thongbao_tuyendungFindManyArgs
    ?'include' extends U
    ? thongbao_tuyendung  & {
    [P in TrueKeys<S['include']>]:
        P extends 'coquan_tuyendung' ? coquan_tuyendungGetPayload<S['include'][P]> :
        P extends 'thongbao_tuyendung_chitiet' ? Array < thongbao_tuyendung_chitietGetPayload<S['include'][P]>>  :
        P extends '_count' ? Thongbao_tuyendungCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'coquan_tuyendung' ? coquan_tuyendungGetPayload<S['select'][P]> :
        P extends 'thongbao_tuyendung_chitiet' ? Array < thongbao_tuyendung_chitietGetPayload<S['select'][P]>>  :
        P extends '_count' ? Thongbao_tuyendungCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof thongbao_tuyendung ? thongbao_tuyendung[P] : never
  } 
    : thongbao_tuyendung
  : thongbao_tuyendung


  type thongbao_tuyendungCountArgs = Merge<
    Omit<thongbao_tuyendungFindManyArgs, 'select' | 'include'> & {
      select?: Thongbao_tuyendungCountAggregateInputType | true
    }
  >

  export interface thongbao_tuyendungDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Thongbao_tuyendung that matches the filter.
     * @param {thongbao_tuyendungFindUniqueArgs} args - Arguments to find a Thongbao_tuyendung
     * @example
     * // Get one Thongbao_tuyendung
     * const thongbao_tuyendung = await prisma.thongbao_tuyendung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends thongbao_tuyendungFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, thongbao_tuyendungFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'thongbao_tuyendung'> extends True ? CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung | null >, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T> | null >>

    /**
     * Find the first Thongbao_tuyendung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendungFindFirstArgs} args - Arguments to find a Thongbao_tuyendung
     * @example
     * // Get one Thongbao_tuyendung
     * const thongbao_tuyendung = await prisma.thongbao_tuyendung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends thongbao_tuyendungFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, thongbao_tuyendungFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'thongbao_tuyendung'> extends True ? CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>> : CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung | null >, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T> | null >>

    /**
     * Find zero or more Thongbao_tuyendungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendungFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thongbao_tuyendungs
     * const thongbao_tuyendungs = await prisma.thongbao_tuyendung.findMany()
     * 
     * // Get first 10 Thongbao_tuyendungs
     * const thongbao_tuyendungs = await prisma.thongbao_tuyendung.findMany({ take: 10 })
     * 
     * // Only select the `thongbao_id`
     * const thongbao_tuyendungWithThongbao_idOnly = await prisma.thongbao_tuyendung.findMany({ select: { thongbao_id: true } })
     * 
    **/
    findMany<T extends thongbao_tuyendungFindManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendungFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<thongbao_tuyendung>>, PrismaPromise<Array<thongbao_tuyendungGetPayload<T>>>>

    /**
     * Create a Thongbao_tuyendung.
     * @param {thongbao_tuyendungCreateArgs} args - Arguments to create a Thongbao_tuyendung.
     * @example
     * // Create one Thongbao_tuyendung
     * const Thongbao_tuyendung = await prisma.thongbao_tuyendung.create({
     *   data: {
     *     // ... data to create a Thongbao_tuyendung
     *   }
     * })
     * 
    **/
    create<T extends thongbao_tuyendungCreateArgs>(
      args: SelectSubset<T, thongbao_tuyendungCreateArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>>

    /**
     * Create many Thongbao_tuyendungs.
     *     @param {thongbao_tuyendungCreateManyArgs} args - Arguments to create many Thongbao_tuyendungs.
     *     @example
     *     // Create many Thongbao_tuyendungs
     *     const thongbao_tuyendung = await prisma.thongbao_tuyendung.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends thongbao_tuyendungCreateManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendungCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Thongbao_tuyendung.
     * @param {thongbao_tuyendungDeleteArgs} args - Arguments to delete one Thongbao_tuyendung.
     * @example
     * // Delete one Thongbao_tuyendung
     * const Thongbao_tuyendung = await prisma.thongbao_tuyendung.delete({
     *   where: {
     *     // ... filter to delete one Thongbao_tuyendung
     *   }
     * })
     * 
    **/
    delete<T extends thongbao_tuyendungDeleteArgs>(
      args: SelectSubset<T, thongbao_tuyendungDeleteArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>>

    /**
     * Update one Thongbao_tuyendung.
     * @param {thongbao_tuyendungUpdateArgs} args - Arguments to update one Thongbao_tuyendung.
     * @example
     * // Update one Thongbao_tuyendung
     * const thongbao_tuyendung = await prisma.thongbao_tuyendung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends thongbao_tuyendungUpdateArgs>(
      args: SelectSubset<T, thongbao_tuyendungUpdateArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>>

    /**
     * Delete zero or more Thongbao_tuyendungs.
     * @param {thongbao_tuyendungDeleteManyArgs} args - Arguments to filter Thongbao_tuyendungs to delete.
     * @example
     * // Delete a few Thongbao_tuyendungs
     * const { count } = await prisma.thongbao_tuyendung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends thongbao_tuyendungDeleteManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendungDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thongbao_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thongbao_tuyendungs
     * const thongbao_tuyendung = await prisma.thongbao_tuyendung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends thongbao_tuyendungUpdateManyArgs>(
      args: SelectSubset<T, thongbao_tuyendungUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Thongbao_tuyendung.
     * @param {thongbao_tuyendungUpsertArgs} args - Arguments to update or create a Thongbao_tuyendung.
     * @example
     * // Update or create a Thongbao_tuyendung
     * const thongbao_tuyendung = await prisma.thongbao_tuyendung.upsert({
     *   create: {
     *     // ... data to create a Thongbao_tuyendung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thongbao_tuyendung we want to update
     *   }
     * })
    **/
    upsert<T extends thongbao_tuyendungUpsertArgs>(
      args: SelectSubset<T, thongbao_tuyendungUpsertArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung>, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T>>>

    /**
     * Count the number of Thongbao_tuyendungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendungCountArgs} args - Arguments to filter Thongbao_tuyendungs to count.
     * @example
     * // Count the number of Thongbao_tuyendungs
     * const count = await prisma.thongbao_tuyendung.count({
     *   where: {
     *     // ... the filter for the Thongbao_tuyendungs we want to count
     *   }
     * })
    **/
    count<T extends thongbao_tuyendungCountArgs>(
      args?: Subset<T, thongbao_tuyendungCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Thongbao_tuyendungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thongbao_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thongbao_tuyendungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Thongbao_tuyendungAggregateArgs>(args: Subset<T, Thongbao_tuyendungAggregateArgs>): PrismaPromise<GetThongbao_tuyendungAggregateType<T>>

    /**
     * Group by Thongbao_tuyendung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thongbao_tuyendungGroupByArgs} args - Group by arguments.
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
      T extends Thongbao_tuyendungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Thongbao_tuyendungGroupByArgs['orderBy'] }
        : { orderBy?: Thongbao_tuyendungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Thongbao_tuyendungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThongbao_tuyendungGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for thongbao_tuyendung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__thongbao_tuyendungClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coquan_tuyendung<T extends coquan_tuyendungArgs = {}>(args?: Subset<T, coquan_tuyendungArgs>): CheckSelect<T, Prisma__coquan_tuyendungClient<coquan_tuyendung | null >, Prisma__coquan_tuyendungClient<coquan_tuyendungGetPayload<T> | null >>;

    thongbao_tuyendung_chitiet<T extends thongbao_tuyendung_chitietFindManyArgs = {}>(args?: Subset<T, thongbao_tuyendung_chitietFindManyArgs>): CheckSelect<T, PrismaPromise<Array<thongbao_tuyendung_chitiet>>, PrismaPromise<Array<thongbao_tuyendung_chitietGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * thongbao_tuyendung findUnique
   */
  export type thongbao_tuyendungFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * Throw an Error if a thongbao_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which thongbao_tuyendung to fetch.
     * 
    **/
    where: thongbao_tuyendungWhereUniqueInput
  }


  /**
   * thongbao_tuyendung findFirst
   */
  export type thongbao_tuyendungFindFirstArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * Throw an Error if a thongbao_tuyendung can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which thongbao_tuyendung to fetch.
     * 
    **/
    where?: thongbao_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thongbao_tuyendungs.
     * 
    **/
    cursor?: thongbao_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendungs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thongbao_tuyendungs.
     * 
    **/
    distinct?: Enumerable<Thongbao_tuyendungScalarFieldEnum>
  }


  /**
   * thongbao_tuyendung findMany
   */
  export type thongbao_tuyendungFindManyArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * Filter, which thongbao_tuyendungs to fetch.
     * 
    **/
    where?: thongbao_tuyendungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendungs to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendungOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing thongbao_tuyendungs.
     * 
    **/
    cursor?: thongbao_tuyendungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendungs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendungs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Thongbao_tuyendungScalarFieldEnum>
  }


  /**
   * thongbao_tuyendung create
   */
  export type thongbao_tuyendungCreateArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * The data needed to create a thongbao_tuyendung.
     * 
    **/
    data: XOR<thongbao_tuyendungCreateInput, thongbao_tuyendungUncheckedCreateInput>
  }


  /**
   * thongbao_tuyendung createMany
   */
  export type thongbao_tuyendungCreateManyArgs = {
    /**
     * The data used to create many thongbao_tuyendungs.
     * 
    **/
    data: Enumerable<thongbao_tuyendungCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * thongbao_tuyendung update
   */
  export type thongbao_tuyendungUpdateArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * The data needed to update a thongbao_tuyendung.
     * 
    **/
    data: XOR<thongbao_tuyendungUpdateInput, thongbao_tuyendungUncheckedUpdateInput>
    /**
     * Choose, which thongbao_tuyendung to update.
     * 
    **/
    where: thongbao_tuyendungWhereUniqueInput
  }


  /**
   * thongbao_tuyendung updateMany
   */
  export type thongbao_tuyendungUpdateManyArgs = {
    /**
     * The data used to update thongbao_tuyendungs.
     * 
    **/
    data: XOR<thongbao_tuyendungUpdateManyMutationInput, thongbao_tuyendungUncheckedUpdateManyInput>
    /**
     * Filter which thongbao_tuyendungs to update
     * 
    **/
    where?: thongbao_tuyendungWhereInput
  }


  /**
   * thongbao_tuyendung upsert
   */
  export type thongbao_tuyendungUpsertArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * The filter to search for the thongbao_tuyendung to update in case it exists.
     * 
    **/
    where: thongbao_tuyendungWhereUniqueInput
    /**
     * In case the thongbao_tuyendung found by the `where` argument doesn't exist, create a new thongbao_tuyendung with this data.
     * 
    **/
    create: XOR<thongbao_tuyendungCreateInput, thongbao_tuyendungUncheckedCreateInput>
    /**
     * In case the thongbao_tuyendung was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<thongbao_tuyendungUpdateInput, thongbao_tuyendungUncheckedUpdateInput>
  }


  /**
   * thongbao_tuyendung delete
   */
  export type thongbao_tuyendungDeleteArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
    /**
     * Filter which thongbao_tuyendung to delete.
     * 
    **/
    where: thongbao_tuyendungWhereUniqueInput
  }


  /**
   * thongbao_tuyendung deleteMany
   */
  export type thongbao_tuyendungDeleteManyArgs = {
    /**
     * Filter which thongbao_tuyendungs to delete
     * 
    **/
    where?: thongbao_tuyendungWhereInput
  }


  /**
   * thongbao_tuyendung without action
   */
  export type thongbao_tuyendungArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung
     * 
    **/
    select?: thongbao_tuyendungSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendungInclude | null
  }



  /**
   * Model thongbao_tuyendung_chitiet
   */


  export type AggregateThongbao_tuyendung_chitiet = {
    _count: Thongbao_tuyendung_chitietCountAggregateOutputType | null
    _avg: Thongbao_tuyendung_chitietAvgAggregateOutputType | null
    _sum: Thongbao_tuyendung_chitietSumAggregateOutputType | null
    _min: Thongbao_tuyendung_chitietMinAggregateOutputType | null
    _max: Thongbao_tuyendung_chitietMaxAggregateOutputType | null
  }

  export type Thongbao_tuyendung_chitietAvgAggregateOutputType = {
    thongbao_ct_id: number | null
    soluong: number | null
    thongbao_id: number | null
  }

  export type Thongbao_tuyendung_chitietSumAggregateOutputType = {
    thongbao_ct_id: bigint | null
    soluong: number | null
    thongbao_id: bigint | null
  }

  export type Thongbao_tuyendung_chitietMinAggregateOutputType = {
    thongbao_ct_id: bigint | null
    vitri_tuyendung: string | null
    soluong: number | null
    mota: string | null
    yeucauchung: string | null
    muc_luong_min: string | null
    muc_luong_max: string | null
    thongbao_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Thongbao_tuyendung_chitietMaxAggregateOutputType = {
    thongbao_ct_id: bigint | null
    vitri_tuyendung: string | null
    soluong: number | null
    mota: string | null
    yeucauchung: string | null
    muc_luong_min: string | null
    muc_luong_max: string | null
    thongbao_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Thongbao_tuyendung_chitietCountAggregateOutputType = {
    thongbao_ct_id: number
    vitri_tuyendung: number
    soluong: number
    mota: number
    yeucauchung: number
    muc_luong_min: number
    muc_luong_max: number
    thongbao_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Thongbao_tuyendung_chitietAvgAggregateInputType = {
    thongbao_ct_id?: true
    soluong?: true
    thongbao_id?: true
  }

  export type Thongbao_tuyendung_chitietSumAggregateInputType = {
    thongbao_ct_id?: true
    soluong?: true
    thongbao_id?: true
  }

  export type Thongbao_tuyendung_chitietMinAggregateInputType = {
    thongbao_ct_id?: true
    vitri_tuyendung?: true
    soluong?: true
    mota?: true
    yeucauchung?: true
    muc_luong_min?: true
    muc_luong_max?: true
    thongbao_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Thongbao_tuyendung_chitietMaxAggregateInputType = {
    thongbao_ct_id?: true
    vitri_tuyendung?: true
    soluong?: true
    mota?: true
    yeucauchung?: true
    muc_luong_min?: true
    muc_luong_max?: true
    thongbao_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Thongbao_tuyendung_chitietCountAggregateInputType = {
    thongbao_ct_id?: true
    vitri_tuyendung?: true
    soluong?: true
    mota?: true
    yeucauchung?: true
    muc_luong_min?: true
    muc_luong_max?: true
    thongbao_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Thongbao_tuyendung_chitietAggregateArgs = {
    /**
     * Filter which thongbao_tuyendung_chitiet to aggregate.
     * 
    **/
    where?: thongbao_tuyendung_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendung_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendung_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: thongbao_tuyendung_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendung_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendung_chitiets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned thongbao_tuyendung_chitiets
    **/
    _count?: true | Thongbao_tuyendung_chitietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Thongbao_tuyendung_chitietAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Thongbao_tuyendung_chitietSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Thongbao_tuyendung_chitietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Thongbao_tuyendung_chitietMaxAggregateInputType
  }

  export type GetThongbao_tuyendung_chitietAggregateType<T extends Thongbao_tuyendung_chitietAggregateArgs> = {
        [P in keyof T & keyof AggregateThongbao_tuyendung_chitiet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThongbao_tuyendung_chitiet[P]>
      : GetScalarType<T[P], AggregateThongbao_tuyendung_chitiet[P]>
  }




  export type Thongbao_tuyendung_chitietGroupByArgs = {
    where?: thongbao_tuyendung_chitietWhereInput
    orderBy?: Enumerable<thongbao_tuyendung_chitietOrderByWithAggregationInput>
    by: Array<Thongbao_tuyendung_chitietScalarFieldEnum>
    having?: thongbao_tuyendung_chitietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Thongbao_tuyendung_chitietCountAggregateInputType | true
    _avg?: Thongbao_tuyendung_chitietAvgAggregateInputType
    _sum?: Thongbao_tuyendung_chitietSumAggregateInputType
    _min?: Thongbao_tuyendung_chitietMinAggregateInputType
    _max?: Thongbao_tuyendung_chitietMaxAggregateInputType
  }


  export type Thongbao_tuyendung_chitietGroupByOutputType = {
    thongbao_ct_id: bigint
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    thongbao_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: Thongbao_tuyendung_chitietCountAggregateOutputType | null
    _avg: Thongbao_tuyendung_chitietAvgAggregateOutputType | null
    _sum: Thongbao_tuyendung_chitietSumAggregateOutputType | null
    _min: Thongbao_tuyendung_chitietMinAggregateOutputType | null
    _max: Thongbao_tuyendung_chitietMaxAggregateOutputType | null
  }

  type GetThongbao_tuyendung_chitietGroupByPayload<T extends Thongbao_tuyendung_chitietGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Thongbao_tuyendung_chitietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Thongbao_tuyendung_chitietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Thongbao_tuyendung_chitietGroupByOutputType[P]>
            : GetScalarType<T[P], Thongbao_tuyendung_chitietGroupByOutputType[P]>
        }
      >
    >


  export type thongbao_tuyendung_chitietSelect = {
    thongbao_ct_id?: boolean
    vitri_tuyendung?: boolean
    soluong?: boolean
    mota?: boolean
    yeucauchung?: boolean
    muc_luong_min?: boolean
    muc_luong_max?: boolean
    thongbao_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    thongbao_tuyendung?: boolean | thongbao_tuyendungArgs
    ungtuyen?: boolean | ungtuyenFindManyArgs
    _count?: boolean | Thongbao_tuyendung_chitietCountOutputTypeArgs
  }

  export type thongbao_tuyendung_chitietInclude = {
    thongbao_tuyendung?: boolean | thongbao_tuyendungArgs
    ungtuyen?: boolean | ungtuyenFindManyArgs
    _count?: boolean | Thongbao_tuyendung_chitietCountOutputTypeArgs
  }

  export type thongbao_tuyendung_chitietGetPayload<
    S extends boolean | null | undefined | thongbao_tuyendung_chitietArgs,
    U = keyof S
      > = S extends true
        ? thongbao_tuyendung_chitiet
    : S extends undefined
    ? never
    : S extends thongbao_tuyendung_chitietArgs | thongbao_tuyendung_chitietFindManyArgs
    ?'include' extends U
    ? thongbao_tuyendung_chitiet  & {
    [P in TrueKeys<S['include']>]:
        P extends 'thongbao_tuyendung' ? thongbao_tuyendungGetPayload<S['include'][P]> :
        P extends 'ungtuyen' ? Array < ungtuyenGetPayload<S['include'][P]>>  :
        P extends '_count' ? Thongbao_tuyendung_chitietCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'thongbao_tuyendung' ? thongbao_tuyendungGetPayload<S['select'][P]> :
        P extends 'ungtuyen' ? Array < ungtuyenGetPayload<S['select'][P]>>  :
        P extends '_count' ? Thongbao_tuyendung_chitietCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof thongbao_tuyendung_chitiet ? thongbao_tuyendung_chitiet[P] : never
  } 
    : thongbao_tuyendung_chitiet
  : thongbao_tuyendung_chitiet


  type thongbao_tuyendung_chitietCountArgs = Merge<
    Omit<thongbao_tuyendung_chitietFindManyArgs, 'select' | 'include'> & {
      select?: Thongbao_tuyendung_chitietCountAggregateInputType | true
    }
  >

  export interface thongbao_tuyendung_chitietDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Thongbao_tuyendung_chitiet that matches the filter.
     * @param {thongbao_tuyendung_chitietFindUniqueArgs} args - Arguments to find a Thongbao_tuyendung_chitiet
     * @example
     * // Get one Thongbao_tuyendung_chitiet
     * const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends thongbao_tuyendung_chitietFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, thongbao_tuyendung_chitietFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'thongbao_tuyendung_chitiet'> extends True ? CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>> : CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet | null >, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T> | null >>

    /**
     * Find the first Thongbao_tuyendung_chitiet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendung_chitietFindFirstArgs} args - Arguments to find a Thongbao_tuyendung_chitiet
     * @example
     * // Get one Thongbao_tuyendung_chitiet
     * const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends thongbao_tuyendung_chitietFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, thongbao_tuyendung_chitietFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'thongbao_tuyendung_chitiet'> extends True ? CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>> : CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet | null >, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T> | null >>

    /**
     * Find zero or more Thongbao_tuyendung_chitiets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendung_chitietFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thongbao_tuyendung_chitiets
     * const thongbao_tuyendung_chitiets = await prisma.thongbao_tuyendung_chitiet.findMany()
     * 
     * // Get first 10 Thongbao_tuyendung_chitiets
     * const thongbao_tuyendung_chitiets = await prisma.thongbao_tuyendung_chitiet.findMany({ take: 10 })
     * 
     * // Only select the `thongbao_ct_id`
     * const thongbao_tuyendung_chitietWithThongbao_ct_idOnly = await prisma.thongbao_tuyendung_chitiet.findMany({ select: { thongbao_ct_id: true } })
     * 
    **/
    findMany<T extends thongbao_tuyendung_chitietFindManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendung_chitietFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<thongbao_tuyendung_chitiet>>, PrismaPromise<Array<thongbao_tuyendung_chitietGetPayload<T>>>>

    /**
     * Create a Thongbao_tuyendung_chitiet.
     * @param {thongbao_tuyendung_chitietCreateArgs} args - Arguments to create a Thongbao_tuyendung_chitiet.
     * @example
     * // Create one Thongbao_tuyendung_chitiet
     * const Thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.create({
     *   data: {
     *     // ... data to create a Thongbao_tuyendung_chitiet
     *   }
     * })
     * 
    **/
    create<T extends thongbao_tuyendung_chitietCreateArgs>(
      args: SelectSubset<T, thongbao_tuyendung_chitietCreateArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>>

    /**
     * Create many Thongbao_tuyendung_chitiets.
     *     @param {thongbao_tuyendung_chitietCreateManyArgs} args - Arguments to create many Thongbao_tuyendung_chitiets.
     *     @example
     *     // Create many Thongbao_tuyendung_chitiets
     *     const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends thongbao_tuyendung_chitietCreateManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendung_chitietCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Thongbao_tuyendung_chitiet.
     * @param {thongbao_tuyendung_chitietDeleteArgs} args - Arguments to delete one Thongbao_tuyendung_chitiet.
     * @example
     * // Delete one Thongbao_tuyendung_chitiet
     * const Thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.delete({
     *   where: {
     *     // ... filter to delete one Thongbao_tuyendung_chitiet
     *   }
     * })
     * 
    **/
    delete<T extends thongbao_tuyendung_chitietDeleteArgs>(
      args: SelectSubset<T, thongbao_tuyendung_chitietDeleteArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>>

    /**
     * Update one Thongbao_tuyendung_chitiet.
     * @param {thongbao_tuyendung_chitietUpdateArgs} args - Arguments to update one Thongbao_tuyendung_chitiet.
     * @example
     * // Update one Thongbao_tuyendung_chitiet
     * const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends thongbao_tuyendung_chitietUpdateArgs>(
      args: SelectSubset<T, thongbao_tuyendung_chitietUpdateArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>>

    /**
     * Delete zero or more Thongbao_tuyendung_chitiets.
     * @param {thongbao_tuyendung_chitietDeleteManyArgs} args - Arguments to filter Thongbao_tuyendung_chitiets to delete.
     * @example
     * // Delete a few Thongbao_tuyendung_chitiets
     * const { count } = await prisma.thongbao_tuyendung_chitiet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends thongbao_tuyendung_chitietDeleteManyArgs>(
      args?: SelectSubset<T, thongbao_tuyendung_chitietDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thongbao_tuyendung_chitiets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendung_chitietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thongbao_tuyendung_chitiets
     * const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends thongbao_tuyendung_chitietUpdateManyArgs>(
      args: SelectSubset<T, thongbao_tuyendung_chitietUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Thongbao_tuyendung_chitiet.
     * @param {thongbao_tuyendung_chitietUpsertArgs} args - Arguments to update or create a Thongbao_tuyendung_chitiet.
     * @example
     * // Update or create a Thongbao_tuyendung_chitiet
     * const thongbao_tuyendung_chitiet = await prisma.thongbao_tuyendung_chitiet.upsert({
     *   create: {
     *     // ... data to create a Thongbao_tuyendung_chitiet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thongbao_tuyendung_chitiet we want to update
     *   }
     * })
    **/
    upsert<T extends thongbao_tuyendung_chitietUpsertArgs>(
      args: SelectSubset<T, thongbao_tuyendung_chitietUpsertArgs>
    ): CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet>, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T>>>

    /**
     * Count the number of Thongbao_tuyendung_chitiets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thongbao_tuyendung_chitietCountArgs} args - Arguments to filter Thongbao_tuyendung_chitiets to count.
     * @example
     * // Count the number of Thongbao_tuyendung_chitiets
     * const count = await prisma.thongbao_tuyendung_chitiet.count({
     *   where: {
     *     // ... the filter for the Thongbao_tuyendung_chitiets we want to count
     *   }
     * })
    **/
    count<T extends thongbao_tuyendung_chitietCountArgs>(
      args?: Subset<T, thongbao_tuyendung_chitietCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Thongbao_tuyendung_chitietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thongbao_tuyendung_chitiet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thongbao_tuyendung_chitietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Thongbao_tuyendung_chitietAggregateArgs>(args: Subset<T, Thongbao_tuyendung_chitietAggregateArgs>): PrismaPromise<GetThongbao_tuyendung_chitietAggregateType<T>>

    /**
     * Group by Thongbao_tuyendung_chitiet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thongbao_tuyendung_chitietGroupByArgs} args - Group by arguments.
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
      T extends Thongbao_tuyendung_chitietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Thongbao_tuyendung_chitietGroupByArgs['orderBy'] }
        : { orderBy?: Thongbao_tuyendung_chitietGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Thongbao_tuyendung_chitietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThongbao_tuyendung_chitietGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for thongbao_tuyendung_chitiet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__thongbao_tuyendung_chitietClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thongbao_tuyendung<T extends thongbao_tuyendungArgs = {}>(args?: Subset<T, thongbao_tuyendungArgs>): CheckSelect<T, Prisma__thongbao_tuyendungClient<thongbao_tuyendung | null >, Prisma__thongbao_tuyendungClient<thongbao_tuyendungGetPayload<T> | null >>;

    ungtuyen<T extends ungtuyenFindManyArgs = {}>(args?: Subset<T, ungtuyenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ungtuyen>>, PrismaPromise<Array<ungtuyenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * thongbao_tuyendung_chitiet findUnique
   */
  export type thongbao_tuyendung_chitietFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * Throw an Error if a thongbao_tuyendung_chitiet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which thongbao_tuyendung_chitiet to fetch.
     * 
    **/
    where: thongbao_tuyendung_chitietWhereUniqueInput
  }


  /**
   * thongbao_tuyendung_chitiet findFirst
   */
  export type thongbao_tuyendung_chitietFindFirstArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * Throw an Error if a thongbao_tuyendung_chitiet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which thongbao_tuyendung_chitiet to fetch.
     * 
    **/
    where?: thongbao_tuyendung_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendung_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendung_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thongbao_tuyendung_chitiets.
     * 
    **/
    cursor?: thongbao_tuyendung_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendung_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendung_chitiets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thongbao_tuyendung_chitiets.
     * 
    **/
    distinct?: Enumerable<Thongbao_tuyendung_chitietScalarFieldEnum>
  }


  /**
   * thongbao_tuyendung_chitiet findMany
   */
  export type thongbao_tuyendung_chitietFindManyArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * Filter, which thongbao_tuyendung_chitiets to fetch.
     * 
    **/
    where?: thongbao_tuyendung_chitietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thongbao_tuyendung_chitiets to fetch.
     * 
    **/
    orderBy?: Enumerable<thongbao_tuyendung_chitietOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing thongbao_tuyendung_chitiets.
     * 
    **/
    cursor?: thongbao_tuyendung_chitietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thongbao_tuyendung_chitiets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thongbao_tuyendung_chitiets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Thongbao_tuyendung_chitietScalarFieldEnum>
  }


  /**
   * thongbao_tuyendung_chitiet create
   */
  export type thongbao_tuyendung_chitietCreateArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * The data needed to create a thongbao_tuyendung_chitiet.
     * 
    **/
    data: XOR<thongbao_tuyendung_chitietCreateInput, thongbao_tuyendung_chitietUncheckedCreateInput>
  }


  /**
   * thongbao_tuyendung_chitiet createMany
   */
  export type thongbao_tuyendung_chitietCreateManyArgs = {
    /**
     * The data used to create many thongbao_tuyendung_chitiets.
     * 
    **/
    data: Enumerable<thongbao_tuyendung_chitietCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * thongbao_tuyendung_chitiet update
   */
  export type thongbao_tuyendung_chitietUpdateArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * The data needed to update a thongbao_tuyendung_chitiet.
     * 
    **/
    data: XOR<thongbao_tuyendung_chitietUpdateInput, thongbao_tuyendung_chitietUncheckedUpdateInput>
    /**
     * Choose, which thongbao_tuyendung_chitiet to update.
     * 
    **/
    where: thongbao_tuyendung_chitietWhereUniqueInput
  }


  /**
   * thongbao_tuyendung_chitiet updateMany
   */
  export type thongbao_tuyendung_chitietUpdateManyArgs = {
    /**
     * The data used to update thongbao_tuyendung_chitiets.
     * 
    **/
    data: XOR<thongbao_tuyendung_chitietUpdateManyMutationInput, thongbao_tuyendung_chitietUncheckedUpdateManyInput>
    /**
     * Filter which thongbao_tuyendung_chitiets to update
     * 
    **/
    where?: thongbao_tuyendung_chitietWhereInput
  }


  /**
   * thongbao_tuyendung_chitiet upsert
   */
  export type thongbao_tuyendung_chitietUpsertArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * The filter to search for the thongbao_tuyendung_chitiet to update in case it exists.
     * 
    **/
    where: thongbao_tuyendung_chitietWhereUniqueInput
    /**
     * In case the thongbao_tuyendung_chitiet found by the `where` argument doesn't exist, create a new thongbao_tuyendung_chitiet with this data.
     * 
    **/
    create: XOR<thongbao_tuyendung_chitietCreateInput, thongbao_tuyendung_chitietUncheckedCreateInput>
    /**
     * In case the thongbao_tuyendung_chitiet was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<thongbao_tuyendung_chitietUpdateInput, thongbao_tuyendung_chitietUncheckedUpdateInput>
  }


  /**
   * thongbao_tuyendung_chitiet delete
   */
  export type thongbao_tuyendung_chitietDeleteArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
    /**
     * Filter which thongbao_tuyendung_chitiet to delete.
     * 
    **/
    where: thongbao_tuyendung_chitietWhereUniqueInput
  }


  /**
   * thongbao_tuyendung_chitiet deleteMany
   */
  export type thongbao_tuyendung_chitietDeleteManyArgs = {
    /**
     * Filter which thongbao_tuyendung_chitiets to delete
     * 
    **/
    where?: thongbao_tuyendung_chitietWhereInput
  }


  /**
   * thongbao_tuyendung_chitiet without action
   */
  export type thongbao_tuyendung_chitietArgs = {
    /**
     * Select specific fields to fetch from the thongbao_tuyendung_chitiet
     * 
    **/
    select?: thongbao_tuyendung_chitietSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: thongbao_tuyendung_chitietInclude | null
  }



  /**
   * Model ungtuyen
   */


  export type AggregateUngtuyen = {
    _count: UngtuyenCountAggregateOutputType | null
    _avg: UngtuyenAvgAggregateOutputType | null
    _sum: UngtuyenSumAggregateOutputType | null
    _min: UngtuyenMinAggregateOutputType | null
    _max: UngtuyenMaxAggregateOutputType | null
  }

  export type UngtuyenAvgAggregateOutputType = {
    ungtuyen_id: number | null
    thongbao_ct_id: number | null
    hoso_id: number | null
  }

  export type UngtuyenSumAggregateOutputType = {
    ungtuyen_id: bigint | null
    thongbao_ct_id: bigint | null
    hoso_id: bigint | null
  }

  export type UngtuyenMinAggregateOutputType = {
    ungtuyen_id: bigint | null
    thongbao_ct_id: bigint | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UngtuyenMaxAggregateOutputType = {
    ungtuyen_id: bigint | null
    thongbao_ct_id: bigint | null
    hoso_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UngtuyenCountAggregateOutputType = {
    ungtuyen_id: number
    thongbao_ct_id: number
    hoso_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UngtuyenAvgAggregateInputType = {
    ungtuyen_id?: true
    thongbao_ct_id?: true
    hoso_id?: true
  }

  export type UngtuyenSumAggregateInputType = {
    ungtuyen_id?: true
    thongbao_ct_id?: true
    hoso_id?: true
  }

  export type UngtuyenMinAggregateInputType = {
    ungtuyen_id?: true
    thongbao_ct_id?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UngtuyenMaxAggregateInputType = {
    ungtuyen_id?: true
    thongbao_ct_id?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UngtuyenCountAggregateInputType = {
    ungtuyen_id?: true
    thongbao_ct_id?: true
    hoso_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UngtuyenAggregateArgs = {
    /**
     * Filter which ungtuyen to aggregate.
     * 
    **/
    where?: ungtuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ungtuyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ungtuyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ungtuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ungtuyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ungtuyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ungtuyens
    **/
    _count?: true | UngtuyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UngtuyenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UngtuyenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UngtuyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UngtuyenMaxAggregateInputType
  }

  export type GetUngtuyenAggregateType<T extends UngtuyenAggregateArgs> = {
        [P in keyof T & keyof AggregateUngtuyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUngtuyen[P]>
      : GetScalarType<T[P], AggregateUngtuyen[P]>
  }




  export type UngtuyenGroupByArgs = {
    where?: ungtuyenWhereInput
    orderBy?: Enumerable<ungtuyenOrderByWithAggregationInput>
    by: Array<UngtuyenScalarFieldEnum>
    having?: ungtuyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UngtuyenCountAggregateInputType | true
    _avg?: UngtuyenAvgAggregateInputType
    _sum?: UngtuyenSumAggregateInputType
    _min?: UngtuyenMinAggregateInputType
    _max?: UngtuyenMaxAggregateInputType
  }


  export type UngtuyenGroupByOutputType = {
    ungtuyen_id: bigint
    thongbao_ct_id: bigint
    hoso_id: bigint
    created_at: Date | null
    updated_at: Date | null
    _count: UngtuyenCountAggregateOutputType | null
    _avg: UngtuyenAvgAggregateOutputType | null
    _sum: UngtuyenSumAggregateOutputType | null
    _min: UngtuyenMinAggregateOutputType | null
    _max: UngtuyenMaxAggregateOutputType | null
  }

  type GetUngtuyenGroupByPayload<T extends UngtuyenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UngtuyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UngtuyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UngtuyenGroupByOutputType[P]>
            : GetScalarType<T[P], UngtuyenGroupByOutputType[P]>
        }
      >
    >


  export type ungtuyenSelect = {
    ungtuyen_id?: boolean
    thongbao_ct_id?: boolean
    hoso_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    hoso_ungvien?: boolean | hoso_ungvienArgs
    thongbao_tuyendung_chitiet?: boolean | thongbao_tuyendung_chitietArgs
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietFindManyArgs
    _count?: boolean | UngtuyenCountOutputTypeArgs
  }

  export type ungtuyenInclude = {
    hoso_ungvien?: boolean | hoso_ungvienArgs
    thongbao_tuyendung_chitiet?: boolean | thongbao_tuyendung_chitietArgs
    lich_thituyen_chitiet?: boolean | lich_thituyen_chitietFindManyArgs
    _count?: boolean | UngtuyenCountOutputTypeArgs
  }

  export type ungtuyenGetPayload<
    S extends boolean | null | undefined | ungtuyenArgs,
    U = keyof S
      > = S extends true
        ? ungtuyen
    : S extends undefined
    ? never
    : S extends ungtuyenArgs | ungtuyenFindManyArgs
    ?'include' extends U
    ? ungtuyen  & {
    [P in TrueKeys<S['include']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['include'][P]> :
        P extends 'thongbao_tuyendung_chitiet' ? thongbao_tuyendung_chitietGetPayload<S['include'][P]> :
        P extends 'lich_thituyen_chitiet' ? Array < lich_thituyen_chitietGetPayload<S['include'][P]>>  :
        P extends '_count' ? UngtuyenCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'hoso_ungvien' ? hoso_ungvienGetPayload<S['select'][P]> :
        P extends 'thongbao_tuyendung_chitiet' ? thongbao_tuyendung_chitietGetPayload<S['select'][P]> :
        P extends 'lich_thituyen_chitiet' ? Array < lich_thituyen_chitietGetPayload<S['select'][P]>>  :
        P extends '_count' ? UngtuyenCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ungtuyen ? ungtuyen[P] : never
  } 
    : ungtuyen
  : ungtuyen


  type ungtuyenCountArgs = Merge<
    Omit<ungtuyenFindManyArgs, 'select' | 'include'> & {
      select?: UngtuyenCountAggregateInputType | true
    }
  >

  export interface ungtuyenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Ungtuyen that matches the filter.
     * @param {ungtuyenFindUniqueArgs} args - Arguments to find a Ungtuyen
     * @example
     * // Get one Ungtuyen
     * const ungtuyen = await prisma.ungtuyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ungtuyenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ungtuyenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ungtuyen'> extends True ? CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>> : CheckSelect<T, Prisma__ungtuyenClient<ungtuyen | null >, Prisma__ungtuyenClient<ungtuyenGetPayload<T> | null >>

    /**
     * Find the first Ungtuyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ungtuyenFindFirstArgs} args - Arguments to find a Ungtuyen
     * @example
     * // Get one Ungtuyen
     * const ungtuyen = await prisma.ungtuyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ungtuyenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ungtuyenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ungtuyen'> extends True ? CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>> : CheckSelect<T, Prisma__ungtuyenClient<ungtuyen | null >, Prisma__ungtuyenClient<ungtuyenGetPayload<T> | null >>

    /**
     * Find zero or more Ungtuyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ungtuyenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ungtuyens
     * const ungtuyens = await prisma.ungtuyen.findMany()
     * 
     * // Get first 10 Ungtuyens
     * const ungtuyens = await prisma.ungtuyen.findMany({ take: 10 })
     * 
     * // Only select the `ungtuyen_id`
     * const ungtuyenWithUngtuyen_idOnly = await prisma.ungtuyen.findMany({ select: { ungtuyen_id: true } })
     * 
    **/
    findMany<T extends ungtuyenFindManyArgs>(
      args?: SelectSubset<T, ungtuyenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ungtuyen>>, PrismaPromise<Array<ungtuyenGetPayload<T>>>>

    /**
     * Create a Ungtuyen.
     * @param {ungtuyenCreateArgs} args - Arguments to create a Ungtuyen.
     * @example
     * // Create one Ungtuyen
     * const Ungtuyen = await prisma.ungtuyen.create({
     *   data: {
     *     // ... data to create a Ungtuyen
     *   }
     * })
     * 
    **/
    create<T extends ungtuyenCreateArgs>(
      args: SelectSubset<T, ungtuyenCreateArgs>
    ): CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>>

    /**
     * Create many Ungtuyens.
     *     @param {ungtuyenCreateManyArgs} args - Arguments to create many Ungtuyens.
     *     @example
     *     // Create many Ungtuyens
     *     const ungtuyen = await prisma.ungtuyen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ungtuyenCreateManyArgs>(
      args?: SelectSubset<T, ungtuyenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ungtuyen.
     * @param {ungtuyenDeleteArgs} args - Arguments to delete one Ungtuyen.
     * @example
     * // Delete one Ungtuyen
     * const Ungtuyen = await prisma.ungtuyen.delete({
     *   where: {
     *     // ... filter to delete one Ungtuyen
     *   }
     * })
     * 
    **/
    delete<T extends ungtuyenDeleteArgs>(
      args: SelectSubset<T, ungtuyenDeleteArgs>
    ): CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>>

    /**
     * Update one Ungtuyen.
     * @param {ungtuyenUpdateArgs} args - Arguments to update one Ungtuyen.
     * @example
     * // Update one Ungtuyen
     * const ungtuyen = await prisma.ungtuyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ungtuyenUpdateArgs>(
      args: SelectSubset<T, ungtuyenUpdateArgs>
    ): CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>>

    /**
     * Delete zero or more Ungtuyens.
     * @param {ungtuyenDeleteManyArgs} args - Arguments to filter Ungtuyens to delete.
     * @example
     * // Delete a few Ungtuyens
     * const { count } = await prisma.ungtuyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ungtuyenDeleteManyArgs>(
      args?: SelectSubset<T, ungtuyenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ungtuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ungtuyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ungtuyens
     * const ungtuyen = await prisma.ungtuyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ungtuyenUpdateManyArgs>(
      args: SelectSubset<T, ungtuyenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ungtuyen.
     * @param {ungtuyenUpsertArgs} args - Arguments to update or create a Ungtuyen.
     * @example
     * // Update or create a Ungtuyen
     * const ungtuyen = await prisma.ungtuyen.upsert({
     *   create: {
     *     // ... data to create a Ungtuyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ungtuyen we want to update
     *   }
     * })
    **/
    upsert<T extends ungtuyenUpsertArgs>(
      args: SelectSubset<T, ungtuyenUpsertArgs>
    ): CheckSelect<T, Prisma__ungtuyenClient<ungtuyen>, Prisma__ungtuyenClient<ungtuyenGetPayload<T>>>

    /**
     * Count the number of Ungtuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ungtuyenCountArgs} args - Arguments to filter Ungtuyens to count.
     * @example
     * // Count the number of Ungtuyens
     * const count = await prisma.ungtuyen.count({
     *   where: {
     *     // ... the filter for the Ungtuyens we want to count
     *   }
     * })
    **/
    count<T extends ungtuyenCountArgs>(
      args?: Subset<T, ungtuyenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UngtuyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ungtuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UngtuyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UngtuyenAggregateArgs>(args: Subset<T, UngtuyenAggregateArgs>): PrismaPromise<GetUngtuyenAggregateType<T>>

    /**
     * Group by Ungtuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UngtuyenGroupByArgs} args - Group by arguments.
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
      T extends UngtuyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UngtuyenGroupByArgs['orderBy'] }
        : { orderBy?: UngtuyenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UngtuyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUngtuyenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ungtuyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ungtuyenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    hoso_ungvien<T extends hoso_ungvienArgs = {}>(args?: Subset<T, hoso_ungvienArgs>): CheckSelect<T, Prisma__hoso_ungvienClient<hoso_ungvien | null >, Prisma__hoso_ungvienClient<hoso_ungvienGetPayload<T> | null >>;

    thongbao_tuyendung_chitiet<T extends thongbao_tuyendung_chitietArgs = {}>(args?: Subset<T, thongbao_tuyendung_chitietArgs>): CheckSelect<T, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitiet | null >, Prisma__thongbao_tuyendung_chitietClient<thongbao_tuyendung_chitietGetPayload<T> | null >>;

    lich_thituyen_chitiet<T extends lich_thituyen_chitietFindManyArgs = {}>(args?: Subset<T, lich_thituyen_chitietFindManyArgs>): CheckSelect<T, PrismaPromise<Array<lich_thituyen_chitiet>>, PrismaPromise<Array<lich_thituyen_chitietGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ungtuyen findUnique
   */
  export type ungtuyenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * Throw an Error if a ungtuyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ungtuyen to fetch.
     * 
    **/
    where: ungtuyenWhereUniqueInput
  }


  /**
   * ungtuyen findFirst
   */
  export type ungtuyenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * Throw an Error if a ungtuyen can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ungtuyen to fetch.
     * 
    **/
    where?: ungtuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ungtuyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ungtuyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ungtuyens.
     * 
    **/
    cursor?: ungtuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ungtuyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ungtuyens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ungtuyens.
     * 
    **/
    distinct?: Enumerable<UngtuyenScalarFieldEnum>
  }


  /**
   * ungtuyen findMany
   */
  export type ungtuyenFindManyArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * Filter, which ungtuyens to fetch.
     * 
    **/
    where?: ungtuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ungtuyens to fetch.
     * 
    **/
    orderBy?: Enumerable<ungtuyenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ungtuyens.
     * 
    **/
    cursor?: ungtuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ungtuyens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ungtuyens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UngtuyenScalarFieldEnum>
  }


  /**
   * ungtuyen create
   */
  export type ungtuyenCreateArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * The data needed to create a ungtuyen.
     * 
    **/
    data: XOR<ungtuyenCreateInput, ungtuyenUncheckedCreateInput>
  }


  /**
   * ungtuyen createMany
   */
  export type ungtuyenCreateManyArgs = {
    /**
     * The data used to create many ungtuyens.
     * 
    **/
    data: Enumerable<ungtuyenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ungtuyen update
   */
  export type ungtuyenUpdateArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * The data needed to update a ungtuyen.
     * 
    **/
    data: XOR<ungtuyenUpdateInput, ungtuyenUncheckedUpdateInput>
    /**
     * Choose, which ungtuyen to update.
     * 
    **/
    where: ungtuyenWhereUniqueInput
  }


  /**
   * ungtuyen updateMany
   */
  export type ungtuyenUpdateManyArgs = {
    /**
     * The data used to update ungtuyens.
     * 
    **/
    data: XOR<ungtuyenUpdateManyMutationInput, ungtuyenUncheckedUpdateManyInput>
    /**
     * Filter which ungtuyens to update
     * 
    **/
    where?: ungtuyenWhereInput
  }


  /**
   * ungtuyen upsert
   */
  export type ungtuyenUpsertArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * The filter to search for the ungtuyen to update in case it exists.
     * 
    **/
    where: ungtuyenWhereUniqueInput
    /**
     * In case the ungtuyen found by the `where` argument doesn't exist, create a new ungtuyen with this data.
     * 
    **/
    create: XOR<ungtuyenCreateInput, ungtuyenUncheckedCreateInput>
    /**
     * In case the ungtuyen was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ungtuyenUpdateInput, ungtuyenUncheckedUpdateInput>
  }


  /**
   * ungtuyen delete
   */
  export type ungtuyenDeleteArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
    /**
     * Filter which ungtuyen to delete.
     * 
    **/
    where: ungtuyenWhereUniqueInput
  }


  /**
   * ungtuyen deleteMany
   */
  export type ungtuyenDeleteManyArgs = {
    /**
     * Filter which ungtuyens to delete
     * 
    **/
    where?: ungtuyenWhereInput
  }


  /**
   * ungtuyen without action
   */
  export type ungtuyenArgs = {
    /**
     * Select specific fields to fetch from the ungtuyen
     * 
    **/
    select?: ungtuyenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ungtuyenInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified_at: number
    password: number
    remember_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: bigint
    name: string
    email: string
    email_verified_at: Date | null
    password: string
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof users ? users[P] : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Throw an Error if a users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Coquan_tuyendungScalarFieldEnum: {
    coquan_id: 'coquan_id',
    coquan_ma: 'coquan_ma',
    coquan_ten: 'coquan_ten',
    coquan_diachi: 'coquan_diachi',
    coquan_sdt: 'coquan_sdt',
    coquan_email: 'coquan_email',
    coquan_website: 'coquan_website',
    nguoilienhe: 'nguoilienhe',
    co_quan_mota: 'co_quan_mota',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Coquan_tuyendungScalarFieldEnum = (typeof Coquan_tuyendungScalarFieldEnum)[keyof typeof Coquan_tuyendungScalarFieldEnum]


  export const Dm_dantocScalarFieldEnum: {
    dantoc_id: 'dantoc_id',
    dantoc_ma: 'dantoc_ma',
    dantoc_ten: 'dantoc_ten',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Dm_dantocScalarFieldEnum = (typeof Dm_dantocScalarFieldEnum)[keyof typeof Dm_dantocScalarFieldEnum]


  export const Dm_tongiaoScalarFieldEnum: {
    tongiao_id: 'tongiao_id',
    tongiao_ma: 'tongiao_ma',
    tongiao_ten: 'tongiao_ten',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Dm_tongiaoScalarFieldEnum = (typeof Dm_tongiaoScalarFieldEnum)[keyof typeof Dm_tongiaoScalarFieldEnum]


  export const Failed_jobsScalarFieldEnum: {
    id: 'id',
    connection: 'connection',
    queue: 'queue',
    payload: 'payload',
    exception: 'exception',
    failed_at: 'failed_at'
  };

  export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum]


  export const Hoso_ungvienScalarFieldEnum: {
    hoso_id: 'hoso_id',
    hoso_ma: 'hoso_ma',
    hoso_ngaynop: 'hoso_ngaynop',
    hoten_ungvien: 'hoten_ungvien',
    gioi_tinh: 'gioi_tinh',
    sdt: 'sdt',
    email: 'email',
    CMND: 'CMND',
    que_quan: 'que_quan',
    diachi_lienhe: 'diachi_lienhe',
    tinhtrang_honnhan: 'tinhtrang_honnhan',
    nguoilienhe_sdt: 'nguoilienhe_sdt',
    nguoilienhe_diachi: 'nguoilienhe_diachi',
    ngayvao_doan: 'ngayvao_doan',
    ngayvao_dang: 'ngayvao_dang',
    congviec_truoctuyendung: 'congviec_truoctuyendung',
    trangthai_tuyendung: 'trangthai_tuyendung',
    dantoc_id: 'dantoc_id',
    tongiao_id: 'tongiao_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hoso_ungvienScalarFieldEnum = (typeof Hoso_ungvienScalarFieldEnum)[keyof typeof Hoso_ungvienScalarFieldEnum]


  export const Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum: {
    cauhoi_id: 'cauhoi_id',
    cauhoi_noidung: 'cauhoi_noidung',
    cauhoi_trangthai: 'cauhoi_trangthai',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum = (typeof Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum)[keyof typeof Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum]


  export const Hoso_ungvien_skillScalarFieldEnum: {
    skill_id: 'skill_id',
    skill_code: 'skill_code',
    skill_name: 'skill_name',
    skill_status: 'skill_status',
    group_id: 'group_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hoso_ungvien_skillScalarFieldEnum = (typeof Hoso_ungvien_skillScalarFieldEnum)[keyof typeof Hoso_ungvien_skillScalarFieldEnum]


  export const Hoso_ungvien_skillgroupScalarFieldEnum: {
    group_id: 'group_id',
    group_name: 'group_name',
    group_code: 'group_code',
    group_status: 'group_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hoso_ungvien_skillgroupScalarFieldEnum = (typeof Hoso_ungvien_skillgroupScalarFieldEnum)[keyof typeof Hoso_ungvien_skillgroupScalarFieldEnum]


  export const Hoso_ungvien_thongtin_giadinhScalarFieldEnum: {
    thongtingiadinh_id: 'thongtingiadinh_id',
    hoten: 'hoten',
    namsinh: 'namsinh',
    Nghenghiep: 'Nghenghiep',
    CMND: 'CMND',
    quanhe: 'quanhe',
    diachi_hientai: 'diachi_hientai',
    hoso_id: 'hoso_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hoso_ungvien_thongtin_giadinhScalarFieldEnum = (typeof Hoso_ungvien_thongtin_giadinhScalarFieldEnum)[keyof typeof Hoso_ungvien_thongtin_giadinhScalarFieldEnum]


  export const Ketqua_thituyenScalarFieldEnum: {
    ketqua_id: 'ketqua_id',
    tongdiem: 'tongdiem',
    danhgia_baithi: 'danhgia_baithi',
    ketqua: 'ketqua',
    upload_file: 'upload_file',
    trangthai: 'trangthai',
    lichthi_ct_id: 'lichthi_ct_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Ketqua_thituyenScalarFieldEnum = (typeof Ketqua_thituyenScalarFieldEnum)[keyof typeof Ketqua_thituyenScalarFieldEnum]


  export const Lich_thituyenScalarFieldEnum: {
    lichthi_id: 'lichthi_id',
    ngaythi: 'ngaythi',
    diadiem: 'diadiem',
    noidung_thituyen: 'noidung_thituyen',
    thoigian: 'thoigian',
    soluong: 'soluong',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lich_thituyenScalarFieldEnum = (typeof Lich_thituyenScalarFieldEnum)[keyof typeof Lich_thituyenScalarFieldEnum]


  export const Lich_thituyen_chitietScalarFieldEnum: {
    lichthi_ct_id: 'lichthi_ct_id',
    ungtuyen_id: 'ungtuyen_id',
    lichthi_id: 'lichthi_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Lich_thituyen_chitietScalarFieldEnum = (typeof Lich_thituyen_chitietScalarFieldEnum)[keyof typeof Lich_thituyen_chitietScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const Quatrinh_congtacScalarFieldEnum: {
    quatrinh_congtac_id: 'quatrinh_congtac_id',
    tungay: 'tungay',
    denngay: 'denngay',
    ten_coquan_donvi: 'ten_coquan_donvi',
    chuvu: 'chuvu',
    congviec_phutrach: 'congviec_phutrach',
    thanhtich_noibac: 'thanhtich_noibac',
    hoso_id: 'hoso_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Quatrinh_congtacScalarFieldEnum = (typeof Quatrinh_congtacScalarFieldEnum)[keyof typeof Quatrinh_congtacScalarFieldEnum]


  export const Quatrinh_hoctapScalarFieldEnum: {
    quatrinh_hoctap_id: 'quatrinh_hoctap_id',
    tungay: 'tungay',
    denngay: 'denngay',
    bac_kynang: 'bac_kynang',
    ten_donvi_daotao: 'ten_donvi_daotao',
    ten_chungnhan_vanbang: 'ten_chungnhan_vanbang',
    xeploai: 'xeploai',
    namcap: 'namcap',
    hoso_id: 'hoso_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Quatrinh_hoctapScalarFieldEnum = (typeof Quatrinh_hoctapScalarFieldEnum)[keyof typeof Quatrinh_hoctapScalarFieldEnum]


  export const Thongbao_tuyendungScalarFieldEnum: {
    thongbao_id: 'thongbao_id',
    thongbao_ma: 'thongbao_ma',
    thongbao_ngaylap: 'thongbao_ngaylap',
    thongbao_hannop: 'thongbao_hannop',
    thongbao_noidung: 'thongbao_noidung',
    quyenloi: 'quyenloi',
    thanhphan_hoso: 'thanhphan_hoso',
    phuongthuc_nophs: 'phuongthuc_nophs',
    thongbao_trangthai: 'thongbao_trangthai',
    coquan_id: 'coquan_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Thongbao_tuyendungScalarFieldEnum = (typeof Thongbao_tuyendungScalarFieldEnum)[keyof typeof Thongbao_tuyendungScalarFieldEnum]


  export const Thongbao_tuyendung_chitietScalarFieldEnum: {
    thongbao_ct_id: 'thongbao_ct_id',
    vitri_tuyendung: 'vitri_tuyendung',
    soluong: 'soluong',
    mota: 'mota',
    yeucauchung: 'yeucauchung',
    muc_luong_min: 'muc_luong_min',
    muc_luong_max: 'muc_luong_max',
    thongbao_id: 'thongbao_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Thongbao_tuyendung_chitietScalarFieldEnum = (typeof Thongbao_tuyendung_chitietScalarFieldEnum)[keyof typeof Thongbao_tuyendung_chitietScalarFieldEnum]


  export const UngtuyenScalarFieldEnum: {
    ungtuyen_id: 'ungtuyen_id',
    thongbao_ct_id: 'thongbao_ct_id',
    hoso_id: 'hoso_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UngtuyenScalarFieldEnum = (typeof UngtuyenScalarFieldEnum)[keyof typeof UngtuyenScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified_at: 'email_verified_at',
    password: 'password',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type coquan_tuyendungWhereInput = {
    AND?: Enumerable<coquan_tuyendungWhereInput>
    OR?: Enumerable<coquan_tuyendungWhereInput>
    NOT?: Enumerable<coquan_tuyendungWhereInput>
    coquan_id?: BigIntFilter | bigint | number
    coquan_ma?: StringFilter | string
    coquan_ten?: StringFilter | string
    coquan_diachi?: StringFilter | string
    coquan_sdt?: StringFilter | string
    coquan_email?: StringFilter | string
    coquan_website?: StringFilter | string
    nguoilienhe?: StringFilter | string
    co_quan_mota?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    thongbao_tuyendung?: Thongbao_tuyendungListRelationFilter
  }

  export type coquan_tuyendungOrderByWithRelationInput = {
    coquan_id?: SortOrder
    coquan_ma?: SortOrder
    coquan_ten?: SortOrder
    coquan_diachi?: SortOrder
    coquan_sdt?: SortOrder
    coquan_email?: SortOrder
    coquan_website?: SortOrder
    nguoilienhe?: SortOrder
    co_quan_mota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    thongbao_tuyendung?: thongbao_tuyendungOrderByRelationAggregateInput
  }

  export type coquan_tuyendungWhereUniqueInput = {
    coquan_id?: bigint | number
  }

  export type coquan_tuyendungOrderByWithAggregationInput = {
    coquan_id?: SortOrder
    coquan_ma?: SortOrder
    coquan_ten?: SortOrder
    coquan_diachi?: SortOrder
    coquan_sdt?: SortOrder
    coquan_email?: SortOrder
    coquan_website?: SortOrder
    nguoilienhe?: SortOrder
    co_quan_mota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: coquan_tuyendungCountOrderByAggregateInput
    _avg?: coquan_tuyendungAvgOrderByAggregateInput
    _max?: coquan_tuyendungMaxOrderByAggregateInput
    _min?: coquan_tuyendungMinOrderByAggregateInput
    _sum?: coquan_tuyendungSumOrderByAggregateInput
  }

  export type coquan_tuyendungScalarWhereWithAggregatesInput = {
    AND?: Enumerable<coquan_tuyendungScalarWhereWithAggregatesInput>
    OR?: Enumerable<coquan_tuyendungScalarWhereWithAggregatesInput>
    NOT?: Enumerable<coquan_tuyendungScalarWhereWithAggregatesInput>
    coquan_id?: BigIntWithAggregatesFilter | bigint | number
    coquan_ma?: StringWithAggregatesFilter | string
    coquan_ten?: StringWithAggregatesFilter | string
    coquan_diachi?: StringWithAggregatesFilter | string
    coquan_sdt?: StringWithAggregatesFilter | string
    coquan_email?: StringWithAggregatesFilter | string
    coquan_website?: StringWithAggregatesFilter | string
    nguoilienhe?: StringWithAggregatesFilter | string
    co_quan_mota?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dm_dantocWhereInput = {
    AND?: Enumerable<dm_dantocWhereInput>
    OR?: Enumerable<dm_dantocWhereInput>
    NOT?: Enumerable<dm_dantocWhereInput>
    dantoc_id?: BigIntFilter | bigint | number
    dantoc_ma?: StringFilter | string
    dantoc_ten?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: Hoso_ungvienListRelationFilter
  }

  export type dm_dantocOrderByWithRelationInput = {
    dantoc_id?: SortOrder
    dantoc_ma?: SortOrder
    dantoc_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByRelationAggregateInput
  }

  export type dm_dantocWhereUniqueInput = {
    dantoc_id?: bigint | number
  }

  export type dm_dantocOrderByWithAggregationInput = {
    dantoc_id?: SortOrder
    dantoc_ma?: SortOrder
    dantoc_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: dm_dantocCountOrderByAggregateInput
    _avg?: dm_dantocAvgOrderByAggregateInput
    _max?: dm_dantocMaxOrderByAggregateInput
    _min?: dm_dantocMinOrderByAggregateInput
    _sum?: dm_dantocSumOrderByAggregateInput
  }

  export type dm_dantocScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dm_dantocScalarWhereWithAggregatesInput>
    OR?: Enumerable<dm_dantocScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dm_dantocScalarWhereWithAggregatesInput>
    dantoc_id?: BigIntWithAggregatesFilter | bigint | number
    dantoc_ma?: StringWithAggregatesFilter | string
    dantoc_ten?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type dm_tongiaoWhereInput = {
    AND?: Enumerable<dm_tongiaoWhereInput>
    OR?: Enumerable<dm_tongiaoWhereInput>
    NOT?: Enumerable<dm_tongiaoWhereInput>
    tongiao_id?: BigIntFilter | bigint | number
    tongiao_ma?: StringFilter | string
    tongiao_ten?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: Hoso_ungvienListRelationFilter
  }

  export type dm_tongiaoOrderByWithRelationInput = {
    tongiao_id?: SortOrder
    tongiao_ma?: SortOrder
    tongiao_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByRelationAggregateInput
  }

  export type dm_tongiaoWhereUniqueInput = {
    tongiao_id?: bigint | number
  }

  export type dm_tongiaoOrderByWithAggregationInput = {
    tongiao_id?: SortOrder
    tongiao_ma?: SortOrder
    tongiao_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: dm_tongiaoCountOrderByAggregateInput
    _avg?: dm_tongiaoAvgOrderByAggregateInput
    _max?: dm_tongiaoMaxOrderByAggregateInput
    _min?: dm_tongiaoMinOrderByAggregateInput
    _sum?: dm_tongiaoSumOrderByAggregateInput
  }

  export type dm_tongiaoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<dm_tongiaoScalarWhereWithAggregatesInput>
    OR?: Enumerable<dm_tongiaoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<dm_tongiaoScalarWhereWithAggregatesInput>
    tongiao_id?: BigIntWithAggregatesFilter | bigint | number
    tongiao_ma?: StringWithAggregatesFilter | string
    tongiao_ten?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type failed_jobsWhereInput = {
    AND?: Enumerable<failed_jobsWhereInput>
    OR?: Enumerable<failed_jobsWhereInput>
    NOT?: Enumerable<failed_jobsWhereInput>
    id?: BigIntFilter | bigint | number
    connection?: StringFilter | string
    queue?: StringFilter | string
    payload?: StringFilter | string
    exception?: StringFilter | string
    failed_at?: DateTimeFilter | Date | string
  }

  export type failed_jobsOrderByWithRelationInput = {
    id?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsWhereUniqueInput = {
    id?: bigint | number
  }

  export type failed_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
    _count?: failed_jobsCountOrderByAggregateInput
    _avg?: failed_jobsAvgOrderByAggregateInput
    _max?: failed_jobsMaxOrderByAggregateInput
    _min?: failed_jobsMinOrderByAggregateInput
    _sum?: failed_jobsSumOrderByAggregateInput
  }

  export type failed_jobsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<failed_jobsScalarWhereWithAggregatesInput>
    OR?: Enumerable<failed_jobsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<failed_jobsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    connection?: StringWithAggregatesFilter | string
    queue?: StringWithAggregatesFilter | string
    payload?: StringWithAggregatesFilter | string
    exception?: StringWithAggregatesFilter | string
    failed_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type hoso_ungvienWhereInput = {
    AND?: Enumerable<hoso_ungvienWhereInput>
    OR?: Enumerable<hoso_ungvienWhereInput>
    NOT?: Enumerable<hoso_ungvienWhereInput>
    hoso_id?: BigIntFilter | bigint | number
    hoso_ma?: StringFilter | string
    hoso_ngaynop?: DateTimeFilter | Date | string
    hoten_ungvien?: StringFilter | string
    gioi_tinh?: BoolFilter | boolean
    sdt?: StringFilter | string
    email?: StringFilter | string
    CMND?: StringFilter | string
    que_quan?: StringFilter | string
    diachi_lienhe?: StringFilter | string
    tinhtrang_honnhan?: BoolFilter | boolean
    nguoilienhe_sdt?: StringFilter | string
    nguoilienhe_diachi?: StringFilter | string
    ngayvao_doan?: DateTimeFilter | Date | string
    ngayvao_dang?: DateTimeFilter | Date | string
    congviec_truoctuyendung?: StringFilter | string
    trangthai_tuyendung?: StringFilter | string
    dantoc_id?: BigIntFilter | bigint | number
    tongiao_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    dm_dantoc?: XOR<Dm_dantocRelationFilter, dm_dantocWhereInput>
    dm_tongiao?: XOR<Dm_tongiaoRelationFilter, dm_tongiaoWhereInput>
    hoso_ungvien_thongtin_giadinh?: Hoso_ungvien_thongtin_giadinhListRelationFilter
    quatrinh_congtac?: Quatrinh_congtacListRelationFilter
    quatrinh_hoctap?: Quatrinh_hoctapListRelationFilter
    ungtuyen?: UngtuyenListRelationFilter
  }

  export type hoso_ungvienOrderByWithRelationInput = {
    hoso_id?: SortOrder
    hoso_ma?: SortOrder
    hoso_ngaynop?: SortOrder
    hoten_ungvien?: SortOrder
    gioi_tinh?: SortOrder
    sdt?: SortOrder
    email?: SortOrder
    CMND?: SortOrder
    que_quan?: SortOrder
    diachi_lienhe?: SortOrder
    tinhtrang_honnhan?: SortOrder
    nguoilienhe_sdt?: SortOrder
    nguoilienhe_diachi?: SortOrder
    ngayvao_doan?: SortOrder
    ngayvao_dang?: SortOrder
    congviec_truoctuyendung?: SortOrder
    trangthai_tuyendung?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dm_dantoc?: dm_dantocOrderByWithRelationInput
    dm_tongiao?: dm_tongiaoOrderByWithRelationInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhOrderByRelationAggregateInput
    quatrinh_congtac?: quatrinh_congtacOrderByRelationAggregateInput
    quatrinh_hoctap?: quatrinh_hoctapOrderByRelationAggregateInput
    ungtuyen?: ungtuyenOrderByRelationAggregateInput
  }

  export type hoso_ungvienWhereUniqueInput = {
    hoso_id?: bigint | number
  }

  export type hoso_ungvienOrderByWithAggregationInput = {
    hoso_id?: SortOrder
    hoso_ma?: SortOrder
    hoso_ngaynop?: SortOrder
    hoten_ungvien?: SortOrder
    gioi_tinh?: SortOrder
    sdt?: SortOrder
    email?: SortOrder
    CMND?: SortOrder
    que_quan?: SortOrder
    diachi_lienhe?: SortOrder
    tinhtrang_honnhan?: SortOrder
    nguoilienhe_sdt?: SortOrder
    nguoilienhe_diachi?: SortOrder
    ngayvao_doan?: SortOrder
    ngayvao_dang?: SortOrder
    congviec_truoctuyendung?: SortOrder
    trangthai_tuyendung?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hoso_ungvienCountOrderByAggregateInput
    _avg?: hoso_ungvienAvgOrderByAggregateInput
    _max?: hoso_ungvienMaxOrderByAggregateInput
    _min?: hoso_ungvienMinOrderByAggregateInput
    _sum?: hoso_ungvienSumOrderByAggregateInput
  }

  export type hoso_ungvienScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hoso_ungvienScalarWhereWithAggregatesInput>
    OR?: Enumerable<hoso_ungvienScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hoso_ungvienScalarWhereWithAggregatesInput>
    hoso_id?: BigIntWithAggregatesFilter | bigint | number
    hoso_ma?: StringWithAggregatesFilter | string
    hoso_ngaynop?: DateTimeWithAggregatesFilter | Date | string
    hoten_ungvien?: StringWithAggregatesFilter | string
    gioi_tinh?: BoolWithAggregatesFilter | boolean
    sdt?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    CMND?: StringWithAggregatesFilter | string
    que_quan?: StringWithAggregatesFilter | string
    diachi_lienhe?: StringWithAggregatesFilter | string
    tinhtrang_honnhan?: BoolWithAggregatesFilter | boolean
    nguoilienhe_sdt?: StringWithAggregatesFilter | string
    nguoilienhe_diachi?: StringWithAggregatesFilter | string
    ngayvao_doan?: DateTimeWithAggregatesFilter | Date | string
    ngayvao_dang?: DateTimeWithAggregatesFilter | Date | string
    congviec_truoctuyendung?: StringWithAggregatesFilter | string
    trangthai_tuyendung?: StringWithAggregatesFilter | string
    dantoc_id?: BigIntWithAggregatesFilter | bigint | number
    tongiao_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungWhereInput = {
    AND?: Enumerable<hoso_ungvien_cauhoi_tuyendungWhereInput>
    OR?: Enumerable<hoso_ungvien_cauhoi_tuyendungWhereInput>
    NOT?: Enumerable<hoso_ungvien_cauhoi_tuyendungWhereInput>
    cauhoi_id?: BigIntFilter | bigint | number
    cauhoi_noidung?: StringFilter | string
    cauhoi_trangthai?: BoolFilter | boolean
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungOrderByWithRelationInput = {
    cauhoi_id?: SortOrder
    cauhoi_noidung?: SortOrder
    cauhoi_trangthai?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_cauhoi_tuyendungWhereUniqueInput = {
    cauhoi_id?: bigint | number
  }

  export type hoso_ungvien_cauhoi_tuyendungOrderByWithAggregationInput = {
    cauhoi_id?: SortOrder
    cauhoi_noidung?: SortOrder
    cauhoi_trangthai?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hoso_ungvien_cauhoi_tuyendungCountOrderByAggregateInput
    _avg?: hoso_ungvien_cauhoi_tuyendungAvgOrderByAggregateInput
    _max?: hoso_ungvien_cauhoi_tuyendungMaxOrderByAggregateInput
    _min?: hoso_ungvien_cauhoi_tuyendungMinOrderByAggregateInput
    _sum?: hoso_ungvien_cauhoi_tuyendungSumOrderByAggregateInput
  }

  export type hoso_ungvien_cauhoi_tuyendungScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hoso_ungvien_cauhoi_tuyendungScalarWhereWithAggregatesInput>
    OR?: Enumerable<hoso_ungvien_cauhoi_tuyendungScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hoso_ungvien_cauhoi_tuyendungScalarWhereWithAggregatesInput>
    cauhoi_id?: BigIntWithAggregatesFilter | bigint | number
    cauhoi_noidung?: StringWithAggregatesFilter | string
    cauhoi_trangthai?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type hoso_ungvien_skillWhereInput = {
    AND?: Enumerable<hoso_ungvien_skillWhereInput>
    OR?: Enumerable<hoso_ungvien_skillWhereInput>
    NOT?: Enumerable<hoso_ungvien_skillWhereInput>
    skill_id?: BigIntFilter | bigint | number
    skill_code?: StringFilter | string
    skill_name?: StringFilter | string
    skill_status?: BoolFilter | boolean
    group_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien_skillgroup?: XOR<Hoso_ungvien_skillgroupRelationFilter, hoso_ungvien_skillgroupWhereInput>
  }

  export type hoso_ungvien_skillOrderByWithRelationInput = {
    skill_id?: SortOrder
    skill_code?: SortOrder
    skill_name?: SortOrder
    skill_status?: SortOrder
    group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien_skillgroup?: hoso_ungvien_skillgroupOrderByWithRelationInput
  }

  export type hoso_ungvien_skillWhereUniqueInput = {
    skill_id?: bigint | number
  }

  export type hoso_ungvien_skillOrderByWithAggregationInput = {
    skill_id?: SortOrder
    skill_code?: SortOrder
    skill_name?: SortOrder
    skill_status?: SortOrder
    group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hoso_ungvien_skillCountOrderByAggregateInput
    _avg?: hoso_ungvien_skillAvgOrderByAggregateInput
    _max?: hoso_ungvien_skillMaxOrderByAggregateInput
    _min?: hoso_ungvien_skillMinOrderByAggregateInput
    _sum?: hoso_ungvien_skillSumOrderByAggregateInput
  }

  export type hoso_ungvien_skillScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hoso_ungvien_skillScalarWhereWithAggregatesInput>
    OR?: Enumerable<hoso_ungvien_skillScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hoso_ungvien_skillScalarWhereWithAggregatesInput>
    skill_id?: BigIntWithAggregatesFilter | bigint | number
    skill_code?: StringWithAggregatesFilter | string
    skill_name?: StringWithAggregatesFilter | string
    skill_status?: BoolWithAggregatesFilter | boolean
    group_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type hoso_ungvien_skillgroupWhereInput = {
    AND?: Enumerable<hoso_ungvien_skillgroupWhereInput>
    OR?: Enumerable<hoso_ungvien_skillgroupWhereInput>
    NOT?: Enumerable<hoso_ungvien_skillgroupWhereInput>
    group_id?: BigIntFilter | bigint | number
    group_name?: StringFilter | string
    group_code?: StringFilter | string
    group_status?: BoolFilter | boolean
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien_skill?: Hoso_ungvien_skillListRelationFilter
  }

  export type hoso_ungvien_skillgroupOrderByWithRelationInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    group_code?: SortOrder
    group_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien_skill?: hoso_ungvien_skillOrderByRelationAggregateInput
  }

  export type hoso_ungvien_skillgroupWhereUniqueInput = {
    group_id?: bigint | number
  }

  export type hoso_ungvien_skillgroupOrderByWithAggregationInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    group_code?: SortOrder
    group_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hoso_ungvien_skillgroupCountOrderByAggregateInput
    _avg?: hoso_ungvien_skillgroupAvgOrderByAggregateInput
    _max?: hoso_ungvien_skillgroupMaxOrderByAggregateInput
    _min?: hoso_ungvien_skillgroupMinOrderByAggregateInput
    _sum?: hoso_ungvien_skillgroupSumOrderByAggregateInput
  }

  export type hoso_ungvien_skillgroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hoso_ungvien_skillgroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<hoso_ungvien_skillgroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hoso_ungvien_skillgroupScalarWhereWithAggregatesInput>
    group_id?: BigIntWithAggregatesFilter | bigint | number
    group_name?: StringWithAggregatesFilter | string
    group_code?: StringWithAggregatesFilter | string
    group_status?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhWhereInput = {
    AND?: Enumerable<hoso_ungvien_thongtin_giadinhWhereInput>
    OR?: Enumerable<hoso_ungvien_thongtin_giadinhWhereInput>
    NOT?: Enumerable<hoso_ungvien_thongtin_giadinhWhereInput>
    thongtingiadinh_id?: BigIntFilter | bigint | number
    hoten?: StringFilter | string
    namsinh?: DateTimeFilter | Date | string
    Nghenghiep?: StringFilter | string
    CMND?: StringFilter | string
    quanhe?: StringFilter | string
    diachi_hientai?: StringFilter | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: XOR<Hoso_ungvienRelationFilter, hoso_ungvienWhereInput>
  }

  export type hoso_ungvien_thongtin_giadinhOrderByWithRelationInput = {
    thongtingiadinh_id?: SortOrder
    hoten?: SortOrder
    namsinh?: SortOrder
    Nghenghiep?: SortOrder
    CMND?: SortOrder
    quanhe?: SortOrder
    diachi_hientai?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByWithRelationInput
  }

  export type hoso_ungvien_thongtin_giadinhWhereUniqueInput = {
    thongtingiadinh_id?: bigint | number
  }

  export type hoso_ungvien_thongtin_giadinhOrderByWithAggregationInput = {
    thongtingiadinh_id?: SortOrder
    hoten?: SortOrder
    namsinh?: SortOrder
    Nghenghiep?: SortOrder
    CMND?: SortOrder
    quanhe?: SortOrder
    diachi_hientai?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hoso_ungvien_thongtin_giadinhCountOrderByAggregateInput
    _avg?: hoso_ungvien_thongtin_giadinhAvgOrderByAggregateInput
    _max?: hoso_ungvien_thongtin_giadinhMaxOrderByAggregateInput
    _min?: hoso_ungvien_thongtin_giadinhMinOrderByAggregateInput
    _sum?: hoso_ungvien_thongtin_giadinhSumOrderByAggregateInput
  }

  export type hoso_ungvien_thongtin_giadinhScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereWithAggregatesInput>
    OR?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereWithAggregatesInput>
    thongtingiadinh_id?: BigIntWithAggregatesFilter | bigint | number
    hoten?: StringWithAggregatesFilter | string
    namsinh?: DateTimeWithAggregatesFilter | Date | string
    Nghenghiep?: StringWithAggregatesFilter | string
    CMND?: StringWithAggregatesFilter | string
    quanhe?: StringWithAggregatesFilter | string
    diachi_hientai?: StringWithAggregatesFilter | string
    hoso_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ketqua_thituyenWhereInput = {
    AND?: Enumerable<ketqua_thituyenWhereInput>
    OR?: Enumerable<ketqua_thituyenWhereInput>
    NOT?: Enumerable<ketqua_thituyenWhereInput>
    ketqua_id?: BigIntFilter | bigint | number
    tongdiem?: StringFilter | string
    danhgia_baithi?: StringFilter | string
    ketqua?: StringFilter | string
    upload_file?: StringFilter | string
    trangthai?: BoolFilter | boolean
    lichthi_ct_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    lich_thituyen_chitiet?: XOR<Lich_thituyen_chitietRelationFilter, lich_thituyen_chitietWhereInput>
  }

  export type ketqua_thituyenOrderByWithRelationInput = {
    ketqua_id?: SortOrder
    tongdiem?: SortOrder
    danhgia_baithi?: SortOrder
    ketqua?: SortOrder
    upload_file?: SortOrder
    trangthai?: SortOrder
    lichthi_ct_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lich_thituyen_chitiet?: lich_thituyen_chitietOrderByWithRelationInput
  }

  export type ketqua_thituyenWhereUniqueInput = {
    ketqua_id?: bigint | number
  }

  export type ketqua_thituyenOrderByWithAggregationInput = {
    ketqua_id?: SortOrder
    tongdiem?: SortOrder
    danhgia_baithi?: SortOrder
    ketqua?: SortOrder
    upload_file?: SortOrder
    trangthai?: SortOrder
    lichthi_ct_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ketqua_thituyenCountOrderByAggregateInput
    _avg?: ketqua_thituyenAvgOrderByAggregateInput
    _max?: ketqua_thituyenMaxOrderByAggregateInput
    _min?: ketqua_thituyenMinOrderByAggregateInput
    _sum?: ketqua_thituyenSumOrderByAggregateInput
  }

  export type ketqua_thituyenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ketqua_thituyenScalarWhereWithAggregatesInput>
    OR?: Enumerable<ketqua_thituyenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ketqua_thituyenScalarWhereWithAggregatesInput>
    ketqua_id?: BigIntWithAggregatesFilter | bigint | number
    tongdiem?: StringWithAggregatesFilter | string
    danhgia_baithi?: StringWithAggregatesFilter | string
    ketqua?: StringWithAggregatesFilter | string
    upload_file?: StringWithAggregatesFilter | string
    trangthai?: BoolWithAggregatesFilter | boolean
    lichthi_ct_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type lich_thituyenWhereInput = {
    AND?: Enumerable<lich_thituyenWhereInput>
    OR?: Enumerable<lich_thituyenWhereInput>
    NOT?: Enumerable<lich_thituyenWhereInput>
    lichthi_id?: BigIntFilter | bigint | number
    ngaythi?: DateTimeFilter | Date | string
    diadiem?: StringFilter | string
    noidung_thituyen?: StringFilter | string
    thoigian?: DateTimeFilter | Date | string
    soluong?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    lich_thituyen_chitiet?: Lich_thituyen_chitietListRelationFilter
  }

  export type lich_thituyenOrderByWithRelationInput = {
    lichthi_id?: SortOrder
    ngaythi?: SortOrder
    diadiem?: SortOrder
    noidung_thituyen?: SortOrder
    thoigian?: SortOrder
    soluong?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lich_thituyen_chitiet?: lich_thituyen_chitietOrderByRelationAggregateInput
  }

  export type lich_thituyenWhereUniqueInput = {
    lichthi_id?: bigint | number
  }

  export type lich_thituyenOrderByWithAggregationInput = {
    lichthi_id?: SortOrder
    ngaythi?: SortOrder
    diadiem?: SortOrder
    noidung_thituyen?: SortOrder
    thoigian?: SortOrder
    soluong?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lich_thituyenCountOrderByAggregateInput
    _avg?: lich_thituyenAvgOrderByAggregateInput
    _max?: lich_thituyenMaxOrderByAggregateInput
    _min?: lich_thituyenMinOrderByAggregateInput
    _sum?: lich_thituyenSumOrderByAggregateInput
  }

  export type lich_thituyenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<lich_thituyenScalarWhereWithAggregatesInput>
    OR?: Enumerable<lich_thituyenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<lich_thituyenScalarWhereWithAggregatesInput>
    lichthi_id?: BigIntWithAggregatesFilter | bigint | number
    ngaythi?: DateTimeWithAggregatesFilter | Date | string
    diadiem?: StringWithAggregatesFilter | string
    noidung_thituyen?: StringWithAggregatesFilter | string
    thoigian?: DateTimeWithAggregatesFilter | Date | string
    soluong?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type lich_thituyen_chitietWhereInput = {
    AND?: Enumerable<lich_thituyen_chitietWhereInput>
    OR?: Enumerable<lich_thituyen_chitietWhereInput>
    NOT?: Enumerable<lich_thituyen_chitietWhereInput>
    lichthi_ct_id?: BigIntFilter | bigint | number
    ungtuyen_id?: BigIntFilter | bigint | number
    lichthi_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    lich_thituyen?: XOR<Lich_thituyenRelationFilter, lich_thituyenWhereInput>
    ungtuyen?: XOR<UngtuyenRelationFilter, ungtuyenWhereInput>
    ketqua_thituyen?: Ketqua_thituyenListRelationFilter
  }

  export type lich_thituyen_chitietOrderByWithRelationInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lich_thituyen?: lich_thituyenOrderByWithRelationInput
    ungtuyen?: ungtuyenOrderByWithRelationInput
    ketqua_thituyen?: ketqua_thituyenOrderByRelationAggregateInput
  }

  export type lich_thituyen_chitietWhereUniqueInput = {
    lichthi_ct_id?: bigint | number
  }

  export type lich_thituyen_chitietOrderByWithAggregationInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lich_thituyen_chitietCountOrderByAggregateInput
    _avg?: lich_thituyen_chitietAvgOrderByAggregateInput
    _max?: lich_thituyen_chitietMaxOrderByAggregateInput
    _min?: lich_thituyen_chitietMinOrderByAggregateInput
    _sum?: lich_thituyen_chitietSumOrderByAggregateInput
  }

  export type lich_thituyen_chitietScalarWhereWithAggregatesInput = {
    AND?: Enumerable<lich_thituyen_chitietScalarWhereWithAggregatesInput>
    OR?: Enumerable<lich_thituyen_chitietScalarWhereWithAggregatesInput>
    NOT?: Enumerable<lich_thituyen_chitietScalarWhereWithAggregatesInput>
    lichthi_ct_id?: BigIntWithAggregatesFilter | bigint | number
    ungtuyen_id?: BigIntWithAggregatesFilter | bigint | number
    lichthi_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type migrationsWhereInput = {
    AND?: Enumerable<migrationsWhereInput>
    OR?: Enumerable<migrationsWhereInput>
    NOT?: Enumerable<migrationsWhereInput>
    id?: IntFilter | number
    migration?: StringFilter | string
    batch?: IntFilter | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsWhereUniqueInput = {
    id?: number
  }

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<migrationsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    migration?: StringWithAggregatesFilter | string
    batch?: IntWithAggregatesFilter | number
  }

  export type quatrinh_congtacWhereInput = {
    AND?: Enumerable<quatrinh_congtacWhereInput>
    OR?: Enumerable<quatrinh_congtacWhereInput>
    NOT?: Enumerable<quatrinh_congtacWhereInput>
    quatrinh_congtac_id?: BigIntFilter | bigint | number
    tungay?: DateTimeFilter | Date | string
    denngay?: DateTimeFilter | Date | string
    ten_coquan_donvi?: StringFilter | string
    chuvu?: StringFilter | string
    congviec_phutrach?: StringFilter | string
    thanhtich_noibac?: StringFilter | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: XOR<Hoso_ungvienRelationFilter, hoso_ungvienWhereInput>
  }

  export type quatrinh_congtacOrderByWithRelationInput = {
    quatrinh_congtac_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    ten_coquan_donvi?: SortOrder
    chuvu?: SortOrder
    congviec_phutrach?: SortOrder
    thanhtich_noibac?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByWithRelationInput
  }

  export type quatrinh_congtacWhereUniqueInput = {
    quatrinh_congtac_id?: bigint | number
  }

  export type quatrinh_congtacOrderByWithAggregationInput = {
    quatrinh_congtac_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    ten_coquan_donvi?: SortOrder
    chuvu?: SortOrder
    congviec_phutrach?: SortOrder
    thanhtich_noibac?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: quatrinh_congtacCountOrderByAggregateInput
    _avg?: quatrinh_congtacAvgOrderByAggregateInput
    _max?: quatrinh_congtacMaxOrderByAggregateInput
    _min?: quatrinh_congtacMinOrderByAggregateInput
    _sum?: quatrinh_congtacSumOrderByAggregateInput
  }

  export type quatrinh_congtacScalarWhereWithAggregatesInput = {
    AND?: Enumerable<quatrinh_congtacScalarWhereWithAggregatesInput>
    OR?: Enumerable<quatrinh_congtacScalarWhereWithAggregatesInput>
    NOT?: Enumerable<quatrinh_congtacScalarWhereWithAggregatesInput>
    quatrinh_congtac_id?: BigIntWithAggregatesFilter | bigint | number
    tungay?: DateTimeWithAggregatesFilter | Date | string
    denngay?: DateTimeWithAggregatesFilter | Date | string
    ten_coquan_donvi?: StringWithAggregatesFilter | string
    chuvu?: StringWithAggregatesFilter | string
    congviec_phutrach?: StringWithAggregatesFilter | string
    thanhtich_noibac?: StringWithAggregatesFilter | string
    hoso_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type quatrinh_hoctapWhereInput = {
    AND?: Enumerable<quatrinh_hoctapWhereInput>
    OR?: Enumerable<quatrinh_hoctapWhereInput>
    NOT?: Enumerable<quatrinh_hoctapWhereInput>
    quatrinh_hoctap_id?: BigIntFilter | bigint | number
    tungay?: DateTimeFilter | Date | string
    denngay?: DateTimeFilter | Date | string
    bac_kynang?: StringFilter | string
    ten_donvi_daotao?: StringFilter | string
    ten_chungnhan_vanbang?: StringFilter | string
    xeploai?: StringFilter | string
    namcap?: DateTimeFilter | Date | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: XOR<Hoso_ungvienRelationFilter, hoso_ungvienWhereInput>
  }

  export type quatrinh_hoctapOrderByWithRelationInput = {
    quatrinh_hoctap_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    bac_kynang?: SortOrder
    ten_donvi_daotao?: SortOrder
    ten_chungnhan_vanbang?: SortOrder
    xeploai?: SortOrder
    namcap?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByWithRelationInput
  }

  export type quatrinh_hoctapWhereUniqueInput = {
    quatrinh_hoctap_id?: bigint | number
  }

  export type quatrinh_hoctapOrderByWithAggregationInput = {
    quatrinh_hoctap_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    bac_kynang?: SortOrder
    ten_donvi_daotao?: SortOrder
    ten_chungnhan_vanbang?: SortOrder
    xeploai?: SortOrder
    namcap?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: quatrinh_hoctapCountOrderByAggregateInput
    _avg?: quatrinh_hoctapAvgOrderByAggregateInput
    _max?: quatrinh_hoctapMaxOrderByAggregateInput
    _min?: quatrinh_hoctapMinOrderByAggregateInput
    _sum?: quatrinh_hoctapSumOrderByAggregateInput
  }

  export type quatrinh_hoctapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<quatrinh_hoctapScalarWhereWithAggregatesInput>
    OR?: Enumerable<quatrinh_hoctapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<quatrinh_hoctapScalarWhereWithAggregatesInput>
    quatrinh_hoctap_id?: BigIntWithAggregatesFilter | bigint | number
    tungay?: DateTimeWithAggregatesFilter | Date | string
    denngay?: DateTimeWithAggregatesFilter | Date | string
    bac_kynang?: StringWithAggregatesFilter | string
    ten_donvi_daotao?: StringWithAggregatesFilter | string
    ten_chungnhan_vanbang?: StringWithAggregatesFilter | string
    xeploai?: StringWithAggregatesFilter | string
    namcap?: DateTimeWithAggregatesFilter | Date | string
    hoso_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type thongbao_tuyendungWhereInput = {
    AND?: Enumerable<thongbao_tuyendungWhereInput>
    OR?: Enumerable<thongbao_tuyendungWhereInput>
    NOT?: Enumerable<thongbao_tuyendungWhereInput>
    thongbao_id?: BigIntFilter | bigint | number
    thongbao_ma?: StringFilter | string
    thongbao_ngaylap?: DateTimeFilter | Date | string
    thongbao_hannop?: DateTimeFilter | Date | string
    thongbao_noidung?: StringFilter | string
    quyenloi?: StringFilter | string
    thanhphan_hoso?: StringFilter | string
    phuongthuc_nophs?: StringFilter | string
    thongbao_trangthai?: BoolFilter | boolean
    coquan_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    coquan_tuyendung?: XOR<Coquan_tuyendungRelationFilter, coquan_tuyendungWhereInput>
    thongbao_tuyendung_chitiet?: Thongbao_tuyendung_chitietListRelationFilter
  }

  export type thongbao_tuyendungOrderByWithRelationInput = {
    thongbao_id?: SortOrder
    thongbao_ma?: SortOrder
    thongbao_ngaylap?: SortOrder
    thongbao_hannop?: SortOrder
    thongbao_noidung?: SortOrder
    quyenloi?: SortOrder
    thanhphan_hoso?: SortOrder
    phuongthuc_nophs?: SortOrder
    thongbao_trangthai?: SortOrder
    coquan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    coquan_tuyendung?: coquan_tuyendungOrderByWithRelationInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietOrderByRelationAggregateInput
  }

  export type thongbao_tuyendungWhereUniqueInput = {
    thongbao_id?: bigint | number
  }

  export type thongbao_tuyendungOrderByWithAggregationInput = {
    thongbao_id?: SortOrder
    thongbao_ma?: SortOrder
    thongbao_ngaylap?: SortOrder
    thongbao_hannop?: SortOrder
    thongbao_noidung?: SortOrder
    quyenloi?: SortOrder
    thanhphan_hoso?: SortOrder
    phuongthuc_nophs?: SortOrder
    thongbao_trangthai?: SortOrder
    coquan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: thongbao_tuyendungCountOrderByAggregateInput
    _avg?: thongbao_tuyendungAvgOrderByAggregateInput
    _max?: thongbao_tuyendungMaxOrderByAggregateInput
    _min?: thongbao_tuyendungMinOrderByAggregateInput
    _sum?: thongbao_tuyendungSumOrderByAggregateInput
  }

  export type thongbao_tuyendungScalarWhereWithAggregatesInput = {
    AND?: Enumerable<thongbao_tuyendungScalarWhereWithAggregatesInput>
    OR?: Enumerable<thongbao_tuyendungScalarWhereWithAggregatesInput>
    NOT?: Enumerable<thongbao_tuyendungScalarWhereWithAggregatesInput>
    thongbao_id?: BigIntWithAggregatesFilter | bigint | number
    thongbao_ma?: StringWithAggregatesFilter | string
    thongbao_ngaylap?: DateTimeWithAggregatesFilter | Date | string
    thongbao_hannop?: DateTimeWithAggregatesFilter | Date | string
    thongbao_noidung?: StringWithAggregatesFilter | string
    quyenloi?: StringWithAggregatesFilter | string
    thanhphan_hoso?: StringWithAggregatesFilter | string
    phuongthuc_nophs?: StringWithAggregatesFilter | string
    thongbao_trangthai?: BoolWithAggregatesFilter | boolean
    coquan_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type thongbao_tuyendung_chitietWhereInput = {
    AND?: Enumerable<thongbao_tuyendung_chitietWhereInput>
    OR?: Enumerable<thongbao_tuyendung_chitietWhereInput>
    NOT?: Enumerable<thongbao_tuyendung_chitietWhereInput>
    thongbao_ct_id?: BigIntFilter | bigint | number
    vitri_tuyendung?: StringFilter | string
    soluong?: IntFilter | number
    mota?: StringFilter | string
    yeucauchung?: StringFilter | string
    muc_luong_min?: StringFilter | string
    muc_luong_max?: StringFilter | string
    thongbao_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    thongbao_tuyendung?: XOR<Thongbao_tuyendungRelationFilter, thongbao_tuyendungWhereInput>
    ungtuyen?: UngtuyenListRelationFilter
  }

  export type thongbao_tuyendung_chitietOrderByWithRelationInput = {
    thongbao_ct_id?: SortOrder
    vitri_tuyendung?: SortOrder
    soluong?: SortOrder
    mota?: SortOrder
    yeucauchung?: SortOrder
    muc_luong_min?: SortOrder
    muc_luong_max?: SortOrder
    thongbao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    thongbao_tuyendung?: thongbao_tuyendungOrderByWithRelationInput
    ungtuyen?: ungtuyenOrderByRelationAggregateInput
  }

  export type thongbao_tuyendung_chitietWhereUniqueInput = {
    thongbao_ct_id?: bigint | number
  }

  export type thongbao_tuyendung_chitietOrderByWithAggregationInput = {
    thongbao_ct_id?: SortOrder
    vitri_tuyendung?: SortOrder
    soluong?: SortOrder
    mota?: SortOrder
    yeucauchung?: SortOrder
    muc_luong_min?: SortOrder
    muc_luong_max?: SortOrder
    thongbao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: thongbao_tuyendung_chitietCountOrderByAggregateInput
    _avg?: thongbao_tuyendung_chitietAvgOrderByAggregateInput
    _max?: thongbao_tuyendung_chitietMaxOrderByAggregateInput
    _min?: thongbao_tuyendung_chitietMinOrderByAggregateInput
    _sum?: thongbao_tuyendung_chitietSumOrderByAggregateInput
  }

  export type thongbao_tuyendung_chitietScalarWhereWithAggregatesInput = {
    AND?: Enumerable<thongbao_tuyendung_chitietScalarWhereWithAggregatesInput>
    OR?: Enumerable<thongbao_tuyendung_chitietScalarWhereWithAggregatesInput>
    NOT?: Enumerable<thongbao_tuyendung_chitietScalarWhereWithAggregatesInput>
    thongbao_ct_id?: BigIntWithAggregatesFilter | bigint | number
    vitri_tuyendung?: StringWithAggregatesFilter | string
    soluong?: IntWithAggregatesFilter | number
    mota?: StringWithAggregatesFilter | string
    yeucauchung?: StringWithAggregatesFilter | string
    muc_luong_min?: StringWithAggregatesFilter | string
    muc_luong_max?: StringWithAggregatesFilter | string
    thongbao_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ungtuyenWhereInput = {
    AND?: Enumerable<ungtuyenWhereInput>
    OR?: Enumerable<ungtuyenWhereInput>
    NOT?: Enumerable<ungtuyenWhereInput>
    ungtuyen_id?: BigIntFilter | bigint | number
    thongbao_ct_id?: BigIntFilter | bigint | number
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    hoso_ungvien?: XOR<Hoso_ungvienRelationFilter, hoso_ungvienWhereInput>
    thongbao_tuyendung_chitiet?: XOR<Thongbao_tuyendung_chitietRelationFilter, thongbao_tuyendung_chitietWhereInput>
    lich_thituyen_chitiet?: Lich_thituyen_chitietListRelationFilter
  }

  export type ungtuyenOrderByWithRelationInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hoso_ungvien?: hoso_ungvienOrderByWithRelationInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietOrderByWithRelationInput
    lich_thituyen_chitiet?: lich_thituyen_chitietOrderByRelationAggregateInput
  }

  export type ungtuyenWhereUniqueInput = {
    ungtuyen_id?: bigint | number
  }

  export type ungtuyenOrderByWithAggregationInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ungtuyenCountOrderByAggregateInput
    _avg?: ungtuyenAvgOrderByAggregateInput
    _max?: ungtuyenMaxOrderByAggregateInput
    _min?: ungtuyenMinOrderByAggregateInput
    _sum?: ungtuyenSumOrderByAggregateInput
  }

  export type ungtuyenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ungtuyenScalarWhereWithAggregatesInput>
    OR?: Enumerable<ungtuyenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ungtuyenScalarWhereWithAggregatesInput>
    ungtuyen_id?: BigIntWithAggregatesFilter | bigint | number
    thongbao_ct_id?: BigIntWithAggregatesFilter | bigint | number
    hoso_id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    email?: StringFilter | string
    email_verified_at?: DateTimeNullableFilter | Date | string | null
    password?: StringFilter | string
    remember_token?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: bigint | number
    email?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    password?: StringWithAggregatesFilter | string
    remember_token?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type coquan_tuyendungCreateInput = {
    coquan_id?: bigint | number
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungCreateNestedManyWithoutCoquan_tuyendungInput
  }

  export type coquan_tuyendungUncheckedCreateInput = {
    coquan_id?: bigint | number
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungUncheckedCreateNestedManyWithoutCoquan_tuyendungInput
  }

  export type coquan_tuyendungUpdateInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungUpdateManyWithoutCoquan_tuyendungInput
  }

  export type coquan_tuyendungUncheckedUpdateInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungUncheckedUpdateManyWithoutCoquan_tuyendungInput
  }

  export type coquan_tuyendungCreateManyInput = {
    coquan_id?: bigint | number
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type coquan_tuyendungUpdateManyMutationInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type coquan_tuyendungUncheckedUpdateManyInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_dantocCreateInput = {
    dantoc_id?: bigint | number
    dantoc_ma: string
    dantoc_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien?: hoso_ungvienCreateNestedManyWithoutDm_dantocInput
  }

  export type dm_dantocUncheckedCreateInput = {
    dantoc_id?: bigint | number
    dantoc_ma: string
    dantoc_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien?: hoso_ungvienUncheckedCreateNestedManyWithoutDm_dantocInput
  }

  export type dm_dantocUpdateInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateManyWithoutDm_dantocInput
  }

  export type dm_dantocUncheckedUpdateInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUncheckedUpdateManyWithoutDm_dantocInput
  }

  export type dm_dantocCreateManyInput = {
    dantoc_id?: bigint | number
    dantoc_ma: string
    dantoc_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_dantocUpdateManyMutationInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_dantocUncheckedUpdateManyInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_tongiaoCreateInput = {
    tongiao_id?: bigint | number
    tongiao_ma: string
    tongiao_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien?: hoso_ungvienCreateNestedManyWithoutDm_tongiaoInput
  }

  export type dm_tongiaoUncheckedCreateInput = {
    tongiao_id?: bigint | number
    tongiao_ma: string
    tongiao_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien?: hoso_ungvienUncheckedCreateNestedManyWithoutDm_tongiaoInput
  }

  export type dm_tongiaoUpdateInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateManyWithoutDm_tongiaoInput
  }

  export type dm_tongiaoUncheckedUpdateInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUncheckedUpdateManyWithoutDm_tongiaoInput
  }

  export type dm_tongiaoCreateManyInput = {
    tongiao_id?: bigint | number
    tongiao_ma: string
    tongiao_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_tongiaoUpdateManyMutationInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_tongiaoUncheckedUpdateManyInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type failed_jobsCreateInput = {
    id?: bigint | number
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUncheckedCreateInput = {
    id?: bigint | number
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsCreateManyInput = {
    id?: bigint | number
    connection: string
    queue: string
    payload: string
    exception: string
    failed_at?: Date | string
  }

  export type failed_jobsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type failed_jobsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    connection?: StringFieldUpdateOperationsInput | string
    queue?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    exception?: StringFieldUpdateOperationsInput | string
    failed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hoso_ungvienCreateInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUpdateInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateManyInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvienUpdateManyMutationInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvienUncheckedUpdateManyInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungCreateInput = {
    cauhoi_id?: bigint | number
    cauhoi_noidung: string
    cauhoi_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungUncheckedCreateInput = {
    cauhoi_id?: bigint | number
    cauhoi_noidung: string
    cauhoi_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungUpdateInput = {
    cauhoi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cauhoi_noidung?: StringFieldUpdateOperationsInput | string
    cauhoi_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungUncheckedUpdateInput = {
    cauhoi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cauhoi_noidung?: StringFieldUpdateOperationsInput | string
    cauhoi_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungCreateManyInput = {
    cauhoi_id?: bigint | number
    cauhoi_noidung: string
    cauhoi_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungUpdateManyMutationInput = {
    cauhoi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cauhoi_noidung?: StringFieldUpdateOperationsInput | string
    cauhoi_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_cauhoi_tuyendungUncheckedUpdateManyInput = {
    cauhoi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    cauhoi_noidung?: StringFieldUpdateOperationsInput | string
    cauhoi_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillCreateInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_skillgroup: hoso_ungvien_skillgroupCreateNestedOneWithoutHoso_ungvien_skillInput
  }

  export type hoso_ungvien_skillUncheckedCreateInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    group_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillUpdateInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_skillgroup?: hoso_ungvien_skillgroupUpdateOneRequiredWithoutHoso_ungvien_skillInput
  }

  export type hoso_ungvien_skillUncheckedUpdateInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillCreateManyInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    group_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillUpdateManyMutationInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillUncheckedUpdateManyInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillgroupCreateInput = {
    group_id?: bigint | number
    group_name: string
    group_code: string
    group_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_skill?: hoso_ungvien_skillCreateNestedManyWithoutHoso_ungvien_skillgroupInput
  }

  export type hoso_ungvien_skillgroupUncheckedCreateInput = {
    group_id?: bigint | number
    group_name: string
    group_code: string
    group_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_skill?: hoso_ungvien_skillUncheckedCreateNestedManyWithoutHoso_ungvien_skillgroupInput
  }

  export type hoso_ungvien_skillgroupUpdateInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_skill?: hoso_ungvien_skillUpdateManyWithoutHoso_ungvien_skillgroupInput
  }

  export type hoso_ungvien_skillgroupUncheckedUpdateInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_skill?: hoso_ungvien_skillUncheckedUpdateManyWithoutHoso_ungvien_skillgroupInput
  }

  export type hoso_ungvien_skillgroupCreateManyInput = {
    group_id?: bigint | number
    group_name: string
    group_code: string
    group_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillgroupUpdateManyMutationInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillgroupUncheckedUpdateManyInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhCreateInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutHoso_ungvien_thongtin_giadinhInput
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedCreateInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUpdateInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutHoso_ungvien_thongtin_giadinhInput
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedUpdateInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhCreateManyInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUpdateManyMutationInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedUpdateManyInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenCreateInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet: lich_thituyen_chitietCreateNestedOneWithoutKetqua_thituyenInput
  }

  export type ketqua_thituyenUncheckedCreateInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    lichthi_ct_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ketqua_thituyenUpdateInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUpdateOneRequiredWithoutKetqua_thituyenInput
  }

  export type ketqua_thituyenUncheckedUpdateInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenCreateManyInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    lichthi_ct_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ketqua_thituyenUpdateManyMutationInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenUncheckedUpdateManyInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyenCreateInput = {
    lichthi_id?: bigint | number
    ngaythi: Date | string
    diadiem: string
    noidung_thituyen: string
    thoigian: Date | string
    soluong: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietCreateNestedManyWithoutLich_thituyenInput
  }

  export type lich_thituyenUncheckedCreateInput = {
    lichthi_id?: bigint | number
    ngaythi: Date | string
    diadiem: string
    noidung_thituyen: string
    thoigian: Date | string
    soluong: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedCreateNestedManyWithoutLich_thituyenInput
  }

  export type lich_thituyenUpdateInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUpdateManyWithoutLich_thituyenInput
  }

  export type lich_thituyenUncheckedUpdateInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedUpdateManyWithoutLich_thituyenInput
  }

  export type lich_thituyenCreateManyInput = {
    lichthi_id?: bigint | number
    ngaythi: Date | string
    diadiem: string
    noidung_thituyen: string
    thoigian: Date | string
    soluong: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyenUpdateManyMutationInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyenUncheckedUpdateManyInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyen_chitietCreateInput = {
    lichthi_ct_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen: lich_thituyenCreateNestedOneWithoutLich_thituyen_chitietInput
    ungtuyen: ungtuyenCreateNestedOneWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedCreateInput = {
    lichthi_ct_id?: bigint | number
    ungtuyen_id: bigint | number
    lichthi_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUpdateInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen?: lich_thituyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
    ungtuyen?: ungtuyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenUpdateManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedUpdateInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedUpdateManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietCreateManyInput = {
    lichthi_ct_id?: bigint | number
    ungtuyen_id: bigint | number
    lichthi_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyen_chitietUpdateManyMutationInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyen_chitietUncheckedUpdateManyInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type quatrinh_congtacCreateInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutQuatrinh_congtacInput
  }

  export type quatrinh_congtacUncheckedCreateInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_congtacUpdateInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutQuatrinh_congtacInput
  }

  export type quatrinh_congtacUncheckedUpdateInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_congtacCreateManyInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_congtacUpdateManyMutationInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_congtacUncheckedUpdateManyInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapCreateInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutQuatrinh_hoctapInput
  }

  export type quatrinh_hoctapUncheckedCreateInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_hoctapUpdateInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutQuatrinh_hoctapInput
  }

  export type quatrinh_hoctapUncheckedUpdateInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapCreateManyInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_hoctapUpdateManyMutationInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapUncheckedUpdateManyInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendungCreateInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coquan_tuyendung: coquan_tuyendungCreateNestedOneWithoutThongbao_tuyendungInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietCreateNestedManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedCreateInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    coquan_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUncheckedCreateNestedManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUpdateInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coquan_tuyendung?: coquan_tuyendungUpdateOneRequiredWithoutThongbao_tuyendungInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUpdateManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedUpdateInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUncheckedUpdateManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungCreateManyInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    coquan_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendungUpdateManyMutationInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendungUncheckedUpdateManyInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendung_chitietCreateInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung: thongbao_tuyendungCreateNestedOneWithoutThongbao_tuyendung_chitietInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedCreateInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    thongbao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUpdateInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungUpdateOneRequiredWithoutThongbao_tuyendung_chitietInput
    ungtuyen?: ungtuyenUpdateManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietCreateManyInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    thongbao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendung_chitietUpdateManyMutationInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateManyInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenCreateInput = {
    ungtuyen_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutUngtuyenInput
    thongbao_tuyendung_chitiet: thongbao_tuyendung_chitietCreateNestedOneWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedCreateInput = {
    ungtuyen_id?: bigint | number
    thongbao_ct_id: bigint | number
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenUpdateInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutUngtuyenInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUpdateOneRequiredWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietUpdateManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedUpdateInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedUpdateManyWithoutUngtuyenInput
  }

  export type ungtuyenCreateManyInput = {
    ungtuyen_id?: bigint | number
    thongbao_ct_id: bigint | number
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ungtuyenUpdateManyMutationInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenUncheckedUpdateManyInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Thongbao_tuyendungListRelationFilter = {
    every?: thongbao_tuyendungWhereInput
    some?: thongbao_tuyendungWhereInput
    none?: thongbao_tuyendungWhereInput
  }

  export type thongbao_tuyendungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type coquan_tuyendungCountOrderByAggregateInput = {
    coquan_id?: SortOrder
    coquan_ma?: SortOrder
    coquan_ten?: SortOrder
    coquan_diachi?: SortOrder
    coquan_sdt?: SortOrder
    coquan_email?: SortOrder
    coquan_website?: SortOrder
    nguoilienhe?: SortOrder
    co_quan_mota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type coquan_tuyendungAvgOrderByAggregateInput = {
    coquan_id?: SortOrder
  }

  export type coquan_tuyendungMaxOrderByAggregateInput = {
    coquan_id?: SortOrder
    coquan_ma?: SortOrder
    coquan_ten?: SortOrder
    coquan_diachi?: SortOrder
    coquan_sdt?: SortOrder
    coquan_email?: SortOrder
    coquan_website?: SortOrder
    nguoilienhe?: SortOrder
    co_quan_mota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type coquan_tuyendungMinOrderByAggregateInput = {
    coquan_id?: SortOrder
    coquan_ma?: SortOrder
    coquan_ten?: SortOrder
    coquan_diachi?: SortOrder
    coquan_sdt?: SortOrder
    coquan_email?: SortOrder
    coquan_website?: SortOrder
    nguoilienhe?: SortOrder
    co_quan_mota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type coquan_tuyendungSumOrderByAggregateInput = {
    coquan_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type Hoso_ungvienListRelationFilter = {
    every?: hoso_ungvienWhereInput
    some?: hoso_ungvienWhereInput
    none?: hoso_ungvienWhereInput
  }

  export type hoso_ungvienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dm_dantocCountOrderByAggregateInput = {
    dantoc_id?: SortOrder
    dantoc_ma?: SortOrder
    dantoc_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_dantocAvgOrderByAggregateInput = {
    dantoc_id?: SortOrder
  }

  export type dm_dantocMaxOrderByAggregateInput = {
    dantoc_id?: SortOrder
    dantoc_ma?: SortOrder
    dantoc_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_dantocMinOrderByAggregateInput = {
    dantoc_id?: SortOrder
    dantoc_ma?: SortOrder
    dantoc_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_dantocSumOrderByAggregateInput = {
    dantoc_id?: SortOrder
  }

  export type dm_tongiaoCountOrderByAggregateInput = {
    tongiao_id?: SortOrder
    tongiao_ma?: SortOrder
    tongiao_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_tongiaoAvgOrderByAggregateInput = {
    tongiao_id?: SortOrder
  }

  export type dm_tongiaoMaxOrderByAggregateInput = {
    tongiao_id?: SortOrder
    tongiao_ma?: SortOrder
    tongiao_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_tongiaoMinOrderByAggregateInput = {
    tongiao_id?: SortOrder
    tongiao_ma?: SortOrder
    tongiao_ten?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type dm_tongiaoSumOrderByAggregateInput = {
    tongiao_id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type failed_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type failed_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    connection?: SortOrder
    queue?: SortOrder
    payload?: SortOrder
    exception?: SortOrder
    failed_at?: SortOrder
  }

  export type failed_jobsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type Dm_dantocRelationFilter = {
    is?: dm_dantocWhereInput
    isNot?: dm_dantocWhereInput
  }

  export type Dm_tongiaoRelationFilter = {
    is?: dm_tongiaoWhereInput
    isNot?: dm_tongiaoWhereInput
  }

  export type Hoso_ungvien_thongtin_giadinhListRelationFilter = {
    every?: hoso_ungvien_thongtin_giadinhWhereInput
    some?: hoso_ungvien_thongtin_giadinhWhereInput
    none?: hoso_ungvien_thongtin_giadinhWhereInput
  }

  export type Quatrinh_congtacListRelationFilter = {
    every?: quatrinh_congtacWhereInput
    some?: quatrinh_congtacWhereInput
    none?: quatrinh_congtacWhereInput
  }

  export type Quatrinh_hoctapListRelationFilter = {
    every?: quatrinh_hoctapWhereInput
    some?: quatrinh_hoctapWhereInput
    none?: quatrinh_hoctapWhereInput
  }

  export type UngtuyenListRelationFilter = {
    every?: ungtuyenWhereInput
    some?: ungtuyenWhereInput
    none?: ungtuyenWhereInput
  }

  export type hoso_ungvien_thongtin_giadinhOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type quatrinh_congtacOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type quatrinh_hoctapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ungtuyenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hoso_ungvienCountOrderByAggregateInput = {
    hoso_id?: SortOrder
    hoso_ma?: SortOrder
    hoso_ngaynop?: SortOrder
    hoten_ungvien?: SortOrder
    gioi_tinh?: SortOrder
    sdt?: SortOrder
    email?: SortOrder
    CMND?: SortOrder
    que_quan?: SortOrder
    diachi_lienhe?: SortOrder
    tinhtrang_honnhan?: SortOrder
    nguoilienhe_sdt?: SortOrder
    nguoilienhe_diachi?: SortOrder
    ngayvao_doan?: SortOrder
    ngayvao_dang?: SortOrder
    congviec_truoctuyendung?: SortOrder
    trangthai_tuyendung?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvienAvgOrderByAggregateInput = {
    hoso_id?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
  }

  export type hoso_ungvienMaxOrderByAggregateInput = {
    hoso_id?: SortOrder
    hoso_ma?: SortOrder
    hoso_ngaynop?: SortOrder
    hoten_ungvien?: SortOrder
    gioi_tinh?: SortOrder
    sdt?: SortOrder
    email?: SortOrder
    CMND?: SortOrder
    que_quan?: SortOrder
    diachi_lienhe?: SortOrder
    tinhtrang_honnhan?: SortOrder
    nguoilienhe_sdt?: SortOrder
    nguoilienhe_diachi?: SortOrder
    ngayvao_doan?: SortOrder
    ngayvao_dang?: SortOrder
    congviec_truoctuyendung?: SortOrder
    trangthai_tuyendung?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvienMinOrderByAggregateInput = {
    hoso_id?: SortOrder
    hoso_ma?: SortOrder
    hoso_ngaynop?: SortOrder
    hoten_ungvien?: SortOrder
    gioi_tinh?: SortOrder
    sdt?: SortOrder
    email?: SortOrder
    CMND?: SortOrder
    que_quan?: SortOrder
    diachi_lienhe?: SortOrder
    tinhtrang_honnhan?: SortOrder
    nguoilienhe_sdt?: SortOrder
    nguoilienhe_diachi?: SortOrder
    ngayvao_doan?: SortOrder
    ngayvao_dang?: SortOrder
    congviec_truoctuyendung?: SortOrder
    trangthai_tuyendung?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvienSumOrderByAggregateInput = {
    hoso_id?: SortOrder
    dantoc_id?: SortOrder
    tongiao_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type hoso_ungvien_cauhoi_tuyendungCountOrderByAggregateInput = {
    cauhoi_id?: SortOrder
    cauhoi_noidung?: SortOrder
    cauhoi_trangthai?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_cauhoi_tuyendungAvgOrderByAggregateInput = {
    cauhoi_id?: SortOrder
  }

  export type hoso_ungvien_cauhoi_tuyendungMaxOrderByAggregateInput = {
    cauhoi_id?: SortOrder
    cauhoi_noidung?: SortOrder
    cauhoi_trangthai?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_cauhoi_tuyendungMinOrderByAggregateInput = {
    cauhoi_id?: SortOrder
    cauhoi_noidung?: SortOrder
    cauhoi_trangthai?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_cauhoi_tuyendungSumOrderByAggregateInput = {
    cauhoi_id?: SortOrder
  }

  export type Hoso_ungvien_skillgroupRelationFilter = {
    is?: hoso_ungvien_skillgroupWhereInput
    isNot?: hoso_ungvien_skillgroupWhereInput
  }

  export type hoso_ungvien_skillCountOrderByAggregateInput = {
    skill_id?: SortOrder
    skill_code?: SortOrder
    skill_name?: SortOrder
    skill_status?: SortOrder
    group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillAvgOrderByAggregateInput = {
    skill_id?: SortOrder
    group_id?: SortOrder
  }

  export type hoso_ungvien_skillMaxOrderByAggregateInput = {
    skill_id?: SortOrder
    skill_code?: SortOrder
    skill_name?: SortOrder
    skill_status?: SortOrder
    group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillMinOrderByAggregateInput = {
    skill_id?: SortOrder
    skill_code?: SortOrder
    skill_name?: SortOrder
    skill_status?: SortOrder
    group_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillSumOrderByAggregateInput = {
    skill_id?: SortOrder
    group_id?: SortOrder
  }

  export type Hoso_ungvien_skillListRelationFilter = {
    every?: hoso_ungvien_skillWhereInput
    some?: hoso_ungvien_skillWhereInput
    none?: hoso_ungvien_skillWhereInput
  }

  export type hoso_ungvien_skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hoso_ungvien_skillgroupCountOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    group_code?: SortOrder
    group_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillgroupAvgOrderByAggregateInput = {
    group_id?: SortOrder
  }

  export type hoso_ungvien_skillgroupMaxOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    group_code?: SortOrder
    group_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillgroupMinOrderByAggregateInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    group_code?: SortOrder
    group_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_skillgroupSumOrderByAggregateInput = {
    group_id?: SortOrder
  }

  export type Hoso_ungvienRelationFilter = {
    is?: hoso_ungvienWhereInput
    isNot?: hoso_ungvienWhereInput
  }

  export type hoso_ungvien_thongtin_giadinhCountOrderByAggregateInput = {
    thongtingiadinh_id?: SortOrder
    hoten?: SortOrder
    namsinh?: SortOrder
    Nghenghiep?: SortOrder
    CMND?: SortOrder
    quanhe?: SortOrder
    diachi_hientai?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_thongtin_giadinhAvgOrderByAggregateInput = {
    thongtingiadinh_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type hoso_ungvien_thongtin_giadinhMaxOrderByAggregateInput = {
    thongtingiadinh_id?: SortOrder
    hoten?: SortOrder
    namsinh?: SortOrder
    Nghenghiep?: SortOrder
    CMND?: SortOrder
    quanhe?: SortOrder
    diachi_hientai?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_thongtin_giadinhMinOrderByAggregateInput = {
    thongtingiadinh_id?: SortOrder
    hoten?: SortOrder
    namsinh?: SortOrder
    Nghenghiep?: SortOrder
    CMND?: SortOrder
    quanhe?: SortOrder
    diachi_hientai?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hoso_ungvien_thongtin_giadinhSumOrderByAggregateInput = {
    thongtingiadinh_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type Lich_thituyen_chitietRelationFilter = {
    is?: lich_thituyen_chitietWhereInput
    isNot?: lich_thituyen_chitietWhereInput
  }

  export type ketqua_thituyenCountOrderByAggregateInput = {
    ketqua_id?: SortOrder
    tongdiem?: SortOrder
    danhgia_baithi?: SortOrder
    ketqua?: SortOrder
    upload_file?: SortOrder
    trangthai?: SortOrder
    lichthi_ct_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ketqua_thituyenAvgOrderByAggregateInput = {
    ketqua_id?: SortOrder
    lichthi_ct_id?: SortOrder
  }

  export type ketqua_thituyenMaxOrderByAggregateInput = {
    ketqua_id?: SortOrder
    tongdiem?: SortOrder
    danhgia_baithi?: SortOrder
    ketqua?: SortOrder
    upload_file?: SortOrder
    trangthai?: SortOrder
    lichthi_ct_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ketqua_thituyenMinOrderByAggregateInput = {
    ketqua_id?: SortOrder
    tongdiem?: SortOrder
    danhgia_baithi?: SortOrder
    ketqua?: SortOrder
    upload_file?: SortOrder
    trangthai?: SortOrder
    lichthi_ct_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ketqua_thituyenSumOrderByAggregateInput = {
    ketqua_id?: SortOrder
    lichthi_ct_id?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Lich_thituyen_chitietListRelationFilter = {
    every?: lich_thituyen_chitietWhereInput
    some?: lich_thituyen_chitietWhereInput
    none?: lich_thituyen_chitietWhereInput
  }

  export type lich_thituyen_chitietOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lich_thituyenCountOrderByAggregateInput = {
    lichthi_id?: SortOrder
    ngaythi?: SortOrder
    diadiem?: SortOrder
    noidung_thituyen?: SortOrder
    thoigian?: SortOrder
    soluong?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyenAvgOrderByAggregateInput = {
    lichthi_id?: SortOrder
    soluong?: SortOrder
  }

  export type lich_thituyenMaxOrderByAggregateInput = {
    lichthi_id?: SortOrder
    ngaythi?: SortOrder
    diadiem?: SortOrder
    noidung_thituyen?: SortOrder
    thoigian?: SortOrder
    soluong?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyenMinOrderByAggregateInput = {
    lichthi_id?: SortOrder
    ngaythi?: SortOrder
    diadiem?: SortOrder
    noidung_thituyen?: SortOrder
    thoigian?: SortOrder
    soluong?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyenSumOrderByAggregateInput = {
    lichthi_id?: SortOrder
    soluong?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type Lich_thituyenRelationFilter = {
    is?: lich_thituyenWhereInput
    isNot?: lich_thituyenWhereInput
  }

  export type UngtuyenRelationFilter = {
    is?: ungtuyenWhereInput
    isNot?: ungtuyenWhereInput
  }

  export type Ketqua_thituyenListRelationFilter = {
    every?: ketqua_thituyenWhereInput
    some?: ketqua_thituyenWhereInput
    none?: ketqua_thituyenWhereInput
  }

  export type ketqua_thituyenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lich_thituyen_chitietCountOrderByAggregateInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyen_chitietAvgOrderByAggregateInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
  }

  export type lich_thituyen_chitietMaxOrderByAggregateInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyen_chitietMinOrderByAggregateInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lich_thituyen_chitietSumOrderByAggregateInput = {
    lichthi_ct_id?: SortOrder
    ungtuyen_id?: SortOrder
    lichthi_id?: SortOrder
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type quatrinh_congtacCountOrderByAggregateInput = {
    quatrinh_congtac_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    ten_coquan_donvi?: SortOrder
    chuvu?: SortOrder
    congviec_phutrach?: SortOrder
    thanhtich_noibac?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_congtacAvgOrderByAggregateInput = {
    quatrinh_congtac_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type quatrinh_congtacMaxOrderByAggregateInput = {
    quatrinh_congtac_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    ten_coquan_donvi?: SortOrder
    chuvu?: SortOrder
    congviec_phutrach?: SortOrder
    thanhtich_noibac?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_congtacMinOrderByAggregateInput = {
    quatrinh_congtac_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    ten_coquan_donvi?: SortOrder
    chuvu?: SortOrder
    congviec_phutrach?: SortOrder
    thanhtich_noibac?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_congtacSumOrderByAggregateInput = {
    quatrinh_congtac_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type quatrinh_hoctapCountOrderByAggregateInput = {
    quatrinh_hoctap_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    bac_kynang?: SortOrder
    ten_donvi_daotao?: SortOrder
    ten_chungnhan_vanbang?: SortOrder
    xeploai?: SortOrder
    namcap?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_hoctapAvgOrderByAggregateInput = {
    quatrinh_hoctap_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type quatrinh_hoctapMaxOrderByAggregateInput = {
    quatrinh_hoctap_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    bac_kynang?: SortOrder
    ten_donvi_daotao?: SortOrder
    ten_chungnhan_vanbang?: SortOrder
    xeploai?: SortOrder
    namcap?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_hoctapMinOrderByAggregateInput = {
    quatrinh_hoctap_id?: SortOrder
    tungay?: SortOrder
    denngay?: SortOrder
    bac_kynang?: SortOrder
    ten_donvi_daotao?: SortOrder
    ten_chungnhan_vanbang?: SortOrder
    xeploai?: SortOrder
    namcap?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quatrinh_hoctapSumOrderByAggregateInput = {
    quatrinh_hoctap_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type Coquan_tuyendungRelationFilter = {
    is?: coquan_tuyendungWhereInput
    isNot?: coquan_tuyendungWhereInput
  }

  export type Thongbao_tuyendung_chitietListRelationFilter = {
    every?: thongbao_tuyendung_chitietWhereInput
    some?: thongbao_tuyendung_chitietWhereInput
    none?: thongbao_tuyendung_chitietWhereInput
  }

  export type thongbao_tuyendung_chitietOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type thongbao_tuyendungCountOrderByAggregateInput = {
    thongbao_id?: SortOrder
    thongbao_ma?: SortOrder
    thongbao_ngaylap?: SortOrder
    thongbao_hannop?: SortOrder
    thongbao_noidung?: SortOrder
    quyenloi?: SortOrder
    thanhphan_hoso?: SortOrder
    phuongthuc_nophs?: SortOrder
    thongbao_trangthai?: SortOrder
    coquan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendungAvgOrderByAggregateInput = {
    thongbao_id?: SortOrder
    coquan_id?: SortOrder
  }

  export type thongbao_tuyendungMaxOrderByAggregateInput = {
    thongbao_id?: SortOrder
    thongbao_ma?: SortOrder
    thongbao_ngaylap?: SortOrder
    thongbao_hannop?: SortOrder
    thongbao_noidung?: SortOrder
    quyenloi?: SortOrder
    thanhphan_hoso?: SortOrder
    phuongthuc_nophs?: SortOrder
    thongbao_trangthai?: SortOrder
    coquan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendungMinOrderByAggregateInput = {
    thongbao_id?: SortOrder
    thongbao_ma?: SortOrder
    thongbao_ngaylap?: SortOrder
    thongbao_hannop?: SortOrder
    thongbao_noidung?: SortOrder
    quyenloi?: SortOrder
    thanhphan_hoso?: SortOrder
    phuongthuc_nophs?: SortOrder
    thongbao_trangthai?: SortOrder
    coquan_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendungSumOrderByAggregateInput = {
    thongbao_id?: SortOrder
    coquan_id?: SortOrder
  }

  export type Thongbao_tuyendungRelationFilter = {
    is?: thongbao_tuyendungWhereInput
    isNot?: thongbao_tuyendungWhereInput
  }

  export type thongbao_tuyendung_chitietCountOrderByAggregateInput = {
    thongbao_ct_id?: SortOrder
    vitri_tuyendung?: SortOrder
    soluong?: SortOrder
    mota?: SortOrder
    yeucauchung?: SortOrder
    muc_luong_min?: SortOrder
    muc_luong_max?: SortOrder
    thongbao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendung_chitietAvgOrderByAggregateInput = {
    thongbao_ct_id?: SortOrder
    soluong?: SortOrder
    thongbao_id?: SortOrder
  }

  export type thongbao_tuyendung_chitietMaxOrderByAggregateInput = {
    thongbao_ct_id?: SortOrder
    vitri_tuyendung?: SortOrder
    soluong?: SortOrder
    mota?: SortOrder
    yeucauchung?: SortOrder
    muc_luong_min?: SortOrder
    muc_luong_max?: SortOrder
    thongbao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendung_chitietMinOrderByAggregateInput = {
    thongbao_ct_id?: SortOrder
    vitri_tuyendung?: SortOrder
    soluong?: SortOrder
    mota?: SortOrder
    yeucauchung?: SortOrder
    muc_luong_min?: SortOrder
    muc_luong_max?: SortOrder
    thongbao_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type thongbao_tuyendung_chitietSumOrderByAggregateInput = {
    thongbao_ct_id?: SortOrder
    soluong?: SortOrder
    thongbao_id?: SortOrder
  }

  export type Thongbao_tuyendung_chitietRelationFilter = {
    is?: thongbao_tuyendung_chitietWhereInput
    isNot?: thongbao_tuyendung_chitietWhereInput
  }

  export type ungtuyenCountOrderByAggregateInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ungtuyenAvgOrderByAggregateInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type ungtuyenMaxOrderByAggregateInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ungtuyenMinOrderByAggregateInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ungtuyenSumOrderByAggregateInput = {
    ungtuyen_id?: SortOrder
    thongbao_ct_id?: SortOrder
    hoso_id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type thongbao_tuyendungCreateNestedManyWithoutCoquan_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput>, Enumerable<thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendungCreateOrConnectWithoutCoquan_tuyendungInput>
    createMany?: thongbao_tuyendungCreateManyCoquan_tuyendungInputEnvelope
    connect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
  }

  export type thongbao_tuyendungUncheckedCreateNestedManyWithoutCoquan_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput>, Enumerable<thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendungCreateOrConnectWithoutCoquan_tuyendungInput>
    createMany?: thongbao_tuyendungCreateManyCoquan_tuyendungInputEnvelope
    connect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type thongbao_tuyendungUpdateManyWithoutCoquan_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput>, Enumerable<thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendungCreateOrConnectWithoutCoquan_tuyendungInput>
    upsert?: Enumerable<thongbao_tuyendungUpsertWithWhereUniqueWithoutCoquan_tuyendungInput>
    createMany?: thongbao_tuyendungCreateManyCoquan_tuyendungInputEnvelope
    set?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    disconnect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    delete?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    connect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    update?: Enumerable<thongbao_tuyendungUpdateWithWhereUniqueWithoutCoquan_tuyendungInput>
    updateMany?: Enumerable<thongbao_tuyendungUpdateManyWithWhereWithoutCoquan_tuyendungInput>
    deleteMany?: Enumerable<thongbao_tuyendungScalarWhereInput>
  }

  export type thongbao_tuyendungUncheckedUpdateManyWithoutCoquan_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput>, Enumerable<thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendungCreateOrConnectWithoutCoquan_tuyendungInput>
    upsert?: Enumerable<thongbao_tuyendungUpsertWithWhereUniqueWithoutCoquan_tuyendungInput>
    createMany?: thongbao_tuyendungCreateManyCoquan_tuyendungInputEnvelope
    set?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    disconnect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    delete?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    connect?: Enumerable<thongbao_tuyendungWhereUniqueInput>
    update?: Enumerable<thongbao_tuyendungUpdateWithWhereUniqueWithoutCoquan_tuyendungInput>
    updateMany?: Enumerable<thongbao_tuyendungUpdateManyWithWhereWithoutCoquan_tuyendungInput>
    deleteMany?: Enumerable<thongbao_tuyendungScalarWhereInput>
  }

  export type hoso_ungvienCreateNestedManyWithoutDm_dantocInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_dantocInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_dantocInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_dantocInput>
    createMany?: hoso_ungvienCreateManyDm_dantocInputEnvelope
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
  }

  export type hoso_ungvienUncheckedCreateNestedManyWithoutDm_dantocInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_dantocInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_dantocInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_dantocInput>
    createMany?: hoso_ungvienCreateManyDm_dantocInputEnvelope
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
  }

  export type hoso_ungvienUpdateManyWithoutDm_dantocInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_dantocInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_dantocInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_dantocInput>
    upsert?: Enumerable<hoso_ungvienUpsertWithWhereUniqueWithoutDm_dantocInput>
    createMany?: hoso_ungvienCreateManyDm_dantocInputEnvelope
    set?: Enumerable<hoso_ungvienWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvienWhereUniqueInput>
    delete?: Enumerable<hoso_ungvienWhereUniqueInput>
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
    update?: Enumerable<hoso_ungvienUpdateWithWhereUniqueWithoutDm_dantocInput>
    updateMany?: Enumerable<hoso_ungvienUpdateManyWithWhereWithoutDm_dantocInput>
    deleteMany?: Enumerable<hoso_ungvienScalarWhereInput>
  }

  export type hoso_ungvienUncheckedUpdateManyWithoutDm_dantocInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_dantocInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_dantocInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_dantocInput>
    upsert?: Enumerable<hoso_ungvienUpsertWithWhereUniqueWithoutDm_dantocInput>
    createMany?: hoso_ungvienCreateManyDm_dantocInputEnvelope
    set?: Enumerable<hoso_ungvienWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvienWhereUniqueInput>
    delete?: Enumerable<hoso_ungvienWhereUniqueInput>
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
    update?: Enumerable<hoso_ungvienUpdateWithWhereUniqueWithoutDm_dantocInput>
    updateMany?: Enumerable<hoso_ungvienUpdateManyWithWhereWithoutDm_dantocInput>
    deleteMany?: Enumerable<hoso_ungvienScalarWhereInput>
  }

  export type hoso_ungvienCreateNestedManyWithoutDm_tongiaoInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_tongiaoInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_tongiaoInput>
    createMany?: hoso_ungvienCreateManyDm_tongiaoInputEnvelope
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
  }

  export type hoso_ungvienUncheckedCreateNestedManyWithoutDm_tongiaoInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_tongiaoInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_tongiaoInput>
    createMany?: hoso_ungvienCreateManyDm_tongiaoInputEnvelope
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
  }

  export type hoso_ungvienUpdateManyWithoutDm_tongiaoInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_tongiaoInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_tongiaoInput>
    upsert?: Enumerable<hoso_ungvienUpsertWithWhereUniqueWithoutDm_tongiaoInput>
    createMany?: hoso_ungvienCreateManyDm_tongiaoInputEnvelope
    set?: Enumerable<hoso_ungvienWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvienWhereUniqueInput>
    delete?: Enumerable<hoso_ungvienWhereUniqueInput>
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
    update?: Enumerable<hoso_ungvienUpdateWithWhereUniqueWithoutDm_tongiaoInput>
    updateMany?: Enumerable<hoso_ungvienUpdateManyWithWhereWithoutDm_tongiaoInput>
    deleteMany?: Enumerable<hoso_ungvienScalarWhereInput>
  }

  export type hoso_ungvienUncheckedUpdateManyWithoutDm_tongiaoInput = {
    create?: XOR<Enumerable<hoso_ungvienCreateWithoutDm_tongiaoInput>, Enumerable<hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>>
    connectOrCreate?: Enumerable<hoso_ungvienCreateOrConnectWithoutDm_tongiaoInput>
    upsert?: Enumerable<hoso_ungvienUpsertWithWhereUniqueWithoutDm_tongiaoInput>
    createMany?: hoso_ungvienCreateManyDm_tongiaoInputEnvelope
    set?: Enumerable<hoso_ungvienWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvienWhereUniqueInput>
    delete?: Enumerable<hoso_ungvienWhereUniqueInput>
    connect?: Enumerable<hoso_ungvienWhereUniqueInput>
    update?: Enumerable<hoso_ungvienUpdateWithWhereUniqueWithoutDm_tongiaoInput>
    updateMany?: Enumerable<hoso_ungvienUpdateManyWithWhereWithoutDm_tongiaoInput>
    deleteMany?: Enumerable<hoso_ungvienScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type dm_dantocCreateNestedOneWithoutHoso_ungvienInput = {
    create?: XOR<dm_dantocCreateWithoutHoso_ungvienInput, dm_dantocUncheckedCreateWithoutHoso_ungvienInput>
    connectOrCreate?: dm_dantocCreateOrConnectWithoutHoso_ungvienInput
    connect?: dm_dantocWhereUniqueInput
  }

  export type dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput = {
    create?: XOR<dm_tongiaoCreateWithoutHoso_ungvienInput, dm_tongiaoUncheckedCreateWithoutHoso_ungvienInput>
    connectOrCreate?: dm_tongiaoCreateOrConnectWithoutHoso_ungvienInput
    connect?: dm_tongiaoWhereUniqueInput
  }

  export type hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput>, Enumerable<hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_thongtin_giadinhCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
  }

  export type quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_congtacCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_congtacCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: quatrinh_congtacCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<quatrinh_congtacWhereUniqueInput>
  }

  export type quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_hoctapCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_hoctapCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: quatrinh_hoctapCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
  }

  export type ungtuyenCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutHoso_ungvienInput>, Enumerable<ungtuyenUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: ungtuyenCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<ungtuyenWhereUniqueInput>
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput>, Enumerable<hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_thongtin_giadinhCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
  }

  export type quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_congtacCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_congtacCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: quatrinh_congtacCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<quatrinh_congtacWhereUniqueInput>
  }

  export type quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_hoctapCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_hoctapCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: quatrinh_hoctapCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
  }

  export type ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutHoso_ungvienInput>, Enumerable<ungtuyenUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutHoso_ungvienInput>
    createMany?: ungtuyenCreateManyHoso_ungvienInputEnvelope
    connect?: Enumerable<ungtuyenWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput = {
    create?: XOR<dm_dantocCreateWithoutHoso_ungvienInput, dm_dantocUncheckedCreateWithoutHoso_ungvienInput>
    connectOrCreate?: dm_dantocCreateOrConnectWithoutHoso_ungvienInput
    upsert?: dm_dantocUpsertWithoutHoso_ungvienInput
    connect?: dm_dantocWhereUniqueInput
    update?: XOR<dm_dantocUpdateWithoutHoso_ungvienInput, dm_dantocUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput = {
    create?: XOR<dm_tongiaoCreateWithoutHoso_ungvienInput, dm_tongiaoUncheckedCreateWithoutHoso_ungvienInput>
    connectOrCreate?: dm_tongiaoCreateOrConnectWithoutHoso_ungvienInput
    upsert?: dm_tongiaoUpsertWithoutHoso_ungvienInput
    connect?: dm_tongiaoWhereUniqueInput
    update?: XOR<dm_tongiaoUpdateWithoutHoso_ungvienInput, dm_tongiaoUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput>, Enumerable<hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_thongtin_giadinhCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<hoso_ungvien_thongtin_giadinhUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    delete?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    connect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    update?: Enumerable<hoso_ungvien_thongtin_giadinhUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<hoso_ungvien_thongtin_giadinhUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereInput>
  }

  export type quatrinh_congtacUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_congtacCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_congtacCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<quatrinh_congtacUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: quatrinh_congtacCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<quatrinh_congtacWhereUniqueInput>
    disconnect?: Enumerable<quatrinh_congtacWhereUniqueInput>
    delete?: Enumerable<quatrinh_congtacWhereUniqueInput>
    connect?: Enumerable<quatrinh_congtacWhereUniqueInput>
    update?: Enumerable<quatrinh_congtacUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<quatrinh_congtacUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<quatrinh_congtacScalarWhereInput>
  }

  export type quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_hoctapCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_hoctapCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<quatrinh_hoctapUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: quatrinh_hoctapCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    disconnect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    delete?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    connect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    update?: Enumerable<quatrinh_hoctapUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<quatrinh_hoctapUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<quatrinh_hoctapScalarWhereInput>
  }

  export type ungtuyenUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutHoso_ungvienInput>, Enumerable<ungtuyenUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<ungtuyenUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: ungtuyenCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<ungtuyenWhereUniqueInput>
    disconnect?: Enumerable<ungtuyenWhereUniqueInput>
    delete?: Enumerable<ungtuyenWhereUniqueInput>
    connect?: Enumerable<ungtuyenWhereUniqueInput>
    update?: Enumerable<ungtuyenUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<ungtuyenUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<ungtuyenScalarWhereInput>
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput>, Enumerable<hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_thongtin_giadinhCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<hoso_ungvien_thongtin_giadinhUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    delete?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    connect?: Enumerable<hoso_ungvien_thongtin_giadinhWhereUniqueInput>
    update?: Enumerable<hoso_ungvien_thongtin_giadinhUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<hoso_ungvien_thongtin_giadinhUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereInput>
  }

  export type quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_congtacCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_congtacCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<quatrinh_congtacUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: quatrinh_congtacCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<quatrinh_congtacWhereUniqueInput>
    disconnect?: Enumerable<quatrinh_congtacWhereUniqueInput>
    delete?: Enumerable<quatrinh_congtacWhereUniqueInput>
    connect?: Enumerable<quatrinh_congtacWhereUniqueInput>
    update?: Enumerable<quatrinh_congtacUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<quatrinh_congtacUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<quatrinh_congtacScalarWhereInput>
  }

  export type quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<quatrinh_hoctapCreateWithoutHoso_ungvienInput>, Enumerable<quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<quatrinh_hoctapCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<quatrinh_hoctapUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: quatrinh_hoctapCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    disconnect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    delete?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    connect?: Enumerable<quatrinh_hoctapWhereUniqueInput>
    update?: Enumerable<quatrinh_hoctapUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<quatrinh_hoctapUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<quatrinh_hoctapScalarWhereInput>
  }

  export type ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutHoso_ungvienInput>, Enumerable<ungtuyenUncheckedCreateWithoutHoso_ungvienInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutHoso_ungvienInput>
    upsert?: Enumerable<ungtuyenUpsertWithWhereUniqueWithoutHoso_ungvienInput>
    createMany?: ungtuyenCreateManyHoso_ungvienInputEnvelope
    set?: Enumerable<ungtuyenWhereUniqueInput>
    disconnect?: Enumerable<ungtuyenWhereUniqueInput>
    delete?: Enumerable<ungtuyenWhereUniqueInput>
    connect?: Enumerable<ungtuyenWhereUniqueInput>
    update?: Enumerable<ungtuyenUpdateWithWhereUniqueWithoutHoso_ungvienInput>
    updateMany?: Enumerable<ungtuyenUpdateManyWithWhereWithoutHoso_ungvienInput>
    deleteMany?: Enumerable<ungtuyenScalarWhereInput>
  }

  export type hoso_ungvien_skillgroupCreateNestedOneWithoutHoso_ungvien_skillInput = {
    create?: XOR<hoso_ungvien_skillgroupCreateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedCreateWithoutHoso_ungvien_skillInput>
    connectOrCreate?: hoso_ungvien_skillgroupCreateOrConnectWithoutHoso_ungvien_skillInput
    connect?: hoso_ungvien_skillgroupWhereUniqueInput
  }

  export type hoso_ungvien_skillgroupUpdateOneRequiredWithoutHoso_ungvien_skillInput = {
    create?: XOR<hoso_ungvien_skillgroupCreateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedCreateWithoutHoso_ungvien_skillInput>
    connectOrCreate?: hoso_ungvien_skillgroupCreateOrConnectWithoutHoso_ungvien_skillInput
    upsert?: hoso_ungvien_skillgroupUpsertWithoutHoso_ungvien_skillInput
    connect?: hoso_ungvien_skillgroupWhereUniqueInput
    update?: XOR<hoso_ungvien_skillgroupUpdateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedUpdateWithoutHoso_ungvien_skillInput>
  }

  export type hoso_ungvien_skillCreateNestedManyWithoutHoso_ungvien_skillgroupInput = {
    create?: XOR<Enumerable<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput>, Enumerable<hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_skillCreateOrConnectWithoutHoso_ungvien_skillgroupInput>
    createMany?: hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInputEnvelope
    connect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
  }

  export type hoso_ungvien_skillUncheckedCreateNestedManyWithoutHoso_ungvien_skillgroupInput = {
    create?: XOR<Enumerable<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput>, Enumerable<hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_skillCreateOrConnectWithoutHoso_ungvien_skillgroupInput>
    createMany?: hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInputEnvelope
    connect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
  }

  export type hoso_ungvien_skillUpdateManyWithoutHoso_ungvien_skillgroupInput = {
    create?: XOR<Enumerable<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput>, Enumerable<hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_skillCreateOrConnectWithoutHoso_ungvien_skillgroupInput>
    upsert?: Enumerable<hoso_ungvien_skillUpsertWithWhereUniqueWithoutHoso_ungvien_skillgroupInput>
    createMany?: hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInputEnvelope
    set?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    delete?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    connect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    update?: Enumerable<hoso_ungvien_skillUpdateWithWhereUniqueWithoutHoso_ungvien_skillgroupInput>
    updateMany?: Enumerable<hoso_ungvien_skillUpdateManyWithWhereWithoutHoso_ungvien_skillgroupInput>
    deleteMany?: Enumerable<hoso_ungvien_skillScalarWhereInput>
  }

  export type hoso_ungvien_skillUncheckedUpdateManyWithoutHoso_ungvien_skillgroupInput = {
    create?: XOR<Enumerable<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput>, Enumerable<hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>>
    connectOrCreate?: Enumerable<hoso_ungvien_skillCreateOrConnectWithoutHoso_ungvien_skillgroupInput>
    upsert?: Enumerable<hoso_ungvien_skillUpsertWithWhereUniqueWithoutHoso_ungvien_skillgroupInput>
    createMany?: hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInputEnvelope
    set?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    disconnect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    delete?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    connect?: Enumerable<hoso_ungvien_skillWhereUniqueInput>
    update?: Enumerable<hoso_ungvien_skillUpdateWithWhereUniqueWithoutHoso_ungvien_skillgroupInput>
    updateMany?: Enumerable<hoso_ungvien_skillUpdateManyWithWhereWithoutHoso_ungvien_skillgroupInput>
    deleteMany?: Enumerable<hoso_ungvien_skillScalarWhereInput>
  }

  export type hoso_ungvienCreateNestedOneWithoutHoso_ungvien_thongtin_giadinhInput = {
    create?: XOR<hoso_ungvienCreateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedCreateWithoutHoso_ungvien_thongtin_giadinhInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutHoso_ungvien_thongtin_giadinhInput
    connect?: hoso_ungvienWhereUniqueInput
  }

  export type hoso_ungvienUpdateOneRequiredWithoutHoso_ungvien_thongtin_giadinhInput = {
    create?: XOR<hoso_ungvienCreateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedCreateWithoutHoso_ungvien_thongtin_giadinhInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutHoso_ungvien_thongtin_giadinhInput
    upsert?: hoso_ungvienUpsertWithoutHoso_ungvien_thongtin_giadinhInput
    connect?: hoso_ungvienWhereUniqueInput
    update?: XOR<hoso_ungvienUpdateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedUpdateWithoutHoso_ungvien_thongtin_giadinhInput>
  }

  export type lich_thituyen_chitietCreateNestedOneWithoutKetqua_thituyenInput = {
    create?: XOR<lich_thituyen_chitietCreateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutKetqua_thituyenInput>
    connectOrCreate?: lich_thituyen_chitietCreateOrConnectWithoutKetqua_thituyenInput
    connect?: lich_thituyen_chitietWhereUniqueInput
  }

  export type lich_thituyen_chitietUpdateOneRequiredWithoutKetqua_thituyenInput = {
    create?: XOR<lich_thituyen_chitietCreateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutKetqua_thituyenInput>
    connectOrCreate?: lich_thituyen_chitietCreateOrConnectWithoutKetqua_thituyenInput
    upsert?: lich_thituyen_chitietUpsertWithoutKetqua_thituyenInput
    connect?: lich_thituyen_chitietWhereUniqueInput
    update?: XOR<lich_thituyen_chitietUpdateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedUpdateWithoutKetqua_thituyenInput>
  }

  export type lich_thituyen_chitietCreateNestedManyWithoutLich_thituyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutLich_thituyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutLich_thituyenInput>
    createMany?: lich_thituyen_chitietCreateManyLich_thituyenInputEnvelope
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
  }

  export type lich_thituyen_chitietUncheckedCreateNestedManyWithoutLich_thituyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutLich_thituyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutLich_thituyenInput>
    createMany?: lich_thituyen_chitietCreateManyLich_thituyenInputEnvelope
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lich_thituyen_chitietUpdateManyWithoutLich_thituyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutLich_thituyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutLich_thituyenInput>
    upsert?: Enumerable<lich_thituyen_chitietUpsertWithWhereUniqueWithoutLich_thituyenInput>
    createMany?: lich_thituyen_chitietCreateManyLich_thituyenInputEnvelope
    set?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    disconnect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    delete?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    update?: Enumerable<lich_thituyen_chitietUpdateWithWhereUniqueWithoutLich_thituyenInput>
    updateMany?: Enumerable<lich_thituyen_chitietUpdateManyWithWhereWithoutLich_thituyenInput>
    deleteMany?: Enumerable<lich_thituyen_chitietScalarWhereInput>
  }

  export type lich_thituyen_chitietUncheckedUpdateManyWithoutLich_thituyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutLich_thituyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutLich_thituyenInput>
    upsert?: Enumerable<lich_thituyen_chitietUpsertWithWhereUniqueWithoutLich_thituyenInput>
    createMany?: lich_thituyen_chitietCreateManyLich_thituyenInputEnvelope
    set?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    disconnect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    delete?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    update?: Enumerable<lich_thituyen_chitietUpdateWithWhereUniqueWithoutLich_thituyenInput>
    updateMany?: Enumerable<lich_thituyen_chitietUpdateManyWithWhereWithoutLich_thituyenInput>
    deleteMany?: Enumerable<lich_thituyen_chitietScalarWhereInput>
  }

  export type lich_thituyenCreateNestedOneWithoutLich_thituyen_chitietInput = {
    create?: XOR<lich_thituyenCreateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
    connectOrCreate?: lich_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput
    connect?: lich_thituyenWhereUniqueInput
  }

  export type ungtuyenCreateNestedOneWithoutLich_thituyen_chitietInput = {
    create?: XOR<ungtuyenCreateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedCreateWithoutLich_thituyen_chitietInput>
    connectOrCreate?: ungtuyenCreateOrConnectWithoutLich_thituyen_chitietInput
    connect?: ungtuyenWhereUniqueInput
  }

  export type ketqua_thituyenCreateNestedManyWithoutLich_thituyen_chitietInput = {
    create?: XOR<Enumerable<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput>, Enumerable<ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>>
    connectOrCreate?: Enumerable<ketqua_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput>
    createMany?: ketqua_thituyenCreateManyLich_thituyen_chitietInputEnvelope
    connect?: Enumerable<ketqua_thituyenWhereUniqueInput>
  }

  export type ketqua_thituyenUncheckedCreateNestedManyWithoutLich_thituyen_chitietInput = {
    create?: XOR<Enumerable<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput>, Enumerable<ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>>
    connectOrCreate?: Enumerable<ketqua_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput>
    createMany?: ketqua_thituyenCreateManyLich_thituyen_chitietInputEnvelope
    connect?: Enumerable<ketqua_thituyenWhereUniqueInput>
  }

  export type lich_thituyenUpdateOneRequiredWithoutLich_thituyen_chitietInput = {
    create?: XOR<lich_thituyenCreateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
    connectOrCreate?: lich_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput
    upsert?: lich_thituyenUpsertWithoutLich_thituyen_chitietInput
    connect?: lich_thituyenWhereUniqueInput
    update?: XOR<lich_thituyenUpdateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
  }

  export type ungtuyenUpdateOneRequiredWithoutLich_thituyen_chitietInput = {
    create?: XOR<ungtuyenCreateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedCreateWithoutLich_thituyen_chitietInput>
    connectOrCreate?: ungtuyenCreateOrConnectWithoutLich_thituyen_chitietInput
    upsert?: ungtuyenUpsertWithoutLich_thituyen_chitietInput
    connect?: ungtuyenWhereUniqueInput
    update?: XOR<ungtuyenUpdateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
  }

  export type ketqua_thituyenUpdateManyWithoutLich_thituyen_chitietInput = {
    create?: XOR<Enumerable<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput>, Enumerable<ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>>
    connectOrCreate?: Enumerable<ketqua_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput>
    upsert?: Enumerable<ketqua_thituyenUpsertWithWhereUniqueWithoutLich_thituyen_chitietInput>
    createMany?: ketqua_thituyenCreateManyLich_thituyen_chitietInputEnvelope
    set?: Enumerable<ketqua_thituyenWhereUniqueInput>
    disconnect?: Enumerable<ketqua_thituyenWhereUniqueInput>
    delete?: Enumerable<ketqua_thituyenWhereUniqueInput>
    connect?: Enumerable<ketqua_thituyenWhereUniqueInput>
    update?: Enumerable<ketqua_thituyenUpdateWithWhereUniqueWithoutLich_thituyen_chitietInput>
    updateMany?: Enumerable<ketqua_thituyenUpdateManyWithWhereWithoutLich_thituyen_chitietInput>
    deleteMany?: Enumerable<ketqua_thituyenScalarWhereInput>
  }

  export type ketqua_thituyenUncheckedUpdateManyWithoutLich_thituyen_chitietInput = {
    create?: XOR<Enumerable<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput>, Enumerable<ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>>
    connectOrCreate?: Enumerable<ketqua_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput>
    upsert?: Enumerable<ketqua_thituyenUpsertWithWhereUniqueWithoutLich_thituyen_chitietInput>
    createMany?: ketqua_thituyenCreateManyLich_thituyen_chitietInputEnvelope
    set?: Enumerable<ketqua_thituyenWhereUniqueInput>
    disconnect?: Enumerable<ketqua_thituyenWhereUniqueInput>
    delete?: Enumerable<ketqua_thituyenWhereUniqueInput>
    connect?: Enumerable<ketqua_thituyenWhereUniqueInput>
    update?: Enumerable<ketqua_thituyenUpdateWithWhereUniqueWithoutLich_thituyen_chitietInput>
    updateMany?: Enumerable<ketqua_thituyenUpdateManyWithWhereWithoutLich_thituyen_chitietInput>
    deleteMany?: Enumerable<ketqua_thituyenScalarWhereInput>
  }

  export type hoso_ungvienCreateNestedOneWithoutQuatrinh_congtacInput = {
    create?: XOR<hoso_ungvienCreateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_congtacInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutQuatrinh_congtacInput
    connect?: hoso_ungvienWhereUniqueInput
  }

  export type hoso_ungvienUpdateOneRequiredWithoutQuatrinh_congtacInput = {
    create?: XOR<hoso_ungvienCreateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_congtacInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutQuatrinh_congtacInput
    upsert?: hoso_ungvienUpsertWithoutQuatrinh_congtacInput
    connect?: hoso_ungvienWhereUniqueInput
    update?: XOR<hoso_ungvienUpdateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedUpdateWithoutQuatrinh_congtacInput>
  }

  export type hoso_ungvienCreateNestedOneWithoutQuatrinh_hoctapInput = {
    create?: XOR<hoso_ungvienCreateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_hoctapInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutQuatrinh_hoctapInput
    connect?: hoso_ungvienWhereUniqueInput
  }

  export type hoso_ungvienUpdateOneRequiredWithoutQuatrinh_hoctapInput = {
    create?: XOR<hoso_ungvienCreateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_hoctapInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutQuatrinh_hoctapInput
    upsert?: hoso_ungvienUpsertWithoutQuatrinh_hoctapInput
    connect?: hoso_ungvienWhereUniqueInput
    update?: XOR<hoso_ungvienUpdateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedUpdateWithoutQuatrinh_hoctapInput>
  }

  export type coquan_tuyendungCreateNestedOneWithoutThongbao_tuyendungInput = {
    create?: XOR<coquan_tuyendungCreateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedCreateWithoutThongbao_tuyendungInput>
    connectOrCreate?: coquan_tuyendungCreateOrConnectWithoutThongbao_tuyendungInput
    connect?: coquan_tuyendungWhereUniqueInput
  }

  export type thongbao_tuyendung_chitietCreateNestedManyWithoutThongbao_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput>, Enumerable<thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendung_chitietCreateOrConnectWithoutThongbao_tuyendungInput>
    createMany?: thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInputEnvelope
    connect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
  }

  export type thongbao_tuyendung_chitietUncheckedCreateNestedManyWithoutThongbao_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput>, Enumerable<thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendung_chitietCreateOrConnectWithoutThongbao_tuyendungInput>
    createMany?: thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInputEnvelope
    connect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
  }

  export type coquan_tuyendungUpdateOneRequiredWithoutThongbao_tuyendungInput = {
    create?: XOR<coquan_tuyendungCreateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedCreateWithoutThongbao_tuyendungInput>
    connectOrCreate?: coquan_tuyendungCreateOrConnectWithoutThongbao_tuyendungInput
    upsert?: coquan_tuyendungUpsertWithoutThongbao_tuyendungInput
    connect?: coquan_tuyendungWhereUniqueInput
    update?: XOR<coquan_tuyendungUpdateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedUpdateWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendung_chitietUpdateManyWithoutThongbao_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput>, Enumerable<thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendung_chitietCreateOrConnectWithoutThongbao_tuyendungInput>
    upsert?: Enumerable<thongbao_tuyendung_chitietUpsertWithWhereUniqueWithoutThongbao_tuyendungInput>
    createMany?: thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInputEnvelope
    set?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    disconnect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    delete?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    connect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    update?: Enumerable<thongbao_tuyendung_chitietUpdateWithWhereUniqueWithoutThongbao_tuyendungInput>
    updateMany?: Enumerable<thongbao_tuyendung_chitietUpdateManyWithWhereWithoutThongbao_tuyendungInput>
    deleteMany?: Enumerable<thongbao_tuyendung_chitietScalarWhereInput>
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateManyWithoutThongbao_tuyendungInput = {
    create?: XOR<Enumerable<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput>, Enumerable<thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>>
    connectOrCreate?: Enumerable<thongbao_tuyendung_chitietCreateOrConnectWithoutThongbao_tuyendungInput>
    upsert?: Enumerable<thongbao_tuyendung_chitietUpsertWithWhereUniqueWithoutThongbao_tuyendungInput>
    createMany?: thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInputEnvelope
    set?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    disconnect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    delete?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    connect?: Enumerable<thongbao_tuyendung_chitietWhereUniqueInput>
    update?: Enumerable<thongbao_tuyendung_chitietUpdateWithWhereUniqueWithoutThongbao_tuyendungInput>
    updateMany?: Enumerable<thongbao_tuyendung_chitietUpdateManyWithWhereWithoutThongbao_tuyendungInput>
    deleteMany?: Enumerable<thongbao_tuyendung_chitietScalarWhereInput>
  }

  export type thongbao_tuyendungCreateNestedOneWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<thongbao_tuyendungCreateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
    connectOrCreate?: thongbao_tuyendungCreateOrConnectWithoutThongbao_tuyendung_chitietInput
    connect?: thongbao_tuyendungWhereUniqueInput
  }

  export type ungtuyenCreateNestedManyWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput>, Enumerable<ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutThongbao_tuyendung_chitietInput>
    createMany?: ungtuyenCreateManyThongbao_tuyendung_chitietInputEnvelope
    connect?: Enumerable<ungtuyenWhereUniqueInput>
  }

  export type ungtuyenUncheckedCreateNestedManyWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput>, Enumerable<ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutThongbao_tuyendung_chitietInput>
    createMany?: ungtuyenCreateManyThongbao_tuyendung_chitietInputEnvelope
    connect?: Enumerable<ungtuyenWhereUniqueInput>
  }

  export type thongbao_tuyendungUpdateOneRequiredWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<thongbao_tuyendungCreateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
    connectOrCreate?: thongbao_tuyendungCreateOrConnectWithoutThongbao_tuyendung_chitietInput
    upsert?: thongbao_tuyendungUpsertWithoutThongbao_tuyendung_chitietInput
    connect?: thongbao_tuyendungWhereUniqueInput
    update?: XOR<thongbao_tuyendungUpdateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedUpdateWithoutThongbao_tuyendung_chitietInput>
  }

  export type ungtuyenUpdateManyWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput>, Enumerable<ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutThongbao_tuyendung_chitietInput>
    upsert?: Enumerable<ungtuyenUpsertWithWhereUniqueWithoutThongbao_tuyendung_chitietInput>
    createMany?: ungtuyenCreateManyThongbao_tuyendung_chitietInputEnvelope
    set?: Enumerable<ungtuyenWhereUniqueInput>
    disconnect?: Enumerable<ungtuyenWhereUniqueInput>
    delete?: Enumerable<ungtuyenWhereUniqueInput>
    connect?: Enumerable<ungtuyenWhereUniqueInput>
    update?: Enumerable<ungtuyenUpdateWithWhereUniqueWithoutThongbao_tuyendung_chitietInput>
    updateMany?: Enumerable<ungtuyenUpdateManyWithWhereWithoutThongbao_tuyendung_chitietInput>
    deleteMany?: Enumerable<ungtuyenScalarWhereInput>
  }

  export type ungtuyenUncheckedUpdateManyWithoutThongbao_tuyendung_chitietInput = {
    create?: XOR<Enumerable<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput>, Enumerable<ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>>
    connectOrCreate?: Enumerable<ungtuyenCreateOrConnectWithoutThongbao_tuyendung_chitietInput>
    upsert?: Enumerable<ungtuyenUpsertWithWhereUniqueWithoutThongbao_tuyendung_chitietInput>
    createMany?: ungtuyenCreateManyThongbao_tuyendung_chitietInputEnvelope
    set?: Enumerable<ungtuyenWhereUniqueInput>
    disconnect?: Enumerable<ungtuyenWhereUniqueInput>
    delete?: Enumerable<ungtuyenWhereUniqueInput>
    connect?: Enumerable<ungtuyenWhereUniqueInput>
    update?: Enumerable<ungtuyenUpdateWithWhereUniqueWithoutThongbao_tuyendung_chitietInput>
    updateMany?: Enumerable<ungtuyenUpdateManyWithWhereWithoutThongbao_tuyendung_chitietInput>
    deleteMany?: Enumerable<ungtuyenScalarWhereInput>
  }

  export type hoso_ungvienCreateNestedOneWithoutUngtuyenInput = {
    create?: XOR<hoso_ungvienCreateWithoutUngtuyenInput, hoso_ungvienUncheckedCreateWithoutUngtuyenInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutUngtuyenInput
    connect?: hoso_ungvienWhereUniqueInput
  }

  export type thongbao_tuyendung_chitietCreateNestedOneWithoutUngtuyenInput = {
    create?: XOR<thongbao_tuyendung_chitietCreateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedCreateWithoutUngtuyenInput>
    connectOrCreate?: thongbao_tuyendung_chitietCreateOrConnectWithoutUngtuyenInput
    connect?: thongbao_tuyendung_chitietWhereUniqueInput
  }

  export type lich_thituyen_chitietCreateNestedManyWithoutUngtuyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutUngtuyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutUngtuyenInput>
    createMany?: lich_thituyen_chitietCreateManyUngtuyenInputEnvelope
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
  }

  export type lich_thituyen_chitietUncheckedCreateNestedManyWithoutUngtuyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutUngtuyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutUngtuyenInput>
    createMany?: lich_thituyen_chitietCreateManyUngtuyenInputEnvelope
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
  }

  export type hoso_ungvienUpdateOneRequiredWithoutUngtuyenInput = {
    create?: XOR<hoso_ungvienCreateWithoutUngtuyenInput, hoso_ungvienUncheckedCreateWithoutUngtuyenInput>
    connectOrCreate?: hoso_ungvienCreateOrConnectWithoutUngtuyenInput
    upsert?: hoso_ungvienUpsertWithoutUngtuyenInput
    connect?: hoso_ungvienWhereUniqueInput
    update?: XOR<hoso_ungvienUpdateWithoutUngtuyenInput, hoso_ungvienUncheckedUpdateWithoutUngtuyenInput>
  }

  export type thongbao_tuyendung_chitietUpdateOneRequiredWithoutUngtuyenInput = {
    create?: XOR<thongbao_tuyendung_chitietCreateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedCreateWithoutUngtuyenInput>
    connectOrCreate?: thongbao_tuyendung_chitietCreateOrConnectWithoutUngtuyenInput
    upsert?: thongbao_tuyendung_chitietUpsertWithoutUngtuyenInput
    connect?: thongbao_tuyendung_chitietWhereUniqueInput
    update?: XOR<thongbao_tuyendung_chitietUpdateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedUpdateWithoutUngtuyenInput>
  }

  export type lich_thituyen_chitietUpdateManyWithoutUngtuyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutUngtuyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutUngtuyenInput>
    upsert?: Enumerable<lich_thituyen_chitietUpsertWithWhereUniqueWithoutUngtuyenInput>
    createMany?: lich_thituyen_chitietCreateManyUngtuyenInputEnvelope
    set?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    disconnect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    delete?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    update?: Enumerable<lich_thituyen_chitietUpdateWithWhereUniqueWithoutUngtuyenInput>
    updateMany?: Enumerable<lich_thituyen_chitietUpdateManyWithWhereWithoutUngtuyenInput>
    deleteMany?: Enumerable<lich_thituyen_chitietScalarWhereInput>
  }

  export type lich_thituyen_chitietUncheckedUpdateManyWithoutUngtuyenInput = {
    create?: XOR<Enumerable<lich_thituyen_chitietCreateWithoutUngtuyenInput>, Enumerable<lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>>
    connectOrCreate?: Enumerable<lich_thituyen_chitietCreateOrConnectWithoutUngtuyenInput>
    upsert?: Enumerable<lich_thituyen_chitietUpsertWithWhereUniqueWithoutUngtuyenInput>
    createMany?: lich_thituyen_chitietCreateManyUngtuyenInputEnvelope
    set?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    disconnect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    delete?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    connect?: Enumerable<lich_thituyen_chitietWhereUniqueInput>
    update?: Enumerable<lich_thituyen_chitietUpdateWithWhereUniqueWithoutUngtuyenInput>
    updateMany?: Enumerable<lich_thituyen_chitietUpdateManyWithWhereWithoutUngtuyenInput>
    deleteMany?: Enumerable<lich_thituyen_chitietScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type thongbao_tuyendungCreateWithoutCoquan_tuyendungInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietCreateNestedManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUncheckedCreateNestedManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungCreateOrConnectWithoutCoquan_tuyendungInput = {
    where: thongbao_tuyendungWhereUniqueInput
    create: XOR<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput, thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>
  }

  export type thongbao_tuyendungCreateManyCoquan_tuyendungInputEnvelope = {
    data: Enumerable<thongbao_tuyendungCreateManyCoquan_tuyendungInput>
    skipDuplicates?: boolean
  }

  export type thongbao_tuyendungUpsertWithWhereUniqueWithoutCoquan_tuyendungInput = {
    where: thongbao_tuyendungWhereUniqueInput
    update: XOR<thongbao_tuyendungUpdateWithoutCoquan_tuyendungInput, thongbao_tuyendungUncheckedUpdateWithoutCoquan_tuyendungInput>
    create: XOR<thongbao_tuyendungCreateWithoutCoquan_tuyendungInput, thongbao_tuyendungUncheckedCreateWithoutCoquan_tuyendungInput>
  }

  export type thongbao_tuyendungUpdateWithWhereUniqueWithoutCoquan_tuyendungInput = {
    where: thongbao_tuyendungWhereUniqueInput
    data: XOR<thongbao_tuyendungUpdateWithoutCoquan_tuyendungInput, thongbao_tuyendungUncheckedUpdateWithoutCoquan_tuyendungInput>
  }

  export type thongbao_tuyendungUpdateManyWithWhereWithoutCoquan_tuyendungInput = {
    where: thongbao_tuyendungScalarWhereInput
    data: XOR<thongbao_tuyendungUpdateManyMutationInput, thongbao_tuyendungUncheckedUpdateManyWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendungScalarWhereInput = {
    AND?: Enumerable<thongbao_tuyendungScalarWhereInput>
    OR?: Enumerable<thongbao_tuyendungScalarWhereInput>
    NOT?: Enumerable<thongbao_tuyendungScalarWhereInput>
    thongbao_id?: BigIntFilter | bigint | number
    thongbao_ma?: StringFilter | string
    thongbao_ngaylap?: DateTimeFilter | Date | string
    thongbao_hannop?: DateTimeFilter | Date | string
    thongbao_noidung?: StringFilter | string
    quyenloi?: StringFilter | string
    thanhphan_hoso?: StringFilter | string
    phuongthuc_nophs?: StringFilter | string
    thongbao_trangthai?: BoolFilter | boolean
    coquan_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvienCreateWithoutDm_dantocInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutDm_dantocInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutDm_dantocInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutDm_dantocInput, hoso_ungvienUncheckedCreateWithoutDm_dantocInput>
  }

  export type hoso_ungvienCreateManyDm_dantocInputEnvelope = {
    data: Enumerable<hoso_ungvienCreateManyDm_dantocInput>
    skipDuplicates?: boolean
  }

  export type hoso_ungvienUpsertWithWhereUniqueWithoutDm_dantocInput = {
    where: hoso_ungvienWhereUniqueInput
    update: XOR<hoso_ungvienUpdateWithoutDm_dantocInput, hoso_ungvienUncheckedUpdateWithoutDm_dantocInput>
    create: XOR<hoso_ungvienCreateWithoutDm_dantocInput, hoso_ungvienUncheckedCreateWithoutDm_dantocInput>
  }

  export type hoso_ungvienUpdateWithWhereUniqueWithoutDm_dantocInput = {
    where: hoso_ungvienWhereUniqueInput
    data: XOR<hoso_ungvienUpdateWithoutDm_dantocInput, hoso_ungvienUncheckedUpdateWithoutDm_dantocInput>
  }

  export type hoso_ungvienUpdateManyWithWhereWithoutDm_dantocInput = {
    where: hoso_ungvienScalarWhereInput
    data: XOR<hoso_ungvienUpdateManyMutationInput, hoso_ungvienUncheckedUpdateManyWithoutHoso_ungvienInput>
  }

  export type hoso_ungvienScalarWhereInput = {
    AND?: Enumerable<hoso_ungvienScalarWhereInput>
    OR?: Enumerable<hoso_ungvienScalarWhereInput>
    NOT?: Enumerable<hoso_ungvienScalarWhereInput>
    hoso_id?: BigIntFilter | bigint | number
    hoso_ma?: StringFilter | string
    hoso_ngaynop?: DateTimeFilter | Date | string
    hoten_ungvien?: StringFilter | string
    gioi_tinh?: BoolFilter | boolean
    sdt?: StringFilter | string
    email?: StringFilter | string
    CMND?: StringFilter | string
    que_quan?: StringFilter | string
    diachi_lienhe?: StringFilter | string
    tinhtrang_honnhan?: BoolFilter | boolean
    nguoilienhe_sdt?: StringFilter | string
    nguoilienhe_diachi?: StringFilter | string
    ngayvao_doan?: DateTimeFilter | Date | string
    ngayvao_dang?: DateTimeFilter | Date | string
    congviec_truoctuyendung?: StringFilter | string
    trangthai_tuyendung?: StringFilter | string
    dantoc_id?: BigIntFilter | bigint | number
    tongiao_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvienCreateWithoutDm_tongiaoInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutDm_tongiaoInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutDm_tongiaoInput, hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>
  }

  export type hoso_ungvienCreateManyDm_tongiaoInputEnvelope = {
    data: Enumerable<hoso_ungvienCreateManyDm_tongiaoInput>
    skipDuplicates?: boolean
  }

  export type hoso_ungvienUpsertWithWhereUniqueWithoutDm_tongiaoInput = {
    where: hoso_ungvienWhereUniqueInput
    update: XOR<hoso_ungvienUpdateWithoutDm_tongiaoInput, hoso_ungvienUncheckedUpdateWithoutDm_tongiaoInput>
    create: XOR<hoso_ungvienCreateWithoutDm_tongiaoInput, hoso_ungvienUncheckedCreateWithoutDm_tongiaoInput>
  }

  export type hoso_ungvienUpdateWithWhereUniqueWithoutDm_tongiaoInput = {
    where: hoso_ungvienWhereUniqueInput
    data: XOR<hoso_ungvienUpdateWithoutDm_tongiaoInput, hoso_ungvienUncheckedUpdateWithoutDm_tongiaoInput>
  }

  export type hoso_ungvienUpdateManyWithWhereWithoutDm_tongiaoInput = {
    where: hoso_ungvienScalarWhereInput
    data: XOR<hoso_ungvienUpdateManyMutationInput, hoso_ungvienUncheckedUpdateManyWithoutHoso_ungvienInput>
  }

  export type dm_dantocCreateWithoutHoso_ungvienInput = {
    dantoc_id?: bigint | number
    dantoc_ma: string
    dantoc_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_dantocUncheckedCreateWithoutHoso_ungvienInput = {
    dantoc_id?: bigint | number
    dantoc_ma: string
    dantoc_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_dantocCreateOrConnectWithoutHoso_ungvienInput = {
    where: dm_dantocWhereUniqueInput
    create: XOR<dm_dantocCreateWithoutHoso_ungvienInput, dm_dantocUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type dm_tongiaoCreateWithoutHoso_ungvienInput = {
    tongiao_id?: bigint | number
    tongiao_ma: string
    tongiao_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_tongiaoUncheckedCreateWithoutHoso_ungvienInput = {
    tongiao_id?: bigint | number
    tongiao_ma: string
    tongiao_ten: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type dm_tongiaoCreateOrConnectWithoutHoso_ungvienInput = {
    where: dm_tongiaoWhereUniqueInput
    create: XOR<dm_tongiaoCreateWithoutHoso_ungvienInput, dm_tongiaoUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhCreateOrConnectWithoutHoso_ungvienInput = {
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    create: XOR<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput, hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInputEnvelope = {
    data: Enumerable<hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInput>
    skipDuplicates?: boolean
  }

  export type quatrinh_congtacCreateWithoutHoso_ungvienInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_congtacCreateOrConnectWithoutHoso_ungvienInput = {
    where: quatrinh_congtacWhereUniqueInput
    create: XOR<quatrinh_congtacCreateWithoutHoso_ungvienInput, quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type quatrinh_congtacCreateManyHoso_ungvienInputEnvelope = {
    data: Enumerable<quatrinh_congtacCreateManyHoso_ungvienInput>
    skipDuplicates?: boolean
  }

  export type quatrinh_hoctapCreateWithoutHoso_ungvienInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_hoctapCreateOrConnectWithoutHoso_ungvienInput = {
    where: quatrinh_hoctapWhereUniqueInput
    create: XOR<quatrinh_hoctapCreateWithoutHoso_ungvienInput, quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type quatrinh_hoctapCreateManyHoso_ungvienInputEnvelope = {
    data: Enumerable<quatrinh_hoctapCreateManyHoso_ungvienInput>
    skipDuplicates?: boolean
  }

  export type ungtuyenCreateWithoutHoso_ungvienInput = {
    ungtuyen_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung_chitiet: thongbao_tuyendung_chitietCreateNestedOneWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedCreateWithoutHoso_ungvienInput = {
    ungtuyen_id?: bigint | number
    thongbao_ct_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenCreateOrConnectWithoutHoso_ungvienInput = {
    where: ungtuyenWhereUniqueInput
    create: XOR<ungtuyenCreateWithoutHoso_ungvienInput, ungtuyenUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type ungtuyenCreateManyHoso_ungvienInputEnvelope = {
    data: Enumerable<ungtuyenCreateManyHoso_ungvienInput>
    skipDuplicates?: boolean
  }

  export type dm_dantocUpsertWithoutHoso_ungvienInput = {
    update: XOR<dm_dantocUpdateWithoutHoso_ungvienInput, dm_dantocUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<dm_dantocCreateWithoutHoso_ungvienInput, dm_dantocUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type dm_dantocUpdateWithoutHoso_ungvienInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_dantocUncheckedUpdateWithoutHoso_ungvienInput = {
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    dantoc_ma?: StringFieldUpdateOperationsInput | string
    dantoc_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_tongiaoUpsertWithoutHoso_ungvienInput = {
    update: XOR<dm_tongiaoUpdateWithoutHoso_ungvienInput, dm_tongiaoUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<dm_tongiaoCreateWithoutHoso_ungvienInput, dm_tongiaoUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type dm_tongiaoUpdateWithoutHoso_ungvienInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dm_tongiaoUncheckedUpdateWithoutHoso_ungvienInput = {
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_ma?: StringFieldUpdateOperationsInput | string
    tongiao_ten?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUpsertWithWhereUniqueWithoutHoso_ungvienInput = {
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    update: XOR<hoso_ungvien_thongtin_giadinhUpdateWithoutHoso_ungvienInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<hoso_ungvien_thongtin_giadinhCreateWithoutHoso_ungvienInput, hoso_ungvien_thongtin_giadinhUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type hoso_ungvien_thongtin_giadinhUpdateWithWhereUniqueWithoutHoso_ungvienInput = {
    where: hoso_ungvien_thongtin_giadinhWhereUniqueInput
    data: XOR<hoso_ungvien_thongtin_giadinhUpdateWithoutHoso_ungvienInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type hoso_ungvien_thongtin_giadinhUpdateManyWithWhereWithoutHoso_ungvienInput = {
    where: hoso_ungvien_thongtin_giadinhScalarWhereInput
    data: XOR<hoso_ungvien_thongtin_giadinhUpdateManyMutationInput, hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvien_thongtin_giadinhInput>
  }

  export type hoso_ungvien_thongtin_giadinhScalarWhereInput = {
    AND?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereInput>
    OR?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereInput>
    NOT?: Enumerable<hoso_ungvien_thongtin_giadinhScalarWhereInput>
    thongtingiadinh_id?: BigIntFilter | bigint | number
    hoten?: StringFilter | string
    namsinh?: DateTimeFilter | Date | string
    Nghenghiep?: StringFilter | string
    CMND?: StringFilter | string
    quanhe?: StringFilter | string
    diachi_hientai?: StringFilter | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type quatrinh_congtacUpsertWithWhereUniqueWithoutHoso_ungvienInput = {
    where: quatrinh_congtacWhereUniqueInput
    update: XOR<quatrinh_congtacUpdateWithoutHoso_ungvienInput, quatrinh_congtacUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<quatrinh_congtacCreateWithoutHoso_ungvienInput, quatrinh_congtacUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type quatrinh_congtacUpdateWithWhereUniqueWithoutHoso_ungvienInput = {
    where: quatrinh_congtacWhereUniqueInput
    data: XOR<quatrinh_congtacUpdateWithoutHoso_ungvienInput, quatrinh_congtacUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type quatrinh_congtacUpdateManyWithWhereWithoutHoso_ungvienInput = {
    where: quatrinh_congtacScalarWhereInput
    data: XOR<quatrinh_congtacUpdateManyMutationInput, quatrinh_congtacUncheckedUpdateManyWithoutQuatrinh_congtacInput>
  }

  export type quatrinh_congtacScalarWhereInput = {
    AND?: Enumerable<quatrinh_congtacScalarWhereInput>
    OR?: Enumerable<quatrinh_congtacScalarWhereInput>
    NOT?: Enumerable<quatrinh_congtacScalarWhereInput>
    quatrinh_congtac_id?: BigIntFilter | bigint | number
    tungay?: DateTimeFilter | Date | string
    denngay?: DateTimeFilter | Date | string
    ten_coquan_donvi?: StringFilter | string
    chuvu?: StringFilter | string
    congviec_phutrach?: StringFilter | string
    thanhtich_noibac?: StringFilter | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type quatrinh_hoctapUpsertWithWhereUniqueWithoutHoso_ungvienInput = {
    where: quatrinh_hoctapWhereUniqueInput
    update: XOR<quatrinh_hoctapUpdateWithoutHoso_ungvienInput, quatrinh_hoctapUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<quatrinh_hoctapCreateWithoutHoso_ungvienInput, quatrinh_hoctapUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type quatrinh_hoctapUpdateWithWhereUniqueWithoutHoso_ungvienInput = {
    where: quatrinh_hoctapWhereUniqueInput
    data: XOR<quatrinh_hoctapUpdateWithoutHoso_ungvienInput, quatrinh_hoctapUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type quatrinh_hoctapUpdateManyWithWhereWithoutHoso_ungvienInput = {
    where: quatrinh_hoctapScalarWhereInput
    data: XOR<quatrinh_hoctapUpdateManyMutationInput, quatrinh_hoctapUncheckedUpdateManyWithoutQuatrinh_hoctapInput>
  }

  export type quatrinh_hoctapScalarWhereInput = {
    AND?: Enumerable<quatrinh_hoctapScalarWhereInput>
    OR?: Enumerable<quatrinh_hoctapScalarWhereInput>
    NOT?: Enumerable<quatrinh_hoctapScalarWhereInput>
    quatrinh_hoctap_id?: BigIntFilter | bigint | number
    tungay?: DateTimeFilter | Date | string
    denngay?: DateTimeFilter | Date | string
    bac_kynang?: StringFilter | string
    ten_donvi_daotao?: StringFilter | string
    ten_chungnhan_vanbang?: StringFilter | string
    xeploai?: StringFilter | string
    namcap?: DateTimeFilter | Date | string
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ungtuyenUpsertWithWhereUniqueWithoutHoso_ungvienInput = {
    where: ungtuyenWhereUniqueInput
    update: XOR<ungtuyenUpdateWithoutHoso_ungvienInput, ungtuyenUncheckedUpdateWithoutHoso_ungvienInput>
    create: XOR<ungtuyenCreateWithoutHoso_ungvienInput, ungtuyenUncheckedCreateWithoutHoso_ungvienInput>
  }

  export type ungtuyenUpdateWithWhereUniqueWithoutHoso_ungvienInput = {
    where: ungtuyenWhereUniqueInput
    data: XOR<ungtuyenUpdateWithoutHoso_ungvienInput, ungtuyenUncheckedUpdateWithoutHoso_ungvienInput>
  }

  export type ungtuyenUpdateManyWithWhereWithoutHoso_ungvienInput = {
    where: ungtuyenScalarWhereInput
    data: XOR<ungtuyenUpdateManyMutationInput, ungtuyenUncheckedUpdateManyWithoutUngtuyenInput>
  }

  export type ungtuyenScalarWhereInput = {
    AND?: Enumerable<ungtuyenScalarWhereInput>
    OR?: Enumerable<ungtuyenScalarWhereInput>
    NOT?: Enumerable<ungtuyenScalarWhereInput>
    ungtuyen_id?: BigIntFilter | bigint | number
    thongbao_ct_id?: BigIntFilter | bigint | number
    hoso_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvien_skillgroupCreateWithoutHoso_ungvien_skillInput = {
    group_id?: bigint | number
    group_name: string
    group_code: string
    group_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillgroupUncheckedCreateWithoutHoso_ungvien_skillInput = {
    group_id?: bigint | number
    group_name: string
    group_code: string
    group_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillgroupCreateOrConnectWithoutHoso_ungvien_skillInput = {
    where: hoso_ungvien_skillgroupWhereUniqueInput
    create: XOR<hoso_ungvien_skillgroupCreateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedCreateWithoutHoso_ungvien_skillInput>
  }

  export type hoso_ungvien_skillgroupUpsertWithoutHoso_ungvien_skillInput = {
    update: XOR<hoso_ungvien_skillgroupUpdateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedUpdateWithoutHoso_ungvien_skillInput>
    create: XOR<hoso_ungvien_skillgroupCreateWithoutHoso_ungvien_skillInput, hoso_ungvien_skillgroupUncheckedCreateWithoutHoso_ungvien_skillInput>
  }

  export type hoso_ungvien_skillgroupUpdateWithoutHoso_ungvien_skillInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillgroupUncheckedUpdateWithoutHoso_ungvien_skillInput = {
    group_id?: BigIntFieldUpdateOperationsInput | bigint | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_code?: StringFieldUpdateOperationsInput | string
    group_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillCreateOrConnectWithoutHoso_ungvien_skillgroupInput = {
    where: hoso_ungvien_skillWhereUniqueInput
    create: XOR<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput, hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>
  }

  export type hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInputEnvelope = {
    data: Enumerable<hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInput>
    skipDuplicates?: boolean
  }

  export type hoso_ungvien_skillUpsertWithWhereUniqueWithoutHoso_ungvien_skillgroupInput = {
    where: hoso_ungvien_skillWhereUniqueInput
    update: XOR<hoso_ungvien_skillUpdateWithoutHoso_ungvien_skillgroupInput, hoso_ungvien_skillUncheckedUpdateWithoutHoso_ungvien_skillgroupInput>
    create: XOR<hoso_ungvien_skillCreateWithoutHoso_ungvien_skillgroupInput, hoso_ungvien_skillUncheckedCreateWithoutHoso_ungvien_skillgroupInput>
  }

  export type hoso_ungvien_skillUpdateWithWhereUniqueWithoutHoso_ungvien_skillgroupInput = {
    where: hoso_ungvien_skillWhereUniqueInput
    data: XOR<hoso_ungvien_skillUpdateWithoutHoso_ungvien_skillgroupInput, hoso_ungvien_skillUncheckedUpdateWithoutHoso_ungvien_skillgroupInput>
  }

  export type hoso_ungvien_skillUpdateManyWithWhereWithoutHoso_ungvien_skillgroupInput = {
    where: hoso_ungvien_skillScalarWhereInput
    data: XOR<hoso_ungvien_skillUpdateManyMutationInput, hoso_ungvien_skillUncheckedUpdateManyWithoutHoso_ungvien_skillInput>
  }

  export type hoso_ungvien_skillScalarWhereInput = {
    AND?: Enumerable<hoso_ungvien_skillScalarWhereInput>
    OR?: Enumerable<hoso_ungvien_skillScalarWhereInput>
    NOT?: Enumerable<hoso_ungvien_skillScalarWhereInput>
    skill_id?: BigIntFilter | bigint | number
    skill_code?: StringFilter | string
    skill_name?: StringFilter | string
    skill_status?: BoolFilter | boolean
    group_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvienCreateWithoutHoso_ungvien_thongtin_giadinhInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutHoso_ungvien_thongtin_giadinhInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutHoso_ungvien_thongtin_giadinhInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedCreateWithoutHoso_ungvien_thongtin_giadinhInput>
  }

  export type hoso_ungvienUpsertWithoutHoso_ungvien_thongtin_giadinhInput = {
    update: XOR<hoso_ungvienUpdateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedUpdateWithoutHoso_ungvien_thongtin_giadinhInput>
    create: XOR<hoso_ungvienCreateWithoutHoso_ungvien_thongtin_giadinhInput, hoso_ungvienUncheckedCreateWithoutHoso_ungvien_thongtin_giadinhInput>
  }

  export type hoso_ungvienUpdateWithoutHoso_ungvien_thongtin_giadinhInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutHoso_ungvien_thongtin_giadinhInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type lich_thituyen_chitietCreateWithoutKetqua_thituyenInput = {
    lichthi_ct_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen: lich_thituyenCreateNestedOneWithoutLich_thituyen_chitietInput
    ungtuyen: ungtuyenCreateNestedOneWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedCreateWithoutKetqua_thituyenInput = {
    lichthi_ct_id?: bigint | number
    ungtuyen_id: bigint | number
    lichthi_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyen_chitietCreateOrConnectWithoutKetqua_thituyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    create: XOR<lich_thituyen_chitietCreateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutKetqua_thituyenInput>
  }

  export type lich_thituyen_chitietUpsertWithoutKetqua_thituyenInput = {
    update: XOR<lich_thituyen_chitietUpdateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedUpdateWithoutKetqua_thituyenInput>
    create: XOR<lich_thituyen_chitietCreateWithoutKetqua_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutKetqua_thituyenInput>
  }

  export type lich_thituyen_chitietUpdateWithoutKetqua_thituyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen?: lich_thituyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
    ungtuyen?: ungtuyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedUpdateWithoutKetqua_thituyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyen_chitietCreateWithoutLich_thituyenInput = {
    lichthi_ct_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ungtuyen: ungtuyenCreateNestedOneWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput = {
    lichthi_ct_id?: bigint | number
    ungtuyen_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietCreateOrConnectWithoutLich_thituyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    create: XOR<lich_thituyen_chitietCreateWithoutLich_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>
  }

  export type lich_thituyen_chitietCreateManyLich_thituyenInputEnvelope = {
    data: Enumerable<lich_thituyen_chitietCreateManyLich_thituyenInput>
    skipDuplicates?: boolean
  }

  export type lich_thituyen_chitietUpsertWithWhereUniqueWithoutLich_thituyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    update: XOR<lich_thituyen_chitietUpdateWithoutLich_thituyenInput, lich_thituyen_chitietUncheckedUpdateWithoutLich_thituyenInput>
    create: XOR<lich_thituyen_chitietCreateWithoutLich_thituyenInput, lich_thituyen_chitietUncheckedCreateWithoutLich_thituyenInput>
  }

  export type lich_thituyen_chitietUpdateWithWhereUniqueWithoutLich_thituyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    data: XOR<lich_thituyen_chitietUpdateWithoutLich_thituyenInput, lich_thituyen_chitietUncheckedUpdateWithoutLich_thituyenInput>
  }

  export type lich_thituyen_chitietUpdateManyWithWhereWithoutLich_thituyenInput = {
    where: lich_thituyen_chitietScalarWhereInput
    data: XOR<lich_thituyen_chitietUpdateManyMutationInput, lich_thituyen_chitietUncheckedUpdateManyWithoutLich_thituyen_chitietInput>
  }

  export type lich_thituyen_chitietScalarWhereInput = {
    AND?: Enumerable<lich_thituyen_chitietScalarWhereInput>
    OR?: Enumerable<lich_thituyen_chitietScalarWhereInput>
    NOT?: Enumerable<lich_thituyen_chitietScalarWhereInput>
    lichthi_ct_id?: BigIntFilter | bigint | number
    ungtuyen_id?: BigIntFilter | bigint | number
    lichthi_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type lich_thituyenCreateWithoutLich_thituyen_chitietInput = {
    lichthi_id?: bigint | number
    ngaythi: Date | string
    diadiem: string
    noidung_thituyen: string
    thoigian: Date | string
    soluong: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput = {
    lichthi_id?: bigint | number
    ngaythi: Date | string
    diadiem: string
    noidung_thituyen: string
    thoigian: Date | string
    soluong: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput = {
    where: lich_thituyenWhereUniqueInput
    create: XOR<lich_thituyenCreateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type ungtuyenCreateWithoutLich_thituyen_chitietInput = {
    ungtuyen_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutUngtuyenInput
    thongbao_tuyendung_chitiet: thongbao_tuyendung_chitietCreateNestedOneWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedCreateWithoutLich_thituyen_chitietInput = {
    ungtuyen_id?: bigint | number
    thongbao_ct_id: bigint | number
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ungtuyenCreateOrConnectWithoutLich_thituyen_chitietInput = {
    where: ungtuyenWhereUniqueInput
    create: XOR<ungtuyenCreateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type ketqua_thituyenCreateWithoutLich_thituyen_chitietInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ketqua_thituyenCreateOrConnectWithoutLich_thituyen_chitietInput = {
    where: ketqua_thituyenWhereUniqueInput
    create: XOR<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput, ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type ketqua_thituyenCreateManyLich_thituyen_chitietInputEnvelope = {
    data: Enumerable<ketqua_thituyenCreateManyLich_thituyen_chitietInput>
    skipDuplicates?: boolean
  }

  export type lich_thituyenUpsertWithoutLich_thituyen_chitietInput = {
    update: XOR<lich_thituyenUpdateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
    create: XOR<lich_thituyenCreateWithoutLich_thituyen_chitietInput, lich_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type lich_thituyenUpdateWithoutLich_thituyen_chitietInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput = {
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ngaythi?: DateTimeFieldUpdateOperationsInput | Date | string
    diadiem?: StringFieldUpdateOperationsInput | string
    noidung_thituyen?: StringFieldUpdateOperationsInput | string
    thoigian?: DateTimeFieldUpdateOperationsInput | Date | string
    soluong?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenUpsertWithoutLich_thituyen_chitietInput = {
    update: XOR<ungtuyenUpdateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
    create: XOR<ungtuyenCreateWithoutLich_thituyen_chitietInput, ungtuyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type ungtuyenUpdateWithoutLich_thituyen_chitietInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutUngtuyenInput
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUpdateOneRequiredWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedUpdateWithoutLich_thituyen_chitietInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenUpsertWithWhereUniqueWithoutLich_thituyen_chitietInput = {
    where: ketqua_thituyenWhereUniqueInput
    update: XOR<ketqua_thituyenUpdateWithoutLich_thituyen_chitietInput, ketqua_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
    create: XOR<ketqua_thituyenCreateWithoutLich_thituyen_chitietInput, ketqua_thituyenUncheckedCreateWithoutLich_thituyen_chitietInput>
  }

  export type ketqua_thituyenUpdateWithWhereUniqueWithoutLich_thituyen_chitietInput = {
    where: ketqua_thituyenWhereUniqueInput
    data: XOR<ketqua_thituyenUpdateWithoutLich_thituyen_chitietInput, ketqua_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput>
  }

  export type ketqua_thituyenUpdateManyWithWhereWithoutLich_thituyen_chitietInput = {
    where: ketqua_thituyenScalarWhereInput
    data: XOR<ketqua_thituyenUpdateManyMutationInput, ketqua_thituyenUncheckedUpdateManyWithoutKetqua_thituyenInput>
  }

  export type ketqua_thituyenScalarWhereInput = {
    AND?: Enumerable<ketqua_thituyenScalarWhereInput>
    OR?: Enumerable<ketqua_thituyenScalarWhereInput>
    NOT?: Enumerable<ketqua_thituyenScalarWhereInput>
    ketqua_id?: BigIntFilter | bigint | number
    tongdiem?: StringFilter | string
    danhgia_baithi?: StringFilter | string
    ketqua?: StringFilter | string
    upload_file?: StringFilter | string
    trangthai?: BoolFilter | boolean
    lichthi_ct_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type hoso_ungvienCreateWithoutQuatrinh_congtacInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutQuatrinh_congtacInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutQuatrinh_congtacInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_congtacInput>
  }

  export type hoso_ungvienUpsertWithoutQuatrinh_congtacInput = {
    update: XOR<hoso_ungvienUpdateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedUpdateWithoutQuatrinh_congtacInput>
    create: XOR<hoso_ungvienCreateWithoutQuatrinh_congtacInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_congtacInput>
  }

  export type hoso_ungvienUpdateWithoutQuatrinh_congtacInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutQuatrinh_congtacInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateWithoutQuatrinh_hoctapInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutQuatrinh_hoctapInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutQuatrinh_hoctapInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_hoctapInput>
  }

  export type hoso_ungvienUpsertWithoutQuatrinh_hoctapInput = {
    update: XOR<hoso_ungvienUpdateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedUpdateWithoutQuatrinh_hoctapInput>
    create: XOR<hoso_ungvienCreateWithoutQuatrinh_hoctapInput, hoso_ungvienUncheckedCreateWithoutQuatrinh_hoctapInput>
  }

  export type hoso_ungvienUpdateWithoutQuatrinh_hoctapInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutQuatrinh_hoctapInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type coquan_tuyendungCreateWithoutThongbao_tuyendungInput = {
    coquan_id?: bigint | number
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type coquan_tuyendungUncheckedCreateWithoutThongbao_tuyendungInput = {
    coquan_id?: bigint | number
    coquan_ma: string
    coquan_ten: string
    coquan_diachi: string
    coquan_sdt: string
    coquan_email: string
    coquan_website: string
    nguoilienhe: string
    co_quan_mota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type coquan_tuyendungCreateOrConnectWithoutThongbao_tuyendungInput = {
    where: coquan_tuyendungWhereUniqueInput
    create: XOR<coquan_tuyendungCreateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedCreateWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ungtuyen?: ungtuyenCreateNestedManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ungtuyen?: ungtuyenUncheckedCreateNestedManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietCreateOrConnectWithoutThongbao_tuyendungInput = {
    where: thongbao_tuyendung_chitietWhereUniqueInput
    create: XOR<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput, thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInputEnvelope = {
    data: Enumerable<thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInput>
    skipDuplicates?: boolean
  }

  export type coquan_tuyendungUpsertWithoutThongbao_tuyendungInput = {
    update: XOR<coquan_tuyendungUpdateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedUpdateWithoutThongbao_tuyendungInput>
    create: XOR<coquan_tuyendungCreateWithoutThongbao_tuyendungInput, coquan_tuyendungUncheckedCreateWithoutThongbao_tuyendungInput>
  }

  export type coquan_tuyendungUpdateWithoutThongbao_tuyendungInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type coquan_tuyendungUncheckedUpdateWithoutThongbao_tuyendungInput = {
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    coquan_ma?: StringFieldUpdateOperationsInput | string
    coquan_ten?: StringFieldUpdateOperationsInput | string
    coquan_diachi?: StringFieldUpdateOperationsInput | string
    coquan_sdt?: StringFieldUpdateOperationsInput | string
    coquan_email?: StringFieldUpdateOperationsInput | string
    coquan_website?: StringFieldUpdateOperationsInput | string
    nguoilienhe?: StringFieldUpdateOperationsInput | string
    co_quan_mota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendung_chitietUpsertWithWhereUniqueWithoutThongbao_tuyendungInput = {
    where: thongbao_tuyendung_chitietWhereUniqueInput
    update: XOR<thongbao_tuyendung_chitietUpdateWithoutThongbao_tuyendungInput, thongbao_tuyendung_chitietUncheckedUpdateWithoutThongbao_tuyendungInput>
    create: XOR<thongbao_tuyendung_chitietCreateWithoutThongbao_tuyendungInput, thongbao_tuyendung_chitietUncheckedCreateWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendung_chitietUpdateWithWhereUniqueWithoutThongbao_tuyendungInput = {
    where: thongbao_tuyendung_chitietWhereUniqueInput
    data: XOR<thongbao_tuyendung_chitietUpdateWithoutThongbao_tuyendungInput, thongbao_tuyendung_chitietUncheckedUpdateWithoutThongbao_tuyendungInput>
  }

  export type thongbao_tuyendung_chitietUpdateManyWithWhereWithoutThongbao_tuyendungInput = {
    where: thongbao_tuyendung_chitietScalarWhereInput
    data: XOR<thongbao_tuyendung_chitietUpdateManyMutationInput, thongbao_tuyendung_chitietUncheckedUpdateManyWithoutThongbao_tuyendung_chitietInput>
  }

  export type thongbao_tuyendung_chitietScalarWhereInput = {
    AND?: Enumerable<thongbao_tuyendung_chitietScalarWhereInput>
    OR?: Enumerable<thongbao_tuyendung_chitietScalarWhereInput>
    NOT?: Enumerable<thongbao_tuyendung_chitietScalarWhereInput>
    thongbao_ct_id?: BigIntFilter | bigint | number
    vitri_tuyendung?: StringFilter | string
    soluong?: IntFilter | number
    mota?: StringFilter | string
    yeucauchung?: StringFilter | string
    muc_luong_min?: StringFilter | string
    muc_luong_max?: StringFilter | string
    thongbao_id?: BigIntFilter | bigint | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type thongbao_tuyendungCreateWithoutThongbao_tuyendung_chitietInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coquan_tuyendung: coquan_tuyendungCreateNestedOneWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedCreateWithoutThongbao_tuyendung_chitietInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    coquan_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendungCreateOrConnectWithoutThongbao_tuyendung_chitietInput = {
    where: thongbao_tuyendungWhereUniqueInput
    create: XOR<thongbao_tuyendungCreateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
  }

  export type ungtuyenCreateWithoutThongbao_tuyendung_chitietInput = {
    ungtuyen_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien: hoso_ungvienCreateNestedOneWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput = {
    ungtuyen_id?: bigint | number
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedCreateNestedManyWithoutUngtuyenInput
  }

  export type ungtuyenCreateOrConnectWithoutThongbao_tuyendung_chitietInput = {
    where: ungtuyenWhereUniqueInput
    create: XOR<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput, ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
  }

  export type ungtuyenCreateManyThongbao_tuyendung_chitietInputEnvelope = {
    data: Enumerable<ungtuyenCreateManyThongbao_tuyendung_chitietInput>
    skipDuplicates?: boolean
  }

  export type thongbao_tuyendungUpsertWithoutThongbao_tuyendung_chitietInput = {
    update: XOR<thongbao_tuyendungUpdateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedUpdateWithoutThongbao_tuyendung_chitietInput>
    create: XOR<thongbao_tuyendungCreateWithoutThongbao_tuyendung_chitietInput, thongbao_tuyendungUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
  }

  export type thongbao_tuyendungUpdateWithoutThongbao_tuyendung_chitietInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coquan_tuyendung?: coquan_tuyendungUpdateOneRequiredWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedUpdateWithoutThongbao_tuyendung_chitietInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    coquan_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenUpsertWithWhereUniqueWithoutThongbao_tuyendung_chitietInput = {
    where: ungtuyenWhereUniqueInput
    update: XOR<ungtuyenUpdateWithoutThongbao_tuyendung_chitietInput, ungtuyenUncheckedUpdateWithoutThongbao_tuyendung_chitietInput>
    create: XOR<ungtuyenCreateWithoutThongbao_tuyendung_chitietInput, ungtuyenUncheckedCreateWithoutThongbao_tuyendung_chitietInput>
  }

  export type ungtuyenUpdateWithWhereUniqueWithoutThongbao_tuyendung_chitietInput = {
    where: ungtuyenWhereUniqueInput
    data: XOR<ungtuyenUpdateWithoutThongbao_tuyendung_chitietInput, ungtuyenUncheckedUpdateWithoutThongbao_tuyendung_chitietInput>
  }

  export type ungtuyenUpdateManyWithWhereWithoutThongbao_tuyendung_chitietInput = {
    where: ungtuyenScalarWhereInput
    data: XOR<ungtuyenUpdateManyMutationInput, ungtuyenUncheckedUpdateManyWithoutUngtuyenInput>
  }

  export type hoso_ungvienCreateWithoutUngtuyenInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dm_dantoc: dm_dantocCreateNestedOneWithoutHoso_ungvienInput
    dm_tongiao: dm_tongiaoCreateNestedOneWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedCreateWithoutUngtuyenInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedCreateNestedManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedCreateNestedManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienCreateOrConnectWithoutUngtuyenInput = {
    where: hoso_ungvienWhereUniqueInput
    create: XOR<hoso_ungvienCreateWithoutUngtuyenInput, hoso_ungvienUncheckedCreateWithoutUngtuyenInput>
  }

  export type thongbao_tuyendung_chitietCreateWithoutUngtuyenInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    thongbao_tuyendung: thongbao_tuyendungCreateNestedOneWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedCreateWithoutUngtuyenInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    thongbao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendung_chitietCreateOrConnectWithoutUngtuyenInput = {
    where: thongbao_tuyendung_chitietWhereUniqueInput
    create: XOR<thongbao_tuyendung_chitietCreateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedCreateWithoutUngtuyenInput>
  }

  export type lich_thituyen_chitietCreateWithoutUngtuyenInput = {
    lichthi_ct_id?: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    lich_thituyen: lich_thituyenCreateNestedOneWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput = {
    lichthi_ct_id?: bigint | number
    lichthi_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedCreateNestedManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietCreateOrConnectWithoutUngtuyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    create: XOR<lich_thituyen_chitietCreateWithoutUngtuyenInput, lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>
  }

  export type lich_thituyen_chitietCreateManyUngtuyenInputEnvelope = {
    data: Enumerable<lich_thituyen_chitietCreateManyUngtuyenInput>
    skipDuplicates?: boolean
  }

  export type hoso_ungvienUpsertWithoutUngtuyenInput = {
    update: XOR<hoso_ungvienUpdateWithoutUngtuyenInput, hoso_ungvienUncheckedUpdateWithoutUngtuyenInput>
    create: XOR<hoso_ungvienCreateWithoutUngtuyenInput, hoso_ungvienUncheckedCreateWithoutUngtuyenInput>
  }

  export type hoso_ungvienUpdateWithoutUngtuyenInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutUngtuyenInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type thongbao_tuyendung_chitietUpsertWithoutUngtuyenInput = {
    update: XOR<thongbao_tuyendung_chitietUpdateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedUpdateWithoutUngtuyenInput>
    create: XOR<thongbao_tuyendung_chitietCreateWithoutUngtuyenInput, thongbao_tuyendung_chitietUncheckedCreateWithoutUngtuyenInput>
  }

  export type thongbao_tuyendung_chitietUpdateWithoutUngtuyenInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung?: thongbao_tuyendungUpdateOneRequiredWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateWithoutUngtuyenInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyen_chitietUpsertWithWhereUniqueWithoutUngtuyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    update: XOR<lich_thituyen_chitietUpdateWithoutUngtuyenInput, lich_thituyen_chitietUncheckedUpdateWithoutUngtuyenInput>
    create: XOR<lich_thituyen_chitietCreateWithoutUngtuyenInput, lich_thituyen_chitietUncheckedCreateWithoutUngtuyenInput>
  }

  export type lich_thituyen_chitietUpdateWithWhereUniqueWithoutUngtuyenInput = {
    where: lich_thituyen_chitietWhereUniqueInput
    data: XOR<lich_thituyen_chitietUpdateWithoutUngtuyenInput, lich_thituyen_chitietUncheckedUpdateWithoutUngtuyenInput>
  }

  export type lich_thituyen_chitietUpdateManyWithWhereWithoutUngtuyenInput = {
    where: lich_thituyen_chitietScalarWhereInput
    data: XOR<lich_thituyen_chitietUpdateManyMutationInput, lich_thituyen_chitietUncheckedUpdateManyWithoutLich_thituyen_chitietInput>
  }

  export type thongbao_tuyendungCreateManyCoquan_tuyendungInput = {
    thongbao_id?: bigint | number
    thongbao_ma: string
    thongbao_ngaylap: Date | string
    thongbao_hannop: Date | string
    thongbao_noidung: string
    quyenloi: string
    thanhphan_hoso: string
    phuongthuc_nophs: string
    thongbao_trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendungUpdateWithoutCoquan_tuyendungInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUpdateManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedUpdateWithoutCoquan_tuyendungInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUncheckedUpdateManyWithoutThongbao_tuyendungInput
  }

  export type thongbao_tuyendungUncheckedUpdateManyWithoutThongbao_tuyendungInput = {
    thongbao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ma?: StringFieldUpdateOperationsInput | string
    thongbao_ngaylap?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_hannop?: DateTimeFieldUpdateOperationsInput | Date | string
    thongbao_noidung?: StringFieldUpdateOperationsInput | string
    quyenloi?: StringFieldUpdateOperationsInput | string
    thanhphan_hoso?: StringFieldUpdateOperationsInput | string
    phuongthuc_nophs?: StringFieldUpdateOperationsInput | string
    thongbao_trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvienCreateManyDm_dantocInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    tongiao_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvienUpdateWithoutDm_dantocInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_tongiao?: dm_tongiaoUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutDm_dantocInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateManyWithoutHoso_ungvienInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    tongiao_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvienCreateManyDm_tongiaoInput = {
    hoso_id?: bigint | number
    hoso_ma: string
    hoso_ngaynop: Date | string
    hoten_ungvien: string
    gioi_tinh: boolean
    sdt: string
    email: string
    CMND: string
    que_quan: string
    diachi_lienhe: string
    tinhtrang_honnhan: boolean
    nguoilienhe_sdt: string
    nguoilienhe_diachi: string
    ngayvao_doan: Date | string
    ngayvao_dang: Date | string
    congviec_truoctuyendung: string
    trangthai_tuyendung: string
    dantoc_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvienUpdateWithoutDm_tongiaoInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dm_dantoc?: dm_dantocUpdateOneRequiredWithoutHoso_ungvienInput
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvienUncheckedUpdateWithoutDm_tongiaoInput = {
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_ma?: StringFieldUpdateOperationsInput | string
    hoso_ngaynop?: DateTimeFieldUpdateOperationsInput | Date | string
    hoten_ungvien?: StringFieldUpdateOperationsInput | string
    gioi_tinh?: BoolFieldUpdateOperationsInput | boolean
    sdt?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    que_quan?: StringFieldUpdateOperationsInput | string
    diachi_lienhe?: StringFieldUpdateOperationsInput | string
    tinhtrang_honnhan?: BoolFieldUpdateOperationsInput | boolean
    nguoilienhe_sdt?: StringFieldUpdateOperationsInput | string
    nguoilienhe_diachi?: StringFieldUpdateOperationsInput | string
    ngayvao_doan?: DateTimeFieldUpdateOperationsInput | Date | string
    ngayvao_dang?: DateTimeFieldUpdateOperationsInput | Date | string
    congviec_truoctuyendung?: StringFieldUpdateOperationsInput | string
    trangthai_tuyendung?: StringFieldUpdateOperationsInput | string
    dantoc_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien_thongtin_giadinh?: hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_congtac?: quatrinh_congtacUncheckedUpdateManyWithoutHoso_ungvienInput
    quatrinh_hoctap?: quatrinh_hoctapUncheckedUpdateManyWithoutHoso_ungvienInput
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutHoso_ungvienInput
  }

  export type hoso_ungvien_thongtin_giadinhCreateManyHoso_ungvienInput = {
    thongtingiadinh_id?: bigint | number
    hoten: string
    namsinh: Date | string
    Nghenghiep: string
    CMND: string
    quanhe: string
    diachi_hientai: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_congtacCreateManyHoso_ungvienInput = {
    quatrinh_congtac_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    ten_coquan_donvi: string
    chuvu: string
    congviec_phutrach: string
    thanhtich_noibac: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type quatrinh_hoctapCreateManyHoso_ungvienInput = {
    quatrinh_hoctap_id?: bigint | number
    tungay: Date | string
    denngay: Date | string
    bac_kynang: string
    ten_donvi_daotao: string
    ten_chungnhan_vanbang: string
    xeploai: string
    namcap: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ungtuyenCreateManyHoso_ungvienInput = {
    ungtuyen_id?: bigint | number
    thongbao_ct_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUpdateWithoutHoso_ungvienInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedUpdateWithoutHoso_ungvienInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_thongtin_giadinhUncheckedUpdateManyWithoutHoso_ungvien_thongtin_giadinhInput = {
    thongtingiadinh_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoten?: StringFieldUpdateOperationsInput | string
    namsinh?: DateTimeFieldUpdateOperationsInput | Date | string
    Nghenghiep?: StringFieldUpdateOperationsInput | string
    CMND?: StringFieldUpdateOperationsInput | string
    quanhe?: StringFieldUpdateOperationsInput | string
    diachi_hientai?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_congtacUpdateWithoutHoso_ungvienInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_congtacUncheckedUpdateWithoutHoso_ungvienInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_congtacUncheckedUpdateManyWithoutQuatrinh_congtacInput = {
    quatrinh_congtac_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    ten_coquan_donvi?: StringFieldUpdateOperationsInput | string
    chuvu?: StringFieldUpdateOperationsInput | string
    congviec_phutrach?: StringFieldUpdateOperationsInput | string
    thanhtich_noibac?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapUpdateWithoutHoso_ungvienInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapUncheckedUpdateWithoutHoso_ungvienInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quatrinh_hoctapUncheckedUpdateManyWithoutQuatrinh_hoctapInput = {
    quatrinh_hoctap_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tungay?: DateTimeFieldUpdateOperationsInput | Date | string
    denngay?: DateTimeFieldUpdateOperationsInput | Date | string
    bac_kynang?: StringFieldUpdateOperationsInput | string
    ten_donvi_daotao?: StringFieldUpdateOperationsInput | string
    ten_chungnhan_vanbang?: StringFieldUpdateOperationsInput | string
    xeploai?: StringFieldUpdateOperationsInput | string
    namcap?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenUpdateWithoutHoso_ungvienInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thongbao_tuyendung_chitiet?: thongbao_tuyendung_chitietUpdateOneRequiredWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietUpdateManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedUpdateWithoutHoso_ungvienInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedUpdateManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedUpdateManyWithoutUngtuyenInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillCreateManyHoso_ungvien_skillgroupInput = {
    skill_id?: bigint | number
    skill_code: string
    skill_name: string
    skill_status: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type hoso_ungvien_skillUpdateWithoutHoso_ungvien_skillgroupInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillUncheckedUpdateWithoutHoso_ungvien_skillgroupInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hoso_ungvien_skillUncheckedUpdateManyWithoutHoso_ungvien_skillInput = {
    skill_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_code?: StringFieldUpdateOperationsInput | string
    skill_name?: StringFieldUpdateOperationsInput | string
    skill_status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lich_thituyen_chitietCreateManyLich_thituyenInput = {
    lichthi_ct_id?: bigint | number
    ungtuyen_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyen_chitietUpdateWithoutLich_thituyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ungtuyen?: ungtuyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenUpdateManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedUpdateWithoutLich_thituyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedUpdateManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedUpdateManyWithoutLich_thituyen_chitietInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenCreateManyLich_thituyen_chitietInput = {
    ketqua_id?: bigint | number
    tongdiem: string
    danhgia_baithi: string
    ketqua: string
    upload_file: string
    trangthai: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ketqua_thituyenUpdateWithoutLich_thituyen_chitietInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenUncheckedUpdateWithoutLich_thituyen_chitietInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ketqua_thituyenUncheckedUpdateManyWithoutKetqua_thituyenInput = {
    ketqua_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tongdiem?: StringFieldUpdateOperationsInput | string
    danhgia_baithi?: StringFieldUpdateOperationsInput | string
    ketqua?: StringFieldUpdateOperationsInput | string
    upload_file?: StringFieldUpdateOperationsInput | string
    trangthai?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thongbao_tuyendung_chitietCreateManyThongbao_tuyendungInput = {
    thongbao_ct_id?: bigint | number
    vitri_tuyendung: string
    soluong: number
    mota: string
    yeucauchung: string
    muc_luong_min: string
    muc_luong_max: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type thongbao_tuyendung_chitietUpdateWithoutThongbao_tuyendungInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ungtuyen?: ungtuyenUpdateManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateWithoutThongbao_tuyendungInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ungtuyen?: ungtuyenUncheckedUpdateManyWithoutThongbao_tuyendung_chitietInput
  }

  export type thongbao_tuyendung_chitietUncheckedUpdateManyWithoutThongbao_tuyendung_chitietInput = {
    thongbao_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    vitri_tuyendung?: StringFieldUpdateOperationsInput | string
    soluong?: IntFieldUpdateOperationsInput | number
    mota?: StringFieldUpdateOperationsInput | string
    yeucauchung?: StringFieldUpdateOperationsInput | string
    muc_luong_min?: StringFieldUpdateOperationsInput | string
    muc_luong_max?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ungtuyenCreateManyThongbao_tuyendung_chitietInput = {
    ungtuyen_id?: bigint | number
    hoso_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ungtuyenUpdateWithoutThongbao_tuyendung_chitietInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hoso_ungvien?: hoso_ungvienUpdateOneRequiredWithoutUngtuyenInput
    lich_thituyen_chitiet?: lich_thituyen_chitietUpdateManyWithoutUngtuyenInput
  }

  export type ungtuyenUncheckedUpdateWithoutThongbao_tuyendung_chitietInput = {
    ungtuyen_id?: BigIntFieldUpdateOperationsInput | bigint | number
    hoso_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen_chitiet?: lich_thituyen_chitietUncheckedUpdateManyWithoutUngtuyenInput
  }

  export type lich_thituyen_chitietCreateManyUngtuyenInput = {
    lichthi_ct_id?: bigint | number
    lichthi_id: bigint | number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type lich_thituyen_chitietUpdateWithoutUngtuyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lich_thituyen?: lich_thituyenUpdateOneRequiredWithoutLich_thituyen_chitietInput
    ketqua_thituyen?: ketqua_thituyenUpdateManyWithoutLich_thituyen_chitietInput
  }

  export type lich_thituyen_chitietUncheckedUpdateWithoutUngtuyenInput = {
    lichthi_ct_id?: BigIntFieldUpdateOperationsInput | bigint | number
    lichthi_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ketqua_thituyen?: ketqua_thituyenUncheckedUpdateManyWithoutLich_thituyen_chitietInput
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
  export const dmmf: runtime.DMMF.Document;
}
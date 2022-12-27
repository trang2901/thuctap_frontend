
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Coquan_tuyendungScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Dm_dantocScalarFieldEnum = makeEnum({
  dantoc_id: 'dantoc_id',
  dantoc_ma: 'dantoc_ma',
  dantoc_ten: 'dantoc_ten',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Dm_tongiaoScalarFieldEnum = makeEnum({
  tongiao_id: 'tongiao_id',
  tongiao_ma: 'tongiao_ma',
  tongiao_ten: 'tongiao_ten',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Failed_jobsScalarFieldEnum = makeEnum({
  id: 'id',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at'
});

exports.Prisma.Hoso_ungvienScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Hoso_ungvien_cauhoi_tuyendungScalarFieldEnum = makeEnum({
  cauhoi_id: 'cauhoi_id',
  cauhoi_noidung: 'cauhoi_noidung',
  cauhoi_trangthai: 'cauhoi_trangthai',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Hoso_ungvien_skillScalarFieldEnum = makeEnum({
  skill_id: 'skill_id',
  skill_code: 'skill_code',
  skill_name: 'skill_name',
  skill_status: 'skill_status',
  group_id: 'group_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Hoso_ungvien_skillgroupScalarFieldEnum = makeEnum({
  group_id: 'group_id',
  group_name: 'group_name',
  group_code: 'group_code',
  group_status: 'group_status',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Hoso_ungvien_thongtin_giadinhScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Ketqua_thituyenScalarFieldEnum = makeEnum({
  ketqua_id: 'ketqua_id',
  tongdiem: 'tongdiem',
  danhgia_baithi: 'danhgia_baithi',
  ketqua: 'ketqua',
  upload_file: 'upload_file',
  trangthai: 'trangthai',
  lichthi_ct_id: 'lichthi_ct_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Lich_thituyenScalarFieldEnum = makeEnum({
  lichthi_id: 'lichthi_id',
  ngaythi: 'ngaythi',
  diadiem: 'diadiem',
  noidung_thituyen: 'noidung_thituyen',
  thoigian: 'thoigian',
  soluong: 'soluong',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Lich_thituyen_chitietScalarFieldEnum = makeEnum({
  lichthi_ct_id: 'lichthi_ct_id',
  ungtuyen_id: 'ungtuyen_id',
  lichthi_id: 'lichthi_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  migration: 'migration',
  batch: 'batch'
});

exports.Prisma.Quatrinh_congtacScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Quatrinh_hoctapScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Thongbao_tuyendungScalarFieldEnum = makeEnum({
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
});

exports.Prisma.Thongbao_tuyendung_chitietScalarFieldEnum = makeEnum({
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
});

exports.Prisma.UngtuyenScalarFieldEnum = makeEnum({
  ungtuyen_id: 'ungtuyen_id',
  thongbao_ct_id: 'thongbao_ct_id',
  hoso_id: 'hoso_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  email_verified_at: 'email_verified_at',
  password: 'password',
  remember_token: 'remember_token',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Thêm Công Việc', href: '/admin/QuanLyDangTin/ThemCongViec' },
  { title: 'Quản Lý Đăng Tin', href: '/admin/QuanLyDangTin' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function Demo() {
  return (
    <>
      {/* <Breadcrumbs>{items}</Breadcrumbs> */}
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
import { Breadcrumbs, Anchor } from '@mantine/core';


// const items = [
//   { title: 'Quản Lý Đăng Tin', href: '/admin/QuanLyDangTin' },
//   { title: 'Thêm Công Việc', href: '/admin/QuanLyDangTin/ThemCongViec' },

// ].map((item, index) => (
//   <Anchor href={item.href} key={index}>
//     {item.title}
//   </Anchor>
// ));

export default function Demo(props:any) {

  // useEffect(() => {

  // }, [])
  return (
    <>
      {/* <Breadcrumbs>{items}</Breadcrumbs> */}
      <Breadcrumbs separator="→">
        {/* {items} */}
        {props.items.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>
    </>
  );
}
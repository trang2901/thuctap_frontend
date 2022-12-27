import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { createStyles, Table, Container, Button, Group,Space } from '@mantine/core';
import { ListItem, List } from '@mantine/core';
import ChiTiet from './ChiTiet'
import RichTextEditor from 'components/Editor';
import { CirclePlus,  } from 'tabler-icons-react';
import Link from 'next/link';
import { Modal, } from '@mantine/core';
import Layout from 'layouts';
import Breadcrum from 'components/Breadcrumb'
const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
const useStyles = createStyles((theme) => ({

  icon: {
    position: 'relative',
    marginLeft: 150,
    marginTop: 10,


  },
  input: {
    height: 'auto',
    paddingTop: 18,
  },
  text: {
    marginLeft: 200,
    marginTop: 70,

  },
  bnt: {
    marginLeft: 500,
    // position:'center',
    color: 'white',

  },
  label: {
    position: 'absolute',
    pointerEvents: 'none',
    color: 'red',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container1: {

    background: 'PowderBlue',
     minWidth: 950,

  },container: {

    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    maxWidth:1200
  },
  headertable: {
    background: 'LightBlue'

  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  link1: {
    
    textDecoration: 'none'
  },
  title:{
    background: 'rgb(147, 200, 216)'
  }
}));

const itemview = (item: any) => {
  return (
    <List.Item>
      {
        JSON.stringify(item)
      }
    </List.Item>
  );
}
const data = [
  {
    thongtincongty: {
      name: "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
      email: "mail1@gmail.com",
      sodienthoai: "0121212121",
      diachi: "139, Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, Cần Thơ, Vietnam",
      loaihinhcongty: "Công ty cổ phần",
      loaihinhkinhdoanh: "Bất động sản",
      soluong: "200-500"
    },
    vitriungtuyen: [
      {
        tenvitri: "Nhân viên PG/Lễ Tân",
        mucluong: "7-10 triệu",
        sohosodanop: 5,
        soluongcantuyen: 10,
      },
      {
        tenvitri: "Tài xế(Chở Lãnh Đạo)",
        mucluong: "Thỏa thuận",
        sohosodanop: 2,
        soluongcantuyen: 4,
      },
      {
        tenvitri: "Chuyên Viên Tư Vấn Bất Động Sản",
        mucluong: "Trên 30 triệu",
        sohosodanop: 2,
        soluongcantuyen: 4,
      },
      {
        tenvitri: "Thực Tập Sinh Kinh Doanh",
        mucluong: "Dưới 3 triệu",
        sohosodanop: 2,
        soluongcantuyen: 4,
      },
    ]
  }]
  const items = [
  { title: 'Quản Lý Đăng Tin', href: '/admin/QuanLyDangTin' },
  // { title: 'Thêm Công Việc', href: '/admin/QuanLyDangTin/ThemCongViec' },

]
QuanLyDangTin.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">
    {page}
  </Layout>;
};

export default function QuanLyDangTin() {
  const { classes } = useStyles();
  const [value, onChange] = useState(initialValue);
  const [showChild, setShowChild] = useState(false)
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (
    <div>
      <Breadcrum items={items}></Breadcrum>
      <List>
        {

          <Container className={classes.container} >
            <Container>

            </Container>
            <div><Group position='right' >
              <Button  >
                <CirclePlus/>
                <a href={"/admin/QuanLyDangTin/ThemCongViec"}
                className={classes.link}>
                  Thêm mới tin tuyển dụng
                </a>
              </Button></Group>
               <Space h="lg" />
            </div>

            <div>
              <div className={classes.container1}>
              
                {/* <img src="/cusc-logo.png" alt="Cusc-logo"
                  width={80} height={80} />
                {data && data.map((item) => item.thongtincongty.name)}
                <Space h="lg" />
                {data && data.map((item) => item.thongtincongty.diachi)} */}

              </div>
              <Table
                className='tr' sx={(theme) => ({
                td: {
                    border: '0.5px solid grey !important',

                },
                th: {
                    border: '0.5px solid grey !important',


                },
                tr:{

                },
                // tr:hover {
                //   background_color: rgb(147, 200, 216);
                // }
            })
            }
            >
                <thead>
                  <tr className={classes.title}>
                    <th >VỊ TRÍ TUYỂN DỤNG</th>
                    <th>SỐ LƯỢNG CẦN TUYỂN</th>
                    <th>MỨC LƯƠNG</th>
                    <th>SỐ LƯỢNG ĐÃ NỘP</th>
                  </tr>
                  {
                    data.map((item) => item.vitriungtuyen.map((i, index) => {
                      return (
                        <tr className='tr' key={index}>
                          <th >
                            <Group >
                              <a onClick={() => setOpened(true)}>
                                <span>{i.tenvitri}</span>
                              </a>
                            </Group>
                          </th>
                          <th>{i.soluongcantuyen}</th>
                          <th>{i.mucluong}</th>
                          <th>
                            <a className={classes.link1}
                              href={"/admin/QuanLyUngVien"}>
                              {i.sohosodanop}
                            </a>

                          </th></tr>)
                    }
                    )
                    )
                  }
                </thead>
              </Table>
              <Modal size="75%"
                opened={opened}
                onClose={() => setOpened(false)}
              >
                <ChiTiet />
              </Modal>
            </div>

          </Container>
        }
      </List>

    </div>
  );
}
import React, { useState } from 'react';
import {
  createStyles, Button, Navbar, Group, Code,
  useMantineColorScheme, SegmentedControl, Center,
  Box, List, Container, Table, Badge, Space
} from '@mantine/core';
import NavbarAdmin from 'components/NavbarAdmin';
import HeaderAdmin from 'components/HeaderAdmin';
//import Modal from 'components/Modal'
import { Modal, } from '@mantine/core';
import Link from 'next/link';
import Gird from 'components/Gird'
import ChiTietHS from 'components/ChiTietHoSo'
import Layout from 'layouts';
const useStyles = createStyles((theme) => ({
  main: {
    position: 'relative',
    marginLeft: 400,
    marginTop: -900
  },
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

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    color: 'red',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.xs,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container: {

    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    maxWidth: '120%',

  }
  ,
  headertable: {
    background: 'LightBlue'

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
    thongtincobanungvien: {
      name: "Nguyễn Văn A",
      email: "meo@gmail.com",
      sodienthoai: "0121212121",
      diachi: "139, Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, Cần Thơ, Vietnam",

    },

    vitriungtuyen: [
      {
        tenvitri1: "Lập trình viên",
      },
      {
        tenvitri2: "Thiết kế giao diện",
      },
    ],
    kinhnghiem: "Lập trình viên tại NT (2020-2021)",
    trinhdo: "Tốt nghiệp chuyên ngành công nghệ thông tin",
  }
]
QuanLyUngVien.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">
    {page}
  </Layout>;
};

export default function QuanLyUngVien() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (

    <div >
      <List>
        {
          <Container className={classes.container} >
            <div>

              <div
                // color="black"
                // size='lg'
                
                color={"dark"}
                // variant="outline"
                className='tieude-dep'
              >
                Danh sách ứng viên
              </div>
              <Space h="md" />

              {/* { data && data.map((item)=>item.thongtincongty.diachi)} */}
              <Table
                className='tr' sx={(theme) => ({
                  td: {
                    border: '0.5px solid grey !important',

                  },
                  th: {
                    border: '0.5px solid grey !important',
                    // color: 'red',

                  },
                  tr: {

                  },
                  // tr:hover {
                  //   background_color: rgb(147, 200, 216);
                  // }
                })
                }
              >
                <thead >
                  <tr className={classes.headertable}>
                    <th>Người nộp</th>
                    <th>Trình độ học vấn</th>
                    <th>Kinh nghiệm làm việc</th>
                    <th>Vị trí ứng tuyển</th>
                  </tr>
                  <tr>
                    <th >
                      <Modal size="70%"
                        opened={opened}
                        onClose={() => setOpened(false)}
                      // title="Thông tin chi tiết hồ sơ!"
                      >
                        <ChiTietHS />
                      </Modal>
                      <Group position="center">
                        <a onClick={() => setOpened(true)}>
                          <span>  {data && data.map((item) => item.thongtincobanungvien.name)}</span>
                        </a>
                      </Group>
                    </th>

                    <th > {data && data.map((item) => item.trinhdo)}</th>
                    <th > {data && data.map((item) => item.kinhnghiem)}</th>
                    <th > {data && data.map((item) => item.vitriungtuyen.map((i) => i.tenvitri1))}<br />
                      {data && data.map((item) => item.vitriungtuyen.map((i) => i.tenvitri2))}</th>
                  </tr>
                </thead>
              </Table>
            </div>
          </Container>
        }
      </List>
    </div>

  );
}
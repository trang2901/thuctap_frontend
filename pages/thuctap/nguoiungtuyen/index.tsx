import React, { useState } from 'react';
import { createStyles, Select, TextInput, Button, Text, ThemeIcon, Image, List, Container, Grid, Table, SimpleGrid, Space, Center, Modal, Group, Box } from '@mantine/core';
// import { DatePicker } from '@mantine/dates';

import { ChevronDown, Clock, Coin, Heart } from 'tabler-icons-react';
// import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Headertt from '../nguoiungtuyen/components/Headertt'
// import Footertt from '../nguoiungtuyen/components/Footertt';
// import { useHover } from '@mantine/hooks';
import { useRouter } from 'next/router';
// import Detail from '../nguoiungtuyen/components/detail'
import {
  IconDefinition,
  findIconDefinition,
  library,
  config
} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false
library.add(fas)
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from "../../../layouts";
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
const HeartSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'heart' })
const HammerSSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'hammer' })
const PeopleGroup: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'people-group' })
const Briefcase: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'briefcase' })
const MoneySolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'money-bill-1-wave' })
const ClockSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'clock' })
// import { User } from "tabler-icons-react";
const useStyles = createStyles((theme) => ({
  // root: {
  //   position: 'relative',
  // },

  input: {
    height: 'auto',
    paddingTop: 18,

  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container: {
    background: 'PowderBlue',
    maxWidth: '100%',
    padding: 10
    

  },

  name: {
    color: 'DarkRed',
    fontWeight: 'bold'
  },
  table: {
    marginTop: 10,
    textAlign: 'left',

  },
  logo: {
    width: '50px',
    height: '50px',
    marginLeft: '5px',
    marginRight: '5px',
    // marginTop: '60px'
  },
  diachi: {
    fontStyle: 'italic',
    color: 'SaddleBrown'
  },
  icon: {
    color: 'darkblue'
  },
  link: {
    color: 'SteelBlue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  logo1: {
    width: 60,
    height: 60,

  },
  xemthem: {
    color: 'SteelBlue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textDecoration: 'none',
    background: 'white'
  },
  group: {
    flexGrow: 2
  }, test:{}

}));
const data = [
  {
    "thongtincongty": {
      "name": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
      "email": "huyentrang@gmail.com",
      "sodienthoai": "0394075201",
      "diachi": "139, Tr???n H??ng ?????o, Ph?????ng An Ph??, Qu???n Ninh Ki???u, C???n Th??, Vietnam",
      "loaihinhcongty": "C??ng ty c??? ph???n",
      "loaihinhkinhdoanh": "B???t ?????ng s???n",
      "soluong": "200-500",
      "logo": "https://sanvieclamcantho.com/upload/imagelogo/cty-cp-bds-can-tho---dat-xanh-mien-tay1609301614.jpg"
    },
    "vitriungtuyen": [
      {
        "tenvitri": "Nh??n vi??n PG/L??? T??n",
        "mucluong": "7-10 tri???u",
        "sohosodanop": 5,
        "soluongcantuyen": 10,
        "ngay": "15/06"
      },
      {
        "tenvitri": "T??i x???(Ch??? L??nh ?????o)",
        "mucluong": "Th???a thu???n",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "30/05"
      },
      {
        "tenvitri": "Chuy??n Vi??n T?? V???n B???t ?????ng S???n (L????ng 7 - 15tr/Th??ng)",
        "mucluong": "Tr??n 30 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Th???c T???p Sinh Kinh Doanh",
        "mucluong": "D?????i 3 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Tr?????ng Ph??ng B??n H??ng (L????ng C?? B???n ??? 11 Tri???u)",
        "mucluong": "Th???a Thu???n",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Chuy??n Vi??n Khai Th??c Th??? Tr?????ng",
        "mucluong": "Th???a Thu???n",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Gi??m ?????c S??n B???t ?????ng S???n",
        "mucluong": "20 - 25 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
    ]
  },
  {
    "thongtincongty": {
      "name": "C??NG TY TNHH TH????NG M???I T??N ?????NG PH??C",
      "email": "heo@gmail.com",
      "sodienthoai": "0394075201",
      "diachi": "285 V??nh ??ai Trong, B??nh Tr??? ????ng B, B??nh T??n, TP.H??? Ch?? Minh",
      "loaihinhcongty": "C??ng ty TNHH",
      "loaihinhkinhdoanh": "B??n l??? & ph??n ph???i",
      "soluong": "100-200",
      "logo": "https://cdn1.timviecnhanh.com/images/employer_avatar/2021/12/14/images/163945448494.jpeg"
    },
    "vitriungtuyen": [
      {
        "tenvitri": "Nh??n Vi??n Kinh Doanh Th??? Tr?????ng Mi???n T??y - Kh??ng C???n Kinh Nghi???m",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 5,
        "soluongcantuyen": 10,
        "ngay": "25/06"
      },
      {
        "tenvitri": "?????i Di???n Kinh Doanh - Ki??n Giang, H???u Giang, S??c Tr??ng, C?? Mau",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "25/06"
      },
      {
        "tenvitri": "Nh??n Vi??n B??n H??ng - Tr?? Vinh, C???n Th??, ?????ng Th??p, B???c Li??u",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "25/06"
      },
      {
        "tenvitri": "Nh??n Vi??n Sale - Long An, Ti???n Giang, B???n Tre, An Giang",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "25/06"
      },
      {
        "tenvitri": "Nh??n Vi??n Ch??m S??c Kh??ch H??ng",
        "mucluong": " 5 - 7 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "25/06"
      },
    ]
  },
  {
    "thongtincongty": {
      "name": "C??NG TY TC??? PH???N B???T ?????NG S???N C???N TH??",
      "email": "heo@gmail.com",
      "sodienthoai": "0394075201",
      "diachi": "29c M???u Th??n, P.An H??a, Q.Ninh Ki???u, TP.C???n Th??",
      "loaihinhcongty": "C??ng ty c??? ph???n",
      "loaihinhkinhdoanh": "B???t ?????ng s???n",
      "soluong": "200-500",
      "logo": "https://cdn.vieclamcantho.com.vn/public/upload/nhatuyendung/cong-ty-cp-bat-dong-san-can-tho---dat-xanh-mien-tay6211622708825.jpg"
    },
    "vitriungtuyen": [
      {
        "tenvitri": "Chuy??n Vi??n T?? V???n",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 5,
        "soluongcantuyen": 10,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Tr?????ng Ph??ng Kinh Doanh",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Th???c T???p Sinh Kinh Doanh",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      },
      {
        "tenvitri": "Digital Marketing",
        "mucluong": "15 - 20 tri???u",
        "sohosodanop": 2,
        "soluongcantuyen": 4,
        "ngay": "31/05"
      }
    ]
  }
]
ContainedInputs.getLayout = function getLayout(page: any) {
  return <Layout variant="main">
    {page}
  </Layout>;
};
export default function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const [limit, setLimit] = useState([3, 3, 3, 3]);
  const router = useRouter()
  const [opened, setOpened] = useState(false);
  const updateLimit = (index: any) => {
    const l = Object.assign([...limit], {
      [index]: limit[index] + 3
    })
    setLimit(l)
  }
  const itemview = (item: any, i: any) => {
    return (
      // <List.Item>
      <>
        <Grid grow>
          <Grid.Col span={12}>
          <div className='container'>

            <Group>
              <div className='logo'>
                <Image
                  src={item.thongtincongty.logo}
                  alt="ISO logo"
                  radius={120}
                />
              </div>


              <div className={classes.group}>
                <div className={classes.name}>
                  {item.thongtincongty.name}
                </div>
                <div className={classes.diachi}>
                  {item.thongtincongty.diachi}
                </div>
                <div className={classes.test}>
               
                </div>
                <Grid className={classes.test}>
                  <Grid.Col span={4}><FontAwesomeIcon icon={PeopleGroup} className={classes.icon} />    {item.thongtincongty.soluong}</Grid.Col>
                  <Grid.Col span={4}> <FontAwesomeIcon icon={HammerSSolidIcon} className={classes.icon} />   {item.thongtincongty.loaihinhcongty}</Grid.Col>
                  <Grid.Col span={4}><FontAwesomeIcon icon={Briefcase} className={classes.icon} />    {item.thongtincongty.loaihinhkinhdoanh}</Grid.Col>
                </Grid>
              </div>
            </Group>

          </div>
          </Grid.Col>
          </Grid>

      <Grid>
        <Grid.Col span={12}>
        <div className='danh-sach-vi-tri'>
          {item.vitriungtuyen.slice(0, limit[i]).map((i: any, index: number) => {
            console.log('[]', limit[i]);
            return (
              <Grid key={index} columns={60}>
                <Grid.Col span={3}>
                  <Heart
                    size={17}
                    color={'black'}
                  />
                </Grid.Col>
                <Grid.Col span={35}>
                  <Link
                    href={{
                      pathname: '/thuctap/nguoiungtuyen/components/detail',
                    }}
                  >
                    <a className={classes.link} onClick={() => setOpened(true)}>{i.tenvitri}</a>
                  </Link>
                </Grid.Col>
                <Grid.Col span={10}>
                  <FontAwesomeIcon icon={ClockSolidIcon} />  {i.mucluong}
                </Grid.Col>
                <Grid.Col span={10}>
                  <FontAwesomeIcon icon={MoneySolidIcon} />  {i.ngay}
                </Grid.Col>
              </Grid>
            )
          })}
          <Center>
            <Button
              variant="subtle"
              radius="xl"
              className={classes.xemthem}
              onClick={() => updateLimit(i)}>
              <ChevronDown size={18} />
            </Button>
          </Center>
        </div>
        </Grid.Col>
        </Grid>
      {/* </List.Item> */}
      </>
    );
  }
  return (
    <div>
      <Container size={'md'}>
        {/* <Center> */}
          {/* <List
            icon={<></>}
            
            // spacing="md"
            // style={{ width: '100%' }}  
          > */}
            {
              data && data.map((item, index) => itemview(item, index))
            }
          {/* </List> */}
        {/* </Center> */}
      </Container>
    </div>
  );
}
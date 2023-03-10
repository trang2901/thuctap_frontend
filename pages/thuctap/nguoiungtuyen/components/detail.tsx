import React, { useState } from 'react';
import { createStyles, Select, TextInput, Checkbox, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Modal, Paper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrandMessenger, Clock, Coin, Heart, Message2 } from 'tabler-icons-react';
import Link from 'next/link';
import Headertt from './Headertt';
import Footertt from './Footertt';
import Nophoso from './nophoso'
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
import Layout from "../../../../layouts";
// library.add(far)
// const heartRegularIcon: IconDefinition= findIconDefinition({prefix:'far', iconName:'heart'})
const MoneySolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'money-bill-1-wave' })
const ClockSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'clock' })
const PlusSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'square-plus' })
const ArrowSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'arrow-trend-up' })
const SackSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'sack-dollar' })
const HeartSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'heart' })
const ShirtSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'shirt' })
const EyeSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'eye-dropper' })
const HeartPSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'heart-pulse' })
const GraduationSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'graduation-cap' })
const GlobeSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'globe' })
const ArrowSSolidIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'arrow-up-right-from-square' })
const Location: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'location-dot' })

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    
  },

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
  logo: {
    width: '110px',
    height: '110px',

  },
  tenvitri: {
    color: 'SteelBlue',
    fontStyle: 'normal',
    fontWeight: 'bold',

  },
  tencongty: {
    color: 'black',
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  diachicongty: {
    color: 'gray'
  },
  logo_xacthuc: {
    width: '100px',
    height: '100px',
  },
  container: {
   display: 'grid',
  },
 
  text_thongtincongty: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  link: {
    color: 'SteelBlue',
    fontStyle: 'normal',

    textDecoration: 'none'
  },
  vitrituyendung: {
    fontSize: 12
  },
  diachi: {
    fontSize: 12
  },
  nophoso: {
    color: 'black',
    textDecoration: 'none'
  },
  
  
}));
const data =
{
  "thongtinvitri": {
    "tenvitri": "T??i X??? (Ch??? L??nh ?????o)",
    "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
    "diachicongty": "139, Tr???n H??ng ?????o, Ph?????ng An Ph??, Qu???n Ninh Ki???u, C???n Th??, Vietnam",
    "mucluong": "Th???a thu???n",
    "hannophoso": "30-5-2022",
    "linkcongty": "https://datxanhmientay.net",
    "logo": "https://sanvieclamcantho.com/upload/imagelogo/cty-cp-bds-can-tho---dat-xanh-mien-tay1609301614.jpg",
    "motacongviec": "- ????a ????n c???p l??nh ?????o c???a C??ng ty.\n- Ch???u tr??ch nhi???m b???o qu???n, v??? sinh xe; b???o h??nh, b???o d?????ng, s???a ch???a theo ?????nh k??? ho???c ph??t sinh; ????ng ki???m & ????ng k?? xe theo quy ?????nh. \n- Th???c hi???n c??c c??ng vi???c kh??c theo y??u c???u c???a Ban Gi??m ?????c ho???c Ph??ng HCNS.",
    "yeucaucongviec": "- Nam, c?? kinh nghi???m l??i xe ??t nh???t 01 n??m. \n- C?? b???ng l??i xe B1,2.\n- Chuy??n nghi???p, trung th???c, c???n th???n, l???ch thi???p.\n- Th??nh th???o b???n ????? c??c t???nh ?????ng B???ng SCL.\n- Tu???i: 22 -32",
    "quyenloiduochuong": {
      "chitiet": " - L????ng m???i th??ng + L????ng th??ng 13 ++.\n - Lu??n chi l????ng ????ng h???n(ch???m nh???t ng??y 05 h??ng th??ng).\n - Th?????ng theo quy ?????nh c??ng ty, th?????ng l???/ t???t, qu?? t???ng c??c d???p ?????c bi???t..\n - C?? h???i ph??t tri???n ngh??? nghi???p, ti??u ch?? v?? l??? tr??nh ????nh gi?? t??ng l????ng, th??ng b???c r?? r??ng (1-2 l???n/n??m)",
      "ql_1": "Ch??? ????? b???o hi???m",
      "ql_2": "T??ng l????ng",
      "ql_3": "Ph??? c???p",
      "ql_4": "Ch??m s??c s???c kh???e",
      "ql_5": "Ngh??? ph??p n??m",
      "ql_6": "Ch??? ????? th?????ng",
      "ql_7": "?????ng ph???c",
      "ql_8": "????o t???o"
    },
  },
  "vitrikhac": [
    {
      "tenvitri": "Chuy??n Vi??n T?? V???n B???t ?????ng S???n (L????ng 7 -15 tri???u)",
      "mucluong": "Tr??n 30 tri???u",
      "diachi": "C???n Th??, C?? Mau",
      "ngay": "31/05/2022",
      "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
    },
    {
      "tenvitri": "Nh??n Vi??n PG/L??? T??n",
      "mucluong": "7-10 tri???u",
      "diachi": "C???n Th??",
      "ngay": "15/06/2022",
      "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
    },
    {
      "tenvitri": "Tr?????ng Ph??ng B??n H??ng",
      "mucluong": "Th???a thu???n",
      "diachi": "C???n Th??, B???c Li??u, C?? Mau",
      "ngay": "31/05/2022",
      "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
    }
  ]
};
ContainedInputs.getLayout = function getLayout(page: any) {
  return <Layout variant="main">
    {page}
  </Layout>;
};
export default function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const itemview = (item: any) => {
    return (
      <div>
       
        <Container className={classes.container} >
          <Grid columns={260}>
            <Grid.Col span={30} style={{ minHeight: 30 }}>
              <div className='logo_1'>
                <Image
                  src={item.thongtinvitri.logo}
                  alt="ISO logo"
                />
              </div>
            </Grid.Col>

            <Grid.Col span={180}>
              <div className='tenvitri'>
                {item.thongtinvitri.tenvitri}
              </div>
              <div className='tencongty'>
                {item.thongtinvitri.tencongty}
              </div>
              <div className='diachicongty'>
                {item.thongtinvitri.diachicongty}
              </div>
              
              <Grid>
                <Grid.Col span={5} className='mucluong'>
                  <FontAwesomeIcon icon={MoneySolidIcon}/>{" "}
                      M???c l????ng: {item.thongtinvitri.mucluong}</Grid.Col>
                <Grid.Col span={5} className='hannophoso'>
                  <FontAwesomeIcon icon={ClockSolidIcon}/>{" "}
                      H???n n???p h??? s??: {item.thongtinvitri.hannophoso}
                </Grid.Col>
              </Grid>
            </Grid.Col>
           

            <Grid.Col span={50} style={{ textAlign: 'right' }} >
              <Stack spacing="sm">
                <Button radius={0} color='orange' onClick={() => setOpened(true)}>
                  N???p h??? s??
                </Button>
                <Button variant="outline" radius={0} color="dark">
                  <Heart
                    size={17}
                  />{"  "}
                  L??u tin
                </Button>
                <Button variant="outline" radius={0} color="dark">
                  <Message2
                    size={17}
                    strokeWidth={2}
                    color={'black'}
                  />{"  "}Nh???n tin
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider my="sm" />
        </Container>
     
        <Container className={classes.container}>
          <Divider my="sm" />
          <Grid columns={260}>
            <Grid.Col span={170}>
              <Stack >
                <Tabs>
                  <Tabs.Tab label="M?? t??? c??ng vi???c" className='left'>
                    
                    <Textarea
                      autosize
                      readOnly
                      value={item.thongtinvitri.motacongviec}
                      variant='unstyled'
                      style={{ overflow: 'hidden'}} 
                    />
                   
                  </Tabs.Tab>
                </Tabs>
                <Tabs>
                  <Tabs.Tab label="Y??u c???u c??ng vi???c" className='left'>
                    <Textarea
                      autosize
                      readOnly
                      value={item.thongtinvitri.yeucaucongviec}
                      variant='unstyled'
                      style={{ overflow: 'hidden' }}
                    />
                  </Tabs.Tab>
                </Tabs>
                <Tabs>
                  <Tabs.Tab label="Quy???n l???i ???????c h?????ng" className='left'>
                    <div>
                      <Grid>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item><FontAwesomeIcon icon={PlusSolidIcon}/>{" "}{item.thongtinvitri.quyenloiduochuong.ql_1}</List.Item>
                            <List.Item><FontAwesomeIcon icon={ArrowSSolidIcon}/> {" "}{item.thongtinvitri.quyenloiduochuong.ql_2}</List.Item>
                            <List.Item><FontAwesomeIcon icon={SackSolidIcon}/>{" "}{item.thongtinvitri.quyenloiduochuong.ql_3}</List.Item>
                          </List>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item><FontAwesomeIcon icon={HeartSolidIcon} />{" "}{item.thongtinvitri.quyenloiduochuong.ql_4}</List.Item>
                            <List.Item><FontAwesomeIcon icon={EyeSolidIcon} />{" "}{item.thongtinvitri.quyenloiduochuong.ql_5}</List.Item>
                            <List.Item><FontAwesomeIcon icon={HeartPSolidIcon} />{" "}{item.thongtinvitri.quyenloiduochuong.ql_6}</List.Item>
                          </List>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item><FontAwesomeIcon icon={ShirtSolidIcon} />{" "}{item.thongtinvitri.quyenloiduochuong.ql_7}</List.Item>
                            <List.Item><FontAwesomeIcon icon={GraduationSolidIcon} />{" "}{item.thongtinvitri.quyenloiduochuong.ql_8}</List.Item>
                          </List>
                        </Grid.Col></Grid>
                    </div>
                    <Textarea
                      autosize
                      readOnly
                      value={item.thongtinvitri.quyenloiduochuong.chitiet}
                      variant='unstyled'
                      style={{ overflow: 'hidden' }}
                    />
                  </Tabs.Tab>
                </Tabs>
              </Stack>
            </Grid.Col>
            <Grid.Col span={90}>
              <Stack>
                <div>
                  <Text className={classes.text_thongtincongty}>TH??NG TIN C??NG TY</Text>
                  <Divider my="sm" />
                  <div><FontAwesomeIcon icon={Location}/> {" "}{item.thongtinvitri.diachicongty}</div>
                  <div>
                    <FontAwesomeIcon icon={GlobeSolidIcon} />{" "}
                    <Link
                      href={{
                        pathname: 'https://datxanhmientay.net',
                      }}
                    >
                      <a className={classes.link}>{item.thongtinvitri.linkcongty}</a>
                    </Link>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={ArrowSSolidIcon} />{" "}
                    <Link
                      href={{
                        pathname: 'https://datxanhmientay.net',
                      }}
                    >
                      <a className={classes.link}>  Xem chi ti???t C??ng ty</a>
                    </Link>
                  </div>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src="https://maps.google.com/maps?q=10.033748,105.779602&hl=es;z=14&amp;output=embed"
                      title="Google map"
                      frameBorder="0"
                    />
                  </AspectRatio>
                </div>
                <div>
                  <Text className={classes.text_thongtincongty}>V??? TR?? TUY???N D???NG</Text>
                  <Divider my="sm" />

                  {item.vitrikhac.map((i: any, index: number) => {
                    return (
                      <List
                        key={index}
                        icon={<></>}>
                        <div className={classes.vitrituyendung}>
                          <List.Item>
                            <Text lineClamp={1} className={classes.tenvitri}>{i.tenvitri}</Text>
                            <Text>{i.tencongty}</Text>
                            <Grid>
                              <Grid.Col span={4}> <FontAwesomeIcon icon={MoneySolidIcon} /> {" "}{i.mucluong}
                              </Grid.Col>
                              <Grid.Col span={4}>

                                <Text lineClamp={1} className={classes.diachi}><FontAwesomeIcon icon={ClockSolidIcon} />{" "} {i.diachi}</Text>
                              </Grid.Col>
                              <Grid.Col span={4}>
                                <FontAwesomeIcon icon={ClockSolidIcon} />{" "}
                                {i.ngay}
                              </Grid.Col>
                            </Grid>

                          </List.Item>
                        </div>
                        <Divider my="sm" />
                      </List>
                    )

                  })}
                </div>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>

        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          size="70%"
          closeOnEscape={false}
          closeOnClickOutside={false}
          
        >
          <Nophoso />
        </Modal>
      </div>

    );
  }
  return (
    <div>
      
      {
        data && itemview(data)
      }
     
    </div>
  );
}
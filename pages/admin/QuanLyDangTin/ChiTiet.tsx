import React from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';
//icon
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Clock, Clock2, Coin, Heart, MapPin, Message2 } from 'tabler-icons-react';
import Link from 'next/link';
import {
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false
library.add(fas)

// library.add(far)
// const heartRegularIcon: IconDefinition= findIconDefinition({prefix:'far', iconName:'heart'})
const MoneySolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'money-bill-1-wave'})
const ClockSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'clock'})
const PlusSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'square-plus'})
const ArrowSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'arrow-trend-up'})
const SackSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'sack-dollar'})
const HeartSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'heart'})
const ShirtSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'shirt'})
const EyeSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'eye-dropper'})
const HeartPSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'heart-pulse'})
const GraduationSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'graduation-cap'})
const GlobeSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'globe'})
const ArrowSSolidIcon: IconDefinition= findIconDefinition({prefix:'fas', iconName:'arrow-up-right-from-square'})


// khai b??o icon ??? ????y h???t
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
    width: '100px',
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

  },
  dt_trai: {

  },
  dt_phai: {

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
  nophoso:{
    color: 'black',
    textDecoration: 'none'
  }
}));
const data = [
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
  }
]
export default function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const router = useRouter()
  const itemview = (item:any) => {
    return (
      <div className='thongtin'>
        <Container  >
          <Grid columns={260}>
            <Grid.Col span={30} style={{ minHeight: 30 }}>
              <div className={classes.logo}>
                <Image
                  src={item.thongtinvitri.logo}
                  alt="ISO logo"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={160}>
              <div className={classes.tenvitri}>
                {item.thongtinvitri.tenvitri}
              </div>
              <div className={classes.tencongty}>
                {item.thongtinvitri.tencongty}
              </div>
              <div className={classes.diachicongty}>
                {item.thongtinvitri.diachicongty}
              </div>
              <Grid>
                <Grid.Col span={5}>
                <FontAwesomeIcon icon={MoneySolidIcon}/>
                  {/* <FontAwesomeIcon icon="fa-solid fa-money-bill-1-wave" /> */}
                  M???c l????ng: {item.thongtinvitri.mucluong}</Grid.Col>
                <Grid.Col span={5}>
                  <FontAwesomeIcon icon={ClockSolidIcon} />
                  H???n n???p h??? s??: {item.thongtinvitri.hannophoso}
                </Grid.Col>
              </Grid>
            </Grid.Col>
            {/* <Grid.Col span={30}>
              <div className={classes.logo_xacthuc}>
                <Image
                  src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/284017108_1711713459178330_4489200117081093740_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VA6VF9olQ54AX9g93D-&_nc_ht=scontent.fsgn5-13.fna&oh=03_AVI-qLgr0bR_eoXis56Yx69c2pihc3Gz88rDbfkPpRXf2A&oe=62BBE579"
                  alt="ISO logo"
                 //width={100}

                  radius={50}
                />
              </div>
            </Grid.Col> */}
            <Grid.Col span={40}>
              <Stack>
                <Button radius={0} color='orange'>
                <Link
                        href={{
                          pathname: ' ',
                        }}

                      >
                        <a className={classes.nophoso}>N???p h??? s??</a>
                      </Link>
                </Button >
                <Button variant="outline" radius={0} color="dark">
                  <Heart
                    size={17}
                  />
                  L??u tin
                </Button>
                <Button variant="outline" radius={0} color="dark">
                  <Message2 size={17}/>
                    Nh???n tin
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider my="sm" />
        </Container>

        <Container className={classes.container}>
          <Divider my="sm" />
          <Grid columns={260}>
            <Grid.Col span={170} className={classes.dt_trai}>
              <Stack >
                <Tabs>
                  <Tabs.Tab label="M?? t??? c??ng vi???c">
                    <Textarea
                      autosize
                      readOnly
                      value={item.thongtinvitri.motacongviec}
                      variant='unstyled'
                      style={{ overflow: 'hidden' }}
                    />

                  </Tabs.Tab>
                </Tabs>
                <Tabs>
                  <Tabs.Tab label="Y??u c???u c??ng vi???c">
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
                  <Tabs.Tab label="Quy???n l???i ???????c h?????ng">
                    <div>
                      <Grid>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item>
                              <FontAwesomeIcon icon={PlusSolidIcon} />
                             {item.thongtinvitri.quyenloiduochuong.ql_1}</List.Item>
                            <List.Item>
                              <FontAwesomeIcon icon={ArrowSolidIcon} /> 
                             {item.thongtinvitri.quyenloiduochuong.ql_2}</List.Item>
                            <List.Item>
                              <FontAwesomeIcon icon={SackSolidIcon} /> 
                              {item.thongtinvitri.quyenloiduochuong.ql_3}</List.Item>
                          </List>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item>
                              <FontAwesomeIcon icon={HeartSolidIcon} />
                              {item.thongtinvitri.quyenloiduochuong.ql_4}
                              </List.Item>
                            <List.Item>
                              <FontAwesomeIcon icon={EyeSolidIcon} />
                              {item.thongtinvitri.quyenloiduochuong.ql_5}</List.Item>
                            <List.Item>
                              <FontAwesomeIcon icon={HeartPSolidIcon} />
                              {item.thongtinvitri.quyenloiduochuong.ql_6}</List.Item>
                          </List>
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <List
                            icon={<></>}
                          >
                            <List.Item><FontAwesomeIcon icon={ShirtSolidIcon} />{item.thongtinvitri.quyenloiduochuong.ql_7}</List.Item>
                            <List.Item><FontAwesomeIcon icon={GraduationSolidIcon} />{item.thongtinvitri.quyenloiduochuong.ql_8}</List.Item>
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
            <Grid.Col span={90} className={classes.dt_phai} >
              <Stack>
                <div>
                  <Text className={classes.text_thongtincongty}>TH??NG TIN C??NG TY</Text>
                  <Divider my="sm" />
                  <div>
                  <MapPin/>
                   {item.thongtinvitri.diachicongty}</div>
                  <div>
                    <FontAwesomeIcon icon={GlobeSolidIcon} />
                    <Link
                      href={{
                        pathname: 'https://datxanhmientay.net',
                      }}
                    >
                      <a className={classes.link}> {item.thongtinvitri.linkcongty}</a>
                    </Link>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={ArrowSSolidIcon} /><Link
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

                  {item.vitrikhac.map((i:any, index: number) => {
                    return (
                      <List key={index}
                        icon={<></>}>
                        <div className={classes.vitrituyendung}>
                          <List.Item>

                            <Text lineClamp={1} className={classes.tenvitri}>{i.tenvitri}</Text>
                            <Text>{i.tencongty}</Text>
                            <Grid>
                              <Grid.Col span={4}> <FontAwesomeIcon icon={MoneySolidIcon} />  {i.mucluong}
                              </Grid.Col>
                              <Grid.Col span={4}>

                                <Text lineClamp={1} className={classes.diachi}><FontAwesomeIcon icon={ClockSolidIcon} /> {i.diachi}</Text>
                              </Grid.Col>
                              <Grid.Col span={4}>
                                <FontAwesomeIcon icon={ClockSolidIcon} />
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
      </div>

    );
  }
  return (
    <div>
      
      {
        data && data.map((item) => itemview(item))
      }
      
    </div>
  );
}
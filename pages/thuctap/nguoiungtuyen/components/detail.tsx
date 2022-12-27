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
    "tenvitri": "Tài Xế (Chở Lãnh Đạo)",
    "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
    "diachicongty": "139, Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, Cần Thơ, Vietnam",
    "mucluong": "Thỏa thuận",
    "hannophoso": "30-5-2022",
    "linkcongty": "https://datxanhmientay.net",
    "logo": "https://sanvieclamcantho.com/upload/imagelogo/cty-cp-bds-can-tho---dat-xanh-mien-tay1609301614.jpg",
    "motacongviec": "- Đưa đón cấp lãnh đạo của Công ty.\n- Chịu trách nhiệm bảo quản, vệ sinh xe; bảo hành, bảo dưỡng, sửa chữa theo định kỳ hoặc phát sinh; đăng kiểm & đăng ký xe theo quy định. \n- Thực hiện các công việc khác theo yêu cầu của Ban Giám đốc hoặc Phòng HCNS.",
    "yeucaucongviec": "- Nam, có kinh nghiệm lái xe ít nhất 01 năm. \n- Có bằng lái xe B1,2.\n- Chuyên nghiệp, trung thực, cẩn thận, lịch thiệp.\n- Thành thạo bản đồ các tỉnh Đồng Bằng SCL.\n- Tuổi: 22 -32",
    "quyenloiduochuong": {
      "chitiet": " - Lương mỗi tháng + Lương tháng 13 ++.\n - Luôn chi lương đúng hạn(chậm nhất ngày 05 hàng tháng).\n - Thưởng theo quy định công ty, thưởng lễ/ tết, quà tặng các dịp đặc biệt..\n - Cơ hội phát triển nghề nghiệp, tiêu chí và lộ trình đánh giá tăng lương, thăng bậc rõ ràng (1-2 lần/năm)",
      "ql_1": "Chế độ bảo hiểm",
      "ql_2": "Tăng lương",
      "ql_3": "Phụ cấp",
      "ql_4": "Chăm sóc sức khỏe",
      "ql_5": "Nghỉ phép năm",
      "ql_6": "Chế độ thưởng",
      "ql_7": "Đồng phục",
      "ql_8": "Đào tạo"
    },
  },
  "vitrikhac": [
    {
      "tenvitri": "Chuyên Viên Tư Vấn Bất Động Sản (Lương 7 -15 triệu)",
      "mucluong": "Trên 30 triệu",
      "diachi": "Cần Thơ, Cà Mau",
      "ngay": "31/05/2022",
      "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
    },
    {
      "tenvitri": "Nhân Viên PG/Lễ Tân",
      "mucluong": "7-10 triệu",
      "diachi": "Cần Thơ",
      "ngay": "15/06/2022",
      "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
    },
    {
      "tenvitri": "Trưởng Phòng Bán Hàng",
      "mucluong": "Thỏa thuận",
      "diachi": "Cần Thơ, Bạc Liêu, Cà Mau",
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
                      Mức lương: {item.thongtinvitri.mucluong}</Grid.Col>
                <Grid.Col span={5} className='hannophoso'>
                  <FontAwesomeIcon icon={ClockSolidIcon}/>{" "}
                      Hạn nộp hồ sơ: {item.thongtinvitri.hannophoso}
                </Grid.Col>
              </Grid>
            </Grid.Col>
           

            <Grid.Col span={50} style={{ textAlign: 'right' }} >
              <Stack spacing="sm">
                <Button radius={0} color='orange' onClick={() => setOpened(true)}>
                  Nộp hồ sơ
                </Button>
                <Button variant="outline" radius={0} color="dark">
                  <Heart
                    size={17}
                  />{"  "}
                  Lưu tin
                </Button>
                <Button variant="outline" radius={0} color="dark">
                  <Message2
                    size={17}
                    strokeWidth={2}
                    color={'black'}
                  />{"  "}Nhắn tin
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
                  <Tabs.Tab label="Mô tả công việc" className='left'>
                    
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
                  <Tabs.Tab label="Yêu cầu công việc" className='left'>
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
                  <Tabs.Tab label="Quyền lợi được hưởng" className='left'>
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
                  <Text className={classes.text_thongtincongty}>THÔNG TIN CÔNG TY</Text>
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
                      <a className={classes.link}>  Xem chi tiết Công ty</a>
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
                  <Text className={classes.text_thongtincongty}>VỊ TRÍ TUYỂN DỤNG</Text>
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
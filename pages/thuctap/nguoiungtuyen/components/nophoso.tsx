import React, { useState } from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper, useMantineTheme } from '@mantine/core';
// import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';
// import Headertt from './Headertt';
// import Footertt from './Footertt';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Clock, Coin, Heart } from 'tabler-icons-react';
// import Link from 'next/link';
// import GridTTCN from './gridTTCN';
// import GridTTGD from './gridTTGD';
// import TableTT from './TableTT';
import TabBuoc1 from './TabBuoc1';
import TabBuoc2 from './TabBuoc2';
import TabBuoc3 from './TabBuoc3';
import TabBuoc4 from './TabBuoc4';
import TabSub from './TabSub';

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
    container1: {

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
    nophoso: {
        color: 'black',
        textDecoration: 'none'
    },
    title: {
        fontSize: 30
        ,
        marginTop:-45,
        marginLeft: -35
    },
    tab: {
        width: 200,
        height: 60

    },

}));
// const data = 
//     {
//         "thongtinvitri": {
//             "tenvitri": "Tài Xế (Chở Lãnh Đạo)",
//             "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
//             "diachicongty": "139, Trần Hưng Đạo, Phường An Phú, Quận Ninh Kiều, Cần Thơ, Vietnam",
//             "mucluong": "Thỏa thuận",
//             "hannophoso": "30-5-2022",
//             "linkcongty": "https://datxanhmientay.net",
//             "logo": "https://sanvieclamcantho.com/upload/imagelogo/cty-cp-bds-can-tho---dat-xanh-mien-tay1609301614.jpg",
//             "motacongviec": "- Đưa đón cấp lãnh đạo của Công ty.\n- Chịu trách nhiệm bảo quản, vệ sinh xe; bảo hành, bảo dưỡng, sửa chữa theo định kỳ hoặc phát sinh; đăng kiểm & đăng ký xe theo quy định. \n- Thực hiện các công việc khác theo yêu cầu của Ban Giám đốc hoặc Phòng HCNS.",
//             "yeucaucongviec": "- Nam, có kinh nghiệm lái xe ít nhất 01 năm. \n- Có bằng lái xe B1,2.\n- Chuyên nghiệp, trung thực, cẩn thận, lịch thiệp.\n- Thành thạo bản đồ các tỉnh Đồng Bằng SCL.\n- Tuổi: 22 -32",
//             "quyenloiduochuong": {
//                 "chitiet": " - Lương mỗi tháng + Lương tháng 13 ++.\n - Luôn chi lương đúng hạn(chậm nhất ngày 05 hàng tháng).\n - Thưởng theo quy định công ty, thưởng lễ/ tết, quà tặng các dịp đặc biệt..\n - Cơ hội phát triển nghề nghiệp, tiêu chí và lộ trình đánh giá tăng lương, thăng bậc rõ ràng (1-2 lần/năm)",
//                 "ql_1": "Chế độ bảo hiểm",
//                 "ql_2": "Tăng lương",
//                 "ql_3": "Phụ cấp",
//                 "ql_4": "Chăm sóc sức khỏe",
//                 "ql_5": "Nghỉ phép năm",
//                 "ql_6": "Chế độ thưởng",
//                 "ql_7": "Đồng phục",
//                 "ql_8": "Đào tạo"
//             },
//         },
//         "vitrikhac": [
//             {
//                 "tenvitri": "Chuyên Viên Tư Vấn Bất Động Sản (Lương 7 -15 triệu)",
//                 "mucluong": "Trên 30 triệu",
//                 "diachi": "Cần Thơ, Cà Mau",
//                 "ngay": "31/05/2022",
//                 "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
//             },
//             {
//                 "tenvitri": "Nhân Viên PG/Lễ Tân",
//                 "mucluong": "7-10 triệu",
//                 "diachi": "Cần Thơ",
//                 "ngay": "15/06/2022",
//                 "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
//             },
//             {
//                 "tenvitri": "Trưởng Phòng Bán Hàng",
//                 "mucluong": "Thỏa thuận",
//                 "diachi": "Cần Thơ, Bạc Liêu, Cà Mau",
//                 "ngay": "31/05/2022",
//                 "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
//             }
//         ]
//     }

export default function ContainedInputs() {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const { classes } = useStyles();
    const router = useRouter();
    const [active, setActive] = useState(0);
    const theme = useMantineTheme();
   
        return (
            <div>
                <Container>
                    <Text className={classes.title}>NỘP HỒ SƠ ỨNG TUYỂN</Text>
                    <Divider my="sm" variant="dashed" color={'dark'} style={{marginLeft: -35, marginRight: -35}} />
                    <Paper  radius="xs" p="xl" withBorder style={{marginLeft: -35, marginRight: -35}}>

                        <Tabs active={active} onTabChange={(tabIndex)=> {tabIndex < active && setActive(tabIndex)}} >
                            <Tabs.Tab label={<TabSub color={active == 0 ? theme.colors.blue[7]:theme.colors.green[7]} label="BƯỚC 1" subTitle="THÔNG TIN CÁ NHÂN CHUNG" />} className={classes.tab}>
                                <TabBuoc1 onClickNext={setActive}/>
                            </Tabs.Tab>

                            <Tabs.Tab label={<TabSub color={active == 1 ? theme.colors.blue[7]:theme.colors.green[7]} label="BƯỚC 2" subTitle="QUÁ TRÌNH HỌC VÀ BỒI DƯỠNG" />} className={classes.tab}>
                               <TabBuoc2 onClickNext={setActive} />
                            </Tabs.Tab>
                            <Tabs.Tab label={<TabSub color={active == 2 ? theme.colors.blue[7]:theme.colors.green[7]} label="BƯỚC 3" subTitle="QUÁ TRÌNH CÔNG TÁC" />} className={classes.tab}>
                                <TabBuoc3 onClickNext={setActive} />
                            </Tabs.Tab>
                            
                            <Tabs.Tab label={<TabSub color={active == 3 ? theme.colors.blue[7]:theme.colors.green[7]} label="BƯỚC 4" subTitle="QUAN ĐIỂM VÀ KỸ NĂNG CÁ NHÂN" />} className={classes.tab}>
                                <TabBuoc4 onClickNext={setActive}/>
                            </Tabs.Tab>
                        </Tabs>

                    </Paper>
                </Container>
            </div>
        );
}
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
//             "tenvitri": "T??i X??? (Ch??? L??nh ?????o)",
//             "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY",
//             "diachicongty": "139, Tr???n H??ng ?????o, Ph?????ng An Ph??, Qu???n Ninh Ki???u, C???n Th??, Vietnam",
//             "mucluong": "Th???a thu???n",
//             "hannophoso": "30-5-2022",
//             "linkcongty": "https://datxanhmientay.net",
//             "logo": "https://sanvieclamcantho.com/upload/imagelogo/cty-cp-bds-can-tho---dat-xanh-mien-tay1609301614.jpg",
//             "motacongviec": "- ????a ????n c???p l??nh ?????o c???a C??ng ty.\n- Ch???u tr??ch nhi???m b???o qu???n, v??? sinh xe; b???o h??nh, b???o d?????ng, s???a ch???a theo ?????nh k??? ho???c ph??t sinh; ????ng ki???m & ????ng k?? xe theo quy ?????nh. \n- Th???c hi???n c??c c??ng vi???c kh??c theo y??u c???u c???a Ban Gi??m ?????c ho???c Ph??ng HCNS.",
//             "yeucaucongviec": "- Nam, c?? kinh nghi???m l??i xe ??t nh???t 01 n??m. \n- C?? b???ng l??i xe B1,2.\n- Chuy??n nghi???p, trung th???c, c???n th???n, l???ch thi???p.\n- Th??nh th???o b???n ????? c??c t???nh ?????ng B???ng SCL.\n- Tu???i: 22 -32",
//             "quyenloiduochuong": {
//                 "chitiet": " - L????ng m???i th??ng + L????ng th??ng 13 ++.\n - Lu??n chi l????ng ????ng h???n(ch???m nh???t ng??y 05 h??ng th??ng).\n - Th?????ng theo quy ?????nh c??ng ty, th?????ng l???/ t???t, qu?? t???ng c??c d???p ?????c bi???t..\n - C?? h???i ph??t tri???n ngh??? nghi???p, ti??u ch?? v?? l??? tr??nh ????nh gi?? t??ng l????ng, th??ng b???c r?? r??ng (1-2 l???n/n??m)",
//                 "ql_1": "Ch??? ????? b???o hi???m",
//                 "ql_2": "T??ng l????ng",
//                 "ql_3": "Ph??? c???p",
//                 "ql_4": "Ch??m s??c s???c kh???e",
//                 "ql_5": "Ngh??? ph??p n??m",
//                 "ql_6": "Ch??? ????? th?????ng",
//                 "ql_7": "?????ng ph???c",
//                 "ql_8": "????o t???o"
//             },
//         },
//         "vitrikhac": [
//             {
//                 "tenvitri": "Chuy??n Vi??n T?? V???n B???t ?????ng S???n (L????ng 7 -15 tri???u)",
//                 "mucluong": "Tr??n 30 tri???u",
//                 "diachi": "C???n Th??, C?? Mau",
//                 "ngay": "31/05/2022",
//                 "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
//             },
//             {
//                 "tenvitri": "Nh??n Vi??n PG/L??? T??n",
//                 "mucluong": "7-10 tri???u",
//                 "diachi": "C???n Th??",
//                 "ngay": "15/06/2022",
//                 "tencongty": "DAT XANH MIEN TAY SERVICES AND INVESTMENT JOINT STOCK COMPANY"
//             },
//             {
//                 "tenvitri": "Tr?????ng Ph??ng B??n H??ng",
//                 "mucluong": "Th???a thu???n",
//                 "diachi": "C???n Th??, B???c Li??u, C?? Mau",
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
                    <Text className={classes.title}>N???P H??? S?? ???NG TUY???N</Text>
                    <Divider my="sm" variant="dashed" color={'dark'} style={{marginLeft: -35, marginRight: -35}} />
                    <Paper  radius="xs" p="xl" withBorder style={{marginLeft: -35, marginRight: -35}}>

                        <Tabs active={active} onTabChange={(tabIndex)=> {tabIndex < active && setActive(tabIndex)}} >
                            <Tabs.Tab label={<TabSub color={active == 0 ? theme.colors.blue[7]:theme.colors.green[7]} label="B?????C 1" subTitle="TH??NG TIN C?? NH??N CHUNG" />} className={classes.tab}>
                                <TabBuoc1 onClickNext={setActive}/>
                            </Tabs.Tab>

                            <Tabs.Tab label={<TabSub color={active == 1 ? theme.colors.blue[7]:theme.colors.green[7]} label="B?????C 2" subTitle="QU?? TR??NH H???C V?? B???I D?????NG" />} className={classes.tab}>
                               <TabBuoc2 onClickNext={setActive} />
                            </Tabs.Tab>
                            <Tabs.Tab label={<TabSub color={active == 2 ? theme.colors.blue[7]:theme.colors.green[7]} label="B?????C 3" subTitle="QU?? TR??NH C??NG T??C" />} className={classes.tab}>
                                <TabBuoc3 onClickNext={setActive} />
                            </Tabs.Tab>
                            
                            <Tabs.Tab label={<TabSub color={active == 3 ? theme.colors.blue[7]:theme.colors.green[7]} label="B?????C 4" subTitle="QUAN ??I???M V?? K??? N??NG C?? NH??N" />} className={classes.tab}>
                                <TabBuoc4 onClickNext={setActive}/>
                            </Tabs.Tab>
                        </Tabs>

                    </Paper>
                </Container>
            </div>
        );
}
import React, { useState } from 'react';
import { createStyles, Text, Divider, Grid, Space } from '@mantine/core';
import GirdTTCB from 'components/GirdTTCB'

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
        //

    },
    input: {
        height: 'auto',
        paddingTop: 18,
    },
    text: {
        marginLeft: 200,
        marginTop: 70,

    },
    title: {
        color: 'blue',
        fontSize: theme.fontSizes.xl,
        zIndex: 1,
    },
    title1: {
        color: 'blue',
        fontSize: theme.fontSizes.lg,
        zIndex: 2,
        fontWeight: 'bold'
        // marginLeft:20,
    },
    label: {
        position: 'absolute',
        pointerEvents: 'none',
        color: 'Blue',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
    container: {

    }
}));
const data = [
    {
        thongtincobanungvien: {
            name: "Nguyễn Văn A",
            email: "mail1@gmail.com",
            sodienthoai: "0121212121",
            ngaysinh: '19/06/2000',
            web: 'fb.com/userName',
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
        kynang: "Áp dụng những kiến thức kỹ năng lập trình và sự hiểu biết về internet để trở thành một lập trình viên chuyên nghiệp, mang đến nhiều giá trị cho người dùng, Từ đó giúp công ty tăng số lượng khách hàng và mở rộng hơn nữa.",
        kinhnghiem: "Lập trình viên tại NT 2020-2021)",
        trinhdo: "Tốt nghiệp chuyên ngành công nghệ thông tin",
        chungchi: ' 2014: Giải nhất cuộc thi lập trình'
    }
]



export default function ChiTietHoSo() {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    return (
        <div>
            {/* <Text className={classes.title}>
                {data && data.map((item) => item.thongtincobanungvien.name)}
            </Text>
            < Text className={classes.title1}>
                {data && data.map((item) => item.vitriungtuyen.map((i) => i.tenvitri1))}
            </Text> */}
            {/* <br /><br /> */}
            <GirdTTCB />

            <Grid>
                <Grid.Col span={8} className={'text'}>
                    <Text className={classes.title1} >
                        KỸ NĂNG
                    </Text>
                    <Divider size={'sm'}
                        color={'blue'} />
                        <Text  className={'text'}>
                    {data && data.map((item) => item.kynang)}
                    </Text>
                    <Space h={'lg'}/>
                    <Text className={classes.title1} >
                        KINH NGHIỆM LÀM VIỆC
                    </Text>
                    <Divider size={'sm'}
                        color={'blue'} />
                    {data && data.map((item) => item.kinhnghiem)}

                </Grid.Col>
                <Grid.Col span={4}>
                    <Text className={classes.title1} >
                        HỌC VẤN
                    </Text>

                    <Divider size={'sm'}
                        color={'blue'} />
                    {data && data.map((item) => item.trinhdo)}
                    <Space h={'lg'}/>

                    <Text className={classes.title1} >
                        CHỨNG CHỈ
                    </Text>
                    <Divider size={'sm'}
                        color={'blue'} />
                    {data && data.map((item) => item.chungchi)}

                </Grid.Col>
            </Grid>
        </div>
    );
}
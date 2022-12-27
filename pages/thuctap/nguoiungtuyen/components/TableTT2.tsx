import React from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper, Table } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
const TrashCan: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'trash-can' })
const PlusIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'circle-plus' })
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
    button1: {
        background: 'red'
    }
}));
const data = [
    {
        "thongtincongtac": {
            "ngaybatdau": "9-2020",
            "ngayketthuc": "Hiện tại",
            "chucvu": "Đại học",
            "truongdaihoc": "Đại học Cần Thơ",
            "thanhtich": "Kỹ sư Hệ thống thông tin"

        },
    },
    {
        "thongtincongtac": {
            "ngaybatdau": "9-2022",
            "ngayketthuc": "Hiện tại",
            "chucvu": "Đại học",
            "truongdaihoc": "Đại học Cần Thơ",
            "thanhtich": "Kỹ sư Kỹ thuật phần mềm"

        },
    },
]
export default function Demo() {
    const { classes } = useStyles();
    // You can add these classes as classNames to any Mantine input, it will work the same
    return (
        <div>
            <Table
            >
                <thead>
                    <tr>
                        <th>Từ tháng/năm</th>
                        <th>Cơ quan/Đơn vị</th>
                        <th>Chức vụ</th>
                        <th>Công việc</th>
                        <th>Thành tích nổi bật</th>

                        <th>
                            <Center>
                                <Button radius="lg" size="lg" color={'green'} variant="subtle">
                                    <FontAwesomeIcon icon={PlusIcon} />
                                </Button>
                            </Center>
                        </th>
                    </tr>

                    {data && data.map((item, index) =>
                        <tr key={index}>
                            <td>{item.thongtincongtac.ngaybatdau}</td>
                            <td>{item.thongtincongtac.ngayketthuc}</td>
                            <td>{item.thongtincongtac.chucvu}</td>
                            <td>{item.thongtincongtac.truongdaihoc}</td>
                            <td>{item.thongtincongtac.thanhtich}</td>

                            <td >
                                <Center>
                                    <Button radius="xs" size="sm" color={'red'} variant="subtle">
                                        <FontAwesomeIcon icon={TrashCan} />
                                    </Button>
                                </Center>
                            </td>
                        </tr>
                    )}
                </thead>
            </Table>
        </div>
    );
}
import React from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper, Table } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Clock, Coin, Heart } from 'tabler-icons-react';
import Link from 'next/link';
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
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
  const NextIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-right' })
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
    button: {
        background:'green',
        radius: 0
    },
    
  }));
const data = [
    {
        "thongtinbang1": {
            "ngaybatdau": "9-2020",
            "ngayketthuc": "Hiện tại",
            "bac": "Đại học",
            "tentruonghoc": "Đại học Cần Thơ",
            "tenbangcap": "Kỹ sư Kỹ Thuật Phần Mềm",
            "loai": "Giỏi",
            "namcap": "2022",
        },
    },
    {
        "thongtinbang1": {
            "ngaybatdau": "4-2022",
            "ngayketthuc": "Hiện tại 1",
            "bac": "Đại học 2",
            "tentruonghoc": "Đại học Cần Thơ 2",
            "tenbangcap": "Kỹ sư Kỹ Thuật Phần Mềm 2",
            "loai": "Giỏi",
            "namcap": "2022",
        },
    },
]
export default function Demo() {
    const { classes } = useStyles();
    // You can add these classes as classNames to any Mantine input, it will work the same
    return (
        <div>
            <Table
            striped 
            >
                <thead>
                    <tr>
                        <th style={{minWidth:80 }} >Từ tháng/năm</th>
                        <th>Đến tháng/năm</th>
                        <th>Bậc/Kỹ năng học</th>
                        <th>Tên trường học/Đơn vị đào tạo</th>
                        <th>Tên bằng cấp/chứng nhận đạt được</th>
                        <th style={{minWidth:80 }}>Loại</th>
                        <th>Năm cấp</th>
                        <th>
                        <Center><Button radius="lg" size="lg" color={'green'} variant="subtle">
                            <FontAwesomeIcon icon={PlusIcon} />
                            </Button></Center>
                        </th>
                    </tr>

                    {data && data.map((item, index) => 
                        <tr key={index}>
                            <td>{item.thongtinbang1.ngaybatdau}</td>
                            <td>{item.thongtinbang1.ngayketthuc}</td>
                            <td>{item.thongtinbang1.bac}</td>
                            <td>{item.thongtinbang1.tentruonghoc}</td>
                            <td>{item.thongtinbang1.tenbangcap}</td>
                            <td>{item.thongtinbang1.loai}</td>
                            <td>{item.thongtinbang1.namcap}</td>
                            <td > 
                               <Center><Button radius="xs" size="sm" color={'red'} variant="subtle">
                               <FontAwesomeIcon icon={TrashCan} />
                                </Button></Center> 
                            </td>
                        </tr>
                    )}
                </thead>
            </Table>
        </div>
    );
}
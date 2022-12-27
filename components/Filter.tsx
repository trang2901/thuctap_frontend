import React, { useEffect, useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Image, Text, Collapse, Button, Menu, useMantineTheme, TextInput, TextInputProps, ActionIcon } from '@mantine/core';
import useTranslation from 'next-translate/useTranslation';
import { SquareCheck, Package, Users, Calendar, ChevronDown, Search, ArrowRight, ArrowLeft, ChevronUp } from 'tabler-icons-react';
import { DatePicker, DatePickerProps } from '@mantine/dates'

const Filter = (props: TextInputProps) => {
    const { classes } = useStyles()
    const theme = useMantineTheme();
    const [collapsed, setCollapsed] = useState(false)
    const [openedMenu, setOpenedMenu] = useState(false)
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [dateFilterLabel, setDateFilterLabel] = useState('Tất cả ngày');
    const [anyDate, setAnyDate] = useState(true)
    const [dateToday, setDateToday] = useState(false)
    const [dateYesterday, setDateYesterday] = useState(false)
    const [dateThisMonth, setDateThisMonth] = useState(false)
    const [dateThisYear, setDateThisYear] = useState(false)

    useEffect(() => {
        switch (dateFilterLabel) {
            case 'Tất cả ngày':
            case 'Hôm nay':
            case 'Hôm qua':
            case 'Tháng này':
            case 'Năm nay':
            default:

        }
    })

    const formatDate = (value: Date | number, format = 'DD/MM/YYYY') => {
        let date = value
        let year = -1
        let month = -1
        let day = -1

        date = new Date(value)
        year = date.getFullYear()
        month = date.getMonth()
        day = date.getDate()

        switch (format) {
            case 'MM/DD/YYYY':
                return month + '/' + day + '/' + year
            default: return day + '/' + month + '/' + year
        }
    }

    return (
        <div className={classes.containerRoot}>
            <div className={classes.container}>
                <Group style={{ flex: 1 }}>
                    <Menu closeOnItemClick={false} opened={openedMenu}
                        control={
                            <Button onClick={() => setOpenedMenu(!openedMenu)} leftIcon={<Calendar size={18} />} rightIcon={<ChevronDown size={18} />} sx={{ paddingLeft: 12, paddingRight: 12 }}>
                                {dateFilterLabel}
                            </Button>
                        }
                        transition="pop-top-right"
                        placement="end"
                        style={{ minWidth: 330, alignItems: "center", justifyContent: "center", display: "block" }}

                    >
                        <Menu.Item
                        // icon={<Package size={16} color={theme.colors.blue[6]} />}
                        // rightSection={
                        // }
                        >
                            <div className={classes.fromto}>
                                <div>
                                    <DatePicker
                                        placeholder="Pick date"
                                        label="From"
                                        inputFormat="DD/MM/YYYY"
                                        labelFormat="MM/YYYY"
                                        defaultValue={dateFrom}
                                        onChange={(date: Date) => { setDateFrom(date); setAnyDate(false); setDateFilterLabel(formatDate(dateFrom) + " - " + formatDate(dateTo)) }}
                                    />
                                </div>
                                <Text>&nbsp;&nbsp;</Text>
                                <div>
                                    <DatePicker
                                        placeholder="Pick date"
                                        label="To"
                                        inputFormat="DD/MM/YYYY"
                                        labelFormat="MM/YYYY"
                                        defaultValue={dateTo}
                                        onChange={(date: Date) => { setDateTo(date); setAnyDate(false); setDateFilterLabel(formatDate(dateFrom) + " - " + formatDate(dateTo)) }}
                                    />
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item
                            // icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
                            // rightSection={
                            //     <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                            //         Ctrl + T
                            //     </Text>
                            // }
                            onClick={() => { setOpenedMenu(false); setDateFilterLabel('Tất cả ngày') }}
                        >
                            Tất cả ngày
                        </Menu.Item>
                        <Menu.Item
                            // icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
                            // rightSection={
                            //     <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                            //         Ctrl + T
                            //     </Text>
                            // }
                            onClick={() => { setOpenedMenu(false); setDateFilterLabel('Hôm nay') }}
                        >
                            Hôm nay
                        </Menu.Item>
                        <Menu.Item
                            // icon={<Users size={16} color={theme.colors.cyan[6]} />}
                            // rightSection={
                            //     <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                            //         Ctrl + U
                            //     </Text>
                            // }
                            onClick={() => { setOpenedMenu(false); setDateFilterLabel('Hôm qua') }}
                        >
                            Hôm qua
                        </Menu.Item>
                        <Menu.Item
                            // icon={<Calendar size={16} color={theme.colors.violet[6]} />}
                            // rightSection={
                            //     <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                            //         Ctrl + E
                            //     </Text>
                            // }
                            onClick={() => { setOpenedMenu(false); setDateFilterLabel('Tháng này') }}
                        >
                            Tháng này
                        </Menu.Item>
                        <Menu.Item
                            // icon={<Calendar size={16} color={theme.colors.violet[6]} />}
                            // rightSection={
                            //     <Text size="xs" transform="uppercase" weight={700} color="dimmed">
                            //         Ctrl + E
                            //     </Text>
                            // }
                            onClick={() => { setOpenedMenu(false); setDateFilterLabel('Năm nay') }}
                        >
                            Năm nay
                        </Menu.Item>
                    </Menu>

                </Group>
                <Group>
                    <TextInput
                        icon={<Search size={18} />}
                        radius="md"
                        size="md"
                        rightSection={
                            <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                                {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                            </ActionIcon>
                        }
                        placeholder="Search"
                        rightSectionWidth={42}
                        {...props}
                    />
                </Group>
            </div>
            <div className={classes.containerFilterAdvancedButton}>
                <Button size='xs' variant='light' rightIcon={collapsed ? <ChevronUp size={15} /> : <ChevronDown size={15} />} sx={{ paddingRight: 5 }} onClick={() => setCollapsed(!collapsed)}>
                    <Text size='xs'>{collapsed ? 'Bộ lọc cơ bản' : 'Bộ lọc nâng cao'}</Text>
                </Button>
            </div>
            <div>
                <Collapse in={collapsed}>
                    <div className={classes.containerFilterAdvanced}>
                        <Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>Lọc theo mã lĩnh vực</Button>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Filter

const useStyles = createStyles((theme) => ({
    containerRoot: {
        minHeight: 100,
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: "100%",
    },
    container: {
        display: "flex",
        width: "100%",

    },
    containerFilterAdvancedButton: {
        display: "flex",
        justifyContent: "end",
        paddingTop: 10
    },
    containerFilterAdvanced: {
        paddingBottom: 10,
    },
    fromto: { flexDirection: "row", display: "flex", alignItems: "center" },
}))
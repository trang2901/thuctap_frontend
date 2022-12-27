import React, { useState } from 'react';
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Divider,
    Tabs,
    Burger,
    Grid,
    Image
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import {
    Logout,
    Heart,
    Star,
    Message,
    Settings,
    PlayerPause,
    Trash,
    SwitchHorizontal,
    ChevronDown,
    UserCheck,
    UserPlus,
} from 'tabler-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.xl,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
            }`,
        
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    userMenu: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    user: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tabControl: {
        fontWeight: 500,
        height: 38,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
    },

    tabControlActive: {
        borderColor: `${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
            } !important`,
    },
    logo: {
        width: '60px',
        height: '60px',
        marginLeft: '5px',
        marginRight: '5px',
        marginBottom: '15px'
    }
}));



export default function Headertt() {
    const { classes, theme, cx } = useStyles();
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <div className={classes.header}>
            <Container >

                <Grid columns={44}>
                    <Grid.Col span={30}>
                        <div className={classes.logo}>
                            <Image
                                src="https://ngonaz.com/wp-content/uploads/2022/03/ve-con-heo-7.jpg"
                                alt="logo"
                            />
                        </div>
                    </Grid.Col>
                    <Grid.Col span={10}>
                        <Group position="apart">
                        <Burger
                                opened={opened}
                                onClick={() => toggleOpened()}
                                className={classes.burger}
                                size="sm"
                            />

                            <Menu
                                size={300}
                                placement="end"
                                transition="pop-top-right"
                                className={classes.userMenu}
                                onClose={() => setUserMenuOpened(false)}
                                onOpen={() => setUserMenuOpened(true)}
                                control={
                                    <UnstyledButton
                                        className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                                    >
                                        <Group spacing={7}>
                                            <Avatar src="data:image/jpeg;base64,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" alt="user" radius="xl" size={40} />
                                            <Text weight={500} size="md" sx={{ lineHeight: 1 }} mr={3}>
                                                {"Tài Khoản"}
                                            </Text>
                                            <ChevronDown size={12} />
                                        </Group>
                                    </UnstyledButton>
                                }
                            >
                                
                                <Menu.Item icon={<UserCheck size={20} color={theme.colors.dark[6]} />}>
                                    Đăng nhập
                                </Menu.Item>
                                <Menu.Item icon={<UserPlus size={20} color={theme.colors.dark[6]} />}>
                                    Đăng ký
                                </Menu.Item>
                            </Menu>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Container>

        </div>
    );
}
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
    Image,
    Button,
    Anchor,
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
} from 'tabler-icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.colors[theme.primaryColor][6],
        borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
        marginBottom: 120,
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
        color: theme.white,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
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
        color: `${theme.white} !important`,

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
        },
    },

    tabControlActive: {
        color: `${theme.colorScheme === 'dark' ? theme.white : theme.black} !important`,
        borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
    },

    logo: {
        left: '0px',
        maxWidth: '536px',
        width: '100%',
        display: 'inline-block'
    }
}));

interface HeaderTabsProps {
    user: { name: string; image: string };
    tabs: string[];
}

export function HeaderTabsColored({ user, tabs }: HeaderTabsProps) {
    const { classes, theme, cx } = useStyles();
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => <Tabs.Tab label={tab} key={tab} />);

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection}>
                <Group position="apart">
                    <Image className={classes.logo} src='https://dichvucong.gov.vn/p/home/theme/img/header/logo.png' />

                    <Burger
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="sm"
                        color={theme.white}
                    />

                    <div>
                        <Link href={''}>
                            <Button variant='outline' color='orange'
                                className={'btn btn-login'}
                            >
                                <Anchor<'a'>
                                    className={'btn btn-login'}>
                                    Đăng ký
                                </Anchor>
                            </Button>
                        </Link>
                        <Link href={''}>
                            <Button variant='outline' color='orange'
                                className={'btn btn-login'}
                            >
                                <Anchor<'a'>
                                    className={'btn btn-register'}>
                                    Đăng nhập
                                </Anchor>
                            </Button>
                        </Link>
                    </div>
                </Group>
            </Container>
            <Container>
                <Tabs
                    variant="outline"
                    classNames={{
                        root: classes.tabs,
                        tabsListWrapper: classes.tabsList,
                        tabControl: classes.tabControl,
                        tabActive: classes.tabControlActive,
                    }}
                >
                    <Tabs.Tab label={''} icon={<span className="fa fa-home"></span>} />
                    {items}
                </Tabs>
            </Container>
        </div>
    );
}
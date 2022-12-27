import React from 'react';
import { createStyles, Text, Container, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
        marginLeft: 10
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },

    imageLienKet: {
        maxWidth: 400,

        marginBottom: 20,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

}));

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

export function Footer({ data }: FooterLinksProps) {
    const { classes } = useStyles();
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            // <Text<'a'>
            //     key={index}
            //     className={classes.link}
            //     component="a"
            //     href={link.link}
            //     onClick={(event) => event.preventDefault()}
            // >
            //     {link.label}
            // </Text>
            <div key={index} className={classes.imageLienKet} style={group.title === "Liên kết" ? { width: 400 } : {}}>
                <Image
                    src={link.link}
                    alt={link.label}
                    fit={"cover"}
                />
            </div>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    {/* <div className={classes.logo}>
                        <Image
                            src="http://dvctt.camau.gov.vn/pacific-theme/images/qh.png"
                            alt="ISO logo"
                        />
                    </div> */}
                    <Text size="md" color="yellow" style={{ fontWeight: 'bold' }} className={classes.description}>
                        Thông tin liên hệ
                    </Text>
                    <Text size="sm" color="dimmed" align="justify" className={classes.description}>
                        Đơn vị vận hành: Trung tâm Giải quyết thủ tục hành chính tỉnh Cà Mau
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    Bản quyền © 2017 Sở Thông tin và Truyền thông tỉnh Cà Mau.
                </Text>

                {/* <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group> */}
            </Container>
        </footer>
    );
}

import React, { useEffect, useState } from 'react';
import { createStyles, Navbar, Group, useMantineColorScheme, } from '@mantine/core';
import {
  SwitchHorizontal,
  Login, Sun, Moon, Old, BrowserPlus, ChartInfographic, ExternalLink
} from 'tabler-icons-react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';
import HeaderAdmin from 'components/HeaderAdmin'
const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      marginTop: -30,
      width: 1300,
      height: 105,
      //position: 'fixed',
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
      minHeight:100,
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
        },
      },
    },
  };
});

const data = [
  { link: '/admin/ThongKe', label: 'Tổng quan', icon: ChartInfographic },
  { link: '/admin/QuanLyDangTin', label: 'Quản lý đăng tin', icon: BrowserPlus },
  { link: '/admin/QuanLyUngVien', label: 'Quản lý ứng viên', icon: Old },
];

export default function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [showChild, setShowChild]=useState(false)
  useEffect(()=>{
    setShowChild(true)
  },[])
  if (!showChild){
    return null
  }
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      // onClick={(event) => {
      //   <Anchor href="/" target="_blank">
      //   </Anchor>
        // setActive(item.label);
      // }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div>
      <Navbar width={{ sm: 370 }} p="md">
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <HeaderAdmin/>
          </Group>
          {links}
        </Navbar.Section>
        <Navbar.Section className={classes.footer}>
          <a href="./QuanLyDangTin" className={classes.link} onClick={(event) => event.preventDefault()}>
            <ExternalLink className={classes.linkIcon} />
            <Link href={"./QuanLyDangTin"}>
              <span>Đến trang người dùng</span>
            </Link>
          </a>
          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <Login className={classes.linkIcon} />
            <span>Logout</span>
          </a>

        </Navbar.Section>
      </Navbar>


    </div>
  );
}
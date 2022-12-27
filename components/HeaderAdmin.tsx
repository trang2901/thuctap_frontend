
import React, { useState } from 'react';
import { createStyles, Group, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { useMantineColorScheme, SegmentedControl, Center } from '@mantine/core';
import {
  UserCircle, Bell
} from 'tabler-icons-react';
import ColorThem from 'components/ColorTheme'
const useStyles = createStyles((theme) => ({
  inner: {
    //marginLeft:-300,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  user: {
    marginLeft: 1100,
    marginTop: -100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  div: {
    width: 1310,
    height: 100,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  name: {
    marginLeft: 100,
    marginTop: -100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function FooterSocial() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <div className={classes.inner}>
        <img src="/cusc-logo.png" alt="Cusc-logo"
          width={80} height={80} />
      </div>
      <Group className={classes.name}>
        <Link href={"/admin"}>
          <span>Trung Tâm Công Nghệ Phần Mềm<br />
            Trường Đại học Cần Thơ</span>
        </Link>
      </Group>
      <Group className={classes.user}>
        <ActionIcon size="lg">
          <Bell />
        </ActionIcon>
        <ActionIcon size="lg">
          <UserCircle />
        </ActionIcon>
        <ActionIcon size="lg">
          <ColorThem />
        </ActionIcon>

      </Group>
    </div>
  );
}
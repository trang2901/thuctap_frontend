import React, { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger, Image, Text, Collapse, Button, useMantineTheme } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useSession } from 'next-auth/react';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: 0,
  },

  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: "96%"
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.white,
    padding: `2px ${theme.spacing.xs}px`,
    fontWeight: 'bold',
    borderBottom: '2px solid transparent',
    transition: 'border-color 100ms ease, opacity 100ms ease',
    opacity: 0.9,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,

    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
  },

  secondaryLink: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.md,
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.white,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.white,
    opacity: 1,
    borderBottomColor:
      theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][5],
    backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 5],
  },

  logoContainer: {
    width: "400px", height: "100%", flexDirection: "row", display: 'flex', alignItems: 'center', justifyContent: 'center'
  },

  logo: { width: '50px', height: '50px', marginLeft: '5px', marginRight: '5px' },

  logoText: { flex: 1, padding: "0px", fontSize: "25px", color: '#fff', fontWeight: 'bold' },

  collapseHeader: { width: "100%", backgroundColor: theme.colors[theme.primaryColor][6], zIndex: 1000 },

  button: {
    position: 'relative',
    transition: 'background-color 150ms ease',
    borderColor: theme.white,
    borderWidth: 2,
    paddingTop: 0,
    paddingBottom: 0
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
  userLinks: LinkProps[];
}

export function DoubleHeaderColored({ mainLinks, userLinks }: DoubleHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const { t, lang } = useTranslation();
  const theme = useMantineTheme();
  const { data: session, status } = useSession()

  const items = ([
    { link: "#", label: t('header:Home') },
    { link: "#", label: t('header:About') },
    { link: "#", label: t('header:AdministrativeProcedures') },
    { link: "#", label: t('header:Guide') },
    { link: "#", label: t('header:Statistical') },
    { link: "#", label: t('header:ComplaintReflection') },
    { link: "#", label: t('header:SearchRecords') },
    { link: "#", label: t('header:QnA') },
    { link: "#", label: t('header:ClassificationResults') }
  ]).map((link) => (
    // <Text
    //   component="a"
    //   className={classes.link}
    //   href={link.link}
    //   key={link.label}
    //   onClick={(event) => event.preventDefault()}
    // >
    //   {link.label}
    // </Text>
    <Link href={link.link} passHref key={link.label}>
      <Text
        component="a"
        // className={classes.link}
        style={{
          fontWeight: 500,
          display: "block",
          textDecoration: "none",
        }}
        key={link.label}
      >
        {link.label}
      </Text>
    </Link>
  ));

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={index}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item, index) => (
    item.label === t('common:General.Signup') ?
      <Anchor<'a'>
        href={item.link}
        key={index}
        onClick={(event) => event.preventDefault()}
        className={classes.secondaryLink}
      >
        {item.label}
      </Anchor>
      :
      <Link href={item.link} key={index}>
        <Button
          className={classes.button}
          color={theme.primaryColor}
        >
          <Anchor<'a'>
            key={item.label}
            className={classes.secondaryLink}
          >
            {item.label}
          </Anchor>
        </Button>
      </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={0} className={classes.header}>
      <Container className={classes.inner}>
        <div className={classes.logoContainer}>
          <div className={classes.logo}>
            <Image
              src="http://dvctt.camau.gov.vn/pacific-theme/images/qh.png"
              alt="ISO logo"
            />
          </div>
          <div className={classes.logoText}> {t('common:General.PublicServicePortal').toUpperCase()} <Text size="sm" color="yellow" style={{ fontWeight: 'bold' }}>{t('common:General.CaMauProvince').toUpperCase()}</Text> </div>
        </div>

        <div className={classes.links}>
          <Group position="right">{
            status === 'authenticated' ?
              <Link href="/dashboard">
                <Anchor<'a'> className={classes.secondaryLink}>
                  {t('menu:SidebarMenu.Dashboard')}
                </Anchor>
              </Link> :
              secondaryItems
          }</Group>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
      </Container>
      <Collapse className={classes.collapseHeader} in={opened}>{items}</Collapse>
    </Header>
  );
}
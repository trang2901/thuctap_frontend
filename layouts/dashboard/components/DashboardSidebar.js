import React from "react";
import { Navbar, Group, Code, ScrollArea, createStyles, Burger } from "@mantine/core";
import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
} from "tabler-icons-react";
// import { UserButton } from "../UserButton/UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
// import { Logo } from "./Logo";

const mockdata = [
  { label: "Tổng quan", icon: Gauge, link: "/admin/ThongKe" },
  {
    label: "Quản lý",
    icon: Notes,
    initiallyOpened: true,
    links: [
      { label: "Quản lý đăng tin", link: "/admin/QuanLyDangTin" },
      { label: "Quản lý ứng viên", link: "/admin/QuanLyUngVien" },
      // { label: "Danh mục Tin tức", link: "/dashboard/tintuc" },
      // { label: "Outlook", link: "/" },
      // { label: "Real time", link: "/" },
      // { label: "Người dùng - Tổ chức", link: "/dashboard/users_orgs" },
    ],
  },
  // {
  //   label: "Releases",
  //   icon: CalendarStats,
  //   links: [
  //     { label: "Upcoming releases", link: "/" },
  //     { label: "Previous releases", link: "/" },
  //     { label: "Releases schedule", link: "/" },
  //   ],
  // },
  // { label: "Analytics", icon: PresentationAnalytics },
  // { label: "Contracts", icon: FileAnalytics },
  // { label: "Settings", icon: Adjustments },
  // {
  //   label: "Security",
  //   icon: Lock,
  //   links: [
  //     { label: "Enable 2FA", link: "/" },
  //     { label: "Change password", link: "/" },
  //     { label: "Recovery codes", link: "/" },
  //   ],
  // },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    // paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function DashboardSidebar({ opened }) {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ base: 300 }} hiddenBreakpoint="sm" hidden={!opened} p="md" className={classes.navbar}>
      {/* <Logo width={120} /> */}
      {/* <Navbar.Section className={classes.header}>
        <Group position="apart">
          <h2>Hello</h2>
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section> */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </Navbar>
  );
}

import { ActionIcon, Box, Burger, Button, Header, MediaQuery, Title } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { User } from "tabler-icons-react";
import UserMenu from "./UserMenu";
import { ColorSchemeToggle } from "../../../components/ColorSchemeToggle/ColorSchemeToggle";
import { ChangeLanguage } from "../../../components/ChangeLanguage/ChangeLanguage";
import { useRouter } from "next/router";

export default function DashboardHeader({ opened, toggleOpened }) {
  const router = useRouter()

  const handleClick = () => {
    router.push('/admin')
  }

  return (
    <Header height={60} p="md" sx={{ display: "flex", alignItems: "center" }}>
      {/* Header content */}
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger opened={opened} onClick={() => toggleOpened()} size="sm" />
      </MediaQuery>
      <img src="/cusc-logo.png" alt="Cusc-logo"
        width={80} height={80} />
      {/* <Title order={3} onClick={handleClick}>
        Trung Tâm Công Nghệ Phần Mềm<br />
        Trường Đại học Cần Thơ
      </Title> */}

      <Box sx={{ marginLeft: "auto" }}>
        <ChangeLanguage />

        <UserMenu
          control={
            <ActionIcon size="lg" variant="light">
              <User size={16} />
            </ActionIcon>
          }
        />
      </Box>
    </Header>
  );
}

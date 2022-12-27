import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.js';
import { ActionIcon, Box, Burger, Button, Header, MediaQuery, Title } from "@mantine/core";
import ChangeLanguageMenu from "./ChangeLanguageMenu";
import { Language } from "tabler-icons-react";

const { locales } = i18nConfig;
console.log(locales);

export function ChangeLanguage(props: any) {
  const { t, lang } = useTranslation()

  return (
    <ChangeLanguageMenu
      control={
        <ActionIcon size="lg" variant="light">
          <Language size={16} />
        </ActionIcon>
      }
    />
  )
}

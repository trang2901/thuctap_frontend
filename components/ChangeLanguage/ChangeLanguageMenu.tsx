import { Menu, Divider, Text } from "@mantine/core";
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight } from "tabler-icons-react";
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.js';

const { locales } = i18nConfig;

export default function ChangeLanguageMenu({ control }: any) {
  const { t, lang } = useTranslation();

  return (
    <Menu control={control} transition="skew-up" placement="end">
      <Menu.Label>{t('layout:language')}</Menu.Label>
      {locales && locales.map((lng, index) => {
        if (lng === lang)
          return '';

        return (
          <Menu.Item key={index} icon={<Settings size={14} />}>
            <Link href="/" locale={lng} key={lng}>
              <Text size="sm">{t(`layout:language-name-${lng}`)}</Text>
            </Link>
          </Menu.Item>
        )
      })
      }
    </Menu>
  );
}

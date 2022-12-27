import React, { useEffect } from 'react'
import {
  Title,
  Text,
  Anchor,
  Badge,
  MantineProvider,
  Image,
  useMantineColorScheme,
} from '@mantine/core';
import { Tabs } from '@mantine/core';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { DoubleHeaderColored } from '../components/Header'
import api from '../app/api/RestClient';
import { Footer } from '../components/Footer';
import { useHotkeys } from '@mantine/hooks';


export default function HomePage() {
  const { t, lang } = useTranslation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // Tab to toggle color scheme
  useHotkeys([
    [
      'Tab',
      () => {
        toggleColorScheme();
      },
    ],
  ]);

  const items = [
    { link: "#", label: t('header:Home') },
    { link: "#", label: t('header:About') },
    { link: "#", label: t('header:AdministrativeProcedures') },
    { link: "#", label: t('header:Guide') },
    { link: "#", label: t('header:Statistical') },
    { link: "#", label: t('header:ComplaintReflection') },
    { link: "#", label: t('header:SearchRecords') },
    { link: "#", label: t('header:QnA') },
    { link: "#", label: t('header:ClassificationResults') }
  ]

  useEffect(() => {
    // api.post('/auth/token', { username: "lmtri", password: "123" })
    //   .then(res => {
    //     console.log('[post]', JSON.stringify(res.data));
    //   })
    api.get('/hello')
      .then(res => {
        console.log('[]', res.data);
      });
  }, [])

  return (
    <>
      <DoubleHeaderColored mainLinks={items} userLinks={[
        { link: "#", label: t('common:General.Signup') },
        { link: "/dashboard", label: t('common:General.Login') }
      ]} />
      {/* <HeaderTabsColored tabs={[
        "Giới thiệu",
        "Thông tin và dịch vụ",
        "Thanh toán trực tuyến",
        "Phản ánh kiến nghị",
        "Thủ tục hành chính",
        "Hỗ trợ"
      ]} user={
        {
          "name": "Jane Spoonfighter",
          "email": "janspoon@fighter.dev",
          "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        }
      } /> */}

      <div style={{ width: "100%", height: "100%", justifyContent: "center", display: "flex" }}>
        <Image
          src="https://fileapi.surego.vn//Upload/NewsImage/R637096778929414583.png"
          alt="Ca Mau picture"
        />
      </div>

      <Footer data={[
        {
          title: "Zalo",
          links: [{ link: "http://dvctt.camau.gov.vn/pacific-theme/images/zalo.jpg", label: "QR code Zalo" }]
        },
        {
          title: "Liên kết",
          links: [{ link: "http://dvctt.camau.gov.vn/pacific-theme/images/congdichvucong.png", label: "Cổng dịch vụ công quốc gia" },
          { link: "http://dvctt.camau.gov.vn/pacific-theme/images/congthongtin.PNG", label: "Cổng thông tin điện tử tỉnh Cà Mau" }]
        }]}
      />
    </>
  );
}

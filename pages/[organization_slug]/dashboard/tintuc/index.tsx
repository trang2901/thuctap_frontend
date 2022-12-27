import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import useSWR from 'swr';
import RestClient from '@api/RestClient';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  Paper,
  Button,
  Text,
  Mark,
  Blockquote,
} from '@mantine/core';




const fetcher = (url: string) => {
  const data = RestClient.get(url).then((res) => res.data);
  return data;
};

export default function TinTuc() {
  const { t } = useTranslation();
  const { data, error } = useSWR('https://cusc.vn/app/api/cms/posts', fetcher);

  return (
    <>
      <h1>Danh sách Tin tức</h1>
      {data?.result &&
        data?.result.map((item: any, index: any) => {
          return <h1 key={index}>{item.post_title}</h1>;
        })}
    </>
  );
}

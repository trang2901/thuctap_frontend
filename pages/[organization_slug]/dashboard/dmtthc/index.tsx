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
  LoadingOverlay,
  Group,
  useMantineColorScheme,
} from '@mantine/core';


import { useHotkeys } from '@mantine/hooks';



const fetcher = (url: string) => {
  const data = RestClient.get(url).then((res) => res.data);
  return data;
};

export default function DmTTHC() {
  const { t } = useTranslation();
  const { data, error } = useSWR('https://cusc.vn/app/api/cms/posts', fetcher);
  const [visible, setVisible] = useState(!error && !data);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // ctrl + J and ⌘ + J to toggle color scheme
  // ctrl + K and ⌘ + K to search
  useHotkeys([
    [
      'mod+J',
      () => {
        console.log('Toggle color scheme');
        toggleColorScheme();
      },
    ],
    ['ctrl+K', () => console.log('Trigger search')],
    ['alt+mod+shift+X', () => console.log('Rick roll')],
  ]);

  return (
    <>
      <h1>Danh mục TTHC</h1>
      {/* Is loading */}
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={visible} overlayOpacity={0.3} overlayColor="red" />
        {/* ...other content */}

        <ul>
          {data?.result &&
            data?.result.map((item: any, index: any) => {
              return <li key={index}>{item.post_title}</li>;
            })}
        </ul>
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}

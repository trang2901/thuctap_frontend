import { Tabs } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';

export default function Tab() {
  return (
    <Tabs>
      <Tabs.Tab label="BƯỚC 1 THONG TIN CA NHAN"> Thong tin ca nhan</Tabs.Tab>
      <Tabs.Tab label="BUOC 2 QUA TRINH HOC TAP VA BOI DUONG">Messages tab content</Tabs.Tab>
      <Tabs.Tab label="Settings">Settings tab content</Tabs.Tab>
      <Tabs.Tab label="Quan Diem Va Ky Nang Ca Nhan">...</Tabs.Tab>
      <Tabs.Tab label="Quan Diem Va Ky Nang Ca Nhan">...</Tabs.Tab>
      
      
    </Tabs>
  );
}
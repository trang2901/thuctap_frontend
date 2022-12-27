import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import useSWR, { SWRConfig } from 'swr';
import RestClient from '@api/RestClient';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
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
  useMantineTheme,
  Drawer,
  Box,
  TextInput,
  Dialog,
  Pagination,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import TableSelection from 'components/TableSelection';
import { useForm } from '@mantine/form';
import { useNotifications } from '@mantine/notifications';
import Filter from 'components/Filter';


const fetcher = (url: string) => {
  const data = RestClient.get(url).then((res) => res.data);
  return data;
};

export default function DmLinhVuc() {
  const { t } = useTranslation();
  const { data, error } = useSWR('/linh-vuc/danhsach', fetcher);
  const [visible, setVisible] = useState(true);
  const { toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [clickedTrash, setClickedTrash] = useState(false);
  const [clickedThemLinhVuc, setClickedThemLinhVuc] = useState(false);
  const [clickedEdit, setClickedEdit] = useState(false);
  const [clickedItemID, setClickedItemID] = useState();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const notifications = useNotifications();

  // Tab to toggle color scheme
  // ctrl + K and ⌘ + K to search
  useHotkeys([
    [
      'Tab',
      () => {
        console.log('Toggle color scheme');
        toggleColorScheme();
      },
    ],
    ['ctrl+K', () => console.log('Trigger search')],
    ['alt+mod+shift+X', () => console.log('Rick roll')],
  ]);

  useEffect(() => {
    if (clickedItemID) {
      form.setValues(data.data.find((obj: any) => obj.lv_id === clickedItemID))
    }
  }, [clickedItemID])

  useEffect(() => {
    if (data) {
      setVisible(false)
    }
  }, [data])

  useEffect(() => {
    if (clickedTrash) {
      setShowConfirmDialog(true)
    }
  }, [clickedTrash])

  const form = useForm<{ lvma: string, lv_ten: string, lv_ghichu: string, lv_stt_pheduyet: number }>({
    initialValues: { lvma: '', lv_ten: '', lv_ghichu: '', lv_stt_pheduyet: 0 },
    validate: (values) => ({
      lvma: values.lvma.trim().length < 1 ? 'Nhập mã lĩnh vực' : null,
      lv_ten: values.lv_ten.trim().length < 2 ? 'Tên lĩnh vực quá ngắn' : null,
      lv_stt_pheduyet:
        values.lv_stt_pheduyet < 1
          ? 'Số thứ tự phê duyệt phải lớn hơn 0'
          // : typeof values.lv_stt_pheduyet !== 'number'
          // ? 'Số thứ tự phê duyệt không hợp lệ'
          : null,
    }),
  });
  const handleSubmit = (values: typeof form.values) => {
    const temp = values
   

    if (clickedThemLinhVuc) {
      RestClient.post('/linh-vuc/add', temp).then(res => {
        if (res.status == 200) {
          data.data.push(res.data.data)

          handleShowNoti('Thêm lĩnh vực', 'Đã thêm thành công');
          setClickedEdit(false); setClickedThemLinhVuc(false)
        }
      })
    } else if (clickedEdit) {
      RestClient.put(`/linh-vuc/update/${clickedItemID}`, temp).then(res => {
        if (res.status == 200) {
          const index = data.data.findIndex((o: any) => o.lv_id === clickedItemID)
          data.data[index] = temp

          handleShowNoti('Sửa lĩnh vực', 'Đã sửa thành công');
          setClickedEdit(false); setClickedThemLinhVuc(false)
        }
      })
    }
  }

  const handleDelete = () => {
    RestClient.del(`/linh-vuc/delete/${clickedItemID}`).then(res => {
      if (res.status == 200) {
        const index = data.data.findIndex((o: any) => o.lv_id === clickedItemID)
        data.data.splice(index, 1)

        handleShowNoti('Xoá', 'Đã xoá thành công');
        setClickedEdit(false); setClickedThemLinhVuc(false); setClickedTrash(false)
      }
    })
  }

  const handleShowNoti = (title: string, message: string) =>
    notifications.showNotification({ title: title, message: message });

  if (error) return <div>Đã xảy ra lỗi</div>
  if (!data) return <div style={{ width: "100%", height: "100%", position: 'relative' }}>
    <LoadingOverlay visible={visible} overlayOpacity={0.2} overlayColor="#000" loaderProps={{ size: 'md', color: theme.primaryColor, variant: 'dots' }} />
  </div>
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: 'relative' }}>
        <h1>Danh mục Lĩnh vực</h1>
        <Filter></Filter>
        <TableSelection data={data.data} keyID={'lv_id'}
          columns={[
            { key: 'lvma', label: 'Mã lĩnh vực' },
            { key: 'lv_ten', label: 'Tên lĩnh vực' },
            { key: 'lv_ghichu', label: 'Ghi chú' },
            { key: 'lv_ngaycapnhatcuoi', label: 'Lần cập nhật cuối' },
          ]}
          avatar={false}
          onClickAdd={setClickedThemLinhVuc}
          onClickEdit={setClickedEdit}
          onClickTrash={setClickedTrash}
          onClickItem={setClickedItemID} />
      </div>
      <Drawer
        opened={clickedThemLinhVuc || clickedEdit}
        onClose={() => { setClickedEdit(false); setClickedThemLinhVuc(false) }}
        title={clickedThemLinhVuc ? "Thêm lĩnh vực" : "Chỉnh sửa lĩnh vực"}
        padding="xl"
        size="xl"
        position='right'
        overlayOpacity={0.2}
      >
        {/* Drawer content */}
        <ScrollArea style={{ width: '100%', height: '100%' }}>
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput label="Mã lĩnh vực" placeholder="Mã lĩnh vực" {...form.getInputProps('lvma')} />
              <TextInput label="Tên lĩnh vực" placeholder="Tên lĩnh vực" {...form.getInputProps('lv_ten')} />
              <TextInput label="Ghi chú" placeholder="Ghi chú" {...form.getInputProps('lv_ghichu')} />
              <TextInput label="STT phê duyệt" placeholder="Số thứ tự phê duyệt" {...form.getInputProps('lv_stt_pheduyet')} />

              <Group position="right" mt="md">
                {clickedEdit && <Button variant='outline' color={"gray"} onClick={() => form.reset()}>Xoá</Button>}
                <Button type="submit">{clickedThemLinhVuc ? 'Thêm' : 'Sửa'}</Button>
              </Group>
            </form>
          </Box>
        </ScrollArea>
      </Drawer>

      <Dialog
        opened={showConfirmDialog}
        withCloseButton
        onClose={() => { setClickedTrash(false); setShowConfirmDialog(false) }}
        size="lg"
        radius="md"
      >
        <div style={{ display: "flex", flexDirection: "row", marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
          <Text size='sm'>Xoá lĩnh vực&nbsp;</Text><Text weight={700} size="md">{data && data.data.find((obj: any) => obj.lv_id === clickedItemID)?.lv_ten}</Text><Text size='sm'>{" "}?</Text>
        </div>

        <Group align="flex-end">
          <Button variant="outline" color="gray" onClick={() => { setClickedTrash(false); setShowConfirmDialog(false) }}>Huỷ</Button>
          <Button color="red" onClick={() => { handleDelete(); setShowConfirmDialog(false) }}>Xoá</Button>
        </Group>
      </Dialog>
    </>
  );
}

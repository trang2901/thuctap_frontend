import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import useSWR, { SWRConfig } from 'swr';
import RestClient from '@api/RestClient';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import {
  createStyles,
  ScrollArea,
  Button,
  Text,
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
import { usePagination } from '@mantine/hooks';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@stores/store';
import { add, addUser, addUsers, deleteUser, updateUser } from '@template/user/userSlice';
import { getCookie } from 'cookies-next';


export default function Users() {
  const { t } = useTranslation();
  const [page, onPageChange] = useState(1);
  const [visible, setVisible] = useState(true);
  const { toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [clickedTrash, setClickedTrash] = useState(false);
  const [clickedThemLinhVuc, setClickedThemLinhVuc] = useState(false);
  const [clickedEdit, setClickedEdit] = useState(false);
  const [clickedItemID, setClickedItemID] = useState();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const notifications = useNotifications();
  const users = useSelector((state: RootState) => state.user.users)
  const data = useSelector((state: RootState) => state.user.data)
  const slug = getCookie('@slug')
  const dispatch = useDispatch()
  const PAGE_SIZE = 4
  
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
    getListUser(page)
  }, [])

  useEffect(() => {
    console.log('[slug]=>', slug);
  }, [slug])

  useEffect(() => {
    if (clickedItemID) {
      const formData = users.find((obj: any) => obj.id === clickedItemID)
      // form.setValues(formData)
    }
  }, [clickedItemID])

  useEffect(() => {
    if (clickedTrash) {
      setShowConfirmDialog(true)
    }
  }, [clickedTrash])

  const getListUser = (page: number, pageSize = PAGE_SIZE, name = '', userRole = 'USER') => {
    RestClient.get('/users/paginate', { params: { page: page, pageSize: pageSize, name: name, userRole: userRole } })
      .then((res) => {
        dispatch(addUsers(res.data.data.data))
        dispatch(add(res.data.data))
        setVisible(false)
      });
  }

  const form = useForm<{ username: string, password: string, name: string, email: string, userRole: string, avatar: string | null, jobtitle: string }>({
    initialValues: { username: '', password: '', name: '', email: '', userRole: 'USER', avatar: null, jobtitle: 'NV' },
    validate: (values) => ({
      username: values.username.trim().length < 1 ? 'Nhập tên user' : null,
      name: values.name.trim().length < 2 ? 'Tên quá ngắn' : null,
    }),
  });

  const handleSubmit = (values: typeof form.values) => {
    if (clickedThemLinhVuc) {
      RestClient.post('/users/create', values).then(res => {
        if (res.status == 200) {
          dispatch(addUser(res.data.data))

          handleShowNoti('Thêm user', 'Đã thêm thành công');
          setClickedEdit(false); setClickedThemLinhVuc(false)
        }
      })
    } else if (clickedEdit) {
      console.log('[handleSubmit]', JSON.stringify(values));

      RestClient.put(`/users/${clickedItemID}`, values).then(res => {
        if (res.status == 200) {
          dispatch(updateUser(res.data.data))

          handleShowNoti('Cập nhật user', 'Đã sửa thành công');
          setClickedEdit(false); setClickedThemLinhVuc(false)
        }
      })
    }
  }

  const handleDelete = () => {
    RestClient.del(`/users/${clickedItemID}`).then(res => {
      if (res.status == 200) {
        if (clickedItemID) dispatch(deleteUser(clickedItemID))

        handleShowNoti('Xoá', 'Đã xoá thành công');
        setClickedEdit(false); setClickedThemLinhVuc(false); setClickedTrash(false)
      }
    })
  }

  const handleOnPageChange = (page: number) => {
    onPageChange(page)
    getListUser(page)
  }

  const handleShowNoti = (title: string, message: string) =>
    notifications.showNotification({ title: title, message: message });

  return (
    <>
      <div style={{ width: "100%", height: "100%", position: 'relative' }}>
        {visible &&
          <div style={{ width: "100%", height: "100%", position: 'relative' }}>
            <LoadingOverlay visible={visible} overlayOpacity={0.2} overlayColor="#000" loaderProps={{ size: 'md', color: theme.primaryColor, variant: 'dots' }} />
          </div>
        }
        <h1>Users</h1>
        <Filter></Filter>
        <TableSelection data={users} keyID="id"
          columns={[
            { key: 'name', label: 'Họ tên' },
            { key: 'username', label: 'Tên người dùng' },
            { key: 'email', label: 'Email' },
            { key: 'userRole', label: 'Vai trò' },
          ]}
          onClickAdd={setClickedThemLinhVuc}
          onClickEdit={setClickedEdit}
          onClickTrash={setClickedTrash}
          onClickItem={setClickedItemID}
          avatar={false}
        />
        <Pagination total={data.totalPages} boundaries={1} initialPage={1} withEdges={true} position="right" onChange={(p) => handleOnPageChange(p)} />
      </div>

      <Drawer
        opened={clickedThemLinhVuc || clickedEdit}
        onClose={() => { setClickedEdit(false); setClickedThemLinhVuc(false) }}
        title={clickedThemLinhVuc ? "Thêm user" : "Cập nhật user"}
        padding="xl"
        size="xl"
        position='right'
        overlayOpacity={0.2}
      >
        {/* Drawer content */}
        <ScrollArea style={{ width: '100%', height: '100%' }}>
          <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput label="Tên người dùng" placeholder="Tên người dùng" {...form.getInputProps('username')} />
              <TextInput label="Mật khẩu" placeholder="Mật khẩu" type='password' {...form.getInputProps('password')} />
              <TextInput label="Họ tên" placeholder="Họ tên" {...form.getInputProps('name')} />
              <TextInput label="Email" placeholder="Email" {...form.getInputProps('email')} />
              <TextInput label="Vai trò" placeholder="Vai trò" {...form.getInputProps('userRole')} />

              <Group position="right" mt="md">
                {clickedEdit && <Button variant='outline' color={"gray"} onClick={() => form.reset()}>Xoá</Button>}
                <Button type="submit">{clickedThemLinhVuc ? 'Thêm' : 'Cập nhật'}</Button>
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
          <Text size='sm'>Xoá user&nbsp;</Text><Text weight={700} size="md">{users?.find((obj: any) => obj['id'] === clickedItemID)?.name}</Text><Text size='sm'>{" "}?</Text>
        </div>

        <Group align="flex-end">
          <Button variant="outline" color="gray" onClick={() => { setClickedTrash(false); setShowConfirmDialog(false) }}>Huỷ</Button>
          <Button color="red" onClick={() => { handleDelete(); setShowConfirmDialog(false) }}>Xoá</Button>
        </Group>
      </Dialog>
    </>
  );
}

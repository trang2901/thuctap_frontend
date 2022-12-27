import React, { useEffect, useState } from 'react';
import {
  createStyles, Button, Text, Navbar, Group, Code,
  useMantineColorScheme, SegmentedControl, Center, Box, List, Container, Table, TextInput, Grid, NumberInput, Space
} from '@mantine/core';
import RichTextEditor from 'components/Editor';
import { ModalsProvider } from '@mantine/modals';
import { MantineProvider } from '@mantine/core';
import { useModals } from '@mantine/modals';
import Modal from 'components/Modal';
import { useForm } from '@mantine/form';
import Layout from 'layouts';
import { date, z } from 'zod';
import { zodResolver } from '@mantine/form';
import { DateRangePicker } from '@mantine/dates';
import { DatePicker, getMonthDays, getWeekdaysNames } from '@mantine/dates';
import { Calendar, } from 'tabler-icons-react';
import { Day } from '@mantine/dates/lib/components/Month/Day/Day';
import { showNotification } from '@mantine/notifications';
import dayjs from 'dayjs';
import Breadcrumb from 'components/Breadcrumb'
import Link from 'next/link';
// import Gird from 'components/Gird';
const useStyles = createStyles((theme) => ({
  main: {
    position: 'relative',
    marginLeft: 400,
    marginTop: -900
  },
  icon: {
    position: 'relative',
    marginLeft: 150,
    marginTop: 10,


  },
  input: {
    height: 'auto',
    paddingTop: 18,
  },
  text: {
    marginLeft: 200,
    marginTop: 70,

  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    color: 'red',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
  container: {

  }, link: {
    color: 'white',
    textDecoration: 'none'
  },
  link2: {
    color: 'blue',
    textDecoration: 'none'
  },
  container1: {

    background: 'PowderBlue',
    minWidth: 950,

  }
}));
ThemCongViec.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">
    {page}
  </Layout>;
};

export default function ThemCongViec() {
  const { classes } = useStyles();
  // const modals = useModals();
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  // let objDateDaChon = dayjs(data);
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Xác nhận đăng tin',
      children: (

        <Text size="sm">
          Bạn có chắc muốn đăng tin mới không?
        </Text>
      ),
      labels: { confirm: 'Xác nhận', cancel: 'Hủy' },
      onCancel: () => showNotification({
        title: 'Thông báo',
        message: 'Hủy đăng tin!',
      }),
      onConfirm: () => showNotification({
        title: 'Thông báo',
        message: 'Đăng tin thành công ',
      })
    }
    );
  const [showChild, setShowChild] = useState(false);
  // <p><br /></p>
  const schema = z.object({
    mota: z.string().min(20, { message: 'Vui lòng nhập từ 20 ký tự trở lên' }),
    // email: z.string().email({ message: 'Invalid email' }),
    // // email1: z.string()._getType({ message: 'Invalid email' }),
    yeucaucv: z.string().min(20, { message: 'Vui lòng nhập từ 20 ký tự trở lên' }),
    soluong: z.number().min(1, { message: 'Số lượng phải lớn hơn 1' }),
    quyenloi: z.string().min(20, { message: 'Vui lòng nhập từ 20 ký tự trở lên' }),

    // mucluong: z.string().min(2, { message: 'Vui lòng nhập trường' }),
    date: z.custom((data: any) => {
      const ngayhientai = dayjs();
      // debugger;
      const objDateDaChon = dayjs(data);
      console.log(data);
      console.log(ngayhientai);
      return (objDateDaChon > ngayhientai);
    }, { message: "Ngày đã chọn phải lớn hơn hiện tại" })

  });
  const items = [
    { title: 'Quản Lý Đăng Tin', href: '/admin/QuanLyDangTin' },
    { title: 'Thêm Công Việc', href: '/admin/QuanLyDangTin/ThemCongViec' },
  
  ]
  const form = useForm({
    schema: zodResolver(schema),

    initialValues: {
      // email: '',
      mota: '',
      soluong: '',
      mucluong: '',
      yeucaucv: '',
      quyenloi: '',
      date: '',
      test: '',

      termsOfService: false,
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    console.log('da submit');
    // Du lieu hop le da okey -> Data Valid
    openConfirmModal();

  }

  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (
    <div>
       <Breadcrumb className='test' items={items}></Breadcrumb>
      <Space h="md" />
      <form onSubmit={form.onSubmit(handleSubmit)}>

        {/* console.log(values))}> */}
        Mô tả công việc
        <RichTextEditor
          className={'error-input'}
          {...form.getInputProps('mota')}
        // required
        />

        Yêu cầu công việc
        <RichTextEditor
          className={'error-input'}
          //  value={value1} onChange={setValue1}
          {...form.getInputProps('yeucaucv')}
        />
        Quyền lợi được hưởng
        <RichTextEditor
          className={'error-input'}
          // value={value2} onChange={setValue2}
          {...form.getInputProps('quyenloi')}
        />
        <Grid>
          <Grid.Col span={6}>

            <TextInput
              placeholder="Nhập tên vị trí"
              label="Tên vị trí"
              required
            // {...form.getInputProps('email')}
            />
            <TextInput
              placeholder=" Nhập mức lương"
              label="Mức lương"
              required
            //  {...form.getInputProps('mucluong')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              required
              label="Số lượng"
              placeholder="Nhập số lượng"
              {...form.getInputProps('soluong')}
            />
            <DatePicker icon={<Calendar size={16} />}
              //  defaultValue today={new Date()}
              //   minDate= {today}
              placeholder="Chọn hạn nộp"
              label="Hạn nộp"
              {...form.getInputProps('date')}
              required
            />
          </Grid.Col>
        </Grid>
        <Space h="lg" />
        {/* <Grid>
          <Grid.Col span={6}>
            Tro Ve
          </Grid.Col>
          <Grid.Col span={6}>
            Xac nhan
          </Grid.Col>
          </Grid> */}
        <Center>

          <Button
          //  color={'pink'}
variant='light'
          >

            <a className={classes.link2}
              href={'/admin/QuanLyDangTin'}
            >
              <a>Trở về</a>
            </a>

          </Button>
          <Space w="xl" />
          <Button type="submit">
            Xác nhận
          </Button>
        </Center>
      </form>
    </div>
  );
}
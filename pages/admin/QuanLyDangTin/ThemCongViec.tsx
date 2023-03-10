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
      title: 'X??c nh???n ????ng tin',
      children: (

        <Text size="sm">
          B???n c?? ch???c mu???n ????ng tin m???i kh??ng?
        </Text>
      ),
      labels: { confirm: 'X??c nh???n', cancel: 'H???y' },
      onCancel: () => showNotification({
        title: 'Th??ng b??o',
        message: 'H???y ????ng tin!',
      }),
      onConfirm: () => showNotification({
        title: 'Th??ng b??o',
        message: '????ng tin th??nh c??ng ',
      })
    }
    );
  const [showChild, setShowChild] = useState(false);
  // <p><br /></p>
  const schema = z.object({
    mota: z.string().min(20, { message: 'Vui l??ng nh???p t??? 20 k?? t??? tr??? l??n' }),
    // email: z.string().email({ message: 'Invalid email' }),
    // // email1: z.string()._getType({ message: 'Invalid email' }),
    yeucaucv: z.string().min(20, { message: 'Vui l??ng nh???p t??? 20 k?? t??? tr??? l??n' }),
    soluong: z.number().min(1, { message: 'S??? l?????ng ph???i l???n h??n 1' }),
    quyenloi: z.string().min(20, { message: 'Vui l??ng nh???p t??? 20 k?? t??? tr??? l??n' }),

    // mucluong: z.string().min(2, { message: 'Vui l??ng nh???p tr?????ng' }),
    date: z.custom((data: any) => {
      const ngayhientai = dayjs();
      // debugger;
      const objDateDaChon = dayjs(data);
      console.log(data);
      console.log(ngayhientai);
      return (objDateDaChon > ngayhientai);
    }, { message: "Ng??y ???? ch???n ph???i l???n h??n hi???n t???i" })

  });
  const items = [
    { title: 'Qu???n L?? ????ng Tin', href: '/admin/QuanLyDangTin' },
    { title: 'Th??m C??ng Vi???c', href: '/admin/QuanLyDangTin/ThemCongViec' },
  
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
        M?? t??? c??ng vi???c
        <RichTextEditor
          className={'error-input'}
          {...form.getInputProps('mota')}
        // required
        />

        Y??u c???u c??ng vi???c
        <RichTextEditor
          className={'error-input'}
          //  value={value1} onChange={setValue1}
          {...form.getInputProps('yeucaucv')}
        />
        Quy???n l???i ???????c h?????ng
        <RichTextEditor
          className={'error-input'}
          // value={value2} onChange={setValue2}
          {...form.getInputProps('quyenloi')}
        />
        <Grid>
          <Grid.Col span={6}>

            <TextInput
              placeholder="Nh???p t??n v??? tr??"
              label="T??n v??? tr??"
              required
            // {...form.getInputProps('email')}
            />
            <TextInput
              placeholder=" Nh???p m???c l????ng"
              label="M???c l????ng"
              required
            //  {...form.getInputProps('mucluong')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              required
              label="S??? l?????ng"
              placeholder="Nh???p s??? l?????ng"
              {...form.getInputProps('soluong')}
            />
            <DatePicker icon={<Calendar size={16} />}
              //  defaultValue today={new Date()}
              //   minDate= {today}
              placeholder="Ch???n h???n n???p"
              label="H???n n???p"
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
              <a>Tr??? v???</a>
            </a>

          </Button>
          <Space w="xl" />
          <Button type="submit">
            X??c nh???n
          </Button>
        </Center>
      </form>
    </div>
  );
}
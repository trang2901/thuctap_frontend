import { Grid, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useModals } from '@mantine/modals';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState();

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (

    <Grid>
      {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
      <Grid.Col span={6}>

        <TextInput
          placeholder="Nhập tên vị trí"
          label="Tên vị trí"
          required
          
          {...form.getInputProps('email')}
        />
        <TextInput
          placeholder=" Nhập mức lương"
          label="Mức lương"
          required
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput
          placeholder="Nhập số lượng"
          label="Số lượng"
          required
        />
        <TextInput
          placeholder="Nhập yêu cầu"
          label="Yêu cầu"
          required
        />
      </Grid.Col>
      {/* </form> */}
    </Grid>
  );
}
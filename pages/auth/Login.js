import React from "react";
import useAuth from "../../hooks/useAuth";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Box,
  Group,
} from "@mantine/core";
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // minHeight: 900,
    // height: window.innerHeight,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderLeft: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    // minHeight: 900,
    height: "100%",
    maxWidth: 450,
    paddingBottom: 80,
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Login() {
  const { login } = useAuth();
  const { classes } = useStyles();

  const handleLogin = (formData) => {
    login(formData.username, formData.password)
    // signIn('credentials', { redirect: false, username: formData.username, password: formData.password })
    //   .then((result) => {
    //     if (result.ok) {
    //       login()
    //     }
    //   })
  };

  const form = useForm({
    initialValues: {
      username: 'lmtri',
      password: '123',
      keepLoggedIn: false
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      username: (value) => value.length < 1 ? "Nhập tên người dùng" : null,
      password: (value) => value.length < 1 ? "Nhập mật khẩu" : null
    },
  });

  return (
    <Box className={classes.wrapper} sx={{ height: "100vh" }}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Dịch vụ công CUSC!
        </Title>

        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
            <TextInput
              required
              label="Tên người dùng"
              placeholder="Username"
              {...form.getInputProps('username')}
            />
            <PasswordInput
              required
              label="Mật khẩu"
              placeholder="Password" mt="md" size="md"
              {...form.getInputProps('password')}
            />

            <Checkbox
              mt="md"
              label="Nhớ đăng nhập"
              {...form.getInputProps('keepLoggedIn', { type: 'checkbox' })}
            />

            <Group position="right" mt="md">
              <Button type="submit">Đăng nhập</Button>
            </Group>
          </form>
        </Box>

        {/* <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={handleLogin}>
          Đăng nhập
        </Button> */}

        <Text align="center" mt="md" sx={{ paddingBottom: 40 }}>
          Don&apos;t have an account?{" "}
          <Anchor href="#" weight={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </Box>
  );
}

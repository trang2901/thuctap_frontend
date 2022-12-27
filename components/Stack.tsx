import { Stack, Button, TextInput, Textarea } from '@mantine/core';

export default function Demo() {
  return (
    <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
      {/* <Button variant="outline">Mo ta cong 1 aw ă â ê ô @  </Button> */}
      
      <Textarea
     style={{left: 50, fontSize: 9, right: 9,}}
      label="Mo ta cong viec" placeholder="Noi dung mo ta"  />
       <Textarea 
     style={{left: 50, fontSize: 9, right: 9,}}
      label="Yeu cau cong viec" placeholder="Noi dung mo ta"  />
       <Textarea 
     style={{left: 50, fontSize: 9, right: 9,}}
      label="Quyen loi" placeholder="Noi dung mo ta"  />
     
      {/* <Button variant="outline">Yeu cau cong viec</Button>
      <Button variant="outline">Yeu cau quyen loi duoc huong</Button> */}
    </Stack>
  );
}
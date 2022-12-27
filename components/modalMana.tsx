import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import Modal from 'components/Modal'
import { Notification } from '@mantine/core';
import { Check, X } from 'tabler-icons-react';
export default function App() {
  return (
      
    <MantineProvider>
      <ModalsProvider>
        <Modal/>
        {/* <Notification title="Default notification">
        This is default notification with title and body
      </Notification> */}
      </ModalsProvider>
    </MantineProvider>
  );
}
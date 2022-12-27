import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';

import { showNotification } from '@mantine/notifications';

export default function Demo() {
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
  return <Button
    onClick={openConfirmModal}
    // type="submit"

  >
    Đăng tin</Button>;
}
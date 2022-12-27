import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
export default function Demo() {
    const modals = useModals();

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Nộp hồ sơ',
            centered: true,
            children: (
                <Text size="sm">
                    Bạn có chắc chắn muốn nộp không ?
                </Text>
            ),
            labels: { confirm: 'Nộp', cancel: "Trở về" },
            confirmProps: { color: 'blue' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () =>showNotification({
                title: 'Thông báo',
                message: 'Nộp thành công ! :)',
              })
                
        });

    return <Button onClick={openDeleteModal} color="blue">Nộp</Button>;
}
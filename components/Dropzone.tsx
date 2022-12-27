import { Group, Text, MantineTheme, MantineSize } from '@mantine/core';
import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react';
import { DropzoneStatus } from '@mantine/dropzone';

{/* <Dropzone
    onDrop={(files) => console.log('accepted files', files)}
    onReject={(files) => console.log('rejected files', files)}
    maxSize={3 * 1024 ** 2}
    accept={IMAGE_MIME_TYPE}
>
    {(status) => dropzoneChildren(status, theme)}
</Dropzone> */}

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : status.rejected
            ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7];
}

function ImageUploadIcon({
    status,
    ...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme, uploadIconSize = 70, uploadTextTitleSize: MantineSize = 'md', uploadTextDescriptionSize: MantineSize = 'xs') => (
    <Group position="center" spacing="md" style={{ minHeight: 100, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={uploadIconSize} />

        <div>
            <Text size={uploadTextTitleSize} inline>
                Drag images here or click to select files
            </Text>
            <Text size={uploadTextDescriptionSize} color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
            </Text>
        </div>
    </Group>
);

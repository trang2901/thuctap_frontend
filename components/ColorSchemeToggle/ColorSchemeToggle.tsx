import { ActionIcon, Group, MantineNumberSize, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

interface Props {
  size: MantineNumberSize
}

export const ColorSchemeToggle: React.FC<Props> = ({size}) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" mt="md">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size={size}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <Sun size={24} /> : <MoonStars size={24} />}
      </ActionIcon>
    </Group>
  );
}

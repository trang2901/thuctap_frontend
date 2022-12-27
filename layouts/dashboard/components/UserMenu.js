import { Menu, Divider, Text, useMantineColorScheme } from "@mantine/core";
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight, Badge } from "tabler-icons-react";
import useAuth from "../../../hooks/useAuth";
import { ColorSchemeToggle } from "../../../components/ColorSchemeToggle/ColorSchemeToggle";
import Link from "next/link";

export default function UserMenu({ control }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { logout } = useAuth();

  return (
    <Menu control={control} transition="skew-up" placement="end">
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Settings size={14} />}><Link href={'/profile'}><Text size="sm">Settings</Text></Link></Menu.Item>
      <Menu.Item icon={<MessageCircle size={14} />}><Link href={'/'}><Text size="sm">Messages</Text></Link></Menu.Item>
      <Menu.Item icon={<Photo size={14} />}><Link href={'/'}><Text size="sm">Gallery</Text></Link></Menu.Item>
      <Menu.Item
        icon={<Search size={14} />}
        rightSection={
          <Text size="xs" color="dimmed">
            ⌘K
          </Text>
        }
      >
        Search
      </Menu.Item>
      <Divider />
      <Menu.Item icon={<Photo size={14} />} onClick={() => toggleColorScheme()}>
        Đổi giao diện Sáng/Tối
      </Menu.Item>
      <Divider />
      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<ArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
      <Divider />
      <Menu.Item color="red" icon={<Trash size={14} />} onClick={logout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );
}

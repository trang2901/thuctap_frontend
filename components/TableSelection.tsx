import React, { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, ActionIcon, Button, useMantineTheme } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  data: any,
  columns: { key: string, label: string }[],
  onClickEdit: any,
  onClickTrash: any,
  onClickAdd: any,
  onClickItem: any,
  avatar: boolean,
  keyID: string
}

const TableSelection: React.FC<Props> = ({ data, columns, onClickAdd, onClickEdit, onClickTrash, onClickItem, avatar = false, keyID = 'id' }) => {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['']);
  const theme = useMantineTheme()
  const { t, lang } = useTranslation();

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item: any) => item[keyID])));

  const rows = data.map((item: any) => {
    const selected = selection.includes(item[keyID]);
    return (
      <tr key={item[keyID]} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item[keyID])}
            onChange={() => toggleRow(item[keyID])}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            {avatar && <Avatar size={26} src={item.avatar} radius={26} />}
            <Text size="sm" weight={500}>
              {item[columns[0].key]}
            </Text>
          </Group>
        </td>
        {
          columns.slice(1).map((col, index) => <td key={index}>{item[col.key]}</td>)
        }
        <td style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
          <ActionIcon variant="hover" onClick={() => { onClickTrash(true); onClickItem(item[keyID]) }}><Trash size={25} color={"red"} /></ActionIcon>
          <ActionIcon variant="hover" onClick={() => { onClickEdit(true); onClickItem(item[keyID]) }}><Edit size={25} /></ActionIcon>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
                transitionDuration={0}
              />
            </th>
            {
              columns.map((col, index) => <th key={index}>{col.label}</th>)
            }
            <th style={{ flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {selection.length > 0 && <Text size="md" weight={700} color="red">{t('layout:delete-selected')}</Text>}
              <Button onClick={() => onClickAdd(true)} color={theme.primaryColor} style={{ display: "flex", marginLeft: 10 }}><Text size='sm' color={"white"}>Thêm</Text></Button></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableSelection

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));


// import React, { useEffect, useState } from 'react';
// import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, ActionIcon, Button, useMantineTheme } from '@mantine/core';
// import { Edit, Trash } from 'tabler-icons-react';
// import useTranslation from 'next-translate/useTranslation';

// interface Props {
//   data: { avatar: string; lvma: string; lv_ten: string; lv_ngaycapnhatcuoi: string; lv_id: string; lv_ghichu: string }[];
//   avatar: boolean
//   onClickEdit: any,
//   onClickTrash: any,
//   onClickThemlinhVuc: any,
//   onClickItem: any
// }

// const TableSelection: React.FC<Props> = ({ data, avatar, onClickThemlinhVuc, onClickEdit, onClickTrash, onClickItem }) => {
//   const { classes, cx } = useStyles();
//   const [selection, setSelection] = useState(['']);
//   const theme = useMantineTheme()
//   const { t, lang } = useTranslation();

//   const toggleRow = (id: string) =>
//     setSelection((current) =>
//       current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
//     );
//   const toggleAll = () =>
//     setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.lv_id)));

//   const rows = data.map((item) => {
//     const selected = selection.includes(item.lv_id);
//     return (
//       <tr key={item.lv_id} className={cx({ [classes.rowSelected]: selected })}>
//         <td>
//           <Checkbox
//             checked={selection.includes(item.lv_id)}
//             onChange={() => toggleRow(item.lv_id)}
//             transitionDuration={0}
//           />
//         </td>
//         <td>
//           <Group spacing="sm">
//             {avatar && <Avatar size={26} src={item.avatar} radius={26} />}
//             <Text size="sm" weight={500}>
//               {item.lvma}
//             </Text>
//           </Group>
//         </td>
//         <td>{item.lv_ten}</td>
//         <td>{item.lv_ghichu}</td>
//         <td>{item.lv_ngaycapnhatcuoi}</td>
//         <td style={{ flexDirection: "row", display: "flex", justifyContent: "center" }}>
//           <ActionIcon variant="hover" onClick={() => {onClickTrash(true); onClickItem(item.lv_id)}}><Trash size={25} color={"red"} /></ActionIcon>
//           <ActionIcon variant="hover" onClick={() => {onClickEdit(true); onClickItem(item.lv_id)}}><Edit size={25} /></ActionIcon>
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <ScrollArea>
//       <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
//         <thead>
//           <tr>
//             <th style={{ width: 40 }}>
//               <Checkbox
//                 onChange={toggleAll}
//                 checked={selection.length === data.length}
//                 indeterminate={selection.length > 0 && selection.length !== data.length}
//                 transitionDuration={0}
//               />
//             </th>
//             <th>Mã lĩnh vực</th>
//             <th>Tên lĩnh vực</th>
//             <th>Ghi chú</th>
//             <th>Lần cập nhật cuối</th>
//             <th style={{ flexDirection: "row", display: "flex", justifyContent: "center", alignItems: "center" }}>
//               {selection.length > 0 && <Text size="md" weight={700} color="red">{t('layout:delete-selected')}</Text>}
//               <Button onClick={() => onClickThemlinhVuc(true)} color={theme.primaryColor} style={{display: "flex", marginLeft: 10}}><Text size='sm' color={"white"}>Thêm lĩnh vực</Text></Button></th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </Table>
//     </ScrollArea>
//   );
// }

// export default TableSelection

// const useStyles = createStyles((theme) => ({
//   rowSelected: {
//     backgroundColor:
//       theme.colorScheme === 'dark'
//         ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
//         : theme.colors[theme.primaryColor][0],
//   },
// }));
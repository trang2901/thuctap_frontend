import { Button, Divider, Grid, MantineProvider, Space, Text } from '@mantine/core'
import React from 'react'
import GridQDCN from './GridQDCN'
import ModalsGeneral from './modalgeneral'
import { ModalsProvider } from '@mantine/modals';
import TableKNCN from './TableKNCN'
interface Props {
    onClickNext: any
}
const Tab4: React.FC<Props> = ({ onClickNext }) => {

    const handleClickNext = () => {
        onClickNext(4)
    }

    return (
        <>
            <Text>QUAN ĐIỂM CÁ NHÂN</Text>
            <Divider my="sm" variant="dashed" color={'dark'} />
            <GridQDCN />
            <Text>KỸ NĂNG CÁ NHÂN</Text>
            <Divider my="sm" variant="dashed" color={'dark'} />
            <TableKNCN />
            <Space h="md" />
            <Grid>
                <Grid.Col span={6}>
                </Grid.Col>
                <Grid.Col span={6} style={{ textAlign: 'right' }}>
                    <MantineProvider>
                        <ModalsProvider>
                            <ModalsGeneral />
                        </ModalsProvider>
                    </MantineProvider>
                </Grid.Col>
            </Grid>




        </>
    )
}
export default Tab4
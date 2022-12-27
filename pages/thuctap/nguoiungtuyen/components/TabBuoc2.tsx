import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Divider, Grid, Space, Text } from '@mantine/core'
import React from 'react'
import GridTTCN from './gridTTCN'
import GridTTGD from './gridTTGD'
import TableTT from './TableTT'
import {
    IconDefinition,
    findIconDefinition,
    library,
    config
} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false
library.add(fas)
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from "prop-types";
import { useState } from 'react';
const NextIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-right' })
const BackIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-left' })

interface Props {
    onClickNext: any
}

const Tab2: React.FC<Props> = ({ onClickNext }) => {

    function handleClickNext(index: number) {
        onClickNext(index)

    }

    return (
        <>
            <TableTT />
            <Text>(Liệt kê từ Phổ thông trung học trở lên, các kỹ năng mềm và ngoại ngữ)</Text>
            <Space h="md" />
            <div>
                <Grid>
                    <Grid.Col span={6}>

                        <Button onClick={() => handleClickNext(0)} variant="light"  >
                            <FontAwesomeIcon icon={BackIcon} size="sm" /><Space w={4}/> Trở Về
                        </Button>

                    </Grid.Col>
                    <Grid.Col span={6} style={{ textAlign: 'right' }}>

                        <Button onClick={() => handleClickNext(2)} >
                            Tiếp Theo <Space w={4}/><FontAwesomeIcon icon={NextIcon} size="sm" />
                        </Button>
                        
                    </Grid.Col>
                </Grid>

            </div>

        </>
    )
}
export default Tab2
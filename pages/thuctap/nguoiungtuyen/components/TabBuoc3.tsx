import { Button, Divider, Grid, Space, Text } from '@mantine/core'
import React from 'react'
import GridTTCN from './gridTTCN'
import GridTTGD from './gridTTGD'
import TableTT2 from './TableTT2'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NextIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-right' })
const BackIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-left' })
interface Props {
    onClickNext: any
}
const Tab3: React.FC<Props> = ({ onClickNext }) => {

    const handleClickNext = (index: number) => {
        onClickNext(index)
    }

    return (
        <>
           <TableTT2 />
            <Space h="md" />
            <div>
                <Grid>
                    <Grid.Col span={6}>
                    <Button onClick={()=> handleClickNext(1)}  variant="light">
                    <FontAwesomeIcon icon={BackIcon} size="sm" /> <Space w={4}/> Trở Về
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={6} style={{ textAlign: 'right'}}>
                    <Button onClick={()=>handleClickNext(3)} >
                            Tiếp Theo <Space w={4}/>  <FontAwesomeIcon icon={NextIcon} size="sm" />
                        </Button>
                    </Grid.Col>
                </Grid>

            </div>

        </>
    )
}
export default Tab3
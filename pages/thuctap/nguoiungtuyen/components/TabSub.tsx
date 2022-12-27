import { createStyles, MantineColor, Text } from '@mantine/core'
import React from 'react'

interface Props {
    label: string,
    subTitle: string,
    color: MantineColor
}

const TabSub: React.FC<Props> = ({ label, subTitle, color }) => {
    const { classes } = useStyles()
    return (<div className={classes.tabContainer}>
        <Text size='md' weight={"bold"} color={color}>{label}</Text>
        <Text size='xs' weight={"bold"} color={color}>{subTitle}</Text>
    </div>)
}

const useStyles = createStyles({
    tabContainer: {
        alignItems: 'center'
    }
})

export default TabSub
import React, { useState } from 'react';
import { createStyles, Radio, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper, Table, RadioGroup } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Clock, Coin, Heart } from 'tabler-icons-react';
import Link from 'next/link';
const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: 'auto',
        paddingTop: 18,
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },
    button: {
        background: 'green',
        radius: 0
    },
    button1: {
        background: 'red'
    },
    table: {
        textAlign: 'center',
        border: 1
    },
    table1: {
        textAlign: 'center',
        justifyItems: 'center'
        // border: 1
    },
}));
const data = [
    {
        "backend": {
            "nn1": "Ngôn ngữ C",
            "nn2": "Ngôn ngữ C++",
            "nn3": "Ngôn ngữ C#"
        },
        "frontend": {
            "nn1": "Ajax",
            "nn2": "Angular",
            "nn3": "Bootstrap"
        }
    }
]
export default function Demo() {
    const { classes } = useStyles();
    const [group1, setGroup1] = useState('');
    const [group2, setGroup2] = useState('');
    const [group3, setGroup3] = useState('');
    const [group4, setGroup4] = useState('');
    const [group5, setGroup5] = useState('');
    const [group6, setGroup6] = useState('');
    // You can add these classes as classNames to any Mantine input, it will work the same
    return (
        <div>
            <Table className={classes.table} sx={(theme) => ({
                td: {
                    border: '1px solid grey !important',

                },
                th: {
                    border: '1px solid grey !important',
                    textalign:'center'


                },
            })}>
                 {/* style={{ justifyContent: 'center' }} */}
                <thead>
                    <tr >
                        <th rowSpan={2} className={classes.table1} >Tên</th>

                        <th colSpan={5}><Center><Text style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>Mức độ thông thạo</Text></Center></th>
                    </tr>
                    <tr >
                        <td>Mức 1</td>
                        <td>Mức 2</td>
                        <td>Mức 3</td>
                        <td>Mức 4</td>
                        <td>Mức 5</td>
                    </tr>
                    <th align={'left'}> BACKEND</th>
                              
        
                 <th colSpan={5} align={'left'}></th>
                    {data && data.map((item, index) => {
                        return (
                            <>
                                <tr >
                                    <td align={'left'}> {item.backend.nn1}</td>

                                    <td> <Radio checked={group1 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup1("1")} /></td>
                                    <td> <Radio checked={group1 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup1("2")} /></td>
                                    <td> <Radio checked={group1 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup1("3")} /></td>
                                    <td> <Radio checked={group1 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup1("4")} /></td>
                                    <td> <Radio checked={group1 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup1("5")} /></td>
                                </tr>
                                <tr >
                                    <td align={'left'}> {item.backend.nn2}</td>

                                    <td> <Radio checked={group2 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup2("1")} /></td>
                                    <td> <Radio checked={group2 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup2("2")} /></td>
                                    <td> <Radio checked={group2 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup2("3")} /></td>
                                    <td> <Radio checked={group2 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup2("4")} /></td>
                                    <td> <Radio checked={group2 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup2("5")} /></td>
                                </tr>
                                <tr >
                                    <td align={'left'}> {item.backend.nn3}</td>

                                    <td> <Radio checked={group3 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup3("1")} /></td>
                                    <td> <Radio checked={group3 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup3("2")} /></td>
                                    <td> <Radio checked={group3 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup3("3")} /></td>
                                    <td> <Radio checked={group3 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup3("4")} /></td>
                                    <td> <Radio checked={group3 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup3("5")} /></td>
                                </tr>
                               <th align={'left'}>  FRONTEND</th>
                              
        
                              <th colSpan={5} align={'left'}></th>
                              
                             
                                <tr >
                                    <td align={'left'}> {item.frontend.nn1}</td>

                                    <td> <Radio checked={group4 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup4("1")} /></td>
                                    <td> <Radio checked={group4 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup4("2")} /></td>
                                    <td> <Radio checked={group4 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup4("3")} /></td>
                                    <td> <Radio checked={group4 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup4("4")} /></td>
                                    <td> <Radio checked={group4 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup4("5")} /></td>
                                </tr>
                                <tr >
                                    <td align={'left'}> {item.frontend.nn2}</td>
                                    <td> <Radio checked={group5 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup5("1")} /></td>
                                    <td> <Radio checked={group5 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup5("2")} /></td>
                                    <td> <Radio checked={group5 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup5("3")} /></td>
                                    <td> <Radio checked={group5 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup5("4")} /></td>
                                    <td> <Radio checked={group5 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup5("5")} /></td>
                                </tr>
                                <tr >
                                    <td align={'left'}> {item.frontend.nn3}</td>
                                    <td> <Radio checked={group6 === '1'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup6("1")} /></td>
                                    <td> <Radio checked={group6 === '2'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup6("2")} /></td>
                                    <td> <Radio checked={group6 === '3'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup6("3")} /></td>
                                    <td> <Radio checked={group6 === '4'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup6("4")} /></td>
                                    <td> <Radio checked={group6 === '5'} value="react" size={'xs'} style={{ justifyContent: 'center' }} onClick={() => setGroup6("5")} /></td>
                                </tr>
                            </>
                        )
                    }
                    )}
                </thead>
            </Table>
        </div>
    );
}
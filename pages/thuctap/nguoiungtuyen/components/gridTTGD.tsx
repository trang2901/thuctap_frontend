import React from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Clock, Coin, Heart } from 'tabler-icons-react';
import Link from 'next/link';
export default function Demo() {
    // You can add these classes as classNames to any Mantine input, it will work the same


    return (
        <div>
            <Grid>

                <Grid.Col span={6}>
                    <div><Text>Thông tin về cha</Text></div>
                    <Grid>
                        <Grid.Col span={8}>
                            <TextInput
                                placeholder="Họ Tên"
                                required
                                radius={0}
                            />

                        </Grid.Col>
                        <Grid.Col span={4}>
                            <DatePicker placeholder="Chọn ngày sinh" required radius={0} />
                        </Grid.Col>

                    </Grid>
                    <Space h="md" />
                    <TextInput
                        placeholder="Nghề Nghiệp"
                        required
                        radius={0}
                    />
                    <Space h="md" />
                    <TextInput
                        placeholder="CMND/CCCD"
                        required
                        radius={0}
                    />
                </Grid.Col>


                <Grid.Col span={6}>
                    <div><Text>Thông tin về mẹ</Text></div>
                    <Grid>
                        <Grid.Col span={8}>
                            <TextInput
                                placeholder="Họ Tên"
                                required
                                radius={0}
                            />

                        </Grid.Col>
                        <Grid.Col span={4}>
                            <DatePicker placeholder="Chọn ngày sinh" required radius={0} />
                        </Grid.Col>

                    </Grid>
                    <Space h="md" />
                    <TextInput
                        placeholder="Nghề Nghiệp"
                        required
                        radius={0}
                    />
                    <Space h="md" />
                    <TextInput
                        placeholder="CMND/CCCD"
                        required
                        radius={0}
                    />
                </Grid.Col>

            </Grid>
            <Space h="md" />
            <TextInput
                placeholder=""
                label="Địa Chỉ Hiện Tại Của Cha/Mẹ"
                radius={0}
            />

            <TextInput
                placeholder=""
                label="Thông tin về các Anh/Chị/Em"
                radius={0}
            />
        </div>
    );
}
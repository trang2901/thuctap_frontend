import React from 'react';
import { createStyles, Select, TextInput, Button, Container, Grid, Image, Space, Stack, Text, Tabs, Divider, Center, AspectRatio, List, Group, Textarea, Paper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Clock, Coin, Heart } from 'tabler-icons-react';
import Link from 'next/link';
export default function Demo() {
    // You can add these classes as classNames to any Mantine input, it will work the same
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>


            <Grid>
                <Grid.Col span={6}>
                    <TextInput

                        label="Họ tên"
                        required
                        radius={0}
                        {...form.getInputProps('email')}
                    />
                    <Grid>
                        <Grid.Col span={6}>
                            <DatePicker placeholder="Chọn ngày sinh" label="Ngày sinh" required />
                            <TextInput
                                placeholder=""
                                label="Dân Tộc"
                                required
                                radius={0}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Select
                                label="Giới tính"
                                placeholder="Chọn giới tính"
                                data={[

                                    { value: 'nam', label: 'Nam' },
                                    { value: 'nữ', label: 'Nữ' },
                                    { value: 'khác', label: 'Khác' },

                                ]}
                                required
                                radius={0}
                            />
                            <TextInput
                                placeholder=""
                                label="Tôn Giáo"
                                required
                                radius={0}
                            />
                        </Grid.Col>

                    </Grid>
                    <TextInput
                        placeholder=""
                        label="Tình Trạng Hôn Nhân"

                        radius={0}
                    />
                    <Grid>
                        <Grid.Col span={6}>

                            <TextInput
                                placeholder=""
                                label="Ngày Vào Đoàn"
                                radius={0}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>

                            <TextInput
                                placeholder=""
                                label="Ngày Vào Đảng"
                                radius={0}
                            />
                        </Grid.Col>

                    </Grid>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Grid>
                        <Grid.Col span={6}>

                            <TextInput
                                placeholder=""
                                label="Điện Thoại"
                                required
                                radius={0}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>

                            <TextInput
                                placeholder=""
                                label="CMND/CCCD"
                                required
                                radius={0}
                            />
                        </Grid.Col>

                    </Grid>
                    <TextInput
                        placeholder=""
                        label="Email"
                        required
                        radius={0}
                    />
                    <TextInput
                        placeholder=""
                        label="Quê Quán"
                        required
                        radius={0}
                    />
                    <TextInput
                        placeholder=""
                        label="Địa Chỉ Liên Hệ"
                        required
                        radius={0}
                    />
                    <TextInput
                        placeholder=""
                        label="Công Việc"
                        required
                        radius={0}
                    />
                </Grid.Col>


            </Grid>
            
        </form>
    );
}
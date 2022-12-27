import { Button, Divider, Space, Text, createStyles, Grid, TextInput, Select } from '@mantine/core'
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import React, { useEffect, useState } from 'react'
import GridTTCN from './gridTTCN'
import GridTTGD from './gridTTGD'
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from '@mantine/dates';
const NextIcon: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'angles-right' })

const useStyles = createStyles((theme) => ({
    main: {
        position: 'relative',
        marginLeft: 400,
        marginTop: -900
    },
}));
interface Props {
    onClickNext: any
}

const schema = z.object({
    ten: z.string().min(2, { message: 'Tên phải có ít nhất 2 ký tự' }),
    date: z.date(),
    date1: z.date(),
    date2: z.date(),
    gioitinh: z.string().min(1, { message: 'Chọn giới tính' }),
    email: z.string().email({ message: 'Email không hợp lệ' }),
    sdt: z.string().length(10, { message: 'Số điện thoại không hợp lệ' }),
    dantoc: z.string().min(2, { message: 'Dân tộc phải có ít nhất 2 ký tự' }),
    tongiao: z.string().min(2, { message: 'Tôn giáo phải có ít nhất 2 ký tự' }),
    quequan: z.string().min(2, { message: 'Quê quán phải có ít nhất 2 ký tự' }),
    diachi: z.string().min(2, { message: 'Địa chỉ phải có ít nhất 2 ký tự' }),
    congviec: z.string().min(2, { message: 'Công việc phải có ít nhất 2 ký tự' }),
    hotencha: z.string().min(2, { message: 'Họ tên phải có ít nhất 2 ký tự' }),
    hotenme: z.string().min(2, { message: 'Họ tên phải có ít nhất 2 ký tự' }),
    congvieccha: z.string().min(2, { message: 'Nghề nghiệp phải có ít nhất 2 ký tự' }),
    congviecme: z.string().min(2, { message: 'Nghề nghiệp phải có ít nhất 2 ký tự' }),
    cmnd: z.string().min(9, { message: 'CMND/CCCD không hợp lệ' }).max(12, { message: 'CMND/CCCD không hợp lệ' }),
    cmnd1: z.string().min(9, { message: 'CMND/CCCD không hợp lệ' }).max(12, { message: 'CMND/CCCD không hợp lệ' }),
    cmnd2: z.string().min(9, { message: 'CMND/CCCD không hợp lệ' }).max(12, { message: 'CMND/CCCD không hợp lệ' }),

});

const Tab1: React.FC<Props> = ({ onClickNext }) => {
    const { classes } = useStyles();
    const handleClickNext = () => {
        onClickNext(1)
    }
    const form = useForm({
        schema: zodResolver(schema),
        initialValues: {
            email: '',
            ten: '',
            date: '',
            date1: '',
            date2: '',
            gioitinh: '',
            sdt: '',
            dantoc: '',
            tongiao: '',
            quequan: '',
            diachi: '',
            congviec: '',
            hotencha: '',
            hotenme: '',
            congvieccha: '',
            congviecme: '',
            cmnd: '',
            termsOfService: false,
            cmnd1: '',
            cmnd2: '',
        }
    });
    return (
        <>
            <form onSubmit={form.onSubmit((values) => handleClickNext())}>
                <Text>THÔNG TIN CÁ NHÂN</Text>
                <Divider my="sm" variant="dashed" color={'dark'} />
                <Grid>
                    <Grid.Col span={6}>
                        <TextInput
                            label="Họ tên"
                            required
                            radius={0}
                            {...form.getInputProps('ten')}/>
                        <Grid>
                            <Grid.Col span={6}>
                                <DatePicker placeholder="Chọn ngày sinh" label="Ngày sinh" required {...form.getInputProps('date')} />
                                <TextInput
                                    placeholder=""
                                    label="Dân Tộc"
                                    required
                                    radius={0}
                                    {...form.getInputProps('dantoc')}/>
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
                                    {...form.getInputProps('gioitinh')}
                                />
                                <TextInput
                                    placeholder=""
                                    label="Tôn Giáo"
                                    required
                                    radius={0}
                                    {...form.getInputProps('tongiao')}
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
                                    {...form.getInputProps('sdt')}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    placeholder=""
                                    label="CMND/CCCD"
                                    required
                                    radius={0}
                                    {...form.getInputProps('cmnd')}
                                />
                            </Grid.Col>
                        </Grid>
                        <TextInput
                            placeholder=""
                            label="Email"
                            required
                            radius={0}
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            placeholder=""
                            label="Quê Quán"
                            required
                            radius={0}
                            {...form.getInputProps('quequan')}
                        />
                        <TextInput
                            placeholder=""
                            label="Địa Chỉ Liên Hệ"
                            required
                            radius={0}
                            {...form.getInputProps('diachi')}
                        />
                        <TextInput
                            placeholder=""
                            label="Công Việc"
                            required
                            radius={0}
                            {...form.getInputProps('congviec')}
                        />
                    </Grid.Col>
                </Grid>
{/* ------------------------------------------------------------------------------------------------------------------ */}
                <Text>THÔNG TIN GIA ĐÌNH</Text>
                <Divider my="sm" variant="dashed" color={'dark'} />
                <Grid>
                    <Grid.Col span={6}>
                        <fieldset className='fieldset'>

                            <legend>Thông tin về cha</legend>
                            {/* <div><Text>Thông tin về cha</Text></div> */}
                            <Grid>
                                <Grid.Col span={8}>
                                    <TextInput
                                        label="Họ tên Cha"
                                        placeholder=""
                                        required
                                        radius={0}
                                        {...form.getInputProps('hotencha')}
                                    />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <DatePicker label="Ngày sinh" placeholder="Chọn ngày sinh" required radius={0} {...form.getInputProps('date1')}/>
                                </Grid.Col>
                            </Grid>
                            <Space h="md" />
                            <TextInput
                                label="Nghề Nghiệp"
                                placeholder=""
                                required
                                radius={0}
                                {...form.getInputProps('congvieccha')}

                            />
                            <Space h="md" />
                            <TextInput
                                label="CMND/CCCD"
                                placeholder=""
                                required
                                radius={0}
                                {...form.getInputProps('cmnd1')}
                            />
                        </fieldset>

                    </Grid.Col>

                    <Grid.Col span={6}>
                        <fieldset
                      className='fieldset'
                        >
                        {/* <div><Text>Thông tin về mẹ</Text></div> */}
                        <legend >Thông tin về mẹ</legend>
                        <Grid>
                            <Grid.Col span={8}>
                                <TextInput
                                    label="Họ Tên Mẹ"
                                    placeholder=""
                                    required
                                    radius={0}
                                    {...form.getInputProps('hotenme')}

                                />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <DatePicker label="Ngày sinh" placeholder="Chọn ngày sinh" radius={0} {...form.getInputProps('date2')} />
                            </Grid.Col>
                        </Grid>
                        <Space h="md" />
                        <TextInput
                            label="Nghề Nghiệp"
                            placeholder=""
                            required
                            radius={0}
                            {...form.getInputProps('congviecme')}
                        />
                        <Space h="md" />
                        <TextInput
                            label="CMND/CCCD"
                            placeholder=""
                            required
                            radius={0}
                            {...form.getInputProps('cmnd2')}
                        />
                        </fieldset>
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
                <Space h="md" />
                <div>
                    <Grid>
                        <Grid.Col span={6}>
                        </Grid.Col>
                        <Grid.Col span={6} style={{ textAlign: 'right' }}>
                            <Button type="submit"  >
                                Tiếp Theo <Space w={4} /><FontAwesomeIcon icon={NextIcon} size="sm" />
                            </Button>
                        </Grid.Col>
                    </Grid>
                </div>
            </form>
        </>
    )
}
export default Tab1
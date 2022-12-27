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
            <TextInput

                label="Lý do bạn dự tuyển vào Trung tâm Công nghệ Phần mềm Đại học Cần Thơ ?"

                radius={0}
            />
            <TextInput

                label="Thời gian bạn có thể cộng tác với Trung tâm là bao lâu ?"

                radius={0}
            />
            <TextInput

                label="Mức thu nhập mong muốn trong một tháng ?"

                radius={0}
            /><TextInput

                label="Bạn có thân nhân đang làm việc tại CUSC không ?"

                radius={0}
            /><TextInput

                label="Bạn biết đến thông tin tuyển dụng của CUSC từ nguồn nào ?"

                radius={0}
            />
            <Grid>
                <Grid.Col span={6}>
                    <Textarea
                        label="Điểm mạnh"

                        autosize
                        minRows={2}

                        radius={0}
                    />
                    <Textarea
                        label="Điểm yếu"

                        autosize
                        minRows={2}

                        radius={0}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                <Textarea
                        label="Ước mơ và dự định tương lai của bạn ?"

                        autosize
                        minRows={6.2}
                        
                        radius={0}
                    />
                </Grid.Col>

            </Grid>
        </div>
    );
}
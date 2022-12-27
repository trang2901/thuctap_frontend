import { Container, Title, useMantineTheme } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, MS_WORD_MIME_TYPE, MS_EXCEL_MIME_TYPE, MS_POWERPOINT_MIME_TYPE, PDF_MIME_TYPE, MIME_TYPES } from "@mantine/dropzone";

import { ReactElementLike, ReactNodeArray } from "prop-types";
import React, { useState, useEffect } from "react";



export default function Profile() {
    const theme = useMantineTheme()
    const [uploading, setUploading] = useState(false)
    const MAX_FILE_SIZE = 5 // MB

    const handleUploadFile = (files: File[]) => {
        console.log('accepted files', files)

    }
    const handleRejectedFiles = (files: any[]) => {
        console.log('rejected files', JSON.stringify(files))
        files.forEach(fileRejected => {
            console.log(`File "${fileRejected.file.path}" không hợp lệ: `);
            
            fileRejected.errors.forEach((f: { code: string, message: string }) => {
                switch(f.code){
                    case 'file-too-large':
                        console.log(`File không được phép lớn hơn ${MAX_FILE_SIZE}MB`);
                        break
                    default: console.log(`Lỗi không xác định`);
                }
            })
        });
    }

    return (
        <>
            <Container size="xl">
                
            </Container>
        </>
    );
}

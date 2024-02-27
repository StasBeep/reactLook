import * as React from "react";
import { Box } from '@mui/material'
import ReviewArray from '../components/ReviewArray';

const content = [
    {
        id: 1,
        name: 'Stas',
        size: 26
    },
    {
        id: 2,
        name: 'Liza',
        size: 28
    },
    {
        id: 3,
        name: 'Egor',
        size: 21
    },
    {
        id: 106,
        name: 'Mira',
        size: 42
    },
    {
        id: 12,
        name: 'Karina',
        size: 10
    }
]

/**
 * Заполнение массива новыми данными моки
 * @returns возврат new array
 */
const createArrayBlockchainInfo = () => {
    const arrayFile = [];
    for (let i = 0; i < arrayFile.length; i++) {
        arrayFile.push({
            id: 0,
            name: '',
            size: 0
        })
    }
    return arrayFile;
}

const ArrayContent = () => {
    const [arrayFile, setArrayFile] = React.useState(createArrayBlockchainInfo);

    return (
        <Box>
            <button onClick={() => setArrayFile(content)}>
                Жми, чтобы отобразить список
            </button>
            <ReviewArray arrayList={arrayFile} />
        </Box>
    )
}

export default ArrayContent;
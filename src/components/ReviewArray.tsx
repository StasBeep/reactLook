import { Box } from '@mui/material'
import IDataArray from '../interface/IDataArray'

interface ReviewArrayProps {
    arrayList: IDataArray[]
}

const ReviewArray = ({ arrayList }: ReviewArrayProps) => {
    return (
        <Box>
                {arrayList.map((item, index) => (
                    <ul key={index}>
                        <li>
                            {item.id}
                        </li>
                        <li>
                            {item.name}
                        </li>
                        <li>
                            {item.size}
                        </li>
                    </ul>
                ))}
        </Box>
    )
}

export default ReviewArray;
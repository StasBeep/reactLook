import * as React from 'react';
import { useEffect } from "react";
import { PageOptionItemEntity } from '../types/common.types';
import { getSettings } from '../api/controllers/admin-options-controller';

import {
    Button, Paper, Box,
    TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Modal
} from '@mui/material';


const ApiContent = () => {
    const [options, setOptions] = React.useState<PageOptionItemEntity>();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        console.log(options);
        getSettings({ page: 0, size: 10, sort: ["asc"] }).then(res => {
            setOptions(res.data);
            console.log(res.data);
        }).catch(error => {
            console.log(error.code)
        })
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <TableBody>
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                sx={{ cursor: 'pointer' }}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        inputProps={{
                                        }}
                                    />
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="none"
                                >
                                    #
                                </TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">Code</TableCell>
                                <TableCell align="right">CreatedAt</TableCell>
                                <TableCell align="right">UpdatedAt</TableCell>
                            </TableRow>
                            {options?.content.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                inputProps={{
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.title}</TableCell>
                                        <TableCell align="right">{row.value}</TableCell>
                                        <TableCell align="right">{row.code}</TableCell>
                                        <TableCell abbr='right'>
                                            {row.createdAt}
                                        </TableCell>
                                        <TableCell abbr='right'>

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={handleOpen}>Add +</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <input type="text" />
                    <input type="text" />
                </Box>
            </Modal>
        </Box>
    )
}

export default ApiContent;
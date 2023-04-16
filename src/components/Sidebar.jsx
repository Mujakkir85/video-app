import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = () => (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height: {sx: 'auto', md: "95%"},
        flexDirection: {md: 'column'}
    }}
    >
    {categories.map((categorie)=>(
        <button>
            <span>{categorie.icon}</span>
            <span>{categorie.name}</span>
        </button>
    ))}
       
    </Stack>
)

export default Sidebar;
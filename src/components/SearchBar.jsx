import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React from 'react';

const SearchBar = () => {
    return (
        <Paper
        component="from"
        onSubmit={()=>{}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            mr: { sm: 5 },
            //boxShadow: 'none' 
        }}
        elevation = {0} //boxShadow: 'none' both are same
        >
            <input
            className="search-bar"
            placeholder="Search..."
            value=""
            onChange={() => {}}
            />
            <IconButton type="submit"
            sx={{ p: '10px', color:'red'}}> 
            <Search></Search>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
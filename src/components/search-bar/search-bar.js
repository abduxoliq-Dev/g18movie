import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import {colors} from "../constants/constants";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const getValue = (e) => {
        setValue(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault();
        if (value) {
            navigate(`search/${value}`)
        }
        setValue('');
    }

    return (
        <Paper component={'form'}
               sx={{
                   border: `1px solid ${colors.color}`,
                   pl: 2,
                   alignContent: 'center',
                   boxShadow: 'none'
               }}
               onSubmit={searchHandler}
        >
            <input type="text" onChange={getValue} placeholder='Search movie...' className='search-bar' value={value}/>
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
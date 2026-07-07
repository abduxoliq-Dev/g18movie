import React from 'react';
import {Stack} from "@mui/material";
import {categories} from "../constants/constants";

const Category = ({chooseCategory, selectCategory}) => {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {categories.map(itm =>
                <button type='button' style={{
                    backgroundColor: selectCategory === itm.name ? '#062975' : 'transparent',
                    color: selectCategory === itm.name ? 'white' : '#062975'
                }} className='category-btn' onClick={() => chooseCategory(itm.name)}>
                    <span>{itm.icon}</span>
                    <span>{itm.name}</span>

                </button>
            )}
        </Stack>
    );
}

export default Category;
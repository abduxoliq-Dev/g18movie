import React, {useEffect, useState} from 'react';
import {Stack, Box, Container, Typography} from "@mui/material";
import Category from "../category/category";
import {colors} from "../constants/constants";
import {ApiService} from "../api-service/api-service";
import Videos from "../videos/videos";


const Main = () => {
    const [data, setData] = useState([]);
    const [selectCategory, setSelectCategory] = useState('New');
    const chooseCategory = (category) => setSelectCategory(category)

    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setData(data.items))
    }, [selectCategory])


    return (
        <Stack>
            <Category chooseCategory={chooseCategory} selectCategory={selectCategory}  />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectCategory} <span style={{color: colors.color}}>videos</span>
                    </Typography>
                </Container>
                <Videos data={data}/>
            </Box>


        </Stack>
    );
}

export default Main;
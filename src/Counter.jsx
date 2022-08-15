import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp'
import NotInterestedSharpIcon from '@mui/icons-material/NotInterestedSharp'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import {increment, decrement, reset} from "./store/counterSlice"

export const Counter = () => {

    const dispatch = useDispatch()
    const selector = useSelector( (state) => state.counter.value)

    return (
        <Stack direction="column" spacing={5} sx={{ p: 10 }} justifyContent="center" alignItems="center" border="3px solid black">
            <Avatar alt="Vadim Sherbinin" src="https://sun1-90.userapi.com/impg/ytt4cALte_WPHlPdLLFR5nyaMuXbsRA_YgKQlQ/U8kHN8Ca99w.jpg?size=1080x1080&quality=96&sign=5cc5909fe2ebc5523958246943b4b509&type=album" sx={{ width: 100, height: 100 }} />
            <Typography variant="h6" fontWeight="bold">Как вам этот программист?</Typography>
            <Stack direction="row" spacing={2}>
                <Typography>{selector}</Typography>
                <FavoriteSharpIcon fontSize="small"/>
            </Stack>
            <Stack direction="row" spacing={10}>
                <ThumbUpSharpIcon fontSize="large" onClick={ () => dispatch(increment())}/>
                <ThumbDownSharpIcon fontSize="large" onClick={ () => dispatch(decrement())}/>
                <NotInterestedSharpIcon fontSize="large" onClick={ () => dispatch(reset())}/>
            </Stack>
        </Stack>
    )
}
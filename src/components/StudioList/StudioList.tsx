import React, { useState, useEffect } from 'react'
import axios from 'axios';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { API } from '../../constants/api';

interface StudioListProps {
    id: string;
    title: string;
    score: number;
    released: string;
    poster: string;
    studioId: string;
}

const StudioList = () => {
    const [studioList, setStudioList] = useState<StudioListProps[]>([]);
    const getStudioList = () => {
        axios.get(`${API.studioList}=pixar`).then((data) => {
            setStudioList(data?.data);
          });
      }
    
      useEffect(() => {
        getStudioList();
      }, []);

    return (
        <div>
            {
                studioList?.map(({ id, title, score, released, poster }: any) => {
                    return (
                        <List key={id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={title} src={poster} />
                                </ListItemAvatar>
                                <ListItemText
                                primary={title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Release : {released}
                                        </Typography>
                                        <br />
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Score : {score}
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    )
                })
            }
        </div>
    )
}

export { StudioList }
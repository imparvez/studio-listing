import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import studioDetailAPIStore from '../../store/studioDetailStore';
import { StudioListState } from '../../interface';

const StudioList: React.FC<StudioListState> = ({ list, loading, error }) => {
    const {
        setSelectedId
      } = studioDetailAPIStore();
      if(loading) {
          return <div>Loading....</div>
      }

      if(error) {
        return <div>Error....</div>
    }

    const handleOnClick = (id: string) => {
        setSelectedId(id);
    }

    return (
        <div>
            {
                list?.map(({ id, title, score, released, poster }: any) => {
                    return (
                        <List key={id} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start" onClick={() => handleOnClick(id)}>
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
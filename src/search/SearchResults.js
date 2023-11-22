import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from "@mui/material";

export default function SearchResults() {

    return (
        <Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="LOGO" src="/dummy.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Website"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://github.com/the-pirated-sardar/1Sky-Project-276/" underline="none">
                                        {"Site"}
                                    </Link>
                                </Typography>
                                {" - article description"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="LOGO" src="/dummy.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Website"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://github.com/the-pirated-sardar/1Sky-Project-276/" underline="none">
                                        {"Site"}
                                    </Link>
                                </Typography>
                                {" - article description"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
            </List>
        </Box>
    )
}
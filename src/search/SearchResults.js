import React, { useEffect } from "react"
import { Box, Typography, Link, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from "@mui/material";
import { useSearchResults } from "./SearchStore.js"

export default function SearchResults() {

    const results = useSearchResults((state) => state.results)

    useEffect(() => {
        console.log(results)
    }, [results])

    return (
        <Box
            sx={{
                width: 400,
                height: 400,
            }}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {results.map((listitem) => (
                    <>
                        <ListItem key={listitem.openDoarId} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="" src={listitem.logo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={listitem.institutionName}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            <Link href={listitem.homepageUrl} underline="none">
                                                {listitem.name + "\n"}
                                            </Link>

                                            {listitem.openDoarId + "\n"}
                                            {listitem.email}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                ))}
            </List>
        </Box>
    )
}
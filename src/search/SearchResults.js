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
                display: "flex",
                width: 1,
                height: 1,
                maxWidth: 400,
                maxHeight: 400,
            }}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {results.map((listitem) => (
                    <React.Fragment key={listitem.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="" src={listitem.dataProviders.logo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={listitem.title}
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        <Link href={listitem.downloadUrl} underline="none">
                                            {"download "}
                                        </Link>

                                        {listitem.publisher}
                                        {listitem.yearPublished}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    )
}
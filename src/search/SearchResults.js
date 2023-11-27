import React from "react"
import { Box, Typography, Link, List, ListItem, ListItemText, ListItemAvatar, ListItemButton, Avatar, Divider } from "@mui/material";
import { useSearchResults } from "./SearchStore.js"
import { useNavigate } from "react-router-dom";
import getSummary from "../summarize/GPTMethods";

const SearchResults = () => {
    const navigate = useNavigate()
    const { results, setSelectedItem } = useSearchResults()

    async function goToSummary(item) {
        setSelectedItem(item);
        getSummary(item);
        navigate(`/Summary#${item.id}`);
    }

    return results ? (
        <Box
            sx={{
                display: "flex",
                width: 1,
                height: 1,
            }}
        >
            <List sx={{ width: '100%' }}>
                {results.map((listitem) => (
                    <React.Fragment key={listitem.id}>
                        <ListItem alignItems="flex-start" sx={{ bgcolor: 'white' }}>
                            <ListItemButton onClick={() => goToSummary(listitem)}>
                                <ListItemAvatar>
                                    <Avatar alt="" src={listitem.dataProviders[0].logo} />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        width: 500,
                                    }}
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

                                            {` | ${listitem.publisher ? listitem.publisher : "Published"} | ${listitem.yearPublished}`}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    ) : "bug";
}

export default SearchResults;
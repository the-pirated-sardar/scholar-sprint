import React from "react";
import { Card, CardContent, Typography, Button, Link } from "@mui/material"
import { useSearchResults } from "../search/SearchStore"

import GPTResults from "./GPTResults";

export default function GPTDisplay() {

    const { selectedItem } = useSearchResults();

    return (
        <Card sx={{ backgroundColor: '#3f51b5', color: '#fff', maxWidth: '80%' }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {selectedItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {selectedItem.authors.map(a => a.name).join('; ')}
                </Typography>
            </CardContent>
            <CardContent>
                <GPTResults />
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="secondary">
                    get keywords
                </Button>
                <Link href={selectedItem.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" color="secondary" sx={{ marginLeft: 'auto' }}>
                        Download
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
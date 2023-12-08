import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Link } from "@mui/material"
import { useSearchResults } from "../search/SearchStore"
import { useGPTResults } from "./GPTStore";

import GPTSummary from "./GPTSummary";
import GPTKeywords from "./GPTKeywords"
import { fetchKeywords } from "./GPTMethods";

const GPTDisplay = () => {

    const { setGPTKeywords } = useGPTResults();
    const { selectedItem } = useSearchResults();
    const [showKeywords, setShowKeywords] = useState(false);

    async function getKeywords() {
        setGPTKeywords(await fetchKeywords(selectedItem));
        setShowKeywords(true);
    }

    return (
        <Card sx={{ backgroundColor: '#3f51b5', color: '#fff', maxWidth: '80%' }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {selectedItem?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {selectedItem?.authors.map(a => a.name).join('; ')}
                </Typography>
            </CardContent>
            <CardContent>
                <GPTSummary />
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" color="secondary" onClick={getKeywords}>
                    get keywords
                </Button>
                <Link href={selectedItem?.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" color="secondary" sx={{ marginLeft: 'auto' }}>
                        Download
                    </Button>
                </Link>
            </CardContent>
            {showKeywords &&
                <CardContent>
                    <GPTKeywords />
                </CardContent>
            }
        </Card>
    )
}

export default GPTDisplay;
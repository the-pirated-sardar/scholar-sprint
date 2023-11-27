import { useRouteError } from "react-router-dom";
import { Box } from "@mui/material"

export default function NotFoundPage() {

    const error = useRouteError();
    console.error(error);

    return (

        <Box>
            Oops!
            Sorry, an unexpected error has occurred.

            {error.statusText || error.message}

        </Box>
    )
}
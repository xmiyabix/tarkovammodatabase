import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    作った人
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    xmiyabix(TwitterID:xmiyabix_VRC)
                </Typography>
            </Box>
        </div >
    );
}
import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" color = 'text.primary'gutterBottom>
                    作った人
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.primary"
                    component="p"
                >
                    xmiyabix(<a href="https://twitter.com/xmiyabix_vrc">TwitterID:xmiyabix_VRC</a>)
                </Typography>
            </Box>
        </div >
    );
}
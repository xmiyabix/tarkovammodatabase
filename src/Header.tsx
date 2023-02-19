import { Box, Button, Container, Stack, Typography } from "@mui/material";
import {useLoadState} from "./TarkovApiService"

const Header = () => {
    const load = useLoadState()
    return (
        <div>
            <Box
                sx={{
                    height: 0.05,
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        TarkovAmmoChart
                        {load}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                    </Stack>
                </Container>
            </Box>
        </div>
    );
};

export default Header
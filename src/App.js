import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'; // Typography is any text element
// import {PhotoCameraIcon} from '@mui/icons-material/PhotoCamera';

const App = () => {
    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    {/* <PhotoCameraIcon/> */}
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textPrimary" paragraph>
                            Hello everyone! This is a photo album.
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;
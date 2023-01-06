import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'; // Typography is any text element
import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textPrimary" paragraph>
                            Hello everyone! This is a photo album.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title" 
                                />
                                <CardContent className={classes.CardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default App;
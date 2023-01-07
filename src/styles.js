import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({
    container: {
        backgroundColor: 'rgb(255, 253, 208)',
        paddingTop: '30px'
    },
    button: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: 'rgb(255, 253, 208)',
        padding: '50px 0'
    }
}));

export default useStyles;
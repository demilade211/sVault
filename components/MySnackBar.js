import React from 'react' 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import validateInput from "@/utils/validateInput"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MySnackBar = ({setSnackInfo,snackInfo}) => {

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackInfo(prev => ({ ...prev, openSnack: false }))
    };
    
    return (
        <>
            <Snackbar open={snackInfo.openSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity={snackInfo.type} sx={{ width: '100%' }}>
                    {snackInfo.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default MySnackBar
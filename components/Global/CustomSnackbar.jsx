import React from 'react'
import { Alert, Snackbar } from "@mui/material";


const CustomSnackbar = (props) => {
  return (
    <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={props.handleClose}>
    <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: "100%" }}>
      {props.message}
    </Alert>
  </Snackbar>
  )
}

export default CustomSnackbar
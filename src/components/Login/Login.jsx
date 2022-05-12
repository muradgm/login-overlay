import { useState, useRef } from 'react'
import React from "react";


import { styled ,Grid, Button, Typography, Card, CardContent, TextField, FormControlLabel, Checkbox, Link, FormControl, Input, InputLabel, IconButton, InputAdornment, FormHelperText } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




const SubmitButton = styled(Button)({
backgroundColor: '#6976D9',
'&:hover': {
    backgroundColor: '#4a58bf',
}
})

const headerStyle = {
padding: 26,
backgroundColor: '#6976D9',
fontWeight: 'bold',
}

const paperStyle = {
minHeight: '60vh',
width: 280,
margin: '20px auto'
}


const Login = ({handleFormChange}) => {

const [reveal, setReveal] = useState(false)
const [emailError, setEmailError] = useState(false)
const [passError, setPassError] = useState(false)
const [helperText, setHelperText] = useState('')

const handleChange = () => {
    setReveal(!reveal)
}

const userEmail = useRef();
const userPassword = useRef();
const remember = useRef();

const textHelper = useRef();

const handleSubmit = (e) => {
    e.preventDefault()
}



const submit = (e) => {

    if (!userEmail.current.value.includes('@') ||
    !userEmail.current.value.includes('.')) {
    setEmailError(true)
    setHelperText('Please enter a valid email address')
    } else {
    setEmailError(false)
    setHelperText('')
    }

    if (userPassword.current.value.length < 8) {
    setPassError(true)
    textHelper.current.textContent = 'Password must be min 8 chars long.'
    } else {
    textHelper.current.textContent = ''
    setPassError(false)
    }
    
    // alert('SUCCESS!! \n\n' + JSON.stringify({
    //     userEmail: userEmail.current.value, userPassword: userPassword.current.value, remember: remember.current.checked
    // }));

}

    return (
    <Card elevation={3} style={paperStyle} onClick={(e) => e.stopPropagation()}>
        <Grid style={headerStyle}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white'}}>Welcome</Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>Back!</Typography>

        <Typography sx={{ pt: 4, color: 'white' }}>Please Login to continue</Typography>
        </Grid>
        
        <CardContent align="left">

        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >

            <TextField
                error={emailError}
                required
                type='text'
                label="Email"
                variant="standard"
                inputRef={userEmail}
                helperText={helperText}
                placeholder="enter email"
            />
            </FormControl>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
            <InputLabel required error={passError} >Password</InputLabel>
            <Input
                variant="standard"
                placeholder="enter password"
                type={!reveal ? 'password' : 'text'}
                inputRef={userPassword}
                error={passError}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    onClick={handleChange}
                    >
                    {reveal ? <VisibilityIcon />
                    : <VisibilityOffIcon />
                        }
                    </IconButton>
                </InputAdornment>
                }
            />
            <FormHelperText
                error={passError}
                ref={textHelper}>
        </FormHelperText>
            </FormControl>

            <FormControlLabel sx={{ py: 2, pl: 1 }}
            control={
                <Checkbox
                color='primary'
                inputRef={remember}
                />
            }
            label={<Typography variant="caption">Remember me.</Typography>} 
            />
            <SubmitButton sx={{ mt: 8.4 }}
            type='submit' variant='contained' color='primary' fullWidth onClick={submit}>Login</SubmitButton>
        </form>

        </CardContent>

        <Grid sx={{p:2.5}}>
        <Typography variant="body2">
        You dont have an account? Please<Link href='#' onClick={() => handleFormChange()}> Register</Link>
        </Typography>
        </Grid>
        
        </Card>
    )
}

export default Login

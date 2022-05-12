import React from "react";
import { useState, useRef } from "react";

import { styled ,Grid, Button, Typography, Card, CardContent, TextField, FormControlLabel, Checkbox, Link, FormControl, Input, InputLabel, IconButton, InputAdornment, FormHelperText } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const SubmitButton = styled(Button)({

backgroundColor: '#a769d9',
'&:hover': {
    backgroundColor: '#8240b8',
}
})

const headerStyle = {
padding: 26,
backgroundColor: '#a769d9',
fontWeight: 'bold',
}

const paperStyle = {
minHeight: '60vh',
width: 280,
margin: '20px auto'
}


const Signup = ({handleFormChange}) => {

const [reveal, setReveal] = useState(false)
const [emailError, setEmailError] = useState(false)
const [passError, setPassError] = useState(false)
const [helperText, setHelperText] = useState('')

const handleChange = () => {
    setReveal(!reveal)
}

const userEmail = useRef();
const userPassword = useRef();
const userConfirmPassword = useRef();
const termsAgreed = useRef();

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

let userPass = userPassword.current.value;
let userPassConfirm = userConfirmPassword.current.value

console.log(userPass, '\n', userPassConfirm);
console.log(typeof userPass, '\n', typeof userPassConfirm)
console.log(userPass === userPassConfirm);

if (userPass.length < 8 || userPassConfirm.length < 8) {
    setPassError(true)
    textHelper.current.textContent = 'Password must be min 8 chars long.'
} else if (userPass !== userPassConfirm) {
    setPassError(true)
    textHelper.current.textContent = 'Passwords do not match.'
} else {
    textHelper.current.textContent = ''
    setPassError(false)
}


    console.log({
        userEmail: userEmail.current.value,
        userPassword: userPassword.current.value,
        userConfirmPassword: userConfirmPassword.current.value,termsAgreed: termsAgreed.current.checked
        });

    // alert('SUCCESS!! \n\n' + JSON.stringify({
    //     userEmail: userEmail.current.value,
    //     userPassword: userPassword.current.value,
    //     userConfirmPassword: userConfirmPassword.current.value,termsAgreed: termsAgreed.current.checked
    // }));
    
}


return (
<Card elevation={3} style={paperStyle} onClick={(e) => e.stopPropagation()}>
    <Grid style={headerStyle}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white'}}>Hello User!</Typography>

    <Typography sx={{ pt: 6.3, color: 'white' }}>Please fill this form to create an account</Typography>
    </Grid>
    
    <CardContent align="left">

    <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" fullWidth>

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
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" fullWidth>

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

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel required error={passError}>Confirm Password</InputLabel>
        <Input
            variant="standard"
            placeholder="Confirm Password"
            type={!reveal ? 'password' : 'text'}
            inputRef={userConfirmPassword}
            error={passError} 
        />
        <FormHelperText error={passError}
            ref={textHelper}>
    </FormHelperText>
        </FormControl>
    
        <FormControlLabel  sx={{ py: 2, pl: 1, fontSize: 12 }}
        control={
            <Checkbox
            color='primary'
            inputRef={termsAgreed}
            />
        }
        label={<Typography variant="caption">I agree to terms and conditions.</Typography>} 
        />
        <SubmitButton sx={{px:3}}
        type='submit' variant='contained' onClick={submit} color='primary' fullWidth >Sign-up</SubmitButton>
        
    </form>
    </CardContent>

    <Grid sx={{p:2.5}}>
    <Typography variant="body2">
    You already have an account? Please<Link href='#' onClick={handleFormChange}> Login</Link>
    </Typography>
    </Grid>
    
    </Card>
)
}

export default Signup
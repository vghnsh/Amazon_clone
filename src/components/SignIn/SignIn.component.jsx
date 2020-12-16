import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {auth} from '../../firebase';

import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  

  const [email, setEmail]= useState('');
  const [password,setPassword]=useState('');
  
  const history = useHistory();
  const classes = useStyles();

  
  const signIn=(event)=>{
    event.preventDefault();
    
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{history.push("/")})
    .catch((error)=>alert(error.message));

    setEmail('');
    setPassword('');
    
    
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
              
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
              
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
      
              < Button
              onClick={signIn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
              </Button>

          
        </form>
        <Grid container>
            <Grid>
              <Link to="/SignUp" variant="body2">
                "Don't have an account? Sign Up"
              </Link>
              </Grid>
            
          </Grid>
      </div>
      
    </Container>
  );
}
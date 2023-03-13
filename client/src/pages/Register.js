import { useNavigate, useOutletContext } from "react-router-dom";
import { useState,useEffect } from "react";
import {MdVisibility,MdVisibilityOff} from "react-icons/md"
import { API_BASE } from "../constants";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton 
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// import ErrorIcon from '@mui/icons-material/Error';

export default function Register() {
  const { setUser, user } = useOutletContext();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/exams");
      return;
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const response = await fetch(API_BASE + form.getAttribute("action"), {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
      credentials: "include",
    });
    const data = await response.json();
    if (data?.messages?.errors?.length) {
      setErrorMsg(data.messages.errors[0]?.msg);
    }
    if (data.user?.email) {
      setUser(data.user);
      navigate("/exams");
    }
  };
  const cancelError=()=>{
    setErrorMsg("")
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          marginTop:"25px"
        }}
      >
        <Container maxWidth="sm">
    
                <a href={API_BASE+"/auth/google"} style={{width:'100%'}}>
                <Button
                  color="error"
                  fullWidth
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Continue with Google
                </Button>
                </a>
                <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or create an account
              </Typography>
            </Box>
          <form action="/signup" method="POST" onSubmit={handleSubmit}>
            <Box sx={{ my: 1 }}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
              <div className="registerHeader">
                Create a new account
              </div>
              </Typography>
            </Box>
            <TextField
            required={true}
              fullWidth
              label="First Name"
			  id="firstName"
              margin="normal"
              name="firstName"
              variant="outlined"
			  type="text"
            />
            <TextField
            required={true}
              fullWidth
              label="Last Name"
			  id="lastName"
              margin="normal"
              name="lastName"
              variant="outlined"
			  type="text"
        onChange={cancelError}
            />
            <TextField
            required={true}
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
			  id="exampleInputEmail1"
              variant="outlined"
			  aria-describedby="emailHelp"
        onChange={cancelError}
            />
			<Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                We'll never share your email address.
              </Typography>
            <TextField
              required={true}
              fullWidth
              label="Password"
              margin="normal"
              name="password"
			        id="password"
              variant="outlined"
              onChange={cancelError}

              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>

                </InputAdornment>,
              }}
            />
            <TextField
              required={true}
              fullWidth
              label="Confirm Password"
              margin="normal"
			        id="confirmPassword"
              name="confirmPassword"
              variant="outlined"
              onChange={cancelError}

              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>

                </InputAdornment>,
              }}
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >

              
            </Box>
            {errorMsg ? <div style={{fontWeight:"bold",color:"red"}}> {errorMsg}</div>:""}
            <Box sx={{ py: 2 }}>
              <Button style={{ backgroundColor:"#0D2E5E"}}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
         
                <Link
                href="/"
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
}
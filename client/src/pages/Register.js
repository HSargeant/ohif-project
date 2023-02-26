import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE } from "../constants";
import NavBarSide from "../NavBarSide/navbarside";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ErrorIcon from '@mui/icons-material/Error';

export default function Register() {
  const { setUser, messages, setMessages, user } = useOutletContext();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/exams");
      return;
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // if(event.target[4].value!==event.target[6].value){
    //   window.alert("Passwords Do Not Match")
    //   return
    // }
    const response = await fetch(API_BASE + form.getAttribute("action"), {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
      credentials: "include",
    });
    const data = await response.json();
    if (data.messages) {
      setMessages(data.messages);
      setErrorMsg(data.messages.errors[0].msg);
    }
    if (data.user) {
      setUser(data.user);
      navigate("/exams");
    }
  };


  console.log(errorMsg, user);
  return (
    <>
      <NavBarSide />
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form action="/signup" method="POST" onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
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
            />
            <Typography color="textSecondary" gutterBottom variant="body2">
              We'll never share your email address.
            </Typography>
            <TextField
              required={true}
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              id="password"
              variant="outlined"
            />
            <TextField
              required={true}
              fullWidth
              label="Confirm Password"
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            ></Box>
            {errorMsg ? <div style={{color:"darkred"}}><ErrorIcon fontSize="small" /> {errorMsg}</div> : ""}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <Link href="/" variant="subtitle2" underline="hover">
                Sign In
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
}

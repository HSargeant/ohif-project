import { useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";
import { Box, Button, Container, Grid, TextField, Typography,Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const { user,setUser, setMessages } = useOutletContext();
  console.log(user)
	const navigate = useNavigate();
	if(user) {
		 navigate("/exams")
		 return
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new URLSearchParams(new FormData(form)),
			credentials: "include"
		});
		const data = await response.json();
		if (data.messages) setMessages(data.messages);
		if (data.user) {
			setUser(data.user);
			navigate("/exams");
		}
	};

  // login page
	return (
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form action="/login" method="POST" onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Welcome<br/>
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
              </Typography>
            </Box>
            {/* <Grid
              container
              spacing={3}
            > */}
   
              <Grid
                item
                xs={12}
                md={6}
              >
                <a href={API_BASE+"/auth/google"} style={{width:'100%'}}>
                <Button
                  color="error"
                  fullWidth
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Sign in with Google
                </Button>
                </a>
              </Grid>
            {/* </Grid> */}
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
                or login with email address
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"

              type="email"
              variant="outlined"
              className="form-label"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button style={{ backgroundColor:"#0D2E5E"}}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
                <Link href="/register"
                     variant="subtitle2"
                     underline="hover"
                     sx={{
                       cursor: 'pointer',
                       color:"#F4B941",
                       fontWeight:"bold"
                     }}
                >
                  Register
                </Link>
              
            </Typography>
          </form>
        </Container>
      </Box>
	);
}
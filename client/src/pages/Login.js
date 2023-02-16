import { useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";
import { Box, Button, Container, Grid, TextField, Typography,Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const { user,setUser, setMessages } = useOutletContext();
	const navigate = useNavigate();
	if(user) {
		 navigate("/profile")
		 return
	}
	const handleSubmit = async (event) => {
		// event.preventDefault();
		// const form = event.currentTarget;
		// const response = await fetch(API_BASE + form.getAttribute('action'), {
		// 	method: form.method,
		// 	body: new URLSearchParams(new FormData(form)),
		// 	credentials: "include"
		// });
		// const data = await response.json();
		// if (data.messages) setMessages(data.messages);
		// if (data.user) {
		// 	setUser(data.user);
		// 	navigate("/profile");
		// }
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
                <Button
                  color="error"
                  fullWidth
                  // onClick=""
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Login with Google
                </Button>
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
              <Button
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
                       cursor: 'pointer'
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
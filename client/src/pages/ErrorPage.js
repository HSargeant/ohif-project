// error oage 

import { useRouteError,useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from "../components/Header";

export default function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate()
	console.error("error: ",error);
	return (
	

		<section style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
			<p><Typography>Oops! The page you're looking for can't be found. Please check the URL for any mistakes. Sorry for the inconvenience!</Typography></p>
	<Button
              component="a"
              startIcon={(<ArrowBackIcon fontSize="small"  />)}
              sx={{ mt: 3, }}
              variant="contained"
			  disableElevation
			  onClick={()=>navigate("/exams")}
            >
              Go back
            </Button>
		</section>
	)
}
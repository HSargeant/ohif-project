// error oage 

import { useRouteError,useNavigate,Link } from "react-router-dom";
import { Button,Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ErrorPage() {
	const error = useRouteError();
	console.error("error: ",error);
	return (
		<section style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
			<p><Typography>Oops! The page you're looking for can't be found. Please check the URL for any mistakes. Sorry for the inconvenience!</Typography></p>
			<Link to="/exams">
				<Button
				component="a"
				startIcon={(<ArrowBackIcon fontSize="small"  />)}
				sx={{ mt: 3, }}
				variant="contained"
				disableElevation
				>
              		Go back
            	</Button>
			</Link>
		</section>
	)
}
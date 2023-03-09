// // page to add new exam

import { Link, useNavigate, useOutletContext,useLocation } from "react-router-dom";
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Input,
  Typography
} from '@mui/material';
import { API_BASE } from "../constants";

export default function AddExam(props){
  const location = useLocation()
  // console.log("location: ",location)
  const navigate = useNavigate()
  const [values, setValues] = useState({
    brixiaScores: '',
    keyFindings: '',
    patientId: '',
    age: '',
    sex: '',
    zipCode: '',
    bmi:"",
    weight:"",
    examId:"",
    icu:"",
    icuAdmits:"",
    mortality:""
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("sent")
        try {
          const form = event.currentTarget;
          const response = await fetch(API_BASE + form.getAttribute("action"), {
            method: form.method,
            body: new FormData(form),
            credentials: "include",
          });
          const data = await response.json();
        } catch (err) {
          console.log("Error:" + err);
        }
        // if (data.messages) setMessages(data.messages);
        navigate(-1);
      };
      const [file, setFile] = useState(null);
      const handleFileChange = (event) => {
        console.log(event.target.files[0].name)
        setFile(event.target.files[0].name);
      };

  return (
    <Grid
		container
		direction="column"
		alignItems="center"
		justify="center"
    style={{marginTop:"100px"}}

	    >
        {/* <Navbar/> */}

        <form
          autoComplete="off"
          noValidate
          {...props}
          style={{maxWidth:1024}}
          action="/api/exams/new"
          encType="multipart/form-data"
          method="POST"
          onSubmit={handleSubmit}
        >
            <Card>
                <div className="cardHeader">
                <CardHeader
                subheader=""
                title="Add a New Exam"
                />
                </div>
                <Divider />
                <CardContent>
                <Grid container spacing={3}>
                    <Grid
                      item
                      sm={6}
                      xs={12}
                    >
                      <TextField
                          fullWidth
                          
                          // helperText="Please specify the first name"
                          label="Patient Id"
                          name="patientId"
                          onChange={handleChange}
                          required
                          value={values.patientId}
                          variant="outlined"
                      />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        
                        label="Exam Id"
                        name="examId"
                        onChange={handleChange}
                        required
                        value={values.examId}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        
                        label="Age"
                        name="age"
                        onChange={handleChange}
                        required
                        type="number"
                        value={values.age}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        
                        // helperText="Please specify the first name"
                        label="Brixia Scores"
                        name="brixiaScores"
                        onChange={handleChange}
                        required
                        value={values.brixiaScores}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        
                        label="Sex"
                        name="sex"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.sex||"Choose Sex"}
                        variant="outlined"
                    >
                        <option disabled key="1">Choose Sex</option>
                        <option key="M" value="M">M</option>
                        <option key="F" value="F">F</option>
                    </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            
                            label="ICU"
                            name="icu"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.icu||"ICU?"}
                            variant="outlined">
                            <option disabled>ICU?</option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            
                            label="Weight"
                            name="weight"
                            onChange={handleChange}
                            required
                            type="number"
                            value={values.weight}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            
                            label="ICU Admits"
                            name="icuAdmits"
                            onChange={handleChange}
                            required
                            type="number"
                            value={values.icuAdmits}
                            variant="outlined">
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            
                            label="BMI"
                            name="bmi"
                            type="number"
                            onChange={handleChange}
                            required
                            value={values.bmi}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            
                            label="Mortality"
                            name="mortality"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.mortality||"Mortality?"}
                            variant="outlined"
                        >
                            <option disabled>Mortality?</option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                        </TextField>
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        
                        // helperText="Please specify the first name"
                        label="Zip Code"
                        name="zipCode"
                        onChange={handleChange}
                        required
                        value={values.zipCode}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >                       
                    <TextField
                        fullWidth
                        
                        // helperText="Please specify the first name"
                        label="Key Findings"
                        name="keyFindings"
                        onChange={handleChange}
                        required
                        value={values.keyFindings}
                        variant="outlined"
                        multiline
                        maxRows={10}
                    />
                    </Grid>
                    <Grid
                    item
                    sm={6}
                    xs={12}
                    >   
                        <Button
                          variant="contained"
                          component="label"
                          style={{backgroundColor:"rgb(13, 46, 94)"}}
                        >
                          Upload File
                          <input
                            onChange={handleFileChange}
                            type="file"
                            hidden
                            accept="image/*"
                            name="file"
                          />
                        </Button> 
                        {file&&<span style={{marginLeft:10}}>{file}</span>}
                    </Grid>
                </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                  }}
                >
                {location.key !== "default" ? (
                  <Button
                  style={{backgroundColor:"darkred",marginRight:"20px"}}
                  variant="contained"
                  type="button"
                  onClick={() => navigate(-1)}
                  
                  >
                    Cancel
                  </Button>
                ):(
                  <Button
                    style={{backgroundColor:"black",marginRight:"20px"}}
                    variant="contained"
                    type="button"
                    onClick={() => navigate("/exams")}
                  >
                   Back
                  </Button>
                )}
                <Button
                    style={{backgroundColor:"rgb(13, 46, 94)"}}
                    variant="contained"
                    type="submit"
                >
                  Add
                </Button>
                </Box>
            </Card>
        </form>
    </Grid>
  );
};
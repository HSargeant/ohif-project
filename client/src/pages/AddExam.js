// // page to add new exam

// import { API_BASE } from "../constants";
// import { useState } from "react";
// import { Link, useNavigate, useOutletContext,useLocation,Navigate} from "react-router-dom";
// import NavBarSide from "../components/NavBarSide/navbarside";
// export default function AddExam() {
//     const navigate = useNavigate();
//     const location =useLocation()
//     const { user, setMessages } = useOutletContext();
//     let handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       const form = event.currentTarget;
//       const response = await fetch(API_BASE + form.getAttribute("action"), {
//         method: form.method,
//         body: new FormData(form),
//         credentials: "include",
//       });
//       const data = await response.json();
//     } catch (err) {
//       console.log("Error:" + err);
//     }
//     // if (data.messages) setMessages(data.messages);
//     navigate(-1);
//   };
//   // console.log(message);

//   return (
//     <div>
//       <div className="ExamForm">
//         <h1 style={{textAlign:"center"}}> Create a New Exam </h1>
//         <form
//           className="csForm"
//           action="/api/exams/new"
//           encType="multipart/form-data"
//           method="POST"
//           onSubmit={handleSubmit}
//         >
//           <div className="formFunction">
//             <input type="reset" placeholder="RESET" />

//             {location.key !== "default" && (
//     <button onClick={() => navigate(-1)} type="button">Back</button>
//   )}
//           </div>

//           <div className="row1">
//             {/* <div id="rowCell"> */}
//             <label> Patient ID</label>
//             <input type="text" placeholder="Patient ID..." name="patientId" />
//             {/* </div> */}
//             {/* <div id="rowCell"> */}
//             <label> Exam ID</label>
//             <input type="text" placeholder="Exam ID..." name="examId" />
//             {/* </div> */}
//           </div>

//           <div className="row2">
//             <div id="rowCell">
//               <label> Patient's Age</label>
//               <input
//                 type="number"
//                 placeholder="Age"
//                 min="0"
//                 max="112"
//                 name="age"
//               />

//               <label> Patient's Sex </label>
//               <select name="sex">
//                 <option disabled selected>
//                   Male or Female
//                 </option>
//                 <option value="M">M</option>
//                 <option value="F">F</option>
//               </select>
//             </div>

//             <div id="rowCell">
//               <label> Patient's ZipCode </label>
//               <input type="text" placeholder="zip code" name="zipCode" />
//             </div>
//           </div>

//           <div className="row3">
//             <label> Patient's Weight</label>
//             <input type="text" placeholder="Weight" name="weight" />

//             <label> BMI</label>
//             <input type="text" placeholder="BMI..." name="bmi" />
//             <label> Brixia Score</label>
//             <input
//               type="text"
//               placeholder="Brixia Score..."
//               name="brixiaScores"
//             />
//           </div>

//           <div>
//             <label> icu </label>
//             <select name="icu">
//               <option disabled selected>
//                 Y/N
//               </option>
//               <option value="Y">Y</option>
//               <option value="N">N</option>
//             </select>

//             <label> icu admits </label>
//             <input type="text" name="icuAdmits" />

//             <label> mortality </label>
//             <select name="mortality">
//               <option disabled selected>
//                 Y/N
//               </option>
//               <option value="Y">Y</option>
//               <option value="N">N</option>
//             </select>
//           </div>

//           <div className="row4">
//             <label> Key Findings </label>
//             <textarea
//               placeholder="Please note any key findings"
//               name="keyFindings"
//             />
//           </div>

//           <div className="row5">
//             <label> X-ray Image </label>
//             <input accept="image/*" type="file" name="file" />
//           </div>

//           <input id="createButt" type="submit" value="Create Exam" />
//         </form>
//       </div>
//     </div>
//   );
// }

import { Link, useNavigate, useOutletContext,useLocation,Navigate} from "react-router-dom";
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
                <CardHeader
                subheader=""
                title="Add a New Exam"
                />
                <Divider />
                <CardContent>
                <Grid container spacing={3}>
                    <Grid
                    item
                    md={6}
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
                    md={6}
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
                    md={6}
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
                    md={6}
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
                    md={6}
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
                    <Grid item md={6} xs={12}>
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
                    <Grid item md={6} xs={12}>
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
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="ICU Admits"
                            name="icuAdmits"
                            onChange={handleChange}
                            required
                            number
                            type="number"
                            value={values.icuAdmits}
                            variant="outlined">
                        </TextField>
                    </Grid>
                    <Grid item md={6} xs={12}>
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
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Mortality"
                            name="mortality"
                            onChange={handleChange}
                            required
                            number
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
                    md={6}
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
                    md={6}
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
                    md={6}
                    xs={12}
                    >   
                        <Button
                          variant="contained"
                          component="label"
                          style={{backgroundColor:"rgb(13, 46, 94)"}}
                        >
                          Upload File
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            name="file"
                          />
                        </Button>
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
                  style={{backgroundColor:"red",marginRight:"20px"}}
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
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext,useParams,useLocation } from "react-router-dom";
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

export default function EditExam(props){
    const location = useLocation()
    // console.log("location: ",location)
    const navigate = useNavigate()
    const { user, setMessages } = useOutletContext();
    const examId = useParams().id
    const [bmi,setBmi] = useState("")
    const [age,setAge] = useState("")
    const [sex,setSex] = useState("")
    const [id,setId] = useState("")
    const [patientId,setPatientId] = useState("")
    const [brixiaScores,setBrixiaScores] = useState("")
    const [weight,setWeight] = useState("")
    const [icu,setIcu] = useState("")
    const [icuAdmits,setIcuadmits] = useState("")
    const [zipCode,setZipcode] = useState("")
    const [mortality,setMortality] = useState("")
    const [keyFindings,setKeyfindings] = useState("")

    useEffect(()=>{
        const getData = async ()=>{ 
            const res = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
            const data = await res.json()
            setKeyfindings(data.keyFindings)
            setAge(data.age)
            setBmi(data.bmi)
            setMortality(data.mortality)
            setZipcode(data.zipCode)
            setIcu(data.icu)
            setIcuadmits(data.icuAdmits)
            setBrixiaScores(data.brixiaScores)
            setWeight(data.weight)
            setId(data.examId)
            setPatientId(data.patientId)
            setSex(data.sex)

        }
        getData()
        
    },[])
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const form = event.currentTarget;
            let x = new FormData(form)
            const response = await fetch(API_BASE + "/api/exams/edit/", {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    bmi:bmi,
                    age: age,
                    sex: sex,
                    id: id,
                    patientId: patientId,
                    brixiaScores: brixiaScores,
                    weight: weight,
                    icu: icu,
                    icuAdmits: icuAdmits,
                    zipCode: zipCode,
                    mortality: mortality,
                    keyFindings: keyFindings,
                    _id: examId
                }),
                credentials: "include"
              })
            const record = await response.json();
            console.log(record)
            navigate(-1)
        }catch(err){
            console.log("Error:" ,err)
        }
		// if (data.messages) setMessages(data.messages);
   
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
          action="/api/exams/edit"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
            <Card>
                <CardHeader
                subheader=""
                title="Edit Exam"
                />
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
                        required
                        variant="outlined"
                        value={patientId}
                        onChange={(e)=>setPatientId(e.target.value)}
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
                        required
                        variant="outlined"
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
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
                        required
                        type="number"
                        variant="outlined"
                        value={age} 
                        min="0" 
                        max="112"
                        onChange={(e)=>setAge(e.target.value)}
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
                        required
                        variant="outlined"
                        value={brixiaScores}
                        onChange={(e)=>setBrixiaScores(e.target.value)}
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
                        onChange={(e)=>setSex(e.target.value)}
                        required
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                        value={sex}
                    >
                        <option key="M" value="M">M</option>
                        <option key="F" value="F">F</option>
                    </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            label="ICU"
                            name="icu"
                            onChange={(e)=>setIcu(e.target.value)}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={icu}
                            variant="outlined"
                            >
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Weight"
                            name="weight"
                            onChange={(e)=>setWeight(e.target.value)}
                            required
                            type="number"
                            value={weight}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            label="ICU Admits"
                            name="icuAdmits"
                            onChange={(e)=>setIcuadmits(e.target.value)}
                            required
                            type="number"
                            value={icuAdmits}
                            variant="outlined">
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            label="BMI"
                            name="bmi"
                            type="number"
                            onChange={(e)=>setBmi(e.target.value)}
                            required
                            value={bmi}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Mortality"
                            name="mortality"
                            onChange={(e)=>setMortality(e.target.value)}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={mortality}
                            variant="outlined"
                        >
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
                        onChange={(e)=>setZipcode(e.target.value)}
                        required
                        value={zipCode}
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
                        onChange={(e)=>setKeyfindings(e.target.value)}
                        required
                        value={keyFindings}
                        variant="outlined"
                        multiline
                        maxRows={10}
                    />
                    </Grid>
                    {/* <Grid
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
                            type="file"
                            hidden
                            accept="image/*"
                            name="file"
                          />
                        </Button>
                    </Grid> */}
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
                    style={{backgroundColor:"darkred",marginRight:"20px"}}
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
                  Save
                </Button>
                </Box>
            </Card>
        </form>
    </Grid>
  );
};
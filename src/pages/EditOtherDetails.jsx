import React, { useEffect, useState,useRef, createRef } from "react";
import { Container, Row, Col } from "reactstrap";
 //import { useParams } from "react-router-dom";
import axios from "axios";
import { Accordion, AccordionSummary, Button, Grid, Input, TextField, Typography } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import Spinner from '../components/UI/Spinner/Spinner';
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItem ,Select} from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditOtherDetails = (props) => {
  const transitionRef = createRef(null);
  const {name,minimum_bid ,end_time,start_time,image,id ,category_id,status,description,type,increment_amount} =  props.otherData ;
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [error, setError] = useState('');
  const [auctionType, setAuctionType] = useState(type);
  const [newname,setname]=useState(name)
  const [carincrement,setincrement]=useState(increment_amount)
  const [startTime,setstartTime]=useState(start_time)
  const [endTime,setendTime]=useState(end_time)
  const [minimumbid,setminimum]=useState(minimum_bid)
  const [cardescription,setcardesc]=useState(description)
  const [Image,setimage]=useState(image)
  const jwt_token=localStorage.getItem('jwt_token');
  const config={
    headers:{
      Authorization:`Bearer ${jwt_token}`
    }
  }
  const url=''
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    setShowAlert(true)
    const Edit=new FormData();
    Edit.append('name',event.target.name.value);
    Edit.append('status',status);
    Edit.append('category_id',category_id);
    Edit.append('image',image);
    Edit.append('start_time',event.target.start_time.value);
    Edit.append('end_time',event.target.end_time.value);
    Edit.append('minimum_bid',event.target.price.value);
    Edit.append('description',event.target.description.value);
    Edit.append('type', auctionType);
    if (auctionType == 'live') {
      Edit.append('increment_amount', event.target.incrementamount.value);
    }
     
     try {
      axios.post(url,Edit,config)
      .then(res=>{
        setShowAlert(false)
        setLoading(false)
        console.log(res.data)
      }

      )
     } catch (error) {
      console.error('Error:', error);

     }
  
      }
    
   
    const handleAuctionTypeChange = (e) => {
        setAuctionType(e.target.value);
      }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div >
        <Container component="main" maxwidth="sm" className="m-4">
 
      {/* {loading ? <Spinner /> : */}
         
            <form onSubmit={handleSubmit} >
                
                  <Grid container spacing={2} justifyContent="center">
                    
                  <Grid item xs={12}>
                    <TextField
                      select
                      name="type"
                      ref={transitionRef}

                      itemRef={transitionRef}
                      innerRef={transitionRef}
                      inputRef={transitionRef}
                      value={auctionType}
                      variant="outlined"
                      fullWidth
                      
                      label="Auction Type"
                      onChange={handleAuctionTypeChange}
                     >
                      <MenuItem value='live'>Live</MenuItem>
                      <MenuItem value='anonymous'>Anonymous</MenuItem>
                      <MenuItem value='regular'>Regular</MenuItem>
                    </TextField>
                  </Grid>
                  {auctionType=='live'?
                  <Grid item xs={12}>

                  <TextField
                      name="incrementamount"
                      value={carincrement}
                      onChange={(e)=>{setincrement(e.target.value)}}
                      variant="outlined"
                      fullWidth
                      label="مقدار الزيادة"
                      type="number"
                      style={{ display: type === 'live' ? 'block' : 'none' }}
                    />
                  </Grid> 
                :
                <br/>}
                   <Grid item xs={12}>
                      <TextField
                      value={newname}
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        focused
                         label="الاسم"
                         onChange={(e)=>{setname(e.target.value)}}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        name="start_time"
                        value={startTime}
                        onChange={(e)=>{setstartTime(e.target.value)}}
                        variant="outlined"
                         fullWidth
                        label="وقت بدء المزاد"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink:true
                        }}
                      />
                        
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="end_time"
                        value={endTime}
                        onChange={(e)=>{setendTime(e.target.value)}}
                        variant="outlined"
                        required
                         fullWidth
                        label="وقت انتهاء المزاد"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink:true
                        }}
                      />
                        
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="price"
                        value={minimumbid}
                        onChange={(e)=>{setminimum(e.target.value)}}
                        variant="outlined"
                        required
                        fullWidth
                        label="السعر"
                        type="number"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        value={cardescription}
                        onChange={(e)=>{setcardesc(e.target.value)}}
                        variant="outlined"
                        fullWidth
                        multiline
                        label="الوصف"
                       />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e)=>{setimage(e.target.files[0])}}
                        multiple={false}
                       />
                    </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    التعديل
                  </Button>
                                    </Grid>

                </form>
                
          
       {showAlert && (
      <Alert severity="success" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <div className="d-flex justify-content-center align-items-center">
             <h4>يتم الآن التعديل</h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
     {showAlert1 && (
      <Alert severity="error" className="custom-alert"sx={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
        <div className="d-flex justify-content-center align-items-center">
             <h4>{error.message} </h4>
             <CheckIcon/>
        </div>
        </Alert>
    )}
    </Container>
  </div>
  );
}

export default EditOtherDetails;
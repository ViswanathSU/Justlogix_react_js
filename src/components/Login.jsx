import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "../background/BackgroundWrapper.jsx";
import Loading from "./Loading.jsx";
function Login(){
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        if(email=="admin@gmail.com" && password=="12345"){
            setLoading(true);
            setTimeout(()=> {
                setLoading(false);
                navigate("/Product");
            },1000);
        }
        else{
            alert("Invalid Email or Password");
        }
    };
    if(loading) return <Loading/>
    return(<BackgroundWrapper>
    <div style={{
      height: "100vh",         
      width: "100%",          
      //backgroundColor: "#8b77a3", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}>
    <Card sx={{width:400, margin: "150px auto", padding: 3, bgcolor:"#e0bdf4ff",boxShadow:6}}>
        <CardContent>
            <Typography variant="h5" sx = {{mb: 2, textAlign: "center", color:"#330244ff"}}>
                <b>Login</b></Typography>
                
            <TextField fullWidth
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)} sx={{mb:2,bgcolor:"white",
                borderRadius:"5px",}}/>

            
            <TextField fullWidth
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} sx={{
                bgcolor:"white",
                borderRadius:"5px",
                mb:2}}/>

            <Button
            fullWidth
            variant="contained"
            onClick={handleLogin} sx={{bgcolor:"rgba(82, 2, 82, 0.99)"}}>Login</Button>
        </CardContent>
    </Card>
</div></BackgroundWrapper>
)
}

export default Login;
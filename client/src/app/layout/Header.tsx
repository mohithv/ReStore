import AppBar from "@mui/material/AppBar";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props){
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6"> 
                RE-STORE
                 </Typography>    

                 <Switch style={{ "color": 'black' }} checked={darkMode} onChange={handleThemeChange} />
            </Toolbar>
            
        </AppBar>
    );
}
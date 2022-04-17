import { AppBar, Switch, Toolbar, Typography } from "@mui/material"

const label = { inputProps: { 'aria-label': 'Switch demo' } };
interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export const Header=({darkMode,handleThemeChange}:Props)=>{
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>

                    Re-Store
                </Typography>
                <Switch {...label} checked={darkMode} color="warning" onClick={handleThemeChange} />
            </Toolbar>

        </AppBar>
    )
}
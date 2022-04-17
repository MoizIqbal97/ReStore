import { AppBar, Toolbar, Typography } from "@mui/material"

export const Header=()=>{
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    Re-Store
                </Typography>
            </Toolbar>

        </AppBar>
    )
}
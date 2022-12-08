import {AppBar, Toolbar, Typography, IconButton} from "@mui/material"
import SavingsIcon from '@mui/icons-material/Savings';

export const Navbar = () => {

    return (
      <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='ínherit' aria-label='logo'>
                <SavingsIcon/>
                </IconButton>
                <Typography variant='h6'component='div'>
                    SEVEN BANK
                    </Typography>

        </Toolbar>
        
        </AppBar>
    )

}
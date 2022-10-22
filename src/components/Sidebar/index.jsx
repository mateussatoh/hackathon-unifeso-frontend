import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import AbcIcon from '@mui/icons-material/Abc';

import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FunctionsIcon from '@mui/icons-material/Functions';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


function Sidebar () {
return (
    <List component="nav">
        <ListItemButton>
        <ListItemIcon>
            <CalculateIcon />
        </ListItemIcon>
        <ListItemText primary="Matemática 9 ANO" />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
            <AbcIcon />
        </ListItemIcon>
        <ListItemText primary="Gramática 9 ANO" />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
            <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Literatura 9 ANO" />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
            <ScienceIcon />
        </ListItemIcon>
        <ListItemText primary="Química 9 ANO" />
        </ListItemButton>

        <ListItemButton>            
        <ListItemIcon>
            <FunctionsIcon />
        </ListItemIcon>
        <ListItemText primary="Física 9 ANO" />
        </ListItemButton>

        <ListItemButton>            
        <ListItemIcon>
            <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Geografia 9 ANO" />
        </ListItemButton>

        <ListItemButton>            
        <ListItemIcon>
            <BookIcon />
        </ListItemIcon>
        <ListItemText primary="História 9 ANO" />
        </ListItemButton>

        <ListItemButton>            
        <ListItemIcon>
            <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Filosofia 9 ANO" />
        </ListItemButton>


    </List>
)
}

export { Sidebar }



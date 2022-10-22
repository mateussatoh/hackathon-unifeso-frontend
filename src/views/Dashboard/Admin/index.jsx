import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Link from '@mui/material/Link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';




function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
function DashboardAdminView() {  
    return(
        <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={1}>
      
            <Grid item xs={6} md={6} lg={6}> 
            <TableContainer component={Paper} sx={{ height: 400, width: '100%' }} >
              <Table  aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Calories</TableCell>
                    <TableCell align="left">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                      <TableCell align="left"> A</TableCell>
                      <TableCell align="left">A</TableCell>
                      <TableCell align="right">
                      <IconButton aria-label="delete">
                      <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>

            <Grid item xs={6} md={6} lg={6}> 
            <TableContainer component={Paper} sx={{ height: 400, width: '100%' }} >
              <Table  aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Calories</TableCell>
                    <TableCell align="left">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                      <TableCell align="left"> A</TableCell>
                      <TableCell align="left">A</TableCell>
                      <TableCell align="right">
                      <IconButton aria-label="delete">
                      <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>


            <Grid item xs={6} md={6} lg={6}> 
            <TableContainer component={Paper} sx={{ height: 400, width: '100%' }} >
              <Table  aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Calories</TableCell>
                    <TableCell align="left">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                      <TableCell align="left"> A</TableCell>
                      <TableCell align="left">A</TableCell>
                      <TableCell align="right">
                      <IconButton aria-label="delete">
                      <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>


            <Grid item xs={6} md={6} lg={6}> 
            <TableContainer component={Paper} sx={{ height: 400, width: '100%' }} >
              <Table  aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Calories</TableCell>
                    <TableCell align="left">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                      <TableCell align="left"> A</TableCell>
                      <TableCell align="left">A</TableCell>
                      <TableCell align="right">
                      <IconButton aria-label="delete">
                      <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </Grid>


        
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>

        
      </Box>
)
}

export {DashboardAdminView}
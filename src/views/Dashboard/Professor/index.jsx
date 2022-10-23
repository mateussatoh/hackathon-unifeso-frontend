import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from "@mui/material/Link";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { CreateAula } from "../../../service/aula";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function DashboardProfessorView() {
  const [isCreateAulaModal, setIsCreateAulaModal] = useState(false);

  const [videoUrl , setVideoUrl] = useState("")
  const [exerciseUrl , setExerciseUrl] = useState("")
  const [materiaUrl , setMateriaUrl] = useState("")
  const [description , setDescription] = useState("")
  const [classDate , setClassDate] = useState("")
  const [className , setClassName] = useState("")


  

  function closeAllModals() {
    setIsCreateAulaModal(false);
  }

  async function handleCreateClass() {
    try {
      await CreateAula({
        arquivoExercicio: exerciseUrl,
        arquivoMateria: materiaUrl,
        dataAula: dayjs(classDate, "YYYY-MM-DD"),
        descricao: description,
        nome: className,
        urlVideo: videoUrl
      }) 
    } catch (error) {
      
    } 
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <TableContainer
                component={Paper}
                sx={{ height: 400, width: "100%" }}
              >
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Nome</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="left">Matricula</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="delete">
                          <AddIcon
                            color="#"
                            onClick={() => {
                              setIsCreateAulaModal(true);
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>

      <Modal
        open={isCreateAulaModal}
        onClose={closeAllModals}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography typography="h5">Adicionar nova aula</Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              label="Insira o nome da matéria"
              type="url"
              autoFocus
              onChange={(e) => setClassName(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Insira a URL do video"
              type="url"
              autoFocus
              onChange={(e) => setVideoUrl(e.target.value)}
            />
           
            <TextField
              margin="normal"
              required
              fullWidth
              label="Insira a URL do arquivo de exercicios"
              type="url"
              onChange={(e) => setExerciseUrl(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Insira a URL do arquivo de matérias"
              onChange={(e) => setMateriaUrl(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              label="Insira descrição"
              type="url"
              autoFocus
              onChange={(e) => setDescription(e.target.value)}

            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="date"
              onChange={(e) => setClassDate(e.target.value)}

            />

      

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleCreateClass()}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export { DashboardProfessorView };

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { CreateUser, ListAllAlunos, ListAllProfessores, ListAllUsers } from "../../../service/user";
import { ListAllAulas } from "../../../service/aula";
import { ListAllTurmas } from "../../../service/turma";

import Autocomplete from '@mui/material/Autocomplete';

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

function DashboardAdminView() {
  const [isCreateAlunoModal, setIsCreateAlunoModal] = useState(false);

  const [users, setUsers] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [professores, setProfessores] = useState([]);

  const [email, setEmail] = useState([]);
  const [nome, setNome] = useState([]);
  const [senha, setSenha] = useState([]);
  const [turmaNome, setTurmaNome] = useState([]);
  
  const [professorEmail, setProfessorEmail] = useState([]);
  const [professorNome, setProfessorNome] = useState([]);
  const [professorSenha, setProfessorSenha] = useState([]);
  const [isCreateProfessorModal, setIsCreateProfessorModal] = useState(false);
  const [createTurmaModal, setCreateTurmaModal] = useState() 


  useEffect(() => {
    async function fetchData() {
      const users = await ListAllAlunos();
      const professores = await ListAllProfessores();
      const turmas = await ListAllTurmas()

      console.log("🚀 ~ file: index.jsx ~ line 58 ~ fetchData ~ turmas", turmas)

      setUsers(users);
      setProfessores(professores)
      setTurmas(turmas)
    }
    fetchData();
  }, []);

  function closeAllModals() {
    setIsCreateAlunoModal(false);
    setIsCreateProfessorModal(false);
    setCreateTurmaModal(false)
  }

  async function handleCreateUser(tipoUsuario) {
    try {
      if(tipoUsuario === "ALUNO") {
        await CreateUser({email: email, nome: nome, senha: senha, tipoUsuario: tipoUsuario})
      }
      if(tipoUsuario === "PROFESSOR") {
        await CreateUser({email: professorEmail, nome: professorNome, senha: professorSenha, tipoUsuario: tipoUsuario})
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  const top100Films = () => professores



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
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
            <Typography  sx={{ my: 2 }} >Alunos </Typography>

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
                              setIsCreateAlunoModal(true);
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="left">{user.nome}</TableCell>
                          <TableCell align="left">{user.email}</TableCell>
                          <TableCell align="left">{user.matricula}</TableCell>
                          <TableCell align="right">
                            <IconButton aria-label="delete">
                              <EditIcon />
                            </IconButton>
                            <IconButton aria-label="update">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>



            <Grid item xs={12} md={12} lg={12}>
              <Typography sx={{ my: 2 }}>Professores </Typography>
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
                              setIsCreateProfessorModal(true);
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {professores.map((professor, index) => 
                        <TableRow key={index}>
                        <TableCell align="left">{professor.nome}</TableCell>
                        <TableCell align="left">{professor.email}</TableCell>
                        <TableCell align="left">{professor.matricula}</TableCell>
                        <TableCell align="right">
                          <IconButton aria-label="delete">
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label="update">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      )
                      
                    }
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>  
                    

            <Grid item xs={12} md={12} lg={12}>
              <Typography sx={{ my: 2 }}>Turmas </Typography>
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
                              setCreateTurmaModal(true);
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {turmas && turmas.map((turmas, index) => {
                    console.log(turmas)
                  }
                      )
                      
                    }
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid> 
          </Grid>
        </Container>
      </Box>

      <Modal
        open={isCreateAlunoModal}
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
            <Typography typography="h5">Adicionar novo aluno</Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpass"
              label="Nome"
              type="name"

              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"

              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpass"
              label="Senha"
              type="password"

              onChange={(e) => setSenha(e.target.value)}

            />


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {handleCreateUser("ALUNO")}}
            >
              Criar
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={isCreateProfessorModal}
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
            <Typography typography="h5">Adicionar novo professor</Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpass"
              label="Nome"
              type="name"

              onChange={(e) => setProfessorNome(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"

              onChange={(e) => setProfessorEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpass"
              label="Senha"
              type="password"

              onChange={(e) => setProfessorSenha(e.target.value)}

            />


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {handleCreateUser("PROFESSOR")}}
            >
              Criar
            </Button>
          </Box>
        </Box>
      </Modal>
      
      <Modal
        open={createTurmaModal}
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
            <Typography typography="h5">Adicionar nova turma</Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpass"
              label="Nome"
              type="name"

              onChange={(e) => setTurmaNome(e.target.value)}
            />

  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {handleCreateUser("PROFESSOR")}}
            >
              Criar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export { DashboardAdminView };

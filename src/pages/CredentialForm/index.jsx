import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, useEffect } from "react"
import background from "../../assets/img/fundo-escola.jpg"
import logo from "../../assets/img/logo.png"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center"  {...props}>
      {'Equipe Cloud '}
      <Link color="inherit" href="http://www.unifeso.edu.br/">
        Hackathon Unifeso 2022
      </Link>{' '}
      feito com o ❤️
      {' '}
    </Typography>
  );
}

function Form({ type }) {

  const [email,setEmail] = useState()
  const [senha,setSenha] = useState()


  const onSubmit = (event) => {
    
    event.preventDefault();
    }
  



  switch (type) {
    case "LOGIN":
      return (<>
        <Box component="form" noValidate  sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {setPassword(e.target.value)}}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e)=> {onSubmit(e)}}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/esqueci-minha-senha" variant="body2">
                Esqueci minha senha
              </Link>
            </Grid>
            <Grid item>
              <Link href="/criar-conta" variant="body2">
                {"Criar Conta"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </>)
      break;
    case "CREATE-PASSWORD":
      return (<>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

          <TextField
            margin="normal"
            required
            fullWidth
            name="newpass"
            label="Nova senha"
            type="password"
            id="password2"
            autoComplete="current-password"
          />  

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirmar senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre-se de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/dashboard"
            sx={{ mt: 3, mb: 2 }}
          >
            Salvar e entrar
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/criar-conta" variant="body2">
                {"Criar Conta"}
              </Link>
            </Grid>
          </Grid> */}
          <Copyright sx={{ mt: 5 }} />
        </Box></>)
      break;
      case "CREATE-USER":
        return (<>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
  
            <TextField
              margin="normal"
              required
              fullWidth
              name="newemail"
              label="E-mail"
              type="email"
              id="newemail"
              autoComplete="email"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="newemail"
              label="Senha"
              type="password"
              id="confirmpass"
              autoComplete="current-password"
            />
  
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirmar senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-se de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Criar conta
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Voltar ao login
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box></>)
        break;
    case "FORGOT-PASSWORD":
      return (<>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="newpass"
            label="Insira a nova senha"
            name="password"
            autoComplete="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmpass"
            label="Confirme a nova senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href="/login"
            sx={{ mt: 3, mb: 2 }}
          >
            Salvar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                Voltar ao login
              </Link>
            </Grid>
            <Grid item>
              <Link href="/criar-conta" variant="body2">
                {"Criar Conta"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box></>)
      break;
    default:
  }
}

const theme = createTheme();

function CredentialForm({ type }) {


  const [formType, setFormType] = useState("LOGIN")

  useEffect(() => {
    setFormType(type)
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
          sx={{
            mt: "auto",
            mb: "auto",
            boxShadow: 0
          }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 40,
                mt: "-2rem",
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Logo"
              src={`${logo}`}
            />
            <Typography component="h1" variant="h5"
              sx={{
                mt: 10,
                mb: 4
              }}>
              {formType === "LOGIN" ? "Bem-Vindo!" : formType === "CREATE-PASSWORD" ? "Criar senha" : formType === "CREATE-USER" ? "Criar nova conta" : "Esqueci minha senha"}
            </Typography>


            <Form type={formType} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { CredentialForm }
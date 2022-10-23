import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import AbcIcon from "@mui/icons-material/Abc";

import CalculateIcon from "@mui/icons-material/Calculate";
import ScienceIcon from "@mui/icons-material/Science";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FunctionsIcon from "@mui/icons-material/Functions";
import PublicIcon from "@mui/icons-material/Public";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { ListAllTurmas } from "../../service/turma";

function Sidebar() {
  const [turmas, setTurmas] = useState(false) 
  useEffect(() => {
    async function fetch() {
      const turmas = await ListAllTurmas()
      console.log("🚀 ~ file: index.jsx ~ line 24 ~ fetch ~ turmas", turmas)
      setTurmas(turmas)
    }
  }, []);
  return (
    <List component="nav">
      <ListItemButton>
        <ListItemIcon>
          <CalculateIcon />
        </ListItemIcon>
        <ListItemText primary="Matemática" />
      </ListItemButton>
    </List>
  );
}

export { Sidebar };

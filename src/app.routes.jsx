import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { CredentialForm} from "./pages/CredentialForm";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";




function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CredentialForm type="LOGIN" />} />
        <Route path="/criar-conta" element={<CredentialForm type="CREATE-USER"/>} />
        <Route path="/criar-senha" element={<CredentialForm type="CREATE-PASSWORD"/>} />
        <Route path="/esqueci-minha-senha" element={<CredentialForm type="FORGOT-PASSWORD"/>} />
        <Route path="/dashboard" element={<Dashboard view="ADMIN" />} />

      </Routes>
  );
}

export {AppRoutes}
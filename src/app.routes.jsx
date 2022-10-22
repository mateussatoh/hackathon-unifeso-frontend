import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { CredentialForm} from "./pages/credential-form";




function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<CredentialForm />} />
        <Route path="/login" element={<CredentialForm type="LOGIN" />} />
        <Route path="/criar-conta" element={<CredentialForm type="CREATE-USER"/>} />
        <Route path="/criar-senha" element={<CredentialForm type="CREATE-PASSWORD"/>} />
        <Route path="/esqueci-minha-senha" element={<CredentialForm type="FORGOT-PASSWORD"/>} />
        <Route path="/dashboard" element={<CredentialForm />} />

      </Routes>
  );
}

export {AppRoutes}
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layoute from "../Component/Layoute";
import MinimalLayout from "../Component/MinimalLayout";

import Principal from "./Principal";
import Apropos from "./Apropos";
import Services from "./Services";
import Contacte from "./Contacte";

import ServiceRequestForm from "./ComponentAcceuil/ServiceRequestForm";
import QuoteRequestForm from "./QuoteRequestForm";

function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages avec Header & Footer */}
        <Route path="/" element={<Layoute />}>
          <Route index element={<Principal />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contacte />} />
        </Route>

        {/* Pages sans Header ni Footer (formulaires) */}
        <Route path="/" element={<MinimalLayout />}>
          <Route path="/ServiceRequestForm" element={<ServiceRequestForm />} />
          <Route path="/devis" element={<QuoteRequestForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Markup;
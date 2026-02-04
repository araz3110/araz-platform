import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import JoinSupplier from "./pages/JoinSupplier";
import JoinExpert from "./pages/JoinExpert";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/join/supplier" element={<JoinSupplier />} />
        <Route path="/join/expert" element={<JoinExpert />} />

        {/* diğer her şeyi şimdilik ana sayfaya yönlendir */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
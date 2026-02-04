import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing.jsx";
import Rooms from "./pages/Rooms.jsx";
import RoomDetail from "./pages/RoomDetail.jsx";
import JoinSupplier from "./pages/JoinSupplier.jsx";
import JoinExpert from "./pages/JoinExpert.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing (topbar burada, Landing.jsx içinde) */}
        <Route path="/" element={<Landing />} />

        {/* Pages */}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />

        {/* Join flows */}
        <Route path="/join/supplier" element={<JoinSupplier />} />
        <Route path="/join/expert" element={<JoinExpert />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
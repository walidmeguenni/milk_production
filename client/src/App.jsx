import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import {
  Dashboard,
  MilkProduction,
  Births,
  MedicalExamination,
  Cows,
  Auth,
  HeroBanner,
} from "./Pages";
import PrivateRoute from "./routers/praviteRoute.jsx";
import PublicRoute from "./routers/PublicRoute.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<HeroBanner />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cows" element={<Cows />} />
            <Route
              path="/medicalexamination"
              element={<MedicalExamination />}
            />
            <Route path="/milkproduction" element={<MilkProduction />} />
            <Route path="/births" element={<Births />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

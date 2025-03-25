import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "../components/layouts";
import { Cursos, Curso } from "../pages";

function Router() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />

        <Route
          path="/courses"
          element={
            <RootLayout>
              <Cursos />
            </RootLayout>
          }
        />

        <Route
          path="/course/:id"
          element={
            <RootLayout>
              <Curso />
            </RootLayout>
          } />

        <Route path="/*" element={<Navigate to="/courses" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
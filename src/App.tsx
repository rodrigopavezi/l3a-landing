import { Box } from "grommet";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Research } from "./routes/Research";
import { Vision } from "./routes/Vision";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="vision" element={<Vision />} />
          <Route path="research" element={<Research />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;

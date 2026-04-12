import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Clientes from "./pages/clientes";
import Mensagens from "./pages/mensagens";
import Pedidos from "./pages/pedidos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/mensagens" element={<Mensagens />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import "./App.css";
import Azola from "./page2/Azola";
import Bovine from "./page2/Bovine";
import Disease from "./page2/Disease";
import Fodder from "./page2/Fodder";
import Fodderdev from "./page2/Fodderdev";
import Goat from "./page2/Goat";
import Home from "./page2/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mastitis from "./page2/Mastitis";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Otp from "./pages/Otp";
import Password from "./pages/Password";
import Reset from "./pages/Reset";
import House from "./pages/House";
import { Staff } from "./pages/Staff";

import Alagavadi from "./pages3/alagavadi/Alagavadi";
import Bhendavada from "./pages3/bhendavada/Bhendavada";
import Chinchali from "./pages3/chinchali/Chinchali";
import Diggevadi from "./pages3/diggevadi/Diggevadi";
import Handigunda from "./pages3/handigunda/Handigunda";
import Harugeri from "./pages3/harugeri/Harugeri";
import Kankanawadi from "./pages3/kankanawadi/Kankanawadi";
import Koligudda from "./pages3/koligudda/Koligudda";
import Kudachi from "./pages3/kudachi/Kudachi";
import Mekhali from "./pages3/mekhali/Mekhali";
import Morab from "./pages3/morab/Morab";
import Mugalakhod from "./pages3/mugalakhod/Mugalakhod";
import Nasalapur from "./pages3/nasalapur/Nasalapur";
import Nilaji from "./pages3/nilaji/Nilaji";

import Raybag from "./pages3/raybag/Raybag";
import Employ from "./Employ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/employ" element={<Employ />} />

        <Route path="/house" element={<House />} />
        <Route path="/home" element={<Home />} />
        <Route path="/otp/:email" element={<Otp />} />
        <Route path="/password/:email" element={<Password />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/azola" element={<Azola />} />
        <Route path="/bovine" element={<Bovine />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/fodder" element={<Fodder />} />
        <Route path="/fodderdev" element={<Fodderdev />} />
        <Route path="/goat" element={<Goat />} />
        <Route path="/mastitis" element={<Mastitis />} />

        <Route path="/alagavadi" element={<Alagavadi />} />
        <Route path="/bhendavada" element={<Bhendavada />} />
        <Route path="/chinchali" element={<Chinchali />} />
        <Route path="/diggevadi" element={<Diggevadi />} />
        <Route path="/handigunda" element={<Handigunda />} />
        <Route path="/harugeri" element={<Harugeri />} />
        <Route path="/kankanawadi" element={<Kankanawadi />} />
        <Route path="/kudachi" element={<Kudachi />} />
        <Route path="/koligudda" element={<Koligudda />} />
        <Route path="/mekhali" element={<Mekhali />} />
        <Route path="/morab" element={<Morab />} />
        <Route path="/mugalakhod" element={<Mugalakhod />} />
        <Route path="/nasalapur" element={<Nasalapur />} />
        <Route path="/nilaji" element={<Nilaji />} />

        <Route path="/raybag" element={<Raybag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

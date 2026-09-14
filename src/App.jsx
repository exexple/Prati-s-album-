import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AlbumNavigation from "./components/AlbumNavigation";
import GrainOverlay from "./components/GrainOverlay";

import Cover from "./pages/Cover";
import Lover from "./pages/Lover";
import Enchanted from "./pages/Enchanted";
import Darkhaast from "./pages/Darkhaast";
import Daylight from "./pages/Daylight";
import HeavenIsYou from "./pages/HeavenIsYou";
import SideB from "./pages/SideB";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GrainOverlay />
      <AlbumNavigation />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Cover />} />
          <Route path="/lover" element={<Lover />} />
          <Route path="/enchanted" element={<Enchanted />} />
          <Route path="/darkhaast" element={<Darkhaast />} />
          <Route path="/daylight" element={<Daylight />} />
          <Route path="/heaven-is-you" element={<HeavenIsYou />} />
          <Route path="/side-b" element={<SideB />} />
          <Route path="*" element={<Cover />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

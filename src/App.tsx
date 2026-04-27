/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Apps } from "./pages/Apps";
import { Games } from "./pages/Games";
import { Privacy } from "./pages/Privacy";
import { Contact } from "./pages/Contact";
import { AppDetail } from "./pages/AppDetail";
import { VitaCasePrivacy } from "./pages/VitaCasePrivacy";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container relative">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary mix-blend-screen filter blur-[150px] opacity-20 animate-blob-reverse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-secondary mix-blend-screen filter blur-[180px] opacity-15 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:slug" element={<AppDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy/vitacase" element={<VitaCasePrivacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

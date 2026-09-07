/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SkipToContent } from "./components/SkipToContent";
import { ScrollToTop } from "./components/ScrollToTop";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetail from "./pages/AppDetail";

// Lazy-loaded secondary routes for code splitting
const Games = lazy(() => import("./pages/Games"));
const AI = lazy(() => import("./pages/AI"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));
const VitaCasePrivacy = lazy(() => import("./pages/VitaCasePrivacy"));
const VitaCaseTerms = lazy(() => import("./pages/VitaCaseTerms"));
const VitaCaseDisclaimer = lazy(() => import("./pages/VitaCaseDisclaimer"));
const MeowoirsPrivacy = lazy(() => import("./pages/MeowoirsPrivacy"));
const MeowoirsTerms = lazy(() => import("./pages/MeowoirsTerms"));

// Memoized studio background with ambient glow & subtle cosmic grid
const StudioAtmosphere = memo(function StudioAtmosphere() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0a0f]" aria-hidden="true">
      {/* Ambient gradient lighting via lightweight radial gradients */}
      <div
        className="absolute top-[-5%] left-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.05) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[35%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, rgba(34, 211, 238, 0.03) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.03) 45%, transparent 70%)",
        }}
      />
      
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 grid-background opacity-60 pointer-events-none" />
    </div>
  );
});

// Minimal loading fallback
function PageFallback() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh]" role="status" aria-label="Loading page">
      <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SkipToContent />
      <div className="min-h-screen flex flex-col selection:bg-brand-500/30 selection:text-white relative bg-[#0a0a0f]">
        <StudioAtmosphere />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Suspense fallback={<PageFallback />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/apps/:slug" element={<AppDetail />} />
              <Route path="/games" element={<Games />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/legal" element={<Privacy />} />
              <Route path="/privacy/vitacase" element={<VitaCasePrivacy />} />
              <Route path="/terms/vitacase" element={<VitaCaseTerms />} />
              <Route path="/disclaimer/vitacase" element={<VitaCaseDisclaimer />} />
              <Route path="/privacy/meowoirs" element={<MeowoirsPrivacy />} />
              <Route path="/terms/meowoirs" element={<MeowoirsTerms />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

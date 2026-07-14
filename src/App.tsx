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

// Lazy-loaded routes for code splitting
const Home = lazy(() => import("./pages/Home"));
const Apps = lazy(() => import("./pages/Apps"));
const Games = lazy(() => import("./pages/Games"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));
const AppDetail = lazy(() => import("./pages/AppDetail"));
const VitaCasePrivacy = lazy(() => import("./pages/VitaCasePrivacy"));
const VitaCaseTerms = lazy(() => import("./pages/VitaCaseTerms"));
const VitaCaseDisclaimer = lazy(() => import("./pages/VitaCaseDisclaimer"));

// Memoized background blobs — avoids re-renders from route changes
const BackgroundBlobs = memo(function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background" aria-hidden="true">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary mix-blend-screen filter blur-[150px] opacity-20 animate-blob-reverse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-secondary mix-blend-screen filter blur-[180px] opacity-15 animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
});

// Minimal loading fallback — keeps CLS near zero
function PageFallback() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[50vh]" role="status" aria-label="Loading page">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SkipToContent />
      <div className="min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container relative">
        <BackgroundBlobs />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Suspense fallback={<PageFallback />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/apps/:slug" element={<AppDetail />} />
              <Route path="/games" element={<Games />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy/vitacase" element={<VitaCasePrivacy />} />
              <Route path="/terms/vitacase" element={<VitaCaseTerms />} />
              <Route path="/disclaimer/vitacase" element={<VitaCaseDisclaimer />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

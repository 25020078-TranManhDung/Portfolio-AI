/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import RootLayout from './layouts/RootLayout';
import MainPage from './pages/MainPage';
import LoadingScreen from './components/LoadingScreen';
import { useKonamiCode } from './hooks/useKonamiCode';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useKonamiCode();

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

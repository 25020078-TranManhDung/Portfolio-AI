import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode() {
  const [isKonamiMode, setIsKonamiMode] = useState(false);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const expectedKey = KONAMI_CODE[keyIndex].toLowerCase();
      
      if (key === expectedKey) {
        if (keyIndex === KONAMI_CODE.length - 1) {
          setIsKonamiMode((prev) => !prev);
          setKeyIndex(0);
        } else {
          setKeyIndex((prev) => prev + 1);
        }
      } else {
        // Reset if key is wrong, but allow starting over immediately if the pushed key is ArrowUp
        if (key === KONAMI_CODE[0].toLowerCase()) {
          setKeyIndex(1);
        } else {
          setKeyIndex(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyIndex]);

  useEffect(() => {
    if (isKonamiMode) {
      document.body.classList.add('konami-mode');
    } else {
      document.body.classList.remove('konami-mode');
    }
  }, [isKonamiMode]);

  return isKonamiMode;
}

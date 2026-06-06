import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const asciiArt = `
       )))
      (((
    +-----+
    |     |]
    \`-----\'    
  ___________
  \`---------\'

%cChào đồng âm thích đọc code! Nếu bạn thấy dòng này, hãy kết nối với mình nhé!
%cEmail: 25020078@vnu.edu.vn
`;

console.log(
  asciiArt,
  "font-size: 16px; color: #f43f5e; font-weight: bold; font-family: monospace;",
  "font-size: 14px; color: #10b981; font-family: monospace;"
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

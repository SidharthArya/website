// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Portfolio } from "./portfolio";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Portfolio />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Portfolio />
//   </BrowserRouter>
// );
// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Mind } from "./mind";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Mind />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Mind />
//   </BrowserRouter>
// );
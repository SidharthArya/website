// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Blog } from "./blog";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Blog />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Blog />
//   </BrowserRouter>
// );
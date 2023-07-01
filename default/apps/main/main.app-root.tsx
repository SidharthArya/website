// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Main } from "./main";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Main />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <Main />
//   </BrowserRouter>
// );
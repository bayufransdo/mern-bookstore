import { createBrowserRouter } from 'react-router-dom';
import { Home, EditBook, CreateBook, DeleteBook, ShowBook } from './pages';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error Bos</h1>,
  },
  {
    path: '/books/create',
    element: <CreateBook />,
  },
  {
    path: '/books/details/:id',
    element: <ShowBook />,
  },
  {
    path: '/books/edit/:id',
    element: <EditBook />,
  },
  {
    path: '/books/delete/:id',
    element: <DeleteBook />,
  },
]);
export default route;

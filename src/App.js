import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Education from './pages/Education';
import EducationDetails from './pages/EducationDetails';
import EducationRoot from './pages/EducationRoot';
import Experience from './pages/Experience';
import ExperienceDetails from './pages/ExperienceDetails';
import ExperienceRoot from './pages/ExperienceRoot';
import RootLayout from './pages/Root';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'education',
        element: <EducationRoot />,
        children: [
          { index: true, element: <Education /> },
          {
            path: ':educationId',
            element: <EducationDetails />,
          },
        ],
      },
      {
        path: 'experience',
        element: <ExperienceRoot />,
        children: [
          { index: true, element: <Experience /> },
          { path: ':experienceId', element: <ExperienceDetails /> },
        ],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
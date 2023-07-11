import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';

export const privateRoutes = [
	{ path: '/about', element: <About />, exact: true },
	{ path: '/posts', element: <Posts />, exact: true },
	{ path: '/posts/:id', element: <PostIdPage />, exact: true },
];

export const publicRoutes = [{ path: '/login', element: <Login /> }];

// <Route path="/about" element={<About />} />
// <Route path="/posts" element={<Posts />} />
// <Route path="/posts/:id" element={<PostIdPage />} />
// <Route path="/" element={<Navigate to="/posts" />}

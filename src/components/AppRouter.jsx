import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router/index';
import { AuthContext } from '../context';

const AppRouter = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
			))}

			<Route path="/" element={<Navigate to="/posts" />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route element={route.element} path={route.path} exact={route.exact} key={route.path} />
			))}

			<Route path="/" element={<Navigate to="/login" />} />
		</Routes>
	);
};

export default AppRouter;

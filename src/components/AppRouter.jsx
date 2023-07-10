import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../router/index';

const AppRouter = () => {
	const isAuth = true;

	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route element={route.element} path={route.path} />
			))}

			<Route path="/" element={<Navigate replace to="/posts" />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route element={route.element} path={route.path} />
			))}

			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
};

export default AppRouter;

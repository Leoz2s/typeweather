import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { Search } from '../pages/Search';
import { Dashboard } from '../pages/Dashboard';
export function AppRoutes() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Search, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) })] }));
}

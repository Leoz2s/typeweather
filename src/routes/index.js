import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
export function Routes() {
    return (_jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }));
}

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

import { privateRoutes, publicRoutes, adminRoutes, authRoutes } from './routes/public';
import { DefaultLayout } from '~/layouts';
import { AuthProvider } from './context/AuthProvider';
import RequireAuthAdmin from './components/RequiredAuth/RequireAuthAdmin';
import RequireAuthUser from './components/RequiredAuth/RequireAuthUser';
import RequireNotLogin from './components/RequiredAuth/RequireNotLogin';
import { FilterProvider } from './context/FilterProvider';



function App() {
    return (
        <Router>
            <FilterProvider>
            <AuthProvider>
                <div className="App">
                    <Outlet />
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        <Route element={<RequireAuthUser />}>
                            {privateRoutes.map((route, index) => {
                                //nếu không có layout trong item thì mặc định là LayoutDefault
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Route>
                        <Route element={<RequireNotLogin />}>
                            {authRoutes.map((route, index) => {
                                //nếu không có layout trong item thì mặc định là LayoutDefault
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Route>

                        <Route element={<RequireAuthAdmin />}>
                            {adminRoutes.map((route, index) => {
                                //nếu không có layout trong item thì mặc định là LayoutDefault
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Route>

                    </Routes>
                </div>
            </AuthProvider>
            </FilterProvider>
        </Router>
    );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import config from '~/config';
import { DefaultLayout, HeaderOnly } from '~/static/Layout/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {config.routes.publicRoutes.map((item, index) => {
                        let Layout = DefaultLayout;
                        if (item.layout === null) {
                            Layout = Fragment;
                        } else if (item.layout) {
                            Layout = item.layout;
                        }
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

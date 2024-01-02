import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import WebLayout from "Components/Layouts/WebLayout";

// Routes
import { PublicRoute } from "./PublicRoutes";

// Components
const HomePage = lazy(() => import("Pages/HomePage"));
const GamesPage = lazy(() => import("Pages/GamesPage"));
const FourZeroFour = lazy(() => import("Pages/404"));
const ComingSoon = lazy(() => import("Pages/ComingSoon"));


function RoutesComponent() {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route
                        index
                        path="/"
                        element={<PublicRoute component={HomePage} layout={WebLayout} />}
                    />

                    <Route
                        index
                        path="/strike"
                        element={<PublicRoute component={ComingSoon} layout={WebLayout} showHeader={false} />}
                    />

                    <Route
                        index
                        path="/games"
                        element={<PublicRoute component={GamesPage} layout={WebLayout} />}
                    />

                    <Route
                        index
                        path="/nft"
                        element={<PublicRoute component={ComingSoon} layout={WebLayout} showHeader={false} />}
                    />
                    <Route
                        index
                        path="/gallery"
                        element={<PublicRoute component={ComingSoon} layout={WebLayout} showHeader={false} />}
                    />
                    <Route
                        index
                        path="/marketplace"
                        element={<PublicRoute component={ComingSoon} layout={WebLayout} showHeader={false} />}
                    />
                    <Route
                        index
                        path="/community"
                        element={<PublicRoute component={ComingSoon} layout={WebLayout} showHeader={false} />}
                    />

                    <Route path="/*" element={<FourZeroFour />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesComponent;
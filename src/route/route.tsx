import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "../components/layout/layout";
import "nprogress/nprogress.css"; // Import the NProgress CSS
import NProgress from "nprogress";

import SkeletonLoader from "../components/skeletonLoader/skeleton";
import React, { Suspense, useEffect } from "react";
const Home = React.lazy(() => import("../Home/home"));
const SearchWrapper = React.lazy(() => import("../Search/SearchWrapper"));
const CountryOveViewWrapper = React.lazy(
  () => import("../CountryOverview/CountryOverviewWrapper")
);

const InteractiveMapWrapper = React.lazy(
  () => import("../InteractiveMap/interactivemap")
);

const CompanyProfileWrapper = React.lazy(
  () => import("../Company/companyWraaper")
);
const RouteWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    NProgress.done();

    return () => {
      NProgress.done();
    };
  }, [location]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home loads normally */}
        <Route
          path="/search"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <SearchWrapper />
            </Suspense>
          }
        />
        <Route
          path="/country-overview"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <CountryOveViewWrapper />
            </Suspense>
          }
        />
        <Route
          path="/map"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <InteractiveMapWrapper />
            </Suspense>
          }
        />
        <Route
          path="/company-profile"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <CompanyProfileWrapper />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
};

export default RouteWrapper;

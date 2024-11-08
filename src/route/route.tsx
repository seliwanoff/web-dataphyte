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
const OrganizationMapping = React.lazy(() => import("../Company/OrgChart"));
const RegulationWrapper = React.lazy(
  () => import("../Regulation/regulationWrapper")
);
const RegulationProfile = React.lazy(
  () => import("../Regulation/regulationProfile")
);
const LicenseWrapper = React.lazy(() => import("../License/LicenseWrapper"));
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
        <Route
          path="/company/organization-mapping"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <OrganizationMapping />
            </Suspense>
          }
        />
        <Route
          path="/regulation"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <RegulationWrapper />
            </Suspense>
          }
        />
        <Route
          path="/regulation/profile"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <RegulationProfile />
            </Suspense>
          }
        />
        <Route
          path="/License"
          element={
            <Suspense fallback={<SkeletonLoader />}>
              <LicenseWrapper />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
};

export default RouteWrapper;

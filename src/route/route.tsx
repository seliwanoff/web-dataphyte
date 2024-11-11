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
import React, { Suspense, useEffect, startTransition } from "react";

const Home = React.lazy(() => import("../Home/home"));
const SearchWrapper = React.lazy(() => import("../Search/SearchWrapper"));
const CountryOveViewWrapper = React.lazy(
  () => import("../CountryOverview/CountryOverviewWrapper")
);
const DataVisualiztionWrapper = React.lazy(
  () => import("../DataVisualization/datavisualizationWrapper")
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
const InvestigationWrapper = React.lazy(
  () => import("../Investigation/investigationWrapper")
);
const ReportDetails = React.lazy(
  () => import("../Investigation/reportDetails")
);
const ReportForm = React.lazy(() => import("../Investigation/reportform"));

const RouteWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    startTransition(() => {
      NProgress.start();
      NProgress.done();
    });

    return () => {
      NProgress.done();
    };
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchWrapper />} />
          <Route path="/country-overview" element={<CountryOveViewWrapper />} />
          <Route path="/map" element={<InteractiveMapWrapper />} />
          <Route path="/company-profile" element={<CompanyProfileWrapper />} />
          <Route
            path="/company/organization-mapping"
            element={<OrganizationMapping />}
          />
          <Route path="/regulation" element={<RegulationWrapper />} />
          <Route path="/regulation/profile" element={<RegulationProfile />} />
          <Route path="/License" element={<LicenseWrapper />} />
          <Route path="/reports" element={<InvestigationWrapper />} />
          <Route path="/reports/details" element={<ReportDetails />} />
          <Route path="/reports/form" element={<ReportForm />} />
          <Route path="/data" element={<DataVisualiztionWrapper />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default RouteWrapper;

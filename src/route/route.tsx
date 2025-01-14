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
import MainCountryOview from "../Company/MainCountrywrapper";

const Home = React.lazy(() => import("../Home/home"));
const SearchWrapper = React.lazy(() => import("../Search/SearchWrapper"));
const CountryOveViewWrapper = React.lazy(
  () => import("../CountryOverview/CountryOverviewWrapper")
);

const HomeViewer = React.lazy(() => import("../MiningSite/homeViewer"));
const DocumentWrapper = React.lazy(
  () => import("../Documents/documentWrapper")
);
const InteractiveCountryMap = React.lazy(
  () => import("../components/country/InteractiveCountryMap")
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
const MineralWrapper = React.lazy(
  () => import("../minieralWrapper/mineralWrapper")
);
//import MiningSiteWrapper from "../MiningSite/miningSiteWrapper";

const ReportForm = React.lazy(() => import("../Investigation/reportform"));

const HomeMIneralViewer = React.lazy(
  () => import("../minieralWrapper/homeMineralViewer")
);

const MiningSiteWrapper = React.lazy(
  () => import("../MiningSite/miningSiteWrapper")
);
const BlogDemo = React.lazy(() => import("../Investigation/blogPageWrapper"));

//import PeopleWrapper from "../People/PeopleWrapper";

const PeopleWrapper = React.lazy(() => import("../People/PeopleWrapper"));
const TreeView = React.lazy(() => import("../Company/ExampleMapping"));

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
          <Route path="/country" element={<MainCountryOview />} />
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
          <Route path="/mining-site" element={<MiningSiteWrapper />} />
          <Route path="/mineral" element={<MineralWrapper />} />
          <Route
            path="/interactive-country"
            element={<InteractiveCountryMap />}
          />

          <Route path="/people" element={<PeopleWrapper />} />
          <Route path="/report/blog" element={<BlogDemo />} />
          <Route path="/tree" element={<TreeView />} />
          <Route path="/document/view" element={<DocumentWrapper />} />
          <Route path="/site/view" element={<HomeViewer />} />
          <Route path="/mineral/view" element={<HomeMIneralViewer />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default RouteWrapper;

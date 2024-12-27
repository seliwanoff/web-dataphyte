import React, { useEffect, useState } from "react";
import OrgChart from "../components/company/OrgChart";
import ExampleMap from "./ExampleMapping";
import OrganizationChart from "./MobileMappingChart";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";

interface Descendant {
  id: number;
  name: string;
  country: string;
  rc_number: string;
  address: string;
  image: string;
  created_at: string;
  updated_at: string;
  children?: Descendant[];
  ceo_id?: any;
  cto_id?: any;
  cfo_id?: any;
  people_ids?: any;
  parent_id?: any;
  meta?: any;
  other_data?: any;
  rich_text?: any;
}

interface CompanyData extends Descendant {
  descendants: Descendant[];
}

const OrgCharWrapper: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const baseURl = process.env.REACT_APP_URL;

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("id") || "" || "";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseURl}company/getcompanytrees?id=${queryName}`)
      .then((response) => response.json())
      .then((data: CompanyData[]) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className="w-full hidden lg:block">
            <ExampleMap />
          </div>
          <div className="w-full block lg:hidden">
            <OrganizationChart data={[data]} />
          </div>
        </>
      )}
    </div>
  );
};

export default OrgCharWrapper;

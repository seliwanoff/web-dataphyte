import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";

import { useLocation } from "react-router-dom";
const baseURl = process.env.REACT_APP_URL;
const fetchData = async (
  url: string,
  setter: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const response = await fetch(`${baseURl}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    setter(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const SearchWrapper = () => {
  const [allCompany, setAllCompany] = useState([]);
  const [allDocument, setAllDocument] = useState([]);
  const [allNewpeople, setAllPeople] = useState([]);
  const [allMineral, setAllMineral] = useState([]);
  const [miningSite, setMiningSite] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "" || "";

  useEffect(() => {
    fetchData(`search/people?q=${queryName}`, setAllPeople);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/company?q=${queryName}`, setAllCompany);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/document?q=${queryName}`, setAllDocument);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/site?q=${queryName}`, setMiningSite);
  }, [queryName]);
  useEffect(() => {
    fetchData(`search/mineral?q=${queryName}`, setAllMineral);
  }, [queryName]);

  /***
  useEffect(() => {
    const fetchAllcompany = async () => {
      await axiosInstance
        .get(`search/company/?q=${queryName}`)
        .then((res: any) => {
          setAllcompany(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllcompany();
  }, []);

  useEffect(() => {
    const fetchAllminer = async () => {
      await axiosInstance
        .get(`search/mineral/?q=${queryName}`)
        .then((res) => {
          setAllmineral(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllminer();
  }, []);
  useEffect(() => {
    const fetchAllSite = async () => {
      await axiosInstance
        .get(`search/site/?q=${queryName}`)
        .then((res) => {
          setMiningSite(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllSite();
  }, []);

  useEffect(() => {
    const fetchAllDocument = async () => {
      await axiosInstance
        .get(`search/document/?q=${queryName}`)
        .then((res: any) => {
          setAlldocument(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllDocument();
  }, []);
  useEffect(() => {
    const fetchAllPeople = async () => {
      await axiosInstance
        .get(`search/people/?q=${queryName}`)
        .then((res) => {
          setAllpeople(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllPeople();
  }, []);
  */

  const [currentTab, setCurrentTab] = useState<string>("All");
  const Filters = [
    "All",
    "Minerals",
    "People",
    "Mining Sites",
    "Documents",
    "Companies",
  ];
  return (
    <>
      <ProfileProvider>
        <SearchBoxFilter setSearchQuery={setSearchQuery} />
        <SearchFilter
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          filters={Filters}
        />
        <SearchResult setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <SeachTableFormat
          widgetTitles={[
            "Minerals",

            "Mining Sites",
            "Documents",
            "Companies",
            "People",
          ]}
          datas={sampleDataResponse}
          miningSite={miningSite} // miningSite
          company={allCompany} //Allcompany
          document={allDocument} // alldocuments
          currentTab={currentTab} // do not change
          people={allNewpeople} // allpeople
          mineral={allMineral} // all minerals
        />
      </ProfileProvider>
    </>
  );
};

export default SearchWrapper;

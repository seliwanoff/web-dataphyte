import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";
import sampleDataMiningSiteResponse from "../data/miningsiteResponse.json";
import allcompanySampleResponse from "../data/allCompanyResponse.json";
import allDocumentSample from "../data/allDocument.json";
import allPeople from "../data/allPeople.json";
import allMinerals from "../data/allMineral.json";
import axiosInstance from "../utills/axiosInstance";
const SearchWrapper = () => {
  const [allCompany, setAllcompany] = useState<[]>(); // replace allcompanysample
  const [alldocument, setAlldocument] = useState<[]>(); // replace alldocument
  const [allpeople, setAllpeople] = useState<[]>(); // replace allcompanypeople
  const [allMineral, setAllmineral] = useState<[]>(); // replace allcmineral
  const [miningSite, setMiningSite] = useState<[]>(); //replace all miningsite
  // Search for axiosInstance to set your base Url
  useEffect(() => {
    const fetchAllcompany = async () => {
      await axiosInstance
        .get(`search/company/?q=document Gleaso debitis`)
        .then((res) => {
          setAllcompany(res.data); // check the corresponding data
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
        .get(`search/mineral/?q=document Gleaso debitis`)
        .then((res) => {
          setAllmineral(res.data); // check the corresponding data
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
        .get(`search/site/?q=document Gleaso debitis`)
        .then((res) => {
          setMiningSite(res.data); // check the corresponding data
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
        .get(`search/document/?q=document Gleaso debitis`)
        .then((res) => {
          setAlldocument(res.data); // check the corresponding data
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
        .get(`search/people/?q=document Gleaso debitis`)
        .then((res) => {
          setAllpeople(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchAllPeople();
  }, []);

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
        <SearchBoxFilter />
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
          miningSite={sampleDataMiningSiteResponse} // miningSite
          company={allcompanySampleResponse} //Allcompany
          document={allDocumentSample} // alldocuments
          currentTab={currentTab} // do not change
          people={allPeople} // allpeople
          mineral={allMinerals} // all minerals
        />
      </ProfileProvider>
    </>
  );
};

export default SearchWrapper;

import React, { useEffect, useState } from "react";
import BlogPage from "./blogPage";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
const baseURl = process.env.REACT_APP_URL;
interface Article {
  title: string;
  created_at: string;
  authorName: string;
  authorProfilePic: string;
  thumbnail: string;
  content: string;
  name: string;
  display_picture?: string;
  article_picture?: string;
  article?: string;
}

const BlogDemo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("id") || "" || "";
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState<Article | null>(null);
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURl}${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);
      setter(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(`report/getsingle?id=${queryName}`, setReports);
  }, [queryName]);
  // console.log(reports);
  return isLoading ? (
    <SkeletonLoader />
  ) : (
    <BlogPage
      title={reports?.title || ""}
      date={new Date(reports?.created_at || "").toLocaleDateString()}
      authorName={reports?.name || ""}
      authorProfilePic={`${baseURlFile}${reports?.display_picture}`}
      thumbnail={`${baseURlFile}${reports?.article_picture}`}
      content={`${reports?.article || ""}`}
    />
  );
};

export default BlogDemo;

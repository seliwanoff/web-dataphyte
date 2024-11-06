import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface QueryParamHandlerProps {
  onQueryExtracted: (query: string) => void;
}

const QueryParamHandler: React.FC<QueryParamHandlerProps> = ({
  onQueryExtracted,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "";
  const [query, setQuery] = useState(queryName);

  useEffect(() => {
    onQueryExtracted(query);
  }, [query, onQueryExtracted]);

  return null;
};

export default QueryParamHandler;

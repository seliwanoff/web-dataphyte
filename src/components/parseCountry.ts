const parseCountry = (data: { country: string }): string => {
  try {
    return data.country && JSON.parse(data.country)?.join(", ");
  } catch (error) {
    console.error("Error parsing country data:", error);
    return "";
  }
};

export default parseCountry;

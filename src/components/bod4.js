import { useEffect } from "react";

const BODSGraph = ({ data }) => {
  // console.log(data);
  useEffect(() => {
    const checkBODSDagreLoaded = () => {
      if (typeof window.BODSDagre !== "undefined") {
        const container = document.getElementById("svg-holder");

        if (!container) {
          console.error("Container not found.");
          return;
        }

        //   console.log("Container found, clientWidth:", container.clientWidth);

        window.BODSDagre.selectData({
          data: data,
          container: container,
          imagesPath: "/images",
          labelLimit: 100,
          useTippy: true,
        });
      } else {
        console.log("BODSDagre is not yet loaded. Retrying...");
        setTimeout(checkBODSDagreLoaded, 100);
      }
    };

    checkBODSDagreLoaded();
  }, [data]);

  return (
    <div className="container">
      <div className="d-none">
        <div id="slider-container"></div>

        <div id="disclosure-widget" className=""></div>
        <div className="flex gap-2 items-center pt-5">
          <button
            id="download-svg"
            className="bg-[#7f55da] text-white  rounded-md py-2 px-4 font-polySans bottom-0 mt-3"
          >
            Download SVG
          </button>
          <button
            id="download-png"
            className="bg-[#7f55da] text-white  rounded-md py-2 px-4 font-polySans bottom-0 mt-3"
          >
            Download PNG
          </button>
        </div>
      </div>

      <div id="svg-holder" className="mt-3">
        <svg id="bods-svg"></svg>
        <button
          id="zoom_in"
          className="bg-[#7f55da] text-white max-w-24 rounded-md py-2 px-4 mr-4 bottom-0"
        >
          +
        </button>
        <button
          id="zoom_out"
          className="bg-[#7f55da] text-white max-w-24 rounded-md py-2 px-4 bottom-0"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BODSGraph;

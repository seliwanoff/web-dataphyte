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
      <div className="d-none hidden">
        <div id="slider-container"></div>

        <div id="disclosure-widget"></div>
        <button id="download-svg">Download SVG</button>
        <button id="download-png">Download PNG</button>
      </div>

      <div id="svg-holder" className="-mt-14">
        <svg id="bods-svg"></svg>
        <button id="zoom_in" className="hidden">
          +
        </button>
        <button id="zoom_out" className="hidden">
          -
        </button>
      </div>
    </div>
  );
};

export default BODSGraph;

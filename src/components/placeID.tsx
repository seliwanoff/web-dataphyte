import React from "react";
import close from "../assets/images/close.png";

interface PlaceProps {
  placeId: string;
  setShowIframe: (show: boolean) => void;
}

const PlaceIframe: React.FC<PlaceProps> = ({ placeId, setShowIframe }) => {
  const iframeUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=place_id:${placeId}`;

  return (
    <>
      <div
        className="fixed bg-black opacity-50 w-full h-full top-0 z-10"
        onClick={() => setShowIframe(false)}
      ></div>

      <div className="fixed h-full w-full z-20 top-0 flex items-center justify-center xl:p-6 p-4 box-border">
        <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={close} alt="" onClick={() => setShowIframe(false)} />

          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PlaceIframe;

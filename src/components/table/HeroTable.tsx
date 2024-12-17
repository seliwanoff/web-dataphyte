import React from "react";
//import doc from "../../assets/images/doc.png";
import pdf from "../../assets/images/pdf.png";
import audio from "../../assets/images/audio.png";
import video from "../../assets/images/video.png";
interface HeroRowProps {
  name: string;
  width: any;
  image: any;
  type?: any;
}
const HeroRow: React.FC<HeroRowProps> = ({ name, width, image, type }) => {
  return (
    <td className="rows  flex  gap-4">
      <img
        src={
          type === "pdf"
            ? pdf
            : type === "mp4"
            ? video
            : type === "mp3"
            ? audio
            : image
        }
        alt=""
        className="h-8"
      />
      <div className="flex flex-col gap-[2]">
        <span className="block">{name}</span>
        <span className="block text-[#828282] text-xs font-normal font-polySans">
          917kb
        </span>
      </div>
    </td>
  );
};

export default HeroRow;

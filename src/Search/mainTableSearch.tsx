//import { table } from "console";

import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";
const Maintable = () => {
  return (
    <table className="bg-inherit w-full border-none">
      <thead className="thead bg-white">
        <tr className="w-full ">
          <TableColumn name="Document name" width={20} />
          <TableColumn name="Mining Site" width={20} />

          <TableColumn name="" width={15} />
        </tr>
      </thead>

      <tbody className="tbody bg-white">
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="5th Avenue, Gwarimpa, Abuja, Nigeria" width={15} />

          <ActionRow name="Download file" width={15} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="5th Avenue, Gwarimpa, Abuja, Nigeria" width={15} />

          <ActionRow name="Download file" width={15} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="5th Avenue, Gwarimpa, Abuja, Nigeria" width={15} />

          <ActionRow name="Download file" width={15} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="5th Avenue, Gwarimpa, Abuja, Nigeria" width={15} />

          <ActionRow name="Download file" width={15} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="5th Avenue, Gwarimpa, Abuja, Nigeria" width={15} />

          <ActionRow name="Download file" width={15} />
        </tr>
      </tbody>
    </table>
  );
};

export default Maintable;

//import { table } from "console";

import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import LicenseUseRow from "../components/table/LicenseuseRow";
import StatusRow from "../components/table/statusRow";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";
const LicenseMainTable = () => {
  return (
    <table className="bg-inherit w-full border-none mt-[20px] ">
      <thead className="thead bg-white overflow-auto flex-nowrap">
        <tr className="w-full overflow-auto flex-nowrap">
          <TableColumn name="Country" width={20} />
          <TableColumn name="License Type" width={20} />
          <TableColumn name="License Duration" width={15} />
          <TableColumn name="License use" width={15} />
          <TableColumn name="Status" width={15} />
          <TableColumn name="Conditions" width={20} />
        </tr>
      </thead>

      <tbody className="tbody bg-white overflow-auto flex-nowrap">
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="Type of license" width={20} />
          <TableRow name="100  years" width={15} />
          <LicenseUseRow name="Active" width={15} percentage={"50"} />
          <StatusRow name="Active" width={15} />
          <TableRow name="Type of license" width={20} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="Type of license" width={20} />
          <TableRow name="100  years" width={15} />
          <LicenseUseRow name="Active" width={15} percentage={"39"} />
          <StatusRow name="Expired" width={15} />
          <TableRow name="Type of license" width={20} />
        </tr>
        <tr className="">
          <HeroRow name="The file name. extention" width={20} image={doc} />
          <TableRow name="Type of license" width={20} />
          <TableRow name="100  years" width={15} />
          <LicenseUseRow name="Active" width={15} percentage={"20"} />
          <StatusRow name="Pending" width={15} />
          <TableRow name="Type of license" width={20} />
        </tr>
      </tbody>
    </table>
  );
};

export default LicenseMainTable;

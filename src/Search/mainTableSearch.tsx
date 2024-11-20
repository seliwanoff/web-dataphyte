//import { table } from "console";

import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const Maintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
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
        {datas?.data.document.map((data: any, index: any) => (
          <tr className="" key={index}>
            <HeroRow name={data.name} width={20} image={doc} type={data.type} />
            <TableRow name={data.location} width={15} />

            <ActionRow name="Download file" width={15} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Maintable;

//import { table } from "console";

import doc from "../../assets/images/doc.png";
import ActionRow from "./actionRow";
import HeroRow from "./HeroTable";
import TableColumn from "./tableColumn";
import TableRow from "./tableRow";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const PeopleMaintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
  return (
    <table className="bg-inherit w-full border-none">
      <thead className="thead bg-white">
        <tr className="w-full ">
          <TableColumn name="Document name" width={20} />
          <TableColumn name="Description" width={20} />

          <TableColumn name="" width={15} />
        </tr>
      </thead>

      <tbody className="tbody bg-white">
        {datas.data.document &&
          datas?.data?.document?.map((data: any, index: any) => (
            <tr className="" key={index}>
              <HeroRow
                name={data.name}
                width={20}
                image={doc}
                type={data.type}
              />
              <TableRow name={data.location} width={15} />

              <ActionRow name="Download file" width={15} />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PeopleMaintable;

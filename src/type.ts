export interface Node {
  name: string;
  color: string;
  children?: Node[];
}

export const data: Node = {
  name: "Dataphyte",
  color: "bg-[#7F55DA]",
  children: [
    {
      name: "Goloka",
      color: "bg-green-600",
      children: [
        { name: "Sabi", color: "bg-green-500" },
        {
          name: "Wazobia",
          color: "bg-green-500",
          children: Array(5).fill({ name: "Wazobia", color: "bg-green-500" }),
        },
      ],
    },
    {
      name: "Nubia",
      color: "bg-purple-300",
      children: Array(6).fill({ name: "Data", color: "bg-purple-500" }),
    },
    {
      name: "Anfani",
      color: "bg-blue-400",
      children: Array(2).fill({ name: "Data", color: "bg-blue-500" }),
    },
    {
      name: "Academy",
      color: "bg-yellow-300",
      children: [
        { name: "Sabi", color: "bg-yellow-500" },
        {
          name: "Wazobia",
          color: "bg-yellow-500",
          children: Array(4).fill({ name: "Wazobia", color: "bg-yellow-500" }),
        },
      ],
    },
  ],
};

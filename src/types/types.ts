// src/types.ts
export interface Company {
  id: number;
  name: string;
  type: string;
  image?: string; // Optional image URL
  link?: string; // Optional link for interactivity
}

export interface Ownership {
  sourceId: number;
  targetId: number;
  type: string;
  ownership: number; // Ownership percentage
}

export interface OwnershipChartData {
  companies: Company[];
  connections: Ownership[];
}
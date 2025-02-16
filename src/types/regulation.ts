
export type Regulation = {
  id: string;
  filename: string;
  folder: string;
  uploadedDate: string;
  status?: 'active' | 'archived';
};

export type RegulationAgent = {
  id: string;
  name: string;
  type: 'table_of_contents' | 'summary';
  regulationId: string;
};

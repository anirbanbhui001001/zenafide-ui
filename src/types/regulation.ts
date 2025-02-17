
export type Regulation = {
  id: string;
  filename: string;
  folder: string;
  uploadedDate: string;
  status?: 'active' | 'archived';
  content?: string;
};

export type RegulationAgent = {
  id: string;
  name: string;
  folder?: string;
  type: 'table_of_contents' | 'summary';
  regulationId: string;
};

import DataTable from "@/components/table/datatable";
import { projectDocuments } from "@/data/projects";
import {Icon} from "@iconify/react";
import { Button } from "@heroui/react";
import { ProjectDocument } from "@/types/projects"; // Assuming ProjectDocument is the correct type

interface DocumentsTabProps {
  projectId?: string;
}

export default function DocumentsTab({ projectId }: DocumentsTabProps) {
  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:plus" />}>
      Add Document
    </Button>
  );

  const columns = [
    { key: "id", label: "ID", width: 50 },
    { 
      key: "filename", 
      label: "Name",
      render: (document: ProjectDocument) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500" width={20} />
          {document.filename}
        </div>
      )
    },
    {
      key: "folder",
      label: "Folder",
      render: (document: ProjectDocument) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:folder-outline" className="text-gray-500" width={20} />
          {document.folder || '-'}
        </div>
      )
    },
    { key: "uploadedDate", label: "Uploaded Date" },
    { key: "status", label: "Status" },
  ];

  // const filteredDocuments = projectId
  //   ? projectDocuments.filter((doc) => doc.project_id === projectId)
  //   : projectDocuments;

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={projectDocuments}
        columns={columns}
        actions={actions}
      />
    </div>
  );
}
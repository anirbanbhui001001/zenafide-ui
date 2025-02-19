import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { regulations } from "@/data/regulations";
import { Regulation } from "@/types/regulations";
import { Button } from "@heroui/react";

export default function DocumentsTab() {
  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:plus" />}>
      Add Regulation
    </Button>
  );

  const columns = [
    { key: "id", label: "ID", width: "5%" },
    {
      key: "filename",
      label: "Filename",
      render: (document: Regulation) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500" width={20} />
          {document.filename}
        </div>
      ),
    },
    {
      key: "folder",
      label: "Folder",
      render: (regulation: Regulation) => (
        <div className="flex items-center gap-2">
          <Icon
            icon="mdi:folder-outline"
            className="text-gray-500"
            width={20}
          />
          {regulation.folder}
        </div>
      ),
    },
    { key: "uploadedDate", label: "Uploaded Date" },
  ];

  return (
    <DataTable
      data={regulations}
      columns={columns}
      title="All Regulations"
      actions={actions}
    />
  );
}

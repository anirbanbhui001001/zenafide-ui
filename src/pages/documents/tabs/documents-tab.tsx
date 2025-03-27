import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { documents } from "@/data/documents";
import { Document } from "@/types/documents/document";
import { Button } from "@heroui/react";

interface DocumentsTabProps {
  onDocumentSelect: (document: Document) => void;
}

export default function DocumentsTab({ onDocumentSelect }: DocumentsTabProps) {
  return (
    <div></div>
  )
}

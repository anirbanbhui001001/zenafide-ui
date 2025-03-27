
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { parsedSnapshots, documents } from "@/data/documents";
import { Document, ParsedSnapshot } from "@/types/documents/document";
import { Button } from "@heroui/react";

interface ParsedSnapshotsTabProps {
  onDocumentSelect?: (document: Document) => void;
}

export default function ParsedSnapshotsTab({ onDocumentSelect }: ParsedSnapshotsTabProps) {
  return (
    <div></div>
  )
}

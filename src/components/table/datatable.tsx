"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

export interface DataTableProps<T> {
  data: T[];
  columns: {
    key: string;
    label: string;
    align?: "start" | "center" | "end";
    width?: string;
    render?: (item: T) => React.ReactNode;
  }[];
  title?: string;
  actions?: React.ReactNode;
  onRowClick?: (row: T) => void;
}

export default function DataTable<T extends { id: string }>({
  data,
  columns,
  title,
  actions,
  onRowClick,
}: DataTableProps<T>) {
  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: ["pb-2"],
      tr: ["border-b", "border-divider", "data-[last=true]:border-b-0", "hover:bg-gray-100", "cursor-pointer"],
    }),
    [],
  );

  const tableProps = React.useMemo(
    () => ({
      layout: "fixed",
      removeWrapper: true,
      classNames,
    }),
    [classNames],
  );

  return (
    <div className="p-8">
      {(title || actions) && (
        <div className="flex justify-end items-center mb-6">
          {title && <h1 className="text-2xl font-bold mr-auto">{title}</h1>}
          {actions}
        </div>
      )}
      <div>
        <div className="flex flex-col relative gap-4 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-3 items-end">
              <div className="flex gap-3"></div>
            </div>
            <div className="flex justify-between items-center"></div>
          </div>
          <Table aria-label={title} hideHeader={false} {...tableProps}>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn 
                  key={column.key} 
                  align={column.align}
                  width={column.width}
                >
                  {column.label}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} onClick={() => onRowClick && onRowClick(item)}>
                  {columns.map((column) => (
                    <TableCell key={`${item.id}-${column.key}`}>
                      {column.render
                        ? column.render(item)
                        : (item as any)[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
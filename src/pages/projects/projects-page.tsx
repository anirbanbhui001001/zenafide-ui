
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import DocumentsTab from "./tabs/documents-tab";
import ReplitLayout from "@/components/replit/replit-layout";
import { Project } from "@/types/projects";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("replit");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <Tabs
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Project management options"
      >
        <Tab key="documents" title="Documents">
          <DocumentsTab onProjectSelect={handleProjectSelect} />
        </Tab>
        <Tab key="replit" title="Replit">
          <div className="h-[calc(100vh-10rem)]">
            <ReplitLayout />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

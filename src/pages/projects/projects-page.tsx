
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import ProjectsTab from "./tabs/projects-tab";
import DocumentsTab from "./tabs/documents-tab";
import ReplitLayout from "@/components/replit/replit-layout";
import { Project, ProjectDocument } from "@/types/projects";
import { initialPanels } from "@/data/projects/replit/initial-panels";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("documents");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <Tabs
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Project management options"
      >
        <Tab key="projects" title="Projects">
          <ProjectsTab onProjectSelect={handleProjectSelect} />
        </Tab>
        <Tab key="documents" title="Documents">
          <DocumentsTab projectId={selectedProject?.id} />
        </Tab>
        <Tab key="replit" title="Reva">
          <div className="h-[calc(100vh-10rem)]">
            <ReplitLayout initialPanels={initialPanels} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

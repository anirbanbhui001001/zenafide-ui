import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { ZenUser } from "@/types/zen_user";

interface SidePanelBasicDetailsProps {
  user?: ZenUser;
  onSave: (user: ZenUser) => void;
  onCancel: () => void;
}

export default function SidePanelBasicDetails({
  user,
  onSave,
  onCancel,
}: SidePanelBasicDetailsProps) {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: user?.id || String(Date.now()),
      ...formData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-4">
      <Input
        label="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, firstName: e.target.value }))
        }
        required
      />
      <Input
        label="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, lastName: e.target.value }))
        }
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        required
      />
    </form>
  );
}

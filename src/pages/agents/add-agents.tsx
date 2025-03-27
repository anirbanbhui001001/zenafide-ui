import { useState } from "react";
import {
    Form, Input, Button, Modal, ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Switch,
} from "@heroui/react";
import { supabase } from "@/utils/superbase";
import { Agent } from "http";


export default function AddAgentsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [switchSelected, setSwitchSelected] = useState(false);

    const handleClose = () => {
        onClose();
        setSwitchSelected(false);
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        //@ts-expect-error
        data.status = switchSelected;
        const { error } = await supabase.from('agents').insert(data);
        if (error) console.log(error);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent>
                <ModalHeader>Add Agents</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSave}>
                        <Input className="mb-4" name="name" label="Name" placeholder="Enter name" />
                        <Input className="mb-4" name="systemPrompt" label="System Prompt" placeholder="Enter system prompt" />
                        <Input className="mb-4" name="createdBy" label="Created By" placeholder="Enter created by" />
                        <div className="flex items-center gap-4">
                            Status:
                            <Switch name="status" isSelected={switchSelected} onChange={() => setSwitchSelected(!switchSelected)} />
                        </div>
                        <ModalFooter className="w-full flex justify-end">
                            <Button className="flex" color="primary" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
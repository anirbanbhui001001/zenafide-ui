import { Form, Input, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
import { supabase } from "@/utils/superbase";

export default function AddInsightsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    const handleClose = () => {
        onClose();
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const { error } = await supabase.from('insights').insert(data);
        if (error) console.log(error);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent>
                <ModalHeader className="text-small">Add Insights</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSave}>
                        <Input className="mb-4" name="name" label="Name" placeholder="Enter name" />
                        <Input className="mb-4" name="folder" label="Folder" placeholder="Enter folder" />
                        <Input className="mb-4" name="type" label="Type" placeholder="Enter type" />
                        <Input className="mb-4" name="content" label="Content" placeholder="Enter content" />
                        <Input className="mb-4" name="parent" label="Parent" placeholder="Enter parent" />
                        <Input className="mb-4" name="parent_id" label="Parent ID" placeholder="Enter parent ID" />
                        <ModalFooter className="w-full flex justify-end px-0">
                            <Button className="flex" color="primary" size="sm" type="submit">
                                Save
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
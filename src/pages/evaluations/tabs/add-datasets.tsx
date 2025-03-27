import { Form, Input, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react";
import { supabase } from "@/utils/superbase";

export default function AddDatasetsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    const handleClose = () => {
        onClose();
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const { error } = await supabase.from('datasets').insert(data);
        if (error) console.log(error);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent>
                <ModalHeader className="text-small">Add Datasets</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSave}>
                        <Input className="mb-4" name="name" label="Name" placeholder="Enter name" />
                        <Input className="mb-4" name="description" label="Description" placeholder="Enter description" />
                        <Input className="mb-4" name="testCases" label="Test Cases" placeholder="Enter test cases" />
                        <Input className="mb-4" name="creator" label="Creator" placeholder="Enter creator" />
                        <Input className="mb-4" name="updated" label="Updated" placeholder="Enter updated" />
                        <Input className="mb-4" name="type" label="Type" placeholder="Enter type" />
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
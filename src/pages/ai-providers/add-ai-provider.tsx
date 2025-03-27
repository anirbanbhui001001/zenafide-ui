import { useState } from "react";
import {
    Form, Input, Button, Modal, ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/react";
import { supabase } from "@/utils/superbase";


export default function AddAiProviderModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    const handleClose = () => {
        onClose();
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const { error } = await supabase.from('providers').insert(data);
        if (error) console.log(error);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent>
                <ModalHeader>Add AI Provider</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSave}>
                        <Input className="mb-4" name="name" label="Name" placeholder="Enter name" />
                        <Input className="mb-4" name="status" label="Status" placeholder="Enter status" />
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
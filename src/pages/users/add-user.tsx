import { useState } from "react";
import {
    Form, Input, Button, Modal, ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/react";
import { supabase } from "@/utils/superbase";


export default function AddUsersModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    const handleClose = () => {
        onClose();
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const { error } = await supabase.from('users').insert(data);
        if (error) console.log(error);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalContent>
                <ModalHeader>Add Users</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSave}>
                        <Input className="mb-4" name="firstName" label="First Name" placeholder="Enter first name" />
                        <Input className="mb-4" name="lastName" label="Last Name" placeholder="Enter last name" />
                        <Input className="mb-4" name="email" label="Created By" placeholder="Enter email" />
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
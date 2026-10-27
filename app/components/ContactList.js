'use client'

import { useCallback } from "react";
import { useContactsContext } from "../contexts/ContactsContext";
import ContactItem from "./ContactItem";
import EmptyState from "./ui/EmptyState";

const ContactList = ({ contacts }) => {
    const { removeContact } = useContactsContext()

    const handleRemove = useCallback(async (id) => {
        try {
            await removeContact(id)
        } catch (error) {
            console.log(error)
        }
    }, [removeContact]);

    return (
        <section className="bg-white shadow rounded">
            <div className="px-4 py-3 border-b">
                <h2 className="font-medium text-gray-900">
                    Contatos ({contacts.length})
                </h2>
            </div>
            <ul className="divide-y">
                {contacts.length === 0 ? (
                    <EmptyState icon="📭" message="Nenhum contato cadastrado ainda." />
                ) : (
                    contacts.map((c) => (
                        <ContactItem key={c.id} contact={c} handleRemove={handleRemove} />
                    ))
                )}
            </ul>
        </section>
    )
}

export default ContactList

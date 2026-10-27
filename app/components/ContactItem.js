'use client'
import Link from "next/link"
import { memo } from "react"
import Button from "./ui/Button"

const ContactItem = memo(({ contact, handleRemove, ...props }) => {

    return (
        <li {...props} className="p-4 flex items-center justify-between">
            <div>
                <Link
                    href={`/contact/${contact.id}`}
                    className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                    {contact.nome}
                </Link>
                <p className="text-sm text-gray-600">
                    {contact.email} • {contact.telefone}
                </p>
            </div>
            <Button
                variant="danger"
                onClick={() => handleRemove(contact.id)}
            >
                Excluir
            </Button>
        </li>
    )
})

export default ContactItem

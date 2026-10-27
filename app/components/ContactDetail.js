'use client'

import Button from "./ui/Button";
import PageHeader from "./ui/PageHeader";

const ContactDetail = ({ contact, onBack }) => {
    return (
        <div className="bg-white shadow rounded-lg p-6">
            <PageHeader title="Detalhes do Contato" className="mb-6">
                <Button variant="ghost" onClick={onBack}>
                    ← Voltar
                </Button>
            </PageHeader>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                    </label>
                    <p className="text-gray-900">{contact.nome}</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <p className="text-gray-900">{contact.email || "—"}</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                    </label>
                    <p className="text-gray-900">{contact.telefone || "—"}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;

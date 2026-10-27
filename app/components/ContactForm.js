'use client'
import useForm from "../hooks/useForm";
import TextInput from "./TextInput";
import Button from "./ui/Button";

const ContactForm = () => {
    const {
        form,
        errors,
        handleSubmit,
        handleChange,
        nomeInputRef
    } = useForm()

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded p-4 space-y-4"
        >
            <TextInput
                label="Nome"
                name="nome"
                value={form.nome}
                handleChange={handleChange}
                ref={nomeInputRef}
                errors={errors.nome}
            />

            <TextInput
                label="Email"
                name="email"
                value={form.email}
                handleChange={handleChange}
                errors={errors.email}
            />

            <TextInput
                label="Telefone"
                name="telefone"
                value={form.telefone}
                handleChange={handleChange}
                errors={errors.telefone}
            />

            <Button type="submit" variant="primary">
                Adicionar Contato
            </Button>
        </form>
    )
}

export default ContactForm

'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import { useContactsContext } from "../contexts/ContactsContext";

const useForm = () => {
    const contactsData = useContactsContext()
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
    const [errors, setErrors] = useState({})
    const nomeInputRef = useRef(null)

    useEffect(() => {
        nomeInputRef.current.focus()
    }, [])

    const validate = () => {
        const newErrors = {};
        if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
        if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            newErrors.email = "Email inválido";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            contactsData.addContact(form)
            setForm({ nome: "", email: "", telefone: "" });
            nomeInputRef.current.focus()
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);

    return {
        form,
        errors,
        handleSubmit,
        handleChange,
        nomeInputRef
    }

}

export default useForm
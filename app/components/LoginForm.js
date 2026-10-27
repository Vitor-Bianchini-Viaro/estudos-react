// app/components/LoginForm.js  (MÓDULO 3 - formulário com validação)
"use client";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import TextInput from "./TextInput";
import Button from "./ui/Button";

const LoginForm = () => {
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", senha: "" }); // campos controlados
    const [errors, setErrors] = useState({});                   // mensagens de erro por campo

    // Devolve um objeto { campo: "mensagem" }; vazio = tudo válido
    const validate = () => {
        const newErrors = {};
        if (!form.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
            newErrors.email = "Email inválido";
        }
        if (form.senha.length < 6) {
            newErrors.senha = "A senha deve ter ao menos 6 caracteres";
        }
        return newErrors;
    };

    // Um único handler para todos os inputs, usando [name]: value (chave computada)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();                       // impede recarregar a página
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {  // há erros: mostra e não envia
            setErrors(newErrors);
            return;
        }
        const ok = login(form.email, form.senha); // tenta logar
        if (!ok) {
            setErrors({ senha: "Email ou senha incorretos" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4">
            <TextInput label="Email" name="email" value={form.email}
                handleChange={handleChange} errors={errors.email} />
            <TextInput label="Senha" name="senha" type="password" value={form.senha}
                handleChange={handleChange} errors={errors.senha} />
            <Button type="submit" variant="primary">Entrar</Button>
            <p className="text-sm text-gray-500">Teste: admin@fiap.com / 123456</p>
        </form>
    );
};

export default LoginForm;

// app/login/page.js  (MÓDULO 3 - rota /login)
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";
import PageHeader from "../components/ui/PageHeader";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
    const { user, authLoading } = useAuth();
    const router = useRouter();

    // Se já está logado, não faz sentido ver o login: manda para a home
    useEffect(() => {
        if (!authLoading && user) router.replace("/");
    }, [authLoading, user, router]);

    return (
        <div className="min-h-screen bg-gray-200 p-6">
            <div className="max-w-md mx-auto space-y-6">
                <PageHeader title="Login" />
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;

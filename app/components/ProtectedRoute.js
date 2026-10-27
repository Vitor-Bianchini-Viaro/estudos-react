// app/components/ProtectedRoute.js  (MÓDULO 3 - proteção de rota reutilizável)
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import LoadingState from "./ui/LoadingState";

// Envolve páginas privadas: sem usuário → redireciona para /login
const ProtectedRoute = ({ children }) => {
    const { user, authLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!authLoading && !user) router.replace("/login");
    }, [authLoading, user, router]);

    // Enquanto carrega ou redireciona, não mostra o conteúdo protegido
    if (authLoading || !user) return <LoadingState />;

    return children;
};

export default ProtectedRoute;

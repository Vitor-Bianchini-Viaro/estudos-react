// app/contexts/AuthContext.js  (MÓDULO 3 - estado de autenticação)
"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 1. Criar o Context
const AuthContext = createContext();

// 2. Hook customizado para consumir (lança erro se usado fora do Provider)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider");
    }
    return context;
};

// 3. Provider: guarda o usuário logado e as funções login/logout
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // true enquanto ainda lemos o localStorage (evita redirecionar para /login por engano no F5)
    const [authLoading, setAuthLoading] = useState(true);
    const router = useRouter();

    // Restaura a sessão ao abrir o app (roda uma vez, ao montar)
    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
        setAuthLoading(false);
    }, []);

    // Login de exemplo com credenciais fixas (na aula pode ser uma chamada axios à API)
    // Retorna true se deu certo, false se as credenciais estão erradas
    const login = useCallback((email, senha) => {
        if (email === "admin@fiap.com" && senha === "123456") {
            const logged = { email };
            setUser(logged);                                  // guarda no estado
            localStorage.setItem("user", JSON.stringify(logged)); // guarda no navegador
            router.push("/");                                 // redireciona APÓS o login
            return true;
        }
        return false;
    }, [router]);

    // Logout: limpa estado + localStorage e volta para a tela de login
    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/login");                                // redireciona APÓS o logout
    }, [router]);

    const value = { user, authLoading, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

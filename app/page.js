"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import FilterInput from "./components/FilterInput";
import Statistics from "./components/Statistics";
import Button from "./components/ui/Button";
import LoadingState from "./components/ui/LoadingState";
import PageHeader from "./components/ui/PageHeader";
import { useAuth } from "./contexts/AuthContext";
import { useContactsContext } from "./contexts/ContactsContext";
import useFilter from "./hooks/useFilter";
import useStatistics from "./hooks/useStatistics";

const HomePage = () => {
  const { contacts } = useContactsContext()
  const { user, authLoading, logout } = useAuth()
  const router = useRouter()
  const filterData = useFilter(contacts)
  const stats = useStatistics(contacts)

  // MÓDULO 3: sem usuário logado → redireciona para /login
  useEffect(() => {
    if (!authLoading && !user) router.replace("/login")
  }, [authLoading, user, router])

  // enquanto lê o localStorage ou redireciona, não mostra a página
  if (authLoading || !user) return <LoadingState />

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <PageHeader title="Cadastro de Contatos">
          <FilterInput value={filterData.filter} onChange={filterData.handleFilterChange} />
          <Button variant="ghost" onClick={logout}>Sair</Button>
        </PageHeader>

        {/* ===== FORMULÁRIO ===== */}
        <ContactForm />

        <Statistics stats={stats} />

        {/* ===== LISTA DE CONTATOS ===== */}
        <ContactList contacts={filterData.filteredContacts} />
      </div>
    </div>
  );
};

export default HomePage;

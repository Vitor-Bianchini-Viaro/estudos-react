# Contatos – projeto de estudo (Checkpoint / prova de React)

CRUD de contatos em Next.js (App Router) + Tailwind + axios, com Context, hooks customizados e login (Módulo 3).

## Rodar
```bash
npm install
npm run dev      # http://localhost:3000
```
Login de teste: `admin@fiap.com` / `123456`

## Estrutura
```
app/
  layout.js                     AuthProvider > ContactsProvider
  page.js                       Home (protegida): redireciona para /login se não logado
  login/page.js                 Rota /login (Módulo 3)
  contact/[id]/page.js          Detalhe (protegida por ProtectedRoute)
  contexts/AuthContext.js       user, authLoading, login(), logout() (Módulo 3)
  contexts/ContactsContext.js   contacts + CRUD via axios
  services/contactsApi.js       axios.create + interceptors
  hooks/                        useForm, useFilter, useStatistics, useContactDetail
  components/                   ContactForm, ContactList, ContactItem, ContactDetail,
                                FilterInput, Statistics, TextInput, LoginForm, ProtectedRoute
  components/ui/                Button, PageHeader, StatCard, EmptyState, LoadingState
```

## Checklist de entrega (padrão das provas anteriores)
- [ ] Projeto criado com `create-next-app`
- [ ] Mínimo de 8 commits na `main`
- [ ] Componentes funcionais com props (6+)
- [ ] `useState` e `useEffect`; axios para a API
- [ ] Navegação com Next Router + página de detalhes
- [ ] Comentários explicando os trechos principais
- [ ] `participantes.md` na raiz
- [ ] README com instruções e link do deploy (Vercel)
- [ ] Repositório privado com o professor como colaborador
- [ ] `.zip` sem `node_modules`

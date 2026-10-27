'use client'

import StatCard from './ui/StatCard'

const Statistics = ({ stats }) => {
    return (
        <div className="bg-white shadow rounded p-4">
            <h3 className="text-lg font-semibold mb-3">Estatísticas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard value={stats?.total} label="Total" colorClass="text-blue-600" />
                <StatCard value={stats?.comEmail} label="Com Email" colorClass="text-green-600" />
                <StatCard value={stats?.comTelefone} label="Com Telefone" colorClass="text-purple-600" />
                <StatCard value={stats?.semEmail} label="Sem Email" colorClass="text-orange-600" />
                <StatCard value={stats?.semTelefone} label="Sem Telefone" colorClass="text-yellow-600" />
            </div>
        </div>
    )
}

export default Statistics

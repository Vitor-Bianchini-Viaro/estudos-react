'use client'

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useContactsContext } from '../contexts/ContactsContext';

const useContactDetail = () => {
    const params = useParams();
    const router = useRouter();
    const { contact, loading, getContact } = useContactsContext();

    useEffect(() => {
        getContact(params.id);
    }, [params.id, getContact]);

    const isLoading = loading || String(contact?.id) !== String(params.id);

    const handleBack = () => {
        router.back();
    };

    return {
        contact,
        isLoading,
        handleBack
    };
};

export default useContactDetail;

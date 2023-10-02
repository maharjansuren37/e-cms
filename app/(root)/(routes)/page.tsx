"use client";

import { useEffect } from 'react';
import { UserButton } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal';

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      <div className='mt-5 ml-5'>
        
      </div>
    </>
  )
}

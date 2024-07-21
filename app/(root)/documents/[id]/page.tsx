import CollaborativeRoom from '@/components/CollaborativeRoom';
import Header from '@/components/Header';
import { Editor } from '@/components/editor/Editor';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import React from 'react';

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom 
      
      />
    </main>
  );
};

export default Document;

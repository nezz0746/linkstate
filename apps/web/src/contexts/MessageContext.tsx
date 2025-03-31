"use client";

import { OwnedNft, TransferredNft } from "alchemy-sdk";
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "~/src/types";

type ProfileNFT = TransferredNft;

interface MessageContextType {
  selectedUser: { user: User; profileNFT: ProfileNFT } | null;
  openMessageModal: (user: User, profileNFT: ProfileNFT) => void;
  closeMessageModal: () => void;
  isModalOpen: boolean;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [selectedUser, setSelectedUser] = useState<{
    user: User;
    profileNFT: ProfileNFT;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMessageModal = (user: User, profileNFT: ProfileNFT) => {
    setSelectedUser({ user, profileNFT });
    setIsModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <MessageContext.Provider
      value={{
        selectedUser,
        openMessageModal,
        closeMessageModal,
        isModalOpen,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
}

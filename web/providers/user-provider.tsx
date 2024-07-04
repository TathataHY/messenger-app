"use client";
import { ChatProvider } from "@/context/chat-context";
import { GlobalProvider } from "@/context/global-context";
import React from "react";
import { UserContextProvider } from "../context/user-context";

interface Props {
  children: React.ReactNode;
}

function UserProvider({ children }: Props) {
  return (
    <UserContextProvider>
      <GlobalProvider>
        <ChatProvider>{children}</ChatProvider>
      </GlobalProvider>
    </UserContextProvider>
  );
}

export default UserProvider;

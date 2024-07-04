"use client";

import FriendProfile from "@/components/friend-profile";
import MainContent from "@/components/main-content";
import Body from "@/components/messages/body";
import Header from "@/components/messages/header";
import TextArea from "@/components/messages/text-area";
import Online from "@/components/online";
import Profile from "@/components/profile";
import Sidebar from "@/components/sidebar";
import { useChatContext } from "@/context/chat-context";
import { useGlobalContext } from "@/context/global-context";
import useRedirect from "@/hooks/use-user-redirect";

export default function Home() {
  useRedirect("/login");

  const { currentView, showFriendProfile, showProfile } = useGlobalContext();
  const { selectedChat } = useChatContext();

  return (
    <div className="relative px-[10rem] py-10 h-full">
      <main
        className="h-full flex backdrop-blur-sm rounded-3xl bg-white/65 dark:bg-[#262626]/90 border-2 border-white
        dark:border-[#3C3C3C]/65 shadow-sm overflow-hidden"
      >
        <Sidebar />
        <div className="flex-1 flex">
          <div className="relative flex-1 border-r-2 border-white dark:border-[#3C3C3C]/60">
            {/* Default Content */}
            {!showProfile && !selectedChat && <MainContent />}

            {!showProfile && selectedChat && <Header />}
            {!showProfile && selectedChat && <Body />}
            <div className="absolute w-full px-4 pb-4 left-0 bottom-0">
              {!showProfile && selectedChat && <TextArea />}
            </div>

            {showProfile && (
              <div className="flex flex-col items-center justify-center h-full">
                <Profile />
              </div>
            )}
          </div>
          <div className="w-[30%]">
            {!showFriendProfile && <Online />}
            {showFriendProfile && <FriendProfile />}
          </div>
        </div>
      </main>
    </div>
  );
}

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { userProfile as initialProfile } from "@/data/mockData";
import { useAuth } from "./AuthContext";

export type UserProfile = {
  name: string;
  email: string;
  plan: string;
  joinedDate: string;
  avatarUrl?: string;
  password?: string;
};

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile>({
    ...initialProfile,
    password: "password123", // mock initial password
  });

  useEffect(() => {
    if (user) {
      setProfile(prev => ({
        ...prev,
        name: user.displayName || prev.name,
        email: user.email || prev.email,
        avatarUrl: user.photoURL || prev.avatarUrl,
      }));
    }
  }, [user]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}

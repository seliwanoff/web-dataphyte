import React, { createContext, useContext, useState, ReactNode } from "react";

interface Profile {
  mineralName: string;
  countries: string;
  miningCount: number;
  docCount: number;
  mineral?: string;
  role?: string;
}

interface ProfileContextType {
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
  addProfile: (profile: Profile) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const addProfile = (newProfile: Profile) => {
    setProfiles([newProfile]);
  };

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

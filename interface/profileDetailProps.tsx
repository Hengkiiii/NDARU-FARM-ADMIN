import { Profile } from "@/interface/profileProps";

export interface ProfileDetailsProps {
  profile: Profile;
  onSave: (updatedProfile: Profile) => void;
}

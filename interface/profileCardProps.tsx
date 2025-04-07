import { Profile } from "@/interface/profileProps";

export interface ProfileCardProps {
  profile: Profile;
  onDelete?: () => void;
  onSave?: (updatedProfile: Profile) => void;
}

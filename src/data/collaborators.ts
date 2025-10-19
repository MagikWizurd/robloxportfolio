export interface Collaborator {
  id: string;
  name: string;
  role: string;
  verified: boolean;
  avatarUrl?: string;
  profileUrl?: string;
}

// Add your verified collaborators here
export const collaborators: Collaborator[] = [
  // Example collaborators - replace with your actual verified users
  // {
  //   id: "user1",
  //   name: "Username",
  //   role: "Game Designer",
  //   verified: true,
  //   profileUrl: "https://www.roblox.com/users/[ID]/profile",
  // },
];

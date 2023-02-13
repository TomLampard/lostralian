import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../utils/api";

const UserProfile = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { data } = api.auth.getUser.useQuery();

  return (
    <>
    </>
  );
};

export default UserProfile;

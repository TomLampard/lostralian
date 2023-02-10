import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "../utils/api";



const UserProfile = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { data } = api.auth.getUser.useQuery();


  return (
    <>
      <Head>
        <title>{userInformation?.name} | Github</title>
      </Head>
      <h1>{userInformation?.name}</h1>
      <p>{userInformation?.bio}</p>
    </>
  );
};
}
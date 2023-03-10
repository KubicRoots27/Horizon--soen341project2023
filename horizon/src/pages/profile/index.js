import { useSession, signOut } from "next-auth/react";
import Card from "../../../components/ui/card";
import { useRouter } from "next/router";
import Link from "next/link";

const Profile = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-russian_green"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl font-bold text-russian_green">
          You are not logged in!
        </div>
        <div className="text-2xl font-bold text-russian_green">
          <Link href="/login">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Card width="w-3/4 lg:w-3/4">
        <div className="text-2xl font-bold text-russian_green">
          Welcome {session.user.fname}, you are logged in!
        </div>
        <div>
          First Name: {session.user.fname}
          <br />
          Last Name: {session.user.lname}
          <br />
          Email: {session.user.email}
        </div>

        <button
          className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5"
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </Card>
    </>
  );
};

export default Profile;

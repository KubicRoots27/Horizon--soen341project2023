import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const publicProfile = ({ publicProfile }) => {
  const { data: session, status } = useSession();

  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      setUserId(session.user._id.toString());
    }
  }, [session]);

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
    <div className="flex flex-col justify-center items-center bg-[#f1f1f1] w-fit mx-auto h-fit mt-20 p-5 rounded-md shadow-md">
      <div className="text-2xl font-bold">
        You are viewing {publicProfile.fname}'s profile!
      </div>
      <div>
        First Name: {publicProfile.fname}
        <br />
        Last Name: {publicProfile.lname}
        <br />
        Email: {publicProfile.email}
        <br />
        Account Type: {capitalizeFirstLetter(publicProfile.accountType)}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(`http://localhost:3000/api/profile/${id}`);

  const data = await response.json();
  return {
    props: {
      publicProfile: data.user,
    },
  };
};

export default publicProfile;

import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
      <div className="bg-[#f1f1f1] w-2/3 mx-auto h-fit mt-20 p-5 rounded-md shadow-md">
        <div className="text-2xl font-bold mb-5">
          Welcome {session.user.fname}, you are logged in!
        </div>
        <div>
          First Name: {session.user.fname}
          <br />
          Last Name: {session.user.lname}
          <br />
          Email: {session.user.email}
          <br />
          Account Type: {capitalizeFirstLetter(session.user.accountType)}
          <br />
          Company Name: {session.user.companyName}
        </div>

        <button
          className="bg-red-500 rounded hover:outline outline-2 p-2 mt-5"
          onClick={() => signOut()}
        >
          Sign Out
        </button>

        <Link href="/profile/edit">
          <button className="bg-blue-500 rounded hover:outline outline-2 p-2 mt-5 mx-5">
            Edit Profile
          </button>
        </Link>

        {session.user.accountType === "employer" && (
          <Link href="/dashboard/employer">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Employer Dashboard
            </button>
          </Link>
        )}

        {session.user.accountType === "student" && (
          <Link href="/dashboard/student">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Student Dashboard
            </button>
          </Link>
        )}

        {session.user.accountType === "admin" && (
          <Link href="/dashboard/admin">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Admin Dashboard
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Profile;

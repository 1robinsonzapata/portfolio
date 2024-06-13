"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import HNavigation from "./hnav/page";
import VNavigation from "./vnav/page"
export default function Home() {

  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (!session) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [session, status, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <HNavigation />
      <VNavigation />
    </main>
  );
}

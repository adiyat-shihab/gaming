import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@/lib/firebase/auth";

export function useUserSession(InitSession: object | null) {
  const [userUid, setUserUid] = useState<object | null>(InitSession);

  // Listen for changes to the user session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUserUid(authUser);
        console.log(authUser);
      } else {
        setUserUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return userUid;
}

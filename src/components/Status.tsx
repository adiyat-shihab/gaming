"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserSession } from "@/hooks/use-user-session";
import Post from "@/model/post";
import { useEffect, useState } from "react";

const Status = ({ slug }: { slug: string }) => {
  const user: object | null = useUserSession(null);
  const [existStatus, setExistStatus] = useState("");
  console.log(user);
  useEffect(() => {
    const fetchStatus = async () => {
      const params = new URLSearchParams({
        // @ts-ignore
        email: user?.email || "",
        slug: slug,
      });

      const existingStatus = await fetch(`/api/games?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!existingStatus.ok) {
        throw new Error("Failed to fetch existing status");
      }

      const data = await existingStatus.json();
      setExistStatus(data?.status);
      console.log(data);
    };

    fetchStatus();
    return () => {};
    //   @ts-ignore
  }, [slug, user?.email]);
  const handlePost = async (value: string) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }
    try {
      const saveGame = await fetch("/api/games", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // @ts-ignore
          email: user.email,
          slug: slug,
          status: value,
        }),
      });

      if (!saveGame.ok) {
        throw new Error("Failed to update post");
      }

      const data = await saveGame.json();
      console.log("Post updated:", data);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  return (
    <div>
      <Select onValueChange={handlePost} defaultValue={existStatus || "Read"}>
        <SelectTrigger className={"  "}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Read">Read</SelectItem>
          <SelectItem value="Unread">Unread</SelectItem>
          <SelectItem value="Rpg Games">Rpg Games</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Status;

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import signUp from "@/firebase/signUp";
import { useFormik } from "formik";
import signIn from "@/firebase/signIn";
import { updateProfile } from "@firebase/auth";
import { getAuth } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (!isLogin) {
        signUp(values.email, values.password).then((result) => {
          if (
            result.error &&
            (result.error as any).code === "auth/email-already-in-use"
          ) {
            signIn(values.email, values.password).then((result) =>
              router.push("/"),
            );
          } else {
            console.log("Sign up successful", result.result);
            const auth = getAuth();
            if (auth.currentUser) {
              updateProfile(auth.currentUser, { displayName: values.userName })
                .then(() => {
                  // Profile updated!
                  // ...
                  router.push("/");
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                });
            }
          }
        });
      } else {
        signIn(values.email, values.password).then((result) => {
          if (result.error) {
            console.error("Sign in failed", result.error);
            document.getElementById("alert-dialog-trigger")?.click();
          } else {
            console.log("Sign in successful", result.result);
            router.push("/");
          }
        });
      }
    },
  });
  return (
    <div className="  flex items-center justify-center p-4 h-[40rem]">
      <Card className="w-full max-w-md overflow-hidden">
        <form onSubmit={formik.handleSubmit}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center">
              GameHub
            </CardTitle>
            <CardDescription>
              {/*{isLogin*/}
              {/*  ? "Welcome back! Please login to your account."*/}
              {/*  : "Create an account to get started."}*/}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={isLogin ? "login" : "register"}
              onValueChange={(value) => setIsLogin(value === "login")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="login" className="mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                          className="pl-10"
                          name={"email"}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="password"
                          placeholder="Enter your password"
                          type="password"
                          className="pl-10"
                          name={"password"}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </TabsContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild id={"alert-dialog-trigger"}>
                    <Button className={"hidden"} variant="outline">
                      Show Dialog
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <AlertDialogTitle>Account doesn't exist</AlertDialogTitle>
                      <AlertDialogDescription>
                        Something went wrong. Please check your email or
                        password.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <TabsContent value="register" className="mt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="username"
                          placeholder="Choose a username"
                          type="text"
                          className="pl-10"
                          name={"userName"}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                          className="pl-10"
                          name={"email"}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                          id="password"
                          placeholder="Choose a password"
                          type="password"
                          className="pl-10"
                          name={"password"}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          terms and conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
          <CardFooter>
            {" "}
            <Button className="w-full">
              <input
                type={"submit"}
                value={isLogin ? "Login" : "Create Account"}
              />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Page;

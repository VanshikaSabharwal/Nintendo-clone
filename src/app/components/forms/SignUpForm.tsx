"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUserAction } from "@/data/actions/auth-actions";
// import { loginUserAction } from "@/data/actions/auth-actions";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodErrors } from "@/components/custom/ZodErrors";
// import { StrapiErrors } from "@/components/custom/StrapiErrors";
// import { SubmitButton } from "@/components/custom/SubmitButton";

// const INITIAL_STATE = {
//   zodErrors: null,
//   strapiErrors: null,
//   data: null,
//   message: null,
// };
const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

export default function SignUpForm() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );
  console.log(formState, "client");
  return (
    <div className="w-full max-w-md flex justify-center items-center	">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign up</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="text" placeholder="email" />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="submitSigninBtn">Submit</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="signin">
            SignIn
          </Link>
        </div>
      </form>
    </div>
  );
}

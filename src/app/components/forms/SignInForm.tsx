"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
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
// import { ZodErrors } from "@/components/custom/ZodErrors";
// import { StrapiErrors } from "@/components/custom/StrapiErrors";
// import { SubmitButton } from "@/components/custom/SubmitButton";

// const INITIAL_STATE = {
//   zodErrors: null,
//   strapiErrors: null,
//   data: null,
//   message: null,
// };

export default function SignInForm() {
  //   const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);
  return (
    <div className="w-full max-w-md flex ">
      <form
      //   action={formAction}
      >
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign in</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
              />
              {/* <ZodErrors error={formState?.zodErrors?.identifier} /> */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              {/* <ZodErrors error={formState.zodErrors?.password} /> */}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="submitSigninBtn">Submit</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline ml-2" href="signup">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}

"use client";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/core";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#484030] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <AuthPageBase
            {...props}
            renderContent={(content) => <div>{content}</div>}
          />
        </div>
      </div>
    </div>
  );
};
{
  /* email: demo@refine.dev
            <br /> password: demodemo */
}
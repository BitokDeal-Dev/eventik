import {SignupForm} from "@/components/shared";
import React from "react";
import type {Metadata} from "next";

export const metadata:Metadata = {
    title: 'Реєстрація акаунта'
}

const Page = () => {
    return (
        <SignupForm />
    );
};

export default Page;
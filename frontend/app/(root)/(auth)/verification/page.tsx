import React from 'react';
import {EmailConfirm} from "@/components/shared";
import type {Metadata} from "next";

export const metadata:Metadata = {
    title: 'Підтвердження пошти'
}

const Page = () => {
    return (
        <EmailConfirm />
    );
};

export default Page;
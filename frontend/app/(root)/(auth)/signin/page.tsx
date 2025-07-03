import {SigninForm} from "@/components/shared";
import type {Metadata} from "next";

export const metadata:Metadata = {
    title: 'Вхід в акаунту'
}


const Page = () => {
    return (
        <SigninForm />
    );
};

export default Page;
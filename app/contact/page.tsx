import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us - Get a Free Demo",
    description: "Contact Abal for a free demo of Ethiopia's best gym management software. Call +251 91 042 8013 or email us to transform your fitness business.",
    alternates: {
        canonical: "https://abal.et/contact",
    },
};

export default function Contact() {
    return <ContactClient />;
}

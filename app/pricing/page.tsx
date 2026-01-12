import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: "Pricing - Affordable Gym Management Software Plans",
    description: "Flexible pricing plans for Ethiopian gyms. Start free with Abal Starter or scale with Pro. Transparent pricing in ETB for gym management software.",
    alternates: {
        canonical: "https://abal.et/pricing",
    },
};

export default function Pricing() {
    return <PricingClient />;
}

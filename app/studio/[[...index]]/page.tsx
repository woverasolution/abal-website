"use client";

import dynamic from "next/dynamic";

const StudioClient = dynamic(
  () => import("@/components/studio/StudioClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-600">
        Loading studio...
      </div>
    ),
  }
);

export default function StudioPage() {
  return <StudioClient />;
}

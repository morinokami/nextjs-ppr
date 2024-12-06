import { Suspense } from "react";

import { SlowComponent } from "@/components/slow-component";

export const experimental_ppr = true;

export default function PartialPrerendering() {
  return (
    <>
      <h1>Partial Prerendering</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    </>
  );
}

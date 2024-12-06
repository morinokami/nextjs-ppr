import { Suspense } from "react";

import { SlowComponent } from "@/components/slow-component";

export default function Streaming() {
  return (
    <>
      <h1>Streaming</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    </>
  );
}

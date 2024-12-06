import { SlowComponent } from "@/components/slow-component";

export const dynamic = "force-static";

export default function Static() {
  return (
    <>
      <h1>Static</h1>
      <SlowComponent />
    </>
  );
}

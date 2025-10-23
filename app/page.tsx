// import { Card } from "./components/card";
// import { ModeToggle } from "./components/modeToggle";

import { Hovercard } from "@/ui/card";
import { Card } from "./components/card";
import { CardBox } from "./showcase/page";
// import { Grid } from "./components/grid";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Card/> */}
      {/* <ModeToggle /> */}
      {/* <Grid /> */}
      <CardBox className='group border border-neutral-200 w-80 rounded-2xl'>
        <Hovercard />
      </CardBox>
    </div>
  );
}

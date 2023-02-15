import Image from "next/image";

import totodileGif from "../../../public/gifs/totodile.gif";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex h-screen w-screen flex-col justify-center gap-4 p-8">
      <Image src={totodileGif} alt={"Totodile dancing"}></Image>
      <h3>Fetching your content, please wait!</h3>
    </main>
  );
}

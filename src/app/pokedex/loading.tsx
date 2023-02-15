import Image from "next/image";

import totodileGif from "../../../public/gifs/totodile.gif";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Image src={totodileGif} alt={"Totodile dancing"}></Image>
    </>
  );
}

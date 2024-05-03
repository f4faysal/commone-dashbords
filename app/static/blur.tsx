import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function Static({ src }: any) {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="w-[500px] h-[400px]">
      <p>Static Plaiceholder blur</p>
      <div className="b relative h-[300px] w-[300px] overflow-hidden rounded-lg">
        <Image
          src={src.replace("./public", "")}
          fill
          alt="image"
          placeholder="blur"
          blurDataURL={base64}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

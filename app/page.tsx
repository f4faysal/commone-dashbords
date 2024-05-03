import Dynamic from "./dynamic/blur";
import Static from "./static/blur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-5">
        {/* <Image
            src="/pexels-pixabay-33109.jpg"
            alt="Next.js Logo"
            width={1000}
            height={1000}
            loading="lazy"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="/pexels-pixabay-33109.jpg"            
          /> */}
        <Dynamic />
        <Static src={"/pexels-gabriel-peter-219375-719396.jpg"} />
        <Dynamic />
        <Static src={"/pexels-pixabay-33109.jpg"} />
      </div>
    </main>
  );
}

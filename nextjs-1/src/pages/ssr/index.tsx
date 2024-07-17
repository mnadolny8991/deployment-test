import Head from "next/head";
import styles from "@/styles/Gallery.module.css";
import Gallery from "@/components/Gallery"
import { Avatar } from "@/types";

export async function getServerSideProps() {
  const res = await fetch(`https://tinyfac.es/api/data?limit=${5}&quality=0`);
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }: { data: Array<Avatar> }) {
  return (
    <>
      <Head>
        <title>Avatars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Gallery data={data}/>
      </main>
    </>
  );
}
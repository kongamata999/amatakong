import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
         <title>ซุ้มพยัคฆ์ก้องฟ้า | kongamata</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>kong amata.com</h1>
      </div>
      <div>
        <Link href={"/products"}>
           <Image src="/muay_777.jpg" width={1420} height={1080}/>
        </Link>
        <div className={styles.Image}>
            <Image src="/UFAX9-728x180-1.gif" width={728} height={200}/>
            <Image src="/ufathai24.webp" width={728} height={360}/>
            <Image src="/1661412489337.webp" width={728} height={200}/>
            <Image src="/UFAFC24.webp" width={728} height={180}/>
            <Image src="/lotto123bet.webp" width={728} height={180}/>
            <Image src="/sexybaccarat.webp" width={728} height={180}/>
            <Image src="/1649071244288.gif" width={728} height={180}/>
            <Image src="/ZABBETCLUB1.gif" width={728} height={180}/>
            <Image src="/UFA405-728-200.webp" width={728} height={180}/>
        </div>
      </div>
    </>
  )
}
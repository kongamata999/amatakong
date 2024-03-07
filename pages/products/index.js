import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/product.module.css"
import Link from "next/link"

export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=40")
    const data = await res.json()
    return{
        props:{products:data.products}
    }
}

export default function Indax({products}){
    return(
        <>
            <Head>
               <title>สินค้าทั้งหมด | kongamata</title>
               <mata name="keywords" content="มือถือ เครื่องใช้ไฟฟ้า"/>
            </Head>
            <h1>สินค้าทั้งหมด</h1>
            <div className={styles.container}>
                {products.map(item=>(
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>
                             <h2 className={styles.title}>{item.title}</h2>
                             <Image src={item.thumbnail} width={300} height={300}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
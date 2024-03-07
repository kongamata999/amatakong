import Link from "next/link"
import Image from "next/image"

export default function Navber(){
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/LOGO-PK711.png" width={80} height={62} alt="logo"/>
                </Link>
            </div>
            <Link href={"/"}>หน้าแรก</Link>
            <ul/>
            <Link href={"/kong"}>ก้องฟาร์ม</Link>
            <ul/>
            <Link href={"/products"}>สินค้าทั้งหมด</Link>
            <ul/>
            <Link href={"/about"}>เกี่ยวกับเรา</Link>
        </nav>
    )
}
import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
    return (
        <header>
            <div className="py-3 text-white ">
                <div className="flex justify-between items-center px-8">
                    <Link href='/'>
                        <h1 className="text-2xl font-semibold">sec<span className="text-3xl font-extrabold">QR</span></h1>
                    </Link>
                    <div className="flex gap-1">

                        <div>
                            <Link href='/'>
                                <Button  className="px-8 bg-main text-black">Login / Signup</Button>
                            </Link></div>

                        {/* <div>
                            <Link href='/'>
                                <Button className=" bg-green-700 px-8">signup</Button>
                            </Link>
                        </div> */}
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header
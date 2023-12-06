import LayoutSCSS from "./Layout.module.scss";
import { useSession } from "next-auth/react"
import { FC } from "react"
import SideMenu from "../SideMenu";
import Head from 'next/head'
import Footer from "../Footer";

type LayoutProps = {
    children: JSX.Element
}
const Layout: FC<LayoutProps> = ({ children }) => {
    const { data: session } = useSession();
    return (
        <>
            <Head>
                <title>DataSoft Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={LayoutSCSS.layout}
            style={{
                padding: session ? '0 24px 0 80px': 0
            }}
            >
                {session && <SideMenu /> }
                {children}
                <Footer/>
            </main>
        </>
    )
}

export default Layout;


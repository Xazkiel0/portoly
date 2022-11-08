import Navbar from "./Navbar";
import { Lexend } from '@next/font/google';

const lexend = Lexend({
    weight: '200',
})
const Layout = ({ children }) => {
    return (
        <main className={lexend.className}>
            <Navbar />
            <div className="content container px-3 mx-auto mt-2">
                {children}
            </div>
        </main>
    );
}

export default Layout;
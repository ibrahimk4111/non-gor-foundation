
import Navbar from "@/components/Galary/Navbar/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1 className='bg-green-700 py-6 text-center text-4xl font-semibold text-white'>Gallery</h1>
            <div className='container grid grid-cols-12 gap-6 mx-auto mt-10'>
                <div className='col-span-2'>
                    <Navbar />
                </div>
                <div className='col-span-10 bg-white rounded-lg shadow-md'>
                    {children}
                </div>
            </div>
        </div>
    );
}
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='flex lg:flex-col gap-7'>
                <Link href={"/gallery/iftar-distribution"}>
                    <li>Iftar Distribution</li>
                </Link>
                <Link href={"/gallery/orphan"}>
                    <li>Orphan</li>
                </Link>
                <Link href={"/gallery/qurbani"}>
                    <li>Qurbani</li>
                </Link>
                <Link href={"/gallery/food-distribution"}>
                    <li>Food Distribution</li>
                </Link>
                <Link href={"/gallery/tube-well-distribution"}>
                    <li>Tube Well Distribution</li>
                </Link>
                <Link href={"/gallery/relief-distribution"}>
                    <li>Relief Distribution</li>
                </Link>
                <Link href={"/gallery/van-distribution"}>
                    <li>Van Distribution</li>
                </Link>
                <Link href={"/gallery/winter-clothing"}>
                    <li>Winter Clothing</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const listStyle = " hover:text-green-400 active:text-green-700 focus:text-green-700 "
    return (
        <div>
            <ul className='flex lg:flex-col gap-7'>
                <Link href={"/gallery/iftar-distribution"}>
                    <li className={listStyle}>Iftar Distribution</li>
                </Link>
                <Link href={"/gallery/orphan"}>
                    <li className={listStyle}>Orphan</li>
                </Link>
                <Link href={"/gallery/qurbani"}>
                    <li className={listStyle}>Qurbani</li>
                </Link>
                <Link href={"/gallery/food-distribution"}>
                    <li className={listStyle}>Food Distribution</li>
                </Link>
                <Link href={"/gallery/tube-well-distribution"}>
                    <li className={listStyle}>Tube Well Distribution</li>
                </Link>
                <Link href={"/gallery/relief-distribution"}>
                    <li className={listStyle}>Relief Distribution</li>
                </Link>
                <Link href={"/gallery/van-distribution"}>
                    <li className={listStyle}>Van Distribution</li>
                </Link>
                <Link href={"/gallery/winter-clothing"}>
                    <li className={listStyle}>Winter Clothing</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;
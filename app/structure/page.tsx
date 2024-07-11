import Footstep from '@/components/footStep/Footstep';
import Structure from '@/components/information/Structure';
import { paths } from '@/utils/paths';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <Footstep>
                <Link href={paths.contact} className=" cursor-pointer hover:text-green-800 ">Home</Link> / <span className=" text-green-800 ">Stucture</span>
            </Footstep>
            <Structure />
        </>
    );
};

export default page;
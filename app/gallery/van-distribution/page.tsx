"use client"
import React, { useEffect } from 'react';
import "../gallery.css"

const page = () => {
    useEffect(() => {
        (window as any).lightGallery(document.getElementById("gallery"))
    }, [])
    return (
        <div >
            <div id='gallery' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg'>
                <a href="/gallery/van_distribution_gallery_1.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/van_distribution_gallery_1.jpg" className='object-cover rounded-md images' alt="van_distribution" />
                </a>
                <a href="/gallery/van_distribution_gallery_2.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/van_distribution_gallery_2.jpg" className='object-cover rounded-md images' alt="van_distribution" />
                </a>
                <a href="/gallery/van_distribution_gallery_3.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/van_distribution_gallery_3.jpg" className='object-cover rounded-md images' alt="van_distribution" />
                </a>
                <a href="/gallery/van_distribution_gallery_4.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/van_distribution_gallery_4.jpg" className='object-cover rounded-md images' alt="van_distribution" />
                </a>
            </div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js" ></script>
        </div>
    );
};

export default page;
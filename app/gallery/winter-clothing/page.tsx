"use client"
import React, { useEffect } from 'react';
import "../gallery.css"

const page = () => {
    useEffect(() => {
        (window as any).lightGallery(document.getElementById("gallery"))
    }, [])
    return (
        <div>
            <div id='gallery' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg'>
                <a href="/gallery/winter_clothing_gallery_1.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_1.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_2.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_2.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_3.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_3.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_4.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_4.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_5.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_5.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_6.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_6.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_7.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_7.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_8.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_8.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_9.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_9.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_10.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_10.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
                </a>
                <a href="/gallery/winter_clothing_gallery_11.jpg" data-lg-size="1920-1080">
                    <img src="/gallery/winter_clothing_gallery_11.jpg" className='images object-cover rounded-md' alt="winter_clothing" />
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
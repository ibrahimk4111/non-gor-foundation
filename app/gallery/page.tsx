"use client"
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryData } from "@/api/gellary/Gellary";
// light-gallery-------------
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(GalleryData[0].name);


    return (
        <div className="bg-slate-100">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-12">
                    <Tabs
                        defaultValue={GalleryData[0].name}
                        className="flex lg:flex-col flex-row lg:col-span-3 col-span-12 overflow-auto"
                    >
                        {GalleryData.map((project, index) => (
                            <div key={index}>
                                <TabsList>
                                    <TabsTrigger
                                        value={project.name}
                                        onClick={() => setActiveTab(project.name)}
                                    >
                                        {project.name}
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                        ))}
                    </Tabs>
                    <section className="lg:col-span-9 col-span-12 lg:border-l bg-slate-100 lg:px-5 py-5 overflow-auto">
                        <div className="bg-white rounded-md p-3">
                            {GalleryData.map(
                                (project, index) =>
                                    project.name === activeTab && (
                                        <div key={index}>
                                            <LightGallery
                                                elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg"
                                                speed={500}
                                                plugins={[lgThumbnail, lgZoom]}
                                            >
                                                {project.images.map((image, i) => (
                                                    <a key={i} href={image.src}>
                                                        <img alt={`img${i}`} src={image.src} className="rounded-md" />
                                                    </a>
                                                ))}
                                            </LightGallery>
                                        </div>
                                    )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

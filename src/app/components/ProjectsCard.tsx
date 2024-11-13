import React from 'react';
import  Link from 'next/link';



type ProjectsCardProps = {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
  };

const ProjectsCard: React.FC<ProjectsCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative  group'
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className='overlay items-center justify-center  absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex  group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href={gitUrl} className=' mr-3 h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE] hover:border-white group/link'>
                    <i className="fa-solid fa-code text-3xl text-[#ADB7BE] absolute top-3 left-2 right-2 cursor-pointer  group-hover/link:text-white" ></i>
                    </Link>
                    <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE] hover:border-white group/link'>
                    <i className="fa-solid fa-eye text-3xl text-[#ADB7BE] absolute top-3 left-2 right-2 cursor-pointer  group-hover/link:text-white" ></i>
                    </Link>
                </div>
            </div>

            <div className='text-white rounded-b-xl mt-2 bg-[##181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE] '>{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard

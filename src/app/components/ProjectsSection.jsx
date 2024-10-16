"use client";
import React, { useRef, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectsData = [
    {
        id: 1,
        title: "To-Do-List",
        description: "Stay on top of your tasks with this intuitive to-do list app. Whether you're managing daily chores, work projects, or personal goals, this app helps you organize and prioritize with ease. Add, edit, and delete tasks with a simple interface designed for efficiency. Features like due dates, reminders, and task categories ensure you never miss a deadline. Perfect for anyone looking to boost productivity and keep their life organized.",
        image: "/images/to-do.avif",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/Mahnoor-sheikh-23/real-to-do-list",
        previewUrl: "https://realtime-to-do.netlify.app/"
    },
    {
        id: 2,
        title: "Calculator",
        description: "This calculator is designed to handle all your basic arithmetic needs with ease. Whether you're performing simple addition, subtraction, multiplication, or division, this tool provides quick and accurate results. The user-friendly interface ensures that you can perform calculations effortlessly, with a clear display and responsive buttons. Ideal for students, professionals, and anyone in need of a reliable calculator for everyday tasks.",
        image: "/images/calculator.jpg",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/Mahnoor-sheikh-23/real-calculator",
        previewUrl: "https://real-runtime-calculator.netlify.app/"
    },
    {
        id: 3,
        title: "Quiz Game",
        description: "Challenge your brain with this exciting quiz game! With a wide range of topics and difficulty levels, this game offers something for everyone—from trivia enthusiasts to casual learners. Play solo to test your knowledge or compete with friends to see who scores the highest. Featuring multiple-choice questions, instant feedback, and a leaderboard to track your progress, this game is perfect for sharpening your mind while having fun. Dive into a world of questions and learn something new with every round!",
        image: "/images/quiz.png",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/Mahnoor-sheikh-23/real-time-quiz-app",
        previewUrl: "https://typescript-quiz-app-basic.netlify.app/"
    },
    {
        id: 4,
        title: "ECommerce Website of Oh Pair!",
        description: "Discover the latest in footwear fashion with Oh Pair!, your go-to online destination for stylish and comfortable shoes. Whether you're looking for casual sneakers, elegant heels, or sporty trainers, we have something for every occasion. Our user-friendly website offers a seamless shopping experience, with easy navigation, detailed product views, and secure checkout. Each product is carefully curated to meet the highest standards of quality and style. Plus, enjoy exclusive deals and fast shipping right to your door. Step up your shoe game with Oh Pair!",
        image: "/images/shoes.jpg",
        tag: ["All", "Frontend"],
        gitUrl: "/",
        previewUrl: "https://www.linkedin.com/in/growthmonii/recent-activity/all/"
    },
    {
        id: 5,
        title: "Food Delivery Web App",
        description: "Welcome to Delish Delivery, the ultimate food delivery app designed to bring your favorite meals right to your doorstep. Whether you’re craving a quick snack or a gourmet dinner, our app connects you with a wide variety of restaurants offering delicious options for every taste. With an easy-to-use interface, you can browse menus, customize orders, and track your delivery in real-time. Our platform supports multiple restaurants, so you can explore new cuisines and enjoy seamless ordering with secure payments. For the freshest food and fastest delivery, choose Delish Delivery—where every meal is a click away!",
        image: "/images/food-delivery.png",
        tag: ["All", "Backend"],
        gitUrl: "/",
        previewUrl: "https://www.linkedin.com/in/growthmonii/recent-activity/all/"
    },
    {
        id: 6,
        title: "Currency Converter",
        description: "Easily convert currencies with our Instant Currency Converter! Whether you're traveling, shopping online, or managing international finances, this tool provides up-to-date exchange rates for all major currencies. Simply enter the amount and choose the currencies to get accurate and instant conversions. Our intuitive interface ensures a smooth experience, allowing you to quickly compare rates and make informed decisions. Stay on top of global exchange trends with our reliable and user-friendly currency converter.",
        image: "/images/conerter-currency.png",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/Mahnoor-sheikh-23/real-time-currency-converter",
        previewUrl: "https://global-currency-converter.netlify.app/"
    },
]

const ProjectsSection = () => {
    const [tags, setTags] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true });
    const handleTagChange = (newTag) => {
        setTags(newTag)
    }

    const filteredProjects = projectsData.filter((projects) =>
        projects.tag.includes(tags)
    )

    const cardVariant = {
        initial : {y:50 , opcatiy : 0 }, 
        animate : {y:0 , opcatiy : 1},
    };
    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-5'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tags === "All"}></ProjectTag>
                <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tags === "Frontend"}></ProjectTag>
                <ProjectTag onClick={handleTagChange} name="Backend" isSelected={tags === "Backend"}></ProjectTag>
            </div>
            <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project , index) =>
                    <motion.li 
                    key={index}
                    variants={cardVariant}
                    initial = "initial"
                    animate={ isInView ? "animate" :"initial"}
                    transition={{duration:0.3 , delay: index *  0.4 }}
                    >
                        <ProjectsCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                )}
            </ul>
        </section>
    )
}

export default ProjectsSection;

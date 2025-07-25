const logotext = "GOBI";
const meta = {
    title: "Gobi Elangovan",
    description: "AI Engineer | Full Stack Developer | Cloud Enthusiast | Building scalable AI solutions for real-world impact."
};

const introdata = {
    title: "I’m Gobi Elangovan",
    animated: {
        first: "I build AI-powered applications",
        second: "I develop scalable web solutions",
        third: "I deploy ML models to the cloud",
    },
    description: "Third-year Computer Science undergraduate with hands-on experience in AI, computer vision, large language models, and full-stack development. Skilled in building RAG-based systems and orchestrating multi-agent workflows using Semantic Kernel, AutoGen, and Azure AI Foundry. Passionate about leveraging technology for innovation in healthcare, sustainability, and enterprise solutions.",
    your_img_url: "https://ui-avatars.com/api/?name=Gobi+Elangovan&background=0D8ABC&color=fff", // Placeholder avatar
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a Computer Science undergraduate at VIT Chennai, certified as a Microsoft Azure AI Engineer Associate. I specialize in developing AI-powered applications, with a strong foundation in computer vision, large language models, and retrieval-augmented generation (RAG). My expertise includes PyTorch, TensorFlow, React.js, and cloud deployment. I work extensively with multi-agent frameworks like Semantic Kernel, AutoGen, and Azure AI Foundry to orchestrate intelligent systems. Passionate about building scalable solutions for healthcare, sustainability, and enterprise domains, I am always eager to take on new challenges in dynamic environments.",
};

const worktimeline = [
    {
        jobtitle: "Independent AI/ML Developer | Research & Development",
        where: "Remote",
        date: "2023 – Present",
    },
    {
        jobtitle: "B.Tech in Computer Science and Engineering",
        where: "VIT Chennai",
        date: "2023 – 2027 (Expected)",
    },
    {
        jobtitle: "AISSCE (12th Grade)",
        where: "Vidhya Niketan Public School, Coimbatore",
        date: "2023",
    },
];

const skills = [
    // AI & ML
    { name: "Python", value: 95 },
    { name: "PyTorch", value: 95 },
    { name: "TensorFlow", value: 85 },
    { name: "RAG (Retrieval-Augmented Generation)", value: 90 },
    { name: "Azure AI", value: 95 },
    { name: "Semantic Kernel", value: 90 },
    { name: "AutoGen", value: 85 },

    // Web Development
    { name: "React.js", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "Django", value: 85 },
    { name: "Flask", value: 80 },
    { name: "MongoDB", value: 80 },
    { name: "MySQL", value: 90 },

    // DevOps & Tools
    { name: "Docker", value: 85 },

    // Core Programming Languages
    { name: "JavaScript", value: 90 },
    { name: "C++", value: 85 },
    { name: "Java", value: 85 },
    { name: "C", value: 80 }
];



const services = [
    {
        title: "AI & Machine Learning Solutions",
        description: "End-to-end development of AI-powered applications, including computer vision, NLP, RAG pipelines, and large language models."
    },
    {
        title: "Full Stack Web Development",
        description: "Building scalable, responsive web applications with React.js, Node.js, Django, and cloud deployment."
    },
    {
        title: "Cloud & DevOps",
        description: "Deploying and managing AI/ML models and web apps on Microsoft Azure, Docker, and Hugging Face Hub."
    },
    {
        title: "Multi-Agent Orchestration",
        description: "Designing intelligent systems using Semantic Kernel, AutoGen, Azure AI Foundry, and RAG to coordinate autonomous agents for complex task execution."
    }
];



const dataportfolio = [
    {
        img: require("./assets/images/clef.jpg"),
        description: "ImageClef 2025: Multilingual Visual Question Answering - Optimized multimodal inference pipeline using Qwen 2.5 Vision-Language model, achieving 57.7% accuracy on EXAMS-V benchmark. Springer publication pending.",
        link: "https://github.com/Gobi05-exe/ImageClef-VQA-2025",
    },
    {
        img: require("./assets/images/ecodex.jpg"),
        description: "EcoDex: AI-Powered Waste Management System - Real-time waste classification with RT-DETR, Arduino integration, and 3rd place in national hackathon.",
        link: "https://github.com/Gobi05-exe/Eco-Dex",
    },
    {
        img: require("./assets/images/roco.jpeg"),
        description: "Medical Image CUI Detection - Vision Transformer for multi-label medical condition classification, deployed on Hugging Face Hub.",
        link: "https://github.com/Gobi05-exe/Multi-Label-Medical-Image-CUI-Classifier",
    },
    {
        img: require("./assets/images/sdg.jpg"),
        description: "SDGHub: Collaborative Project Management Platform - Full-stack Django app with real-time tracking, dashboards, and secure authentication.",
        link: "https://github.com/Gobi05-exe/SDGHub",
    },
];

const contactConfig = {
    YOUR_EMAIL: "gobi.e2023@vitstudent.ac.in",
    YOUR_FONE: "+91 8754038216",
    description: "Feel free to reach out for collaboration, project opportunities, or just to connect!",
    YOUR_SERVICE_ID: "service_4tg9qwd", // Replace with your EmailJS service ID
    YOUR_TEMPLATE_ID: "template_jdkz21p", // Replace with your EmailJS template ID
    YOUR_USER_ID: "SNjc9Rym8Yt-u2Skf", // Replace with your EmailJS user ID
};

const socialprofils = {
    github: "https://github.com/Gobi05-exe",
    linkedin: "https://linkedin.com/in/gobi-elangovan",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
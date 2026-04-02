export const projects = [
  {
    id: 1,
    title: "WearWell AI",
    category: "Full Stack",
    tags: ["MERN", "Tailwind CSS", "OpenAI"],
    description: "An AI-powered e-commerce chatbot with responsive design and integrated chat history.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/yourusername/wearwell",
    demo: "#",
    codeSnippet: `// OpenAI Chat History Implementation
const getChatResponse = async (userInput) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a fashion assistant." },
      ...chatHistory,
      { role: "user", content: userInput }
    ],
  });
  return response.choices[0].message;
};`,
    challenges: "Managing state for real-time chat while maintaining a 60fps UI was the main hurdle.",
    solution: "Used React's useOptimistic hook and a custom Firebase listener to sync messages instantly."
  },
  {
    id: 2,
    title: "Shop.ai",
    category: "Frontend",
    tags: ["React", "Firebase", "Redux"],
    description: "A modern shopping experience featuring seamless state management and repository automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/yourusername/shop-ai",
    demo: "#",
    codeSnippet: `// OpenAI Chat History Implementation
const getChatResponse = async (userInput) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a fashion assistant." },
      ...chatHistory,
      { role: "user", content: userInput }
    ],
  });
  return response.choices[0].message;
};`,
    challenges: "Managing state for real-time chat while maintaining a 60fps UI was the main hurdle.",
    solution: "Used React's useOptimistic hook and a custom Firebase listener to sync messages instantly."
  },
  {
    id: 3,
    title: "PUBG Map Designer",
    category: "UI/UX",
    tags: ["Game Design", "Level Design"],
    description: "Strategic 2v2v2 long-range combat maps designed for the World of Wonder mode.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    github: "#",
    demo: "#",
    codeSnippet: `// OpenAI Chat History Implementation
const getChatResponse = async (userInput) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a fashion assistant." },
      ...chatHistory,
      { role: "user", content: userInput }
    ],
  });
  return response.choices[0].message;
};`,
    challenges: "Managing state for real-time chat while maintaining a 60fps UI was the main hurdle.",
    solution: "Used React's useOptimistic hook and a custom Firebase listener to sync messages instantly."
  },
];
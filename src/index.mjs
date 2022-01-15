const programmingLanguagesMessageList = [
    "Javascript",
    "PHP",
    "Rust",
    "Swift",
    "Go",
    "Java",
    "C#",
    "C++",
    "Kotlin",
    "Python"
];

const randomMsg = () => {
    const message = programmingLanguagesMessageList[Math.floor(Math.random() * programmingLanguagesMessageList.length)];
    console.log (message);
}

export default { randomMsg };
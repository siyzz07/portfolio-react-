import { useTheme } from "../ContextApi/ThemeProvider";

function About() {
  const { isDark } = useTheme();
  return (
    <section
      id="about"
      className={`py-20 ${
        isDark
          ? "bg-gray-900 text-gray-200 border-y-2 border-white"
          : "bg-gray-900 text-gray-200 border-y-2 border-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m a <strong>full-stack developer</strong> passionate about
            building <strong>intuitive</strong> and <strong>efficient</strong>{" "}
            web applications. With expertise in the <strong>MERN stack</strong>{" "}
            (<strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
            <strong>React</strong>, <strong>Node.js</strong>), I focus on
            creating <strong>scalable</strong>, <strong>secure</strong>, and{" "}
            <strong>high-performing solutions</strong>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I excel in delivering <strong>clean code</strong>, leveraging modern
            tools like <strong>Razorpay</strong> for{" "}
            <strong>payment integration</strong> and <strong>JWT</strong> for{" "}
            <strong>secure authentication</strong>. I follow well-structured
            architectures like <strong>MVC</strong> and continuously improve my{" "}
            <strong>problem-solving</strong> skills through platforms like{" "}
            <strong>LeetCode</strong>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            <strong>Collaboration</strong>, <strong>innovation</strong>, and{" "}
            <strong>user-centric design</strong> are at the core of my work,
            helping me deliver <strong>impactful solutions</strong> tailored for{" "}
            <strong>real-world success</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

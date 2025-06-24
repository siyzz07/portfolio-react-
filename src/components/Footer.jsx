import { useTheme } from "../ContextApi/ThemeProvider";

function Footer() {
  const {isDark}=useTheme()
  return (
    <footer className={`${isDark?"bg-gray-900 text-white border-t-2 border-white ":"bg-gray-900 text-white border-t-2 border-white "} py-6`}>
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Shibin Siyad</p>
      </div>
    </footer>
  );
}

export default Footer
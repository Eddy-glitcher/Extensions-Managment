import { useEffect, useState } from "react";
import "./theme.scss";

export default function ThemeToggle() {

    // Theme Toggle
    const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'light-theme');
        useEffect(()=>{
        const root = document.documentElement;
        root.classList.remove(theme);
        root.classList.add(theme === 'light-theme' ? 'dark-theme' : 'light-theme');

        localStorage.setItem('theme', theme);
    }, [theme]);

    const themeToggle = () =>{
        setTheme(prev => prev === 'light-theme' ? 'dark-theme' : 'light-theme');
    }

    return(
        <>
        <button className="extensions__theme-toggle" onClick={themeToggle}>
            <svg
                role="img"
                aria-label="Theme Logo"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
                ><g clipPath="url(#a)"
                    ><path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.98"
                    d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"
                    ></path></g><defs
                ><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"></path></clipPath></defs>
            </svg>
        </button>
        </>
    )
}
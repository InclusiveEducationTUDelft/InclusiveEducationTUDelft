import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function useNavigator() {
    const navigate = useNavigate();

    const sleep = useCallback((ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }, []);

    const scrollTo = useCallback(async (id: string) => {
        let element = document.getElementById(id);

        if (!element) {
            navigate(window.location.hostname === 'localhost' ? '/' : '/');
        }

        async function fetchElement(id: string, retries = 5, delay = 100) {
            for (let i = 0; i < retries; i++) {
                const element = document.getElementById(id);
                if (element) return element;
                await sleep(delay);
            }
            return null;
        }

        element = await fetchElement(id);
        if (!element) return;

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - 40,
        });
    }, [navigate, sleep]);

    return { scrollTo };
}

export default useNavigator;

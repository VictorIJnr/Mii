import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
    Component to automatically scroll to the top of the page.
    This is needed as React-Router doesn't show content from the top of the page when navigating to a new route.
*/
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
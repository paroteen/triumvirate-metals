import { useEffect, useState, useRef } from 'react';

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true,
}: IntersectionObserverOptions = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;
                if (isElementIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce && targetRef.current) {
                        observer.unobserve(targetRef.current);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            { root, rootMargin, threshold }
        );

        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [root, rootMargin, threshold, triggerOnce]);

    return { targetRef, isIntersecting };
};
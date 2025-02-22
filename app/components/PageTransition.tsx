'use client';

import { motion } from 'framer-motion';

const PageTransition = ({ children }: { children: any}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.3
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
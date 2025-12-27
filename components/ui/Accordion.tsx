'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export const Accordion = ({ items }: { items: AccordionItemProps[] }) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <button
                        onClick={() => handleClick(index)}
                        className="flex justify-between items-center w-full py-4 text-left"
                    >
                        <span className="text-lg font-semibold text-black dark:text-white">{item.title}</span>
                        <motion.div
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-6 h-6 text-gray-500" />
                        </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                        {activeIndex === index && (
                            <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                                    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                                }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <div className="pb-4 text-gray-600 dark:text-gray-400">
                                    {item.children}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

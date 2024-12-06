import React from 'react';

const SectionHeader = ({ title, subtitle, description, desclass }) => {
    return (
        <div>
            <p className="font-rubik-medium text-xl font-medium text-halkagreen px-8 py-2 inline-block bg-halkagreen/10 rounded-xl mb-5">
                {title}
            </p>
            <h2 className="font-rubik-regular text-5xl text-black1 mb-4">
                {subtitle}
            </h2>
            <p className={desclass || 'text-sm text-black2'}>
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;

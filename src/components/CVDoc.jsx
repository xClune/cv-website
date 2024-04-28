import React from 'react';

const CVDoc = ({formData}) => {
    return (
       <>
            <div className='blank-doc bg-white w-9/12 h-full text-black flex flex-col gap-6 items-start text-left p-10 overflow-scroll shadow hover:scale-105 transition-all  ease-in-out duration-300'>
                <div className='cv-header w-full text-right mt-10 '>
                    <h1 className=''>
                        {formData.firstName ? formData.firstName : 'John'} {formData.lastName ? formData.lastName : 'Doe'}
                    </h1>
                    <p>{formData.email ? formData.email : 'johndoe@email.com'}</p>
                    <p>{formData.phone ? formData.phone : '+1234567890'}</p>
                    <p>{formData.address ? formData.address : 'Somehere, Someplace'}</p>
                </div>
                <div className='cv-body gap-5 w-full'>
                    <div className='cv-section'>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Summary</h2>
                        <p className=''>{formData.summary ? formData.summary : 'A summary on your experience and achievements'}</p>
                        <p></p>
                    </div>
                </div>
                <div className='cv-cert w-full'>
                    <div className='cv-section flex flex-col gap-8'>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Experience</h2>
                        <div className=''>
                            {formData.experience.length === 0 ? 'I have no experience? :(' : formData.experience.map((exp, index) => (
                                <p key={index} className='text-black'>{exp}</p>
                            ))}
                        </div>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Education</h2>
                        <div className=''>
                            {formData.education.length === 0 ? 'I have no education? :(' : formData.education.map((edu, index) => (
                                <p key={index} className='text-black'>{edu}</p>
                            ))}
                        </div>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Skills</h2>
                        <div className=''>
                            {formData.skills.length === 0 ? 'I have no skills? :(' : formData.skills.map((skill, index) => (
                                <p key={index} className='text-black'>{skill}</p>
                            ))}
                        </div>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Languages</h2>
                        <div className=''>
                            {formData.languages.length === 0 ? 'I speak no languages? :(' : formData.languages.map((language, index) => (
                                <p key={index} className='text-black'>{language}</p>
                            ))}
                        </div>
                        <h2 className='mb-2 border-b-2 border-gray-300'>Certifications</h2>
                        <div className=''>
                            {formData.certifications.length === 0 ? 'I have no certifications? :(' : formData.certifications.map((certification, index) => (
                                <p key={index} className='text-black'>{certification}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
};

export default CVDoc;
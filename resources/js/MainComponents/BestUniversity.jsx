import { ChevronRight } from 'lucide-react'
import React from 'react'

const university = [
    {
        name: 'Best universities in Australia',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format',
        description: 'Find the best universities in Australia with rank dataset extracted from Top Universities Worldwide',
    },
    {
        name: 'Best universities in USA 2022',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=250&fit=crop&auto=format',
        description: 'If you\'ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...',
    },
    {
        name: 'Best Universities in UK',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop&auto=format',
        description: 'Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings',
    },
    {
        name: 'Best Universities in Canada',
        image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop&auto=format',
        description: 'Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings',
    },
]

const BestUniversity = () => {
    return (
        <div className='w-full px-4 lg:px-24 py-12'>
            <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                    Best Universities by Country
                </h2>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {university.map((item, index) => (
                    <div key={index} className='  overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                        <div className='relative h-48 overflow-hidden'>
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-md'
                            />
                        </div>
                        
                        <div className='p-6'>
                            <h3 className='text-lg font-semibold text-gray-800 mb-3 leading-tight'>
                                {item.name}
                            </h3>
                            
                            <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                                {item.description}
                            </p>
                            
                            <button className='text-cyan-400 text-sm font-medium hover:text-cyan-500 transition-colors duration-200 flex items-center gap-1'>
                                Read More
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestUniversity
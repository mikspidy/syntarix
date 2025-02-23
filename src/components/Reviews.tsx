import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Al-Sayed',
    location: 'Dubai, UAE',
    review: 'Exceptional service and innovative solutions that transformed our business operations. Their team provided deep industry insights, helping us optimize workflows efficiently. The level of professionalism and technical expertise was truly impressive. Highly recommended for businesses looking to scale with technology.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sarah Chen',
    location: 'Jakarta, Indonesia',
    review: 'Their expertise in digital transformation helped us achieve remarkable growth. From strategy to execution, they ensured a seamless transition into more efficient systems. Our customer engagement and operational efficiency have significantly improved. A truly game-changing experience for our company!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'John Smith',
    location: 'New York, USA',
    review: 'Outstanding technical expertise and professional service delivery. They took the time to understand our unique needs and crafted tailored solutions that exceeded expectations. Their proactive approach and commitment to excellence made a significant impact. I look forward to working with them again!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Emma Watson',
    location: 'London, UK',
    review: 'Brilliant team that delivered beyond our expectations. They approached every challenge with creativity and strategic thinking, ensuring a smooth and efficient implementation. The results were visible almost immediately, improving our overall business efficiency. A pleasure to collaborate with such a dedicated team!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'James Wilson',
    location: 'Sydney, Australia',
    review: 'Innovative solutions that helped us stay ahead of the competition. Their deep understanding of emerging technologies allowed us to integrate cutting-edge features into our business model. The team was always responsive and committed to delivering value. A fantastic partner for long-term success!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];


const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Client Reviews</h2>
        
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-none w-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

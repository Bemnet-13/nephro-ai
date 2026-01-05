import { Heart, Shield, Activity } from 'lucide-react';

export const Features = () => {

    const features = [
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Compassionate Care',
              description: 'Dedicated medical professionals committed to your well-being.'
            },
            {
              icon: <Activity className="w-8 h-8" />,
              title: 'Advanced Technology',
              description: 'State-of-the-art medical equipment and innovative treatments.'
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Patient Safety',
              description: 'Your health and safety are our top priorities.'
            }
          ];
  return (
    <>
    <div className="grid md:grid-cols-3 gap-8 mt-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-urbanist font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 font-arsenal">{feature.description}</p>
            </div>
          ))}
        </div>
    </>
  )
}
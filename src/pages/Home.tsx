import React from 'react';
import { Twitch, MessageSquare, Video } from 'lucide-react';

const Home = () => {
  const platforms = [
    { name: 'Twitch', icon: Twitch, color: 'purple' },
    { name: 'TikTok', icon: Video, color: 'pink' },
    { name: 'Kik', icon: MessageSquare, color: 'blue' }
  ];

  const creators = [
    {
      name: 'Alex Stream',
      platform: 'Twitch',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
      followers: '120K'
    },
    {
      name: 'Sarah Gaming',
      platform: 'TikTok',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      followers: '250K'
    }
  ];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Connect Accounts</h1>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        {platforms.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className={`p-4 rounded-lg bg-white shadow-md flex flex-col items-center space-y-2 hover:bg-gray-50`}
          >
            <Icon className={`text-${color}-500`} size={24} />
            <span className="text-sm">{name}</span>
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Trending Creators</h2>
      <div className="space-y-4">
        {creators.map((creator) => (
          <div key={creator.name} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{creator.name}</h3>
              <p className="text-sm text-gray-500">
                {creator.platform} • {creator.followers} followers
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
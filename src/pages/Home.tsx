import React from 'react';
import { Twitch,  Youtube, AudioLines } from 'lucide-react';



const Home = () => {
  const platforms = [
    { name: 'Twitch', icon: Twitch, color: 'purple' },
    { name: 'Spotify', icon: AudioLines, color: 'pink' },
    { name: 'Youtube', icon: Youtube, color: 'blue' }
  ];

  const creators = [
    {
      name: 'KaiCenat',
      platform: 'Twitch',
      avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1d8cd548-04fa-49fb-bfcd-f222f73482b6-profile_image-70x70.png',
      followers: '120K'
    },
    {
      name: 'The Joe Rogan Experience',
      platform: 'Spotify',
      avatar: 'https://variety.com/wp-content/uploads/2021/09/Joe-Rogan-Covid.jpg',
      followers: '250K'
    },
    {
      name: 'UR · Cristiano',
      platform: 'Youtube',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0IukxVGjrqT7sfJqXkQlPX5Cw3t1dZSs8g&s',
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
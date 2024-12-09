import PropTypes from 'prop-types';

function MontyCard() {
  const calculateAge = () => {
    const birthDate = new Date(1996, 3);
    const today = new Date();
    const years = today.getFullYear() - birthDate.getFullYear();
    return today.getMonth() < 3 ? years - 1 : years;
  };

  const socialMediaLinks = [
    {
      title: 'Twitter',
      link: 'https://x.com/royouad',
      icon: '../src/assets/twitter.svg',
    },
    {
      title: 'Bluesky',
      link: 'https://bsky.app/profile/sheppy.dad',
      icon: '../src/assets/bluesky.svg',
    },
    {
      title: 'Twitch',
      link: 'https://twitch.tv/foxmonty',
      icon: '../src/assets/twitch.svg',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/ericliondev',
      icon: '../src/assets/github.svg',
    },
    {
      title: 'Telegram',
      link: 'https://t.me/royou',
      icon: '../src/assets/telegram.svg',
    },
  ];

  function SocialMediaItem({ title, link, icon }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex space-x-2 hover:text-blue-500 transition-colors"
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-8 h-8 md:w-12 md:h-12 lg:h-16 lg:w-16 object-contain"
        />
      </a>
    );
  }

  // Prop validation
  SocialMediaItem.propTypes = {
    title: PropTypes.string.isRequired, // Title must be a string
    link: PropTypes.string.isRequired, // Link must be a string
    icon: PropTypes.string.isRequired, // Icon must be a string (URL/path)
  };

  function SocialMediaList() {
    return (
      <div className="flex justify-evenly text-center items-center space-between mt-4 md:mt-6">
        {socialMediaLinks.map((social, index) => (
          <SocialMediaItem
            key={index}
            title={social.title}
            link={social.link}
            icon={social.icon}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex text-center border-b-4 border-neutral-800">
      <div className="border-r-4 border-neutral-800 max-w-[35%]">
        <img
          className="w-full h-auto pointer-events-none select-none outline-none transform-none focus:outline-none hover:transform-none active:transform-none"
          src="src\assets\shep.png"
          alt=""
        />
      </div>
      <div className="flex-auto flex flex-col justify-center ">
        <div>
          <h1 className="text-lg md:text-4xl lg:text-5xl font-slackey">
            Monty
          </h1>
          <p
            className="md:text-2xl lg:text-3xl font-slackey
          lg:pt-2"
          >
            {calculateAge()} he/him/dog θΔ
          </p>
        </div>
        <SocialMediaList />
      </div>
    </div>
  );
}
export default MontyCard;

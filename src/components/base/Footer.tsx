import React from 'react';
import { animated, useSpring } from 'react-spring';
import { FormattedMessage } from 'react-intl';
import githubLogo from '../../assets/github.png';

export default function Footer(props: React.ComponentProps<'div'>) {
  const divAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div
      className={`w-full md:h-24 flex flex-col md:flex-row justify-around items-center p-4 bg-white shadow ${
        props.className || ''
      }`}
      style={{ ...props.style, ...divAnimation }}
    >
      <div className="max-w-screen-sm p-4 flex flex-col justify-center">
        <a href="https://github.com/lfujiwara/sharemyrig-website">
          <img className="w-6" src={githubLogo} alt="source code" />
        </a>
      </div>
      <div className="max-w-screen-sm p-4 flex flex-col justify-center ">
        <span className="text-xs">
          <FormattedMessage id="footer.partsIconsCredits" />
        </span>
      </div>
    </animated.div>
  );
}

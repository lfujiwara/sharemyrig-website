import React from 'react';
import { animated, useSpring } from 'react-spring';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export default function Header() {
  const divAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });
  return (
    <animated.div
      className="w-full flex flex-row p-4 bg-white shadow"
      style={divAnimation}
    >
      <LogoSvg />
    </animated.div>
  );
}

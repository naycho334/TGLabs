import { useEffect } from "react";

const ThemeAnimation = ()=>{

  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/home-animation.js";

    document.body.append(animationScript);

    // unmount scripts elements
    return animationScript.remove;
  }, []);

  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1147.76" height="769.9" viewBox="0 0 1147.76 769.9">
        <defs>
          <linearGradient id="linear-gradient" x1="1147.86" y1="375.73" x2="-0.1" y2="376.03" gradientUnits="userSpaceOnUse">
            <stop offset="0.02" stopColor="#2b1676" />
            <stop offset="0.29" stopColor="#2d1980" />
            <stop offset="0.82" stopColor="#2e1b85" />
            <stop offset={1} stopColor="#2e1c89" />
            <stop offset={1} stopColor="#12054e" />
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="325.09" y1="197.94" x2="318.12" y2="197.94" xlinkHref="#linear-gradient" />
          <linearGradient id="New_Gradient_Swatch_copy_25" data-name="New Gradient Swatch copy 25" x1="4217.76" y1="209.06" x2="4388.21" y2="170.85" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#25054d" />
            <stop offset={1} stopColor="#45108a" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_35" data-name="New Gradient Swatch copy 35" x1="4360.73" y1="253.97" x2="4286.15" y2="174.36" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#9f79c8" />
            <stop offset="0.14" stopColor="#a580cb" />
            <stop offset="0.33" stopColor="#b492d3" />
            <stop offset="0.55" stopColor="#cdb0e1" />
            <stop offset="0.58" stopColor="#d1b4e3" />
            <stop offset="0.76" stopColor="#dbc4e9" />
            <stop offset={1} stopColor="#ebdef3" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_35-2" x1="4314.79" y1="118.32" x2="4302.34" y2="142.06" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_25-2" x1="415.78" y1="133.09" x2="444.82" y2="156.01" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_35-3" x1="436.66" y1="192.26" x2="568.34" y2="152.84" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_25-3" x1="444.25" y1="141.35" x2="524.62" y2="117.29" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-4" x1="4314.79" y1="114.38" x2="4302.34" y2="138.12" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_35-4" x1="390.56" y1="215.31" x2="481.44" y2="194.93" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_25-5" x1="4222.87" y1="240.76" x2="4355.88" y2="210.94" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_35-5" x1="454.06" y1="230.75" x2="557.4" y2="199.8" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_13" data-name="New Gradient Swatch copy 13" x1="411.33" y1="258.17" x2="470.62" y2="244.88" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#6b24d6" />
            <stop offset="0.29" stopColor="#7733dc" />
            <stop offset="0.79" stopColor="#975ced" />
            <stop offset={1} stopColor="#a56ef4" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_13-2" x1="457.21" y1="250.02" x2="539.24" y2="225.46" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <linearGradient id="New_Gradient_Swatch_copy_35-6" x1="4316.65" y1="154.81" x2="4289.84" y2="205.89" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_26" data-name="New Gradient Swatch copy 26" x1="459.36" y1="204.1" x2="465.26" y2="183.82" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0.03" stopColor="#7c1dc9" />
            <stop offset="0.21" stopColor="#6e41d2" />
            <stop offset="0.62" stopColor="#4c9be8" />
            <stop offset={1} stopColor="#2af6ff" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_25-6" x1="460.07" y1="201.67" x2="465.19" y2="184.05" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-3" x1="478.34" y1="193.36" x2="474.72" y2="166.83" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#138bbd" />
            <stop offset="0.23" stopColor="#169ac7" />
            <stop offset="0.59" stopColor="#1fc3df" />
            <stop offset={1} stopColor="#2af6ff" />
          </linearGradient>
          <linearGradient id="linear-gradient-4" x1="4288.62" y1="143.74" x2="4315.17" y2="188.7" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0.06" stopColor="#200041" />
            <stop offset="0.23" stopColor="#210243" />
            <stop offset="0.32" stopColor="#25084b" />
            <stop offset="0.39" stopColor="#2c1358" />
            <stop offset="0.42" stopColor="#311b61" />
            <stop offset="0.47" stopColor="#351f65" />
            <stop offset="0.53" stopColor="#422c73" />
            <stop offset="0.6" stopColor="#584188" />
            <stop offset="0.66" stopColor="#765fa7" />
            <stop offset="0.69" stopColor="#8770b8" />
            <stop offset="0.7" stopColor="#7e67ae" />
            <stop offset="0.73" stopColor="#5c468d" />
            <stop offset="0.76" stopColor="#442e75" />
            <stop offset="0.79" stopColor="#362066" />
            <stop offset="0.81" stopColor="#311b61" />
            <stop offset="0.86" stopColor="#2a1155" />
            <stop offset="0.94" stopColor="#230446" />
            <stop offset={1} stopColor="#200041" />
          </linearGradient>
          <linearGradient id="linear-gradient-5" x1="4514.46" y1="740.42" x2="4553.56" y2="740.42" gradientTransform="matrix(0.87, 0.5, 0, 1.15, -3661.55, -2955.14)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#311b61" />
            <stop offset="0.2" stopColor="#290f52" />
            <stop offset="0.49" stopColor="#200041" />
            <stop offset={1} stopColor="#0f001f" />
          </linearGradient>
          <radialGradient id="Radial_Gradient_1" data-name="Radial Gradient 1" cx="4514.98" cy="-577.14" r="11.69" gradientTransform="translate(-3351.95 662.82) scale(0.8 0.88)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} />
          </radialGradient>
          <radialGradient id="radial-gradient" cx="4506.22" cy="-1219.84" r="23.18" gradientTransform="translate(-3691.9 24.9) rotate(26.06) scale(0.8 1.32)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#ff63ce" />
            <stop offset="0.41" stopColor="#9f19ab" />
            <stop offset="0.62" stopColor="#901bb8" />
            <stop offset="0.82" stopColor="#7c1dc9" />
            <stop offset="0.99" stopColor="#6d23d5" />
            <stop offset={1} stopColor="#6b24d6" />
          </radialGradient>
          <radialGradient id="radial-gradient-2" cx="4506.22" cy="-1219.84" r="16.56" gradientTransform="translate(-3691.9 24.89) rotate(26.06) scale(0.8 1.32)" xlinkHref="#radial-gradient" />
          <radialGradient id="radial-gradient-3" cx="4506.22" cy="-1219.84" r="9.94" gradientTransform="translate(-3351.95 1777.68) scale(0.8 1.32)" xlinkHref="#radial-gradient" />
          <linearGradient id="New_Gradient_Swatch_copy_9" data-name="New Gradient Swatch copy 9" x1="4296.4" y1="169.23" x2="4302.04" y2="165.66" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#9f19ab" />
            <stop offset="0.24" stopColor="#ae25b1" />
            <stop offset="0.65" stopColor="#d744bf" />
            <stop offset={1} stopColor="#ff63ce" />
          </linearGradient>
          <radialGradient id="radial-gradient-4" cx="4508.7" cy="-1220.39" r="21.66" gradientTransform="translate(-3351.95 1777.68) scale(0.8 1.32)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset="0.07" stopColor="#d8d8d8" />
            <stop offset="0.16" stopColor="#a6a6a6" />
            <stop offset="0.26" stopColor="#797979" />
            <stop offset="0.37" stopColor="#545454" />
            <stop offset="0.47" stopColor="#353535" />
            <stop offset="0.59" stopColor="#1e1e1e" />
            <stop offset="0.7" stopColor="#0d0d0d" />
            <stop offset="0.84" stopColor="#030303" />
            <stop offset={1} />
          </radialGradient>
          <radialGradient id="radial-gradient-5" cx="4507.96" cy="-1220.23" r="15.49" xlinkHref="#radial-gradient-4" />
          <radialGradient id="radial-gradient-6" cx="4507.21" cy="-1220.06" r="9.33" xlinkHref="#radial-gradient-4" />
          <radialGradient id="radial-gradient-7" cx="4506.5" cy="-563.48" r="3.15" gradientTransform="translate(-3351.95 662.82) scale(0.8 0.88)" xlinkHref="#radial-gradient-4" />
          <radialGradient id="radial-gradient-8" cx={-21819} cy="14708.5" r="6.39" gradientTransform="matrix(0.13, 0.37, 0.75, -0.32, -7782.66, 13022.38)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#972a74" />
            <stop offset="0.04" stopColor="#8a266a" />
            <stop offset="0.19" stopColor="#601b4a" />
            <stop offset="0.35" stopColor="#3d112f" />
            <stop offset="0.51" stopColor="#230a1b" />
            <stop offset="0.67" stopColor="#0f040c" />
            <stop offset="0.83" stopColor="#040103" />
            <stop offset={1} />
          </radialGradient>
          <linearGradient id="New_Gradient_Swatch_copy_25-7" x1="470.71" y1="186.9" x2="488.12" y2="200.65" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-8" x1="482.32" y1="195.84" x2={490} y2="193.54" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-9" x1="460.06" y1="174.49" x2="490.57" y2="198.58" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-10" x1="482.96" y1="191.69" x2="490.08" y2="189.56" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-11" x1="4284.47" y1="174.11" x2="4275.85" y2="190.53" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_9-2" x1="451.82" y1="210.43" x2="448.19" y2="183.9" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_25-12" x1="444.18" y1="203.97" x2="461.6" y2="217.71" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-13" x1="455.8" y1="212.91" x2="463.47" y2="210.61" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-14" x1="433.53" y1="191.55" x2="464.05" y2="215.64" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-15" x1="456.44" y1="208.75" x2="463.55" y2="206.62" gradientTransform="matrix(-1, 0, 0, 1, 721.96, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-16" x1={4311} y1="191.17" x2="4302.38" y2="207.6" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-6" x1="4286.25" y1="209.1" x2="4283.63" y2="204.56" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0.29" stopColor="#838091" />
            <stop offset="0.47" stopColor="#a5a2b1" />
            <stop offset="0.59" stopColor="#b7b4c2" />
            <stop offset="0.81" stopColor="#9b98a7" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_10" data-name="New Gradient Swatch copy 10" x1="4283.6" y1="208.75" x2="4285.97" y2="204.67" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#9d9eb3" />
            <stop offset="0.58" stopColor="#d4d1d8" />
            <stop offset={1} stopColor="#eeebf2" />
          </linearGradient>
          <linearGradient id="linear-gradient-7" x1="4285.18" y1="209.34" x2="4282.92" y2="205.42" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#4ec1de" />
            <stop offset="0.24" stopColor="#4dc4de" />
            <stop offset="0.45" stopColor="#49cfde" />
            <stop offset="0.64" stopColor="#43e1de" />
            <stop offset="0.65" stopColor="#43e2de" />
            <stop offset="0.77" stopColor="#3dabc8" />
            <stop offset="0.84" stopColor="#3a91bd" />
            <stop offset="0.88" stopColor="#3b96bf" />
            <stop offset={1} stopColor="#3ca0c3" />
          </linearGradient>
          <linearGradient id="linear-gradient-8" x1="4282.73" y1="209.14" x2="4284.77" y2="205.64" gradientTransform="translate(-4035.3)" xlinkHref="#linear-gradient-3" />
          <radialGradient id="Radial_Gradient_1-2" cx="4486.18" cy="-517.36" r="1.88" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-9" x1="4291.98" y1="212.71" x2="4289.36" y2="208.17" xlinkHref="#linear-gradient-6" />
          <linearGradient id="New_Gradient_Swatch_copy_10-2" x1="4289.33" y1="212.37" x2="4291.7" y2="208.29" xlinkHref="#New_Gradient_Swatch_copy_10" />
          <linearGradient id="linear-gradient-10" x1="4290.91" y1="212.95" x2="4288.65" y2="209.03" gradientTransform="translate(-4035.3)" gradientUnits="userSpaceOnUse">
            <stop offset="0.17" stopColor="#dc48c1" />
            <stop offset="0.31" stopColor="#df4ac2" />
            <stop offset="0.41" stopColor="#e851c5" />
            <stop offset="0.49" stopColor="#f75dcb" />
            <stop offset="0.52" stopColor="#ff63ce" />
            <stop offset="0.91" stopColor="#9f19ab" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_9-3" x1="4288.47" y1="212.76" x2="4290.5" y2="209.26" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <radialGradient id="Radial_Gradient_1-3" cx="4493.32" cy="-513.26" r="1.88" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="Radial_Gradient_1-4" cx="226.22" cy="-589.83" r="10.71" gradientTransform="matrix(-0.8, 0, 0, 0.88, 466.41, 662.82)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="Radial_Gradient_1-5" cx="278.28" cy="-539.94" r="4.78" gradientTransform="matrix(-0.8, 0, 0, 0.88, 466.41, 662.82)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="Radial_Gradient_1-6" cx="245.23" cy="-520.55" r="4.78" gradientTransform="matrix(-0.8, 0, 0, 0.88, 466.41, 662.82)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_13-3" x1="238.47" y1="268.12" x2="373.13" y2="237.93" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <linearGradient id="New_Gradient_Swatch_copy_13-4" x1="317.8" y1="238.72" x2="414.23" y2="209.84" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <linearGradient id="New_Gradient_Swatch_copy_35-7" x1="340.28" y1="134.18" x2="316.86" y2="160.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-11" x1="311.67" y1="212.28" x2="326.48" y2="212.28" gradientUnits="userSpaceOnUse">
            <stop offset="0.03" stopColor="#9b6db8" />
            <stop offset="0.51" stopColor="#a178c2" />
            <stop offset="0.99" stopColor="#a988d1" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_35-8" x1="238.47" y1="259.16" x2="373.13" y2="228.98" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_26-2" x1="326.11" y1="266.75" x2="278.83" y2="222.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="New_Gradient_Swatch_copy_35-9" x1="328.41" y1="168.35" x2="307.08" y2="209.01" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-10" x1="291.8" y1="180.04" x2="344.97" y2="198.03" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-11" x1="325.73" y1="159.32" x2="273.57" y2="244.4" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-12" x1="298.43" y1="205.28" x2="307.02" y2="202.71" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-13" x1="289.88" y1="206.32" x2="300.68" y2="203.9" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-14" x1="301.7" y1="194.85" x2="296.78" y2="204.23" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_9-4" x1="298.14" y1="204.14" x2="305.39" y2="201.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-5" x1="291.08" y1="205.01" x2="300.22" y2="202.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-6" x1="300.8" y1="195.43" x2="296.85" y2="202.95" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_35-15" x1="303.72" y1="208.65" x2="312.32" y2="206.08" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-16" x1="295.17" y1="209.69" x2="305.98" y2="207.27" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-17" x1={307} y1="198.22" x2="302.08" y2="207.6" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_9-7" x1="303.44" y1="207.51" x2="310.69" y2="205.34" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-8" x1="296.38" y1="208.38" x2="305.52" y2="206.34" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-9" x1="306.1" y1="198.8" x2="302.15" y2="206.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_35-18" x1="309.02" y1="212.02" x2="317.62" y2="209.45" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-19" x1="300.47" y1="213.06" x2="311.28" y2="210.64" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-20" x1="312.3" y1="201.59" x2="307.38" y2="210.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_9-10" x1="308.74" y1="210.88" x2="315.99" y2="208.71" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-11" x1="301.68" y1="211.75" x2="310.82" y2="209.71" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_9-12" x1="311.4" y1="202.17" x2="307.45" y2="209.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_35-21" x1="321.42" y1="219.75" x2="332.52" y2="216.43" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-22" x1="301.39" y1="220.94" x2="328.63" y2="214.84" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-23" x1="323.69" y1="203.66" x2="316.77" y2="216.86" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_36" data-name="New Gradient Swatch copy 36" x1="321.05" y1="218.27" x2="330.41" y2="215.47" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#45108a" />
            <stop offset={1} stopColor="#7c1dc9" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_36-2" x1="302.94" y1="219.25" x2="328.03" y2="213.63" xlinkHref="#New_Gradient_Swatch_copy_36" />
          <linearGradient id="New_Gradient_Swatch_copy_36-3" x1="322.52" y1="204.41" x2="316.85" y2="215.21" xlinkHref="#New_Gradient_Swatch_copy_36" />
          <linearGradient id="New_Gradient_Swatch_copy_25-17" x1="317.71" y1="216.98" x2="318.93" y2="210.52" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-18" x1="313.29" y1="213.34" x2="320.44" y2="210.99" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-12" x1="317.54" y1="183.08" x2="306.91" y2="204.51" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#2c075b" />
            <stop offset="0.09" stopColor="#3e0c74" />
            <stop offset="0.26" stopColor="#6015a2" />
            <stop offset="0.4" stopColor="#741bbe" />
            <stop offset="0.47" stopColor="#7c1dc9" />
            <stop offset="0.68" stopColor="#5c159d" />
            <stop offset={1} stopColor="#2c085b" />
          </linearGradient>
          <linearGradient id="linear-gradient-13" x1={327} y1="189.15" x2="316.39" y2="210.57" xlinkHref="#linear-gradient-12" />
          <linearGradient id="linear-gradient-14" x1="308.17" y1="177.08" x2="297.55" y2="198.51" xlinkHref="#linear-gradient-12" />
          <linearGradient id="New_Gradient_Swatch_copy_26-3" x1="325.53" y1="185.06" x2="298.62" y2="163.04" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="linear-gradient-15" x1="321.73" y1="193.88" x2="327.29" y2="194.7" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset="0.62" stopColor="#a7a6a6" />
            <stop offset={1} stopColor="#767475" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_35-24" x1="317.8" y1="229.76" x2="414.23" y2="200.89" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-25" x1="212.18" y1="211.56" x2="366.2" y2="177.04" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-26" x1="310.91" y1="208.58" x2="303.07" y2="217.55" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_25-19" x1="307.47" y1="210.92" x2="301.31" y2="222.65" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-20" x1="292.59" y1="215.68" x2="303.78" y2="219.47" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_35-27" x1="311.73" y1="228.12" x2="323.58" y2="224.58" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-28" x1="259.44" y1="231.04" x2="326.89" y2="215.92" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="Radial_Gradient_1-7" cx="86.98" cy="-557.75" r="22.48" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <clipPath id="clip-path">
            <polygon points="313.28 213.33 319.68 217.45 323.69 214.78 320.74 207.23 314.2 204.77 313.05 208.32 313.28 213.33" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-16" x1="2600.57" y1="206.95" x2="2605.61" y2="216.16" gradientTransform="translate(-2284.93)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#ffbb96" />
            <stop offset="0.23" stopColor="#fffbc9" />
            <stop offset="0.54" stopColor="#f9b673" />
            <stop offset="0.64" stopColor="#f9b876" />
            <stop offset="0.72" stopColor="#fabe81" />
            <stop offset="0.81" stopColor="#fcc993" />
            <stop offset="0.86" stopColor="#fed2a3" />
            <stop offset="0.97" stopColor="#ffc28c" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_37" data-name="New Gradient Swatch copy 37" x1="2600.18" y1="212.78" x2="2611.08" y2="209.52" gradientTransform="translate(-1927.12 -1121.47) rotate(26.06)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#ffba78" />
            <stop offset="0.4" stopColor="#ffc987" />
            <stop offset={1} stopColor="#feeca8" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_37-2" x1="4789.39" y1="213.92" x2="4800.73" y2="207.09" gradientTransform="matrix(-1, 0, 0, 1, 5108.94, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="linear-gradient-17" x1="2601.26" y1="215.85" x2="2601.9" y2="210.17" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-9" cx="17325.73" cy="-1128.14" r="5.72" gradientTransform="matrix(0.23, -0.22, 0.36, 0.44, -3188.47, 4539.35)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#f49587" />
            <stop offset="0.12" stopColor="#bd7368" />
            <stop offset="0.24" stopColor="#8b554d" />
            <stop offset="0.36" stopColor="#603b35" />
            <stop offset="0.48" stopColor="#3e2622" />
            <stop offset="0.61" stopColor="#231513" />
            <stop offset="0.74" stopColor="#0f0908" />
            <stop offset="0.86" stopColor="#040202" />
            <stop offset={1} />
          </radialGradient>
          <linearGradient id="linear-gradient-18" x1="2601.54" y1="206.42" x2="2606.53" y2="215.52" xlinkHref="#linear-gradient-16" />
          <radialGradient id="Radial_Gradient_1-8" cx="2362.72" cy="-513.8" r="4.66" gradientTransform="translate(-1578.41 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-19" x1="315.41" y1="212.29" x2="318.99" y2="212.29" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="New_Gradient_Swatch_copy_37-3" x1="321.68" y1="220.89" x2="310.79" y2="201.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-10" cx="78.19" cy="-512.72" r="2.56" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_23" data-name="New Gradient Swatch copy 23" x1="7427.85" y1="215.28" x2="7434.53" y2="227.46" gradientTransform="matrix(-1, 0, 0, 1, 7762.04, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#c1a1d5" />
            <stop offset="0.05" stopColor="#c8abda" />
            <stop offset="0.11" stopColor="#dac6e6" />
            <stop offset="0.2" stopColor="#f7f2f9" />
            <stop offset="0.22" stopColor="#fff" />
            <stop offset="0.25" stopColor="#f9f5fb" />
            <stop offset="0.3" stopColor="#e9dbf2" />
            <stop offset="0.36" stopColor="#d1b4e3" />
            <stop offset="0.43" stopColor="#b395d6" />
            <stop offset="0.49" stopColor="#9c7dcb" />
            <stop offset="0.56" stopColor="#8e6ec5" />
            <stop offset="0.61" stopColor="#8969c3" />
            <stop offset="0.76" stopColor="#9471c6" />
            <stop offset={1} stopColor="#b086cc" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_35-29" x1="7427.33" y1={223} x2="7441.76" y2="218.67" gradientTransform="matrix(-0.44, -0.9, -0.9, 0.44, 3796.34, 6798.74)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-11" cx="27782.39" cy="4216.11" r="7.57" gradientTransform="matrix(0.04, -0.31, -0.56, -0.02, 1528.44, 9023.34)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="Radial_Gradient_1-9" cx="7667.95" cy="-503.04" r="6.17" gradientTransform="matrix(-0.8, 0, 0, 0.88, 6485.65, 662.82)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_23-2" x1="7425.21" y1="218.28" x2="7430.73" y2="228.34" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="New_Gradient_Swatch_copy_35-30" x1="7423.52" y1="225.41" x2="7435.33" y2="221.87" gradientTransform="matrix(-0.44, -0.9, -0.9, 0.44, 3800.96, 6796.38)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="Radial_Gradient_1-10" cx="7662.38" cy="-499.67" r="5.05" gradientTransform="matrix(-0.8, 0, 0, 0.88, 6485.65, 662.82)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_35-31" x1="341.42" y1="209.26" x2="376.87" y2="198.64" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-32" x1="312.92" y1="215.14" x2="369.03" y2="202.56" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-33" x1="349.23" y1="193.68" x2="346.91" y2="198.1" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-20" x1="345.57" y1="200.07" x2="347.26" y2="198.4" xlinkHref="#linear-gradient-15" />
          <radialGradient id="New_Gradient_Swatch_copy_15" data-name="New Gradient Swatch copy 15" cx="-415.85" cy="-2425.72" r="7.4" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#ff63ce" />
            <stop offset={1} stopColor="#9f19ab" />
          </radialGradient>
          <radialGradient id="radial-gradient-12" cx="121.89" cy="-524.15" r="9.58" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-13" cx="-416.29" cy="-2426.69" r="4.61" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#radial-gradient-9" />
          <clipPath id="clip-path-2">
            <polygon points="308.66 178.1 316.44 183.09 316.44 208.18 308.66 203.2 308.66 178.1" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-21" x1="316.75" y1="184.47" x2="306.96" y2="203.4" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#9f19ab" />
            <stop offset="0.17" stopColor="#be31b6" />
            <stop offset="0.4" stopColor="#ed55c7" />
            <stop offset="0.51" stopColor="#ff63ce" />
            <stop offset="0.97" stopColor="#dc48c1" />
          </linearGradient>
          <clipPath id="clip-path-3">
            <polygon points="299.39 172.16 306.98 177.03 306.98 202.13 299.39 197.27 299.39 172.16" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-22" x1="305.43" y1="177.73" x2="295.63" y2="196.66" xlinkHref="#linear-gradient-21" />
          <clipPath id="clip-path-4">
            <polygon points="318.12 184.17 325.09 188.65 321.96 211.71 318.12 209.25 318.12 184.17" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-23" x1="324.4" y1="188.11" x2="314.6" y2="207.04" xlinkHref="#linear-gradient-21" />
          <radialGradient id="radial-gradient-14" cx="-4752.57" cy="-20364.34" r="26.96" gradientTransform="matrix(0.69, 0.44, -0.09, 0.16, 1851.18, 5602.35)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#7c1dc9" />
            <stop offset="0.03" stopColor="#741bbd" />
            <stop offset="0.16" stopColor="#56148b" />
            <stop offset="0.3" stopColor="#3b0e60" />
            <stop offset="0.43" stopColor="#26093e" />
            <stop offset="0.57" stopColor="#150523" />
            <stop offset="0.71" stopColor="#09020f" />
            <stop offset="0.85" stopColor="#020104" />
            <stop offset={1} />
          </radialGradient>
          <linearGradient id="New_Gradient_Swatch_copy_8" data-name="New Gradient Swatch copy 8" x1="317.07" y1="195.37" x2="300.67" y2="165.57" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#ffa98c" />
            <stop offset="0.32" stopColor="#ffb892" />
            <stop offset="0.86" stopColor="#fee1a3" />
            <stop offset={1} stopColor="#feeca8" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_8-2" x1="318.09" y1="194.37" x2="301.83" y2="164.82" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-3" x1="320.26" y1="193.02" x2="304.03" y2="163.52" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-4" x1="321.75" y1="192.02" x2="305.56" y2="162.6" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-5" x1="323.45" y1="191.22" x2="307.09" y2="161.48" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-6" x1="325.3" y1="189.88" x2="309.07" y2="160.37" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-7" x1="327.32" y1="188.68" x2="311.05" y2="159.12" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-8" x1="5427.92" y1="15412.3" x2="5433.48" y2="15419.45" gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 5016.73, 20773.76)" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-9" x1="5450.06" y1="15412.7" x2="5454.65" y2="15418.6" gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 5016.73, 20773.76)" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-10" x1="5451.24" y1="15424.48" x2="5453.94" y2="15427.95" gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 5016.73, 20773.76)" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-11" x1="5436.97" y1="15417.35" x2="5446.33" y2="15429.39" gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 5016.73, 20773.76)" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="New_Gradient_Swatch_copy" data-name="New Gradient Swatch copy" cx="-4746.3" cy="-20245.45" r="26.96" gradientTransform="matrix(0.69, 0.44, -0.09, 0.16, 1851.18, 5602.35)" xlinkHref="#radial-gradient-8" />
          <linearGradient id="New_Gradient_Swatch_copy_25-21" x1="887.72" y1="241.9" x2="1005.97" y2="206.5" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-22" x1="775.59" y1="256.26" x2="931.32" y2="221.35" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-24" x1="895.11" y1="285.45" x2="840.86" y2="227.54" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#4b61b8" />
            <stop offset="0.13" stopColor="#38498a" />
            <stop offset="0.27" stopColor="#273360" />
            <stop offset="0.41" stopColor="#19203e" />
            <stop offset="0.55" stopColor="#0e1223" />
            <stop offset="0.7" stopColor="#06080f" />
            <stop offset="0.84" stopColor="#020204" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="linear-gradient-25" x1="914.36" y1="125.52" x2={864} y2="221.51" gradientUnits="userSpaceOnUse">
            <stop offset="0.74" stopColor="#45108a" />
            <stop offset={1} stopColor="#3746a3" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_26-4" x1="874.18" y1="174.19" x2="874.18" y2="216.7" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <radialGradient id="Radial_Gradient_1-11" cx="873.96" cy="222.09" r="20.88" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-26" x1="841.97" y1="221.11" x2="861.55" y2="249.49" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-10" />
          <linearGradient id="New_Gradient_Swatch_copy_9-13" x1="4318.38" y1="2352.85" x2="4351.36" y2="2352.85" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, -4079.24, -5328.04)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="New_Gradient_Swatch_copy_10-3" x1="4322.93" y1="2347.84" x2="4376.76" y2="2370.43" gradientTransform="matrix(0.87, 0.5, 0.5, 1.44, -4079.24, -5328.04)" xlinkHref="#New_Gradient_Swatch_copy_10" />
          <linearGradient id="linear-gradient-27" x1="4556.83" y1="221.11" x2="4576.42" y2="249.49" gradientTransform="matrix(-1, 0, 0, 1, 5463.33, 0)" xlinkHref="#linear-gradient-7" />
          <linearGradient id="linear-gradient-28" x1="9687.42" y1="498.25" x2="9752.12" y2="478.88" gradientTransform="matrix(-0.87, 0.5, -0.5, 1.44, 9542.56, -5328.04)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="New_Gradient_Swatch_copy_10-4" x1="886.71" y1="245.82" x2="931.71" y2="201.85" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_10" />
          <linearGradient id="New_Gradient_Swatch_copy_25-23" x1="889.77" y1="270.82" x2="986.54" y2="241.85" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-24" x1="789.73" y1="282.55" x2="916.99" y2="254.02" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-29" x1="874.46" y1="222.66" x2="874.46" y2="136.62" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#1bb0d4" />
            <stop offset="0.05" stopColor="#189dbd" stopOpacity="0.89" />
            <stop offset="0.18" stopColor="#12738b" stopOpacity="0.66" />
            <stop offset="0.31" stopColor="#0c5060" stopOpacity="0.45" />
            <stop offset="0.45" stopColor="#08333e" stopOpacity="0.29" />
            <stop offset="0.58" stopColor="#041d23" stopOpacity="0.16" />
            <stop offset="0.72" stopColor="#020d0f" stopOpacity="0.07" />
            <stop offset="0.85" stopColor="#000304" stopOpacity="0.02" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-30" x1="508.01" y1="542.99" x2="563.56" y2="438.45" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#45108a" />
            <stop offset="0.54" stopColor="#7c1dc9" />
            <stop offset="0.63" stopColor="#6e41d2" />
            <stop offset="0.82" stopColor="#4c9be8" />
            <stop offset={1} stopColor="#2af6ff" />
          </linearGradient>
          <linearGradient id="linear-gradient-31" x1="645.36" y1="519.34" x2="610.9" y2="438.31" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-32" x1="717.48" y1="515.75" x2="623.84" y2="439.23" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-33" x1="780.59" y1="530.81" x2="644.79" y2="432.76" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-34" x1="324.68" y1="419.52" x2="519.03" y2="419.52" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-35" x1="515.31" y1="487.63" x2="561.06" y2="442.52" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-36" x1="739.64" y1="346.34" x2="696.5" y2="393.73" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-37" x1="787.11" y1="456.6" x2="657.19" y2="422.77" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-38" x1="597.09" y1="552.17" x2="571.11" y2="422.25" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-39" x1="465.43" y1="460.91" x2="544.11" y2="460.91" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-40" x1="691.91" y1="478.43" x2="629.26" y2="433.02" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-41" x1="404.61" y1="411.67" x2="506.49" y2="411.67" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-42" x1="687.35" y1="231.56" x2="654.67" y2="306.07" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-43" x1="371.16" y1="462.69" x2="531.57" y2="462.69" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-44" x1="759.48" y1="401.28" x2="691.5" y2="408.47" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-45" x1="754.88" y1="277.12" x2="672.52" y2="337.26" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-46" x1="583.8" y1="221.77" x2="612.57" y2="310.34" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-47" x1="347.81" y1="370.35" x2="493.95" y2="370.35" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-48" x1="398.14" y1="367.09" x2="481.41" y2="367.09" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-49" x1="482.3" y1="267.49" x2="585.41" y2="267.49" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-50" x1="387.19" y1="328.34" x2="505.22" y2="328.34" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-51" x1="797.82" y1="456.9" x2="679.67" y2="398.07" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-52" x1="439.16" y1="308.69" x2="550.74" y2="308.69" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-53" x1="801.36" y1="281.95" x2="685.01" y2="351.24" xlinkHref="#linear-gradient-30" />
          <linearGradient id="linear-gradient-54" x1="838.54" y1="323.66" x2="991.52" y2="323.66" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#45108a" />
            <stop offset="0.31" stopColor="#2f0b5e" stopOpacity="0.68" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-55" x1="365.81" y1="533.49" x2="289.44" y2="533.49" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-56" x1="811.83" y1="290.55" x2="843.65" y2="290.55" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-57" x1="211.24" y1="256.67" x2="98.7" y2="256.67" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-58" x1="698.78" y1="541.12" x2="748.79" y2="541.12" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-59" x1="2042.47" y1="1423.9" x2="2009.88" y2="1437.01" gradientTransform="matrix(1.9, 0.53, 0.53, 1.31, -3959.44, -2308.18)" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-60" x1="312.22" y1="325.58" x2="200.03" y2="325.58" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-61" x1="263.67" y1="299.1" x2="297.48" y2="299.1" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-62" x1="981.45" y1="318.06" x2="1044.74" y2="318.06" xlinkHref="#linear-gradient-54" />
          <linearGradient id="linear-gradient-63" x1="475.37" y1="372.28" x2="701.52" y2="372.28" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#25054d" />
            <stop offset="0.14" stopColor="#260550" />
            <stop offset="0.21" stopColor="#2b0759" />
            <stop offset="0.27" stopColor="#330a67" />
            <stop offset="0.32" stopColor="#3e0e7d" />
            <stop offset="0.34" stopColor="#45108a" />
            <stop offset="0.38" stopColor="#4e1294" />
            <stop offset="0.44" stopColor="#6518af" />
            <stop offset="0.49" stopColor="#7c1dc9" />
            <stop offset="0.53" stopColor="#6b19b5" />
            <stop offset="0.59" stopColor="#45108a" />
            <stop offset="0.66" stopColor="#3c0d79" />
            <stop offset="0.79" stopColor="#2f0961" />
            <stop offset="0.9" stopColor="#280652" />
            <stop offset={1} stopColor="#25054d" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_25-25" x1="672.41" y1="149.71" x2="579.35" y2="389.92" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-64" x1="480.54" y1="362.75" x2="696.29" y2="362.75" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#b086cc" />
            <stop offset="0.21" stopColor="#c1a1d5" />
            <stop offset="0.29" stopColor="#c8abda" />
            <stop offset="0.41" stopColor="#dbc6e7" />
            <stop offset="0.51" stopColor="#ebdef3" />
            <stop offset="0.56" stopColor="#e4d2ee" />
            <stop offset="0.69" stopColor="#d6bce6" />
            <stop offset="0.78" stopColor="#d1b4e3" />
            <stop offset="0.78" stopColor="#cfb2e2" />
            <stop offset="0.86" stopColor="#be9ad6" />
            <stop offset="0.94" stopColor="#b48bcf" />
            <stop offset={1} stopColor="#b086cc" />
          </linearGradient>
          <linearGradient id="linear-gradient-65" x1="475.19" y1="355.92" x2="701.34" y2="355.92" xlinkHref="#linear-gradient-63" />
          <linearGradient id="New_Gradient_Swatch_copy_25-26" x1="672.22" y1="129.51" x2="579.17" y2="369.72" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-27" x1="621.61" y1="260.16" x2="549.54" y2="446.21" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <radialGradient id="Radial_Gradient_1-12" cx="588.26" cy="378.91" r="83.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-15" cx="12369.02" cy="13613.73" r="41.91" gradientTransform="matrix(0, -0.9, -0.66, 0, 9623.84, 11572.26)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#972a74" />
            <stop offset="0.04" stopColor="#8a266a" stopOpacity="0.92" />
            <stop offset="0.19" stopColor="#601b4a" stopOpacity="0.64" />
            <stop offset="0.35" stopColor="#3d112f" stopOpacity="0.41" />
            <stop offset="0.51" stopColor="#230a1b" stopOpacity="0.23" />
            <stop offset="0.67" stopColor="#0f040c" stopOpacity="0.1" />
            <stop offset="0.83" stopColor="#040103" stopOpacity="0.03" />
            <stop offset={1} stopOpacity={0} />
          </radialGradient>
          <linearGradient id="linear-gradient-66" x1="692.65" y1="374.01" x2="705.29" y2="394.41" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#b086cc" />
            <stop offset="0.36" stopColor="#c1a1d5" />
            <stop offset="0.38" stopColor="#c8abda" />
            <stop offset="0.41" stopColor="#dac6e6" />
            <stop offset="0.45" stopColor="#f7f2f9" />
            <stop offset="0.46" stopColor="#fff" />
            <stop offset="0.49" stopColor="#f1e9f7" />
            <stop offset="0.53" stopColor="#e0ccec" />
            <stop offset="0.57" stopColor="#d5bae5" />
            <stop offset="0.6" stopColor="#d1b4e3" />
            <stop offset="0.63" stopColor="#bcbce3" />
            <stop offset="0.72" stopColor="#91cce2" />
            <stop offset="0.8" stopColor="#6fd8e2" />
            <stop offset="0.87" stopColor="#57e1e1" />
            <stop offset="0.94" stopColor="#48e6e1" />
            <stop offset={1} stopColor="#43e8e1" />
          </linearGradient>
          <radialGradient id="Radial_Gradient_1-13" cx="694.77" cy="384.49" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-67" x1="680.09" y1="381.26" x2="692.73" y2="401.67" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-14" cx="682.21" cy="391.75" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-68" x1="667.53" y1="388.52" x2="680.16" y2="408.93" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-15" cx="669.65" cy="399.01" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-69" x1="654.96" y1="395.78" x2="667.6" y2="416.19" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-16" cx="657.08" cy="406.27" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-70" x1="642.4" y1="403.04" x2="655.04" y2="423.45" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-17" cx="644.52" cy="413.53" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-71" x1="629.84" y1="410.3" x2="642.47" y2="430.71" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-18" cx="631.96" cy="420.79" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-72" x1="617.22" y1="417.56" x2="629.85" y2="437.97" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-19" cx="619.34" cy="428.05" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-73" x1="604.65" y1="424.82" x2="617.29" y2="445.23" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-20" cx="606.77" cy="435.31" r="8.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-74" x1="7752.26" y1={374} x2="7764.89" y2="394.4" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-21" cx="7754.38" cy="384.49" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-75" x1="7739.7" y1="381.26" x2="7752.33" y2="401.66" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-22" cx="7741.82" cy="391.74" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-76" x1="7727.14" y1="388.52" x2="7739.77" y2="408.92" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-23" cx="7729.26" cy={399} r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-77" x1="7714.58" y1="395.78" x2="7727.21" y2="416.17" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-24" cx="7716.7" cy="406.26" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-78" x1="7702.02" y1="403.03" x2="7714.65" y2="423.43" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-25" cx="7704.14" cy="413.51" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-79" x1="7689.46" y1="410.29" x2="7702.09" y2="430.69" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-26" cx="7691.58" cy="420.77" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-80" x1="7676.99" y1="417.55" x2="7689.62" y2="437.94" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-27" cx="7679.11" cy="428.03" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-81" x1="7664.43" y1="424.8" x2="7677.07" y2="445.2" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#linear-gradient-66" />
          <radialGradient id="Radial_Gradient_1-28" cx="7666.55" cy="435.28" r="8.38" gradientTransform="matrix(-1, 0, 0, 1, 8236.56, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-82" x1="588.76" y1="409.14" x2="588.76" y2="197.6" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#1bb0d4" />
            <stop offset="0.05" stopColor="#189dbd" stopOpacity="0.89" />
            <stop offset="0.18" stopColor="#12738b" stopOpacity="0.66" />
            <stop offset="0.31" stopColor="#0c5060" stopOpacity="0.45" />
            <stop offset="0.45" stopColor="#08333e" stopOpacity="0.29" />
            <stop offset="0.58" stopColor="#041d23" stopOpacity="0.16" />
            <stop offset="0.72" stopColor="#020d0f" stopOpacity="0.07" />
            <stop offset="0.85" stopColor="#000304" stopOpacity="0.02" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <radialGradient id="Безымянный_градиент_195" data-name="Безымянный градиент 195" cx="356.22" cy="656.91" r="6.53" gradientTransform="translate(0 -243.89)" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stopColor="#ffe2a6" />
            <stop offset="0.35" stopColor="#fff" stopOpacity={0} />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_195-2" cx="422.36" cy="550.5" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-3" cx="433.58" cy="639.08" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-4" cx="454.82" cy="704.81" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-5" cx="522.96" cy="680.76" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-6" cx="596.31" cy="705.21" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-7" cx="653.82" cy="758.52" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-8" cx="685.69" cy="684.37" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-9" cx="737.39" cy="650.7" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <radialGradient id="Безымянный_градиент_195-10" cx="751.82" cy="555.31" r="6.53" xlinkHref="#Безымянный_градиент_195" />
          <clipPath id="clip-path-5">
            <polygon points="589.01 394.3 682.85 342.09 686.38 105.34 608.41 68.12 499.16 101.44 499.75 342.32 589.01 394.3" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-83" x1="6828.02" y1="277.62" x2="6856.51" y2="329.59" gradientTransform="matrix(-1, 0, 0, 1, 7393.87, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-84" x1="6824.6" y1="310.83" x2="6891.14" y2="290.9" gradientTransform="matrix(-0.5, -0.86, -0.86, 0.5, 4274.49, 6052.68)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="linear-gradient-85" x1="543.69" y1="317.37" x2="610.04" y2="277.38" gradientTransform="translate(542.89 -330.46) rotate(59.69)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="linear-gradient-86" x1="6831.42" y1="327.54" x2="6834.92" y2="296.16" gradientTransform="matrix(-1, 0, 0, 1, 7393.87, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-16" cx="24741.33" cy="4282.1" r="24.32" gradientTransform="matrix(0, -0.38, -0.66, 0, 3393.63, 9626.59)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-87" x1="6834.07" y1="274.3" x2="6862.38" y2="325.93" gradientTransform="matrix(-1, 0, 0, 1, 7393.87, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-17" cx="6841.36" cy="297.84" r="22.78" gradientTransform="matrix(-1, 0, 0, 1, 7393.87, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-88" x1="-4284.04" y1="4178.06" x2="-4282.76" y2="4166.65" gradientTransform="matrix(0.61, 0.46, -0.61, 1.17, 5736.26, -2591.19)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-89" x1="-4283.23" y1="4182.2" x2="-4280.97" y2="4161.93" gradientTransform="matrix(0.61, 0.46, -0.61, 1.17, 5736.26, -2591.19)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-18" cx="563.93" cy="312.37" r="10.88" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-19" cx="570.51" cy="308.17" r="15.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-20" cx="1258.19" cy="-13388.41" r="125.84" gradientTransform="translate(-38.57 5445.12) scale(0.77 0.37)" gradientUnits="userSpaceOnUse">
            <stop offset="0.19" stopColor="#5f5c5d" />
            <stop offset="0.33" stopColor="#585556" stopOpacity="0.92" />
            <stop offset="0.54" stopColor="#434142" stopOpacity="0.7" />
            <stop offset="0.79" stopColor="#212021" stopOpacity="0.35" />
            <stop offset={1} stopOpacity={0} />
          </radialGradient>
          <linearGradient id="linear-gradient-90" x1="839.74" y1="444.65" x2="1015.84" y2="444.65" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#6b24d6" />
            <stop offset="0.06" stopColor="#7733dc" />
            <stop offset="0.16" stopColor="#975ced" />
            <stop offset="0.2" stopColor="#a56ef4" />
            <stop offset="0.24" stopColor="#9d64f0" />
            <stop offset="0.38" stopColor="#8241e2" />
            <stop offset="0.5" stopColor="#712cd9" />
            <stop offset="0.58" stopColor="#6b24d6" />
            <stop offset="0.73" stopColor="#6e27d7" />
            <stop offset="0.85" stopColor="#7531db" />
            <stop offset="0.92" stopColor="#7d3bdf" />
            <stop offset={1} stopColor="#742fdb" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_13-5" x1="958.18" y1="289.33" x2="914.97" y2="491.96" gradientTransform="translate(1353.48 -498.79) rotate(89.62)" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <linearGradient id="New_Gradient_Swatch_copy_13-6" x1="931.41" y1="485.85" x2="919.92" y2="315.6" gradientTransform="translate(1353.83 -498.44) rotate(89.62)" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <linearGradient id="linear-gradient-91" x1="1007.21" y1="406.6" x2="849.28" y2="406.6" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#6b24d6" />
            <stop offset="0.58" stopColor="#6b24d6" />
            <stop offset="0.73" stopColor="#6e27d7" />
            <stop offset="0.85" stopColor="#7531db" />
            <stop offset="0.92" stopColor="#7d3bdf" />
            <stop offset={1} stopColor="#742fdb" />
          </linearGradient>
          <radialGradient id="Radial_Gradient_1-29" cx="880.29" cy="-327.27" r="59.04" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="Radial_Gradient_1-30" cx="424.04" cy="-2040.23" r="98.96" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_35-34" x1="-5015.03" y1="2806.78" x2="-4889.24" y2="2806.78" gradientTransform="matrix(-0.49, 0.87, -0.58, -1, 119.34, 7534.09)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-35" x1="-5000.51" y1="2806.78" x2="-4903.75" y2="2806.78" gradientTransform="matrix(0.87, 0.5, -1, 0.58, 8023.12, 1288.69)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-36" x1="-4990.84" y1="2806.78" x2="-4913.43" y2="2806.78" gradientTransform="matrix(-0.49, 0.87, -0.58, -1, 119.34, 7534.09)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="New_Gradient_Swatch_copy_19" data-name="New Gradient Swatch copy 19" cx="837.53" cy="-260.76" r="44.85" gradientTransform="matrix(0.01, 0.8, -0.88, 0.01, 693.78, -237.45)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#a56ef4" />
            <stop offset={1} stopColor="#6b24d6" />
          </radialGradient>
          <radialGradient id="radial-gradient-21" cx="913.68" cy="-5280.89" r="50.79" gradientTransform="translate(156.88 3320.58) scale(0.84 0.55)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#b086cc" />
            <stop offset="0.15" stopColor="#906da7" />
            <stop offset="0.45" stopColor="#533f60" />
            <stop offset="0.71" stopColor="#261d2c" />
            <stop offset="0.9" stopColor="#0a080c" />
            <stop offset={1} />
          </radialGradient>
          <radialGradient id="radial-gradient-22" cx="1250.32" cy="-14641.02" r="12.54" gradientTransform="translate(-38.57 5604.68) scale(0.77 0.35)" gradientUnits="userSpaceOnUse">
            <stop offset="0.19" stopColor="#5f5c5d" />
            <stop offset={1} stopColor="#fff" />
          </radialGradient>
          <radialGradient id="radial-gradient-23" cx="-5446.76" cy="-3953.36" r="36.71" gradientTransform="translate(2273.24 2555.84) scale(0.26 0.53)" xlinkHref="#radial-gradient-14" />
          <radialGradient id="radial-gradient-24" cx="-20590.96" cy="371.82" r="36.72" gradientTransform="matrix(-0.03, 0.26, -0.57, -0.01, 515.14, 5833.51)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#c211a1" />
            <stop offset="0.01" stopColor="#bd119d" />
            <stop offset="0.15" stopColor="#8b0c73" />
            <stop offset="0.29" stopColor="#600850" />
            <stop offset="0.42" stopColor="#3e0533" />
            <stop offset="0.56" stopColor="#23031d" />
            <stop offset="0.7" stopColor="#0f010d" />
            <stop offset="0.85" stopColor="#040003" />
            <stop offset={1} />
          </radialGradient>
          <radialGradient id="radial-gradient-25" cx="1296.96" cy="-14567.58" r="10.21" xlinkHref="#radial-gradient-22" />
          <radialGradient id="Безымянный_градиент_287" data-name="Безымянный градиент 287" cx="6714.43" cy="-2160.11" r="33.2" gradientTransform="matrix(0.52, -0.5, 0.7, 0.29, -1058.29, 4405.05)" gradientUnits="userSpaceOnUse">
            <stop offset="0.13" stopColor="#9b3089" />
            <stop offset="0.3" stopColor="#a6378d" />
            <stop offset="0.64" stopColor="#c04e96" />
            <stop offset="0.99" stopColor="#e26ca5" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_286" data-name="Безымянный градиент 286" cx="77.35" cy="10439.18" r="18.18" gradientTransform="matrix(-0.85, 0.53, -0.55, -0.89, 6785.11, 9662.34)" gradientUnits="userSpaceOnUse">
            <stop offset="0.12" stopColor="#2d1b4a" />
            <stop offset={1} stopColor="#492d7c" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_286-2" cx="-1724.68" cy="9334.48" r="18.18" gradientTransform="matrix(-0.56, 0.83, -0.87, -0.59, 8056.19, 7328.94)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-2" cx="4446.11" cy="-3190.16" r="33.22" gradientTransform="matrix(0.68, -0.25, 0.52, 0.55, -418.23, 3262.07)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-3" cx="2168.78" cy="10783.5" r="18.18" gradientTransform="matrix(-0.99, 0.14, -0.15, -1.04, 4654.36, 11316.88)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-3" cx="1490.57" cy="-2985.34" r="33.24" gradientTransform="matrix(0.72, 0.05, 0.25, 0.71, 631.35, 2476.16)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-4" cx="4228.45" cy="10287.69" r="18.18" gradientTransform="matrix(-0.96, -0.28, 0.29, -1.01, 2036.35, 11962.45)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-4" cx="-1637.31" cy="-1587.8" r="33.25" gradientTransform="matrix(0.64, 0.34, -0.06, 0.75, 1908.45, 2187.79)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-5" cx="5895.87" cy="9033.11" r="18.18" gradientTransform="matrix(-0.77, -0.64, 0.67, -0.8, -619.3, 11484.64)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-5" cx="-4441.01" cy="793.38" r="33.27" gradientTransform="matrix(0.44, 0.57, -0.36, 0.67, 3220.66, 2448.3)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-6" cx="6882.55" cy="7268.24" r="18.18" gradientTransform="matrix(-0.44, -0.9, 0.94, -0.46, -2876.85, 9979.06)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-6" cx="-6353.16" cy="3705.61" r="33.24" gradientTransform="matrix(0.17, 0.7, -0.6, 0.46, 4290.12, 3204.66)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-7" cx="7032.78" cy="5243.78" r="18.18" gradientTransform="matrix(-0.03, -1, 1.05, -0.04, -4296.73, 7686.08)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-7" cx="-7124.55" cy="6688.39" r="33.28" gradientTransform="matrix(-0.13, 0.71, -0.74, 0.18, 4977.12, 4354.77)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_287-8" cx="-4941.64" cy="10622.96" r="33.23" gradientTransform="matrix(-0.61, 0.38, -0.62, -0.43, 4529.54, 6922.67)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-8" cx="2680.26" cy="1190.32" r="18.18" gradientTransform="matrix(0.94, -0.34, 0.36, 0.99, -2024.63, 227.81)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_286-9" cx="4595.36" cy="1894.93" r="18.18" gradientTransform="matrix(0.72, -0.69, 0.73, 0.75, -3752.05, 2245.76)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-9" cx="-2325.5" cy="11150.16" r="33.22" gradientTransform="matrix(-0.71, 0.1, -0.4, -0.64, 3665.62, 7907.42)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-10" cx="603.74" cy="1325.05" r="18.18" gradientTransform="matrix(1, 0.07, -0.07, 1.05, 403.57, -948.09)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-10" cx="774.72" cy="10435.27" r="33.24" gradientTransform="matrix(-0.69, -0.2, -0.1, -0.75, 2475.95, 8457.79)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-11" cx="-1233.38" cy="2254.48" r="18.18" gradientTransform="matrix(0.88, 0.47, -0.49, 0.93, 3098.13, -1036.26)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-11" cx="3825.29" cy="8591.71" r="33.25" gradientTransform="matrix(-0.55, -0.46, 0.21, -0.73, 1165.94, 8474.57)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-12" cx="-2518.96" cy="3814.72" r="18.18" gradientTransform="matrix(0.62, 0.79, -0.83, 0.64, 5596.28, -17)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-12" cx="6255.86" cy="5972.16" r="33.26" gradientTransform="matrix(-0.32, -0.65, 0.49, -0.58, -63.45, 7946.6)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-13" cx="-3029.48" cy="5765.9" r="18.18" gradientTransform="matrix(0.24, 0.97, -1.02, 0.25, 7491.76, 1924.54)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-13" cx="7729.39" cy="2986.82" r="33.23" gradientTransform="matrix(-0.02, -0.72, 0.68, -0.33, -952.07, 6984.63)" xlinkHref="#Безымянный_градиент_287" />
          <radialGradient id="Безымянный_градиент_286-14" cx="-2662.91" cy="7718.21" r="18.18" gradientTransform="matrix(-0.17, 0.98, -1.03, -0.18, 8404.79, 4463.59)" xlinkHref="#Безымянный_градиент_286" />
          <linearGradient id="Безымянный_градиент_285" data-name="Безымянный градиент 285" x1="7872.07" y1="197.72" x2="7940.06" y2="197.72" gradientTransform="matrix(0.27, -0.67, 0.76, -0.02, -1384.9, 5716.84)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#0d8abf" />
            <stop offset="0.27" stopColor="#2d96c6" />
            <stop offset="0.71" stopColor="#64b5d8" />
            <stop offset={1} stopColor="#84cee3" />
          </linearGradient>
          <radialGradient id="Безымянный_градиент_286-15" cx="6301.63" cy="3364.26" r="18.18" gradientTransform="matrix(0.38, -0.93, 0.97, 0.39, -4685.85, 4997.43)" xlinkHref="#Безымянный_градиент_286" />
          <radialGradient id="Безымянный_градиент_287-14" cx="-6584.72" cy="9206.5" r="33.24" gradientTransform="matrix(-0.4, 0.6, -0.74, -0.14, 5131.5, 5687.26)" xlinkHref="#Безымянный_градиент_287" />
          <linearGradient id="Безымянный_градиент_288" data-name="Безымянный градиент 288" x1="-4129.17" y1="3844.71" x2="-4021.79" y2="3844.71" gradientTransform="matrix(0.87, 0.5, -1, 0.58, 8303, 270.45)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#9d7ab6" />
            <stop offset="0.12" stopColor="#a17fb8" />
            <stop offset="0.3" stopColor="#ae8dc0" />
            <stop offset="0.5" stopColor="#c3a6cf" />
            <stop offset="0.58" stopColor="#ceb2d6" />
            <stop offset="0.75" stopColor="#d6c0de" />
            <stop offset={1} stopColor="#e8dced" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_289" data-name="Безымянный градиент 289" x1="-4178.4" y1="7654.05" x2="-4085.55" y2="7654.05" gradientTransform="matrix(0.87, 0.5, 1, -0.58, -3146.35, 6938.23)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#a87db5" />
            <stop offset="0.12" stopColor="#ac82b9" />
            <stop offset="0.29" stopColor="#b893c4" />
            <stop offset="0.5" stopColor="#cfb0d4" />
            <stop offset="0.58" stopColor="#d8bddb" />
            <stop offset="0.75" stopColor="#e0cce3" />
            <stop offset={1} stopColor="#f1e4f0" />
          </linearGradient>
          <radialGradient id="Безымянный_градиент_290" data-name="Безымянный градиент 290" cx="319.03" cy="9779.89" r="44.85" gradientTransform="matrix(0.72, 0, 0, -1.27, 698.54, 12872.27)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#9572b0" />
            <stop offset={1} stopColor="#684596" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_291" data-name="Безымянный градиент 291" cx="536.41" cy="13707.72" r="50.79" gradientTransform="matrix(0.78, 0, 0, -0.78, 509.04, 11185.94)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#b88cc0" />
            <stop offset="0.22" stopColor="#856985" />
            <stop offset="0.5" stopColor="#53434f" />
            <stop offset="0.73" stopColor="#30282b" />
            <stop offset="0.9" stopColor="#1b1916" />
            <stop offset={1} stopColor="#161410" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_292" data-name="Безымянный градиент 292" cx="-691.15" cy="-1739.74" r="10.42" gradientTransform="translate(1420.49 1712.85) scale(0.66 0.72)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fceba7" />
            <stop offset={1} stopColor="#f8a88d" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_294" data-name="Безымянный градиент 294" cx="194.21" cy="51.41" r="13.49" gradientTransform="translate(820.55 426.55) scale(0.8 0.88)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity="0.2" />
            <stop offset="0.03" stopColor="#fff" stopOpacity="0.21" />
            <stop offset={1} stopColor="#fff" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_294-2" cx="-691.77" cy="-1741.11" r="6.49" gradientTransform="translate(1420.49 1712.85) scale(0.66 0.72)" xlinkHref="#Безымянный_градиент_294" />
          <radialGradient id="Безымянный_градиент_295" data-name="Безымянный градиент 295" cx="786.48" cy="-14068.16" r="12.54" gradientTransform="translate(323.68 5402.79) scale(0.77 0.35)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopOpacity="0.5" />
            <stop offset={1} stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="Безымянный_градиент_302" data-name="Безымянный градиент 302" x1="977.64" y1="10772.15" x2="990.4" y2="10772.15" gradientTransform="matrix(1, 0, 0, -1, -54.82, 11204.7)" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#c1a1cc" />
            <stop offset="0.05" stopColor="#c7abd2" />
            <stop offset="0.11" stopColor="#d8c5df" />
            <stop offset="0.2" stopColor="#f6f2f8" />
            <stop offset="0.22" stopColor="#fff" />
            <stop offset="0.25" stopColor="#f8f5fa" />
            <stop offset="0.3" stopColor="#e7dbec" />
            <stop offset="0.36" stopColor="#ceb2d6" />
            <stop offset="0.42" stopColor="#b195c5" />
            <stop offset="0.49" stopColor="#987eb9" />
            <stop offset="0.56" stopColor="#8a6eb1" />
            <stop offset="0.61" stopColor="#856aae" />
            <stop offset="0.75" stopColor="#9072b2" />
            <stop offset={1} stopColor="#ac85bc" />
            <stop offset={1} stopColor="#ac85bc" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_330" data-name="Безымянный градиент 330" x1="7857.18" y1="10784.36" x2="7867.74" y2="10773.04" gradientTransform="translate(8794.25 11204.7) rotate(180)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#9d7ab6" />
            <stop offset="0.14" stopColor="#a481ba" />
            <stop offset="0.34" stopColor="#b192c3" />
            <stop offset="0.57" stopColor="#ccb0d5" />
            <stop offset="0.58" stopColor="#ceb2d6" />
            <stop offset="0.76" stopColor="#d7c2df" />
            <stop offset={1} stopColor="#e8dced" />
          </linearGradient>
          <radialGradient id="Безымянный_градиент_304" data-name="Безымянный градиент 304" cx="-369.89" cy="13239.37" r="7.29" gradientTransform="matrix(0.66, 0, 0, -0.72, 1169.63, 9951.41)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity="0.5" />
            <stop offset={1} stopColor="#010101" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="Безымянный_градиент_302-2" x1="979.99" y1="10785.31" x2="988.08" y2="10785.31" xlinkHref="#Безымянный_градиент_302" />
          <linearGradient id="Безымянный_градиент_302-3" x1="976.03" y1="10799.2" x2={992} y2="10799.2" xlinkHref="#Безымянный_градиент_302" />
          <linearGradient id="Безымянный_градиент_330-2" x1="7855.21" y1="10814.47" x2="7868.43" y2="10800.3" xlinkHref="#Безымянный_градиент_330" />
          <linearGradient id="Безымянный_градиент_302-4" x1="981.12" y1="10803.75" x2="986.97" y2="10803.75" xlinkHref="#Безымянный_градиент_302" />
          <linearGradient id="Безымянный_градиент_330-3" x1="7861.42" y1="10809.35" x2="7866.26" y2="10804.16" xlinkHref="#Безымянный_градиент_330" />
          <radialGradient id="Безымянный_градиент_304-2" cx="-370.69" cy="13277.07" r="9.13" xlinkHref="#Безымянный_градиент_304" />
          <clipPath id="clip-path-6">
            <path d="M982.18,388.31h0c-.2-18.57-23.81-33.58-52.93-33.58s-52.73,15-52.93,33.58h0v29c0,18.68,23.7,33.82,53,33.82s52.95-15.14,52.95-33.82c0-.16,0-.31,0-.47h0V388.31Zm-44.83,16.75h0v.07c0,2.86-3.63,5.18-8.11,5.18s-8.11-2.32-8.11-5.18v-4.44h0c0-2.84,3.65-5.15,8.11-5.15s8.08,2.3,8.11,5.15h0Z" fill="none" />
          </clipPath>
          <linearGradient id="Безымянный_градиент_330-4" x1="10937.29" y1="10815.04" x2="10988.15" y2="10826.45" gradientTransform="translate(11990.79 11124.62) rotate(179.53)" xlinkHref="#Безымянный_градиент_330" />
          <linearGradient id="Безымянный_градиент_330-5" x1="10975.7" y1="10847.71" x2="10962.2" y2="10821.97" gradientTransform="translate(11990.79 11124.62) rotate(179.53)" xlinkHref="#Безымянный_градиент_330" />
          <radialGradient id="Безымянный_градиент_332" data-name="Безымянный градиент 332" cx="6.64" cy="10021.5" r="6.13" gradientTransform="matrix(0.77, -0.01, -0.01, -1.34, 1054.88, 13833.73)" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#fff" />
            <stop offset="0.01" stopColor="#fff" />
            <stop offset="0.1" stopColor="#e9ddec" />
            <stop offset="0.19" stopColor="#d9c5df" />
            <stop offset="0.27" stopColor="#d1b7d7" />
            <stop offset="0.34" stopColor="#ceb2d6" />
            <stop offset="0.43" stopColor="#bfa0cc" />
            <stop offset="0.59" stopColor="#a684bc" />
            <stop offset="0.69" stopColor="#9d7ab6" />
            <stop offset="0.81" stopColor="#a17eb8" />
            <stop offset="0.89" stopColor="#a784bc" />
            <stop offset={1} stopColor="#9e7bb6" />
          </radialGradient>
          <linearGradient id="Безымянный_градиент_330-6" x1="14697.33" y1="4217.5" x2="14748.19" y2="4228.9" gradientTransform="matrix(0.04, -1, 1, 0.04, -3826.51, 14969.57)" xlinkHref="#Безымянный_градиент_330" />
          <linearGradient id="Безымянный_градиент_330-7" x1="14736.08" y1="4250.13" x2="14722.58" y2="4224.39" gradientTransform="matrix(0.04, -1, 1, 0.04, -3826.51, 14969.57)" xlinkHref="#Безымянный_градиент_330" />
          <radialGradient id="Безымянный_градиент_332-2" cx="-47.24" cy="9981.05" r="6.13" gradientTransform="matrix(0.77, 0, 0, -1.34, 985.97, 13823.95)" xlinkHref="#Безымянный_градиент_332" />
          <linearGradient id="Безымянный_градиент_330-8" x1="8121.15" y1={699} x2="8172.01" y2="710.4" gradientTransform="translate(-7187.42 -660.93) rotate(2.58)" xlinkHref="#Безымянный_градиент_330" />
          <linearGradient id="Безымянный_градиент_330-9" x1="8159.69" y1="731.73" x2="8146.18" y2="705.99" gradientTransform="translate(-7187.42 -660.93) rotate(2.58)" xlinkHref="#Безымянный_градиент_330" />
          <radialGradient id="Безымянный_градиент_332-3" cx="-103.63" cy="9981.05" r="6.13" gradientTransform="matrix(0.77, 0, 0, -1.34, 985.97, 13823.95)" xlinkHref="#Безымянный_градиент_332" />
          <linearGradient id="Безымянный_градиент_330-10" x1="4611.48" y1="7153.65" x2="4662.34" y2="7165.05" gradientTransform="translate(8187.51 -4074.73) rotate(91.35)" xlinkHref="#Безымянный_градиент_330" />
          <linearGradient id="Безымянный_градиент_330-11" x1="4650.26" y1="7186.3" x2="4636.75" y2="7160.56" gradientTransform="translate(8187.51 -4074.73) rotate(91.35)" xlinkHref="#Безымянный_градиент_330" />
          <radialGradient id="Безымянный_градиент_332-4" cx="-102.85" cy="10013.39" r="6.13" gradientTransform="matrix(0.77, 0, 0, -1.34, 985.97, 13823.95)" xlinkHref="#Безымянный_градиент_332" />
          <radialGradient id="Безымянный_градиент_332-5" cx="-368.25" cy={13290} r="6.92" gradientTransform="matrix(0.66, 0, 0, -0.72, 1169.63, 9951.41)" xlinkHref="#Безымянный_градиент_332" />
          <radialGradient id="radial-gradient-26" cx="976.45" cy="-6513.5" r="49.5" gradientTransform="translate(-1003.92 4343.4) scale(1.18 0.6)" gradientUnits="userSpaceOnUse">
            <stop offset="0.19" stopColor="#5f5c5d" />
            <stop offset={1} stopOpacity={0} />
          </radialGradient>
          <linearGradient id="linear-gradient-92" x1="149.24" y1="402.82" x2="242.73" y2="402.82" gradientTransform="translate(-54.82)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#45108a" />
            <stop offset="0.14" stopColor="#4d1299" />
            <stop offset="0.32" stopColor="#5915b3" />
            <stop offset="0.61" stopColor="#25054d" />
            <stop offset="0.83" stopColor="#3b0c75" />
            <stop offset="0.99" stopColor="#2f0960" />
          </linearGradient>
          <linearGradient id="linear-gradient-93" x1="93.97" y1="412.27" x2="93.98" y2="412.27" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#6b24d6" />
            <stop offset="0.09" stopColor="#7733dc" />
            <stop offset="0.2" stopColor="#975ced" />
            <stop offset="0.25" stopColor="#a56ef4" />
            <stop offset="0.56" stopColor="#6b24d6" />
            <stop offset="0.86" stopColor="#8f52e9" />
            <stop offset={1} stopColor="#6b24d6" />
          </linearGradient>
          <linearGradient id="linear-gradient-94" x1="188.95" y1="412.27" x2="188.97" y2="412.27" xlinkHref="#linear-gradient-93" />
          <linearGradient id="linear-gradient-95" x1="94.42" y1="430.37" x2="187.91" y2="430.37" xlinkHref="#linear-gradient-93" />
          <linearGradient id="linear-gradient-96" x1="94.42" y1="441.5" x2="187.91" y2="441.5" xlinkHref="#linear-gradient-93" />
          <linearGradient id="New_Gradient_Swatch_copy_25-28" x1="5403.75" y1="297.73" x2="5479.01" y2="378.42" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <radialGradient id="Radial_Gradient_1-31" cx="126.22" cy="381.38" r="35.03" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-97" x1="93.97" y1="367.55" x2="93.98" y2="367.55" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-92" />
          <linearGradient id="linear-gradient-98" x1="188.95" y1="367.55" x2="188.97" y2="367.55" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-92" />
          <linearGradient id="New_Gradient_Swatch_copy_16" data-name="New Gradient Swatch copy 16" x1="76.28" y1="275.53" x2="163.88" y2="369.46" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#1bb0d4" />
            <stop offset="0.2" stopColor="#1ebfdd" />
            <stop offset="0.53" stopColor="#27e8f6" />
            <stop offset="0.63" stopColor="#2af6ff" />
            <stop offset="0.87" stopColor="#1bb0d4" />
          </linearGradient>
          <linearGradient id="linear-gradient-99" x1="149.24" y1="353.57" x2="242.73" y2="353.57" xlinkHref="#linear-gradient-92" />
          <linearGradient id="New_Gradient_Swatch_copy_25-29" x1="5403.75" y1="270.47" x2="5479.01" y2="351.16" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <radialGradient id="Radial_Gradient_1-32" cx="126.22" cy="354.12" r="35.03" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-100" x1="154.7" y1="338.85" x2="237.35" y2="338.85" gradientTransform="translate(-54.82)" xlinkHref="#linear-gradient-93" />
          <linearGradient id="New_Gradient_Swatch_copy_25-30" x1="5410.22" y1="271.48" x2="5476.75" y2="342.81" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <radialGradient id="Radial_Gradient_1-33" cx="127.99" cy="345.43" r="30.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_25-31" x1="139.71" y1="331.32" x2="151.14" y2="289.25" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-101" x1="162.7" y1="320.76" x2="119.3" y2="320.76" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-92" />
          <linearGradient id="linear-gradient-102" x1="181.53" y1="282.89" x2="102.35" y2="282.89" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#1bb0d4" />
            <stop offset="0.18" stopColor="#21cbe5" />
            <stop offset="0.42" stopColor="#27eaf8" />
            <stop offset="0.56" stopColor="#2af6ff" />
            <stop offset="0.65" stopColor="#28eefa" />
            <stop offset="0.79" stopColor="#23d7ec" />
            <stop offset="0.96" stopColor="#1cb3d6" />
            <stop offset="0.97" stopColor="#1bb0d4" />
          </linearGradient>
          <radialGradient id="New_Gradient_Swatch_copy_14" data-name="New Gradient Swatch copy 14" cx="127.59" cy="277.12" r="76.69" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#2af6ff" />
            <stop offset={1} stopColor="#138bbd" />
          </radialGradient>
          <linearGradient id="Безымянный_градиент_21" data-name="Безымянный градиент 21" x1="96.71" y1="293.65" x2="128.99" y2="293.65" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#171717" />
            <stop offset="0.18" stopColor="#0f0f0f" />
            <stop offset="0.58" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_20" data-name="Безымянный градиент 20" x1="97.61" y1="293.7" x2={128} y2="293.7" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#2e2e2e" />
            <stop offset="0.13" stopColor="#222" />
            <stop offset="0.41" stopColor="#0f0f0f" />
            <stop offset="0.7" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_19" data-name="Безымянный градиент 19" x1="98.47" y1="293.75" x2="127.16" y2="293.75" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#464646" />
            <stop offset="0.06" stopColor="#3d3d3d" />
            <stop offset="0.29" stopColor="#222" />
            <stop offset="0.52" stopColor="#0f0f0f" />
            <stop offset="0.75" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_18" data-name="Безымянный градиент 18" x1="99.18" y1="293.79" x2="126.7" y2="293.79" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#5d5d5d" />
            <stop offset="0.18" stopColor="#3d3d3d" />
            <stop offset="0.38" stopColor="#222" />
            <stop offset="0.58" stopColor="#0f0f0f" />
            <stop offset="0.78" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_17" data-name="Безымянный градиент 17" x1="99.89" y1="293.84" x2="126.28" y2="293.84" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#747474" />
            <stop offset="0.09" stopColor="#606060" />
            <stop offset="0.26" stopColor="#3d3d3d" />
            <stop offset="0.44" stopColor="#222" />
            <stop offset="0.62" stopColor="#0f0f0f" />
            <stop offset="0.81" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_16" data-name="Безымянный градиент 16" x1="100.59" y1="293.93" x2="125.86" y2="293.93" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#8b8b8b" />
            <stop offset={0} stopColor="#8a8a8a" />
            <stop offset="0.16" stopColor="#606060" />
            <stop offset="0.32" stopColor="#3d3d3d" />
            <stop offset="0.49" stopColor="#232323" />
            <stop offset="0.65" stopColor="#0f0f0f" />
            <stop offset="0.82" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_15" data-name="Безымянный градиент 15" x1="101.29" y1="293.97" x2="125.44" y2="293.97" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#a2a2a2" />
            <stop offset="0.07" stopColor="#8a8a8a" />
            <stop offset="0.22" stopColor="#606060" />
            <stop offset="0.37" stopColor="#3e3e3e" />
            <stop offset="0.52" stopColor="#232323" />
            <stop offset="0.68" stopColor="#0f0f0f" />
            <stop offset="0.83" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_14" data-name="Безымянный градиент 14" x1="101.99" y1="294.02" x2="125.01" y2="294.02" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#b9b9b9" />
            <stop offset="0.13" stopColor="#8a8a8a" />
            <stop offset="0.27" stopColor="#606060" />
            <stop offset="0.41" stopColor="#3e3e3e" />
            <stop offset="0.55" stopColor="#232323" />
            <stop offset="0.7" stopColor="#0f0f0f" />
            <stop offset="0.85" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_13" data-name="Безымянный градиент 13" x1="102.7" y1="294.06" x2="124.59" y2="294.06" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#d1d1d1" />
            <stop offset="0.05" stopColor="#bdbdbd" />
            <stop offset="0.18" stopColor="#8b8b8b" />
            <stop offset="0.31" stopColor="#606060" />
            <stop offset="0.44" stopColor="#3e3e3e" />
            <stop offset="0.58" stopColor="#232323" />
            <stop offset="0.71" stopColor="#0f0f0f" />
            <stop offset="0.85" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_12" data-name="Безымянный градиент 12" x1="103.4" y1="294.1" x2="124.16" y2="294.1" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#e8e8e8" />
            <stop offset="0.09" stopColor="#bdbdbd" />
            <stop offset="0.22" stopColor="#8b8b8b" />
            <stop offset="0.34" stopColor="#606060" />
            <stop offset="0.47" stopColor="#3e3e3e" />
            <stop offset="0.6" stopColor="#232323" />
            <stop offset="0.73" stopColor="#0f0f0f" />
            <stop offset="0.86" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="linear-gradient-103" x1="104.1" y1="294.13" x2="123.74" y2="294.13" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset="0.02" stopColor="#f7f7f7" />
            <stop offset="0.13" stopColor="#bebebe" />
            <stop offset="0.25" stopColor="#8b8b8b" />
            <stop offset="0.37" stopColor="#606060" />
            <stop offset="0.49" stopColor="#3e3e3e" />
            <stop offset="0.62" stopColor="#232323" />
            <stop offset="0.74" stopColor="#0f0f0f" />
            <stop offset="0.87" stopColor="#040404" />
            <stop offset={1} />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_21-2" x1="-372.7" y1="269.74" x2="-339.79" y2="269.74" gradientTransform="translate(453.88 25.26) scale(0.83 1)" xlinkHref="#Безымянный_градиент_21" />
          <linearGradient id="Безымянный_градиент_20-2" x1="-1148.13" y1="245.18" x2="-1109.32" y2="245.18" gradientTransform="translate(907.77 50.52) scale(0.66 0.99)" xlinkHref="#Безымянный_градиент_20" />
          <linearGradient id="Безымянный_градиент_19-2" x1="-2449.4" y1="220.47" x2="-2400.32" y2="220.47" gradientTransform="translate(1361.65 75.78) scale(0.5 0.99)" xlinkHref="#Безымянный_градиент_19" />
          <linearGradient id="Безымянный_градиент_18-2" x1="-5085.76" y1="195.61" x2="-5014.58" y2="195.61" gradientTransform="translate(1815.53 101.04) scale(0.33 0.99)" xlinkHref="#Безымянный_градиент_18" />
          <linearGradient id="Безымянный_градиент_17-2" x1="-13262.56" y1="170.6" x2="-13122.57" y2="170.6" gradientTransform="translate(2269.41 126.3) scale(0.16 0.99)" xlinkHref="#Безымянный_градиент_17" />
          <linearGradient id="Безымянный_градиент_16-2" x1="313503.71" y1="145.48" x2="316147.28" y2="145.48" gradientTransform="matrix(-0.01, 0, 0, 0.98, 2723.3, 151.57)" xlinkHref="#Безымянный_градиент_16" />
          <linearGradient id="Безымянный_градиент_15-2" x1="17014.3" y1="120.17" x2="17130.6" y2="120.17" gradientTransform="matrix(-0.18, 0, 0, 0.98, 3177.18, 176.83)" xlinkHref="#Безымянный_градиент_15" />
          <linearGradient id="Безымянный_градиент_14-2" x1="10028.13" y1="94.7" x2="10084.87" y2="94.7" gradientTransform="matrix(-0.34, 0, 0, 0.98, 3631.06, 202.09)" xlinkHref="#Безымянный_градиент_14" />
          <linearGradient id="Безымянный_градиент_13-2" x1="7625.67" y1="69.08" x2="7661.93" y2="69.08" gradientTransform="matrix(-0.51, 0, 0, 0.97, 4084.94, 227.35)" xlinkHref="#Безымянный_градиент_13" />
          <linearGradient id="Безымянный_градиент_12-2" x1="6410.11" y1="43.3" x2="6436.01" y2="43.3" gradientTransform="matrix(-0.68, 0, 0, 0.97, 4538.83, 252.61)" xlinkHref="#Безымянный_градиент_12" />
          <linearGradient id="New_Gradient_Swatch_copy_40" data-name="New Gradient Swatch copy 40" x1="5676.13" y1="17.37" x2="5695.77" y2="17.37" gradientTransform="matrix(-0.85, 0, 0, 0.97, 4992.71, 277.87)" xlinkHref="#linear-gradient-103" />
          <linearGradient id="linear-gradient-104" x1="-36.15" y1="399.69" x2="-41.66" y2="390.15" gradientTransform="translate(147.87)" xlinkHref="#linear-gradient-6" />
          <linearGradient id="New_Gradient_Swatch_copy_10-5" x1="-41.75" y1="398.94" x2="-36.88" y2="390.54" gradientTransform="translate(147.87)" xlinkHref="#New_Gradient_Swatch_copy_10" />
          <linearGradient id="New_Gradient_Swatch_copy_18" data-name="New Gradient Swatch copy 18" x1="-38.54" y1="400.17" x2="-43.27" y2="391.98" gradientTransform="translate(147.87)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#9f19ab" />
            <stop offset="0.16" stopColor="#ae25b1" />
            <stop offset="0.41" stopColor="#d744bf" />
            <stop offset="0.63" stopColor="#ff63ce" />
            <stop offset="0.87" stopColor="#dc48c1" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_9-14" x1="-43.73" y1="399.74" x2="-39.55" y2="392.54" gradientTransform="translate(147.87)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <radialGradient id="Radial_Gradient_1-34" cx="-40.73" cy="396.06" r="3.4" gradientTransform="translate(147.87)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-105" x1="-36.15" y1="413.7" x2="-41.66" y2="404.16" gradientTransform="translate(147.87)" xlinkHref="#linear-gradient-6" />
          <linearGradient id="New_Gradient_Swatch_copy_10-6" x1="-41.75" y1="412.95" x2="-36.88" y2="404.55" gradientTransform="translate(147.87)" xlinkHref="#New_Gradient_Swatch_copy_10" />
          <linearGradient id="New_Gradient_Swatch_copy_16-2" x1="-38.54" y1="414.18" x2="-43.27" y2="405.99" gradientTransform="translate(147.87)" xlinkHref="#New_Gradient_Swatch_copy_16" />
          <linearGradient id="New_Gradient_Swatch_copy_7" data-name="New Gradient Swatch copy 7" x1="-43.73" y1="413.75" x2="-39.55" y2="406.55" gradientTransform="translate(147.87)" xlinkHref="#linear-gradient-3" />
          <radialGradient id="Radial_Gradient_1-35" cx="-40.73" cy="410.06" r="3.4" gradientTransform="translate(147.87)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-27" cx="-406.19" cy="262.79" r="32.62" gradientTransform="translate(459.2) scale(0.82 1)" xlinkHref="#linear-gradient-103" />
          <radialGradient id="radial-gradient-28" cx="-4209.18" cy="1984.63" r="15.76" gradientTransform="matrix(0, 0.82, -1, 0, 2128.36, 3735.87)" xlinkHref="#linear-gradient-103" />
          <radialGradient id="radial-gradient-29" cx="-5983.87" cy="3981.64" r="29.51" gradientTransform="translate(2490.51 -6003.34) scale(0.39 1.58)" xlinkHref="#linear-gradient-24" />
          <radialGradient id="radial-gradient-30" cx="-6062.58" cy="4025.27" r="29.98" gradientTransform="translate(2490.51 -6003.34) scale(0.39 1.58)" xlinkHref="#linear-gradient-24" />
          <linearGradient id="New_Gradient_Swatch_copy_25-32" x1="473.05" y1="678.55" x2="623.99" y2="633.35" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-33" x1="316.49" y1="696.84" x2="514.99" y2="652.34" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-34" x1="473.05" y1="689.39" x2="623.99" y2="644.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-35" x1="316.49" y1="707.69" x2="514.99" y2="663.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-106" x1="512.37" y1="529.5" x2="432.89" y2="680.97" xlinkHref="#linear-gradient-25" />
          <linearGradient id="New_Gradient_Swatch_copy_26-5" x1="437.38" y1="676.98" x2="579.7" y2="634.36" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="New_Gradient_Swatch_copy_7-2" data-name="New Gradient Swatch copy 7" x1="324.53" y1="684.1" x2="511.72" y2="642.14" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="New_Gradient_Swatch_copy_25-36" x1="471.83" y1="649.1" x2="638.75" y2="599.12" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-37" x1="453.72" y1="645.3" x2="515.32" y2="645.3" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-38" x1="306.14" y1="669.35" x2="525.8" y2="620.11" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-39" x1="382.66" y1="645.27" x2="444.5" y2="645.27" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-40" x1="522.87" y1="464.54" x2="443.4" y2="616.01" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-107" x1="453.81" y1="690.84" x2="384.69" y2="624.89" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-8" />
          <linearGradient id="linear-gradient-108" x1="358.04" y1="646.14" x2="427.9" y2="654.11" xlinkHref="#linear-gradient-24" />
          <linearGradient id="New_Gradient_Swatch_copy_26-6" x1="448.97" y1="562.29" x2="448.97" y2="629.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <radialGradient id="Radial_Gradient_1-36" cx="448.61" cy="637.88" r="32.95" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-109" x1="448.97" y1="638.63" x2="448.97" y2="486.73" xlinkHref="#linear-gradient-29" />
          <radialGradient id="radial-gradient-31" cx="349.94" cy="-137.56" r="10.28" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#eeebf2" />
            <stop offset={1} stopColor="#d4d1d8" />
          </radialGradient>
          <linearGradient id="linear-gradient-110" x1="525.47" y1="546.04" x2="568.98" y2="546.04" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#1bb0d4" />
            <stop offset="0.08" stopColor="#1ebfdd" />
            <stop offset="0.22" stopColor="#27e8f6" />
            <stop offset="0.27" stopColor="#2af6ff" />
            <stop offset="0.75" stopColor="#138bbd" />
            <stop offset="0.89" stopColor="#1ebfdd" />
            <stop offset={1} stopColor="#1aaad1" />
          </linearGradient>
          <radialGradient id="radial-gradient-32" cx="377.14" cy="-137.71" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="linear-gradient-111" x1="525.47" y1="546.65" x2="568.98" y2="546.65" xlinkHref="#linear-gradient-110" />
          <radialGradient id="radial-gradient-33" cx="373.19" cy="-128.83" r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-34" cx="353.95" cy="-128.84" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="linear-gradient-112" x1="525.47" y1="549.63" x2="568.98" y2="549.63" xlinkHref="#linear-gradient-110" />
          <radialGradient id="New_Gradient_Swatch_copy_14-2" cx="-6738.16" cy="1261.88" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-35" cx="-6711.59" cy="1240.4" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-3" cx="-6738.16" cy="1261.88" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-36" cx="-6715.66" cy="1261.19" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-4" cx="-6738.16" cy="1261.88" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-37" cx="-6710.09" cy="1255.62" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-38" cx="-6730.89" cy="1259.69" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-5" cx="-6738.16" cy="1261.88" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="New_Gradient_Swatch_copy_14-6" cx="-6738.16" cy="1261.88" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="New_Gradient_Swatch_copy_14-7" cx="-6738.16" cy="1261.88" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-39" cx="-6726.81" cy="1238.9" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-40" cx="-6732.38" cy="1244.47" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-8" cx="-6738.16" cy="1261.88" r="65.05" gradientTransform="matrix(-0.44, 0.7, -0.44, -0.69, -1827.71, 6088.26)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-41" cx="350.69" cy="-136.55" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-37" cx="-121.63" cy="-1935.09" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-42" cx="390.52" cy="-101.2" r="10.28" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24" data-name="New Gradient Swatch copy 24" x1="558.04" y1="578.05" x2="601.55" y2="578.05" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#c211a1" />
            <stop offset="0.05" stopColor="#c518a5" />
            <stop offset="0.13" stopColor="#ce2daf" />
            <stop offset="0.14" stopColor="#cf30b1" />
            <stop offset="0.23" stopColor="#ff63ce" />
            <stop offset="0.28" stopColor="#eb48bf" />
            <stop offset="0.38" stopColor="#c211a1" />
            <stop offset="0.54" stopColor="#a919ab" />
            <stop offset="0.62" stopColor="#ac1bab" />
            <stop offset="0.7" stopColor="#b723ab" />
            <stop offset="0.77" stopColor="#c92faa" />
            <stop offset="0.82" stopColor="#dc3daa" />
            <stop offset="0.93" stopColor="#cd24a5" />
            <stop offset={1} stopColor="#c211a1" />
          </linearGradient>
          <radialGradient id="radial-gradient-43" cx="417.72" cy="-101.35" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-2" x1="558.04" y1="578.66" x2="601.55" y2="578.66" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-44" cx="413.77" cy="-92.47" r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-45" cx="394.53" cy="-92.48" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-3" x1="558.04" y1="581.64" x2="601.55" y2="581.64" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-2" cx="-6678.37" cy="1274.89" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-46" cx="-6651.8" cy="1253.4" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-3" cx="-6678.37" cy="1274.89" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-47" cx="-6655.88" cy="1274.2" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-4" cx="-6678.37" cy="1274.89" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-48" cx="-6650.3" cy="1268.62" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-49" cx="-6671.1" cy="1272.7" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-5" cx="-6678.37" cy="1274.89" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-6" cx="-6678.37" cy="1274.89" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-7" cx="-6678.37" cy="1274.89" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-50" cx="-6667.02" cy="1251.91" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-51" cx="-6672.59" cy="1257.48" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-8" cx="-6678.37" cy="1274.89" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-52" cx="391.27" cy="-100.19" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-38" cx="-71.94" cy="-1890.57" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-53" cx="390.52" cy="-109.03" r="10.28" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-4" x1="558.04" y1="571.16" x2="601.55" y2="571.16" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-54" cx="417.72" cy="-109.18" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-5" x1="558.04" y1="571.77" x2="601.55" y2="571.77" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-55" cx="413.77" cy="-100.3" r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-56" cx="394.53" cy="-100.31" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-6" x1="558.04" y1="574.75" x2="601.55" y2="574.75" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-9" cx="-6686.2" cy="1267.01" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-57" cx="-6659.62" cy="1245.53" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-10" cx="-6686.2" cy="1267.01" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-58" cx="-6663.7" cy="1266.32" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-11" cx="-6686.2" cy="1267.01" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-59" cx="-6658.13" cy="1260.75" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-60" cx="-6678.92" cy="1264.83" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-12" cx="-6686.2" cy="1267.01" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-13" cx="-6686.2" cy="1267.01" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-14" cx="-6686.2" cy="1267.01" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-61" cx="-6674.85" cy="1244.03" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-62" cx="-6680.42" cy="1249.61" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-15" cx="-6686.2" cy="1267.01" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-63" cx="391.27" cy="-108.02" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-39" cx="-71.94" cy="-1900.15" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-64" cx="390.52" cy="-116.73" r="10.28" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-7" x1="558.04" y1="564.38" x2="601.55" y2="564.38" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-65" cx="417.72" cy="-116.88" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-8" x1="558.04" y1="564.99" x2="601.55" y2="564.99" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-66" cx="413.77" cy={-108} r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-67" cx="394.53" cy="-108.01" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-9" x1="558.04" y1="567.97" x2="601.55" y2="567.97" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-16" cx="-6693.9" cy="1259.26" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-68" cx="-6667.33" cy="1237.78" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-17" cx="-6693.9" cy="1259.26" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-69" cx="-6671.41" cy="1258.57" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-18" cx="-6693.9" cy="1259.26" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-70" cx="-6665.83" cy={1253} r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-71" cx="-6686.63" cy="1257.08" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-19" cx="-6693.9" cy="1259.26" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-20" cx="-6693.9" cy="1259.26" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-21" cx="-6693.9" cy="1259.26" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-72" cx="-6682.55" cy="1236.28" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-73" cx="-6688.12" cy="1241.86" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-22" cx="-6693.9" cy="1259.26" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-74" cx="391.27" cy="-115.72" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-40" cx="-71.94" cy="-1909.58" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-75" cx="390.52" cy="-124.55" r="10.28" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-10" x1="558.04" y1="557.49" x2="601.55" y2="557.49" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-76" cx="417.72" cy="-124.71" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-11" x1="558.04" y1="558.1" x2="601.55" y2="558.1" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-77" cx="413.77" cy="-115.83" r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-78" cx="394.53" cy="-115.84" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-12" x1="558.04" y1="561.08" x2="601.55" y2="561.08" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-23" cx="-6701.73" cy="1251.39" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-79" cx="-6675.15" cy="1229.9" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-24" cx="-6701.73" cy="1251.39" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-80" cx="-6679.23" cy="1250.7" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-25" cx="-6701.73" cy="1251.39" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-81" cx="-6673.66" cy="1245.12" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-82" cx="-6694.45" cy="1249.2" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-26" cx="-6701.73" cy="1251.39" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-27" cx="-6701.73" cy="1251.39" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-28" cx="-6701.73" cy="1251.39" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-83" cx="-6690.37" cy="1228.41" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-84" cx="-6695.95" cy="1233.98" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-29" cx="-6701.73" cy="1251.39" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-85" cx="391.27" cy="-123.54" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-41" cx="-71.94" cy="-1919.16" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-86" cx="390.52" cy="-132.21" r="10.28" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-13" x1="558.04" y1="550.75" x2="601.55" y2="550.75" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-87" cx="417.72" cy="-132.37" r="10.35" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-14" x1="558.04" y1="551.36" x2="601.55" y2="551.36" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-88" cx="413.77" cy="-123.49" r="8.68" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-89" cx="394.53" cy="-123.5" r="8.64" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-15" x1="558.04" y1="554.34" x2="601.55" y2="554.34" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-30" cx="-6709.39" cy="1243.68" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-90" cx="-6682.81" cy="1222.19" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-31" cx="-6709.39" cy="1243.68" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-91" cx="-6686.89" cy="1242.99" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-32" cx="-6709.39" cy="1243.68" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-92" cx="-6681.32" cy="1237.41" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-93" cx="-6702.11" cy="1241.49" r="9.65" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-33" cx="-6709.39" cy="1243.68" r="65.06" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-34" cx="-6709.39" cy="1243.68" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-35" cx="-6709.39" cy="1243.68" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-94" cx="-6698.03" cy="1220.7" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-95" cx="-6703.61" cy="1226.27" r="8.81" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-36" cx="-6709.39" cy="1243.68" r="65.05" gradientTransform="matrix(0.7, 0.44, -0.69, 0.44, 6082.62, 2948.89)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-96" cx="391.27" cy="-131.21" r="44.86" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-42" cx="-71.94" cy="-1928.54" r="24.38" gradientTransform="translate(619.59 1938.48) scale(0.66 0.72)" xlinkHref="#Radial_Gradient_1" />
          <clipPath id="clip-path-7">
            <polygon points="448.58 638.63 506.73 605.18 504.66 459.6 451.48 431.89 392.87 462.42 391.22 605.23 448.58 638.63" fill="none" />
          </clipPath>
          <clipPath id="clip-path-8">
            <polygon points="874.22 222.66 911.05 201.47 910.78 90.48 874.18 77.29 837.59 90.48 837.87 201.5 874.22 222.66" fill="none" />
          </clipPath>
          <linearGradient id="linear-gradient-113" x1="853.11" y1="474.82" x2="797.7" y2="580.43" xlinkHref="#linear-gradient-25" />
          <linearGradient id="linear-gradient-114" x1="853.11" y1="416.9" x2="797.7" y2="522.52" xlinkHref="#linear-gradient-25" />
          <linearGradient id="New_Gradient_Swatch_copy_26-7" x1="801.17" y1="576.86" x2="900.41" y2="547.15" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="linear-gradient-115" x1="722.49" y1="581.83" x2="853.01" y2="552.57" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="New_Gradient_Swatch_copy_25-41" x1="820.7" y1="587.38" x2="948.12" y2="549.23" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-42" x1="701.75" y1="601.99" x2="866.32" y2="565.1" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-43" x1="818.01" y1="595.2" x2="909.08" y2="567.93" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-44" x1="734.57" y1="614.56" x2="854.63" y2="587.65" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-45" x1="833.97" y1="628.85" x2="952.29" y2="593.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-116" x1="704.52" y1="592.22" x2="820.66" y2="640.97" gradientUnits="userSpaceOnUse">
            <stop offset="0.02" stopColor="#45108a" />
            <stop offset="0.39" stopColor="#3d065f" />
            <stop offset={1} stopColor="#12054e" />
            <stop offset={1} stopColor="#10054d" />
          </linearGradient>
          <linearGradient id="New_Gradient_Swatch_copy_26-8" x1="827.39" y1="607.03" x2="960.66" y2="567.13" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="New_Gradient_Swatch_copy_25-47" x1="708.93" y1="658.74" x2="827.27" y2="632.21" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-117" x1="704.39" y1="592.15" x2="820.68" y2="640.97" xlinkHref="#linear-gradient-116" />
          <radialGradient id="radial-gradient-97" cx="784.57" cy="603.11" r="18.53" xlinkHref="#linear-gradient-24" />
          <linearGradient id="New_Gradient_Swatch_copy_25-49" x1="830.11" y1="616.09" x2="963.37" y2="576.18" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-50" x1="706.26" y1="645.41" x2="881.86" y2="606.05" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-119" x1="709.7" y1="580.46" x2="910.52" y2="664.76" xlinkHref="#linear-gradient-116" />
          <linearGradient id="New_Gradient_Swatch_copy_25-53" x1="5996.45" y1="537.12" x2="6087.52" y2="509.85" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-54" x1="5913.01" y1="556.48" x2="6033.07" y2="529.56" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-55" x1="6012.35" y1="570.78" x2="6130.36" y2="535.45" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-120" x1="5882.96" y1="534.13" x2="5999.1" y2="582.89" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#linear-gradient-116" />
          <radialGradient id="radial-gradient-98" cx="783.74" cy="537.51" r="21.7" xlinkHref="#linear-gradient-24" />
          <linearGradient id="New_Gradient_Swatch_copy_25-57" x1="5887.51" y1="600.63" x2="6005.69" y2="574.13" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-122" x1="5883.32" y1="534.28" x2="5999.06" y2="582.87" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#linear-gradient-116" />
          <linearGradient id="New_Gradient_Swatch_copy_25-59" x1="6008.55" y1="558.01" x2="6141.81" y2="518.1" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_25-60" x1="5884.7" y1="587.33" x2="6060.3" y2="547.97" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="linear-gradient-123" x1="5888.14" y1="522.38" x2="6088.96" y2="606.68" gradientTransform="matrix(-1, 0, 0, 1, 6796.99, 0)" xlinkHref="#linear-gradient-116" />
          <linearGradient id="linear-gradient-124" x1="825.97" y1="626.82" x2="932.21" y2="595.01" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#6b24d6" />
            <stop offset={1} stopColor="#a56ef4" />
          </linearGradient>
          <linearGradient id="linear-gradient-125" x1="716.24" y1="639.7" x2="855.97" y2="608.38" xlinkHref="#linear-gradient-124" />
          <linearGradient id="linear-gradient-126" x1="826.02" y1="635.34" x2="931.63" y2="603.71" xlinkHref="#linear-gradient-124" />
          <linearGradient id="linear-gradient-127" x1="716.65" y1="648.14" x2="855.54" y2={617} xlinkHref="#linear-gradient-124" />
          <linearGradient id="New_Gradient_Swatch_copy_26-10" x1="809.27" y1="472.06" x2="809.27" y2="515.95" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <radialGradient id="Radial_Gradient_1-43" cx="809.03" cy="521.52" r="21.56" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_26-11" x1="4690.18" y1="17294.1" x2="4800.87" y2="17260.95" gradientTransform="translate(5512.57 17751.53) rotate(180)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="New_Gradient_Swatch_copy_7-3" data-name="New Gradient Swatch copy 7" x1="4610.46" y1="17299.66" x2="4756.23" y2="17266.99" gradientTransform="translate(5512.57 17751.53) rotate(180)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="New_Gradient_Swatch_copy_26-12" x1="796.17" y1="503.28" x2="906.86" y2="470.13" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <linearGradient id="New_Gradient_Swatch_copy_7-4" data-name="New Gradient Swatch copy 7" x1="716.46" y1="508.84" x2="862.23" y2="476.17" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="Безымянный_градиент_562" data-name="Безымянный градиент 562" x1="1711.41" y1="244.9" x2="1774.35" y2="226.05" gradientTransform="translate(-895.25 248.6) rotate(-0.01)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#f8a88d" />
            <stop offset="0.25" stopColor="#f9b391" />
            <stop offset="0.66" stopColor="#fbd09d" />
            <stop offset={1} stopColor="#fceba7" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_562-2" x1="1652.57" y1="252.7" x2="1734.34" y2="234.37" xlinkHref="#Безымянный_градиент_562" />
          <linearGradient id="Безымянный_градиент_562-3" x1="1729.62" y1="175.83" x2="1702.55" y2="227.41" xlinkHref="#Безымянный_градиент_562" />
          <radialGradient id="Безымянный_градиент_563" data-name="Безымянный градиент 563" cx="-1321.54" cy="1928.6" r="22.28" gradientTransform="translate(2800.83 -732.04) rotate(24.3)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity="0.5" />
            <stop offset={1} stopColor="#fff" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="New_Gradient_Swatch_copy_26-13" x1="847.66" y1="386.76" x2="799.53" y2="478.48" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_26" />
          <radialGradient id="radial-gradient-99" cx="810.93" cy="455.36" r="36.3" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#4916a1" />
            <stop offset={1} />
          </radialGradient>
          <linearGradient id="linear-gradient-128" x1="809.26" y1="486.26" x2="809.26" y2="400.12" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#7c1dc9" />
            <stop offset="0.03" stopColor="#741bbd" stopOpacity="0.94" />
            <stop offset="0.16" stopColor="#56148b" stopOpacity="0.69" />
            <stop offset="0.3" stopColor="#3b0e60" stopOpacity="0.48" />
            <stop offset="0.43" stopColor="#26093e" stopOpacity="0.31" />
            <stop offset="0.57" stopColor="#150523" stopOpacity="0.17" />
            <stop offset="0.71" stopColor="#09020f" stopOpacity="0.08" />
            <stop offset="0.85" stopColor="#020104" stopOpacity="0.02" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-129" x1="809.39" y1="481.1" x2="809.39" y2="383.56" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#2af6ff" />
            <stop offset="0.02" stopColor="#29eef7" stopOpacity="0.97" />
            <stop offset="0.13" stopColor="#1fb7be" stopOpacity="0.74" />
            <stop offset="0.25" stopColor="#17868b" stopOpacity="0.55" />
            <stop offset="0.37" stopColor="#105d60" stopOpacity="0.38" />
            <stop offset="0.49" stopColor="#0a3b3e" stopOpacity="0.24" />
            <stop offset="0.61" stopColor="#062123" stopOpacity="0.14" />
            <stop offset="0.74" stopColor="#030f0f" stopOpacity="0.06" />
            <stop offset="0.86" stopColor="#010404" stopOpacity="0.01" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-130" x1="835.68" y1="609.2" x2="755.57" y2="550.82" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#b4299a" />
            <stop offset="0.12" stopColor="#8a2076" />
            <stop offset="0.26" stopColor="#601652" />
            <stop offset="0.4" stopColor="#3e0e35" />
            <stop offset="0.55" stopColor="#23081e" />
            <stop offset="0.69" stopColor="#0f030d" />
            <stop offset="0.84" stopColor="#040103" />
            <stop offset={1} />
          </linearGradient>
          <clipPath id="clip-path-9">
            <path d="M845.69,597.3a1.39,1.39,0,0,1,.22.83v.71a3.06,3.06,0,0,1-1.28,2.45L824.9,612.7a1.7,1.7,0,0,1-.3.12.75.75,0,0,0,1,.13l19.74-11.41a3.06,3.06,0,0,0,1.28-2.45v-.71C846.67,597.58,846.25,597.15,845.69,597.3Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-10">
            <path d="M845.69,604.11a1.42,1.42,0,0,1,.22.84v.71a3.05,3.05,0,0,1-1.28,2.44L824.9,619.51a1.17,1.17,0,0,1-.3.12.74.74,0,0,0,1,.13l19.74-11.41a3,3,0,0,0,1.28-2.44v-.71C846.67,604.39,846.25,604,845.69,604.11Z" fill="none" />
          </clipPath>
          <radialGradient id="radial-gradient-100" cx="850.72" cy="-7357.69" r="32.61" gradientTransform="translate(-550.23 4486.63) scale(0.95 0.53)" gradientUnits="userSpaceOnUse">
            <stop offset="0.19" stopColor="#5f5c5d" />
            <stop offset={1} stopOpacity={0} />
          </radialGradient>
          <linearGradient id="linear-gradient-131" x1="282.6" y1="590.68" x2="331.75" y2="590.68" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-132" x1="5318.34" y1="546.26" x2="5359.01" y2="589.87" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-133" x1="227.54" y1="588.42" x2="227.55" y2="588.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-134" x1="277.48" y1="588.42" x2="277.49" y2="588.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <radialGradient id="radial-gradient-101" cx="-13.77" cy="-80.06" r="22.94" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-135" x1="231.74" y1="579.15" x2="275.92" y2="579.15" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_18" />
          <linearGradient id="linear-gradient-136" x1="228.74" y1="580.99" x2="272.23" y2="580.99" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#7c1dc9" />
            <stop offset="0.05" stopColor="#6e41d2" />
            <stop offset="0.16" stopColor="#4c9be8" />
            <stop offset="0.26" stopColor="#2af6ff" />
            <stop offset="0.33" stopColor="#37d3f6" />
            <stop offset="0.49" stopColor="#5093e6" />
            <stop offset="0.62" stopColor="#6360da" />
            <stop offset="0.74" stopColor="#703bd1" />
            <stop offset="0.84" stopColor="#7925cb" />
            <stop offset="0.9" stopColor="#7c1dc9" />
          </linearGradient>
          <linearGradient id="linear-gradient-137" x1="272.55" y1="546.24" x2="253.4" y2="570.01" xlinkHref="#New_Gradient_Swatch_copy_36" />
          <linearGradient id="linear-gradient-138" x1="266.51" y1="554.19" x2="241.33" y2="586.06" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="linear-gradient-139" x1="282.6" y1="575.69" x2="331.75" y2="575.69" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-140" x1="5318.34" y1="531.27" x2="5359.01" y2="574.88" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-102" cx="-13.77" cy="-97.09" r="22.94" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-141" x1="4899.28" y1="564.08" x2="4943.47" y2="564.08" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" xlinkHref="#New_Gradient_Swatch_copy_36" />
          <linearGradient id="linear-gradient-142" x1="4896.49" y1="565.92" x2="4943.07" y2="565.92" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" xlinkHref="#New_Gradient_Swatch_copy_18" />
          <linearGradient id="linear-gradient-143" x1="4896.34" y1="566.34" x2="4943.85" y2="566.34" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#f7aa90" />
            <stop offset="0.23" stopColor="#f9b996" />
            <stop offset="0.61" stopColor="#ffe2a6" />
            <stop offset="0.63" stopColor="#ffe4a7" />
            <stop offset="0.87" stopColor="#f7aa90" />
          </linearGradient>
          <linearGradient id="linear-gradient-144" x1="4940.1" y1="531.18" x2="4920.94" y2="554.95" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" xlinkHref="#New_Gradient_Swatch_copy_36" />
          <linearGradient id="linear-gradient-145" x1={4938} y1="547.99" x2="4921.52" y2="570.88" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="linear-gradient-146" x1="4927.45" y1="539.08" x2="4904.79" y2="567.76" gradientTransform="matrix(-1, 0, 0, 1, 5172.72, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="linear-gradient-147" x1="282.6" y1="561.12" x2="331.75" y2="561.12" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-148" x1="5318.34" y1="516.7" x2="5359.01" y2="560.31" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-103" cx="-13.77" cy="-113.64" r="22.94" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-149" x1="231.74" y1="549.57" x2="275.92" y2="549.57" xlinkHref="#New_Gradient_Swatch_copy_16" />
          <linearGradient id="linear-gradient-150" x1="228.94" y1="551.41" x2="275.52" y2="551.41" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_18" />
          <linearGradient id="linear-gradient-151" x1="228.79" y1="551.82" x2="276.3" y2="551.82" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#6b24d6" />
            <stop offset="0.2" stopColor="#7733dc" />
            <stop offset="0.5" stopColor="#975ced" />
            <stop offset="0.63" stopColor="#a56ef4" />
            <stop offset="0.87" stopColor="#6b24d6" />
          </linearGradient>
          <linearGradient id="linear-gradient-152" x1="272.55" y1="516.66" x2="253.4" y2="540.43" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-3" />
          <linearGradient id="linear-gradient-153" x1="270.45" y1="533.48" x2="253.98" y2="556.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_9" />
          <linearGradient id="linear-gradient-154" x1="259.91" y1="524.57" x2="237.25" y2="553.25" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_13" />
          <radialGradient id="radial-gradient-104" cx="846.64" cy="-7976.41" r="16.07" gradientTransform="translate(-550.23 4613.38) scale(0.95 0.51)" xlinkHref="#radial-gradient-22" />
          <linearGradient id="linear-gradient-155" x1="282.6" y1="531.48" x2="331.75" y2="531.48" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-156" x1="5318.34" y1="487.07" x2="5359.01" y2="530.68" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-105" cx="-13.77" cy="-147.3" r="22.94" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-106" cx="848.86" cy="-7478.98" r="13.33" gradientTransform="translate(-550.23 4486.63) scale(0.95 0.53)" xlinkHref="#radial-gradient-22" />
          <linearGradient id="linear-gradient-157" x1="297.44" y1="522.79" x2="317.11" y2="522.79" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-158" x1="5336.42" y1="504.54" x2="5352.69" y2="521.99" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-159" x1="259.82" y1="517.5" x2="244.38" y2="517.5" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#25054d" />
            <stop offset="0.22" stopColor="#45108a" />
            <stop offset="0.42" stopColor="#25054d" />
            <stop offset="0.56" stopColor="#270651" />
            <stop offset="0.7" stopColor="#2e085e" />
            <stop offset="0.84" stopColor="#390c73" />
            <stop offset="0.96" stopColor="#45108a" />
          </linearGradient>
          <linearGradient id="linear-gradient-160" x1="259.82" y1="516.44" x2="244.38" y2="516.44" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <radialGradient id="radial-gradient-107" cx="-7.78" cy="-158.85" r="9.18" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-108" cx="805.63" cy="-7332.93" r="37.06" gradientTransform="translate(-550.23 4486.63) scale(0.95 0.53)" xlinkHref="#radial-gradient-26" />
          <linearGradient id="linear-gradient-161" x1="235.99" y1="604.46" x2="291.85" y2="604.46" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-162" x1="5357.46" y1="553.98" x2="5403.68" y2="603.55" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-109" cx={-69} cy="-64.15" r="26.08" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-163" x1="183.15" y1="592.97" x2="235.06" y2="592.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-164" x1="182.9" y1="587.55" x2="182.91" y2="587.55" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-165" x1="183.15" y1="596.27" x2="235.06" y2="596.27" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-166" x1="235.64" y1="587.55" x2="235.65" y2="587.55" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-167" x1="259.25" y1="530.17" x2="206.34" y2="583.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-110" cx="-71.78" cy="-79.47" r="41.3" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-168" x1="231.01" y1="558.59" x2="191.46" y2="598.39" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-111" cx="-46.1" cy="-109.22" r="18.17" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-169" x1="237.99" y1="550.05" x2="201.05" y2="587.22" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-170" x1="194.88" y1="581.37" x2="224.82" y2="581.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-171" x1="178.99" y1="606.16" x2="214.51" y2="575.58" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-112" cx="-50.12" cy="-99.74" r="15.23" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-113" cx="800.9" cy="-7900.98" r="18.27" gradientTransform="translate(-550.23 4613.38) scale(0.95 0.51)" xlinkHref="#radial-gradient-22" />
          <linearGradient id="linear-gradient-172" x1="235.99" y1="568.23" x2="291.85" y2="568.23" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-173" x1="5357.46" y1="517.74" x2="5403.68" y2="567.31" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-114" cx={-69} cy="-105.31" r="26.08" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-174" x1="182.97" y1="557.15" x2="235.23" y2="557.15" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-175" x1="182.72" y1="551.69" x2="182.73" y2="551.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-176" x1="182.97" y1="560.47" x2="235.23" y2="560.47" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-177" x1="235.81" y1="551.69" x2="235.82" y2="551.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-178" x1="235.99" y1="551.48" x2="291.85" y2="551.48" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-179" x1="5357.46" y1={501} x2="5403.68" y2="550.57" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-115" cx={-69} cy="-124.33" r="26.08" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-180" x1="182.97" y1="540.19" x2="235.23" y2="540.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-181" x1="182.72" y1="534.73" x2="182.73" y2="534.73" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-182" x1="182.97" y1="543.51" x2="235.23" y2="543.51" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-183" x1="235.81" y1="534.73" x2="235.82" y2="534.73" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-184" x1="235.99" y1="534.73" x2="291.85" y2="534.73" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-185" x1="5357.46" y1="484.25" x2="5403.68" y2="533.82" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-116" cx={-69} cy="-143.35" r="26.08" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-117" cx="803.52" cy="-7482.52" r="15.15" gradientTransform="translate(-550.23 4486.63) scale(0.95 0.53)" xlinkHref="#radial-gradient-22" />
          <linearGradient id="linear-gradient-186" x1="252.85" y1="521.08" x2="275.2" y2="521.08" gradientTransform="translate(-54.82)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="linear-gradient-187" x1="5378.01" y1="500.33" x2="5396.51" y2="520.17" gradientTransform="matrix(-1, 0, 0, 1, 5601, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-188" x1="217.58" y1="515.07" x2="200.03" y2="515.07" xlinkHref="#linear-gradient-159" />
          <linearGradient id="linear-gradient-189" x1="217.58" y1="513.87" x2="200.03" y2="513.87" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <radialGradient id="radial-gradient-118" cx="-62.2" cy="-160.77" r="10.44" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-190" x1="66.32" y1="196.7" x2="87.49" y2="184.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-15" />
          <linearGradient id="New_Gradient_Swatch_copy_8-12" x1="79.92" y1="215.37" x2="97.04" y2="253.79" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-13" x1="4.69" y1="137.36" x2="96.5" y2="249.17" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="linear-gradient-191" x1="48.74" y1="202.08" x2="57.5" y2="202.08" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <linearGradient id="New_Gradient_Swatch_copy_8-14" x1="71.78" y1="148.24" x2="62.05" y2="191.61" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="radial-gradient-119" cx="63.29" cy="189.23" r="23.87" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#ffe4a7" />
            <stop offset="0.42" stopColor="#f4be4c" />
            <stop offset="0.67" stopColor="#eca30a" />
            <stop offset={1} />
          </radialGradient>
          <radialGradient id="Radial_Gradient_1-44" cx="63.65" cy="200.17" r="11.61" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-192" x1="60.23" y1="201.84" x2="33.51" y2="214.54" xlinkHref="#linear-gradient-29" />
          <linearGradient id="linear-gradient-193" x1="76.73" y1="186.75" x2="60.98" y2="192.74" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#a3653d" />
          </linearGradient>
          <linearGradient id="linear-gradient-194" x1="63.81" y1="179.16" x2="48.07" y2="185.14" xlinkHref="#linear-gradient-193" />
          <linearGradient id="New_Gradient_Swatch_copy_8-15" x1="79.04" y1="204.91" x2="81.26" y2="208.46" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-16" x1="105.77" y1="248.32" x2="110.89" y2="256.51" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-17" x1="72.77" y1="190.39" x2="72.77" y2="190.39" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="radial-gradient-120" cx="66.9" cy="178.54" r="19.31" xlinkHref="#radial-gradient-119" />
          <linearGradient id="linear-gradient-195" x1="49.73" y1="206.01" x2="70.01" y2="169.98" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#ffa98c" />
            <stop offset="0.31" stopColor="#ffb893" />
            <stop offset="0.32" stopColor="#ffb993" />
            <stop offset="0.82" stopColor="#fedda2" />
            <stop offset={1} stopColor="#feeca8" />
          </linearGradient>
          <radialGradient id="radial-gradient-121" cx="-4121.43" cy="3894.45" r="5.81" gradientTransform="translate(6526.16 716.54) rotate(46.69)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#ebe9ec" />
          </radialGradient>
          <linearGradient id="linear-gradient-196" x1="-4128.37" y1="3887.06" x2="-4109.67" y2="3911.21" gradientTransform="translate(6526.16 716.54) rotate(46.69)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-122" cx="-4106.08" cy="3894.37" r="5.84" xlinkHref="#radial-gradient-121" />
          <linearGradient id="linear-gradient-197" x1="-4118.18" y1="3879.17" x2="-4099.48" y2="3903.32" gradientTransform="translate(6526.16 716.54) rotate(46.69)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-123" cx="-4108.31" cy="3899.38" r="4.9" xlinkHref="#radial-gradient-121" />
          <radialGradient id="radial-gradient-124" cx="-4119.17" cy="3899.37" r="4.88" xlinkHref="#radial-gradient-121" />
          <linearGradient id="linear-gradient-198" x1="-4126.37" y1="3885.51" x2="-4107.67" y2="3909.66" gradientTransform="translate(6526.16 716.54) rotate(46.69)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="New_Gradient_Swatch_copy_20" data-name="New Gradient Swatch copy 20" cx="-5281.17" cy="7917.06" r="36.72" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#feeca8" />
            <stop offset={1} stopColor="#ffa98c" />
          </radialGradient>
          <radialGradient id="radial-gradient-125" cx="-5266.17" cy="7904.93" r="5.45" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="New_Gradient_Swatch_copy_20-2" cx="-5281.17" cy="7917.06" r="36.72" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="radial-gradient-126" cx="-5268.48" cy="7916.67" r="4.97" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="New_Gradient_Swatch_copy_20-3" cx="-5281.17" cy="7917.06" r="36.72" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="radial-gradient-127" cx="-5265.33" cy="7913.52" r="4.97" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="radial-gradient-128" cx="-5277.07" cy="7915.83" r="5.45" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="New_Gradient_Swatch_copy_20-4" cx="-5281.17" cy="7917.06" r="36.72" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="New_Gradient_Swatch_copy_20-5" cx="-5281.17" cy="7917.06" r="36.72" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="New_Gradient_Swatch_copy_20-6" cx="-5281.17" cy="7917.06" r="36.72" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="radial-gradient-129" cx="-5274.77" cy="7904.09" r="4.97" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="radial-gradient-130" cx="-5277.91" cy="7907.24" r="4.97" gradientTransform="matrix(0.23, 0.97, -0.95, -0.29, 9616.08, 7780.38)" xlinkHref="#radial-gradient-121" />
          <radialGradient id="New_Gradient_Swatch_copy_20-7" cx="-5281.17" cy="7917.06" r="36.72" gradientTransform="matrix(-0.5, 0.87, -0.5, -0.86, 2228.98, 11758.77)" xlinkHref="#New_Gradient_Swatch_copy_20" />
          <radialGradient id="radial-gradient-131" cx="-4121.01" cy="3895.02" r="25.32" xlinkHref="#radial-gradient-121" />
          <radialGradient id="Radial_Gradient_1-45" cx="-5598.39" cy="2998.79" r="13.76" gradientTransform="translate(5782.47 2040.17) rotate(46.69) scale(0.82)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-132" cx="5923.98" cy="1028.54" r="5.81" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="linear-gradient-199" x1="5916.28" y1="1031.32" x2="5946.88" y2="1031.32" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#linear-gradient-110" />
          <radialGradient id="radial-gradient-133" cx="5939.34" cy="1028.46" r="5.84" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="linear-gradient-200" x1="5916.28" y1="1031.71" x2="5946.88" y2="1031.71" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#linear-gradient-110" />
          <radialGradient id="radial-gradient-134" cx="5937.11" cy="1033.47" r="4.9" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-135" cx="5926.25" cy="1033.46" r="4.88" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="linear-gradient-201" x1="5916.28" y1="1033.62" x2="5946.88" y2="1033.62" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#linear-gradient-110" />
          <radialGradient id="New_Gradient_Swatch_copy_14-9" cx="-2347.64" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-136" cx="-2332.64" cy="-814.54" r="5.45" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-10" cx="-2347.65" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-137" cx="-2334.95" cy="-802.8" r="4.97" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-11" cx="-2347.64" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-138" cx="-2331.8" cy="-805.94" r="4.97" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-139" cx="-2343.54" cy="-803.64" r="5.45" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-12" cx="-2347.65" cy="-802.41" r="36.73" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="New_Gradient_Swatch_copy_14-13" cx="-2347.64" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="New_Gradient_Swatch_copy_14-14" cx="-2347.64" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-140" cx="-2341.24" cy="-815.38" r="4.97" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-141" cx="-2344.38" cy="-812.23" r="4.97" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_14-15" cx="-2347.64" cy="-802.41" r="36.72" gradientTransform="matrix(0.99, -0.13, -0.38, 0.92, 3002.17, 839.73)" xlinkHref="#New_Gradient_Swatch_copy_14" />
          <radialGradient id="radial-gradient-142" cx="5924.41" cy="1029.11" r="25.32" gradientTransform="translate(-4334.32 3211.76) rotate(-37.6)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-46" cx="6700.33" cy="-510.55" r="13.76" gradientTransform="matrix(0.65, -0.5, 0.5, 0.65, -3090.57, 4082.89)" xlinkHref="#Radial_Gradient_1" />
          <radialGradient id="radial-gradient-143" cx="9181.81" cy="3942.36" r="5.81" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-16" x1="9174.11" y1="3945.13" x2="9204.71" y2="3945.13" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-144" cx="9197.17" cy="3942.27" r="5.84" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-17" x1="9174.11" y1="3945.52" x2="9204.71" y2="3945.52" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="radial-gradient-145" cx="9194.94" cy="3947.29" r="4.9" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-146" cx="9184.08" cy="3947.28" r="4.88" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#radial-gradient-31" />
          <linearGradient id="New_Gradient_Swatch_copy_24-18" x1="9174.11" y1="3947.44" x2="9204.71" y2="3947.44" gradientTransform="translate(-5796.03 7713.93) rotate(-70.57)" xlinkHref="#New_Gradient_Swatch_copy_24" />
          <radialGradient id="New_Gradient_Swatch_copy_15-37" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-147" cx="2460.84" cy="223.9" r="5.45" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-38" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-148" cx="2458.54" cy="235.64" r="4.97" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-39" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-149" cx="2461.68" cy="232.49" r="4.97" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-150" cx="2449.94" cy="234.79" r="5.45" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-40" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-41" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="New_Gradient_Swatch_copy_15-42" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-151" cx="2452.25" cy="223.06" r="4.97" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="radial-gradient-152" cx="2449.1" cy="226.2" r="4.97" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="New_Gradient_Swatch_copy_15-43" cx="2445.84" cy="236.03" r="36.72" gradientTransform="matrix(0.76, -0.65, 0.18, 0.98, -930.96, 1731.57)" xlinkHref="#New_Gradient_Swatch_copy_15" />
          <radialGradient id="radial-gradient-153" cx="9182.24" cy="3942.93" r="25.32" gradientTransform="translate(-8234.4 -3530.19) rotate(-0.31)" xlinkHref="#radial-gradient-31" />
          <radialGradient id="Radial_Gradient_1-47" cx="10691.37" cy="3057.4" r="13.76" gradientTransform="translate(-4278.86 7768.71) rotate(-70.57) scale(0.82)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_8-19" x1="1023.89" y1="268.11" x2="1029.99" y2="281.79" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-20" x1="963.31" y1="227.78" x2="1021.85" y2="299.07" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-21" x1="1022.42" y1="189.94" x2="1004.18" y2="271.25" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="radial-gradient-154" cx="1008.11" cy="261.93" r="21.14" xlinkHref="#radial-gradient-119" />
          <linearGradient id="New_Gradient_Swatch_copy_8-22" x1="1023.89" y1="260.26" x2="1029.99" y2="273.93" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-23" x1="963.31" y1="219.92" x2="1021.85" y2="291.22" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-24" x1="1022.42" y1="182.09" x2="1004.18" y2="263.4" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="radial-gradient-155" cx="1008.11" cy="254.08" r="21.14" xlinkHref="#radial-gradient-119" />
          <linearGradient id="New_Gradient_Swatch_copy_8-25" x1="1023.89" y1="252.41" x2="1029.99" y2="266.08" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-26" x1="963.31" y1="212.07" x2="1021.85" y2="283.36" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-27" x1="1022.42" y1="174.24" x2="1004.18" y2="255.55" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <radialGradient id="radial-gradient-156" cx="1008.11" cy="246.23" r="21.14" xlinkHref="#radial-gradient-119" />
          <linearGradient id="New_Gradient_Swatch_copy_8-28" x1="1023.89" y1="244.56" x2="1029.99" y2="258.23" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-29" x1="963.31" y1="204.22" x2="1021.85" y2="275.51" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="New_Gradient_Swatch_copy_8-30" x1="1026.87" y1="146.52" x2="1008.63" y2="227.83" xlinkHref="#New_Gradient_Swatch_copy_8" />
          <linearGradient id="linear-gradient-202" x1="1003.11" y1="223.1" x2="1020.08" y2="246.98" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_25" />
          <radialGradient id="radial-gradient-157" cx="1008.11" cy="238.37" r="21.14" xlinkHref="#radial-gradient-119" />
          <radialGradient id="Radial_Gradient_1-48" cx="1009.71" cy="237.67" r="13.25" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-203" x1="1010.78" y1="232.04" x2="1010.78" y2="198.29" xlinkHref="#linear-gradient-29" />
          <linearGradient id="Безымянный_градиент_562-4" x1="297.35" y1="652.67" x2="312.57" y2="652.67" gradientTransform="translate(0 -243.89)" xlinkHref="#Безымянный_градиент_562" />
          <linearGradient id="Безымянный_градиент_562-5" x1="297.35" y1="630.43" x2="337.71" y2="630.43" gradientTransform="translate(0 -243.89)" xlinkHref="#Безымянный_градиент_562" />
          <linearGradient id="Безымянный_градиент_776" data-name="Безымянный градиент 776" x1="297.39" y1="633.49" x2="319.41" y2="633.49" gradientTransform="translate(0 -243.89)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#f8a88d" />
            <stop offset="0.26" stopColor="#fab392" />
            <stop offset="0.32" stopColor="#fab894" />
            <stop offset="0.68" stopColor="#fbd29e" />
            <stop offset={1} stopColor="#fceba7" />
          </linearGradient>
          <radialGradient id="Безымянный_градиент_749" data-name="Безымянный градиент 749" cx="330.16" cy="1240.47" r="28.93" gradientTransform="translate(0 -1054.22) scale(1 1.17)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#fff" />
          </radialGradient>
          <clipPath id="clip-path-11">
            <path d="M341.54,368.48c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.52-22.17,37.51-.08,7.11,2.37,12.13,6.38,14.46l14.58,8.47c-4-2.33-6.46-7.35-6.38-14.46.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.56,15.17-1.31Z" fill="none" />
          </clipPath>
          <linearGradient id="Безымянный_градиент_760" data-name="Безымянный градиент 760" x1="1995.2" y1="11359.62" x2="2009.1" y2="11359.62" gradientTransform="matrix(1.13, -0.42, -0.36, -0.83, 2189.95, 10726.32)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="Безымянный_градиент_761" data-name="Безымянный градиент 761" x1="1995.86" y1="11359.63" x2="2008.45" y2="11359.63" gradientTransform="matrix(1.13, -0.42, -0.36, -0.83, 2189.95, 10726.32)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#9f19ab" />
            <stop offset="0.24" stopColor="#ae25b1" />
            <stop offset="0.65" stopColor="#d744bf" />
            <stop offset={1} stopColor="#ff63ce" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_759" data-name="Безымянный градиент 759" x1="320.24" y1="489.94" x2="372.16" y2="489.94" gradientTransform="translate(0 -82)" xlinkHref="#Безымянный_градиент_749" />
          <clipPath id="clip-path-12">
            <path d="M357.58,377.81c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.51-22.17,37.5h0c-.08,7.1,2.37,12.12,6.38,14.45l14.58,8.47c-4-2.33-6.46-7.35-6.38-14.45.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.57,15.17-1.31Z" fill="none" />
          </clipPath>
          <linearGradient id="Безымянный_градиент_760-2" data-name="Безымянный градиент 760" x1="1994.14" y1="11502.88" x2="2008.03" y2="11502.88" gradientTransform="matrix(1.13, -0.42, -0.36, -0.83, 2189.95, 10726.32)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="Безымянный_градиент_761-2" x1="1994.79" y1="11502.89" x2="2007.39" y2="11502.89" xlinkHref="#Безымянный_градиент_761" />
          <linearGradient id="Безымянный_градиент_759-2" data-name="Безымянный градиент 759" x1="335.09" y1="505.43" x2="391.69" y2="492.74" gradientTransform="translate(0 -82)" xlinkHref="#Безымянный_градиент_749" />
          <clipPath id="clip-path-13">
            <path d="M373.75,387.29c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.52-22.17,37.51-.08,7.11,2.37,12.12,6.38,14.46L357.37,449c-4-2.33-6.46-7.35-6.38-14.46.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.57,15.17-1.31Z" fill="none" />
          </clipPath>
          <linearGradient id="Безымянный_градиент_760-3" data-name="Безымянный градиент 760" x1="1993.99" y1="11496.92" x2="2007.89" y2="11496.92" gradientTransform="matrix(1.13, -0.42, -0.36, -0.83, 2189.95, 10726.32)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <linearGradient id="Безымянный_градиент_761-3" x1="1994.65" y1="11496.94" x2="2007.24" y2="11496.94" xlinkHref="#Безымянный_градиент_761" />
          <linearGradient id="Безымянный_градиент_764" data-name="Безымянный градиент 764" x1="367.45" y1="674.08" x2="400.46" y2="674.08" gradientTransform="translate(0 -243.89)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#f8a88d" />
            <stop offset="0.04" stopColor="#f8a88d" />
            <stop offset="0.77" stopColor="#fab392" />
            <stop offset="0.99" stopColor="#fab894" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_771" data-name="Безымянный градиент 771" x1="364.8" y1="671.87" x2="389.64" y2="671.87" gradientTransform="translate(0 -243.89)" gradientUnits="userSpaceOnUse">
            <stop offset="0.04" stopColor="#f8a88d" />
            <stop offset="0.18" stopColor="#fab392" />
            <stop offset="0.22" stopColor="#fab894" />
            <stop offset="0.64" stopColor="#fbd29e" />
            <stop offset={1} stopColor="#fceba7" />
          </linearGradient>
          <linearGradient id="Безымянный_градиент_771-2" x1="372.99" y1="685.59" x2="382.3" y2="685.59" xlinkHref="#Безымянный_градиент_771" />
          <linearGradient id="Безымянный_градиент_771-3" x1="357.52" y1="687.59" x2="372.3" y2="687.59" xlinkHref="#Безымянный_градиент_771" />
          <linearGradient id="Безымянный_градиент_776-2" x1="391.85" y1="682.17" x2="403.92" y2="682.17" xlinkHref="#Безымянный_градиент_776" />
          <linearGradient id="Безымянный_градиент_771-4" x1="382.89" y1="677.63" x2="404.17" y2="677.63" xlinkHref="#Безымянный_градиент_771" />
          <linearGradient id="Безымянный_градиент_771-5" x1="382.89" y1="686.62" x2={394} y2="686.62" xlinkHref="#Безымянный_градиент_771" />
          <linearGradient id="Безымянный_градиент_771-6" x1="357.52" y1="665.35" x2="397.44" y2="665.35" xlinkHref="#Безымянный_градиент_771" />
          <linearGradient id="Безымянный_градиент_776-3" x1="357.56" y1="668.54" x2="379.58" y2="668.54" xlinkHref="#Безымянный_градиент_776" />
          <linearGradient id="Безымянный_градиент_776-4" x1="372.99" y1="673.81" x2="386.79" y2="673.81" xlinkHref="#Безымянный_градиент_776" />
          <linearGradient id="Безымянный_градиент_776-5" x1="382.89" y1="678.88" x2="396.94" y2="678.88" xlinkHref="#Безымянный_градиент_776" />
          <linearGradient id="Безымянный_градиент_776-6" x1="389.84" y1="662.05" x2="395.88" y2="662.05" xlinkHref="#Безымянный_градиент_776" />
          <linearGradient id="Безымянный_градиент_776-7" x1="387.09" y1="662.15" x2="392.29" y2="662.15" xlinkHref="#Безымянный_градиент_776" />
          <radialGradient id="Безымянный_градиент_777" data-name="Безымянный градиент 777" cx="-1197.94" cy="-1828.42" r="13.55" gradientTransform="translate(1172.04 1712.85) scale(0.66 0.72)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#e06eaa" />
            <stop offset={1} stopColor="#943895" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_779" data-name="Безымянный градиент 779" cx="389.65" cy="10751.42" r="5.65" gradientTransform="matrix(1, 0, 0, -1, 0, 11152.7)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#fff" stopOpacity="0.5" />
            <stop offset={1} stopColor="#fff" stopOpacity="0.06" />
          </radialGradient>
          <radialGradient id="Безымянный_градиент_779-2" cx="387.48" cy="10754.55" r="4.47" xlinkHref="#Безымянный_градиент_779" />
          <linearGradient id="linear-gradient-204" x1="173.44" y1="517.97" x2="173.44" y2="485.78" gradientTransform="translate(35.66)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#43e8e1" />
            <stop offset="0.09" stopColor="#36bdb7" stopOpacity="0.81" />
            <stop offset="0.22" stopColor="#288b87" stopOpacity="0.6" />
            <stop offset="0.34" stopColor="#1c605d" stopOpacity="0.42" />
            <stop offset="0.47" stopColor="#123e3c" stopOpacity="0.27" />
            <stop offset="0.6" stopColor="#0a2321" stopOpacity="0.15" />
            <stop offset="0.73" stopColor="#040f0f" stopOpacity="0.07" />
            <stop offset="0.86" stopColor="#010404" stopOpacity="0.02" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-205" x1="216.85" y1="519.93" x2="216.85" y2="490.24" gradientTransform="translate(35.66)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#43e8e1" />
            <stop offset="0.09" stopColor="#36bdb7" stopOpacity="0.81" />
            <stop offset="0.22" stopColor="#288b87" stopOpacity="0.6" />
            <stop offset="0.34" stopColor="#1c605d" stopOpacity="0.42" />
            <stop offset="0.47" stopColor="#123e3c" stopOpacity="0.27" />
            <stop offset="0.6" stopColor="#0a2321" stopOpacity="0.15" />
            <stop offset="0.73" stopColor="#040f0f" stopOpacity="0.07" />
            <stop offset="0.86" stopColor="#010404" stopOpacity="0.02" />
            <stop offset={1} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="linear-gradient-206" x1="751.54" y1="236.6" x2="783.36" y2="236.6" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-207" x1="751.38" y1="233.57" x2="751.39" y2="233.57" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-208" x1="751.54" y1="238.44" x2="783.36" y2="238.44" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-209" x1="783.71" y1="233.57" x2="783.71" y2="233.57" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-210" x1="797.42" y1="199.55" x2="765.8" y2="231.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial" data-name="White, Black Radial" cx="760.6" cy="236.53" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-211" x1="780.54" y1="216.54" x2="756.9" y2="240.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-2" data-name="White, Black Radial" cx="773.24" cy="221.9" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-212" x1="784.89" y1="211.38" x2="762.58" y2="233.83" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-158" cx="50629.6" cy="-8333.43" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-159" cx="50741.74" cy="-8297.06" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-213" x1="759.06" y1="229.99" x2="776.62" y2="229.99" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-214" x1="786.5" y1="220.97" x2="763.03" y2="231.58" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-160" cx="753.65" cy="237.67" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-215" x1="351.05" y1="514.08" x2="389.78" y2="514.08" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-216" x1="350.86" y1="510.39" x2="350.86" y2="510.39" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-217" x1="351.05" y1="516.32" x2="389.78" y2="516.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-218" x1="390.21" y1="510.39" x2="390.22" y2="510.39" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-219" x1="406.9" y1="468.98" x2="368.41" y2="507.72" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-3" data-name="White, Black Radial" cx="362.08" cy={514} r="24.74" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-220" x1="386.35" y1="489.66" x2="357.58" y2="518.62" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-4" data-name="White, Black Radial" cx="377.46" cy="496.19" r="10.88" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-221" x1="391.65" y1="483.39" x2="364.49" y2="510.72" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-222" x1="359.8" y1="506.19" x2="382.14" y2="506.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-223" x1="348.38" y1="524.21" x2="374.38" y2="501.83" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-161" cx="375.05" cy="501.87" r="9.12" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-224" x1="613.9" y1="327.66" x2="641.22" y2="327.66" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-225" x1="613.76" y1="324.8" x2="613.77" y2="324.8" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-226" x1="613.9" y1="329.39" x2="641.22" y2="329.39" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-227" x1="641.52" y1="324.8" x2="641.52" y2="324.8" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-228" x1="653.95" y1="294.61" x2="626.1" y2="322.63" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-162" cx="456.15" cy="-380.78" r="21.74" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-229" x1="639.08" y1="309.57" x2="618.27" y2="330.51" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-163" cx="469.67" cy="-396.43" r="9.56" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-230" x1="642.76" y1="305.07" x2="623.32" y2="324.63" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-164" cx="53870.47" cy="-9942.28" r="24.54" gradientTransform="matrix(0.04, -0.13, 0.23, 0.09, 818.9, 7917.46)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-165" cx="53991.26" cy="-9907.22" r="24.54" gradientTransform="matrix(0.04, -0.13, 0.23, 0.09, 818.9, 7917.46)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-231" x1="622.46" y1="321.16" x2="632.81" y2="321.16" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-232" x1="637.83" y1="315.15" x2="628.96" y2="319.99" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-166" cx="454.75" cy="-387.67" r="11.53" gradientTransform="translate(255.55 662.82) scale(0.8 0.88)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-233" x1="780.78" y1="355.93" x2="812.6" y2="355.93" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-234" x1="780.63" y1="352.9" x2="780.63" y2="352.9" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-235" x1="780.78" y1="357.78" x2="812.6" y2="357.78" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-236" x1="812.96" y1="352.9" x2="812.96" y2="352.9" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-237" x1="826.67" y1="318.88" x2="795.04" y2="350.71" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-5" data-name="White, Black Radial" cx="789.85" cy="355.87" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-238" x1="809.79" y1="335.87" x2="786.15" y2="359.66" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-6" data-name="White, Black Radial" cx="802.49" cy="341.23" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-239" x1="814.14" y1="330.72" x2="791.83" y2="353.17" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-167" cx="49939.3" cy="-8115.05" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-168" cx="50051.45" cy="-8078.68" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-240" x1="788.3" y1="349.32" x2="805.87" y2="349.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-241" x1="815.74" y1="340.3" x2="792.27" y2="350.92" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-169" cx="782.9" cy="357.01" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-242" x1="1052.25" y1="350.2" x2="1084.08" y2="350.2" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-243" x1="1052.1" y1="347.17" x2="1052.11" y2="347.17" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-244" x1="1052.25" y1="352.05" x2="1084.08" y2="352.05" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-245" x1="1084.43" y1="347.17" x2="1084.43" y2="347.17" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-246" x1="1098.14" y1="313.15" x2="1066.52" y2="344.98" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-7" data-name="White, Black Radial" cx="1061.32" cy="350.14" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-247" x1="1081.26" y1="330.14" x2="1057.62" y2="353.93" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-8" data-name="White, Black Radial" cx="1073.96" cy="335.51" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-248" x1="1085.61" y1="324.99" x2="1063.3" y2="347.44" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-170" cx="50558.92" cy="-7272.26" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-171" cx="50671.06" cy="-7235.89" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-249" x1="1059.77" y1="343.59" x2="1077.34" y2="343.59" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-250" x1="1087.22" y1="334.57" x2="1063.74" y2="345.19" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-172" cx="1054.37" cy="351.28" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-251" x1="423.76" y1="230.72" x2="455.58" y2="230.72" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-252" x1="423.61" y1="227.69" x2="423.61" y2="227.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-253" x1="423.76" y1="232.56" x2="455.58" y2="232.56" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-254" x1="455.94" y1="227.69" x2="455.94" y2="227.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-255" x1="469.65" y1="193.67" x2="438.02" y2="225.49" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-9" data-name="White, Black Radial" cx="432.83" cy="230.66" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-256" x1="452.77" y1="210.66" x2="429.13" y2="234.45" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-10" data-name="White, Black Radial" cx="445.47" cy="216.02" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-257" x1="457.12" y1="205.51" x2="434.81" y2="227.96" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-173" cx="49962.22" cy="-9364.62" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-174" cx="50074.37" cy="-9328.25" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-258" x1="431.28" y1="224.11" x2="448.85" y2="224.11" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-259" x1="458.72" y1="215.09" x2="435.25" y2="225.7" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-175" cx="425.88" cy="231.79" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-260" x1="242.35" y1="357.04" x2="274.17" y2="357.04" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-261" x1="242.19" y1="354.01" x2="242.2" y2="354.01" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-262" x1="242.35" y1="358.88" x2="274.17" y2="358.88" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-263" x1="274.52" y1="354.01" x2="274.53" y2="354.01" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-264" x1="288.23" y1="319.99" x2="256.61" y2="351.81" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-11" data-name="White, Black Radial" cx="251.41" cy="356.98" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-265" x1="271.35" y1="336.98" x2="247.71" y2="360.77" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-12" data-name="White, Black Radial" cx="264.05" cy="342.34" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-266" x1="275.7" y1="331.83" x2="253.39" y2="354.28" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-176" cx="48775.09" cy="-9797.55" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-177" cx="48887.23" cy="-9761.18" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-267" x1="249.87" y1="350.43" x2="267.43" y2="350.43" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-268" x1="277.31" y1="341.41" x2="253.84" y2="352.02" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-178" cx="244.46" cy="358.11" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-269" x1="607.03" y1="672.03" x2="638.85" y2="672.03" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-270" x1="606.87" y1={669} x2="606.88" y2={669} gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-271" x1="607.03" y1="673.88" x2="638.85" y2="673.88" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-272" x1="639.2" y1={669} x2="639.21" y2={669} gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-273" x1="652.91" y1="634.99" x2="621.29" y2="666.81" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-13" data-name="White, Black Radial" cx="616.09" cy="671.97" r="20.32" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-274" x1="636.03" y1="651.97" x2="612.39" y2="675.76" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="White_Black_Radial-14" data-name="White, Black Radial" cx="628.73" cy="657.34" r="8.94" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-275" x1="640.38" y1="646.82" x2="618.07" y2="669.27" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-179" cx="47570.87" cy="-8322.17" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-180" cx="47683.02" cy="-8285.8" r="22.94" gradientTransform="matrix(0.05, -0.14, 0.29, 0.1, 701.87, 8240.44)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-276" x1="614.55" y1="665.43" x2="632.11" y2="665.43" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-16" />
          <linearGradient id="linear-gradient-277" x1="641.99" y1="656.4" x2="618.52" y2="667.02" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_37" />
          <radialGradient id="radial-gradient-181" cx="609.14" cy="673.11" r="29.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#radial-gradient-9" />
          <linearGradient id="linear-gradient-278" x1="941.09" y1="544.5" x2="976.69" y2="571.6" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#200041" />
            <stop offset="0.22" stopColor="#563e83" />
            <stop offset="0.27" stopColor="#4e367c" />
            <stop offset="0.48" stopColor="#311b61" />
            <stop offset="0.57" stopColor="#2a1155" />
            <stop offset="0.7" stopColor="#230446" />
            <stop offset="0.81" stopColor="#200041" />
            <stop offset="0.93" stopColor="#351e65" />
            <stop offset="0.95" stopColor="#2b1055" />
            <stop offset="0.98" stopColor="#230446" />
            <stop offset={1} stopColor="#200041" />
          </linearGradient>
          <linearGradient id="linear-gradient-279" x1="984.76" y1="550.36" x2="984.85" y2="550.42" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-280" x1={977} y1="568.01" x2="1020.67" y2="556.6" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-281" x1="985.95" y1="575.02" x2="991.86" y2="532.38" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-282" x1="941.8" y1="547.93" x2="982.74" y2="547.93" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#200041" />
            <stop offset="0.02" stopColor="#2e0f51" />
            <stop offset="0.14" stopColor="#6e559b" />
            <stop offset="0.2" stopColor="#8770b8" />
            <stop offset="0.27" stopColor="#5f4990" />
            <stop offset="0.35" stopColor="#3e286e" />
            <stop offset="0.39" stopColor="#311b61" />
            <stop offset="0.49" stopColor="#2a1155" />
            <stop offset="0.67" stopColor="#230446" />
            <stop offset="0.81" stopColor="#200041" />
            <stop offset="0.93" stopColor="#351e65" />
            <stop offset="0.95" stopColor="#2b1055" />
            <stop offset="0.98" stopColor="#230446" />
            <stop offset={1} stopColor="#200041" />
          </linearGradient>
          <radialGradient id="Radial_Gradient_1-49" cx="966.3" cy="542.07" r="15.15" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-283" x1="958.48" y1="550.32" x2="1000.74" y2="502.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-284" x1="955.57" y1="568.05" x2="976.39" y2="568.05" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#200041" />
            <stop offset="0.03" stopColor="#2e0f51" />
            <stop offset="0.2" stopColor="#6e559b" />
            <stop offset="0.27" stopColor="#8770b8" />
            <stop offset="0.41" stopColor="#5f4990" />
            <stop offset="0.55" stopColor="#3e286e" />
            <stop offset="0.63" stopColor="#311b61" />
            <stop offset="0.67" stopColor="#2a1155" />
            <stop offset="0.75" stopColor="#230446" />
            <stop offset="0.81" stopColor="#200041" />
            <stop offset="0.93" stopColor="#351e65" />
            <stop offset="0.95" stopColor="#2b1055" />
            <stop offset="0.98" stopColor="#230446" />
            <stop offset={1} stopColor="#200041" />
          </linearGradient>
          <linearGradient id="linear-gradient-285" x1="955.47" y1="567.78" x2="955.47" y2="567.78" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-286" x1="976.63" y1="567.78" x2="976.63" y2="567.78" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <radialGradient id="Radial_Gradient_1-50" cx="966.05" cy="558.8" r="8.66" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-287" x1="961.58" y1="563.51" x2="985.73" y2="536.45" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-288" x1="974.43" y1="558.54" x2="957.24" y2="558.54" xlinkHref="#linear-gradient-284" />
          <linearGradient id="New_Gradient_Swatch_copy_23-3" x1="960.19" y1="558.63" x2="971.83" y2="558.63" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="Linear_Gradient_1" data-name="Linear Gradient 1" x1="966.05" y1="564.27" x2="966.05" y2="552.62" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_23-4" x1="956.94" y1="557.52" x2="975.05" y2="557.52" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <radialGradient id="Radial_Gradient_1-51" cx="966.05" cy="553.76" r="7.53" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_35-37" x1="973.22" y1="549.84" x2="956.62" y2="558.33" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-289" x1="980.56" y1="576.29" x2="1023.76" y2="561.77" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-290" x1="986.64" y1="582.45" x2="991.13" y2="550.06" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-291" x1="981.32" y1="557.07" x2="1014.73" y2="557.07" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#9f19ab" />
            <stop offset="0.43" stopColor="#5f27bd" />
            <stop offset="0.9" stopColor="#3d065f" />
          </linearGradient>
          <linearGradient id="linear-gradient-292" x1="981.32" y1="554.4" x2="1014.73" y2="554.4" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="New_Gradient_Swatch_copy_35-38" x1="982.34" y1="534.27" x2="948.38" y2="539.93" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-39" x1="983.72" y1="542.6" x2="949.77" y2="548.26" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-40" x1="983.46" y1="541.03" x2="949.51" y2="546.69" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-41" x1="982.6" y1="535.84" x2="948.64" y2="541.5" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-293" x1="985.09" y1="584.18" x2="1005.92" y2="584.18" xlinkHref="#linear-gradient-284" />
          <linearGradient id="linear-gradient-294" x1="984.99" y1="583.91" x2={985} y2="583.91" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-295" x1="1006.15" y1="583.91" x2="1006.15" y2="583.91" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <radialGradient id="Radial_Gradient_1-52" cx="995.57" cy="574.93" r="8.66" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-296" x1="991.1" y1="579.64" x2="1015.26" y2="552.58" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-297" x1="1003.96" y1="574.67" x2="986.76" y2="574.67" xlinkHref="#linear-gradient-284" />
          <linearGradient id="New_Gradient_Swatch_copy_23-5" x1="989.72" y1="574.76" x2="1001.35" y2="574.76" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <linearGradient id="Linear_Gradient_1-2" data-name="Linear Gradient 1" x1="995.57" y1="580.4" x2="995.57" y2="568.75" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_23-6" x1="986.46" y1="573.65" x2="1004.57" y2="573.65" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_23" />
          <radialGradient id="Radial_Gradient_1-53" cx="995.57" cy="569.89" r="7.53" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="New_Gradient_Swatch_copy_35-42" x1="1002.74" y1="565.97" x2="986.14" y2="574.46" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="linear-gradient-298" x1="998.94" y1="578.58" x2="1034.54" y2="605.68" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#200041" />
            <stop offset="0.22" stopColor="#563e83" />
            <stop offset="0.27" stopColor="#4e367c" />
            <stop offset="0.48" stopColor="#311b61" />
            <stop offset="0.57" stopColor="#2a1155" />
            <stop offset="0.7" stopColor="#230446" />
            <stop offset="0.81" stopColor="#200041" />
            <stop offset={1} stopColor="#200041" />
          </linearGradient>
          <linearGradient id="linear-gradient-299" x1="1042.62" y1="584.44" x2="1042.7" y2="584.5" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="linear-gradient-300" x1="999.82" y1="582.01" x2="1042.41" y2="582.01" xlinkHref="#linear-gradient-282" />
          <radialGradient id="Radial_Gradient_1-54" cx="1024.15" cy="576.15" r="15.15" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-301" x1="1016.34" y1="584.41" x2="1058.59" y2="537.05" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-5" />
          <linearGradient id="New_Gradient_Swatch_copy_35-43" x1="1040.86" y1="569.48" x2="1008.41" y2="577.5" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-44" x1="1041.69" y1="572.83" x2="1009.24" y2="580.84" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-45" x1="1040.24" y1="566.95" x2="1007.79" y2="574.97" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <linearGradient id="New_Gradient_Swatch_copy_35-46" x1="1042.31" y1="575.35" x2="1009.86" y2="583.37" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#New_Gradient_Swatch_copy_35" />
          <radialGradient id="radial-gradient-182" cx="6091.08" cy="-15093.1" r="29.44" gradientTransform="matrix(0.59, -0.75, 0.19, 0.15, 249.53, 7421.14)" xlinkHref="#radial-gradient-15" />
          <radialGradient id="radial-gradient-183" cx="6082.52" cy="-15375.08" r="29.44" gradientTransform="matrix(0.59, -0.75, 0.19, 0.15, 249.53, 7421.14)" xlinkHref="#radial-gradient-15" />
          <radialGradient id="radial-gradient-184" cx="1018.33" cy="-1851.06" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-185" cx="1018.33" cy="-1860.46" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-186" cx="990.58" cy="1977.21" r="2.5" gradientTransform="translate(0 -2126.88) scale(1 1.37)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-187" cx="960.66" cy="1964.96" r="2.5" gradientTransform="translate(0 -2126.88) scale(1 1.37)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-188" cx="959.66" cy="-1910.58" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-189" cx="959.41" cy="-1900.46" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-190" cx="1028.99" cy="-1851.06" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-191" cx="1028.99" cy="-1860.46" r="2.5" gradientTransform="translate(0 1842.74) scale(1 0.68)" xlinkHref="#radial-gradient-8" />
          <radialGradient id="radial-gradient-192" cx="-2414.39" cy="-8234.64" r="48.83" gradientTransform="matrix(0, 1.08, -0.44, 0, -2644.42, 3182.4)" gradientUnits="userSpaceOnUse">
            <stop offset={0} stopColor="#4f18ad" />
            <stop offset="0.29" stopColor="#3a127f" stopOpacity="0.73" />
            <stop offset="0.94" stopColor="#05010a" stopOpacity="0.06" />
            <stop offset={1} stopOpacity={0} />
          </radialGradient>
          <clipPath id="clip-path-14">
            <path d="M593.35,154.23c-7.22,2-12.67,8.48-15.53,17.65l-13.52,3.7-1.79.49c2.87-9.17,8.32-15.68,15.54-17.65Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-15">
            <path d="M562.51,176.07l15.31-4.19-.23.08-15.3,4.18Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-16">
            <path d="M579,171.51c-.4.11-.81.23-1.21.37l-15.31,4.19c.41-.14.81-.27,1.22-.38Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-17">
            <path d="M601.41,241.69c5.8,3.49,11.61,4.44,16.78,3l-15.3,4.18c-5.17,1.42-11,.46-16.78-3a38.07,38.07,0,0,1-6.85-5.34c-15.56-15.11-23.16-43.94-17-64.4l15.3-4.18c-6.18,20.46,1.42,49.29,17,64.39A38,38,0,0,0,601.41,241.69Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-18">
            <path d="M576.75,187l15.3-4.19c-3.23.89-5.46,4.83-5.4,10.39.06,6.72,3.45,13.52,7.82,16.14a8.26,8.26,0,0,0,1.47.71,6,6,0,0,0,3.61.22l-15.3,4.19a6,6,0,0,1-3.62-.22,9,9,0,0,1-1.47-.71c-4.37-2.63-7.75-9.42-7.82-16.14C571.28,191.82,573.51,187.88,576.75,187Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-19">
            <path d="M576.62,196.9l15.31-4.19c-.55.15-.92.82-.92,1.74a3.36,3.36,0,0,0,1.32,2.72,1.15,1.15,0,0,0,.25.12l-15.31,4.18a1.42,1.42,0,0,1-.25-.12,3.35,3.35,0,0,1-1.31-2.71C575.7,197.71,576.08,197.05,576.62,196.9Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-20">
            <path d="M576.62,196.9l15.31-4.19a1,1,0,0,1,.6,0l-15.31,4.19A1,1,0,0,0,576.62,196.9Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-21">
            <path d="M594.3,200.41a3.32,3.32,0,0,0,1.32,2.71l-15.31,4.19A3.35,3.35,0,0,1,579,204.6Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-22">
            <path d="M600.13,219.22h0l-15.31,4.19h0l1.79-.49,1.9-.52,2-.54,2-.54,2-.55,2-.54,1.89-.52,1.79-.49Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-23">
            <path d="M594.07,203.73l-13.51,3.7h0a1.15,1.15,0,0,1-.25-.12l1.79-.49,1.89-.52,2-.53,2-.55,2-.55,2-.54,1.89-.51,1.79-.49-15.29,4.18h0l1.79-.49,1.89-.52,2-.54,2-.54,2-.55,2-.54,1.9-.52,1.79-.49h0a1.34,1.34,0,0,0,.24.12Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-24">
            <path d="M580.56,207.43c.46-.14,1.09-.3,1.55-.43l1.65-.45.84-.23,1.73-.47.88-.24,1.75-.48,1.75-.48,1.71-.47,1.65-.45-13.51,3.7Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-25">
            <path d="M600.13,219.22a1.55,1.55,0,0,0,.56.62L585.38,224a1.71,1.71,0,0,1-.56-.62l1.79-.49,1.9-.52,2-.54,2-.54,2-.55,2-.54,1.9-.52Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-26">
            <path d="M600.69,219.84l.15.08L585.38,224l.16.07h0l1.78-.48,1.89-.52,2-.54,2-.54,2-.55,2-.54,1.89-.51,1.78-.49-15.26,4.17a.56.56,0,0,1-.16-.07l1.79-.49,1.89-.52,2-.53,2-.55,2-.54,2-.54,1.89-.52,1.78-.49L585.38,224h0l1.79-.49,1.9-.52,2-.54,2-.54,2-.55,2-.54,1.9-.52,1.79-.49Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-27">
            <path d="M600.11,217.14a2,2,0,0,0,0,2.08l-15.31,4.19a2,2,0,0,1,0-2.08Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-28">
            <path d="M595.86,203.24a1,1,0,0,0,.61,0l-15.31,4.19a1,1,0,0,1-.6,0l1.55-.43.82-.22,1.67-.46,1.73-.47,1.75-.48,1.76-.48,1.73-.48,1.69-.46.93-.25.23-.06.22-.07.23-.06.22-.06.23-.06.22-.06.1,0a.9.9,0,0,1,.22-.06Zm0,0h0" fill="none" />
          </clipPath>
          <clipPath id="clip-path-29">
            <path d="M596.47,203.28l-15.31,4.19c.55-.15.92-.82.91-1.75l15.31-4.18C597.38,202.47,597,203.13,596.47,203.28Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-30">
            <path d="M595.11,189.12c-.54.15-.91.81.61,0l-1.52,1.71-13.51,3.69-.28-1.21-1.51,1.7c0-.93.36-1.59.91-1.74Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-31">
            <path d="M579.81,193.31l15.3-4.19a1,1,0,0,1,.61,0,1.15,1.15,0,0,1,.25.12l-15.3,4.19a1.51,1.51,0,0,0-.26-.12A1,1,0,0,0,579.81,193.31Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-32">
            <path d="M599.05,199.65a1,1,0,0,0,.6,0l-15.3,4.19a1,1,0,0,1-.6,0C588.34,202.58,594.29,199.45,599.05,199.65Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-33">
            <path d="M580.67,193.47l15.3-4.19a3.35,3.35,0,0,1,1.31,2.71L582,196.18A3.34,3.34,0,0,0,580.67,193.47Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-34">
            <path d="M576.75,187l15.3-4.19a5.92,5.92,0,0,1,3.62.23l-15.3,4.18A5.92,5.92,0,0,0,576.75,187Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-35">
            <path d="M599.65,199.69l-15.3,4.19c.54-.15.92-.82.91-1.74L600.57,198C600.57,198.88,600.2,199.54,599.65,199.69Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-36">
            <path d="M583.7,199.3l15.3-4.18a1.15,1.15,0,0,1,.25.12,3.35,3.35,0,0,1,1.32,2.71l-15.31,4.19a3.37,3.37,0,0,0-1.31-2.72A1.42,1.42,0,0,0,583.7,199.3Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-37">
            <path d="M604.84,212a.6.6,0,0,0-.31.19l-15.31,4.19a.82.82,0,0,1,.31-.2Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-38">
            <path d="M589.53,216.15,604.84,212a.73.73,0,0,1,.56.1l-15.31,4.19A.73.73,0,0,0,589.53,216.15Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-39">
            <path d="M599.55,210.26l-15.3,4.19a7,7,0,0,0,4.41-4.47L604,205.8A6.94,6.94,0,0,1,599.55,210.26Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-40">
            <path d="M590.09,216.26l15.31-4.19a1.56,1.56,0,0,1,.54.61l-15.3,4.19A1.58,1.58,0,0,0,590.09,216.26Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-41">
            <path d="M589.24,209.36l15.31-4.19a.93.93,0,0,0-.59.63L588.66,210A.91.91,0,0,1,589.24,209.36Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-42">
            <path d="M609.81,223.19a.59.59,0,0,0,.39,0l-15.3,4.19a.69.69,0,0,1-.4,0C599.09,226.12,605.05,223,609.81,223.19Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-43">
            <path d="M589.24,209.36l15.31-4.19a.83.83,0,0,1,.65.12,1.57,1.57,0,0,1,.33.27,2.6,2.6,0,0,1,.56,1l-15.31,4.19a2.64,2.64,0,0,0-.56-1,1.26,1.26,0,0,0-.32-.26A.81.81,0,0,0,589.24,209.36Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-44">
            <path d="M610.2,223.21l-15.3,4.19c.35-.1.59-.53.59-1.13a2.5,2.5,0,0,0-.3-1.16l15.3-4.18a2.43,2.43,0,0,1,.3,1.15C610.8,222.68,610.55,223.12,610.2,223.21Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-45">
            <path d="M579,171.51c6.39-1.75,12.87-.27,19.52,2.64L585,177.85l-1.79.49c-6.65-2.92-13.12-4.39-19.51-2.65Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-46">
            <path d="M598.55,174.15c-1.81,1.8-2.92,4.93-2.88,8.88L588,185.12l-5.87,1.6-1.78.49c0-3.94,1.07-7.07,2.87-8.87Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-47">
            <path d="M606.09,206.57c1.44,4.41,4,7.81,6.72,9.46l-15.3,4.19c-2.75-1.65-5.29-5.05-6.73-9.46Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-48">
            <path d="M576.35,152.11l15.31-4.19a19.23,19.23,0,0,1,3.06-.58l-15.31,4.18A20.68,20.68,0,0,0,576.35,152.11Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-49">
            <path d="M610.61,203.84h0L595.31,208h0l1.78-.49L599,207l2-.54,2-.54,2-.55,2-.54,1.89-.52,1.79-.49Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-50">
            <path d="M610.61,203.84h0l.25.12L595.31,208l.24.12h0l1.78-.49,1.89-.52,2-.53,2-.55,2-.55,2-.53,1.9-.52,1.78-.49-15.27,4.18-.24-.12,1.78-.49L599,207l2-.54,2-.54,2-.55,2-.54,1.9-.52Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-51">
            <path d="M609.3,201.13a3.35,3.35,0,0,0,1.31,2.71L595.31,208a3.35,3.35,0,0,1-1.32-2.71h0l15.31-4.19L594,205.32c0-.94.37-1.6.91-1.75l15.3-4.18C609.66,199.54,609.29,200.2,609.3,201.13Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-52">
            <path d="M610.86,204a1,1,0,0,0,.61,0l-15.31,4.19a1,1,0,0,1-.61,0C600.14,206.89,606.1,203.76,610.86,204Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-53">
            <path d="M597.42,153.62a1.26,1.26,0,0,0,.28-.05l-15.3,4.19a1.35,1.35,0,0,1-.28,0,17.55,17.55,0,0,0-4.07.62l15.3-4.19A17.54,17.54,0,0,1,597.42,153.62Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-54">
            <path d="M594.9,203.57l15.3-4.18a1,1,0,0,1,.61,0,1.15,1.15,0,0,1,.25.12l-15.31,4.18a1.34,1.34,0,0,0-.24-.12A1,1,0,0,0,594.9,203.57Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-55">
            <path d="M613.9,209.8l.24.12L598.59,214l.25.11h0l1.78-.48,1.88-.52,2-.53,2-.55,2-.54,2-.54,1.88-.52,1.78-.48-15.23,4.16-.25-.11,1.79-.49,1.89-.52,2-.54,2-.54,2-.55,2-.54,1.89-.51,1.79-.49L598.59,214h0l15.31-4.19Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-56">
            <path d="M614.14,209.92a.92.92,0,0,0,.61,0l-15.31,4.19a1,1,0,0,1-.6,0C603.43,212.85,609.39,209.72,614.14,209.92Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-57">
            <path d="M612.58,207.09a3.32,3.32,0,0,0,1.32,2.71L598.59,214a3.4,3.4,0,0,1-1.32-2.72l15.31-4.18-15.31,4.18c0-.93.37-1.59.91-1.74l15.31-4.19C613,205.49,612.57,206.15,612.58,207.09Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-58">
            <path d="M611.47,204l-15.31,4.19c.55-.15.92-.81.91-1.75a3.32,3.32,0,0,0-1.32-2.71l15.31-4.18a3.33,3.33,0,0,1,1.31,2.71C612.38,203.19,612,203.85,611.47,204Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-59">
            <path d="M599,151.19c0,1.25-.49,2.17-1.25,2.38l-15.3,4.19c.75-.21,1.25-1.13,1.24-2.38Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-60">
            <path d="M598.18,209.53l15.31-4.19a1,1,0,0,1,.6,0,1.51,1.51,0,0,1,.26.12L599,209.69a1.15,1.15,0,0,0-.25-.12A1,1,0,0,0,598.18,209.53Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-61">
            <path d="M576.27,129.41l15.3-4.18a1.33,1.33,0,0,1,.83,0l-15.3,4.19A1.34,1.34,0,0,0,576.27,129.41Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-62">
            <path d="M612.81,216a6.43,6.43,0,0,0,5.06.92l-15.31,4.19a6.48,6.48,0,0,1-5-.92l1.78-.49,1.9-.52,2-.54,2-.55,2-.54,2-.54,1.89-.52Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-63">
            <path d="M585.77,176.83l15.31-4.19a5.85,5.85,0,0,1,3.62.23,9,9,0,0,1,1.47.7l-15.31,4.19a8.26,8.26,0,0,0-1.47-.71A5.84,5.84,0,0,0,585.77,176.83Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-64">
            <path d="M614.75,210l-15.31,4.19c.55-.15.92-.81.91-1.74a3.35,3.35,0,0,0-1.31-2.71l15.31-4.19a3.37,3.37,0,0,1,1.31,2.71C615.67,209.14,615.29,209.81,614.75,210Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-65">
            <path d="M612.49,197.54a3.35,3.35,0,0,0,1.31,2.71l-15.3,4.19a3.32,3.32,0,0,1-1.32-2.71Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-66">
            <path d="M613.8,200.25h0l-7.65,2.1-7.65,2.09h0l1.78-.49,1.9-.52,2-.53,2-.55,2-.55,2-.54,1.89-.52,1.79-.49Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-67">
            <path d="M613.8,200.25a1.15,1.15,0,0,0,.25.12l-15.31,4.19h0l1.78-.49,1.89-.51,2-.54,2-.55,2-.54,1.95-.54,1.89-.51,1.78-.49-15.24,4.17a1.34,1.34,0,0,1-.24-.12l1.78-.49,1.9-.52,2-.53,2-.55,2-.55,2-.54,1.89-.52Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-68">
            <path d="M614.05,200.37a1,1,0,0,0,.6,0l-15.3,4.19a1,1,0,0,1-.61,0l1.79-.49,1.89-.52,2-.54,2-.54,1-.28,1-.27,1-.27,1.93-.53.94-.26A6.71,6.71,0,0,1,614.05,200.37Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-69">
            <path d="M613.39,195.8c-.54.15-.91.81.61,0l-1.51,1.7-7.66,2.1-5.86,1.6L598.7,200l-1.52,1.7c0-.93.37-1.59.91-1.74Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-70">
            <path d="M598.09,200l15.3-4.19a1,1,0,0,1,.61,0,1.15,1.15,0,0,1,.25.12L599,200.15a1.42,1.42,0,0,0-.25-.12A1,1,0,0,0,598.09,200Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-71">
            <path d="M615.77,203.5a3.35,3.35,0,0,0,1.31,2.71l-15.3,4.19a3.37,3.37,0,0,1-1.32-2.72h0l15.31-4.18-15.31,4.18c0-.93.37-1.59.91-1.74l15.3-4.19C616.13,201.9,615.76,202.56,615.77,203.5Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-72">
            <path d="M614.65,200.41l-15.3,4.19c.54-.15.91-.82.91-1.75a3.34,3.34,0,0,0-1.31-2.7l15.3-4.19a3.32,3.32,0,0,1,1.31,2.71C615.57,199.6,615.2,200.26,614.65,200.41Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-73">
            <path d="M601.37,205.94l15.3-4.19a1,1,0,0,1,.61,0,1.51,1.51,0,0,1,.26.12l-15.31,4.19A1.15,1.15,0,0,0,602,206,1,1,0,0,0,601.37,205.94Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-74">
            <path d="M590.86,177.76l15.31-4.19a16.46,16.46,0,0,1,6.14,7.91,22.91,22.91,0,0,1,1.68,8.24l-15.31,4.18a22.4,22.4,0,0,0-1.68-8.23A16.35,16.35,0,0,0,590.86,177.76Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-75">
            <path d="M617.94,206.36l-15.31,4.19c.55-.15.92-.81.91-1.74a3.35,3.35,0,0,0-1.31-2.71l15.31-4.19a3.34,3.34,0,0,1,1.3,2.71C618.86,205.55,618.48,206.21,617.94,206.36Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-76">
            <path d="M617.87,217l-15.31,4.19a5,5,0,0,0,.65-.23c3-1.24,4.82-5.16,4.77-10.16l15.3-4.18c.05,5-1.78,8.91-4.76,10.16A5.53,5.53,0,0,1,617.87,217Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-77">
            <path d="M598.68,193.9,614,189.72a9,9,0,0,1,1.47.7c4.37,2.63,7.75,9.42,7.82,16.15L608,210.75c-.07-6.72-3.46-13.51-7.83-16.14A8.26,8.26,0,0,0,598.68,193.9Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-78">
            <path d="M604.82,129.81c0,.17,0,.34,0,.51l-15.31,4.19c0-.17,0-.34,0-.51Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-79">
            <path d="M581.86,113.33l15.31-4.19a3,3,0,0,1,1.81.11,3.61,3.61,0,0,1,.74.36l-15.3,4.18a4.52,4.52,0,0,0-.74-.35A3,3,0,0,0,581.86,113.33Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-80">
            <path d="M600.93,122.92l-15.3,4.19c1.62-.45,2.74-2.42,2.71-5.22,0-3.37-1.73-6.78-3.92-8.1l15.3-4.18c2.19,1.31,3.9,4.73,3.93,8.09C603.68,120.5,602.55,122.48,600.93,122.92Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-81">
            <path d="M592.69,128.41l15.3-4.19a3.47,3.47,0,0,1,2.12.13,4.88,4.88,0,0,1,.86.42L595.67,129a6.13,6.13,0,0,0-.86-.41A3.4,3.4,0,0,0,592.69,128.41Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-82">
            <path d="M633.4,192.33l.19.07-15.3,4.19-.19-.07c-7.29-2.69-14.3-6.88-21.1-10.85l15.31-4.19C619.1,185.45,626.11,189.64,633.4,192.33Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-83">
            <path d="M596.36,160l15.31-4.19a4.71,4.71,0,0,0,1.58,3.56c9.06,6.91,16.46,19.13,20.15,32.94l-15.3,4.19c-3.69-13.81-11.09-26-20.16-32.94A4.77,4.77,0,0,1,596.36,160Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-84">
            <path d="M595.67,129l15.3-4.18c2.46,1.47,4.39,5.19,4.59,9,0,.17,0,.35,0,.52l-15.3,4.19c0-.18,0-.35,0-.52C600.06,134.14,598.13,130.43,595.67,129Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-85">
            <path d="M618.19,244.72l-15.3,4.18c6.93-1.89,12.71-8.05,15.74-18.08,3-9.83,2.85-22.15-.34-34.23l15.3-4.19c3.19,12.09,3.32,24.4.35,34.23C630.9,236.66,625.13,242.82,618.19,244.72Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-86">
            <path d="M602.43,138.72l15.31-4.19a2.6,2.6,0,0,1,.34.16l-15.31,4.19A2.11,2.11,0,0,0,602.43,138.72Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-87">
            <path d="M618.63,140.78,603.33,145c.74-.2,1.25-1.1,1.24-2.38a4.56,4.56,0,0,0-1.8-3.7l15.31-4.19a4.58,4.58,0,0,1,1.79,3.7C619.89,139.67,619.37,140.57,618.63,140.78Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-88">
            <path d="M619.85,251l-15.31,4.18c8.85-2.41,15.82-10.93,18.79-24,5.57-24.51-4.63-56.71-22.79-71.91l15.31-4.19c18.15,15.2,28.36,47.4,22.79,71.92C635.67,240,628.69,248.56,619.85,251Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-89">
            <path d="M592.86,111.41l15.3-4.19a1.65,1.65,0,0,1,1,.06,2.14,2.14,0,0,1,.4.2l-15.3,4.18a2.42,2.42,0,0,0-.4-.19A1.66,1.66,0,0,0,592.86,111.41Z" fill="none" />
          </clipPath>
          <clipPath id="clip-path-90">
            <path d="M610.23,114.8,594.93,119c.89-.24,1.5-1.33,1.49-2.87a5.52,5.52,0,0,0-2.16-4.46l15.3-4.18a5.46,5.46,0,0,1,2.16,4.46C611.74,113.47,611.13,114.56,610.23,114.8Z" fill="none" />
          </clipPath>
          <radialGradient id="radial-gradient-193" cx="7989.08" cy="-202.61" r="41.78" gradientTransform="matrix(0.38, 0, 0, 0.9, -2394.7, 372.48)" xlinkHref="#radial-gradient-9" />
          <radialGradient id="radial-gradient-194" cx="1070.68" cy="41.1" r="37.5" gradientTransform="translate(-455.25 221.89) rotate(-3.93)" xlinkHref="#Radial_Gradient_1" />
          <linearGradient id="linear-gradient-302" x1="1073.31" y1="53.94" x2="1093.47" y2="53.94" gradientTransform="translate(-455.25 221.89) rotate(-3.93)" xlinkHref="#linear-gradient-16" />
          <radialGradient id="radial-gradient-195" cx="42265.5" cy="8029.37" r="41.78" gradientTransform="matrix(0, -0.2, 0.25, 0, -1387.36, 8547.06)" xlinkHref="#radial-gradient-9" />
        </defs>
        <g style={{isolation: 'isolate'}}>
          <g id="Слой_2" data-name="Слой 2">
            <g id="Vrstva_1" data-name="Vrstva 1">
              <g id="bg">
                <rect width="1147.76" height="751.76" fill="transparent" />
                <polyline points="318.12 184.17 325.09 188.65 321.96 211.71 318.12 209.25 318.12 184.17" fill="url(#linear-gradient-2)" />
              </g>
              <g>
                <g>
                  <g opacity="0.2">
                    <path d="M271.28,261.54a7.21,7.21,0,0,0,3.84-1l15.55-10.41a4.51,4.51,0,0,0,2.21-3.85,5.24,5.24,0,0,0-2.66-4.38l-39.43-24.25a8.84,8.84,0,0,0-4.67-1.3,7.21,7.21,0,0,0-3.85,1l-15.55,10.41a4.53,4.53,0,0,0-2.2,3.86,5.25,5.25,0,0,0,2.65,4.37l39.44,24.25A8.8,8.8,0,0,0,271.28,261.54Z" opacity={0} />
                    <path d="M227.56,228.39a4.33,4.33,0,0,0-2.11,3.68,5.05,5.05,0,0,0,2.56,4.17l38.71,23.85a8.64,8.64,0,0,0,4.64,1.26,8,8,0,0,0,2.23-.33,7,7,0,0,0,1.57-.73L290.59,250a4.32,4.32,0,0,0,2.1-3.68,5,5,0,0,0-2.55-4.17l-38.72-23.85a8.62,8.62,0,0,0-4.64-1.26,7.54,7.54,0,0,0-2.22.33,6.65,6.65,0,0,0-1.57.73Z" opacity="0.09" />
                    <path d="M228.39,229a4.08,4.08,0,0,0-2,3.5,4.81,4.81,0,0,0,2.46,4l38,23.44a8.45,8.45,0,0,0,4.61,1.23,7.67,7.67,0,0,0,2.19-.36,8.21,8.21,0,0,0,1.55-.74l15.31-10.25a4.08,4.08,0,0,0,2-3.5,4.81,4.81,0,0,0-2.45-4l-38-23.44a8.43,8.43,0,0,0-4.6-1.24,8,8,0,0,0-2.2.37,7.82,7.82,0,0,0-1.54.74Z" opacity="0.18" />
                    <path d="M229.23,229.68a3.86,3.86,0,0,0-1.9,3.32,4.61,4.61,0,0,0,2.35,3.76l37.28,23a8.15,8.15,0,0,0,4.57,1.2,7.47,7.47,0,0,0,2.17-.4,8.59,8.59,0,0,0,1.52-.75l15.19-10.17a3.82,3.82,0,0,0,1.9-3.32A4.59,4.59,0,0,0,290,242.6l-37.28-23a8.32,8.32,0,0,0-4.57-1.2,7.81,7.81,0,0,0-2.17.4,9.38,9.38,0,0,0-1.52.76Z" opacity="0.27" />
                    <path d="M230.07,230.33a3.62,3.62,0,0,0-1.8,3.14,4.37,4.37,0,0,0,2.25,3.54l36.55,22.64a8.15,8.15,0,0,0,4.54,1.16,7.27,7.27,0,0,0,2.15-.43,10,10,0,0,0,1.49-.77l15.07-10.09a3.6,3.6,0,0,0,1.8-3.13,4.37,4.37,0,0,0-2.25-3.55l-36.55-22.63a8.09,8.09,0,0,0-4.55-1.17,7.6,7.6,0,0,0-2.14.43,11.61,11.61,0,0,0-1.49.77Z" opacity="0.36" />
                    <path d="M230.9,231a3.39,3.39,0,0,0-1.69,3,4.17,4.17,0,0,0,2.14,3.34l35.84,22.23a7.87,7.87,0,0,0,4.51,1.13,7.39,7.39,0,0,0,2.12-.46,13.51,13.51,0,0,0,1.46-.78l15-10a3.38,3.38,0,0,0,1.69-3,4.16,4.16,0,0,0-2.15-3.34L254,220.85a7.89,7.89,0,0,0-4.51-1.13,7.39,7.39,0,0,0-2.12.46,13.51,13.51,0,0,0-1.46.78Z" opacity="0.45" />
                    <path d="M231.74,231.62a3.12,3.12,0,0,0-1.59,2.78,3.93,3.93,0,0,0,2,3.13l35.12,21.82a7.68,7.68,0,0,0,4.47,1.1,7.44,7.44,0,0,0,2.09-.49c.26-.1,1.22-.66,1.44-.8l14.84-9.93a3.16,3.16,0,0,0,1.59-2.78,4,4,0,0,0-2-3.13L254.58,221.5a7.72,7.72,0,0,0-4.48-1.1,7.19,7.19,0,0,0-2.09.49c-.26.1-1.22.66-1.44.8Z" opacity="0.55" />
                    <path d="M232.57,232.26a3,3,0,0,0-1.49,2.6,3.81,3.81,0,0,0,1.94,2.93l34.4,21.42a7.55,7.55,0,0,0,4.45,1.06,7,7,0,0,0,2.06-.52c.21-.08,1.24-.71,1.41-.82l14.72-9.85a2.92,2.92,0,0,0,1.49-2.6,3.74,3.74,0,0,0-1.94-2.92l-34.4-21.42a7.51,7.51,0,0,0-4.44-1.06,7,7,0,0,0-2.07.52c-.2.08-1.23.7-1.41.81Z" opacity="0.64" />
                    <path d="M233.41,232.91a2.69,2.69,0,0,0-1.39,2.42,3.53,3.53,0,0,0,1.84,2.71l33.68,21a7.41,7.41,0,0,0,4.41,1,7.11,7.11,0,0,0,2-.55c.15-.06,1.25-.75,1.38-.83l14.6-9.77a2.71,2.71,0,0,0,1.39-2.42,3.56,3.56,0,0,0-1.84-2.72l-33.68-21a7.27,7.27,0,0,0-4.41-1,6.88,6.88,0,0,0-2,.55c-.15.06-1.25.74-1.38.83Z" opacity="0.73" />
                    <path d="M234.24,233.55a2.48,2.48,0,0,0-1.28,2.24,3.3,3.3,0,0,0,1.74,2.51l32.95,20.61a7.2,7.2,0,0,0,4.38,1,7,7,0,0,0,2-.58c.1-.05,1.27-.79,1.35-.85l14.48-9.69a2.47,2.47,0,0,0,1.29-2.24,3.33,3.33,0,0,0-1.74-2.51l-32.95-20.61a7.2,7.2,0,0,0-4.38-1,7,7,0,0,0-2,.58c-.1,0-1.27.79-1.36.84Z" opacity="0.82" />
                    <path d="M235.08,234.2a2.24,2.24,0,0,0-1.18,2.06,3.12,3.12,0,0,0,1.63,2.3l32.24,20.2a7,7,0,0,0,4.35,1,6.66,6.66,0,0,0,2-.62s1.29-.83,1.34-.85l14.36-9.62a2.25,2.25,0,0,0,1.18-2.06,3.16,3.16,0,0,0-1.63-2.3l-32.24-20.2a7,7,0,0,0-4.35-1,6.82,6.82,0,0,0-2,.62c-.05,0-1.28.83-1.33.86Z" opacity="0.91" />
                    <path d="M274.16,258.9l15.55-10.4c1.61-1,1.41-2.8-.45-4l-31.52-19.8a6.45,6.45,0,0,0-6.28-.28l-15.54,10.4c-1.61,1-1.41,2.8.45,4l31.52,19.8A6.43,6.43,0,0,0,274.16,258.9Z" />
                  </g>
                  <g>
                    <polygon points="284.46 151.54 284.46 253 247.2 229.18 247.2 127.74 284.46 151.54" fill="url(#New_Gradient_Swatch_copy_25)" />
                    <polygon points="284.46 151.54 284.46 253 247.2 229.18 247.2 127.74 284.46 151.54" fill="url(#New_Gradient_Swatch_copy_35)" />
                    <polygon points="247.2 127.74 284.46 151.54 291.91 146.76 254.61 122.94 247.2 127.74" fill="url(#New_Gradient_Swatch_copy_35-2)" />
                  </g>
                  <g>
                    <polygon points="284.44 147.6 284.44 151.78 291.91 147 291.91 142.82 284.44 147.6" fill="url(#New_Gradient_Swatch_copy_25-2)" />
                    <polygon points="284.46 147.6 284.46 249.06 247.2 225.24 247.2 123.81 284.46 147.6" fill="url(#New_Gradient_Swatch_copy_35-3)" />
                    <polygon points="284.46 147.6 284.46 151.78 247.2 127.96 247.2 123.81 284.46 147.6" fill="url(#New_Gradient_Swatch_copy_25-3)" />
                    <polygon points="247.2 123.81 284.46 147.6 291.91 142.82 254.61 119 247.2 123.81" fill="url(#New_Gradient_Swatch_copy_25-4)" />
                  </g>
                  <g>
                    <polygon points="284.44 203.07 284.44 151.54 291.91 146.76 291.91 248.22 271.35 261.53 271.35 214.67 284.44 203.07" fill="url(#New_Gradient_Swatch_copy_35-4)" />
                    <polygon points="271.37 214.67 271.37 261.53 233.87 237.65 233.87 190.81 271.37 214.67" fill="url(#New_Gradient_Swatch_copy_25-5)" />
                    <polygon points="271.37 214.67 271.37 261.53 233.87 237.65 233.87 190.81 271.37 214.67" fill="url(#New_Gradient_Swatch_copy_35-5)" />
                    <polygon points="291.91 248.22 271.35 261.53 271.35 255.12 291.91 241.8 291.91 248.22" fill="url(#New_Gradient_Swatch_copy_13)" />
                    <polygon points="271.37 261.53 233.87 237.65 233.87 231.24 271.37 255.12 271.37 261.53" fill="url(#New_Gradient_Swatch_copy_13-2)" />
                    <polygon points="233.87 190.81 271.37 214.67 284.75 202.79 247.21 178.91 233.87 190.81" fill="url(#New_Gradient_Swatch_copy_35-6)" />
                    <polygon points="271.15 198.25 253.1 186.77 248.5 190.86 266.54 202.34 271.15 198.25" fill="url(#New_Gradient_Swatch_copy_26)" />
                    <polygon points="253.1 187.26 248.83 191.07 248.5 190.86 253.1 186.77 271.15 198.25 270.82 198.54 253.1 187.26" fill="url(#New_Gradient_Swatch_copy_25-6)" />
                  </g>
                  <polygon points="249.64 186.47 246.41 184.39 238.85 191.14 242.05 193.21 249.64 186.47" fill="url(#linear-gradient-3)" />
                  <g>
                    <path d="M266.39,144.56c-9.35-5.92-16.94-1.18-16.94,10.59s7.59,26.12,16.94,32,16.93,1.18,16.93-10.59S275.74,150.49,266.39,144.56Zm0,36.07c-6.48-4.1-11.73-14-11.73-22.18s5.25-11.43,11.73-7.33,11.72,14,11.72,22.18S272.86,184.73,266.39,180.63Z" fill="url(#linear-gradient-4)" />
                    <path d="M264.91,145.51c-9.35-5.92-16.93-1.18-16.93,10.59s7.58,26.11,16.93,32,16.93,1.18,16.93-10.59S274.26,151.43,264.91,145.51Z" fill="url(#linear-gradient-5)" />
                    <g opacity="0.5" style={{mixBlendMode: 'color-dodge'}}>
                      <path d="M265.16,145.35c-4.74-3-9-3.26-12.1-1.25,3.05-1.84,7.23-1.52,11.85,1.41,9.35,5.92,16.93,20.26,16.93,32,0,5.8-1.84,9.9-4.83,11.85,3.14-1.89,5.08-6,5.08-12C282.09,165.61,274.51,151.27,265.16,145.35Z" fill="url(#Radial_Gradient_1)" />
                    </g>
                    <g>
                      <ellipse cx="264.91" cy="166.82" rx="14.07" ry="25.65" transform="translate(-46.35 133.34) rotate(-26.06)" fill="#231f20" />
                      <ellipse cx="264.91" cy="166.82" rx="13.43" ry="24.49" transform="translate(-46.35 133.34) rotate(-26.06)" fill="url(#radial-gradient)" />
                      <ellipse cx="264.91" cy="166.82" rx="11.51" ry="20.99" transform="translate(-46.35 133.34) rotate(-26.06)" fill="#f1f2f2" />
                      <ellipse cx="264.91" cy="166.82" rx="9.59" ry="17.49" transform="translate(-46.35 133.34) rotate(-26.06)" fill="url(#radial-gradient-2)" />
                      <ellipse cx="264.91" cy="166.82" rx="7.67" ry="13.99" transform="translate(-46.35 133.34) rotate(-26.06)" fill="#f1f2f2" />
                      <path d="M271.84,171.21c0,4.81-3.11,6.75-6.93,4.33S258,167.25,258,162.43s3.1-6.75,6.93-4.33S271.84,166.39,271.84,171.21Z" fill="url(#radial-gradient-3)" />
                      <path d="M269.53,169.74c0,3.21-2.07,4.51-4.62,2.89a11.39,11.39,0,0,1-4.62-8.73c0-3.21,2.07-4.51,4.62-2.89A11.39,11.39,0,0,1,269.53,169.74Z" fill="#f1f2f2" />
                      <path d="M267.22,168.28c0,1.61-1,2.25-2.31,1.45a5.71,5.71,0,0,1-2.31-4.37c0-1.61,1-2.25,2.31-1.45A5.74,5.74,0,0,1,267.22,168.28Z" fill="url(#New_Gradient_Swatch_copy_9)" />
                      <path d="M264.91,146.48c-4.86-3.08-9.21-3.14-12.18-.74,3-2.16,7.19-2,11.89,1,8.92,5.66,16.16,19.35,16.16,30.58,0,5.12-1.51,8.84-4,10.85,2.66-1.94,4.28-5.76,4.28-11.07C281.07,165.82,273.83,152.13,264.91,146.48Z" fill="url(#radial-gradient-4)" style={{mixBlendMode: 'color-dodge'}} />
                      <path d="M264.91,152.29c-3.5-2.22-6.64-2.24-8.76-.48,2.11-1.53,5.12-1.41,8.47.71,6.37,4,11.54,13.81,11.54,21.84,0,3.61-1.05,6.25-2.78,7.7,1.9-1.39,3.07-4.12,3.07-7.93C276.45,166.11,271.28,156.33,264.91,152.29Z" fill="url(#radial-gradient-5)" style={{mixBlendMode: 'color-dodge'}} />
                      <path d="M264.91,158.1c-2.15-1.36-4.07-1.34-5.34-.22,1.26-.89,3.06-.81,5.05.45,3.82,2.42,6.93,8.29,6.93,13.1A5.92,5.92,0,0,1,270,176c1.16-.82,1.88-2.46,1.88-4.77C271.84,166.39,268.73,160.52,264.91,158.1Z" fill="url(#radial-gradient-6)" style={{mixBlendMode: 'color-dodge'}} />
                      <path d="M264.91,163.91c-.77-.48-1.44-.44-1.86,0a1.53,1.53,0,0,1,1.57.21,5.72,5.72,0,0,1,2.31,4.37,2.07,2.07,0,0,1-.45,1.43,1.77,1.77,0,0,0,.74-1.66A5.74,5.74,0,0,0,264.91,163.91Z" fill="url(#radial-gradient-7)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <path d="M282.06,171.37c2.63-1.14,4.38-3.13,3.91-4.44s-3-1.44-5.62-.3-4.39,3.13-3.92,4.44S279.42,172.51,282.06,171.37Z" fill="url(#radial-gradient-8)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g>
                    <path d="M243.36,227c1.56,0,3.08-1.68,4.16-4.6,1.22-3.31,1.86-8.05,1.86-13.7h-.8c0,7-1,11.14-1.8,13.37-.94,2.54-2.22,4.05-3.42,4.05-1.63,0-3.28-3-3.28-8.59V198h-.8v19.58C239.28,224.07,241.33,227,243.36,227Z" fill="#6c52a3" />
                    <g opacity="0.3">
                      <path d="M244.22,227c1.41,0,2.78-1.68,3.75-4.6a45.74,45.74,0,0,0,1.68-13.7h-.72c0,7-.89,11.14-1.63,13.37-.84,2.54-2,4.05-3.08,4.05-1.47,0-2.95-3-2.95-8.59V198h-.72v19.58C240.55,224.07,242.39,227,244.22,227Z" fill="#6c52a3" />
                    </g>
                    <polygon points="239.43 192.53 239.43 199.65 241.48 198.32 241.48 191.21 239.43 192.53" fill="url(#New_Gradient_Swatch_copy_25-7)" />
                    <polygon points="239.44 192.53 239.44 199.65 237.57 198.45 237.57 191.36 239.44 192.53" fill="url(#New_Gradient_Swatch_copy_25-8)" />
                    <polygon points="239.1 190.02 239.1 194.19 244.32 190.84 247.81 187.86 247.81 185.86 239.1 190.02" fill="url(#New_Gradient_Swatch_copy_25-9)" />
                    <polygon points="239.12 190.02 239.12 194.19 236.77 192.7 236.77 188.55 239.12 190.02" fill="url(#New_Gradient_Swatch_copy_25-10)" />
                    <polygon points="236.77 188.55 239.12 190.02 247.81 185.86 245.42 184.37 236.77 188.55" fill="url(#New_Gradient_Swatch_copy_25-11)" />
                  </g>
                  <polygon points="276.17 203.53 272.94 201.45 265.37 208.2 268.58 210.27 276.17 203.53" fill="url(#New_Gradient_Swatch_copy_9-2)" />
                  <g>
                    <path d="M259.58,237.31c1.74,0,3.3-1.79,4.4-5,1.26-3.75,1.91-9.22,1.91-16.25h-.8c0,6.83-.64,12.34-1.86,15.94-1,2.88-2.27,4.47-3.65,4.47-2.19,0-4.54-4.2-4.54-10.46V210.86h-.8V226C254.24,232.33,256.59,237.31,259.58,237.31Z" fill="#6c52a3" />
                    <g opacity="0.3">
                      <path d="M260.38,237.31c1.85,0,3.51-1.79,4.68-5,1.34-3.75,2-9.22,2-16.25h-.85c0,6.83-.68,12.34-2,15.94-1,2.88-2.41,4.47-3.88,4.47-2.33,0-4.82-4.2-4.82-10.46V210.86h-.85V226C254.71,232.33,257.2,237.31,260.38,237.31Z" fill="#6c52a3" />
                    </g>
                    <polygon points="265.95 209.59 265.95 216.71 268.01 215.39 268.01 208.27 265.95 209.59" fill="url(#New_Gradient_Swatch_copy_25-12)" />
                    <polygon points="265.97 209.59 265.97 216.71 264.1 215.52 264.1 208.42 265.97 209.59" fill="url(#New_Gradient_Swatch_copy_25-13)" />
                    <polygon points="265.63 207.08 265.63 211.26 270.85 207.91 274.34 204.93 274.34 202.93 265.63 207.08" fill="url(#New_Gradient_Swatch_copy_25-14)" />
                    <polygon points="265.65 207.08 265.65 211.26 263.3 209.76 263.3 205.62 265.65 207.08" fill="url(#New_Gradient_Swatch_copy_25-15)" />
                    <polygon points="263.3 205.62 265.65 207.08 274.34 202.93 271.95 201.43 263.3 205.62" fill="url(#New_Gradient_Swatch_copy_25-16)" />
                  </g>
                  <g>
                    <path d="M251.29,208a1.28,1.28,0,0,1-.45,1.12s-.52.33-.52.34c-.3.17-.11-.23-.55-.51a4,4,0,0,1-1.62-3.06c0-.56-.47-.56-.18-.75l.58-.34a1.07,1.07,0,0,1,1.13.14A4,4,0,0,1,251.29,208Z" fill="url(#linear-gradient-6)" />
                    <path d="M250.73,208.37c0,1.13-.73,1.58-1.62,1a4,4,0,0,1-1.62-3c0-1.13.73-1.58,1.62-1A4,4,0,0,1,250.73,208.37Z" fill="url(#New_Gradient_Swatch_copy_10)" />
                    <path d="M250.33,208.29a1.11,1.11,0,0,1-.38,1l-.79.51c-.25.16-.09-.19-.47-.43a3.46,3.46,0,0,1-1.39-2.63c0-.48-.4-.48-.15-.64l.83-.52a.91.91,0,0,1,1,.12A3.43,3.43,0,0,1,250.33,208.29Z" fill="url(#linear-gradient-7)" />
                    <path d="M249.52,208.82c0,1-.62,1.35-1.39.87a3.43,3.43,0,0,1-1.39-2.63c0-1,.62-1.35,1.39-.87A3.43,3.43,0,0,1,249.52,208.82Z" fill="url(#linear-gradient-8)" />
                    <path d="M249.19,205.27a1.09,1.09,0,0,0-1.11-.15,1.2,1.2,0,0,1,1,.21,4,4,0,0,1,1.62,3.06,1.24,1.24,0,0,1-.51,1.16c.39-.12.65-.55.65-1.22A4,4,0,0,0,249.19,205.27Z" fill="#e6e7e8" style={{mixBlendMode: 'screen'}} />
                    <path d="M248.19,206.15a1,1,0,0,0-.95-.13,1,1,0,0,1,.83.18,3.46,3.46,0,0,1,1.4,2.64,1.07,1.07,0,0,1-.44,1c.34-.1.56-.47.56-1.05A3.46,3.46,0,0,0,248.19,206.15Z" fill="url(#Radial_Gradient_1-2)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g>
                    <path d="M257,211.64a1.3,1.3,0,0,1-.45,1.13l-.52.33c-.29.18-.11-.23-.55-.51a4,4,0,0,1-1.62-3.06c0-.55-.47-.56-.18-.74l.57-.34a1.09,1.09,0,0,1,1.14.13A4,4,0,0,1,257,211.64Z" fill="url(#linear-gradient-9)" />
                    <path d="M256.46,212c0,1.12-.72,1.58-1.62,1a4,4,0,0,1-1.61-3.06c0-1.12.72-1.58,1.61-1A4,4,0,0,1,256.46,212Z" fill="url(#New_Gradient_Swatch_copy_10-2)" />
                    <path d="M256.07,211.91a1.12,1.12,0,0,1-.39,1l-.78.5c-.26.16-.09-.19-.48-.43a3.43,3.43,0,0,1-1.38-2.62c0-.48-.41-.48-.16-.64l.83-.52a.93.93,0,0,1,1,.11A3.44,3.44,0,0,1,256.07,211.91Z" fill="url(#linear-gradient-10)" />
                    <path d="M255.25,212.43c0,1-.62,1.36-1.39.87a3.44,3.44,0,0,1-1.39-2.62c0-1,.63-1.36,1.39-.87A3.41,3.41,0,0,1,255.25,212.43Z" fill="url(#New_Gradient_Swatch_copy_9-3)" />
                    <path d="M254.92,208.89a1.07,1.07,0,0,0-1.1-.15,1.18,1.18,0,0,1,1,.21A4,4,0,0,1,256.4,212a1.27,1.27,0,0,1-.51,1.16c.39-.12.65-.56.65-1.22A4,4,0,0,0,254.92,208.89Z" fill="#e6e7e8" style={{mixBlendMode: 'screen'}} />
                    <path d="M253.92,209.77a.91.91,0,0,0-.95-.13,1,1,0,0,1,.83.18,3.46,3.46,0,0,1,1.4,2.64,1.08,1.08,0,0,1-.44,1c.34-.11.56-.48.56-1.05A3.46,3.46,0,0,0,253.92,209.77Z" fill="url(#Radial_Gradient_1-3)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <polygon points="284.54 177.85 284.14 147.88 247.2 123.81 284.54 147.11 291.91 142.82 285.03 147.77 284.54 177.85" fill="url(#Radial_Gradient_1-4)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="247.81 185.86 239.16 189.72 236.77 188.55 239.11 190.27 247.81 185.86" fill="url(#Radial_Gradient_1-5)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="274.34 202.93 265.69 206.78 263.3 205.62 265.64 207.33 274.34 202.93" fill="url(#Radial_Gradient_1-6)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g>
                  <g>
                    <path d="M319.11,293l-32.65-20.67a5.52,5.52,0,0,1,0-9.1l30.84-18.33a4.42,4.42,0,0,1,4.78,0l32.64,20.67a5.51,5.51,0,0,1,0,9.1L323.89,293A4.42,4.42,0,0,1,319.11,293Z" opacity={0} />
                    <path d="M316.93,245.4a4.55,4.55,0,0,1,4.74.13l32.54,20.6c3.05,1.93,2.82,6.89-.22,8.81l-30.1,17.9a4.38,4.38,0,0,1-4.65.06l-32.73-20.72c-3-1.93-2.8-6.9.25-8.82Z" opacity="0.02" />
                    <path d="M316.56,246a4.69,4.69,0,0,1,4.7.25l32.43,20.54c2.9,1.83,2.46,6.68-.44,8.5L323.9,292.73a4.39,4.39,0,0,1-4.53.12l-32.81-20.78c-2.89-1.83-2.41-6.71.49-8.54Z" opacity="0.05" />
                    <path d="M316.18,246.51c1.27-.8,3.4-.44,4.66.36l32.33,20.47c2.74,1.74,2.09,6.48-.66,8.21L323.9,292.61a4.32,4.32,0,0,1-4.4.18L286.61,272c-2.75-1.74-2-6.53.73-8.26Z" opacity="0.07" />
                    <path d="M315.81,247.06c1.2-.76,3.42-.28,4.62.48l32.22,20.4c2.59,1.64,1.72,6.28-.88,7.92l-27.86,16.63a4.32,4.32,0,0,1-4.28.25l-33-20.88c-2.59-1.64-1.62-6.33,1-8Z" opacity="0.1" />
                    <path d="M315.43,247.61c1.13-.71,3.46-.11,4.59.6l32.11,20.34c2.44,1.54,1.35,6.08-1.09,7.61l-27.13,16.22a4.34,4.34,0,0,1-4.15.31L286.7,271.76c-2.44-1.55-1.23-6.15,1.21-7.69Z" opacity="0.12" />
                    <path d="M315.06,248.16c1.05-.66,3.49.05,4.54.72l32,20.27c2.29,1.45,1,5.88-1.31,7.32l-26.39,15.79c-1.05.67-3,1.05-4,.38l-33.14-21c-2.29-1.44-.84-6,1.45-7.4Z" opacity="0.14" />
                    <path d="M314.68,248.71c1-.62,3.52.22,4.51.84l31.9,20.21c2.14,1.35.61,5.67-1.53,7l-25.64,15.38c-1,.62-2.92,1.06-3.9.43l-33.23-21c-2.13-1.35-.44-5.77,1.7-7.12Z" opacity="0.17" />
                    <path d="M314.31,249.27c.91-.58,3.55.38,4.46,1l31.8,20.13c2,1.25.24,5.47-1.75,6.72L323.92,292c-.91.58-2.86,1.08-3.77.5l-33.31-21.09c-2-1.25,0-5.58,1.93-6.83Z" opacity="0.19" />
                    <path d="M313.93,249.82c.85-.53,3.59.54,4.43,1.08L350.05,271c1.83,1.15-.13,5.26-2,6.41l-24.16,14.53c-.85.54-2.81,1.1-3.65.57l-33.39-21.14c-1.83-1.16.34-5.4,2.17-6.55Z" opacity="0.21" />
                    <path d="M313.56,250.37c.77-.49,3.61.71,4.39,1.2l31.58,20c1.68,1.06-.5,5.06-2.18,6.12L323.93,291.8c-.77.49-2.75,1.12-3.52.63l-33.48-21.2c-1.67-1.06.74-5.2,2.42-6.26Z" opacity="0.24" />
                    <path d="M313.18,250.92c.71-.44,3.65.87,4.35,1.32L349,272.17c1.53,1-.87,4.87-2.4,5.83l-22.67,13.68c-.71.45-2.7,1.14-3.4.69L287,271.13c-1.52-1,1.13-5,2.65-6Z" opacity="0.26" />
                    <path d="M312.81,251.48c.63-.4,3.67,1,4.31,1.43l31.37,19.87c1.37.87-1.24,4.66-2.61,5.52l-21.94,13.27c-.63.39-2.64,1.15-3.27.75L287,271c-1.37-.87,1.52-4.83,2.89-5.69Z" opacity="0.29" />
                    <path d="M312.43,252c.57-.36,3.71,1.2,4.27,1.55L348,273.38c1.22.77-1.61,4.46-2.83,5.23l-21.2,12.84c-.56.35-2.58,1.18-3.14.82l-33.72-21.35c-1.22-.77,1.91-4.65,3.13-5.41Z" opacity="0.31" />
                    <path d="M312.06,252.58c.49-.31,3.74,1.36,4.23,1.67L347.45,274c1.07.67-2,4.25-3.05,4.92L324,291.33c-.49.31-2.53,1.2-3,.89l-33.81-21.41c-1.06-.67,2.31-4.45,3.38-5.12Z" opacity="0.33" />
                    <path d="M311.68,253.13c.42-.26,3.77,1.53,4.2,1.79l31.06,19.67c.91.58-2.36,4.05-3.28,4.63l-19.71,12c-.42.26-2.47,1.21-2.89.94l-33.89-21.45c-.91-.58,2.7-4.27,3.61-4.84Z" opacity="0.36" />
                    <path d="M311.31,253.68c.35-.22,3.8,1.69,4.15,1.92l31,19.6c.76.48-2.73,3.85-3.49,4.33L324,291.1c-.35.22-2.42,1.23-2.77,1l-34-21.51c-.76-.48,3.09-4.08,3.85-4.56Z" opacity="0.38" />
                    <path d="M310.93,254.24c.28-.18,3.84,1.85,4.12,2L345.9,275.8c.6.39-3.1,3.65-3.71,4L324,291c-.28.18-2.36,1.26-2.64,1.08L287.26,270.5c-.6-.39,3.49-3.89,4.1-4.28Z" opacity="0.4" />
                    <path d="M310.56,254.79a29.61,29.61,0,0,1,4.07,2.15l30.75,19.46c.45.29-3.47,3.45-3.93,3.74L324,290.87a10.8,10.8,0,0,1-2.52,1.14l-34.14-21.62c-.46-.29,3.88-3.7,4.34-4Z" opacity="0.43" />
                    <path d="M310.18,255.34a45.64,45.64,0,0,1,4,2.27L344.86,277c.3.19-3.84,3.24-4.15,3.43L324,290.75a14.84,14.84,0,0,1-2.39,1.2l-34.22-21.66c-.31-.2,4.27-3.52,4.57-3.71Z" opacity="0.45" />
                    <path d="M309.81,255.89c.07,0,3.92,2.35,4,2.39l30.54,19.33c.15.1-4.21,3-4.36,3.14l-16,9.89c-.08,0-2.2,1.31-2.27,1.26l-34.3-21.72c-.16-.09,4.66-3.32,4.81-3.42Z" opacity="0.48" />
                    <polygon points="321.84 291.85 287.45 270.08 309.43 256.45 343.82 278.22 321.84 291.85" opacity="0.5" />
                  </g>
                  <polygon points="286.54 213.9 286.54 270.26 322.15 292.8 322.15 236.49 286.54 213.9" fill="url(#New_Gradient_Swatch_copy_13-3)" />
                  <polygon points="322.15 236.49 329.27 184.19 341.96 176.1 341.96 280.34 322.15 292.8 322.15 236.49" fill="url(#New_Gradient_Swatch_copy_13-4)" />
                  <polygon points="293.62 152.67 293.81 152.56 306.65 144.77 341.96 167.14 329.27 175.24 293.62 152.67" fill="url(#New_Gradient_Swatch_copy_35-7)" />
                  <polygon points="326.49 212.14 317.52 206.46 311.67 212.44 320.64 218.11 326.49 212.14" fill="url(#linear-gradient-11)" />
                  <polygon points="286.54 204.95 286.54 261.31 322.15 283.84 322.15 227.53 286.54 204.95" fill="url(#New_Gradient_Swatch_copy_35-8)" />
                  <polygon points="288.86 250.12 288.86 222.72 319.83 242.37 319.83 269.71 288.86 250.12" fill="url(#New_Gradient_Swatch_copy_26-2)" />
                  <g>
                    <polygon points="289.05 203.63 320.37 223.41 324.62 206.02 301.22 191.19 289.05 203.63" fill="url(#New_Gradient_Swatch_copy_35-9)" />
                    <polygon points="295.44 156.79 301.31 160.28 301.26 195.65 289.22 203.46 289.08 203.59 295.44 156.79" fill="url(#New_Gradient_Swatch_copy_35-10)" />
                    <polygon points="327.52 176.86 322.42 216.04 295.72 199.22 295.72 156.96 327.52 176.86" fill="url(#New_Gradient_Swatch_copy_35-11)" />
                  </g>
                  <g>
                    <g>
                      <polygon points="297.11 206.12 297.11 206.66 301.05 204.09 301.05 203.51 297.11 206.12" fill="url(#New_Gradient_Swatch_copy_35-12)" />
                      <polygon points="297.11 206.12 297.11 206.66 293.22 204.19 293.22 203.61 297.11 206.12" fill="url(#New_Gradient_Swatch_copy_35-13)" />
                      <polygon points="293.22 203.61 297.11 206.12 301.05 203.51 297.14 201.02 293.22 203.61" fill="url(#New_Gradient_Swatch_copy_35-14)" />
                    </g>
                    <g>
                      <polygon points="297.11 204.47 297.11 205.57 300.27 203.51 300.27 202.38 297.11 204.47" fill="url(#New_Gradient_Swatch_copy_9-4)" />
                      <polygon points="297.12 204.47 297.12 205.57 293.99 203.59 293.99 202.45 297.12 204.47" fill="url(#New_Gradient_Swatch_copy_9-5)" />
                      <polygon points="293.99 202.45 297.12 204.47 300.27 202.38 297.14 200.38 293.99 202.45" fill="url(#New_Gradient_Swatch_copy_9-6)" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="302.41 209.49 302.41 210.03 306.35 207.47 306.35 206.88 302.41 209.49" fill="url(#New_Gradient_Swatch_copy_35-15)" />
                      <polygon points="302.41 209.49 302.41 210.03 298.51 207.56 298.51 206.98 302.41 209.49" fill="url(#New_Gradient_Swatch_copy_35-16)" />
                      <polygon points="298.51 206.98 302.41 209.49 306.35 206.88 302.44 204.39 298.51 206.98" fill="url(#New_Gradient_Swatch_copy_35-17)" />
                    </g>
                    <g>
                      <polygon points="302.41 207.84 302.41 208.94 305.57 206.88 305.57 205.75 302.41 207.84" fill="url(#New_Gradient_Swatch_copy_9-7)" />
                      <polygon points="302.42 207.84 302.42 208.94 299.29 206.96 299.29 205.82 302.42 207.84" fill="url(#New_Gradient_Swatch_copy_9-8)" />
                      <polygon points="299.29 205.82 302.42 207.84 305.57 205.75 302.44 203.75 299.29 205.82" fill="url(#New_Gradient_Swatch_copy_9-9)" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="307.71 212.86 307.71 213.4 311.65 210.84 311.65 210.26 307.71 212.86" fill="url(#New_Gradient_Swatch_copy_35-18)" />
                      <polygon points="307.71 212.86 307.71 213.4 303.81 210.93 303.81 210.35 307.71 212.86" fill="url(#New_Gradient_Swatch_copy_35-19)" />
                      <polygon points="303.81 210.35 307.71 212.86 311.65 210.26 307.74 207.76 303.81 210.35" fill="url(#New_Gradient_Swatch_copy_35-20)" />
                    </g>
                    <g>
                      <polygon points="307.71 211.21 307.71 212.31 310.87 210.25 310.87 209.12 307.71 211.21" fill="url(#New_Gradient_Swatch_copy_9-10)" />
                      <polygon points="307.71 211.21 307.71 212.31 304.59 210.33 304.59 209.19 307.71 211.21" fill="url(#New_Gradient_Swatch_copy_9-11)" />
                      <polygon points="304.59 209.19 307.71 211.21 310.87 209.12 307.74 207.12 304.59 209.19" fill="url(#New_Gradient_Swatch_copy_9-12)" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="319.72 220.83 319.72 221.53 324.8 218.21 324.8 217.47 319.72 220.83" fill="url(#New_Gradient_Swatch_copy_35-21)" />
                      <polygon points="319.72 220.83 319.72 221.53 309.71 215.13 309.71 214.38 319.72 220.83" fill="url(#New_Gradient_Swatch_copy_35-22)" />
                      <polygon points="309.71 214.38 319.72 220.83 324.8 217.47 314.78 211.04 309.71 214.38" fill="url(#New_Gradient_Swatch_copy_35-23)" />
                    </g>
                    <g>
                      <polygon points="319.72 218.69 319.72 220.12 323.8 217.46 323.8 216 319.72 218.69" fill="url(#New_Gradient_Swatch_copy_36)" />
                      <polygon points="319.73 218.69 319.73 220.12 310.71 214.35 310.71 212.89 319.73 218.69" fill="url(#New_Gradient_Swatch_copy_36-2)" />
                      <polygon points="310.71 212.89 319.73 218.69 323.8 216 314.78 210.2 310.71 212.89" fill="url(#New_Gradient_Swatch_copy_36-3)" />
                    </g>
                    <g>
                      <polygon points="321.9 216.01 314.79 211.44 314.74 211.47 314.74 214.25 319.72 217.45 321.9 216.01" fill="url(#New_Gradient_Swatch_copy_25-17)" />
                      <polygon points="312.61 212.88 314.74 214.25 314.74 211.47 312.61 212.88" fill="url(#New_Gradient_Swatch_copy_25-18)" />
                    </g>
                  </g>
                  <g>
                    <polygon points="307.84 203.68 316.44 209.18 316.44 183.09 307.84 177.58 307.84 203.68" fill="#25054d" />
                    <polygon points="317.3 183.65 317.3 209.73 325.92 215.24 325.92 189.18 317.3 183.65" fill="#25054d" />
                    <polygon points="306.98 177.03 298.57 171.63 298.57 197.75 306.98 203.13 306.98 177.03" fill="#25054d" />
                  </g>
                  <polygon points="308.66 203.2 316.44 208.18 316.44 183.09 308.66 178.1 308.66 203.2" fill="url(#linear-gradient-12)" />
                  <polygon points="318.12 209.25 325.92 214.24 325.92 189.18 318.12 184.17 318.12 209.25" fill="url(#linear-gradient-13)" />
                  <polygon points="299.39 197.27 306.98 202.13 306.98 177.03 299.39 172.16 299.39 197.27" fill="url(#linear-gradient-14)" />
                  <polygon points="325.92 178.46 325.92 187.4 298.57 169.91 298.57 160.91 325.92 178.46" fill="url(#New_Gradient_Swatch_copy_26-3)" />
                  <polygon points="327.52 176.86 322.42 216.04 318.7 213.64 318.7 171.38 327.52 176.86" fill="url(#linear-gradient-15)" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="322.15 227.53 329.27 175.24 341.96 167.14 341.96 271.38 322.15 283.84 322.15 227.53" fill="url(#New_Gradient_Swatch_copy_35-24)" />
                  <path d="M293.62,152.67,286.54,205l35.65,22.58,7.08-52.3Zm26.75,70.74-31.29-19.82,6.36-46.8,31.29,19.8Z" fill="url(#New_Gradient_Swatch_copy_35-25)" />
                  <g>
                    <polygon points="291.25 211.24 291.36 211.17 294.05 209.55 315.51 223.15 312.92 224.96 291.25 211.24" fill="url(#New_Gradient_Swatch_copy_35-26)" />
                    <g>
                      <polygon points="291.33 217.52 310.37 229.55 312.06 225.55 295.3 215.25 291.33 217.52" fill="url(#New_Gradient_Swatch_copy_25-19)" />
                      <polygon points="292.36 213.74 294.77 214.18 295.89 215.09 291.43 217.41 291.35 217.5 292.36 213.74" fill="url(#New_Gradient_Swatch_copy_25-20)" />
                    </g>
                    <polygon points="311.45 232.05 312.92 224.96 315.51 223.15 315.51 229.93 311.45 231.97 311.45 232.05" fill="url(#New_Gradient_Swatch_copy_35-27)" />
                    <path d="M291.25,211.24l-1.45,7.08,21.67,13.73,1.45-7.09Zm19.12,18.31-19-12.05,1-3.76,19,12Z" fill="url(#New_Gradient_Swatch_copy_35-28)" />
                  </g>
                  <polygon points="322.19 227.53 329.64 175.03 341.96 167.14 328.97 174.62 293.62 152.67 328.74 175.28 322.19 227.53" fill="url(#Radial_Gradient_1-7)" style={{mixBlendMode: 'color-dodge'}} />
                  <g clipPath="url(#clip-path)">
                    <g>
                      <path d="M321.45,213.75a2.8,2.8,0,0,1-1,2.42l-1,.7c-.63.39-.23-.48-1.18-1.09a8.55,8.55,0,0,1-3.46-6.55c0-1.19-1-1.2-.39-1.59l1.16-.73a2.3,2.3,0,0,1,2.42.29A8.57,8.57,0,0,1,321.45,213.75Z" fill="url(#linear-gradient-16)" />
                      <ellipse cx="316.86" cy="212.3" rx="2.88" ry="5.25" transform="translate(-61.05 160.79) rotate(-26.06)" fill="url(#New_Gradient_Swatch_copy_37)" />
                      <path d="M319.42,213.92c0,1.78-1.15,2.5-2.56,1.6a6.29,6.29,0,0,1-2.56-4.84c0-1.78,1.14-2.5,2.56-1.6A6.32,6.32,0,0,1,319.42,213.92Z" fill="url(#New_Gradient_Swatch_copy_37-2)" />
                      <path d="M317.09,215.28a6.36,6.36,0,0,1-2.56-4.85,2.38,2.38,0,0,1,.41-1.47,2.1,2.1,0,0,0-.64,1.72,6.29,6.29,0,0,0,2.56,4.84c.91.58,1.7.48,2.16-.12A1.64,1.64,0,0,1,317.09,215.28Z" fill="url(#linear-gradient-17)" style={{mixBlendMode: 'multiply'}} />
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M318.07,207.25l-.08-.05-.07,0-1.15.73.09.05.06,0Z" fill="#fdd65b" />
                        <path d="M316.81,206.72l-1.16.73.22.05,1.16-.73Z" fill="#fdd65b" />
                        <path d="M318.75,207.79l-1.15.72.12.11,1.14-.72Z" fill="#fdd65b" />
                        <path d="M320,209.29l-1.14.72.08.13,1.14-.72Z" fill="#fdd65b" />
                        <path d="M319.42,208.5l-1.14.73.1.12,1.14-.72A.64.64,0,0,0,319.42,208.5Z" fill="#fdd65b" />
                        <path d="M320.49,210.12l-1.14.73.06.14,1.15-.73A.61.61,0,0,1,320.49,210.12Z" fill="#fdd65b" />
                        <path d="M321.26,215.07l-1.13.71a1.34,1.34,0,0,1-.09.24l1.12-.71A1.33,1.33,0,0,0,321.26,215.07Z" fill="#fdd65b" />
                        <path d="M320.32,214.59c0,.06,0,.12,0,.18l1.13-.71a1.21,1.21,0,0,0,0-.19Z" fill="#fdd65b" />
                        <path d="M321.4,213a1,1,0,0,0,0-.17l-1.13.72c0,.06,0,.11,0,.17Z" fill="#fdd65b" />
                        <path d="M320,212.6a.94.94,0,0,1,0,.16l1.14-.72s0-.11,0-.16Z" fill="#fdd65b" />
                        <path d="M320.94,211.14l-.06-.15-1.14.72.06.15Z" fill="#fdd65b" />
                      </g>
                      <path d="M319.44,207.86c1.12,1.38,1.46,3.06.74,3.76s-2.2.15-3.32-1.22-1.45-3.06-.74-3.76S318.32,206.49,319.44,207.86Z" fill="url(#radial-gradient-9)" style={{mixBlendMode: 'color-dodge'}} />
                      <path d="M318,207.2a2.3,2.3,0,0,0-2.42-.29l-.15.09a2.36,2.36,0,0,1,2.27.37,8.55,8.55,0,0,1,3.46,6.55,2.78,2.78,0,0,1-1,2.41l.3-.16a2.8,2.8,0,0,0,1-2.42A8.57,8.57,0,0,0,318,207.2Z" fill="url(#linear-gradient-18)" style={{mixBlendMode: 'multiply'}} />
                      <path d="M317,207.83a2.27,2.27,0,0,0-2.35-.3,2.53,2.53,0,0,1,2.07.45,8.55,8.55,0,0,1,3.46,6.55,2.64,2.64,0,0,1-1.1,2.48c.85-.26,1.38-1.2,1.38-2.63A8.57,8.57,0,0,0,317,207.83Z" fill="url(#Radial_Gradient_1-8)" style={{mixBlendMode: 'color-dodge'}} />
                      <path d="M317.38,210.1l.31,1.32a.4.4,0,0,0,.17.26l.94.63c.18.11.26.44.11.49l-.75.24c-.06,0-.09.11-.06.22l.27,1.31c.05.24-.14.3-.29.08l-.77-1.17c-.07-.1-.15-.15-.22-.14l-.77.19c-.15,0-.34-.26-.29-.44l.28-1a.44.44,0,0,0-.07-.3l-.75-1.19c-.15-.23-.07-.46.11-.36l.94.58c.08.05.15,0,.17,0l.31-.93C317.08,209.7,317.32,209.85,317.38,210.1Z" fill="url(#linear-gradient-19)" style={{mixBlendMode: 'multiply'}} />
                      <path d="M317.17,210.21l.31,1.32a.42.42,0,0,0,.17.27l1,.62c.17.12.25.45.11.49l-.76.25c-.06,0-.09.1-.06.21l.27,1.31c0,.25-.14.3-.29.08l-.77-1.17c-.07-.1-.15-.15-.22-.13l-.77.18c-.15,0-.34-.26-.29-.44l.28-1a.44.44,0,0,0-.07-.3l-.75-1.2c-.14-.22-.07-.46.11-.35l.94.57c.08,0,.15,0,.17-.05l.31-.92C316.87,209.81,317.11,210,317.17,210.21Z" fill="url(#New_Gradient_Swatch_copy_37-3)" />
                      <path d="M317.17,210.21l.31,1.32a.42.42,0,0,0,.17.27l1,.62c.17.12.25.45.11.49l-.76.25c-.06,0-.09.1-.06.21l.27,1.31c0,.25-.14.3-.29.08l-.77-1.17c-.07-.1-.15-.15-.22-.13l-.77.18c-.15,0-.34-.26-.29-.44l.28-1a.44.44,0,0,0-.07-.3l-.75-1.2c-.14-.22-.07-.46.11-.35l.94.57c.08,0,.15,0,.17-.05l.31-.92C316.87,209.81,317.11,210,317.17,210.21Z" opacity="0.5" fill="url(#radial-gradient-10)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                  </g>
                  <g>
                    <path d="M326.49,224.28a3.65,3.65,0,0,0,1.29,3.19l1.38.94c.83.51.3-.64,1.56-1.44a11.33,11.33,0,0,0,4.58-8.67c0-1.58,1.33-1.59.52-2.12l-1.54-1a3,3,0,0,0-3.2.39A11.31,11.31,0,0,0,326.49,224.28Z" fill="url(#New_Gradient_Swatch_copy_23)" />
                    <ellipse cx="332.58" cy="222.36" rx="6.94" ry="3.81" transform="translate(-13.28 423.43) rotate(-63.94)" fill="url(#New_Gradient_Swatch_copy_35-29)" />
                    <ellipse cx="330.86" cy="218.16" rx="4.26" ry="2.38" transform="translate(-42.12 352.14) rotate(-53.16)" fill="url(#radial-gradient-11)" style={{mixBlendMode: 'color-dodge'}} />
                    <path d="M332.38,216.44a3,3,0,0,1,3.11-.4,3.34,3.34,0,0,0-2.74.6,11.31,11.31,0,0,0-4.58,8.67c0,1.66.55,2.8,1.45,3.29-1.12-.35-1.83-1.59-1.83-3.48A11.33,11.33,0,0,1,332.38,216.44Z" fill="url(#Radial_Gradient_1-9)" style={{mixBlendMode: 'color-dodge'}} />
                    <g>
                      <path d="M329.21,224.92a3,3,0,0,0,1.05,2.61l3.72,2.31c.68.41.24-.53,1.27-1.18a9.27,9.27,0,0,0,3.75-7.09c0-1.29,1.09-1.3.42-1.73l-3.84-2.33a2.47,2.47,0,0,0-2.62.31A9.27,9.27,0,0,0,329.21,224.92Z" fill="url(#New_Gradient_Swatch_copy_23-2)" />
                      <ellipse cx="336.77" cy="224.88" rx="5.68" ry="3.11" transform="translate(-13.2 428.61) rotate(-63.94)" fill="url(#New_Gradient_Swatch_copy_35-30)" />
                      <path d="M336.61,220.05a2.46,2.46,0,0,1,2.55-.33,2.74,2.74,0,0,0-2.25.49,9.24,9.24,0,0,0-3.74,7.09,2.88,2.88,0,0,0,1.18,2.69c-.92-.28-1.49-1.3-1.49-2.85A9.27,9.27,0,0,1,336.61,220.05Z" fill="url(#Radial_Gradient_1-10)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g id="handle7">
                      <g>
                        <polygon points="347.12 199.02 335.54 220.21 337.38 219.03 348.96 197.81 347.12 199.02" fill="url(#New_Gradient_Swatch_copy_35-31)" />
                        <polygon points="347.13 199.02 335.55 220.21 333.61 218.98 345.2 197.75 347.13 199.02" fill="url(#New_Gradient_Swatch_copy_35-32)" />
                        <polygon points="345.2 197.75 347.13 199.02 348.96 197.81 347.02 196.56 345.2 197.75" fill="url(#New_Gradient_Swatch_copy_35-33)" />
                      </g>
                      <path d="M347.13,199l-1.93-1.26-.76,1.38a3.81,3.81,0,0,0,2.64,2.12l1.88-3.45Z" fill="url(#linear-gradient-20)" style={{mixBlendMode: 'multiply'}} />
                      <g>
                        <ellipse cx="348.07" cy="195.46" rx="3.74" ry="4.1" fill="url(#New_Gradient_Swatch_copy_15)" />
                        <path d="M350.73,192.87a4.75,4.75,0,0,1,.2,1.38,4.13,4.13,0,0,1-3.93,4.31,3.52,3.52,0,0,1-1.41-.29,3.36,3.36,0,0,0,2.37,1,3.75,3.75,0,0,0,3.57-3.91A4.15,4.15,0,0,0,350.73,192.87Z" fill="url(#radial-gradient-12)" style={{mixBlendMode: 'color-dodge'}} />
                        <ellipse cx="347.38" cy="194.36" rx="2.33" ry="2.55" fill="url(#radial-gradient-13)" style={{mixBlendMode: 'color-dodge'}} />
                      </g>
                    </g>
                  </g>
                  <g clipPath="url(#clip-path-2)">
                    <path id="seven2" d="M310.59,201l2.57-7.72.5-.53-.69-.26-2.87-1.82v-2l5.16,3.28v.68L312.17,202Z" fill="url(#linear-gradient-21)" />
                  </g>
                  <g clipPath="url(#clip-path-3)">
                    <path id="seven3" d="M301.24,190.44l2.58-7.73.49-.53-.69-.26-2.87-1.82v-2l5.17,3.27v.69l-3.1,9.37Z" fill="url(#linear-gradient-22)" />
                  </g>
                  <g clipPath="url(#clip-path-4)">
                    <path id="seven1" d="M320.21,200.81l2.58-7.72.49-.53-.68-.26-2.88-1.82v-2l5.17,3.28v.68l-3.1,9.37Z" fill="url(#linear-gradient-23)" />
                  </g>
                  <path d="M329.93,203.07c-1.28,2.42-10.69-1-21-7.58s-17.65-13.91-16.37-16.32,10.7,1,21,7.58S331.21,200.66,329.93,203.07Z" fill="url(#radial-gradient-14)" style={{mixBlendMode: 'color-dodge'}} />
                  <g>
                    <path d="M301.79,164.58l.87.55v4.44a4.68,4.68,0,0,1-.05.7,1.18,1.18,0,0,1-.17.45.38.38,0,0,1-.31.16,1,1,0,0,1-.49-.18,4.85,4.85,0,0,1-.4-.31,3,3,0,0,1-.35-.37l.2-.8a1.18,1.18,0,0,0,.34.33c.16.1.26.08.3-.07a2.89,2.89,0,0,0,.06-.7Z" fill="url(#New_Gradient_Swatch_copy_8)" />
                    <path d="M305.45,171.61l-1.14-.72L304,172.1l-.87-.55,1.41-5.25.68.43,1.42,7-.92-.58Zm-.95-1.49.8.5L305,169l-.11-1,0,0-.12.89Z" fill="url(#New_Gradient_Swatch_copy_8-2)" />
                    <path d="M309.71,175.46a.68.68,0,0,1-.48,0,3.29,3.29,0,0,1-.6-.29,3.54,3.54,0,0,1-.7-.6,3.94,3.94,0,0,1-.56-.9,5,5,0,0,1-.38-1.23,7.55,7.55,0,0,1-.14-1.58,5.36,5.36,0,0,1,.15-1.44,1.43,1.43,0,0,1,.41-.71.68.68,0,0,1,.58-.15,1.85,1.85,0,0,1,.66.27,4.8,4.8,0,0,1,.59.45,3.93,3.93,0,0,1,.41.41l-.17.86a3.13,3.13,0,0,0-.31-.33,3.82,3.82,0,0,0-.42-.31c-.32-.2-.56-.18-.73.06a2.81,2.81,0,0,0-.26,1.47,6.77,6.77,0,0,0,.06.92,3.75,3.75,0,0,0,.19.8,2.46,2.46,0,0,0,.32.65,1.62,1.62,0,0,0,.48.46,1.25,1.25,0,0,0,.41.18.86.86,0,0,0,.32,0Z" fill="url(#New_Gradient_Swatch_copy_8-3)" />
                    <path d="M311.36,174.13l-.19-.12v2.62l-.87-.56V170l.87.55v2.7h.17l1-1.95,1,.62-1.11,1.86-.33.12.33.54,1.29,3.7-1.07-.68Z" fill="url(#New_Gradient_Swatch_copy_8-4)" />
                    <path d="M314.07,172.42a4.58,4.58,0,0,1,.54.23c.2.1.4.22.6.34a6.43,6.43,0,0,1,.63.47,3.43,3.43,0,0,1,.55.64,3.48,3.48,0,0,1,.39.87,3.85,3.85,0,0,1,.16,1.13,2.58,2.58,0,0,1-.13.89.8.8,0,0,1-.35.44.63.63,0,0,1-.49,0,1.7,1.7,0,0,1-.58-.25l-.09-.06-.13-.08L315,177l-.09-.08V179l-.87-.55Zm.87,3.51s.08.07.16.12l.15.12a1.45,1.45,0,0,0,.29.13A.32.32,0,0,0,316,176a1.72,1.72,0,0,0,.06-.52A2.06,2.06,0,0,0,316,175a1.6,1.6,0,0,0-.16-.42,1.24,1.24,0,0,0-.23-.32,1.49,1.49,0,0,0-.28-.23,1.67,1.67,0,0,0-.35-.18Z" fill="url(#New_Gradient_Swatch_copy_8-5)" />
                    <path d="M317.38,177.51a3.66,3.66,0,0,1,.42-2.1q.42-.54,1.29,0a3,3,0,0,1,.78.72,4.1,4.1,0,0,1,.53,1,6.2,6.2,0,0,1,.31,1.2,8.7,8.7,0,0,1,.1,1.38,3.63,3.63,0,0,1-.43,2.09c-.29.35-.72.35-1.29,0a3.1,3.1,0,0,1-.78-.71,4.3,4.3,0,0,1-.53-1,5.55,5.55,0,0,1-.3-1.2A8.57,8.57,0,0,1,317.38,177.51Zm.91.57a8.37,8.37,0,0,0,0,.89,4.26,4.26,0,0,0,.13.77,2.87,2.87,0,0,0,.25.61,1.1,1.1,0,0,0,.37.4c.27.17.47.13.6-.13a3.7,3.7,0,0,0,.2-1.52,8.19,8.19,0,0,0,0-.87,4.26,4.26,0,0,0-.13-.77,2.51,2.51,0,0,0-.25-.62,1.08,1.08,0,0,0-.38-.41C318.56,176.09,318.29,176.64,318.29,178.08Z" fill="url(#New_Gradient_Swatch_copy_8-6)" />
                    <path d="M324.2,179.79l-1.15-.73v5.09l-.87-.55v-5.09l-1.15-.73v-1l3.17,2Z" fill="url(#New_Gradient_Swatch_copy_8-7)" />
                  </g>
                  <path d="M312.32,252a1.3,1.3,0,0,1,.43.49l1.37,2.61a.32.32,0,0,0,.13.15l1.95.8a1.29,1.29,0,0,1,.62.75.93.93,0,0,1,0,.75l-.89,1.62a.3.3,0,0,0,0,.21l.92,2.74a.85.85,0,0,1,0,.74c-.13.19-.36.19-.62,0l-1.92-1.61a.15.15,0,0,0-.16,0l-1.35.92a.4.4,0,0,1-.43,0,1.53,1.53,0,0,1-.6-1l-.3-2.61a.34.34,0,0,0-.1-.23L309.63,256a1.5,1.5,0,0,1-.34-.89c0-.3.12-.48.33-.48h1.74c.05,0,.09,0,.1-.11l.26-2.26C311.76,251.9,312,251.78,312.32,252Zm1.93,3.78a1.3,1.3,0,0,1-.43-.49l-1.37-2.61a.28.28,0,0,0-.13-.15c-.08,0-.17,0-.18.08l-.26,2.26c0,.23-.15.37-.33.37h-1.74c-.09,0-.1.11-.1.15a.46.46,0,0,0,.1.27l1.76,2.17a1.58,1.58,0,0,1,.33.78l.3,2.61a.41.41,0,0,0,.18.31.11.11,0,0,0,.13,0l1.35-.92a.38.38,0,0,1,.43,0h0l.1.07,1.92,1.61c.11.07.15.06.19,0a.25.25,0,0,0,0-.22l-.92-2.74a1,1,0,0,1,0-.72l.89-1.61a.3.3,0,0,0,0-.23.36.36,0,0,0-.15-.2l-1.95-.8Z" fill="url(#New_Gradient_Swatch_copy_8-8)" />
                  <path d="M294.88,242.44a1.31,1.31,0,0,1,.49.68l.71,2.28a.28.28,0,0,0,.09.14l1.6,1.31a1.31,1.31,0,0,1,.44.73c.06.29,0,.52-.14.61l-1.16.69a.1.1,0,0,0,0,.11l.27,2.18a.54.54,0,0,1-.11.48c-.17.14-.45,0-.67-.26l-1.43-1.85a.16.16,0,0,0-.11-.07l-1.43,0a.9.9,0,0,1-.67-.59,1.2,1.2,0,0,1-.12-.62l.28-1.84a.31.31,0,0,0,0-.15l-1.16-2.16a1.09,1.09,0,0,1-.13-.78.28.28,0,0,1,.43-.18l1.61.72a.05.05,0,0,0,.08,0l.72-1.37C294.49,242.33,294.68,242.31,294.88,242.44Zm1.74,8.66s.07,0,.09,0,0,0,0-.1l-.28-2.18a.5.5,0,0,1,.16-.51l1.16-.69s0-.1,0-.13a.27.27,0,0,0-.1-.15l-1.6-1.31a1.39,1.39,0,0,1-.41-.63l-.71-2.28a.24.24,0,0,0-.11-.15.06.06,0,0,0-.1,0l-.72,1.38a.28.28,0,0,1-.4.11l-1.61-.72c-.06,0-.08,0-.09,0a.2.2,0,0,0,0,.17l1.16,2.16a1.15,1.15,0,0,1,.15.7l-.27,1.83a.25.25,0,0,0,0,.13c0,.08.1.13.15.13l1.43,0a.7.7,0,0,1,.5.32l1.44,1.86Z" fill="url(#New_Gradient_Swatch_copy_8-9)" />
                  <path d="M294,232.11a.6.6,0,0,1,.21.21l.73,1.16.89.19a.72.72,0,0,1,.39.41.65.65,0,0,1,.05.42l-.3.9.55,1.3a.64.64,0,0,1,0,.48c-.06.11-.18.12-.31,0l-.92-.6-.55.61a.2.2,0,0,1-.28,0,.85.85,0,0,1-.33-.51l-.27-1.27-.89-.93a.82.82,0,0,1-.24-.49c0-.18,0-.3.14-.33l.75-.19v-1.18a.27.27,0,0,1,.1-.25A.22.22,0,0,1,294,232.11Zm1,1.78a.6.6,0,0,1-.21-.21l-.75-1.17h0v1.17c0,.14-.05.24-.15.27l-.74.19,0,.22,0-.16.88.9a.85.85,0,0,1,.22.42l.28,1.28,0,0,.53-.6a.21.21,0,0,1,.28,0l.92.6.15-.08-.13,0-.55-1.27a.74.74,0,0,1-.05-.43l.3-.9,0-.06-.87-.18A.22.22,0,0,1,294.94,233.89Z" fill="url(#New_Gradient_Swatch_copy_8-10)" />
                  <path d="M306.66,236.35a2.2,2.2,0,0,1,.89,1.52l.48,4.48a1.17,1.17,0,0,0,.25.6l3,3.77a2.24,2.24,0,0,1,.5,1.32c0,.43-.19.69-.5.69l-3,0c-.14,0-.23.11-.25.28l-.48,3.88c-.07.51-.44.68-.89.39a1.91,1.91,0,0,1-.63-.73L303.69,248a1,1,0,0,0-.41-.43L300,246.19a1.9,1.9,0,0,1-.91-1.1,1.43,1.43,0,0,1,0-1.11l1.57-2.75a.7.7,0,0,0,0-.55L299,236a1.31,1.31,0,0,1,0-1.08c.19-.28.53-.27.91.05l3.31,2.8c.15.13.3.17.41.1l2.34-1.54A.57.57,0,0,1,306.66,236.35Zm0,16.36c.2.13.43.1.47-.21l.48-3.87c0-.34.22-.53.49-.53l3,0c.17,0,.26-.13.26-.36a1.14,1.14,0,0,0-.26-.69l-3-3.77a2.26,2.26,0,0,1-.49-1.15l-.48-4.48a1.17,1.17,0,0,0-.47-.8.3.3,0,0,0-.33,0L304,238.39c-.2.13-.5.07-.79-.18l-3.3-2.8c-.19-.17-.38-.17-.48,0a.65.65,0,0,0,0,.57l1.56,4.72a1.42,1.42,0,0,1,0,1l-1.56,2.75a.69.69,0,0,0,0,.58,1,1,0,0,0,.48.58l3.3,1.38a1.75,1.75,0,0,1,.79.82l2.34,4.51A.92.92,0,0,0,306.66,252.71Z" fill="url(#New_Gradient_Swatch_copy_8-11)" />
                  <path d="M324,225.14c-1.29,2.42-10.7-1-21-7.58s-17.66-13.91-16.37-16.32,10.69,1,21,7.57S325.31,222.72,324,225.14Z" fill="url(#New_Gradient_Swatch_copy)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g>
                  <g opacity="0.2">
                    <path d="M874.43,278.32a7.54,7.54,0,0,1-3.79-.91l-40.13-23.17a4,4,0,0,1-2.18-3.46,4.67,4.67,0,0,1,2.62-3.93l46.74-27.49a9.28,9.28,0,0,1,4.6-1.17,7.54,7.54,0,0,1,3.79.91l40.13,23.17a4,4,0,0,1,2.18,3.46,4.69,4.69,0,0,1-2.62,3.94L879,277.15A9.28,9.28,0,0,1,874.43,278.32Z" opacity={0} />
                    <path d="M877.13,219.94a9.06,9.06,0,0,1,4.55-1.13,8.12,8.12,0,0,1,2.37.35,6.57,6.57,0,0,1,1.35.59l39.66,22.89a4.4,4.4,0,0,1,2.27,3.32,4.27,4.27,0,0,1-2.42,3.89l-46,27a6.68,6.68,0,0,1-.8.41,9.54,9.54,0,0,1-3.71.77,7.46,7.46,0,0,1-3.73-.89l-39.75-23a4.39,4.39,0,0,1-2.28-3.32,4.29,4.29,0,0,1,2.42-3.89Z" opacity="0.09" />
                    <path d="M876.56,220.53a8.91,8.91,0,0,1,4.5-1.11,8.12,8.12,0,0,1,2.33.38,7.65,7.65,0,0,1,1.33.59L923.92,243a4.89,4.89,0,0,1,2.36,3.17,3.94,3.94,0,0,1-2.22,3.85l-45.2,26.47c-.21.12-.56.3-.79.4a9.2,9.2,0,0,1-3.64.78,7.18,7.18,0,0,1-3.66-.86L831.4,254.1a5,5,0,0,1-2.39-3.18,4,4,0,0,1,2.23-3.85Z" opacity="0.18" />
                    <path d="M876,221.12a8.76,8.76,0,0,1,4.45-1.08,7.9,7.9,0,0,1,2.3.4,8.6,8.6,0,0,1,1.3.6l38.73,22.35a5.62,5.62,0,0,1,2.46,3,3.63,3.63,0,0,1-2,3.81l-44.44,26c-.19.11-.57.31-.77.4a9.17,9.17,0,0,1-3.57.78,7,7,0,0,1-3.59-.82l-39-22.52a5.68,5.68,0,0,1-2.48-3,3.6,3.6,0,0,1,2-3.81Z" opacity="0.27" />
                    <path d="M875.43,221.71a8.45,8.45,0,0,1,4.39-1.05,7.63,7.63,0,0,1,2.27.42,10.71,10.71,0,0,1,1.28.6l38.25,22.09c.88.5,2.56,2,2.56,2.88.56,1.3-.12,2.78-1.83,3.77l-43.66,25.44-.76.41a9.24,9.24,0,0,1-3.5.79,7,7,0,0,1-3.53-.8L832.29,254c-.88-.51-2.59-2-2.59-2.9-.57-1.3.11-2.78,1.82-3.77Z" opacity="0.36" />
                    <path d="M874.86,222.29a8.3,8.3,0,0,1,4.35-1,7.61,7.61,0,0,1,2.22.44,10.47,10.47,0,0,1,1.26.61l37.78,21.81c.76.44,2.65,2,2.65,2.74.71,1.24.1,2.73-1.62,3.73l-42.89,24.93c-.15.08-.6.33-.76.4a8.8,8.8,0,0,1-3.41.8A6.7,6.7,0,0,1,871,276l-38.24-22.08c-.75-.43-2.69-2-2.69-2.76-.71-1.24-.1-2.74,1.62-3.73Z" opacity="0.45" />
                    <path d="M874.29,222.88a8.05,8.05,0,0,1,4.3-1,7.4,7.4,0,0,1,2.19.46c.22.08,1,.5,1.23.61l37.31,21.55c.63.36,2.75,1.95,2.75,2.58.85,1.19.31,2.7-1.43,3.7l-42.12,24.42c-.12.07-.61.34-.74.4a8.63,8.63,0,0,1-3.34.8,6.45,6.45,0,0,1-3.4-.74l-37.86-21.86c-.63-.36-2.8-2-2.8-2.62-.85-1.18-.31-2.69,1.43-3.69Z" opacity="0.55" />
                    <path d="M873.73,223.47a7.94,7.94,0,0,1,4.24-1,7.52,7.52,0,0,1,2.16.49c.18.07,1,.53,1.2.62l36.85,21.27c.5.29,2.84,1.93,2.84,2.44,1,1.13.51,2.65-1.23,3.66L878.44,274.9l-.73.39a8.52,8.52,0,0,1-3.27.81,6.3,6.3,0,0,1-3.33-.7l-37.49-21.65c-.5-.29-2.9-2-2.9-2.47-1-1.13-.52-2.65,1.23-3.66Z" opacity="0.64" />
                    <path d="M873.16,224.05a7.67,7.67,0,0,1,4.19-.92,7.23,7.23,0,0,1,2.13.51c.13.05,1,.55,1.17.62l36.38,21c.37.22,2.93,1.92,2.93,2.3,1.13,1.07.73,2.6-1,3.62l-40.58,23.4-.71.39a8.31,8.31,0,0,1-3.2.82,6.2,6.2,0,0,1-3.27-.68l-37.1-21.43c-.38-.21-3-2-3-2.33-1.13-1.07-.72-2.6,1-3.62Z" opacity="0.73" />
                    <path d="M872.6,224.64a7.48,7.48,0,0,1,4.14-.89,6.9,6.9,0,0,1,2.08.53l1.15.62,35.91,20.74a19,19,0,0,1,3,2.15c1.27,1,.94,2.55-.83,3.57l-39.81,22.89-.7.39a8,8,0,0,1-3.13.83,6,6,0,0,1-3.2-.65l-36.73-21.21a20.65,20.65,0,0,1-3.11-2.19c-1.27-1-.93-2.55.83-3.58Z" opacity="0.82" />
                    <path d="M872,225.23a7.33,7.33,0,0,1,4.09-.86,6.71,6.71,0,0,1,2,.55l1.12.63L914.73,246c.13.08,3.13,1.88,3.13,2,1.41.95,1.15,2.51-.63,3.53l-39.05,22.38-.68.39a7.86,7.86,0,0,1-3,.83,5.74,5.74,0,0,1-3.14-.62l-36.35-21c-.13-.07-3.22-1.92-3.22-2-1.41-1-1.14-2.51.64-3.53Z" opacity="0.91" />
                    <path d="M871.37,274.25l-39.28-22.69c-1.56-.89-1.36-2.46.43-3.49l38.94-22.26a6.77,6.77,0,0,1,6.06-.25l39.29,22.69c1.55.89,1.35,2.46-.44,3.49L877.43,274A6.74,6.74,0,0,1,871.37,274.25Z" />
                  </g>
                  <g>
                    <polygon points="874.26 228.28 874.26 276.34 919.16 250.15 919.16 202.09 874.26 228.28" fill="url(#New_Gradient_Swatch_copy_25-21)" />
                    <polygon points="874.28 228.28 874.28 276.34 829.23 250.07 829.23 202.04 874.28 228.28" fill="url(#New_Gradient_Swatch_copy_25-22)" />
                    <polygon points="874.28 228.28 874.28 276.34 829.23 250.07 829.23 202.04 874.28 228.28" fill="url(#linear-gradient-24)" style={{mixBlendMode: 'color-dodge'}} />
                    <polygon points="835.33 240.95 835.33 212.65 868.19 231.78 868.19 260.1 835.33 240.95" fill="#25054d" />
                    <polygon points="913.57 240.95 913.57 212.65 880.71 231.78 880.71 260.1 913.57 240.95" fill="#25054d" />
                    <polygon points="829.23 202.04 874.28 228.28 919.16 202.09 874.06 175.82 829.23 202.04" fill="url(#linear-gradient-25)" />
                  </g>
                  <polygon points="837.59 201.4 873.94 222.57 910.78 201.37 874.39 180.18 837.59 201.4" fill="url(#New_Gradient_Swatch_copy_26-4)" />
                  <g id="light" style={{mixBlendMode: 'color-dodge'}}>
                    <polygon points="855.98 212.03 874.06 222.57 892.39 212.02 874.29 201.48 855.98 212.03" fill="url(#Radial_Gradient_1-11)" />
                  </g>
                  <g>
                    <path d="M861.4,249.18l-19.2-11.09a4.51,4.51,0,0,1-1.9-3.61V223c0-1.39.85-2,1.9-1.43l19.2,11.09a4.54,4.54,0,0,1,1.89,3.62v11.52C863.29,249.14,862.44,249.78,861.4,249.18Z" fill="url(#linear-gradient-26)" />
                    <path d="M860.78,249.32l-19.2-11.08a4.57,4.57,0,0,1-1.89-3.62V223.1c0-1.4.85-2,1.89-1.44l19.2,11.09a4.52,4.52,0,0,1,1.9,3.62v11.52C862.68,249.28,861.83,249.93,860.78,249.32Z" fill="url(#New_Gradient_Swatch_copy_9-13)" />
                    <path d="M840.37,235.14V223.37c0-.9.54-1.3,1.21-.92l19.2,11.09a2.88,2.88,0,0,1,1.21,2.31v11.77c0,.89-.54,1.3-1.21.91l-19.2-11.08A2.9,2.9,0,0,1,840.37,235.14Z" fill="url(#New_Gradient_Swatch_copy_10-3)" />
                    <g>
                      <path d="M860.57,242.85a.55.55,0,0,0-.37-.43l-.15,0a18.78,18.78,0,0,0-.63-2.15.33.33,0,0,0,.19-.14.47.47,0,0,0,0-.45.51.51,0,0,0-.47-.34h-.08a22.53,22.53,0,0,0-1-2.16.37.37,0,0,0,.16-.21.55.55,0,0,0-.09-.43.48.48,0,0,0-.4-.27h-.11l-.06,0a19.86,19.86,0,0,0-1.37-2l.05-.06a.53.53,0,0,0-.09-.63.4.4,0,0,0-.58-.08A18.63,18.63,0,0,0,854,231.9l0-.15a.58.58,0,0,0-.21-.56.38.38,0,0,0-.58.06,13.13,13.13,0,0,0-1.6-1.15v-.2a.6.6,0,0,0-.31-.52l-.12-.06h-.08a.37.37,0,0,0-.35.29,9.62,9.62,0,0,0-1.51-.62l0-.24a.56.56,0,0,0-.4-.44h-.1a.37.37,0,0,0-.28.13.4.4,0,0,0-.07.34,6.38,6.38,0,0,0-1.2-.13H847l-.09-.23a.51.51,0,0,0-.45-.35h-.06a.37.37,0,0,0-.27.16.48.48,0,0,0,0,.41l0,.08a4.57,4.57,0,0,0-1.12.35l-.09-.17a.5.5,0,0,0-.41-.26.45.45,0,0,0-.2.06.36.36,0,0,0-.16.22.5.5,0,0,0,.06.39l.09.16a4.86,4.86,0,0,0-.86.78l-.06-.07a.39.39,0,0,0-.65,0,.49.49,0,0,0,.06.59l.15.19a6.66,6.66,0,0,0-.57,1.2.37.37,0,0,0-.62.19.53.53,0,0,0,.18.53l.29.27a.76.76,0,0,0,.2.27l.09.07a.41.41,0,0,0,.62-.23,4.22,4.22,0,0,1,4.16-3.51,7.55,7.55,0,0,1,3.71,1.14c3.81,2.2,7.16,7.08,8.14,11.88a.7.7,0,0,0,.46.52l.07,0h0l.1,0,.28.08h.1a.37.37,0,0,0,.28-.13A.45.45,0,0,0,860.57,242.85Zm-4.65-9Z" fill="#25054d" />
                      <path d="M847.82,230.19l2.53,9.93v0a1.5,1.5,0,0,0,.69,1.2.82.82,0,0,0,.39.11.6.6,0,0,0,.58-.67,1.45,1.45,0,0,0-.34-.88Z" fill="#25054d" />
                    </g>
                  </g>
                  <g>
                    <path d="M887.07,249.18l19.2-11.09a4.53,4.53,0,0,0,1.89-3.61V223c0-1.39-.85-2-1.89-1.43l-19.2,11.09a4.52,4.52,0,0,0-1.9,3.62v11.52C885.17,249.14,886,249.78,887.07,249.18Z" fill="url(#linear-gradient-27)" />
                    <path d="M887.68,249.32l19.2-11.08a4.55,4.55,0,0,0,1.9-3.62V223.1c0-1.4-.85-2-1.9-1.44l-19.2,11.09a4.54,4.54,0,0,0-1.89,3.62v11.52C885.79,249.28,886.64,249.93,887.68,249.32Z" fill="url(#linear-gradient-28)" />
                    <path d="M908.09,235.14V223.37c0-.9-.54-1.3-1.21-.92l-19.2,11.09a2.88,2.88,0,0,0-1.21,2.31v11.77c0,.89.54,1.3,1.21.91l19.2-11.08A2.9,2.9,0,0,0,908.09,235.14Z" fill="url(#New_Gradient_Swatch_copy_10-4)" />
                    <g>
                      <path d="M888,243.24a.34.34,0,0,0,.27.13h.1l.29-.08.09,0h0l.08,0a.69.69,0,0,0,.45-.52c1-4.8,4.33-9.68,8.14-11.88a7.55,7.55,0,0,1,3.71-1.14,4.23,4.23,0,0,1,4.17,3.51.4.4,0,0,0,.61.23l.1-.07a.74.74,0,0,0,.19-.27l.3-.27a.55.55,0,0,0,.18-.53.37.37,0,0,0-.63-.19,6,6,0,0,0-.56-1.2l.15-.19a.5.5,0,0,0,.06-.59.4.4,0,0,0-.66,0l-.06.07a4.53,4.53,0,0,0-.86-.78l.09-.16a.5.5,0,0,0,.07-.39.41.41,0,0,0-.17-.22.45.45,0,0,0-.2-.06.47.47,0,0,0-.4.26l-.1.17a4.63,4.63,0,0,0-1.11-.35l0-.08a.45.45,0,0,0,0-.41.37.37,0,0,0-.27-.16H902a.52.52,0,0,0-.45.35l-.08.23h-.13a6.29,6.29,0,0,0-1.2.13.44.44,0,0,0-.08-.34.37.37,0,0,0-.27-.13h-.1a.57.57,0,0,0-.41.44l0,.24a10,10,0,0,0-1.51.62.36.36,0,0,0-.35-.29h-.07l-.12.06a.61.61,0,0,0-.32.52v.2a14,14,0,0,0-1.6,1.15.37.37,0,0,0-.57-.06.56.56,0,0,0-.22.56l0,.15a18.63,18.63,0,0,0-1.56,1.63.39.39,0,0,0-.57.08.52.52,0,0,0-.09.63l0,.06a19.78,19.78,0,0,0-1.36,2l-.06,0h-.11a.49.49,0,0,0-.41.27.54.54,0,0,0-.08.43.36.36,0,0,0,.15.21c-.38.7-.73,1.43-1,2.16h-.08a.52.52,0,0,0-.47.34.5.5,0,0,0,0,.45.37.37,0,0,0,.19.14,21,21,0,0,0-.63,2.15l-.15,0a.55.55,0,0,0-.37.43A.42.42,0,0,0,888,243.24Zm4.59-9.41Z" fill="#25054d" />
                      <path d="M900.64,230.19l-2.53,9.93v0a1.47,1.47,0,0,1-.69,1.2.82.82,0,0,1-.38.11.6.6,0,0,1-.59-.67,1.51,1.51,0,0,1,.34-.88Z" fill="#25054d" />
                    </g>
                  </g>
                  <polygon points="874.58 278.48 874.58 285.06 919.68 258.76 919.68 252.18 874.58 278.48" opacity="0.2" fill="url(#New_Gradient_Swatch_copy_25-23)" />
                  <polygon points="874.6 278.48 874.6 285.06 829.35 258.68 829.35 252.13 874.6 278.48" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_25-24)" />
                  <polygon points="911.05 156.31 874.35 134.93 837.87 156.27 837.87 201.5 874.22 222.66 911.05 201.47 911.05 156.31" opacity="0.7" fill="url(#linear-gradient-29)" style={{mixBlendMode: 'screen'}} />
                </g>
                <g>
                  <g>
                    <path d="M588.62,477.82l-41.55-24.46,11.57-6.56a10.86,10.86,0,0,0,3.18.47,10.1,10.1,0,0,0,4.95-1.2,4.27,4.27,0,0,0,2.42-3.57A4.17,4.17,0,0,0,566.8,439a9.93,9.93,0,0,0-4.9-1.19,10.17,10.17,0,0,0-5,1.2,4.28,4.28,0,0,0-2.41,3.57,3.79,3.79,0,0,0,1.5,2.92l-13.85,7.86,41.49,24.43-62.56,34.51L553,531.68l-37.37,20.78-33.19-19.17a3.78,3.78,0,0,0,1.34-2.77,4.18,4.18,0,0,0-2.39-3.54,9.93,9.93,0,0,0-4.9-1.19,10.06,10.06,0,0,0-5,1.21,4.25,4.25,0,0,0-2.41,3.56,4.16,4.16,0,0,0,2.38,3.54,9.94,9.94,0,0,0,4.91,1.19,10.77,10.77,0,0,0,3.75-.65l-.06.11,35.49,20.54,42.29-23.54L526,512.35ZM558.17,441.1a7.65,7.65,0,0,1,3.73-.88,7.51,7.51,0,0,1,3.67.86c.74.43,1.17.94,1.17,1.42s-.44,1-1.19,1.44a8.7,8.7,0,0,1-7.41,0c-.74-.43-1.16-.94-1.16-1.42S557.41,441.53,558.17,441.1ZM472.68,532c-.74-.43-1.16-.94-1.16-1.42s.43-1,1.19-1.44a8.3,8.3,0,0,1,7.4,0c.74.43,1.17.95,1.17,1.42s-.44,1-1.19,1.44A8.7,8.7,0,0,1,472.68,532Z" fill="url(#linear-gradient-30)" />
                    <path d="M620.82,445.41a3.75,3.75,0,0,0,1.45-2.87,4.28,4.28,0,0,0-2.41-3.57,10.17,10.17,0,0,0-5-1.2A9.9,9.9,0,0,0,610,439a4.17,4.17,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.17,10.17,0,0,0,5,1.2,11.09,11.09,0,0,0,3.27-.5l34.28,19.56-63.19,35.89,43.85,26.54,41.58-24.67a10.91,10.91,0,0,0,3.49.57,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.39-3.54,4.31,4.31,0,0,0-2.42-3.57,10.1,10.1,0,0,0-4.95-1.2,9.94,9.94,0,0,0-4.91,1.19,4.17,4.17,0,0,0-2.39,3.54,3.81,3.81,0,0,0,1.37,2.8l-39,23.24-39-23.64,63.29-36Zm-9.57-1.47c-.76-.43-1.19-1-1.19-1.44s.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42A8.7,8.7,0,0,1,611.25,443.94Zm63.26,54.53a7.53,7.53,0,0,1,3.68-.86,7.63,7.63,0,0,1,3.72.88c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.75-.43-1.19-1-1.19-1.44S673.77,498.9,674.51,498.47Z" fill="url(#linear-gradient-31)" />
                    <path d="M685.53,526.7a3.81,3.81,0,0,0-1.38-2.82l59.76-37.23L646.33,430.8a3.61,3.61,0,0,0,1-2.46,4.25,4.25,0,0,0-2.41-3.56,10.06,10.06,0,0,0-5-1.21,9.87,9.87,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.06,10.06,0,0,0,5,1.2,10.62,10.62,0,0,0,4-.75l95,54.41-57.4,35.78a10.84,10.84,0,0,0-3.53-.58,9.93,9.93,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.42,3.57,10.1,10.1,0,0,0,5,1.2,9.94,9.94,0,0,0,4.91-1.19A4.16,4.16,0,0,0,685.53,526.7Zm-49.2-97c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.44s-.43,1-1.16,1.42A8.73,8.73,0,0,1,636.33,429.75Zm45.59,98.37a8.7,8.7,0,0,1-7.41,0c-.75-.43-1.19-1-1.19-1.44s.43-1,1.17-1.42a7.51,7.51,0,0,1,3.67-.86,8.2,8.2,0,0,1,3.16.61l.28.45.3-.18c.75.44,1.18,1,1.18,1.44S682.66,527.69,681.92,528.12Z" fill="url(#linear-gradient-32)" />
                    <path d="M786.43,518a10.06,10.06,0,0,0-5-1.2,9.93,9.93,0,0,0-4.9,1.19,4.15,4.15,0,0,0-2.39,3.53,3.66,3.66,0,0,0,1,2.4l-24,13.79-30-17.56,50.67-31.39L659,423.61a3.56,3.56,0,0,0,.93-2.36,4.25,4.25,0,0,0-2.41-3.57,10.73,10.73,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.06,10.06,0,0,0,5,1.2,10.32,10.32,0,0,0,4.13-.82l110.33,63.69L716.41,520.2l34.73,20.35,26.23-15.09a10.4,10.4,0,0,0,4.18.84,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.38-3.54A4.28,4.28,0,0,0,786.43,518ZM648.87,422.65c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.41A8.73,8.73,0,0,1,648.87,422.65ZM785.23,523a8.32,8.32,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45s.43-1,1.17-1.41a7.51,7.51,0,0,1,3.67-.86,7.65,7.65,0,0,1,3.73.88c.76.43,1.19,1,1.19,1.44S786,522.56,785.23,523Z" fill="url(#linear-gradient-33)" />
                    <path d="M836.7,344.83a10.1,10.1,0,0,0-5-1.2,9.93,9.93,0,0,0-4.9,1.19L782.72,320.3l13.13-7.57a10.23,10.23,0,0,0,4.74,1.1,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.39-3.54,4.27,4.27,0,0,0-2.42-3.57,10.1,10.1,0,0,0-5-1.2,9.94,9.94,0,0,0-4.91,1.19,4.17,4.17,0,0,0-2.39,3.54,3.49,3.49,0,0,0,.65,2l-16.13,9.3L825,346.58a3.43,3.43,0,0,0-.51,1.78,4.25,4.25,0,0,0,2.41,3.56,10.06,10.06,0,0,0,5,1.21,9.93,9.93,0,0,0,4.9-1.19,4.18,4.18,0,0,0,2.39-3.54A4.27,4.27,0,0,0,836.7,344.83Zm-39.86-37.19a7.55,7.55,0,0,1,3.68-.86,7.7,7.7,0,0,1,3.73.88c.75.43,1.19,1,1.19,1.44s-.43,1-1.17,1.42a8.7,8.7,0,0,1-7.41,0c-.75-.43-1.18-1-1.18-1.44S796.1,308.07,796.84,307.64Zm38.67,42.18a8.32,8.32,0,0,1-7.41,0c-.76-.43-1.19-1-1.19-1.44a1.12,1.12,0,0,1,.21-.59l.44.24.62-1.12a8.31,8.31,0,0,1,7.3.07c.75.43,1.19,1,1.19,1.44S836.24,349.39,835.51,349.82Z" fill="#45108a" />
                    <path d="M516.61,417.67A4.27,4.27,0,0,0,519,414.1a4.18,4.18,0,0,0-2.39-3.54,10.73,10.73,0,0,0-9.86,0,4.27,4.27,0,0,0-2.41,3.57,3.5,3.5,0,0,0,.8,2.19l-45.08,25.42-26-13.59-28,14.82-67.84-42.53a3.63,3.63,0,0,0,1.07-2.51,4.28,4.28,0,0,0-2.41-3.57,10.73,10.73,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.41,3.57,10.68,10.68,0,0,0,9.66.11l-.37.6,69.74,43.69L434.23,431l25.9,13.54L507.28,418l0,0a10.27,10.27,0,0,0,4.4.94A10,10,0,0,0,516.61,417.67ZM335.73,399.36a8.66,8.66,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a8.37,8.37,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.45S336.47,398.94,335.73,399.36Zm171.09,14.79c0-.49.43-1,1.19-1.45a7.65,7.65,0,0,1,3.73-.88,7.51,7.51,0,0,1,3.67.87c.74.42,1.17.94,1.17,1.41s-.44,1-1.19,1.45a8.7,8.7,0,0,1-7.41,0C507.24,415.14,506.82,414.62,506.82,414.15Z" fill="url(#linear-gradient-34)" />
                    <path d="M554.23,439a4.27,4.27,0,0,0,2.42-3.57,4.18,4.18,0,0,0-2.39-3.54,9.93,9.93,0,0,0-4.9-1.19,10.17,10.17,0,0,0-5,1.2,4.28,4.28,0,0,0-2.41,3.57,3.83,3.83,0,0,0,1.57,3l-27.27,15.44,38.91,22.43-16,9.39-15.54-9.25a3.64,3.64,0,0,0,1.08-2.53,4.25,4.25,0,0,0-2.41-3.56,10.06,10.06,0,0,0-5-1.21,9.93,9.93,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.17,10.17,0,0,0,5,1.2,10.43,10.43,0,0,0,3.91-.72l17.83,10.62,20.92-12.25-38.84-22.4L545.79,440l-.26-.45a10.77,10.77,0,0,0,3.75.65A10.1,10.1,0,0,0,554.23,439ZM513.69,475.3c-.76-.43-1.19-1-1.19-1.44s.43-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42A8.7,8.7,0,0,1,513.69,475.3Zm30.75-39.86c0-.48.43-1,1.19-1.44a8.3,8.3,0,0,1,7.4,0c.74.43,1.17.95,1.17,1.42s-.44,1-1.19,1.44a8.7,8.7,0,0,1-7.41,0C544.86,436.43,544.44,435.92,544.44,435.44Z" fill="url(#linear-gradient-35)" />
                    <path d="M702.68,388.08a9.87,9.87,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.53,4.25,4.25,0,0,0,2.41,3.57,10.06,10.06,0,0,0,5,1.21,9.93,9.93,0,0,0,4.9-1.19,4.18,4.18,0,0,0,2.39-3.54,3.62,3.62,0,0,0-.9-2.32l24.1-15.18L710.14,362,731,349.38a10.54,10.54,0,0,0,4.09.79A10,10,0,0,0,740,349a4.18,4.18,0,0,0,2.39-3.54,4.24,4.24,0,0,0-2.42-3.57,10.73,10.73,0,0,0-9.86,0,4.17,4.17,0,0,0-2.38,3.54,3.69,3.69,0,0,0,1,2.48l-23.4,14.17,23.18,13.39L707,389A10.53,10.53,0,0,0,702.68,388.08ZM731.3,344a8.32,8.32,0,0,1,7.41,0c.75.44,1.19,1,1.19,1.45s-.43,1-1.17,1.41a8.71,8.71,0,0,1-7.4,0c-.76-.44-1.19-1-1.19-1.45S730.56,344.41,731.3,344Zm-24.86,50.29a8.7,8.7,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45S707.17,393.84,706.44,394.27Z" fill="url(#linear-gradient-36)" />
                    <path d="M670,410.58a10.73,10.73,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.81,10.81,0,0,0,9.74.08l82.9,47.6.64.37,29-18.16a10.4,10.4,0,0,0,4.42.95,9.9,9.9,0,0,0,4.9-1.19,4.17,4.17,0,0,0,2.39-3.54,4.28,4.28,0,0,0-2.41-3.57,10.17,10.17,0,0,0-5-1.2,9.93,9.93,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.54,3.58,3.58,0,0,0,.84,2.24L753.4,462.86,671.86,416a3.45,3.45,0,0,0,.57-1.88A4.27,4.27,0,0,0,670,410.58Zm113.07,31.74a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.75-.43-1.19-1-1.19-1.44S782.36,442.75,783.09,442.32ZM661.41,415.55c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a8.28,8.28,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.45s-.43,1-1.16,1.41A8.7,8.7,0,0,1,661.41,415.55Z" fill="url(#linear-gradient-37)" />
                    <path d="M652.37,496.36a9.93,9.93,0,0,0,4.9-1.19,4.17,4.17,0,0,0,2.39-3.54,4.27,4.27,0,0,0-2.42-3.57,10.1,10.1,0,0,0-5-1.2,9.9,9.9,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.54,3.45,3.45,0,0,0,.6,1.91L634.79,500l.21.34a10.72,10.72,0,0,0-9.76,0,4.17,4.17,0,0,0-2.38,3.54,4.27,4.27,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0,4.18,4.18,0,0,0,2.39-3.54,3.58,3.58,0,0,0-.84-2.24l10.84-6.51A10.11,10.11,0,0,0,652.37,496.36Zm-3.76-6.19a8.32,8.32,0,0,1,7.41,0c.75.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.76-.43-1.19-1-1.19-1.44S647.87,490.6,648.61,490.17Zm-14.71,15.2a8.64,8.64,0,0,1-7.4,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.82,7.82,0,0,1,3.73.87c.75.44,1.19,1,1.19,1.45S634.64,505,633.9,505.37Z" fill="#45108a" />
                    <path d="M608.91,541.47a10.06,10.06,0,0,0-5-1.2,10.36,10.36,0,0,0-4.18.84L553.65,514.4l68.91-39.06-28.21-16.8a3.58,3.58,0,0,0,.85-2.27,4.25,4.25,0,0,0-2.41-3.56,10,10,0,0,0-4.95-1.21,9.94,9.94,0,0,0-4.91,1.19,4.18,4.18,0,0,0-2.39,3.54A4.27,4.27,0,0,0,583,459.8a10,10,0,0,0,4.95,1.2,10.26,10.26,0,0,0,4.28-.89l25.49,15.17-69,39.11,48.86,28.28a3.53,3.53,0,0,0-.9,2.32,4.25,4.25,0,0,0,2.41,3.57,10.06,10.06,0,0,0,5,1.21,9.9,9.9,0,0,0,4.9-1.19,4.18,4.18,0,0,0,2.39-3.54A4.28,4.28,0,0,0,608.91,541.47Zm-24.73-83.79c-.75-.44-1.19-1-1.19-1.45s.43-1,1.17-1.42a8.3,8.3,0,0,1,7.4,0c.76.44,1.19,1,1.19,1.44s-.42,1-1.16,1.42A8.73,8.73,0,0,1,584.18,457.68Zm23.53,88.78a8.7,8.7,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45S608.45,546,607.71,546.46Z" fill="url(#linear-gradient-38)" />
                    <path d="M502.21,493.47a4.28,4.28,0,0,0,2.41,3.57,10.17,10.17,0,0,0,5,1.2,9.93,9.93,0,0,0,4.9-1.19,4.18,4.18,0,0,0,2.39-3.54,4.27,4.27,0,0,0-2.42-3.57,10.72,10.72,0,0,0-9.68-.09l-34.47-19.7L532.8,433l-.54-.9a10.18,10.18,0,0,0,4.48,1,10,10,0,0,0,5-1.2,4.27,4.27,0,0,0,2.42-3.57,4.18,4.18,0,0,0-2.39-3.54,9.93,9.93,0,0,0-4.9-1.19,10.06,10.06,0,0,0-5,1.21,4.25,4.25,0,0,0-2.41,3.56,3.78,3.78,0,0,0,1.48,2.9l-65.5,38.95,37.37,21.35A3.45,3.45,0,0,0,502.21,493.47Zm30.88-66.57a8.3,8.3,0,0,1,7.4,0c.74.43,1.17.95,1.17,1.42s-.44,1-1.19,1.45a8.73,8.73,0,0,1-7.41,0c-.74-.43-1.16-.94-1.16-1.42S532.33,427.34,533.09,426.9ZM509.5,491.19a7.7,7.7,0,0,1,3.73.88c.75.43,1.19,1,1.19,1.44s-.43,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.76-.43-1.19-1-1.19-1.44s.42-1,1.16-1.42A7.58,7.58,0,0,1,509.5,491.19Z" fill="url(#linear-gradient-39)" />
                    <path d="M692.17,467.82a10.78,10.78,0,0,0-9.54-.17l-48.77-29.82a3.59,3.59,0,0,0,.95-2.39,4.28,4.28,0,0,0-2.41-3.57,10.17,10.17,0,0,0-5-1.2,9.87,9.87,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.17,10.17,0,0,0,5,1.2,10.35,10.35,0,0,0,4.13-.82l49,29.95a3.5,3.5,0,0,0-.68,2.05,4.25,4.25,0,0,0,2.41,3.56,10.06,10.06,0,0,0,5,1.21,9.93,9.93,0,0,0,4.9-1.19,4.18,4.18,0,0,0,2.39-3.54A4.27,4.27,0,0,0,692.17,467.82Zm-68.38-31c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44s-.43,1-1.16,1.42A8.73,8.73,0,0,1,623.79,436.85Zm67.19,36a8.7,8.7,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.44s.42-1,1.16-1.42a7.58,7.58,0,0,1,3.68-.86A7.7,7.7,0,0,1,691,470c.75.43,1.19,1,1.19,1.44S691.71,472.38,691,472.81Z" fill="url(#linear-gradient-40)" />
                    <path d="M416.86,395.12a10.13,10.13,0,0,0-4.95-1.2,9.94,9.94,0,0,0-4.91,1.19,4.17,4.17,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.42,3.57,10.1,10.1,0,0,0,5,1.2,10.23,10.23,0,0,0,4.16-.84l48.39,26.84,31.32-18-.11-.18a10.83,10.83,0,0,0,3.38.54,10,10,0,0,0,4.95-1.21,4.26,4.26,0,0,0,2.42-3.57,4.18,4.18,0,0,0-2.39-3.54,10.73,10.73,0,0,0-9.86,0,4.28,4.28,0,0,0-2.41,3.57,3.81,3.81,0,0,0,1.56,3L464.51,426.6,418.37,401a3.58,3.58,0,0,0,.91-2.33A4.31,4.31,0,0,0,416.86,395.12Zm78.61,10.48a7.76,7.76,0,0,1,3.73-.87,7.51,7.51,0,0,1,3.67.86c.74.42,1.17.94,1.17,1.41s-.44,1-1.19,1.45a8.66,8.66,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S494.71,406,495.47,405.6Zm-87.22-5.51c-.75-.43-1.19-1-1.19-1.44s.43-1,1.17-1.42a7.53,7.53,0,0,1,3.68-.86,7.63,7.63,0,0,1,3.72.88c.76.43,1.19,1,1.19,1.44a1.5,1.5,0,0,1-.68,1.09l0,0,0,.06a3.44,3.44,0,0,1-.42.29A8.7,8.7,0,0,1,408.25,400.09Z" fill="url(#linear-gradient-41)" />
                    <path d="M568.63,246.68a4.28,4.28,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0,4.18,4.18,0,0,0,2.39-3.54,4.27,4.27,0,0,0-2.41-3.57,10.73,10.73,0,0,0-9.82,0l-41.12-22.7,35.32-21.31,78.6,43.43L612.3,262.19,612,262a10.1,10.1,0,0,0-5-1.2,9.94,9.94,0,0,0-4.91,1.19,4.17,4.17,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.42,3.57,10.1,10.1,0,0,0,5,1.2,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.39-3.54A3.38,3.38,0,0,0,614,264l34.68-21.6-82.88-45.78-.62-.35L525,220.51l44.12,24.36A3.46,3.46,0,0,0,568.63,246.68ZM610.79,267a7.55,7.55,0,0,1-3.68.86,7.7,7.7,0,0,1-3.73-.88c-.75-.43-1.19-1-1.19-1.44s.43-1,1.17-1.42a7.55,7.55,0,0,1,3.68-.86,7.7,7.7,0,0,1,3.73.88c.75.43,1.18,1,1.18,1.44S611.53,266.54,610.79,267Zm-31.14-21.69c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.41a8.66,8.66,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45a1.1,1.1,0,0,1,.24-.62l.18.1.34-.62a2.8,2.8,0,0,1,.4-.27,7.58,7.58,0,0,1,3.68-.86A7.76,7.76,0,0,1,579.65,245.28Z" fill="#45108a" />
                    <path d="M690.54,239.62l-49,30.41,42.59,23.4-42.5,24.74,1.24,2.12,46.23-26.92L646.43,269.9,693,241l0,0a10.59,10.59,0,0,0,3.58.6,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.38-3.54,4.25,4.25,0,0,0-2.41-3.56,10.06,10.06,0,0,0-5-1.21,9.93,9.93,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54A3.83,3.83,0,0,0,690.54,239.62Zm2.22-4.25a8.32,8.32,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45S692,235.8,692.76,235.37Z" fill="url(#linear-gradient-42)" />
                    <path d="M378.47,483.55l49.19-28.77a10.26,10.26,0,0,0,4.46,1,9.9,9.9,0,0,0,4.9-1.19,4.17,4.17,0,0,0,2.39-3.54,4.25,4.25,0,0,0-2.41-3.56,10.06,10.06,0,0,0-5-1.21,9.9,9.9,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54,3.61,3.61,0,0,0,.81,2.21L378.43,480.7,352.2,465.53a3.49,3.49,0,0,0,.27-1.31,4.28,4.28,0,0,0-2.41-3.57,10.81,10.81,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.24,4.24,0,0,0,2.42,3.57,10.71,10.71,0,0,0,9.85,0c.18-.11.35-.21.51-.33ZM427.2,451c0-.47.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.44,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.73,8.73,0,0,1-7.41,0c-.12-.07-.22-.15-.32-.22l-.25-.4-.13.08A1.34,1.34,0,0,1,427.2,451Zm-85.75,14.64c-.75-.44-1.19-1-1.19-1.45s.43-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.41A8.66,8.66,0,0,1,341.45,465.62Z" fill="#45108a" />
                    <path d="M520.07,425.5l-.27-.47a10.27,10.27,0,0,0,4.4.94,10,10,0,0,0,4.95-1.2,4.27,4.27,0,0,0,2.42-3.57,4.18,4.18,0,0,0-2.39-3.54,10.73,10.73,0,0,0-9.86,0,4.25,4.25,0,0,0-2.41,3.57,3.64,3.64,0,0,0,1.14,2.58L383.67,500.78a2.46,2.46,0,0,0-.27-.17,10.73,10.73,0,0,0-9.86,0,4.17,4.17,0,0,0-2.38,3.54,4.28,4.28,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0,4.18,4.18,0,0,0,2.39-3.54,3.4,3.4,0,0,0-.4-1.58Zm.48-5.7a7.65,7.65,0,0,1,3.73-.88,7.51,7.51,0,0,1,3.67.87c.74.42,1.17.94,1.17,1.41s-.44,1-1.19,1.45a8.7,8.7,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S519.79,420.24,520.55,419.8ZM382.2,505.59a8.64,8.64,0,0,1-7.4,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.7,7.7,0,0,1,3.73.87c.75.44,1.19,1,1.19,1.45S382.94,505.17,382.2,505.59Z" fill="url(#linear-gradient-43)" />
                    <path d="M719.76,419,751,400.4a10.82,10.82,0,0,0,3.71.64,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.39-3.54,4.24,4.24,0,0,0-2.42-3.56,10.73,10.73,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,3.78,3.78,0,0,0,1.27,2.7l-28.79,17.15-23.08-13.95a3.54,3.54,0,0,0,.82-2.22,4.28,4.28,0,0,0-2.41-3.57,10.81,10.81,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.25,4.25,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0l.15-.1-.34.57Zm31.15-24.13a8.3,8.3,0,0,1,7.4,0c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.73,8.73,0,0,1-7.41,0c-.75-.44-1.18-1-1.18-1.45S750.17,395.28,750.91,394.85Zm-57,6.51a8.66,8.66,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45S694.63,400.94,693.9,401.36Z" fill="url(#linear-gradient-44)" />
                    <path d="M693.88,266a3.54,3.54,0,0,0,.92-2.35,4.28,4.28,0,0,0-2.41-3.57,10.17,10.17,0,0,0-5-1.2,9.93,9.93,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.42,3.57,10.1,10.1,0,0,0,5,1.2,10.48,10.48,0,0,0,4.17-.83l22,13,40.09-24.26.15.1a10.17,10.17,0,0,0,5,1.2,10,10,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.38-3.54,4.25,4.25,0,0,0-2.41-3.56,10.06,10.06,0,0,0-5-1.21,9.93,9.93,0,0,0-4.9,1.19,4.18,4.18,0,0,0-2.39,3.54,3.45,3.45,0,0,0,.47,1.69L713.61,277.7Zm-10.1-.94c-.75-.44-1.19-1-1.19-1.45s.43-1,1.17-1.42a8.3,8.3,0,0,1,7.4,0c.76.43,1.19,1,1.19,1.44a1.47,1.47,0,0,1-.65,1.06l-.18-.11-.24.41-.09.06A8.73,8.73,0,0,1,683.78,265.08Zm71.29-13.67a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44s-.42,1-1.16,1.42a8.73,8.73,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45S754.34,251.84,755.07,251.41Z" fill="#45108a" />
                    <path d="M700.05,309.13l44.15-26.85a11,11,0,0,0,3.65.62,10,10,0,0,0,4.91-1.19,4.18,4.18,0,0,0,2.39-3.54,4.27,4.27,0,0,0-2.42-3.57,10.81,10.81,0,0,0-9.86,0,4.17,4.17,0,0,0-2.38,3.54,3.77,3.77,0,0,0,1.3,2.75l-46.63,28.36,15.17,8.33L667.84,342.3l1.23,2.12,46.24-26.92Zm44.05-32.42a7.58,7.58,0,0,1,3.68-.86,7.82,7.82,0,0,1,3.73.87c.75.44,1.19,1,1.19,1.45s-.43,1-1.17,1.41a8.64,8.64,0,0,1-7.4,0c-.76-.44-1.19-1-1.19-1.45S743.36,277.13,744.1,276.71Z" fill="url(#linear-gradient-45)" />
                    <path d="M597.23,334.42l46.25-26.92-71.4-38.9L613.19,243l-31.57-16.79a3.37,3.37,0,0,0,.43-1.63,4.24,4.24,0,0,0-2.42-3.57,10.71,10.71,0,0,0-9.85,0,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.81,10.81,0,0,0,9.86,0l.14-.1,28.49,15.15-41.07,25.62,71.26,38.82L596,332.31ZM571,225.94c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a8.28,8.28,0,0,1,7.41,0c.75.44,1.19,1,1.19,1.45s-.43,1-1.16,1.41A8.7,8.7,0,0,1,571,225.94Z" fill="url(#linear-gradient-46)" />
                    <path d="M350.2,334.6a9.94,9.94,0,0,0,4.91,1.19,10.41,10.41,0,0,0,4.1-.8l63.34,37.13-15,8.82L464,414.42l18.5-10.52a10.46,10.46,0,0,0,4,.78,10,10,0,0,0,4.95-1.21A4.24,4.24,0,0,0,494,399.9a4.15,4.15,0,0,0-2.39-3.53,9.93,9.93,0,0,0-4.9-1.19,10.06,10.06,0,0,0-5,1.2,4.28,4.28,0,0,0-2.41,3.57,3.58,3.58,0,0,0,1,2.42l-16.21,9.21L412.35,381l15-8.83-65.93-38.65a3.68,3.68,0,0,0,1-2.45,4.17,4.17,0,0,0-2.38-3.54,10.73,10.73,0,0,0-9.86,0,4.24,4.24,0,0,0-2.42,3.56A4.15,4.15,0,0,0,350.2,334.6Zm132.73,63.9a7.76,7.76,0,0,1,3.73-.87,7.51,7.51,0,0,1,3.67.86c.74.42,1.17.94,1.17,1.41s-.44,1-1.19,1.45a8.66,8.66,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S482.17,398.94,482.93,398.5ZM351.45,329.62a8.32,8.32,0,0,1,7.41,0c.74.43,1.16.95,1.16,1.42a1.62,1.62,0,0,1-.76,1.16h0v0a4.62,4.62,0,0,1-.4.27,8.73,8.73,0,0,1-7.41,0c-.73-.43-1.16-.94-1.16-1.42S350.7,330.06,351.45,329.62Z" fill="url(#linear-gradient-47)" />
                    <path d="M400.53,342.12a9.93,9.93,0,0,0,4.9,1.19,10.15,10.15,0,0,0,4.82-1.14l53.2,32.55-21.94,13.1,21.57,12.55,6.37-3.83a10.18,10.18,0,0,0,4.59,1,10,10,0,0,0,4.95-1.21,4.24,4.24,0,0,0,2.42-3.56,4.17,4.17,0,0,0-2.39-3.54,9.93,9.93,0,0,0-4.9-1.19,10.06,10.06,0,0,0-5,1.2,4.28,4.28,0,0,0-2.41,3.57,3.55,3.55,0,0,0,.68,2l-4.37,2.62-16.72-9.72,21.85-13.05-56-34.26a3.62,3.62,0,0,0,.62-1.95,4.17,4.17,0,0,0-2.39-3.54,9.94,9.94,0,0,0-4.91-1.19,10.1,10.1,0,0,0-4.95,1.2,4.27,4.27,0,0,0-2.42,3.57A4.17,4.17,0,0,0,400.53,342.12Zm69.86,49.28a7.76,7.76,0,0,1,3.73-.87,7.51,7.51,0,0,1,3.67.86c.74.43,1.17.94,1.17,1.42s-.44,1-1.19,1.44a8.7,8.7,0,0,1-7.41,0c-.74-.43-1.16-.95-1.16-1.42S469.63,391.84,470.39,391.4Zm-68.61-54.26a7.7,7.7,0,0,1,3.73-.88,7.58,7.58,0,0,1,3.68.86c.74.43,1.16.94,1.16,1.42s-.43,1-1.19,1.44a8.67,8.67,0,0,1-7.4,0c-.74-.43-1.17-.94-1.17-1.42S401,337.57,401.78,337.14Z" fill="url(#linear-gradient-48)" />
                    <path d="M484.68,223.4a10,10,0,0,0,4.91,1.18,11,11,0,0,0,3.15-.46l41.5,23.47-37.56,20.87,87.49,51.45,1.24-2.12-83.79-49.27,37.63-20.91-43.87-24.82a3.89,3.89,0,0,0,1.58-3,4.18,4.18,0,0,0-2.39-3.54,10.73,10.73,0,0,0-9.86,0,4.25,4.25,0,0,0-2.41,3.57A4.17,4.17,0,0,0,484.68,223.4Zm1.26-5a8.28,8.28,0,0,1,7.41,0c.73.42,1.16.94,1.16,1.41s-.44,1-1.19,1.45a8.73,8.73,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S485.18,218.85,485.94,218.41Z" fill="url(#linear-gradient-49)" />
                    <path d="M389.58,293.34a10,10,0,0,0,4.9,1.18,10.82,10.82,0,0,0,3.86-.68l37.26,21.89-13.73,7.85L504,371.65l1.24-2.12L426.76,323.6l13.73-7.84-39.82-23.39a3.71,3.71,0,0,0,1.18-2.62,4.18,4.18,0,0,0-2.39-3.54,10.71,10.71,0,0,0-9.85,0,4.24,4.24,0,0,0-2.42,3.57A4.18,4.18,0,0,0,389.58,293.34Zm1.25-5a8.28,8.28,0,0,1,7.41,0c.74.42,1.16.94,1.16,1.41s-.43,1-1.19,1.45a8.7,8.7,0,0,1-7.41,0c-.73-.42-1.16-.94-1.16-1.41S390.08,288.79,390.83,288.35Z" fill="url(#linear-gradient-50)" />
                    <path d="M441.54,243.78a10.75,10.75,0,0,0,9.85,0L473,256.46l.62-1,.6,1.07,16.28-9.15a10.66,10.66,0,0,0,3.45.56,10.13,10.13,0,0,0,4.95-1.2,4.28,4.28,0,0,0,2.41-3.57,4.16,4.16,0,0,0-2.38-3.54,9.94,9.94,0,0,0-4.91-1.19,10.1,10.1,0,0,0-4.95,1.2,4.27,4.27,0,0,0-2.42,3.57,3.76,3.76,0,0,0,1.33,2.78L473.66,254l-20.39-12a3.55,3.55,0,0,0,.55-1.84,4.18,4.18,0,0,0-2.39-3.54,10.73,10.73,0,0,0-9.86,0,4.28,4.28,0,0,0-2.41,3.57A4.17,4.17,0,0,0,441.54,243.78Zm48.78-2.06a7.7,7.7,0,0,1,3.73-.88,7.58,7.58,0,0,1,3.68.86c.74.43,1.16.94,1.16,1.42s-.43,1-1.19,1.44a8.67,8.67,0,0,1-7.4,0c-.74-.43-1.17-.94-1.17-1.42S489.57,242.15,490.32,241.72Zm-47.52-2.93a8.37,8.37,0,0,1,7.41,0c.73.42,1.16.94,1.16,1.41s-.44,1-1.19,1.45a8.7,8.7,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S442,239.23,442.8,238.79Z" fill="#45108a" />
                    <path d="M744.92,443.27,683.66,409.8a3.73,3.73,0,0,0,1.31-2.75,4.28,4.28,0,0,0-2.41-3.57,10.73,10.73,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0l0,0-.61,1.11,63,34.4L788,421.2l36.85,20.59L779.69,469.5a10.7,10.7,0,0,0-9.77,0,4.18,4.18,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.41,3.57,10.73,10.73,0,0,0,9.86,0,4.18,4.18,0,0,0,2.39-3.54,3.52,3.52,0,0,0-.59-1.91l48.12-29.51L788,418.38Zm-63.56-34.81a8.66,8.66,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a7.58,7.58,0,0,1,3.68-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45S682.1,408,681.36,408.46Zm98.38,64.65c0,.47-.42,1-1.16,1.41a8.37,8.37,0,0,1-7.41,0c-.76-.44-1.19-1-1.19-1.45s.42-1,1.16-1.41a8.37,8.37,0,0,1,7.41,0l.12.08.56.91.27-.17A1.1,1.1,0,0,1,779.74,473.11Z" fill="url(#linear-gradient-51)" />
                    <path d="M471.37,500.64a9.93,9.93,0,0,0-4.9-1.19,10.17,10.17,0,0,0-5,1.2,4.28,4.28,0,0,0-2.41,3.57,4.16,4.16,0,0,0,2.38,3.54,9.94,9.94,0,0,0,4.91,1.19h0a10.13,10.13,0,0,0,4.85-1.15l30.09,18.48a3.6,3.6,0,0,0-.84,2.24,4.18,4.18,0,0,0,2.39,3.54,9.93,9.93,0,0,0,4.9,1.19,10.17,10.17,0,0,0,5-1.2,4.28,4.28,0,0,0,2.41-3.57,4.16,4.16,0,0,0-2.38-3.54,9.94,9.94,0,0,0-4.91-1.19A10.13,10.13,0,0,0,503,524.9l.21-.34-30.06-18.47a3.45,3.45,0,0,0,.6-1.91A4.17,4.17,0,0,0,471.37,500.64Zm-5,5.86h0a7.58,7.58,0,0,1-3.68-.86c-.74-.43-1.16-.94-1.16-1.42s.43-1,1.19-1.44a7.65,7.65,0,0,1,3.73-.88,7.51,7.51,0,0,1,3.67.86c.74.43,1.17.94,1.17,1.42s-.44,1-1.19,1.44A7.7,7.7,0,0,1,466.39,506.5Zm37.74,20.58a7.7,7.7,0,0,1,3.73-.88,7.58,7.58,0,0,1,3.68.86c.74.43,1.16.94,1.16,1.42s-.43,1-1.19,1.44a8.67,8.67,0,0,1-7.4,0c-.74-.43-1.17-.94-1.17-1.42S503.38,527.51,504.13,527.08Z" fill="#45108a" />
                    <path d="M377.18,393.62a10.73,10.73,0,0,0-9.86,0,4.25,4.25,0,0,0-2.41,3.57,4.17,4.17,0,0,0,2.38,3.54,10,10,0,0,0,4.91,1.18h0a10.13,10.13,0,0,0,4.85-1.15l30.09,18.49a3.58,3.58,0,0,0-.84,2.24,4.18,4.18,0,0,0,2.39,3.54,10.81,10.81,0,0,0,9.86,0,4.28,4.28,0,0,0,2.41-3.57,4.17,4.17,0,0,0-2.38-3.54,10.72,10.72,0,0,0-9.76,0l.21-.35L379,399.08a3.5,3.5,0,0,0,.6-1.92A4.18,4.18,0,0,0,377.18,393.62Zm-5,5.86h0a7.58,7.58,0,0,1-3.68-.86c-.74-.42-1.16-.94-1.16-1.41s.43-1,1.19-1.45a7.65,7.65,0,0,1,3.73-.88,7.51,7.51,0,0,1,3.67.87c.74.42,1.17.94,1.17,1.41s-.44,1-1.19,1.45A7.82,7.82,0,0,1,372.2,399.48Zm37.74,20.58a7.7,7.7,0,0,1,3.73-.88,7.58,7.58,0,0,1,3.68.87c.74.42,1.16.94,1.16,1.41s-.43,1-1.19,1.45a8.67,8.67,0,0,1-7.4,0c-.74-.42-1.17-.94-1.17-1.41S409.19,420.5,409.94,420.06Z" fill="#45108a" />
                    <path d="M440.54,299.63a10.7,10.7,0,0,0,9.75,0l10.84,6.52a3.56,3.56,0,0,0-.84,2.23,4.17,4.17,0,0,0,2.39,3.54,9.93,9.93,0,0,0,4.9,1.19,10.17,10.17,0,0,0,5-1.2,4.28,4.28,0,0,0,2.41-3.57,4.17,4.17,0,0,0-2.38-3.54,10,10,0,0,0-4.91-1.19,10.13,10.13,0,0,0-4.85,1.15l.21-.34L452.21,298a3.5,3.5,0,0,0,.6-1.92,4.18,4.18,0,0,0-2.39-3.54,10.81,10.81,0,0,0-9.86,0,4.28,4.28,0,0,0-2.41,3.57A4.18,4.18,0,0,0,440.54,299.63ZM463.93,307a8.32,8.32,0,0,1,7.41,0c.74.43,1.16.95,1.16,1.42s-.43,1-1.19,1.45a7.76,7.76,0,0,1-3.73.87,7.58,7.58,0,0,1-3.68-.86c-.73-.43-1.16-.94-1.16-1.42S463.18,307.4,463.93,307Zm-22.14-12.33a7.76,7.76,0,0,1,3.73-.87,7.58,7.58,0,0,1,3.68.86c.74.42,1.16.94,1.16,1.41s-.43,1-1.19,1.45a8.66,8.66,0,0,1-7.41,0c-.74-.42-1.16-.94-1.16-1.41S441,295.08,441.79,294.64Z" fill="#45108a" />
                    <path d="M820.68,384.54a9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.38-3.54,4.28,4.28,0,0,0-2.41-3.57,10.81,10.81,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,3.5,3.5,0,0,0,.6,1.92L759,413.2l.21.34a10.11,10.11,0,0,0-4.85-1.15,9.93,9.93,0,0,0-4.9,1.19,4.17,4.17,0,0,0-2.39,3.54,4.28,4.28,0,0,0,2.41,3.57,10.17,10.17,0,0,0,5,1.2,9.9,9.9,0,0,0,4.9-1.19,4.17,4.17,0,0,0,2.39-3.54,3.6,3.6,0,0,0-.84-2.24l55-31.54A10.17,10.17,0,0,0,820.68,384.54Zm-3.75-6.19a7.51,7.51,0,0,1,3.67-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.42a8.7,8.7,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45S816.19,378.77,816.93,378.35Zm-58.84,40.23a8.7,8.7,0,0,1-7.41,0c-.76-.43-1.19-1-1.19-1.44s.42-1,1.16-1.42a8.32,8.32,0,0,1,7.41,0c.76.43,1.19,1,1.19,1.44S758.83,418.15,758.09,418.58Z" fill="#45108a" />
                    <path d="M792.64,358a10,10,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.38-3.54,4.28,4.28,0,0,0-2.41-3.57,10.81,10.81,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,3.5,3.5,0,0,0,.6,1.92l-27.14,15.84.2.35a10.1,10.1,0,0,0-4.84-1.16,9.94,9.94,0,0,0-4.91,1.19,4.18,4.18,0,0,0-2.39,3.54,4.27,4.27,0,0,0,2.42,3.57,10.77,10.77,0,0,0,9.86,0,4.16,4.16,0,0,0,2.38-3.54,3.6,3.6,0,0,0-.83-2.23l27.17-15.87A10.17,10.17,0,0,0,792.64,358Zm-3.75-6.19a7.51,7.51,0,0,1,3.67-.86,7.76,7.76,0,0,1,3.73.87c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.41a8.66,8.66,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45S788.15,352.18,788.89,351.76Zm-31,24.55a8.73,8.73,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.45s.43-1,1.17-1.42a8.3,8.3,0,0,1,7.4,0c.76.44,1.19,1,1.19,1.44S758.58,375.88,757.84,376.31Z" fill="#45108a" />
                    <path d="M549.51,356.49l1.23-2.12-66.52-38.82,24.46-15.13L453,267.88a3.61,3.61,0,0,0,.85-2.26,4.16,4.16,0,0,0-2.38-3.54,9.94,9.94,0,0,0-4.91-1.19,10.1,10.1,0,0,0-4.95,1.2,4.27,4.27,0,0,0-2.42,3.57,4.18,4.18,0,0,0,2.39,3.54,9.93,9.93,0,0,0,4.9,1.19,10.39,10.39,0,0,0,4.38-.93l53.09,31-24.46,15.13ZM442.77,267.08c-.73-.43-1.16-.95-1.16-1.42s.44-1,1.19-1.44a7.7,7.7,0,0,1,3.73-.88,7.58,7.58,0,0,1,3.68.86c.74.43,1.16.94,1.16,1.42s-.43,1-1.19,1.44A8.7,8.7,0,0,1,442.77,267.08Z" fill="url(#linear-gradient-52)" />
                    <path d="M456.71,481.33a10.1,10.1,0,0,0-4.95-1.2,9.94,9.94,0,0,0-4.91,1.19,4.18,4.18,0,0,0-2.39,3.54,3.53,3.53,0,0,0,.64,2l-39.4,22.23,27,14.71a3.45,3.45,0,0,0-.54,1.83,4.24,4.24,0,0,0,2.42,3.56,10.73,10.73,0,0,0,9.86,0,4.17,4.17,0,0,0,2.38-3.54,4.28,4.28,0,0,0-2.41-3.57,10.17,10.17,0,0,0-5-1.2,10,10,0,0,0-4.84,1.16l-23.83-13,36.34-20.5a10.23,10.23,0,0,0,4.74,1.1,9.94,9.94,0,0,0,4.91-1.19,4.17,4.17,0,0,0,2.39-3.54A4.27,4.27,0,0,0,456.71,481.33Zm-13.56,42.86c.76.44,1.19,1,1.19,1.45s-.42,1-1.16,1.42a8.32,8.32,0,0,1-7.41,0c-.75-.44-1.19-1-1.19-1.44a1.15,1.15,0,0,1,.25-.64h0l.06-.12a3.21,3.21,0,0,1,.83-.66,7.58,7.58,0,0,1,3.68-.86A7.76,7.76,0,0,1,443.15,524.19Zm12.36-37.87a8.7,8.7,0,0,1-7.41,0c-.75-.43-1.18-1-1.18-1.44s.42-1,1.16-1.42a7.55,7.55,0,0,1,3.68-.86,7.7,7.7,0,0,1,3.73.88c.75.43,1.19,1,1.19,1.44S456.25,485.89,455.51,486.32Z" fill="#45108a" />
                    <path d="M676.33,355.38l1.25,2.11,116.23-69.44-.28-.48a10.68,10.68,0,0,0,9.54-.13,4.18,4.18,0,0,0,2.39-3.54,4.26,4.26,0,0,0-2.42-3.57,10.81,10.81,0,0,0-9.86,0,4.18,4.18,0,0,0-2.39,3.54,3.71,3.71,0,0,0,1.07,2.51Zm118.08-72.94a7.55,7.55,0,0,1,3.68-.86,7.82,7.82,0,0,1,3.73.87c.75.44,1.19,1,1.19,1.45s-.43,1-1.17,1.41a8.7,8.7,0,0,1-7.41,0c-.75-.44-1.18-1-1.18-1.45S793.67,282.86,794.41,282.44Z" fill="url(#linear-gradient-53)" />
                    <line x1="839.3" y1="367.96" x2="990.76" y2="279.37" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-54)" />
                    <line x1="290.19" y1="555.39" x2="365.06" y2="511.6" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-55)" />
                    <line x1="812.59" y1="299.41" x2="842.89" y2="281.68" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-56)" />
                    <line x1="210.47" y1="289.92" x2="99.48" y2="223.41" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-57)" />
                    <line x1="699.54" y1="526.99" x2="748.03" y2="555.26" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-58)" />
                    <polyline points="605.99 593.36 676.5 634.47 644.52 656.16" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-59)" />
                    <polyline points="311.45 350.43 228.97 301.17 200.73 316.08" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-60)" />
                    <line x1="296.68" y1="288.87" x2="264.48" y2="309.33" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-61)" />
                    <line x1="982.18" y1="301.01" x2="1044.02" y2="335.1" fill="none" strokeMiterlimit={10} strokeWidth={3} stroke="url(#linear-gradient-62)" />
                  </g>
                  <g>
                    <g>
                      <g opacity="0.2">
                        <path d="M585.08,470.17a29.58,29.58,0,0,0,14.8-3.57l98-56.73c5.4-3.11,8.49-8,8.49-13.52,0-6-3.73-11.6-10.22-15.35l-88.94-51.35a36.48,36.48,0,0,0-18-4.57,29.68,29.68,0,0,0-14.79,3.57l-98,56.73c-5.4,3.11-8.49,8-8.49,13.52,0,6,3.72,11.61,10.22,15.36l88.93,51.34A36.43,36.43,0,0,0,585.08,470.17Z" fill="#43e8e1" opacity={0} />
                        <path d="M575.29,329.05,479.6,384.42c-4.9,2.83-8.48,7.88-8.69,12.86-.23,5.75,3,11.3,9.43,15L568,462.93a35.37,35.37,0,0,0,17.51,4.41,31.24,31.24,0,0,0,10.55-1.78,25.82,25.82,0,0,0,3.83-1.78l95.48-55.25c4.9-2.83,8.45-7.86,8.66-12.84.23-5.75-3-11.3-9.43-15L607.39,330.3a35.31,35.31,0,0,0-6.47-2.87,37.82,37.82,0,0,0-11.1-1.79A28.71,28.71,0,0,0,575.29,329.05Z" fill="#43e8e1" opacity="0.09" />
                        <path d="M576.1,329.45l-93.34,54c-4.42,2.55-8.5,7.72-8.89,12.19-.48,5.52,2.22,11,8.63,14.7l86.43,49.91A34.19,34.19,0,0,0,586,464.51a30.45,30.45,0,0,0,10.25-1.8,26.82,26.82,0,0,0,3.7-1.76l92.93-53.77c4.41-2.55,8.44-7.68,8.82-12.15.48-5.53-2.22-11-8.63-14.71l-85.53-49.38a39.4,39.4,0,0,0-6.32-2.86,37.08,37.08,0,0,0-10.85-1.89A27.76,27.76,0,0,0,576.1,329.45Z" fill="#43e8e1" opacity="0.18" />
                        <path d="M576.9,329.85l-91,52.65c-3.92,2.27-8.55,7.57-9.08,11.52-.72,5.34,1.46,10.7,7.83,14.38l85.18,49.18a33,33,0,0,0,16.59,4.1,29.06,29.06,0,0,0,9.94-1.82,31.36,31.36,0,0,0,3.59-1.74l90.37-52.29c3.92-2.26,8.45-7.51,9-11.46.72-5.34-1.47-10.7-7.84-14.38l-83.83-48.4a45.65,45.65,0,0,0-6.16-2.87,36.13,36.13,0,0,0-10.6-2A26.83,26.83,0,0,0,576.9,329.85Z" fill="#43e8e1" opacity="0.27" />
                        <path d="M577.71,330.25l-88.65,51.3c-3.43,2-9.28,7.36-9.28,10.85-1.9,4.92.71,10.39,7,14.05l83.93,48.46a32,32,0,0,0,16.12,3.94,28.13,28.13,0,0,0,9.65-1.85,37.22,37.22,0,0,0,3.47-1.7l87.81-50.81c3.43-2,9.15-7.3,9.15-10.78,1.91-4.92-.7-10.4-7-14.06l-82.13-47.42a51.93,51.93,0,0,0-6-2.86,35.72,35.72,0,0,0-10.35-2.07A26,26,0,0,0,577.71,330.25Z" fill="#43e8e1" opacity="0.36" />
                        <path d="M578.52,330.65l-86.3,49.94c-2.94,1.7-9.48,7.19-9.48,10.18-2.38,4.65-.05,10.1,6.24,13.73l82.68,47.73A30.72,30.72,0,0,0,587.32,456a27,27,0,0,0,9.34-1.87c.76-.3,2.69-1.3,3.36-1.68l85.25-49.33c2.94-1.7,9.32-7.1,9.32-10.09,2.38-4.65,0-10.1-6.24-13.73l-80.44-46.44a58.7,58.7,0,0,0-5.85-2.86,34.78,34.78,0,0,0-10.1-2.16A25,25,0,0,0,578.52,330.65Z" fill="#43e8e1" opacity="0.45" />
                        <path d="M579.32,331.05l-84,48.58c-2.45,1.41-9.67,7-9.67,9.51-2.86,4.38-.8,9.8,5.44,13.41l81.43,47a29.66,29.66,0,0,0,15.2,3.63,26.23,26.23,0,0,0,9-1.89c.62-.25,2.68-1.34,3.23-1.66l82.7-47.85c2.45-1.41,9.49-6.91,9.49-9.4,2.85-4.38.8-9.8-5.45-13.41l-78.73-45.46c-.93-.53-4.66-2.47-5.71-2.86a34.35,34.35,0,0,0-9.85-2.25A24.23,24.23,0,0,0,579.32,331.05Z" fill="#43e8e1" opacity="0.55" />
                        <path d="M580.13,331.45l-81.6,47.22c-2,1.13-9.88,6.85-9.88,8.84-3.32,4.11-1.55,9.5,4.65,13.09l80.18,46.29a28.48,28.48,0,0,0,14.73,3.47,25,25,0,0,0,8.74-1.91c.5-.21,2.68-1.38,3.12-1.63l80.13-46.37c2-1.14,9.66-6.73,9.66-8.72,3.33-4.11,1.56-9.5-4.65-13.08l-77-44.48c-.74-.43-4.72-2.54-5.55-2.86A33.09,33.09,0,0,0,593,329C588.21,328.64,583.55,329.48,580.13,331.45Z" fill="#43e8e1" opacity="0.64" />
                        <path d="M580.94,331.85l-79.26,45.86c-1.47.85-10.07,6.68-10.07,8.18-3.8,3.83-2.31,9.19,3.85,12.75l78.93,45.57a27.33,27.33,0,0,0,14.27,3.32,23.94,23.94,0,0,0,8.44-1.93c.37-.16,2.66-1.42,3-1.61l77.57-44.89c1.48-.85,9.83-6.54,9.83-8,3.8-3.84,2.31-9.2-3.86-12.76l-75.33-43.49c-.55-.32-4.77-2.61-5.4-2.86a32.85,32.85,0,0,0-9.35-2.44C588.87,329.15,584.27,329.93,580.94,331.85Z" fill="#43e8e1" opacity="0.73" />
                        <path d="M581.74,332.25l-76.9,44.5c-1,.57-10.27,6.51-10.27,7.51-4.28,3.56-3.07,8.9,3.06,12.43l77.67,44.85a26.28,26.28,0,0,0,13.81,3.16,22.86,22.86,0,0,0,8.13-2c.25-.11,2.66-1.45,2.88-1.58l75-43.41c1-.56,10-6.35,10-7.34,4.28-3.57,3.07-8.9-3-12.44l-73.64-42.51c-.37-.21-4.83-2.69-5.25-2.86a32.08,32.08,0,0,0-9.1-2.52C589.52,329.66,585,330.38,581.74,332.25Z" fill="#43e8e1" opacity="0.82" />
                        <path d="M582.55,332.65,508,375.79c-.49.29-10.47,6.35-10.47,6.84-4.75,3.3-3.82,8.6,2.27,12.11l76.42,44.13a25.23,25.23,0,0,0,13.35,3,21.68,21.68,0,0,0,7.83-2c.12-.05,2.65-1.49,2.76-1.56l72.46-41.93c.49-.28,10.16-6.16,10.16-6.66,4.75-3.29,3.82-8.59-2.26-12.1l-71.94-41.53c-.18-.11-4.88-2.77-5.09-2.86a31.62,31.62,0,0,0-8.85-2.62C590.17,330.17,585.7,330.83,582.55,332.65Z" fill="#43e8e1" opacity="0.91" />
                        <path d="M597.53,437l82.88-48c5.23-3,4.57-8.29-1.47-11.78l-75.18-43.4c-6-3.49-15.17-3.87-20.41-.85l-82.87,48c-5.23,3-4.57,8.29,1.47,11.78l75.17,43.4C583.16,439.68,592.3,440.06,597.53,437Z" fill="#43e8e1" />
                      </g>
                      <path d="M701.52,366.15h-2.25a16.37,16.37,0,0,0-4.75-4l-87.68-50.62c-10.38-6-28.5-5.24-40.48,1.67L485.28,360a24,24,0,0,0-7.25,6.12h-2.66v7h.07c.33,3.47,2.6,6.76,6.93,9.26L570.05,433c10.37,6,28.5,5.24,40.48-1.68l81.08-46.81c5.69-3.29,8.94-7.37,9.7-11.39h.21Z" fill="url(#linear-gradient-63)" />
                      <path d="M570.05,427.69l-87.68-50.62c-10.37-6-9.07-16.45,2.91-23.37l81.08-46.81c12-6.92,30.1-7.67,40.48-1.68l87.68,50.62c10.37,6,9.07,16.45-2.91,23.37L610.53,426C598.55,432.93,580.42,433.68,570.05,427.69Z" fill="url(#New_Gradient_Swatch_copy_25-25)" />
                      <path d="M698.69,354.07h-2.2a15.91,15.91,0,0,0-4.64-3.9l-85.62-49.43c-10.13-5.85-27.83-5.12-39.53,1.64l-79.18,45.71a23.55,23.55,0,0,0-7.08,6h-2.6v12.22h.07c.32,3.39,2.54,6.6,6.77,9l85.62,49.43c10.13,5.85,27.83,5.12,39.53-1.63L689,377.41c5.56-3.21,8.73-7.19,9.48-11.12h.2Z" fill="url(#linear-gradient-64)" />
                      <path d="M701.34,345.94h-2.25a16.44,16.44,0,0,0-4.76-4l-87.67-50.62c-10.38-6-28.5-5.24-40.48,1.68L485.1,339.82a24,24,0,0,0-7.25,6.12h-2.66v14.69h.07c.33,3.47,2.6,6.76,6.93,9.26l87.68,50.62c10.37,6,28.5,5.24,40.48-1.68L691.43,372c5.69-3.29,8.94-7.37,9.7-11.39h.21Z" fill="url(#linear-gradient-65)" />
                      <path d="M569.87,407.49l-87.68-50.62c-10.37-6-9.07-16.46,2.91-23.37l81.08-46.82c12-6.91,30.1-7.66,40.48-1.67l87.67,50.62c10.38,6,9.08,16.45-2.9,23.37l-81.08,46.81C598.37,412.73,580.24,413.48,569.87,407.49Z" fill="url(#New_Gradient_Swatch_copy_25-26)" />
                      <path d="M574,393.68l-67.9-39.21c-8-4.64-7-12.74,2.25-18.1l62.8-36.26c9.28-5.35,23.32-5.94,31.35-1.3L670.42,338c8,4.64,7,12.74-2.25,18.1l-62.8,36.26C596.09,397.74,582.05,398.32,574,393.68Z" fill="url(#New_Gradient_Swatch_copy_25-27)" />
                      <path d="M691.43,357.19,610.35,404c-12,6.92-30.11,7.67-40.48,1.68l-87.68-50.62c-4.16-2.4-6.41-5.53-6.88-8.86-.64,4.31,1.6,8.52,6.88,11.57l87.68,50.62c10.37,6,28.5,5.24,40.48-1.68l81.08-46.81c7.17-4.14,10.48-9.55,9.79-14.51C700.6,349.54,697.31,353.79,691.43,357.19Z" fill="url(#Radial_Gradient_1-12)" style={{mixBlendMode: 'color-dodge'}} />
                      <ellipse cx="586.71" cy="426.62" rx="27.82" ry="37.76" transform="translate(-43.27 66.96) rotate(-6.3)" fill="url(#radial-gradient-15)" style={{mixBlendMode: 'color-dodge'}} />
                      <g style={{mixBlendMode: 'screen'}}>
                        <g>
                          <polygon points="587.62 301.42 591.13 299.39 587.64 297.38 584.12 299.41 587.62 301.42" fill="#2af6ff" opacity="0.2" />
                          <polygon points="581.01 305.24 584.53 303.21 581.03 301.19 577.52 303.22 581.01 305.24" fill="#2af6ff" opacity="0.5" />
                          <polygon points="574.41 309.05 577.92 307.02 574.43 305 570.91 307.03 574.41 309.05" fill="#2af6ff" />
                          <polygon points="567.8 312.86 571.32 310.83 567.83 308.82 564.31 310.85 567.8 312.86" fill="#2af6ff" />
                          <polygon points="561.2 316.68 564.71 314.65 561.22 312.63 557.7 314.66 561.2 316.68" fill="#2af6ff" opacity="0.5" />
                          <polygon points="554.59 320.49 558.11 318.46 554.62 316.44 551.1 318.47 554.59 320.49" fill="#2af6ff" />
                          <polygon points="547.99 324.3 551.5 322.27 548.01 320.25 544.5 322.29 547.99 324.3" fill="#2af6ff" />
                          <polygon points="541.38 328.12 544.9 326.09 541.41 324.07 537.89 326.1 541.38 328.12" fill="#2af6ff" opacity="0.5" />
                          <polygon points="534.78 331.93 538.3 329.9 534.8 327.88 531.29 329.91 534.78 331.93" fill="#2af6ff" />
                          <polygon points="528.18 335.74 531.69 333.71 528.2 331.69 524.68 333.73 528.18 335.74" fill="#2af6ff" />
                          <polygon points="521.57 339.56 525.09 337.52 521.59 335.51 518.08 337.54 521.57 339.56" fill="#2af6ff" opacity="0.5" />
                          <polygon points="514.97 343.37 518.48 341.34 514.99 339.32 511.47 341.35 514.97 343.37" fill="#2af6ff" opacity="0.5" />
                          <polygon points="508.36 347.18 511.88 345.15 508.38 343.13 504.87 345.16 508.36 347.18" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="593.86 305.03 597.37 303 593.88 300.98 590.36 303.01 593.86 305.03" fill="#2af6ff" opacity="0.5" />
                          <polygon points="587.25 308.84 590.77 306.81 587.28 304.79 583.76 306.82 587.25 308.84" fill="#2af6ff" opacity="0.5" />
                          <polygon points="580.65 312.65 584.16 310.62 580.67 308.61 577.15 310.64 580.65 312.65" fill="#2af6ff" opacity="0.5" />
                          <polygon points="574.04 316.47 577.56 314.44 574.07 312.42 570.55 314.45 574.04 316.47" fill="#2af6ff" opacity="0.5" />
                          <polygon points="567.44 320.28 570.96 318.25 567.46 316.23 563.95 318.26 567.44 320.28" fill="#2af6ff" />
                          <polygon points="560.84 324.09 564.35 322.06 560.86 320.05 557.34 322.08 560.84 324.09" fill="#2af6ff" opacity="0.5" />
                          <polygon points="554.23 327.91 557.75 325.88 554.25 323.86 550.74 325.89 554.23 327.91" fill="#2af6ff" opacity="0.2" />
                          <polygon points="547.63 331.72 551.14 329.69 547.65 327.67 544.13 329.7 547.63 331.72" fill="#2af6ff" />
                          <polygon points="541.02 335.53 544.54 333.5 541.04 331.49 537.53 333.51 541.02 335.53" fill="#2af6ff" opacity="0.5" />
                          <polygon points="534.42 339.35 537.93 337.32 534.44 335.3 530.92 337.33 534.42 339.35" fill="#2af6ff" />
                          <polygon points="527.81 343.16 531.33 341.13 527.84 339.11 524.32 341.14 527.81 343.16" fill="#2af6ff" opacity="0.5" />
                          <polygon points="521.21 346.97 524.73 344.94 521.23 342.93 517.72 344.95 521.21 346.97" fill="#2af6ff" opacity="0.5" />
                          <polygon points="514.61 350.79 518.12 348.75 514.63 346.74 511.11 348.77 514.61 350.79" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="600.1 308.63 603.62 306.6 600.12 304.58 596.61 306.62 600.1 308.63" fill="#2af6ff" />
                          <polygon points="593.5 312.44 597.01 310.42 593.52 308.4 590 310.43 593.5 312.44" fill="#2af6ff" opacity="0.5" />
                          <polygon points="586.89 316.26 590.41 314.23 586.91 312.21 583.4 314.24 586.89 316.26" fill="#2af6ff" opacity="0.2" />
                          <polygon points="580.29 320.07 583.8 318.04 580.31 316.02 576.79 318.05 580.29 320.07" fill="#2af6ff" opacity="0.2" />
                          <polygon points="573.68 323.88 577.2 321.85 573.7 319.84 570.19 321.87 573.68 323.88" fill="#2af6ff" opacity="0.2" />
                          <polygon points="567.08 327.7 570.59 325.67 567.1 323.65 563.58 325.68 567.08 327.7" fill="#2af6ff" opacity="0.5" />
                          <polygon points="560.47 331.51 563.99 329.48 560.5 327.46 556.98 329.49 560.47 331.51" fill="#2af6ff" opacity="0.2" />
                          <polygon points="553.87 335.32 557.38 333.29 553.89 331.28 550.38 333.31 553.87 335.32" fill="#2af6ff" opacity="0.2" />
                          <polygon points="547.26 339.14 550.78 337.11 547.29 335.09 543.77 337.12 547.26 339.14" fill="#2af6ff" opacity="0.2" />
                          <polygon points="540.66 342.95 544.18 340.92 540.68 338.9 537.17 340.93 540.66 342.95" fill="#2af6ff" opacity="0.2" />
                          <polygon points="534.06 346.76 537.57 344.73 534.08 342.71 530.56 344.75 534.06 346.76" fill="#2af6ff" opacity="0.5" />
                          <polygon points="527.45 350.58 530.97 348.55 527.47 346.53 523.96 348.56 527.45 350.58" fill="#2af6ff" opacity="0.5" />
                          <polygon points="520.85 354.39 524.36 352.36 520.87 350.34 517.35 352.37 520.85 354.39" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="606.34 312.24 609.86 310.21 606.36 308.19 602.85 310.22 606.34 312.24" fill="#2af6ff" opacity="0.5" />
                          <polygon points="599.74 316.05 603.25 314.02 599.76 312 596.24 314.03 599.74 316.05" fill="#2af6ff" opacity="0.2" />
                          <polygon points="593.13 319.86 596.65 317.83 593.15 315.81 589.64 317.85 593.13 319.86" fill="#ff63ce" opacity="0.5" />
                          <polygon points="586.53 323.68 590.04 321.64 586.55 319.63 583.03 321.66 586.53 323.68" fill="#ff63ce" />
                          <polygon points="579.92 327.49 583.44 325.46 579.95 323.44 576.43 325.47 579.92 327.49" fill="#2af6ff" opacity="0.2" />
                          <polygon points="573.32 331.3 576.84 329.27 573.34 327.25 569.83 329.28 573.32 331.3" fill="#2af6ff" opacity="0.2" />
                          <polygon points="566.72 335.11 570.23 333.08 566.74 331.07 563.22 333.1 566.72 335.11" fill="#2af6ff" opacity={0} />
                          <polygon points="560.11 338.93 563.63 336.9 560.13 334.88 556.62 336.91 560.11 338.93" fill="#ff63ce" />
                          <polygon points="553.51 342.74 557.02 340.71 553.53 338.69 550.01 340.72 553.51 342.74" fill="#ff63ce" opacity="0.5" />
                          <polygon points="546.9 346.55 550.42 344.52 546.92 342.51 543.41 344.54 546.9 346.55" fill="#2af6ff" opacity={0} />
                          <polygon points="540.3 350.37 543.81 348.34 540.32 346.32 536.8 348.35 540.3 350.37" fill="#2af6ff" opacity="0.2" />
                          <polygon points="533.69 354.18 537.21 352.15 533.72 350.13 530.2 352.16 533.69 354.18" fill="#2af6ff" />
                          <polygon points="527.09 357.99 530.61 355.96 527.11 353.95 523.6 355.98 527.09 357.99" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="612.58 315.84 616.1 313.81 612.61 311.79 609.09 313.82 612.58 315.84" fill="#2af6ff" />
                          <polygon points="605.98 319.65 609.5 317.62 606 315.61 602.49 317.63 605.98 319.65" fill="#2af6ff" opacity="0.2" />
                          <polygon points="599.38 323.47 602.89 321.44 599.4 319.42 595.88 321.45 599.38 323.47" fill="#ff63ce" />
                          <polygon points="592.77 327.28 596.29 325.25 592.79 323.23 589.28 325.26 592.77 327.28" fill="#ff63ce" />
                          <polygon points="586.17 331.09 589.68 329.06 586.19 327.05 582.67 329.07 586.17 331.09" fill="#2af6ff" opacity={0} />
                          <polygon points="579.56 334.9 583.08 332.88 579.58 330.86 576.07 332.89 579.56 334.9" fill="#2af6ff" opacity="0.2" />
                          <polygon points="572.96 338.72 576.47 336.69 572.98 334.67 569.46 336.7 572.96 338.72" fill="#2af6ff" opacity={0} />
                          <polygon points="566.35 342.53 569.87 340.5 566.38 338.48 562.86 340.51 566.35 342.53" fill="#ff63ce" />
                          <polygon points="559.75 346.34 563.26 344.31 559.77 342.3 556.25 344.33 559.75 346.34" fill="#ff63ce" />
                          <polygon points="553.14 350.16 556.66 348.13 553.17 346.11 549.65 348.14 553.14 350.16" fill="#2af6ff" opacity={0} />
                          <polygon points="546.54 353.97 550.06 351.94 546.56 349.92 543.05 351.95 546.54 353.97" fill="#2af6ff" opacity="0.5" />
                          <polygon points="539.94 357.78 543.45 355.75 539.96 353.74 536.44 355.77 539.94 357.78" fill="#2af6ff" opacity="0.2" />
                          <polygon points="533.33 361.6 536.85 359.57 533.35 357.55 529.84 359.58 533.33 361.6" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="618.83 319.44 622.34 317.41 618.85 315.4 615.33 317.43 618.83 319.44" fill="#2af6ff" opacity="0.5" />
                          <polygon points="612.22 323.26 615.74 321.23 612.24 319.21 608.73 321.24 612.22 323.26" fill="#2af6ff" opacity="0.2" />
                          <polygon points="605.62 327.07 609.13 325.04 605.64 323.02 602.12 325.05 605.62 327.07" fill="#ff63ce" />
                          <polygon points="599.01 330.88 602.53 328.85 599.03 326.84 595.52 328.87 599.01 330.88" fill="#ff63ce" opacity="0.5" />
                          <polygon points="592.41 334.7 595.92 332.67 592.43 330.65 588.91 332.68 592.41 334.7" fill="#2af6ff" opacity={0} />
                          <polygon points="585.8 338.51 589.32 336.48 585.83 334.46 582.31 336.49 585.8 338.51" fill="#2af6ff" opacity={0} />
                          <polygon points="579.2 342.32 582.72 340.29 579.22 338.27 575.71 340.31 579.2 342.32" fill="#ff63ce" opacity="0.5" />
                          <polygon points="572.6 346.13 576.11 344.11 572.62 342.09 569.1 344.12 572.6 346.13" fill="#ff63ce" />
                          <polygon points="565.99 349.95 569.51 347.92 566.01 345.9 562.5 347.93 565.99 349.95" fill="#ff63ce" />
                          <polygon points="559.39 353.76 562.9 351.73 559.41 349.71 555.89 351.74 559.39 353.76" fill="#ff63ce" opacity="0.5" />
                          <polygon points="552.78 357.57 556.3 355.54 552.8 353.53 549.29 355.56 552.78 357.57" fill="#2af6ff" opacity={0} />
                          <polygon points="546.18 361.39 549.69 359.36 546.2 357.34 542.68 359.37 546.18 361.39" fill="#2af6ff" opacity="0.2" />
                          <polygon points="539.57 365.2 543.09 363.17 539.6 361.15 536.08 363.18 539.57 365.2" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="625.07 323.05 628.58 321.02 625.09 319 621.58 321.03 625.07 323.05" fill="#2af6ff" />
                          <polygon points="618.46 326.86 621.98 324.83 618.49 322.81 614.97 324.84 618.46 326.86" fill="#2af6ff" opacity="0.2" />
                          <polygon points="611.86 330.67 615.38 328.64 611.88 326.63 608.37 328.66 611.86 330.67" fill="#ff63ce" />
                          <polygon points="605.25 334.49 608.77 332.46 605.28 330.44 601.76 332.47 605.25 334.49" fill="#ff63ce" />
                          <polygon points="598.65 338.3 602.17 336.27 598.67 334.25 595.16 336.28 598.65 338.3" fill="#2af6ff" opacity={0} />
                          <polygon points="592.05 342.11 595.56 340.08 592.07 338.07 588.55 340.1 592.05 342.11" fill="#2af6ff" opacity={0} />
                          <polygon points="585.44 345.93 588.96 343.9 585.46 341.88 581.95 343.91 585.44 345.93" fill="#ff63ce" />
                          <polygon points="578.84 349.74 582.35 347.71 578.86 345.69 575.34 347.72 578.84 349.74" fill="#2af6ff" opacity={0} />
                          <polygon points="572.23 353.55 575.75 351.52 572.25 349.5 568.74 351.54 572.23 353.55" fill="#2af6ff" opacity={0} />
                          <polygon points="565.63 357.37 569.14 355.33 565.65 353.32 562.13 355.35 565.63 357.37" fill="#ff63ce" />
                          <polygon points="559.02 361.18 562.54 359.15 559.05 357.13 555.53 359.16 559.02 361.18" fill="#2af6ff" opacity={0} />
                          <polygon points="552.42 364.99 555.94 362.96 552.44 360.94 548.93 362.97 552.42 364.99" fill="#2af6ff" />
                          <polygon points="545.82 368.8 549.33 366.77 545.84 364.76 542.32 366.79 545.82 368.8" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="631.31 326.65 634.83 324.62 631.33 322.6 627.82 324.63 631.31 326.65" fill="#2af6ff" />
                          <polygon points="624.71 330.46 628.22 328.43 624.73 326.42 621.21 328.45 624.71 330.46" fill="#2af6ff" opacity="0.2" />
                          <polygon points="618.1 334.28 621.62 332.25 618.12 330.23 614.61 332.26 618.1 334.28" fill="#ff63ce" opacity="0.5" />
                          <polygon points="611.5 338.09 615.01 336.06 611.52 334.04 608 336.07 611.5 338.09" fill="#ff63ce" />
                          <polygon points="604.89 341.9 608.41 339.87 604.91 337.86 601.4 339.89 604.89 341.9" fill="#2af6ff" opacity={0} />
                          <polygon points="598.29 345.72 601.8 343.69 598.31 341.67 594.79 343.7 598.29 345.72" fill="#2af6ff" opacity={0} />
                          <polygon points="591.68 349.53 595.2 347.5 591.71 345.48 588.19 347.51 591.68 349.53" fill="#ff63ce" />
                          <polygon points="585.08 353.34 588.6 351.31 585.1 349.3 581.59 351.33 585.08 353.34" fill="#ff63ce" />
                          <polygon points="578.48 357.16 581.99 355.13 578.5 353.11 574.98 355.14 578.48 357.16" fill="#ff63ce" />
                          <polygon points="571.87 360.97 575.39 358.94 571.89 356.92 568.38 358.95 571.87 360.97" fill="#ff63ce" />
                          <polygon points="565.27 364.78 568.78 362.75 565.29 360.74 561.77 362.76 565.27 364.78" fill="#2af6ff" opacity={0} />
                          <polygon points="558.66 368.6 562.18 366.56 558.68 364.55 555.17 366.58 558.66 368.6" fill="#2af6ff" opacity="0.5" />
                          <polygon points="552.06 372.41 555.57 370.38 552.08 368.36 548.56 370.39 552.06 372.41" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="637.55 330.25 641.07 328.23 637.58 326.21 634.06 328.24 637.55 330.25" fill="#2af6ff" opacity="0.5" />
                          <polygon points="630.95 334.07 634.46 332.04 630.97 330.02 627.46 332.05 630.95 334.07" fill="#2af6ff" opacity="0.2" />
                          <polygon points="624.34 337.88 627.86 335.85 624.37 333.83 620.85 335.86 624.34 337.88" fill="#ff63ce" />
                          <polygon points="617.74 341.69 621.25 339.67 617.76 337.65 614.25 339.68 617.74 341.69" fill="#ff63ce" opacity="0.5" />
                          <polygon points="611.13 345.51 614.65 343.48 611.16 341.46 607.64 343.49 611.13 345.51" fill="#2af6ff" opacity={0} />
                          <polygon points="604.53 349.32 608.05 347.29 604.55 345.27 601.04 347.3 604.53 349.32" fill="#ff63ce" opacity="0.5" />
                          <polygon points="597.93 353.13 601.44 351.1 597.95 349.09 594.43 351.12 597.93 353.13" fill="#ff63ce" />
                          <polygon points="591.32 356.95 594.84 354.92 591.34 352.9 587.83 354.93 591.32 356.95" fill="#ff63ce" />
                          <polygon points="584.72 360.76 588.23 358.73 584.74 356.71 581.22 358.74 584.72 360.76" fill="#ff63ce" />
                          <polygon points="578.11 364.57 581.63 362.54 578.13 360.53 574.62 362.56 578.11 364.57" fill="#ff63ce" />
                          <polygon points="571.51 368.39 575.02 366.36 571.53 364.34 568.01 366.37 571.51 368.39" fill="#ff63ce" opacity="0.5" />
                          <polygon points="564.9 372.2 568.42 370.17 564.93 368.15 561.41 370.18 564.9 372.2" fill="#2af6ff" opacity="0.2" />
                          <polygon points="558.3 376.01 561.82 373.98 558.32 371.96 554.81 374 558.3 376.01" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="643.79 333.86 647.31 331.83 643.82 329.81 640.3 331.84 643.79 333.86" fill="#2af6ff" opacity="0.5" />
                          <polygon points="637.19 337.67 640.71 335.64 637.21 333.63 633.7 335.65 637.19 337.67" fill="#2af6ff" opacity="0.2" />
                          <polygon points="630.59 341.49 634.1 339.45 630.61 337.44 627.09 339.47 630.59 341.49" fill="#ff63ce" />
                          <polygon points="623.98 345.3 627.5 343.27 624 341.25 620.49 343.28 623.98 345.3" fill="#ff63ce" />
                          <polygon points="617.38 349.11 620.89 347.08 617.4 345.06 613.88 347.09 617.38 349.11" fill="#2af6ff" opacity={0} />
                          <polygon points="610.77 352.92 614.29 350.89 610.79 348.88 607.28 350.91 610.77 352.92" fill="#ff63ce" opacity="0.5" />
                          <polygon points="604.17 356.74 607.68 354.71 604.19 352.69 600.67 354.72 604.17 356.74" fill="#ff63ce" />
                          <polygon points="597.56 360.55 601.08 358.52 597.59 356.5 594.07 358.53 597.56 360.55" fill="#2af6ff" opacity={0} />
                          <polygon points="590.96 364.36 594.48 362.33 590.98 360.32 587.47 362.35 590.96 364.36" fill="#2af6ff" opacity={0} />
                          <polygon points="584.36 368.18 587.87 366.15 584.38 364.13 580.86 366.16 584.36 368.18" fill="#ff63ce" />
                          <polygon points="577.75 371.99 581.27 369.96 577.77 367.94 574.26 369.97 577.75 371.99" fill="#ff63ce" />
                          <polygon points="571.15 375.8 574.66 373.77 571.17 371.76 567.65 373.79 571.15 375.8" fill="#2af6ff" opacity="0.5" />
                          <polygon points="564.54 379.62 568.06 377.59 564.56 375.57 561.05 377.6 564.54 379.62" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="650.04 337.46 653.55 335.43 650.06 333.42 646.54 335.45 650.04 337.46" fill="#2af6ff" />
                          <polygon points="643.43 341.28 646.95 339.25 643.46 337.23 639.94 339.26 643.43 341.28" fill="#2af6ff" opacity="0.2" />
                          <polygon points="636.83 345.09 640.34 343.06 636.85 341.04 633.33 343.07 636.83 345.09" fill="#ff63ce" opacity="0.2" />
                          <polygon points="630.22 348.9 633.74 346.87 630.25 344.86 626.73 346.88 630.22 348.9" fill="#ff63ce" />
                          <polygon points="623.62 352.71 627.13 350.69 623.64 348.67 620.13 350.7 623.62 352.71" fill="#2af6ff" opacity={0} />
                          <polygon points="617.01 356.53 620.53 354.5 617.04 352.48 613.52 354.51 617.01 356.53" fill="#ff63ce" />
                          <polygon points="610.41 360.34 613.93 358.31 610.43 356.29 606.92 358.32 610.41 360.34" fill="#ff63ce" />
                          <polygon points="603.81 364.15 607.32 362.13 603.83 360.11 600.31 362.14 603.81 364.15" fill="#2af6ff" opacity={0} />
                          <polygon points="597.2 367.97 600.72 365.94 597.22 363.92 593.71 365.95 597.2 367.97" fill="#2af6ff" opacity={0} />
                          <polygon points="590.6 371.78 594.11 369.75 590.62 367.73 587.1 369.76 590.6 371.78" fill="#ff63ce" opacity="0.5" />
                          <polygon points="583.99 375.59 587.51 373.56 584.01 371.55 580.5 373.58 583.99 375.59" fill="#ff63ce" />
                          <polygon points="577.39 379.41 580.9 377.38 577.41 375.36 573.89 377.39 577.39 379.41" fill="#2af6ff" opacity="0.2" />
                          <polygon points="570.78 383.22 574.3 381.19 570.81 379.17 567.29 381.2 570.78 383.22" fill="#2af6ff" />
                        </g>
                        <g>
                          <polygon points="656.28 341.07 659.79 339.04 656.3 337.02 652.78 339.05 656.28 341.07" fill="#2af6ff" />
                          <polygon points="649.67 344.88 653.19 342.85 649.7 340.83 646.18 342.86 649.67 344.88" fill="#2af6ff" opacity="0.5" />
                          <polygon points="643.07 348.69 646.59 346.66 643.09 344.65 639.58 346.68 643.07 348.69" fill="#2af6ff" opacity="0.2" />
                          <polygon points="636.47 352.51 639.98 350.48 636.49 348.46 632.97 350.49 636.47 352.51" fill="#2af6ff" opacity="0.2" />
                          <polygon points="629.86 356.32 633.38 354.29 629.88 352.27 626.37 354.3 629.86 356.32" fill="#2af6ff" opacity="0.2" />
                          <polygon points="623.26 360.13 626.77 358.1 623.28 356.08 619.76 358.12 623.26 360.13" fill="#2af6ff" opacity="0.2" />
                          <polygon points="616.65 363.94 620.17 361.92 616.67 359.9 613.16 361.93 616.65 363.94" fill="#2af6ff" opacity="0.2" />
                          <polygon points="610.05 367.76 613.56 365.73 610.07 363.71 606.55 365.74 610.05 367.76" fill="#2af6ff" opacity="0.2" />
                          <polygon points="603.44 371.57 606.96 369.54 603.47 367.52 599.95 369.55 603.44 371.57" fill="#2af6ff" opacity="0.2" />
                          <polygon points="596.84 375.38 600.36 373.36 596.86 371.34 593.35 373.37 596.84 375.38" fill="#2af6ff" opacity={0} />
                          <polygon points="590.24 379.2 593.75 377.17 590.26 375.15 586.74 377.18 590.24 379.2" fill="#2af6ff" opacity="0.2" />
                          <polygon points="583.63 383.01 587.15 380.98 583.65 378.96 580.14 380.99 583.63 383.01" fill="#2af6ff" opacity="0.5" />
                          <polygon points="577.03 386.82 580.54 384.79 577.05 382.78 573.53 384.81 577.03 386.82" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="662.52 344.67 666.04 342.64 662.54 340.62 659.03 342.65 662.52 344.67" fill="#2af6ff" opacity="0.2" />
                          <polygon points="655.92 348.48 659.43 346.45 655.94 344.44 652.42 346.47 655.92 348.48" fill="#2af6ff" />
                          <polygon points="649.31 352.3 652.83 350.27 649.33 348.25 645.82 350.28 649.31 352.3" fill="#2af6ff" />
                          <polygon points="642.71 356.11 646.22 354.08 642.73 352.06 639.21 354.09 642.71 356.11" fill="#2af6ff" opacity="0.5" />
                          <polygon points="636.1 359.92 639.62 357.89 636.13 355.88 632.61 357.91 636.1 359.92" fill="#2af6ff" opacity="0.5" />
                          <polygon points="629.5 363.74 633.01 361.71 629.52 359.69 626 361.72 629.5 363.74" fill="#2af6ff" />
                          <polygon points="622.89 367.55 626.41 365.52 622.92 363.5 619.4 365.53 622.89 367.55" fill="#2af6ff" />
                          <polygon points="616.29 371.36 619.81 369.33 616.31 367.31 612.8 369.35 616.29 371.36" fill="#2af6ff" />
                          <polygon points="609.69 375.18 613.2 373.14 609.71 371.13 606.19 373.16 609.69 375.18" fill="#2af6ff" />
                          <polygon points="603.08 378.99 606.6 376.96 603.1 374.94 599.59 376.97 603.08 378.99" fill="#2af6ff" opacity="0.5" />
                          <polygon points="596.48 382.8 599.99 380.77 596.5 378.75 592.98 380.78 596.48 382.8" fill="#2af6ff" />
                          <polygon points="589.87 386.61 593.39 384.58 589.89 382.57 586.38 384.6 589.87 386.61" fill="#2af6ff" opacity="0.5" />
                          <polygon points="583.27 390.43 586.78 388.4 583.29 386.38 579.77 388.41 583.27 390.43" fill="#2af6ff" opacity="0.5" />
                        </g>
                        <g>
                          <polygon points="668.76 348.27 672.28 346.25 668.78 344.23 665.27 346.26 668.76 348.27" fill="#2af6ff" opacity="0.2" />
                          <polygon points="662.16 352.09 665.67 350.06 662.18 348.04 658.66 350.07 662.16 352.09" fill="#2af6ff" />
                          <polygon points="655.55 355.9 659.07 353.87 655.58 351.85 652.06 353.88 655.55 355.9" fill="#2af6ff" opacity="0.5" />
                          <polygon points="648.95 359.71 652.47 357.68 648.97 355.67 645.46 357.7 648.95 359.71" fill="#2af6ff" opacity="0.5" />
                          <polygon points="642.35 363.53 645.86 361.5 642.37 359.48 638.85 361.51 642.35 363.53" fill="#2af6ff" />
                          <polygon points="635.74 367.34 639.26 365.31 635.76 363.29 632.25 365.32 635.74 367.34" fill="#2af6ff" />
                          <polygon points="629.14 371.15 632.65 369.12 629.16 367.11 625.64 369.14 629.14 371.15" fill="#2af6ff" />
                          <polygon points="622.53 374.97 626.05 372.94 622.55 370.92 619.04 372.95 622.53 374.97" fill="#2af6ff" opacity="0.5" />
                          <polygon points="615.93 378.78 619.44 376.75 615.95 374.73 612.43 376.76 615.93 378.78" fill="#2af6ff" opacity="0.5" />
                          <polygon points="609.32 382.59 612.84 380.56 609.35 378.55 605.83 380.57 609.32 382.59" fill="#2af6ff" opacity="0.5" />
                          <polygon points="602.72 386.4 606.24 384.38 602.74 382.36 599.23 384.39 602.72 386.4" fill="#2af6ff" />
                          <polygon points="596.12 390.22 599.63 388.19 596.14 386.17 592.62 388.2 596.12 390.22" fill="#2af6ff" opacity="0.5" />
                          <polygon points="589.51 394.03 593.03 392 589.53 389.98 586.02 392.01 589.51 394.03" fill="#2af6ff" opacity="0.2" />
                        </g>
                      </g>
                    </g>
                    <g>
                      <path d="M686.38,376.6l6.53-3.84,10.54,6.37a2.08,2.08,0,0,1,.95,2.25l-1.28,11.48-4-8a9.88,9.88,0,0,0-2.79-2.4Z" fill="url(#linear-gradient-66)" />
                      <path d="M699.66,384.14a10.51,10.51,0,0,0-2.79-2.4l-9.66-5.62-.83.48,10,5.82a9.88,9.88,0,0,1,2.79,2.4l4,8,0-.22Z" fill="url(#Radial_Gradient_1-13)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M673.81,383.86l6.54-3.84,10.53,6.37a2.06,2.06,0,0,1,1,2.25l-1.27,11.48-4-8.05a10.3,10.3,0,0,0-2.79-2.39Z" fill="url(#linear-gradient-67)" />
                      <path d="M687.1,391.4a10.4,10.4,0,0,0-2.8-2.4l-9.65-5.62-.84.48,10,5.82a10.3,10.3,0,0,1,2.79,2.39l4,8.05.05-.22Z" fill="url(#Radial_Gradient_1-14)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M661.25,391.12l6.54-3.84,10.53,6.37a2.08,2.08,0,0,1,.95,2.25L678,407.38l-4-8.05a10.19,10.19,0,0,0-2.8-2.39Z" fill="url(#linear-gradient-68)" />
                      <path d="M674.54,398.66a10.23,10.23,0,0,0-2.8-2.4l-9.66-5.62-.83.48,10,5.82a10.19,10.19,0,0,1,2.8,2.39l4,8.05,0-.22Z" fill="url(#Radial_Gradient_1-15)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M648.69,398.38l6.53-3.84,10.54,6.37a2.08,2.08,0,0,1,1,2.25l-1.28,11.48-4-8.05a10.19,10.19,0,0,0-2.8-2.39Z" fill="url(#linear-gradient-69)" />
                      <path d="M662,405.92a10.19,10.19,0,0,0-2.79-2.4l-9.66-5.62-.83.48,10,5.82a10.19,10.19,0,0,1,2.8,2.39l4,8.05.05-.22Z" fill="url(#Radial_Gradient_1-16)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M636.12,405.64l6.54-3.84,10.53,6.37a2.06,2.06,0,0,1,.95,2.25l-1.27,11.48-4-8a10.15,10.15,0,0,0-2.79-2.39Z" fill="url(#linear-gradient-70)" />
                      <path d="M649.41,413.18a10.23,10.23,0,0,0-2.8-2.4L637,405.16l-.84.48,10,5.82a10.15,10.15,0,0,1,2.79,2.39l4,8,0-.22Z" fill="url(#Radial_Gradient_1-17)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M623.56,412.9l6.54-3.85,10.53,6.37a2.1,2.1,0,0,1,1,2.26l-1.28,11.48-4-8.05a10.19,10.19,0,0,0-2.8-2.39Z" fill="url(#linear-gradient-71)" />
                      <path d="M636.85,420.44a10.23,10.23,0,0,0-2.8-2.4l-9.65-5.62-.84.48,10,5.82a10.19,10.19,0,0,1,2.8,2.39l4,8.05.06-.22Z" fill="url(#Radial_Gradient_1-18)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M610.94,420.16l6.53-3.85L628,422.68a2.09,2.09,0,0,1,1,2.25l-1.28,11.49-4-8.05a10.19,10.19,0,0,0-2.8-2.39Z" fill="url(#linear-gradient-72)" />
                      <path d="M624.22,427.7a10,10,0,0,0-2.79-2.4l-9.66-5.62-.83.48,10,5.82a10.19,10.19,0,0,1,2.8,2.39l4,8.05.05-.22Z" fill="url(#Radial_Gradient_1-19)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M598.38,427.42l6.53-3.85,10.53,6.37a2.08,2.08,0,0,1,.95,2.25l-1.27,11.49-4-8.05a10.36,10.36,0,0,0-2.79-2.4Z" fill="url(#linear-gradient-73)" />
                      <path d="M611.66,435a10.06,10.06,0,0,0-2.8-2.4l-9.65-5.63-.83.49,10,5.81a10.36,10.36,0,0,1,2.79,2.4l4,8.05,0-.22Z" fill="url(#Radial_Gradient_1-20)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M490.58,376.6l-6.53-3.84-10.53,6.37a2.06,2.06,0,0,0-.95,2.25l1.27,11.47,4-8a10.15,10.15,0,0,1,2.79-2.39Z" fill="url(#linear-gradient-74)" />
                      <path d="M477.3,384.14a10.06,10.06,0,0,1,2.8-2.4l9.65-5.62.83.48-10,5.82a10.15,10.15,0,0,0-2.79,2.39l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-21)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M503.14,383.86,496.61,380l-10.53,6.37a2.08,2.08,0,0,0-.95,2.25l1.27,11.48,4-8a10.21,10.21,0,0,1,2.79-2.4Z" fill="url(#linear-gradient-75)" />
                      <path d="M489.86,391.39a10.3,10.3,0,0,1,2.79-2.39l9.66-5.62.83.48-10,5.81a10.21,10.21,0,0,0-2.79,2.4l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-22)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M515.7,391.12l-6.53-3.85-10.53,6.37a2.09,2.09,0,0,0-1,2.25L499,407.37l4-8a9.88,9.88,0,0,1,2.79-2.4Z" fill="url(#linear-gradient-76)" />
                      <path d="M502.42,398.65a10.36,10.36,0,0,1,2.79-2.4l9.65-5.62.84.49-10,5.81a10.06,10.06,0,0,0-2.8,2.4l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-23)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M528.26,398.37l-6.54-3.84-10.53,6.37a2.08,2.08,0,0,0-.95,2.25l1.28,11.47,4-8a10.19,10.19,0,0,1,2.8-2.39Z" fill="url(#linear-gradient-77)" />
                      <path d="M515,405.91a10.19,10.19,0,0,1,2.79-2.4l9.65-5.62.84.48-10,5.82a10.19,10.19,0,0,0-2.8,2.39l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-24)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M540.82,405.63l-6.54-3.84-10.53,6.36a2.09,2.09,0,0,0-1,2.25l1.28,11.48,4-8a10.4,10.4,0,0,1,2.8-2.4Z" fill="url(#linear-gradient-78)" />
                      <path d="M527.54,413.16a10.15,10.15,0,0,1,2.79-2.39l9.65-5.62.84.48-10,5.81a10.4,10.4,0,0,0-2.8,2.4l-4,8-.05-.22Z" fill="url(#Radial_Gradient_1-25)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M553.38,412.89,546.84,409l-10.53,6.37a2.09,2.09,0,0,0-.95,2.25l1.28,11.48,4-8a10.23,10.23,0,0,1,2.8-2.4Z" fill="url(#linear-gradient-79)" />
                      <path d="M540.1,420.42a10,10,0,0,1,2.79-2.39l9.65-5.63.84.49-10,5.81a10.23,10.23,0,0,0-2.8,2.4l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-26)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M565.85,420.14l-6.54-3.84-10.53,6.37a2.08,2.08,0,0,0-.95,2.25l1.28,11.48,4-8a10.19,10.19,0,0,1,2.8-2.39Z" fill="url(#linear-gradient-80)" />
                      <path d="M552.57,427.68a10,10,0,0,1,2.79-2.4l9.65-5.62.84.48-10,5.82a10.19,10.19,0,0,0-2.8,2.39l-4,8-.05-.23Z" fill="url(#Radial_Gradient_1-27)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M578.4,427.4l-6.53-3.84-10.53,6.36a2.09,2.09,0,0,0-1,2.25l1.28,11.48,4-8a10.4,10.4,0,0,1,2.8-2.4Z" fill="url(#linear-gradient-81)" />
                      <path d="M565.12,434.93a10.19,10.19,0,0,1,2.8-2.39l9.65-5.62.83.48-10,5.81a10.4,10.4,0,0,0-2.8,2.4l-4,8,0-.22Z" fill="url(#Radial_Gradient_1-28)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <polygon points="672.27 226.91 589.32 178.6 505.26 225.88 505.26 345.53 589.01 394.3 672.27 346.41 672.27 226.91" fill="url(#linear-gradient-82)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <g id="linesgroup">
                    <g id="_10" data-name={10}>
                      <path id="line10" d="M506.12,417C479,432.31,460,443,460,443s-16.12-8.34-26.06-13.59c-9.69,5.21-22.53,12.26-27.94,14.88.5-.29-20.53-12.19-68.76-43.41" fill="none" />
                      <circle id="point10" cx="356.22" cy="413.02" r="6.53" fill="url(#Безымянный_градиент_195)" />
                    </g>
                    <g id="_9" data-name={9}>
                      <path id="line9" d="M480.72,356.38c-41.73-24-57.32-32-56.25-32.71,4.13-2.86,10.64-6,13.65-8.12.77-.54-22.86-12.08-38.59-22.82" fill="none" />
                      <circle id="point9" cx="422.36" cy="306.61" r="6.53" fill="url(#Безымянный_градиент_195-2)" />
                    </g>
                    <g id="_8" data-name={8}>
                      <path id="line8" d="M481.42,402.72c-4.27,2.24-17.53,10-17.53,10,1.7-1-54.87-31.19-53.88-32.12,2.28-2.14,15.58-8.28,14.82-8.59-2.58-1.06-18-10.93-64.82-38.24" fill="none" />
                      <path id="point8" d="M440.11,395.19a6.53,6.53,0,1,1-6.53-6.53A6.53,6.53,0,0,1,440.11,395.19Z" fill="url(#Безымянный_градиент_195-3)" />
                    </g>
                    <g id="_7" data-name={7}>
                      <path id="line7" d="M519.3,424.37Q488.15,442.29,457,460.13q-35.38,20.24-70.82,40.35" fill="none" />
                      <circle id="point7" cx="454.82" cy="460.92" r="6.53" fill="url(#Безымянный_градиент_195-4)" />
                    </g>
                    <g id="_6" data-name={6}>
                      <path id="line6" d="M532,431.89c-6,3.53-56.77,34.08-64.11,38.11l36,20.63" fill="none" />
                      <circle id="point6" cx="522.96" cy="436.87" r="6.53" fill="url(#Безымянный_градиент_195-5)" />
                    </g>
                    <g id="_5" data-name={5}>
                      <path id="line5" d="M593.05,459.11c9.57,5.79,22.24,13.45,26.65,16.06-5.51,2.56-61.81,35.26-68.51,39.13,4.24,2.43,44.29,25.74,44.29,25.74" fill="none" />
                      <circle id="point5" cx="596.31" cy="461.32" r="6.53" fill="url(#Безымянный_градиент_195-6)" />
                    </g>
                    <g id="_4" data-name={4}>
                      <path id="line4" d="M619.42,445.9c10.41,7,28.28,16.3,35.29,20.35-4.35,2.71-63,35.88-63,35.88s34.5,21.78,41.35,25.18c8-5.12,37.06-22.41,40.15-24.06" fill="none" />
                      <circle id="point4" cx="653.82" cy="514.63" r="6.53" fill="url(#Безымянный_градиент_195-7)" />
                    </g>
                    <g id="_3" data-name={3}>
                      <path id="line3" d="M657.54,424S768.6,488.55,769,488.67s-38.53,23.76-50.35,31.47c-.68.79,21.22,12,32.35,18.82,2.29.06,21.86-13.61,24.88-14.71" fill="none" />
                      <circle id="point3" cx="685.69" cy="440.48" r="6.53" fill="url(#Безымянный_градиент_195-8)" />
                    </g>
                    <g id="_2" data-name={2}>
                      <circle id="point2" cx="737.39" cy="406.81" r="6.53" fill="url(#Безымянный_градиент_195-9)" />
                      <path id="line2" d="M695.37,402.61c1.59,1.12,10.94,7.24,23.76,14.65,1.3.75,13.88-8.13,29.94-17.59" fill="none" />
                    </g>
                    <g id="_1" data-name={1}>
                      <path id="line1" d="M677.87,355.44c17.77-10.72,53.77-31.87,71.6-42.48C764,304.32,778,295.59,792.59,287" fill="none" />
                      <circle id="point1" cx="751.82" cy="311.42" r="6.53" fill="url(#Безымянный_градиент_195-10)" />
                    </g>
                  </g>
                </g>
                <g clipPath="url(#clip-path-5)">
                  <g id="bubbles" opacity="0.6">
                    <path d="M586.41,701.39a6.54,6.54,0,1,0,6.54-6.54A6.54,6.54,0,0,0,586.41,701.39Z" fill="#6de0f6" />
                    <path d="M627.65,611.36a11.18,11.18,0,1,0,11.17-11.18A11.17,11.17,0,0,0,627.65,611.36Z" fill="#6de0f6" />
                    <path d="M592.3,662.08a2.87,2.87,0,1,0,2.87-2.87A2.88,2.88,0,0,0,592.3,662.08Z" fill="#6de0f6" />
                    <circle cx="508.59" cy="594.26" r="5.59" fill="#6de0f6" />
                    <circle cx="665.28" cy="561.51" r="5.59" fill="#6de0f6" />
                    <path d="M534.07,546.83a4,4,0,1,0,3.95-4A4,4,0,0,0,534.07,546.83Z" fill="#6de0f6" />
                    <path d="M638.67,491.54a7.16,7.16,0,1,0,7.16-7.16A7.16,7.16,0,0,0,638.67,491.54Z" fill="#6de0f6" />
                    <path d="M529,434.48a4,4,0,1,0,4-4A4,4,0,0,0,529,434.48Z" fill="#6de0f6" />
                    <path d="M530.55,483.25a4.7,4.7,0,1,0,4.7-4.7A4.7,4.7,0,0,0,530.55,483.25Z" fill="#6de0f6" />
                    <path d="M670.87,453.35a4.7,4.7,0,1,0,4.7-4.7A4.71,4.71,0,0,0,670.87,453.35Z" fill="#6de0f6" />
                    <path d="M527.05,473.44a2.27,2.27,0,1,0,2.27-2.27A2.27,2.27,0,0,0,527.05,473.44Z" fill="#6de0f6" />
                    <path d="M609,390.64a2.27,2.27,0,1,0,2.27-2.28A2.27,2.27,0,0,0,609,390.64Z" fill="#6de0f6" />
                    <path d="M587.16,370.59A6.54,6.54,0,1,0,593.7,364,6.54,6.54,0,0,0,587.16,370.59Z" fill="#6de0f6" />
                    <path d="M628.4,280.56a11.18,11.18,0,1,0,11.18-11.18A11.17,11.17,0,0,0,628.4,280.56Z" fill="#6de0f6" />
                    <path d="M593.05,331.28a2.88,2.88,0,1,0,2.87-2.87A2.88,2.88,0,0,0,593.05,331.28Z" fill="#6de0f6" />
                    <circle cx="509.34" cy="263.46" r="5.59" fill="#6de0f6" />
                    <circle cx="666.04" cy="230.7" r="5.59" fill="#6de0f6" />
                    <path d="M534.82,216a4,4,0,1,0,4-3.95A4,4,0,0,0,534.82,216Z" fill="#6de0f6" />
                    <path d="M639.43,160.74a7.16,7.16,0,1,0,7.16-7.16A7.15,7.15,0,0,0,639.43,160.74Z" fill="#6de0f6" />
                    <path d="M529.71,103.68a4,4,0,1,0,4-4A4,4,0,0,0,529.71,103.68Z" fill="#6de0f6" />
                    <path d="M531.31,152.45a4.7,4.7,0,1,0,4.69-4.7A4.69,4.69,0,0,0,531.31,152.45Z" fill="#6de0f6" />
                    <path d="M671.63,122.54a4.7,4.7,0,1,0,4.7-4.69A4.69,4.69,0,0,0,671.63,122.54Z" fill="#6de0f6" />
                    <path d="M527.8,142.64a2.28,2.28,0,1,0,2.28-2.27A2.28,2.28,0,0,0,527.8,142.64Z" fill="#6de0f6" />
                    <path d="M609.79,59.83a2.27,2.27,0,1,0,2.27-2.27A2.27,2.27,0,0,0,609.79,59.83Z" fill="#6de0f6" />
                  </g>
                </g>
                <g>
                  <path d="M531.45,316c0,6.52,2.25,11.15,5.91,13.38l6.37,3.94c3.81,2.13,1.37-2.71,7.16-6,11.65-6.72,21.09-23,21.09-36.37,0-6.61,6.11-6.66,2.36-8.87l-7.08-4c-3.8-2.06-9-1.68-14.72,1.62C540.89,286.31,531.45,302.59,531.45,316Z" fill="url(#linear-gradient-83)" />
                  <ellipse cx="559.43" cy="307.88" rx="29.73" ry="17.16" transform="translate(11.3 635.46) rotate(-59.69)" fill="url(#linear-gradient-84)" />
                  <ellipse cx="559.43" cy="307.88" rx="21.98" ry="12.69" transform="translate(11.3 635.46) rotate(-59.69)" fill="url(#linear-gradient-85)" />
                  <path d="M558,324.41c8.61-5,15.59-17,15.59-26.9,0-3.53-.9-6.3-2.45-8.18,2.42,1.75,3.89,5,3.89,9.55,0,9.88-7,21.92-15.59,26.89-5.53,3.19-10.37,2.68-13.14-.7C549.15,327.15,553.32,327.1,558,324.41Z" fill="url(#linear-gradient-86)" style={{mixBlendMode: 'multiply'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M552.08,279.88c.15-.1.3-.21.46-.3l.42-.21,7,4-.53.27-.36.23Z" fill="#fdd65b" />
                    <path d="M559.72,276.91l7.06,4.07c-.43.07-.87.16-1.31.26l-7.07-4.08C558.85,277.05,559.28,277,559.72,276.91Z" fill="#fdd65b" />
                    <path d="M547.94,282.83l7,4-.71.61-7-4C547.47,283.24,547.7,283,547.94,282.83Z" fill="#fdd65b" />
                    <path d="M540.31,291.15l7,4-.5.72-7-4Z" fill="#fdd65b" />
                    <path d="M543.81,286.81l7,4c-.21.22-.4.45-.6.68l-7-4Z" fill="#fdd65b" />
                    <path d="M537.34,295.8l6.95,4c-.15.26-.28.52-.42.78l-7-4Z" fill="#fdd65b" />
                    <path d="M532.66,323.27l6.84,4a13.19,13.19,0,0,0,.54,1.33l-6.82-3.94C533,324.19,532.83,323.74,532.66,323.27Z" fill="#fdd65b" />
                    <path d="M538.37,320.57c0,.36,0,.7,0,1.05l-6.9-4c0-.34,0-.69,0-1.05Z" fill="#fdd65b" />
                    <path d="M531.76,311.78c0-.32.07-.63.12-.95l6.92,4c-.06.32-.09.63-.13.95Z" fill="#fdd65b" />
                    <path d="M540.05,309.55c-.09.29-.16.59-.25.88l-6.92-4c.08-.29.15-.59.24-.88Z" fill="#fdd65b" />
                    <path d="M534.61,301.44l.33-.83,6.94,4c-.12.27-.22.55-.33.82Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="550.97" cy="292.98" rx="16.14" ry="9.17" transform="translate(-34.88 507.88) rotate(-48.15)" fill="url(#radial-gradient-16)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M552.54,279.58c5.72-3.3,10.92-3.68,14.72-1.62l1,.52c-3.71-1.57-8.54-1.05-13.85,2-11.65,6.73-21.09,23-21.09,36.38,0,6.52,2.25,11.15,5.92,13.39.08.05-1.72-.85-1.83-.92-3.66-2.23-5.91-6.86-5.91-13.38C531.45,302.59,540.89,286.31,552.54,279.58Z" fill="url(#linear-gradient-87)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M558.51,283.09c5.58-3.23,10.57-3.57,14.34-1.68-3.52-1-7.88-.25-12.61,2.48-11.64,6.72-21.08,23-21.08,36.37,0,6.95,2.56,11.74,6.66,13.79-5.15-1.44-8.4-6.65-8.4-14.59C537.42,306.09,546.86,289.81,558.51,283.09Z" fill="url(#radial-gradient-17)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="558.71 318.36 551.39 310.67 558.71 294.53 566.04 302.22 558.71 318.36" fill="url(#linear-gradient-88)" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="559.85 318.36 552.52 310.67 559.85 294.53 567.17 302.22 559.85 318.36" fill="url(#linear-gradient-89)" />
                  <polygon points="552.52 310.67 559.85 294.53 567.17 302.22 552.52 310.67" opacity="0.5" fill="url(#radial-gradient-18)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="559.85 318.36 552.52 310.67 559.85 294.53 559.85 318.36" opacity="0.5" fill="url(#radial-gradient-19)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g>
                  <ellipse cx="935.45" cy="459.32" rx="97.41" ry="46.86" opacity="0.5" fill="url(#radial-gradient-20)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1015.84,430.89H1014c-3.36-10.39-11.42-20.3-24.17-28.37-34.49-21.85-90.24-22-124.51-.25-12.81,8.11-20.81,18.12-24,28.62h-1.6v16.95h0c.28,14.09,8.94,28.16,26,39,34.49,21.85,90.24,22,124.51.25,17.07-10.81,25.6-25,25.59-39.2h0Z" fill="url(#linear-gradient-90)" />
                  <path d="M990.24,483.55c-34.27,21.7-90,21.59-124.51-.25-17-10.79-25.7-24.86-26-39h0v3.5h0c.28,14.09,8.94,28.16,26,39,34.49,21.85,90.24,22,124.51.25,17.07-10.81,25.6-25,25.59-39.2h0v-3.5h0C1015.84,458.56,1007.31,472.74,990.24,483.55Z" fill="#bcbcd6" style={{mixBlendMode: 'multiply'}} />
                  <ellipse cx="927.79" cy="431.84" rx="55.76" ry="88.05" transform="translate(489.82 1356.75) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_13-5)" />
                  <ellipse cx="927.79" cy="432.19" rx="52.71" ry="83.23" transform="translate(489.47 1357.1) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_13-6)" />
                  <path d="M868.75,397.22c32.4-20.52,85.1-20.42,117.71.23,15.88,10.06,24,23.13,24.52,36.27.49-13.94-7.67-28-24.52-38.68-32.61-20.65-85.31-20.76-117.71-.24-16.62,10.53-24.65,24.44-24.15,38.27C845.07,420,853.1,407.13,868.75,397.22Z" fill="url(#linear-gradient-91)" />
                  <path d="M868.75,395.15c32.4-20.52,85.1-20.41,117.71.23,16.49,10.44,24.63,24.14,24.51,37.78v0c.49-13.94-7.67-28-24.52-38.69-32.61-20.65-85.31-20.75-117.71-.23-16.62,10.53-24.65,24.43-24.15,38.27v0C844.48,419,852.49,405.45,868.75,395.15Z" fill="url(#Radial_Gradient_1-29)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M990.24,470.75c-34.27,21.7-90,21.59-124.51-.25-17.11-10.83-25.77-25-26-39.12-.18,14.47,8.48,29,26,40.08,34.49,21.85,90.24,22,124.51.25,17.28-10.94,25.8-25.34,25.59-39.73C1015.66,446.05,1007.14,460.05,990.24,470.75Z" fill="url(#Radial_Gradient_1-30)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="927.79" cy="433.25" rx="46.33" ry="73.17" transform="translate(488.4 1358.16) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_35-34)" />
                  <path d="M967.46,408.13c-22.05-14-57.68-14-79.59-.16s-21.8,36.45.25,50.41,57.68,14,79.59.16S989.51,422.09,967.46,408.13ZM888.78,458C867.1,444.23,867,422,888.53,408.4s56.59-13.58,78.27.15,21.79,35.92.24,49.56S910.46,471.69,888.78,458Z" fill="url(#New_Gradient_Swatch_copy_35-35)" />
                  <ellipse cx="927.79" cy="433.25" rx="28.51" ry="45.03" transform="translate(488.4 1358.16) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_35-36)" />
                  <ellipse cx="927.79" cy="433.25" rx="27.92" ry="44.09" transform="translate(488.4 1358.16) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_19)" />
                  <ellipse cx="927.86" cy="432.07" rx="42.85" ry="27.78" opacity="0.7" fill="url(#radial-gradient-21)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="929.36" cy="432.12" rx="9.71" ry="4.43" opacity="0.5" fill="url(#radial-gradient-22)" style={{mixBlendMode: 'multiply'}} />
                  <ellipse cx="874.27" cy="469.53" rx="9.43" ry="19.38" fill="url(#radial-gradient-23)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="953.28" cy="399.58" rx="21.07" ry="9.69" transform="translate(121.43 1013.12) rotate(-59.15)" fill="url(#radial-gradient-24)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="965.47" cy="458.06" rx="7.9" ry="3.61" opacity="0.7" fill="url(#radial-gradient-25)" style={{mixBlendMode: 'multiply'}} />
                  <g>
                    <g id="ruletka2">
                      <g>
                        <path d="M925.16,444.13l-15.49-47.59A98.52,98.52,0,0,1,921.6,394Z" fill="url(#Безымянный_градиент_287)" />
                        <path d="M927,443.65l-5.26-49.73c4.22.1,8-.55,12.19,0Z" fill="url(#Безымянный_градиент_286)" />
                        <path d="M923.31,444.61l-25-43.29c3.9-1.62,7.09-3.76,11.14-5Z" fill="url(#Безымянный_градиент_286-2)" />
                        <path d="M928.93,443.77,934.14,394a96.21,96.21,0,0,1,11.93,2.54Z" fill="url(#Безымянный_градиент_287-2)" />
                        <path d="M930.8,444.08l15.42-47.57c3.81,1.81,7.53,2.75,11.14,5Z" fill="url(#Безымянный_градиент_286-3)" />
                        <path d="M932.42,444.93l25-43.36a98.61,98.61,0,0,1,9.87,7.17Z" fill="url(#Безымянный_градиент_287-3)" />
                        <path d="M934,446l33.44-37.18c2.75,3.2,5.76,5.58,8.16,9.06Z" fill="url(#Безымянный_градиент_286-4)" />
                        <path d="M935.21,447.48,975.69,418a97.49,97.49,0,0,1,6.1,10.56Z" fill="url(#Безымянный_градиент_287-4)" />
                        <path d="M936.24,449.08l45.67-20.37c1.21,4.05,3,7.44,3.77,11.6Z" fill="url(#Безымянный_градиент_286-5)" />
                        <path d="M936.69,450.94l48.95-10.43a96.43,96.43,0,0,1,1.27,12.13Z" fill="url(#Безымянный_градиент_287-5)" />
                        <path d="M937,452.82l50,0c-.54,4.19-.29,8-1.27,12.13Z" fill="url(#Безымянный_градиент_286-6)" />
                        <path d="M936.66,454.72l49,10.38a95.94,95.94,0,0,1-3.77,11.6Z" fill="url(#Безымянный_градиент_287-6)" />
                        <path d="M936.16,456.55l45.7,20.31c-2.2,3.6-3.52,7.21-6.1,10.56Z" fill="url(#Безымянный_градиент_286-7)" />
                        <path d="M935.19,458.13l40.51,29.4a96.42,96.42,0,0,1-8.16,9.06Z" fill="url(#Безымянный_градиент_287-7)" />
                        <path d="M928.63,461.5l5.26,49.77a97.21,97.21,0,0,1-12.19,0Z" fill="url(#Безымянный_градиент_287-8)" />
                        <path d="M926.73,461.59l-5.2,49.74c-4.11-1-7.94-1.12-11.93-2.54Z" fill="url(#Безымянный_градиент_286-8)" />
                        <path d="M930.53,461.42,946,509c-4.15.78-7.71,2.2-11.93,2.54Z" fill="url(#Безымянный_градиент_286-9)" />
                        <path d="M924.87,461.08l-15.44,47.61a97.89,97.89,0,0,1-11.14-5Z" fill="url(#Безымянный_градиент_287-9)" />
                        <path d="M923.1,460.39l-25,43.32c-3.36-2.56-6.8-4.26-9.87-7.17Z" fill="url(#Безымянный_градиент_286-10)" />
                        <path d="M921.69,459.21l-33.47,37.21a98.29,98.29,0,0,1-8.16-9.06Z" fill="url(#Безымянный_градиент_287-10)" />
                        <path d="M920.36,457.87l-40.44,29.42c-2-3.71-4.48-6.65-6.1-10.56Z" fill="url(#Безымянный_градиент_286-11)" />
                        <path d="M919.49,456.14l-45.71,20.38a99.08,99.08,0,0,1-3.77-11.6Z" fill="url(#Безымянный_градиент_287-11)" />
                        <path d="M918.82,454.36l-48.91,10.43c-.34-4.21-1.38-7.9-1.27-12.13Z" fill="url(#Безымянный_градиент_286-12)" />
                        <path d="M918.77,452.45l-50,0A97.26,97.26,0,0,1,870,440.35Z" fill="url(#Безымянный_градиент_287-12)" />
                        <path d="M918.88,450.55,870,440.18c1.4-4,1.95-7.78,3.77-11.6Z" fill="url(#Безымянный_градиент_286-13)" />
                        <path d="M919.58,448.75l-45.73-20.33a96,96,0,0,1,6.1-10.56Z" fill="url(#Безымянный_градиент_287-13)" />
                        <path d="M920.45,447.07,880,417.7c2.9-3.07,4.94-6.32,8.16-9.06Z" fill="url(#Безымянный_градиент_286-14)" />
                        <path d="M921.73,445.73l-33.51-37.18a95.37,95.37,0,0,1,9.87-7.17Z" fill="url(#Безымянный_градиент_285)" />
                        <path d="M933.88,459.59l33.48,37.14c-3.47,2.4-6.15,5.15-9.87,7.17Z" fill="url(#Безымянный_градиент_286-15)" />
                        <path d="M932.35,460.63l25,43.33a97.35,97.35,0,0,1-11.14,5Z" fill="url(#Безымянный_градиент_287-14)" />
                      </g>
                      <g>
                        <path d="M961.87,420.05a47.08,47.08,0,0,0-66.09-.2,45.89,45.89,0,0,0,.21,65.39,47.08,47.08,0,0,0,66.09.2A45.89,45.89,0,0,0,961.87,420.05Zm-65.33,64.64a45.13,45.13,0,0,1-.2-64.3,46.29,46.29,0,0,1,65,.2,45.13,45.13,0,0,1,.2,64.3A46.28,46.28,0,0,1,896.54,484.69Z" fill="url(#Безымянный_градиент_288)" />
                        <path d="M957.46,481.35a39.05,39.05,0,0,1-55.93-.18,40.79,40.79,0,0,1-.18-56.94,39.05,39.05,0,0,1,55.93.18A40.78,40.78,0,0,1,957.46,481.35Z" fill="url(#Безымянный_градиент_289)" />
                        <path d="M957.4,481.35a39.35,39.35,0,0,1-56.17-.17,40.66,40.66,0,0,1-.17-56.95,39.35,39.35,0,0,1,56.17.17A40.66,40.66,0,0,1,957.4,481.35Z" fill="url(#Безымянный_градиент_290)" />
                        <ellipse cx="928.62" cy="452.79" rx="39.73" ry="39.77" opacity="0.7" fill="url(#Безымянный_градиент_291)" style={{isolation: 'isolate'}} />
                      </g>
                    </g>
                    <g id="ruletball">
                      <path d="M974.21,463.48a5.28,5.28,0,1,1-5.26-5.77A5.53,5.53,0,0,1,974.21,463.48Z" fill="url(#Безымянный_градиент_292)" />
                      <path d="M972.69,459.83a6.5,6.5,0,0,1,.29,1.94,5.83,5.83,0,0,1-5.54,6.08,5,5,0,0,1-2-.41,4.77,4.77,0,0,0,3.34,1.4,5.29,5.29,0,0,0,5-5.51A5.89,5.89,0,0,0,972.69,459.83Z" fill="url(#Безымянный_градиент_294)" />
                      <path d="M971.25,461.92a3.29,3.29,0,1,1-3.28-3.59A3.45,3.45,0,0,1,971.25,461.92Z" fill="url(#Безымянный_градиент_294-2)" />
                    </g>
                    <g>
                      <g>
                        <ellipse cx="932.54" cy="432.55" rx="9.71" ry="4.43" opacity="0.5" fill="url(#Безымянный_градиент_295)" style={{isolation: 'isolate'}} />
                        <path d="M935.72,428.7h-13v3.55c0,2.29,2.9,4.14,6.48,4.14s6.48-1.85,6.48-4.14v-.06h0V428.7Z" fill="url(#Безымянный_градиент_302)" />
                        <path d="M922.76,428.73c0,2.29,2.9,4.14,6.48,4.14s6.48-1.85,6.48-4.14-2.9-4.14-6.48-4.14S922.76,426.44,922.76,428.73Z" fill="url(#Безымянный_градиент_330)" />
                        <path d="M929.24,432.85c-3.54,0-6.42-1.81-6.48-4.07v.07c0,2.29,2.9,4.14,6.48,4.14s6.48-1.85,6.48-4.14v-.07C935.66,431,932.78,432.85,929.24,432.85Z" fill="url(#Безымянный_градиент_304)" />
                        <path d="M933.35,407.65h-8.22v20.86c0,1.45,1.84,2.62,4.11,2.62s4.11-1.18,4.11-2.62v0h0V407.65Z" fill="url(#Безымянный_градиент_302-2)" />
                        <path d="M937.35,400.69H921.13v4.44c0,2.86,3.63,5.18,8.11,5.18s8.11-2.32,8.11-5.18v-.07h0v-4.37Z" fill="url(#Безымянный_градиент_302-3)" />
                        <ellipse cx="929.24" cy="400.73" rx="8.11" ry="5.18" fill="url(#Безымянный_градиент_330-2)" />
                        <path d="M932.21,399.18h-5.94v1.63c0,1.05,1.33,1.9,3,1.9s3-.85,3-1.9v0h0v-1.6Z" fill="url(#Безымянный_градиент_302-4)" />
                        <path d="M926.27,399.19c0,1.05,1.33,1.9,3,1.9s3-.85,3-1.9-1.33-1.9-3-1.9S926.27,398.15,926.27,399.19Z" fill="url(#Безымянный_градиент_330-3)" />
                        <path d="M929.24,405.89c-4.43,0-8-2.27-8.11-5.09v.09c0,2.86,3.63,5.18,8.11,5.18s8.11-2.32,8.11-5.18v-.09C937.27,403.62,933.67,405.89,929.24,405.89Z" fill="url(#Безымянный_градиент_304-2)" />
                      </g>
                      <g clipPath="url(#clip-path-6)">
                        <g id="цю_групу_не_трогай" data-name="цю групу не трогай">
                          <g id="ruletka3">
                            <g>
                              <polygon points="929.53 403.22 929.56 406.78 949.82 384.64 949.8 382.43 929.53 403.22" fill="url(#Безымянный_градиент_330-4)" />
                              <polygon points="949.8 382.43 929.53 403.22 926.83 400.49 947.1 379.72 949.8 382.43" fill="url(#Безымянный_градиент_330-5)" />
                              <circle cx="929.24" cy="402.71" r="38.56" fill="none" />
                              <path d="M953.45,380.43c0,3.5-1.58,6.35-3.59,6.37s-3.66-2.81-3.69-6.31,1.58-6.35,3.59-6.37S953.42,376.92,953.45,380.43Z" fill="url(#Безымянный_градиент_332)" />
                            </g>
                            <g>
                              <polygon points="928.71 402.98 925.15 402.84 946.35 424.08 948.57 424.16 928.71 402.98" fill="url(#Безымянный_градиент_330-6)" />
                              <polygon points="948.57 424.16 928.71 402.98 931.56 400.4 951.39 421.59 948.57 424.16" fill="url(#Безымянный_градиент_330-7)" />
                              <ellipse cx="950.6" cy="424.04" rx="3.64" ry="6.34" fill="url(#Безымянный_градиент_332-2)" />
                              <circle cx="929.24" cy="402.71" r="38.56" fill="none" />
                            </g>
                            <g>
                              <polygon points="928.97 402.18 929.13 398.62 907.73 419.64 907.63 421.86 928.97 402.18" fill="url(#Безымянный_градиент_330-8)" />
                              <polygon points="907.63 421.86 928.97 402.18 931.52 405.04 910.17 424.71 907.63 421.86" fill="url(#Безымянный_градиент_330-9)" />
                              <path d="M910.78,424c0,3.5-1.63,6.34-3.64,6.34s-3.64-2.84-3.64-6.34,1.63-6.34,3.64-6.34S910.78,420.54,910.78,424Z" fill="url(#Безымянный_градиент_332-3)" />
                              <circle cx="929.24" cy="402.71" r="38.56" fill="none" />
                            </g>
                            <g>
                              <polygon points="929.76 402.43 933.32 402.51 911.84 381.56 909.63 381.51 929.76 402.43" fill="url(#Безымянный_градиент_330-10)" />
                              <polygon points="909.63 381.51 929.76 402.43 926.95 405.04 906.83 384.12 909.63 381.51" fill="url(#Безымянный_градиент_330-11)" />
                              <path d="M911.38,380.63c0,3.5-1.63,6.34-3.64,6.34s-3.64-2.84-3.64-6.34,1.63-6.34,3.64-6.34S911.38,377.13,911.38,380.63Z" fill="url(#Безымянный_градиент_332-4)" />
                              <circle cx="929.24" cy="402.71" r="38.56" fill="none" />
                            </g>
                            <circle cx="929.24" cy="402.71" r="54.84" fill="none" />
                          </g>
                        </g>
                      </g>
                      <path d="M932.73,396.89a3.51,3.51,0,1,1-3.49-3.83A3.67,3.67,0,0,1,932.73,396.89Z" fill="url(#Безымянный_градиент_332-5)" />
                    </g>
                    <path id="ballline" d="M981.48,450.51c2.64-6.06,6.23-17,2.77-28.5-7-23.1-40.31-37-64.2-32.44-25.07,4.75-55.3,25.91-56.44,54.51-1.31,33,36.25,68.46,68.37,65,23.39-2.5,45.4-28.07,49.8-55.78" fill="none" />
                  </g>
                </g>
                <g>
                  <ellipse cx="149.26" cy="420.98" rx="58.46" ry="29.81" fill="url(#radial-gradient-26)" style={{mixBlendMode: 'multiply'}} />
                  <g>
                    <path d="M189,357.35H94v62.89h0c0,.13,0,.26,0,.38,0,15.28,21.26,27.66,47.5,27.66S189,435.9,189,420.62c0-.12,0-.25,0-.38h0Z" fill="url(#linear-gradient-92)" />
                    <g style={{mixBlendMode: 'multiply'}}>
                      <path d="M94,410.59V411c0-.13,0-.26,0-.39Z" fill="#a7a9ac" />
                      <path d="M189,411v-.39h0C189,410.72,189,410.85,189,411Z" fill="#a7a9ac" />
                      <path d="M141.47,438.64C115.23,438.64,94,426.25,94,411v7.78h0c0,.13,0,.25,0,.38,0,15.28,21.26,27.66,47.5,27.66S189,434.42,189,419.14c0-.13,0-.25,0-.38h0V411C189,426.25,167.7,438.64,141.47,438.64Z" fill="#a7a9ac" />
                    </g>
                    <g>
                      <path d="M94,412.08v.38c0-.13,0-.25,0-.38Z" fill="url(#linear-gradient-93)" />
                      <path d="M189,412.46v-.38h0C189,412.21,189,412.33,189,412.46Z" fill="url(#linear-gradient-94)" />
                      <path d="M141.47,440.12c-26.24,0-47.5-12.38-47.5-27.66v7.78h0c0,.13,0,.26,0,.38,0,15.28,21.26,27.66,47.5,27.66S189,435.9,189,420.62c0-.12,0-.25,0-.38h0v-7.78C189,427.74,167.7,440.12,141.47,440.12Z" fill="url(#linear-gradient-95)" />
                      <path d="M141.47,451.25c-26.24,0-47.5-12.38-47.5-27.66v7.78h0c0,.13,0,.26,0,.39,0,15.27,21.26,27.66,47.5,27.66S189,447,189,431.76c0-.13,0-.26,0-.39h0v-7.78C189,438.87,167.7,451.25,141.47,451.25Z" opacity="0.15" fill="url(#linear-gradient-96)" />
                    </g>
                    <ellipse cx="141.47" cy="357.54" rx="47.5" ry="27.66" fill="url(#New_Gradient_Swatch_copy_25-28)" />
                    <path d="M141.47,385.09c-25.95,0-47-12.12-47.48-27.16,0,.16,0,.32,0,.49,0,15.28,21.26,27.66,47.5,27.66S189,373.7,189,358.42c0-.17,0-.33,0-.49C188.49,373,167.41,385.09,141.47,385.09Z" fill="url(#Radial_Gradient_1-31)" style={{mixBlendMode: 'color-dodge'}} />
                    <g>
                      <path d="M94,367.36v.38c0-.12,0-.25,0-.38Z" fill="url(#linear-gradient-97)" />
                      <path d="M189,367.74v-.38h0C189,367.49,189,367.62,189,367.74Z" fill="url(#linear-gradient-98)" />
                    </g>
                    <path d="M116.31,391.19A44.1,44.1,0,0,1,100.72,382v30.25a44.1,44.1,0,0,0,15.59,9.23Z" fill="#a7a9ac" style={{mixBlendMode: 'multiply'}} />
                  </g>
                  <path d="M186.36,345.19h0c-.44-24.81-20.35-44.78-44.88-44.78s-44.43,20-44.87,44.78h0v11.16c0,14.44,20.1,26.14,44.9,26.14s44.89-11.7,44.89-26.14Z" fill="url(#New_Gradient_Swatch_copy_16)" />
                  <g>
                    <path d="M189,330.09H94V349h0c0,.13,0,.26,0,.39,0,15.27,21.26,27.66,47.5,27.66S189,364.66,189,349.39c0-.13,0-.26,0-.39h0Z" fill="url(#linear-gradient-99)" />
                    <ellipse cx="141.47" cy="330.28" rx="47.5" ry="27.66" fill="url(#New_Gradient_Swatch_copy_25-29)" />
                    <path d="M141.47,357.83c-25.95,0-47-12.12-47.48-27.17,0,.17,0,.33,0,.5,0,15.27,21.26,27.66,47.5,27.66S189,346.43,189,331.16c0-.17,0-.33,0-.5C188.49,345.71,167.41,357.83,141.47,357.83Z" fill="url(#Radial_Gradient_1-32)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g>
                    <path d="M183.46,324.18h-84v4.55h0c0,.11,0,.22,0,.34,0,13.5,18.8,24.45,42,24.45s42-10.95,42-24.45c0-.12,0-.23,0-.34h0Z" fill="url(#linear-gradient-100)" />
                    <ellipse cx="141.47" cy="324.35" rx="41.99" ry="24.45" fill="url(#New_Gradient_Swatch_copy_25-30)" />
                    <path d="M141.47,348.7c-22.94,0-41.57-10.71-42-24,0,.14,0,.29,0,.43,0,13.51,18.8,24.46,42,24.46s42-10.95,42-24.46c0-.14,0-.29,0-.43C183,338,164.4,348.7,141.47,348.7Z" fill="url(#Radial_Gradient_1-33)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <ellipse cx="141.47" cy="324.85" rx="21.58" ry="12.57" fill="url(#New_Gradient_Swatch_copy_25-31)" />
                  <path d="M141.47,321.08c9.25,0,17.13,3.4,20.19,8.17a8.11,8.11,0,0,0,1.39-4.4c0-6.94-9.67-12.57-21.58-12.57s-21.59,5.63-21.59,12.57a8.11,8.11,0,0,0,1.39,4.4C124.33,324.48,132.21,321.08,141.47,321.08Z" fill="url(#linear-gradient-101)" />
                  <path d="M182,281.7c-.4-22.42-18.4-40.47-40.57-40.47s-40.16,18-40.56,40.47h0v42.24c0,.2,0,.4,0,.6.56-12.77,18.49-23,40.56-23s40,10.25,40.55,23c0-.2,0-.4,0-.6V281.7Z" opacity="0.4" fill="url(#linear-gradient-102)" />
                  <path d="M182.05,281.7h0c-.4-22.42-18.4-40.47-40.57-40.47s-40.16,18-40.56,40.47h0v42.24c0,13.05,18.16,23.63,40.58,23.63s40.58-10.58,40.58-23.63Z" opacity="0.4" fill="url(#New_Gradient_Swatch_copy_14)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M128.58,325.58,131.06,293c.19-18.35-.47-35.83,7.52-45.78a2.18,2.18,0,0,0-1.65-3.56h0c-17.51,0-31.72,17.25-32,38.68h0v40.23c0,9.55,8.42,17.69,20.29,21A84.69,84.69,0,0,0,128.58,325.58Z" opacity="0.2" />
                    <path d="M124.73,343c-11.43-3.31-19.48-11.21-19.48-20.41V282.34c.3-20.72,13.81-37.47,30.56-38,.2-.11.45.09.36.29,1.25.84,1.88,3.81.79,6.2-7.27,9-6.68,24.94-6.85,41.61l-2.26,30S127.42,334.28,124.73,343Z" opacity="0.25" fill="url(#Безымянный_градиент_21)" />
                    <path d="M124.32,342.39c-11-3.32-18.67-11-18.67-19.83V282.47l0-.13c.29-20,13.09-36.25,29.07-37.26a.47.47,0,0,1,.69.58,15.17,15.17,0,0,1-.08,8.83c-6.53,8.13-6,22.44-6.18,37.45l-2,27.47S126.74,334.56,124.32,342.39Z" opacity="0.31" fill="url(#Безымянный_градиент_20)" />
                    <path d="M123.92,341.81c-10.54-3.33-17.86-10.74-17.86-19.25V282.35c.28-19.29,12.38-35.05,27.6-36.56a.7.7,0,0,1,1,.87,45.53,45.53,0,0,1-.94,11.46c-5.81,7.24-5.37,19.95-5.51,33.29l-1.8,24.92S126.07,334.85,123.92,341.81Z" opacity="0.36" fill="url(#Безымянный_градиент_19)" />
                    <path d="M123.51,341.23c-10.1-3.34-17.05-10.51-17.05-18.67V282.61l0-.26c.27-18.57,11.65-33.83,26.12-35.85a.94.94,0,0,1,1.33,1.17c-1,3.22-.85,8.78-1.8,14.09-5.09,6.33-4.72,17.46-4.84,29.13l-1.58,22.36S125.39,335.14,123.51,341.23Z" opacity="0.42" fill="url(#Безымянный_градиент_18)" />
                    <path d="M123.11,340.64c-9.66-3.35-16.24-10.27-16.24-18.08v-40.2c.26-17.86,10.94-32.62,24.65-35.14a1.15,1.15,0,0,1,1.65,1.45c-1.45,4-1.76,10.44-2.67,16.73-4.36,5.42-4.06,15-4.16,25L125,310.17S124.72,335.42,123.11,340.64Z" opacity="0.47" fill="url(#Безымянный_градиент_17)" />
                    <path d="M122.7,340.06c-9.21-3.36-15.43-10-15.43-17.5v-39.8l0-.4a37.25,37.25,0,0,1,23.16-34.43c1.26-.51,2.48.49,2,1.74-1.94,4.87-2.67,12.11-3.53,19.36-3.63,4.53-3.41,12.47-3.5,20.81l-1.13,17.24S124.05,335.71,122.7,340.06Z" opacity="0.53" fill="url(#Безымянный_градиент_16)" />
                    <path d="M122.3,339.48c-8.77-3.37-14.62-9.8-14.62-16.92V282.37c.24-16.43,10.07-28.64,21.69-33.73a1.62,1.62,0,0,1,2.3,2c-2.44,5.71-3.57,13.76-4.4,22-2.9,3.62-2.75,10-2.82,16.65L123.55,304S123.37,336,122.3,339.48Z" opacity="0.58" fill="url(#Безымянный_градиент_15)" />
                    <path d="M121.89,338.89c-8.32-3.37-13.81-9.55-13.81-16.33V282.9l0-.52c.22-15.72,9.26-27.84,20.21-33a1.84,1.84,0,0,1,2.62,2.32c-2.94,6.57-4.48,15.42-5.26,24.63-2.18,2.71-2.1,7.48-2.15,12.48l-.69,12.13S122.7,336.28,121.89,338.89Z" opacity="0.64" fill="url(#Безымянный_градиент_14)" />
                    <path d="M121.49,338.31c-7.88-3.38-13-9.32-13-15.75V282.38c.22-15,8.42-27,18.74-32.31a2.07,2.07,0,0,1,2.94,2.62c-3.44,7.42-5.39,17.08-6.12,27.26-1.45,1.8-1.45,5-1.48,8.32l-.47,9.57S122,336.57,121.49,338.31Z" opacity="0.69" fill="url(#Безымянный_градиент_13)" />
                    <path d="M121.08,337.73c-7.43-3.39-12.19-9.09-12.19-15.17V283l0-.65c.2-14.3,7.54-26.2,17.25-31.6a2.29,2.29,0,0,1,3.27,2.9c-4,8.29-6.3,18.74-7,29.89-.72.91-.79,2.5-.81,4.16l-.23,7S121.35,336.86,121.08,337.73Z" opacity="0.75" fill="url(#Безымянный_градиент_12)" />
                    <path d="M120.68,337.15c-7-3.4-11.38-8.85-11.38-14.59V282.39c.2-13.58,6.64-25.34,15.78-30.89a2.51,2.51,0,0,1,3.59,3.2c-4.45,9.14-7.21,20.39-7.85,32.52h-.14v49.93Z" opacity="0.8" fill="url(#linear-gradient-103)" />
                  </g>
                  <g opacity="0.5" style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M157.9,325.05l-2.1-31.44c-.16-17.74.39-34.66-6.38-44.29-1-1.36-.15-3.44,1.39-3.44h0c14.85,0,26.91,16.69,27.17,37.42h0v38.83c0,9.24-7.13,17.11-17.2,20.31A92.55,92.55,0,0,1,157.9,325.05Z" opacity="0.2" />
                    <path d="M161.17,341.88c-2.28-8.42-2.66-19.81-2.66-19.81l-1.91-29c-.15-16.13.35-31.51-5.81-40.26-.93-2.31-.4-5.19.66-6-.08-.2.14-.4.31-.28,14.2.48,25.66,16.7,25.92,36.74v38.82C177.69,331,170.86,338.67,161.17,341.88Z" opacity="0.25" fill="url(#Безымянный_градиент_21-2)" />
                    <path d="M161.51,341.32c-2-7.58-2.39-22.22-2.39-22.22l-1.72-26.5c-.13-14.52.3-28.37-5.25-36.24a16.72,16.72,0,0,1-.06-8.54c-.17-.39.24-.79.58-.56,13.56,1,24.42,16.7,24.66,36.05l0,.13v38.69C177.35,330.7,170.83,338.1,161.51,341.32Z" opacity="0.31" fill="url(#Безымянный_градиент_20-2)" />
                    <path d="M161.86,340.75c-1.83-6.73-2.13-24.62-2.13-24.62l-1.53-24c-.12-12.91.25-25.21-4.68-32.21a50.24,50.24,0,0,1-.8-11.09c-.25-.59.36-1.18.86-.84,12.91,1.46,23.17,16.71,23.41,35.37v38.81C177,330.36,170.8,337.53,161.86,340.75Z" opacity="0.36" fill="url(#Безымянный_градиент_19-2)" />
                    <path d="M162.2,340.19c-1.6-5.89-1.87-27-1.87-27L159,291.58c-.11-11.29.2-22.06-4.11-28.18-.81-5.14-.69-10.5-1.53-13.64-.22-.82.47-1.58,1.13-1.12,12.27,2,21.93,16.71,22.16,34.68v38.81C176.66,330,170.76,337,162.2,340.19Z" opacity="0.42" fill="url(#Безымянный_градиент_18-2)" />
                    <path d="M162.54,339.62c-1.37-5.05-1.6-29.44-1.6-29.44l-1.15-19.1c-.08-9.68.17-18.91-3.53-24.16-.77-6.08-1-12.26-2.26-16.19-.33-1,.58-2,1.4-1.4,11.62,2.44,20.68,16.72,20.9,34l0,.32v38.48C176.32,329.69,170.73,336.38,162.54,339.62Z" opacity="0.47" fill="url(#Безымянный_градиент_17-2)" />
                    <path d="M162.89,339.06c-1.14-4.21-1.34-31.85-1.34-31.85l-1-16.64c-.07-8.07.12-15.76-3-20.13-.73-7-1.33-14-3-18.73-.42-1.21.59-2.19,1.68-1.69,10.32,4.75,19.44,16.72,19.65,33.32v38.79C176,329.35,170.7,335.81,162.89,339.06Z" opacity="0.53" fill="url(#Безымянный_градиент_16-2)" />
                    <path d="M163.23,338.5c-.91-3.37-1.07-34.27-1.07-34.27l-.77-14.17c0-6.45.07-12.6-2.39-16.1-.7-8-1.64-15.73-3.73-21.28a1.46,1.46,0,0,1,1.95-2c9.75,4.85,18.19,16.73,18.4,32.63v38.79C175.63,329,170.66,335.24,163.23,338.5Z" opacity="0.58" fill="url(#Безымянный_градиент_15-2)" />
                    <path d="M163.57,337.93c-.68-2.52-.8-36.67-.8-36.67l-.58-11.71c0-4.84,0-9.45-1.82-12.07-.66-8.91-2-17.46-4.46-23.83a1.65,1.65,0,0,1,2.22-2.25c9.2,5,17,16.74,17.14,32v38.78C175.28,328.68,170.63,334.67,163.57,337.93Z" opacity="0.64" fill="url(#Безымянный_градиент_14-2)" />
                    <path d="M163.92,337.37c-.46-1.69-.54-39.08-.54-39.08l-.39-9.24c0-3.23,0-6.31-1.25-8.06-.62-9.84-2.27-19.17-5.2-26.37-.72-1.78,1-3.43,2.5-2.53,8.68,5.07,15.71,16.74,15.89,31.26v38.78C174.94,328.35,170.59,334.1,163.92,337.37Z" opacity="0.69" fill="url(#Безымянный_градиент_13-2)" />
                    <path d="M164.26,336.8c-.23-.84-.27-41.49-.27-41.49l-.2-6.77c0-1.61-.07-3.15-.69-4-.58-10.79-2.57-20.9-5.92-28.92-.82-2,1.09-3.88,2.77-2.81,8.2,5.21,14.46,16.75,14.64,30.58v38.77C174.6,328,170.56,333.52,164.26,336.8Z" opacity="0.75" fill="url(#Безымянный_градиент_12-2)" />
                    <path d="M164.6,336.24c5.93-3.29,9.65-8.56,9.65-14.11V283.36c-.16-13.14-5.63-24.52-13.38-29.89-1.8-1.24-4,.93-3,3.09,3.77,8.85,6.11,19.74,6.65,31.47h.12v48.21Z" opacity="0.8" fill="url(#New_Gradient_Swatch_copy_40)" />
                  </g>
                  <g>
                    <path d="M112.71,397.44a2.58,2.58,0,0,1-1,2.32l-1.18.69c-.66.37-.24-.47-1.24-1.05a8,8,0,0,1-3.65-6.3c0-1.14-1.06-1.15-.41-1.53l1.3-.71a2.61,2.61,0,0,1,2.55.29A8,8,0,0,1,112.71,397.44Z" fill="url(#linear-gradient-104)" />
                    <path d="M111.44,398.16c0,2.31-1.63,3.24-3.65,2.08a8,8,0,0,1-3.65-6.3c0-2.31,1.63-3.24,3.65-2.08A8,8,0,0,1,111.44,398.16Z" fill="url(#New_Gradient_Swatch_copy_10-5)" />
                    <path d="M110.55,398a2.2,2.2,0,0,1-.88,2L107.91,401c-.57.32-.21-.4-1.07-.9a6.91,6.91,0,0,1-3.13-5.41c0-1-.91-1-.35-1.31l1.87-1.07a2.23,2.23,0,0,1,2.19.24A6.91,6.91,0,0,1,110.55,398Z" fill="url(#New_Gradient_Swatch_copy_18)" />
                    <path d="M108.71,399.07c0,2-1.41,2.79-3.14,1.79a6.9,6.9,0,0,1-3.13-5.4c0-2,1.4-2.79,3.13-1.79A6.91,6.91,0,0,1,108.71,399.07Z" fill="url(#New_Gradient_Swatch_copy_9-14)" />
                    <path d="M108,391.77a2.6,2.6,0,0,0-2.49-.3,2.83,2.83,0,0,1,2.18.42,8.05,8.05,0,0,1,3.65,6.3,2.47,2.47,0,0,1-1.15,2.39c.89-.25,1.47-1.13,1.47-2.51A8.06,8.06,0,0,0,108,391.77Z" fill="#e6e7e8" style={{mixBlendMode: 'screen'}} />
                    <path d="M105.71,393.58a2.27,2.27,0,0,0-2.15-.26,2.45,2.45,0,0,1,1.88.37,6.94,6.94,0,0,1,3.15,5.43,2.13,2.13,0,0,1-1,2.06c.76-.21,1.26-1,1.26-2.16A7,7,0,0,0,105.71,393.58Z" fill="url(#Radial_Gradient_1-34)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g>
                    <path d="M112.71,411.45a2.58,2.58,0,0,1-1,2.32l-1.18.69c-.66.36-.24-.47-1.24-1a8.05,8.05,0,0,1-3.65-6.3c0-1.14-1.06-1.15-.41-1.53l1.3-.71a2.63,2.63,0,0,1,2.55.28A8.05,8.05,0,0,1,112.71,411.45Z" fill="url(#linear-gradient-105)" />
                    <path d="M111.44,412.17c0,2.31-1.63,3.24-3.65,2.08a8.05,8.05,0,0,1-3.65-6.3c0-2.31,1.63-3.25,3.65-2.08A8,8,0,0,1,111.44,412.17Z" fill="url(#New_Gradient_Swatch_copy_10-6)" />
                    <path d="M110.55,412a2.19,2.19,0,0,1-.88,2l-1.76,1.06c-.57.31-.21-.4-1.07-.9a6.91,6.91,0,0,1-3.13-5.41c0-1-.91-1-.35-1.31l1.87-1.07a2.23,2.23,0,0,1,2.19.24A6.9,6.9,0,0,1,110.55,412Z" fill="url(#New_Gradient_Swatch_copy_16-2)" />
                    <path d="M108.71,413.08c0,2-1.41,2.79-3.14,1.79a6.91,6.91,0,0,1-3.13-5.41c0-2,1.4-2.78,3.13-1.78A6.91,6.91,0,0,1,108.71,413.08Z" fill="url(#New_Gradient_Swatch_copy_7)" />
                    <path d="M108,405.78a2.64,2.64,0,0,0-2.49-.31,2.88,2.88,0,0,1,2.18.43,8.05,8.05,0,0,1,3.65,6.3,2.47,2.47,0,0,1-1.15,2.39c.89-.25,1.47-1.14,1.47-2.51A8,8,0,0,0,108,405.78Z" fill="#e6e7e8" style={{mixBlendMode: 'screen'}} />
                    <path d="M105.71,407.59a2.27,2.27,0,0,0-2.15-.26,2.45,2.45,0,0,1,1.88.37,6.94,6.94,0,0,1,3.15,5.43,2.13,2.13,0,0,1-1,2.06c.76-.21,1.26-1,1.26-2.16A7,7,0,0,0,105.71,407.59Z" fill="url(#Radial_Gradient_1-35)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <ellipse cx="136.63" cy="273.97" rx="25.61" ry="31.17" opacity="0.8" fill="url(#radial-gradient-27)" style={{mixBlendMode: 'color-dodge'}} />
                  <g>
                    <g id="card4">
                      <path d="M163.59,277.29l-16-9.24a1.87,1.87,0,0,0-1.89-.19l-1.06.62a1.89,1.89,0,0,1,1.89.18l16,9.24a5.82,5.82,0,0,1,2.65,4.59l-.08,27.57a1.86,1.86,0,0,1-.77,1.71l1.06-.62a1.85,1.85,0,0,0,.77-1.7l.08-27.58A5.82,5.82,0,0,0,163.59,277.29Z" fill="#d1cfcb" />
                      <path d="M162.53,277.9a5.82,5.82,0,0,1,2.65,4.59l-.08,27.57c0,1.69-1.19,2.37-2.66,1.52l-16-9.24a5.85,5.85,0,0,1-2.65-4.58l.08-27.58c0-1.68,1.19-2.36,2.66-1.52Z" fill="#ebe9e4" />
                      <path d="M160.68,298.28c.47.81,1.72,2.86,1.72,4,0,.76-.46.88-.91.62a1.84,1.84,0,0,1-.82-1.24c-.12.45-.48.49-.84.29a2,2,0,0,1-.88-1.67C159,299.14,160.23,298.54,160.68,298.28Z" fill="#fd0000" />
                      <path d="M149.09,278.26a2,2,0,0,1,.9,1.68c0,1.15-1.26,1.74-1.73,2-.45-.78-1.72-2.85-1.72-4,0-.76.45-.89.9-.63a1.89,1.89,0,0,1,.83,1.25C148.37,278.1,148.73,278.05,149.09,278.26Z" fill="#fd0000" />
                      <path d="M161.43,303.58l1,.59-1.36,3.56-.87-.5-1.3-5.1,1,.59.23,1,1,.58Zm-.75,2.69.27-1.12-.57-.32.28,1.43Z" fill="#fd0000" />
                      <path d="M148.72,273l1.34,5.12-1-.59-.24-1-1-.58-.24.73-1-.59,1.33-3.58Zm-.72,2.09.56.32-.25-1.42h0l-.28,1.11Z" fill="#fd0000" />
                      <path d="M156.28,286.61a4.37,4.37,0,0,1,2,3.65c0,2.52-2.75,3.81-3.78,4.4-1-1.71-3.75-6.23-3.74-8.74,0-1.66,1-1.95,1.94-1.39a4.14,4.14,0,0,1,1.82,2.74C154.71,286.26,155.49,286.16,156.28,286.61Z" fill="#fd0000" />
                    </g>
                    <g id="card3">
                      <path d="M154.78,280.79l-16-9.24a1.89,1.89,0,0,0-1.89-.18l-1.06.61a1.87,1.87,0,0,1,1.89.19l16,9.24a5.85,5.85,0,0,1,2.65,4.58l-.08,27.58a1.86,1.86,0,0,1-.77,1.7l1.06-.61a1.88,1.88,0,0,0,.77-1.71l.08-27.57A5.85,5.85,0,0,0,154.78,280.79Z" fill="#d1cfcb" />
                      <path d="M153.72,281.41a5.85,5.85,0,0,1,2.65,4.58l-.08,27.58c0,1.68-1.2,2.36-2.66,1.51l-16-9.23a5.84,5.84,0,0,1-2.64-4.59l.07-27.57c0-1.69,1.2-2.37,2.67-1.52Z" fill="#ebe9e4" />
                      <path d="M139.47,281.41a1.78,1.78,0,0,1,.81,1.4.65.65,0,0,1-.06.29,1.79,1.79,0,0,1,.81,1.4c0,.51-.37.71-.81.46a1.78,1.78,0,0,1-.73-1,4.47,4.47,0,0,0,.2,1,2.68,2.68,0,0,0,.64,1l-1.74-1c.2,0,.42.08.62-.22a1.86,1.86,0,0,0,.23-.77c-.13.24-.41.29-.73.11a1.79,1.79,0,0,1-.8-1.4c0-.51.36-.71.81-.46a1.13,1.13,0,0,1-.06-.36C138.66,281.36,139,281.15,139.47,281.41Z" />
                      <path d="M139.91,276.5l1.33,5.12-1-.59-.24-1-1-.58-.24.74-1-.59L139,276Zm-.73,2.08.57.33-.26-1.42,0,0-.29,1.11Z" />
                      <path d="M145.69,287.7a4.38,4.38,0,0,1,2,3.45,2,2,0,0,1-.13.73,4.37,4.37,0,0,1,2,3.45c0,1.26-.9,1.78-2,1.14a4.39,4.39,0,0,1-1.8-2.35,11,11,0,0,0,.51,2.51,6.2,6.2,0,0,0,1.57,2.33l-4.29-2.47c.48,0,1,.2,1.53-.54a4.88,4.88,0,0,0,.56-1.89c-.32.58-1,.72-1.8.26a4.37,4.37,0,0,1-2-3.45c0-1.26.89-1.78,2-1.15a3.34,3.34,0,0,1-.13-.87C143.69,287.57,144.59,287.06,145.69,287.7Z" />
                      <path d="M152.61,307.09l1,.59-1.36,3.56-.87-.5-1.31-5.1,1,.59.23,1,1,.58Zm-.74,2.69.26-1.12-.56-.33.27,1.43,0,0Z" />
                      <path d="M152.75,302.29c-.17,0-.43-.11-.64.21a2.14,2.14,0,0,0-.21.78c.13-.24.41-.3.73-.11a1.76,1.76,0,0,1,.81,1.39c0,.51-.37.72-.81.46a1.56,1.56,0,0,1,.05.36c0,.51-.36.72-.81.46a1.79,1.79,0,0,1-.8-1.39.9.9,0,0,1,.05-.3,1.77,1.77,0,0,1-.8-1.39c0-.51.36-.72.81-.46a1.77,1.77,0,0,1,.73.95,4,4,0,0,0-.23-1,2.59,2.59,0,0,0-.61-.93Z" />
                    </g>
                    <g id="card2">
                      <path d="M144.69,285.52l-16-9.24c-1.47-.85-2.66-.17-2.66,1.52l-.08,27.57a5.84,5.84,0,0,0,2.64,4.59l16,9.24c1.46.84,2.66.17,2.66-1.52l.08-27.58A5.83,5.83,0,0,0,144.69,285.52Z" fill="#ebe9e4" />
                      <g>
                        <path d="M143.58,311.2l1,.59-1.36,3.56-.87-.5-1.31-5.1,1,.59.23,1,1,.58Zm-.75,2.69.27-1.12-.57-.33.27,1.43,0,0Z" fill="#fd0000" />
                        <path d="M130.87,280.61l1.34,5.12-1-.59-.24-1-1-.58-.24.74-1-.59,1.33-3.58Zm-.72,2.08.56.33-.26-1.42,0,0-.28,1.11Z" fill="#fd0000" />
                        <path d="M130.43,285a8,8,0,0,0,2.28,3.93,1.81,1.81,0,0,0-2.29,1.3,8,8,0,0,0-2.27-3.93A1.8,1.8,0,0,0,130.43,285Z" fill="#fd0000" />
                        <path d="M142.85,305.28a7.94,7.94,0,0,0,2.27,3.94,1.81,1.81,0,0,0-2.29,1.3,8,8,0,0,0-2.27-3.93A1.81,1.81,0,0,0,142.85,305.28Z" fill="#fd0000" />
                        <ellipse cx="136.63" cy="297.74" rx="6.54" ry="6.49" fill="#fd0000" />
                      </g>
                      <path d="M145.74,284.91l-16-9.24a1.87,1.87,0,0,0-1.89-.19l-1.06.62a1.89,1.89,0,0,1,1.89.18l16,9.24a5.83,5.83,0,0,1,2.64,4.58l-.08,27.58a1.83,1.83,0,0,1-.77,1.7l1.06-.61a1.88,1.88,0,0,0,.77-1.71l.08-27.57A5.83,5.83,0,0,0,145.74,284.91Z" fill="#d1cfcb" />
                    </g>
                    <g id="card1">
                      <g>
                        <path d="M135.67,289.5a5.85,5.85,0,0,1,2.65,4.59l-.08,27.57c0,1.69-1.2,2.36-2.66,1.52l-16-9.24a5.85,5.85,0,0,1-2.65-4.59l.08-27.57c0-1.68,1.2-2.36,2.66-1.52Z" fill="#ebe9e4" />
                        <path d="M136.73,288.89l-16-9.24a1.85,1.85,0,0,0-1.88-.19l-1.06.62a1.87,1.87,0,0,1,1.88.18l16,9.24a5.85,5.85,0,0,1,2.65,4.59l-.08,27.57a1.83,1.83,0,0,1-.78,1.7l1.06-.61a1.88,1.88,0,0,0,.78-1.7l.08-27.58A5.86,5.86,0,0,0,136.73,288.89Z" fill="#d1cfcb" />
                      </g>
                      <g>
                        <path d="M134.56,315.18l1,.59-1.37,3.56-.87-.5-1.3-5.1,1,.59.24,1,1,.58Zm-.74,2.69.26-1.12-.56-.32.27,1.42,0,0Z" />
                        <path d="M134.57,311.21a.52.52,0,0,0-.69.07,1.74,1.74,0,0,1,.22-.63c.21-.32.45-.22.66-.23l-1.86-1.07a2.62,2.62,0,0,1,.68,1,4.55,4.55,0,0,1,.2.87,1.85,1.85,0,0,0-.7-.88c-.44-.25-.88-.06-.88.73,0,1.09,1.33,2.73,1.62,3.23.31-.18,1.63-.26,1.64-1.35A2.1,2.1,0,0,0,134.57,311.21Z" />
                        <path d="M121.5,289.18c-.31.18-1.63.26-1.63,1.35a2.1,2.1,0,0,0,.88,1.75.51.51,0,0,0,.69-.07,1.68,1.68,0,0,1-.21.62c-.22.33-.46.23-.67.24l1.86,1.07a2.73,2.73,0,0,1-.68-1,3.88,3.88,0,0,1-.19-.87,1.74,1.74,0,0,0,.69.88c.44.25.89.06.89-.73C123.13,291.32,121.79,289.68,121.5,289.18Z" />
                        <path d="M121.85,284.59l1.34,5.12-1-.59-.25-1-1-.59-.23.74-1-.59,1.33-3.58Zm-.72,2.08.57.33-.26-1.42h0l-.28,1.1Z" />
                        <path d="M127.63,296.61c-.72.42-3.76.6-3.77,3.11a4.86,4.86,0,0,0,2,4,1.17,1.17,0,0,0,1.6-.16,3.9,3.9,0,0,1-.5,1.45c-.5.75-1,.52-1.53.54l4.29,2.47a6.23,6.23,0,0,1-1.57-2.33,9.74,9.74,0,0,1-.45-2c0-.26-.06-.49-.07-.69,0,.2,0,.43.07.69a4.07,4.07,0,0,0,1.6,2c1,.59,2,.15,2-1.67C131.39,301.56,128.3,297.76,127.63,296.61Z" />
                      </g>
                    </g>
                  </g>
                  <ellipse cx="138.48" cy="283.66" rx="15.06" ry="12.37" transform="translate(-176.98 294.98) rotate(-66.03)" opacity="0.5" fill="url(#radial-gradient-28)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M161.35,309.08c0,26.24-5.25,44.48-11.73,44.48s-11.72-18.24-11.72-44.48,5.25-47.52,11.72-47.52S161.35,282.83,161.35,309.08Z" fill="url(#radial-gradient-29)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="118.83" cy="376.71" rx="11.73" ry="47.52" fill="url(#radial-gradient-30)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g>
                  <g opacity="0.2">
                    <path d="M448.73,703.17a12.13,12.13,0,0,1-6-1.46l-64-36.94a6.39,6.39,0,0,1-3.47-5.52c0-2.45,1.52-4.73,4.18-6.27l74.51-43.82a14.9,14.9,0,0,1,7.34-1.86,12.13,12.13,0,0,1,6,1.45l64,36.94a6.37,6.37,0,0,1,3.47,5.52c0,2.45-1.52,4.74-4.17,6.27L456.07,701.3A14.91,14.91,0,0,1,448.73,703.17Z" opacity={0} />
                    <path d="M453,610.1a14.61,14.61,0,0,1,7.25-1.82,13.31,13.31,0,0,1,3.78.56,11.46,11.46,0,0,1,2.17.94l63.22,36.51a7,7,0,0,1,3.62,5.29c.11,2.36-1.19,4.66-3.86,6.2l-73.28,43a14.37,14.37,0,0,1-1.36.68,15.08,15.08,0,0,1-5.84,1.19,11.87,11.87,0,0,1-5.94-1.41l-63.37-36.59a7,7,0,0,1-3.63-5.29c-.12-2.37,1.18-4.67,3.85-6.21Z" opacity="0.09" />
                    <path d="M452.14,611a14.1,14.1,0,0,1,7.17-1.77,13.23,13.23,0,0,1,3.72.59,13.75,13.75,0,0,1,2.13.95l62.47,36.07c1.81,1,3.59,3.24,3.77,5.06.23,2.3-.85,4.59-3.54,6.14L455.8,700.27a13.83,13.83,0,0,1-1.33.68,14.67,14.67,0,0,1-5.72,1.2,11.37,11.37,0,0,1-5.84-1.36l-62.77-36.24c-1.81-1-3.62-3.25-3.8-5.07-.22-2.3.85-4.59,3.54-6.14Z" opacity="0.18" />
                    <path d="M451.23,612a14,14,0,0,1,7.09-1.72,12.8,12.8,0,0,1,3.67.64,14.17,14.17,0,0,1,2.09,1l61.72,35.64c1.6.93,3.68,3.22,3.92,4.82.34,2.25-.51,4.52-3.22,6.08l-70.83,41.38c-.32.18-.95.51-1.3.67a14.73,14.73,0,0,1-5.62,1.22,11.26,11.26,0,0,1-5.74-1.32l-62.16-35.89c-1.61-.92-3.72-3.24-4-4.85-.34-2.25.52-4.51,3.23-6.07Z" opacity="0.27" />
                    <path d="M450.33,612.91a13.57,13.57,0,0,1,7-1.67,12.32,12.32,0,0,1,3.61.67,18.37,18.37,0,0,1,2.05,1l61,35.21c1.4.81,4.07,3.17,4.07,4.59.9,2.08-.18,4.44-2.9,6l-69.6,40.56c-.28.16-1,.53-1.28.67a14.18,14.18,0,0,1-5.5,1.23,10.87,10.87,0,0,1-5.64-1.27l-61.56-35.54c-1.41-.81-4.13-3.2-4.13-4.62-.9-2.08.18-4.44,2.91-6Z" opacity="0.36" />
                    <path d="M449.43,613.84a13.38,13.38,0,0,1,6.92-1.62,12.23,12.23,0,0,1,3.56.71,20.74,20.74,0,0,1,2,1l60.22,34.77c1.2.7,4.23,3.14,4.23,4.36,1.12,2,.15,4.37-2.6,6l-68.36,39.75c-.24.14-1,.54-1.25.66a14.24,14.24,0,0,1-5.39,1.25,10.7,10.7,0,0,1-5.54-1.22l-61-35.2c-1.2-.69-4.29-3.18-4.29-4.4-1.12-2-.15-4.37,2.59-6Z" opacity="0.45" />
                    <path d="M448.53,614.78a12.89,12.89,0,0,1,6.84-1.57,12.14,12.14,0,0,1,3.5.74c.35.13,1.66.81,2,1l59.47,34.34c1,.58,4.38,3.11,4.38,4.13,1.35,1.89.49,4.29-2.28,5.89l-67.14,38.92c-.2.12-1,.56-1.22.66a13.84,13.84,0,0,1-5.28,1.26,10.31,10.31,0,0,1-5.43-1.17L383,664.11c-1-.58-4.45-3.16-4.45-4.18-1.35-1.89-.49-4.29,2.27-5.88Z" opacity="0.55" />
                    <path d="M447.62,615.71a12.68,12.68,0,0,1,6.77-1.52,11.58,11.58,0,0,1,3.43.78c.29.11,1.7.85,1.94,1l58.72,33.91c.8.46,4.53,3.08,4.53,3.89,1.57,1.8.82,4.22-2,5.83L455.14,697.7c-.16.09-1,.57-1.2.65a13.62,13.62,0,0,1-5.16,1.28,10.18,10.18,0,0,1-5.34-1.13L383.68,664c-.8-.47-4.62-3.14-4.62-4-1.57-1.8-.82-4.22,2-5.83Z" opacity="0.64" />
                    <path d="M446.72,616.65a12.26,12.26,0,0,1,6.68-1.47,11.48,11.48,0,0,1,3.38.81c.22.08,1.72.9,1.9,1l58,33.47c.6.35,4.68,3.06,4.68,3.67,1.8,1.7,1.16,4.14-1.64,5.76L455,697.19l-1.17.64a13.31,13.31,0,0,1-5,1.29,9.81,9.81,0,0,1-5.24-1.08l-59.16-34.15c-.6-.35-4.79-3.12-4.78-3.73-1.8-1.71-1.16-4.14,1.64-5.76Z" opacity="0.73" />
                    <path d="M445.82,617.59a11.91,11.91,0,0,1,6.6-1.42,10.78,10.78,0,0,1,3.32.84c.14.06,1.74.94,1.86,1l57.22,33c.4.23,4.83,3,4.83,3.43,2,1.61,1.5,4.07-1.32,5.7l-63.45,36.48-1.15.64a13.15,13.15,0,0,1-4.94,1.31,9.54,9.54,0,0,1-5.13-1l-58.56-33.8c-.4-.24-5-3.1-5-3.5-2-1.62-1.49-4.07,1.32-5.7Z" opacity="0.82" />
                    <path d="M444.91,618.52a11.75,11.75,0,0,1,6.52-1.37,10.75,10.75,0,0,1,3.27.89c.07,0,1.76,1,1.82,1L513,651.66c.2.11,5,3,5,3.19,2.25,1.53,1.83,4-1,5.64l-62.22,35.67-1.11.62a12.67,12.67,0,0,1-4.83,1.33,9.32,9.32,0,0,1-5-1l-57.95-33.46c-.2-.11-5.12-3.07-5.12-3.27-2.25-1.52-1.83-4,1-5.64Z" opacity="0.91" />
                    <path d="M443.87,696.66,381.24,660.5c-2.48-1.43-2.17-3.92.69-5.57L444,619.46c2.86-1.65,7.18-1.83,9.65-.4l62.64,36.16c2.47,1.43,2.16,3.92-.7,5.57l-62.08,35.47C450.66,697.91,446.34,698.09,443.87,696.66Z" />
                  </g>
                  <g>
                    <polygon points="449.09 691.65 449.09 699.9 519.95 658.57 519.95 650.32 449.09 691.65" fill="url(#New_Gradient_Swatch_copy_25-32)" />
                    <polygon points="449.13 691.65 449.13 699.9 378.03 658.45 378.03 650.25 449.13 691.65" fill="url(#New_Gradient_Swatch_copy_25-33)" />
                    <polygon points="449.09 702.5 449.09 710.75 519.95 669.41 519.95 661.17 449.09 702.5" opacity="0.2" fill="url(#New_Gradient_Swatch_copy_25-34)" />
                    <polygon points="449.13 702.5 449.13 710.75 378.03 669.3 378.03 661.1 449.13 702.5" opacity="0.2" fill="url(#New_Gradient_Swatch_copy_25-35)" />
                    <polygon points="378.03 650.25 449.13 691.65 519.95 650.32 448.78 608.88 378.03 650.25" fill="url(#linear-gradient-106)" />
                  </g>
                  <g>
                    <polygon points="449.08 677.02 449.08 688.61 514.92 650.21 514.92 638.62 449.08 677.02" fill="url(#New_Gradient_Swatch_copy_26-5)" />
                    <polygon points="449.12 677.02 449.12 688.61 383.06 650.1 383.06 638.55 449.12 677.02" fill="url(#New_Gradient_Swatch_copy_7-2)" />
                  </g>
                  <g>
                    <polygon points="449.09 646.71 449.09 685.23 519.95 643.9 519.95 605.38 449.09 646.71" fill="url(#New_Gradient_Swatch_copy_25-36)" />
                    <path d="M453.72,677.17v-27.8l61.6-35.93v27.8ZM456.47,651v21.42l56.1-32.71V618.24Z" fill="url(#New_Gradient_Swatch_copy_25-37)" />
                    <polygon points="449.13 646.71 449.13 685.23 378.03 643.78 378.03 605.31 449.13 646.71" fill="url(#New_Gradient_Swatch_copy_25-38)" />
                    <polygon points="384.04 640.33 384.04 615.76 443.12 650.16 443.12 674.77 384.04 640.33" fill="#25054d" />
                    <path d="M444.5,677.17l-61.84-36V613.36l61.84,36Zm-59.09-37.63,56.34,32.84V651l-56.34-32.8Z" fill="url(#New_Gradient_Swatch_copy_25-39)" />
                    <g>
                      <g>
                        <polygon points="435.05 652.27 437.33 653.59 437.33 650.97 435.05 649.64 435.05 652.27" fill="#2af6ff" />
                        <polygon points="430.75 649.79 433.04 651.11 433.04 648.49 430.75 647.16 430.75 649.79" fill="#2af6ff" />
                        <polygon points="426.46 647.31 428.74 648.63 428.74 646 426.46 644.68 426.46 647.31" fill="#4b61b8" />
                        <polygon points="422.16 644.83 424.45 646.15 424.45 643.52 422.16 642.2 422.16 644.83" fill="#25054d" />
                        <polygon points="417.86 642.35 420.15 643.67 420.15 641.04 417.86 639.72 417.86 642.35" fill="#25054d" />
                        <polygon points="413.57 639.87 415.85 641.19 415.85 638.56 413.57 637.24 413.57 639.87" fill="#4b61b8" />
                        <polygon points="409.27 637.39 411.56 638.71 411.56 636.08 409.27 634.76 409.27 637.39" fill="#4b61b8" />
                        <polygon points="404.98 634.91 407.26 636.23 407.26 633.6 404.98 632.28 404.98 634.91" fill="#4b61b8" />
                        <polygon points="400.68 632.43 402.97 633.75 402.97 631.12 400.68 629.8 400.68 632.43" fill="#25054d" />
                        <polygon points="396.38 629.95 398.67 631.27 398.67 628.64 396.38 627.32 396.38 629.95" fill="#4b61b8" />
                        <polygon points="392.09 627.47 394.37 628.79 394.37 626.16 392.09 624.84 392.09 627.47" fill="#2af6ff" />
                        <polygon points="387.79 624.99 390.08 626.31 390.08 623.68 387.79 622.36 387.79 624.99" fill="#2af6ff" />
                      </g>
                      <g>
                        <polygon points="435.05 656.93 437.33 658.25 437.33 655.63 435.05 654.31 435.05 656.93" fill="#4b61b8" />
                        <polygon points="430.75 654.45 433.04 655.77 433.04 653.15 430.75 651.83 430.75 654.45" fill="#2af6ff" />
                        <polygon points="426.46 651.97 428.74 653.29 428.74 650.67 426.46 649.35 426.46 651.97" fill="#2af6ff" />
                        <polygon points="422.16 649.49 424.45 650.81 424.45 648.19 422.16 646.87 422.16 649.49" fill="#25054d" />
                        <polygon points="417.86 647.01 420.15 648.33 420.15 645.71 417.86 644.39 417.86 647.01" fill="#2af6ff" />
                        <polygon points="413.57 644.53 415.85 645.85 415.85 643.23 413.57 641.91 413.57 644.53" fill="#2af6ff" />
                        <polygon points="409.27 642.05 411.56 643.37 411.56 640.75 409.27 639.43 409.27 642.05" fill="#2af6ff" />
                        <polygon points="404.98 639.57 407.26 640.89 407.26 638.27 404.98 636.95 404.98 639.57" fill="#4b61b8" />
                        <polygon points="400.68 637.09 402.97 638.41 402.97 635.79 400.68 634.47 400.68 637.09" fill="#4b61b8" />
                        <polygon points="396.38 634.61 398.67 635.93 398.67 633.31 396.38 631.99 396.38 634.61" fill="#4b61b8" />
                        <polygon points="392.09 632.13 394.37 633.45 394.37 630.83 392.09 629.51 392.09 632.13" fill="#4b61b8" />
                        <polygon points="387.79 629.65 390.08 630.97 390.08 628.35 387.79 627.02 387.79 629.65" fill="#4b61b8" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="435.05 661.56 437.33 662.88 437.33 660.26 435.05 658.94 435.05 661.56" fill="#2af6ff" />
                        <polygon points="430.75 659.08 433.04 660.4 433.04 657.78 430.75 656.46 430.75 659.08" fill="#4b61b8" />
                        <polygon points="426.46 656.6 428.74 657.92 428.74 655.3 426.46 653.98 426.46 656.6" fill="#4b61b8" />
                        <polygon points="422.16 654.12 424.45 655.44 424.45 652.82 422.16 651.5 422.16 654.12" fill="#4b61b8" />
                        <polygon points="417.86 651.64 420.15 652.96 420.15 650.34 417.86 649.01 417.86 651.64" fill="#4b61b8" />
                        <polygon points="413.57 649.16 415.85 650.48 415.85 647.86 413.57 646.53 413.57 649.16" fill="#4b61b8" />
                        <polygon points="409.27 646.68 411.56 648 411.56 645.38 409.27 644.05 409.27 646.68" fill="#25054d" />
                        <polygon points="404.98 644.2 407.26 645.52 407.26 642.89 404.98 641.58 404.98 644.2" fill="#2af6ff" />
                        <polygon points="400.68 641.72 402.97 643.04 402.97 640.41 400.68 639.09 400.68 641.72" fill="#4b61b8" />
                        <polygon points="396.38 639.24 398.67 640.56 398.67 637.93 396.38 636.61 396.38 639.24" fill="#4b61b8" />
                        <polygon points="392.09 636.76 394.37 638.08 394.37 635.45 392.09 634.13 392.09 636.76" fill="#2af6ff" />
                        <polygon points="387.79 634.28 390.08 635.6 390.08 632.97 387.79 631.65 387.79 634.28" fill="#2af6ff" />
                      </g>
                      <g>
                        <polygon points="435.05 666.23 437.33 667.54 437.33 664.92 435.05 663.6 435.05 666.23" fill="#2af6ff" />
                        <polygon points="430.75 663.75 433.04 665.07 433.04 662.44 430.75 661.12 430.75 663.75" fill="#25054d" />
                        <polygon points="426.46 661.26 428.74 662.59 428.74 659.96 426.46 658.64 426.46 661.26" fill="#25054d" />
                        <polygon points="422.16 658.78 424.45 660.1 424.45 657.48 422.16 656.16 422.16 658.78" fill="#4b61b8" />
                        <polygon points="417.86 656.3 420.15 657.62 420.15 655 417.86 653.68 417.86 656.3" fill="#2af6ff" />
                        <polygon points="413.57 653.82 415.85 655.14 415.85 652.52 413.57 651.2 413.57 653.82" fill="#2af6ff" />
                        <polygon points="409.27 651.34 411.56 652.66 411.56 650.04 409.27 648.72 409.27 651.34" fill="#25054d" />
                        <polygon points="404.98 648.86 407.26 650.18 407.26 647.56 404.98 646.24 404.98 648.86" fill="#4b61b8" />
                        <polygon points="400.68 646.38 402.97 647.7 402.97 645.08 400.68 643.76 400.68 646.38" fill="#4b61b8" />
                        <polygon points="396.38 643.9 398.67 645.22 398.67 642.6 396.38 641.28 396.38 643.9" fill="#2af6ff" />
                        <polygon points="392.09 641.42 394.37 642.74 394.37 640.12 392.09 638.8 392.09 641.42" fill="#25054d" />
                        <polygon points="387.79 638.94 390.08 640.26 390.08 637.64 387.79 636.32 387.79 638.94" fill="#4b61b8" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="462.58 652.27 460.3 653.59 460.3 650.97 462.58 649.64 462.58 652.27" fill="#2af6ff" />
                        <polygon points="466.88 649.79 464.59 651.11 464.59 648.49 466.88 647.16 466.88 649.79" fill="#25054d" />
                        <polygon points="471.18 647.31 468.89 648.63 468.89 646 471.18 644.68 471.18 647.31" fill="#4b61b8" />
                        <polygon points="475.47 644.83 473.19 646.15 473.19 643.52 475.47 642.2 475.47 644.83" fill="#25054d" />
                        <polygon points="479.77 642.35 477.48 643.67 477.48 641.04 479.77 639.72 479.77 642.35" fill="#25054d" />
                        <polygon points="484.06 639.87 481.78 641.19 481.78 638.56 484.06 637.24 484.06 639.87" fill="#4b61b8" />
                        <polygon points="488.36 637.39 486.07 638.71 486.07 636.08 488.36 634.76 488.36 637.39" fill="#4b61b8" />
                        <polygon points="492.66 634.91 490.37 636.23 490.37 633.6 492.66 632.28 492.66 634.91" fill="#4b61b8" />
                        <polygon points="496.95 632.43 494.67 633.75 494.67 631.12 496.95 629.8 496.95 632.43" fill="#25054d" />
                        <polygon points="501.25 629.95 498.96 631.27 498.96 628.64 501.25 627.32 501.25 629.95" fill="#25054d" />
                        <polygon points="505.54 627.47 503.26 628.79 503.26 626.16 505.54 624.84 505.54 627.47" fill="#2af6ff" />
                        <polygon points="509.84 624.99 507.55 626.31 507.55 623.68 509.84 622.36 509.84 624.99" fill="#2af6ff" />
                      </g>
                      <g>
                        <polygon points="462.58 656.93 460.3 658.25 460.3 655.63 462.58 654.31 462.58 656.93" fill="#4b61b8" />
                        <polygon points="466.88 654.45 464.59 655.77 464.59 653.15 466.88 651.83 466.88 654.45" fill="#25054d" />
                        <polygon points="471.18 651.97 468.89 653.29 468.89 650.67 471.18 649.35 471.18 651.97" fill="#2af6ff" />
                        <polygon points="475.47 649.49 473.19 650.81 473.19 648.19 475.47 646.87 475.47 649.49" fill="#25054d" />
                        <polygon points="479.77 647.01 477.48 648.33 477.48 645.71 479.77 644.39 479.77 647.01" fill="#2af6ff" />
                        <polygon points="484.06 644.53 481.78 645.85 481.78 643.23 484.06 641.91 484.06 644.53" fill="#2af6ff" />
                        <polygon points="488.36 642.05 486.07 643.37 486.07 640.75 488.36 639.43 488.36 642.05" fill="#2af6ff" />
                        <polygon points="492.66 639.57 490.37 640.89 490.37 638.27 492.66 636.95 492.66 639.57" fill="#4b61b8" />
                        <polygon points="496.95 637.09 494.67 638.41 494.67 635.79 496.95 634.47 496.95 637.09" fill="#4b61b8" />
                        <polygon points="501.25 634.61 498.96 635.93 498.96 633.31 501.25 631.99 501.25 634.61" fill="#4b61b8" />
                        <polygon points="505.54 632.13 503.26 633.45 503.26 630.83 505.54 629.51 505.54 632.13" fill="#4b61b8" />
                        <polygon points="509.84 629.65 507.55 630.97 507.55 628.35 509.84 627.02 509.84 629.65" fill="#4b61b8" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="462.58 661.56 460.3 662.88 460.3 660.26 462.58 658.94 462.58 661.56" fill="#2af6ff" />
                        <polygon points="466.88 659.08 464.59 660.4 464.59 657.78 466.88 656.46 466.88 659.08" fill="#4b61b8" />
                        <polygon points="471.18 656.6 468.89 657.92 468.89 655.3 471.18 653.98 471.18 656.6" fill="#4b61b8" />
                        <polygon points="475.47 654.12 473.19 655.44 473.19 652.82 475.47 651.5 475.47 654.12" fill="#4b61b8" />
                        <polygon points="479.77 651.64 477.48 652.96 477.48 650.34 479.77 649.01 479.77 651.64" fill="#4b61b8" />
                        <polygon points="484.06 649.16 481.78 650.48 481.78 647.86 484.06 646.53 484.06 649.16" fill="#4b61b8" />
                        <polygon points="488.36 646.68 486.07 648 486.07 645.38 488.36 644.05 488.36 646.68" fill="#25054d" />
                        <polygon points="492.66 644.2 490.37 645.52 490.37 642.89 492.66 641.58 492.66 644.2" fill="#2af6ff" />
                        <polygon points="496.95 641.72 494.67 643.04 494.67 640.41 496.95 639.09 496.95 641.72" fill="#4b61b8" />
                        <polygon points="501.25 639.24 498.96 640.56 498.96 637.93 501.25 636.61 501.25 639.24" fill="#4b61b8" />
                        <polygon points="505.54 636.76 503.26 638.08 503.26 635.45 505.54 634.13 505.54 636.76" fill="#4b61b8" />
                        <polygon points="509.84 634.28 507.55 635.6 507.55 632.97 509.84 631.65 509.84 634.28" fill="#2af6ff" />
                      </g>
                      <g>
                        <polygon points="462.58 666.23 460.3 667.54 460.3 664.92 462.58 663.6 462.58 666.23" fill="#2af6ff" />
                        <polygon points="466.88 663.75 464.59 665.07 464.59 662.44 466.88 661.12 466.88 663.75" fill="#2af6ff" />
                        <polygon points="471.18 661.26 468.89 662.59 468.89 659.96 471.18 658.64 471.18 661.26" fill="#25054d" />
                        <polygon points="475.47 658.78 473.19 660.1 473.19 657.48 475.47 656.16 475.47 658.78" fill="#4b61b8" />
                        <polygon points="479.77 656.3 477.48 657.62 477.48 655 479.77 653.68 479.77 656.3" fill="#2af6ff" />
                        <polygon points="484.06 653.82 481.78 655.14 481.78 652.52 484.06 651.2 484.06 653.82" fill="#2af6ff" />
                        <polygon points="488.36 651.34 486.07 652.66 486.07 650.04 488.36 648.72 488.36 651.34" fill="#25054d" />
                        <polygon points="492.66 648.86 490.37 650.18 490.37 647.56 492.66 646.24 492.66 648.86" fill="#4b61b8" />
                        <polygon points="496.95 646.38 494.67 647.7 494.67 645.08 496.95 643.76 496.95 646.38" fill="#4b61b8" />
                        <polygon points="501.25 643.9 498.96 645.22 498.96 642.6 501.25 641.28 501.25 643.9" fill="#2af6ff" />
                        <polygon points="505.54 641.42 503.26 642.74 503.26 640.12 505.54 638.8 505.54 641.42" fill="#25054d" />
                        <polygon points="509.84 638.94 507.55 640.26 507.55 637.64 509.84 636.32 509.84 638.94" fill="#2af6ff" />
                      </g>
                    </g>
                    <polygon points="378.03 605.31 449.13 646.71 519.95 605.38 448.78 563.93 378.03 605.31" fill="url(#New_Gradient_Swatch_copy_25-40)" />
                    <polygon points="449.13 646.71 449.13 699.65 378.03 658.2 378.03 605.31 449.13 646.71" fill="url(#linear-gradient-107)" style={{mixBlendMode: 'color-dodge'}} />
                    <polygon points="449.13 646.71 449.13 699.65 378.03 658.2 378.03 605.31 449.13 646.71" fill="url(#linear-gradient-108)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <polygon points="391.22 605.22 448.58 638.63 506.73 605.18 449.3 571.74 391.22 605.22" fill="url(#New_Gradient_Swatch_copy_26-6)" />
                  <g id="light" data-name="light" style={{mixBlendMode: 'color-dodge'}}>
                    <polygon points="420.24 622.01 448.78 638.63 477.7 621.99 449.13 605.36 420.24 622.01" fill="url(#Radial_Gradient_1-36)" />
                  </g>
                  <polygon points="506.73 517.48 448.8 483.75 391.22 517.42 391.22 605.23 448.58 638.63 506.73 605.18 506.73 517.48" opacity="0.7" fill="url(#linear-gradient-109)" style={{mixBlendMode: 'screen'}} />
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M547.34,542.72,528,539.4l-2.49-2.21v5.5h0a9.24,9.24,0,0,0,.76,3.57Z" fill="url(#radial-gradient-31)" />
                      <path d="M533.1,545.11l-6.83-5.49v6.64a14.09,14.09,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#linear-gradient-110)" />
                      <path d="M569.17,542.73v-5.9L567,539.42l-19.65,3.3,21.11,3.62a9,9,0,0,0,.73-3.53S569.17,542.76,569.17,542.73Z" fill="url(#radial-gradient-32)" />
                      <path d="M564.3,544.25l-.27,1.33-16.69-2.86,15.49,9.81a13.83,13.83,0,0,0,5.62-6.19v-5.56Z" fill="url(#linear-gradient-111)" />
                      <path d="M555.83,548.09l-8.49-5.37,5.72,13.37a26.44,26.44,0,0,0,9.77-3.56V546Z" fill="url(#radial-gradient-33)" />
                      <path d="M538.94,548l-7-3.32v7.75a26.93,26.93,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-34)" />
                      <path d="M550.66,550.48l-3.32-7.76-3.25,7.76h-2.33v5.59a34.29,34.29,0,0,0,11.3,0v-5.61Z" fill="url(#linear-gradient-112)" />
                    </g>
                    <g>
                      <path d="M547.34,537.14,562.83,547a13.83,13.83,0,0,0,5.62-6.19l-21.11-3.62Z" fill="url(#New_Gradient_Swatch_copy_14-2)" />
                      <path d="M547.34,537.14l21.11,3.62a9,9,0,0,0,0-7.16l-21.08,3.54Z" fill="url(#radial-gradient-35)" />
                      <path d="M547.34,537.14l-21.07,3.53a14.06,14.06,0,0,0,5.68,6.22l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_14-3)" />
                      <path d="M547.34,537.14,532,546.89a26.92,26.92,0,0,0,9.81,3.59l5.58-13.34Z" fill="url(#radial-gradient-36)" />
                      <path d="M541.76,550.48a34.29,34.29,0,0,0,11.3,0l-5.72-13.37Z" fill="url(#New_Gradient_Swatch_copy_14-4)" />
                      <path d="M547.34,537.14h0l5.72,13.37a26.62,26.62,0,0,0,9.77-3.56Z" fill="url(#radial-gradient-37)" />
                      <path d="M547.34,537.14l-21.11-3.62a9,9,0,0,0,0,7.15l21.07-3.53Z" fill="url(#radial-gradient-38)" />
                      <path d="M568.42,533.6a14.16,14.16,0,0,0-5.68-6.21l-15.4,9.75Z" fill="url(#New_Gradient_Swatch_copy_14-5)" />
                      <path d="M531.85,527.33a13.9,13.9,0,0,0-5.62,6.19l21.11,3.62Z" fill="url(#New_Gradient_Swatch_copy_14-6)" />
                      <path d="M547.34,537.14h0l5.59-13.35a34.35,34.35,0,0,0-11.31,0l5.72,13.37Z" fill="url(#New_Gradient_Swatch_copy_14-7)" />
                      <path d="M562.74,527.39a26.75,26.75,0,0,0-9.81-3.6l-5.59,13.35Z" fill="url(#radial-gradient-39)" />
                      <path d="M541.62,523.77a26.51,26.51,0,0,0-9.77,3.56l15.49,9.81Z" fill="url(#radial-gradient-40)" />
                    </g>
                    <ellipse cx="547.34" cy="537.14" rx="10.12" ry="15.98" transform="translate(6.59 1080.91) rotate(-89.62)" fill="url(#New_Gradient_Swatch_copy_14-8)" />
                    <path d="M556.79,543.12c-5.19,3.28-13.62,3.27-18.83,0s-5.25-8.64-.06-11.93,13.61-3.26,18.83,0S562,539.84,556.79,543.12Z" fill="url(#radial-gradient-41)" />
                    <path d="M562.69,546.79c-8.44,5.34-22.17,5.32-30.66-.06-4.22-2.67-6.35-6.15-6.4-9.64,0,3.57,2.09,7.39,6.4,10.11,8.49,5.38,22.22,5.41,30.66.07,4.26-2.7,6.35-6.48,6.3-10C569,540.71,566.85,544.15,562.69,546.79Z" fill="url(#Radial_Gradient_1-37)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g>
                    <g>
                      <g>
                        <path d="M579.91,574.73l-19.34-3.32-2.49-2.22v5.51h0a9.24,9.24,0,0,0,.76,3.57Z" fill="url(#radial-gradient-42)" />
                        <path d="M565.67,577.12l-6.83-5.49v6.64a14.21,14.21,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_24)" />
                        <path d="M601.75,574.74v-5.9l-2.19,2.59-19.65,3.3L601,578.35a9.17,9.17,0,0,0,.72-3.53Z" fill="url(#radial-gradient-43)" />
                        <path d="M596.87,576.25l-.26,1.34-16.7-2.86,15.5,9.81a14,14,0,0,0,5.62-6.19v-5.57Z" fill="url(#New_Gradient_Swatch_copy_24-2)" />
                        <path d="M588.4,580.1l-8.49-5.37,5.72,13.37a26.49,26.49,0,0,0,9.78-3.56V578Z" fill="url(#radial-gradient-44)" />
                        <path d="M571.51,580.05l-7-3.32v7.75a26.93,26.93,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-45)" />
                        <path d="M583.23,582.49l-3.32-7.76-3.25,7.76h-2.33v5.59a34.29,34.29,0,0,0,11.3,0v-5.61Z" fill="url(#New_Gradient_Swatch_copy_24-3)" />
                      </g>
                      <g>
                        <path d="M579.91,569.15l15.5,9.81a14,14,0,0,0,5.62-6.19l-21.12-3.62Z" fill="url(#New_Gradient_Swatch_copy_15-2)" />
                        <path d="M579.91,569.15,601,572.77a9,9,0,0,0,0-7.16l-21.08,3.54Z" fill="url(#radial-gradient-46)" />
                        <path d="M579.91,569.15l-21.07,3.53a14.1,14.1,0,0,0,5.68,6.21l15.39-9.74Z" fill="url(#New_Gradient_Swatch_copy_15-3)" />
                        <path d="M579.91,569.15l-15.39,9.74a26.75,26.75,0,0,0,9.81,3.6l5.58-13.34Z" fill="url(#radial-gradient-47)" />
                        <path d="M574.33,582.49a34.29,34.29,0,0,0,11.3,0l-5.72-13.36Z" fill="url(#New_Gradient_Swatch_copy_15-4)" />
                        <path d="M579.91,569.15h0l5.72,13.36a26.48,26.48,0,0,0,9.78-3.55Z" fill="url(#radial-gradient-48)" />
                        <path d="M579.91,569.15l-21.11-3.63a9,9,0,0,0,0,7.16l21.07-3.53Z" fill="url(#radial-gradient-49)" />
                        <path d="M601,565.61a14.1,14.1,0,0,0-5.68-6.21l-15.4,9.75Z" fill="url(#New_Gradient_Swatch_copy_15-5)" />
                        <path d="M564.42,559.33a14,14,0,0,0-5.62,6.19l21.11,3.63Z" fill="url(#New_Gradient_Swatch_copy_15-6)" />
                        <path d="M579.91,569.15h0l5.59-13.35a34.29,34.29,0,0,0-11.3,0l5.71,13.37Z" fill="url(#New_Gradient_Swatch_copy_15-7)" />
                        <path d="M595.31,559.4a26.75,26.75,0,0,0-9.81-3.6l-5.59,13.35Z" fill="url(#radial-gradient-50)" />
                        <path d="M574.2,555.78a26.48,26.48,0,0,0-9.78,3.55l15.49,9.82Z" fill="url(#radial-gradient-51)" />
                      </g>
                      <path d="M591.25,576.32c-6.22,3.94-16.34,3.92-22.6,0s-6.29-10.37-.07-14.31,16.34-3.92,22.6,0S597.47,572.38,591.25,576.32Z" fill="url(#New_Gradient_Swatch_copy_15-8)" />
                      <path d="M589.36,575.13c-5.18,3.28-13.62,3.26-18.83,0s-5.25-8.64-.06-11.93,13.61-3.26,18.83,0S594.55,571.84,589.36,575.13Z" fill="url(#radial-gradient-52)" />
                      <path d="M595.26,578.8c-8.44,5.34-22.17,5.31-30.66-.06-4.21-2.67-6.35-6.15-6.4-9.64,0,3.57,2.09,7.38,6.4,10.11,8.49,5.38,22.22,5.41,30.66.06,4.26-2.69,6.35-6.48,6.3-10C601.52,572.71,599.42,576.16,595.26,578.8Z" fill="url(#Radial_Gradient_1-38)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <g>
                        <path d="M579.91,567.84l-19.34-3.32-2.49-2.22v5.51h0a9.24,9.24,0,0,0,.76,3.57Z" fill="url(#radial-gradient-53)" />
                        <path d="M565.67,570.23l-6.83-5.49v6.64a14.21,14.21,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_24-4)" />
                        <path d="M601.75,567.85V562l-2.19,2.59-19.65,3.3L601,571.46a9.17,9.17,0,0,0,.72-3.53Z" fill="url(#radial-gradient-54)" />
                        <path d="M596.87,569.36l-.26,1.34-16.7-2.86,15.5,9.81a14,14,0,0,0,5.62-6.19v-5.57Z" fill="url(#New_Gradient_Swatch_copy_24-5)" />
                        <path d="M588.4,573.21l-8.49-5.37,5.72,13.37a26.67,26.67,0,0,0,9.78-3.56v-6.53Z" fill="url(#radial-gradient-55)" />
                        <path d="M571.51,573.16l-7-3.32v7.75a26.92,26.92,0,0,0,9.81,3.59l5.58-13.34Z" fill="url(#radial-gradient-56)" />
                        <path d="M583.23,575.6l-3.32-7.76-3.25,7.76h-2.33v5.58a34,34,0,0,0,11.3,0V575.6Z" fill="url(#New_Gradient_Swatch_copy_24-6)" />
                      </g>
                      <g>
                        <path d="M579.91,562.25l15.5,9.82a14,14,0,0,0,5.62-6.19l-21.12-3.63Z" fill="url(#New_Gradient_Swatch_copy_15-9)" />
                        <path d="M579.91,562.25,601,565.88a9,9,0,0,0,0-7.16l-21.08,3.53Z" fill="url(#radial-gradient-57)" />
                        <path d="M579.91,562.25l-21.07,3.54a14.1,14.1,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_15-10)" />
                        <path d="M579.91,562.25,564.52,572a26.75,26.75,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-58)" />
                        <path d="M574.33,575.6a34.29,34.29,0,0,0,11.3,0l-5.72-13.37Z" fill="url(#New_Gradient_Swatch_copy_15-11)" />
                        <path d="M579.91,562.25h0l5.72,13.37a26.66,26.66,0,0,0,9.78-3.55Z" fill="url(#radial-gradient-59)" />
                        <path d="M579.91,562.25l-21.11-3.62a9,9,0,0,0,0,7.16l21.07-3.54Z" fill="url(#radial-gradient-60)" />
                        <path d="M601,558.72a14.1,14.1,0,0,0-5.68-6.21l-15.4,9.74Z" fill="url(#New_Gradient_Swatch_copy_15-12)" />
                        <path d="M564.42,552.44a14,14,0,0,0-5.62,6.19l21.11,3.62Z" fill="url(#New_Gradient_Swatch_copy_15-13)" />
                        <path d="M579.91,562.25h0l5.59-13.34a34.29,34.29,0,0,0-11.3,0l5.71,13.36Z" fill="url(#New_Gradient_Swatch_copy_15-14)" />
                        <path d="M595.31,552.51a26.75,26.75,0,0,0-9.81-3.6l-5.59,13.34Z" fill="url(#radial-gradient-61)" />
                        <path d="M574.2,548.89a26.48,26.48,0,0,0-9.78,3.55l15.49,9.81Z" fill="url(#radial-gradient-62)" />
                      </g>
                      <path d="M591.25,569.43c-6.22,3.94-16.34,3.92-22.6,0s-6.29-10.37-.07-14.31,16.34-3.92,22.6,0S597.47,565.49,591.25,569.43Z" fill="url(#New_Gradient_Swatch_copy_15-15)" />
                      <path d="M589.36,568.24c-5.18,3.28-13.62,3.26-18.83,0s-5.25-8.64-.06-11.93,13.61-3.26,18.83,0S594.55,565,589.36,568.24Z" fill="url(#radial-gradient-63)" />
                      <path d="M595.26,571.91c-8.44,5.34-22.17,5.31-30.66-.06-4.21-2.67-6.35-6.15-6.4-9.64,0,3.57,2.09,7.38,6.4,10.11,8.49,5.38,22.22,5.41,30.66.06,4.26-2.69,6.35-6.48,6.3-10C601.52,565.82,599.42,569.27,595.26,571.91Z" fill="url(#Radial_Gradient_1-39)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <g>
                        <path d="M579.91,561.06l-19.34-3.32-2.49-2.22V561h0a9.24,9.24,0,0,0,.76,3.57Z" fill="url(#radial-gradient-64)" />
                        <path d="M565.67,563.45,558.84,558v6.64a14.21,14.21,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_24-7)" />
                        <path d="M601.75,561.07v-5.9l-2.19,2.59-19.65,3.3L601,564.68a9.17,9.17,0,0,0,.72-3.53Z" fill="url(#radial-gradient-65)" />
                        <path d="M596.87,562.58l-.26,1.34-16.7-2.86,15.5,9.81a14,14,0,0,0,5.62-6.19v-5.57Z" fill="url(#New_Gradient_Swatch_copy_24-8)" />
                        <path d="M588.4,566.43l-8.49-5.37,5.72,13.37a26.67,26.67,0,0,0,9.78-3.56v-6.53Z" fill="url(#radial-gradient-66)" />
                        <path d="M571.51,566.38l-7-3.32v7.75a26.92,26.92,0,0,0,9.81,3.59l5.58-13.34Z" fill="url(#radial-gradient-67)" />
                        <path d="M583.23,568.82l-3.32-7.76-3.25,7.76h-2.33v5.58a34.29,34.29,0,0,0,11.3,0v-5.61Z" fill="url(#New_Gradient_Swatch_copy_24-9)" />
                      </g>
                      <g>
                        <path d="M579.91,555.47l15.5,9.82A14,14,0,0,0,601,559.1l-21.12-3.63Z" fill="url(#New_Gradient_Swatch_copy_15-16)" />
                        <path d="M579.91,555.47,601,559.1a9,9,0,0,0,0-7.16l-21.08,3.53Z" fill="url(#radial-gradient-68)" />
                        <path d="M579.91,555.47,558.84,559a14.16,14.16,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_15-17)" />
                        <path d="M579.91,555.47l-15.39,9.75a26.75,26.75,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-69)" />
                        <path d="M574.33,568.82a34.29,34.29,0,0,0,11.3,0l-5.72-13.37Z" fill="url(#New_Gradient_Swatch_copy_15-18)" />
                        <path d="M579.91,555.47h0l5.72,13.37a26.66,26.66,0,0,0,9.78-3.55Z" fill="url(#radial-gradient-70)" />
                        <path d="M579.91,555.47l-21.11-3.62a9,9,0,0,0,0,7.16l21.07-3.54Z" fill="url(#radial-gradient-71)" />
                        <path d="M601,551.94a14.18,14.18,0,0,0-5.68-6.22l-15.4,9.75Z" fill="url(#New_Gradient_Swatch_copy_15-19)" />
                        <path d="M564.42,545.66a14,14,0,0,0-5.62,6.19l21.11,3.62Z" fill="url(#New_Gradient_Swatch_copy_15-20)" />
                        <path d="M579.91,555.47h0l5.59-13.34a34.29,34.29,0,0,0-11.3,0l5.71,13.37Z" fill="url(#New_Gradient_Swatch_copy_15-21)" />
                        <path d="M595.31,545.72a26.92,26.92,0,0,0-9.81-3.59l-5.59,13.34Z" fill="url(#radial-gradient-72)" />
                        <path d="M574.2,542.1a26.67,26.67,0,0,0-9.78,3.56l15.49,9.81Z" fill="url(#radial-gradient-73)" />
                      </g>
                      <path d="M591.25,562.65c-6.22,3.94-16.34,3.92-22.6,0s-6.29-10.37-.07-14.31,16.34-3.92,22.6,0S597.47,558.71,591.25,562.65Z" fill="url(#New_Gradient_Swatch_copy_15-22)" />
                      <path d="M589.36,561.46c-5.18,3.28-13.62,3.26-18.83,0s-5.25-8.64-.06-11.93,13.61-3.26,18.83,0S594.55,558.17,589.36,561.46Z" fill="url(#radial-gradient-74)" />
                      <path d="M595.26,565.13c-8.44,5.34-22.17,5.31-30.66-.06-4.21-2.67-6.35-6.15-6.4-9.64,0,3.56,2.09,7.38,6.4,10.11,8.49,5.38,22.22,5.41,30.66.06,4.26-2.69,6.35-6.48,6.3-10C601.52,559,599.42,562.49,595.26,565.13Z" fill="url(#Radial_Gradient_1-40)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <g>
                        <path d="M579.91,554.17l-19.34-3.32-2.49-2.22v5.51h0a9.15,9.15,0,0,0,.76,3.56Z" fill="url(#radial-gradient-75)" />
                        <path d="M565.67,556.56l-6.83-5.49v6.63a14.18,14.18,0,0,0,5.68,6.22l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_24-10)" />
                        <path d="M601.75,554.18v-5.91l-2.19,2.6-19.65,3.3L601,557.79a9.17,9.17,0,0,0,.72-3.53Z" fill="url(#radial-gradient-76)" />
                        <path d="M596.87,555.69l-.26,1.34-16.7-2.86,15.5,9.81a14,14,0,0,0,5.62-6.19v-5.57Z" fill="url(#New_Gradient_Swatch_copy_24-11)" />
                        <path d="M588.4,559.54l-8.49-5.37,5.72,13.37a26.67,26.67,0,0,0,9.78-3.56v-6.53Z" fill="url(#radial-gradient-77)" />
                        <path d="M571.51,559.49l-7-3.32v7.75a26.92,26.92,0,0,0,9.81,3.59l5.58-13.34Z" fill="url(#radial-gradient-78)" />
                        <path d="M583.23,561.93l-3.32-7.76-3.25,7.76h-2.33v5.58a34.29,34.29,0,0,0,11.3,0v-5.61Z" fill="url(#New_Gradient_Swatch_copy_24-12)" />
                      </g>
                      <g>
                        <path d="M579.91,548.58l15.5,9.81a13.93,13.93,0,0,0,5.62-6.18l-21.12-3.63Z" fill="url(#New_Gradient_Swatch_copy_15-23)" />
                        <path d="M579.91,548.58,601,552.21a9,9,0,0,0,0-7.16l-21.08,3.53Z" fill="url(#radial-gradient-79)" />
                        <path d="M579.91,548.58l-21.07,3.54a14.16,14.16,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_15-24)" />
                        <path d="M579.91,548.58l-15.39,9.75a26.75,26.75,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-80)" />
                        <path d="M574.33,561.93a34.29,34.29,0,0,0,11.3,0l-5.72-13.37Z" fill="url(#New_Gradient_Swatch_copy_15-25)" />
                        <path d="M579.91,548.58h0L585.63,562a26.49,26.49,0,0,0,9.78-3.56Z" fill="url(#radial-gradient-81)" />
                        <path d="M579.91,548.58,558.8,545a9,9,0,0,0,0,7.16l21.07-3.54Z" fill="url(#radial-gradient-82)" />
                        <path d="M601,545.05a14.18,14.18,0,0,0-5.68-6.22l-15.4,9.75Z" fill="url(#New_Gradient_Swatch_copy_15-26)" />
                        <path d="M564.42,538.77A14,14,0,0,0,558.8,545l21.11,3.62Z" fill="url(#New_Gradient_Swatch_copy_15-27)" />
                        <path d="M579.91,548.58h0l5.59-13.34a34.29,34.29,0,0,0-11.3,0l5.71,13.37Z" fill="url(#New_Gradient_Swatch_copy_15-28)" />
                        <path d="M595.31,538.83a26.92,26.92,0,0,0-9.81-3.59l-5.59,13.34Z" fill="url(#radial-gradient-83)" />
                        <path d="M574.2,535.21a26.67,26.67,0,0,0-9.78,3.56l15.49,9.81Z" fill="url(#radial-gradient-84)" />
                      </g>
                      <path d="M591.25,555.76c-6.22,3.94-16.34,3.92-22.6,0s-6.29-10.37-.07-14.31,16.34-3.92,22.6,0S597.47,551.82,591.25,555.76Z" fill="url(#New_Gradient_Swatch_copy_15-29)" />
                      <path d="M589.36,554.57c-5.18,3.28-13.62,3.26-18.83,0s-5.25-8.64-.06-11.93,13.61-3.26,18.83,0S594.55,551.28,589.36,554.57Z" fill="url(#radial-gradient-85)" />
                      <path d="M595.26,558.24c-8.44,5.34-22.17,5.31-30.66-.07-4.21-2.66-6.35-6.14-6.4-9.63,0,3.56,2.09,7.38,6.4,10.11,8.49,5.38,22.22,5.41,30.66.06,4.26-2.69,6.35-6.48,6.3-10C601.52,552.15,599.42,555.6,595.26,558.24Z" fill="url(#Radial_Gradient_1-41)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <g>
                        <path d="M579.91,547.42l-19.34-3.32-2.49-2.21v5.5h0a9.24,9.24,0,0,0,.76,3.57Z" fill="url(#radial-gradient-86)" />
                        <path d="M565.67,549.81l-6.83-5.49V551a14.16,14.16,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_24-13)" />
                        <path d="M601.75,547.43v-5.9l-2.19,2.6-19.65,3.29L601,551a9.13,9.13,0,0,0,.72-3.53Z" fill="url(#radial-gradient-87)" />
                        <path d="M596.87,549l-.26,1.34-16.7-2.87,15.5,9.81A13.9,13.9,0,0,0,601,551v-5.56Z" fill="url(#New_Gradient_Swatch_copy_24-14)" />
                        <path d="M588.4,552.79l-8.49-5.37,5.72,13.37a26.49,26.49,0,0,0,9.78-3.56V550.7Z" fill="url(#radial-gradient-88)" />
                        <path d="M571.51,552.74l-7-3.31v7.74a26.75,26.75,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-89)" />
                        <path d="M583.23,555.19l-3.32-7.77-3.25,7.77h-2.33v5.58a34.29,34.29,0,0,0,11.3,0v-5.6Z" fill="url(#New_Gradient_Swatch_copy_24-15)" />
                      </g>
                      <g>
                        <path d="M579.91,541.84l15.5,9.81a14,14,0,0,0,5.62-6.19l-21.12-3.62Z" fill="url(#New_Gradient_Swatch_copy_15-30)" />
                        <path d="M579.91,541.84,601,545.46a9,9,0,0,0,0-7.16l-21.08,3.54Z" fill="url(#radial-gradient-90)" />
                        <path d="M579.91,541.84l-21.07,3.54a14.21,14.21,0,0,0,5.68,6.21l15.39-9.75Z" fill="url(#New_Gradient_Swatch_copy_15-31)" />
                        <path d="M579.91,541.84l-15.39,9.75a26.93,26.93,0,0,0,9.81,3.6l5.58-13.35Z" fill="url(#radial-gradient-91)" />
                        <path d="M574.33,555.19a34.29,34.29,0,0,0,11.3,0l-5.72-13.37Z" fill="url(#New_Gradient_Swatch_copy_15-32)" />
                        <path d="M579.91,541.84h0l5.72,13.37a26.49,26.49,0,0,0,9.78-3.56Z" fill="url(#radial-gradient-92)" />
                        <path d="M579.91,541.84l-21.11-3.62a9,9,0,0,0,0,7.16l21.07-3.54Z" fill="url(#radial-gradient-93)" />
                        <path d="M601,538.3a14.21,14.21,0,0,0-5.68-6.21l-15.4,9.75Z" fill="url(#New_Gradient_Swatch_copy_15-33)" />
                        <path d="M564.42,532a14,14,0,0,0-5.62,6.19l21.11,3.62Z" fill="url(#New_Gradient_Swatch_copy_15-34)" />
                        <path d="M579.91,541.84h0l5.59-13.35a34.29,34.29,0,0,0-11.3,0l5.71,13.37Z" fill="url(#New_Gradient_Swatch_copy_15-35)" />
                        <path d="M595.31,532.09a26.93,26.93,0,0,0-9.81-3.6l-5.59,13.35Z" fill="url(#radial-gradient-94)" />
                        <path d="M574.2,528.47a26.49,26.49,0,0,0-9.78,3.56l15.49,9.81Z" fill="url(#radial-gradient-95)" />
                      </g>
                      <path d="M591.25,549c-6.22,3.94-16.34,3.92-22.6,0s-6.29-10.37-.07-14.31,16.34-3.92,22.6.05S597.47,545.08,591.25,549Z" fill="url(#New_Gradient_Swatch_copy_15-36)" />
                      <path d="M589.36,547.82c-5.18,3.29-13.62,3.27-18.83,0s-5.25-8.64-.06-11.92,13.61-3.27,18.83,0S594.55,544.54,589.36,547.82Z" fill="url(#radial-gradient-96)" />
                      <path d="M595.26,551.49c-8.44,5.35-22.17,5.32-30.66-.06-4.21-2.67-6.35-6.15-6.4-9.63,0,3.56,2.09,7.38,6.4,10.11,8.49,5.38,22.22,5.4,30.66.06,4.26-2.7,6.35-6.48,6.3-10C601.52,545.41,599.42,548.86,595.26,551.49Z" fill="url(#Radial_Gradient_1-42)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                  </g>
                </g>
                <g clipPath="url(#clip-path-7)">
                  <g id="bubblesleft" opacity="0.6">
                    <path d="M464.57,766.73a3.17,3.17,0,1,0,3.17-3.17A3.17,3.17,0,0,0,464.57,766.73Z" fill="#6de0f6" />
                    <path d="M438.41,745.46a5.42,5.42,0,1,0,5.42-5.42A5.42,5.42,0,0,0,438.41,745.46Z" fill="#6de0f6" />
                    <path d="M449.11,742a1.39,1.39,0,1,0,1.39-1.39A1.39,1.39,0,0,0,449.11,742Z" fill="#6de0f6" />
                    <circle cx="426.86" cy="714.81" r="2.71" fill="#6de0f6" />
                    <path d="M439.21,691.83a1.92,1.92,0,1,0,1.91-1.92A1.91,1.91,0,0,0,439.21,691.83Z" fill="#6de0f6" />
                    <path d="M461.1,677.16a3.47,3.47,0,1,0,3.47-3.47A3.47,3.47,0,0,0,461.1,677.16Z" fill="#6de0f6" />
                    <path d="M452.46,648.13a1.94,1.94,0,1,0,1.93-1.93A1.94,1.94,0,0,0,452.46,648.13Z" fill="#6de0f6" />
                    <path d="M437.5,661a2.28,2.28,0,1,0,2.28-2.27A2.28,2.28,0,0,0,437.5,661Z" fill="#6de0f6" />
                    <path d="M435.81,656.26a1.1,1.1,0,1,0,1.1-1.1A1.1,1.1,0,0,0,435.81,656.26Z" fill="#6de0f6" />
                    <path d="M421.5,632.58a3.19,3.19,0,1,0,3.18-3.18A3.18,3.18,0,0,0,421.5,632.58Z" fill="#6de0f6" />
                    <path d="M464.69,587.58a3.17,3.17,0,1,0,3.17-3.17A3.17,3.17,0,0,0,464.69,587.58Z" fill="#6de0f6" />
                    <path d="M438.54,566.31A5.42,5.42,0,1,0,444,560.9,5.42,5.42,0,0,0,438.54,566.31Z" fill="#6de0f6" />
                    <path d="M449.23,562.86a1.4,1.4,0,1,0,1.39-1.39A1.39,1.39,0,0,0,449.23,562.86Z" fill="#6de0f6" />
                    <circle cx="426.98" cy="535.66" r="2.71" fill="#6de0f6" />
                    <path d="M439.33,512.68a1.92,1.92,0,1,0,1.92-1.92A1.91,1.91,0,0,0,439.33,512.68Z" fill="#6de0f6" />
                    <path d="M461.22,498a3.47,3.47,0,1,0,3.47-3.47A3.47,3.47,0,0,0,461.22,498Z" fill="#6de0f6" />
                    <path d="M452.58,469a1.94,1.94,0,1,0,1.94-1.93A1.94,1.94,0,0,0,452.58,469Z" fill="#6de0f6" />
                    <path d="M437.62,481.86a2.28,2.28,0,1,0,2.28-2.27A2.28,2.28,0,0,0,437.62,481.86Z" fill="#6de0f6" />
                    <path d="M435.93,477.11A1.1,1.1,0,1,0,437,476,1.1,1.1,0,0,0,435.93,477.11Z" fill="#6de0f6" />
                    <path d="M421.62,453.43a3.19,3.19,0,1,0,3.19-3.18A3.18,3.18,0,0,0,421.62,453.43Z" fill="#6de0f6" />
                  </g>
                </g>
                <g clipPath="url(#clip-path-8)">
                  <g id="bubblesright" opacity="0.6">
                    <path d="M886.3,312.81a2.24,2.24,0,1,0,2.23-2.24A2.23,2.23,0,0,0,886.3,312.81Z" fill="#6de0f6" />
                    <path d="M867.86,297.82a3.82,3.82,0,1,0,3.82-3.82A3.82,3.82,0,0,0,867.86,297.82Z" fill="#6de0f6" />
                    <path d="M875.4,295.38a1,1,0,1,0,1-1A1,1,0,0,0,875.4,295.38Z" fill="#6de0f6" />
                    <circle cx="859.71" cy="276.21" r="1.91" fill="#6de0f6" />
                    <path d="M868.42,260a1.35,1.35,0,1,0,1.35-1.35A1.34,1.34,0,0,0,868.42,260Z" fill="#6de0f6" />
                    <path d="M883.85,249.68a2.45,2.45,0,1,0,2.45-2.45A2.45,2.45,0,0,0,883.85,249.68Z" fill="#6de0f6" />
                    <path d="M877.76,229.22a1.37,1.37,0,1,0,1.36-1.37A1.36,1.36,0,0,0,877.76,229.22Z" fill="#6de0f6" />
                    <path d="M867.22,238.3a1.61,1.61,0,1,0,1.6-1.61A1.6,1.6,0,0,0,867.22,238.3Z" fill="#6de0f6" />
                    <path d="M866,234.94a.78.78,0,0,0,.78.78.78.78,0,1,0-.78-.78Z" fill="#6de0f6" />
                    <path d="M855.94,218.25a2.25,2.25,0,1,0,2.24-2.24A2.24,2.24,0,0,0,855.94,218.25Z" fill="#6de0f6" />
                    <path d="M883.83,187.27a2.24,2.24,0,1,0,2.24-2.23A2.24,2.24,0,0,0,883.83,187.27Z" fill="#6de0f6" />
                    <path d="M865.4,172.28a3.82,3.82,0,1,0,3.82-3.82A3.82,3.82,0,0,0,865.4,172.28Z" fill="#6de0f6" />
                    <path d="M872.94,169.85a1,1,0,1,0,1-1A1,1,0,0,0,872.94,169.85Z" fill="#6de0f6" />
                    <circle cx="857.25" cy="150.68" r="1.91" fill="#6de0f6" />
                    <path d="M866,134.48a1.35,1.35,0,1,0,1.35-1.35A1.35,1.35,0,0,0,866,134.48Z" fill="#6de0f6" />
                    <path d="M881.39,124.14a2.45,2.45,0,1,0,2.44-2.44A2.45,2.45,0,0,0,881.39,124.14Z" fill="#6de0f6" />
                    <path d="M875.3,103.68a1.36,1.36,0,1,0,1.36-1.36A1.36,1.36,0,0,0,875.3,103.68Z" fill="#6de0f6" />
                    <path d="M864.75,112.76a1.61,1.61,0,1,0,3.21,0,1.61,1.61,0,0,0-3.21,0Z" fill="#6de0f6" />
                    <path d="M863.56,109.41a.78.78,0,0,0,1.55,0,.78.78,0,1,0-1.55,0Z" fill="#6de0f6" />
                    <path d="M853.48,92.72a2.24,2.24,0,1,0,2.24-2.24A2.24,2.24,0,0,0,853.48,92.72Z" fill="#6de0f6" />
                  </g>
                </g>
                <g>
                  <g opacity="0.2">
                    <path d="M810.49,644.78a8.84,8.84,0,0,1-4.4-1.06L759.47,616.8a4.64,4.64,0,0,1-2.53-4,5.43,5.43,0,0,1,3-4.57l54.31-31.93a10.76,10.76,0,0,1,5.34-1.36A8.74,8.74,0,0,1,824,576l46.62,26.92a4.64,4.64,0,0,1,2.53,4,5.43,5.43,0,0,1-3,4.57l-54.3,31.93A10.82,10.82,0,0,1,810.49,644.78Z" opacity={0} />
                    <path d="M813.63,577a10.48,10.48,0,0,1,5.28-1.32,9.68,9.68,0,0,1,2.76.4,8.3,8.3,0,0,1,1.58.69l46.07,26.6a5.09,5.09,0,0,1,2.64,3.85,5,5,0,0,1-2.81,4.53l-53.41,31.34a10.3,10.3,0,0,1-.94.47,11,11,0,0,1-4.31.89,8.58,8.58,0,0,1-4.32-1L760,616.72a5.12,5.12,0,0,1-2.65-3.86,5,5,0,0,1,2.81-4.52Z" opacity="0.09" />
                    <path d="M813,577.64a10.4,10.4,0,0,1,5.23-1.29,9.67,9.67,0,0,1,2.71.44,9.47,9.47,0,0,1,1.55.69L868,603.77a5.66,5.66,0,0,1,2.74,3.68,4.58,4.58,0,0,1-2.58,4.48l-52.51,30.74a9.94,9.94,0,0,1-.92.47,10.6,10.6,0,0,1-4.22.9,8.34,8.34,0,0,1-4.26-1L760.5,616.64a5.75,5.75,0,0,1-2.76-3.7,4.57,4.57,0,0,1,2.58-4.47Z" opacity="0.18" />
                    <path d="M812.31,578.32a10.21,10.21,0,0,1,5.17-1.25,9.26,9.26,0,0,1,2.67.46,11.15,11.15,0,0,1,1.52.7l45,26a6.49,6.49,0,0,1,2.86,3.52,4.19,4.19,0,0,1-2.35,4.42L815.54,642.3c-.22.13-.66.36-.9.47a10.52,10.52,0,0,1-4.14.9,8.15,8.15,0,0,1-4.18-.95L761,616.56c-1.17-.67-2.71-2.36-2.89-3.53a4.21,4.21,0,0,1,2.35-4.43Z" opacity="0.27" />
                    <path d="M811.65,579a10,10,0,0,1,5.11-1.21,9,9,0,0,1,2.63.49,11.47,11.47,0,0,1,1.5.7l44.43,25.66c1,.58,3,2.3,3,3.34.65,1.52-.13,3.24-2.12,4.38l-50.72,29.56c-.2.12-.68.37-.89.47a10.54,10.54,0,0,1-4.06.92,8,8,0,0,1-4.1-.93l-44.86-25.9c-1-.59-3-2.33-3-3.37-.66-1.52.13-3.24,2.12-4.38Z" opacity="0.36" />
                    <path d="M811,579.69a9.56,9.56,0,0,1,5-1.18,8.63,8.63,0,0,1,2.59.51,15.39,15.39,0,0,1,1.47.71L864,605.07c.87.51,3.07,2.29,3.07,3.18.82,1.44.12,3.18-1.88,4.33l-49.83,29c-.17.09-.7.38-.88.46a10.1,10.1,0,0,1-4,.93,7.86,7.86,0,0,1-4-.89L762.05,616.4c-.87-.51-3.13-2.32-3.12-3.21-.82-1.45-.12-3.18,1.88-4.33Z" opacity="0.45" />
                    <path d="M810.34,580.37a9.38,9.38,0,0,1,5-1.14,8.3,8.3,0,0,1,2.54.54,16,16,0,0,1,1.44.71l43.34,25c.73.43,3.19,2.27,3.19,3,1,1.38.36,3.13-1.66,4.29l-48.93,28.38c-.14.07-.71.39-.86.46a10.06,10.06,0,0,1-3.88.93,7.61,7.61,0,0,1-4-.86l-44-25.39c-.73-.42-3.25-2.3-3.25-3-1-1.38-.35-3.13,1.66-4.3Z" opacity="0.55" />
                    <path d="M809.68,581.05a9.26,9.26,0,0,1,4.93-1.11,8.47,8.47,0,0,1,2.51.57c.2.08,1.23.62,1.41.72l42.79,24.71c.58.34,3.3,2.24,3.3,2.84,1.15,1.31.6,3.07-1.43,4.24l-48,27.78-.84.46a9.67,9.67,0,0,1-3.8.94,7.37,7.37,0,0,1-3.88-.82l-43.54-25.14c-.59-.34-3.37-2.29-3.37-2.88-1.15-1.31-.6-3.08,1.43-4.25Z" opacity="0.64" />
                    <path d="M809,581.73a9,9,0,0,1,4.87-1.07,8.44,8.44,0,0,1,2.47.59c.15.06,1.25.66,1.38.73L860,606.37c.43.26,3.41,2.23,3.41,2.67,1.31,1.25.84,3-1.2,4.2l-47.15,27.19-.82.45a9.64,9.64,0,0,1-3.72,1,7.09,7.09,0,0,1-3.8-.79L763.6,616.16c-.43-.26-3.49-2.27-3.49-2.72-1.31-1.24-.84-3,1.2-4.2Z" opacity="0.73" />
                    <path d="M808.37,582.41a8.73,8.73,0,0,1,4.8-1,7.74,7.74,0,0,1,2.43.62c.1,0,1.26.68,1.35.73l41.7,24.08c.29.17,3.52,2.2,3.52,2.5,1.48,1.17,1.09,3-1,4.15L815,640.05c-.06,0-.76.43-.82.45a9.4,9.4,0,0,1-3.63,1,7,7,0,0,1-3.72-.76l-42.67-24.64c-.29-.16-3.61-2.25-3.61-2.55-1.47-1.17-1.09-3,1-4.15Z" opacity="0.82" />
                    <path d="M807.71,583.1a8.5,8.5,0,0,1,4.75-1,7.77,7.77,0,0,1,2.38.64l1.32.74,41.16,23.76c.14.09,3.63,2.19,3.63,2.33,1.64,1.11,1.33,2.92-.74,4.11l-45.35,26-.8.45a9.31,9.31,0,0,1-3.55,1,6.82,6.82,0,0,1-3.64-.72L764.64,616c-.15-.08-3.73-2.23-3.73-2.38-1.64-1.11-1.34-2.92.73-4.11Z" opacity="0.91" />
                    <path d="M807,640,761.3,613.69c-1.8-1-1.57-2.86.51-4.06l45.24-25.85a7.82,7.82,0,0,1,7-.29l45.65,26.35c1.8,1,1.57,2.86-.51,4.06L814,639.75A7.82,7.82,0,0,1,807,640Z" />
                  </g>
                  <polygon points="759.8 558.34 809.37 587.21 858.75 558.39 809.12 529.5 759.8 558.34" fill="url(#linear-gradient-113)" />
                  <polygon points="759.8 500.43 809.37 529.29 858.75 500.48 809.12 471.58 759.8 500.43" fill="url(#linear-gradient-114)" />
                  <g>
                    <polygon points="809.34 576.89 809.34 584.97 855.25 558.2 855.25 550.12 809.34 576.89" fill="url(#New_Gradient_Swatch_copy_26-7)" />
                    <polygon points="809.36 576.89 809.36 584.97 763.3 558.12 763.3 550.07 809.36 576.89" fill="url(#linear-gradient-115)" />
                  </g>
                  <g>
                    <polygon points="809.37 608.37 839.55 591.34 844.97 580.75 858.75 573.85 858.75 558.39 809.36 587.21 809.37 587.21 809.37 608.37" fill="url(#New_Gradient_Swatch_copy_25-41)" />
                    <polygon points="800.63 604.15 809 608.58 809.34 608.39 809.34 587.21 809.36 587.21 759.8 558.34 759.8 593.32 780.93 604.92 800.63 604.15" fill="url(#New_Gradient_Swatch_copy_25-42)" />
                    <polygon points="809.34 608.39 809.37 608.37 809.37 587.21 809.36 587.21 809.34 587.21 809.34 608.39" fill="url(#New_Gradient_Swatch_copy_25-43)" />
                    <polygon points="809.34 608.39 809.37 608.37 809.37 587.21 809.36 587.21 809.34 587.21 809.34 608.39" fill="url(#New_Gradient_Swatch_copy_25-44)" />
                    <polygon points="809.34 636.23 809.36 636.22 809.34 636.22 809.34 636.23" fill="url(#New_Gradient_Swatch_copy_25-45)" />
                    <polygon points="809.34 636.23 809.36 636.22 809.34 636.22 809.34 636.23" fill="url(#linear-gradient-116)" />
                    <polygon points="839.55 591.34 809.37 608.37 809.37 636.22 858.75 607.5 858.75 573.85 844.97 580.75 839.55 591.34" fill="url(#New_Gradient_Swatch_copy_26-8)" />
                    <polygon points="839.55 593.8 809.37 610.84 809.37 638.68 858.75 609.97 858.75 576.32 844.97 583.21 839.55 593.8" fill="url(#New_Gradient_Swatch_copy_25-41)" />
                    <polygon points="809.37 636.23 809.37 636.22 809.36 636.22 809.37 636.23" fill="url(#New_Gradient_Swatch_copy_25-47)" />
                    <polygon points="809.37 636.23 809.37 636.22 809.36 636.22 809.37 636.23" fill="url(#linear-gradient-117)" />
                    <polygon points="809.34 636.22 809.34 608.39 809 608.58 800.63 604.15 780.93 604.92 759.8 593.32 759.8 607.42 809.34 636.22" fill="url(#linear-gradient-115)" />
                    <polygon points="809.34 638.68 809.34 610.85 809 611.04 800.63 606.61 780.93 607.39 759.8 595.78 759.8 609.89 809.34 638.68" fill="url(#New_Gradient_Swatch_copy_25-42)" />
                    <polygon points="809 609.85 800.63 605.41 780.93 606.19 759.8 594.59 759.8 596.38 780.93 607.98 800.63 607.21 809 611.64 809.34 611.45 809.34 609.66 809 609.85" fill="url(#radial-gradient-97)" style={{mixBlendMode: 'color-dodge'}} />
                    <polygon points="809.34 608.39 809.34 636.22 809.36 636.22 809.37 636.22 809.37 608.37 809.34 608.39" fill="url(#New_Gradient_Swatch_copy_25-49)" />
                    <polygon points="809.34 608.39 809.34 636.22 809.36 636.22 809.37 636.22 809.37 608.37 809.34 608.39" fill="url(#New_Gradient_Swatch_copy_25-50)" />
                    <polygon points="809.34 608.39 809.34 636.22 809.36 636.22 809.37 636.22 809.37 608.37 809.34 608.39" fill="url(#linear-gradient-119)" />
                  </g>
                  <g>
                    <polygon points="809.18 550.29 779 533.26 773.58 522.66 759.8 515.77 759.8 500.31 809.19 529.12 809.18 529.13 809.18 550.29" fill="url(#New_Gradient_Swatch_copy_25-42)" />
                    <polygon points="817.92 546.06 809.54 550.5 809.21 550.31 809.21 529.13 809.19 529.12 858.75 500.26 858.75 540.62 837.62 552.22 817.92 546.06" fill="url(#New_Gradient_Swatch_copy_25-41)" />
                    <polygon points="809.21 550.31 809.18 550.29 809.18 529.13 809.19 529.12 809.21 529.13 809.21 550.31" fill="url(#New_Gradient_Swatch_copy_25-53)" />
                    <polygon points="809.21 550.31 809.18 550.29 809.18 529.13 809.19 529.12 809.21 529.13 809.21 550.31" fill="url(#New_Gradient_Swatch_copy_25-54)" />
                    <polygon points="809.21 578.15 809.19 578.14 809.21 578.13 809.21 578.15" fill="url(#New_Gradient_Swatch_copy_25-55)" />
                    <polygon points="809.21 578.15 809.19 578.14 809.21 578.13 809.21 578.15" fill="url(#linear-gradient-120)" />
                    <polygon points="779 533.26 809.18 550.29 809.18 578.13 759.8 549.42 759.8 515.77 773.58 522.66 779 533.26" fill="url(#linear-gradient-115)" />
                    <polygon points="779 535.72 809.18 552.75 809.18 580.6 759.8 551.89 759.8 518.24 773.58 525.13 779 535.72" fill="url(#New_Gradient_Swatch_copy_25-42)" />
                    <polygon points="779 534.52 773.58 523.93 759.8 517.04 759.8 518.98 773.58 525.88 779 536.47 809.18 553.5 809.18 551.56 779 534.52" fill="url(#radial-gradient-98)" style={{mixBlendMode: 'color-dodge'}} />
                    <polygon points="809.18 578.15 809.18 578.13 809.19 578.14 809.18 578.15" fill="url(#New_Gradient_Swatch_copy_25-57)" />
                    <polygon points="809.18 578.15 809.18 578.13 809.19 578.14 809.18 578.15" fill="url(#linear-gradient-122)" />
                    <polygon points="809.21 578.13 809.21 550.31 809.54 550.5 817.92 546.06 837.62 552.22 858.75 540.62 858.75 549.34 809.21 578.13" fill="url(#New_Gradient_Swatch_copy_26-8)" />
                    <polygon points="809.21 580.6 809.21 552.77 809.54 552.96 817.92 548.53 837.62 554.68 858.75 543.08 858.75 551.8 809.21 580.6" fill="url(#New_Gradient_Swatch_copy_25-41)" />
                    <polygon points="809.21 550.31 809.21 578.13 809.19 578.14 809.18 578.13 809.18 550.29 809.21 550.31" fill="url(#New_Gradient_Swatch_copy_25-59)" />
                    <polygon points="809.21 550.31 809.21 578.13 809.19 578.14 809.18 578.13 809.18 550.29 809.21 550.31" fill="url(#New_Gradient_Swatch_copy_25-60)" />
                    <polygon points="809.21 550.31 809.21 578.13 809.19 578.14 809.18 578.13 809.18 550.29 809.21 550.31" fill="url(#linear-gradient-123)" />
                  </g>
                  <polygon points="809.34 633.68 809.34 638.93 858.75 610.11 858.75 604.87 809.34 633.68" fill="#a7a9ac" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="809.37 633.68 809.37 638.93 759.8 610.03 759.8 604.81 809.37 633.68" fill="#a7a9ac" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="809.34 635 809.34 642.63 858.75 613.82 858.75 606.18 809.34 635" fill="url(#linear-gradient-124)" />
                  <polygon points="809.37 635 809.37 642.63 759.8 613.74 759.8 606.13 809.37 635" fill="url(#linear-gradient-125)" />
                  <polygon points="809.34 644.12 809.34 650.56 858.75 621.75 858.75 615.3 809.34 644.12" opacity="0.15" fill="url(#linear-gradient-126)" />
                  <polygon points="809.37 644.12 809.37 650.56 759.8 621.66 759.8 615.25 809.37 644.12" opacity="0.15" fill="url(#linear-gradient-127)" />
                  <polygon points="771.49 500.15 809.01 522.01 847.05 500.13 809.48 478.25 771.49 500.15" fill="url(#New_Gradient_Swatch_copy_26-10)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <polygon points="790.47 511.14 809.14 522.01 828.06 511.12 809.37 500.24 790.47 511.14" fill="url(#Radial_Gradient_1-43)" />
                  </g>
                  <g>
                    <polygon points="809.22 475.73 809.22 434.8 766.15 459.92 766.15 500.85 809.22 475.73" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_26-11)" />
                    <polygon points="809.2 475.73 809.2 434.8 852.41 459.99 852.41 500.9 809.2 475.73" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_7-3)" />
                  </g>
                  <g>
                    <polygon points="809.34 484.98 809.34 525.91 852.41 500.79 852.41 459.85 809.34 484.98" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_26-12)" />
                    <polygon points="809.36 484.98 809.36 525.91 766.15 500.72 766.15 459.81 809.36 484.98" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_7-4)" style={{mixBlendMode: 'color-dodge'}} />
                  </g>
                  <g id="cube">
                    <g>
                      <polygon points="809.15 486.02 809.15 511.7 832.91 497.58 832.9 471.7 809.15 486.02" fill="url(#Безымянный_градиент_562)" />
                      <polygon points="809.18 486.02 809.18 511.7 785.67 498.13 785.66 472.25 809.18 486.02" fill="url(#Безымянный_градиент_562-2)" />
                      <polygon points="785.66 472.25 809.18 486.02 832.9 471.7 809.34 458 785.66 472.25" fill="url(#Безымянный_градиент_562-3)" />
                    </g>
                    <g id="second2">
                      <g>
                        <path d="M823,488.11c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.41,5.41,0,0,0,823,488.11Z" fill="#e2bdac" />
                        <path d="M822.59,487.81c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.4,5.4,0,0,0,822.59,487.81Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M817.21,498.75c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,817.21,498.75Z" fill="#e2bdac" />
                        <path d="M816.79,498.46c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,816.79,498.46Z" fill="#fff" />
                      </g>
                    </g>
                    <g id="second1">
                      <g>
                        <path d="M816.37,491.45c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,816.37,491.45Z" fill="#e2bdac" />
                        <path d="M816,491.16c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,816,491.16Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M824,495.46c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,824,495.46Z" fill="#e2bdac" />
                        <path d="M823.6,495.17c0,1.55,1.09,2.17,2.44,1.39a5.39,5.39,0,0,0,2.44-4.22c0-1.55-1.09-2.17-2.44-1.39A5.39,5.39,0,0,0,823.6,495.17Z" fill="#fff" />
                      </g>
                    </g>
                    <g id="threeup">
                      <g>
                        <path d="M812,465.71a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.44,463.52,813.44,464.87,812,465.71Z" fill="#e2bdac" />
                        <path d="M812,466.33a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.46,464.14,813.47,465.49,812,466.33Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M813,479.08a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C814.47,476.89,814.47,478.24,813,479.08Z" fill="#e2bdac" />
                        <path d="M813.05,479.7a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C814.49,477.51,814.5,478.86,813.05,479.7Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M812.34,472.54a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.78,470.35,813.78,471.7,812.34,472.54Z" fill="#e2bdac" />
                        <path d="M812.36,473.16a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.8,471,813.81,472.32,812.36,473.16Z" fill="#fff" />
                      </g>
                    </g>
                    <g id="one">
                      <path d="M812.34,472.54a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.78,470.35,813.78,471.7,812.34,472.54Z" fill="#e2bdac" />
                      <path d="M812.36,473.16a5.81,5.81,0,0,1-5.25,0c-1.45-.84-1.46-2.19,0-3a5.81,5.81,0,0,1,5.25,0C813.8,471,813.81,472.32,812.36,473.16Z" fill="#fff" />
                    </g>
                    <g id="four">
                      <g>
                        <path d="M792.4,482.81c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,792.4,482.81Z" fill="#e2bdac" />
                        <path d="M792.89,482.42c0,1.55-1.09,2.17-2.44,1.39A5.39,5.39,0,0,1,788,479.6c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,792.89,482.42Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M804.91,504.09c0,1.55-1.09,2.17-2.44,1.39a5.42,5.42,0,0,1-2.45-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,804.91,504.09Z" fill="#e2bdac" />
                        <path d="M805.39,503.7c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,805.39,503.7Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M792.16,497.77c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,792.16,497.77Z" fill="#e2bdac" />
                        <path d="M792.64,497.38c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,792.64,497.38Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M805.39,489.52c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,805.39,489.52Z" fill="#e2bdac" />
                        <path d="M805.88,489.13c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,805.88,489.13Z" fill="#fff" />
                      </g>
                    </g>
                    <g id="threeleft">
                      <g>
                        <path d="M792.4,482.81c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,792.4,482.81Z" fill="#e2bdac" />
                        <path d="M792.89,482.42c0,1.55-1.09,2.17-2.44,1.39A5.39,5.39,0,0,1,788,479.6c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,792.89,482.42Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M804.91,504.09c0,1.55-1.09,2.17-2.44,1.39a5.42,5.42,0,0,1-2.45-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,804.91,504.09Z" fill="#e2bdac" />
                        <path d="M805.39,503.7c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.38,5.38,0,0,1,805.39,503.7Z" fill="#fff" />
                      </g>
                      <g>
                        <path d="M798.21,493.45c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,798.21,493.45Z" fill="#e2bdac" />
                        <path d="M798.69,493.06c0,1.55-1.09,2.17-2.44,1.39a5.39,5.39,0,0,1-2.44-4.21c0-1.55,1.09-2.17,2.44-1.39A5.35,5.35,0,0,1,798.69,493.06Z" fill="#fff" />
                      </g>
                    </g>
                    <polygon points="809.19 511.92 809.72 486.48 832.91 471.9 809.01 485.33 785.67 472.45 808.23 486.4 809.19 511.92" fill="url(#Безымянный_градиент_563)" />
                  </g>
                  <path d="M809.15,434.83l-42.84,25.05L809.36,485l42.89-25Zm.21,46.48-36.81-21.43,36.6-21.41L846,459.93Z" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_26-13)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M809.15,434.83l-42.84,25.05L809.36,485l42.89-25Zm.21,46.48-36.81-21.43,36.6-21.41L846,459.93Z" opacity="0.5" fill="url(#New_Gradient_Swatch_copy_26-13)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="809.32 519 809.95 485.09 851.8 460.31 809.4 484.49 767.55 460.71 808.92 485.33 809.32 519" fill="url(#radial-gradient-99)" style={{mixBlendMode: 'color-dodge'}} />
                  <polygon points="831.48 411.41 809.19 398.43 787.04 411.39 787.04 473.41 809.11 486.26 831.48 473.39 831.48 411.41" fill="url(#linear-gradient-128)" style={{mixBlendMode: 'screen'}} />
                  <polygon points="820.75 388.29 809.35 381.65 798.02 388.27 798.02 474.53 809.31 481.1 820.75 474.52 820.75 388.29" opacity="0.5" fill="url(#linear-gradient-129)" style={{mixBlendMode: 'screen'}} />
                  <polygon points="809.18 529.13 809.18 642.11 759.8 614.65 759.8 500.31 809.18 529.13" fill="url(#linear-gradient-130)" style={{mixBlendMode: 'color-dodge'}} />
                  <g>
                    <g>
                      <g opacity="0.5" style={{mixBlendMode: 'multiply'}}>
                        <path d="M845.39,601.54,825.65,613c-.71.41-1.28,0-1.28-1v-.71a3,3,0,0,1,1.28-2.44l19.74-11.41c.71-.41,1.28,0,1.28,1v.72A3.05,3.05,0,0,1,845.39,601.54Z" fill="#25054d" />
                      </g>
                      <g clipPath="url(#clip-path-9)">
                        <rect x="824.6" y="597.15" width="16.27" height="16.05" fill="#45108a" />
                        <rect x="840.87" y="597.15" width="0.11" height="16.05" fill="#45108a" />
                        <rect x="840.98" y="597.15" width="0.11" height="16.05" fill="#45118a" />
                        <rect x="841.09" y="597.15" width="0.11" height="16.05" fill="#44128b" />
                        <rect x="841.19" y="597.15" width="0.11" height="16.05" fill="#44138b" />
                        <rect x="841.3" y="597.15" width="0.11" height="16.05" fill="#44148c" />
                        <rect x="841.41" y="597.15" width="0.11" height="16.05" fill="#44158c" />
                        <rect x="841.52" y="597.15" width="0.11" height="16.05" fill="#43168d" />
                        <rect x="841.62" y="597.15" width="0.11" height="16.05" fill="#43178d" />
                        <rect x="841.73" y="597.15" width="0.11" height="16.05" fill="#43188e" />
                        <rect x="841.84" y="597.15" width="0.11" height="16.05" fill="#43198e" />
                        <rect x="841.95" y="597.15" width="0.11" height="16.05" fill="#421a8f" />
                        <rect x="842.05" y="597.15" width="0.11" height="16.05" fill="#421b8f" />
                        <rect x="842.16" y="597.15" width="0.11" height="16.05" fill="#421d90" />
                        <rect x="842.27" y="597.15" width="0.11" height="16.05" fill="#411e90" />
                        <rect x="842.37" y="597.15" width="0.11" height="16.05" fill="#411f91" />
                        <rect x="842.48" y="597.15" width="0.11" height="16.05" fill="#412091" />
                        <rect x="842.59" y="597.15" width="0.11" height="16.05" fill="#412192" />
                        <rect x="842.7" y="597.15" width="0.11" height="16.05" fill="#402292" />
                        <rect x="842.8" y="597.15" width="0.11" height="16.05" fill="#402393" />
                        <rect x="842.91" y="597.15" width="0.11" height="16.05" fill="#402493" />
                        <rect x="843.02" y="597.15" width="0.11" height="16.05" fill="#402594" />
                        <rect x="843.13" y="597.15" width="0.11" height="16.05" fill="#3f2694" />
                        <rect x="843.23" y="597.15" width="0.11" height="16.05" fill="#3f2795" />
                        <rect x="843.34" y="597.15" width="0.11" height="16.05" fill="#3f2895" />
                        <rect x="843.45" y="597.15" width="0.11" height="16.05" fill="#3f2996" />
                        <rect x="843.56" y="597.15" width="0.11" height="16.05" fill="#3e2a96" />
                        <rect x="843.66" y="597.15" width="0.11" height="16.05" fill="#3e2b97" />
                        <rect x="843.77" y="597.15" width="0.11" height="16.05" fill="#3e2c97" />
                        <rect x="843.88" y="597.15" width="0.11" height="16.05" fill="#3d2d97" />
                        <rect x="843.98" y="597.15" width="0.11" height="16.05" fill="#3d2e98" />
                        <rect x="844.09" y="597.15" width="0.11" height="16.05" fill="#3d2f98" />
                        <rect x="844.2" y="597.15" width="0.11" height="16.05" fill="#3d3099" />
                        <rect x="844.31" y="597.15" width="0.11" height="16.05" fill="#3c3199" />
                        <rect x="844.41" y="597.15" width="0.11" height="16.05" fill="#3c329a" />
                        <rect x="844.52" y="597.15" width="0.11" height="16.05" fill="#3c339a" />
                        <rect x="844.63" y="597.15" width="0.11" height="16.05" fill="#3c349b" />
                        <rect x="844.74" y="597.15" width="0.11" height="16.05" fill="#3b359b" />
                        <rect x="844.84" y="597.15" width="0.11" height="16.05" fill="#3b369c" />
                        <rect x="844.95" y="597.15" width="0.11" height="16.05" fill="#3b379c" />
                        <rect x="845.06" y="597.15" width="0.11" height="16.05" fill="#3b389d" />
                        <rect x="845.17" y="597.15" width="0.11" height="16.05" fill="#3a399d" />
                        <rect x="845.27" y="597.15" width="0.11" height="16.05" fill="#3a3a9e" />
                        <rect x="845.38" y="597.15" width="0.11" height="16.05" fill="#3a3b9e" />
                        <rect x="845.49" y="597.15" width="0.11" height="16.05" fill="#3a3c9f" />
                        <rect x="845.59" y="597.15" width="0.11" height="16.05" fill="#393d9f" />
                        <rect x="845.7" y="597.15" width="0.11" height="16.05" fill="#393e9f" />
                        <rect x="845.81" y="597.15" width="0.11" height="16.05" fill="#393fa0" />
                        <rect x="845.92" y="597.15" width="0.11" height="16.05" fill="#3840a0" />
                        <rect x="846.02" y="597.15" width="0.11" height="16.05" fill="#3841a1" />
                        <rect x="846.13" y="597.15" width="0.11" height="16.05" fill="#3842a1" />
                        <rect x="846.24" y="597.15" width="0.11" height="16.05" fill="#3843a2" />
                        <rect x="846.35" y="597.15" width="0.11" height="16.05" fill="#3744a2" />
                        <rect x="846.45" y="597.15" width="0.11" height="16.05" fill="#3745a3" />
                        <rect x="846.56" y="597.15" width="0.11" height="16.05" fill="#3746a3" />
                      </g>
                    </g>
                    <g>
                      <g opacity="0.5" style={{mixBlendMode: 'multiply'}}>
                        <path d="M845.39,608.35l-19.74,11.41c-.71.41-1.28,0-1.28-1v-.72a3.05,3.05,0,0,1,1.28-2.44l19.74-11.41c.71-.41,1.28,0,1.28,1v.71A3,3,0,0,1,845.39,608.35Z" fill="#25054d" />
                      </g>
                      <g clipPath="url(#clip-path-10)">
                        <rect x="824.6" y="603.96" width="16.27" height="16.05" fill="#45108a" />
                        <rect x="840.87" y="603.96" width="0.11" height="16.05" fill="#45108a" />
                        <rect x="840.98" y="603.96" width="0.11" height="16.05" fill="#45118a" />
                        <rect x="841.09" y="603.96" width="0.11" height="16.05" fill="#44128b" />
                        <rect x="841.19" y="603.96" width="0.11" height="16.05" fill="#44138b" />
                        <rect x="841.3" y="603.96" width="0.11" height="16.05" fill="#44148c" />
                        <rect x="841.41" y="603.96" width="0.11" height="16.05" fill="#44158c" />
                        <rect x="841.52" y="603.96" width="0.11" height="16.05" fill="#43168d" />
                        <rect x="841.62" y="603.96" width="0.11" height="16.05" fill="#43178d" />
                        <rect x="841.73" y="603.96" width="0.11" height="16.05" fill="#43188e" />
                        <rect x="841.84" y="603.96" width="0.11" height="16.05" fill="#43198e" />
                        <rect x="841.95" y="603.96" width="0.11" height="16.05" fill="#421a8f" />
                        <rect x="842.05" y="603.96" width="0.11" height="16.05" fill="#421b8f" />
                        <rect x="842.16" y="603.96" width="0.11" height="16.05" fill="#421d90" />
                        <rect x="842.27" y="603.96" width="0.11" height="16.05" fill="#411e90" />
                        <rect x="842.37" y="603.96" width="0.11" height="16.05" fill="#411f91" />
                        <rect x="842.48" y="603.96" width="0.11" height="16.05" fill="#412091" />
                        <rect x="842.59" y="603.96" width="0.11" height="16.05" fill="#412192" />
                        <rect x="842.7" y="603.96" width="0.11" height="16.05" fill="#402292" />
                        <rect x="842.8" y="603.96" width="0.11" height="16.05" fill="#402393" />
                        <rect x="842.91" y="603.96" width="0.11" height="16.05" fill="#402493" />
                        <rect x="843.02" y="603.96" width="0.11" height="16.05" fill="#402594" />
                        <rect x="843.13" y="603.96" width="0.11" height="16.05" fill="#3f2694" />
                        <rect x="843.23" y="603.96" width="0.11" height="16.05" fill="#3f2795" />
                        <rect x="843.34" y="603.96" width="0.11" height="16.05" fill="#3f2895" />
                        <rect x="843.45" y="603.96" width="0.11" height="16.05" fill="#3f2996" />
                        <rect x="843.56" y="603.96" width="0.11" height="16.05" fill="#3e2a96" />
                        <rect x="843.66" y="603.96" width="0.11" height="16.05" fill="#3e2b97" />
                        <rect x="843.77" y="603.96" width="0.11" height="16.05" fill="#3e2c97" />
                        <rect x="843.88" y="603.96" width="0.11" height="16.05" fill="#3d2d97" />
                        <rect x="843.98" y="603.96" width="0.11" height="16.05" fill="#3d2e98" />
                        <rect x="844.09" y="603.96" width="0.11" height="16.05" fill="#3d2f98" />
                        <rect x="844.2" y="603.96" width="0.11" height="16.05" fill="#3d3099" />
                        <rect x="844.31" y="603.96" width="0.11" height="16.05" fill="#3c3199" />
                        <rect x="844.41" y="603.96" width="0.11" height="16.05" fill="#3c329a" />
                        <rect x="844.52" y="603.96" width="0.11" height="16.05" fill="#3c339a" />
                        <rect x="844.63" y="603.96" width="0.11" height="16.05" fill="#3c349b" />
                        <rect x="844.74" y="603.96" width="0.11" height="16.05" fill="#3b359b" />
                        <rect x="844.84" y="603.96" width="0.11" height="16.05" fill="#3b369c" />
                        <rect x="844.95" y="603.96" width="0.11" height="16.05" fill="#3b379c" />
                        <rect x="845.06" y="603.96" width="0.11" height="16.05" fill="#3b389d" />
                        <rect x="845.17" y="603.96" width="0.11" height="16.05" fill="#3a399d" />
                        <rect x="845.27" y="603.96" width="0.11" height="16.05" fill="#3a3a9e" />
                        <rect x="845.38" y="603.96" width="0.11" height="16.05" fill="#3a3b9e" />
                        <rect x="845.49" y="603.96" width="0.11" height="16.05" fill="#3a3c9f" />
                        <rect x="845.59" y="603.96" width="0.11" height="16.05" fill="#393d9f" />
                        <rect x="845.7" y="603.96" width="0.11" height="16.05" fill="#393e9f" />
                        <rect x="845.81" y="603.96" width="0.11" height="16.05" fill="#393fa0" />
                        <rect x="845.92" y="603.96" width="0.11" height="16.05" fill="#3840a0" />
                        <rect x="846.02" y="603.96" width="0.11" height="16.05" fill="#3841a1" />
                        <rect x="846.13" y="603.96" width="0.11" height="16.05" fill="#3842a1" />
                        <rect x="846.24" y="603.96" width="0.11" height="16.05" fill="#3843a2" />
                        <rect x="846.35" y="603.96" width="0.11" height="16.05" fill="#3744a2" />
                        <rect x="846.45" y="603.96" width="0.11" height="16.05" fill="#3745a3" />
                        <rect x="846.56" y="603.96" width="0.11" height="16.05" fill="#3746a3" />
                      </g>
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <ellipse cx="256.18" cy="585.88" rx="30.91" ry="17.29" fill="url(#radial-gradient-100)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M277.49,578.48h-50v8.45c0,8.81,11.18,16,25,16s25-7.14,25-16c0-.08,0-.15,0-.22h0Z" fill="url(#linear-gradient-131)" />
                      <ellipse cx="252.52" cy="578.59" rx="24.97" ry="15.95" fill="url(#linear-gradient-132)" />
                      <g>
                        <path d="M227.54,588.37v.11s0-.08,0-.11Z" fill="url(#linear-gradient-133)" />
                        <path d="M277.48,588.37s0,.07,0,.11v-.11Z" fill="url(#linear-gradient-134)" />
                      </g>
                      <path d="M252.52,594.47c-13.65,0-24.72-7-25-15.66a2.64,2.64,0,0,0,0,.28c0,8.81,11.18,15.95,25,15.95s25-7.14,25-15.95a2.64,2.64,0,0,0,0-.28C277.24,587.49,266.16,594.47,252.52,594.47Z" fill="url(#radial-gradient-101)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M269.41,581.22v6.47q6.93-4.4,6.9-10.61v-6.47Q276.34,576.84,269.41,581.22Z" fill="url(#linear-gradient-135)" />
                      <path d="M258.66,583.36l-6.07-13.44,0,9.51h0l0,1-8.5,0-15.23-9.64V577c0,8.3,10.7,15,23.8,15.07q9.82,0,16.75-4.36v-7.13Z" fill="url(#linear-gradient-136)" />
                      <path d="M252.59,571l-23.73,0c0-8.3,10.55-15,23.65-15s23.76,6.77,23.8,15.07q0,6.22-6.9,10.61Z" fill="url(#linear-gradient-137)" />
                      <path d="M269.41,581.52l-16.82-10.66,0,0-23.71,0c0,8.3,10.7,15,23.8,15.07v0h0Q262.48,585.91,269.41,581.52Z" fill="url(#linear-gradient-138)" />
                    </g>
                    <g>
                      <path d="M277.49,563.49h-50v8.45c0,8.81,11.18,15.95,25,15.95s25-7.14,25-15.95c0-.08,0-.15,0-.22h0Z" fill="url(#linear-gradient-139)" />
                      <ellipse cx="252.52" cy="563.6" rx="24.97" ry="15.95" fill="url(#linear-gradient-140)" />
                      <path d="M252.52,579.48c-13.65,0-24.72-7-25-15.66a2.83,2.83,0,0,0,0,.29c0,8.8,11.18,15.95,25,15.95s25-7.15,25-15.95a2.83,2.83,0,0,0,0-.29C277.24,572.5,266.16,579.48,252.52,579.48Z" fill="url(#radial-gradient-102)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M235.76,566.16v6.46q-6.93-4.38-6.9-10.61v-6.46Q228.83,561.78,235.76,566.16Z" fill="url(#linear-gradient-141)" />
                      <path d="M246.51,568.3l6.08-13.44L252.51,577q-9.82,0-16.75-4.37V565.5Z" fill="url(#linear-gradient-142)" />
                      <path d="M252.56,564.36l0,1h8.5l15.22-9.64v6.23c0,8.29-10.7,15-23.8,15.07v-12.6Z" fill="url(#linear-gradient-143)" />
                      <path d="M252.59,555.91l23.72,0c0-8.29-10.55-15-23.65-15s-23.75,6.77-23.8,15.07q0,6.21,6.9,10.6Z" fill="url(#linear-gradient-144)" />
                      <path d="M252.59,555.8l-16.83,10.65q6.93,4.39,16.75,4.37Z" fill="url(#linear-gradient-145)" />
                      <path d="M252.59,555.82l-.08,15c13.1,0,23.76-6.77,23.8-15.07h0Z" fill="url(#linear-gradient-146)" />
                    </g>
                    <g>
                      <path d="M277.49,548.92h-50v8.45c0,8.8,11.18,16,25,16s25-7.15,25-16c0-.08,0-.15,0-.22h0Z" fill="url(#linear-gradient-147)" />
                      <ellipse cx="252.52" cy="549.03" rx="24.97" ry="15.95" fill="url(#linear-gradient-148)" />
                      <path d="M252.52,564.91c-13.65,0-24.72-7-25-15.66a2.64,2.64,0,0,0,0,.28c0,8.81,11.18,16,25,16s25-7.14,25-16a2.64,2.64,0,0,0,0-.28C277.24,557.92,266.16,564.91,252.52,564.91Z" fill="url(#radial-gradient-103)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M269.41,551.65v6.46q6.93-4.4,6.9-10.61V541Q276.34,547.27,269.41,551.65Z" fill="url(#linear-gradient-149)" />
                      <path d="M258.66,553.79l-6.07-13.45.07,22.13q9.82,0,16.75-4.36V551Z" fill="url(#linear-gradient-150)" />
                      <path d="M252.61,549.85l0,1-8.5,0-15.23-9.64v6.24c0,8.29,10.7,15,23.8,15.06V549.88Z" fill="url(#linear-gradient-151)" />
                      <path d="M252.59,541.4l-23.73,0c0-8.3,10.55-15,23.65-15s23.76,6.78,23.8,15.07q0,6.22-6.9,10.61Z" fill="url(#linear-gradient-152)" />
                      <path d="M252.59,541.28l16.82,10.66q-6.92,4.38-16.75,4.37Z" fill="url(#linear-gradient-153)" />
                      <path d="M252.59,541.31l.07,15c-13.1,0-23.75-6.77-23.8-15.07h0Z" fill="url(#linear-gradient-154)" />
                    </g>
                    <ellipse cx="252.32" cy="541.21" rx="15.24" ry="8.21" fill="url(#radial-gradient-104)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M277.49,519.28h-50v8.45c0,8.81,11.18,15.95,25,15.95s25-7.14,25-15.95c0-.07,0-.14,0-.22h0Z" fill="url(#linear-gradient-155)" />
                      <ellipse cx="252.52" cy="519.39" rx="24.97" ry="15.95" fill="url(#linear-gradient-156)" />
                      <path d="M252.52,535.28c-13.65,0-24.72-7-25-15.66a2.64,2.64,0,0,0,0,.28c0,8.81,11.18,16,25,16s25-7.14,25-16a2.64,2.64,0,0,0,0-.28C277.24,528.29,266.16,535.28,252.52,535.28Z" fill="url(#radial-gradient-105)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <ellipse cx="254.42" cy="521.57" rx="12.63" ry="7.07" fill="url(#radial-gradient-106)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M262.51,517.43h-20v4.34c0,3.53,4.48,6.39,10,6.39s10-2.86,10-6.39a.22.22,0,0,0,0-.08h0Z" fill="url(#linear-gradient-157)" />
                      <ellipse cx="252.52" cy="517.47" rx="9.99" ry="6.38" fill="url(#linear-gradient-158)" />
                      <ellipse cx="252.52" cy="517.5" rx="6.29" ry="4.02" fill="url(#linear-gradient-159)" />
                      <path d="M252.52,517.29a7.32,7.32,0,0,1,5.53,2.11,2.93,2.93,0,0,0,.75-1.9c0-2.22-2.81-4-6.28-4s-6.29,1.8-6.29,4a2.93,2.93,0,0,0,.75,1.9A7.32,7.32,0,0,1,252.52,517.29Z" fill="url(#linear-gradient-160)" />
                      <path d="M252.52,523.83c-5.46,0-9.9-2.8-10-6.27,0,0,0,.07,0,.11,0,3.53,4.48,6.39,10,6.39s10-2.86,10-6.39c0,0,0-.07,0-.11C262.41,521,258,523.83,252.52,523.83Z" fill="url(#radial-gradient-107)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                  </g>
                  <g>
                    <ellipse cx="213.44" cy="599.01" rx="35.13" ry="19.65" fill="url(#radial-gradient-108)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M237.66,590.6H180.9v9.6c0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.08,0-.16,0-.25h0Z" fill="url(#linear-gradient-161)" />
                      <ellipse cx="209.28" cy="590.72" rx="28.38" ry="18.13" fill="url(#linear-gradient-162)" />
                      <path d="M209.28,608.78c-15.51,0-28.1-7.94-28.37-17.81,0,.11,0,.22,0,.33,0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.11,0-.22,0-.33C237.38,600.84,224.78,608.78,209.28,608.78Z" fill="url(#radial-gradient-109)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M235.65,580.35H182.9v8.16h0c0,.08,0,.16,0,.24,0,9.3,11.81,16.84,26.37,16.84s26.38-7.54,26.38-16.84c0-.08,0-.16,0-.24h0Z" fill="url(#linear-gradient-163)" />
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M182.9,587.43v.23c0-.07,0-.15,0-.23Z" fill="url(#linear-gradient-164)" />
                        <path d="M209.27,603.79c-14.56,0-26.37-7.54-26.37-16.85v1.57h0c0,.08,0,.16,0,.24,0,9.3,11.81,16.84,26.37,16.84s26.38-7.54,26.38-16.84c0-.08,0-.16,0-.24h0v-1.57C235.65,596.25,223.84,603.79,209.27,603.79Z" fill="url(#linear-gradient-165)" />
                        <path d="M235.65,587.66v-.23h0C235.64,587.51,235.65,587.59,235.65,587.66Z" fill="url(#linear-gradient-166)" />
                      </g>
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M217.35,604.78c.25,0,.49-.12.74-.18V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M220.67,603.92l.73-.23V583.22h-.73Z" fill="#fdd65b" />
                        <path d="M224,602.73l.74-.35V583.22H224Z" fill="#fdd65b" />
                        <path d="M214,605.3l.74-.08v-22H214Z" fill="#fdd65b" />
                        <path d="M230.6,598.62c.26-.22.51-.44.74-.67V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M233.92,594.7a13.84,13.84,0,0,0,.74-1.43v-10h-.74Z" fill="#fdd65b" />
                        <path d="M227.29,601l.74-.44V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M210.73,605.54l.74,0v-22.3h-.74Z" fill="#fdd65b" />
                        <path d="M207.41,605.53l.74,0V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M200.79,604.68l.74.17V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M204.1,605.26l.74.07V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M197.47,603.79l.74.23v-20.8h-.74Z" fill="#fdd65b" />
                        <path d="M184.22,594a13.84,13.84,0,0,0,.74,1.29V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M187.53,598.27c.24.22.5.43.74.63V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M194.16,602.54l.74.32V583.22h-.74Z" fill="#fdd65b" />
                        <path d="M190.85,600.78c.24.15.49.29.74.43v-18h-.74Z" fill="#fdd65b" />
                      </g>
                      <ellipse cx="209.27" cy="580.47" rx="26.37" ry="16.84" fill="url(#linear-gradient-167)" />
                      <path d="M209.27,596.86c-14.25,0-25.83-7.23-26.32-16.26,0,.2,0,.39,0,.59,0,9.3,11.81,16.84,26.37,16.84s26.38-7.54,26.38-16.84c0-.2,0-.39-.05-.59C235.11,589.63,223.53,596.86,209.27,596.86Z" fill="url(#radial-gradient-110)" style={{mixBlendMode: 'screen'}} />
                      <ellipse cx="209.27" cy="580.47" rx="19.71" ry="12.59" fill="url(#linear-gradient-168)" />
                      <path d="M209.93,568.51c10.53,0,19.11,5.27,19.66,11.91,0-.22.06-.45.06-.67,0-7-8.83-12.6-19.72-12.6s-19.71,5.64-19.71,12.6c0,.22,0,.45.05.67C190.82,573.78,199.4,568.51,209.93,568.51Z" fill="url(#radial-gradient-111)" style={{mixBlendMode: 'screen'}} />
                      <path d="M209.27,569.23c10.53,0,19.11,5.27,19.66,11.91,0-.22.06-.44.06-.67,0-7-8.83-12.59-19.72-12.59s-19.71,5.63-19.71,12.59c0,.23,0,.45.05.67C190.17,574.5,198.74,569.23,209.27,569.23Z" fill="url(#linear-gradient-169)" style={{mixBlendMode: 'multiply'}} />
                      <path d="M216.25,578l7.46,1.48c1.25.25,1.51,1.29.45,1.77l-6.36,2.84a1,1,0,0,0-.66.83l.12,4.94c0,.82-1.46,1.3-2.51.81l-6.27-3a2.3,2.3,0,0,0-1.45-.15l-7.38,1.57c-1.24.26-2.42-.49-2-1.27l2.48-4.67a.72.72,0,0,0-.23-.92l-4.69-4c-.78-.67,0-1.61,1.28-1.59l7.8.07a2,2,0,0,0,1.31-.41l4.48-4c.75-.67,2.41-.51,2.8.29l2.34,4.72A1.44,1.44,0,0,0,216.25,578Z" fill="url(#linear-gradient-170)" style={{mixBlendMode: 'multiply'}} />
                      <path d="M216.25,577.05l7.46,1.49c1.25.24,1.51,1.29.45,1.76l-6.36,2.85a.93.93,0,0,0-.66.82l.12,4.94c0,.83-1.46,1.31-2.51.81l-6.27-3a2.37,2.37,0,0,0-1.45-.14l-7.38,1.57c-1.24.26-2.42-.49-2-1.27l2.48-4.68a.72.72,0,0,0-.23-.92l-4.69-4c-.78-.66,0-1.6,1.28-1.59l7.8.08a1.94,1.94,0,0,0,1.31-.42l4.48-4c.75-.68,2.41-.51,2.8.28l2.34,4.73A1.4,1.4,0,0,0,216.25,577.05Z" fill="url(#linear-gradient-171)" />
                      <path d="M216.25,577.05l7.46,1.49c1.25.24,1.51,1.29.45,1.76l-6.36,2.85a.93.93,0,0,0-.66.82l.12,4.94c0,.83-1.46,1.31-2.51.81l-6.27-3a2.37,2.37,0,0,0-1.45-.14l-7.38,1.57c-1.24.26-2.42-.49-2-1.27l2.48-4.68a.72.72,0,0,0-.23-.92l-4.69-4c-.78-.66,0-1.6,1.28-1.59l7.8.08a1.94,1.94,0,0,0,1.31-.42l4.48-4c.75-.68,2.41-.51,2.8.28l2.34,4.73A1.4,1.4,0,0,0,216.25,577.05Z" fill="url(#radial-gradient-112)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <ellipse cx="208.96" cy="579.72" rx="17.32" ry="9.33" fill="url(#radial-gradient-113)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M237.66,554.36H180.9V564c0,10,12.7,18.13,28.38,18.13S237.66,574,237.66,564c0-.08,0-.16,0-.25h0Z" fill="url(#linear-gradient-172)" />
                      <ellipse cx="209.28" cy="554.48" rx="28.38" ry="18.13" fill="url(#linear-gradient-173)" />
                      <path d="M209.28,572.54c-15.51,0-28.1-7.94-28.37-17.8,0,.1,0,.21,0,.32,0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.11,0-.22,0-.32C237.38,564.6,224.78,572.54,209.28,572.54Z" fill="url(#radial-gradient-114)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M235.82,544.45h-53.1v8.22h0c0,.07,0,.15,0,.23,0,9.37,11.89,17,26.55,17s26.55-7.59,26.55-17c0-.08,0-.16,0-.23h0Z" fill="url(#linear-gradient-174)" />
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M182.72,551.58v.23c0-.08,0-.15,0-.23Z" fill="url(#linear-gradient-175)" />
                        <path d="M209.27,568c-14.66,0-26.55-7.59-26.55-16.95v1.58h0c0,.07,0,.15,0,.23,0,9.37,11.89,17,26.55,17s26.55-7.59,26.55-17c0-.08,0-.16,0-.23h0v-1.58C235.82,560.45,223.93,568,209.27,568Z" fill="url(#linear-gradient-176)" />
                        <path d="M235.82,551.81v-.23h0C235.81,551.66,235.82,551.73,235.82,551.81Z" fill="url(#linear-gradient-177)" />
                      </g>
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M217.4,569l.75-.17V547.33h-.75Z" fill="#fdd65b" />
                        <path d="M220.74,568.18l.74-.23V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M224.07,567c.26-.11.5-.24.75-.35v-19.3h-.75Z" fill="#fdd65b" />
                        <path d="M214.07,569.57c.25,0,.5-.05.74-.09V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M230.75,562.84c.25-.22.5-.44.74-.67V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M234.08,558.9a14.23,14.23,0,0,0,.75-1.45V547.33h-.75Z" fill="#fdd65b" />
                        <path d="M227.41,565.26c.25-.15.51-.29.74-.44V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M210.73,569.81l.75,0V547.33h-.75Z" fill="#fdd65b" />
                        <path d="M207.4,569.8l.74,0V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M200.73,568.94l.74.17V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M204.06,569.53l.75.07V547.33h-.75Z" fill="#fdd65b" />
                        <path d="M197.39,568.05l.75.23V547.33h-.75Z" fill="#fdd65b" />
                        <path d="M184.05,558.18a13.07,13.07,0,0,0,.74,1.3V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M187.38,562.49c.24.22.5.43.75.64v-15.8h-.75Z" fill="#fdd65b" />
                        <path d="M194.06,566.79l.74.32V547.33h-.74Z" fill="#fdd65b" />
                        <path d="M190.72,565c.24.15.5.29.74.43V547.33h-.74Z" fill="#fdd65b" />
                      </g>
                    </g>
                    <g>
                      <path d="M237.66,537.61H180.9v9.61c0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.09,0-.17,0-.25h0Z" fill="url(#linear-gradient-178)" />
                      <ellipse cx="209.28" cy="537.74" rx="28.38" ry="18.13" fill="url(#linear-gradient-179)" />
                      <path d="M209.28,555.79c-15.51,0-28.1-7.94-28.37-17.8,0,.11,0,.22,0,.32,0,10,12.7,18.13,28.38,18.13s28.38-8.11,28.38-18.13c0-.1,0-.21,0-.32C237.38,547.85,224.78,555.79,209.28,555.79Z" fill="url(#radial-gradient-115)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <g>
                      <path d="M235.82,527.48h-53.1v8.22h0c0,.08,0,.16,0,.23,0,9.37,11.89,17,26.55,17s26.55-7.59,26.55-17c0-.07,0-.15,0-.23h0Z" fill="url(#linear-gradient-180)" />
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M182.72,534.61v.24c0-.08,0-.16,0-.24Z" fill="url(#linear-gradient-181)" />
                        <path d="M209.27,551.08c-14.66,0-26.55-7.59-26.55-17v1.58h0c0,.08,0,.16,0,.23,0,9.37,11.89,17,26.55,17s26.55-7.59,26.55-17c0-.07,0-.15,0-.23h0v-1.58C235.82,543.49,223.93,551.08,209.27,551.08Z" fill="url(#linear-gradient-182)" />
                        <path d="M235.82,534.85v-.24h0C235.81,534.69,235.82,534.77,235.82,534.85Z" fill="url(#linear-gradient-183)" />
                      </g>
                      <g style={{mixBlendMode: 'multiply'}}>
                        <path d="M217.4,552.08l.75-.18V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M220.74,551.21l.74-.23V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M224.07,550c.26-.11.5-.23.75-.35V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M214.07,552.6l.74-.08V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M230.75,545.88l.74-.68V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M234.08,541.93a14.08,14.08,0,0,0,.75-1.44V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M227.41,548.29c.25-.14.51-.29.74-.44V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M210.73,552.85l.75,0V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M207.4,552.83l.74,0V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M200.73,552l.74.17V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M204.06,552.56l.75.07V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M197.39,551.09l.75.22V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M184.05,541.21a12,12,0,0,0,.74,1.3V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M187.38,545.53c.24.22.5.42.75.63V530.37h-.75Z" fill="#fdd65b" />
                        <path d="M194.06,549.82l.74.32V530.37h-.74Z" fill="#fdd65b" />
                        <path d="M190.72,548.06c.24.15.5.28.74.43V530.37h-.74Z" fill="#fdd65b" />
                      </g>
                    </g>
                    <g>
                      <path d="M237.66,520.87H180.9v9.6c0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.08,0-.17,0-.25h0Z" fill="url(#linear-gradient-184)" />
                      <ellipse cx="209.28" cy="520.99" rx="28.38" ry="18.13" fill="url(#linear-gradient-185)" />
                      <path d="M209.28,539.05c-15.51,0-28.1-7.94-28.37-17.81,0,.11,0,.22,0,.33,0,10,12.7,18.13,28.38,18.13s28.38-8.12,28.38-18.13c0-.11,0-.22,0-.33C237.38,531.11,224.78,539.05,209.28,539.05Z" fill="url(#radial-gradient-116)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                    <ellipse cx="211.44" cy="519.7" rx="14.36" ry="8.03" fill="url(#radial-gradient-117)" style={{mixBlendMode: 'multiply'}} />
                    <g>
                      <path d="M220.64,515H197.92v4.95c0,4,5.09,7.25,11.36,7.25s11.36-3.25,11.36-7.25c0,0,0-.07,0-.1h0Z" fill="url(#linear-gradient-186)" />
                      <ellipse cx="209.28" cy="515.03" rx="11.36" ry="7.25" fill="url(#linear-gradient-187)" />
                      <path d="M202.13,515.07c0,2.52,3.2,4.56,7.15,4.56s7.14-2,7.14-4.56-3.2-4.57-7.14-4.57S202.13,512.55,202.13,515.07Z" fill="url(#linear-gradient-188)" />
                      <path d="M209.28,514.83a8.32,8.32,0,0,1,6.29,2.4,3.37,3.37,0,0,0,.85-2.16c0-2.52-3.2-4.57-7.14-4.57s-7.15,2-7.15,4.57a3.37,3.37,0,0,0,.85,2.16A8.36,8.36,0,0,1,209.28,514.83Z" fill="url(#linear-gradient-189)" />
                      <path d="M209.28,522.26c-6.21,0-11.25-3.18-11.35-7.13a.62.62,0,0,0,0,.13c0,4,5.09,7.26,11.36,7.26s11.36-3.25,11.36-7.26c0,0,0-.08,0-.13C220.52,519.08,215.48,522.26,209.28,522.26Z" fill="url(#radial-gradient-118)" style={{mixBlendMode: 'color-dodge'}} />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <polygon points="66.92 169.13 56.05 175.6 81.12 190.2 81.11 190.2 81.11 215.71 92.03 209.26 92.03 183.76 66.92 169.13" fill="url(#linear-gradient-190)" style={{mixBlendMode: 'screen'}} />
                      <polygon points="70.36 196.63 70.36 222.14 81.28 215.7 81.28 190.19 70.36 196.63" fill="url(#New_Gradient_Swatch_copy_8-12)" />
                      <polygon points="70.38 196.63 70.38 222.14 45.29 207.52 45.29 182.03 70.38 196.63" fill="url(#New_Gradient_Swatch_copy_8-13)" />
                      <polygon points="47.29 206.37 47.29 185.5 68.38 197.78 68.38 218.67 47.29 206.37" fill="#330a66" />
                      <polygon points="48.01 205.98 48.01 185.92 47.29 185.5 47.29 206.37 68.38 218.67 68.38 217.86 48.01 205.98" fill="url(#linear-gradient-191)" />
                      <polygon points="48.01 205.98 47.29 206.37 68.38 218.67 68.38 217.86 48.01 205.98" fill="#45108a" />
                      <polygon points="45.29 182.03 70.38 196.63 81.28 190.19 56.17 175.56 45.29 182.03" fill="url(#New_Gradient_Swatch_copy_8-14)" />
                      <polygon points="70.38 196.23 45.63 181.82 45.29 182.03 70.38 196.63 81.28 190.19 80.94 189.99 70.38 196.23" fill="url(#radial-gradient-119)" style={{mixBlendMode: 'screen'}} />
                    </g>
                    <path d="M59,203.45V209l-2.5-1.44V202a6.43,6.43,0,0,1-1.69-4c0-1.87,1.32-2.62,2.94-1.68a6.5,6.5,0,0,1,2.94,5.07C60.69,202.72,60,203.48,59,203.45Z" fill="#43e8e1" />
                    <path d="M59,203.45V209l-2.5-1.44V202a6.43,6.43,0,0,1-1.69-4c0-1.87,1.32-2.62,2.94-1.68a6.5,6.5,0,0,1,2.94,5.07C60.69,202.72,60,203.48,59,203.45Z" fill="url(#Radial_Gradient_1-44)" style={{mixBlendMode: 'color-dodge'}} />
                    <path d="M57.75,196.3c-1.12-.64-2.09-.49-2.59.28L33.72,208.16v14.2L59,209v-5.56c1,0,1.69-.73,1.69-2.08A6.5,6.5,0,0,0,57.75,196.3Z" fill="url(#linear-gradient-192)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <g>
                    <polygon points="66.45 189.54 70.58 191.94 73.26 190.36 69.13 187.95 66.45 189.54" fill="#e2953f" />
                    <polygon points="53.48 182.09 57.61 184.49 60.29 182.9 56.16 180.5 53.48 182.09" fill="#e2953f" />
                    <polygon points="70.53 191.72 78.89 188.87 72.91 185.26 66.96 189.66 70.53 191.72" fill="url(#linear-gradient-193)" style={{mixBlendMode: 'multiply'}} />
                    <polygon points="57.61 184.12 65.98 181.27 59.99 177.67 54.05 182.06 57.61 184.12" fill="url(#linear-gradient-194)" style={{mixBlendMode: 'multiply'}} />
                    <path d="M66.62,175l-4.24-2.45c-3.39-2-6.15-.39-6.15,3.5v4.76l3.57,2.06v-3.54c0-2.22,1.56-3.11,3.5-2l2.41,1.39a7.7,7.7,0,0,1,3.5,6v3.54l3.56,2.06v-4.76A13.54,13.54,0,0,0,66.62,175Z" fill="url(#New_Gradient_Swatch_copy_8-15)" />
                    <g>
                      <path d="M66.62,175l-4.24-2.45c-1.69-1-3.22-1.08-4.33-.45h0l-2.27,1.36.45,2.75v4.61l.84.48.48,2.91,2.25-1.33v-3.54c0-2.22,1.56-3.11,3.5-2l2.41,1.39a7.7,7.7,0,0,1,3.5,6v3.54l.94.55.38,2.84,2.24-1.33h0v-4.76A13.54,13.54,0,0,0,66.62,175Z" fill="url(#New_Gradient_Swatch_copy_8-16)" />
                      <polygon points="72.77 190.39 72.77 190.39 72.77 190.39 72.77 190.39" fill="url(#New_Gradient_Swatch_copy_8-17)" />
                    </g>
                    <polygon points="72.77 190.39 72.77 190.39 72.77 190.39 72.77 190.39" fill="url(#New_Gradient_Swatch_copy_8-17)" />
                    <path d="M64.77,176.19l-4.25-2.45c-1.9-1.1-3.6-1.09-4.73-.18l.44,2.67v4.61l.84.48.48,2.91.39-.23v-3.48c0-1.64.86-2.55,2.09-2.46.51-1.22,1.78-1.55,3.27-.69l2.41,1.39a7.7,7.7,0,0,1,3.5,6v3.54l.94.55.38,2.84.39-.23V186.8A13.57,13.57,0,0,0,64.77,176.19Z" fill="url(#radial-gradient-120)" style={{mixBlendMode: 'screen'}} />
                    <path d="M70.53,191.72Z" />
                    <path d="M64.38,176.36l-4.24-2.45c-3.4-2-6.15-.39-6.15,3.51v4.75l3.56,2.06v-3.54c0-2.22,1.57-3.11,3.5-2l2.41,1.39a7.68,7.68,0,0,1,3.5,6v3.54l3.57,2.06V187A13.56,13.56,0,0,0,64.38,176.36Z" fill="url(#linear-gradient-195)" />
                  </g>
                </g>
                <g id="yellow">
                  <g>
                    <path d="M870.06,395.4,862.27,384l-.17-2.24-2.56,2.42h0a5.39,5.39,0,0,0-1.3,1.95Z" fill="url(#radial-gradient-121)" />
                    <path d="M862.07,389.17l-.74-5.92-3.09,2.92a9.37,9.37,0,0,0-.16,5.64l12,3.59Z" fill="url(#linear-gradient-196)" />
                    <path d="M880.58,406.58l2.76-2.6-2.27,0-11-8.61,8.49,12.4a5.5,5.5,0,0,0,2-1.18Z" fill="url(#radial-gradient-122)" />
                    <path d="M877.53,404.75l-.76.46-6.71-9.81L873,407.65a9.22,9.22,0,0,0,5.6.15l2.6-2.45Z" fill="url(#linear-gradient-197)" />
                    <path d="M871.64,402.11l-1.58-6.71-3.48,8.81a19.86,19.86,0,0,0,6.37,3.44l3-2.87Z" fill="url(#radial-gradient-123)" />
                    <path d="M863.52,393.44l-1.83-5-3.61,3.4a20.3,20.3,0,0,0,3,6.61l8.93-3Z" fill="url(#radial-gradient-124)" />
                    <path d="M868,400.52l2-5.12-5.19,1.76-1.13-1.2-2.61,2.46a26.28,26.28,0,0,0,5.45,5.79l2.61-2.46Z" fill="url(#linear-gradient-198)" />
                  </g>
                  <g>
                    <path d="M872.66,393l2.9,12.24a9.23,9.23,0,0,0,5.6.16l-8.5-12.4Z" fill="url(#New_Gradient_Swatch_copy_20)" />
                    <path d="M872.66,393l8.5,12.4a5.33,5.33,0,0,0,3.32-3.17L872.66,393Z" fill="url(#radial-gradient-125)" />
                    <path d="M872.66,393l-11.82-9.23a9.52,9.52,0,0,0-.16,5.64l12,3.59Z" fill="url(#New_Gradient_Swatch_copy_20-2)" />
                    <path d="M872.66,393l-12-3.59a20.08,20.08,0,0,0,3.06,6.6l8.92-3Z" fill="url(#radial-gradient-126)" />
                    <path d="M863.74,396a26.52,26.52,0,0,0,5.44,5.8l3.48-8.81Z" fill="url(#New_Gradient_Swatch_copy_20-3)" />
                    <path d="M872.66,393h0l-3.48,8.81a19.78,19.78,0,0,0,6.38,3.43Z" fill="url(#radial-gradient-127)" />
                    <path d="M872.66,393l-8.5-12.4a5.33,5.33,0,0,0-3.32,3.17L872.66,393Z" fill="url(#radial-gradient-128)" />
                    <path d="M884.48,402.18a9.52,9.52,0,0,0,.16-5.64l-12-3.59Z" fill="url(#New_Gradient_Swatch_copy_20-4)" />
                    <path d="M869.76,380.71a9.23,9.23,0,0,0-5.6-.16l8.5,12.4Z" fill="url(#New_Gradient_Swatch_copy_20-5)" />
                    <path d="M872.66,393h0l8.92-3a26.3,26.3,0,0,0-5.44-5.8L872.66,393Z" fill="url(#New_Gradient_Swatch_copy_20-6)" />
                    <path d="M884.64,396.54a20,20,0,0,0-3.06-6.6l-8.92,3Z" fill="url(#radial-gradient-129)" />
                    <path d="M876.14,384.14a19.68,19.68,0,0,0-6.38-3.43l2.9,12.24Z" fill="url(#radial-gradient-130)" />
                  </g>
                  <ellipse cx="872.66" cy="392.95" rx="6.49" ry="11.24" transform="translate(-33.55 700.72) rotate(-43)" fill="url(#New_Gradient_Swatch_copy_20-7)" />
                  <path d="M874.43,400.41a14.59,14.59,0,0,1-9.07-9.65c-1-4.12,1.5-6.49,5.53-5.28a14.61,14.61,0,0,1,9.07,9.66C880.94,399.26,878.46,401.62,874.43,400.41Z" fill="url(#radial-gradient-131)" />
                  <path d="M875.56,405.05c-6.57-2-13.18-9-14.76-15.72-.79-3.33-.2-5.95,1.41-7.51-1.69,1.54-2.44,4.31-1.64,7.72,1.59,6.71,8.2,13.75,14.77,15.72,3.31,1,6.09.4,7.72-1.19C881.42,405.58,878.8,406,875.56,405.05Z" fill="url(#Radial_Gradient_1-45)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g id="blue">
                  <g>
                    <path d="M993.24,408.27l-12.08,6.62-2.25-.06,2.15,2.8h0a5.47,5.47,0,0,0,1.82,1.49Z" fill="url(#radial-gradient-132)" />
                    <path d="M986.23,415.6l-6,.14,2.6,3.38a9.44,9.44,0,0,0,5.59.71l4.77-11.56Z" fill="url(#linear-gradient-199)" />
                    <path d="M1005.41,398.91l-2.31-3-.2,2.26-9.66,10.1,13.18-7.22a5.42,5.42,0,0,0-1-2.1Z" fill="url(#radial-gradient-133)" />
                    <path d="M1003.28,401.77l.38.8-10.42,5.7,12.47-1.66a9.24,9.24,0,0,0,.71-5.56l-2.18-2.82Z" fill="url(#linear-gradient-200)" />
                    <path d="M1000.07,407.36l-6.83.91,8.41,4.34a19.66,19.66,0,0,0,4.06-6l-2.56-3.32Z" fill="url(#radial-gradient-134)" />
                    <path d="M990.64,414.58l-5.2,1.32,3,3.93a20,20,0,0,0,6.88-2.38l-2.11-9.18Z" fill="url(#radial-gradient-135)" />
                    <path d="M998.13,410.79l-4.89-2.52,1.22,5.34-1.3,1,2.19,2.83a26.31,26.31,0,0,0,6.3-4.84l-2.19-2.85Z" fill="url(#linear-gradient-201)" />
                  </g>
                  <g>
                    <path d="M991.05,405.44l12.47-1.67a9.13,9.13,0,0,0,.71-5.55l-13.18,7.22Z" fill="url(#New_Gradient_Swatch_copy_14-9)" />
                    <path d="M991.05,405.44l13.18-7.22a5.28,5.28,0,0,0-2.82-3.62l-10.36,10.84Z" fill="url(#radial-gradient-136)" />
                    <path d="M991.05,405.44l-10.36,10.84a9.47,9.47,0,0,0,5.6.72l4.76-11.56Z" fill="url(#New_Gradient_Swatch_copy_14-10)" />
                    <path d="M991.05,405.44,986.29,417a20.41,20.41,0,0,0,6.87-2.38l-2.11-9.18Z" fill="url(#radial-gradient-137)" />
                    <path d="M993.16,414.62a26.56,26.56,0,0,0,6.31-4.84l-8.42-4.34Z" fill="url(#New_Gradient_Swatch_copy_14-11)" />
                    <path d="M991.05,405.44h0l8.42,4.34a19.79,19.79,0,0,0,4-6Z" fill="url(#radial-gradient-138)" />
                    <path d="M991.05,405.44l-13.18,7.22a5.33,5.33,0,0,0,2.82,3.62l10.36-10.84Z" fill="url(#radial-gradient-139)" />
                    <path d="M1001.41,394.6a9.35,9.35,0,0,0-5.59-.72l-4.77,11.56Z" fill="url(#New_Gradient_Swatch_copy_14-12)" />
                    <path d="M978.58,407.1a9.24,9.24,0,0,0-.71,5.56l13.18-7.22Z" fill="url(#New_Gradient_Swatch_copy_14-13)" />
                    <path d="M991.05,405.44h0l-2.11-9.18a26.31,26.31,0,0,0-6.3,4.84l8.41,4.34Z" fill="url(#New_Gradient_Swatch_copy_14-14)" />
                    <path d="M995.82,393.88a20.1,20.1,0,0,0-6.88,2.38l2.11,9.18Z" fill="url(#radial-gradient-140)" />
                    <path d="M982.64,401.1a19.78,19.78,0,0,0-4.06,6l12.47-1.66Z" fill="url(#radial-gradient-141)" />
                  </g>
                  <path d="M1000.18,404.22c-1.93,4.67-7.57,9-12.61,9.68s-7.57-2.57-5.64-7.25,7.57-9,12.61-9.67S1002.1,399.55,1000.18,404.22Z" fill="url(#New_Gradient_Swatch_copy_14-15)" />
                  <path d="M998.66,404.42a14.64,14.64,0,0,1-10.51,8.07c-4.2.56-6.31-2.15-4.7-6A14.63,14.63,0,0,1,994,398.39C998.16,397.83,1000.26,400.53,998.66,404.42Z" fill="url(#radial-gradient-142)" />
                  <path d="M1003.38,403.76c-2.61,6.33-10.27,12.21-17.11,13.12-3.39.45-5.94-.4-7.33-2.15,1.37,1.83,4,2.86,7.52,2.39,6.83-.91,14.5-6.78,17.11-13.12,1.32-3.2,1-6-.41-7.8C1004.49,398,1004.67,400.63,1003.38,403.76Z" fill="url(#Radial_Gradient_1-46)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g id="red">
                  <g>
                    <path d="M979.56,360.07,973,372.19l-1.93,1.18,3.33,1.18h0a5.36,5.36,0,0,0,2.34.26Z" fill="url(#radial-gradient-143)" />
                    <path d="M977.67,370l-4.92,3.36,4,1.41a9.36,9.36,0,0,0,5.08-2.44l-2.29-12.29Z" fill="url(#New_Gradient_Swatch_copy_24-16)" />
                    <path d="M984.68,345.59l-3.57-1.26,1,2-2.6,13.74,7.13-13.23a5.27,5.27,0,0,0-2-1.23Z" fill="url(#radial-gradient-144)" />
                    <path d="M984.45,349.15l.75.46-5.64,10.46,9.56-8.18a9.26,9.26,0,0,0-2.43-5.05l-3.36-1.19Z" fill="url(#New_Gradient_Swatch_copy_24-17)" />
                    <path d="M984.79,355.59l-5.23,4.48,9.42-.94a19.69,19.69,0,0,0,.14-7.24l-4-1.4Z" fill="url(#radial-gradient-145)" />
                    <path d="M980.81,366.78l-3.64,3.93,4.68,1.65a20.08,20.08,0,0,0,4.47-5.74l-6.76-6.55Z" fill="url(#radial-gradient-146)" />
                    <path d="M985,359.52l-5.47.55,3.93,3.81-.54,1.55,3.37,1.19a26.37,26.37,0,0,0,2.66-7.49l-3.39-1.2Z" fill="url(#New_Gradient_Swatch_copy_24-18)" />
                  </g>
                  <g>
                    <path d="M976.18,358.88l9.56-8.18a9.19,9.19,0,0,0-2.43-5.05l-7.13,13.23Z" fill="url(#New_Gradient_Swatch_copy_15-37)" />
                    <path d="M976.18,358.88l7.13-13.23a5.26,5.26,0,0,0-4.33-1.5l-2.8,14.73Z" fill="url(#radial-gradient-147)" />
                    <path d="M976.18,358.88l-2.79,14.73a9.46,9.46,0,0,0,5.09-2.44l-2.3-12.29Z" fill="url(#New_Gradient_Swatch_copy_15-38)" />
                    <path d="M976.18,358.88l2.3,12.29a20.08,20.08,0,0,0,4.47-5.74l-6.77-6.55Z" fill="url(#radial-gradient-148)" />
                    <path d="M983,365.43a26.37,26.37,0,0,0,2.66-7.49l-9.43.94Z" fill="url(#New_Gradient_Swatch_copy_15-39)" />
                    <path d="M976.18,358.88h0l9.43-.94a19.9,19.9,0,0,0,.13-7.24Z" fill="url(#radial-gradient-149)" />
                    <path d="M976.18,358.88l-7.13,13.23a5.36,5.36,0,0,0,4.34,1.5l2.79-14.73Z" fill="url(#radial-gradient-150)" />
                    <path d="M979,344.15a9.39,9.39,0,0,0-5.09,2.44l2.29,12.29Z" fill="url(#New_Gradient_Swatch_copy_15-40)" />
                    <path d="M966.63,367.06a9.19,9.19,0,0,0,2.42,5.05l7.13-13.23Z" fill="url(#New_Gradient_Swatch_copy_15-41)" />
                    <path d="M976.18,358.88h0l-6.76-6.55a26.37,26.37,0,0,0-2.66,7.49l9.42-.94Z" fill="url(#New_Gradient_Swatch_copy_15-42)" />
                    <path d="M973.89,346.59a20.08,20.08,0,0,0-4.47,5.74l6.76,6.55Z" fill="url(#radial-gradient-151)" />
                    <path d="M966.76,359.82a19.9,19.9,0,0,0-.13,7.24l9.55-8.18Z" fill="url(#radial-gradient-152)" />
                  </g>
                  <path d="M983.18,352.89c.92,5-1.46,11.68-5.32,15s-7.74,2-8.67-3,1.45-11.68,5.32-15S982.25,347.93,983.18,352.89Z" fill="url(#New_Gradient_Swatch_copy_15-43)" />
                  <ellipse cx="976.18" cy="358.88" rx="9.37" ry="5.41" transform="translate(308.6 1156.41) rotate(-70.25)" fill="url(#radial-gradient-153)" />
                  <path d="M985.61,350.76c1.26,6.74-2,15.84-7.21,20.32-2.6,2.23-5.2,2.9-7.32,2.19,2.14.79,4.95.19,7.61-2.08,5.24-4.49,8.47-13.59,7.21-20.33-.63-3.4-2.43-5.6-4.59-6.32C983.4,345.31,985,347.44,985.61,350.76Z" fill="url(#Radial_Gradient_1-47)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g>
                  <g>
                    <polygon points="1008.1 270.46 1008.1 276.04 1036.76 259.21 1036.76 253.63 1008.1 270.46" fill="url(#New_Gradient_Swatch_copy_8-19)" />
                    <polygon points="1008.12 270.46 1008.12 276.04 979.46 259.34 979.46 253.77 1008.12 270.46" fill="url(#New_Gradient_Swatch_copy_8-20)" />
                    <polygon points="979.46 253.77 1008.12 270.46 1036.76 253.63 1008.08 236.93 979.46 253.77" fill="url(#New_Gradient_Swatch_copy_8-21)" />
                    <polygon points="1008.12 270 979.85 253.54 979.46 253.77 1008.12 270.46 1036.76 253.63 1036.38 253.4 1008.12 270" fill="url(#radial-gradient-154)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <g>
                    <polygon points="1008.1 262.61 1008.1 268.19 1036.76 251.36 1036.76 245.78 1008.1 262.61" fill="url(#New_Gradient_Swatch_copy_8-22)" />
                    <polygon points="1008.12 262.61 1008.12 268.19 979.46 251.49 979.46 245.92 1008.12 262.61" fill="url(#New_Gradient_Swatch_copy_8-23)" />
                    <polygon points="979.46 245.92 1008.12 262.61 1036.76 245.78 1008.08 229.07 979.46 245.92" fill="url(#New_Gradient_Swatch_copy_8-24)" />
                    <polygon points="1008.12 262.15 979.85 245.69 979.46 245.92 1008.12 262.61 1036.76 245.78 1036.38 245.55 1008.12 262.15" fill="url(#radial-gradient-155)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <g>
                    <polygon points="1008.1 254.75 1008.1 260.34 1036.76 243.51 1036.76 237.93 1008.1 254.75" fill="url(#New_Gradient_Swatch_copy_8-25)" />
                    <polygon points="1008.12 254.75 1008.12 260.34 979.46 243.63 979.46 238.07 1008.12 254.75" fill="url(#New_Gradient_Swatch_copy_8-26)" />
                    <polygon points="979.46 238.07 1008.12 254.75 1036.76 237.93 1008.08 221.22 979.46 238.07" fill="url(#New_Gradient_Swatch_copy_8-27)" />
                    <polygon points="1008.12 254.3 979.85 237.84 979.46 238.07 1008.12 254.75 1036.76 237.93 1036.38 237.7 1008.12 254.3" fill="url(#radial-gradient-156)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <g>
                    <polygon points="1008.1 246.9 1008.1 252.49 1036.76 235.66 1036.76 230.07 1008.1 246.9" fill="url(#New_Gradient_Swatch_copy_8-28)" />
                    <polygon points="1008.12 246.9 1008.12 252.49 979.46 235.78 979.46 230.22 1008.12 246.9" fill="url(#New_Gradient_Swatch_copy_8-29)" />
                    <polygon points="979.46 230.22 1008.12 246.9 1036.76 230.07 1008.08 213.37 979.46 230.22" fill="url(#New_Gradient_Swatch_copy_8-30)" />
                    <polygon points="983.98 230.21 1008.09 216.01 1032.25 230.08 1008.11 244.26 983.98 230.21" fill="#45108a" />
                    <polygon points="1008.09 217.15 1031.27 230.65 1032.25 230.08 1008.09 216.01 983.98 230.21 984.95 230.77 1008.09 217.15" fill="url(#linear-gradient-202)" />
                    <polygon points="1008.09 217.15 1031.27 230.65 1032.25 230.08 1008.09 216.01 1008.09 217.15" fill="#330a66" />
                    <polygon points="1008.12 246.45 979.85 229.99 979.46 230.22 1008.12 246.9 1036.76 230.07 1036.38 229.85 1008.12 246.45" fill="url(#radial-gradient-157)" style={{mixBlendMode: 'screen'}} />
                  </g>
                  <path d="M1022.89,231.55c-3-1.69-5-3.87-5.71-6.24l0,0a27,27,0,0,1-10.8-3.29l-.11-.07-1.6,1.11c-5.63,3.9-6.57,7.8-5.82,12.79l.11.07c8.64.43,15.41-.11,22.16-3.36l1.92-.93Z" fill="#43e8e1" />
                  <path d="M1017.18,229.59l0,0a27.21,27.21,0,0,1-10.8-3.3l-.11-.06-1.6,1.1c-3.73,2.58-5.39,5.17-5.88,8.07l.06.45.11.07c8,.4,14.33,0,20.56-2.65A9.33,9.33,0,0,1,1017.18,229.59Z" fill="url(#Radial_Gradient_1-48)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M998.56,197.24v38.62l.26,0h0l.11.07c8.64.43,15.41-.11,22.16-3.36l1.92-.93V197.24Z" fill="url(#linear-gradient-203)" style={{mixBlendMode: 'screen'}} />
                </g>
                <g>
                  <g>
                    <path d="M302.53,411.73l10,5.84c-3.26-1.89-5.25-6-5.18-11.74l-10-5.84C297.28,405.76,299.27,409.84,302.53,411.73Z" fill="url(#Безымянный_градиент_562-4)" />
                    <path d="M337.71,374.3l-10-5.84c-3.15-1.83-7.5-1.62-12.32,1.06-9.8,5.46-17.86,19.1-18,30.46l10,5.84c.14-11.36,8.2-25,18-30.46C330.22,372.67,334.56,372.46,337.71,374.3Z" fill="url(#Безымянный_градиент_562-5)" />
                    <path d="M307,405.55h-.05L297.39,400c.11-9.12,5.33-19.72,12.46-26.36l9.49,5.51.07,0C312.28,385.85,307.07,396.43,307,405.55Z" fill="url(#Безымянный_градиент_776)" />
                  </g>
                  <g>
                    <ellipse cx="340.71" cy="403.6" rx="30.81" ry="17.85" transform="translate(-179.44 495.37) rotate(-59.84)" fill="#ccc" />
                    <path d="M319.45,416.78c.08-6.88,2.47-14.62,6.71-21.81S336,382,342,378.7a20.22,20.22,0,0,1,9.75-2.87,12.5,12.5,0,0,1,2.39.22c5.2,1.7,8.5,7.13,8.4,15.36-.17,14-10.1,30.78-22.17,37.51-8.25,4.6-15.37,3.3-19-2.46A21.62,21.62,0,0,1,319.45,416.78Z" fill="#e6e6e5" />
                  </g>
                  <ellipse cx="356.76" cy="412.93" rx="30.81" ry="17.85" transform="matrix(0.5, -0.86, 0.86, 0.5, -179.52, 513.89)" fill="#ccc" />
                  <path d="M335.49,426.1c.08-6.88,2.47-14.62,6.71-21.81s9.85-13,15.79-16.27a20.22,20.22,0,0,1,9.75-2.87,12.5,12.5,0,0,1,2.39.22c5.2,1.7,8.5,7.13,8.4,15.36-.17,14-10.1,30.78-22.17,37.51-8.25,4.6-15.37,3.3-19-2.46A21.59,21.59,0,0,1,335.49,426.1Z" fill="#e6e6e5" />
                  <g>
                    <path d="M388.33,395.76l-14.58-8.47c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.52-22.17,37.51L351,434.58c.17-14,10.1-30.78,22.17-37.51C379.1,393.76,384.45,393.5,388.33,395.76Z" fill="#fff" />
                    <ellipse cx="372.92" cy="422.41" rx="30.81" ry="17.85" transform="translate(-179.67 532.57) rotate(-59.84)" fill="#e6e6e5" />
                  </g>
                  <g>
                    <path id="SVGID" d="M341.54,368.48c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.52-22.17,37.51-.08,7.11,2.37,12.13,6.38,14.46l14.58,8.47c-4-2.33-6.46-7.35-6.38-14.46.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.56,15.17-1.31Z" fill="url(#Безымянный_градиент_749)" />
                    <g clipPath="url(#clip-path-11)">
                      <g id="rul3">
                        <g>
                          <path d="M380.48,472.92c-4-4.37-4.27-9.82-.6-13.88-6.36,3.18-5.3,12.26.26,15.15a8.25,8.25,0,0,0,3.71.9,9.47,9.47,0,0,1-3.37-2.17Zm3.8-12.24a.12.12,0,0,0,.16,0c.47-.34.47-.34.64-.35h.55s.1-.05.06-.12c-.3-.5-.3-.5-.25-.64a1.9,1.9,0,0,0,.14-.4c0-.09-.12-.12-.12-.12-.71,0-.71,0-.88-.08-.5-.3-.5-.3-.54-.17-.14.53-.14.53-.25.61s-.26.15-.36.23-.05.16,0,.17c.57.3.57.3.64.43l.23.44Zm2.25,14c6.65-2.18,9.28-9.73,3.13-14.83l-.13-.08c5.39,5.08,2.48,11.47-3,14.91Zm4.89-13.42c4.74,8.32-3,14.56-7.95,14a9,9,0,0,1-6.54-14c3.45-4.77,10.5-4,14.49,0Z" fill="#ff7e2e" />
                          <path d="M391.42,461.29c4.61,6.7-1,12.12-4.89,13.42-6.08,2,8.39-9.83,3-14.91a10.48,10.48,0,0,1,1.89,1.49Z" fill="#ffb282" />
                          <path d="M379.87,459c-5.1,5.64-2,13.67,4,16-7.24-.22-10.46-8.66-6.82-13.65a7.86,7.86,0,0,1,2.85-2.39Z" fill="#e67229" />
                          <path d="M384.12,458.74h0c-.15.56-.15.56-.29.66h0a.33.33,0,0,0,.14-.19c0-.13.07-.3.11-.42a.09.09,0,0,1,.06-.06Zm1.44.37s0,0,0,.08c-.18.52-.18.52-.1.66.29.49.29.49.13.49-.68,0-.68,0-.81.09-.46.34-.46.34-.53.22-.26-.52-.26-.52-.4-.59l-.47-.25a.08.08,0,0,1,0-.13l0,0a0,0,0,0,0,0,.06c.59.32.59.32.67.46.23.45.23.45.28.42.49-.36.49-.36.68-.36.58,0,.58,0,.56-.05-.31-.52-.31-.52-.26-.68a1.9,1.9,0,0,0,.14-.4s0,0,0,0Z" fill="#c96324" />
                          <path d="M385.51,459.07a0,0,0,0,1,0,0c-.19.53-.19.53-.1.69.25.41.25.41.18.42-.71,0-.71,0-.85.1-.4.29-.4.29-.43.25-.27-.54-.27-.54-.43-.62-.49-.26-.49-.26-.45-.3l.36-.23a.43.43,0,0,0,.2-.25c.12-.46.12-.46.18-.43.57.35.57.35.78.34Z" fill="#11a300" />
                        </g>
                        <g>
                          <path d="M313.47,475.53a4.24,4.24,0,0,1-3.27-.3c-2.5-1.34-2.74-4.52-2.11-6.25a6,6,0,0,1,1.51-2.31,26.58,26.58,0,0,1,2.47-2.05l.69-.53A6,6,0,0,1,310,463a11.13,11.13,0,0,0-1.37-.78.74.74,0,0,0,0,.12c.17.86.68,3.49-1.31,4.28a3.52,3.52,0,0,1-2.57-.18,2.19,2.19,0,0,1-1.12-2.46c.5-5.08.55-5.61,1.74-6.08l.42-.14a2.12,2.12,0,0,1,1.7.07,1.3,1.3,0,0,1,.58.68,4.38,4.38,0,0,1,.75-.38,5.36,5.36,0,0,1,2.2-.34,6.26,6.26,0,0,1,2.91.87c.52.31,1,.59,1.25.72a3.89,3.89,0,0,1,1.46-1.11,2,2,0,0,1,1.51,0,3,3,0,0,1,1.5,2.06,5.29,5.29,0,0,1-.36,2.44,10.78,10.78,0,0,1-2.74,3.68,10.31,10.31,0,0,0-2.31,2.93,3.72,3.72,0,0,0,.09,2.88c.36,1.09.58,1.74.16,2.46A2.07,2.07,0,0,1,313.47,475.53Z" fill="url(#Безымянный_градиент_760)" />
                          <path d="M315.72,459.75c-.48.52-.62.44-2.28-.56a5.44,5.44,0,0,0-2.57-.78h0a3.72,3.72,0,0,0-3.39,1.5c.09-1.37-.42-1.9-1.53-1.57s-1,.31-1.55,5.58a1.73,1.73,0,0,0,.81,1.95c.15.07,3.65,1.65,2.68-3.35,0-.12,0-.2,0-.22,0-1.53,1.66-.46,2.64.17,1.95,1.22,2.89,1.18,4.4.6-1.45,1.42-3.31,2.51-4.76,3.94a5.25,5.25,0,0,0-1.34,2.05c-.59,1.62-.27,4.47,1.86,5.62.94.51,2.63.68,3.14-.2.29-.49.11-1-.22-2a4.22,4.22,0,0,1-.07-3.25c1.06-2.46,4.12-4,5-6.57a4.76,4.76,0,0,0,.33-2.19C318.84,460,317.83,457.28,315.72,459.75Z" fill="url(#Безымянный_градиент_761)" />
                          <g>
                            <path d="M316.19,460c.77-.9,1.39-1.11,1.87-1-.52-.41-1.3-.46-2.34.76-.28.3-.45.4-.87.22C315.65,460.42,315.82,460.38,316.19,460Z" fill="#992626" />
                            <path d="M308,460.15a3.74,3.74,0,0,1,3.39-1.5,5.3,5.3,0,0,1,1.93.45,5.33,5.33,0,0,0-2.39-.68h0a3.75,3.75,0,0,0-2.95,1,4.23,4.23,0,0,0-.45.5S308,460.1,308,460.15Z" fill="#992626" />
                            <path d="M309.63,461.94c.31.17.62.37.88.54a9.55,9.55,0,0,0,1.09.6l-.63-.37A9.58,9.58,0,0,0,309.63,461.94Z" fill="#992626" />
                            <path d="M304.87,464.16c.52-5.27.52-5.27,1.55-5.58a1.72,1.72,0,0,1,.75-.08,1.13,1.13,0,0,0-1.22-.15c-1,.31-1,.31-1.55,5.58a1.73,1.73,0,0,0,.81,1.95,1.48,1.48,0,0,0,.23.09A1.85,1.85,0,0,1,304.87,464.16Z" fill="#992626" />
                            <path d="M309.28,469.3a5.32,5.32,0,0,1,1.34-2.05c1.45-1.43,3.3-2.52,4.76-3.94l-.47-.23-.6.56c-1.34,1.17-2.9,2.15-4.15,3.38a5.25,5.25,0,0,0-1.34,2.05c-.59,1.62-.27,4.47,1.86,5.62l.31.14C309,473.63,308.71,470.88,309.28,469.3Z" fill="#992626" />
                          </g>
                        </g>
                        <g>
                          <ellipse cx="409.09" cy="466.69" rx="8.48" ry="7.37" transform="translate(-211.49 461.01) rotate(-48.24)" fill="#ffed2e" />
                          <path d="M403.61,469.49c2.87-.18,5.12,2.29,4,3.68a1.28,1.28,0,0,1-1.36.55l.41.08c-2.83,1-6.85-.72-5.41-3a2.33,2.33,0,0,1,.53-.59,2.41,2.41,0,0,1,.29.4c-.07-.18-.11-.3-.17-.49a3.41,3.41,0,0,1,1.7-.6Z" fill="#ffed2e" />
                          <path d="M414,458.77c2.14-.16,3.63,2.93,2.25,4.66a2.7,2.7,0,1,1-2.25-4.66Z" fill="#ffed2e" />
                          <path d="M409.8,459.84a7.1,7.1,0,0,1,4.4,1.14c-6.58-1.75-11.77,5-10.82,9.66,0,.13.07.3.11.43l-.06,0c-2.46-3.21.18-9.33,4.71-10.91a7,7,0,0,1,1.66-.36Z" fill="#fff99a" />
                          <path d="M409.94,474.45a8,8,0,0,1-4.84-.36c7.24.58,12-7,10.46-11.44,0-.13-.11-.28-.16-.4l.06-.05c3,2.74.88,9.25-3.78,11.6a8.53,8.53,0,0,1-1.74.65Z" fill="#e8d82a" />
                        </g>
                        <g>
                          <path d="M365,462.36c.62,5.74-4,12.48-10.61,12.23,7.7,2.46,13.24-7,10.61-12.23Zm-14,9.73c-1.74-7,4.61-12.3,11-12-7-2.15-15.22,5.15-11,12Zm9.18-12.71a6.61,6.61,0,0,1,4,1.78c-.73.63,0,1,.06,1,.2.09.3,0,.57-.16,2.85,2.68-.12,14.24-8.53,13.3a7.45,7.45,0,0,1-5.09-12,10.23,10.23,0,0,1,9-3.91Z" fill="#7d38cc" />
                          <path d="M365,462.36c2.64,5.25-2.9,14.69-10.61,12.23,6.63.25,11.22-6.49,10.61-12.23Z" fill="#662ea7" />
                          <path d="M360.55,459.76a7.76,7.76,0,0,1,1.54.32c-6.42-.29-12.77,5-11,12-3.55-5.7,2.12-13.08,9.49-12.33Z" fill="#a87add" />
                          <path d="M366.57,458a.36.36,0,0,1,.21.11c.85,1,.85,1,.7,1.2s-2.41,3-3.14,2.81a.64.64,0,0,1-.39-.76h0a5.58,5.58,0,0,0,1.26-1.36c.39-.59.66-1.27,1.06-1.86a.3.3,0,0,1,.28-.13Z" fill="#5c3f2f" />
                        </g>
                        <path d="M340.19,463.19c1.72-1.66-.93-4.95-3.45-1.86a10.79,10.79,0,0,0-.87,1.23,10.43,10.43,0,0,0,.28-1.51c.48-4.12-3.72-3.81-3.63-1.43-1.58-1.81-4.7,1-1.77,3.64a9.82,9.82,0,0,0,1.17.91,9.25,9.25,0,0,0-1.43-.29c-3.91-.51-3.62,3.92-1.36,3.83-1.72,1.66.94,5,3.45,1.86.17-.21.33-.42.47-.63a26.55,26.55,0,0,0-.69,3.06c-.11.58-.17,1.16-.26,1.74s-.12,1.16-.18,1.75h.72c0-.56.05-1.12.09-1.68s.09-1.15.17-1.72.14-1.09.23-1.63c0,3.46,3.75,3.07,3.67.82,1.58,1.81,4.7-1,1.77-3.64a9.82,9.82,0,0,0-1.17-.91,9.25,9.25,0,0,0,1.43.29C342.74,467.52,342.45,463.1,340.19,463.19Z" fill="#6fb353" />
                      </g>
                    </g>
                  </g>
                  <g>
                    <path id="SVGID-2" data-name="SVGID" d="M357.58,377.81c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.51-22.17,37.5h0c-.08,7.1,2.37,12.12,6.38,14.45l14.58,8.47c-4-2.33-6.46-7.35-6.38-14.45.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.57,15.17-1.31Z" fill="url(#Безымянный_градиент_759)" />
                    <g clipPath="url(#clip-path-12)">
                      <g id="rul2">
                        <g>
                          <ellipse cx="355.79" cy="348.39" rx="8.48" ry="7.37" transform="translate(-141.05 381.75) rotate(-48.24)" fill="#ffed2e" />
                          <path d="M350.31,351.19c2.87-.18,5.12,2.29,4,3.68a1.28,1.28,0,0,1-1.36.55l.41.08c-2.83,1-6.85-.72-5.41-3a2.33,2.33,0,0,1,.53-.59,2.41,2.41,0,0,1,.29.4c-.07-.18-.11-.3-.17-.49a3.37,3.37,0,0,1,1.7-.6Z" fill="#ffed2e" />
                          <path d="M360.66,340.47c2.14-.16,3.63,2.93,2.25,4.66a2.7,2.7,0,1,1-2.25-4.66Z" fill="#ffed2e" />
                          <path d="M356.5,341.55a7.1,7.1,0,0,1,4.4,1.14c-6.58-1.75-11.77,5-10.82,9.66,0,.13.07.3.11.43l-.06,0c-2.46-3.21.18-9.33,4.71-10.91a6.56,6.56,0,0,1,1.66-.36Z" fill="#fff99a" />
                          <path d="M356.64,356.15a8,8,0,0,1-4.84-.36c7.24.58,12-7,10.46-11.44,0-.13-.11-.28-.16-.4l.06-.05c3,2.74.88,9.25-3.78,11.6a8,8,0,0,1-1.74.65Z" fill="#e8d82a" />
                        </g>
                        <g>
                          <path d="M260.17,357.23a4.24,4.24,0,0,1-3.27-.3c-2.5-1.34-2.74-4.52-2.11-6.25a6,6,0,0,1,1.51-2.31,26.58,26.58,0,0,1,2.47-2.05l.69-.53a6,6,0,0,1-2.77-1.09,11.13,11.13,0,0,0-1.37-.78.74.74,0,0,0,0,.12c.17.86.68,3.49-1.31,4.28a3.52,3.52,0,0,1-2.57-.18,2.19,2.19,0,0,1-1.12-2.46c.5-5.08.55-5.61,1.74-6.08l.42-.14a2.12,2.12,0,0,1,1.7.07,1.3,1.3,0,0,1,.58.68,4.38,4.38,0,0,1,.75-.38,5.36,5.36,0,0,1,2.2-.34,6.26,6.26,0,0,1,2.91.87c.52.31,1,.59,1.25.72a3.89,3.89,0,0,1,1.46-1.11,2,2,0,0,1,1.51,0,3,3,0,0,1,1.5,2.06,5.29,5.29,0,0,1-.36,2.44,10.78,10.78,0,0,1-2.74,3.68,10.31,10.31,0,0,0-2.31,2.93,3.72,3.72,0,0,0,.09,2.88c.36,1.09.58,1.74.16,2.46A2,2,0,0,1,260.17,357.23Z" fill="url(#Безымянный_градиент_760-2)" />
                          <path d="M262.42,341.45c-.48.52-.62.44-2.28-.56a5.44,5.44,0,0,0-2.57-.78h0a3.72,3.72,0,0,0-3.39,1.5c.09-1.37-.42-1.9-1.53-1.57s-1,.31-1.55,5.58a1.72,1.72,0,0,0,.81,1.95c.15.07,3.65,1.65,2.68-3.35,0-.12,0-.2,0-.22,0-1.53,1.66-.46,2.64.17,1.95,1.22,2.89,1.18,4.4.6-1.45,1.42-3.31,2.51-4.76,3.94a5.25,5.25,0,0,0-1.34,2.05c-.59,1.62-.27,4.47,1.86,5.62.94.51,2.63.68,3.14-.2.29-.49.11-1-.22-2a4.22,4.22,0,0,1-.07-3.25c1.06-2.46,4.12-4,5-6.57a4.76,4.76,0,0,0,.33-2.19C265.54,341.71,264.53,339,262.42,341.45Z" fill="url(#Безымянный_градиент_761-2)" />
                          <g>
                            <path d="M262.89,341.69c.77-.9,1.39-1.11,1.87-1-.52-.41-1.3-.46-2.34.76-.28.3-.45.4-.87.22C262.35,342.13,262.52,342.08,262.89,341.69Z" fill="#992626" />
                            <path d="M254.66,341.85a3.74,3.74,0,0,1,3.39-1.5,5.3,5.3,0,0,1,1.93.45,5.33,5.33,0,0,0-2.39-.68h0a3.75,3.75,0,0,0-2.95,1,4.23,4.23,0,0,0-.45.5A2,2,0,0,1,254.66,341.85Z" fill="#992626" />
                            <path d="M256.33,343.64c.31.17.62.37.88.54a9.55,9.55,0,0,0,1.09.6l-.63-.37A9.58,9.58,0,0,0,256.33,343.64Z" fill="#992626" />
                            <path d="M251.57,345.87c.52-5.27.52-5.27,1.55-5.58a1.72,1.72,0,0,1,.75-.08,1.13,1.13,0,0,0-1.22-.15c-1,.31-1,.31-1.55,5.58a1.72,1.72,0,0,0,.81,1.95,1.48,1.48,0,0,0,.23.09A1.83,1.83,0,0,1,251.57,345.87Z" fill="#992626" />
                            <path d="M256,351a5.32,5.32,0,0,1,1.34-2.05c1.45-1.43,3.3-2.52,4.76-3.94l-.47-.23-.6.56c-1.34,1.17-2.9,2.15-4.15,3.38a5.25,5.25,0,0,0-1.34,2c-.59,1.62-.27,4.47,1.86,5.62l.31.14C255.7,355.33,255.41,352.58,256,351Z" fill="#992626" />
                          </g>
                        </g>
                        <g>
                          <path d="M388.07,349.75c0-5.11-3-9.24-7.92-9.24s-7.92,4.14-7.92,9.24a10.43,10.43,0,0,0,1.27,5h-1.06v1.65h4.05v-1.65h0a9.58,9.58,0,0,1-1.11-4.39c0-3.56,2-6.19,4.75-6.19s4.75,2.64,4.75,6.19a9.37,9.37,0,0,1-1.11,4.39v1.65h4v-1.65h-1A10.4,10.4,0,0,0,388.07,349.75Zm-13.4,2.68a.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57.54.54,0,1,1,1.08,0Zm-1.18-4.56a.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57.54.54,0,1,1-1.08,0Zm2.35-3.07a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,375.84,344.8Zm4.31-1.82a.57.57,0,1,1,.54-.57A.55.55,0,0,1,380.15,343Zm6.08,4.32a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.57.57,0,0,1,0-1.14Zm-.06,4.56a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57A.56.56,0,0,1,386.17,351.86Zm-1.75-7.06a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,384.42,344.8Z" fill="#ffc619" />
                          <g>
                            <ellipse cx="374.13" cy="352.43" rx="0.54" ry="0.57" fill="#4d2621" />
                            <ellipse cx="374.03" cy="347.87" rx="0.54" ry="0.57" fill="#4d2621" />
                            <path d="M375.84,344.8a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,375.84,344.8Z" fill="#4d2621" />
                            <path d="M380.15,343a.57.57,0,1,1,.54-.57A.55.55,0,0,1,380.15,343Z" fill="#4d2621" />
                            <path d="M386.23,347.3a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.57.57,0,0,1,0-1.14Z" fill="#4d2621" />
                            <path d="M386.17,351.86a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57A.56.56,0,0,1,386.17,351.86Z" fill="#4d2621" />
                            <path d="M384.42,344.8a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,384.42,344.8Z" fill="#4d2621" />
                          </g>
                        </g>
                        <g>
                          <path d="M327.18,354.63c-4-4.37-4.27-9.82-.6-13.88-6.36,3.18-5.3,12.26.26,15.15a8.25,8.25,0,0,0,3.71.9,9.61,9.61,0,0,1-3.37-2.17Zm3.8-12.25a.12.12,0,0,0,.16,0c.47-.34.47-.34.64-.35h.55s.1,0,.06-.12c-.3-.5-.3-.5-.25-.64a1.9,1.9,0,0,0,.14-.4c0-.09-.12-.12-.12-.12-.71,0-.71,0-.88-.08-.5-.3-.5-.3-.54-.17-.14.53-.14.53-.25.61s-.26.15-.36.23-.05.16,0,.17c.57.3.57.3.64.43l.23.44Zm2.25,14c6.65-2.18,9.28-9.73,3.13-14.83l-.13-.08c5.39,5.08,2.48,11.48-3,14.91ZM338.12,343c4.74,8.32-3,14.56-7.95,14A9,9,0,0,1,323.63,343c3.45-4.77,10.49-4,14.49-.05Z" fill="#ff7e2e" />
                          <path d="M338.12,343c4.61,6.7-1,12.12-4.89,13.42-6.08,2,8.39-9.83,3-14.91a11,11,0,0,1,1.89,1.49Z" fill="#ffb282" />
                          <path d="M326.57,340.75c-5.1,5.64-2,13.67,4,16-7.24-.22-10.46-8.66-6.82-13.65a7.64,7.64,0,0,1,2.85-2.39Z" fill="#e67229" />
                          <path d="M330.82,340.45h0c-.15.56-.15.56-.29.66h0a.33.33,0,0,0,.14-.19c0-.13.07-.3.11-.42s0-.06.06-.06Zm1.44.36s0,0,0,.08c-.18.52-.18.52-.1.66.29.49.29.49.13.49-.68,0-.68,0-.81.09-.46.34-.46.34-.53.22-.26-.52-.26-.52-.4-.59l-.47-.25a.08.08,0,0,1,0-.13l0,0a0,0,0,0,0,0,.06c.59.32.59.32.67.46.23.45.23.45.28.42.49-.36.49-.36.68-.36.58,0,.58,0,.56-.05-.31-.52-.31-.52-.26-.68a1.9,1.9,0,0,0,.14-.4s0,0,0,0Z" fill="#c96324" />
                          <path d="M332.21,340.77a0,0,0,0,1,0,0c-.19.53-.19.53-.1.69.25.41.25.41.18.42-.71,0-.71,0-.85.1-.4.29-.4.29-.43.25-.27-.54-.27-.54-.43-.62-.49-.26-.49-.26-.45-.3l.36-.23a.43.43,0,0,0,.2-.25c.12-.46.12-.46.18-.43.57.35.57.35.78.34Z" fill="#11a300" />
                        </g>
                        <g>
                          <path d="M311.74,344.07c.62,5.74-4,12.48-10.61,12.23,7.7,2.45,13.24-7,10.61-12.23Zm-14,9.72c-1.74-7,4.61-12.3,11-12-7-2.15-15.21,5.15-11,12Zm9.19-12.71a6.61,6.61,0,0,1,4,1.78c-.73.63,0,1,.06,1,.2.09.3,0,.57-.16,2.85,2.68-.12,14.24-8.53,13.3a7.45,7.45,0,0,1-5.09-12,10.23,10.23,0,0,1,9-3.91Z" fill="#7d38cc" />
                          <path d="M311.74,344.07c2.64,5.25-2.9,14.69-10.61,12.23,6.62.24,11.22-6.49,10.61-12.23Z" fill="#662ea7" />
                          <path d="M307.25,341.46a7.76,7.76,0,0,1,1.54.32c-6.42-.29-12.77,5-11,12-3.55-5.7,2.12-13.08,9.49-12.33Z" fill="#a87add" />
                          <path d="M313.27,339.73a.36.36,0,0,1,.21.11c.85,1,.85,1,.7,1.2s-2.41,3-3.14,2.81a.64.64,0,0,1-.39-.76h0a5.58,5.58,0,0,0,1.26-1.36c.39-.59.66-1.27,1.06-1.86a.32.32,0,0,1,.28-.13Z" fill="#5c3f2f" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g>
                    <path id="SVGID-3" data-name="SVGID" d="M373.75,387.29c-3.88-2.26-9.23-2-15.17,1.31-12.07,6.73-22,23.52-22.17,37.51-.08,7.11,2.37,12.12,6.38,14.46L357.37,449c-4-2.33-6.46-7.35-6.38-14.46.17-14,10.1-30.78,22.17-37.51,5.94-3.31,11.29-3.57,15.17-1.31Z" fill="url(#Безымянный_градиент_759-2)" />
                    <g clipPath="url(#clip-path-13)">
                      <g id="rul1">
                        <g>
                          <path d="M313.74,349.07c.62,5.74-4,12.48-10.61,12.23,7.7,2.45,13.24-7,10.61-12.23Zm-14,9.72c-1.74-7,4.61-12.3,11-12-7-2.15-15.21,5.15-11,12Zm9.19-12.71a6.61,6.61,0,0,1,4,1.78c-.73.63,0,1,.06,1,.2.09.3,0,.57-.16,2.85,2.68-.12,14.24-8.53,13.3a7.45,7.45,0,0,1-5.09-12,10.23,10.23,0,0,1,9-3.91Z" fill="#7d38cc" />
                          <path d="M313.74,349.07c2.64,5.25-2.9,14.69-10.61,12.23,6.62.24,11.22-6.49,10.61-12.23Z" fill="#662ea7" />
                          <path d="M309.25,346.46a7.76,7.76,0,0,1,1.54.32c-6.42-.29-12.77,5-11,12-3.55-5.7,2.12-13.08,9.49-12.33Z" fill="#a87add" />
                          <path d="M315.27,344.73a.36.36,0,0,1,.21.11c.85,1,.85,1,.7,1.2s-2.41,3-3.14,2.81a.64.64,0,0,1-.39-.76h0a5.58,5.58,0,0,0,1.26-1.36c.39-.59.66-1.27,1.06-1.86a.32.32,0,0,1,.28-.13Z" fill="#5c3f2f" />
                        </g>
                        <g>
                          <path d="M262.17,362.23a4.24,4.24,0,0,1-3.27-.3c-2.5-1.34-2.74-4.52-2.11-6.25a6,6,0,0,1,1.51-2.31,26.58,26.58,0,0,1,2.47-2.05l.69-.53a6,6,0,0,1-2.77-1.09,11.13,11.13,0,0,0-1.37-.78.74.74,0,0,0,0,.12c.17.86.68,3.49-1.31,4.28a3.52,3.52,0,0,1-2.57-.18,2.19,2.19,0,0,1-1.12-2.46c.5-5.08.55-5.61,1.74-6.08l.42-.14a2.12,2.12,0,0,1,1.7.07,1.3,1.3,0,0,1,.58.68,4.38,4.38,0,0,1,.75-.38,5.36,5.36,0,0,1,2.2-.34,6.26,6.26,0,0,1,2.91.87c.52.31,1,.59,1.25.72a3.89,3.89,0,0,1,1.46-1.11,2,2,0,0,1,1.51,0,3,3,0,0,1,1.5,2.06,5.29,5.29,0,0,1-.36,2.44,10.78,10.78,0,0,1-2.74,3.68,10.31,10.31,0,0,0-2.31,2.93,3.72,3.72,0,0,0,.09,2.88c.36,1.09.58,1.74.16,2.46A2,2,0,0,1,262.17,362.23Z" fill="url(#Безымянный_градиент_760-3)" />
                          <path d="M264.42,346.45c-.48.52-.62.44-2.28-.56a5.44,5.44,0,0,0-2.57-.78h0a3.72,3.72,0,0,0-3.39,1.5c.09-1.37-.42-1.9-1.53-1.57s-1,.31-1.55,5.58a1.72,1.72,0,0,0,.81,1.95c.15.07,3.65,1.65,2.68-3.35,0-.12,0-.2,0-.22,0-1.53,1.66-.46,2.64.17,1.95,1.22,2.89,1.18,4.4.6-1.45,1.42-3.31,2.51-4.76,3.94a5.25,5.25,0,0,0-1.34,2.05c-.59,1.62-.27,4.47,1.86,5.62.94.51,2.63.68,3.14-.2.29-.49.11-1-.22-2a4.22,4.22,0,0,1-.07-3.25c1.06-2.46,4.12-4,5-6.57a4.76,4.76,0,0,0,.33-2.19C267.54,346.71,266.53,344,264.42,346.45Z" fill="url(#Безымянный_градиент_761-3)" />
                          <g>
                            <path d="M264.89,346.69c.77-.9,1.39-1.11,1.87-1-.52-.41-1.3-.46-2.34.76-.28.3-.45.4-.87.22C264.35,347.13,264.52,347.08,264.89,346.69Z" fill="#992626" />
                            <path d="M256.66,346.85a3.74,3.74,0,0,1,3.39-1.5,5.3,5.3,0,0,1,1.93.45,5.33,5.33,0,0,0-2.39-.68h0a3.75,3.75,0,0,0-2.95,1,4.23,4.23,0,0,0-.45.5A2,2,0,0,1,256.66,346.85Z" fill="#992626" />
                            <path d="M258.33,348.64c.31.17.62.37.88.54a9.55,9.55,0,0,0,1.09.6l-.63-.37A9.58,9.58,0,0,0,258.33,348.64Z" fill="#992626" />
                            <path d="M253.57,350.87c.52-5.27.52-5.27,1.55-5.58a1.72,1.72,0,0,1,.75-.08,1.13,1.13,0,0,0-1.22-.15c-1,.31-1,.31-1.55,5.58a1.72,1.72,0,0,0,.81,1.95,1.48,1.48,0,0,0,.23.09A1.83,1.83,0,0,1,253.57,350.87Z" fill="#992626" />
                            <path d="M258,356a5.32,5.32,0,0,1,1.34-2.05c1.45-1.43,3.3-2.52,4.76-3.94l-.47-.23-.6.56c-1.34,1.17-2.9,2.15-4.15,3.38a5.25,5.25,0,0,0-1.34,2c-.59,1.62-.27,4.47,1.86,5.62l.31.14C257.7,360.33,257.41,357.58,258,356Z" fill="#992626" />
                          </g>
                        </g>
                        <g>
                          <path d="M390.07,354.75c0-5.11-3-9.24-7.92-9.24s-7.92,4.14-7.92,9.24a10.43,10.43,0,0,0,1.27,5h-1.06v1.65h4.05v-1.65h0a9.58,9.58,0,0,1-1.11-4.39c0-3.56,2-6.19,4.75-6.19s4.75,2.64,4.75,6.19a9.37,9.37,0,0,1-1.11,4.39v1.65h4v-1.65h-1A10.4,10.4,0,0,0,390.07,354.75Zm-13.4,2.68a.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57.54.54,0,1,1,1.08,0Zm-1.18-4.56a.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57.54.54,0,1,1-1.08,0Zm2.35-3.07a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,377.84,349.8Zm4.31-1.82a.57.57,0,1,1,.54-.57A.55.55,0,0,1,382.15,348Zm6.08,4.32a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.57.57,0,0,1,0-1.14Zm-.06,4.56a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57A.56.56,0,0,1,388.17,356.86Zm-1.75-7.06a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,386.42,349.8Z" fill="#ffc619" />
                          <g>
                            <ellipse cx="376.13" cy="357.43" rx="0.54" ry="0.57" fill="#4d2621" />
                            <ellipse cx="376.03" cy="352.87" rx="0.54" ry="0.57" fill="#4d2621" />
                            <path d="M377.84,349.8a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,377.84,349.8Z" fill="#4d2621" />
                            <path d="M382.15,348a.57.57,0,1,1,.54-.57A.55.55,0,0,1,382.15,348Z" fill="#4d2621" />
                            <path d="M388.23,352.3a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.57.57,0,0,1,0-1.14Z" fill="#4d2621" />
                            <path d="M388.17,356.86a.55.55,0,0,1,.54.57.56.56,0,0,1-.54.57.55.55,0,0,1-.54-.57A.56.56,0,0,1,388.17,356.86Z" fill="#4d2621" />
                            <path d="M386.42,349.8a.55.55,0,0,1-.54-.57.56.56,0,0,1,.54-.57.55.55,0,0,1,.54.57A.56.56,0,0,1,386.42,349.8Z" fill="#4d2621" />
                          </g>
                        </g>
                        <path d="M288.89,349.89c1.72-1.66-.93-4.95-3.45-1.86a10.79,10.79,0,0,0-.87,1.23,10.43,10.43,0,0,0,.28-1.51c.48-4.12-3.72-3.81-3.63-1.43-1.58-1.81-4.7,1-1.77,3.64a9.82,9.82,0,0,0,1.17.91,9.25,9.25,0,0,0-1.43-.29c-3.91-.51-3.62,3.92-1.36,3.83-1.72,1.66.94,4.95,3.45,1.86.17-.21.33-.42.47-.63a26.55,26.55,0,0,0-.69,3.06c-.11.58-.17,1.16-.26,1.74s-.12,1.16-.18,1.75h.72c0-.56.05-1.12.09-1.68s.09-1.15.17-1.72.14-1.09.23-1.63c0,3.46,3.75,3.07,3.67.82,1.58,1.81,4.7-1,1.77-3.64a9.82,9.82,0,0,0-1.17-.91,9.25,9.25,0,0,0,1.43.29C291.44,354.22,291.15,349.8,288.89,349.89Z" fill="#6fb353" />
                        <g>
                          <ellipse cx="357.79" cy="353.39" rx="8.48" ry="7.37" transform="translate(-144.11 384.91) rotate(-48.24)" fill="#ffed2e" />
                          <path d="M352.31,356.19c2.87-.18,5.12,2.29,4,3.68a1.28,1.28,0,0,1-1.36.55l.41.08c-2.83,1-6.85-.72-5.41-3a2.33,2.33,0,0,1,.53-.59,2.41,2.41,0,0,1,.29.4c-.07-.18-.11-.3-.17-.49a3.37,3.37,0,0,1,1.7-.6Z" fill="#ffed2e" />
                          <path d="M362.66,345.47c2.14-.16,3.63,2.93,2.25,4.66a2.7,2.7,0,1,1-2.25-4.66Z" fill="#ffed2e" />
                          <path d="M358.5,346.55a7.1,7.1,0,0,1,4.4,1.14c-6.58-1.75-11.77,5-10.82,9.66,0,.13.07.3.11.43l-.06,0c-2.46-3.21.18-9.33,4.71-10.91a6.56,6.56,0,0,1,1.66-.36Z" fill="#fff99a" />
                          <path d="M358.64,361.15a8,8,0,0,1-4.84-.36c7.24.58,12-7,10.46-11.44,0-.13-.11-.28-.16-.4l.06-.05c3,2.74.88,9.25-3.78,11.6a8,8,0,0,1-1.74.65Z" fill="#e8d82a" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <path id="casline3" d="M361.37,369.34c-13.5-4.95-32.18,1.54-42.75,19.55s-9,34.58,1.65,48" fill="none" />
                  <path id="casline2" d="M377,378.53c-13.5-4.95-32.18,1.54-42.75,19.55s-9,34.58,1.65,48" fill="none" />
                  <path id="casline1" d="M392.41,388.71c-13.5-4.95-32.18,1.54-42.75,19.55s-9,34.58,1.65,48" fill="none" />
                  <path d="M367.26,448.64a16.6,16.6,0,0,0,8-2.34c10-5.56,18.2-19.48,18.34-31,.06-4.66-1.18-8.4-3.56-10.81a9.53,9.53,0,0,0-6.94-2.8,16.6,16.6,0,0,0-8,2.34c-10,5.56-18.2,19.48-18.34,31-.06,4.66,1.18,8.4,3.56,10.81A9.53,9.53,0,0,0,367.26,448.64Z" fill="#e6e6e5" />
                  <path d="M393.22,431.2a3.83,3.83,0,0,0,2.93-1.2,1.16,1.16,0,0,0,.2-1.18,1.89,1.89,0,0,0-1.58-.94,4.12,4.12,0,0,0-.51,0,3.83,3.83,0,0,0-2.93,1.2,1.16,1.16,0,0,0-.2,1.18,1.89,1.89,0,0,0,1.58.94Z" fill="#d9d9d8" />
                  <g>
                    <g>
                      <path d="M372.3,452.36c3.15,1.83,7.5,1.62,12.32-1.06,9.8-5.46,17.86-19.1,18-30.46.07-5.77-1.92-9.85-5.18-11.74l-9.6-5.58c3.26,1.89,5.25,6,5.18,11.74-.14,11.36-8.2,25-18,30.46-4.82,2.69-9.17,2.89-12.32,1.06Z" fill="#eea89a" />
                      <path d="M367.45,439.39c-.13,10.56,7.15,15,16.27,9.93s16.61-17.76,16.74-28.32-7.15-15-16.27-9.93S367.58,428.82,367.45,439.39ZM373,436.3c.09-7,5.06-15.44,11.12-18.82s10.89-.42,10.81,6.6-5.06,15.44-11.12,18.82-10.89.42-10.81-6.6Z" fill="url(#Безымянный_градиент_764)" />
                      <path d="M367.12,440.61c-.14,11.36,7.69,16.14,17.5,10.68s17.86-19.1,18-30.46-7.69-16.14-17.5-10.68S367.26,429.25,367.12,440.61Zm1.25-.69c.13-10.56,7.62-23.24,16.74-28.32s16.4-.63,16.27,9.93-7.62,23.24-16.74,28.32-16.4.63-16.27-9.93Z" fill="#ed937b" />
                      <path d="M397.83,420.38l-6.11-3.55c-2-1.13-4.63-1-7.61.66-6.05,3.37-11,11.8-11.12,18.82l6.11,3.55c.09-7,5.06-15.44,11.12-18.82C393.2,419.38,395.88,419.25,397.83,420.38Z" fill="url(#Безымянный_градиент_771)" />
                      <path d="M379.1,439.85c-.09,7,4.75,10,10.81,6.6s11-11.8,11.12-18.82-4.75-10-10.81-6.6S379.19,432.83,379.1,439.85Zm3.79-2.11a15.78,15.78,0,0,1,7.28-12.32c4-2.21,7.13-.28,7.08,4.32A15.78,15.78,0,0,1,390,442.06c-4,2.21-7.14.28-7.08-4.32Z" fill="#ed937b" />
                      <path d="M393.61,445.64l1.2.7A4.22,4.22,0,0,0,399,446a13.28,13.28,0,0,0,6.12-10.36c0-2-.65-3.35-1.76-4l-1.2-.7c1.11.64,1.78,2,1.76,4a13.28,13.28,0,0,1-6.12,10.36A4.22,4.22,0,0,1,393.61,445.64Z" fill="#eea89a" />
                      <path d="M376.19,443.55l6.11,3.55c-2-1.17-3.24-3.69-3.2-7.25L373,436.3C373,439.87,374.18,442.38,376.19,443.55Z" fill="url(#Безымянный_градиент_771-2)" />
                      <path d="M362.7,446.78l9.6,5.58c-3.26-1.89-5.25-6-5.18-11.74l-9.6-5.58C357.46,440.81,359.44,444.89,362.7,446.78Z" fill="url(#Безымянный_градиент_771-3)" />
                      <path d="M391.85,441.65c-.05,3.86,2.62,5.49,5.95,3.63a13.28,13.28,0,0,0,6.12-10.36c.05-3.86-2.62-5.49-5.95-3.63A13.24,13.24,0,0,0,391.85,441.65Z" fill="url(#Безымянный_градиент_776-2)" />
                      <path d="M404.17,430.23l-9-5.24c-1.28-.74-3-.66-5,.43a15.8,15.8,0,0,0-7.28,12.32l9,5.24a15.78,15.78,0,0,1,7.28-12.32C401.13,429.57,402.89,429.49,404.17,430.23Z" fill="url(#Безымянный_градиент_771-4)" />
                      <path d="M385,442.49l9,5.24c-1.32-.77-2.12-2.41-2.09-4.75l-9-5.24C382.86,440.08,383.66,441.73,385,442.49Z" fill="url(#Безымянный_градиент_771-5)" />
                      <path d="M391.9,443c-.06,4.6,3.11,6.53,7.08,4.32A15.77,15.77,0,0,0,406.26,435c.06-4.6-3.11-6.53-7.08-4.32A15.8,15.8,0,0,0,391.9,443Zm1.15-.64A13.28,13.28,0,0,1,399.17,432c3.33-1.86,6-.23,5.95,3.63A13.28,13.28,0,0,1,399,446c-3.34,1.86-6,.24-5.95-3.63Z" fill="#ed937b" />
                      <path d="M397.44,409.09l-9.6-5.58c-3.15-1.83-7.5-1.62-12.32,1.06-9.8,5.46-17.86,19.1-18,30.46l9.6,5.58c.14-11.36,8.2-25,18-30.46C389.94,407.46,394.29,407.26,397.44,409.09Z" fill="url(#Безымянный_градиент_771-6)" />
                    </g>
                    <g>
                      <path d="M367.12,440.6h-.05l-9.51-5.53c.11-9.12,5.33-19.72,12.46-26.36l9.49,5.51.07.05C372.45,420.9,367.24,431.48,367.12,440.6Z" fill="url(#Безымянный_градиент_776-3)" />
                      <path d="M379.05,439.82,373,436.3c.07-5.64,3.29-12.18,7.7-16.28l6,3.51.07.05h0c-.54.51-1.07,1.05-1.57,1.62l0,0-.36.42h0c-.48.58-.94,1.19-1.37,1.81l-.07.09c-.1.14-.19.28-.28.42l-.06.09c-.29.45-.57.91-.84,1.37l-.06.11-.22.4-.1.18c-.07.13-.13.26-.2.38l-.1.2-.19.39s0,.07-.05.1c-.12.26-.24.52-.35.78,0,.08-.07.17-.11.25s-.09.23-.14.34-.07.19-.11.28-.08.22-.13.33l-.11.3c0,.1-.07.21-.11.31l-.15.45-.12.37c0,.12-.08.25-.11.37s-.05.19-.08.28l-.09.35-.07.28c0,.12-.06.25-.08.37l-.06.25c0,.2-.08.39-.11.58l0,.18c0,.15-.05.3-.07.45l0,.25c0,.13,0,.25,0,.37a2.11,2.11,0,0,0,0,.25l0,.38c0,.08,0,.15,0,.23s0,.39,0,.58h0S379.07,439.83,379.05,439.82Z" fill="url(#Безымянный_градиент_776-4)" />
                      <path d="M382.89,437.74a16.08,16.08,0,0,1,5-10.66l8.94,5.19.07.05a14.75,14.75,0,0,0-1,1.06l0,0-.24.28h0a14.85,14.85,0,0,0-.9,1.19.1.1,0,0,1,0,.05l-.19.28,0,.05c-.2.3-.38.61-.56.92l0,.05-.15.27-.06.11-.14.26-.06.12-.13.26h0c-.09.19-.18.38-.26.57L393,438a2.29,2.29,0,0,1-.1.23c0,.06-.05.11-.07.17l-.09.22-.07.18c0,.07-.05.14-.08.22s-.05.16-.08.25l-.1.31-.06.22a1.46,1.46,0,0,0-.05.2l-.06.21c0,.07,0,.13,0,.19s0,.15-.05.23,0,.12,0,.18-.05.24-.07.36l0,.16c0,.09,0,.17,0,.26a1.1,1.1,0,0,0,0,.18l0,.23c0,.06,0,.12,0,.18s0,.16,0,.24,0,.11,0,.16,0,.25,0,.37h-.05Z" fill="url(#Безымянный_градиент_776-5)" />
                    </g>
                    <g id="handlecasino">
                      <path d="M388.45,406.89a3.71,3.71,0,0,0,3.13-1l4.3,23.73a3.68,3.68,0,0,1-3.13,1c-.79-.1-1.28-.45-1.36-.89-.27-1.47-4-22.18-4.3-23.73C387.17,406.44,387.66,406.79,388.45,406.89Z" fill="#eea89a" />
                      <path d="M394.37,430.48a2.89,2.89,0,0,0,1.51-.9c-.16-.89-3.23-17.8-4.3-23.73-.32.42-1,.3-1.73.47,1.47,7.9,2.73,16.32,4.52,24.16Z" fill="url(#Безымянный_градиент_776-6)" />
                      <path d="M391.78,405.15c.11.62,4.29,23.64,4.3,23.73a.86.86,0,0,1-.21.7l-4.3-23.73A.86.86,0,0,0,391.78,405.15Z" fill="#ed937b" />
                      <path d="M388,406.79c1.07,5.88,3.51,19.34,4.3,23.73-.52-.16-.84-.45-.9-.79-.27-1.47-4-22.18-4.3-23.73C387.15,406.35,387.47,406.63,388,406.79Z" fill="url(#Безымянный_градиент_776-7)" />
                      <ellipse cx="389.42" cy="406.09" rx="2.39" ry="1.29" transform="matrix(0.98, -0.18, 0.18, 0.98, -66.23, 76.04)" fill="#ccc" />
                      <circle cx="388.47" cy="400.25" r="6.56" fill="#ef4832" />
                      <circle cx="386.13" cy="399.01" r="2.98" fill="#c35949" />
                      <path d="M387.47,406.17a7.17,7.17,0,0,0,7.17-7.17,6.88,6.88,0,0,0-.12-1.29,6.56,6.56,0,0,1-9.84,7.9A7.16,7.16,0,0,0,387.47,406.17Z" fill="#b43125" />
                      <g>
                        <ellipse cx="388.75" cy="400.17" rx="6.84" ry="7.5" fill="url(#Безымянный_градиент_777)" />
                        <path d="M393.61,395.42a8.68,8.68,0,0,1,.38,2.52c0,4.36-3.22,7.9-7.2,7.9a6.58,6.58,0,0,1-2.58-.53,6.17,6.17,0,0,0,4.34,1.82c3.61,0,6.54-3.21,6.54-7.17A7.61,7.61,0,0,0,393.61,395.42Z" fill="url(#Безымянный_градиент_779)" />
                        <ellipse cx="387.48" cy="398.15" rx="4.26" ry="4.67" fill="url(#Безымянный_градиент_779-2)" />
                      </g>
                    </g>
                  </g>
                </g>
                <path d="M216.37,515.87V490.1H201.85v25.72c-.12,1.15.59,2.34,2.12,3.22a11.37,11.37,0,0,0,10.3,0C215.79,518.19,216.48,517,216.37,515.87Z" fill="url(#linear-gradient-204)" style={{mixBlendMode: 'screen'}} />
                <path d="M259.21,518V494.23H245.82v23.71c-.11,1.07.54,2.16,2,3a10.5,10.5,0,0,0,9.5,0A3.19,3.19,0,0,0,259.21,518Z" fill="url(#linear-gradient-205)" style={{mixBlendMode: 'screen'}} />
                <g>
                  <g id="dominodown">
                    <path d="M425.19,556.11a1.76,1.76,0,0,0-1.61,0l-18.8,6.9s0,4.06,0,4.23a.55.55,0,0,0,.33.46l41.5,24a1.78,1.78,0,0,0,1.62,0L466.69,581a.57.57,0,0,0,.34-.47v-4.16Z" fill="#b6b6b6" />
                    <path d="M466.69,575.9l-41.5-24a1.82,1.82,0,0,0-1.61,0L405.1,562.61a.49.49,0,0,0,0,.93l41.5,24a1.78,1.78,0,0,0,1.62,0l18.47-10.66A.5.5,0,0,0,466.69,575.9Z" fill="#e5e5e5" />
                    <path d="M443.65,572.33a3.6,3.6,0,0,0-3.23,0,1,1,0,0,0,0,1.87,3.6,3.6,0,0,0,3.23,0A1,1,0,0,0,443.65,572.33Z" fill="#717171" />
                    <path d="M449.62,568.89a3.56,3.56,0,0,0-3.24,0,1,1,0,0,0,0,1.86,3.56,3.56,0,0,0,3.24,0A1,1,0,0,0,449.62,568.89Z" fill="#527500" />
                    <path d="M437.68,575.78a3.54,3.54,0,0,0-3.23,0,1,1,0,0,0,0,1.86,3.54,3.54,0,0,0,3.23,0A1,1,0,0,0,437.68,575.78Z" fill="#717171" />
                    <path d="M461.55,575.78a3.54,3.54,0,0,0-3.23,0,1,1,0,0,0,0,1.86,3.54,3.54,0,0,0,3.23,0A1,1,0,0,0,461.55,575.78Z" fill="#717171" />
                    <path d="M455.59,579.22a3.62,3.62,0,0,0-3.24,0,1,1,0,0,0,0,1.87,3.6,3.6,0,0,0,3.23,0A1,1,0,0,0,455.59,579.22Z" fill="#717171" />
                    <path d="M449.62,582.67a3.56,3.56,0,0,0-3.24,0,1,1,0,0,0,0,1.86,3.56,3.56,0,0,0,3.24,0A1,1,0,0,0,449.62,582.67Z" fill="#717171" />
                    <path d="M425.89,555.19a3.54,3.54,0,0,0-3.23,0,1,1,0,0,0,0,1.87,3.6,3.6,0,0,0,3.23,0A1,1,0,0,0,425.89,555.19Z" fill="#717171" />
                    <path d="M425.89,569a3.6,3.6,0,0,0-3.23,0,1,1,0,0,0,0,1.87,3.6,3.6,0,0,0,3.23,0A1,1,0,0,0,425.89,569Z" fill="#717171" />
                    <path d="M425.89,562.08a3.54,3.54,0,0,0-3.23,0,1,1,0,0,0,0,1.87,3.6,3.6,0,0,0,3.23,0A1,1,0,0,0,425.89,562.08Z" fill="#717171" />
                    <path d="M444.94,564.5a1.76,1.76,0,0,0-1.61,0L426.85,574a.49.49,0,0,0,0,.93,1.78,1.78,0,0,0,1.62,0l16.47-9.51C445.39,565.18,445.39,564.76,444.94,564.5Z" fill="#717171" />
                  </g>
                  <g id="dominoup">
                    <path d="M475.1,545.07l-43,17.56s-.25,4-.26,4.16a.56.56,0,0,0,.3.48l17.76,11.82a1.76,1.76,0,0,0,1.61.1l42.94-21.27a.58.58,0,0,0,.36-.45c0-.17.27-4.15.27-4.15l-18.33-8.15A1.76,1.76,0,0,0,475.1,545.07Z" fill="#c7c7c7" />
                    <path d="M494.73,552.83,477,541a1.81,1.81,0,0,0-1.62-.1l-42.93,21.28c-.47.23-.49.64-.06.93l17.76,11.82a1.79,1.79,0,0,0,1.61.1l42.93-21.28C495.14,553.53,495.16,553.12,494.73,552.83Z" fill="#ececec" />
                    <path d="M464.61,564.11a3.59,3.59,0,0,0-3.22-.21,1,1,0,0,0-.12,1.87,3.56,3.56,0,0,0,3.22.2A1,1,0,0,0,464.61,564.11Z" fill="#717171" />
                    <path d="M453.14,556.47a3.58,3.58,0,0,0-3.23-.2,1,1,0,0,0-.12,1.86,3.58,3.58,0,0,0,3.23.21A1,1,0,0,0,453.14,556.47Z" fill="#717171" />
                    <path d="M452.26,570.23A3.59,3.59,0,0,0,449,570a1,1,0,0,0-.12,1.87,3.58,3.58,0,0,0,3.23.2A1,1,0,0,0,452.26,570.23Z" fill="#717171" />
                    <path d="M440.79,562.59a3.58,3.58,0,0,0-3.23-.2,1,1,0,0,0-.12,1.86,3.61,3.61,0,0,0,3.23.21A1,1,0,0,0,440.79,562.59Z" fill="#717171" />
                    <path d="M477.25,551.19A3.61,3.61,0,0,0,474,551a1,1,0,0,0-.12,1.87,3.58,3.58,0,0,0,3.23.2A1,1,0,0,0,477.25,551.19Z" fill="#717171" />
                    <path d="M472.3,562.83l-15.83-10.54a1.79,1.79,0,0,0-1.61-.1.49.49,0,0,0-.06.93l15.83,10.54a1.79,1.79,0,0,0,1.61.1A.49.49,0,0,0,472.3,562.83Z" fill="#717171" />
                  </g>
                </g>
                <g id="brilliant">
                  <polygon points="874.18 146.46 858.85 151.56 851.72 160.47 851.72 175.45 874.18 195.2 896.65 175.45 896.65 160.47 889.51 151.56 874.18 146.46" fill="#fff" />
                  <polygon points="874.18 195.2 896.65 160.47 874.18 153.25 874.18 195.2" fill="#00e4f6" opacity="0.3" />
                  <polygon points="874.18 195.2 874.18 153.25 851.72 160.47 874.18 195.2" fill="#34e4ff" opacity="0.3" />
                  <polygon points="858.85 151.56 851.72 160.47 874.18 153.25 874.18 146.46 858.85 151.56" fill="#7fe4ff" opacity="0.7" />
                  <polygon points="851.72 175.45 858.85 161.79 858.85 151.56 851.72 160.47 851.72 175.45" fill="#00b6ff" opacity="0.7" />
                  <polygon points="851.72 175.45 874.18 182.93 874.18 166.9 858.85 161.79 851.72 175.45" fill="#00caff" opacity="0.7" />
                  <polygon points="889.51 161.79 896.65 175.45 896.65 160.47 889.51 151.56 889.51 161.79" fill="#34e4ff" opacity="0.7" />
                  <polygon points="874.18 166.9 874.18 182.93 896.65 175.45 889.51 161.79 874.18 166.9" fill="#02ddff" opacity="0.7" />
                  <polygon points="874.18 195.2 874.18 182.93 851.72 175.45 874.18 195.2" fill="#00b6ff" opacity="0.7" />
                  <polygon points="874.18 195.2 896.65 175.45 874.18 182.93 874.18 195.2" fill="#00caff" opacity="0.7" />
                  <polygon points="858.85 151.56 858.85 161.79 874.18 166.9 889.51 161.79 889.51 151.56 874.18 146.46 858.85 151.56" fill="#61ecff" opacity="0.7" />
                </g>
                <g id="money8">
                  <path d="M783.71,229.54H751.38v4.57h0s0,.08,0,.13c0,5.2,7.24,9.41,16.17,9.41s16.16-4.21,16.16-9.41v-.13h0Z" fill="url(#linear-gradient-206)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M751.38,233.5v.13s0-.08,0-.13Z" fill="url(#linear-gradient-207)" />
                    <path d="M767.55,242.64c-8.93,0-16.17-4.21-16.17-9.41v.88h0s0,.08,0,.13c0,5.2,7.24,9.41,16.17,9.41s16.16-4.21,16.16-9.41v-.13h0v-.88C783.71,238.43,776.48,242.64,767.55,242.64Z" fill="url(#linear-gradient-208)" />
                    <path d="M783.71,233.63v-.13h0Z" fill="url(#linear-gradient-209)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M772.5,243.2l.45-.1V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M774.53,242.72l.45-.13V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M776.56,242.05l.46-.19V231.15h-.46Z" fill="#fdd65b" />
                    <path d="M770.47,243.49l.45-.05V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M780.62,239.76l.46-.38v-8.23h-.46Z" fill="#fdd65b" />
                    <path d="M782.65,237.57a6,6,0,0,0,.46-.81v-5.61h-.46Z" fill="#fdd65b" />
                    <path d="M778.59,241.1l.46-.25v-9.7h-.46Z" fill="#fdd65b" />
                    <path d="M768.44,243.62h.45V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M766.41,243.62h.45V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M762.35,243.14l.45.1V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M764.38,243.47l.45,0V231.15h-.45Z" fill="#fdd65b" />
                    <path d="M760.31,242.65l.46.12V231.15h-.46Z" fill="#fdd65b" />
                    <path d="M752.19,237.17c.14.24.28.48.45.72v-6.74h-.45Z" fill="#fdd65b" />
                    <path d="M754.22,239.56c.14.12.3.24.45.35v-8.76h-.45Z" fill="#fdd65b" />
                    <path d="M758.28,241.94c.15.07.3.12.46.18v-11h-.46Z" fill="#fdd65b" />
                    <path d="M756.25,241c.15.09.3.16.46.24v-10h-.46Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="767.55" cy="229.61" rx="16.17" ry="9.41" fill="url(#linear-gradient-210)" />
                  <path d="M767.55,238.77c-8.74,0-15.84-4-16.14-9.09,0,.11,0,.22,0,.33,0,5.2,7.24,9.42,16.17,9.42s16.16-4.22,16.16-9.42c0-.11,0-.22,0-.33C783.39,234.73,776.29,238.77,767.55,238.77Z" fill="url(#White_Black_Radial)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="767.55" cy="229.61" rx="12.09" ry="7.04" fill="url(#linear-gradient-211)" />
                  <path d="M768,222.92c6.46,0,11.71,3,12,6.66,0-.12,0-.25,0-.37,0-3.89-5.41-7-12.09-7s-12.08,3.15-12.08,7c0,.12,0,.25,0,.37C756.24,225.87,761.5,222.92,768,222.92Z" fill="url(#White_Black_Radial-2)" style={{mixBlendMode: 'screen'}} />
                  <path d="M767.55,223.33c6.45,0,11.71,2.95,12.05,6.66,0-.13,0-.25,0-.38,0-3.89-5.41-7-12.08-7s-12.09,3.15-12.09,7a2.45,2.45,0,0,0,0,.38C755.83,226.28,761.09,223.33,767.55,223.33Z" fill="url(#linear-gradient-212)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M760,234.44c3.63,1.24,6.08,3.7,5.46,5.5s-4,2.25-7.68,1-6.08-3.69-5.47-5.49S756.39,233.2,760,234.44Z" fill="url(#radial-gradient-158)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M775.87,222.06c3.63,1.24,6.08,3.7,5.47,5.5s-4.06,2.26-7.69,1-6.08-3.7-5.47-5.5S772.23,220.83,775.87,222.06Z" fill="url(#radial-gradient-159)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M775.08,233.31l-1.4-.81-1,.57-.48.27,1.36.24,0,.57-1.54.89-1.4-.8-1.42.82-10.2-5.89,0-.57,1.39-.26-1.39-.8,0-.57,1.52-.32,1.39.8,1.09-.62a3.59,3.59,0,0,1,.38-.21l-1.4-.81,0-.58,1.5-.31,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.88,6.88,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.17,1.17,0,0,1-.14,1.11,6.19,6.19,0,0,1,2.35-.28,4.73,4.73,0,0,1,2,.6,2.78,2.78,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.18,2.18,0,0,1-.84,1l1.43.26,0,.59ZM762.8,229l2.36,1.36,1.34-.78c.8-.46,1.28-.75,1.45-.88a.9.9,0,0,0,.47-.68c0-.24-.17-.45-.5-.64a2.19,2.19,0,0,0-1-.29,2.33,2.33,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.34,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.78.78,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,11.48,11.48,0,0,0-2,1Z" fill="url(#linear-gradient-213)" />
                  </g>
                  <path d="M775.08,232.72l-1.4-.8-1,.56-.48.28,1.39.81-1.54.89-1.4-.81-1.42.83-10.2-5.89,1.42-.83-1.39-.8,1.54-.89,1.39.8,1.09-.62.38-.22-1.4-.8,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.6,4.6,0,0,1,2,.61,2.78,2.78,0,0,1,1,1A1.38,1.38,0,0,1,776,230a2.22,2.22,0,0,1-.84,1l1.46.84Zm-12.28-4.34,2.36,1.37,1.34-.78c.8-.46,1.28-.75,1.45-.88a.9.9,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.19,2.19,0,0,0-1-.29,2.33,2.33,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.35,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.78.78,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.5,2.5,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#linear-gradient-214)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M775.08,232.72l-1.4-.8-1,.56-.48.28,1.39.81-1.54.89-1.4-.81-1.42.83-10.2-5.89,1.42-.83-1.39-.8,1.54-.89,1.39.8,1.09-.62.38-.22-1.4-.8,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.6,4.6,0,0,1,2,.61,2.78,2.78,0,0,1,1,1A1.38,1.38,0,0,1,776,230a2.22,2.22,0,0,1-.84,1l1.46.84Zm-12.28-4.34,2.36,1.37,1.34-.78c.8-.46,1.28-.75,1.45-.88a.9.9,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.19,2.19,0,0,0-1-.29,2.33,2.33,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.35,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.78.78,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.5,2.5,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#radial-gradient-160)" />
                  </g>
                </g>
                <g id="money7">
                  <path d="M390.22,505.5H350.86v5.55h0v.16c0,6.33,8.81,11.46,19.68,11.46s19.68-5.13,19.68-11.46c0-.06,0-.11,0-.16h0Z" fill="url(#linear-gradient-215)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M350.86,510.31v0Z" fill="url(#linear-gradient-216)" />
                    <path d="M370.54,521.44c-10.87,0-19.68-5.13-19.68-11.46v1.07h0v.16c0,6.33,8.81,11.46,19.68,11.46s19.68-5.13,19.68-11.46c0-.06,0-.11,0-.16h0V510C390.22,516.31,381.41,521.44,370.54,521.44Z" fill="url(#linear-gradient-217)" />
                    <path d="M390.22,510.47v-.16h0C390.21,510.37,390.22,510.42,390.22,510.47Z" fill="url(#linear-gradient-218)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M376.56,522.11l.56-.11V507.44h-.56Z" fill="#fdd65b" />
                    <path d="M379,521.53l.55-.15V507.44H379Z" fill="#fdd65b" />
                    <path d="M381.51,520.72c.19-.07.37-.16.55-.24v-13h-.55Z" fill="#fdd65b" />
                    <path d="M374.09,522.47c.19,0,.37,0,.55-.06v-15h-.55Z" fill="#fdd65b" />
                    <path d="M386.45,517.93c.19-.15.38-.3.56-.46v-10h-.56Z" fill="#fdd65b" />
                    <path d="M388.93,515.26a9.43,9.43,0,0,0,.55-1v-6.84h-.55Z" fill="#fdd65b" />
                    <path d="M384,519.56l.55-.3V507.44H384Z" fill="#fdd65b" />
                    <path d="M371.62,522.63h.55V507.44h-.55Z" fill="#fdd65b" />
                    <path d="M369.15,522.63h.55v-15.2h-.55Z" fill="#fdd65b" />
                    <path d="M364.2,522.05l.56.11V507.44h-.56Z" fill="#fdd65b" />
                    <path d="M366.68,522.44l.55,0V507.44h-.55Z" fill="#fdd65b" />
                    <path d="M361.73,521.44l.55.16V507.44h-.55Z" fill="#fdd65b" />
                    <path d="M351.84,514.77a10,10,0,0,0,.55.88v-8.21h-.55Z" fill="#fdd65b" />
                    <path d="M354.31,517.69c.18.15.37.29.56.43V507.44h-.56Z" fill="#fdd65b" />
                    <path d="M359.26,520.59l.55.22V507.44h-.55Z" fill="#fdd65b" />
                    <path d="M356.79,519.4c.17.1.36.19.55.29V507.44h-.55Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="370.54" cy="505.58" rx="19.68" ry="11.46" fill="url(#linear-gradient-219)" />
                  <path d="M370.54,516.73c-10.64,0-19.28-4.92-19.65-11.06,0,.13,0,.26,0,.4,0,6.32,8.81,11.46,19.68,11.46s19.68-5.14,19.68-11.46c0-.14,0-.27,0-.4C389.82,511.81,381.17,516.73,370.54,516.73Z" fill="url(#White_Black_Radial-3)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="370.54" cy="505.58" rx="14.71" ry="8.57" fill="url(#linear-gradient-220)" />
                  <path d="M371,497.44c7.86,0,14.26,3.59,14.67,8.1,0-.15,0-.3,0-.46,0-4.73-6.59-8.56-14.71-8.56s-14.71,3.83-14.71,8.56a3.42,3.42,0,0,0,0,.46C356.77,501,363.17,497.44,371,497.44Z" fill="url(#White_Black_Radial-4)" style={{mixBlendMode: 'screen'}} />
                  <path d="M370.54,497.93c7.86,0,14.26,3.59,14.67,8.1,0-.15,0-.3,0-.45,0-4.74-6.59-8.57-14.71-8.57s-14.71,3.83-14.71,8.57a3.42,3.42,0,0,0,0,.45C356.28,501.52,362.68,497.93,370.54,497.93Z" fill="url(#linear-gradient-221)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M375.74,503.88l5.57,1c.93.17,1.13.88.33,1.2L376.9,508c-.32.12-.5.33-.49.56l.09,3.36c0,.56-1.1.89-1.88.55l-4.68-2a2,2,0,0,0-1.08-.1l-5.51,1.07c-.92.18-1.8-.33-1.49-.86l1.85-3.19a.46.46,0,0,0-.18-.62l-3.49-2.7c-.59-.45,0-1.09.95-1.08l5.82.05a1.56,1.56,0,0,0,1-.29l3.34-2.73a1.63,1.63,0,0,1,2.09.19l1.74,3.21A1.09,1.09,0,0,0,375.74,503.88Z" fill="url(#linear-gradient-222)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M375.74,503.25l5.57,1c.93.17,1.13.88.33,1.2l-4.74,1.94c-.32.13-.5.34-.49.56l.09,3.36c0,.56-1.1.89-1.88.55l-4.68-2a2,2,0,0,0-1.08-.1l-5.51,1.07c-.92.18-1.8-.33-1.49-.86l1.85-3.18a.47.47,0,0,0-.18-.63l-3.49-2.7c-.59-.45,0-1.09.95-1.08l5.82.05a1.63,1.63,0,0,0,1-.28l3.34-2.74a1.63,1.63,0,0,1,2.09.19L375,502.8A1.06,1.06,0,0,0,375.74,503.25Z" fill="url(#linear-gradient-223)" />
                  <path d="M375.74,503.25l5.57,1c.93.17,1.13.88.33,1.2l-4.74,1.94c-.32.13-.5.34-.49.56l.09,3.36c0,.56-1.1.89-1.88.55l-4.68-2a2,2,0,0,0-1.08-.1l-5.51,1.07c-.92.18-1.8-.33-1.49-.86l1.85-3.18a.47.47,0,0,0-.18-.63l-3.49-2.7c-.59-.45,0-1.09.95-1.08l5.82.05a1.63,1.63,0,0,0,1-.28l3.34-2.74a1.63,1.63,0,0,1,2.09.19L375,502.8A1.06,1.06,0,0,0,375.74,503.25Z" fill="url(#radial-gradient-161)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g id="money6">
                  <path d="M641.53,321H613.76v4.29h0s0,.08,0,.12c0,4.9,6.22,8.87,13.88,8.87s13.89-4,13.89-8.87c0,0,0-.08,0-.12h0Z" fill="url(#linear-gradient-224)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M613.76,324.74v.13c0-.05,0-.09,0-.13Z" fill="url(#linear-gradient-225)" />
                    <path d="M627.65,333.35c-7.67,0-13.89-4-13.89-8.86v.82h0s0,.08,0,.12c0,4.9,6.22,8.87,13.89,8.87s13.88-4,13.88-8.87c0,0,0-.08,0-.12h0v-.82C641.53,329.38,635.31,333.35,627.65,333.35Z" fill="url(#linear-gradient-226)" />
                    <path d="M641.53,324.87v-.13h0S641.53,324.82,641.53,324.87Z" fill="url(#linear-gradient-227)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M631.9,333.87c.13,0,.26-.06.39-.09V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M633.64,333.42l.39-.12V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M635.38,332.79c.14-.05.26-.12.39-.18V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M630.15,334.15l.39,0V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M638.87,330.63c.13-.11.27-.23.39-.35v-7.76h-.39Z" fill="#fdd65b" />
                    <path d="M640.62,328.57a7.69,7.69,0,0,0,.38-.76v-5.29h-.38Z" fill="#fdd65b" />
                    <path d="M637.13,331.9l.39-.24v-9.14h-.39Z" fill="#fdd65b" />
                    <path d="M628.41,334.28l.39,0V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M626.67,334.27h.38V322.52h-.38Z" fill="#fdd65b" />
                    <path d="M623.18,333.82l.39.09V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M624.92,334.13l.39,0V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M621.43,333.36l.39.11v-11h-.39Z" fill="#fdd65b" />
                    <path d="M614.46,328.19a6.61,6.61,0,0,0,.39.68v-6.35h-.39Z" fill="#fdd65b" />
                    <path d="M616.2,330.45l.39.33v-8.26h-.39Z" fill="#fdd65b" />
                    <path d="M619.69,332.69l.39.17V322.52h-.39Z" fill="#fdd65b" />
                    <path d="M618,331.77l.39.23v-9.48H618Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="627.64" cy="321.08" rx="13.88" ry="8.87" fill="url(#linear-gradient-228)" />
                  <path d="M627.64,329.71c-7.5,0-13.59-3.81-13.85-8.56a3,3,0,0,0,0,.31c0,4.89,6.22,8.86,13.88,8.86s13.89-4,13.89-8.86a3,3,0,0,0,0-.31C641.24,325.9,635.15,329.71,627.64,329.71Z" fill="url(#radial-gradient-162)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="627.64" cy="321.08" rx="10.38" ry="6.63" fill="url(#linear-gradient-229)" />
                  <path d="M628,314.78c5.54,0,10.06,2.78,10.35,6.27,0-.11,0-.23,0-.35,0-3.66-4.65-6.63-10.38-6.63s-10.37,3-10.37,6.63c0,.12,0,.24,0,.35C617.93,317.56,622.45,314.78,628,314.78Z" fill="url(#radial-gradient-163)" style={{mixBlendMode: 'screen'}} />
                  <path d="M627.64,315.16c5.55,0,10.06,2.78,10.35,6.27,0-.11,0-.23,0-.35,0-3.66-4.64-6.63-10.38-6.63s-10.37,3-10.37,6.63c0,.12,0,.24,0,.35C617.59,317.94,622.1,315.16,627.64,315.16Z" fill="url(#linear-gradient-230)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M621.19,325.63c3.12,1.16,5.22,3.48,4.69,5.17s-3.48,2.13-6.6,1-5.22-3.48-4.69-5.17S618.07,324.46,621.19,325.63Z" fill="url(#radial-gradient-164)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M633.93,313.54c3.12,1.16,5.23,3.48,4.7,5.18s-3.48,2.12-6.6.95-5.22-3.48-4.69-5.17S630.82,312.37,633.93,313.54Z" fill="url(#radial-gradient-165)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M628.45,319c-.26.05-.53.12-.8.2s-.5.15-.77.24-.53.21-.78.33l.83.53a1.69,1.69,0,0,1,.27-.11l.31-.12c.47-.18.92-.33,1.34-.46a8.06,8.06,0,0,1,1.18-.25,3.65,3.65,0,0,1,1.05,0,3,3,0,0,1,1,.39,1.53,1.53,0,0,1,.69.74,1.1,1.1,0,0,1,0,.8,2.19,2.19,0,0,1-.52.8,5.5,5.5,0,0,1-.88.75l1.12.71-.93.59-1.14-.72a15.75,15.75,0,0,1-1.85.86,14.19,14.19,0,0,1-1.91.58l-.61-1.62a10,10,0,0,0,1-.24c.28-.08.59-.17.94-.3a9.59,9.59,0,0,0,1-.41l-.81-.52c-.29.12-.59.24-.9.35a11.72,11.72,0,0,1-1.27.39,5.34,5.34,0,0,1-1,.17,2.72,2.72,0,0,1-.87-.08,2.41,2.41,0,0,1-.76-.32,1.67,1.67,0,0,1-.68-.7,1.17,1.17,0,0,1-.09-.78,1.92,1.92,0,0,1,.4-.81,3.88,3.88,0,0,1,.82-.79l-.94-.59.93-.59.95.59c.28-.14.57-.28.86-.4s.57-.23.86-.33.56-.19.83-.26l.73-.22Zm-3.14,1.63a.57.57,0,0,0,.35.07,2.25,2.25,0,0,0,.51-.12l-.71-.45C625.18,320.35,625.13,320.52,625.31,320.63Zm4.46.81a.6.6,0,0,0-.37-.05,2.77,2.77,0,0,0-.54.13l.68.43a.87.87,0,0,0,.31-.31A.16.16,0,0,0,629.77,321.44Z" fill="url(#linear-gradient-231)" />
                  </g>
                  <path d="M628.45,318.62c-.26.05-.53.12-.8.2s-.5.15-.77.24-.53.21-.78.33l.83.53a1.69,1.69,0,0,1,.27-.11l.31-.12c.47-.18.92-.33,1.34-.46A8.06,8.06,0,0,1,630,319a3.32,3.32,0,0,1,1.05,0,2.79,2.79,0,0,1,1,.38,1.53,1.53,0,0,1,.69.74,1.1,1.1,0,0,1,0,.8,2.19,2.19,0,0,1-.52.8,5,5,0,0,1-.88.75l1.12.71-.93.59-1.14-.72a15.75,15.75,0,0,1-1.85.86,15.91,15.91,0,0,1-1.91.59l-.61-1.63a10,10,0,0,0,1-.24c.28-.08.59-.17.94-.3a7.77,7.77,0,0,0,1-.41l-.81-.52c-.29.12-.59.24-.9.35a11.72,11.72,0,0,1-1.27.39,5.34,5.34,0,0,1-1,.17,3,3,0,0,1-.87-.07,2.7,2.7,0,0,1-.76-.33,1.67,1.67,0,0,1-.68-.7,1.17,1.17,0,0,1-.09-.78,1.92,1.92,0,0,1,.4-.81,3.88,3.88,0,0,1,.82-.79l-.94-.59.93-.59.95.59c.28-.14.57-.28.86-.4s.57-.23.86-.33.56-.19.83-.26l.73-.22Zm-3.14,1.63a.57.57,0,0,0,.35.07,2.25,2.25,0,0,0,.51-.12l-.71-.45C625.18,320,625.13,320.14,625.31,320.25Zm4.46.81a.6.6,0,0,0-.37-.05,2.77,2.77,0,0,0-.54.13l.68.43a.8.8,0,0,0,.31-.31C629.88,321.18,629.85,321.12,629.77,321.06Z" fill="url(#linear-gradient-232)" />
                  <path d="M628.45,318.62c-.26.05-.53.12-.8.2s-.5.15-.77.24-.53.21-.78.33l.83.53a1.69,1.69,0,0,1,.27-.11l.31-.12c.47-.18.92-.33,1.34-.46A8.06,8.06,0,0,1,630,319a3.32,3.32,0,0,1,1.05,0,2.79,2.79,0,0,1,1,.38,1.53,1.53,0,0,1,.69.74,1.1,1.1,0,0,1,0,.8,2.19,2.19,0,0,1-.52.8,5,5,0,0,1-.88.75l1.12.71-.93.59-1.14-.72a15.75,15.75,0,0,1-1.85.86,15.91,15.91,0,0,1-1.91.59l-.61-1.63a10,10,0,0,0,1-.24c.28-.08.59-.17.94-.3a7.77,7.77,0,0,0,1-.41l-.81-.52c-.29.12-.59.24-.9.35a11.72,11.72,0,0,1-1.27.39,5.34,5.34,0,0,1-1,.17,3,3,0,0,1-.87-.07,2.7,2.7,0,0,1-.76-.33,1.67,1.67,0,0,1-.68-.7,1.17,1.17,0,0,1-.09-.78,1.92,1.92,0,0,1,.4-.81,3.88,3.88,0,0,1,.82-.79l-.94-.59.93-.59.95.59c.28-.14.57-.28.86-.4s.57-.23.86-.33.56-.19.83-.26l.73-.22Zm-3.14,1.63a.57.57,0,0,0,.35.07,2.25,2.25,0,0,0,.51-.12l-.71-.45C625.18,320,625.13,320.14,625.31,320.25Zm4.46.81a.6.6,0,0,0-.37-.05,2.77,2.77,0,0,0-.54.13l.68.43a.8.8,0,0,0,.31-.31C629.88,321.18,629.85,321.12,629.77,321.06Z" fill="url(#radial-gradient-166)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g id="money5">
                  <path d="M813,348.88H780.63v4.56h0v.13c0,5.2,7.24,9.42,16.17,9.42S813,358.77,813,353.57v-.13h0Z" fill="url(#linear-gradient-233)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M780.63,352.84v0Z" fill="url(#linear-gradient-234)" />
                    <path d="M796.8,362c-8.93,0-16.17-4.22-16.17-9.42v.88h0v.13c0,5.2,7.24,9.42,16.17,9.42S813,358.77,813,353.57v-.13h0v-.88C813,357.76,805.72,362,796.8,362Z" fill="url(#linear-gradient-235)" />
                    <path d="M813,353v-.13h0Z" fill="url(#linear-gradient-236)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M801.75,362.53l.45-.09v-12h-.45Z" fill="#fdd65b" />
                    <path d="M803.78,362.05l.45-.12V350.48h-.45Z" fill="#fdd65b" />
                    <path d="M805.81,361.39c.16-.06.3-.13.45-.2V350.48h-.45Z" fill="#fdd65b" />
                    <path d="M799.72,362.82l.45,0v-12.3h-.45Z" fill="#fdd65b" />
                    <path d="M809.87,359.09a5.54,5.54,0,0,0,.45-.37v-8.24h-.45Z" fill="#fdd65b" />
                    <path d="M811.9,356.9a9.16,9.16,0,0,0,.46-.8v-5.62h-.46Z" fill="#fdd65b" />
                    <path d="M807.84,360.43l.45-.24v-9.71h-.45Z" fill="#fdd65b" />
                    <path d="M797.69,363h.45V350.48h-.45Z" fill="#fdd65b" />
                    <path d="M795.65,363l.46,0V350.48h-.46Z" fill="#fdd65b" />
                    <path d="M791.59,362.48l.46.09V350.48h-.46Z" fill="#fdd65b" />
                    <path d="M793.62,362.8l.46,0V350.48h-.46Z" fill="#fdd65b" />
                    <path d="M789.56,362l.45.13V350.48h-.45Z" fill="#fdd65b" />
                    <path d="M781.44,356.5a5.41,5.41,0,0,0,.45.72v-6.74h-.45Z" fill="#fdd65b" />
                    <path d="M783.47,358.9c.14.12.3.23.45.35v-8.77h-.45Z" fill="#fdd65b" />
                    <path d="M787.53,361.28l.45.18v-11h-.45Z" fill="#fdd65b" />
                    <path d="M785.5,360.3l.45.24V350.48h-.45Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="796.8" cy="348.95" rx="16.17" ry="9.41" fill="url(#linear-gradient-237)" />
                  <path d="M796.79,358.11c-8.73,0-15.83-4-16.13-9.09,0,.11,0,.22,0,.33,0,5.2,7.24,9.41,16.16,9.41S813,354.55,813,349.35c0-.11,0-.22,0-.33C812.63,354.07,805.53,358.11,796.79,358.11Z" fill="url(#White_Black_Radial-5)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="796.8" cy="348.95" rx="12.09" ry="7.04" fill="url(#linear-gradient-238)" />
                  <path d="M797.2,342.26c6.45,0,11.71,2.95,12,6.66,0-.13,0-.25,0-.38,0-3.88-5.41-7-12.08-7s-12.09,3.15-12.09,7a2.45,2.45,0,0,0,0,.38C785.48,345.21,790.74,342.26,797.2,342.26Z" fill="url(#White_Black_Radial-6)" style={{mixBlendMode: 'screen'}} />
                  <path d="M796.79,342.66c6.46,0,11.72,2.95,12.06,6.66,0-.12,0-.25,0-.37,0-3.89-5.41-7-12.09-7s-12.08,3.15-12.08,7c0,.12,0,.25,0,.37C785.08,345.61,790.34,342.66,796.79,342.66Z" fill="url(#linear-gradient-239)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M789.27,353.78c3.64,1.23,6.08,3.69,5.47,5.49s-4,2.26-7.68,1-6.09-3.7-5.47-5.5S785.64,352.54,789.27,353.78Z" fill="url(#radial-gradient-167)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M805.11,341.4c3.64,1.24,6.08,3.7,5.47,5.5s-4.05,2.25-7.68,1-6.09-3.7-5.47-5.5S801.48,340.16,805.11,341.4Z" fill="url(#radial-gradient-168)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M804.32,352.64l-1.4-.81-1,.57-.49.28,1.37.23,0,.57-1.54.89-1.39-.8-1.42.82L788.3,348.5l0-.56,1.4-.26-1.39-.8v-.57l1.53-.32,1.39.8,1.09-.63.38-.21-1.4-.81,0-.57,1.5-.32,1.52.88a5.27,5.27,0,0,1,1.33-.31,6.4,6.4,0,0,1,1.63,0,4.49,4.49,0,0,1,1.51.51,2.07,2.07,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12,6.23,6.23,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.77,2.77,0,0,1,1,1,1.38,1.38,0,0,1,.18,1.12,2.19,2.19,0,0,1-.85,1l1.44.26,0,.58Zm-12.27-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88a.92.92,0,0,0,.46-.69c0-.23-.16-.44-.49-.63a2.32,2.32,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.11-.82.44-1.79,1Zm4.06,2.34,2.72,1.58,1.9-1.09a11.59,11.59,0,0,0,1.34-.85.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.35,2.35,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,9.82,9.82,0,0,0-2,1Z" fill="url(#linear-gradient-240)" />
                  </g>
                  <path d="M804.32,352.06l-1.4-.81-1,.57-.49.28,1.39.8-1.54.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.8,1.54-.9,1.39.81,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4.09,4.09,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12,6.23,6.23,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.77,2.77,0,0,1,1,1,1.38,1.38,0,0,1,.18,1.12,2.19,2.19,0,0,1-.85,1l1.47.84Zm-12.27-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.76,1.45-.88a.92.92,0,0,0,.46-.69c0-.23-.16-.44-.49-.63a2.2,2.2,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.1-.82.43-1.79,1Zm4.06,2.34,2.72,1.58,1.9-1.1a10.7,10.7,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.52,2.52,0,0,0-1-.33,3.27,3.27,0,0,0-1.11.1,10.68,10.68,0,0,0-2,1Z" fill="url(#linear-gradient-241)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M804.32,352.06l-1.4-.81-1,.57-.49.28,1.39.8-1.54.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.8,1.54-.9,1.39.81,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4.09,4.09,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12,6.23,6.23,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.77,2.77,0,0,1,1,1,1.38,1.38,0,0,1,.18,1.12,2.19,2.19,0,0,1-.85,1l1.47.84Zm-12.27-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.76,1.45-.88a.92.92,0,0,0,.46-.69c0-.23-.16-.44-.49-.63a2.2,2.2,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.1-.82.43-1.79,1Zm4.06,2.34,2.72,1.58,1.9-1.1a10.7,10.7,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.52,2.52,0,0,0-1-.33,3.27,3.27,0,0,0-1.11.1,10.68,10.68,0,0,0-2,1Z" fill="url(#radial-gradient-169)" />
                  </g>
                </g>
                <g id="money4">
                  <path d="M1084.43,343.15H1052.1v4.56h0a.62.62,0,0,0,0,.13c0,5.2,7.24,9.42,16.17,9.42s16.16-4.22,16.16-9.42v-.13h0Z" fill="url(#linear-gradient-242)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M1052.1,347.11v.13a.57.57,0,0,1,0-.13Z" fill="url(#linear-gradient-243)" />
                    <path d="M1068.27,356.25c-8.93,0-16.17-4.22-16.17-9.41v.87h0a.62.62,0,0,0,0,.13c0,5.2,7.24,9.42,16.17,9.42s16.16-4.22,16.16-9.42v-.13h0v-.87C1084.43,352,1077.2,356.25,1068.27,356.25Z" fill="url(#linear-gradient-244)" />
                    <path d="M1084.43,347.24v-.13h0Z" fill="url(#linear-gradient-245)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M1073.22,356.8l.45-.09v-12h-.45Z" fill="#fdd65b" />
                    <path d="M1075.25,356.32l.45-.12V344.75h-.45Z" fill="#fdd65b" />
                    <path d="M1077.28,355.66c.16-.06.3-.13.45-.2V344.75h-.45Z" fill="#fdd65b" />
                    <path d="M1071.19,357.1l.45-.05v-12.3h-.45Z" fill="#fdd65b" />
                    <path d="M1081.34,353.36l.46-.37v-8.24h-.46Z" fill="#fdd65b" />
                    <path d="M1083.37,351.17a7.16,7.16,0,0,0,.46-.8v-5.62h-.46Z" fill="#fdd65b" />
                    <path d="M1079.31,354.7l.45-.24v-9.71h-.45Z" fill="#fdd65b" />
                    <path d="M1069.16,357.23h.45V344.75h-.45Z" fill="#fdd65b" />
                    <path d="M1067.13,357.22l.45,0V344.75h-.45Z" fill="#fdd65b" />
                    <path d="M1063.06,356.75c.16,0,.3.07.46.09V344.75h-.46Z" fill="#fdd65b" />
                    <path d="M1065.1,357.07l.45,0V344.75h-.45Z" fill="#fdd65b" />
                    <path d="M1061,356.25l.46.13V344.75H1061Z" fill="#fdd65b" />
                    <path d="M1052.91,350.77a6.67,6.67,0,0,0,.45.72v-6.74h-.45Z" fill="#fdd65b" />
                    <path d="M1054.94,353.17c.14.12.3.23.45.35v-8.77h-.45Z" fill="#fdd65b" />
                    <path d="M1059,355.55l.46.18v-11H1059Z" fill="#fdd65b" />
                    <path d="M1057,354.57l.45.24V344.75H1057Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="1068.27" cy="343.22" rx="16.17" ry="9.41" fill="url(#linear-gradient-246)" />
                  <path d="M1068.27,352.38c-8.74,0-15.84-4-16.14-9.09,0,.11,0,.22,0,.33,0,5.2,7.24,9.41,16.17,9.41s16.16-4.21,16.16-9.41c0-.11,0-.22,0-.33C1084.11,348.34,1077,352.38,1068.27,352.38Z" fill="url(#White_Black_Radial-7)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="1068.27" cy="343.22" rx="12.09" ry="7.04" fill="url(#linear-gradient-247)" />
                  <path d="M1068.67,336.53c6.46,0,11.71,3,12,6.66,0-.12,0-.25,0-.38,0-3.88-5.41-7-12.08-7s-12.09,3.15-12.09,7c0,.13,0,.26,0,.38C1057,339.48,1062.21,336.53,1068.67,336.53Z" fill="url(#White_Black_Radial-8)" style={{mixBlendMode: 'screen'}} />
                  <path d="M1068.27,336.93c6.45,0,11.71,2.95,12,6.66,0-.12,0-.25,0-.37,0-3.89-5.41-7-12.08-7s-12.09,3.15-12.09,7c0,.12,0,.25,0,.37C1056.55,339.88,1061.81,336.93,1068.27,336.93Z" fill="url(#linear-gradient-248)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1060.74,348.05c3.64,1.23,6.09,3.69,5.47,5.49s-4,2.26-7.68,1-6.08-3.7-5.47-5.5S1057.11,346.81,1060.74,348.05Z" fill="url(#radial-gradient-170)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M1076.59,335.67c3.63,1.24,6.08,3.7,5.46,5.5s-4,2.25-7.68,1-6.08-3.7-5.47-5.5S1073,334.44,1076.59,335.67Z" fill="url(#radial-gradient-171)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M1075.8,346.91l-1.4-.8-1,.56-.49.28,1.37.23,0,.58-1.55.89-1.39-.81-1.42.82-10.21-5.89,0-.56,1.39-.26-1.39-.8v-.57l1.53-.32,1.39.8,1.09-.63.38-.21-1.4-.8,0-.58,1.5-.32,1.52.88a5.27,5.27,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.22,1.22,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.69,2.69,0,0,1,1,1,1.34,1.34,0,0,1,.18,1.12,2.22,2.22,0,0,1-.84,1l1.43.26,0,.58Zm-12.28-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88a.86.86,0,0,0,.46-.69c0-.23-.16-.44-.49-.63a2.19,2.19,0,0,0-1-.29,2.44,2.44,0,0,0-1.13.23c-.23.11-.82.44-1.78,1Zm4.06,2.35,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.78.78,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.5,2.5,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#linear-gradient-249)" />
                  </g>
                  <path d="M1075.8,346.33l-1.4-.81-1,.57-.49.28,1.4.8-1.55.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.8,1.54-.89,1.39.8,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4.21,4.21,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.22,1.22,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.69,2.69,0,0,1,1,1,1.34,1.34,0,0,1,.18,1.12,2.22,2.22,0,0,1-.84,1l1.46.84ZM1063.52,342l2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88s.47-.46.46-.69-.16-.44-.49-.63a2.32,2.32,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.11-.82.44-1.78,1Zm4.06,2.34,2.73,1.58,1.89-1.1a9.93,9.93,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.35,2.35,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#linear-gradient-250)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M1075.8,346.33l-1.4-.81-1,.57-.49.28,1.4.8-1.55.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.8,1.54-.89,1.39.8,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4.21,4.21,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.22,1.22,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.77,4.77,0,0,1,2,.6,2.69,2.69,0,0,1,1,1,1.34,1.34,0,0,1,.18,1.12,2.22,2.22,0,0,1-.84,1l1.46.84ZM1063.52,342l2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88s.47-.46.46-.69-.16-.44-.49-.63a2.32,2.32,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.11-.82.44-1.78,1Zm4.06,2.34,2.73,1.58,1.89-1.1a9.93,9.93,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.35,2.35,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#radial-gradient-172)" />
                  </g>
                </g>
                <g id="money3">
                  <path d="M455.94,223.67H423.61v4.56h0v.13c0,5.2,7.24,9.41,16.17,9.41s16.16-4.21,16.16-9.41v-.13h0Z" fill="url(#linear-gradient-251)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M423.61,227.62v0Z" fill="url(#linear-gradient-252)" />
                    <path d="M439.78,236.77c-8.93,0-16.17-4.22-16.17-9.42v.88h0v.13c0,5.2,7.24,9.41,16.17,9.41s16.16-4.21,16.16-9.41v-.13h0v-.88C455.94,232.55,448.7,236.77,439.78,236.77Z" fill="url(#linear-gradient-253)" />
                    <path d="M455.94,227.75v-.13h0Z" fill="url(#linear-gradient-254)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M444.73,237.32l.45-.1V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M446.76,236.84l.45-.13V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M448.79,236.17l.45-.19V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M442.7,237.61l.45-.05V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M452.85,233.88a5.63,5.63,0,0,0,.45-.38v-8.23h-.45Z" fill="#fdd65b" />
                    <path d="M454.88,231.69a7.16,7.16,0,0,0,.46-.8v-5.62h-.46Z" fill="#fdd65b" />
                    <path d="M450.82,235.22c.15-.08.31-.16.45-.25v-9.7h-.45Z" fill="#fdd65b" />
                    <path d="M440.67,237.75l.45,0V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M438.63,237.74h.46V225.27h-.46Z" fill="#fdd65b" />
                    <path d="M434.57,237.27l.46.09V225.27h-.46Z" fill="#fdd65b" />
                    <path d="M436.6,237.59l.46,0V225.27h-.46Z" fill="#fdd65b" />
                    <path d="M432.54,236.77l.45.13V225.27h-.45Z" fill="#fdd65b" />
                    <path d="M424.42,231.29c.14.24.28.48.45.72v-6.74h-.45Z" fill="#fdd65b" />
                    <path d="M426.45,233.68l.45.36v-8.77h-.45Z" fill="#fdd65b" />
                    <path d="M430.51,236.07l.45.18v-11h-.45Z" fill="#fdd65b" />
                    <path d="M428.48,235.09l.45.24V225.27h-.45Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="439.78" cy="223.73" rx="16.17" ry="9.41" fill="url(#linear-gradient-255)" />
                  <path d="M439.78,232.89c-8.74,0-15.84-4-16.14-9.08,0,.11,0,.21,0,.32,0,5.2,7.24,9.42,16.17,9.42s16.16-4.22,16.16-9.42c0-.11,0-.21,0-.32C455.61,228.85,448.51,232.89,439.78,232.89Z" fill="url(#White_Black_Radial-9)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="439.78" cy="223.73" rx="12.09" ry="7.04" fill="url(#linear-gradient-256)" />
                  <path d="M440.18,217.05c6.45,0,11.71,2.95,12.05,6.66,0-.13,0-.25,0-.38,0-3.89-5.41-7-12.08-7s-12.09,3.15-12.09,7a2.45,2.45,0,0,0,0,.38C428.46,220,433.72,217.05,440.18,217.05Z" fill="url(#White_Black_Radial-10)" style={{mixBlendMode: 'screen'}} />
                  <path d="M439.78,217.45c6.45,0,11.71,3,12.05,6.66,0-.13,0-.25,0-.38,0-3.88-5.41-7-12.08-7s-12.09,3.16-12.09,7c0,.13,0,.25,0,.38C428.06,220.4,433.32,217.45,439.78,217.45Z" fill="url(#linear-gradient-257)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M432.25,228.56c3.64,1.24,6.08,3.7,5.47,5.5s-4.05,2.25-7.68,1-6.09-3.7-5.47-5.5S428.62,227.33,432.25,228.56Z" fill="url(#radial-gradient-173)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M448.09,216.19c3.64,1.23,6.08,3.69,5.47,5.49s-4.05,2.26-7.68,1-6.08-3.7-5.47-5.49S444.46,215,448.09,216.19Z" fill="url(#radial-gradient-174)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M447.3,227.43l-1.39-.81-1,.57-.49.28,1.37.23,0,.57-1.54.89-1.39-.8-1.42.82-10.21-5.89,0-.57,1.4-.25-1.39-.81v-.56l1.53-.33,1.39.81,1.09-.63.38-.21-1.4-.81,0-.57,1.5-.32,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4.09,4.09,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12A6.06,6.06,0,0,1,445,222a4.77,4.77,0,0,1,2,.6,2.69,2.69,0,0,1,1,1,1.36,1.36,0,0,1,.18,1.11,2.1,2.1,0,0,1-.85,1l1.44.27,0,.58ZM435,223.09l2.36,1.36,1.34-.77c.8-.46,1.28-.76,1.45-.88a.92.92,0,0,0,.46-.69c0-.23-.16-.44-.49-.63a2.2,2.2,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.23.1-.82.43-1.79,1Zm4.06,2.34,2.72,1.58,1.9-1.1a12.13,12.13,0,0,0,1.34-.84.78.78,0,0,0,.34-.67,1,1,0,0,0-.58-.66,2.52,2.52,0,0,0-1-.33,3,3,0,0,0-1.11.1,10.68,10.68,0,0,0-2,1Z" fill="url(#linear-gradient-258)" />
                  </g>
                  <path d="M447.3,226.85l-1.39-.81-1,.57-.49.28,1.39.8-1.54.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.81,1.54-.89,1.39.81,1.09-.63a3.59,3.59,0,0,1,.38-.21l-1.4-.81,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.41,6.41,0,0,1,1.63,0,4.09,4.09,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12,6.06,6.06,0,0,1,2.36-.29,4.77,4.77,0,0,1,2,.6,2.75,2.75,0,0,1,1,1,1.38,1.38,0,0,1,.18,1.12,2.15,2.15,0,0,1-.85,1l1.47.85ZM435,222.51l2.36,1.36,1.34-.78c.8-.46,1.28-.75,1.45-.87a.92.92,0,0,0,.46-.69c0-.23-.16-.45-.49-.64a2.19,2.19,0,0,0-1-.29,2.45,2.45,0,0,0-1.13.24c-.23.1-.82.43-1.79,1Zm4.06,2.34,2.72,1.57,1.9-1.09a11.59,11.59,0,0,0,1.34-.85.77.77,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,10.68,10.68,0,0,0-2,1Z" fill="url(#linear-gradient-259)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M447.3,226.85l-1.39-.81-1,.57-.49.28,1.39.8-1.54.89-1.39-.8-1.42.82-10.21-5.89,1.43-.82-1.39-.81,1.54-.89,1.39.81,1.09-.63a3.59,3.59,0,0,1,.38-.21l-1.4-.81,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.41,6.41,0,0,1,1.63,0,4.09,4.09,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.15,1.12,6.06,6.06,0,0,1,2.36-.29,4.77,4.77,0,0,1,2,.6,2.75,2.75,0,0,1,1,1,1.38,1.38,0,0,1,.18,1.12,2.15,2.15,0,0,1-.85,1l1.47.85ZM435,222.51l2.36,1.36,1.34-.78c.8-.46,1.28-.75,1.45-.87a.92.92,0,0,0,.46-.69c0-.23-.16-.45-.49-.64a2.19,2.19,0,0,0-1-.29,2.45,2.45,0,0,0-1.13.24c-.23.1-.82.43-1.79,1Zm4.06,2.34,2.72,1.57,1.9-1.09a11.59,11.59,0,0,0,1.34-.85.77.77,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,10.68,10.68,0,0,0-2,1Z" fill="url(#radial-gradient-175)" />
                  </g>
                </g>
                <g id="money2">
                  <path d="M274.53,350H242.19v4.56h0s0,.08,0,.13c0,5.2,7.24,9.41,16.17,9.41s16.17-4.21,16.17-9.41c0-.05,0-.09,0-.13h0Z" fill="url(#linear-gradient-260)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M242.19,353.94v.13s0-.08,0-.13Z" fill="url(#linear-gradient-261)" />
                    <path d="M258.36,363.09c-8.93,0-16.17-4.22-16.17-9.42v.88h0s0,.08,0,.13c0,5.2,7.24,9.41,16.17,9.41s16.17-4.21,16.17-9.41c0-.05,0-.09,0-.13h0v-.88C274.53,358.87,267.29,363.09,258.36,363.09Z" fill="url(#linear-gradient-262)" />
                    <path d="M274.53,354.07v-.13h0C274.52,354,274.53,354,274.53,354.07Z" fill="url(#linear-gradient-263)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M263.31,363.64l.45-.1v-12h-.45Z" fill="#fdd65b" />
                    <path d="M265.34,363.16l.45-.13V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M267.37,362.49l.46-.19V351.59h-.46Z" fill="#fdd65b" />
                    <path d="M261.28,363.93l.45-.05V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M271.43,360.2c.16-.12.31-.25.46-.38v-8.23h-.46Z" fill="#fdd65b" />
                    <path d="M273.47,358a7.07,7.07,0,0,0,.45-.8v-5.62h-.45Z" fill="#fdd65b" />
                    <path d="M269.4,361.54l.46-.25v-9.7h-.46Z" fill="#fdd65b" />
                    <path d="M259.25,364.07l.45,0V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M257.22,364.06h.45V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M253.16,363.59l.45.09V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M255.19,363.91l.45,0V351.59h-.45Z" fill="#fdd65b" />
                    <path d="M251.12,363.09l.46.13V351.59h-.46Z" fill="#fdd65b" />
                    <path d="M243,357.61c.14.24.28.48.45.72v-6.74H243Z" fill="#fdd65b" />
                    <path d="M245,360c.14.12.3.24.46.36v-8.77H245Z" fill="#fdd65b" />
                    <path d="M249.09,362.39l.46.18v-11h-.46Z" fill="#fdd65b" />
                    <path d="M247.06,361.41l.46.24V351.59h-.46Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="258.36" cy="350.05" rx="16.17" ry="9.41" fill="url(#linear-gradient-264)" />
                  <path d="M258.36,359.21c-8.74,0-15.84-4-16.14-9.08,0,.11,0,.21,0,.32,0,5.2,7.24,9.42,16.17,9.42s16.17-4.22,16.17-9.42c0-.11,0-.21,0-.32C274.2,355.17,267.1,359.21,258.36,359.21Z" fill="url(#White_Black_Radial-11)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="258.36" cy="350.05" rx="12.09" ry="7.04" fill="url(#linear-gradient-265)" />
                  <path d="M258.76,343.37c6.46,0,11.71,2.95,12.05,6.66a2.45,2.45,0,0,0,0-.38c0-3.89-5.41-7-12.09-7s-12.08,3.15-12.08,7c0,.13,0,.25,0,.38C247.05,346.32,252.31,343.37,258.76,343.37Z" fill="url(#White_Black_Radial-12)" style={{mixBlendMode: 'screen'}} />
                  <path d="M258.36,343.77c6.45,0,11.71,3,12.05,6.66,0-.13,0-.25,0-.38,0-3.88-5.41-7-12.08-7s-12.09,3.16-12.09,7a2.45,2.45,0,0,0,0,.38C246.65,346.72,251.9,343.77,258.36,343.77Z" fill="url(#linear-gradient-266)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M250.84,354.88c3.63,1.24,6.08,3.7,5.47,5.5s-4.06,2.25-7.69,1-6.08-3.7-5.47-5.5S247.2,353.65,250.84,354.88Z" fill="url(#radial-gradient-176)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M266.68,342.51c3.63,1.23,6.08,3.69,5.47,5.49s-4.06,2.26-7.69,1-6.08-3.7-5.47-5.49S263,341.27,266.68,342.51Z" fill="url(#radial-gradient-177)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M265.89,353.75l-1.4-.81-1,.57-.48.28,1.36.23,0,.57-1.54.89-1.4-.8-1.42.82-10.2-5.89,0-.57,1.39-.25L249.9,348l0-.56,1.52-.33,1.39.81,1.09-.63.38-.21-1.4-.81,0-.57,1.5-.32,1.52.88a5.27,5.27,0,0,1,1.33-.31,6,6,0,0,1,1.63,0,4,4,0,0,1,1.51.51,1.93,1.93,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6,6,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.8,2.8,0,0,1,1,1,1.35,1.35,0,0,1,.17,1.11,2.13,2.13,0,0,1-.84,1l1.44.27,0,.58Zm-12.28-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.76,1.45-.88a.93.93,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.2,2.2,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.34,2.73,1.58,1.89-1.1a11.15,11.15,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,11,11,0,0,0-2,1Z" fill="url(#linear-gradient-267)" />
                  </g>
                  <path d="M265.89,353.17l-1.4-.81-1,.57-.48.28,1.39.8-1.54.89-1.4-.8-1.42.82L249.87,349l1.42-.82-1.39-.81,1.54-.89,1.39.81,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.4,6.4,0,0,1,1.63.05,4.2,4.2,0,0,1,1.51.5,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.14,1.12,6,6,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.86,2.86,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.18,2.18,0,0,1-.84,1l1.46.85Zm-12.28-4.34,2.36,1.36,1.34-.78c.8-.46,1.28-.75,1.45-.87a.93.93,0,0,0,.47-.69c0-.24-.17-.45-.5-.64a2.19,2.19,0,0,0-1-.29,2.45,2.45,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.34,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.77.77,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,11.48,11.48,0,0,0-2,1Z" fill="url(#linear-gradient-268)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M265.89,353.17l-1.4-.81-1,.57-.48.28,1.39.8-1.54.89-1.4-.8-1.42.82L249.87,349l1.42-.82-1.39-.81,1.54-.89,1.39.81,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.87a5.74,5.74,0,0,1,1.33-.31,6.4,6.4,0,0,1,1.63.05,4.2,4.2,0,0,1,1.51.5,2,2,0,0,1,.93,1,1.2,1.2,0,0,1-.14,1.12,6,6,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.86,2.86,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.18,2.18,0,0,1-.84,1l1.46.85Zm-12.28-4.34,2.36,1.36,1.34-.78c.8-.46,1.28-.75,1.45-.87a.93.93,0,0,0,.47-.69c0-.24-.17-.45-.5-.64a2.19,2.19,0,0,0-1-.29,2.45,2.45,0,0,0-1.13.24c-.22.1-.82.43-1.78,1Zm4.06,2.34,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.77.77,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.67,2.67,0,0,0-1-.32,3,3,0,0,0-1.11.1,11.48,11.48,0,0,0-2,1Z" fill="url(#radial-gradient-178)" />
                  </g>
                </g>
                <g id="money1">
                  <path d="M639.21,665H606.87v4.56h0c0,.05,0,.09,0,.13,0,5.2,7.24,9.42,16.17,9.42s16.17-4.22,16.17-9.42c0,0,0-.08,0-.13h0Z" fill="url(#linear-gradient-269)" />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M606.87,668.94v.13s0-.09,0-.13Z" fill="url(#linear-gradient-270)" />
                    <path d="M623,678.08c-8.93,0-16.17-4.21-16.17-9.41v.87h0c0,.05,0,.09,0,.13,0,5.2,7.24,9.42,16.17,9.42s16.17-4.22,16.17-9.42c0,0,0-.08,0-.13h0v-.87C639.21,673.87,632,678.08,623,678.08Z" fill="url(#linear-gradient-271)" />
                    <path d="M639.21,669.07v-.13h0S639.21,669,639.21,669.07Z" fill="url(#linear-gradient-272)" />
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M628,678.63l.45-.09v-12H628Z" fill="#fdd65b" />
                    <path d="M630,678.15l.45-.12V666.58H630Z" fill="#fdd65b" />
                    <path d="M632.05,677.49l.46-.2V666.58h-.46Z" fill="#fdd65b" />
                    <path d="M626,678.93l.45,0v-12.3H626Z" fill="#fdd65b" />
                    <path d="M636.11,675.19l.46-.37v-8.24h-.46Z" fill="#fdd65b" />
                    <path d="M638.15,673a7.07,7.07,0,0,0,.45-.8v-5.62h-.45Z" fill="#fdd65b" />
                    <path d="M634.08,676.53l.46-.24v-9.71h-.46Z" fill="#fdd65b" />
                    <path d="M623.93,679.06h.45V666.58h-.45Z" fill="#fdd65b" />
                    <path d="M621.9,679.05l.45,0V666.58h-.45Z" fill="#fdd65b" />
                    <path d="M617.84,678.58l.45.09V666.58h-.45Z" fill="#fdd65b" />
                    <path d="M619.87,678.9l.45,0V666.58h-.45Z" fill="#fdd65b" />
                    <path d="M615.8,678.08l.46.13V666.58h-.46Z" fill="#fdd65b" />
                    <path d="M607.68,672.6a6.67,6.67,0,0,0,.45.72v-6.74h-.45Z" fill="#fdd65b" />
                    <path d="M609.71,675c.14.12.3.23.46.35v-8.77h-.46Z" fill="#fdd65b" />
                    <path d="M613.77,677.38l.46.18v-11h-.46Z" fill="#fdd65b" />
                    <path d="M611.74,676.4c.15.09.3.16.46.24V666.58h-.46Z" fill="#fdd65b" />
                  </g>
                  <ellipse cx="623.04" cy="665.05" rx="16.17" ry="9.41" fill="url(#linear-gradient-273)" />
                  <path d="M623,674.21c-8.74,0-15.84-4-16.14-9.09,0,.11,0,.22,0,.33,0,5.2,7.24,9.41,16.17,9.41s16.17-4.21,16.17-9.41c0-.11,0-.22,0-.33C638.88,670.17,631.78,674.21,623,674.21Z" fill="url(#White_Black_Radial-13)" style={{mixBlendMode: 'screen'}} />
                  <ellipse cx="623.04" cy="665.05" rx="12.09" ry="7.04" fill="url(#linear-gradient-274)" />
                  <path d="M623.44,658.36c6.46,0,11.71,2.95,12,6.66a2.33,2.33,0,0,0,0-.38c0-3.88-5.41-7-12.09-7s-12.08,3.15-12.08,7c0,.13,0,.26,0,.38C611.73,661.31,617,658.36,623.44,658.36Z" fill="url(#White_Black_Radial-14)" style={{mixBlendMode: 'screen'}} />
                  <path d="M623,658.76c6.45,0,11.71,3,12.05,6.66,0-.12,0-.25,0-.37,0-3.89-5.41-7-12.08-7s-12.09,3.15-12.09,7a2.33,2.33,0,0,0,0,.37C611.33,661.71,616.58,658.76,623,658.76Z" fill="url(#linear-gradient-275)" style={{mixBlendMode: 'multiply'}} />
                  <path d="M615.52,669.88c3.63,1.23,6.08,3.69,5.47,5.49s-4.06,2.26-7.69,1-6.08-3.7-5.47-5.49S611.88,668.64,615.52,669.88Z" fill="url(#radial-gradient-179)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M631.36,657.5c3.63,1.24,6.08,3.7,5.47,5.5s-4.06,2.25-7.69,1-6.08-3.7-5.47-5.5S627.72,656.27,631.36,657.5Z" fill="url(#radial-gradient-180)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M630.57,668.74l-1.4-.8-1,.56-.48.28,1.36.23,0,.58-1.54.89-1.4-.81-1.42.83-10.2-5.9,0-.56,1.39-.26-1.39-.8,0-.57,1.52-.32,1.39.8,1.09-.63.38-.21-1.4-.8,0-.58,1.5-.31,1.52.87a5.27,5.27,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.8,2.8,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.22,2.22,0,0,1-.84,1l1.44.26,0,.58Zm-12.28-4.34,2.36,1.37L622,665c.8-.46,1.28-.75,1.45-.88a.9.9,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.19,2.19,0,0,0-1-.29,2.44,2.44,0,0,0-1.13.23c-.22.11-.82.44-1.78,1Zm4.06,2.35,2.73,1.57,1.89-1.09a10.69,10.69,0,0,0,1.34-.85.78.78,0,0,0,.34-.66c0-.24-.22-.46-.58-.67a2.5,2.5,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#linear-gradient-276)" />
                  </g>
                  <path d="M630.57,668.16l-1.4-.81-1,.57-.48.28,1.39.8-1.54.89-1.4-.8-1.42.82L614.55,664l1.42-.82-1.39-.8,1.54-.89,1.39.8,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.8,2.8,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.22,2.22,0,0,1-.84,1l1.46.84Zm-12.28-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88a.93.93,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.32,2.32,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.22.11-.82.44-1.78,1Zm4.06,2.34,2.73,1.58,1.89-1.1a9.93,9.93,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.35,2.35,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#linear-gradient-277)" />
                  <g style={{mixBlendMode: 'color-dodge'}}>
                    <path d="M630.57,668.16l-1.4-.81-1,.57-.48.28,1.39.8-1.54.89-1.4-.8-1.42.82L614.55,664l1.42-.82-1.39-.8,1.54-.89,1.39.8,1.09-.63.38-.21-1.4-.81,1.54-.89,1.52.88a5.27,5.27,0,0,1,1.33-.31,6.39,6.39,0,0,1,1.63,0,4.41,4.41,0,0,1,1.51.51,2,2,0,0,1,.93,1,1.19,1.19,0,0,1-.14,1.12,6.2,6.2,0,0,1,2.35-.29,4.69,4.69,0,0,1,2,.6,2.8,2.8,0,0,1,1,1,1.38,1.38,0,0,1,.17,1.12,2.22,2.22,0,0,1-.84,1l1.46.84Zm-12.28-4.34,2.36,1.36,1.34-.77c.8-.46,1.28-.75,1.45-.88a.93.93,0,0,0,.47-.69c0-.23-.17-.44-.5-.63a2.32,2.32,0,0,0-1-.3,2.59,2.59,0,0,0-1.13.24c-.22.11-.82.44-1.78,1Zm4.06,2.34,2.73,1.58,1.89-1.1a9.93,9.93,0,0,0,1.34-.84.78.78,0,0,0,.34-.67c0-.23-.22-.45-.58-.66a2.35,2.35,0,0,0-1-.32,2.83,2.83,0,0,0-1.11.1,10.09,10.09,0,0,0-2,1Z" fill="url(#radial-gradient-181)" />
                  </g>
                </g>
                <g>
                  <g opacity="0.2">
                    <path d="M997.36,617.51a19.1,19.1,0,0,1-15.17-7.61,18.89,18.89,0,0,1-3.79-10.45l-26.74-16-11.13,1.22c-.62.06-1.24.1-1.85.1h0a16.39,16.39,0,0,1-11.13-28.34l24.6-23a19.81,19.81,0,0,1,23.8-2.47L1043.66,572a17.52,17.52,0,0,1-3.27,31.51l-36.68,12.92A19,19,0,0,1,997.36,617.51Z" opacity={0} />
                    <path d="M928.17,556.1s24.2-22.61,24.24-22.61a19.55,19.55,0,0,1,23.44-2.4l67.71,41.07a17.33,17.33,0,0,1-3.23,31.16l-36.64,12.9a20.75,20.75,0,0,1-2.75.75,19.24,19.24,0,0,1-22.44-17.69l-26.62-15.95-11.06,1.11c-.6.06-1.23.08-1.83.08h-.57a16.57,16.57,0,0,1-14.6-10.13,15,15,0,0,1-1.23-6.29A17.9,17.9,0,0,1,928.17,556.1Z" opacity="0.02" />
                    <path d="M928.79,555.79c.07-.06,23.79-22.21,23.88-22.21a19.3,19.3,0,0,1,23.08-2.32l67.71,41.06a17.13,17.13,0,0,1-3.2,30.81L1003.67,616a22.25,22.25,0,0,1-2.74.75,18.22,18.22,0,0,1-18.48-7.42,22.44,22.44,0,0,1-1.24-2,18.8,18.8,0,0,1-2.61-8.27l-26.5-15.88-11,1c-.59.06-1.23.07-1.82.07h0l-.56,0a16.94,16.94,0,0,1-14.6-9.9,14.08,14.08,0,0,1-1.31-6.38A19.71,19.71,0,0,1,928.79,555.79Z" opacity="0.04" />
                    <path d="M929.4,555.48c.11-.1,23.4-21.81,23.54-21.81a19,19,0,0,1,22.71-2.24l67.71,41.06A16.94,16.94,0,0,1,1040.2,603l-36.54,12.86a20.66,20.66,0,0,1-2.74.76,18,18,0,0,1-3.58.35,18.38,18.38,0,0,1-14.76-7.84c-.44-.61-.84-1.33-1.21-2a19,19,0,0,1-2.68-8.17l-26.38-15.8-10.9.88a15.64,15.64,0,0,1-1.81.06h0l-.56,0a17.35,17.35,0,0,1-14.6-9.66,13.16,13.16,0,0,1-1.38-6.48C923.34,563.8,926.25,558.44,929.4,555.48Z" opacity="0.06" />
                    <path d="M930,555.18c.14-.14,23-21.41,23.18-21.42a18.72,18.72,0,0,1,22.35-2.16l67.71,41.06a16.73,16.73,0,0,1-3.13,30.1l-36.49,12.85a20.52,20.52,0,0,1-2.73.76,17.94,17.94,0,0,1-3.57.36,18.18,18.18,0,0,1-14.63-7.92c-.43-.61-.81-1.34-1.17-2a19,19,0,0,1-2.75-8.08L952.53,583l-10.83.78a17.82,17.82,0,0,1-1.79,0h0l-.55,0a17.76,17.76,0,0,1-14.59-9.43,12.25,12.25,0,0,1-1.46-6.58C923.64,563.81,926.93,558.07,930,555.18Z" opacity="0.08" />
                    <path d="M930.64,554.87c.17-.17,22.59-21,22.82-21a18.5,18.5,0,0,1,22-2.09l67.7,41.07a16.54,16.54,0,0,1-3.08,29.75l-36.44,12.83a22.65,22.65,0,0,1-2.73.76,17.23,17.23,0,0,1-3.57.36,18,18,0,0,1-14.5-8c-.4-.6-.77-1.35-1.13-2a19.26,19.26,0,0,1-2.81-8l-26.14-15.66-10.76.67a17.62,17.62,0,0,1-1.78,0h0l-.55,0a18.19,18.19,0,0,1-14.59-9.2,11.67,11.67,0,0,1-1.54-6.66C923.94,563.81,927.61,557.7,930.64,554.87Z" opacity="0.1" />
                    <path d="M931.25,554.56c.22-.2,22.19-20.61,22.47-20.61A18.1,18.1,0,0,1,966,529.28a18.33,18.33,0,0,1,9.31,2.65L1043.05,573a16.34,16.34,0,0,1-3,29.4l-36.39,12.82a24.49,24.49,0,0,1-2.72.76A16.9,16.9,0,0,1,983,608.26c-.39-.58-.75-1.35-1.09-2-1.33-2.3-2.76-5.27-2.88-7.88l-26-15.59-10.68.56a17.42,17.42,0,0,1-1.77,0h0l-.55,0c-5.73-.2-11.62-4-14.59-9a11.1,11.1,0,0,1-1.61-6.76C924.23,563.82,928.29,557.33,931.25,554.56Z" opacity="0.12" />
                    <path d="M931.87,554.25C932.12,554,953.66,534,954,534a17.94,17.94,0,0,1,21.26-1.94L1043,573.16a16.16,16.16,0,0,1-3,29.05L1003.59,615a24.33,24.33,0,0,1-2.71.76,17.86,17.86,0,0,1-3.56.37A17.47,17.47,0,0,1,983.09,608c-.38-.57-.72-1.36-1.06-1.94-1.3-2.26-2.82-5.24-2.95-7.79l-25.89-15.51-10.61.44a17.22,17.22,0,0,1-1.76,0h0c-.16,0-.38,0-.54,0-5.6-.19-12.5-3.44-14.59-8.73-1.52-1.65-2-4.43-1.69-6.85C924.51,563.82,929,557,931.87,554.25Z" opacity="0.14" />
                    <path d="M932.48,553.94c.29-.26,21.39-19.8,21.77-19.81a17.51,17.51,0,0,1,11.9-4.44,17.78,17.78,0,0,1,9,2.58l67.71,41.06a15.95,15.95,0,0,1-3,28.69l-36.29,12.78a24,24,0,0,1-2.72.77,17,17,0,0,1-3.55.37c-5.85,0-11-3.48-14.09-8.22-.37-.57-.7-1.37-1-1.94-1.26-2.2-2.89-5.19-3-7.69l-25.77-15.44-10.54.34c-.51,0-1.23,0-1.74,0h0c-.16,0-.38,0-.54-.05-5.48-.18-12.54-3.32-14.58-8.49-1.63-1.6-2.15-4.47-1.77-6.95C924.79,563.83,929.66,556.59,932.48,553.94Z" opacity="0.16" />
                    <path d="M933.1,553.64c.32-.3,21-19.41,21.41-19.42a17.24,17.24,0,0,1,11.69-4.32,17.47,17.47,0,0,1,8.84,2.54l67.71,41.06a15.76,15.76,0,0,1-2.94,28.34l-36.25,12.76a26,26,0,0,1-2.71.77,17,17,0,0,1-3.54.38c-5.85,0-10.93-3.56-14-8.3-.36-.56-.67-1.38-1-1.94-1.24-2.15-3-5.15-3.08-7.59l-25.65-15.37-10.46.23c-.51.05-1.23,0-1.74,0h0c-.15,0-.38,0-.53,0-5.35-.19-12.59-3.22-14.58-8.26-1.73-1.55-2.26-4.5-1.84-7C925.06,563.83,930.34,556.22,933.1,553.64Z" opacity="0.18" />
                    <path d="M933.72,553.33c.35-.34,20.58-19,21-19a17,17,0,0,1,11.49-4.21,17.31,17.31,0,0,1,8.68,2.5l67.71,41.07a15.56,15.56,0,0,1-2.91,28l-36.2,12.75a25.19,25.19,0,0,1-2.7.77,16.39,16.39,0,0,1-3.54.38c-5.84,0-10.85-3.63-13.82-8.38-.34-.54-.64-1.38-1-1.93-1.21-2.1-3-5.11-3.14-7.49l-25.53-15.29-10.39.11c-.49,0-1.23-.06-1.72-.06h0c-.15,0-.38,0-.53,0-5.22-.18-12.63-3.1-14.58-8-1.84-1.49-2.38-4.53-1.92-7.13C925.33,563.84,931,555.85,933.72,553.33Z" opacity="0.2" />
                    <path d="M934.33,553c.4-.37,20.19-18.61,20.7-18.62a16.75,16.75,0,0,1,11.29-4.09,17,17,0,0,1,8.52,2.46l67.7,41.06a15.37,15.37,0,0,1-2.86,27.64l-36.15,12.73a25.87,25.87,0,0,1-2.7.77,17,17,0,0,1-3.53.39c-5.83,0-10.78-3.7-13.69-8.46-.33-.53-.62-1.39-.92-1.92-1.18-2.05-3.11-5.08-3.21-7.4l-25.41-15.22H943.75a16.11,16.11,0,0,1-1.7-.07h0c-.15,0-.37,0-.52-.06-5.09-.17-12.68-3-14.58-7.79a6.62,6.62,0,0,1-2-7.23C925,563.78,931.7,555.48,934.33,553Z" opacity="0.22" />
                    <path d="M935,552.71c.43-.4,19.79-18.21,20.34-18.22a16.51,16.51,0,0,1,11.09-4,16.7,16.7,0,0,1,8.35,2.43L1042.44,574a15.16,15.16,0,0,1-2.83,27.28L1003.51,614a25.75,25.75,0,0,1-2.69.78,16.32,16.32,0,0,1-3.53.39c-5.82,0-10.7-3.77-13.56-8.53-.31-.53-.58-1.4-.88-1.92-1.15-2-3.17-5-3.28-7.3l-25.28-15.15-10.24-.1c-.47.05-1.23-.1-1.7-.1h0c-.15,0-.38,0-.52-.06-5-.17-12.72-2.87-14.57-7.55a6.46,6.46,0,0,1-2.08-7.33C925.22,563.78,932.39,555.11,935,552.71Z" opacity="0.24" />
                    <path d="M935.57,552.4c.46-.43,19.38-17.8,20-17.81a16.15,16.15,0,0,1,10.87-3.87,16.42,16.42,0,0,1,8.2,2.39l67.71,41.06a15,15,0,0,1-2.79,26.93l-36.06,12.69a25.58,25.58,0,0,1-2.68.78,16.29,16.29,0,0,1-3.52.39c-5.82,0-10.63-3.84-13.43-8.6-.3-.52-.55-1.41-.85-1.92-1.12-1.94-3.24-5-3.34-7.2l-25.16-15.08L944.34,582c-.46,0-1.23-.11-1.68-.11h0c-.15,0-.38-.06-.52-.06-4.84-.17-12.77-2.76-14.57-7.33a6.27,6.27,0,0,1-2.15-7.41C925.45,563.78,933.07,554.74,935.57,552.4Z" opacity="0.25" />
                    <path d="M936.18,552.1c.5-.47,19-17.41,19.64-17.42a15.93,15.93,0,0,1,10.67-3.76,16.34,16.34,0,0,1,8,2.35l67.71,41.07a14.77,14.77,0,0,1-2.76,26.57l-36,12.68c-.66.23-2,.64-2.68.78a16.31,16.31,0,0,1-3.52.4c-5.81,0-10.54-3.91-13.29-8.69-.29-.5-.53-1.41-.81-1.91-1.09-1.89-3.31-4.95-3.41-7.1l-25-15-10.1-.33c-.44,0-1.22-.12-1.67-.12h0c-.14,0-.38-.07-.51-.07-4.71-.16-12.81-2.65-14.57-7.09a6.16,6.16,0,0,1-2.22-7.51C925.69,563.77,933.75,554.37,936.18,552.1Z" opacity="0.27" />
                    <path d="M936.8,551.79c.53-.5,18.58-17,19.28-17a15.62,15.62,0,0,1,10.47-3.64,16,16,0,0,1,7.88,2.31l67.71,41.06a14.59,14.59,0,0,1-2.72,26.23l-36,12.66c-.64.22-2,.64-2.67.78a15.71,15.71,0,0,1-3.52.4c-5.8-.05-10.46-4-13.15-8.76-.28-.49-.5-1.42-.78-1.9-1.06-1.85-3.38-4.92-3.47-7L955,582l-10-.44c-.44.05-1.23-.14-1.66-.14h0c-.14,0-.38-.07-.51-.07-4.59-.16-12.86-2.53-14.57-6.85a6.07,6.07,0,0,1-2.3-7.61C925.92,563.77,934.43,554,936.8,551.79Z" opacity="0.29" />
                    <path d="M937.41,551.48c.58-.53,18.19-16.61,18.93-16.62a15.41,15.41,0,0,1,10.27-3.53,15.8,15.8,0,0,1,7.72,2.28L1042,574.67a14.38,14.38,0,0,1-2.69,25.87l-35.9,12.65c-.62.21-2,.65-2.68.78a15,15,0,0,1-3.5.4c-5.8,0-10.38-4-13-8.83-.27-.48-.48-1.43-.74-1.9-1-1.79-3.45-4.88-3.55-6.91l-24.79-14.86-9.95-.54c-.42,0-1.23-.16-1.65-.16h0c-.13,0-.37-.07-.5-.08-4.46-.15-12.9-2.41-14.56-6.62a6,6,0,0,1-2.38-7.7C926.16,563.77,935.11,553.63,937.41,551.48Z" opacity="0.31" />
                    <path d="M938,551.17c.61-.57,17.78-16.21,18.57-16.22a15.13,15.13,0,0,1,10.07-3.41,15.51,15.51,0,0,1,7.56,2.24l67.7,41.06a14.19,14.19,0,0,1-2.64,25.52L1003.43,613c-.6.22-2,.66-2.67.79a15.49,15.49,0,0,1-3.5.41c-5.79-.06-10.3-4.11-12.88-8.91-.25-.47-.45-1.44-.71-1.9-1-1.74-3.52-4.84-3.61-6.81l-24.67-14.78-9.88-.66c-.41,0-1.22-.18-1.63-.18h0c-.13,0-.38-.07-.5-.08-4.33-.14-13-2.3-14.56-6.38-2.57-1.12-4-5-2.46-7.79C926.39,563.77,935.8,553.26,938,551.17Z" opacity="0.33" />
                    <path d="M938.65,550.86c.64-.6,17.38-15.8,18.21-15.82a14.93,14.93,0,0,1,9.86-3.3,15.27,15.27,0,0,1,7.4,2.2L1041.83,575a14,14,0,0,1-2.61,25.16l-35.81,12.61c-.58.21-2.06.66-2.66.79a15.47,15.47,0,0,1-3.49.41c-5.78-.06-10.22-4.17-12.75-9-.24-.45-.42-1.44-.68-1.88-1-1.69-3.58-4.81-3.67-6.72L955.6,581.68l-9.79-.77c-.4,0-1.23-.19-1.62-.19h0c-.13,0-.38-.08-.5-.08-4.2-.15-13-2.19-14.56-6.15-2.67-1.08-4.12-5.07-2.53-7.89C926.63,563.77,936.48,552.89,938.65,550.86Z" opacity="0.35" />
                    <path d="M939.26,550.56c.68-.64,17-15.41,17.87-15.43a14.57,14.57,0,0,1,9.65-3.18,15,15,0,0,1,7.24,2.16l67.71,41.06a13.8,13.8,0,0,1-2.57,24.82l-35.76,12.59c-.57.2-2.08.67-2.66.8a16.06,16.06,0,0,1-3.49.41c-5.77-.07-10.14-4.23-12.62-9.07-.22-.44-.39-1.45-.63-1.88-.94-1.64-3.66-4.76-3.74-6.62l-24.44-14.64-9.72-.88c-.39,0-1.22-.2-1.61-.2h0c-.12,0-.37-.09-.49-.09-4.08-.14-13-2.07-14.56-5.92-2.77-1-4.28-5.12-2.6-8C926.86,563.77,937.16,552.53,939.26,550.56Z" opacity="0.37" />
                    <path d="M939.88,550.25c.71-.67,16.58-15,17.51-15a14.36,14.36,0,0,1,9.45-3.07,14.84,14.84,0,0,1,7.08,2.13l67.71,41.06a13.6,13.6,0,0,1-2.54,24.46l-35.71,12.58c-.55.19-2.09.67-2.65.8a15.45,15.45,0,0,1-3.48.41,13.24,13.24,0,0,1-12.49-9.14c-.29-.39-.36-1.46-.6-1.88-.91-1.59-3.72-4.72-3.81-6.52L956,581.48l-9.65-1c-.37,0-1.22-.23-1.59-.23h0c-.12,0-.38-.08-.49-.09-3.95-.13-13.08-2-14.56-5.68-2.87-1-4.45-5.17-2.68-8.08C927.1,563.76,937.84,552.16,939.88,550.25Z" opacity="0.39" />
                    <path d="M940.5,549.94c.75-.7,16.18-14.61,17.15-14.62a14.06,14.06,0,0,1,9.25-3,14.34,14.34,0,0,1,6.92,2.09l67.71,41.06a13.41,13.41,0,0,1-2.5,24.11l-35.67,12.55c-.53.19-2.1.68-2.64.81a14.89,14.89,0,0,1-3.48.41,13,13,0,0,1-12.35-9.21c-.28-.38-.33-1.48-.56-1.88-.89-1.53-3.8-4.68-3.88-6.42l-24.19-14.49-9.57-1.1c-.36,0-1.23-.24-1.59-.24h0c-.11,0-.37-.09-.48-.1-3.82-.13-13.13-1.84-14.55-5.44-3-.92-4.62-5.23-2.76-8.17C927.33,563.76,938.52,551.79,940.5,549.94Z" opacity="0.41" />
                    <path d="M941.11,549.63c.79-.73,15.78-14.2,16.8-14.22a13.86,13.86,0,0,1,9-2.85,14.31,14.31,0,0,1,6.77,2.05l67.71,41.07a13.2,13.2,0,0,1-2.47,23.75L1003.35,612c-.52.18-2.12.69-2.64.81a15.38,15.38,0,0,1-3.47.42A12.81,12.81,0,0,1,985,603.9c-.27-.36-.31-1.48-.53-1.86-.85-1.49-3.86-4.65-3.94-6.33l-24.07-14.42-9.5-1.21c-.35,0-1.22-.25-1.57-.25h0c-.11,0-.38-.1-.48-.1-3.7-.13-13.17-1.73-14.55-5.22-3.08-.86-4.78-5.28-2.84-8.26C927.57,563.76,939.21,551.42,941.11,549.63Z" opacity="0.43" />
                    <path d="M941.73,549.32c.82-.76,15.38-13.8,16.44-13.82a13.53,13.53,0,0,1,8.84-2.73,13.91,13.91,0,0,1,6.61,2l67.7,41.06a13,13,0,0,1-2.42,23.41l-35.57,12.52c-.49.18-2.13.69-2.63.81a14.83,14.83,0,0,1-3.47.42,12.58,12.58,0,0,1-12.08-9.37c-.27-.35-.28-1.49-.5-1.86-.82-1.43-3.93-4.61-4-6.23L956.7,581.19l-9.43-1.32c-.33,0-1.22-.27-1.55-.27h0c-.1,0-.37-.1-.47-.1-3.57-.12-13.22-1.62-14.55-5-3.18-.81-4.94-5.33-2.91-8.36C927.8,563.76,939.89,551.05,941.73,549.32Z" opacity="0.45" />
                    <path d="M942.34,549c.86-.8,15-13.41,16.1-13.43a13.3,13.3,0,0,1,8.63-2.62,13.71,13.71,0,0,1,6.44,2L1041.22,576a12.81,12.81,0,0,1-2.39,23l-35.51,12.51c-.48.17-2.15.7-2.63.81a15.4,15.4,0,0,1-3.47.43,12.4,12.4,0,0,1-11.94-9.45c-.26-.34-.26-1.5-.46-1.86-.8-1.38-4-4.56-4.08-6.13l-23.82-14.28-9.35-1.42c-.33,0-1.23-.29-1.55-.29h0c-.1,0-.37-.11-.47-.11-3.44-.12-13.26-1.5-14.55-4.74-3.29-.76-5.1-5.39-3-8.46C928,563.76,940.57,550.68,942.34,549Z" opacity="0.47" />
                    <path d="M943,548.71c.89-.84,14.58-13,15.74-13a13.05,13.05,0,0,1,8.43-2.5,13.39,13.39,0,0,1,6.28,1.94l67.71,41.06a12.62,12.62,0,0,1-2.35,22.7l-35.47,12.49c-.46.16-2.16.7-2.63.81a14.17,14.17,0,0,1-3.45.43c-5.73-.09-10.82-4.2-11.81-9.52-.25-.33-.23-1.51-.43-1.85-.76-1.34-4.07-4.53-4.14-6L957.14,581l-9.28-1.54c-.31,0-1.22-.3-1.53-.3h0c-.1,0-.38-.11-.47-.12-3.31-.11-13.31-1.38-14.54-4.51-3.4-.7-5.27-5.43-3.07-8.54C928.27,563.76,941.25,550.31,943,548.71Z" opacity="0.49" />
                    <path d="M943.58,548.4c.92-.87,14.17-12.61,15.38-12.63a12.79,12.79,0,0,1,8.23-2.39,13.16,13.16,0,0,1,6.12,1.91L1041,576.35a12.42,12.42,0,0,1-2.32,22.34l-35.42,12.47c-.44.16-2.16.71-2.62.82a14.17,14.17,0,0,1-3.45.43c-5.72-.09-10.78-4.25-11.68-9.59-.23-.32-.19-1.52-.38-1.85-.74-1.28-4.14-4.49-4.21-5.94L957.36,580.9l-9.21-1.65c-.3,0-1.22-.32-1.52-.32h0c-.09,0-.37-.11-.46-.12-3.19-.1-13.36-1.27-14.54-4.27-3.5-.65-5.43-5.49-3.14-8.64C928.51,563.75,941.93,549.94,943.58,548.4Z" opacity="0.51" />
                    <path d="M944.19,548.09c1-.9,13.78-12.2,15-12.23a12.54,12.54,0,0,1,8-2.27,13,13,0,0,1,6,1.86l67.71,41.07a12.23,12.23,0,0,1-2.28,22L1003.27,611c-.43.15-2.18.72-2.62.82a14.17,14.17,0,0,1-3.44.44c-5.72-.1-10.76-4.32-11.55-9.68-.22-.3-.17-1.52-.35-1.84-.71-1.23-4.21-4.45-4.27-5.84L957.58,580.8,948.45,579c-.29,0-1.22-.33-1.51-.33h0c-.09,0-.38-.12-.47-.12-3.05-.11-13.39-1.16-14.53-4-3.6-.6-5.59-5.55-3.22-8.74C928.74,563.75,942.62,549.57,944.19,548.09Z" opacity="0.53" />
                    <path d="M944.81,547.78c1-.93,13.37-11.8,14.67-11.82a12.31,12.31,0,0,1,7.82-2.17,12.83,12.83,0,0,1,5.81,1.83l67.71,41.06a12,12,0,0,1-2.25,21.64l-35.32,12.44c-.41.14-2.19.72-2.61.82a14.11,14.11,0,0,1-3.44.44c-5.71-.1-10.72-4.37-11.41-9.75-.22-.29-.14-1.53-.32-1.84-.67-1.17-4.27-4.41-4.34-5.74l-23.33-14-9.06-1.87c-.28,0-1.22-.36-1.5-.36h0c-.08,0-.37-.12-.46-.12-2.92-.1-13.44-1-14.53-3.81-3.7-.54-5.76-5.59-3.29-8.83C929,563.75,943.3,549.2,944.81,547.78Z" opacity="0.55" />
                    <path d="M945.42,547.48c1-1,13-11.41,14.33-11.43a12,12,0,0,1,7.61-2,12.47,12.47,0,0,1,5.65,1.79l67.7,41.06a11.84,11.84,0,0,1-2.2,21.29l-35.28,12.42c-.39.14-2.2.73-2.6.82a14.09,14.09,0,0,1-3.43.44c-5.71-.1-10.7-4.42-11.28-9.82-.21-.28-.11-1.54-.28-1.83-.65-1.13-4.35-4.38-4.41-5.65L958,580.61l-9-2c-.26,0-1.22-.37-1.48-.37h0c-.08,0-.37-.13-.46-.13-2.8-.09-13.48-.93-14.52-3.57-3.81-.49-5.93-5.65-3.37-8.92C929.21,563.75,944,548.83,945.42,547.48Z" opacity="0.57" />
                    <path d="M946,547.17c1.07-1,12.57-11,14-11a11.78,11.78,0,0,1,7.41-1.94A12.25,12.25,0,0,1,972.9,536L1040.61,577a11.63,11.63,0,0,1-2.17,20.93l-35.22,12.41c-.37.13-2.22.73-2.6.82a13.64,13.64,0,0,1-3.43.45c-5.7-.11-10.66-4.48-11.14-9.9-.2-.27-.09-1.55-.25-1.83-.62-1.08-4.41-4.33-4.47-5.55l-23.09-13.84-8.92-2.09c-.25,0-1.21-.38-1.46-.38h0c-.07,0-.37-.13-.45-.14-2.67-.09-13.53-.81-14.52-3.33-3.91-.44-6.09-5.71-3.45-9C929.45,563.75,944.66,548.46,946,547.17Z" opacity="0.59" />
                    <path d="M946.66,546.86c1.1-1,12.17-10.6,13.61-10.63a11.53,11.53,0,0,1,7.2-1.82,12.13,12.13,0,0,1,5.33,1.71l67.71,41.07a11.44,11.44,0,0,1-2.13,20.58l-35.18,12.38c-.35.13-2.23.74-2.59.83a13.62,13.62,0,0,1-3.42.45c-5.7-.11-10.64-4.53-11-10-.19-.25-.06-1.55-.21-1.82-.59-1-4.49-4.29-4.54-5.45l-23-13.77-8.84-2.2c-.24,0-1.22-.4-1.46-.4h0c-.07,0-.37-.13-.45-.13-2.54-.09-13.57-.7-14.52-3.11-4-.38-6.25-5.75-3.52-9.11C929.68,563.75,945.34,548.09,946.66,546.86Z" opacity="0.61" />
                    <path d="M947.27,546.55c1.15-1.07,11.78-10.2,13.26-10.23a11.36,11.36,0,0,1,7-1.71,11.86,11.86,0,0,1,5.17,1.68l67.71,41.06a11.25,11.25,0,0,1-2.1,20.23L1003.19,610c-.34.12-2.25.75-2.59.83a13.64,13.64,0,0,1-3.42.46c-5.69-.12-10.6-4.59-10.87-10.06-.18-.24,0-1.56-.18-1.82-.56-1-4.55-4.25-4.61-5.35l-22.85-13.69L949.91,578c-.23,0-1.22-.42-1.44-.42h0c-.07,0-.38-.14-.45-.14-2.41-.08-13.62-.59-14.52-2.87-4.12-.34-6.41-5.81-3.6-9.21C929.92,563.74,946,547.72,947.27,546.55Z" opacity="0.63" />
                    <path d="M947.89,546.24c1.18-1.1,11.37-9.8,12.9-9.83a11.07,11.07,0,0,1,6.8-1.59,11.63,11.63,0,0,1,5,1.64l67.71,41.06a11.06,11.06,0,0,1-2.06,19.88l-35.08,12.35c-.32.11-2.26.75-2.58.83a13.58,13.58,0,0,1-3.42.46c-5.67-.12-10.57-4.64-10.74-10.13-.16-.23,0-1.57-.14-1.81-.53-.92-4.62-4.22-4.67-5.26l-22.73-13.62-8.69-2.42c-.21,0-1.21-.43-1.43-.43h0c-.07,0-.37-.15-.44-.15-2.29-.08-13.66-.47-14.51-2.63-4.23-.29-6.58-5.86-3.68-9.3C930.15,563.74,946.71,547.35,947.89,546.24Z" opacity="0.65" />
                    <path d="M948.51,545.94c1.21-1.14,11-9.41,12.55-9.44a10.88,10.88,0,0,1,6.59-1.48,11.33,11.33,0,0,1,4.85,1.61l67.71,41.06a10.85,10.85,0,0,1-2,19.52l-35,12.34c-.3.1-2.27.76-2.58.83a13,13,0,0,1-3.4.46c-5.67-.12-10.54-4.69-10.61-10.2-.16-.22,0-1.58-.1-1.81-.5-.87-4.69-4.18-4.74-5.16l-22.61-13.55-8.61-2.53c-.21,0-1.22-.45-1.42-.45h0c-.07,0-.37-.14-.44-.15-2.16-.07-13.71-.36-14.51-2.4-4.33-.23-6.74-5.91-3.75-9.39C930.39,563.74,947.39,547,948.51,545.94Z" opacity="0.67" />
                    <path d="M949.12,545.63c1.25-1.17,10.57-9,12.2-9a10.65,10.65,0,0,1,6.39-1.36,11.24,11.24,0,0,1,4.69,1.56l67.7,41.07a10.66,10.66,0,0,1-2,19.17l-35,12.31c-.29.1-2.29.77-2.58.84a13,13,0,0,1-3.4.47c-5.66-.13-10.51-4.75-10.47-10.29-.15-.2,0-1.58-.07-1.8-.47-.82-4.76-4.13-4.8-5.06L959.33,580l-8.54-2.65c-.19,0-1.21-.46-1.41-.46h0c-.06,0-.37-.15-.43-.15-2-.07-13.75-.25-14.51-2.17-4.43-.18-6.91-6-3.83-9.49C930.63,563.74,948.07,546.61,949.12,545.63Z" opacity="0.69" />
                    <path d="M949.74,545.32c1.28-1.2,10.17-8.6,11.84-8.63a10.44,10.44,0,0,1,6.18-1.26,11,11,0,0,1,4.53,1.53L1040,578a10.46,10.46,0,0,1-2,18.82l-34.93,12.3c-.27.1-2.3.77-2.57.84a12.59,12.59,0,0,1-3.39.47c-5.66-.13-10.48-4.8-10.34-10.36-.14-.19.08-1.59,0-1.79-.45-.77-4.83-4.1-4.88-5l-22.36-13.4-8.47-2.75c-.18,0-1.21-.49-1.39-.49h0c-.06,0-.37-.15-.43-.15-1.91-.07-13.8-.13-14.51-1.93-4.53-.13-7.07-6-3.9-9.59C930.86,563.74,948.75,546.24,949.74,545.32Z" opacity="0.71" />
                    <path d="M950.35,545c1.33-1.23,9.77-8.2,11.49-8.23a10.24,10.24,0,0,1,6-1.14,10.63,10.63,0,0,1,4.37,1.49l67.71,41.06a10.27,10.27,0,0,1-1.91,18.47l-34.89,12.28c-.24.09-2.31.78-2.56.84a13,13,0,0,1-3.39.48c-5.65-.14-10.45-4.86-10.2-10.44-.13-.18.11-1.6,0-1.79-.41-.72-4.9-4.06-4.94-4.87l-22.24-13.33L951.38,577c-.17,0-1.22-.5-1.38-.5h0c-.06,0-.37-.16-.43-.16-1.78-.06-13.84,0-14.5-1.7-4.64-.07-7.24-6.07-4-9.67C931.1,563.73,949.43,545.87,950.35,545Z" opacity="0.73" />
                    <path d="M951,544.7c1.36-1.26,9.37-7.8,11.13-7.83a10,10,0,0,1,5.78-1,10.59,10.59,0,0,1,4.21,1.46l67.71,41.06a10.07,10.07,0,0,1-1.88,18.11l-34.83,12.27c-.23.08-2.33.78-2.56.84a12.59,12.59,0,0,1-3.38.48c-5.65-.14-10.42-4.91-10.07-10.51-.12-.17.13-1.62,0-1.79-.38-.66-5-4-5-4.77L960,579.73l-8.32-3c-.15,0-1.21-.51-1.37-.51h0s-.37-.17-.42-.17c-1.65-.06-13.89.1-14.5-1.46-4.75,0-7.4-6.12-4.06-9.77C931.33,563.73,950.12,545.5,951,544.7Z" opacity="0.75" />
                    <path d="M951.59,544.4c1.39-1.31,9-7.41,10.78-7.44a9.8,9.8,0,0,1,5.57-.91,10.48,10.48,0,0,1,4,1.41l67.71,41.07a9.88,9.88,0,0,1-1.84,17.76l-34.79,12.25c-.21.07-2.34.79-2.55.84a12.59,12.59,0,0,1-3.38.48c-5.64-.14-10.39-5-9.93-10.59-.12-.15.16-1.62.07-1.78-.36-.61-5-4-5.07-4.68l-22-13.17L952,576.55c-.14,0-1.21-.53-1.35-.53h0c-.05,0-.37-.16-.42-.17-1.52-.05-13.93.22-14.5-1.22-4.85,0-7.56-6.18-4.13-9.87C931.57,563.73,950.8,545.14,951.59,544.4Z" opacity="0.76" />
                    <path d="M952.2,544.09c1.43-1.34,8.57-7,10.43-7a9.62,9.62,0,0,1,5.36-.8,10.14,10.14,0,0,1,3.9,1.38l67.71,41.07a9.67,9.67,0,0,1-1.81,17.4l-34.73,12.23c-.2.07-2.35.8-2.55.85a12.61,12.61,0,0,1-3.38.49c-5.62-.14-10.35-5-9.8-10.67-.1-.14.2-1.63.11-1.77-.32-.57-5.1-4-5.13-4.59l-21.88-13.1-8.17-3.19c-.13,0-1.22-.55-1.35-.55h0s-.37-.17-.41-.17c-1.4,0-14,.32-14.5-1-5,.09-7.72-6.23-4.21-10C931.8,563.73,951.48,544.77,952.2,544.09Z" opacity="0.78" />
                    <path d="M952.82,543.78c1.46-1.37,8.17-6.6,10.07-6.64a9.45,9.45,0,0,1,5.16-.68,9.9,9.9,0,0,1,3.74,1.34l67.7,41.06a9.49,9.49,0,0,1-1.76,17.06L1003,608.13c-.18.06-2.36.81-2.54.85a12.21,12.21,0,0,1-3.37.49c-5.62-.14-10.33-5.07-9.67-10.74-.09-.13.22-1.64.14-1.77-.29-.51-5.17-3.9-5.2-4.49l-21.75-13-8.1-3.3c-.12,0-1.21-.56-1.33-.56h0s-.37-.18-.41-.18c-1.27,0-14,.44-14.5-.76-5,.14-7.88-6.28-4.28-10C932,563.73,952.16,544.4,952.82,543.78Z" opacity="0.8" />
                    <path d="M953.44,543.47c1.5-1.4,7.76-6.2,9.71-6.24a9.4,9.4,0,0,1,5-.57,9.58,9.58,0,0,1,3.57,1.31L1039.39,579a9.28,9.28,0,0,1-1.73,16.7L1003,607.93c-.16.06-2.37.81-2.53.85a12.21,12.21,0,0,1-3.37.49,9.78,9.78,0,0,1-9.53-10.81c-.08-.12.25-1.65.18-1.77-.27-.46-5.24-3.86-5.27-4.39l-21.63-12.95-8-3.42c-.1,0-1.21-.58-1.32-.58h0s-.36-.18-.4-.18c-1.14,0-14.07.56-14.49-.52-5.16.19-8.06-6.34-4.37-10.15C932.27,563.73,952.84,544,953.44,543.47Z" opacity="0.82" />
                    <path d="M954.05,543.16c1.54-1.43,7.37-5.8,9.36-5.83a9.18,9.18,0,0,1,4.76-.46,9.35,9.35,0,0,1,3.41,1.27l67.71,41.06a9.09,9.09,0,0,1-1.69,16.35L1003,607.73c-.14,0-2.39.82-2.54.85a12.1,12.1,0,0,1-3.35.5,9.68,9.68,0,0,1-9.4-10.9c-.07-.1.27-1.65.21-1.75-.23-.41-5.31-3.83-5.33-4.3l-21.51-12.88-8-3.53c-.1,0-1.21-.59-1.31-.59h0s-.37-.19-.4-.19c-1,0-14.11.67-14.49-.29-5.26.25-8.22-6.38-4.44-10.24C932.51,563.72,953.53,543.66,954.05,543.16Z" opacity="0.84" />
                    <path d="M954.67,542.86c1.57-1.47,7-5.41,9-5.44a9.12,9.12,0,0,1,4.54-.35,9.5,9.5,0,0,1,3.26,1.23l67.71,41.07a8.89,8.89,0,0,1-1.66,16L1003,607.53c-.12,0-2.4.82-2.53.85a12,12,0,0,1-3.35.5,9.58,9.58,0,0,1-9.26-11c-.07-.09.3-1.66.25-1.75-.21-.36-5.39-3.79-5.4-4.2l-21.39-12.81-7.88-3.63c-.08,0-1.21-.61-1.29-.61h0s-.37-.19-.4-.19c-.89,0-14.16.78-14.49-.06-5.36.3-8.38-6.44-4.51-10.34C932.74,563.72,954.21,543.29,954.67,542.86Z" opacity="0.86" />
                    <path d="M955.28,542.55c1.61-1.5,6.57-5,8.66-5a8.93,8.93,0,0,1,4.34-.23,9.18,9.18,0,0,1,3.1,1.19l67.71,41.06a8.71,8.71,0,0,1-1.62,15.65L1003,607.32l-2.52.87a12,12,0,0,1-3.34.5A9.49,9.49,0,0,1,988,597.64c-.06-.08.33-1.67.28-1.75-.18-.31-5.45-3.75-5.47-4.1l-21.26-12.74-7.81-3.74c-.07,0-1.21-.63-1.28-.63h0l-.39-.19c-.76,0-14.2.9-14.49.18-5.47.35-8.54-6.5-4.59-10.43C933,563.72,954.89,542.92,955.28,542.55Z" opacity="0.88" />
                    <path d="M955.9,542.24c1.64-1.54,6.16-4.6,8.3-4.64a8.88,8.88,0,0,1,4.14-.12,9.26,9.26,0,0,1,2.94,1.16L1039,579.7A8.51,8.51,0,0,1,1037.4,595L1003,607.12l-2.52.87a12,12,0,0,1-3.34.5,9.4,9.4,0,0,1-9-11.12c-.05-.07.35-1.68.31-1.75-.14-.25-5.52-3.71-5.53-4L961.75,579,954,575.1c-.06,0-1.21-.64-1.27-.64h0s-.37-.2-.39-.2c-.63,0-14.25,1-14.48.41a6.16,6.16,0,0,1-4.67-10.52C933.21,563.72,955.57,542.55,955.9,542.24Z" opacity="0.9" />
                    <path d="M956.52,541.93c1.67-1.57,5.76-4.2,7.94-4.24a8.88,8.88,0,0,1,3.94,0,9.22,9.22,0,0,1,2.78,1.12l67.7,41.06a8.3,8.3,0,0,1-1.55,14.94l-34.39,12.11-2.51.87a11.65,11.65,0,0,1-3.33.5,9.32,9.32,0,0,1-8.87-11.19c0-.05.39-1.69.36-1.74-.12-.21-5.59-3.67-5.6-3.91l-21-12.59-7.65-4s-1.21-.66-1.26-.66h0s-.36-.2-.38-.2c-.51,0-14.29,1.13-14.48.65a6.21,6.21,0,0,1-4.75-10.62C933.45,563.72,956.25,542.18,956.52,541.93Z" opacity="0.92" />
                    <path d="M957.13,541.62c1.72-1.6,5.36-3.8,7.59-3.84a9.1,9.1,0,0,1,3.74.11,9.25,9.25,0,0,1,2.61,1.08L1038.78,580a8.11,8.11,0,0,1-1.51,14.58l-34.34,12.1-2.51.87a12,12,0,0,1-3.33.51,9.25,9.25,0,0,1-8.73-11.28s.42-1.69.39-1.73-5.66-3.63-5.66-3.81l-20.91-12.52-7.58-4.07s-1.2-.68-1.24-.68h0l-.38-.21c-.38,0-14.34,1.25-14.48.89A6.25,6.25,0,0,1,933.68,564C933.68,563.72,956.94,541.81,957.13,541.62Z" opacity="0.94" />
                    <path d="M957.75,541.32c1.75-1.64,5-3.41,7.24-3.45a9.15,9.15,0,0,1,3.52.23,9.28,9.28,0,0,1,2.46,1l67.71,41.06a7.92,7.92,0,0,1-1.48,14.24l-34.29,12.07-2.5.88a12,12,0,0,1-3.33.51,9.16,9.16,0,0,1-8.59-11.35s.44-1.7.43-1.73-5.73-3.59-5.74-3.71L962.4,578.67l-7.5-4.19s-1.21-.69-1.24-.69h0l-.37-.21c-.25,0-14.38,1.35-14.48,1.11a6.28,6.28,0,0,1-4.89-10.8C933.92,563.71,957.62,541.44,957.75,541.32Z" opacity="0.96" />
                    <path d="M958.37,541a11.42,11.42,0,0,1,6.88-3,9.42,9.42,0,0,1,5.62,1.35l67.71,41.06a7.72,7.72,0,0,1-1.44,13.88l-34.25,12.06-2.49.88a11.63,11.63,0,0,1-3.32.52,9.1,9.1,0,0,1-8.46-11.43s.47-1.71.46-1.73-5.8-3.55-5.8-3.61l-20.66-12.37-7.43-4.3-1.22-.71h0l-.37-.21c-.13,0-14.43,1.47-14.47,1.35a6.33,6.33,0,0,1-5-10.9C934.15,563.71,958.3,541.07,958.37,541Z" opacity="0.98" />
                    <path d="M1037.07,594.07,1000.39,607a9,9,0,0,1-11.64-11l.49-1.72-35.33-21.17-14.47,1.59a6.38,6.38,0,0,1-5.05-11l24.59-23a9.82,9.82,0,0,1,11.79-1.22l67.71,41.06A7.52,7.52,0,0,1,1037.07,594.07Z" />
                  </g>
                  <g>
                    <path d="M984.81,542.73h-1.75a9.8,9.8,0,0,0-3.81-5.11c-7.22-4.17-18.89-4.19-26.06,0s-30.89,31.15-21.46,35.68c10.11,4.85,35.95-5.67,45.53-10.58,4.58-2,7.55-5.12,7.55-8.68,0,0,0-.1,0-.15h0Z" fill="url(#linear-gradient-278)" />
                    <g>
                      <path d="M977.26,559.15c-9.58,4.91-35.42,15.43-45.53,10.58a3.64,3.64,0,0,1-2-2.57c-.5,2.93,0,5.14,2,6.09,10.11,4.85,35.95-5.67,45.53-10.58,4.58-2,7.55-5.12,7.55-8.68,0,0,0-.1,0-.15h0v-3.38C984.81,554,981.84,557.19,977.26,559.15Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                      <path d="M984.81,550.46v-.14h0S984.81,550.41,984.81,550.46Z" fill="url(#linear-gradient-279)" />
                    </g>
                    <polygon points="1014.51 585.89 957.95 553.23 983.48 538.64 1040.04 571.3 1014.51 585.89" fill="url(#linear-gradient-280)" />
                    <polygon points="1014.51 585.89 957.95 553.23 957.99 559.82 1014.55 592.47 1014.51 585.89" fill="url(#linear-gradient-281)" />
                    <path d="M984.81,541.49h-37v2h0s0,.09,0,.14c0,6,8.29,10.78,18.51,10.78s18.51-4.82,18.51-10.78c0-.05,0-.09,0-.14h0Z" fill="url(#linear-gradient-282)" />
                    <ellipse cx="966.3" cy="542.07" rx="18.51" ry="10.78" fill="url(#Radial_Gradient_1-49)" style={{mixBlendMode: 'color-dodge'}} />
                    <ellipse cx="966.3" cy="541.56" rx="18.51" ry="10.78" fill="url(#linear-gradient-283)" />
                  </g>
                  <g>
                    <path d="M976.63,558.46H955.47v12.92h0v.09c0,3.4,4.74,6.16,10.58,6.16s10.58-2.76,10.58-6.16v-.09h0Z" fill="url(#linear-gradient-284)" />
                    <g>
                      <path d="M955.47,567.74v0Z" fill="url(#linear-gradient-285)" />
                      <path d="M976.63,567.82v-.08h0Z" fill="url(#linear-gradient-286)" />
                      <path d="M966.05,574c-5.84,0-10.58-2.76-10.58-6.16v3.56h0v.09c0,3.4,4.74,6.16,10.58,6.16s10.58-2.76,10.58-6.16v-.09h0v-3.56C976.63,571.22,971.89,574,966.05,574Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                    </g>
                    <ellipse cx="966.05" cy="558.8" rx="10.58" ry="6.16" fill="url(#Radial_Gradient_1-50)" style={{mixBlendMode: 'color-dodge'}} />
                    <path d="M976.63,558.51c0,3.4-4.74,6.16-10.58,6.16s-10.58-2.76-10.58-6.16,4.74-6.17,10.58-6.17S976.63,555.1,976.63,558.51Z" fill="url(#linear-gradient-287)" />
                    <ellipse cx="966.05" cy="558.54" rx="8.38" ry="4.88" fill="url(#linear-gradient-288)" />
                    <path d="M972,562v-6.92a10.73,10.73,0,0,0-3.62-1.24h-4.58a10.73,10.73,0,0,0-3.62,1.24V562A13,13,0,0,0,972,562Z" fill="url(#New_Gradient_Swatch_copy_23-3)" />
                    <ellipse cx="966.05" cy="558.54" rx="8.38" ry="4.88" fill="url(#Linear_Gradient_1)" style={{mixBlendMode: 'multiply'}} />
                    <path d="M975.25,553.47h-18.4v2.68h0v.07c0,3,4.12,5.36,9.2,5.36s9.2-2.4,9.2-5.36v-.07h0Z" fill="url(#New_Gradient_Swatch_copy_23-4)" />
                    <path d="M975.25,553.76c0,3-4.12,5.35-9.2,5.35s-9.2-2.39-9.2-5.35,4.12-5.36,9.2-5.36S975.25,550.8,975.25,553.76Z" fill="url(#Radial_Gradient_1-51)" style={{mixBlendMode: 'color-dodge'}} />
                    <path d="M975.25,553.5c0,3-4.12,5.36-9.2,5.36s-9.2-2.4-9.2-5.36,4.12-5.35,9.2-5.35S975.25,550.55,975.25,553.5Z" fill="url(#New_Gradient_Swatch_copy_35-37)" />
                    <polygon points="1002.63 584.8 971.07 566.69 984.06 559.19 1015.63 577.3 1002.63 584.8" fill="url(#linear-gradient-289)" />
                    <polygon points="1002.63 584.8 971.07 566.69 971.11 576.81 1002.67 594.92 1002.63 584.8" fill="url(#linear-gradient-290)" />
                    <polygon points="1002.63 591.21 971.07 573.1 971.11 576.81 1002.67 594.92 1002.63 591.21" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  </g>
                  <polygon points="1004.83 566.71 981.32 553.14 991.23 547.42 1014.73 561 1004.83 566.71" fill="url(#linear-gradient-291)" />
                  <polygon points="991.23 548.17 1014.08 561.37 1014.73 561 991.23 547.42 981.32 553.14 981.97 553.52 991.23 548.17" opacity="0.5" fill="url(#linear-gradient-292)" />
                  <polygon points="958.71 538.89 955.7 537.15 959.86 534.75 962.87 536.49 963.54 539.27 958.71 538.89" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="972.95 542.31 975.95 544.05 971.79 546.45 968.79 544.71 968.11 541.93 972.95 542.31" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="962.91 544.7 959.92 546.43 955.74 544.01 958.73 542.28 963.53 541.91 962.91 544.7" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="968.74 536.5 971.73 534.77 975.92 537.19 972.93 538.92 968.12 539.29 968.74 536.5" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <polygon points="959.15 539.52 956.14 537.78 960.3 535.38 963.31 537.12 963.98 539.9 959.15 539.52" fill="url(#New_Gradient_Swatch_copy_35-38)" />
                  <polygon points="973.38 542.94 976.39 544.67 972.24 547.08 969.23 545.34 968.55 542.56 973.38 542.94" fill="url(#New_Gradient_Swatch_copy_35-39)" />
                  <polygon points="963.35 545.33 960.36 547.05 956.18 544.64 959.17 542.91 963.97 542.54 963.35 545.33" fill="url(#New_Gradient_Swatch_copy_35-40)" />
                  <polygon points="969.18 537.13 972.17 535.4 976.36 537.82 973.37 539.55 968.56 539.92 969.18 537.13" fill="url(#New_Gradient_Swatch_copy_35-41)" />
                  <g>
                    <path d="M1006.15,574.59H985v12.92h0s0,.06,0,.09c0,3.4,4.74,6.16,10.58,6.16s10.58-2.76,10.58-6.16v-.09h0Z" fill="url(#linear-gradient-293)" />
                    <g>
                      <path d="M985,583.87V584s0-.05,0-.08Z" fill="url(#linear-gradient-294)" />
                      <path d="M1006.15,584v-.08h0Z" fill="url(#linear-gradient-295)" />
                      <path d="M995.57,590.11c-5.84,0-10.58-2.76-10.58-6.16v3.56h0s0,.06,0,.09c0,3.4,4.74,6.16,10.58,6.16s10.58-2.76,10.58-6.16v-.09h0V584C1006.15,587.35,1001.42,590.11,995.57,590.11Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                    </g>
                    <path d="M1006.15,574.93c0,3.4-4.73,6.16-10.58,6.16S985,578.33,985,574.93s4.74-6.16,10.58-6.16S1006.15,571.52,1006.15,574.93Z" fill="url(#Radial_Gradient_1-52)" style={{mixBlendMode: 'color-dodge'}} />
                    <ellipse cx="995.57" cy="574.64" rx="10.58" ry="6.16" fill="url(#linear-gradient-296)" />
                    <ellipse cx="995.57" cy="574.67" rx="8.38" ry="4.88" fill="url(#linear-gradient-297)" />
                    <path d="M1001.48,578.13v-6.92a10.65,10.65,0,0,0-3.62-1.24h-4.57a10.79,10.79,0,0,0-3.63,1.24v6.92a13,13,0,0,0,11.82,0Z" fill="url(#New_Gradient_Swatch_copy_23-5)" />
                    <ellipse cx="995.57" cy="574.67" rx="8.38" ry="4.88" fill="url(#Linear_Gradient_1-2)" style={{mixBlendMode: 'multiply'}} />
                    <path d="M1004.77,569.6h-18.4v2.68h0s0,.05,0,.07c0,3,4.12,5.36,9.2,5.36s9.2-2.4,9.2-5.36v-.07h0Z" fill="url(#New_Gradient_Swatch_copy_23-6)" />
                    <ellipse cx="995.57" cy="569.89" rx="9.2" ry="5.36" fill="url(#Radial_Gradient_1-53)" style={{mixBlendMode: 'color-dodge'}} />
                    <path d="M1004.77,569.63c0,3-4.12,5.36-9.2,5.36s-9.2-2.4-9.2-5.36,4.12-5.35,9.2-5.35S1004.77,566.68,1004.77,569.63Z" fill="url(#New_Gradient_Swatch_copy_35-42)" />
                  </g>
                  <g>
                    <path d="M1042.66,576.81h-1.75a9.75,9.75,0,0,0-3.81-5.11c-7.22-4.17-18.88-4.19-26.06-.05s-30.89,31.16-21.46,35.69c10.11,4.85,35.95-5.67,45.54-10.59,4.57-2,7.54-5.12,7.54-8.68v-.15h0Z" fill="url(#linear-gradient-298)" />
                    <g>
                      <path d="M1035.12,593.23c-9.59,4.91-35.43,15.43-45.54,10.58a3.65,3.65,0,0,1-2-2.57c-.5,2.93,0,5.14,2,6.1,10.11,4.85,35.95-5.67,45.54-10.59,4.57-2,7.54-5.12,7.54-8.68v-.15h0v-3.37C1042.66,588.11,1039.69,591.27,1035.12,593.23Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                      <path d="M1042.66,584.55v-.15h0Z" fill="url(#linear-gradient-299)" />
                    </g>
                    <path d="M1042.66,575.57h-37v1.95h0v.15c0,6,8.28,10.78,18.5,10.78s18.51-4.83,18.51-10.78v-.15h0Z" fill="url(#linear-gradient-300)" />
                    <ellipse cx="1024.15" cy="576.15" rx="18.51" ry="10.78" fill="url(#Radial_Gradient_1-54)" style={{mixBlendMode: 'color-dodge'}} />
                    <ellipse cx="1024.15" cy="575.65" rx="18.51" ry="10.78" fill="url(#linear-gradient-301)" />
                  </g>
                  <path d="M1031.71,573.09a5.64,5.64,0,0,1-5.08,0c-1.4-.81-1.41-2.12,0-2.93a5.59,5.59,0,0,1,5.07,0C1033.1,571,1033.1,572.28,1031.71,573.09Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1021,579.29a5.59,5.59,0,0,1-5.07,0c-1.41-.81-1.41-2.12,0-2.93a5.64,5.64,0,0,1,5.08,0C1022.35,577.17,1022.36,578.49,1021,579.29Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1020.91,570.14c1.41.81,1.41,2.12,0,2.93a5.62,5.62,0,0,1-5.07,0c-1.41-.81-1.42-2.12,0-2.93A5.59,5.59,0,0,1,1020.91,570.14Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1031.73,576.38c1.4.81,1.41,2.12,0,2.93a5.59,5.59,0,0,1-5.07,0c-1.41-.81-1.41-2.12,0-2.93A5.64,5.64,0,0,1,1031.73,576.38Z" fill="#8969c3" style={{mixBlendMode: 'multiply'}} />
                  <path d="M1032.09,573.75a5.64,5.64,0,0,1-5.08,0c-1.4-.81-1.41-2.12,0-2.93a5.59,5.59,0,0,1,5.07,0C1033.47,571.63,1033.48,572.94,1032.09,573.75Z" fill="url(#New_Gradient_Swatch_copy_35-43)" />
                  <path d="M1021.34,580a5.59,5.59,0,0,1-5.07,0c-1.41-.81-1.42-2.12,0-2.93a5.62,5.62,0,0,1,5.07,0C1022.73,577.83,1022.74,579.15,1021.34,580Z" fill="url(#New_Gradient_Swatch_copy_35-44)" />
                  <path d="M1021.29,570.8c1.4.81,1.41,2.12,0,2.93a5.64,5.64,0,0,1-5.08,0c-1.4-.81-1.41-2.12,0-2.93A5.59,5.59,0,0,1,1021.29,570.8Z" fill="url(#New_Gradient_Swatch_copy_35-45)" />
                  <path d="M1032.1,577c1.41.81,1.42,2.12,0,2.93a5.59,5.59,0,0,1-5.07,0c-1.41-.81-1.42-2.12,0-2.93A5.62,5.62,0,0,1,1032.1,577Z" fill="url(#New_Gradient_Swatch_copy_35-46)" />
                  <path d="M1022.4,564.58c3.07,2.41-2.24,14.31-11.87,26.58s-19.92,20.27-23,17.86,2.24-14.31,11.87-26.59S1019.33,562.17,1022.4,564.58Z" opacity="0.5" fill="url(#radial-gradient-182)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M964.07,529.24c3.07,2.41-2.24,14.32-11.87,26.59s-19.92,20.26-23,17.86,2.24-14.32,11.86-26.59S961,526.83,964.07,529.24Z" fill="url(#radial-gradient-183)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M1020.83,577.91c0,1-1.12,1.71-2.5,1.71s-2.5-.76-2.5-1.71,1.12-1.71,2.5-1.71S1020.83,577,1020.83,577.91Z" fill="url(#radial-gradient-184)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="1018.33" cy="571.5" rx="2.5" ry="1.71" fill="url(#radial-gradient-185)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="990.58" cy="575.37" rx="2.5" ry="3.42" fill="url(#radial-gradient-186)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="960.66" cy="558.62" rx="2.5" ry="3.42" fill="url(#radial-gradient-187)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="959.66" cy="537.25" rx="2.5" ry="1.71" fill="url(#radial-gradient-188)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M961.91,544.16c0,1-1.12,1.71-2.5,1.71s-2.5-.76-2.5-1.71,1.12-1.71,2.5-1.71S961.91,543.22,961.91,544.16Z" fill="url(#radial-gradient-189)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M1031.49,577.91c0,1-1.11,1.71-2.5,1.71s-2.5-.76-2.5-1.71,1.12-1.71,2.5-1.71S1031.49,577,1031.49,577.91Z" opacity="0.5" fill="url(#radial-gradient-190)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="1028.99" cy="571.5" rx="2.5" ry="1.71" opacity="0.5" fill="url(#radial-gradient-191)" style={{mixBlendMode: 'color-dodge'}} />
                  <ellipse cx="961.91" cy="572.45" rx="21.38" ry="52.77" transform="translate(18.04 1174.19) rotate(-63.28)" opacity="0.5" fill="url(#radial-gradient-192)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
                <g id="colb">
                  <g>
                    <g style={{isolation: 'isolate'}}>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-14)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M578.05,158.42l15.3-4.19a18,18,0,0,0-6.35,3.22l-15.3,4.19a17.92,17.92,0,0,1,6.35-3.22" fill="#f2af5c" />
                            <path d="M571.7,161.64l15.3-4.19a21.64,21.64,0,0,0-3.1,3l-15.3,4.18a21.58,21.58,0,0,1,3.1-3" fill="#f3b05f" />
                            <path d="M568.6,164.6l15.3-4.18a26.54,26.54,0,0,0-2.23,3l-15.3,4.19a25.5,25.5,0,0,1,2.23-3" fill="#f3b061" />
                            <path d="M566.37,167.61l15.3-4.19a31.11,31.11,0,0,0-1.75,3.12l-15.3,4.19a30,30,0,0,1,1.75-3.12" fill="#f4b063" />
                            <path d="M564.62,170.73l15.3-4.19c-.51,1.05-1,2.16-1.41,3.31L563.2,174c.43-1.16.91-2.26,1.42-3.31" fill="#f4b165" />
                            <path d="M563.2,174l15.31-4.19c-.25.66-.48,1.34-.69,2l-15.31,4.19c.22-.7.45-1.37.69-2" fill="#f5b168" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-15)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M562.51,176.07l15.31-4.19-.23.08-15.3,4.18.22-.07" fill="#f2af5c" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-16)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M563.73,175.69l15.3-4.18c-.4.11-.81.23-1.21.37l-15.31,4.19c.41-.14.81-.26,1.22-.38" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-17)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M562.29,176.14l15.3-4.18c-.12.4-.23.8-.34,1.2l-15.31,4.19c.11-.41.23-.81.35-1.21" fill="#f5b168" />
                            <path d="M561.94,177.35l15.31-4.19c-.36,1.31-.66,2.64-.91,4L561,181.34c.25-1.35.55-2.69.9-4" fill="#f5b26a" />
                            <path d="M561,181.34l15.3-4.18c-.27,1.47-.47,3-.62,4.51l-15.31,4.19c.15-1.53.36-3,.63-4.52" fill="#f6b26c" />
                            <path d="M560.41,185.86l15.31-4.19c-.18,1.86-.27,3.76-.28,5.68l-15.31,4.18c0-1.92.1-3.81.28-5.67" fill="#f6b36e" />
                            <path d="M560.13,191.53l15.31-4.18a69.12,69.12,0,0,0,.5,8.45L560.64,200a71.24,71.24,0,0,1-.51-8.46" fill="#f7b371" />
                            <path d="M560.64,200l15.3-4.19a77.11,77.11,0,0,0,4.47,18.12l-15.3,4.19A76.63,76.63,0,0,1,560.64,200" fill="#f8b373" />
                            <path d="M565.11,218.11l15.3-4.19q1.13,2.94,2.47,5.75l-15.31,4.19c-.89-1.87-1.72-3.79-2.46-5.75" fill="#f7b371" />
                            <path d="M567.57,223.86l15.31-4.19q1.26,2.64,2.72,5.11L570.3,229c-1-1.64-1.88-3.35-2.73-5.1" fill="#f6b36e" />
                            <path d="M570.3,229l15.3-4.18q1.24,2.1,2.61,4.05L572.91,233c-.91-1.3-1.78-2.66-2.61-4.06" fill="#f6b26c" />
                            <path d="M572.91,233l15.3-4.19c.83,1.18,1.68,2.31,2.58,3.4l-15.31,4.19c-.89-1.09-1.75-2.22-2.57-3.4" fill="#f5b26a" />
                            <path d="M575.48,236.42l15.31-4.19c.85,1,1.74,2.05,2.66,3l-15.3,4.19q-1.38-1.44-2.67-3" fill="#f5b168" />
                            <path d="M578.15,239.42l15.3-4.19c.37.38.74.75,1.12,1.12.56.55,1.13,1.07,1.7,1.57L581,242.1c-.57-.49-1.13-1-1.7-1.56-.37-.37-.75-.74-1.11-1.12" fill="#f4b165" />
                            <path d="M581,242.1l15.31-4.18c1,.87,2,1.66,3,2.38L584,244.49a37.56,37.56,0,0,1-3-2.39" fill="#f4b063" />
                            <path d="M584,244.49l15.3-4.19c.71.5,1.42,1,2.13,1.39.43.26.86.5,1.29.73l-15.31,4.19c-.43-.23-.86-.47-1.28-.73-.71-.43-1.42-.89-2.13-1.39" fill="#f3b061" />
                            <path d="M587.39,246.61l15.31-4.19a26,26,0,0,0,4.21,1.83l-15.31,4.19a27.26,27.26,0,0,1-4.21-1.83" fill="#f3b05f" />
                            <path d="M591.6,248.44l15.31-4.19a19.44,19.44,0,0,0,11.28.47l-15.3,4.18a19.38,19.38,0,0,1-11.29-.46" fill="#f2af5c" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-18)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.75,187l15.3-4.19a5.69,5.69,0,0,0-1.93,1L574.82,188a5.43,5.43,0,0,1,1.93-1" fill="#a17592" />
                            <path d="M574.82,188l15.3-4.19a6.34,6.34,0,0,0-1,.92l-15.31,4.18a6.83,6.83,0,0,1,1-.91" fill="#9f7496" />
                            <path d="M573.86,188.88l15.31-4.18a6.34,6.34,0,0,0-.68.91l-15.31,4.18a9,9,0,0,1,.68-.91" fill="#9c729a" />
                            <path d="M573.18,189.79l15.31-4.18a7.81,7.81,0,0,0-.53.95l-15.31,4.18a9.67,9.67,0,0,1,.53-1" fill="#9a719e" />
                            <path d="M572.65,190.74,588,186.56a8.94,8.94,0,0,0-.43,1l-15.3,4.19a10,10,0,0,1,.42-1" fill="#986fa2" />
                            <path d="M572.23,191.74l15.3-4.19c-.13.35-.24.7-.34,1.08l-15.31,4.18a11.17,11.17,0,0,1,.35-1.07" fill="#966ea6" />
                            <path d="M571.88,192.81l15.31-4.18a10.7,10.7,0,0,0-.27,1.18L571.61,194c.08-.41.17-.81.27-1.19" fill="#946caa" />
                            <path d="M571.61,194l15.31-4.19c-.08.44-.15.9-.19,1.37l-15.31,4.19c.05-.47.11-.93.19-1.37" fill="#926bae" />
                            <path d="M571.42,195.37l15.31-4.19c-.05.56-.08,1.14-.09,1.73l-15.3,4.19c0-.6,0-1.17.08-1.73" fill="#8f69b2" />
                            <path d="M571.34,197.1l15.3-4.19a2.62,2.62,0,0,0,0,.28,20.1,20.1,0,0,0,.13,2.19l-15.3,4.18a19.78,19.78,0,0,1-.14-2.18v-.28" fill="#8d68b6" />
                            <path d="M571.48,199.56l15.3-4.18a23.12,23.12,0,0,0,1.42,5.7l-15.31,4.19a22.63,22.63,0,0,1-1.41-5.71" fill="#8b66ba" />
                            <path d="M572.89,205.27l15.31-4.19c.21.55.44,1.08.68,1.59l-15.3,4.18c-.25-.51-.48-1-.69-1.58" fill="#8d68b6" />
                            <path d="M573.58,206.85l15.3-4.18c.26.54.54,1.07.84,1.57l-15.3,4.19c-.3-.51-.58-1-.84-1.58" fill="#8f69b2" />
                            <path d="M574.42,208.43l15.3-4.19c.25.43.52.84.79,1.23l-15.3,4.19c-.28-.39-.54-.8-.79-1.23" fill="#926bae" />
                            <path d="M575.21,209.66l15.3-4.19c.26.36.52.71.79,1L576,210.7c-.27-.33-.53-.68-.78-1" fill="#946caa" />
                            <path d="M576,210.7l15.31-4.19c.26.31.52.61.8.9l-15.31,4.18c-.27-.28-.54-.58-.8-.89" fill="#966ea6" />
                            <path d="M576.79,211.59l15.31-4.18c.27.28.54.54.83.79l-15.31,4.19c-.28-.25-.56-.51-.83-.8" fill="#986fa2" />
                            <path d="M577.62,212.39l15.31-4.19a8.49,8.49,0,0,0,.9.71l-15.31,4.19c-.3-.22-.6-.46-.9-.71" fill="#9a719e" />
                            <path d="M578.52,213.1l15.31-4.19c.21.15.42.29.64.42l.38.22-15.3,4.19-.39-.22c-.21-.13-.43-.27-.64-.42" fill="#9c729a" />
                            <path d="M579.55,213.74l15.3-4.19a9.59,9.59,0,0,0,1.09.49l.21.07-15.3,4.19-.22-.07a9.45,9.45,0,0,1-1.08-.49" fill="#9f7496" />
                            <path d="M580.85,214.3l15.3-4.19a5.77,5.77,0,0,0,3.4.15l-15.3,4.19a5.85,5.85,0,0,1-3.4-.15" fill="#a17592" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-19)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.62,196.9l15.31-4.19a1,1,0,0,0-.33.17l-15.3,4.19a.83.83,0,0,1,.32-.17" fill="#7bd199" />
                            <path d="M576.3,197.07l15.3-4.19a.75.75,0,0,0-.16.15l-15.31,4.19a.8.8,0,0,1,.17-.15" fill="#78d39d" />
                            <path d="M576.13,197.22,591.44,193l-.12.16L576,197.37l.11-.15" fill="#74d4a1" />
                            <path d="M576,197.37l15.3-4.18-.09.16-15.3,4.18.09-.16" fill="#71d6a5" />
                            <path d="M575.93,197.53l15.3-4.18c0,.05-.05.11-.07.17l-15.3,4.18a1.22,1.22,0,0,1,.07-.17" fill="#6ed7aa" />
                            <path d="M575.86,197.7l15.3-4.18a.78.78,0,0,0,0,.18l-15.31,4.18.06-.18" fill="#6ad9ae" />
                            <path d="M575.8,197.88l15.31-4.18a1.17,1.17,0,0,0-.05.2l-15.3,4.18a1.42,1.42,0,0,1,0-.2" fill="#67dbb2" />
                            <path d="M575.76,198.08l15.3-4.18,0,.22-15.31,4.19a1.85,1.85,0,0,1,0-.23" fill="#64dcb6" />
                            <path d="M575.72,198.31,591,194.12a2.64,2.64,0,0,0,0,.28l-15.3,4.19a2.53,2.53,0,0,1,0-.28" fill="#60debb" />
                            <path d="M575.71,198.59,591,194.4v0c0,.13,0,.25,0,.37L575.73,199c0-.12,0-.25,0-.37v0" fill="#5ddfbf" />
                            <path d="M575.73,199,591,194.82a3.86,3.86,0,0,0,.24,1L576,200a3.86,3.86,0,0,1-.24-1" fill="#59e1c3" />
                            <path d="M576,200l15.31-4.19c0,.09.07.18.11.27l-15.3,4.19L576,200" fill="#5ddfbf" />
                            <path d="M576.09,200.24l15.3-4.19.14.27-15.3,4.18a2.15,2.15,0,0,1-.14-.26" fill="#60debb" />
                            <path d="M576.23,200.5l15.3-4.18c.05.07.09.14.14.2l-15.31,4.19-.13-.21" fill="#64dcb6" />
                            <path d="M576.36,200.71l15.31-4.19a1.09,1.09,0,0,0,.13.17l-15.31,4.19-.13-.17" fill="#67dbb2" />
                            <path d="M576.49,200.88l15.31-4.19a.64.64,0,0,0,.13.15L576.63,201l-.14-.15" fill="#6ad9ae" />
                            <path d="M576.63,201l15.3-4.19a1.85,1.85,0,0,0,.14.14l-15.31,4.18a1.59,1.59,0,0,1-.13-.13" fill="#6ed7aa" />
                            <path d="M576.76,201.16,592.07,197l.15.12-15.31,4.18a.79.79,0,0,1-.15-.12" fill="#71d6a5" />
                            <path d="M576.91,201.28l15.31-4.18.11.07.06,0-15.3,4.19-.07,0-.11-.07" fill="#74d4a1" />
                            <path d="M577.09,201.39l15.3-4.19a1.63,1.63,0,0,0,.19.09l-15.31,4.18-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-20)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.62,196.9l15.31-4.19a1,1,0,0,1,.56,0l-15.3,4.18a1,1,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M577.19,196.92l15.3-4.18h0l-15.31,4.19,0,0" fill="#7a5559" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-21)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M579,204.6l15.3-4.19c0,.13,0,.25,0,.37L579,205c0-.12,0-.25,0-.37" fill="#5ddfbf" />
                            <path d="M579,205l15.3-4.19a3.86,3.86,0,0,0,.24,1l-15.3,4.19a4,4,0,0,1-.24-1" fill="#59e1c3" />
                            <path d="M579.26,205.93l15.3-4.19a2.06,2.06,0,0,0,.12.26l-15.31,4.19c0-.09-.08-.17-.11-.26" fill="#5ddfbf" />
                            <path d="M579.37,206.19,594.68,202c0,.09.09.18.14.27l-15.31,4.18a2.15,2.15,0,0,1-.14-.26" fill="#60debb" />
                            <path d="M579.51,206.45l15.31-4.18a1.37,1.37,0,0,0,.13.2l-15.31,4.19-.13-.21" fill="#64dcb6" />
                            <path d="M579.64,206.66,595,202.47l.13.18-15.3,4.18c0-.05-.09-.11-.14-.17" fill="#67dbb2" />
                            <path d="M579.78,206.83l15.3-4.18.13.15L579.91,207a.64.64,0,0,1-.13-.15" fill="#6ad9ae" />
                            <path d="M579.91,207l15.3-4.18.15.13-15.31,4.19-.14-.14" fill="#6ed7aa" />
                            <path d="M580.05,207.12l15.31-4.19.15.12-15.31,4.19-.15-.12" fill="#71d6a5" />
                            <path d="M580.2,207.24l15.31-4.19a.41.41,0,0,0,.11.07l.06,0-15.3,4.19-.07,0-.11-.07" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <polygon points="578.97 202.09 594.28 197.91 594.3 200.41 579 204.6 578.97 202.09" fill="#50e5cf" />
                      <polygon points="577.27 201.47 592.58 197.29 594.28 197.91 578.97 202.09 577.27 201.47" fill="#75d4a1" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-22)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M584.77,223.3l15.3-4.19.06.11,0,.06-15.3,4.19,0-.06a.54.54,0,0,1-.05-.11" fill="#8f69b2" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-23)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M580.2,207.24l15.31-4.19a.41.41,0,0,0,.11.07l.06,0-15.3,4.19-.07,0-.11-.07" fill="#74d4a1" />
                            <path d="M580.38,207.35l15.3-4.19.18.08,0,0-15.3,4.18h0l-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-24)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M580.38,207.35l15.3-4.19.18.08,0,0-15.3,4.18h0l-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-25)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M584.77,223.3l15.3-4.19.06.11,0,.06-15.3,4.19,0-.06a.54.54,0,0,1-.05-.11" fill="#8f69b2" />
                            <path d="M584.86,223.47l15.3-4.19.09.14-15.31,4.18-.08-.13" fill="#926bae" />
                            <path d="M584.94,223.6l15.31-4.18a1,1,0,0,1,.08.11L585,223.71l-.09-.11" fill="#946caa" />
                            <path d="M585,223.71l15.3-4.18.09.1-15.3,4.18-.09-.1" fill="#966ea6" />
                            <path d="M585.12,223.81l15.3-4.18.09.09-15.3,4.18a.38.38,0,0,1-.09-.09" fill="#986fa2" />
                            <path d="M585.21,223.9l15.3-4.18.11.08L585.31,224l-.1-.08" fill="#9a719e" />
                            <path d="M585.31,224l15.31-4.18.07,0,0,0-15.3,4.18,0,0-.07-.05" fill="#9c729a" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-26)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M585.31,224l15.31-4.18.07,0,0,0-15.3,4.18,0,0-.07-.05" fill="#9c729a" />
                            <path d="M585.43,224.05l15.3-4.18.11,0-15.3,4.18-.11,0" fill="#9f7496" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-27)">
                          <g style={{isolation: 'isolate'}}>
                            <polyline points="584.81 221.33 600.11 217.14 600.1 217.15 584.8 221.34 584.81 221.33" fill="#9f7496" />
                            <path d="M584.8,221.34l15.3-4.19a.86.86,0,0,0-.07.1l-15.31,4.19.08-.1" fill="#9c729a" />
                            <path d="M584.72,221.44,600,217.25l-.06.1-15.3,4.19a.31.31,0,0,1,.05-.1" fill="#9a719e" />
                            <path d="M584.67,221.54l15.3-4.19a.49.49,0,0,0,0,.11l-15.31,4.19a.37.37,0,0,1,0-.11" fill="#986fa2" />
                            <path d="M584.62,221.65l15.31-4.19a.56.56,0,0,0,0,.12l-15.31,4.19s0-.08,0-.12" fill="#966ea6" />
                            <path d="M584.58,221.77l15.31-4.19,0,.13-15.31,4.19,0-.13" fill="#946caa" />
                            <path d="M584.55,221.9l15.31-4.19a.77.77,0,0,0,0,.15l-15.31,4.19c0-.05,0-.1,0-.15" fill="#926bae" />
                            <path d="M584.53,222.05l15.31-4.19a1.15,1.15,0,0,0,0,.19l-15.31,4.19c0-.07,0-.13,0-.19" fill="#8f69b2" />
                            <path d="M584.52,222.24l15.31-4.19a2.44,2.44,0,0,0,0,.27l-15.3,4.19a2.65,2.65,0,0,1,0-.27" fill="#8d68b6" />
                            <path d="M584.54,222.51l15.3-4.19a3.29,3.29,0,0,0,.15.6l-15.31,4.19a2.61,2.61,0,0,1-.14-.6" fill="#8b66ba" />
                            <path d="M584.68,223.11,600,218.92a1.54,1.54,0,0,0,.08.19l-15.3,4.19-.09-.19" fill="#8d68b6" />
                            <path d="M584.77,223.3l15.3-4.19.06.11,0,.06-15.3,4.19,0-.06a.54.54,0,0,1-.05-.11" fill="#8f69b2" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-28)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M580.38,207.35l15.3-4.19.18.08,0,0-15.3,4.18h0l-.18-.08" fill="#78d39d" />
                            <path d="M580.6,207.44l15.3-4.18a1,1,0,0,0,.57,0l-15.31,4.19a1,1,0,0,1-.56,0" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <polygon points="578.92 197.56 594.23 193.37 594.28 197.91 578.97 202.09 578.92 197.56" fill="#543871" />
                      <polygon points="577.23 196.94 592.53 192.75 594.23 193.37 578.92 197.56 577.23 196.94" fill="#77535b" />
                      <path d="M577.22,196.94l1.7.62.05,4.53-1.7-.62a1.42,1.42,0,0,1-.25-.12,3.35,3.35,0,0,1-1.31-2.71C575.7,197.4,576.38,196.63,577.22,196.94Z" fill="#412a7d" />
                      <polygon points="578.9 195.05 594.2 190.87 594.23 193.37 578.92 197.56 578.9 195.05" fill="#50e5cf" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-29)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M582.07,205.72l15.31-4.18v0l-15.31,4.19v-.05" fill="#60416a" />
                            <path d="M582.07,205.77l15.31-4.19a2.64,2.64,0,0,1,0,.29l-15.3,4.19a2.81,2.81,0,0,0,0-.29" fill="#634467" />
                            <path d="M582.06,206.06l15.3-4.19,0,.23L582,206.29l0-.23" fill="#664665" />
                            <path d="M582,206.29l15.3-4.19c0,.07,0,.14,0,.2L582,206.49l0-.2" fill="#6a4963" />
                            <path d="M582,206.49l15.31-4.19-.06.18-15.31,4.19.06-.18" fill="#6d4b61" />
                            <path d="M581.92,206.67l15.31-4.19c0,.06-.05.12-.07.17l-15.31,4.19a1.22,1.22,0,0,0,.07-.17" fill="#704e5f" />
                            <path d="M581.85,206.84l15.31-4.19-.09.16L581.76,207l.09-.16" fill="#74505d" />
                            <path d="M581.76,207l15.31-4.19L597,203l-15.3,4.19.11-.15" fill="#77535b" />
                            <path d="M581.65,207.15,597,203a1.21,1.21,0,0,1-.16.16l-15.3,4.18a1.1,1.1,0,0,0,.16-.15" fill="#7a5559" />
                            <path d="M581.49,207.3l15.3-4.18a1.07,1.07,0,0,1-.32.16l-15.31,4.19a1,1,0,0,0,.33-.17" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <polygon points="582.05 203.22 597.35 199.03 597.38 201.54 582.07 205.72 582.05 203.22" fill="#543871" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-30)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M579.81,193.31l15.3-4.19a1,1,0,0,0-.32.17l-15.31,4.18a1,1,0,0,1,.33-.16" fill="#7bd199" />
                            <path d="M579.48,193.47l15.31-4.18a.75.75,0,0,0-.16.15l-15.31,4.19c0-.06.11-.11.16-.16" fill="#78d39d" />
                            <path d="M579.32,193.63l15.31-4.19-.12.15-15.3,4.19a.58.58,0,0,1,.11-.15" fill="#74d4a1" />
                            <path d="M579.21,193.78l15.3-4.19-.08.16-15.31,4.19.09-.16" fill="#71d6a5" />
                            <path d="M579.12,193.94l15.31-4.19c0,.05,0,.11-.08.17l-15.3,4.19a.87.87,0,0,1,.07-.17" fill="#6ed7aa" />
                            <path d="M579.05,194.11l15.3-4.19a1.21,1.21,0,0,0-.05.18L579,194.29a1.89,1.89,0,0,1,.06-.18" fill="#6ad9ae" />
                            <path d="M579,194.29l15.31-4.19a1.17,1.17,0,0,0,0,.2L579,194.49a1.18,1.18,0,0,1,0-.2" fill="#67dbb2" />
                            <path d="M579,194.49l15.3-4.19,0,.23-15.31,4.19a1.57,1.57,0,0,1,0-.23" fill="#64dcb6" />
                            <path d="M578.91,194.72l15.31-4.19a2.83,2.83,0,0,0,0,.3L578.9,195a2.71,2.71,0,0,1,0-.29" fill="#60debb" />
                            <path d="M578.9,195l15.3-4.18v0l-15.3,4.18v0" fill="#5ddfbf" />
                          </g>
                        </g>
                      </g>
                      <polygon points="582 198.68 597.3 194.5 597.35 199.03 582.05 203.22 582 198.68" fill="#543871" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-31)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M579.81,193.31l15.3-4.19a1,1,0,0,1,.57,0l-15.3,4.19a.94.94,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M580.38,193.34l15.3-4.19h0a1.63,1.63,0,0,1,.19.09l-15.31,4.18-.19-.08h0" fill="#7a5559" />
                            <path d="M580.6,193.43l15.31-4.18.06,0-15.3,4.19-.07,0" fill="#77535b" />
                          </g>
                        </g>
                      </g>
                      <polygon points="582.05 203.22 597.35 199.03 599.05 199.65 583.75 203.84 582.05 203.22" fill="#75d4a1" />
                      <polygon points="581.97 196.18 597.28 191.99 597.3 194.5 582 198.68 581.97 196.18" fill="#543871" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-32)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M583.75,203.84l15.3-4.19,0,0-15.31,4.18h0" fill="#78d39d" />
                            <path d="M583.78,203.85l15.31-4.18a1,1,0,0,0,.56,0l-15.3,4.19a1,1,0,0,1-.57,0" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <path d="M580.67,193.47a3.34,3.34,0,0,1,1.3,2.71l0,2.5,0,4.54,0,2.5c0,1.25-.66,2-1.51,1.71a1.15,1.15,0,0,1-.25-.12A3.35,3.35,0,0,1,579,204.6l0-2.51-.05-4.53,0-2.51c0-1.25.66-2,1.51-1.7A1.51,1.51,0,0,1,580.67,193.47Z" fill="#412a7d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-33)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M580.67,193.47l15.3-4.19.11.07-15.31,4.19-.1-.07" fill="#77535b" />
                            <path d="M580.77,193.54l15.31-4.19.15.12-15.31,4.19-.15-.12" fill="#74505d" />
                            <path d="M580.92,193.66l15.31-4.19.14.13-15.31,4.19a.86.86,0,0,0-.14-.13" fill="#704e5f" />
                            <path d="M581.06,193.79l15.31-4.19.13.15-15.3,4.19-.14-.15" fill="#6d4b61" />
                            <path d="M581.2,193.94l15.3-4.19.13.18-15.3,4.18-.13-.17" fill="#6a4963" />
                            <path d="M581.33,194.11l15.3-4.18a1.37,1.37,0,0,1,.13.2l-15.3,4.19-.13-.21" fill="#664665" />
                            <path d="M581.46,194.32l15.3-4.19c0,.09.1.17.14.26l-15.3,4.19c-.05-.09-.09-.18-.14-.26" fill="#634467" />
                            <path d="M581.6,194.58l15.3-4.19.12.27-15.31,4.19c0-.09-.07-.18-.11-.27" fill="#60416a" />
                            <path d="M581.71,194.85,597,190.66a3.86,3.86,0,0,1,.24,1L582,195.81a3.86,3.86,0,0,0-.24-1" fill="#5c3f6c" />
                            <path d="M582,195.81l15.31-4.19c0,.12,0,.25,0,.37L582,196.18c0-.13,0-.25,0-.37" fill="#60416a" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-34)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.75,187l15.3-4.19a5.86,5.86,0,0,1,3.4.15l-15.31,4.19a5.83,5.83,0,0,0-3.39-.15" fill="#7bd199" />
                            <path d="M580.14,187.14,595.45,183l.22.08-15.3,4.18-.23-.07" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <polygon points="582 198.68 597.3 194.5 599 195.12 583.7 199.3 582 198.68" fill="#77535b" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-35)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M585.26,202.14,600.57,198v0l-15.31,4.19v0" fill="#60416a" />
                            <path d="M585.26,202.18,600.57,198a2.64,2.64,0,0,1,0,.29l-15.3,4.19a2.81,2.81,0,0,0,0-.29" fill="#634467" />
                            <path d="M585.25,202.47l15.3-4.19,0,.23-15.3,4.18,0-.22" fill="#664665" />
                            <path d="M585.22,202.69l15.3-4.18c0,.07,0,.13,0,.2l-15.31,4.18c0-.06,0-.13.05-.2" fill="#6a4963" />
                            <path d="M585.17,202.89l15.31-4.18-.06.18-15.31,4.18a1.89,1.89,0,0,0,.06-.18" fill="#6d4b61" />
                            <path d="M585.11,203.07l15.31-4.18c0,.06,0,.11-.07.17L585,203.24a.87.87,0,0,0,.07-.17" fill="#704e5f" />
                            <path d="M585,203.24l15.31-4.18-.09.16L585,203.4l.09-.16" fill="#74505d" />
                            <path d="M585,203.4l15.31-4.18-.12.15-15.3,4.19.11-.16" fill="#77535b" />
                            <path d="M584.84,203.56l15.3-4.19a1.21,1.21,0,0,1-.16.16l-15.31,4.18a.8.8,0,0,0,.17-.15" fill="#7a5559" />
                            <path d="M584.67,203.71,600,199.53a1,1,0,0,1-.33.16l-15.3,4.19a.83.83,0,0,0,.32-.17" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <polygon points="589.22 216.35 604.53 212.16 600.11 217.14 584.81 221.33 589.22 216.35" fill="#9b719d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-36)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M583.7,199.3l15.3-4.18.19.08-15.3,4.19-.19-.09" fill="#7a5559" />
                            <path d="M583.89,199.39l15.3-4.19.06,0a.41.41,0,0,1,.11.07l-15.3,4.18a.41.41,0,0,1-.11-.07l-.06,0" fill="#77535b" />
                            <path d="M584.06,199.49l15.3-4.18a.79.79,0,0,1,.15.12l-15.3,4.18-.15-.12" fill="#74505d" />
                            <path d="M584.21,199.61l15.3-4.18.14.13-15.31,4.19-.13-.14" fill="#704e5f" />
                            <path d="M584.34,199.75l15.31-4.19.13.15-15.3,4.19a1,1,0,0,0-.14-.15" fill="#6d4b61" />
                            <path d="M584.48,199.9l15.3-4.19a1.09,1.09,0,0,1,.13.17l-15.3,4.19-.13-.17" fill="#6a4963" />
                            <path d="M584.61,200.07l15.3-4.19.14.21-15.31,4.18a1.37,1.37,0,0,0-.13-.2" fill="#664665" />
                            <path d="M584.74,200.27l15.31-4.18c.05.08.09.17.14.26l-15.31,4.19c0-.09-.09-.18-.14-.27" fill="#634467" />
                            <path d="M584.88,200.54l15.31-4.19c0,.09.08.18.11.27L585,200.81l-.12-.27" fill="#60416a" />
                            <path d="M585,200.81l15.3-4.19a3.86,3.86,0,0,1,.24,1l-15.3,4.19a3.86,3.86,0,0,0-.24-1" fill="#5c3f6c" />
                            <path d="M585.24,201.77l15.3-4.19c0,.12,0,.25,0,.37l-15.31,4.19c0-.13,0-.25,0-.37" fill="#60416a" />
                          </g>
                        </g>
                      </g>
                      <path d="M585.26,202.14c0,1.24-.67,2-1.51,1.7l-1.7-.62,0-4.54,1.7.62a1.42,1.42,0,0,1,.25.12A3.37,3.37,0,0,1,585.26,202.14Z" fill="#412a7d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-37)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M589.53,216.15,604.84,212a.51.51,0,0,0-.22.11l-15.3,4.18a1.06,1.06,0,0,1,.21-.11" fill="#a17592" />
                            <path d="M589.32,216.26l15.3-4.18-.09.08-15.31,4.19.1-.09" fill="#9f7496" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-38)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M589.53,216.15,604.84,212a.67.67,0,0,1,.37,0l-15.3,4.19a.71.71,0,0,0-.38,0" fill="#f2cc68" />
                            <path d="M589.91,216.17l15.3-4.19.14.06-15.3,4.19-.14-.06" fill="#f2cd6b" />
                            <path d="M590.05,216.23l15.3-4.19,0,0-15.31,4.19,0,0" fill="#f3ce6d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-39)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M588.66,210,604,205.8a7.84,7.84,0,0,1-.32.72l-15.3,4.19c.11-.24.22-.48.32-.73" fill="#6ed7aa" />
                            <path d="M588.34,210.71l15.3-4.19a8.49,8.49,0,0,1-.53.94l-15.3,4.19a10.48,10.48,0,0,0,.53-.94" fill="#71d6a5" />
                            <path d="M587.81,211.65l15.3-4.19a7.13,7.13,0,0,1-.67.91l-15.31,4.19a8,8,0,0,0,.68-.91" fill="#74d4a1" />
                            <path d="M587.13,212.56l15.31-4.19a7.2,7.2,0,0,1-.94.9l-15.31,4.19a6.62,6.62,0,0,0,.94-.9" fill="#78d39d" />
                            <path d="M586.19,213.46l15.31-4.19a5.46,5.46,0,0,1-2,1l-15.3,4.19a5.58,5.58,0,0,0,1.94-1" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-40)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M590.09,216.26l15.31-4.19.07,0-15.31,4.19-.07,0" fill="#f3ce6d" />
                            <path d="M590.16,216.3l15.31-4.19.09.08-15.3,4.19-.1-.08" fill="#f3d070" />
                            <path d="M590.26,216.38l15.3-4.19.09.09-15.3,4.19a.76.76,0,0,0-.09-.09" fill="#f4d173" />
                            <path d="M590.35,216.47l15.3-4.19.09.09-15.31,4.19-.08-.09" fill="#f4d275" />
                            <path d="M590.43,216.56l15.31-4.19.08.12-15.3,4.18-.09-.11" fill="#f5d478" />
                            <path d="M590.52,216.67l15.3-4.18.09.13-15.31,4.19a.64.64,0,0,0-.08-.14" fill="#f5d57b" />
                            <path d="M590.6,216.81l15.31-4.19,0,.06-15.3,4.19,0-.06" fill="#f6d77d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-41)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M589.24,209.36l15.31-4.19a.85.85,0,0,0-.25.13L589,209.49a.75.75,0,0,1,.25-.13" fill="#7bd199" />
                            <path d="M589,209.49l15.31-4.19-.12.12-15.31,4.18.12-.11" fill="#78d39d" />
                            <path d="M588.87,209.6l15.31-4.18-.09.11-15.3,4.19a.83.83,0,0,1,.08-.12" fill="#74d4a1" />
                            <path d="M588.79,209.72l15.3-4.19-.07.12-15.3,4.19a.75.75,0,0,1,.07-.12" fill="#71d6a5" />
                            <path d="M588.72,209.84l15.3-4.19a.69.69,0,0,0,0,.13L588.66,210l.06-.13" fill="#6ed7aa" />
                            <path d="M588.66,210,604,205.78v0L588.66,210h0" fill="#6ad9ae" />
                          </g>
                        </g>
                      </g>
                      <polygon points="585.54 224.1 600.84 219.92 609.81 223.19 594.5 227.38 585.54 224.1" fill="#9d7299" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-42)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M594.5,227.38l15.31-4.19h0l-15.3,4.19h0" fill="#9f7496" />
                            <path d="M594.53,227.39l15.3-4.19a.67.67,0,0,0,.37,0l-15.3,4.19a.67.67,0,0,1-.37,0" fill="#a17592" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-43)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M589.24,209.36l15.31-4.19a.74.74,0,0,1,.44,0l-15.3,4.19a.78.78,0,0,0-.45,0" fill="#a17592" />
                            <path d="M589.69,209.38l15.3-4.19.16.07-15.3,4.19-.16-.07" fill="#9f7496" />
                            <path d="M589.85,209.45l15.3-4.19.05,0,.09.05L590,209.53l-.08-.05,0,0" fill="#9c729a" />
                            <path d="M590,209.53l15.31-4.19.11.1-15.3,4.18-.12-.09" fill="#9a719e" />
                            <path d="M590.1,209.62l15.3-4.18.11.1-15.31,4.19-.1-.11" fill="#986fa2" />
                            <path d="M590.2,209.73l15.31-4.19,0,0a.39.39,0,0,1,.08.1l-15.3,4.18-.09-.1h0" fill="#966ea6" />
                            <path d="M590.31,209.84l15.3-4.18a.64.64,0,0,1,.1.13L590.41,210l-.1-.14" fill="#946caa" />
                            <path d="M590.41,210l15.3-4.19.11.16-15.31,4.18-.1-.15" fill="#926bae" />
                            <path d="M590.51,210.13,605.82,206l.1.2-15.3,4.18-.11-.2" fill="#8f69b2" />
                            <path d="M590.62,210.33l15.3-4.18a1.6,1.6,0,0,1,.1.23l-15.3,4.18c0-.08-.07-.15-.1-.23" fill="#8d68b6" />
                            <path d="M590.72,210.56l15.3-4.18.07.19-15.31,4.19-.06-.2" fill="#8b66ba" />
                          </g>
                        </g>
                      </g>
                      <polygon points="590.64 216.87 605.94 212.68 610.49 220.93 595.19 225.11 590.64 216.87" fill="#f8dc88" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-44)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.19,225.11l15.3-4.18.06.1-15.31,4.19a.54.54,0,0,0,0-.11" fill="#f6d77d" />
                            <path d="M595.24,225.22,610.55,221a1.67,1.67,0,0,1,.08.2l-15.3,4.19-.09-.2" fill="#f6d880" />
                            <path d="M595.33,225.42l15.3-4.19a2.2,2.2,0,0,1,.15.6L595.47,226a2.49,2.49,0,0,0-.14-.6" fill="#f7d983" />
                            <path d="M595.47,226l15.31-4.19a2.18,2.18,0,0,1,0,.25v0l-15.3,4.18v0a2.11,2.11,0,0,0,0-.25" fill="#f6d880" />
                            <path d="M595.49,226.29l15.3-4.18a1.28,1.28,0,0,1,0,.19l-15.3,4.18a1.15,1.15,0,0,0,0-.19" fill="#f6d77d" />
                            <path d="M595.48,226.48l15.3-4.18a.77.77,0,0,1,0,.15l-15.3,4.18s0-.1,0-.15" fill="#f5d57b" />
                            <path d="M595.46,226.63l15.3-4.18a.35.35,0,0,1,0,.13l-15.3,4.18,0-.13" fill="#f5d478" />
                            <path d="M595.43,226.76l15.3-4.18,0,.11-15.31,4.19a.56.56,0,0,0,0-.12" fill="#f4d275" />
                            <path d="M595.39,226.88l15.31-4.19a1.17,1.17,0,0,1-.05.11L595.34,227a.37.37,0,0,0,0-.11" fill="#f4d173" />
                            <path d="M595.34,227l15.31-4.19-.06.11-15.3,4.18a.31.31,0,0,0,.05-.1" fill="#f3d070" />
                            <path d="M595.29,227.09l15.3-4.18-.07.1-15.31,4.18.08-.1" fill="#f3ce6d" />
                            <path d="M595.21,227.19,610.52,223l-.11.1-15.3,4.18.1-.1" fill="#f2cd6b" />
                            <path d="M595.11,227.29l15.3-4.18a.51.51,0,0,1-.21.1l-15.3,4.19a.71.71,0,0,0,.21-.11" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <path d="M590.09,216.26a1.58,1.58,0,0,1,.55.61l4.55,8.24a2.5,2.5,0,0,1,.3,1.16c0,.81-.44,1.31-1,1.11l-9-3.28a.56.56,0,0,1-.16-.07,1.71,1.71,0,0,1-.56-.62,2,2,0,0,1,0-2.08l4.41-5A.65.65,0,0,1,590.09,216.26Z" fill="#fbe498" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-45)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M563.73,175.69l15.3-4.18c5-1.36,10-.77,15.1.93l-15.3,4.18c-5.12-1.69-10.14-2.28-15.1-.93" fill="#a17592" />
                            <path d="M578.83,176.62l15.3-4.18c1.46.48,2.94,1.06,4.42,1.71l-15.31,4.19c-1.48-.65-3-1.23-4.41-1.72" fill="#9f7496" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-46)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M583.24,178.34l15.31-4.19c-.13.12-.24.25-.36.38l-15.3,4.19c.11-.13.23-.26.35-.38" fill="#9f7496" />
                            <path d="M582.89,178.72l15.3-4.19a8.11,8.11,0,0,0-.68.92l-15.3,4.18a7,7,0,0,1,.68-.91" fill="#9c729a" />
                            <path d="M582.21,179.63l15.3-4.18a10.48,10.48,0,0,0-.53.94l-15.3,4.19a8.64,8.64,0,0,1,.53-1" fill="#9a719e" />
                            <path d="M581.68,180.58l15.3-4.19c-.15.32-.29.65-.42,1l-15.31,4.19a9.11,9.11,0,0,1,.43-1" fill="#986fa2" />
                            <path d="M581.25,181.58l15.31-4.19a11.17,11.17,0,0,0-.35,1.07l-15.3,4.19a11.16,11.16,0,0,1,.34-1.07" fill="#966ea6" />
                            <path d="M580.91,182.65l15.3-4.19c-.1.38-.19.78-.27,1.19l-15.3,4.18a10.7,10.7,0,0,1,.27-1.18" fill="#946caa" />
                            <path d="M580.64,183.83l15.3-4.18c-.08.44-.14.9-.19,1.37l-15.3,4.19c0-.48.11-.93.19-1.38" fill="#926bae" />
                            <path d="M580.45,185.21l15.3-4.19c0,.55-.08,1.13-.08,1.72l-15.3,4.18c0-.59,0-1.16.08-1.71" fill="#8f69b2" />
                            <path d="M580.37,186.92l15.3-4.18V183l-15.3,4.18a2.8,2.8,0,0,1,0-.29" fill="#8d68b6" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-47)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M590.78,210.76l15.31-4.19c.1.32.21.62.32.93l-15.31,4.18c-.11-.3-.22-.61-.32-.92" fill="#8b66ba" />
                            <path d="M591.1,211.68l15.31-4.18c.24.64.51,1.27.79,1.86l-15.3,4.19c-.29-.59-.55-1.22-.8-1.87" fill="#8d68b6" />
                            <path d="M591.9,213.55l15.3-4.19a16.44,16.44,0,0,0,.84,1.56l-15.31,4.19c-.29-.49-.57-1-.83-1.56" fill="#8f69b2" />
                            <path d="M592.73,215.11,608,210.92c.25.43.51.84.78,1.22l-15.3,4.19c-.28-.39-.54-.79-.79-1.22" fill="#926bae" />
                            <path d="M593.52,216.33l15.3-4.19c.25.36.51.71.78,1l-15.3,4.18c-.27-.32-.53-.67-.78-1" fill="#946caa" />
                            <path d="M594.3,217.36l15.3-4.18c.26.31.53.62.81.9l-15.31,4.19c-.27-.29-.54-.59-.8-.91" fill="#966ea6" />
                            <path d="M595.1,218.27l15.31-4.19a10.5,10.5,0,0,0,.84.8l-15.31,4.19c-.28-.25-.56-.52-.84-.8" fill="#986fa2" />
                            <path d="M595.94,219.07l15.31-4.19a10.14,10.14,0,0,0,.92.73l-15.31,4.18a11.56,11.56,0,0,1-.92-.72" fill="#9a719e" />
                            <path d="M596.86,219.79l15.31-4.18c.21.15.43.29.64.42l.39.22-15.31,4.19-.38-.22a6.64,6.64,0,0,1-.65-.43" fill="#9c729a" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-48)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.35,152.11l15.31-4.19a19.23,19.23,0,0,1,3.06-.58l-15.31,4.18a20.68,20.68,0,0,0-3.06.59" fill="#f2af5c" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-49)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.2,208l15.3-4.19.11.07.07,0-15.31,4.19-.06,0-.11-.07" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-50)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.2,208l15.3-4.19.11.07.07,0-15.31,4.19-.06,0-.11-.07" fill="#74d4a1" />
                            <path d="M595.37,208.07l15.31-4.19.18.08-15.31,4.19-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-51)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M594.9,203.57l15.3-4.18a.88.88,0,0,0-.32.16l-15.3,4.19a.9.9,0,0,1,.32-.17" fill="#7bd199" />
                            <path d="M594.58,203.74l15.3-4.19-.16.15-15.3,4.19a.75.75,0,0,1,.16-.15" fill="#78d39d" />
                            <path d="M594.42,203.89l15.3-4.19a.91.91,0,0,0-.11.16L594.3,204l.12-.15" fill="#74d4a1" />
                            <path d="M594.3,204l15.31-4.18-.09.16-15.31,4.18.09-.16" fill="#71d6a5" />
                            <path d="M594.21,204.2,609.52,200a.77.77,0,0,0-.07.16l-15.31,4.19c0-.06.05-.11.07-.17" fill="#6ed7aa" />
                            <path d="M594.14,204.37l15.31-4.19-.06.18-15.31,4.19.06-.18" fill="#6ad9ae" />
                            <path d="M594.08,204.55l15.31-4.19c0,.07,0,.14,0,.21L594,204.75c0-.07,0-.13,0-.2" fill="#67dbb2" />
                            <path d="M594,204.75l15.3-4.18,0,.23L594,205a1.81,1.81,0,0,1,0-.23" fill="#64dcb6" />
                            <path d="M594,205l15.3-4.18a2.71,2.71,0,0,0,0,.29L594,205.28c0-.1,0-.2,0-.3" fill="#60debb" />
                            <path d="M594,205.28l15.31-4.19v0c0,.12,0,.25,0,.37L594,205.69a2.4,2.4,0,0,1,0-.37v0" fill="#5ddfbf" />
                            <path d="M594,205.69l15.3-4.19a3.86,3.86,0,0,0,.24,1l-15.31,4.18a3.77,3.77,0,0,1-.23-.95" fill="#59e1c3" />
                            <path d="M594.25,206.64l15.31-4.18c0,.09.07.17.11.26l-15.3,4.19-.12-.27" fill="#5ddfbf" />
                            <path d="M594.37,206.91l15.3-4.19c.05.09.09.18.14.26l-15.3,4.19a2.15,2.15,0,0,1-.14-.26" fill="#60debb" />
                            <path d="M594.51,207.17l15.3-4.19a1.1,1.1,0,0,0,.14.21l-15.31,4.19a2.39,2.39,0,0,1-.13-.21" fill="#64dcb6" />
                            <path d="M594.64,207.38,610,203.19l.13.18-15.31,4.18-.13-.17" fill="#67dbb2" />
                            <path d="M594.77,207.55l15.31-4.18.13.15-15.3,4.18a1,1,0,0,1-.14-.15" fill="#6ad9ae" />
                            <path d="M594.91,207.7l15.3-4.18.14.13-15.3,4.19-.14-.14" fill="#6ed7aa" />
                            <path d="M595.05,207.84l15.3-4.19a1.58,1.58,0,0,0,.15.12L595.2,208l-.15-.12" fill="#71d6a5" />
                            <path d="M595.2,208l15.3-4.19.11.07.07,0-15.31,4.19-.06,0-.11-.07" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-52)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.55,208.15,610.86,204h0l-15.31,4.19h0" fill="#78d39d" />
                            <path d="M595.59,208.16,610.9,204a.94.94,0,0,0,.57,0l-15.31,4.19a1,1,0,0,1-.57,0" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-53)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M578.05,158.42l15.3-4.19a17.54,17.54,0,0,1,4.07-.61,1.26,1.26,0,0,0,.28-.05l-15.3,4.19a1.35,1.35,0,0,1-.28,0,17.55,17.55,0,0,0-4.07.62" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-54)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M594.9,203.57l15.3-4.18a1,1,0,0,1,.57,0l-15.3,4.19a1,1,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M595.47,203.6l15.3-4.19,0,0,.18.08-15.3,4.19-.18-.09h0" fill="#7a5559" />
                            <path d="M595.69,203.7l15.3-4.19.07,0-15.31,4.18-.06,0" fill="#77535b" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-55)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.49,213.91l15.3-4.18.11.07.06,0L598.66,214l-.07,0-.1-.08" fill="#74d4a1" />
                            <path d="M598.66,214l15.3-4.18.18.08-15.3,4.18-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-56)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.84,214.1l15.3-4.18h0l-15.3,4.19,0,0" fill="#78d39d" />
                            <path d="M598.88,214.12l15.3-4.19a.93.93,0,0,0,.57,0l-15.31,4.19a1,1,0,0,1-.56,0" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-57)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.18,209.53l15.31-4.19a1,1,0,0,0-.33.17l-15.3,4.18a1.07,1.07,0,0,1,.32-.16" fill="#7bd199" />
                            <path d="M597.86,209.69l15.3-4.18a1.1,1.1,0,0,0-.16.15l-15.3,4.19a1.21,1.21,0,0,1,.16-.16" fill="#78d39d" />
                            <path d="M597.7,209.85l15.3-4.19-.11.15L597.58,210l.12-.15" fill="#74d4a1" />
                            <path d="M597.58,210l15.31-4.19-.09.16-15.3,4.19a1.19,1.19,0,0,1,.08-.16" fill="#71d6a5" />
                            <path d="M597.5,210.16,612.8,206a1.22,1.22,0,0,0-.07.17l-15.31,4.19c0-.06.05-.12.08-.17" fill="#6ed7aa" />
                            <path d="M597.42,210.33l15.31-4.19-.06.18-15.3,4.19a1.21,1.21,0,0,1,0-.18" fill="#6ad9ae" />
                            <path d="M597.37,210.51l15.3-4.19a1.42,1.42,0,0,0,0,.2l-15.31,4.19a1.17,1.17,0,0,1,0-.2" fill="#67dbb2" />
                            <path d="M597.32,210.71l15.31-4.19a1.85,1.85,0,0,0,0,.23l-15.3,4.19,0-.23" fill="#64dcb6" />
                            <path d="M597.29,210.94l15.3-4.19a2.81,2.81,0,0,0,0,.29l-15.31,4.19a2.64,2.64,0,0,1,0-.29" fill="#60debb" />
                            <path d="M597.27,211.23,612.58,207v.05c0,.12,0,.24,0,.36l-15.3,4.19c0-.12,0-.25,0-.37v0" fill="#5ddfbf" />
                            <path d="M597.3,211.64l15.3-4.19a3.86,3.86,0,0,0,.24,1l-15.3,4.19a3.86,3.86,0,0,1-.24-1" fill="#59e1c3" />
                            <path d="M597.54,212.6l15.3-4.19a2.06,2.06,0,0,0,.12.26l-15.31,4.19a2,2,0,0,1-.11-.26" fill="#5ddfbf" />
                            <path d="M597.65,212.86,613,208.67a1.71,1.71,0,0,0,.14.27l-15.31,4.19c0-.09-.1-.18-.14-.27" fill="#60debb" />
                            <path d="M597.79,213.13l15.31-4.19a2.39,2.39,0,0,0,.13.21l-15.3,4.18a1.43,1.43,0,0,1-.14-.2" fill="#64dcb6" />
                            <path d="M597.93,213.33l15.3-4.18.13.17-15.3,4.19a1.18,1.18,0,0,1-.13-.18" fill="#67dbb2" />
                            <path d="M598.06,213.51l15.3-4.19c0,.05.09.11.14.15l-15.31,4.19-.13-.15" fill="#6ad9ae" />
                            <path d="M598.19,213.66l15.31-4.19a.93.93,0,0,0,.14.14l-15.31,4.18-.14-.13" fill="#6ed7aa" />
                            <path d="M598.33,213.79l15.31-4.18.15.12-15.3,4.18a.61.61,0,0,1-.16-.12" fill="#71d6a5" />
                            <path d="M598.49,213.91l15.3-4.18.11.07.06,0L598.66,214l-.07,0-.1-.08" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-58)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.75,203.73l15.31-4.18.11.07-15.31,4.18-.11-.07" fill="#77535b" />
                            <path d="M595.86,203.8l15.31-4.18a.79.79,0,0,1,.15.12L596,203.92l-.15-.12" fill="#74505d" />
                            <path d="M596,203.92l15.31-4.18.14.13-15.31,4.19a1.85,1.85,0,0,0-.14-.14" fill="#704e5f" />
                            <path d="M596.15,204.06l15.31-4.19.13.15-15.3,4.19-.14-.15" fill="#6d4b61" />
                            <path d="M596.29,204.21l15.3-4.19.14.18-15.31,4.18-.13-.17" fill="#6a4963" />
                            <path d="M596.42,204.38l15.31-4.18.13.2-15.31,4.19a2.39,2.39,0,0,0-.13-.21" fill="#664665" />
                            <path d="M596.55,204.59l15.31-4.19.14.27-15.31,4.18a2.15,2.15,0,0,0-.14-.26" fill="#634467" />
                            <path d="M596.69,204.85,612,200.67a2,2,0,0,1,.11.26l-15.3,4.19-.12-.27" fill="#60416a" />
                            <path d="M596.81,205.12l15.3-4.19a3.75,3.75,0,0,1,.24,1L597,206.07a3.77,3.77,0,0,0-.23-.95" fill="#5c3f6c" />
                            <path d="M597,206.07l15.31-4.18c0,.12,0,.24,0,.37v.05l-15.3,4.19v-.06a2.4,2.4,0,0,0,0-.37" fill="#60416a" />
                            <path d="M597.07,206.5l15.3-4.19a2.71,2.71,0,0,1,0,.29l-15.31,4.19a2.83,2.83,0,0,0,0-.29" fill="#634467" />
                            <path d="M597.05,206.79l15.31-4.19,0,.23L597,207a1.81,1.81,0,0,0,0-.23" fill="#664665" />
                            <path d="M597,207l15.31-4.19c0,.07,0,.13-.05.2L597,207.21c0-.06,0-.13,0-.19" fill="#6a4963" />
                            <path d="M597,207.21l15.3-4.18a1.27,1.27,0,0,1-.06.18l-15.3,4.18a1.89,1.89,0,0,0,.06-.18" fill="#6d4b61" />
                            <path d="M596.92,207.39l15.3-4.18a1.11,1.11,0,0,1-.07.16l-15.3,4.19c0-.05,0-.11.07-.17" fill="#704e5f" />
                            <path d="M596.85,207.56l15.3-4.19a.51.51,0,0,1-.09.16l-15.3,4.19.09-.16" fill="#74505d" />
                            <path d="M596.76,207.72l15.3-4.19a.58.58,0,0,1-.11.15l-15.3,4.19.11-.15" fill="#77535b" />
                            <path d="M596.65,207.87l15.3-4.19a1.21,1.21,0,0,1-.16.16L596.49,208a1.1,1.1,0,0,0,.16-.15" fill="#7a5559" />
                            <path d="M596.49,208l15.3-4.18a1.07,1.07,0,0,1-.32.16l-15.31,4.19a1,1,0,0,0,.33-.17" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <path d="M595.75,203.73a3.32,3.32,0,0,1,1.32,2.71c0,1.26-.67,2-1.52,1.71l-.24-.12a3.35,3.35,0,0,1-1.32-2.71c0-1.26.67-2,1.52-1.71A1.34,1.34,0,0,1,595.75,203.73Z" fill="#412a7d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-59)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M583.64,155.38,599,151.19v.07l-15.31,4.18v-.06" fill="#f7b371" />
                            <path d="M583.64,155.44,599,151.26c0,.13,0,.26,0,.39l-15.31,4.18c0-.12,0-.25,0-.39" fill="#f6b36e" />
                            <path d="M583.62,155.83l15.31-4.18c0,.1,0,.21,0,.31l-15.3,4.19a3.11,3.11,0,0,0,0-.32" fill="#f6b26c" />
                            <path d="M583.58,156.15l15.3-4.19a1.31,1.31,0,0,1-.06.27l-15.3,4.19.06-.27" fill="#f5b26a" />
                            <path d="M583.52,156.42l15.3-4.19a1.83,1.83,0,0,1-.08.25l-15.3,4.19c0-.08,0-.17.08-.25" fill="#f5b168" />
                            <path d="M583.44,156.67l15.3-4.19-.09.23-15.31,4.19a2.29,2.29,0,0,0,.1-.23" fill="#f4b165" />
                            <path d="M583.34,156.9l15.31-4.19a1.59,1.59,0,0,1-.13.22l-15.3,4.18.12-.21" fill="#f4b063" />
                            <path d="M583.22,157.11l15.3-4.18-.15.21-15.31,4.18a1.16,1.16,0,0,0,.16-.21" fill="#f3b061" />
                            <path d="M583.06,157.32l15.31-4.18-.22.21-15.31,4.18a1.45,1.45,0,0,0,.22-.21" fill="#f3b05f" />
                            <path d="M582.84,157.53l15.31-4.18a1.35,1.35,0,0,1-.45.22l-15.3,4.19a1.1,1.1,0,0,0,.44-.23" fill="#f2af5c" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-60)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.18,209.53l15.31-4.19a1,1,0,0,1,.57,0l-15.31,4.18a1,1,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M598.75,209.55l15.31-4.18h0a.66.66,0,0,1,.19.09L599,209.65l-.19-.08,0,0" fill="#7a5559" />
                            <path d="M599,209.65l15.3-4.18.07,0L599,209.69l-.06,0" fill="#77535b" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-61)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M576.27,129.41l15.3-4.18a1.31,1.31,0,0,1,.78,0l-15.3,4.19a1.4,1.4,0,0,0-.78,0" fill="#f2cc68" />
                            <path d="M577.05,129.45l15.3-4.19,0,0-15.3,4.19-.05,0" fill="#f2cd6b" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-62)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M596.86,219.79l15.31-4.18c.21.15.43.29.64.42l.39.22-15.31,4.19-.38-.22a6.64,6.64,0,0,1-.65-.43" fill="#9c729a" />
                            <path d="M597.89,220.44l15.31-4.19a8.43,8.43,0,0,0,1.28.56L599.17,221a7.84,7.84,0,0,1-1.28-.55" fill="#9f7496" />
                            <path d="M599.17,221l15.31-4.18a5.79,5.79,0,0,0,3.39.14l-15.31,4.19a5.8,5.8,0,0,1-3.39-.15" fill="#a17592" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-63)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M585.77,176.83l15.31-4.19a5.78,5.78,0,0,1,3.4.15L589.18,177a5.73,5.73,0,0,0-3.41-.15" fill="#6e9674" />
                            <path d="M589.18,177l15.3-4.19.22.08a7.92,7.92,0,0,1,1.08.48l-15.3,4.19a9.59,9.59,0,0,0-1.09-.49l-.21-.07" fill="#6b9577" />
                            <path d="M590.48,177.54l15.3-4.19.39.22-15.31,4.19c-.12-.08-.25-.15-.38-.22" fill="#67957a" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-64)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M599,209.69l15.31-4.19.1.07-15.3,4.19-.11-.07" fill="#77535b" />
                            <path d="M599.15,209.76l15.3-4.19.15.12-15.3,4.19a.79.79,0,0,0-.15-.12" fill="#74505d" />
                            <path d="M599.3,209.88l15.3-4.19.14.13L599.44,210l-.14-.13" fill="#704e5f" />
                            <path d="M599.44,210l15.3-4.19.14.15-15.31,4.19-.13-.15" fill="#6d4b61" />
                            <path d="M599.57,210.16,614.88,206l.13.18-15.31,4.18a1.09,1.09,0,0,0-.13-.17" fill="#6a4963" />
                            <path d="M599.7,210.33,615,206.15l.13.2-15.3,4.19-.14-.21" fill="#664665" />
                            <path d="M599.84,210.54l15.3-4.19c.05.09.1.18.14.27L600,210.8c-.05-.09-.09-.18-.14-.26" fill="#634467" />
                            <path d="M600,210.8l15.3-4.18.12.26-15.31,4.19c0-.09-.07-.18-.11-.27" fill="#60416a" />
                            <path d="M600.09,211.07l15.31-4.19a4.44,4.44,0,0,1,.24,1L600.33,212a3.86,3.86,0,0,0-.24-1" fill="#5c3f6c" />
                            <path d="M600.33,212l15.31-4.18c0,.12,0,.24,0,.36v0l-15.31,4.18v0c0-.12,0-.24,0-.37" fill="#60416a" />
                            <path d="M600.35,212.44l15.31-4.18c0,.09,0,.19,0,.28l-15.31,4.19a2.71,2.71,0,0,0,0-.29" fill="#634467" />
                            <path d="M600.34,212.73l15.31-4.19a1.57,1.57,0,0,1,0,.23L600.31,213l0-.23" fill="#664665" />
                            <path d="M600.31,213l15.3-4.19a1.18,1.18,0,0,1,0,.2l-15.31,4.19a1.46,1.46,0,0,0,0-.2" fill="#6a4963" />
                            <path d="M600.26,213.16,615.57,209l-.06.18-15.3,4.19a1.21,1.21,0,0,0,0-.18" fill="#6d4b61" />
                            <path d="M600.21,213.34l15.3-4.19a.87.87,0,0,1-.07.17l-15.31,4.19.08-.17" fill="#704e5f" />
                            <path d="M600.13,213.51l15.31-4.19-.09.16L600,213.67a.65.65,0,0,0,.09-.16" fill="#74505d" />
                            <path d="M600,213.67l15.31-4.19-.12.16-15.3,4.18a.83.83,0,0,0,.11-.15" fill="#77535b" />
                            <path d="M599.93,213.82l15.3-4.18a1.14,1.14,0,0,1-.16.15L599.77,214c.05,0,.11-.1.16-.16" fill="#7a5559" />
                            <path d="M599.77,214l15.3-4.19a.88.88,0,0,1-.32.16l-15.31,4.19a1,1,0,0,0,.33-.16" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <path d="M599,209.69a3.35,3.35,0,0,1,1.31,2.71c0,1.25-.67,2-1.51,1.7l-.25-.11a3.4,3.4,0,0,1-1.32-2.72c0-1.25.68-2,1.52-1.7A1.15,1.15,0,0,1,599,209.69Z" fill="#412a7d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-65)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M597.18,201.73l15.31-4.19c0,.13,0,.25,0,.37L597.2,202.1c0-.12,0-.25,0-.37" fill="#5ddfbf" />
                            <path d="M597.2,202.1l15.31-4.19a3.86,3.86,0,0,0,.24,1l-15.31,4.19a4,4,0,0,1-.24-1" fill="#59e1c3" />
                            <path d="M597.44,203.06l15.31-4.19a2,2,0,0,0,.11.26l-15.3,4.19c0-.09-.08-.17-.12-.26" fill="#5ddfbf" />
                            <path d="M597.56,203.32l15.3-4.19c0,.09.09.18.14.27l-15.3,4.18a2.15,2.15,0,0,1-.14-.26" fill="#60debb" />
                            <path d="M597.7,203.58,613,199.4a1.43,1.43,0,0,0,.14.2l-15.31,4.19a1.48,1.48,0,0,1-.13-.21" fill="#64dcb6" />
                            <path d="M597.83,203.79l15.31-4.19.13.18L598,204l-.13-.18" fill="#67dbb2" />
                            <path d="M598,204l15.31-4.19.13.15-15.3,4.19L598,204" fill="#6ad9ae" />
                            <path d="M598.1,204.12l15.3-4.19.14.13-15.3,4.19-.14-.13" fill="#6ed7aa" />
                            <path d="M598.24,204.25l15.3-4.19a.79.79,0,0,0,.15.12l-15.3,4.19-.15-.12" fill="#71d6a5" />
                            <path d="M598.39,204.37l15.3-4.19.11.07.07,0-15.31,4.19-.06,0a.41.41,0,0,1-.11-.07" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-66)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.39,204.37l15.3-4.19.11.07.07,0-15.31,4.19-.06,0a.41.41,0,0,1-.11-.07" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-67)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.39,204.37l15.3-4.19.11.07.07,0-15.31,4.19-.06,0a.41.41,0,0,1-.11-.07" fill="#74d4a1" />
                            <path d="M598.56,204.48l15.31-4.19.18.08,0,0-15.31,4.18h0l-.18-.08" fill="#78d39d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-68)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.56,204.48l15.31-4.19.18.08,0,0-15.31,4.18h0l-.18-.08" fill="#78d39d" />
                            <path d="M598.78,204.57l15.31-4.18a1,1,0,0,0,.56,0l-15.3,4.19a1,1,0,0,1-.57,0" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-69)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.09,200l15.3-4.19a1.07,1.07,0,0,0-.32.16l-15.3,4.19a.74.74,0,0,1,.32-.16" fill="#7bd199" />
                            <path d="M597.77,200.15l15.3-4.19a1.21,1.21,0,0,0-.16.16l-15.3,4.18a1.14,1.14,0,0,1,.16-.15" fill="#78d39d" />
                            <path d="M597.61,200.3l15.3-4.18a.58.58,0,0,0-.11.15l-15.31,4.19.12-.16" fill="#74d4a1" />
                            <path d="M597.49,200.46l15.31-4.19-.09.16-15.31,4.18.09-.15" fill="#71d6a5" />
                            <path d="M597.4,200.61l15.31-4.18a.87.87,0,0,0-.07.17l-15.31,4.18c0-.06,0-.11.07-.17" fill="#6ed7aa" />
                            <path d="M597.33,200.78l15.31-4.18a.76.76,0,0,0-.06.18L597.27,201l.06-.18" fill="#6ad9ae" />
                            <path d="M597.27,201l15.31-4.18c0,.06,0,.13-.05.2l-15.3,4.18c0-.07,0-.13,0-.2" fill="#67dbb2" />
                            <path d="M597.23,201.16l15.3-4.18,0,.23-15.3,4.19a1,1,0,0,1,0-.24" fill="#64dcb6" />
                            <path d="M597.2,201.4l15.3-4.19a2.71,2.71,0,0,0,0,.29l-15.31,4.19a2.64,2.64,0,0,1,0-.29" fill="#60debb" />
                            <path d="M597.18,201.69l15.31-4.19v0l-15.31,4.19v0" fill="#5ddfbf" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-70)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.09,200l15.3-4.19a1,1,0,0,1,.57,0L598.66,200a.93.93,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M598.66,200l15.3-4.19,0,0,.19.08-15.31,4.19-.18-.08,0,0" fill="#7a5559" />
                            <path d="M598.88,200.11l15.31-4.19.06,0L599,200.15l-.07,0" fill="#77535b" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-71)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M601.37,205.94l15.3-4.19a1.1,1.1,0,0,0-.32.17l-15.3,4.18a1,1,0,0,1,.32-.16" fill="#7bd199" />
                            <path d="M601.05,206.1l15.3-4.18a1.1,1.1,0,0,0-.16.15l-15.3,4.19.16-.16" fill="#78d39d" />
                            <path d="M600.89,206.26l15.3-4.19-.11.15-15.31,4.19a1,1,0,0,1,.12-.15" fill="#74d4a1" />
                            <path d="M600.77,206.41l15.31-4.19-.09.16-15.31,4.19.09-.16" fill="#71d6a5" />
                            <path d="M600.68,206.57,616,202.38a1.22,1.22,0,0,0-.07.17l-15.31,4.19c0-.06,0-.12.07-.17" fill="#6ed7aa" />
                            <path d="M600.61,206.74l15.31-4.19-.06.18-15.3,4.19a.78.78,0,0,1,.05-.18" fill="#6ad9ae" />
                            <path d="M600.56,206.92l15.3-4.19a1.18,1.18,0,0,0,0,.2l-15.31,4.19a1.17,1.17,0,0,1,0-.2" fill="#67dbb2" />
                            <path d="M600.51,207.12l15.31-4.19a1.85,1.85,0,0,0,0,.23l-15.3,4.19,0-.23" fill="#64dcb6" />
                            <path d="M600.48,207.35l15.3-4.19a2.91,2.91,0,0,0,0,.3l-15.31,4.18a2.64,2.64,0,0,1,0-.29" fill="#60debb" />
                            <path d="M600.46,207.64l15.31-4.18v0c0,.12,0,.24,0,.37l-15.3,4.18a2.22,2.22,0,0,1,0-.37v0" fill="#5ddfbf" />
                            <path d="M600.49,208.05l15.3-4.18a3.78,3.78,0,0,0,.24.95L600.72,209a3.85,3.85,0,0,1-.23-1" fill="#59e1c3" />
                            <path d="M600.72,209,616,204.82c0,.09.07.18.11.27l-15.3,4.18-.12-.26" fill="#5ddfbf" />
                            <path d="M600.84,209.27l15.3-4.18c.05.09.09.18.14.26L601,209.54c-.05-.09-.1-.18-.14-.27" fill="#60debb" />
                            <path d="M601,209.54l15.3-4.19.14.21-15.31,4.19-.13-.21" fill="#64dcb6" />
                            <path d="M601.11,209.75l15.31-4.19a1.09,1.09,0,0,0,.13.17l-15.31,4.19-.13-.17" fill="#67dbb2" />
                            <path d="M601.24,209.92l15.31-4.19a1,1,0,0,0,.13.15l-15.3,4.19-.14-.15" fill="#6ad9ae" />
                            <path d="M601.38,210.07l15.3-4.19.14.14-15.3,4.19-.14-.14" fill="#6ed7aa" />
                            <path d="M601.52,210.21l15.3-4.19.16.12-15.31,4.18-.15-.11" fill="#71d6a5" />
                            <path d="M601.67,210.32,617,206.14l.1.07.07,0-15.31,4.18-.06,0-.11-.08" fill="#74d4a1" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-72)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M599,200.15l15.3-4.19a.41.41,0,0,1,.11.07l-15.3,4.19-.11-.07" fill="#77535b" />
                            <path d="M599.06,200.22l15.3-4.19.15.12-15.3,4.19a.79.79,0,0,0-.15-.12" fill="#74505d" />
                            <path d="M599.21,200.34l15.3-4.19a.86.86,0,0,1,.14.13l-15.3,4.19-.14-.13" fill="#704e5f" />
                            <path d="M599.35,200.47l15.3-4.19.13.15-15.3,4.19a1,1,0,0,0-.13-.15" fill="#6d4b61" />
                            <path d="M599.48,200.62l15.3-4.19.13.17-15.3,4.19-.13-.17" fill="#6a4963" />
                            <path d="M599.61,200.79l15.3-4.19.14.21L599.74,201a1.48,1.48,0,0,0-.13-.21" fill="#664665" />
                            <path d="M599.74,201l15.31-4.19c.05.08.09.17.14.26l-15.31,4.19a2.15,2.15,0,0,0-.14-.26" fill="#634467" />
                            <path d="M599.88,201.26l15.31-4.19c0,.09.08.18.11.27L600,201.53q-.06-.15-.12-.27" fill="#60416a" />
                            <path d="M600,201.53l15.3-4.19a3.86,3.86,0,0,1,.24,1l-15.31,4.18a3.77,3.77,0,0,0-.23-.95" fill="#5c3f6c" />
                            <path d="M600.23,202.48l15.31-4.18c0,.12,0,.24,0,.37v0l-15.3,4.19v-.05a2.4,2.4,0,0,0,0-.37" fill="#60416a" />
                            <path d="M600.26,202.9l15.3-4.19a2.71,2.71,0,0,1,0,.29l-15.31,4.19a2.83,2.83,0,0,0,0-.29" fill="#634467" />
                            <path d="M600.24,203.19,615.55,199l0,.23-15.31,4.19,0-.23" fill="#664665" />
                            <path d="M600.21,203.42l15.31-4.19c0,.07,0,.14,0,.2l-15.3,4.19c0-.07,0-.13,0-.2" fill="#6a4963" />
                            <path d="M600.17,203.62l15.3-4.19-.06.18-15.3,4.19.06-.18" fill="#6d4b61" />
                            <path d="M600.11,203.8l15.3-4.19a.87.87,0,0,1-.07.17L600,204c0-.06.05-.11.07-.17" fill="#704e5f" />
                            <path d="M600,204l15.3-4.19-.09.16L600,204.13,600,204" fill="#74505d" />
                            <path d="M600,204.13l15.3-4.19a.83.83,0,0,1-.11.15l-15.31,4.19.12-.15" fill="#77535b" />
                            <path d="M599.83,204.28l15.31-4.19c0,.06-.11.11-.16.16l-15.31,4.18a.75.75,0,0,0,.16-.15" fill="#7a5559" />
                            <path d="M599.67,204.43,615,200.25a1,1,0,0,1-.33.16l-15.3,4.19a.9.9,0,0,0,.32-.17" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <path d="M599,200.15a3.34,3.34,0,0,1,1.31,2.7c0,1.25-.67,2-1.52,1.71a1.34,1.34,0,0,1-.24-.12,3.32,3.32,0,0,1-1.32-2.71c0-1.25.67-2,1.52-1.7A1.42,1.42,0,0,1,599,200.15Z" fill="#412a7d" />
                      <polygon points="580.37 187.21 595.67 183.03 613.99 189.72 598.68 193.9 580.37 187.21" fill="#75d4a1" />
                      <polygon points="583.47 137.97 598.77 133.78 598.95 151.19 583.64 155.38 583.47 137.97" fill="#f9b479" />
                      <polygon points="579.26 136.44 594.57 132.25 598.77 133.78 583.47 137.97 579.26 136.44" fill="#f3b061" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-73)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M601.37,205.94l15.3-4.19a1,1,0,0,1,.57,0L601.94,206a.94.94,0,0,0-.57,0" fill="#7d5857" />
                            <path d="M601.94,206l15.3-4.19h0a1.11,1.11,0,0,1,.19.09l-15.3,4.18L602,206h0" fill="#7a5559" />
                            <path d="M602.17,206.06l15.3-4.18.07,0-15.31,4.19-.06,0" fill="#77535b" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-74)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M590.86,177.76l15.31-4.19c.21.13.43.27.64.42l-15.31,4.19c-.21-.15-.42-.29-.64-.42" fill="#67957a" />
                            <path d="M591.5,178.18,606.81,174c.3.22.61.46.9.72l-15.3,4.18c-.3-.25-.6-.49-.91-.71" fill="#63947d" />
                            <path d="M592.41,178.89l15.3-4.18c.28.24.56.51.83.79l-15.3,4.19c-.27-.28-.55-.55-.83-.8" fill="#5f9480" />
                            <path d="M593.24,179.69l15.3-4.19a11.65,11.65,0,0,1,.8.9L594,180.58c-.25-.31-.52-.61-.79-.89" fill="#5b9383" />
                            <path d="M594,180.58l15.31-4.18c.27.32.53.67.78,1l-15.3,4.19c-.26-.36-.52-.71-.79-1" fill="#589386" />
                            <path d="M594.82,181.62l15.3-4.19c.28.39.54.8.79,1.23l-15.3,4.19c-.25-.43-.52-.84-.79-1.23" fill="#549389" />
                            <path d="M595.61,182.85l15.3-4.19c.3.5.58,1,.84,1.57l-15.3,4.19c-.26-.54-.54-1.07-.84-1.57" fill="#50928c" />
                            <path d="M596.45,184.42l15.3-4.19c.2.41.38.83.56,1.25a3.65,3.65,0,0,0,.14.35L597.14,186c0-.12-.09-.23-.14-.35-.17-.43-.36-.84-.55-1.25" fill="#4c928f" />
                            <path d="M597.14,186l15.31-4.19a23,23,0,0,1,1.4,5.69l-15.3,4.19a23.48,23.48,0,0,0-1.41-5.69" fill="#489192" />
                            <path d="M598.55,191.71l15.3-4.19a20.14,20.14,0,0,1,.14,2.2l-15.31,4.18a20.1,20.1,0,0,0-.13-2.19" fill="#4c928f" />
                          </g>
                        </g>
                      </g>
                      <path d="M590.86,177.76a16.35,16.35,0,0,1,6.14,7.91,22.4,22.4,0,0,1,1.68,8.23l-18.31-6.69c0-3.94,1.07-7.07,2.87-8.87a5.57,5.57,0,0,1,6.15-1.29A8.26,8.26,0,0,1,590.86,177.76Z" fill="#298eab" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-75)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M602.23,206.1l15.31-4.19.1.07-15.3,4.19-.11-.07" fill="#77535b" />
                            <path d="M602.34,206.17l15.3-4.19.15.12-15.3,4.19-.15-.12" fill="#74505d" />
                            <path d="M602.49,206.29l15.3-4.19.14.13-15.3,4.19-.14-.13" fill="#704e5f" />
                            <path d="M602.63,206.42l15.3-4.19.14.15-15.31,4.19-.13-.15" fill="#6d4b61" />
                            <path d="M602.76,206.57l15.31-4.19.13.18-15.31,4.18-.13-.17" fill="#6a4963" />
                            <path d="M602.89,206.74l15.31-4.18.13.2L603,207a2.39,2.39,0,0,0-.13-.21" fill="#664665" />
                            <path d="M603,207l15.31-4.19.14.26-15.31,4.19A2.15,2.15,0,0,0,603,207" fill="#634467" />
                            <path d="M603.16,207.21,618.47,203c0,.09.08.18.11.27l-15.3,4.19c0-.09-.07-.18-.12-.27" fill="#60416a" />
                            <path d="M603.28,207.48l15.3-4.19a3.86,3.86,0,0,1,.24,1l-15.3,4.19a3.86,3.86,0,0,0-.24-1" fill="#5c3f6c" />
                            <path d="M603.52,208.44l15.3-4.19c0,.12,0,.25,0,.37v.06l-15.3,4.19v-.06c0-.12,0-.25,0-.37" fill="#60416a" />
                            <path d="M603.54,208.87l15.3-4.19a2.53,2.53,0,0,1,0,.28l-15.31,4.19a2.64,2.64,0,0,0,0-.28" fill="#634467" />
                            <path d="M603.52,209.15,618.83,205l0,.23-15.31,4.19a.85.85,0,0,0,0-.23" fill="#664665" />
                            <path d="M603.49,209.38l15.31-4.19a1.46,1.46,0,0,1,0,.2l-15.3,4.18a1.06,1.06,0,0,0,0-.19" fill="#6a4963" />
                            <path d="M603.45,209.57l15.3-4.18a1.21,1.21,0,0,1,0,.18l-15.31,4.18.06-.18" fill="#6d4b61" />
                            <path d="M603.39,209.75l15.31-4.18-.07.16-15.31,4.19a.87.87,0,0,0,.07-.17" fill="#704e5f" />
                            <path d="M603.32,209.92l15.31-4.19-.09.16-15.31,4.19.09-.16" fill="#74505d" />
                            <path d="M603.23,210.08l15.31-4.19c0,.05-.08.11-.12.15l-15.3,4.19.11-.15" fill="#77535b" />
                            <path d="M603.12,210.23l15.3-4.19a1.21,1.21,0,0,1-.16.16L603,210.38a.75.75,0,0,0,.16-.15" fill="#7a5559" />
                            <path d="M603,210.38l15.3-4.18a1.07,1.07,0,0,1-.32.16l-15.31,4.19a.87.87,0,0,0,.33-.17" fill="#7d5857" />
                          </g>
                        </g>
                      </g>
                      <path d="M602.23,206.1a3.35,3.35,0,0,1,1.31,2.71c0,1.25-.67,2-1.52,1.7l-.24-.11a3.37,3.37,0,0,1-1.32-2.72c0-1.25.67-2,1.52-1.7A1.15,1.15,0,0,1,602.23,206.1Z" fill="#412a7d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-76)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M608,210.75l15.3-4.18v.27L608,211v-.28" fill="#5ddfbf" />
                            <path d="M608,211l15.3-4.19c0,.59,0,1.16-.08,1.71l-15.31,4.19A15.77,15.77,0,0,0,608,211" fill="#60debb" />
                            <path d="M607.89,212.74l15.31-4.19c-.05.47-.11.93-.19,1.38l-15.31,4.18c.08-.44.15-.9.19-1.37" fill="#64dcb6" />
                            <path d="M607.7,214.11,623,209.93c-.08.41-.17.81-.27,1.19l-15.31,4.19a11.62,11.62,0,0,0,.27-1.2" fill="#67dbb2" />
                            <path d="M607.43,215.31l15.31-4.19a10.52,10.52,0,0,1-.35,1.08l-15.3,4.19c.13-.35.24-.71.34-1.08" fill="#6ad9ae" />
                            <path d="M607.09,216.39l15.3-4.19a9.11,9.11,0,0,1-.43,1l-15.3,4.19c.15-.32.3-.65.43-1" fill="#6ed7aa" />
                            <path d="M606.66,217.39,622,213.2a8.64,8.64,0,0,1-.53,1l-15.3,4.19a9.67,9.67,0,0,0,.53-1" fill="#71d6a5" />
                            <path d="M606.13,218.34l15.3-4.19a7.92,7.92,0,0,1-.67.91l-15.31,4.19a9,9,0,0,0,.68-.91" fill="#74d4a1" />
                            <path d="M605.45,219.25l15.31-4.19a6.68,6.68,0,0,1-1,.9l-15.3,4.19a6.13,6.13,0,0,0,.94-.9" fill="#78d39d" />
                            <path d="M604.51,220.15l15.3-4.19a5.65,5.65,0,0,1-1.29.77,5.53,5.53,0,0,1-.65.22l-15.31,4.19a5,5,0,0,0,.65-.23,5.67,5.67,0,0,0,1.3-.76" fill="#7bd199" />
                          </g>
                        </g>
                      </g>
                      <path d="M608,210.75c0,5-1.79,8.92-4.77,10.16a6.2,6.2,0,0,1-5.7-.69c-2.75-1.65-5.29-5.05-6.73-9.46a2.64,2.64,0,0,0-.56-1,1.26,1.26,0,0,0-.32-.26.8.8,0,0,0-1.24.5c-1.54,3.85-4.63,5.49-8,4.25a9,9,0,0,1-1.47-.71c-4.37-2.63-7.75-9.42-7.82-16.14-.08-7.46,4-12,9-10.17l18.31,6.69a8.26,8.26,0,0,1,1.47.71C604.52,197.24,607.91,204,608,210.75Zm-24.23-6.91c.84.31,1.52-.46,1.51-1.7a3.37,3.37,0,0,0-1.31-2.72,1.42,1.42,0,0,0-.25-.12l-1.7-.62,0-2.5a3.34,3.34,0,0,0-1.3-2.71,1.51,1.51,0,0,0-.26-.12c-.85-.31-1.52.45-1.51,1.7l0,2.51-1.7-.62c-.84-.31-1.52.46-1.51,1.7a3.35,3.35,0,0,0,1.31,2.71,1.42,1.42,0,0,0,.25.12l1.7.62,0,2.51a3.35,3.35,0,0,0,1.31,2.71,1.15,1.15,0,0,0,.25.12c.85.31,1.52-.46,1.51-1.71l0-2.5,1.7.62m15.09,10.26c.84.31,1.53-.45,1.51-1.7a3.35,3.35,0,0,0-1.31-2.71,1.15,1.15,0,0,0-.25-.12c-.84-.31-1.53.45-1.52,1.7a3.4,3.4,0,0,0,1.32,2.72l.25.11m-1.66-12.37a3.32,3.32,0,0,0,1.32,2.71,1.34,1.34,0,0,0,.24.12c.85.31,1.53-.46,1.52-1.71a3.34,3.34,0,0,0-1.31-2.7,1.42,1.42,0,0,0-.25-.12c-.85-.32-1.53.45-1.52,1.7m4.84,8.78c.85.31,1.54-.45,1.52-1.7a3.35,3.35,0,0,0-1.31-2.71A1.15,1.15,0,0,0,602,206c-.85-.31-1.53.45-1.52,1.7a3.37,3.37,0,0,0,1.32,2.72l.24.11m-6.47-2.36c.85.31,1.53-.45,1.52-1.71a3.32,3.32,0,0,0-1.32-2.71,1.34,1.34,0,0,0-.24-.12c-.85-.31-1.53.45-1.52,1.71a3.35,3.35,0,0,0,1.32,2.71l.24.12" fill="#3eede6" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-77)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M598.68,193.9,614,189.72a7.41,7.41,0,0,1,1.08.48l-15.3,4.19a9.59,9.59,0,0,0-1.09-.49" fill="#78d39d" />
                            <path d="M599.77,194.39l15.3-4.19.39.22c.21.13.43.27.64.42L600.79,195c-.21-.15-.42-.29-.64-.42s-.25-.15-.38-.22" fill="#74d4a1" />
                            <path d="M600.79,195l15.31-4.19c.3.22.6.46.9.71l-15.31,4.19a10,10,0,0,0-.9-.71" fill="#71d6a5" />
                            <path d="M601.69,195.74,617,191.55c.28.25.56.52.83.8l-15.3,4.18c-.27-.28-.55-.54-.84-.79" fill="#6ed7aa" />
                            <path d="M602.53,196.53l15.3-4.18a11.65,11.65,0,0,1,.8.9l-15.31,4.18c-.25-.31-.52-.61-.79-.9" fill="#6ad9ae" />
                            <path d="M603.32,197.43l15.31-4.18c.27.33.53.67.78,1l-15.3,4.19c-.25-.36-.52-.71-.79-1" fill="#67dbb2" />
                            <path d="M604.11,198.47l15.3-4.19c.28.39.54.81.8,1.23L604.9,199.7c-.25-.43-.52-.84-.79-1.23" fill="#64dcb6" />
                            <path d="M604.9,199.7l15.31-4.19c.29.51.57,1,.84,1.58l-15.31,4.18c-.26-.54-.54-1.07-.84-1.57" fill="#60debb" />
                            <path d="M605.74,201.27l15.31-4.18c.24.51.47,1,.68,1.58l-15.3,4.19q-.31-.81-.69-1.59" fill="#5ddfbf" />
                            <path d="M606.43,202.86l15.3-4.19a23.31,23.31,0,0,1,1.42,5.71l-15.31,4.19a23.07,23.07,0,0,0-1.41-5.71" fill="#59e1c3" />
                            <path d="M607.84,208.57l15.31-4.19c.08.72.12,1.46.13,2.19L608,210.75c0-.73-.06-1.46-.14-2.18" fill="#5ddfbf" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-78)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M589.51,134l15.31-4.19c0,.12,0,.24,0,.36l-15.31,4.19c0-.12,0-.24,0-.36" fill="#f6d77d" />
                            <path d="M589.5,134.36l15.31-4.19v.15l-15.31,4.19v-.15" fill="#f6d880" />
                          </g>
                        </g>
                      </g>
                      <polygon points="577.1 129.47 592.4 125.28 604.82 129.81 589.51 134 577.1 129.47" fill="#f3ce6d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-79)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M581.86,113.33l15.31-4.19a2.93,2.93,0,0,1,1.7.07l-15.3,4.19a3,3,0,0,0-1.71-.07" fill="#f2cc68" />
                            <path d="M583.57,113.4l15.3-4.19.11,0a3.87,3.87,0,0,1,.55.25l-15.31,4.18a5.22,5.22,0,0,0-.54-.24l-.11,0" fill="#f2cd6b" />
                            <path d="M584.22,113.68l15.31-4.18.19.11-15.3,4.18-.2-.11" fill="#f3ce6d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-80)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M584.42,113.79l15.3-4.18a2.2,2.2,0,0,1,.32.21L584.74,114l-.32-.22" fill="#f3ce6d" />
                            <path d="M584.74,114l15.3-4.19a5.37,5.37,0,0,1,.45.35l-15.3,4.19a4.58,4.58,0,0,0-.45-.35" fill="#f3d070" />
                            <path d="M585.19,114.36l15.3-4.19a5.33,5.33,0,0,1,.42.4l-15.3,4.19-.42-.4" fill="#f4d173" />
                            <path d="M585.61,114.76l15.3-4.19.4.45L586,115.21c-.13-.16-.27-.31-.4-.45" fill="#f4d275" />
                            <path d="M586,115.21l15.3-4.19c.14.17.27.34.4.52l-15.31,4.19-.39-.52" fill="#f5d478" />
                            <path d="M586.4,115.73l15.31-4.19c.13.2.27.41.39.62l-15.3,4.19c-.13-.22-.26-.42-.4-.62" fill="#f5d57b" />
                            <path d="M586.8,116.35l15.3-4.19c.15.26.29.52.43.79l-15.31,4.19c-.13-.27-.27-.54-.42-.79" fill="#f6d77d" />
                            <path d="M587.22,117.14,602.53,113c.12.26.23.52.34.8l-15.3,4.18c-.11-.27-.23-.53-.35-.79" fill="#f6d880" />
                            <path d="M587.57,117.93l15.3-4.18a11.42,11.42,0,0,1,.71,2.86l-15.31,4.18a12,12,0,0,0-.7-2.86" fill="#f7d983" />
                            <path d="M588.27,120.79l15.31-4.18c0,.36.06.73.07,1.09v.15L588.34,122v-.14a10.15,10.15,0,0,0-.07-1.1" fill="#f6d880" />
                            <path d="M588.34,122l15.31-4.18a8,8,0,0,1,0,.86l-15.3,4.19a8.19,8.19,0,0,0,0-.87" fill="#f6d77d" />
                            <path d="M588.3,122.9l15.3-4.19q0,.36-.09.69l-15.31,4.19c0-.22.08-.45.1-.69" fill="#f5d57b" />
                            <path d="M588.2,123.59l15.31-4.19a5.27,5.27,0,0,1-.14.6l-15.3,4.18a5.61,5.61,0,0,0,.13-.59" fill="#f5d478" />
                            <path d="M588.07,124.18l15.3-4.18a5.6,5.6,0,0,1-.17.54l-15.3,4.18c.06-.17.12-.35.17-.54" fill="#f4d275" />
                            <path d="M587.9,124.72l15.3-4.18a4.4,4.4,0,0,1-.21.5l-15.31,4.18c.08-.16.15-.32.22-.5" fill="#f4d173" />
                            <path d="M587.68,125.22,603,121a4.39,4.39,0,0,1-.27.47l-15.3,4.19a5.42,5.42,0,0,0,.26-.48" fill="#f3d070" />
                            <path d="M587.42,125.7l15.3-4.19a3.22,3.22,0,0,1-.34.46l-15.3,4.19a5.48,5.48,0,0,0,.34-.46" fill="#f3ce6d" />
                            <path d="M587.08,126.16l15.3-4.19a3.46,3.46,0,0,1-.48.46l-15.3,4.19a4.16,4.16,0,0,0,.48-.46" fill="#f2cd6b" />
                            <path d="M586.6,126.62l15.3-4.19a2.7,2.7,0,0,1-1,.49l-15.3,4.19a3,3,0,0,0,1-.49" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <path d="M584.42,113.79c2.19,1.32,3.89,4.73,3.92,8.1,0,3.75-2,6-4.53,5.11a3.8,3.8,0,0,1-.73-.36c-2.2-1.32-3.9-4.73-3.93-8.11,0-3.73,2-6,4.53-5.09A4.52,4.52,0,0,1,584.42,113.79Z" fill="#fbe498" />
                      <polygon points="596.19 142.62 611.5 138.43 611.67 155.84 596.36 160.02 596.19 142.62" fill="#f8dd8a" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-81)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M592.69,128.41l15.3-4.19a3.34,3.34,0,0,1,2,.09l-15.31,4.18a3.37,3.37,0,0,0-2-.08" fill="#f2cc68" />
                            <path d="M594.67,128.49,610,124.31l.13,0a5.24,5.24,0,0,1,.64.29l-15.31,4.18a5.78,5.78,0,0,0-.63-.28l-.14,0" fill="#f2cd6b" />
                            <path d="M595.44,128.82l15.31-4.18.22.13L595.67,129l-.23-.13" fill="#f3ce6d" />
                          </g>
                        </g>
                      </g>
                      <polygon points="596.19 142.62 611.5 138.43 615.7 139.96 600.39 144.15 596.19 142.62" fill="#f3b061" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-82)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M597,185.67l15.31-4.19c3.3,1.93,6.65,3.91,10.06,5.75l-15.3,4.19c-3.41-1.84-6.76-3.82-10.07-5.75" fill="#9c729a" />
                            <path d="M607.07,191.42l15.3-4.19a87.55,87.55,0,0,0,11,5.1l.19.07-15.3,4.19-.19-.07a86.91,86.91,0,0,1-11-5.1" fill="#9f7496" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-83)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M596.36,160l15.31-4.19a3.87,3.87,0,0,0,0,.48l-15.31,4.19a3.87,3.87,0,0,1,0-.48" fill="#f6d880" />
                            <path d="M596.39,160.5l15.31-4.19a4.9,4.9,0,0,0,.3,1.27l-15.31,4.18a5.38,5.38,0,0,1-.3-1.26" fill="#f7d983" />
                            <path d="M596.69,161.76,612,157.58a3.25,3.25,0,0,0,.18.43l-15.31,4.19-.18-.44" fill="#f6d880" />
                            <path d="M596.87,162.2,612.18,158c.06.12.12.24.19.36l-15.3,4.19c-.07-.12-.14-.24-.2-.36" fill="#f6d77d" />
                            <path d="M597.07,162.56l15.3-4.19.18.28-15.3,4.19a2.2,2.2,0,0,1-.18-.28" fill="#f5d57b" />
                            <path d="M597.25,162.84l15.3-4.19.18.24-15.3,4.18a1.3,1.3,0,0,1-.18-.23" fill="#f5d478" />
                            <path d="M597.43,163.07l15.3-4.18.18.2-15.3,4.19a1.68,1.68,0,0,1-.18-.21" fill="#f4d275" />
                            <path d="M597.61,163.28l15.3-4.19a1.57,1.57,0,0,0,.19.18l-15.3,4.19-.19-.18" fill="#f4d173" />
                            <path d="M597.8,163.46l15.3-4.19a1.58,1.58,0,0,0,.15.12c.67.52,1.34,1.06,2,1.63l-15.3,4.19c-.66-.57-1.32-1.12-2-1.63l-.14-.12" fill="#f3d070" />
                            <path d="M599.94,165.21l15.3-4.19c.94.82,1.87,1.7,2.77,2.64l-15.31,4.18c-.9-.93-1.82-1.81-2.76-2.63" fill="#f4d173" />
                            <path d="M602.7,167.84,618,163.66c.9.93,1.77,1.92,2.62,3l-15.3,4.18c-.85-1-1.73-2-2.63-3" fill="#f4d275" />
                            <path d="M605.33,170.8l15.3-4.18q1.33,1.62,2.58,3.39L607.9,174.2c-.83-1.19-1.68-2.32-2.57-3.4" fill="#f5d478" />
                            <path d="M607.9,174.2,623.21,170q1.35,1.94,2.6,4.05l-15.3,4.18q-1.25-2.1-2.61-4" fill="#f5d57b" />
                            <path d="M610.51,178.24l15.3-4.18c1,1.65,1.9,3.38,2.76,5.16l-15.31,4.19q-1.29-2.68-2.75-5.17" fill="#f6d77d" />
                            <path d="M613.26,183.41l15.31-4.19c.95,2,1.83,4.05,2.62,6.17l-15.31,4.19c-.79-2.12-1.66-4.19-2.62-6.17" fill="#f6d880" />
                            <path d="M615.88,189.58l15.31-4.19c.84,2.25,1.58,4.58,2.21,6.94l-15.3,4.19c-.63-2.37-1.38-4.69-2.22-6.94" fill="#f7d983" />
                          </g>
                        </g>
                      </g>
                      <polygon points="600.39 144.15 615.7 139.96 615.85 155.05 600.54 159.24 600.39 144.15" fill="#f9b479" />
                      <polygon points="589.5 134.51 604.81 130.32 615.58 134.26 600.28 138.45 589.5 134.51" fill="#f3ce6d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-84)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M595.67,129l15.3-4.18c.13.07.26.16.38.24l-15.3,4.19-.38-.25" fill="#f3ce6d" />
                            <path d="M596.05,129.2l15.3-4.19c.18.13.36.27.53.42l-15.3,4.19c-.18-.15-.35-.29-.53-.42" fill="#f3d070" />
                            <path d="M596.58,129.62l15.3-4.19c.17.15.33.31.49.47l-15.3,4.19c-.16-.17-.32-.32-.49-.47" fill="#f4d173" />
                            <path d="M597.07,130.09l15.3-4.19c.17.17.32.35.48.53l-15.31,4.19c-.15-.19-.31-.36-.47-.53" fill="#f4d275" />
                            <path d="M597.54,130.62l15.31-4.19c.15.2.31.4.45.61L598,131.23c-.15-.21-.3-.42-.46-.61" fill="#f5d478" />
                            <path d="M598,131.23,613.3,127c.17.23.32.48.47.73L598.47,132c-.15-.25-.31-.49-.47-.72" fill="#f5d57b" />
                            <path d="M598.47,132l15.3-4.18c.18.29.34.61.5.93L599,132.88c-.15-.32-.32-.63-.49-.93" fill="#f6d77d" />
                            <path d="M599,132.88l15.31-4.18c.16.33.31.68.44,1l-15.3,4.19c-.14-.36-.29-.7-.45-1" fill="#f6d880" />
                            <path d="M599.41,133.92l15.3-4.19a13.49,13.49,0,0,1,.8,3.3l-15.31,4.19a13.48,13.48,0,0,0-.79-3.3" fill="#f7d983" />
                            <path d="M600.2,137.22,615.51,133c0,.23,0,.47,0,.71s0,.35,0,.52l-15.3,4.19c0-.18,0-.35,0-.52s0-.48-.06-.71" fill="#f6d880" />
                          </g>
                        </g>
                      </g>
                      <path d="M595.67,129c2.46,1.48,4.39,5.19,4.59,9,0,.17,0,.34,0,.52l-10.78-3.94c0-.17,0-.34,0-.51.14-4.07,2.44-6.5,5.3-5.46A6.13,6.13,0,0,1,595.67,129Z" fill="#fbe498" />
                      <polygon points="600.26 137.93 615.57 133.74 617.74 134.53 602.43 138.72 600.26 137.93" fill="#f3ce6d" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-85)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M618.29,196.59l15.3-4.19a76.13,76.13,0,0,1,2,10.63l-15.31,4.19a75.81,75.81,0,0,0-2-10.63" fill="#8b66ba" />
                            <path d="M620.3,207.22,635.61,203a70.52,70.52,0,0,1,.47,8.26l-15.31,4.19a68.41,68.41,0,0,0-.47-8.26" fill="#8d68b6" />
                            <path d="M620.77,215.48l15.31-4.19c0,1.93-.1,3.82-.28,5.67l-15.31,4.18c.18-1.84.27-3.74.28-5.66" fill="#8f69b2" />
                            <path d="M620.49,221.14,635.8,217c-.15,1.55-.36,3.07-.64,4.55l-15.3,4.19q.4-2.22.63-4.56" fill="#926bae" />
                            <path d="M619.86,225.7l15.3-4.19c-.24,1.36-.54,2.68-.89,4L619,229.66q.52-1.93.9-4" fill="#946caa" />
                            <path d="M619,229.66l15.31-4.19-.33,1.16c-.26.84-.53,1.66-.82,2.44l-15.31,4.19c.29-.79.57-1.6.82-2.44.12-.38.23-.77.33-1.16" fill="#966ea6" />
                            <path d="M617.81,233.26l15.31-4.19c-.44,1.17-.91,2.28-1.42,3.32l-15.31,4.19a36,36,0,0,0,1.42-3.32" fill="#986fa2" />
                            <path d="M616.39,236.58l15.31-4.19a30.48,30.48,0,0,1-1.74,3.1l-15.3,4.19a31.55,31.55,0,0,0,1.73-3.1" fill="#9a719e" />
                            <path d="M614.66,239.68l15.3-4.19a24.85,24.85,0,0,1-2.23,3l-15.3,4.19a26.85,26.85,0,0,0,2.23-3" fill="#9c729a" />
                            <path d="M612.43,242.68l15.3-4.19a21.82,21.82,0,0,1-3.12,3l-15.3,4.18a21.71,21.71,0,0,0,3.12-3" fill="#9f7496" />
                            <path d="M609.31,245.65l15.3-4.18a18.39,18.39,0,0,1-6.42,3.25l-15.3,4.18a18.22,18.22,0,0,0,6.42-3.25" fill="#a17592" />
                          </g>
                        </g>
                      </g>
                      <path d="M600.39,144.15l.15,15.09c18.16,15.2,28.36,47.4,22.79,71.91C619,250.42,605.88,259.79,591,254.33a31.26,31.26,0,0,1-5.51-2.65c-16.41-9.86-29.13-35.35-29.38-60.6-.22-22,9.21-38,23.34-39.56l-.15-15.08,4.21,1.53.17,17.41c0,1.39-.61,2.38-1.52,2.42-9.24.33-16.23,7.45-19.61,18.27l-.22.07c-6.19,20.46,1.41,49.29,17,64.4a38.07,38.07,0,0,0,6.85,5.34c13.57,8.16,27.23,2.45,32.52-15.06,3-9.83,2.85-22.15-.34-34.23-3.88-13.88-11.28-26.1-20.35-33a4.77,4.77,0,0,1-1.58-3.56l-.17-17.4Z" fill="#fcb786" />
                      <path d="M618.29,196.59c3.19,12.08,3.31,24.4.34,34.23-5.29,17.51-19,23.22-32.52,15.06a38.07,38.07,0,0,1-6.85-5.34c-15.56-15.11-23.16-43.94-17-64.4l.22-.07c6.78-2.31,13.66-.83,20.73,2.27-1.8,1.8-2.91,4.93-2.87,8.87-5.06-1.84-9.11,2.71-9,10.17.07,6.72,3.45,13.51,7.82,16.14a9,9,0,0,0,1.47.71c3.4,1.24,6.49-.4,8-4.25a.8.8,0,0,1,1.24-.5,1.26,1.26,0,0,1,.32.26,2.64,2.64,0,0,1,.56,1c1.44,4.41,4,7.81,6.73,9.46a6.2,6.2,0,0,0,5.7.69c3-1.24,4.82-5.16,4.77-10.16-.07-6.72-3.46-13.51-7.83-16.14a8.26,8.26,0,0,0-1.47-.71,22.4,22.4,0,0,0-1.68-8.23c6.8,4,13.81,8.16,21.1,10.85ZM594.5,227.38c.55.2,1-.3,1-1.11a2.5,2.5,0,0,0-.3-1.16l-4.55-8.24a1.58,1.58,0,0,0-.55-.61.65.65,0,0,0-.87.09l-4.41,5a2,2,0,0,0,0,2.08,1.71,1.71,0,0,0,.56.62.56.56,0,0,0,.16.07l9,3.28" fill="#7a5adb" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-86)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M602.43,138.72l15.31-4.19.25.11-15.31,4.19-.25-.11" fill="#f2cd6b" />
                            <path d="M602.68,138.83,618,134.64l.09.05-15.31,4.19-.09,0" fill="#f3ce6d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-87)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M602.77,138.88l15.31-4.19.14.1L602.92,139l-.15-.1" fill="#f3ce6d" />
                            <path d="M602.92,139l15.3-4.19.21.16-15.3,4.19-.21-.16" fill="#f3d070" />
                            <path d="M603.13,139.14l15.3-4.19a1.7,1.7,0,0,1,.19.19l-15.3,4.18-.19-.18" fill="#f4d173" />
                            <path d="M603.32,139.32l15.3-4.18a1.71,1.71,0,0,1,.18.2l-15.3,4.19-.18-.21" fill="#f4d275" />
                            <path d="M603.5,139.53l15.3-4.19a1.88,1.88,0,0,1,.18.24l-15.3,4.19c-.06-.09-.12-.16-.18-.24" fill="#f5d478" />
                            <path d="M603.68,139.77l15.3-4.19c.07.09.13.19.19.28l-15.31,4.19-.18-.28" fill="#f5d57b" />
                            <path d="M603.86,140.05l15.31-4.19c.07.12.13.24.19.37l-15.3,4.18c-.06-.12-.13-.24-.2-.36" fill="#f6d77d" />
                            <path d="M604.06,140.41l15.3-4.18a3,3,0,0,1,.16.36l-15.31,4.19-.15-.37" fill="#f6d880" />
                            <path d="M604.21,140.78l15.31-4.19a5.13,5.13,0,0,1,.32,1.31l-15.3,4.18a5.17,5.17,0,0,0-.33-1.3" fill="#f7d983" />
                            <path d="M604.54,142.08l15.3-4.18a4,4,0,0,1,0,.49v.07l-15.3,4.19v-.07a4.32,4.32,0,0,0,0-.5" fill="#f6d880" />
                            <path d="M604.57,142.65l15.3-4.19a2.61,2.61,0,0,1,0,.4L604.55,143c0-.12,0-.26,0-.39" fill="#f6d77d" />
                            <path d="M604.55,143l15.3-4.18c0,.1,0,.21,0,.31l-15.3,4.19c0-.1,0-.21,0-.32" fill="#f5d57b" />
                            <path d="M604.51,143.36l15.3-4.19-.06.27-15.31,4.19a2.68,2.68,0,0,0,.07-.27" fill="#f5d478" />
                            <path d="M604.44,143.63l15.31-4.19a1.83,1.83,0,0,1-.08.25l-15.3,4.19.07-.25" fill="#f4d275" />
                            <path d="M604.37,143.88l15.3-4.19a2.29,2.29,0,0,1-.1.23l-15.3,4.18.1-.22" fill="#f4d173" />
                            <path d="M604.27,144.1l15.3-4.18a1.43,1.43,0,0,1-.12.21l-15.3,4.19.12-.22" fill="#f3d070" />
                            <path d="M604.15,144.32l15.3-4.19a1.91,1.91,0,0,1-.15.21L604,144.53a1.16,1.16,0,0,0,.16-.21" fill="#f3ce6d" />
                            <path d="M604,144.53l15.31-4.19a2.13,2.13,0,0,1-.22.21l-15.31,4.19a1.45,1.45,0,0,0,.22-.21" fill="#f2cd6b" />
                            <path d="M603.77,144.74l15.31-4.19a1.37,1.37,0,0,1-.45.23L603.33,145a1.08,1.08,0,0,0,.44-.22" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <path d="M602.77,138.88a4.56,4.56,0,0,1,1.8,3.7c0,1.72-.91,2.76-2.08,2.33l-2.1-.76-4.2-1.53.17,17.4a4.77,4.77,0,0,0,1.58,3.56c9.07,6.91,16.47,19.13,20.16,32.94-7.29-2.69-14.3-6.88-21.1-10.85a16.35,16.35,0,0,0-6.14-7.91,8.26,8.26,0,0,0-1.47-.71,5.57,5.57,0,0,0-6.15,1.29c-7.07-3.1-14-4.58-20.73-2.27,3.38-10.82,10.37-17.94,19.61-18.27.91,0,1.54-1,1.52-2.42L583.47,138l-4.21-1.53-2.1-.77a2.11,2.11,0,0,1-.34-.16A4.59,4.59,0,0,1,575,131.8c0-1.72.91-2.76,2.07-2.33L589.51,134c0,.17,0,.34,0,.51l10.78,3.94c0-.18,0-.35,0-.52l2.17.79A2.11,2.11,0,0,1,602.77,138.88Z" fill="#fbe498" />
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-88)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M600.54,159.24l15.31-4.19.71.61-15.3,4.19-.72-.61" fill="#f4b063" />
                            <path d="M601.26,159.85l15.3-4.19q1.65,1.44,3.19,3l-15.31,4.19c-1-1.07-2.09-2.09-3.18-3" fill="#f4b165" />
                            <path d="M604.44,162.89l15.31-4.19q1.54,1.61,3,3.38l-15.31,4.18c-1-1.17-2-2.3-3-3.37" fill="#f5b168" />
                            <path d="M607.44,166.26l15.31-4.18q1.5,1.83,2.9,3.83l-15.3,4.19c-.94-1.33-1.9-2.61-2.91-3.84" fill="#f5b26a" />
                            <path d="M610.35,170.1l15.3-4.19c1,1.48,2,3,3,4.61l-15.3,4.18c-.94-1.58-1.93-3.12-3-4.6" fill="#f6b26c" />
                            <path d="M613.31,174.7l15.3-4.18c1.11,1.87,2.15,3.82,3.11,5.82l-15.31,4.19c-1-2-2-3.95-3.1-5.83" fill="#f6b36e" />
                            <path d="M616.41,180.53l15.31-4.19c1,2.09,1.93,4.24,2.77,6.44L619.18,187c-.84-2.19-1.76-4.35-2.77-6.43" fill="#f7b371" />
                            <path d="M619.18,187l15.31-4.18a87.66,87.66,0,0,1,5.09,20.53l-15.3,4.19a87.88,87.88,0,0,0-5.1-20.54" fill="#f8b373" />
                            <path d="M624.28,207.5l15.3-4.19a78.85,78.85,0,0,1,.58,9.66l-15.31,4.18a78.66,78.66,0,0,0-.57-9.65" fill="#f7b371" />
                            <path d="M624.85,217.15,640.16,213c0,2.17-.11,4.33-.32,6.45l-15.3,4.19c.2-2.12.31-4.28.31-6.46" fill="#f6b36e" />
                            <path d="M624.54,223.61l15.3-4.19c-.17,1.74-.4,3.47-.71,5.16l-15.31,4.18c.31-1.69.55-3.41.72-5.15" fill="#f6b26c" />
                            <path d="M623.82,228.76l15.31-4.18c-.15.8-.31,1.6-.49,2.39s-.35,1.46-.54,2.17l-15.31,4.19c.19-.71.37-1.44.54-2.18s.34-1.58.49-2.39" fill="#f5b26a" />
                            <path d="M622.79,233.33l15.31-4.19c-.39,1.42-.82,2.77-1.3,4.06l-15.31,4.19c.48-1.29.92-2.65,1.3-4.06" fill="#f5b168" />
                            <path d="M621.49,237.39l15.31-4.19c-.49,1.31-1,2.56-1.6,3.74l-15.31,4.19a38.57,38.57,0,0,0,1.6-3.74" fill="#f4b165" />
                            <path d="M619.89,241.13l15.31-4.19a35,35,0,0,1-2,3.54l-15.31,4.19a35.26,35.26,0,0,0,2-3.54" fill="#f4b063" />
                            <path d="M617.91,244.67l15.31-4.19a29.91,29.91,0,0,1-2.54,3.41l-15.3,4.19a31.08,31.08,0,0,0,2.53-3.41" fill="#f3b061" />
                            <path d="M615.38,248.08l15.3-4.19a24.78,24.78,0,0,1-3.56,3.41l-15.31,4.18a25.29,25.29,0,0,0,3.57-3.4" fill="#f3b05f" />
                            <path d="M611.81,251.48l15.31-4.18a20.75,20.75,0,0,1-7.27,3.68l-15.31,4.18a20.58,20.58,0,0,0,7.27-3.68" fill="#f2af5c" />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g style={{isolation: 'isolate'}}>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-89)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M592.86,111.41l15.3-4.19a1.64,1.64,0,0,1,1,0l-15.31,4.19a1.6,1.6,0,0,0-.94,0" fill="#f2cc68" />
                            <path d="M593.8,111.45l15.31-4.19,0,0a2,2,0,0,1,.3.14l-15.31,4.18-.29-.13-.06,0" fill="#f2cd6b" />
                            <path d="M594.15,111.6l15.31-4.18.1.06-15.3,4.18-.11-.06" fill="#f3ce6d" />
                          </g>
                        </g>
                      </g>
                      <g style={{isolation: 'isolate'}}>
                        <g clipPath="url(#clip-path-90)">
                          <g style={{isolation: 'isolate'}}>
                            <path d="M594.26,111.66l15.3-4.18.18.11-15.3,4.19-.18-.12" fill="#f3ce6d" />
                            <path d="M594.44,111.78l15.3-4.19a2.43,2.43,0,0,1,.25.2L594.68,112l-.24-.2" fill="#f3d070" />
                            <path d="M594.68,112,610,107.79a2.39,2.39,0,0,1,.23.22l-15.3,4.19a2.4,2.4,0,0,0-.24-.22" fill="#f4d173" />
                            <path d="M594.92,112.2l15.3-4.19a2.62,2.62,0,0,1,.22.25l-15.3,4.18-.22-.24" fill="#f4d275" />
                            <path d="M595.14,112.44l15.3-4.18a3,3,0,0,1,.22.28l-15.31,4.19-.21-.29" fill="#f5d478" />
                            <path d="M595.35,112.73l15.31-4.19.22.34-15.31,4.19a4,4,0,0,0-.22-.34" fill="#f5d57b" />
                            <path d="M595.57,113.07l15.31-4.19c.08.14.16.29.23.44l-15.31,4.19c-.07-.15-.15-.3-.23-.44" fill="#f6d77d" />
                            <path d="M595.8,113.51l15.31-4.19c.07.14.13.29.19.44L596,113.94c-.06-.15-.12-.29-.19-.43" fill="#f6d880" />
                            <path d="M596,113.94l15.31-4.18a6.34,6.34,0,0,1,.39,1.57l-15.31,4.19a6,6,0,0,0-.39-1.58" fill="#f7d983" />
                            <path d="M596.38,115.52l15.31-4.19a6.08,6.08,0,0,1,0,.61.08.08,0,0,1,0,.07l-15.3,4.18v-.07a4,4,0,0,0,0-.6" fill="#f6d880" />
                            <path d="M596.42,116.19l15.3-4.18a3.85,3.85,0,0,1,0,.48l-15.3,4.18c0-.15,0-.31,0-.48" fill="#f6d77d" />
                            <path d="M596.4,116.67l15.3-4.18c0,.13,0,.26-.05.38l-15.31,4.19c0-.13,0-.25.06-.39" fill="#f5d57b" />
                            <path d="M596.34,117.06l15.31-4.19c0,.11,0,.22-.08.33l-15.3,4.18a3,3,0,0,0,.07-.32" fill="#f5d478" />
                            <path d="M596.27,117.38l15.3-4.18c0,.1-.06.2-.09.3l-15.31,4.18a2.11,2.11,0,0,0,.1-.3" fill="#f4d275" />
                            <path d="M596.17,117.68l15.31-4.18-.12.27L596.06,118a2.33,2.33,0,0,0,.11-.28" fill="#f4d173" />
                            <path d="M596.06,118l15.3-4.19a1.35,1.35,0,0,1-.15.26l-15.3,4.19.15-.26" fill="#f3d070" />
                            <path d="M595.91,118.22l15.3-4.19a1.6,1.6,0,0,1-.18.25l-15.31,4.19a2.35,2.35,0,0,0,.19-.25" fill="#f3ce6d" />
                            <path d="M595.72,118.47,611,114.28a1.66,1.66,0,0,1-.27.26l-15.3,4.18a1.52,1.52,0,0,0,.26-.25" fill="#f2cd6b" />
                            <path d="M595.46,118.72l15.3-4.18a1.54,1.54,0,0,1-.53.26L594.93,119a1.4,1.4,0,0,0,.53-.27" fill="#f2cc68" />
                          </g>
                        </g>
                      </g>
                      <path d="M594.26,111.66a5.52,5.52,0,0,1,2.16,4.46c0,2.06-1.09,3.32-2.49,2.81a2.49,2.49,0,0,1-.4-.2,5.48,5.48,0,0,1-2.16-4.45c0-2.07,1.09-3.31,2.49-2.81A2.42,2.42,0,0,1,594.26,111.66Z" fill="#fbe498" />
                    </g>
                  </g>
                  <ellipse cx="619.14" cy="189.98" rx="15.76" ry="37.66" transform="translate(-24.61 260.75) rotate(-23.33)" opacity="0.69" fill="url(#radial-gradient-193)" style={{mixBlendMode: 'color-dodge'}} />
                  <g style={{mixBlendMode: 'multiply'}}>
                    <path d="M627.22,168.31c-.14-.18-.27-.37-.41-.54s-.26-.28-.39-.43l-9.82,2.09c.16.19.33.34.5.54l.32.43Z" fill="#fdd65b" />
                    <path d="M620.24,159.92l-11.34,2.75a18,18,0,0,1,1.6,1l11.35-2.75C621.32,160.53,620.78,160.22,620.24,159.92Z" fill="#fdd65b" />
                    <path d="M631.07,174.64l-9.59,2.14c.19.33.36.68.54,1l9.59-2.15C631.43,175.32,631.26,175,631.07,174.64Z" fill="#fdd65b" />
                    <path d="M637.16,190.13l-9.8,2.25.27,1.11,9.8-2.25Z" fill="#fdd65b" />
                    <path d="M634.36,182.32l-9.44,2.16c.13.34.26.69.38,1l9.45-2.16Z" fill="#fdd65b" />
                    <path d="M639.13,198.32l-10.2,2.19c.07.38.12.77.17,1.16l10.2-2.19C639.24,199.09,639.19,198.7,639.13,198.32Z" fill="#fdd65b" />
                    <path d="M632.44,239.88l-11,2.66c-.45.59-.91,1.17-1.38,1.69L631,241.59C631.51,241.06,632,240.48,632.44,239.88Z" fill="#fdd65b" />
                    <path d="M626.29,233.35c-.19.52-.39,1-.59,1.51l11.07-2.68c.21-.49.4-1,.59-1.51Z" fill="#fdd65b" />
                    <path d="M639.42,223.52c.1-.48.23-1,.32-1.44l-11.11,2.69c-.09.48-.21.95-.31,1.44Z" fill="#fdd65b" />
                    <path d="M629.65,216.5c0,.47-.09.93-.12,1.4l11.12-2.69c0-.47.09-.93.13-1.4Z" fill="#fdd65b" />
                    <path d="M640.45,207c0-.45,0-.9,0-1.35l-10.71,2.84c0,.45,1.56-.43,1.56,0Z" fill="#fdd65b" />
                  </g>
                  <path d="M607.9,254c25.48-9.43,26.08-73.25-6.65-94.73C634.58,193.75,625.43,247,607.9,254Z" fill="url(#radial-gradient-194)" style={{mixBlendMode: 'color-dodge'}} />
                  <path d="M626.26,248.1c18.75-12,20.77-65.83-10.21-92.35C644.06,189.94,641.21,234.51,626.26,248.1Z" fill="url(#linear-gradient-302)" style={{mixBlendMode: 'multiply'}} />
                  <ellipse cx="601.25" cy="137.83" rx="10.35" ry="8.31" transform="translate(-9.01 227.71) rotate(-21.29)" opacity="0.69" fill="url(#radial-gradient-195)" style={{mixBlendMode: 'color-dodge'}} />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
  )
}

export default ThemeAnimation;
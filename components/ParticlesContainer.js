import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full absolute translate-z-0 z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover:{
              enable:true,
              mode:'repulse',
            },
            resize:true,
          },
          modes:{
            push:{
              quantity:10
            },
            repulse:{
              distance:100,
              duration:0.7,
            }
          }
        },
        particles:{
          color:{
            value:'#e68e2',
          },
          links:{
            color:'#f5d393',
            distance:100,
            enable:true,
            opacity:0.5,
            width:1
          },
          collisions:{
            enable:true,
          },
          move:{
            direction:'none',
            enable:true,
            outModes:{
              default:'bounce',
            },
            random:false,
            speed:0.25,
            straight:false
          },
          number:{
            density:{
              enable:true,
              area:1500
            },
            value:80
          },
          opaticity:{
            value:0.01,
          },
          shape:{
            type:'circle'
          },
          size:{
            value:{min:3,max:5},
          }
        },
        detectRetina:true,
      }}
    />
  );
};

export default ParticlesContainer;

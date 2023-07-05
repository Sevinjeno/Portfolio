import React, { useRef } from 'react'

import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader'





const Robo_obj = ({isMobile}) => {
  const modelRef = useRef();

    const lamp =useGLTF("./cyberpunk/scene.gltf")

    useEffect(()=>{
      const model = modelRef.current;

      // Move the model slightly
      model.position.y += 0.1;

    },[])
    return (
        <mesh ref={modelRef}>
       <directionalLight intensity={10} position={[-30,30,-10]} />
        
            <hemisphereLight intensity={2} groundColor="black"/>
            <pointLight intensity={2} />
            <spotLight
                position={[0,0,1]}
                angle={1}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
                />
              <primitive
                object={lamp.scene}
                scale={isMobile?1:0.015}
                position={isMobile?[0,0,0]:[0,0,0]}  
                // rotation={[-0.01,-0.2,-0.1]}
                >
                </primitive>
        </mesh>
    )
  }
  



const Robo = () => {

    const [isMobile,setIsMobile]=useState(false);

    useEffect(()=>{
      const mediaQuery=window.matchMedia('(max-width:500px)');
      setIsMobile(mediaQuery.matches);
      console.log(isMobile)
      const handleMediaQueryChange=(event)=>{
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',
      handleMediaQueryChange);
      console.log(isMobile)
  
      return()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
      }
  
    },[])


    return(
        <Canvas className='canvas_robo' style={{height:"1000px",width:"600px"}}
          frameloop='demand'
           shadows
            camera={{position:[15,1,5],fov:25}}  //position zoom in and out of object
            gl={{preserveDrawingBuffer:true}}
            >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls 
                 autoRotate
                 autoRotateSpeed={3} 
                 enableZoom={false}
                 maxPolarAngle={Math.PI/2}  //upside drag not enable
                 minPolarAngle={Math.PI/2}  //downside drage not enable
                //  minAzimuthAngle={-Math.PI /2} // Adjust this value to limit the left rotation
                //  maxAzimuthAngle={Math.PI /1} // Adjust this value to limit the right rotation
                 //these two make sure it show rotate only around x axis
                 />
                <Robo_obj isMobile={isMobile} /> 
            </Suspense>
           <Preload all />
        </Canvas>
      )
}

export default Robo
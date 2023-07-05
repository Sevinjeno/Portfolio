import React from 'react'

import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from './Loader'



const Moon_obj = ({isMobile}) => {
    const lamp =useGLTF("./moon2/scene.gltf")
    return (
        <mesh>
       {/* <directionalLight intensity={10} position={[-30,30,-10]} /> */}
        
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
                scale={isMobile?1:3}
                // position={isMobile?[0,0,0]:[6,1.5,4]}  
                // rotation={[-0.01,-0.2,-0.1]}
                >
                </primitive>
        </mesh>
    )
  }
  



const Moon = () => {
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
        <Canvas className='canvas_container' style={{height:"400px"}}
          frameloop='demand'
           shadows
            camera={{position:[20,3,5],fov:25}}  //position zoom in and out of object
            gl={{preserveDrawingBuffer:true}}
            >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls 
                 autoRotate
                //  autoRotateSpeed={3} 
                 enableZoom={false}
                 maxPolarAngle={Math.PI/2}  //upside drag not enable
                 minPolarAngle={Math.PI/2}  //downside drage not enable
                //  minAzimuthAngle={-Math.PI /2} // Adjust this value to limit the left rotation
                //  maxAzimuthAngle={Math.PI /1} // Adjust this value to limit the right rotation
                 //these two make sure it show rotate only around x axis
                 />
                <Moon_obj isMobile={isMobile} /> 
            </Suspense>
           <Preload all />
        </Canvas>
      )
}

export default Moon
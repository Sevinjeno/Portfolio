import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {Suspense} from 'react'

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth=useGLTF('./earth/scene.gltf')
  return (
    <mesh>
       <directionalLight intensity={2} position={[10,10,0]} />
    <hemisphereLight intensity={2} groundColor="black"/>
    <pointLight intensity={10} />
    <spotLight
        position={[-20,50,10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive
        object={earth.scene}
        scale={2}
        // scale={isMobile?0.7:0.75}
        // position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
        // rotation={[-0.01,-0.2,-0.6]}
        position={[0.2,0.1,0.2]}
        >
        </primitive>
 </mesh>
  )
}

const EarthCanvas =()=>{
  return(
    <Canvas 
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer:true }}
    // camera={{position:[20,3,5], fov:25}}
    // camera={{
    //   fov:45,
    //   near:2,
    //   far:0,
    //   position:[1,3,0]
    // }}
    >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
         autoRotate
         enableZoom={false}
         maxPolarAngle={Math.PI/2}
         minPolarAngle={Math.PI/2}
         />
         <Earth />
    </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
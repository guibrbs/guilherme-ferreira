import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import {
  OrbitControls,
  Bounds,
  BakeShadows,
  Shadow,
  ContactShadows,
} from '@react-three/drei'

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/source/harry_potter_loypoly_room.glb')
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.x = (Math.cos(t / 2)) / 30
        ref.current.rotation.z = (Math.sin(t / 2)) / 60
    })
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} ref={ref}/>
      </Suspense>
    )
}
export function Model3D(){
    return(
        <Canvas
            orthographic
            shadows
            dpr={[1, 2]}
            camera={{ position: [10, 10, 10], zoom: 10 }}
          >
            <ambientLight intensity={0.01} />
            <hemisphereLight
              intensity={0.125}
              color="#8040df"
              groundColor="red"
            />
            <spotLight
              castShadow
              color="orange"
              intensity={2}
              position={[-50, 50, 40]}
              angle={0.25}
              penumbra={1}
              shadow-mapSize={[128, 128]}
              shadow-bias={0.00005}
            />
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={1}>
                <Model />
              </Bounds>
              <BakeShadows />
            </Suspense>
            <ContactShadows position={[0, -0.75, 0]} opacity={0.4} scale={10} blur={1.5} far={0.8} />
            <OrbitControls
              makeDefault
              minAzimuthAngle={0}
              maxAzimuthAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
              enableZoom={true}
              enablePan={true}
              zoomSpeed={0.3}
              
            />
            <mesh
              scale={200}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -4, 0]}
              receiveShadow
            >
              <planeGeometry />
              <shadowMaterial transparent opacity={0.3} />
            </mesh>
          </Canvas>
    )
}
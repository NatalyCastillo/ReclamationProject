import {Canvas} from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from 'react-responsive';
import {VRHead} from "./VRHead";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query : '(max-width:1024px'});
    const isMobile = useMediaQuery({ query : '(max-width: 768px'});

    return (
        <Canvas camera = {{position: [5,0,15], fov: 45}}>
        <ambientLight intensity = {1} colors = "#1a1a40" />
            <directionalLight postion ={[4, 4, 4]} intensity = {1}/>
            <OrbitControls
                enablePan = {false}
                enablezoom = {!isTablet}
                maxDistance = {20}
                minDistance = {5}
                minPolarAngle = {Math.PI / 5}
                maxPolarAngle = {Math.PI / 3}
            />

            <group>
                scale = {isMobile? 0.7 :1}
                position = {[0, -3.5, 0]}
                rotation = {[0,-Math.PI / 4, 0]}
                <VRHead scale = {0.15} />
            </group>

        </Canvas>
    )
}
export default HeroExperience

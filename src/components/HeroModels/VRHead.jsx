import { useGLTF } from '@react-three/drei'

export function VRHead (props) {
  const { nodes, materials } = useGLTF('/models/photogrammetry_with_vr_headset.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Steel_-_Satin']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/photogrammetry_with_vr_headset.glb')

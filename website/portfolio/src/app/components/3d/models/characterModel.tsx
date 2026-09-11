"use client";

import { useGLTF } from "@react-three/drei";
const MODEL_PATH = "/3dModels/mannetje.glb";
useGLTF.preload(MODEL_PATH);
const CharacterModel = () => {
    const { scene } = useGLTF(MODEL_PATH);
    return <primitive object={scene} scale={0.5} rotation={[0,1.2,0]} />;
};

export default CharacterModel;
"use client";

import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/3dModels/piano5.glb";

useGLTF.preload(MODEL_PATH);

const PianoModel = () => {
    const { scene } = useGLTF(MODEL_PATH);

    return (
        <primitive
            object={scene}
            scale={3.5}
            rotation={[0, -2, 0]}
        />
    );
};

export default PianoModel;
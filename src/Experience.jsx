import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {
    Bloom,
    Noise,
    Glitch,
    ToneMapping,
    EffectComposer,
    Vignette,
    DepthOfField,
} from '@react-three/postprocessing'
import { ToneMappingMode, BlendFunction, GlitchMode } from 'postprocessing'

export default function Experience() {
    return (
        <>
            <color args={['#ffffff']} attach='background' />

            <EffectComposer>
                {/* <Vignette
                    offset={0.3}
                    darkness={0.9}
                    // blendFunction={BlendFunction.COLOR_BURN}
                /> */}
                {/* <Glitch
                    delay={[1, 3]}
                    duration={[0.1, 0.5]}
                    strength={[0.4, 0.8]}
                    mode={GlitchMode.SPORADIC}
                /> */}
                {/* <Noise
                premultiply
                blendFunction={BlendFunction.SOFT_LIGHT}
                /> */}
                {/* <Bloom luminanceThreshold={1.1} mipmapBlur intensity={2} /> */}
                {/* <DepthOfField
                    focusDistance={0.025}
                    focalLength={0.025}
                    bokehScale={6}
                /> */}

                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            </EffectComposer>

            <Perf position='top-left' />

            <OrbitControls makeDefault />

            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <mesh castShadow position-x={-2}>
                <sphereGeometry />
                <meshStandardMaterial color='orange' />
            </mesh>

            <mesh castShadow position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color='mediumpurple' />
                {/* <meshBasicMaterial color={[5, 2, 1]} toneMapped={false} /> */}
            </mesh>

            <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}

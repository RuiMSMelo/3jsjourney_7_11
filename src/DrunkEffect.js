import { Effect, BlendFunction } from 'postprocessing'
import { Uniform } from 'three'
import { update } from 'three/examples/jsm/libs/tween.module.js'

const fragmentShader = `
    uniform float frequency;
    uniform float amplitude;
    uniform float offset;

    void mainUv(inout vec2 uv) {
        uv.y += sin(uv.x * frequency + offset) * amplitude;
    }
    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
    {
        outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
    }
`

export default class DrunkEffect extends Effect {
    constructor({
        frequency,
        amplitude,
        blendFunction = BlendFunction.DARKEN, // default = BlendFunction.DARKEN
    }) {
        super('DrunkEffect', fragmentShader, {
            blendFunction: blendFunction,
            uniforms: new Map([
                ['frequency', new Uniform(frequency)], // new way with Uniform from THREE
                ['amplitude', { value: amplitude }], // old way with native JS
                ['offset', new Uniform(0)],
            ]),
        })
    }

    update(renderer, inputBuffer, deltaTime) {
        this.uniforms.get('offset').value += deltaTime
    }
}

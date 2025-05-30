import DrunkEffect from './DrunkEffect.js'

export default function Drunk(props, ref) {
    const effect = new DrunkEffect(props)

    return <primitive ref={props.ref} object={effect} />
}

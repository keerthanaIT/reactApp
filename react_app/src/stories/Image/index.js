const WImage = (props) => {
    const {src, className} = props
    return <img {...props} src={src} preview={false} className={`${className} h-full w-full`} />
}

export default WImage
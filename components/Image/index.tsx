export function Image({ src, ...props }: JSX.IntrinsicElements["img"]) {
  try {
    return (
      <picture>
        <source srcSet={require(`../../static-files/${src}?resize&format=webp`).srcSet} type="image/webp" />
        <source srcSet={require(`../../static-files/${src}`)} type="image/jpeg" />
        <img src={require(`../../static-files/${src}`)} {...props} />
      </picture>
    )
  } catch {
    return null
  }
}
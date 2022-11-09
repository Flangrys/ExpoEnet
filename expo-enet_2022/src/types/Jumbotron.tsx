export type JumbotronProp = {
    revDisplay?: boolean 
    header: string
    body: string
    img: {source: string, alt: string}
    btn: {callback: () => {}, label: string}
}
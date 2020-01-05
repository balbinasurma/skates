export type mobileMenuOpenStateType = [mobileMenuOpenType, setMobileMenuOpenType]
export type mobileMenuOpenType = any | true | false
export type setMobileMenuOpenType = React.Dispatch<React.SetStateAction<mobileMenuOpenType>>

export type themeContextObjectType = {headerItemHeight: any}

export type themeContextType = React.Context<themeContextObjectType | {}>

import React from 'react'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName: any = {
    en: "English",
    ko: "한국어",
}

export default function Language() {
    return (
        <>
            <div className={'language'}>
                <span className={'language-img'}></span>
                <div className={'language-content'}>
                    <div className={'language-box'}>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }: any) =>
                                languages.map((language: any) => (
                                    <span
                                        key={language}
                                        onClick={() => changeLocale(language)}
                                        className={currentLocale === language ? 'current' : ''}
                                    >
                                        {languageName[language]}
                                    </span>
                                ))
                            }
                        </IntlContextConsumer>
                    </div>
                </div>
                <p>Languages</p>
            </div>
        </>
    )
}



import React from 'react'
import { useIntl, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName: any = {
    en: "English",
}

export default function Language() {
    const intl = useIntl();

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
                <p>{intl.formatMessage({ id: "Languages" })}</p>
            </div>
        </>
    )
}



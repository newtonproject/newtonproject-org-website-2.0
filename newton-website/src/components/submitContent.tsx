import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

export default function SubmitContent() {
  const intl = useIntl()
  return (
    <>
      <div className={'ecosystem-submit'}>
        <a href="https://github.com/newtonproject/ecosystem-projects" target="_blank">
          {/* <i className={'submit'}>{intl.formatMessage({ id: 'Submit Your project' })}</i> */}
          <span className={'add-content'}>{intl.formatMessage({ id: 'Create a Newton Community With Us' })}</span>
          <i className={'add-community'}>{intl.formatMessage({ id: 'Add Community' })}</i>
        </a>
      </div>
    </>
  )
}

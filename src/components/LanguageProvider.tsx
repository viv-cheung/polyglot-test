import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useEffect } from 'react'

export const DEFAULT_LOCALE = 'en'

type LanguageProviderProps = {
  children: React.ReactNode
}

export const dynamicActivate = async (locale: string) => {
  const { messages } = await import(`../locales/${locale}/messages.json?lingui`)

  i18n.load(locale, messages)
  i18n.activate(locale)
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  useEffect(() => {
    dynamicActivate(DEFAULT_LOCALE)
  }, [])

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

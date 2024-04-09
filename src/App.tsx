import './global.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Trans } from '@lingui/macro'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { useEffect } from 'react'

const DEFAULT_LOCALE = 'en'

const dynamicActivate = async (locale: string) => {
  const { messages } = await import(`./locales/${locale}/messages.json`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

const locales = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  // { label: 'Portuguese', value: 'pt' },
  // { label: 'Russian', value: 'ru' },
  // { label: 'Japanese', value: 'ja' },
  // { label: 'Korean', value: 'ko' },
  // { label: 'Chinese', value: 'zh' },
] as const

function App() {
  useEffect(() => {
    dynamicActivate(DEFAULT_LOCALE)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <div className="m-4">
        <div className="flex justify-end mb-4">
          <Select defaultValue={DEFAULT_LOCALE} onValueChange={dynamicActivate}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {locales.map(locale => (
                <SelectItem key={locale.value} value={locale.value}>
                  {locale.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              <Trans>Hello!</Trans>
            </CardTitle>
            <CardDescription>
              <Trans>This is a test application.</Trans>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Trans>Change the language above to see the text change.</Trans>
          </CardContent>
        </Card>
      </div>
    </I18nProvider>
  )
}

export default App

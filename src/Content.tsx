import { Trans, t } from '@lingui/macro'
import {
  AppleIcon,
  CarIcon,
  HeartIcon,
  MoonIcon,
  SmileIcon,
  SnowflakeIcon,
  SunIcon,
  TreeDeciduousIcon,
  UmbrellaIcon,
} from 'lucide-react'
import { DEFAULT_LOCALE, dynamicActivate } from './components/LanguageProvider'
import { useTheme } from './components/ThemeProvider'
import { Button } from './components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import { Card, CardHeader, CardTitle } from './components/ui/card'
// import { Input } from './components/ui/input'

const locales = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Español', value: 'es' },
] as const

export const Content = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="m-4">
        <div className="flex justify-end mb-4 gap-2 ">
          {/* <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t`Search...`}
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div> */}

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
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              console.log('Setting theme....')
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
          >
            {theme === 'light' ? <SunIcon size="16" /> : <MoonIcon size="16" />}
          </Button>
        </div>

        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Polyglot
          </h1>

          <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
            <Trans>Advanced translation with easy Github integration.</Trans>
          </span>
        </section>

        <div className="grid grid-cols-3 gap-4">
          <Tile icon={SunIcon} title={t`Sun`} />
          <Tile icon={MoonIcon} title={t`Moon`} />
          <Tile icon={AppleIcon} title={t`Apple`} />
          <Tile icon={TreeDeciduousIcon} title={t`Tree`} />
          <Tile icon={CarIcon} title={t`Car`} />
          <Tile icon={UmbrellaIcon} title={t`Umbrella`} />
          <Tile icon={SnowflakeIcon} title={t`Snow`} />
          <Tile icon={SmileIcon} title={t`Happy`} />
          <Tile icon={HeartIcon} title={t`Love`} />

          {/* <Card>
            <CardHeader className="flex flex-col items-center w-full gap-2">
              <SunIcon size="48" className="text-muted-foreground" />
              <CardTitle className="text-3xl">
                <Trans>Sun</Trans>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center w-full gap-2">
              <MoonIcon size="48" className="text-muted-foreground" />
              <CardTitle className="text-3xl">
                <Trans>Moon</Trans>
              </CardTitle>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </div>
  )
}

interface TileProps {
  icon: React.ComponentType<any>
  title: string
}

const Tile = (props: TileProps) => {
  const { icon: Icon, title } = props

  return (
    <Card>
      <CardHeader className="flex flex-col items-center w-full gap-2">
        <Icon className="text-muted-foreground" size="48" />
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
    </Card>
  )
}

import type { LinguiConfig } from '@lingui/conf'
import { formatter } from '@lingui/format-json'

const config: LinguiConfig = {
  locales: ['en', 'fr', 'es', 'de'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: formatter(),
  compileNamespace: 'ts',
}

export default config

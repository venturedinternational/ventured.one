import PublicLayout from 'layouts/Public'
import PublicPages from './PublicPages'

export default (store) => ({
  path        : '/',
  component   : PublicLayout,
  indexRoute  : PublicPages(store).indexRoute,
  childRoutes : PublicPages(store).childRoutes,
})

import Public from 'layouts/Public'
import HomePage from './HomePage'
// import TokenSalePage from './TokenSalePage'
import TermsPage from './TermsPage'
import NewsPage from './NewsPage'
import CompanyPage from './CompanyPage'

export default (store) => ({
  path        : '/',
  component   : Public,
  indexRoute  : HomePage,
  childRoutes : [
    CompanyPage(),
    // TokenSalePage(),
    TermsPage(),
    NewsPage(),
  ]
})

import beforeAndAfterPage from './documents/beforeAndAfterPage'
import home from './documents/home'
import services from './documents/services'
import servicesPage from './documents/servicesPage'
import beforeAndAfter from './objects/beforeAndAfter'
import card from './objects/card'
import customImage from './objects/customImage'
import project from './objects/project'
import testimonial from './objects/testimonial'
import title from './objects/title'
import basic from './sections/basic'
import cta from './sections/cta'
import hero from './sections/hero'
import ourWork from './sections/ourWork'
import testimonials from './sections/testimonials'
import threeCards from './sections/threeCards'

export const schemaTypes = [
  // Objects
  title,
  customImage,
  project,
  testimonial,
  card,
  beforeAndAfter,
  // Sections
  hero,
  ourWork,
  testimonials,
  cta,
  threeCards,
  basic,
  // Pages
  home,
  servicesPage,
  services,
  beforeAndAfterPage,
]

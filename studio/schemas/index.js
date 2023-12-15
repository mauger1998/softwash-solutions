import home from './documents/home'
import services from './documents/services'
import servicesPage from './documents/servicesPage'
import card from './objects/card'
import customImage from './objects/customImage'
import project from './objects/project'
import testimonial from './objects/testimonial'
import title from './objects/title'
import cta from './sections/cta'
import hero from './sections/hero'
import ourWork from './sections/ourWork'
import threeCard from './sections/services/threeCard'
import threeCardImage from './sections/services/threeCardImage'
import testimonials from './sections/testimonials'
import threeCards from './sections/threeCards'

export const schemaTypes = [
  // Objects
  title,
  customImage,
  project,
  testimonial,
  card,
  // Sections
  hero,
  ourWork,
  testimonials,
  cta,
  threeCard,
  threeCardImage,
  threeCards,
  // Pages
  home,
  servicesPage,
  services,
]

// A két célcsoportnak saját URL-je van, így a nézet megosztható és a vissza gomb is működik.
export const AUDIENCE_PATHS = {
  business: '/',
  private: '/maganszemelyeknek',
}

export const audienceFromPath = (pathname) =>
  pathname === AUDIENCE_PATHS.private ? 'private' : 'business'

export const isAudiencePath = (pathname) =>
  pathname === AUDIENCE_PATHS.business || pathname === AUDIENCE_PATHS.private

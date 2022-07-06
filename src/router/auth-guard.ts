import Cookies from 'js-cookie'
import { nextTick } from 'vue'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const accessToken = Cookies.get('access_token')
  if (!accessToken) {
    return next({ name: 'login' })
  }
  next()
}

import { AppRouter } from './AppRouter'
import { AuthRouter } from './AuthRouter'
import { UnconRouter } from './UnconRouter'

export const MainRouter = AppRouter.concat(AuthRouter, UnconRouter)

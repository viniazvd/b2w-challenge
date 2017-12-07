import { routes as app } from '../app'

const root = [ { path: '/', redirect: '/wellcome' } ]

export default [ ...root, ...app ]

process.env.NODE_ENV = 'test'

import { expect as chaiExpect } from 'chai'
import sinonModule from 'sinon'

export const sinon = sinonModule
export const expect = chaiExpect

afterEach(() => {
  sinon.restore()
})


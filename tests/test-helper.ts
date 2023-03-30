process.env.NODE_ENV = 'test'

import chai from 'chai'
import sinonModule from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(sinonChai)
chai.use(chaiAsPromised)

export const sinon = sinonModule
export const expect = chai.expect

afterEach(() => {
  sinon.restore()
})


import { Percent, V2_FACTORY_ADDRESSES } from '@egiftcard/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x0f995f2ca5ec1013c2611e9cc5e09e2cfd3aa1f47685d2a88cc59b5247449b25'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)

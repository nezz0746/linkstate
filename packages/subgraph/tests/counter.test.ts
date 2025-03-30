import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { NumberChanged } from "../generated/schema"
import { NumberChanged as NumberChangedEvent } from "../generated/Counter/Counter"
import { handleNumberChanged } from "../src/counter"
import { createNumberChangedEvent } from "./counter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newNumber = BigInt.fromI32(234)
    let newNumberChangedEvent = createNumberChangedEvent(newNumber)
    handleNumberChanged(newNumberChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NumberChanged created and stored", () => {
    assert.entityCount("NumberChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NumberChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newNumber",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

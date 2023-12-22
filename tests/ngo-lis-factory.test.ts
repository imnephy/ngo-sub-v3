import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { NGOCreated } from "../generated/schema"
import { NGOCreated as NGOCreatedEvent } from "../generated/NgoLisFactory/NgoLisFactory"
import { handleNGOCreated } from "../src/ngo-lis-factory"
import { createNGOCreatedEvent } from "./ngo-lis-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _name = "Example string value"
    let _imageLink = "Example string value"
    let _description = "Example string value"
    let _link = "Example string value"
    let _rewardsOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _ngoAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newNGOCreatedEvent = createNGOCreatedEvent(
      _name,
      _imageLink,
      _description,
      _link,
      _rewardsOwner,
      _ngoAddress
    )
    handleNGOCreated(newNGOCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NGOCreated created and stored", () => {
    assert.entityCount("NGOCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "Example string value"
    )
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_imageLink",
      "Example string value"
    )
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_description",
      "Example string value"
    )
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_link",
      "Example string value"
    )
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_rewardsOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NGOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_ngoAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

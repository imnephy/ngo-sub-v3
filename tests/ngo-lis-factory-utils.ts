import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NGOCreated } from "../generated/NgoLisFactory/NgoLisFactory"

export function createNGOCreatedEvent(
  _name: string,
  _imageLink: string,
  _description: string,
  _link: string,
  _rewardsOwner: Address,
  _ngoAddress: Address
): NGOCreated {
  let ngoCreatedEvent = changetype<NGOCreated>(newMockEvent())

  ngoCreatedEvent.parameters = new Array()

  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_imageLink", ethereum.Value.fromString(_imageLink))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromString(_description)
    )
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam("_link", ethereum.Value.fromString(_link))
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_rewardsOwner",
      ethereum.Value.fromAddress(_rewardsOwner)
    )
  )
  ngoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_ngoAddress",
      ethereum.Value.fromAddress(_ngoAddress)
    )
  )

  return ngoCreatedEvent
}

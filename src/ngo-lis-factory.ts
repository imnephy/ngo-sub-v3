import { NGOCreated as NGOCreatedEvent } from "../generated/NgoLisFactory/NgoLisFactory"
import { NGOCreated } from "../generated/schema"
import { NgoLisSource } from "../generated/templates"

export function handleNGOCreated(event: NGOCreatedEvent): void {
  NgoLisSource.create(event.params._ngoAddress)

  let entity = new NGOCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._imageLink = event.params._imageLink
  entity._description = event.params._description
  entity._location = event.params._location
  entity._link = event.params._link
  entity._rewardsOwner = event.params._rewardsOwner
  entity._ngoAddress = event.params._ngoAddress

  entity._blockNumber = event.block.number
  entity._timestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

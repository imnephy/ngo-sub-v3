import {
  Claimed,
  NGOCreated,
  Staked,
  NGOFinished,
  RewardsUpdated,
  WithdrawRequested,
  WithdrawClaimed,
} from "./../generated/templates/NgoLis/NgoLis"
import {
  NGOLisCreated,
  NgoLisClaimed,
  NgoLisFinished,
  NgoLisRewardsUpdated,
  NgoLisStaked,
  NgoLisWithdrawClaimed,
  NgoLisWithdrawRequested,
} from "../generated/schema"

export function handleNGOCreated(event: NGOCreated): void {
  const ngoCreate = new NGOLisCreated(event.transaction.hash)
  ngoCreate._description = event.params._description
  ngoCreate._imageLink = event.params._imageLink
  ngoCreate._link = event.params._link
  ngoCreate._name = event.params._name
  ngoCreate._ngoAddress = event.params._ngoAddress
  ngoCreate._rewardsOwner = event.params.rewardsOwner

  ngoCreate.save()
}
export function handleClaimed(event: Claimed): void {
  const ngoClaim = new NgoLisClaimed(event.transaction.hash)
  ngoClaim._eth = event.params._eth
  ngoClaim._staker = event.params._staker

  ngoClaim.save()
}
export function handleNGOFinished(event: NGOFinished): void {
  const ngoFinished = new NgoLisFinished(event.transaction.hash)
  ngoFinished._ngo = event.params._ngo
  ngoFinished._timestamp = event.params._timestamp

  ngoFinished.save()
}

export function handleRewardsUpdated(event: RewardsUpdated): void {
  const ngoRewardsUpdated = new NgoLisRewardsUpdated(
    event.transaction.hash
  )
  ngoRewardsUpdated._dateRecountRewards =
    event.params._dateRecountRewards
  ngoRewardsUpdated._rewardsPool = event.params._rewardsPool
  ngoRewardsUpdated._stakedBalance = event.params._stakedBalance
  ngoRewardsUpdated._totalShare = event.params._totalShare

  ngoRewardsUpdated.save()
}
export function handleStaked(event: Staked): void {
  const ngoStaked = new NgoLisStaked(event.transaction.hash)
  ngoStaked._amountStaked = event.params._amountStaked
  ngoStaked._duration = event.params._duration
  ngoStaked._ngo = event.params._ngo
  ngoStaked._staker = event.params._staker
  ngoStaked._percentShare = event.params._percentShare
  ngoStaked._startDate = event.params._startDate

  ngoStaked.save()
}
export function handleWithdrawClaimed(event: WithdrawClaimed): void {
  const ngoWithdrawClaimed = new NgoLisWithdrawClaimed(
    event.transaction.hash
  )
  ngoWithdrawClaimed._amount = event.params._amount
  ngoWithdrawClaimed._claimer = event.params._claimer
  ngoWithdrawClaimed._ngo = event.params._ngo
  ngoWithdrawClaimed._requestId = event.params._requestId

  ngoWithdrawClaimed.save()
}
export function handleWithdrawRequested(
  event: WithdrawRequested
): void {
  const ngoWithdrawRequested = new NgoLisWithdrawRequested(
    event.transaction.hash
  )
  ngoWithdrawRequested._ngo = event.params._ngo
  ngoWithdrawRequested._requestId = event.params._requestId
  ngoWithdrawRequested._staker = event.params._staker

  ngoWithdrawRequested.save()
}

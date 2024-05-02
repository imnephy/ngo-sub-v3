import {
  NgoLisFinished,
  NgoLisRewardsUpdated,
  NgoLisStaked,
  NgoLisWithdrawClaimed,
  NgoLisWithdrawRequested,
} from "../generated/schema"
import {
  NGOFinished,
  RewardsUpdated,
  Staked,
  WithdrawClaimed,
  WithdrawRequested,
} from "../generated/templates/NgoLisSource/NgoLis"

export function handleNGOFinished(event: NGOFinished): void {
  const ngoFinished = new NgoLisFinished(event.transaction.hash)
  ngoFinished._ngo = event.params._ngo
  ngoFinished._blockNumber = event.block.number
  ngoFinished._timestamp = event.block.timestamp
  ngoFinished.save()
}

export function handleRewardsUpdated(event: RewardsUpdated): void {
  const ngoRewardsUpdated = new NgoLisRewardsUpdated(
    event.transaction.hash
  )
  ngoRewardsUpdated._dateRecountRewards =
    event.params._dateRecountRewards
  ngoRewardsUpdated._rewardsPool = event.params._rewardsPool
  ngoRewardsUpdated._stakedBalance = event.params.stakedBalance
  ngoRewardsUpdated._totalShare = event.params.totalShare
  ngoRewardsUpdated._blockNumber = event.block.number
  ngoRewardsUpdated._timestamp = event.block.timestamp
  ngoRewardsUpdated.save()
}
export function handleStaked(event: Staked): void {
  const ngoStaked = new NgoLisStaked(event.transaction.hash)
  ngoStaked._amountStaked = event.params._amountStaked
  ngoStaked._stakeId = event.params._id
  ngoStaked._ngo = event.params._ngo
  ngoStaked._staker = event.params._staker
  ngoStaked._percentShare = event.params._percentShare
  ngoStaked._startDate = event.params._startDate
  ngoStaked._blockNumber = event.block.number
  ngoStaked._timestamp = event.block.timestamp

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
  ngoWithdrawClaimed._blockNumber = event.block.number
  ngoWithdrawClaimed._timestamp = event.block.timestamp
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
  ngoWithdrawRequested._stakeId = event.params._stakeId
  ngoWithdrawRequested._staker = event.params._staker
  ngoWithdrawRequested._blockNumber = event.block.number
  ngoWithdrawRequested._timestamp = event.block.timestamp
  ngoWithdrawRequested.save()
}

import { WithdrawEvent } from "../generated/schema";
import { WithdrawEvent as WithdrawEventEvent } from "../generated/PeanutV4/PeanutV4";

export const _saveWithdrawEvent = (event: WithdrawEventEvent): void => {
  let entity = new WithdrawEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity._index = event.params._index;
  entity._contractType = event.params._contractType;
  entity._amount = event.params._amount;
  entity._recipientAddress = event.params._recipientAddress;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
};

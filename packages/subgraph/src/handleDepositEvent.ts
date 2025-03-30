import { DepositEvent as DepositEventEvent } from "../generated/PeanutV4/PeanutV4";
import { DepositEvent } from "../generated/schema";

export const _saveDepositEvent = (event: DepositEventEvent): void => {
  let entity = new DepositEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity._index = event.params._index;
  entity._contractType = event.params._contractType;
  entity._amount = event.params._amount;
  entity._senderAddress = event.params._senderAddress;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
};

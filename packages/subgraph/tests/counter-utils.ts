import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { NumberChanged } from "../generated/Counter/Counter"

export function createNumberChangedEvent(newNumber: BigInt): NumberChanged {
  let numberChangedEvent = changetype<NumberChanged>(newMockEvent())

  numberChangedEvent.parameters = new Array()

  numberChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newNumber",
      ethereum.Value.fromUnsignedBigInt(newNumber)
    )
  )

  return numberChangedEvent
}

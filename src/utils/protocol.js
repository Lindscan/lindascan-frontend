
import {Transaction} from "@lindascan/apiclients/src/protocol/core/Linda_pb";

let contractTypes = {};

for (let key of Object.keys(Transaction.Contract.ContractType)) {
  contractTypes[Transaction.Contract.ContractType[key]] = key;
}

export const ContractTypes = contractTypes;

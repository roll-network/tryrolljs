export interface Response<T> {
  data: T
}
export interface SendArgs {
  toUsername?: string
  toUser?: {
    platformType: string
    platformID: string
  }
  tokenId: string
  amount: string
  note?: string
  message?: string
}

export interface GetTransactionByIdArgs {
  transactionId: string
}

export interface TransactionResponseData {
  token: {
    uuid: string
    name: string
    symbol: string
    decimals: number
    logo: string
    userID: string
    status: string
    contractAddress: string
  }
  from: {
    userID: string
    username: string
    profilePic: string
    name: string
  }
  to: {
    userID: string
    username: string
    name: string
    profilePic: string
  }
  fromType: string
  toType: string
  amount: string
  status: 'pending' | 'confirmed' | 'failed' | 'pending/ledger'
  type: string
  createdAt: string
}

export interface BatchSendResponseData {
  uuid: string
  status: 'processing' | 'completed' | 'tx_failed'
  totalTxnSubmitted: number
}

export interface GetMultiSendByIdArgs {
  multiSendId: string
}

export interface MultiSendResponseData {
  uuid: string
  status: 'processing' | 'completed' | 'tx_failed'
  totalTxnSubmitted: number
  totalFailedToSubmit: number
}

export interface MultiSendSummaryResponseData {
  platform: string
  status: string
  totalTxnSubmitted: number
  totalFailedToSubmit: number
  token: {
    uuid: string
    symbol: string
  }
  amount: {
    maxDenomination: string
    minDenomination: string
    decimals: number
  }
  success: string[]
  failure: {
    userID: string
    reason: string
  }[]
}

export interface GetMultiSendTransactionsArgs {
  multiSendId: string
  limit?: number
  offset?: number
}

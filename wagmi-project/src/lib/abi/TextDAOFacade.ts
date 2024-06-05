export const abi = [
  {
    type: "function",
    name: "clone",
    inputs: [{ name: "_target", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "execute",
    inputs: [{ name: "_proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fork",
    inputs: [{ name: "_proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      { name: "initialMembers", type: "address[]", internalType: "address[]" },
      {
        name: "pConfig",
        type: "tuple",
        internalType: "struct Schema.ProposalsConfig",
        components: [
          { name: "expiryDuration", type: "uint256", internalType: "uint256" },
          { name: "tallyInterval", type: "uint256", internalType: "uint256" },
          { name: "repsNum", type: "uint256", internalType: "uint256" },
          { name: "quorumScore", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "memberJoin",
    inputs: [
      { name: "_proposalId", type: "uint256", internalType: "uint256" },
      {
        name: "_candidates",
        type: "tuple[]",
        internalType: "struct Schema.Member[]",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "addr", type: "address", internalType: "address" },
          { name: "metadataURI", type: "bytes32", internalType: "bytes32" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "overrideProposalsConfig",
    inputs: [
      { name: "_proposalId", type: "uint256", internalType: "uint256" },
      {
        name: "_config",
        type: "tuple",
        internalType: "struct Schema.ProposalsConfig",
        components: [
          { name: "expiryDuration", type: "uint256", internalType: "uint256" },
          { name: "tallyInterval", type: "uint256", internalType: "uint256" },
          { name: "repsNum", type: "uint256", internalType: "uint256" },
          { name: "quorumScore", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "propose",
    inputs: [
      {
        name: "_p",
        type: "tuple",
        internalType: "struct Types.ProposalArg",
        components: [
          {
            name: "header",
            type: "tuple",
            internalType: "struct Schema.Header",
            components: [
              { name: "id", type: "uint256", internalType: "uint256" },
              {
                name: "currentScore",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "metadataURI", type: "bytes32", internalType: "bytes32" },
              { name: "tagIds", type: "uint256[]", internalType: "uint256[]" },
            ],
          },
          {
            name: "cmd",
            type: "tuple",
            internalType: "struct Schema.Command",
            components: [
              { name: "id", type: "uint256", internalType: "uint256" },
              {
                name: "actions",
                type: "tuple[]",
                internalType: "struct Schema.Action[]",
                components: [
                  { name: "func", type: "string", internalType: "string" },
                  { name: "abiParams", type: "bytes", internalType: "bytes" },
                ],
              },
              {
                name: "currentScore",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "proposalMeta",
            type: "tuple",
            internalType: "struct Schema.ProposalMeta",
            components: [
              {
                name: "currentScore",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "headerRank",
                type: "uint256[]",
                internalType: "uint256[]",
              },
              { name: "cmdRank", type: "uint256[]", internalType: "uint256[]" },
              {
                name: "nextHeaderTallyFrom",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "nextCmdTallyFrom",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "reps", type: "address[]", internalType: "address[]" },
              { name: "nextRepId", type: "uint256", internalType: "uint256" },
              { name: "createdAt", type: "uint256", internalType: "uint256" },
            ],
          },
        ],
      },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "saveText",
    inputs: [
      { name: "_proposalId", type: "uint256", internalType: "uint256" },
      { name: "_text", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProposalsConfig",
    inputs: [
      {
        name: "_config",
        type: "tuple",
        internalType: "struct Schema.ProposalsConfig",
        components: [
          { name: "expiryDuration", type: "uint256", internalType: "uint256" },
          { name: "tallyInterval", type: "uint256", internalType: "uint256" },
          { name: "repsNum", type: "uint256", internalType: "uint256" },
          { name: "quorumScore", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tally",
    inputs: [{ name: "_proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "voteCmds",
    inputs: [
      { name: "_proposalId", type: "uint256", internalType: "uint256" },
      { name: "_cmdIds", type: "uint256[3]", internalType: "uint256[3]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "voteHeaders",
    inputs: [
      { name: "_proposalId", type: "uint256", internalType: "uint256" },
      { name: "_headerIds", type: "uint256[3]", internalType: "uint256[3]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

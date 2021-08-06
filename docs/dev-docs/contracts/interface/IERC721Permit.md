## `IERC721Permit`

Extension to ERC721 that includes a permit function for signature based approvals




### `PERMIT_TYPEHASH() → bytes32` (external)

The permit typehash used in the permit signature




### `DOMAIN_SEPARATOR() → bytes32` (external)

The domain separator used in the permit signature




### `permit(address spender, uint256 tokenId, uint256 deadline, uint8 v, bytes32 r, bytes32 s)` (external)

Approve of a specific token ID for spending by spender via signature






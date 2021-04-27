## `IErc721Farm`






### `deposit(uint256 _token)` (external)

Deposit a token.
User will receive accumulated rewards if any.




### `withdraw(uint256 _token)` (external)

Withdraw a token.
User will receive _token and accumulated rewards.




### `countDeposited(address _user) → uint256` (external)

Returns the count of ERC721s that a user has deposited onto a farm.




### `listDeposited(address _user) → uint256[], uint256[]` (external)

Returns the list of ERC721s that a user has deposited onto a farm and their values.




### `getDeposited(address _user, uint256 _index) → uint256, uint256` (external)

Returns the id of an ERC721 that a user has deposited onto a farm and its value.





### `Deposit(address _user, uint256 _token)`





### `Withdraw(address _user, uint256 _token)`






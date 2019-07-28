
// procedural code

const user = getUserFromDb(userId)
const account = user.createNewAccount(user, info)
user.saveAccount(account)

// declarative code

SavedAccount(
  CreatedAccount(
    UserFromDb(userId),
    info
  )
)

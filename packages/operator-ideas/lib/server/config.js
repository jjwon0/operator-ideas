Accounts.validateLoginAttempt(function (info) {
  return canHasAccess(info.user)
});

function canHasAccess (user) {
  if (!user) return false
  if (!user.telescope.email) return false
  return verifyEmail(user.telescope.email);
};

// Check the email is part of an allowed domain.
function verifyEmail (email) {
  var emailDomain = email.split('@')[1]
  var allowedDomains = ['operator.com', 'operator-inc.com'];
  return allowedDomains.indexOf(emailDomain) !== -1;
};

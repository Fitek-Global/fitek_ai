# AuthStatus

Enum (string). JSON bodies use the member name; search restrictions and numeric query parameters use the number.

- `NotFoundUser` = 0
- `WrongCredentials` = 1
- `GoodCredentials` = 2
- `NotActiveUser` = 3
- `ActiveUser` = 4
- `RefreshTokenException` = 5
- `RefreshTokenSecurityViolation` = 6
- `UserRefused` = 7
- `Timeout` = 8
- `DocumentUnusable` = 9
- `WrongVC` = 10
- `RequestPending` = 11
- `PhoneAbsent` = 12
- `SerbiaSSOError` = 13
- `LoginMethodNotAllowed` = 14
- `KeycloakError` = 30
- `VerifierError` = 31
- `TokenError` = 32
- `IntrospectError` = 33
- `UserInfoError` = 34
- `NoActiveCertificates` = 35

Used by:

- [MobileAppSession](MobileAppSession.md).authStatus
- [MobileIdLoginResponse](MobileIdLoginResponse.md).authStatus
- [Session](Session.md).authStatus
- [StrongAuthUsersResponseDto](StrongAuthUsersResponseDto.md).authStatus

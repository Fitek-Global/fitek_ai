# FitekIN Login API: enums

JSON request/response bodies carry enum members by name. Search restrictions (`RestrictionItem.Value`) and numeric query parameters carry the number shown after `=` (when known).

## AuthStatus

`NotFoundUser` = 0, `WrongCredentials` = 1, `GoodCredentials` = 2, `NotActiveUser` = 3, `ActiveUser` = 4, `RefreshTokenException` = 5, `RefreshTokenSecurityViolation` = 6, `UserRefused` = 7, `Timeout` = 8, `DocumentUnusable` = 9, `WrongVC` = 10, `RequestPending` = 11, `PhoneAbsent` = 12, `SerbiaSSOError` = 13, `LoginMethodNotAllowed` = 14, `KeycloakError` = 30, `VerifierError` = 31, `TokenError` = 32, `IntrospectError` = 33, `UserInfoError` = 34, `NoActiveCertificates` = 35

## EmailStatus

`NotExist` = 1, `ExistsVerified` = 2, `ExistsNotVerified` = 3, `ExistsNoVerificationCheck` = 4

## ErrorType

`None` = 0, `Exception`, `ItemNotFound`, `WrongStatus`

## LoginMethods

`LoginPassword` = 1, `IdCard` = 2, `SmartId` = 3, `MobileId` = 4, `SerbiaSso` = 5, `AzureAd` = 6, `FirstPasswordSetup` = 7, `KeycloakSSO` = 8, `Onboarding` = 9, `EmailPassword` = 10, `CompanySwitch` = 11, `ImportByOrganizationAuth` = 12, `ImportByIntegratorAuth` = 13

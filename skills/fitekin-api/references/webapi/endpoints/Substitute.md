# FitekIN Web API: Substitute

Base path: `{BASE_URL}/webapi`. Header `Authorization-Token: <session token>` (see ../auth.md).

6 endpoint(s). Models are described under `../models/`; enum values under `../enums.md`.

## POST /api/Substitute/AddOrUpdateSubstitute

**Parameters**

_No parameters._

**Request body**

[SubstituteDTO](../models/SubstituteDTO.md) as `application/json`

**Response (200)**

[SubstituteDTO](../models/SubstituteDTO.md)

## POST /api/Substitute/Delete/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

_No body documented (empty or primitive)._

## GET /api/Substitute/GetCompanySubstitutes/{guid}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `guid` | path | yes | uuid |  |

**Request body**

_None._

**Response (200)**

[SubstituteDTO[]](../models/SubstituteDTO.md)

## GET /api/Substitute/GetSubstituteSubstitute/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[SubstituteDTO[]](../models/SubstituteDTO.md)

## GET /api/Substitute/GetUsersSubstitutes/{id}

**Parameters**

| Name | In | Required | Type | Notes |
|---|---|---|---|---|
| `id` | path | yes | int32 |  |

**Request body**

_None._

**Response (200)**

[SubstituteDTO[]](../models/SubstituteDTO.md)

## POST /api/Substitute/UpdateSubstitutes

**Parameters**

_No parameters._

**Request body**

[SubstituteDTO[]](../models/SubstituteDTO.md) as `application/json`

**Response (200)**

[SubstituteDTO[]](../models/SubstituteDTO.md)

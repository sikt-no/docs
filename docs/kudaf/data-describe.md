# Describe data as metadata

To use KUDAF you have to describe your data as metadata. This page describes
how to do this.

## Kickstarter

In this section we will explain the thought process of generating metadata from
some raw data.

Say we have some raw data that describes a vehicle's history of color
change. This data is represented in the table below:

| ID  | Type     | Color | Color start date | Color stop date |
| --- | -------- | ----- | ---------------- | --------------- |
| 1   | Unicycle | Red   | 1970-01-01       | 2000-01-01      |
| 1   | Unicycle | Blue  | 2000-01-01       |
| 2   | Bycicle  | Green | 1990-02-03       |

A good starting point to generate metadata is to examine the data to discover potential
individual metadata variables.

We can think of each column in this table as a potential variable:

- ID
- Type
- Color
- Color start date
- Color stop date

A variable can either be an identifier variable or a measure variable.
We need to distinguish which of the listed potential variables are of each type.

Let us start by defining the identifier variable first.

### Identifier variable

A identifier variable is a description of the identifier column of the table.
By going through the rows in the table we can see that the "ID" column uniquely
identifies a vehicle. We can see in the first row the unicycle identified by ID=1
starts with a red color for a period. Then in the second row we can see the
same unicycle changed its color from red to blue because it had a paint job.
Lastly, the third row describes the vehicle color for a different vehicle.

Now that we have discovered the identifier variable we can start to describe it.
The identifier variable description should contain a unit type and the
identifier column name. Already we know that column name is "ID". Lastly, we need
to figure out the unit type. The unit type is what type of unit the variables
describes. By looking at all of the columns we can determine that this table
describes vehicles, so we will define our unit type for this dataset as "Vehicle".

Using all the information we can start with creating a JSON object to represent
our identifier variable as shown below.

```json
{
  "identifierVariables": [
    {
      "name": "ID",
      "label": "Vehicle identifier",
      "keyType": {
        "name": "Vehicle",
        "label": "Vehicle"
      }
    }
  ]
}
```

In the JSON object we have used the field "name" to refer to the column name in
the table, while the label is a description of the same, but can be changed to be
more legible in user interfaces.

### Measure variable

By looking at the remaining potential variables we can assume that the rest are
measure variables:

- Type
- Color
- Color start date
- Color stop date

We can start by defining the column "Type" as a measure variable JSON object
shown below.

```json
{
  "identifierVariables": [
    {
      "name": "ID",
      "label": "Vehicle identifier",
      "keyType": {
        "name": "Vehicle",
        "label": "Vehicle"
      }
    }
  ],
  "measureVariable": {
    "name": "Type",
    "label": "Vehicle type"
  }
}
```

Measure variables have a temporality type, so the next step is to identify this.

#### Temporality

Temporality is a state of time, and the possible temporality types are these:

- **`FIXED`** - data that do not change over time
- **`EVENT`** - data that may vary over time
- **`STATUS`** - data of specific points in time, that do not describe what happens
  between the points in time
- **`ACCUMULATED`** – a sum of periodically recorded data from an entire period

By investigating the first variable type we can assume that the type of a vehicle
will likely not change. When looking at the small table we can confirm this and
see that it does not change making this variable a good candidate for the
temporality type **`FIXED`**.

We can therefore add the field "temporality" to our JSON object and give it the
value "FIXED", which is shown below.

```json
{
  "identifierVariables": [
    {
      "name": "ID",
      "label": "Vehicle identifier",
      "keyType": {
        "name": "Vehicle",
        "label": "Vehicle"
      }
    }
  ],
  "measureVariable": {
    "name": "Type",
    "label": "Vehicle type"
  },
  "temporality": "FIXED"
}
```

We have now successfully generated the variable "Type". So let us take a look at
"Color" next.

We start by wrapping our JSON object in an array since we are now introducing a
new element. In this new JSON object we have reused the identifier variable object
we previously created since the "Color" variable also has the same identifier variable.
Then we create a measure variable object with name and label that fits the "Color"
variable.

```json
[
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Type",
      "label": "Vehicle type"
    },
    "temporality": "FIXED"
  },
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Color",
      "label": "Vehicle color"
    }
  }
]
```

We have most of the basics defined, now we can take a look at temporality.
Taking "Colo start date" and "Color stop date" into account, we see that "Color"
data changes over time. This means that this is a good candidate for the
temporality type "Event". We can also identify that the time points in "Color start
date" and "Color stop date" are coherent which excludes it from being of temporality
type **`STATUS`**.

Since we have identified this variable to be the temporality type **`EVENT`**, we
simply create a "temporality" field within our JSON object and gives it the value
"EVENT", as shown below.

```json
[
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Type",
      "label": "Vehicle type"
    },
    "temporality": "FIXED"
  },
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Color",
      "label": "Vehicle color"
    },
    "temporality": "EVENT"
  }
]
```

In cases where we have an **EVENT** temporality type, the "Color start date" and
"Color stop date" must be included as attribute variables within the measure variable
of "Color".

#### Attribute variable

An attribute variable describes temporal attributes of data and is optional
because variables with temporality type **`FIXED`** has no relation to time.

Depending on the temporality type of the variable:

- **`FIXED`** - (i.e. time-invariant) we do not
  include this.
- **`ACCUMULATED`** - we would typically include
  two attribute variables: **`START` and `STOP`**. If only one is included, that
  would mean:
  - **All data until** the given stop time **if only `STOP`** is included, and
    since the earliest available data.
  - **All data since** the given start time **if only `START`** is included,
    and up until the latest available data.
- **`STATUS`** - we **always DO include TWO** attribute variables: **`START` and
  `STOP`, with THE SAME dates**.
- **`EVENT`** - we **DO include ONE or TWO** attribute variables, depending on how
  we want to characterize the event in question. It could be: **`START` and `STOP`
  dates/times**, or `INSTANT`

We then add JSON object describing the attribute variables to our variable, as
shown below.

```json
[
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Type",
      "label": "Vehicle type"
    },
    "temporality": "FIXED"
  },
  {
    "identifierVariables": [
      {
        "name": "ID",
        "label": "Vehicle identifier",
        "keyType": {
          "name": "Vehicle",
          "label": "Vehicle"
        }
      }
    ],
    "measureVariable": {
      "name": "Color",
      "label": "Vehicle color"
    },
    "temporality": "EVENT",
    "attributeVariables": [
      {
        "label": "Color start date",
        "name": "Start"
      },
      {
        "label": "Color stop date",
        "name": "Stop"
      }
    ]
  }
]
```

By now you should have good starting point to continue this guide and enrich
you current variables with more required fields.

## Metadata as Single-Variable Dataset

Metadata in KUDAF are described as a Single-Variable Dataset. For more information
about the standard go [here](./metadata-standard.md#raird-information-model).

The JSON object below illustrates such a variable:

```json
{
    "name": "FEIDESTATS_LOGINS_FORG_ACCUM",
    "datasource_name": "sikt",
    "populationDescription": {...},
    "subjectFields": [...],
    "temporalCoverage": {...},
    "temporality": "ACCUMULATED",
    "globalTemporalCoverage": {...},
    "temporalStatusDates": null,
    "updatedAt": "2022-09-13T09:31:22",
    "attributeVariables": [...],
    "identifierVariables": [...],
    "measureVariable": {...}
}
```

Description of fields in the schema above:

- **name**: Name of the variable which adhere to [naming guidelines](#variable-naming-guidelines).
- **temporalityType**: The temporality type which must be one of FIXED, ACCUMULATED,
  STATUS or EVENT.
- **populationDescription**: Description of the **population described**
- **spatialCoverageDescription**: Description of the **spatial distribution**
- **sensitivityLevel**: The sensitivity type which must be one of _PERSON_GENERAL_,
  _PERSON_SPECIAL_, _PUBLIC_, _NONPUBLIC_.
- **identifierVariables**: A list containing **unique identifier(s)**
  (like a _primary key_ in a database). This is what **allows us to associate the
  measured value with a unit of measure**. The data structure is described in [this
  section](#identifier-variable-data-structure).
- **measureVariable**: **Describe(s) what is _measured_**. The data structure is
  described in [this section](#measure-variable-data-structure).
- **attributeVariables**: An optional list containing elements which **describe the
  relationship to time, i.e. the EVENT PERIOD**. It's optional because it depends
  on the Temporality Type, and the `FIXED` type is time-invariant. The data structure
  is described in [this section](#attribute-variables-data-structure).

The Measure, Attribute and Identifier Variables data structures are explained in more detail below.

## Variable naming guidelines

The name of a Variable should:

- Describe **what is measured**
- Consist of a **single string in capital letters**, made up of **keywords separated
  by underscores** (`_`).
- In line with the KUDAF objective to maximize data-sharing potential, it would
  be preferable to write the **keywords in English**.
- It **must be the same as the name of the Measure Variable** data structure within
  |the Variable.
- The name **must be UNIQUE**.

**How to structure keywords** in the name using contained information in the variable:

- The **1st keyword** (before the first underscore) is a shortened alias from your
  **data source** identifier. Examples:
  - Feide public API: "FEIDEAPI"
  - Feide Statistics database: "FEIDESTATS"
  - Lånekassen: "LK"
- The **2nd keyword (or group of keywords)** should summarize **what is measured**.
  Examples:
  - School names: "SCHOOL_NAMES" (in this case not technically a "measure", more
    of a qualifier)
  - Login event counts: "LOGINS"
  - Multi-factor authentication event counts: "MFAS"
- The **3rd keyword (or group of keywords)** should point out the **unique identifier(s)**.
  Examples:
  - If the login event counts are accumulated for each organization: "ORG"
  - If the multi-factor authentication event counts are accumulated for each combination
    of organization and authentication method: "ORG_METHOD"
- The **last keyword (if present)** can indicate the **temporality**:
  - If the temporality type is **"FIXED", we can omit it.**
  - **Otherwise** for the other temporality types, **choose one of: "ACCUM", "STATUS",
    "EVENT"**.

A complete example from the above could be "FEIDESTATS_LOGINS_ORG_METHOD_ACCUM". This
Variable would thus refer to data that:

- Comes from the Feide Statistics data source.
- Measures login event counts.
- Each measure is identified by an organization and a service provider.
- The measures (login event counts) are accumulated over a given time period.

## Measure variable data structure

**Description of the measured column**.

```python
class MeasureVariable:
    name: str
    variableRole: str
    label: str
    dataType: str
    keyType: KeyType
    representedVariables: list[RepresentedVariable]
```

Fields:

- **name**: Must be equal to the name generated for the name field in the SingleVariableDataset data structure.
- **variableRole**: describes the role of the variable, for measure variable it
  would be "Measure"
- **label**: Human readable name (Label) of the measure column. This should be similar to the name. Example for PERSON_INNTEKT: "Person inntekt".
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG", "DOUBLE", "DATE"]
- **[representedVariables](https://statswiki.unece.org/display/clickablegsim/Represented+Variable)**: List (though normally just one element) that **describes more in detail what kind of data (the WHAT and the HOW)** we can find. It's a **combination of**:
  - **What**: A **characteristic** of a population to be measured, and
  - **How** the measure will be **represented**

```python
class RepresentedVariable:
    description: Description
    validPeriod: ValidPeriod
    valueDomain: ValueDomainDescribed | ValueDomainEnumerated
```

Fields within a Represented Variable:

- **description**: Description of the column contents. Example: "Skattepliktig og skattefritt utbytte i... "
- **validPeriod**: See definition below.
- **valueDomain**: See definition below.

### Valid period

A simple data structure that shows the **beginning and end dates when the data is considered valid**.

```python
class ValidPeriod:
    start: datetime
    stop: datetime
```

### Value domain

The **Value Domain** describes the **set of permissible values of the data represented**.
Depending on the measure, this description can become quite complex. Hence we simplify
it by having **two possible types** of Value Domain:

- **Described Value Domain**: When the possibilities are either infinite or just
  too many to manage (think of the list of all the National IDs or phone numbers,
  for example), we settle for a **verbal description of the values**.
- **Enumerated Value Domain**: When there is a **manageable (finite list) of possible
  data values**, we provide an **enumeration of the possibilities, i.e. a list of
  Categories**. An example could be a cardinal directions (north, south, east, west).

Below are the **schemas** for these two types of Value Domain.

For the **Described Value Domain**:

```python
class ValueDomainDescribed:
    uriDefinition: list[str]
    description: Description | str
    measurementType: str
    measurementUnitDescription: str
```

Where:

- **description**: A description of the domain. Example for the Variable "BRUTTO_INNTEKT":
  "Alle positive tall".
- **measurementUnitDescription**: The metric for a measurement in terms of an official
  unit of measurement. Example: "Norske Kroner".
- **measurementType**: The type of measure which groups a set of measurement units.
  One of: [CURRENCY, WEIGHT, LENGTH, HEIGHT, GEOGRAPHICAL]. Where the CURRENCY type
  would group "Norske Kroner", "US Dollar", "Euro", etc.
- **uriDefinition**: Link(s) to external resource(s) describing the domain.

And for the **Enumerated Value Domain**:

```python
class ValueDomainEnumerated:
    uriDefinition: list[str]
    codeList: list[Code]
```

Where:

- **codeList**: A **list of Categories for the domain, where each Category has a
  predefined Code assigned to it**. Each of these Codes includes a description and
  validity period.

```python
class Code:
    categoryTitle: list[Description]
    code: str
    validPeriod: ValidPeriod
```

#### Examples of the two possible value domains

##### Described value domain (with `description`)

This example belongs to a Variable where the **measure is a person's accumulated gross income**:

```json
"valueDomain": {
    "uriDefinition": [],
    "description": [{"languageCode": "no", "value": "Norske Kroner"}],
    "measurementType": "CURRENCY",
    "measurementUnitDescription": [{"languageCode": "no", "value": "Norske Kroner"}]
}
```

##### Enumerated value domain (with `codeList`)

The second example belongs to a Variable where the **measure describes the sex of a person**:

```json
"valueDomain": {
    "uriDefinition": [],
    "codeList": [
        {
            "code": "1",
            "categoryTitle": [
                {"languageCode": "no", "value": "Mann"}
                ],
            "validFrom": "1900-01-01"
        },
        {
            "code": "2",
            "categoryTitle": [
                {"languageCode": "no", "value": "Kvinne"}
                ],
            "validFrom": "1900-01-01"
        }
    ],
    "sentinelAndMissingValues": [
        {
            "code": "0",
            "categoryTitle": [
                {"languageCode": "no", "value": "Ukjent"}
                ],
            "validFrom": "1900-01-01"
        }
    ]
}
```

We expect all values in this dataset to be of either code "1" or "2", as this Variable only considers "Male" or "Female". But we also expect a code "0" to be present in the Variable, where it represents "Unknown". A row with "0" as measure is therefore not considered invalid.

### Measure variables (with `keyType`)

**Some of the Variables contain a `keyType` in the Measure Variable data structure** as well. This is characteristic of Identifier Variables, as we'll see below, but sometimes we need a **Variable which links together (relates) two Identifier Variables**. (The equivalent concept in a relational database would be a **Foreign Key**).

As an example, let's say we have a Variable PERSON_MOR where the Identifier Variable field is a population of Unit Type "PERSON", and the Measure Variable is a population of Unit Type "PERSON". The measure here is representing the population's mothers.

The **`keyType` data structure describes in detail the Unit Type** for this Variable's identifier column. As explained, these are centrally defined to ensure consistency. Examples are: ORGANISASJON, TJENESTELEVERANDØR, FAMILIE, FORETAK, HUSHOLDNING, JOBB, KJORETOY, KOMMUNE, KURS, PERSON or VIRKSOMHET.

```python
class KeyType:
    description: Description | str
    label: str
    name: str
```

Then it may be defined like this:

- **keyType**: In this case we would choose PERSON.
- **name**: Human readable name (Label) of the measure column. This should be similar to the Variable's name. Example for PERSON_MOR: "Person mor".
- **description**: Description of the column contents. Example: "Personens registrerte biologiske mor... "

---

## Identifier variable data structure

This data structure **describes the identifier columns**.

The **identifiers are always based on a [Unit Type](https://statswiki.unece.org/display/clickablegsim/Unit+Type)**,
which is used to describe a class or group of Units based on a single characteristic,
but with no specification of time and geography.

They are needed so we can **associate a Measure Variable with a Unit of Measure**
(or more than one in some cases). A Unit is **centrally defined to make joining
datasets across organizations possible**.

Schema of an Identifier Variable:

```python
class IdentifierVariable:
    name: str
    variableRole: str
    label: str
    dataType: str
    format: str
    keyType: KeyType
    representedVariables: list[RepresentedVariable]

class KeyType:
    description: Description | str
    label: str
    name: str
```

Fields:

- **name**: A **single string in capital letters**, consisting of **the name of the
  identifier field for the _datum_** (e.g `PERSON_ID`). Note that this would typically
  be equivalent to the original database table's primary key field.
- **variableRole**: describes the role of the variable, for identifier variable it
  would be "Identifier"
- **label**: Human readable name (Label) of the identifier column. This should be
  similar to the field `name` above (e.g. for PERSON_ID: "Person ID").
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG",
  "DOUBLE", "DATE"]
- **representedVariables**: Same as for the Measure Variable described before.
  A list (normally just one) that **describes more in detail what kind of data** we
  can find. It's a **combination of**:
  - A **characteristic** of a population to be measured, and
  - **How** the measure will be **represented**
- The **`keyType` data structure describes in detail the [Unit Type](https://statswiki.unece.org/display/clickablegsim/Unit+Type)**
  for this Variable's identifier column. As explained, these are centrally defined
  to ensure consistency. Examples are: ORGANISASJON, TJENESTELEVERANDØR, FAMILIE,
  FORETAK, HUSHOLDNING, JOBB, KJORETOY, KOMMUNE, KURS, PERSON or VIRKSOMHET.

### Possible [Unit Types](https://statswiki.unece.org/display/clickablegsim/Unit+Type)

In KUDAF you can use [shared unit types](#shared-unit-types) or [data source specific
unit types](#data-source-specific-unit-types).

The advantage of using shared unit types is that you will get relations with other
data source's variables and therefore enable users creating joined and possibly
more meaningful projection of data.

#### Shared Unit Types

To use shared unit types you have to implement an unit type from this list:

- **ORGANISASJON**: Representation of an organization. Columns with this unit type
  should contain ORGNR. Columns with this unit type should contain ORGNR.
- **TJENESTELEVERANDØR**: Representation of a service provider. Columns with this
  unit type should contain SPID.
- **PERSON**: Representation of a person. Columns with this unit type should contain
  FNR.
- **FAMILIE**: Representation of a family. Columns with this unit type should contain
  FNR.
- **FORETAK**: Representation of a foretak. Columns with this unit type should contain
  ORGNR.
- **VIRKSOMHET**: Representation of a virksomhet. Columns with this unit type should
  contain ORGNR.
- **HUSHOLDNING**: Representation of a husholdning. Columns with this unit type should
  contain FNR.
- **JOBB**: Representation of a job. Columns with this unit type should contain FNR_ORGNR.
  FNR belongs to the employee and ORGNR belongs to the employer.
- **KOMMUNE**: Representation of a kommune. Columns with this unit type should contain
  a valid kommune number.
- **KURS**: Representation of a course. Columns with this unit type should contain
  FNR_KURSID. Where FNR belongs to the participant and KURSID is the NUDB course id.
- **KJORETOY**: Representation of a vehicle. Columns with this unit type should contain
  FNR_REGNR. Where FNR is the owner of the vehicle, and REGNR is the registration number
  for the vehicle.

If no current Unit Type fits your need, feel free to suggest a new Unit Type by
contacting us.

#### Data source specific Unit Types

To use data source specific unit types you have to prefix your _Unit Type's_ name with your data source identifier. For example:

- The **1st keyword** (before the first underscore) is a shortened alias from your **data source** identifier. For example:
  - Feide public API: "FEIDEAPI"
- The **2nd keyword** should be the name of the identifier field for the datum. For example:
  - Organization identifier: "ORGANISASJON"

A complete example from the above could be `FEIDEAPI_ORGANISASJON`

---

## Attribute variables data structure

This data structure **describes TEMPORAL attributes** of this particular _datum_.

It is **optional** because not every _datum_ has a relationship to time – the Event
Period.

Hence, **depending on the Temporality Type** of the Variable:

- For a **`FIXED`** temporality type Variable (i.e. time-invariant) we **DO NOT
  include** an Attribute Variable.
- For an **`ACCUMULATED`** temporality type Variable we **typically DO include TWO**
  Attribute Variables: **`START` and `STOP`**. If only one is included, that would
  mean:
  - **All data until** the given stop time **if only `STOP`** is included, and since
    the earliest available data.
  - **All data since** the given start time **if only `START`** is included, and
    up until the latest available data.
- For a **`STATUS`** temporality type Variable we **always DO include TWO** Attribute
  Variables: **`START` and `STOP`, with THE SAME dates**.
- For an **`EVENT`** temporality type Variable we **DO include ONE or TWO** Attribute
  Variables, depending on how we want to characterize the Event in question. It could
  be: **`START` and `STOP` dates/times**, or `INSTANT`...

Schema of an Attribute Variable:

```python
class AttributeVariable:
    name: str
    variableRole: str
    label: str
    dataType: str
    representedVariables: list[RepresentedVariable]
```

Fields:

- **name**: A **single string in capital letters**.
- **variableRole**: describes the role of the variable. E.g, for a start variable
  the role would be "Start", while stop would be "Stop"
- **label**: Human readable name (Label). This should be similar to the field `name`
  above (e.g. for START: "Start").
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG",
  "DOUBLE", "DATE", "INSTANT"]
- **representedVariables**: Same as for the Measure Variable described before.

Below is an **example of the Attribute Variables for an ACCUMULATED temporality type
Variable**:

```json
"attributeVariables": [
    {
        "dataType": "Instant",
        "label": "Stoppdato",
        "name": "STOP",
        "representedVariables": [
            {
                "description": {
                    "languageCode": "nb",
                    "value": "Stoppdato/sluttdato for hendelsen"
                },
                "validPeriod": {
                    "start": -25567,
                    "stop": 18993
                },
                "valueDomain": {
                    "description": "N/A",
                    "unitOfMeasure": "N/A"
                }
            }
        ],
        "variableRole": "Stop"
    },
    {
        "dataType": "Instant",
        "label": "Startdato",
        "name": "START",
        "representedVariables": [
            {
                "description": {
                    "languageCode": "nb",
                    "value": "Startdato/måletidspunktet for hendelsen"
                },
                "validPeriod": {
                    "start": -25567,
                    "stop": 18993
                },
                "valueDomain": {
                    "description": "N/A",
                    "unitOfMeasure": "N/A"
                }
            }
        ],
        "variableRole": "Start"
    }
]
```

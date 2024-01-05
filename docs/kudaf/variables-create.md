# How to create Variable metadata

## The root level fields

The fields on the above schema **describe the Variable as a whole**.

- **name**: Must adhere to the Variable naming guidelines above.
- **datastore_id**: The Datatset/**source of the data** represented by this Variable.
- **temporalityType**: The temporality type of the Variable. Must be one of FIXED, ACCUMULATED, STATUS or EVENT.
- **populationDescription**: Description of the **population described** by the Variable.
- **spatialCoverageDescription**: Description of the **spatial distribution** of the data described by the Variable.
- **sensitivityLevel**: The sensitivity type of the data described by the Variable. Must be one of PERSON_GENERAL, PERSON_SPECIAL, PUBLIC, NONPUBLIC.
- **identifierVariables**: A list containing data structure(s) that **describe(s) the unique identifier(s)** (like a _primary key_ in a database) **which singles out this particular _datum_**. This is what **allows us to associate the measured value with a unit of measure**.
- **measureVariable**: A list containing data structure(s) that **describe(s) what is _measured_ by this particular _datum_**. Most of the time there would be a single item, as with a _datum_ we want to single out the simplest possible measure, but perhaps in the future there might be use cases where we need more than one.
- **attributeVariables**: An optional list containing data structures that **describe the datum's relationship to time, i.e. the EVENT PERIOD**. It's optional because it depends on the Temporality Type of the Variable, and the `FIXED` type is time-invariant.

The Measure, Attribute and Identifier Variables data structures are explained in more detail below.

---

## Measure Variable data structure

**Description of the measured column** of the Variable. It is represented as a list in the metadata model, but currently only one measure is allowed per Variable.

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

- **name**: A **single string in capital letters**, consisting of **keywords separated by underscores** (`_`), which **describes what each _datum_ is measuring**. As such, it **must be the same as root-level name of the Variable** data structure (see above Variable naming guidelines).
- **label**: Human readable name (Label) of the measure column. This should be similar to the Variable's name. Example for PERSON_INNTEKT: "Person inntekt".
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG", "DOUBLE", "DATE"]
- **[representedVariables](https://statswiki.unece.org/display/clickablegsim/Represented+Variable)**: List (though normally just one element) that **describes more in detail what kind of data (the WHAT and the HOW)** we can find. It's a **combination of**:
      -  **What**: A **characteristic** of a population to be measured, and
      -  **How** the measure will be **represented**

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

### Valid Period

A simple data structure that shows the **beginning and end dates when the data is considered valid**.

```python
class ValidPeriod:
    start: datetime
    stop: datetime
```

### Value Domain

The **Value Domain** describes the **set of permissible values of the data represented** by the Variable. Depending on the measure, this description can become quite complex. Hence we simplifly it by having **two possible types** of Value Domain:

- **Enumerated Value Domain**: When there is a **manageable (finite list) of possible data values**, we provide an **enumeration of the possiblities, i.e. a list of Categories**. An example could be a person's sex.
- **Described Value Domain**: When the possibilites are either infinite or just too many to manage (think of the list of all the National IDs or phone numbers, for example), we settle for a **verbal description of the values**.

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

- **description**: A description of the domain. Example for the Variable "BRUTTO_INNTEKT": "Alle positive tall".
- **measurementUnitDescription**: The metric for a measurement in terms of an official unit of measurement. Example: "Norske Kroner".
- **measurementType**: The type of measure which groups a set of measurement units. One of: [CURRENCY, WEIGHT, LENGTH, HEIGHT, GEOGRAPHICAL]. Where the CURRENCY type would group "Norske Kroner", "US Dollar", "Euro", etc.
- **uriDefinition**: Link(s) to external resource(s) describing the domain.


And for the **Enumerated Value Domain**:

```python
class ValueDomainEnumerated:
    uriDefinition: list[str]
    codeList: list[Code]
```

Where:

- **codeList**: A **list of Categories for the domain, where each Category has a predefined Code assigned to it**. Each of these Codes includes a description and validity period.

```python
class Code:
    categoryTitle: list[Description]
    code: str
    validPeriod: ValidPeriod
```


### Examples of the two possible value domains

#### Described value domain (with `description`)

This example belongs to a Variable where the **measure is a person's accumulated gross income**:

```json
"valueDomain": {
    "uriDefinition": [],
    "description": [{"languageCode": "no", "value": "Norske Kroner"}],
    "measurementType": "CURRENCY",
    "measurementUnitDescription": [{"languageCode": "no", "value": "Norske Kroner"}]
}
```

#### Enumerated value domain (with `codeList`)

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


## Measure Variables with `keyType`

**Some of th Variables contain a `keyType` in the Measure Variable data structure** as well. This is characteristic of Identifier Variables, as we'll see below, but sometimes we need a **Variable which links together (relates) two Identifier Variables**. (The equivalent concept in a relational database would be a **Foreign Key**).

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


## Identifier Variable data structure

This data structure **describes the indentifier columns** of the Variable.

The **identifiers are always based on a [Unit Type](https://statswiki.unece.org/display/clickablegsim/Unit+Type)**, which is used to describe a class or group of Units based on a single characteristic, but with no specification of time and geography.

They are needed so we can **associate a Measure Variable with a Unit of Measure** (or more than one in some cases). A Unit is **centrally defined to make joining datasets across organizations possible**.

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
```

Fields:

- **name**: A **single string in capital letters**, consisting of **the name of the identifier field for the _datum_** (e.g `PERSON_ID`). Note that this would typically be equivalent to the original database table's primary key field.
- **label**: Human readable name (Label) of the identifier column. This should be similar to the field `name` above (e.g. for PERSON_ID: "Person ID").
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG", "DOUBLE", "DATE"]
- **representedVariables**: Same as for the Measure Variable described before. A list (normally just one) that **describes more in detail what kind of data** we can find. It's a **combination of**:
      -  A **characteristic** of a population to be measured, and
      -  **How** the measure will be **represented**
- The **`keyType` data structure describes in detail the [Unit Type](https://statswiki.unece.org/display/clickablegsim/Unit+Type)** for this Variable's identifier column. As explained, these are centrally defined to ensure consistency. Examples are: ORGANISASJON, TJENESTELEVERANDØR, FAMILIE, FORETAK, HUSHOLDNING, JOBB, KJORETOY, KOMMUNE, KURS, PERSON or VIRKSOMHET.

```python
class KeyType:
    description: Description | str
    label: str
    name: str
```

### Possible [Unit Types](https://statswiki.unece.org/display/clickablegsim/Unit+Type)

* **ORGANISASJON**: Representation of an organization. Columns with this unit type should contain ORGNR. Columns with this unit type should contain ORGNR.
* **TJENESTELEVERANDØR**: Representation of a service provider. Columns with this unit type should contain SPID.
* **PERSON**: Representation of a person. Columns with this unit type should contain FNR.
* **FAMILIE**: Representation of a family. Columns with this unit type should contain FNR.
* **FORETAK**: Representation of a foretak. Columns with this unit type should contain ORGNR.
* **VIRKSOMHET**: Representation of a virksomhet. Columns with this unit type should contain ORGNR.
* **HUSHOLDNING**: Representation of a husholdning. Columns with this unit type should contain FNR.
* **JOBB**: Representation of a job. Columns with this unit type should contain FNR_ORGNR. FNR belongs to the employee and ORGNR belongs to the employer.
* **KOMMUNE**: Representation of a kommune. Columns with this unit type should contain a valid kommune number.
* **KURS**: Representation of a course. Columns with this unit type should contain FNR_KURSID. Where FNR belongs to the participant and KURSID is the NUDB course id.
* **KJORETOY**: Representation of a vehicle. Columns with this unit type should contain FNR_REGNR. Where FNR is the owner of the vehicle, and REGNR is the registration number for the vehicle.


(**TO DO**): Identifier Variable examples

---

## Attribute Variable data structure

This data structure **describes TEMPORAL attributes** of this particular _datum_.

It is **optional** because not every _datum_ has a relationship to time – the Event Period.

Hence, **depending on the Temporality Type** of the Variable:

- For a **`FIXED`** temporality type Variable (i.e. time-invariant) we **DO NOT include** an Attribute Variable.
- For an **`ACCUMULATED`** temporality type Variable we would **typically DO include TWO** Attribute Variables: **`START` and `STOP`**. If only one is included, that would mean:
        - **All data until** the given stop time **if only `STOP`** is included, and since the earliest available data.
        - **All data since** the given start time **if only `START`** is included, and up until the latest available data.
- For a **`STATUS`** temporality type Variable we **always DO include TWO** Attribute Variables: **`START` and `STOP`, with THE SAME dates**.
- For an **`EVENT`** temporality type Variable we **DO include ONE or TWO** Attribute Variables, depending on how we want to characterize the Event in question. It could be: **`START` and `STOP` dates/times**, or `INSTANT`...

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
- **label**: Human readable name (Label). This should be similar to the field `name` above (e.g. for START: "Start").
- **dataType**: DataType for the values in the column. One of: ["STRING", "LONG", "DOUBLE", "DATE", "INSTANT"]
- **representedVariables**: Same as for the Measure Variable described before.

Below is an **example of the Attribute Variables for an ACCUMULATED temporality type Variable**:

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


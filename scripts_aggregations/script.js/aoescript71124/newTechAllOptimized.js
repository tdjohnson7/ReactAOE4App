const allOptimizedTechs = [
      {
        "id": "acid-distillation",
        "name": "Acid Distillation",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Mining Technology 2/3"
        ],
        "classes": [
          "mining",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/acid-distillation-3.png",
        "description": "Increase Villagers' gathering rate for Gold and Stone by 15%.",
        "variations": [
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "by"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 181904,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "en"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 70,
              "stone": 0,
              "gold": 175,
              "vizier": 0,
              "oliveoil": 0,
              "total": 245,
              "popcap": 0,
              "time": 60
            }
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 2127598,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge",
              "kura-storehouse"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "je"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 2032215,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3_mon",
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Gold by 15%.",
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "od"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "acid-distillation-3",
            "pbgid": 171823,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "acid-distillation",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "mining-camp"
        ],
        "effects": [
          {
            "property": "goldGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          },
          {
            "property": "stoneGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "adjustable-crossbars",
        "name": "Adjustable Crossbars",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Mangonel Technology"
        ],
        "classes": [
          "mangonel",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/adjustable-crossbars-4.png",
        "description": "Increase the attack speed of Mangonels by +25%.",
        "variations": [
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "by"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 182077,
            "attribName": "upgrade_siege_adjustable_crossbar_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            }
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "en"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "je"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 191287,
            "attribName": "upgrade_siege_adjustable_crossbar_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "od"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "adjustable-crossbars-4",
            "pbgid": 130999,
            "attribName": "upgrade_siege_adjustable_crossbar",
            "civs": [
              "ru"
            ]
          }
        ],
        "baseId": "adjustable-crossbars",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 200,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "siege-workshop"
        ],
        "effects": [
          {
            "property": "attackSpeed",
            "select": {
              "id": [
                "mangonel"
              ]
            },
            "effect": "multiply",
            "value": 0.8,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "agriculture",
        "name": "Agriculture",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Farm Technology"
        ],
        "classes": [
          "farm",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/agriculture-3.png",
        "description": "Improve Villagers' gathering rate from Farms by +15%.",
        "variations": [
          {
            "id": "agriculture-3",
            "baseId": "agriculture",
            "type": "technology",
            "name": "Agriculture",
            "pbgid": 200775,
            "attribName": "upgrade_econ_agriculture_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Improve Villagers' gathering rate from Farms by +15%.",
            "classes": [
              "farm",
              "technology"
            ],
            "displayClasses": [
              "Farm Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/agriculture-3.png",
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager",
                    "farm"
                  ]
                },
                "effect": "multiply",
                "value": 1.15,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "angled-surfaces",
        "name": "Angled Surfaces",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Armor Technology 3/3"
        ],
        "classes": [
          "ranged",
          "armor",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/angled-surfaces-4.png",
        "description": "Increase the ranged armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188365,
            "attribName": "upgrade_ranged_armor_iii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188371,
            "attribName": "upgrade_ranged_armor_iii_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "angled-surfaces-4",
            "pbgid": 188268,
            "attribName": "upgrade_ranged_armor_iii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "angled-surfaces",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "armored-caravans",
        "name": "Armored Caravans",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/armored-caravans-3.png",
        "description": "Grant +5 armor to Traders and Trade Ships.",
        "variations": [
          {
            "id": "armored-caravans-3",
            "baseId": "armored-caravans",
            "type": "technology",
            "name": "Armored Caravans",
            "pbgid": 201746,
            "attribName": "upgrade_trade_trader_armor_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Grant +5 armor to Traders and Trade Ships.",
            "classes": [
              "trade",
              "technology"
            ],
            "displayClasses": [
              "Trade Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/armored-caravans-3.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "trader",
                    "trade-ship"
                  ]
                },
                "effect": "change",
                "value": 5,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "trader",
                    "trade-ship"
                  ]
                },
                "effect": "change",
                "value": 5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "armored-hull",
        "name": "Armored Hull",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology 1/2"
        ],
        "classes": [
          "naval",
          "technology",
          "1/2"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/armored-hull-3.png",
        "description": "Increase the health of all military ships by +20% and ranged armor by +1.",
        "variations": [
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "by"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 2063164,
            "attribName": "upgrade_naval_armored_hull_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 150
            }
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "en"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "je"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "od"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "armored-hull-3",
            "pbgid": 196879,
            "attribName": "upgrade_naval_armored_hull",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "armored-hull",
        "age": 3,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "arrowslits",
        "name": "Arrowslits",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/arrowslits-2.png",
        "description": "Add defensive arrowslits to this structure and increase garrison arrow range by +1. Only one weapon emplacement can be added.",
        "variations": [
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "by"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "de"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "en"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "hr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 38,
              "gold": 19,
              "vizier": 0,
              "oliveoil": 0,
              "total": 57,
              "popcap": 0,
              "time": 30
            }
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "je"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "toll-outpost"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 186398,
            "attribName": "upgrade_outpost_arrowslits_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "od"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 127325,
            "attribName": "upgrade_outpost_arrowslits",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "arrowslits-2",
            "pbgid": 135443,
            "attribName": "upgrade_wooden_castle_arrowslits_rus",
            "civs": [
              "ru"
            ],
            "description": "Add defensive arrowslits to this structure and increase garrison arrow range by +1.",
            "producedBy": [
              "wooden-fortress"
            ]
          }
        ],
        "baseId": "arrowslits",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 50,
          "gold": 25,
          "vizier": 0,
          "oliveoil": 0,
          "total": 75,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "outpost"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "wooden-fortress",
                "outpost"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "balanced-projectiles",
        "name": "Balanced Projectiles",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Damage Technology 2/3"
        ],
        "classes": [
          "ranged",
          "damage",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/balanced-projectiles-3.png",
        "description": "Increase the ranged damage of all arrows and bolts by +1.",
        "variations": [
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188367,
            "attribName": "upgrade_ranged_damage_ii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "balanced-projectiles-3",
            "pbgid": 188270,
            "attribName": "upgrade_ranged_damage_ii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "balanced-projectiles",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "ranged",
                  "cavalry"
                ],
                [
                  "archer",
                  "ship"
                ]
              ],
              "id": [
                "longbowman",
                "zhuge-nu",
                "archer",
                "arbaletrier",
                "crossbowman",
                "wynguard-ranger",
                "javelin-thrower",
                "gilded-crossbowman",
                "gilded-archer",
                "yumi-ashigaru",
                "zhuge-nu",
                "bedouin-skirmisher",
                "desert-raider",
                "yumi-bannerman"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "biology",
        "name": "Biology",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "hr",
          "ja",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Lancer Technology"
        ],
        "classes": [
          "lancer",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/biology-4.png",
        "description": "Increase the health of all cavalry by +20%.",
        "variations": [
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "by"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 181943,
            "attribName": "upgrade_tech_university_biology_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "en"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 188503,
            "attribName": "upgrade_tech_university_biology_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "blacksmith"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "od"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "biology-4",
            "pbgid": 127850,
            "attribName": "upgrade_tech_university_biology",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "biology",
        "age": 4,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "university"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "cavalry"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "bloomery",
        "name": "Bloomery",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Damage Technology 1/3"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/bloomery-2.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "by"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187702,
            "attribName": "upgrade_melee_damage_i_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 210
            }
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "en"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "time": 0,
              "popcap": 0
            }
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "je"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "bloomery-2",
            "pbgid": 187694,
            "attribName": "upgrade_melee_damage_i",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "bloomery",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeAttack",
            "select": {
              "class": [
                [
                  "melee"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "boiling-oil",
        "name": "Boiling Oil",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/boiling-oil-3.png",
        "description": "Towers and Keeps gain a boiling oil attack against nearby units that deals 30 damage.",
        "variations": [
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 181948,
            "attribName": "upgrade_tech_university_murder_holes_4_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 450
            },
            "producedBy": [
              "compound-of-the-defender",
              "keep"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "castle-of-the-crow",
              "castle"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "je"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "keep",
              "fort-of-the-huntress"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "od"
            ],
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "keep",
              "sea-gate-castle"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "keep",
              "spasskaya-tower"
            ]
          },
          {
            "id": "boiling-oil-3",
            "pbgid": 128447,
            "attribName": "upgrade_tech_university_murder_holes_4",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "boiling-oil",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 200,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "keep"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "stone-wall-tower",
                "keep",
                "berkshire-palace",
                "elzbach-palace",
                "kremlin",
                "spasskaya-tower",
                "red-palace",
                "the-white-tower"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "boot-camp",
        "name": "Boot Camp",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Infantry Technology"
        ],
        "classes": [
          "infantry",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/boot-camp-2.png",
        "description": "Increase the health of all infantry by +15%.",
        "variations": [
          {
            "id": "boot-camp-2",
            "baseId": "boot-camp",
            "type": "technology",
            "name": "Boot Camp",
            "pbgid": 200220,
            "attribName": "upgrade_mil_camel_archers_improved_weapon_abb",
            "age": 2,
            "civs": [
              "ab"
            ],
            "description": "Increase the health of all infantry by +15%.",
            "classes": [
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/boot-camp-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.15,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "camel-handling",
        "name": "Camel Handling",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Camel Technology"
        ],
        "classes": [
          "camel",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/camel-handling-3.png",
        "description": "Increase the movement speed of camel units by +15%.",
        "variations": [
          {
            "id": "camel-handling-3",
            "baseId": "camel-handling",
            "type": "technology",
            "name": "Camel Handling",
            "pbgid": 200063,
            "attribName": "upgrade_camel_speed_boost_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Increase the movement speed of camel units by +15%.",
            "classes": [
              "camel",
              "technology"
            ],
            "displayClasses": [
              "Camel Technology"
            ],
            "unique": true,
            "costs": {
              "food": 75,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/camel-handling-3.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "camel-rider",
                    "camel-archer"
                  ]
                },
                "effect": "multiply",
                "value": 1.15,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "camel-rider-barding",
        "name": "Camel Rider Barding",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Camel Rider Technology 2/2"
        ],
        "classes": [
          "camel",
          "rider",
          "technology",
          "2/2"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/camel-rider-barding-4.png",
        "description": "Increase the armor of Camel Riders by +2.",
        "variations": [
          {
            "id": "camel-rider-barding-4",
            "baseId": "camel-rider-barding",
            "type": "technology",
            "name": "Camel Rider Barding",
            "pbgid": 200370,
            "attribName": "upgrade_camel_armor_abb",
            "age": 4,
            "civs": [
              "ab"
            ],
            "description": "Increase the armor of Camel Riders by +2.",
            "classes": [
              "camel",
              "rider",
              "technology",
              "2/2"
            ],
            "displayClasses": [
              "Camel Rider Technology 2/2"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/camel-rider-barding-4.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "camel-rider"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "camel-rider"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "camel-rider-shields",
        "name": "Camel Rider Shields",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Camel Rider Technology 1/2"
        ],
        "classes": [
          "camel",
          "rider",
          "technology",
          "1/2"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/camel-rider-shields-3.png",
        "description": "Grant Camel Riders shields, improving their melee armor by +3.",
        "variations": [
          {
            "id": "camel-rider-shields-3",
            "baseId": "camel-rider-shields",
            "type": "technology",
            "name": "Camel Rider Shields",
            "pbgid": 200252,
            "attribName": "upgrade_mil_mameluke_shields_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Grant Camel Riders shields, improving their melee armor by +3.",
            "classes": [
              "camel",
              "rider",
              "technology",
              "1/2"
            ],
            "displayClasses": [
              "Camel Rider Technology 1/2"
            ],
            "unique": true,
            "costs": {
              "food": 75,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/camel-rider-shields-3.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "camel-rider"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "camel-support",
        "name": "Camel Support",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Camel Technology"
        ],
        "classes": [
          "camel",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/camel-support-4.png",
        "description": "Camels increase the armor of nearby infantry by +2.",
        "variations": [
          {
            "id": "camel-support-4",
            "baseId": "camel-support",
            "type": "technology",
            "name": "Camel Support",
            "pbgid": 200768,
            "attribName": "upgrade_mil_camel_support_abb",
            "age": 4,
            "civs": [
              "ab"
            ],
            "description": "Camels increase the armor of nearby infantry by +2.",
            "classes": [
              "camel",
              "technology"
            ],
            "displayClasses": [
              "Camel Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/camel-support-4.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ],
                  "id": [
                    "camel-rider",
                    "camel-archer"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "cannon-emplacement",
        "name": "Cannon Emplacement",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/cannon-emplacement-4.png",
        "description": "Add a defensive cannon emplacement to this structure.",
        "variations": [
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "by"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "de"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "hr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 282,
              "gold": 94,
              "vizier": 0,
              "oliveoil": 0,
              "total": 376,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "castle-of-the-crow",
              "castle"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "je"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "keep",
              "fort-of-the-huntress"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 186400,
            "attribName": "upgrade_outpost_cannon_mon",
            "civs": [
              "mo"
            ],
            "description": "Add a defensive cannon emplacement to this structure. Only one weapon emplacement can be added.",
            "producedBy": [
              "outpost"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "od"
            ],
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "cannon-emplacement-4",
            "pbgid": 185626,
            "attribName": "upgrade_keep_cannon",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "cannon-emplacement",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 375,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "keep"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "outpost",
                "keep",
                "berkshire-palace",
                "elzbach-palace",
                "kremlin",
                "spasskaya-tower",
                "red-palace",
                "the-white-tower"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "chemistry",
        "name": "Chemistry",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Gunpowder Technology"
        ],
        "classes": [
          "gunpowder",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/chemistry-4.png",
        "description": "Increase the damage of gunpowder units by +20%.",
        "variations": [
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "by"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ch"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "time": 0,
              "popcap": 0
            }
          },
          {
            "id": "chemistry-4",
            "pbgid": 182078,
            "attribName": "upgrade_siege_chemistry_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "en"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "college-of-artillery",
              "university"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "je"
            ],
            "producedBy": [
              "college-of-artillery",
              "university"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 191272,
            "attribName": "upgrade_siege_chemistry_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "blacksmith"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "od"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 124734,
            "attribName": "upgrade_siege_chemistry",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "chemistry-4",
            "pbgid": 2127649,
            "attribName": "upgrade_siege_chemistry_chi_ha_01",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "chemistry",
        "age": 4,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "university"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "gunpowder"
                ],
                [
                  "warship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "siegeAttack",
            "select": {
              "class": [
                [
                  "gunpowder"
                ],
                [
                  "warship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "composite-bows",
        "name": "Composite Bows",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Archer Technology"
        ],
        "classes": [
          "archer",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/composite-bows-3.png",
        "description": "Increase the attack speed of Archers by +33%.",
        "variations": [
          {
            "id": "composite-bows-3",
            "baseId": "composite-bows",
            "type": "technology",
            "name": "Composite Bows",
            "pbgid": 200372,
            "attribName": "upgrade_mameluke_damage_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Increase the attack speed of Archers by +33%.",
            "classes": [
              "archer",
              "technology"
            ],
            "displayClasses": [
              "Archer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/composite-bows-3.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "archer"
                  ]
                },
                "effect": "multiply",
                "value": 0.75,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "court-architects",
        "name": "Court Architects",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Building Technology"
        ],
        "classes": [
          "building",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/court-architects-3.png",
        "description": "Increase the health of all buildings by +30%.",
        "variations": [
          {
            "id": "court-architects-3",
            "pbgid": 2108028,
            "attribName": "upgrade_tech_university_architecture_compound_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 181942,
            "attribName": "upgrade_tech_university_architecture_4_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "od"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "court-architects-4",
            "pbgid": 128427,
            "attribName": "upgrade_tech_university_architecture_4",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "court-architects",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 0,
          "vizier": 0,
          "oliveoil": 0,
          "total": 0,
          "popcap": 0,
          "time": 1080
        },
        "producedBy": [
          "compound-of-the-defender"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "building"
                ],
                [
                  "landmark"
                ],
                [
                  "wonder"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.3,
            "type": "passive"
          }
        ],
        "shared": {
          "court-architects-4": {
            "name": "Court Architects",
            "age": 4,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 300,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "university"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/court-architects-4.png",
            "id": "court-architects-4"
          }
        }
      },
      {
        "id": "crosscut-saw",
        "name": "Crosscut Saw",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Wood Gathering Technology 3/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/crosscut-saw-4.png",
        "description": "Increase Villagers' gathering rate for Wood by 15% and Wood gatherers carry capacity by +5.",
        "variations": [
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 181940,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 900
            }
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 175,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 525,
              "popcap": 0,
              "time": 75
            }
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 2136381,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "kura-storehouse",
              "lumber-camp"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "od"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "crosscut-saw-4",
            "pbgid": 171837,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "crosscut-saw",
        "age": 4,
        "costs": {
          "food": 250,
          "wood": 0,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 750,
          "popcap": 0,
          "time": 75
        },
        "producedBy": [
          "lumber-camp"
        ],
        "effects": [
          {
            "property": "woodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "culture-wing",
        "name": "Culture Wing",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-1.png",
        "description": "The following cultural technologies become available:\n• Preservation of Knowledge (Age II)\n• Medical Centers (Age III)\n• Proselytization (Age IV)",
        "variations": [
          {
            "id": "culture-wing-1",
            "baseId": "culture-wing",
            "type": "technology",
            "name": "Culture Wing",
            "pbgid": 2033115,
            "attribName": "upgrade_add_culture_wing",
            "age": 1,
            "civs": [
              "ab"
            ],
            "description": "The following cultural technologies become available:\n• Preservation of Knowledge (Age II)\n• Medical Centers (Age III)\n• Proselytization (Age IV)",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 105
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-1.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "house-of-wisdom"
                  ]
                },
                "effect": "change",
                "value": 5000,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "cupellation",
        "name": "Cupellation",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Mining Technology 3/3"
        ],
        "classes": [
          "mining",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/cupellation-4.png",
        "description": "Gold gatherers drop off 15% more resources.",
        "variations": [
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 181905,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 900
            }
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 175,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 525,
              "popcap": 0,
              "time": 75
            }
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 2127599,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge",
              "kura-storehouse"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 188052,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "od"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "cupellation-4",
            "pbgid": 171824,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "cupellation",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 250,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 750,
          "popcap": 0,
          "time": 75
        },
        "producedBy": [
          "mining-camp"
        ],
        "effects": [
          {
            "property": "goldGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          },
          {
            "property": "stoneGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "damascus-steel",
        "name": "Damascus Steel",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Damage Technology 3/3"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/damascus-steel-4.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188020,
            "attribName": "upgrade_melee_damage_iii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "time": 0,
              "popcap": 0
            }
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188054,
            "attribName": "upgrade_melee_damage_iii_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "damascus-steel-4",
            "pbgid": 188010,
            "attribName": "upgrade_melee_damage_iii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "damascus-steel",
        "age": 4,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeAttack",
            "select": {
              "class": [
                [
                  "melee"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "decarbonization",
        "name": "Decarbonization",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Damage Technology 2/3"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/decarbonization-3.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 188005,
            "attribName": "upgrade_melee_damage_ii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "time": 0,
              "popcap": 0
            }
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "decarbonization-3",
            "pbgid": 187997,
            "attribName": "upgrade_melee_damage_ii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "decarbonization",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeAttack",
            "select": {
              "class": [
                [
                  "melee"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "double-broadax",
        "name": "Double Broadax",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Wood Gathering Technology 1/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/double-broadax-2.png",
        "description": "Increase Villagers' gathering rate for Wood by 15%.",
        "variations": [
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "by"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 181938,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 157
            }
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "en"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 35,
              "wood": 0,
              "stone": 0,
              "gold": 70,
              "vizier": 0,
              "oliveoil": 0,
              "total": 105,
              "popcap": 0,
              "time": 45
            }
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 2136379,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "kura-storehouse",
              "lumber-camp"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "je"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "od"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "double-broadax-2",
            "pbgid": 128070,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "double-broadax",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "vizier": 0,
          "oliveoil": 0,
          "total": 150,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "lumber-camp"
        ],
        "effects": [
          {
            "property": "woodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "drift-nets",
        "name": "Drift Nets",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Fishing Technology 2/2"
        ],
        "classes": [
          "fishing",
          "technology",
          "2/2"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/drift-nets-3.png",
        "description": "Increase the gathering rate of Fishing Ships by +15%, carry capacity by +20 and move speed by +10%.",
        "variations": [
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "by"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2034792,
            "attribName": "upgrade_econ_drift_nets_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            }
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "en"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 105,
              "stone": 0,
              "gold": 245,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            }
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "je"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "od"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "drift-nets-3",
            "pbgid": 2033746,
            "attribName": "upgrade_econ_drift_nets",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "drift-nets",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "foodGatherRate",
            "select": {
              "id": [
                "fishing-boat",
                "lodya-fishing-boat"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          },
          {
            "property": "carryCapacity",
            "select": {
              "id": [
                "fishing-boat",
                "lodya-fishing-boat"
              ]
            },
            "effect": "change",
            "value": 20,
            "type": "passive"
          },
          {
            "property": "moveSpeed",
            "select": {
              "id": [
                "fishing-boat",
                "lodya-fishing-boat"
              ]
            },
            "effect": "multiply",
            "value": 1.1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "economic-wing",
        "name": "Economic Wing",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-1.png",
        "description": "Constructs the Economic Wing.\nThe following economic technologies become available:\n• Fertile Crescent (Age II)\n• Agriculture (Age III)\n• Improved Processing (Age IV)",
        "variations": [
          {
            "id": "economic-wing-1",
            "baseId": "economic-wing",
            "type": "technology",
            "name": "Economic Wing",
            "pbgid": 2033116,
            "attribName": "upgrade_add_economy_wing",
            "age": 1,
            "civs": [
              "ab"
            ],
            "description": "Constructs the Economic Wing.\nThe following economic technologies become available:\n• Fertile Crescent (Age II)\n• Agriculture (Age III)\n• Improved Processing (Age IV)",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 105
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-1.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "house-of-wisdom"
                  ]
                },
                "effect": "change",
                "value": 5000,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "elite-army-tactics",
        "name": "Elite Army Tactics",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Infantry Technology"
        ],
        "classes": [
          "melee",
          "infantry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/elite-army-tactics-4.png",
        "description": "Increase the health of all melee infantry by +20% and their damage by +20%.",
        "variations": [
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "by"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190781,
            "attribName": "upgrade_manatarms_elite_army_tactics_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "en"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "je"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190780,
            "attribName": "upgrade_manatarms_elite_army_tactics_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "blacksmith"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "od"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "elite-army-tactics-4",
            "pbgid": 190779,
            "attribName": "upgrade_manatarms_elite_army_tactics",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "elite-army-tactics",
        "age": 4,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "university"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "melee",
                  "infantry"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "meleeAttack",
            "select": {
              "class": [
                [
                  "melee",
                  "infantry"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "explosives",
        "name": "Explosives",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/explosives-4.png",
        "description": "Increase the damage of Incendiary Ships by +40%.",
        "variations": [
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "by"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 2063167,
            "attribName": "upgrade_naval_explosives_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 540
            }
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "en"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "je"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "od"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "explosives-4",
            "pbgid": 196883,
            "attribName": "upgrade_naval_explosives",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "explosives",
        "age": 4,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "fireAttack",
            "select": {
              "class": [
                [
                  "incendiary",
                  "ship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.4,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "extended-lines",
        "name": "Extended Lines",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Fishing Technology 1/2"
        ],
        "classes": [
          "fishing",
          "technology",
          "1/2"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/extended-lines-2.png",
        "description": "Increase the gathering rate of Fishing Ships by +20% and carry capacity by +10.",
        "variations": [
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "by"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2034793,
            "attribName": "upgrade_econ_extended_lines_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 158
            }
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "en"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 53,
              "stone": 0,
              "gold": 123,
              "vizier": 0,
              "oliveoil": 0,
              "total": 176,
              "popcap": 0,
              "time": 30
            }
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "je"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "od"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "extended-lines-2",
            "pbgid": 2033745,
            "attribName": "upgrade_econ_extended_lines",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "extended-lines",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 75,
          "stone": 0,
          "gold": 175,
          "vizier": 0,
          "oliveoil": 0,
          "total": 250,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "foodGatherRate",
            "select": {
              "id": [
                "fishing-boat",
                "lodya-fishing-boat"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "carryCapacity",
            "select": {
              "id": [
                "fishing-boat",
                "lodya-fishing-boat"
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "extra-hammocks",
        "name": "Extra Hammocks",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/extra-hammocks-3.png",
        "description": "Increases the number of arrows fired by Archer Ships by +1.",
        "variations": [
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "by"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101966,
            "attribName": "upgrade_naval_extra_hammocks_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 150
            }
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "en"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "je"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "od"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "extra-hammocks-3",
            "pbgid": 2101642,
            "attribName": "upgrade_naval_extra_hammocks",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "extra-hammocks",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "archer",
                  "ship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "fertile-crescent",
        "name": "Fertile Crescent",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Economic Technology"
        ],
        "classes": [
          "economic",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/fertile-crescent-2.png",
        "description": "Reduce the cost of Economy buildings and Houses by 30%.",
        "variations": [
          {
            "id": "fertile-crescent-2",
            "baseId": "fertile-crescent",
            "type": "technology",
            "name": "Fertile Crescent",
            "pbgid": 2108050,
            "attribName": "upgrade_econ_fertile_crescent_abb",
            "age": 2,
            "civs": [
              "ab"
            ],
            "description": "Reduce the cost of Economy buildings and Houses by 30%.",
            "classes": [
              "economic",
              "technology"
            ],
            "displayClasses": [
              "Economic Technology"
            ],
            "unique": true,
            "costs": {
              "food": 25,
              "wood": 0,
              "stone": 0,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 100,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fertile-crescent-2.png",
            "effects": [
              {
                "property": "foodCost",
                "select": {
                  "id": [
                    "house",
                    "mill",
                    "lumber-camp",
                    "dock",
                    "mining-camp"
                  ]
                },
                "effect": "multiply",
                "value": 0.7,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fertilization",
        "name": "Fertilization",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Food Gathering Technology 2/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/fertilization-3.png",
        "description": "Increase Villagers' gathering rate for Food by 15%. Does not apply to hunted meat.",
        "variations": [
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 2159810,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3_byz",
            "civs": [
              "by"
            ],
            "producedBy": [
              "grand-winery"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 181875,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "en"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 70,
              "stone": 0,
              "gold": 175,
              "vizier": 0,
              "oliveoil": 0,
              "total": 245,
              "popcap": 0,
              "time": 60
            }
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "je"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "od"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "fertilization-3",
            "pbgid": 171292,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "fertilization",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "foodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "fitted-leatherwork",
        "name": "Fitted Leatherwork",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Armor Technology 1/3"
        ],
        "classes": [
          "melee",
          "armor",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/fitted-leatherwork-2.png",
        "description": "Increase the melee armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "by"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188118,
            "attribName": "upgrade_melee_armor_i_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 210
            }
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "en"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "je"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "fitted-leatherwork-2",
            "pbgid": 188116,
            "attribName": "upgrade_melee_armor_i",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "fitted-leatherwork",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "forestry",
        "name": "Forestry",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Woodcutting Technology"
        ],
        "classes": [
          "woodcutting",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/forestry-1.png",
        "description": "Double the rate at which Villagers chop down trees.",
        "variations": [
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "by"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 181937,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 135
            }
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "en"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 18,
              "wood": 0,
              "stone": 0,
              "gold": 35,
              "vizier": 0,
              "oliveoil": 0,
              "total": 53,
              "popcap": 0,
              "time": 45
            }
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 2136382,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "kura-storehouse",
              "lumber-camp"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "je"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 188630,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "od"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "forestry-1",
            "pbgid": 171999,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "forestry",
        "age": 1,
        "costs": {
          "food": 25,
          "wood": 0,
          "stone": 0,
          "gold": 50,
          "vizier": 0,
          "oliveoil": 0,
          "total": 75,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "lumber-camp"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "fortify-outpost",
        "name": "Fortify Outpost",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "od",
          "ot",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Defensive Emplacement"
        ],
        "classes": [
          "defensive",
          "emplacement"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/fortify-outpost-2.png",
        "description": "Add +1000 health and +5 fire armor to this Outpost.",
        "variations": [
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "by"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "de"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "en"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "je"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "toll-outpost"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "od"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "fortify-outpost-2",
            "pbgid": 127331,
            "attribName": "upgrade_outpost_stone",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "fortify-outpost",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 100,
          "gold": 0,
          "vizier": 0,
          "oliveoil": 0,
          "total": 100,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "outpost"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "outpost"
              ]
            },
            "effect": "change",
            "value": 1000,
            "type": "passive"
          },
          {
            "property": "fireArmor",
            "select": {
              "id": [
                "outpost"
              ]
            },
            "effect": "change",
            "value": 5,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "fresh-foodstuffs",
        "name": "Fresh Foodstuffs",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/fresh-foodstuffs-2.png",
        "description": "Reduce the cost to produce Villagers by -35%.",
        "variations": [
          {
            "id": "fresh-foodstuffs-2",
            "baseId": "fresh-foodstuffs",
            "type": "technology",
            "name": "Fresh Foodstuffs",
            "pbgid": 199986,
            "attribName": "upgrade_econ_improved_carry_capacity_abb",
            "age": 2,
            "civs": [
              "ab"
            ],
            "description": "Reduce the cost to produce Villagers by -35%.",
            "classes": [
              "villager",
              "technology"
            ],
            "displayClasses": [
              "Villager Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 125,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "mill"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fresh-foodstuffs-2.png",
            "effects": [
              {
                "property": "foodCost",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.65,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "geometry",
        "name": "Geometry",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Trebuchet Technology"
        ],
        "classes": [
          "trebuchet",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/geometry-4.png",
        "description": "Increase damage of Trebuchets by +20%.",
        "variations": [
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 182082,
            "attribName": "upgrade_siege_mathematics_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 540
            }
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "en"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "je"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 2077145,
            "attribName": "upgrade_siege_mathematics_mon",
            "civs": [
              "mo"
            ],
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "od"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "geometry-4",
            "pbgid": 127863,
            "attribName": "upgrade_siege_mathematics",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "geometry",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 225,
          "vizier": 0,
          "oliveoil": 0,
          "total": 325,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "siege-workshop"
        ],
        "effects": [
          {
            "property": "siegeAttack",
            "select": {
              "id": [
                "huihui-pao",
                "counterweight-trebuchet",
                "traction-trebuchet"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "grand-bazaar",
        "name": "Grand Bazaar",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/grand-bazaar-2.png",
        "description": "Traders and Trade Ships also return with a secondary resource. This resource is 25% the base Gold value and is set at the market.",
        "variations": [
          {
            "id": "grand-bazaar-2",
            "baseId": "grand-bazaar",
            "type": "technology",
            "name": "Grand Bazaar",
            "pbgid": 201743,
            "attribName": "upgrade_trade_commodity_trade_abb",
            "age": 2,
            "civs": [
              "ab"
            ],
            "description": "Traders and Trade Ships also return with a secondary resource. This resource is 25% the base Gold value and is set at the market.",
            "classes": [
              "trade",
              "technology"
            ],
            "displayClasses": [
              "Trade Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/grand-bazaar-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "trader"
                  ]
                },
                "effect": "change",
                "value": 25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "greased-axles",
        "name": "Greased Axles",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/greased-axles-3.png",
        "description": "Increase the movement speed of siege engines by +15%.",
        "variations": [
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "by"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191270,
            "attribName": "upgrade_siege_weapon_speed_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "en"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "je"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191271,
            "attribName": "upgrade_siege_weapon_speed_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "od"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "greased-axles-3",
            "pbgid": 191268,
            "attribName": "upgrade_siege_weapon_speed",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "greased-axles",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "siege-workshop"
        ],
        "effects": [
          {
            "property": "moveSpeed",
            "select": {
              "class": [
                [
                  "siege"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "heated-shot",
        "name": "Heated Shot",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/heated-shot-4.png",
        "description": "Archer Ship arrows light enemy Ships on fire, dealing damage over time.",
        "variations": [
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "by"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101967,
            "attribName": "upgrade_naval_heated_shot_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 540
            }
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "en"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "je"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "od"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "heated-shot-4",
            "pbgid": 2101720,
            "attribName": "upgrade_naval_heated_shot",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "heated-shot",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 200,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "archer",
                  "ship"
                ]
              ]
            },
            "effect": "change",
            "value": 6,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "herbal-medicine",
        "name": "Herbal Medicine",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Healing Technology"
        ],
        "classes": [
          "healing",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/herbal-medicine-3.png",
        "description": "Increase the healing rate of religious units by +60%.",
        "variations": [
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 181951,
            "attribName": "upgrade_unit_religious_herbal_medicine_4_sul",
            "civs": [
              "de"
            ],
            "description": "Increase the healing rate of Scholars by +60%.",
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 184583,
            "attribName": "upgrade_unit_religious_herbal_medicine_4_hre",
            "civs": [
              "hr"
            ],
            "description": "Increase the healing rate of Prelates by +60%.",
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "temple-of-equality",
              "shinto-shrine",
              "buddhist-temple"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "prayer-tent"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 184583,
            "attribName": "upgrade_unit_religious_herbal_medicine_4_hre",
            "civs": [
              "od"
            ],
            "description": "Increase the healing rate of Prelates by +60%.",
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "abbey-of-the-trinity",
              "monastery"
            ]
          },
          {
            "id": "herbal-medicine-3",
            "pbgid": 129401,
            "attribName": "upgrade_unit_religious_herbal_medicine_4",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "shaolin-monastery",
              "monastery"
            ]
          }
        ],
        "baseId": "herbal-medicine",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 275,
          "vizier": 0,
          "oliveoil": 0,
          "total": 275,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "monastery"
        ],
        "effects": [
          {
            "property": "healingRate",
            "select": {
              "id": [
                "monk",
                "scholar",
                "imam",
                "dervish",
                "warrior-monk",
                "shaman",
                "prelate",
                "shinto-priest",
                "buddhist-monk",
                "shaolin-monk"
              ]
            },
            "effect": "multiply",
            "value": 1.6,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "horticulture",
        "name": "Horticulture",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Food Gathering Technology 1/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/horticulture-2.png",
        "description": "Increase Villagers' gathering rate for Food by 15%. Does not apply to hunted meat.",
        "variations": [
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 2159809,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2_byz",
            "civs": [
              "by"
            ],
            "producedBy": [
              "grand-winery"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 181874,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 157
            }
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "en"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 35,
              "stone": 0,
              "gold": 70,
              "vizier": 0,
              "oliveoil": 0,
              "total": 105,
              "popcap": 0,
              "time": 45
            }
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "je"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "od"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "horticulture-2",
            "pbgid": 128049,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "horticulture",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 100,
          "vizier": 0,
          "oliveoil": 0,
          "total": 150,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "foodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "improved-processing",
        "name": "Improved Processing",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Economic Technology"
        ],
        "classes": [
          "economic",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/improved-processing-4.png",
        "description": "Villagers drop off +8% more resources.",
        "variations": [
          {
            "id": "improved-processing-4",
            "baseId": "improved-processing",
            "type": "technology",
            "name": "Improved Processing",
            "pbgid": 1622182,
            "attribName": "upgrade_econ_improved_processing_abb",
            "age": 4,
            "civs": [
              "ab"
            ],
            "description": "Villagers drop off +8% more resources.",
            "classes": [
              "economic",
              "technology"
            ],
            "displayClasses": [
              "Economic Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/improved-processing-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "incendiaries",
        "name": "Incendiaries",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/incendiaries-3.png",
        "description": "Incendiary Ships gain +20% explosion range.",
        "variations": [
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101969,
            "attribName": "upgrade_naval_incendiaries_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 150
            }
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "en"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "je"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "od"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "incendiaries-3",
            "pbgid": 2101633,
            "attribName": "upgrade_naval_incendiaries",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "incendiaries",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "maxRange",
            "select": {
              "class": [
                [
                  "incendiary",
                  "ship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "incendiary-arrows",
        "name": "Incendiary Arrows",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Technology"
        ],
        "classes": [
          "ranged",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/incendiary-arrows-4.png",
        "description": "Increase the damage of ranged units by +20%. Does not apply to gunpowder units.",
        "variations": [
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "by"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 182074,
            "attribName": "upgrade_ranged_incendiary_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "en"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "je"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 188332,
            "attribName": "upgrade_ranged_incendiary_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "blacksmith"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "od"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 127838,
            "attribName": "upgrade_ranged_incendiary",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "incendiary-arrows-4",
            "pbgid": 2127654,
            "attribName": "upgrade_ranged_incendiary_chi_ha_01",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "incendiary-arrows",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 300,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "university"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "id": [
                "longbowman",
                "wynguard-ranger",
                "zhuge-nu",
                "archer",
                "arbaletrier",
                "crossbowman",
                "tower-elepahnt",
                "mangudai",
                "khaganate-elite-mangudai",
                "khaganate-horse-archer",
                "horse-archer",
                "camel-archer",
                "khan",
                "town-center",
                "keep",
                "outpost",
                "stone-wall-tower",
                "barbican-of-the-sun",
                "longbowman",
                "zhuge-nu",
                "archer",
                "arbaletrier",
                "crossbowman",
                "wynguard-ranger",
                "javelin-thrower",
                "gilded-crossbowman",
                "gilded-archer",
                "yumi-ashigaru",
                "zhuge-nu",
                "bedouin-skirmisher",
                "desert-raider",
                "yumi-bannerman",
                "berkshire-palace",
                "elzbach-palace",
                "kremlin",
                "spasskaya-tower",
                "red-palace",
                "the-white-tower"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "insulated-helm",
        "name": "Insulated Helm",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Armor Technology 2/3"
        ],
        "classes": [
          "melee",
          "armor",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/insulated-helm-3.png",
        "description": "Increase the melee armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188125,
            "attribName": "upgrade_melee_armor_ii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "insulated-helm-3",
            "pbgid": 188121,
            "attribName": "upgrade_melee_armor_ii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "insulated-helm",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "iron-undermesh",
        "name": "Iron Undermesh",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Armor Technology 1/3"
        ],
        "classes": [
          "ranged",
          "armor",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/iron-undermesh-2.png",
        "description": "Increase the ranged armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "by"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188363,
            "attribName": "upgrade_ranged_armor_i_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 210
            }
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "en"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "je"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "iron-undermesh-2",
            "pbgid": 188266,
            "attribName": "upgrade_ranged_armor_i",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "iron-undermesh",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "lightweight-beams",
        "name": "Lightweight Beams",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Battering Ram Technology"
        ],
        "classes": [
          "battering",
          "ram",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/lightweight-beams-4.png",
        "description": "Increase Battering Ram attack speed by +20% and reduce their field construction time by -50%.",
        "variations": [
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "by"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117415,
            "attribName": "upgrade_ram_scaling_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "en"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "je"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2119227,
            "attribName": "upgrade_ram_scaling_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "od"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "lightweight-beams-4",
            "pbgid": 2117424,
            "attribName": "upgrade_ram_scaling",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "lightweight-beams",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 300,
          "stone": 0,
          "gold": 400,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "siege-workshop"
        ],
        "effects": [
          {
            "property": "attackSpeed",
            "select": {
              "id": [
                "battering-ram",
                "clocktower-battering-ram",
                "cheirosiphon"
              ]
            },
            "effect": "multiply",
            "value": 0.83,
            "type": "passive"
          },
          {
            "property": "buildTime",
            "select": {
              "id": [
                "battering-ram",
                "clocktower-battering-ram",
                "cheirosiphon"
              ]
            },
            "effect": "multiply",
            "value": 0.5,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "lumber-preservation",
        "name": "Lumber Preservation",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Wood Gathering Technology 2/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/lumber-preservation-3.png",
        "description": "Increase Villagers' gathering rate for Wood by 15%.",
        "variations": [
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "by"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 181939,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "en"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 70,
              "wood": 0,
              "stone": 0,
              "gold": 175,
              "vizier": 0,
              "oliveoil": 0,
              "total": 245,
              "popcap": 0,
              "time": 60
            }
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 2136380,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "kura-storehouse",
              "lumber-camp"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "je"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "od"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "lumber-preservation-3",
            "pbgid": 171836,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "lumber-preservation",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "lumber-camp"
        ],
        "effects": [
          {
            "property": "woodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "master-smiths",
        "name": "Master Smiths",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Melee Armor Technology 3/3"
        ],
        "classes": [
          "melee",
          "armor",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/master-smiths-4.png",
        "description": "Increase the melee armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188126,
            "attribName": "upgrade_melee_armor_iii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188127,
            "attribName": "upgrade_melee_armor_iii_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "master-smiths-4",
            "pbgid": 188122,
            "attribName": "upgrade_melee_armor_iii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "master-smiths",
        "age": 4,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "meleeArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "medical-centers",
        "name": "Medical Centers",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/medical-centers-3.png",
        "description": "Town Centers and Keeps heal nearby units for +2 health every 1 second.",
        "variations": [
          {
            "id": "medical-centers-3",
            "baseId": "medical-centers",
            "type": "technology",
            "name": "Medical Centers",
            "pbgid": 201794,
            "attribName": "upgrade_cul_medical_centers_abb",
            "age": 3,
            "civs": [
              "ab"
            ],
            "description": "Town Centers and Keeps heal nearby units for +2 health every 1 second.",
            "classes": [
              "defensive",
              "technology"
            ],
            "displayClasses": [
              "Defensive Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/medical-centers-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "keep"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "military-academy",
        "name": "Military Academy",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Production Technology"
        ],
        "classes": [
          "production",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/military-academy-3.png",
        "description": "Increase the production speed of infantry, cavalry, siege, and transport units at buildings by 33%.\nDoes not affect religious units or other support units.",
        "variations": [
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "by"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 181941,
            "attribName": "upgrade_tech_military_academy_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "en"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "je"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "military-academy-3",
            "pbgid": 128454,
            "attribName": "upgrade_tech_military_academy",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "military-academy",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "buildTime",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "melee",
                  "cavalry"
                ],
                [
                  "ranged",
                  "cavalry"
                ],
                [
                  "siege"
                ],
                [
                  "transport"
                ]
              ]
            },
            "effect": "multiply",
            "value": 0.8,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "military-wing",
        "name": "Military Wing",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-1.png",
        "description": "Constructs the Military Wing. Upon completion, grants 2 Spearmen & 2 Archers (Age II), 2 Camel Riders (Age III), or 3 Handcannoneers (Age IV).\nUnlocks:\n•Boot Camp (Age II)\n•Composite Bows (Age III)\n•Camel Support (Age IV)",
        "variations": [
          {
            "id": "military-wing-1",
            "baseId": "military-wing",
            "type": "technology",
            "name": "Military Wing",
            "pbgid": 2033117,
            "attribName": "upgrade_add_military_wing",
            "age": 1,
            "civs": [
              "ab"
            ],
            "description": "Constructs the Military Wing. Upon completion, grants 2 Spearmen & 2 Archers (Age II), 2 Camel Riders (Age III), or 3 Handcannoneers (Age IV).\nUnlocks:\n•Boot Camp (Age II)\n•Composite Bows (Age III)\n•Camel Support (Age IV)",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 105
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-1.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "house-of-wisdom"
                  ]
                },
                "effect": "change",
                "value": 5000,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "naval-arrowslits",
        "name": "Naval Arrowslits",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/naval-arrowslits-2.png",
        "description": "Add a defensive arrowslit to this Dock which only attacks ships.",
        "variations": [
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "by"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "de"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "en"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "je"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "od"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "naval-arrowslits-2",
            "pbgid": 2076426,
            "attribName": "upgrade_naval_arrowslits",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "naval-arrowslits",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 75,
          "stone": 125,
          "gold": 0,
          "vizier": 0,
          "oliveoil": 0,
          "total": 200,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [],
        "shared": {}
      },
      {
        "id": "phalanx",
        "name": "Phalanx",
        "type": "technology",
        "civs": [
          "ab",
          "ay"
        ],
        "unique": true,
        "displayClasses": [
          "Spearman Technology"
        ],
        "classes": [
          "spearman",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/phalanx-2.png",
        "description": "Increase the attack range of Spearmen by +100%.",
        "variations": [
          {
            "id": "phalanx-2",
            "pbgid": 200371,
            "attribName": "upgrade_camel_archer_comp_bow_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "phalanx-2",
            "pbgid": 200371,
            "attribName": "upgrade_camel_archer_comp_bow_abb",
            "civs": [
              "ay"
            ]
          }
        ],
        "baseId": "phalanx",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "barracks"
        ],
        "effects": [
          {
            "property": "maxRange",
            "select": {
              "id": [
                "spearman"
              ]
            },
            "effect": "multiply",
            "value": 2,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "piety",
        "name": "Piety",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/piety-4.png",
        "description": "Increase the health of religious units by +40.",
        "variations": [
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 181952,
            "attribName": "upgrade_unit_religious_piety_4_sul",
            "civs": [
              "de"
            ],
            "description": "Increase the health of Scholars by +40.",
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 135
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 184600,
            "attribName": "upgrade_unit_religious_piety_4_hre",
            "civs": [
              "hr"
            ],
            "description": "Increase the health of Prelates by +40.",
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "temple-of-equality",
              "shinto-shrine",
              "buddhist-temple"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 184856,
            "attribName": "upgrade_unit_religious_piety_4_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "prayer-tent"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 184600,
            "attribName": "upgrade_unit_religious_piety_4_hre",
            "civs": [
              "od"
            ],
            "description": "Increase the health of Prelates by +40.",
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "abbey-of-the-trinity",
              "monastery"
            ]
          },
          {
            "id": "piety-4",
            "pbgid": 129403,
            "attribName": "upgrade_unit_religious_piety_4",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "shaolin-monastery",
              "monastery"
            ]
          }
        ],
        "baseId": "piety",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 325,
          "vizier": 0,
          "oliveoil": 0,
          "total": 325,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "monastery"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "monk",
                "scholar",
                "imam",
                "dervish",
                "warrior-monk",
                "shaman",
                "prelate",
                "shinto-priest",
                "buddhist-monk",
                "shaolin-monk"
              ]
            },
            "effect": "change",
            "value": 40,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "platecutter-point",
        "name": "Platecutter Point",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Damage Technology 3/3"
        ],
        "classes": [
          "ranged",
          "damage",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/platecutter-point-4.png",
        "description": "Increase the ranged damage of all arrows and bolts by +1.",
        "variations": [
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188368,
            "attribName": "upgrade_ranged_damage_iii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188374,
            "attribName": "upgrade_ranged_damage_iii_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "platecutter-point-4",
            "pbgid": 188271,
            "attribName": "upgrade_ranged_damage_iii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "platecutter-point",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "ranged",
                  "cavalry"
                ],
                [
                  "archer",
                  "ship"
                ]
              ],
              "id": [
                "longbowman",
                "zhuge-nu",
                "archer",
                "arbaletrier",
                "crossbowman",
                "wynguard-ranger",
                "javelin-thrower",
                "gilded-crossbowman",
                "gilded-archer",
                "yumi-ashigaru",
                "zhuge-nu",
                "bedouin-skirmisher",
                "desert-raider",
                "yumi-bannerman"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "precision-cross-breeding",
        "name": "Precision Cross-Breeding",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Food Gathering Technology 3/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/precision-cross-breeding-4.png",
        "description": "Increase Villagers' gathering rate for Food by 15%. Does not apply to hunted meat.",
        "variations": [
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 2159811,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4_byz",
            "civs": [
              "by"
            ],
            "description": "Increase Villagers' gathering rate for Food by 20%. Does not apply to hunted meat.",
            "producedBy": [
              "grand-winery"
            ],
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              }
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 181876,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 900
            }
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 175,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 525,
              "popcap": 0,
              "time": 75
            }
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "od"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "precision-cross-breeding-4",
            "pbgid": 171293,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "precision-cross-breeding",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 250,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 750,
          "popcap": 0,
          "time": 75
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "foodGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "preservation-of-knowledge",
        "name": "Preservation of Knowledge",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Research Technology"
        ],
        "classes": [
          "research",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/preservation-of-knowledge-2.png",
        "description": "Reduce the cost of all technology and Age advancements by -20%.",
        "variations": [
          {
            "id": "preservation-of-knowledge-2",
            "baseId": "preservation-of-knowledge",
            "type": "technology",
            "name": "Preservation of Knowledge",
            "pbgid": 201795,
            "attribName": "upgrade_cul_cheaper_research_abb",
            "age": 2,
            "civs": [
              "ab"
            ],
            "description": "Reduce the cost of all technology and Age advancements by -20%.",
            "classes": [
              "research",
              "technology"
            ],
            "displayClasses": [
              "Research Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 25,
              "stone": 0,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 100,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/preservation-of-knowledge-2.png",
            "effects": [
              {
                "property": "goldCost",
                "select": {
                  "class": [
                    [
                      "technology"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              },
              {
                "property": "foodCost",
                "select": {
                  "class": [
                    [
                      "technology"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              },
              {
                "property": "woodCost",
                "select": {
                  "class": [
                    [
                      "technology"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "professional-scouts",
        "name": "Professional Scouts",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Hunting Technology"
        ],
        "classes": [
          "hunting",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/professional-scouts-2.png",
        "description": "Scouts gain the ability to carry animal carcasses and +100% damage against wild animals.\nScouts move -35% slower while carrying and cannot pick up Boar.",
        "variations": [
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 2159813,
            "attribName": "upgrade_scout_forester_byz",
            "civs": [
              "by"
            ],
            "producedBy": [
              "grand-winery"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 182075,
            "attribName": "upgrade_scout_forester_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 262
            }
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "en"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "farmhouse",
              "kura-storehouse"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "je"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 205915,
            "attribName": "upgrade_scout_forester_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "od"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "professional-scouts-2",
            "pbgid": 127933,
            "attribName": "upgrade_scout_forester",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "professional-scouts",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 75,
          "stone": 0,
          "gold": 275,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 75
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "huntCarryCapacity",
            "select": {
              "id": [
                "scout"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          },
          {
            "property": "rangedAttack",
            "target": {
              "class": [
                [
                  "hunt"
                ]
              ]
            },
            "select": {
              "id": [
                "scout"
              ]
            },
            "effect": "change",
            "value": 2,
            "type": "bonus"
          }
        ],
        "shared": {}
      },
      {
        "id": "proselytization",
        "name": "Proselytization",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/proselytization-4.png",
        "description": "Imams can convert units without holding a Relic, but can only target a single unit.",
        "variations": [
          {
            "id": "proselytization-4",
            "baseId": "proselytization",
            "type": "technology",
            "name": "Proselytization",
            "pbgid": 201793,
            "attribName": "upgrade_cul_conversion_invuln_abb",
            "age": 4,
            "civs": [
              "ab"
            ],
            "description": "Imams can convert units without holding a Relic, but can only target a single unit.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/proselytization-4.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "roller-shutter-triggers",
        "name": "Roller Shutter Triggers",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Springald Technology"
        ],
        "classes": [
          "springald",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/roller-shutter-triggers-4.png",
        "description": "Increase the weapon range of Springalds by +2 tiles and increase their attack speed by +25%.",
        "variations": [
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "by"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 182083,
            "attribName": "upgrade_siege_roller_trigger_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            }
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "en"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "je"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 184762,
            "attribName": "upgrade_siege_roller_trigger_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "od"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "roller-shutter-triggers-4",
            "pbgid": 127938,
            "attribName": "upgrade_siege_roller_trigger",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "roller-shutter-triggers",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "siege-workshop"
        ],
        "effects": [
          {
            "property": "maxRange",
            "select": {
              "id": [
                "springald"
              ]
            },
            "effect": "change",
            "value": 2,
            "type": "passive"
          },
          {
            "property": "attackSpeed",
            "select": {
              "id": [
                "springald"
              ]
            },
            "effect": "multiply",
            "value": 0.8,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "shipwrights",
        "name": "Shipwrights",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology 2/2"
        ],
        "classes": [
          "naval",
          "technology",
          "2/2"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/shipwrights-4.png",
        "description": "Increase the health of all military ships by +20% and ranged armor by +1.",
        "variations": [
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "by"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101971,
            "attribName": "upgrade_naval_shipwrights_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 600
            }
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "en"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "je"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "od"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "shipwrights-4",
            "pbgid": 2101643,
            "attribName": "upgrade_naval_shipwrights",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "shipwrights",
        "age": 4,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 550,
          "vizier": 0,
          "oliveoil": 0,
          "total": 850,
          "popcap": 0,
          "time": 50
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-works",
        "name": "Siege Works",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/siege-works-4.png",
        "description": "Increase the health of siege engines by +20% and their ranged armor by +10.",
        "variations": [
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ab"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ay"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "by"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 182085,
            "attribName": "upgrade_siege_works_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "hisar-academy",
              "madrasa"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "en"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "je"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "madrasa"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 184768,
            "attribName": "upgrade_siege_works_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "blacksmith"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "od"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "istanbul-observatory",
              "university"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "siege-works-4",
            "pbgid": 127859,
            "attribName": "upgrade_siege_works",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "siege-works",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 300,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "university"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "siege"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "siege"
                ]
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "specialized-pick",
        "name": "Specialized Pick",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Mining Technology 1/3"
        ],
        "classes": [
          "mining",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/specialized-pick-2.png",
        "description": "Increase Villagers' gathering rate for Gold and Stone by 15%.",
        "variations": [
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "by"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 181877,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 157
            }
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "en"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 35,
              "stone": 0,
              "gold": 70,
              "vizier": 0,
              "oliveoil": 0,
              "total": 105,
              "popcap": 0,
              "time": 45
            }
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 2127597,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2_jpn",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge",
              "kura-storehouse"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "je"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 2032216,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2_mon",
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Gold by 15%.",
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "od"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "specialized-pick-2",
            "pbgid": 171822,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "specialized-pick",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 100,
          "vizier": 0,
          "oliveoil": 0,
          "total": 150,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "mining-camp"
        ],
        "effects": [
          {
            "property": "goldGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          },
          {
            "property": "stoneGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "spice-roads",
        "name": "Spice Roads",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/spice-roads-4.png",
        "description": "Increase the Gold income from Traders and Trade Ships by +30%.",
        "variations": [
          {
            "id": "spice-roads-4",
            "baseId": "spice-roads",
            "type": "technology",
            "name": "Spice Roads",
            "pbgid": 201753,
            "attribName": "upgrade_trade_gold_income_abb",
            "age": 4,
            "civs": [
              "ab"
            ],
            "description": "Increase the Gold income from Traders and Trade Ships by +30%.",
            "classes": [
              "trade",
              "technology"
            ],
            "displayClasses": [
              "Trade Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/spice-roads-4.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "traders"
                  ]
                },
                "effect": "multiply",
                "value": 1.3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "springald-crews",
        "name": "Springald Crews",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/springald-crews-3.png",
        "description": "Springald Ships gain +1 range and attack 20% faster.",
        "variations": [
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101972,
            "attribName": "upgrade_naval_springald_ship_upgrade_1_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 175
            }
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "en"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "je"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "od"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "springald-crews-3",
            "pbgid": 2101638,
            "attribName": "upgrade_naval_springald_ship_upgrade_1",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "springald-crews",
        "age": 3,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 35
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "maxRange",
            "select": {
              "class": [
                [
                  "springald",
                  "ship"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          },
          {
            "property": "attackSpeed",
            "select": {
              "class": [
                [
                  "springald",
                  "ship"
                ]
              ]
            },
            "effect": "multiply",
            "value": 0.83,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "springald-emplacement",
        "name": "Springald Emplacement",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/springald-emplacement-3.png",
        "description": "Add a defensive springald emplacement to this structure.",
        "variations": [
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "de"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "hr"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 94,
              "gold": 38,
              "vizier": 0,
              "oliveoil": 0,
              "total": 132,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "castle-of-the-crow",
              "castle"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "je"
            ],
            "producedBy": [
              "keep",
              "red-palace"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "keep",
              "fort-of-the-huntress"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 186399,
            "attribName": "upgrade_outpost_springald_mon",
            "civs": [
              "mo"
            ],
            "description": "Add a defensive springald emplacement to this structure. Only one weapon emplacement can be added.",
            "producedBy": [
              "outpost"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "od"
            ],
            "producedBy": [
              "keep",
              "elzbach-palace"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "keep",
              "sea-gate-castle"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "springald-emplacement-3",
            "pbgid": 127371,
            "attribName": "upgrade_keep_springald",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "springald-emplacement",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 125,
          "gold": 50,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "keep"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "wooden-fortress",
                "outpost",
                "keep",
                "berkshire-palace",
                "elzbach-palace",
                "kremlin",
                "spasskaya-tower",
                "red-palace",
                "the-white-tower"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "spyglass",
        "name": "Spyglass",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Scout Technology"
        ],
        "classes": [
          "scout",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/spyglass-4.png",
        "description": "Increase the sight radius of Scouts by 30%.",
        "variations": [
          {
            "id": "spyglass-4",
            "pbgid": 2126345,
            "attribName": "upgrade_scout_los_increase_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2146558,
            "attribName": "upgrade_scout_los_increase_abb_ha_01",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "by"
            ],
            "producedBy": [
              "imperial-hippodrome",
              "stable"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126346,
            "attribName": "upgrade_scout_los_increase_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126347,
            "attribName": "upgrade_scout_los_increase_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 90
            }
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "en"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "school-of-cavalry",
              "stable"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "je"
            ],
            "producedBy": [
              "school-of-cavalry",
              "stable"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126348,
            "attribName": "upgrade_scout_los_increase_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "od"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126207,
            "attribName": "upgrade_scout_los_increase",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "spyglass-4",
            "pbgid": 2126346,
            "attribName": "upgrade_scout_los_increase_chi",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "spyglass",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 50,
          "vizier": 0,
          "oliveoil": 0,
          "total": 150,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "stable"
        ],
        "effects": [
          {
            "property": "lineOfSight",
            "select": {
              "id": [
                "scout",
                "warrior-scout"
              ]
            },
            "effect": "multiply",
            "value": 1.3,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "steeled-arrow",
        "name": "Steeled Arrow",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Damage Technology 1/3"
        ],
        "classes": [
          "ranged",
          "damage",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/steeled-arrow-2.png",
        "description": "Increase the ranged damage of all arrows and bolts by +1.",
        "variations": [
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "by"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188366,
            "attribName": "upgrade_ranged_damage_i_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 210
            }
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "en"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "je"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "steeled-arrow-2",
            "pbgid": 188269,
            "attribName": "upgrade_ranged_damage_i",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "steeled-arrow",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "ranged",
                  "cavalry"
                ],
                [
                  "archer",
                  "ship"
                ]
              ],
              "id": [
                "longbowman",
                "zhuge-nu",
                "archer",
                "arbaletrier",
                "crossbowman",
                "wynguard-ranger",
                "javelin-thrower",
                "gilded-crossbowman",
                "gilded-archer",
                "yumi-ashigaru",
                "zhuge-nu",
                "bedouin-skirmisher",
                "desert-raider",
                "yumi-bannerman"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "survival-techniques",
        "name": "Survival Techniques",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Hunting Technology"
        ],
        "classes": [
          "hunting",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/survival-techniques-1.png",
        "description": "Increase Villagers' hunted meat gather rate by +15%.",
        "variations": [
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 2159812,
            "attribName": "upgrade_econ_villager_hunting_gear_1_byz",
            "civs": [
              "by"
            ],
            "producedBy": [
              "grand-winery"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203468,
            "attribName": "upgrade_econ_villager_hunting_gear_1_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 75
            }
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "en"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 0,
              "wood": 18,
              "stone": 0,
              "gold": 53,
              "vizier": 0,
              "oliveoil": 0,
              "total": 71,
              "popcap": 0,
              "time": 25
            }
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "farmhouse",
              "kura-storehouse"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "je"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 205917,
            "attribName": "upgrade_econ_villager_hunting_gear_1_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "od"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "survival-techniques-1",
            "pbgid": 203467,
            "attribName": "upgrade_econ_villager_hunting_gear_1",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "survival-techniques",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 25,
          "stone": 0,
          "gold": 75,
          "vizier": 0,
          "oliveoil": 0,
          "total": 100,
          "popcap": 0,
          "time": 25
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "huntGatherRate",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "swivel-cannon",
        "name": "Swivel Cannon",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/swivel-cannon-4.png",
        "description": "Springald Ships gain an additional Cannon which fires in 360 degrees.",
        "variations": [
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101974,
            "attribName": "upgrade_naval_swivel_cannon_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 540
            }
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "en"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "je"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "od"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "swivel-cannon-4",
            "pbgid": 2101653,
            "attribName": "upgrade_naval_swivel_cannon",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "swivel-cannon",
        "age": 4,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "springald",
                  "ship"
                ]
              ]
            },
            "effect": "change",
            "value": 15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "teak-masts",
        "name": "Teak Masts",
        "type": "technology",
        "civs": [
          "ab",
          "ay"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/teak-masts-2.png",
        "description": "Increase the health of military ships by +10%.",
        "variations": [
          {
            "id": "teak-masts-2",
            "pbgid": 2033749,
            "attribName": "upgrade_naval_teak_masts_abb",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "teak-masts-3",
            "pbgid": 2033749,
            "attribName": "upgrade_naval_teak_masts_abb",
            "civs": [
              "ab"
            ]
          }
        ],
        "baseId": "teak-masts",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 75,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 200,
          "popcap": 0,
          "time": 20
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "change",
            "value": 1.1,
            "type": "passive"
          }
        ],
        "shared": {
          "teak-masts-3": {
            "name": "Teak Masts",
            "age": 3,
            "id": "teak-masts-3"
          }
        }
      },
      {
        "id": "textiles",
        "name": "Textiles",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/textiles-2.png",
        "description": "Increase Villagers' health by +50%.",
        "variations": [
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "by"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2051723,
            "attribName": "upgrade_villager_health_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 25
            }
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "en"
            ],
            "producedBy": [
              "town-center",
              "capital-town-center",
              "kings-palace"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "town-center",
              "capital-town-center",
              "palace-of-swabia"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ja"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "je"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "od"
            ],
            "producedBy": [
              "town-center",
              "capital-town-center",
              "palace-of-swabia"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "textiles-2",
            "pbgid": 2045367,
            "attribName": "upgrade_villager_health",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "textiles",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "vizier": 0,
          "oliveoil": 0,
          "total": 150,
          "popcap": 0,
          "time": 20
        },
        "producedBy": [
          "town-center",
          "capital-town-center"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "change",
            "value": 50,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "tithe-barns",
        "name": "Tithe Barns",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/tithe-barns-4.png",
        "description": "Relics placed in a Monastery provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
        "variations": [
          {
            "id": "tithe-barns-4",
            "pbgid": 2103125,
            "attribName": "upgrade_unit_religious_tithe_barn_4_abb",
            "civs": [
              "ab"
            ],
            "description": "Relics placed in a Mosque provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 2103125,
            "attribName": "upgrade_unit_religious_tithe_barn_4_abb",
            "civs": [
              "ay"
            ],
            "description": "Relics placed in a Mosque provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "by"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 181968,
            "attribName": "upgrade_unit_religious_tithe_barn_4_sul",
            "civs": [
              "de"
            ],
            "description": "Relics placed in a Mosque provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "en"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 2124353,
            "attribName": "upgrade_unit_religious_tithe_barn_4_hre",
            "civs": [
              "hr"
            ],
            "description": "Relics placed in eligible buildings provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "ja"
            ],
            "description": "Relics placed in a Monastery provide an income of +30 Food, +30 Wood, and +30 Stone every minute.",
            "producedBy": [
              "temple-of-equality",
              "shinto-shrine",
              "buddhist-temple"
            ],
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "monastery",
                    "mosque",
                    "prayer-tent",
                    "regnitz-cathedral"
                  ]
                },
                "effect": "change",
                "value": 30,
                "type": "influence"
              }
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "je"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 2104275,
            "attribName": "upgrade_unit_religious_tithe_barn_4_mal",
            "civs": [
              "ma"
            ],
            "description": "Relics placed in a Mosque provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 184823,
            "attribName": "upgrade_unit_religious_tithe_barn_4_mon",
            "civs": [
              "mo"
            ],
            "description": "Relics placed in a Prayer Tent provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "prayer-tent"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "od"
            ],
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 2104276,
            "attribName": "upgrade_unit_religious_tithe_barn_4_ott",
            "civs": [
              "ot"
            ],
            "description": "Relics placed in a Mosque provide an income of +40 Food, +40 Wood, and +10 Stone every minute.",
            "producedBy": [
              "mosque"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "abbey-of-the-trinity",
              "monastery"
            ]
          },
          {
            "id": "tithe-barns-4",
            "pbgid": 129407,
            "attribName": "upgrade_unit_religious_tithe_barn_4",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "shaolin-monastery",
              "monastery"
            ]
          }
        ],
        "baseId": "tithe-barns",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "monastery"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "monastery",
                "mosque",
                "prayer-tent",
                "regnitz-cathedral"
              ]
            },
            "effect": "change",
            "value": 40,
            "type": "influence"
          }
        ],
        "shared": {}
      },
      {
        "id": "trade-wing",
        "name": "Trade Wing",
        "type": "technology",
        "civs": [
          "ab"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-1.png",
        "description": "Constructs the Trade Wing. Acts as a home market and grants 3, 4, or 5 Traders upon completion (based on Age).\nUnlocks:\n•Grand Bazaar (Age II)\n•Armored Caravans (Age III)\n•Spice Roads (Age IV)",
        "variations": [
          {
            "id": "trade-wing-1",
            "baseId": "trade-wing",
            "type": "technology",
            "name": "Trade Wing",
            "pbgid": 2033118,
            "attribName": "upgrade_add_trade_wing",
            "age": 1,
            "civs": [
              "ab"
            ],
            "description": "Constructs the Trade Wing. Acts as a home market and grants 3, 4, or 5 Traders upon completion (based on Age).\nUnlocks:\n•Grand Bazaar (Age II)\n•Armored Caravans (Age III)\n•Spice Roads (Age IV)",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 105
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-1.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "house-of-wisdom"
                  ]
                },
                "effect": "change",
                "value": 5000,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "wedge-rivets",
        "name": "Wedge Rivets",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Ranged Armor Technology 2/3"
        ],
        "classes": [
          "ranged",
          "armor",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/wedge-rivets-3.png",
        "description": "Increase the ranged armor of all non-siege units by +1.",
        "variations": [
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "by"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188364,
            "attribName": "upgrade_ranged_armor_ii_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            }
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "en"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "je"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "wedge-rivets-3",
            "pbgid": 188267,
            "attribName": "upgrade_ranged_armor_ii",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "wedge-rivets",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ],
                [
                  "worker"
                ],
                [
                  "religious"
                ],
                [
                  "camel"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "wheelbarrow",
        "name": "Wheelbarrow",
        "type": "technology",
        "civs": [
          "ab",
          "ay",
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/wheelbarrow-1.png",
        "description": "Increase the carry capacity of Villagers by +5 and their movement speed by +15%.",
        "variations": [
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ay"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 2159825,
            "attribName": "upgrade_unit_town_center_wheelbarrow_byz",
            "civs": [
              "by"
            ],
            "producedBy": [
              "grand-winery"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 181988,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 270
            }
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "en"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "je"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 205916,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "od"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mill",
              "twin-minaret-medrese"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin"
            ]
          },
          {
            "id": "wheelbarrow-1",
            "pbgid": 129091,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1",
            "civs": [
              "zx"
            ],
            "producedBy": [
              "mill",
              "granary"
            ]
          }
        ],
        "baseId": "wheelbarrow",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 150,
          "vizier": 0,
          "oliveoil": 0,
          "total": 200,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "mill"
        ],
        "effects": [
          {
            "property": "carryCapacity",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "change",
            "value": 5,
            "type": "passive"
          },
          {
            "property": "moveSpeed",
            "select": {
              "id": [
                "villager"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-culture-wing-advancement",
        "name": "Advancement\n(Bonus Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
        "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 1300 less costs.",
        "variations": [
          {
            "id": "bonus-culture-wing-advancement-4",
            "baseId": "bonus-culture-wing-advancement",
            "type": "technology",
            "name": "Advancement\n(Bonus Culture Wing)",
            "pbgid": 2141112,
            "attribName": "upgrade_add_culture_wing_imperial_a_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 1300 less costs.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 1550,
              "wood": 0,
              "stone": 0,
              "gold": 750,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2300,
              "popcap": 0,
              "time": 96
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-culture-wing-logistics",
        "name": "Logistics\n(Bonus Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
        "description": "Constructs the Culture Wing.\nUpon completion, grants 4 Dervish, improves the unit's healing by +30%, and turns it on permanently.",
        "variations": [
          {
            "id": "bonus-culture-wing-logistics-4",
            "baseId": "bonus-culture-wing-logistics",
            "type": "technology",
            "name": "Logistics\n(Bonus Culture Wing)",
            "pbgid": 2141113,
            "attribName": "upgrade_add_culture_wing_imperial_b_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nUpon completion, grants 4 Dervish, improves the unit's healing by +30%, and turns it on permanently.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-economic-wing-growth",
        "name": "Growth\n(Bonus Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, grants 10 Villagers and all Villagers work +10% faster.",
        "variations": [
          {
            "id": "bonus-economic-wing-growth-4",
            "baseId": "bonus-economic-wing-growth",
            "type": "technology",
            "name": "Growth\n(Bonus Economic Wing)",
            "pbgid": 2141099,
            "attribName": "upgrade_add_economy_wing_imperial_a_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, grants 10 Villagers and all Villagers work +10% faster.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-economic-wing-industry",
        "name": "Industry\n(Bonus Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, awards 2800 Wood.",
        "variations": [
          {
            "id": "bonus-economic-wing-industry-4",
            "baseId": "bonus-economic-wing-industry",
            "type": "technology",
            "name": "Industry\n(Bonus Economic Wing)",
            "pbgid": 2141100,
            "attribName": "upgrade_add_economy_wing_imperial_b_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, awards 2800 Wood.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-military-wing-master-smiths",
        "name": "Master Smiths\n(Bonus Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
        "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
        "variations": [
          {
            "id": "bonus-military-wing-master-smiths-4",
            "baseId": "bonus-military-wing-master-smiths",
            "type": "technology",
            "name": "Master Smiths\n(Bonus Military Wing)",
            "pbgid": 2141105,
            "attribName": "upgrade_add_military_wing_imperial_b_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-military-wing-reinforcement",
        "name": "Reinforcement\n(Bonus Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
        "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 7 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
        "variations": [
          {
            "id": "bonus-military-wing-reinforcement-4",
            "baseId": "bonus-military-wing-reinforcement",
            "type": "technology",
            "name": "Reinforcement\n(Bonus Military Wing)",
            "pbgid": 2132768,
            "attribName": "upgrade_add_military_wing_imperial_a_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 7 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-trade-wing-advisors",
        "name": "Advisors\n(Bonus Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
        "description": "Constructs the Trade Wing.\nUpon completion, gain 7 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
        "variations": [
          {
            "id": "bonus-trade-wing-advisors-4",
            "baseId": "bonus-trade-wing-advisors",
            "type": "technology",
            "name": "Advisors\n(Bonus Trade Wing)",
            "pbgid": 2141121,
            "attribName": "upgrade_add_trade_wing_imperial_b_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nUpon completion, gain 7 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "bonus-trade-wing-bazaar",
        "name": "Bazaar\n(Bonus Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Unlock Bonuses"
        ],
        "classes": [
          "unlock",
          "bonuses"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
        "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
        "variations": [
          {
            "id": "bonus-trade-wing-bazaar-4",
            "baseId": "bonus-trade-wing-bazaar",
            "type": "technology",
            "name": "Bazaar\n(Bonus Trade Wing)",
            "pbgid": 2141120,
            "attribName": "upgrade_add_trade_wing_imperial_a_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
            "classes": [
              "unlock",
              "bonuses"
            ],
            "displayClasses": [
              "Unlock Bonuses"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-culture-wing-advancement",
        "name": "Advancement\n(Castle Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
        "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 400 less costs.",
        "variations": [
          {
            "id": "castle-culture-wing-advancement-2",
            "baseId": "castle-culture-wing-advancement",
            "type": "technology",
            "name": "Advancement\n(Castle Culture Wing)",
            "pbgid": 2141110,
            "attribName": "upgrade_add_culture_wing_feudal_a_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 400 less costs.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 900,
              "wood": 0,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1400,
              "popcap": 0,
              "time": 96
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-culture-wing-logistics",
        "name": "Logistics\n(Castle Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
        "description": "Constructs the Culture Wing.\nUpon completion, grants 3 Dervish and improves the unit's healing by +30%.",
        "variations": [
          {
            "id": "castle-culture-wing-logistics-2",
            "baseId": "castle-culture-wing-logistics",
            "type": "technology",
            "name": "Logistics\n(Castle Culture Wing)",
            "pbgid": 2141111,
            "attribName": "upgrade_add_culture_wing_feudal_b_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nUpon completion, grants 3 Dervish and improves the unit's healing by +30%.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-economic-wing-growth",
        "name": "Growth\n(Castle Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, grants 8 Villagers. Orchards gain 100 additional food.",
        "variations": [
          {
            "id": "castle-economic-wing-growth-2",
            "baseId": "castle-economic-wing-growth",
            "type": "technology",
            "name": "Growth\n(Castle Economic Wing)",
            "pbgid": 2141095,
            "attribName": "upgrade_add_economy_wing_feudal_a_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, grants 8 Villagers. Orchards gain 100 additional food.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-economic-wing-industry",
        "name": "Industry\n(Castle Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, awards 1000 Wood.",
        "variations": [
          {
            "id": "castle-economic-wing-industry-2",
            "baseId": "castle-economic-wing-industry",
            "type": "technology",
            "name": "Industry\n(Castle Economic Wing)",
            "pbgid": 2141096,
            "attribName": "upgrade_add_economy_wing_feudal_b_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, awards 1000 Wood.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-military-wing-master-smiths",
        "name": "Master Smiths\n(Castle Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
        "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
        "variations": [
          {
            "id": "castle-military-wing-master-smiths-2",
            "baseId": "castle-military-wing-master-smiths",
            "type": "technology",
            "name": "Master Smiths\n(Castle Military Wing)",
            "pbgid": 2141104,
            "attribName": "upgrade_add_military_wing_feudal_b_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-military-wing-reinforcement",
        "name": "Reinforcement\n(Castle Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
        "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 3 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
        "variations": [
          {
            "id": "castle-military-wing-reinforcement-2",
            "baseId": "castle-military-wing-reinforcement",
            "type": "technology",
            "name": "Reinforcement\n(Castle Military Wing)",
            "pbgid": 2132766,
            "attribName": "upgrade_add_military_wing_feudal_a_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 3 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-trade-wing-advisors",
        "name": "Advisors\n(Castle Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
        "description": "Constructs the Trade Wing.\nUpon completion, gain 4 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
        "variations": [
          {
            "id": "castle-trade-wing-advisors-2",
            "baseId": "castle-trade-wing-advisors",
            "type": "technology",
            "name": "Advisors\n(Castle Trade Wing)",
            "pbgid": 2141119,
            "attribName": "upgrade_add_trade_wing_feudal_b_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nUpon completion, gain 4 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-trade-wing-bazaar",
        "name": "Bazaar\n(Castle Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age III"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iii"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
        "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
        "variations": [
          {
            "id": "castle-trade-wing-bazaar-2",
            "baseId": "castle-trade-wing-bazaar",
            "type": "technology",
            "name": "Bazaar\n(Castle Trade Wing)",
            "pbgid": 2141118,
            "attribName": "upgrade_add_trade_wing_feudal_a_abb_ha_01",
            "age": 2,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
            "classes": [
              "advance",
              "to",
              "age",
              "iii"
            ],
            "displayClasses": [
              "Advance to Age III"
            ],
            "unique": false,
            "costs": {
              "food": 1200,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1800,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-culture-wing-advancement",
        "name": "Advancement\n(Feudal Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
        "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 250 less costs.",
        "variations": [
          {
            "id": "feudal-culture-wing-advancement-1",
            "baseId": "feudal-culture-wing-advancement",
            "type": "technology",
            "name": "Advancement\n(Feudal Culture Wing)",
            "pbgid": 2141106,
            "attribName": "upgrade_add_culture_wing_dark_a_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 250 less costs.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 225,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 96
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-culture-wing-logistics",
        "name": "Logistics\n(Feudal Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
        "description": "Constructs the Culture Wing.\nUpon completion, grants 2 Dervish and improves the unit's healing by +25%.",
        "variations": [
          {
            "id": "feudal-culture-wing-logistics-1",
            "baseId": "feudal-culture-wing-logistics",
            "type": "technology",
            "name": "Logistics\n(Feudal Culture Wing)",
            "pbgid": 2141107,
            "attribName": "upgrade_add_culture_wing_dark_b_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nUpon completion, grants 2 Dervish and improves the unit's healing by +25%.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-economic-wing-growth",
        "name": "Growth\n(Feudal Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, grants 3 Villagers. Orchards gain 50 additional food.",
        "variations": [
          {
            "id": "feudal-economic-wing-growth-1",
            "baseId": "feudal-economic-wing-growth",
            "type": "technology",
            "name": "Growth\n(Feudal Economic Wing)",
            "pbgid": 2141093,
            "attribName": "upgrade_add_economy_wing_dark_a_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, grants 3 Villagers. Orchards gain 50 additional food.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-economic-wing-industry",
        "name": "Industry\n(Feudal Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, awards 300 Wood.",
        "variations": [
          {
            "id": "feudal-economic-wing-industry-1",
            "baseId": "feudal-economic-wing-industry",
            "type": "technology",
            "name": "Industry\n(Feudal Economic Wing)",
            "pbgid": 2141094,
            "attribName": "upgrade_add_economy_wing_dark_b_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, awards 300 Wood.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-military-wing-master-smiths",
        "name": "Master Smiths\n(Feudal Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
        "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
        "variations": [
          {
            "id": "feudal-military-wing-master-smiths-1",
            "baseId": "feudal-military-wing-master-smiths",
            "type": "technology",
            "name": "Master Smiths\n(Feudal Military Wing)",
            "pbgid": 2141101,
            "attribName": "upgrade_add_military_wing_dark_b_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-military-wing-reinforcement",
        "name": "Reinforcement\n(Feudal Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
        "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 1 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
        "variations": [
          {
            "id": "feudal-military-wing-reinforcement-1",
            "baseId": "feudal-military-wing-reinforcement",
            "type": "technology",
            "name": "Reinforcement\n(Feudal Military Wing)",
            "pbgid": 2132764,
            "attribName": "upgrade_add_military_wing_dark_a_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 1 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-trade-wing-advisors",
        "name": "Advisors\n(Feudal Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
        "description": "Constructs the Trade Wing.\nUpon completion, gain 2 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
        "variations": [
          {
            "id": "feudal-trade-wing-advisors-1",
            "baseId": "feudal-trade-wing-advisors",
            "type": "technology",
            "name": "Advisors\n(Feudal Trade Wing)",
            "pbgid": 2141115,
            "attribName": "upgrade_add_trade_wing_dark_b_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nUpon completion, gain 2 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "feudal-trade-wing-bazaar",
        "name": "Bazaar\n(Feudal Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age II"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "ii"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
        "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
        "variations": [
          {
            "id": "feudal-trade-wing-bazaar-1",
            "baseId": "feudal-trade-wing-bazaar",
            "type": "technology",
            "name": "Bazaar\n(Feudal Trade Wing)",
            "pbgid": 2141114,
            "attribName": "upgrade_add_trade_wing_dark_a_abb_ha_01",
            "age": 1,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
            "classes": [
              "advance",
              "to",
              "age",
              "ii"
            ],
            "displayClasses": [
              "Advance to Age II"
            ],
            "unique": false,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-culture-wing-advancement",
        "name": "Advancement\n(Imperial Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
        "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 1350 less costs.",
        "variations": [
          {
            "id": "imperial-culture-wing-advancement-3",
            "baseId": "imperial-culture-wing-advancement",
            "type": "technology",
            "name": "Advancement\n(Imperial Culture Wing)",
            "pbgid": 2141108,
            "attribName": "upgrade_add_culture_wing_castle_a_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nBuild this wing to advance to the next Age in 20% less time and with 1350 less costs.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 1500,
              "wood": 0,
              "stone": 0,
              "gold": 750,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2250,
              "popcap": 0,
              "time": 96
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-advancement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-culture-wing-logistics",
        "name": "Logistics\n(Imperial Culture Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
        "description": "Constructs the Culture Wing.\nUpon completion, grants 4 Dervish, improves the unit's healing by +30%, and turns it on permanently.",
        "variations": [
          {
            "id": "imperial-culture-wing-logistics-3",
            "baseId": "imperial-culture-wing-logistics",
            "type": "technology",
            "name": "Logistics\n(Imperial Culture Wing)",
            "pbgid": 2141109,
            "attribName": "upgrade_add_culture_wing_castle_b_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Culture Wing.\nUpon completion, grants 4 Dervish, improves the unit's healing by +30%, and turns it on permanently.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/culture-wing-logistics-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-economic-wing-growth",
        "name": "Growth\n(Imperial Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, grants 10 Villagers and all Villagers work +10% faster.",
        "variations": [
          {
            "id": "imperial-economic-wing-growth-3",
            "baseId": "imperial-economic-wing-growth",
            "type": "technology",
            "name": "Growth\n(Imperial Economic Wing)",
            "pbgid": 2141097,
            "attribName": "upgrade_add_economy_wing_castle_a_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, grants 10 Villagers and all Villagers work +10% faster.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-growth-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-economic-wing-industry",
        "name": "Industry\n(Imperial Economic Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
        "description": "Constructs the Economic Wing.\nUpon completion, awards 2500 Wood.",
        "variations": [
          {
            "id": "imperial-economic-wing-industry-3",
            "baseId": "imperial-economic-wing-industry",
            "type": "technology",
            "name": "Industry\n(Imperial Economic Wing)",
            "pbgid": 2141098,
            "attribName": "upgrade_add_economy_wing_castle_b_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Economic Wing.\nUpon completion, awards 2500 Wood.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/economic-wing-industry-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-military-wing-master-smiths",
        "name": "Master Smiths\n(Imperial Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
        "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
        "variations": [
          {
            "id": "imperial-military-wing-master-smiths-3",
            "baseId": "imperial-military-wing-master-smiths",
            "type": "technology",
            "name": "Master Smiths\n(Imperial Military Wing)",
            "pbgid": 2141102,
            "attribName": "upgrade_add_military_wing_castle_b_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nThe Blacksmith's damage and armor technologies become free and complete automatically when entering an Age. (Those of other Ages must still be researched as normal).",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-master-smiths-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-military-wing-reinforcement",
        "name": "Reinforcement\n(Imperial Military Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
        "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 7 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
        "variations": [
          {
            "id": "imperial-military-wing-reinforcement-3",
            "baseId": "imperial-military-wing-reinforcement",
            "type": "technology",
            "name": "Reinforcement\n(Imperial Military Wing)",
            "pbgid": 2132765,
            "attribName": "upgrade_add_military_wing_castle_a_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Military Wing.\nUpon completion, Cavalry units gain the ability to construct siege weapons.\nThe House of Wisdom produces 7 Desert Raiders immediately and then every 2 minutes for the rest of the game.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-wing-reinforcement-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-trade-wing-advisors",
        "name": "Advisors\n(Imperial Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
        "description": "Constructs the Trade Wing.\nUpon completion, gain 7 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
        "variations": [
          {
            "id": "imperial-trade-wing-advisors-3",
            "baseId": "imperial-trade-wing-advisors",
            "type": "technology",
            "name": "Advisors\n(Imperial Trade Wing)",
            "pbgid": 2141117,
            "attribName": "upgrade_add_trade_wing_castle_b_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nUpon completion, gain 7 Atabeg which can be garrisoned in any military production building (except Docks) to increase the health of newly trained units by 20%.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-advisors-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-trade-wing-bazaar",
        "name": "Bazaar\n(Imperial Trade Wing)",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": false,
        "displayClasses": [
          "Advance to Age IV"
        ],
        "classes": [
          "advance",
          "to",
          "age",
          "iv"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
        "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
        "variations": [
          {
            "id": "imperial-trade-wing-bazaar-3",
            "baseId": "imperial-trade-wing-bazaar",
            "type": "technology",
            "name": "Bazaar\n(Imperial Trade Wing)",
            "pbgid": 2141116,
            "attribName": "upgrade_add_trade_wing_castle_a_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Constructs the Trade Wing.\nEvery three minutes a trade caravan arrives with a random selection of four favorable exchanges of resources and units.\nThe quality of these trades is permanently set depending on the Age at which the Trade Wing is constructed. Using the Trade Wing to enter a later age provides more lucrative trades.",
            "classes": [
              "advance",
              "to",
              "age",
              "iv"
            ],
            "displayClasses": [
              "Advance to Age IV"
            ],
            "unique": false,
            "costs": {
              "food": 2400,
              "wood": 0,
              "stone": 0,
              "gold": 1200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 3600,
              "popcap": 0,
              "time": 120
            },
            "producedBy": [
              "house-of-wisdom"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-wing-bazaar-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "infantry-support",
        "name": "Infantry Support",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": true,
        "displayClasses": [
          "Infantry Technology"
        ],
        "classes": [
          "infantry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/infantry-support-4.png",
        "description": "Infantry increase the armor of nearby camels by 3.",
        "variations": [
          {
            "id": "infantry-support-4",
            "baseId": "infantry-support",
            "type": "technology",
            "name": "Infantry Support",
            "pbgid": 2133427,
            "attribName": "upgrade_mil_infantry_support_abb_ha_01",
            "age": 4,
            "civs": [
              "ay"
            ],
            "description": "Infantry increase the armor of nearby camels by 3.",
            "classes": [
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/infantry-support-4.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-carpentry",
        "name": "Siege Carpentry",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/siege-carpentry-3.png",
        "description": "Upon completion, siege units gain access to the Structural Reinforcements ability.\nSiege units gain +20 melee armor and +5 fire armor for 10 seconds.",
        "variations": [
          {
            "id": "siege-carpentry-3",
            "baseId": "siege-carpentry",
            "type": "technology",
            "name": "Siege Carpentry",
            "pbgid": 2141404,
            "attribName": "upgrade_siege_carpentry_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Upon completion, siege units gain access to the Structural Reinforcements ability.\nSiege units gain +20 melee armor and +5 fire armor for 10 seconds.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 200,
              "stone": 0,
              "gold": 300,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siege-carpentry-3.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "sultans-mamluks",
        "name": "Sultan's Mamluks",
        "type": "technology",
        "civs": [
          "ay"
        ],
        "unique": true,
        "displayClasses": [
          "Infantry Technology"
        ],
        "classes": [
          "infantry",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/sultans-mamluks-3.png",
        "description": "Infantry gains +25% damage and +20% movement speed for 10 seconds after killing a unit.",
        "variations": [
          {
            "id": "sultans-mamluks-3",
            "baseId": "sultans-mamluks",
            "type": "technology",
            "name": "Sultan's Mamluks",
            "pbgid": 2145566,
            "attribName": "upgrade_infantry_kill_bonus_abb_ha_01",
            "age": 3,
            "civs": [
              "ay"
            ],
            "description": "Infantry gains +25% damage and +20% movement speed for 10 seconds after killing a unit.",
            "classes": [
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/sultans-mamluks-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "value": 1.25,
                "effect": "change",
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "value": 1.25,
                "effect": "change",
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "value": 1.25,
                "effect": "change",
                "type": "passive"
              },
              {
                "property": "fireAttack",
                "value": 1.25,
                "effect": "change",
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "border-settlements",
        "name": "Border Settlements",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Building Technology"
        ],
        "classes": [
          "building",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
        "description": "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
        "variations": [
          {
            "id": "border-settlements-2",
            "baseId": "border-settlements",
            "type": "technology",
            "name": "Border Settlements",
            "pbgid": 2122674,
            "attribName": "upgrade_house_vision_byz",
            "age": 2,
            "civs": [
              "by"
            ],
            "description": "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
            "classes": [
              "building",
              "technology"
            ],
            "displayClasses": [
              "Building Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 25,
              "stone": 0,
              "gold": 50,
              "vizier": 0,
              "oliveoil": 0,
              "total": 75,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "house"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            "effects": [
              {
                "property": "lineOfSight",
                "select": {
                  "id": [
                    "house"
                  ]
                },
                "effect": "change",
                "value": 7,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "eastern-mercenary-contract",
        "name": "Eastern Mercenary Contract",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Mercenary Contract"
        ],
        "classes": [
          "mercenary",
          "contract"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/eastern-mercenary-contract-1.png",
        "description": "Unlocks production of Keshik, Ghulam, and Tower Elephant mercenaries.\nKeshik: Feudal Age\nGhulam: Veteran contract\nTower Elephant: Elite contract",
        "variations": [
          {
            "id": "eastern-mercenary-contract-1",
            "baseId": "eastern-mercenary-contract",
            "type": "technology",
            "name": "Eastern Mercenary Contract",
            "pbgid": 2146746,
            "attribName": "merc_contract_01_tower_alt_byz",
            "age": 1,
            "civs": [
              "by"
            ],
            "description": "Unlocks production of Keshik, Ghulam, and Tower Elephant mercenaries.\nKeshik: Feudal Age\nGhulam: Veteran contract\nTower Elephant: Elite contract",
            "classes": [
              "mercenary",
              "contract"
            ],
            "displayClasses": [
              "Mercenary Contract"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 10
            },
            "producedBy": [
              "mercenary-house",
              "golden-horn-tower"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/eastern-mercenary-contract-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "elite-mercenaries",
        "name": "Elite Contract",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": false,
        "displayClasses": [
          "Unit Technology 3/3"
        ],
        "classes": [
          "unit",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/upgrades/elite-mercenaries-4.png",
        "description": "Upgrade Veteran Mercenaries to Elite Mercenaries.",
        "variations": [
          {
            "id": "elite-mercenaries-4",
            "baseId": "elite-mercenaries",
            "type": "technology",
            "name": "Elite Contract",
            "pbgid": 2146758,
            "attribName": "upgrade_unit_mercenary_4_tower_alt_byz",
            "age": 4,
            "civs": [
              "by"
            ],
            "description": "Upgrade Veteran Mercenaries to Elite Mercenaries.",
            "classes": [
              "unit",
              "technology",
              "3/3"
            ],
            "displayClasses": [
              "Unit Technology 3/3"
            ],
            "unique": false,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "mercenary-house",
              "golden-horn-tower"
            ],
            "icon": "https://data.aoe4world.com/images/upgrades/elite-mercenaries-4.png",
            "unlocks": ""
          }
        ],
        "shared": {}
      },
      {
        "id": "expilatores",
        "name": "Expilatores",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/expilatores-2.png",
        "description": "Horseman damage vs. Workers increased by +2. Workers killed by your Horsemen reward +20 Gold.",
        "variations": [
          {
            "id": "expilatores-2",
            "baseId": "expilatores",
            "type": "technology",
            "name": "Expilatores",
            "pbgid": 2104470,
            "attribName": "upgrade_hippodrome_horseman_byz",
            "age": 2,
            "civs": [
              "by"
            ],
            "description": "Horseman damage vs. Workers increased by +2. Workers killed by your Horsemen reward +20 Gold.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 30,
              "stone": 0,
              "gold": 50,
              "vizier": 0,
              "oliveoil": 0,
              "total": 80,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "imperial-hippodrome",
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/expilatores-2.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "horseman"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "worker"
                    ]
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "ferocious-speed",
        "name": "Ferocious Speed",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Varangian Guard Technology"
        ],
        "classes": [
          "varangian",
          "guard",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/ferocious-speed-4.png",
        "description": "Varangian Guard increase their move speed by +30% when activating Berserking.",
        "variations": [
          {
            "id": "ferocious-speed-4",
            "baseId": "ferocious-speed",
            "type": "technology",
            "name": "Ferocious Speed",
            "pbgid": 2104589,
            "attribName": "upgrade_varangian_berserk_speed_byz",
            "age": 4,
            "civs": [
              "by"
            ],
            "description": "Varangian Guard increase their move speed by +30% when activating Berserking.",
            "classes": [
              "varangian",
              "guard",
              "technology"
            ],
            "displayClasses": [
              "Varangian Guard Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/ferocious-speed-4.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "varangian-guard"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "greek-fire-projectiles",
        "name": "Greek Fire Projectiles",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/greek-fire-projectiles-4.png",
        "description": "Counterweight Trebuchets deal +30% increased damage and engulf their target with Greek Fire, dealing area damage. Greek Fire does not stack with other patches.",
        "variations": [
          {
            "id": "greek-fire-projectiles-4",
            "baseId": "greek-fire-projectiles",
            "type": "technology",
            "name": "Greek Fire Projectiles",
            "pbgid": 2104321,
            "attribName": "upgrade_greek_fire_trebuchet_byz",
            "age": 4,
            "civs": [
              "by"
            ],
            "description": "Counterweight Trebuchets deal +30% increased damage and engulf their target with Greek Fire, dealing area damage. Greek Fire does not stack with other patches.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/greek-fire-projectiles-4.png",
            "effects": [
              {
                "property": "siegeAttack",
                "select": {
                  "id": [
                    "counterweight-trebuchet"
                  ]
                },
                "effect": "multiply",
                "value": 1.3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "heavy-dromon",
        "name": "Heavy Dromon",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/heavy-dromon-3.png",
        "description": "Upgrade all Dromons to leave Greek Fire on the surface or ground where they attack. Man The Sails cooldown also reduced to 20 seconds.",
        "variations": [
          {
            "id": "heavy-dromon-3",
            "baseId": "heavy-dromon",
            "type": "technology",
            "name": "Heavy Dromon",
            "pbgid": 2145685,
            "attribName": "upgrade_heavy_dromon_byz",
            "age": 3,
            "civs": [
              "by"
            ],
            "description": "Upgrade all Dromons to leave Greek Fire on the surface or ground where they attack. Man The Sails cooldown also reduced to 20 seconds.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/heavy-dromon-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "dromon"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "liquid-explosives",
        "name": "Liquid Explosives",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/liquid-explosives-3.png",
        "description": "Incendiary Ships deal full damage to all enemies in their explosion radius.",
        "variations": [
          {
            "id": "liquid-explosives-3",
            "baseId": "liquid-explosives",
            "type": "technology",
            "name": "Liquid Explosives",
            "pbgid": 2145611,
            "attribName": "upgrade_fireship_liquid_explosives_byz",
            "age": 3,
            "civs": [
              "by"
            ],
            "description": "Incendiary Ships deal full damage to all enemies in their explosion radius.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/liquid-explosives-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "demolition-ship"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "mangonel-emplacement",
        "name": "Mangonel Emplacement",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/mangonel-emplacement-3.png",
        "description": "Add a defensive mangonel emplacement to this structure.",
        "variations": [
          {
            "id": "mangonel-emplacement-3",
            "baseId": "mangonel-emplacement",
            "type": "technology",
            "name": "Mangonel Emplacement",
            "pbgid": 2129278,
            "attribName": "upgrade_keep_mangonel_byz",
            "age": 3,
            "civs": [
              "by"
            ],
            "description": "Add a defensive mangonel emplacement to this structure.",
            "classes": [
              "weapon",
              "emplacement"
            ],
            "displayClasses": [
              "Weapon Emplacement"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 200,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "keep"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/mangonel-emplacement-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "keep"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "numeri",
        "name": "Numeri",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/numeri-4.png",
        "description": "Enemy units hit by Trample become vulnerable and receive +15% increased damage for 12 seconds.",
        "variations": [
          {
            "id": "numeri-4",
            "baseId": "numeri",
            "type": "technology",
            "name": "Numeri",
            "pbgid": 2104471,
            "attribName": "upgrade_hippodrome_cataphract_byz",
            "age": 4,
            "civs": [
              "by"
            ],
            "description": "Enemy units hit by Trample become vulnerable and receive +15% increased damage for 12 seconds.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "imperial-hippodrome",
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/numeri-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "cataphract"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-engineering",
        "name": "Siege Engineering",
        "type": "technology",
        "civs": [
          "by",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ja",
          "je",
          "ma",
          "mo",
          "od",
          "ot",
          "ru",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Siege Unit Unlock"
        ],
        "classes": [
          "siege",
          "unit",
          "unlock"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/siege-engineering-2.png",
        "description": "Melee and ranged infantry can construct Siege Towers and Battering Rams in the field.",
        "variations": [
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "by"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 182081,
            "attribName": "upgrade_siege_engineers_sul",
            "civs": [
              "de"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 105
            }
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "en"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "ja"
            ],
            "producedBy": [
              "forge"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "je"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "od"
            ],
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "siege-engineering-2",
            "pbgid": 127860,
            "attribName": "upgrade_siege_engineers",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "siege-engineering",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 50,
          "stone": 0,
          "gold": 125,
          "vizier": 0,
          "oliveoil": 0,
          "total": 175,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "blacksmith"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "class": [
                [
                  "infantry"
                ]
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "ability"
          }
        ],
        "shared": {}
      },
      {
        "id": "silk-road-mercenary-contract",
        "name": "Silk Road Mercenary Contract",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Mercenary Contract"
        ],
        "classes": [
          "mercenary",
          "contract"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/silk-road-mercenary-contract-1.png",
        "description": "Unlocks production of Javelin Thrower, Camel Rider, and Grenadier mercenaries.\nJavelin Thrower: Feudal Age\nCamel Rider: Veteran contract\nGrenadier: Elite contract",
        "variations": [
          {
            "id": "silk-road-mercenary-contract-1",
            "baseId": "silk-road-mercenary-contract",
            "type": "technology",
            "name": "Silk Road Mercenary Contract",
            "pbgid": 2146748,
            "attribName": "merc_contract_03_tower_alt_byz",
            "age": 1,
            "civs": [
              "by"
            ],
            "description": "Unlocks production of Javelin Thrower, Camel Rider, and Grenadier mercenaries.\nJavelin Thrower: Feudal Age\nCamel Rider: Veteran contract\nGrenadier: Elite contract",
            "classes": [
              "mercenary",
              "contract"
            ],
            "displayClasses": [
              "Mercenary Contract"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 10
            },
            "producedBy": [
              "mercenary-house",
              "golden-horn-tower"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/silk-road-mercenary-contract-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "teardrop-shields",
        "name": "Teardrop Shields",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Armor Technology"
        ],
        "classes": [
          "heavy",
          "armor",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/teardrop-shields-3.png",
        "description": "Increase the armor of Cataphracts by +1, move speed of Limitanei by +15%, and attack speed of Varangian Guard by +15%.",
        "variations": [
          {
            "id": "teardrop-shields-3",
            "baseId": "teardrop-shields",
            "type": "technology",
            "name": "Teardrop Shields",
            "pbgid": 2104320,
            "attribName": "upgrade_teardrop_shields_byz",
            "age": 3,
            "civs": [
              "by"
            ],
            "description": "Increase the armor of Cataphracts by +1, move speed of Limitanei by +15%, and attack speed of Varangian Guard by +15%.",
            "classes": [
              "heavy",
              "armor",
              "technology"
            ],
            "displayClasses": [
              "Heavy Armor Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/teardrop-shields-3.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "cataphract"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "limitanei"
                  ]
                },
                "effect": "multiply",
                "value": 1.15,
                "type": "passive"
              },
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "varangian-guard"
                  ]
                },
                "effect": "multiply",
                "value": 0.87,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "trapezites",
        "name": "Trapezites",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/trapezites-2.png",
        "description": "Scouts enhance the torch damage of nearby units by 25%",
        "variations": [
          {
            "id": "trapezites-2",
            "baseId": "trapezites",
            "type": "technology",
            "name": "Trapezites",
            "pbgid": 2104444,
            "attribName": "upgrade_hippodrome_scout_byz",
            "age": 2,
            "civs": [
              "by"
            ],
            "description": "Scouts enhance the torch damage of nearby units by 25%",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 30,
              "stone": 0,
              "gold": 50,
              "vizier": 0,
              "oliveoil": 0,
              "total": 80,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "imperial-hippodrome",
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trapezites-2.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "veteran-mercenaries",
        "name": "Veteran Contract",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": false,
        "displayClasses": [
          "Unit Technology 2/3"
        ],
        "classes": [
          "unit",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/upgrades/veteran-mercenaries-3.png",
        "description": "Upgrade Hardened Mercenaries to Veteran Mercenaries.",
        "variations": [
          {
            "id": "veteran-mercenaries-3",
            "baseId": "veteran-mercenaries",
            "type": "technology",
            "name": "Veteran Contract",
            "pbgid": 2146757,
            "attribName": "upgrade_unit_mercenary_3_tower_alt_byz",
            "age": 3,
            "civs": [
              "by"
            ],
            "description": "Upgrade Hardened Mercenaries to Veteran Mercenaries.",
            "classes": [
              "unit",
              "technology",
              "2/3"
            ],
            "displayClasses": [
              "Unit Technology 2/3"
            ],
            "unique": false,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "mercenary-house",
              "golden-horn-tower"
            ],
            "icon": "https://data.aoe4world.com/images/upgrades/veteran-mercenaries-3.png",
            "unlocks": ""
          }
        ],
        "shared": {}
      },
      {
        "id": "western-mercenary-contract",
        "name": "Western Mercenary Contract",
        "type": "technology",
        "civs": [
          "by"
        ],
        "unique": true,
        "displayClasses": [
          "Mercenary Contract"
        ],
        "classes": [
          "mercenary",
          "contract"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/western-mercenary-contract-1.png",
        "description": "Unlocks production of Longbowman, Landsknecht, and Streltsy mercenaries.\nLongbowman: Feudal Age\nLandsknecht: Veteran contract\nStreltsy: Elite contract",
        "variations": [
          {
            "id": "western-mercenary-contract-1",
            "baseId": "western-mercenary-contract",
            "type": "technology",
            "name": "Western Mercenary Contract",
            "pbgid": 2146747,
            "attribName": "merc_contract_02_tower_alt_byz",
            "age": 1,
            "civs": [
              "by"
            ],
            "description": "Unlocks production of Longbowman, Landsknecht, and Streltsy mercenaries.\nLongbowman: Feudal Age\nLandsknecht: Veteran contract\nStreltsy: Elite contract",
            "classes": [
              "mercenary",
              "contract"
            ],
            "displayClasses": [
              "Mercenary Contract"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 10
            },
            "producedBy": [
              "mercenary-house",
              "golden-horn-tower"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/western-mercenary-contract-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "additional-barrels",
        "name": "Additional Barrels",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Nest of Bees Technology"
        ],
        "classes": [
          "nest",
          "of",
          "bees",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/additional-barrels-4.png",
        "description": "Nest of Bees receive 1 additional Rocket Arrows.",
        "variations": [
          {
            "id": "additional-barrels-4",
            "baseId": "additional-barrels",
            "type": "technology",
            "name": "Additional Barrels",
            "pbgid": 217078,
            "attribName": "upgrade_gunpowder_cost_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Nest of Bees receive 1 additional Rocket Arrows.",
            "classes": [
              "nest",
              "of",
              "bees",
              "technology"
            ],
            "displayClasses": [
              "Nest of Bees Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 200,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/additional-barrels-4.png",
            "effects": [
              {
                "property": "burst",
                "select": {
                  "id": [
                    "nest-of-bees",
                    "clocktower-nest-of-bees"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "ancient-techniques",
        "name": "Ancient Techniques",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Gathering Technology"
        ],
        "classes": [
          "gathering",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/ancient-techniques-4.png",
        "description": "Increase the gathering rate of Villagers by +4% for each dynasty achieved.",
        "variations": [
          {
            "id": "ancient-techniques-4",
            "baseId": "ancient-techniques",
            "type": "technology",
            "name": "Ancient Techniques",
            "pbgid": 220924,
            "attribName": "upgrade_dynasty_econ_bonus_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Increase the gathering rate of Villagers by +4% for each dynasty achieved.",
            "classes": [
              "gathering",
              "technology"
            ],
            "displayClasses": [
              "Gathering Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 200,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "spirit-way",
              "university"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/ancient-techniques-4.png",
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              },
              {
                "property": "huntGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              },
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              },
              {
                "property": "woodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "battle-hardened",
        "name": "Battle Hardened",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Palace Guard Technology"
        ],
        "classes": [
          "palace",
          "guard",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/battle-hardened-4.png",
        "description": "Increase the health of Palace Guards by +30.",
        "variations": [
          {
            "id": "battle-hardened-4",
            "baseId": "battle-hardened",
            "type": "technology",
            "name": "Battle Hardened",
            "pbgid": 182889,
            "attribName": "upgrade_manatarms_battle_hardened_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Increase the health of Palace Guards by +30.",
            "classes": [
              "palace",
              "guard",
              "technology"
            ],
            "displayClasses": [
              "Palace Guard Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/battle-hardened-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "palace-guard"
                  ]
                },
                "effect": "change",
                "value": 30,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "extra-materials",
        "name": "Extra Materials",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Tower & Outpost Technology"
        ],
        "classes": [
          "tower",
          "&",
          "outpost",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/extra-materials-3.png",
        "description": "Stone Wall Towers and Outposts repair nearby damaged Stone Walls. A single section is repaired at a time for +20 health per second.",
        "variations": [
          {
            "id": "extra-materials-3",
            "baseId": "extra-materials",
            "type": "technology",
            "name": "Extra Materials",
            "pbgid": 217612,
            "attribName": "upgrade_wall_repair_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Stone Wall Towers and Outposts repair nearby damaged Stone Walls. A single section is repaired at a time for +20 health per second.",
            "classes": [
              "tower",
              "&",
              "outpost",
              "technology"
            ],
            "displayClasses": [
              "Tower & Outpost Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 75,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "keep"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/extra-materials-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "outpost",
                    "stone-wall-tower"
                  ]
                },
                "effect": "change",
                "value": 20,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "handcannon-slits",
        "name": "Handcannon Slits",
        "type": "technology",
        "civs": [
          "ch",
          "zx"
        ],
        "unique": false,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/handcannon-slits-2.png",
        "description": "Add defensive handcannon slits to this structure and increases garrison arrow range by +1. Only one weapon emplacement can be added.",
        "variations": [
          {
            "id": "handcannon-slits-2",
            "pbgid": 173701,
            "attribName": "upgrade_outpost_handcannonslits_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "handcannon-slits-2",
            "pbgid": 173701,
            "attribName": "upgrade_outpost_handcannonslits_chi",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "handcannon-slits",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 50,
          "gold": 25,
          "vizier": 0,
          "oliveoil": 0,
          "total": 75,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "outpost"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "id": [
                "outpost"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-examinations",
        "name": "Imperial Examinations",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Official Technology"
        ],
        "classes": [
          "imperial",
          "official",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/imperial-examinations-2.png",
        "description": "Increase the maximum amount of Gold carried by Imperial Officials from +40 to +80.",
        "variations": [
          {
            "id": "imperial-examinations-2",
            "baseId": "imperial-examinations",
            "type": "technology",
            "name": "Imperial Examinations",
            "pbgid": 182886,
            "attribName": "upgrade_imperial_examinations_chi",
            "age": 2,
            "civs": [
              "ch"
            ],
            "description": "Increase the maximum amount of Gold carried by Imperial Officials from +40 to +80.",
            "classes": [
              "imperial",
              "official",
              "technology"
            ],
            "displayClasses": [
              "Imperial Official Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "imperial-academy"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/imperial-examinations-2.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "imperial-official"
                  ]
                },
                "effect": "change",
                "value": 40,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "pyrotechnics",
        "name": "Pyrotechnics",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Gunpowder Technology"
        ],
        "classes": [
          "gunpowder",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/pyrotechnics-4.png",
        "description": "Increase the range of Handcannons by +1.5.",
        "variations": [
          {
            "id": "pyrotechnics-4",
            "baseId": "pyrotechnics",
            "type": "technology",
            "name": "Pyrotechnics",
            "pbgid": 216750,
            "attribName": "upgrade_gunpowder_damage_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Increase the range of Handcannons by +1.5.",
            "classes": [
              "gunpowder",
              "technology"
            ],
            "displayClasses": [
              "Gunpowder Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/pyrotechnics-4.png",
            "effects": [
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "handcannoneer"
                  ]
                },
                "effect": "change",
                "value": 1.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "reload-drills",
        "name": "Reload Drills",
        "type": "technology",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Bombard Technology"
        ],
        "classes": [
          "bombard",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/reload-drills-4.png",
        "description": "Increase the attack speed of Bombards by +33%.",
        "variations": [
          {
            "id": "reload-drills-4",
            "baseId": "reload-drills",
            "type": "technology",
            "name": "Reload Drills",
            "pbgid": 173803,
            "attribName": "upgrade_reload_drills_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Increase the attack speed of Bombards by +33%.",
            "classes": [
              "bombard",
              "technology"
            ],
            "displayClasses": [
              "Bombard Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "astronomical-clocktower",
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/reload-drills-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "bombard"
                  ]
                },
                "effect": "multiply",
                "value": 0.75,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "thunderclap-bombs",
        "name": "Thunderclap Bombs",
        "type": "technology",
        "civs": [
          "ch",
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/thunderclap-bombs-4.png",
        "description": "Warships fire a Nest of Bees attack.",
        "variations": [
          {
            "id": "thunderclap-bombs-4",
            "pbgid": 2101718,
            "attribName": "upgrade_naval_explosive_techniques_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "thunderclap-bombs-4",
            "pbgid": 2101718,
            "attribName": "upgrade_naval_explosive_techniques_chi",
            "civs": [
              "zx"
            ]
          }
        ],
        "baseId": "thunderclap-bombs",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 200,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "siegeAttack",
            "select": {
              "class": [
                [
                  "warship"
                ]
              ]
            },
            "effect": "change",
            "value": 21.333333333333332,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "all-seeing-eye",
        "name": "All-Seeing Eye",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/all-seeing-eye-2.png",
        "description": "Increase the sight range of Scholars by +100%.",
        "variations": [
          {
            "id": "all-seeing-eye-2",
            "baseId": "all-seeing-eye",
            "type": "technology",
            "name": "All-Seeing Eye",
            "pbgid": 200138,
            "attribName": "upgrade_landmark_scholar_sight_range_sul",
            "age": 2,
            "civs": [
              "de"
            ],
            "description": "Increase the sight range of Scholars by +100%.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 157
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/all-seeing-eye-2.png",
            "effects": [
              {
                "property": "lineOfSight",
                "select": {
                  "id": [
                    "scholar"
                  ]
                },
                "effect": "multiply",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "armored-beasts",
        "name": "Armored Beasts",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Elephant Technology"
        ],
        "classes": [
          "elephant",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/armored-beasts-4.png",
        "description": "Grant +25% health and +4 ranged armor to War Elephants.",
        "variations": [
          {
            "id": "armored-beasts-4",
            "baseId": "armored-beasts",
            "type": "technology",
            "name": "Armored Beasts",
            "pbgid": 200887,
            "attribName": "upgrade_age3_war_elephant_elite_sul",
            "age": 4,
            "civs": [
              "de"
            ],
            "description": "Grant +25% health and +4 ranged armor to War Elephants.",
            "classes": [
              "elephant",
              "technology"
            ],
            "displayClasses": [
              "Elephant Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/armored-beasts-4.png",
            "effects": [
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "war-elephant"
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              },
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "war-elephant"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "efficient-production",
        "name": "Efficient Production",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/efficient-production-1.png",
        "description": "Allow Scholars to garrison in military buildings, boosting production speed by 100%.",
        "variations": [
          {
            "id": "efficient-production-1",
            "baseId": "efficient-production",
            "type": "technology",
            "name": "Efficient Production",
            "pbgid": 200171,
            "attribName": "upgrade_age2_scholar_military_production_sul",
            "age": 1,
            "civs": [
              "de"
            ],
            "description": "Allow Scholars to garrison in military buildings, boosting production speed by 100%.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 135
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/efficient-production-1.png",
            "effects": [
              {
                "property": "productionSpeed",
                "select": {
                  "id": [
                    "scholar"
                  ]
                },
                "effect": "multiply",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "forced-march",
        "name": "Forced March",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Infantry Ability Unlock"
        ],
        "classes": [
          "infantry",
          "ability",
          "unlock"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/forced-march-3.png",
        "description": "Infantry units gain the Forced March ability.\nWhen activated, infantry move +100% faster for 10 seconds, but breaks when dealing damage.",
        "variations": [
          {
            "id": "forced-march-3",
            "baseId": "forced-march",
            "type": "technology",
            "name": "Forced March",
            "pbgid": 199889,
            "attribName": "upgrade_landmark_force_march_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Infantry units gain the Forced March ability.\nWhen activated, infantry move +100% faster for 10 seconds, but breaks when dealing damage.",
            "classes": [
              "infantry",
              "ability",
              "unlock"
            ],
            "displayClasses": [
              "Infantry Ability Unlock"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/forced-march-3.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 2,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "hearty-rations",
        "name": "Hearty Rations",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/hearty-rations-3.png",
        "description": "Increase the carrying capacity of Villagers by +10.",
        "variations": [
          {
            "id": "hearty-rations-3",
            "baseId": "hearty-rations",
            "type": "technology",
            "name": "Hearty Rations",
            "pbgid": 200717,
            "attribName": "upgrade_landmark_hearty_rations_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Increase the carrying capacity of Villagers by +10.",
            "classes": [
              "villager",
              "technology"
            ],
            "displayClasses": [
              "Villager Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            },
            "producedBy": [
              "house-of-learning"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/hearty-rations-3.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 10,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "honed-blades",
        "name": "Honed Blades",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Man-at-Arms & Lancer Technology"
        ],
        "classes": [
          "man-at-arms",
          "&",
          "lancer",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/honed-blades-3.png",
        "description": "Men-at-Arms and Lancers equip a Kilij, increasing their damage by +3.",
        "variations": [
          {
            "id": "honed-blades-3",
            "baseId": "honed-blades",
            "type": "technology",
            "name": "Honed Blades",
            "pbgid": 192930,
            "attribName": "upgrade_improved_swords_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Men-at-Arms and Lancers equip a Kilij, increasing their damage by +3.",
            "classes": [
              "man-at-arms",
              "&",
              "lancer",
              "technology"
            ],
            "displayClasses": [
              "Man-at-Arms & Lancer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 300
            },
            "producedBy": [
              "house-of-learning"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/honed-blades-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "man-at-arms",
                    "knight",
                    "lancer"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "howdahs",
        "name": "Howdahs",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Elephant Technology"
        ],
        "classes": [
          "elephant",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/howdahs-4.png",
        "description": "Upgrade Tower Elephants to have Elite Crossbowmen as riders instead of Archers. Tower Elephants gain +30% health and +4 ranged armor.",
        "variations": [
          {
            "id": "howdahs-4",
            "baseId": "howdahs",
            "type": "technology",
            "name": "Howdahs",
            "pbgid": 200139,
            "attribName": "upgrade_landmark_siege_elephant_sul",
            "age": 4,
            "civs": [
              "de"
            ],
            "description": "Upgrade Tower Elephants to have Elite Crossbowmen as riders instead of Archers. Tower Elephants gain +30% health and +4 ranged armor.",
            "classes": [
              "elephant",
              "technology"
            ],
            "displayClasses": [
              "Elephant Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 720
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/howdahs-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "heavy"
                    ]
                  ]
                },
                "select": {
                  "id": [
                    "tower-elephant"
                  ]
                },
                "effect": "change",
                "value": 11,
                "type": "bonus"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "tower-elephant",
                    "sultans-elite-tower-elephant"
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              },
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "tower-elephant",
                    "sultans-elite-tower-elephant"
                  ]
                },
                "effect": "multiply",
                "value": 1.3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "lookout-towers",
        "name": "Lookout Towers",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Outpost Technology"
        ],
        "classes": [
          "outpost",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/lookout-towers-3.png",
        "description": "Increase the sight range of Outposts by 50% and weapon range by +1.",
        "variations": [
          {
            "id": "lookout-towers-3",
            "baseId": "lookout-towers",
            "type": "technology",
            "name": "Lookout Towers",
            "pbgid": 166618,
            "attribName": "upgrade_outpost_lookout_tower_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Increase the sight range of Outposts by 50% and weapon range by +1.",
            "classes": [
              "outpost",
              "technology"
            ],
            "displayClasses": [
              "Outpost Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            },
            "producedBy": [
              "house-of-learning"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/lookout-towers-3.png",
            "effects": [
              {
                "property": "lineOfSight",
                "select": {
                  "id": [
                    "outpost"
                  ]
                },
                "effect": "multiply",
                "value": 1.5,
                "type": "passive"
              },
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "outpost"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "manuscript-trade",
        "name": "Manuscript Trade",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/manuscript-trade-1.png",
        "description": "Scholars garrisoned in Docks provide +30% faster production speed and contribute to global research.",
        "variations": [
          {
            "id": "manuscript-trade-1",
            "baseId": "manuscript-trade",
            "type": "technology",
            "name": "Manuscript Trade",
            "pbgid": 2101943,
            "attribName": "upgrade_naval_manuscript_trade_sul",
            "age": 1,
            "civs": [
              "de"
            ],
            "description": "Scholars garrisoned in Docks provide +30% faster production speed and contribute to global research.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/manuscript-trade-1.png",
            "effects": [
              {
                "property": "productionSpeed",
                "select": {
                  "id": [
                    "dock"
                  ]
                },
                "effect": "multiply",
                "value": 1.3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "reinforced-foundations",
        "name": "Reinforced Foundations",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Population Technology"
        ],
        "classes": [
          "population",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/reinforced-foundations-3.png",
        "description": "Villagers and Infantry can garrison inside Houses for protection. Houses gain garrison arrows and +50% Health.",
        "variations": [
          {
            "id": "reinforced-foundations-3",
            "baseId": "reinforced-foundations",
            "type": "technology",
            "name": "Reinforced Foundations",
            "pbgid": 200696,
            "attribName": "upgrade_landmark_house_popcap_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Villagers and Infantry can garrison inside Houses for protection. Houses gain garrison arrows and +50% Health.",
            "classes": [
              "population",
              "technology"
            ],
            "displayClasses": [
              "Population Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 125
            },
            "producedBy": [
              "house-of-learning"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/reinforced-foundations-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "house"
                  ]
                },
                "effect": "multiply",
                "value": 1.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "sanctity",
        "name": "Sanctity",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/sanctity-2.png",
        "description": "Allow Scholars to capture Sacred Sites before the Castle Age (III). Sacred Sites generate +25% more Gold.",
        "variations": [
          {
            "id": "sanctity-2",
            "baseId": "sanctity",
            "type": "technology",
            "name": "Sanctity",
            "pbgid": 181960,
            "attribName": "upgrade_unit_religious_sanctity_4_sul",
            "age": 2,
            "civs": [
              "de"
            ],
            "description": "Allow Scholars to capture Sacred Sites before the Castle Age (III). Sacred Sites generate +25% more Gold.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 210
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/sanctity-2.png",
            "effects": [
              {
                "property": "goldGeneration",
                "select": {
                  "id": [
                    "sacred-site"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              },
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "scholar"
                  ]
                },
                "effect": "multiply",
                "value": 1,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "slow-burning-defenses",
        "name": "Slow-Burning Defenses",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/slow-burning-defenses-3.png",
        "description": "Increase the fire armor of Stone Wall Towers, Keeps, and Outposts by +10.",
        "variations": [
          {
            "id": "slow-burning-defenses-3",
            "pbgid": 2108027,
            "attribName": "upgrade_landmark_keep_defense_compond_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "slow-burning-defenses-4",
            "pbgid": 199892,
            "attribName": "upgrade_landmark_keep_defense_sul",
            "civs": [
              "de"
            ]
          }
        ],
        "baseId": "slow-burning-defenses",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 0,
          "vizier": 0,
          "oliveoil": 0,
          "total": 0,
          "popcap": 0,
          "time": 225
        },
        "producedBy": [
          "compound-of-the-defender"
        ],
        "effects": [
          {
            "property": "fireArmor",
            "select": {
              "id": [
                "stone-wall-tower",
                "keep",
                "outpost"
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "passive"
          }
        ],
        "shared": {
          "slow-burning-defenses-4": {
            "name": "Slow-Burning Defenses",
            "age": 4,
            "producedBy": [
              "keep"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/slow-burning-defenses-4.png",
            "id": "slow-burning-defenses-4"
          }
        }
      },
      {
        "id": "swiftness",
        "name": "Swiftness",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/swiftness-3.png",
        "description": "Increases the movement speed of Scholars by +50%.",
        "variations": [
          {
            "id": "swiftness-3",
            "baseId": "swiftness",
            "type": "technology",
            "name": "Swiftness",
            "pbgid": 200137,
            "attribName": "upgrade_landmark_scholar_speed_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Increases the movement speed of Scholars by +50%.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 450
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/swiftness-3.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "scholar"
                  ]
                },
                "effect": "multiply",
                "value": 1.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "tranquil-venue",
        "name": "Tranquil Venue",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Mosque Technology"
        ],
        "classes": [
          "mosque",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/tranquil-venue-3.png",
        "description": "Mosques restore +4 health every second to units that are out of combat.",
        "variations": [
          {
            "id": "tranquil-venue-3",
            "baseId": "tranquil-venue",
            "type": "technology",
            "name": "Tranquil Venue",
            "pbgid": 200091,
            "attribName": "upgrade_landmark_mosque_heal_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Mosques restore +4 health every second to units that are out of combat.",
            "classes": [
              "mosque",
              "technology"
            ],
            "displayClasses": [
              "Mosque Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 225
            },
            "producedBy": [
              "house-of-learning"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/tranquil-venue-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "mosque"
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "village-fortresses",
        "name": "Village Fortresses",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Keep Technology"
        ],
        "classes": [
          "keep",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/village-fortresses-3.png",
        "description": "Keeps act like Town Centers, including unit production, population capacity, and technology.",
        "variations": [
          {
            "id": "village-fortresses-3",
            "baseId": "village-fortresses",
            "type": "technology",
            "name": "Village Fortresses",
            "pbgid": 200170,
            "attribName": "upgrade_age2_keep_town_center_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Keeps act like Town Centers, including unit production, population capacity, and technology.",
            "classes": [
              "keep",
              "technology"
            ],
            "displayClasses": [
              "Keep Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 360
            },
            "producedBy": [
              "compound-of-the-defender",
              "keep"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/village-fortresses-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "keep"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "zeal",
        "name": "Zeal",
        "type": "technology",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/zeal-4.png",
        "description": "Units healed by Scholars gain +50% attack speed for 3 seconds.",
        "variations": [
          {
            "id": "zeal-4",
            "baseId": "zeal",
            "type": "technology",
            "name": "Zeal",
            "pbgid": 181969,
            "attribName": "upgrade_unit_religious_zealous_4_sul",
            "age": 4,
            "civs": [
              "de"
            ],
            "description": "Units healed by Scholars gain +50% attack speed for 3 seconds.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 1080
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/zeal-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "cavalry"
                    ]
                  ],
                  "id": [
                    "scholar"
                  ]
                },
                "effect": "multiply",
                "value": 0.7000000000000001,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "admiralty",
        "name": "Admiralty",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/admiralty-2.png",
        "description": "Increase the range of combat ships by +1.",
        "variations": [
          {
            "id": "admiralty-2",
            "baseId": "admiralty",
            "type": "technology",
            "name": "Admiralty",
            "pbgid": 2033826,
            "attribName": "upgrade_naval_shipwrights_eng",
            "age": 2,
            "civs": [
              "en"
            ],
            "description": "Increase the range of combat ships by +1.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/admiralty-2.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "armor-clad",
        "name": "Armor Clad",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Man-at-Arms Technology"
        ],
        "classes": [
          "man-at-arms",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/armor-clad-3.png",
        "description": "Increase the ranged and melee armor of Men-at-Arms by +2.",
        "variations": [
          {
            "id": "armor-clad-3",
            "baseId": "armor-clad",
            "type": "technology",
            "name": "Armor Clad",
            "pbgid": 2014110,
            "attribName": "upgrade_armor_clad_eng",
            "age": 3,
            "civs": [
              "en"
            ],
            "description": "Increase the ranged and melee armor of Men-at-Arms by +2.",
            "classes": [
              "man-at-arms",
              "technology"
            ],
            "displayClasses": [
              "Man-at-Arms Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/armor-clad-3.png",
            "effects": [
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "man-at-arms"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "man-at-arms"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "arrow-volley",
        "name": "Arrow Volley",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Longbowman Ability Unlock"
        ],
        "classes": [
          "longbowman",
          "ability",
          "unlock"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/arrow-volley-4.png",
        "description": "Longbowmen gain Arrow Volley, an activated ability that reduces their time to attack by +1 second for a duration of 6 seconds.",
        "variations": [
          {
            "id": "arrow-volley-4",
            "baseId": "arrow-volley",
            "type": "technology",
            "name": "Arrow Volley",
            "pbgid": 202556,
            "attribName": "upgrade_ranged_longbow_arrow_volley_eng",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Longbowmen gain Arrow Volley, an activated ability that reduces their time to attack by +1 second for a duration of 6 seconds.",
            "classes": [
              "longbowman",
              "ability",
              "unlock"
            ],
            "displayClasses": [
              "Longbowman Ability Unlock"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "council-hall",
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/arrow-volley-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "longbowman"
                  ]
                },
                "effect": "change",
                "value": -1,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "enclosures",
        "name": "Enclosures",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Farm Technology"
        ],
        "classes": [
          "farm",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/enclosures-4.png",
        "description": "Each Farm Enclosure being worked by a Villager generates +1 Gold every 5 seconds.",
        "variations": [
          {
            "id": "enclosures-4",
            "baseId": "enclosures",
            "type": "technology",
            "name": "Enclosures",
            "pbgid": 202557,
            "attribName": "upgrade_farm_improved_enclosures_eng",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Each Farm Enclosure being worked by a Villager generates +1 Gold every 5 seconds.",
            "classes": [
              "farm",
              "technology"
            ],
            "displayClasses": [
              "Farm Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "mill"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/enclosures-4.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager",
                    "farm"
                  ]
                },
                "effect": "change",
                "value": 0.2,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "network-of-citadels",
        "name": "Network of Citadels",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/network-of-citadels-3.png",
        "description": "Increase the Network of Castles attack speed bonus from +20% to +40%.",
        "variations": [
          {
            "id": "network-of-citadels-3",
            "baseId": "network-of-citadels",
            "type": "technology",
            "name": "Network of Citadels",
            "pbgid": 2014204,
            "attribName": "upgrade_network_of_citadels_eng",
            "age": 3,
            "civs": [
              "en"
            ],
            "description": "Increase the Network of Castles attack speed bonus from +20% to +40%.",
            "classes": [
              "defensive",
              "technology"
            ],
            "displayClasses": [
              "Defensive Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 150,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/network-of-citadels-3.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "shattering-projectiles",
        "name": "Shattering Projectiles",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Trebuchet Technology"
        ],
        "classes": [
          "trebuchet",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/shattering-projectiles-4.png",
        "description": "Trebuchet projectiles shatter on impact, increasing their area of effect.",
        "variations": [
          {
            "id": "shattering-projectiles-4",
            "baseId": "shattering-projectiles",
            "type": "technology",
            "name": "Shattering Projectiles",
            "pbgid": 202558,
            "attribName": "upgrade_trebuchet_aoe_eng",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Trebuchet projectiles shatter on impact, increasing their area of effect.",
            "classes": [
              "trebuchet",
              "technology"
            ],
            "displayClasses": [
              "Trebuchet Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/shattering-projectiles-4.png",
            "effects": [
              {
                "property": "areaOfEffect",
                "select": {
                  "id": [
                    "counterweight-trebuchet"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-king-3",
        "name": "Castle Age King",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "King Scaling Technology"
        ],
        "classes": [
          "king",
          "scaling",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/king-2.png",
        "description": "Increases the health, attack and armor of the King when reaching Castle Age.",
        "variations": [
          {
            "id": "upgrade-king-3",
            "baseId": "upgrade-king-3",
            "type": "technology",
            "name": "Castle Age King",
            "pbgid": 2123164,
            "attribName": "upgrade_abbey_king_castle_1",
            "age": 3,
            "civs": [
              "en"
            ],
            "description": "Increases the health, attack and armor of the King when reaching Castle Age.",
            "classes": [
              "king",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "King Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/king-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 75,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeAttack",
                "value": 4,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeArmor",
                "value": 1,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "rangedArmor",
                "value": 1,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeAttack",
                "value": 2,
                "effect": "change",
                "type": "ability",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-king-4",
        "name": "Imperial Age King",
        "type": "technology",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "King Scaling Technology"
        ],
        "classes": [
          "king",
          "scaling",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/king-2.png",
        "description": "Increases the health, attack and armor of the King when reaching Imperial Age.",
        "variations": [
          {
            "id": "upgrade-king-4",
            "baseId": "upgrade-king-4",
            "type": "technology",
            "name": "Imperial Age King",
            "pbgid": 2123168,
            "attribName": "upgrade_abbey_king_imp_2",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Increases the health, attack and armor of the King when reaching Imperial Age.",
            "classes": [
              "king",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "King Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/king-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 100,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeAttack",
                "value": 5,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeArmor",
                "value": 1,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "rangedArmor",
                "value": 1,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              },
              {
                "property": "meleeAttack",
                "value": 3,
                "effect": "change",
                "type": "ability",
                "select": {
                  "id": [
                    "king"
                  ],
                  "class": []
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "cantled-saddles",
        "name": "Cantled Saddles",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Royal Knight Technology"
        ],
        "classes": [
          "royal",
          "knight",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/cantled-saddles-3.png",
        "description": "Increase Royal Knights' bonus damage after a charge from +3 to +10.",
        "variations": [
          {
            "id": "cantled-saddles-3",
            "pbgid": 170541,
            "attribName": "upgrade_cavalry_cantled_saddle_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "cantled-saddles-3",
            "pbgid": 170541,
            "attribName": "upgrade_cavalry_cantled_saddle_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "cantled-saddles",
        "age": 3,
        "costs": {
          "food": 75,
          "wood": 0,
          "stone": 0,
          "gold": 200,
          "vizier": 0,
          "oliveoil": 0,
          "total": 275,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "school-of-cavalry",
          "stable"
        ],
        "effects": [
          {
            "property": "meleeAttack",
            "select": {
              "id": [
                "royal-knight"
              ]
            },
            "target": {
              "class": [
                [
                  "infantry"
                ],
                [
                  "cavalry"
                ]
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "bonus"
          }
        ],
        "shared": {}
      },
      {
        "id": "chivalry",
        "name": "Chivalry",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Royal Knight Technology"
        ],
        "classes": [
          "royal",
          "knight",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/chivalry-2.png",
        "description": "Royal Knights regenerate +1 health every 1 seconds when out of combat.",
        "variations": [
          {
            "id": "chivalry-2",
            "pbgid": 137068,
            "attribName": "upgrade_cavalry_chivalry_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "chivalry-2",
            "pbgid": 137068,
            "attribName": "upgrade_cavalry_chivalry_fre",
            "civs": [
              "je"
            ]
          },
          {
            "id": "chivalry-3",
            "pbgid": 2035319,
            "attribName": "upgrade_landmark_cavalry_chivalry_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "chivalry-3",
            "pbgid": 2035319,
            "attribName": "upgrade_landmark_cavalry_chivalry_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "chivalry",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 200,
          "vizier": 0,
          "oliveoil": 0,
          "total": 300,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "school-of-cavalry",
          "stable"
        ],
        "effects": [
          {
            "property": "healingRate",
            "select": {
              "id": [
                "royal-knight"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {
          "chivalry-3": {
            "name": "Chivalry",
            "age": 3,
            "producedBy": [
              "royal-institute"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/chivalry-3.png",
            "id": "chivalry-3"
          }
        }
      },
      {
        "id": "crossbow-stirrups",
        "name": "Crossbow Stirrups",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Arbalétrier Technology"
        ],
        "classes": [
          "arbalétrier",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/crossbow-stirrups-3.png",
        "description": "Increase the attack speed of Arbalétriers by +25%.",
        "variations": [
          {
            "id": "crossbow-stirrups-3",
            "pbgid": 2035322,
            "attribName": "upgrade_landmark_ranged_crossbow_stirrups_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "crossbow-stirrups-3",
            "pbgid": 2035322,
            "attribName": "upgrade_landmark_ranged_crossbow_stirrups_fre",
            "civs": [
              "je"
            ]
          },
          {
            "id": "crossbow-stirrups-4",
            "pbgid": 172158,
            "attribName": "upgrade_ranged_crossbow_stirrups_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "crossbow-stirrups-4",
            "pbgid": 172158,
            "attribName": "upgrade_ranged_crossbow_stirrups_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "crossbow-stirrups",
        "age": 3,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "royal-institute"
        ],
        "effects": [
          {
            "property": "attackSpeed",
            "select": {
              "id": [
                "arbaletrier"
              ]
            },
            "effect": "multiply",
            "value": 0.8,
            "type": "passive"
          }
        ],
        "shared": {
          "crossbow-stirrups-4": {
            "name": "Crossbow Stirrups",
            "age": 4,
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/crossbow-stirrups-4.png",
            "id": "crossbow-stirrups-4"
          }
        }
      },
      {
        "id": "enlistment-incentives",
        "name": "Enlistment Incentives",
        "type": "technology",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Influence Technology"
        ],
        "classes": [
          "influence",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/enlistment-incentives-3.png",
        "description": "Improves the French influence by reducing unit costs by a further -5%.",
        "variations": [
          {
            "id": "enlistment-incentives-3",
            "pbgid": 2035320,
            "attribName": "upgrade_landmark_enlistment_incentives_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "enlistment-incentives-4",
            "pbgid": 1905966,
            "attribName": "upgrade_enlistment_incentives_fre",
            "civs": [
              "fr"
            ]
          }
        ],
        "baseId": "enlistment-incentives",
        "age": 3,
        "costs": {
          "food": 150,
          "wood": 0,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "royal-institute"
        ],
        "effects": [
          {
            "property": "unknown",
            "select": {
              "class": [
                [
                  "cavalry"
                ],
                [
                  "ranged"
                ]
              ]
            },
            "effect": "change",
            "value": 5,
            "type": "influence"
          }
        ],
        "shared": {
          "enlistment-incentives-4": {
            "name": "Enlistment Incentives",
            "age": 4,
            "producedBy": [
              "keep",
              "red-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/enlistment-incentives-4.png",
            "id": "enlistment-incentives-4"
          }
        }
      },
      {
        "id": "gambesons",
        "name": "Gambesons",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Arbalétrier Technology"
        ],
        "classes": [
          "arbalétrier",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/gambesons-3.png",
        "description": "Increase Arbalétrier melee armor by +5.",
        "variations": [
          {
            "id": "gambesons-3",
            "pbgid": 172163,
            "attribName": "upgrade_ranged_crossbow_drills_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "gambesons-3",
            "pbgid": 172163,
            "attribName": "upgrade_ranged_crossbow_drills_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "gambesons",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "archery-range"
        ],
        "effects": [
          {
            "property": "meleeArmor",
            "select": {
              "id": [
                "arbaletrier"
              ]
            },
            "effect": "change",
            "value": 5,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "long-guns",
        "name": "Long Guns",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/long-guns-4.png",
        "description": "Increase the damage of naval cannons by +15%.",
        "variations": [
          {
            "id": "long-guns-4",
            "pbgid": 2033833,
            "attribName": "upgrade_naval_long_guns_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "long-guns-4",
            "pbgid": 2033833,
            "attribName": "upgrade_naval_long_guns_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "long-guns",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 200,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass"
              ]
            },
            "effect": "multiply",
            "value": 1.15,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "merchant-guilds",
        "name": "Merchant Guilds",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/merchant-guilds-4.png",
        "description": "Active Traders generate 1 gold every 6 seconds.",
        "variations": [
          {
            "id": "merchant-guilds-4",
            "pbgid": 2137695,
            "attribName": "upgrade_market_trickle_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "merchant-guilds-4",
            "pbgid": 2137695,
            "attribName": "upgrade_market_trickle_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "merchant-guilds",
        "age": 4,
        "costs": {
          "food": 200,
          "wood": 0,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "chamber-of-commerce",
          "market"
        ],
        "effects": [
          {
            "property": "goldGatherRate",
            "select": {
              "id": [
                "trader"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "royal-bloodlines",
        "name": "Royal Bloodlines",
        "type": "technology",
        "civs": [
          "fr",
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/royal-bloodlines-3.png",
        "description": "Increase the health of all cavalry by +35%.",
        "variations": [
          {
            "id": "royal-bloodlines-3",
            "pbgid": 2035317,
            "attribName": "upgrade_landmark_cavalry_bloodline_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "royal-bloodlines-3",
            "pbgid": 2035317,
            "attribName": "upgrade_landmark_cavalry_bloodline_fre",
            "civs": [
              "je"
            ]
          },
          {
            "id": "royal-bloodlines-4",
            "pbgid": 134545,
            "attribName": "upgrade_cavalry_bloodline_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "royal-bloodlines-4",
            "pbgid": 134545,
            "attribName": "upgrade_cavalry_bloodline_fre",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "royal-bloodlines",
        "age": 3,
        "costs": {
          "food": 300,
          "wood": 0,
          "stone": 0,
          "gold": 700,
          "vizier": 0,
          "oliveoil": 0,
          "total": 1000,
          "popcap": 0,
          "time": 90
        },
        "producedBy": [
          "royal-institute"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "cavalry"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.35,
            "type": "passive"
          }
        ],
        "shared": {
          "royal-bloodlines-4": {
            "name": "Royal Bloodlines",
            "age": 4,
            "producedBy": [
              "university"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/royal-bloodlines-4.png",
            "id": "royal-bloodlines-4"
          }
        }
      },
      {
        "id": "devoutness",
        "name": "Devoutness",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Prelate Technology"
        ],
        "classes": [
          "prelate",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/devoutness-3.png",
        "description": "Inspired Villagers gather resources +10% faster and construct buildings and defenses +25% quicker.",
        "variations": [
          {
            "id": "devoutness-3",
            "baseId": "devoutness",
            "type": "technology",
            "name": "Devoutness",
            "pbgid": 199515,
            "attribName": "upgrade_devoutness_hre",
            "age": 3,
            "civs": [
              "hr"
            ],
            "description": "Inspired Villagers gather resources +10% faster and construct buildings and defenses +25% quicker.",
            "classes": [
              "prelate",
              "technology"
            ],
            "displayClasses": [
              "Prelate Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "regnitz-cathedral",
              "monastery"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/devoutness-3.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villagers"
                  ]
                },
                "effect": "multiply",
                "value": 1.1,
                "type": "influence"
              },
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villagers"
                  ]
                },
                "effect": "multiply",
                "value": 1.1,
                "type": "influence"
              },
              {
                "property": "woodGatherRate",
                "select": {
                  "id": [
                    "villagers"
                  ]
                },
                "effect": "multiply",
                "value": 1.1,
                "type": "influence"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villagers"
                  ]
                },
                "effect": "multiply",
                "value": 1.1,
                "type": "influence"
              },
              {
                "property": "buildTime",
                "select": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fire-stations",
        "name": "Fire Stations",
        "type": "technology",
        "civs": [
          "hr",
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/fire-stations-2.png",
        "description": "Military Ships regenerate +1 health every 2 seconds when out of combat.",
        "variations": [
          {
            "id": "fire-stations-2",
            "pbgid": 2034072,
            "attribName": "upgrade_naval_firestations_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "fire-stations-2",
            "pbgid": 2034072,
            "attribName": "upgrade_naval_firestations_hre",
            "civs": [
              "od"
            ]
          }
        ],
        "baseId": "fire-stations",
        "age": 2,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "effects": [
          {
            "property": "healingRate",
            "select": {
              "class": [
                [
                  "ship",
                  "springald"
                ],
                [
                  "ship",
                  "archer"
                ],
                [
                  "ship",
                  "incendiary"
                ],
                [
                  "warship"
                ]
              ],
              "id": [
                "galleass",
                "grand-galley"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "heavy-maces",
        "name": "Heavy Maces",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Man-at-Arms Technology"
        ],
        "classes": [
          "man-at-arms",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/heavy-maces-3.png",
        "description": "Men-at-Arms wield maces, increasing their bonus damage against heavy targets by +6.",
        "variations": [
          {
            "id": "heavy-maces-3",
            "baseId": "heavy-maces",
            "type": "technology",
            "name": "Heavy Maces",
            "pbgid": 174678,
            "attribName": "upgrade_man_at_arms_maces_hre",
            "age": 3,
            "civs": [
              "hr"
            ],
            "description": "Men-at-Arms wield maces, increasing their bonus damage against heavy targets by +6.",
            "classes": [
              "man-at-arms",
              "technology"
            ],
            "displayClasses": [
              "Man-at-Arms Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/heavy-maces-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "man-at-arms"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "heavy"
                    ]
                  ]
                },
                "effect": "change",
                "value": 6,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "inspired-warriors",
        "name": "Inspired Warriors",
        "type": "technology",
        "civs": [
          "hr",
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/inspired-warriors-3.png",
        "description": "Prelates increase their move speed by 10% and can inspire military units, improving their armor by +1, and damage by +15%.",
        "variations": [
          {
            "id": "inspired-warriors-3",
            "pbgid": 211200,
            "attribName": "upgrade_inspired_infantry_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "inspired-warriors-3",
            "pbgid": 211200,
            "attribName": "upgrade_inspired_infantry_hre",
            "civs": [
              "od"
            ]
          }
        ],
        "baseId": "inspired-warriors",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "regnitz-cathedral",
          "monastery"
        ],
        "effects": [
          {
            "property": "rangedArmor",
            "select": {
              "class": [
                [
                  "cavalry"
                ],
                [
                  "infantry"
                ]
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "influence"
          },
          {
            "property": "meleeArmor",
            "select": {
              "class": [
                [
                  "cavalry"
                ],
                [
                  "infantry"
                ]
              ]
            },
            "effect": "change",
            "value": 10,
            "type": "influence"
          },
          {
            "property": "meleeAttack",
            "select": {
              "class": [
                [
                  "cavalry",
                  "melee"
                ],
                [
                  "infantry",
                  "melee"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.01,
            "type": "influence"
          },
          {
            "property": "rangedAttack",
            "select": {
              "class": [
                [
                  "cavalry",
                  "ranged"
                ],
                [
                  "infantry",
                  "ranged"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.01,
            "type": "influence"
          }
        ],
        "shared": {}
      },
      {
        "id": "marching-drills",
        "name": "Marching Drills",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Infantry Technology"
        ],
        "classes": [
          "infantry",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/marching-drills-2.png",
        "description": "Increase the movement speed of infantry and religious units by +10%.",
        "variations": [
          {
            "id": "marching-drills-2",
            "baseId": "marching-drills",
            "type": "technology",
            "name": "Marching Drills",
            "pbgid": 170824,
            "attribName": "upgrade_infantry_marching_drills_hre",
            "age": 2,
            "civs": [
              "hr"
            ],
            "description": "Increase the movement speed of infantry and religious units by +10%.",
            "classes": [
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "meinwerk-palace",
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/marching-drills-2.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ],
                  "id": [
                    "prelate"
                  ]
                },
                "effect": "multiply",
                "value": 1.1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "reinforced-defenses",
        "name": "Reinforced Defenses",
        "type": "technology",
        "civs": [
          "hr",
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/reinforced-defenses-4.png",
        "description": "Increase the health of walls, towers, and gates by +40%.",
        "variations": [
          {
            "id": "reinforced-defenses-4",
            "pbgid": 174761,
            "attribName": "upgrade_reinforced_defenses_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "reinforced-defenses-4",
            "pbgid": 174761,
            "attribName": "upgrade_reinforced_defenses_hre",
            "civs": [
              "od"
            ]
          }
        ],
        "baseId": "reinforced-defenses",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 100,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "keep",
          "elzbach-palace"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "class": [
                [
                  "wall"
                ],
                [
                  "tower"
                ],
                [
                  "gate"
                ]
              ]
            },
            "effect": "multiply",
            "value": 1.4,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "riveted-chain-mail",
        "name": "Riveted Chain Mail",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Spearman and Horseman Technology"
        ],
        "classes": [
          "spearman",
          "and",
          "horseman",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/riveted-chain-mail-2.png",
        "description": "Increase the melee armor of Spearmen and Horsemen by +2.",
        "variations": [
          {
            "id": "riveted-chain-mail-2",
            "baseId": "riveted-chain-mail",
            "type": "technology",
            "name": "Riveted Chain Mail",
            "pbgid": 2127191,
            "attribName": "upgrade_riveted_chain_armour_hre",
            "age": 2,
            "civs": [
              "hr"
            ],
            "description": "Increase the melee armor of Spearmen and Horsemen by +2.",
            "classes": [
              "spearman",
              "and",
              "horseman",
              "technology"
            ],
            "displayClasses": [
              "Spearman and Horseman Technology"
            ],
            "unique": true,
            "costs": {
              "food": 30,
              "wood": 0,
              "stone": 0,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 105,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "meinwerk-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/riveted-chain-mail-2.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "spearman",
                    "horseman"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "slate-and-stone-construction",
        "name": "Slate and Stone Construction",
        "type": "technology",
        "civs": [
          "hr",
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Building Technology"
        ],
        "classes": [
          "building",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/slate-and-stone-construction-3.png",
        "description": "All buildings gain +5 fire armor.",
        "variations": [
          {
            "id": "slate-and-stone-construction-3",
            "pbgid": 199503,
            "attribName": "upgrade_building_fire_armor_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "slate-and-stone-construction-3",
            "pbgid": 199503,
            "attribName": "upgrade_building_fire_armor_hre",
            "civs": [
              "od"
            ]
          }
        ],
        "baseId": "slate-and-stone-construction",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 100,
          "gold": 250,
          "vizier": 0,
          "oliveoil": 0,
          "total": 350,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "keep",
          "elzbach-palace"
        ],
        "effects": [
          {
            "property": "fireArmor",
            "select": {
              "class": [
                [
                  "building"
                ]
              ]
            },
            "effect": "change",
            "value": 5,
            "type": "passive"
          }
        ],
        "shared": {}
      },
      {
        "id": "steel-barding",
        "name": "Steel Barding",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/steel-barding-3.png",
        "description": "Grants Knights +2 melee and +2 ranged armor.",
        "variations": [
          {
            "id": "steel-barding-3",
            "baseId": "steel-barding",
            "type": "technology",
            "name": "Steel Barding",
            "pbgid": 2122227,
            "attribName": "upgrade_knight_barding_hre",
            "age": 3,
            "civs": [
              "hr"
            ],
            "description": "Grants Knights +2 melee and +2 ranged armor.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 90,
              "wood": 0,
              "stone": 0,
              "gold": 210,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "meinwerk-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/steel-barding-3.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "knight"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "knight"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "two-handed-weapons",
        "name": "Two-Handed Weapons",
        "type": "technology",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Man-at-Arms Technology"
        ],
        "classes": [
          "man-at-arms",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/two-handed-weapons-3.png",
        "description": "Men-at-Arms wield two-handed weapons, increasing their damage by +2.",
        "variations": [
          {
            "id": "two-handed-weapons-3",
            "baseId": "two-handed-weapons",
            "type": "technology",
            "name": "Two-Handed Weapons",
            "pbgid": 2025322,
            "attribName": "upgrade_man_at_arms_two_handed_hre",
            "age": 3,
            "civs": [
              "hr"
            ],
            "description": "Men-at-Arms wield two-handed weapons, increasing their damage by +2.",
            "classes": [
              "man-at-arms",
              "technology"
            ],
            "displayClasses": [
              "Man-at-Arms Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/two-handed-weapons-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "man-at-arms"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "bunrei",
        "name": "Bunrei",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Shinto Technology"
        ],
        "classes": [
          "shinto",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/bunrei-4.png",
        "description": "Increases the maximum number of Yorishiro by +2. Immediately produces 2 Yorishiro at the Floating Gate.",
        "variations": [
          {
            "id": "bunrei-4",
            "baseId": "bunrei",
            "type": "technology",
            "name": "Bunrei",
            "pbgid": 2157994,
            "attribName": "upgrade_shrine_bunrei_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increases the maximum number of Yorishiro by +2. Immediately produces 2 Yorishiro at the Floating Gate.",
            "classes": [
              "shinto",
              "technology"
            ],
            "displayClasses": [
              "Shinto Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 400,
              "vizier": 0,
              "oliveoil": 0,
              "total": 400,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "shinto-shrine"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/bunrei-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "floating-gate"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "copper-plating",
        "name": "Copper Plating",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/copper-plating-3.png",
        "description": "Improves the fire and ranged armor of ships by +2.",
        "variations": [
          {
            "id": "copper-plating-3",
            "baseId": "copper-plating",
            "type": "technology",
            "name": "Copper Plating",
            "pbgid": 2127541,
            "attribName": "upgrade_copper_plating_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Improves the fire and ranged armor of ships by +2.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 150,
              "vizier": 0,
              "oliveoil": 0,
              "total": 225,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/copper-plating-3.png",
            "effects": [
              {
                "property": "fireArmor",
                "select": {
                  "class": [
                    [
                      "ship"
                    ],
                    [
                      "warship"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.02,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "class": [
                    [
                      "ship"
                    ],
                    [
                      "warship"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.02,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "daimyo-manor",
        "name": "Daimyo Manor",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Town Center Improvement 1/3"
        ],
        "classes": [
          "town",
          "center",
          "improvement",
          "1/3"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/daimyo-manor-1.png",
        "description": "Increases the production cap of Bannerman Samurai by +1 and provides a free Villager.\nIncreases Town Center health by +1000, adds an additional arrow slit, and adds an aura which enhances Villagers harvest rate from Farms by +25%.",
        "variations": [
          {
            "id": "daimyo-manor-1",
            "baseId": "daimyo-manor",
            "type": "technology",
            "name": "Daimyo Manor",
            "pbgid": 2126951,
            "attribName": "upgrade_capital_tier_1_jpn",
            "age": 1,
            "civs": [
              "ja"
            ],
            "description": "Increases the production cap of Bannerman Samurai by +1 and provides a free Villager.\nIncreases Town Center health by +1000, adds an additional arrow slit, and adds an aura which enhances Villagers harvest rate from Farms by +25%.",
            "classes": [
              "town",
              "center",
              "improvement",
              "1/3"
            ],
            "displayClasses": [
              "Town Center Improvement 1/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 300,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/daimyo-manor-1.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "town-center",
                    "capital-towncenter"
                  ]
                },
                "effect": "change",
                "value": 1000,
                "type": "passive"
              },
              {
                "property": "farmGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "daimyo-palace",
        "name": "Daimyo Palace",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Town Center Improvement 2/3"
        ],
        "classes": [
          "town",
          "center",
          "improvement",
          "2/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/daimyo-palace-2.png",
        "description": "Increases the production cap of Bannerman Samurai by +2 and provides a free Villager.\nIncreases Town Center health by +2000, fire armor by +2, adds an additional arrow slit, and adds an aura which enhances Villagers harvest rate from Farms by +50%.",
        "variations": [
          {
            "id": "daimyo-palace-2",
            "baseId": "daimyo-palace",
            "type": "technology",
            "name": "Daimyo Palace",
            "pbgid": 2122005,
            "attribName": "upgrade_capital_tier_2_jpn",
            "age": 2,
            "civs": [
              "ja"
            ],
            "description": "Increases the production cap of Bannerman Samurai by +2 and provides a free Villager.\nIncreases Town Center health by +2000, fire armor by +2, adds an additional arrow slit, and adds an aura which enhances Villagers harvest rate from Farms by +50%.",
            "classes": [
              "town",
              "center",
              "improvement",
              "2/3"
            ],
            "displayClasses": [
              "Town Center Improvement 2/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 600,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/daimyo-palace-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "town-center",
                    "capital-towncenter"
                  ]
                },
                "effect": "change",
                "value": 2000,
                "type": "passive"
              },
              {
                "property": "fireArmor",
                "select": {
                  "id": [
                    "town-center",
                    "capital-towncenter"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "farmGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "do-maru-armor",
        "name": "Do-maru Armor",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Mounted Samurai Technology"
        ],
        "classes": [
          "mounted",
          "samurai",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/do-maru-armor-4.png",
        "description": "Increase Mounted Samurai move speed by +10% while Deflective Armor is active.",
        "variations": [
          {
            "id": "do-maru-armor-4",
            "baseId": "do-maru-armor",
            "type": "technology",
            "name": "Do-maru Armor",
            "pbgid": 2127554,
            "attribName": "upgrade_marudo_armor_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increase Mounted Samurai move speed by +10% while Deflective Armor is active.",
            "classes": [
              "mounted",
              "samurai",
              "technology"
            ],
            "displayClasses": [
              "Mounted Samurai Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/do-maru-armor-4.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "mounted-samurai"
                  ]
                },
                "effect": "change",
                "value": 10,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "five-mountain-ministries",
        "name": "Five Mountain Ministries",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Buddhist Technology"
        ],
        "classes": [
          "buddhist",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/five-mountain-ministries-4.png",
        "description": "Buddhist Temples cast Sohei Sutra on a nearby enemy every 6 seconds.",
        "variations": [
          {
            "id": "five-mountain-ministries-4",
            "baseId": "five-mountain-ministries",
            "type": "technology",
            "name": "Five Mountain Ministries",
            "pbgid": 2158004,
            "attribName": "upgrade_temple_fivemountain_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Buddhist Temples cast Sohei Sutra on a nearby enemy every 6 seconds.",
            "classes": [
              "buddhist",
              "technology"
            ],
            "displayClasses": [
              "Buddhist Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 750,
              "vizier": 0,
              "oliveoil": 0,
              "total": 750,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "temple-of-equality",
              "buddhist-temple"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/five-mountain-ministries-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "buddhist-temple",
                    "temple-of-equality"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fudasashi",
        "name": "Fudasashi",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology 3/3"
        ],
        "classes": [
          "villager",
          "technology",
          "3/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/fudasashi-3.png",
        "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
        "variations": [
          {
            "id": "fudasashi-3",
            "baseId": "fudasashi",
            "type": "technology",
            "name": "Fudasashi",
            "pbgid": 2137906,
            "attribName": "upgrade_unit_town_center_wheelbarrow_3_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
            "classes": [
              "villager",
              "technology",
              "3/3"
            ],
            "displayClasses": [
              "Villager Technology 3/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "farmhouse",
              "kura-storehouse"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fudasashi-3.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              },
              {
                "property": "berryGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "gion-festival",
        "name": "Gion Festival",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Shinto Technology"
        ],
        "classes": [
          "shinto",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/gion-festival-4.png",
        "description": "Increases the Line of Sight of all buildings by +2 tiles. Every 3 minutes, all economic units heal for 100% of their health over 3 seconds.",
        "variations": [
          {
            "id": "gion-festival-4",
            "baseId": "gion-festival",
            "type": "technology",
            "name": "Gion Festival",
            "pbgid": 2157995,
            "attribName": "upgrade_shrine_gion_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increases the Line of Sight of all buildings by +2 tiles. Every 3 minutes, all economic units heal for 100% of their health over 3 seconds.",
            "classes": [
              "shinto",
              "technology"
            ],
            "displayClasses": [
              "Shinto Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 100,
              "stone": 0,
              "gold": 150,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 40
            },
            "producedBy": [
              "shinto-shrine"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/gion-festival-4.png",
            "effects": [
              {
                "property": "lineOfSight",
                "select": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "hizukuri",
        "name": "Hizukuri",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Damage Technology 2/4"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "2/4"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/hizukuri-2.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "hizukuri-2",
            "baseId": "hizukuri",
            "type": "technology",
            "name": "Hizukuri",
            "pbgid": 2136858,
            "attribName": "upgrade_melee_damage_ii_jpn",
            "age": 2,
            "civs": [
              "ja"
            ],
            "description": "Increase the melee damage of all non-siege units by +1.",
            "classes": [
              "melee",
              "damage",
              "technology",
              "2/4"
            ],
            "displayClasses": [
              "Melee Damage Technology 2/4"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 75,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "forge"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/hizukuri-2.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "kabura-ya-whistling-arrow",
        "name": "Kabura-ya Whistling Arrow",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Onna-Musha Technology"
        ],
        "classes": [
          "onna-musha",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/kabura-ya-whistling-arrow-3.png",
        "description": "Onna-Musha fire a whistling arrow when an enemy is seen, increasing move speed for 10 seconds.",
        "variations": [
          {
            "id": "kabura-ya-whistling-arrow-3",
            "baseId": "kabura-ya-whistling-arrow",
            "type": "technology",
            "name": "Kabura-ya Whistling Arrow",
            "pbgid": 2127409,
            "attribName": "upgrade_kaburya_arrow_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Onna-Musha fire a whistling arrow when an enemy is seen, increasing move speed for 10 seconds.",
            "classes": [
              "onna-musha",
              "technology"
            ],
            "displayClasses": [
              "Onna-Musha Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/kabura-ya-whistling-arrow-3.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "onna-musha"
                  ]
                },
                "effect": "change",
                "value": 10,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "kobuse-gitae",
        "name": "Kobuse-gitae",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Damage Technology 3/4"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "3/4"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/kobuse-gitae-3.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "kobuse-gitae-3",
            "baseId": "kobuse-gitae",
            "type": "technology",
            "name": "Kobuse-gitae",
            "pbgid": 2136859,
            "attribName": "upgrade_melee_damage_iii_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Increase the melee damage of all non-siege units by +1.",
            "classes": [
              "melee",
              "damage",
              "technology",
              "3/4"
            ],
            "displayClasses": [
              "Melee Damage Technology 3/4"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 125,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "forge"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/kobuse-gitae-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "nagae-yari",
        "name": "Nagae Yari",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Spearman Technology"
        ],
        "classes": [
          "spearman",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/nagae-yari-4.png",
        "description": "Spearmen are equipped with a stronger spear that increases weapon range by +20% and damage against cavalry by +20%.",
        "variations": [
          {
            "id": "nagae-yari-4",
            "baseId": "nagae-yari",
            "type": "technology",
            "name": "Nagae Yari",
            "pbgid": 2127555,
            "attribName": "upgrade_long_spear_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Spearmen are equipped with a stronger spear that increases weapon range by +20% and damage against cavalry by +20%.",
            "classes": [
              "spearman",
              "technology"
            ],
            "displayClasses": [
              "Spearman Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/nagae-yari-4.png",
            "effects": [
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "spearman"
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              },
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "spearman"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "cavalry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 10.6,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "nehan",
        "name": "Nehan",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Buddhist Technology"
        ],
        "classes": [
          "buddhist",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/nehan-4.png",
        "description": "Upgrades Buddhist Conversion to Nehan Conversion, which has a 25% shorter cooldown and additionally improves nearby allied units movement speed by +25% when cast.",
        "variations": [
          {
            "id": "nehan-4",
            "baseId": "nehan",
            "type": "technology",
            "name": "Nehan",
            "pbgid": 2158006,
            "attribName": "upgrade_temple_nehan_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Upgrades Buddhist Conversion to Nehan Conversion, which has a 25% shorter cooldown and additionally improves nearby allied units movement speed by +25% when cast.",
            "classes": [
              "buddhist",
              "technology"
            ],
            "displayClasses": [
              "Buddhist Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "temple-of-equality",
              "buddhist-temple"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/nehan-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "buddhist-monk"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "oda-tactics",
        "name": "Oda Tactics",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Infantry Technology"
        ],
        "classes": [
          "melee",
          "infantry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/oda-tactics-4.png",
        "description": "Increase health, damage, and torch damage of melee infantry by 20%.",
        "variations": [
          {
            "id": "oda-tactics-4",
            "baseId": "oda-tactics",
            "type": "technology",
            "name": "Oda Tactics",
            "pbgid": 2140971,
            "attribName": "upgrade_elite_army_tactics_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increase health, damage, and torch damage of melee infantry by 20%.",
            "classes": [
              "melee",
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Melee Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "university"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/oda-tactics-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "infantry",
                      "melee"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              },
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "infantry",
                      "melee"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              },
              {
                "property": "fireAttack",
                "select": {
                  "class": [
                    [
                      "infantry",
                      "melee"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "odachi",
        "name": "Odachi",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Samurai Technology"
        ],
        "classes": [
          "samurai",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/odachi-3.png",
        "description": "Equip Samurai with an Odachi, a long sword that deals +4 bonus damage against infantry.",
        "variations": [
          {
            "id": "odachi-3",
            "baseId": "odachi",
            "type": "technology",
            "name": "Odachi",
            "pbgid": 2127556,
            "attribName": "upgrade_odachi_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Equip Samurai with an Odachi, a long sword that deals +4 bonus damage against infantry.",
            "classes": [
              "samurai",
              "technology"
            ],
            "displayClasses": [
              "Samurai Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/odachi-3.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "samurai",
                    "katana-bannerman"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "shinto-rituals",
        "name": "Shinto Rituals",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Shinto Technology"
        ],
        "classes": [
          "shinto",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/shinto-rituals-3.png",
        "description": "Increases Shinto Priest health by +40, healing rate by +60%, and movement speed by +15%.",
        "variations": [
          {
            "id": "shinto-rituals-3",
            "baseId": "shinto-rituals",
            "type": "technology",
            "name": "Shinto Rituals",
            "pbgid": 2157996,
            "attribName": "upgrade_shrine_rituals_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Increases Shinto Priest health by +40, healing rate by +60%, and movement speed by +15%.",
            "classes": [
              "shinto",
              "technology"
            ],
            "displayClasses": [
              "Shinto Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 300,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "shinto-shrine"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/shinto-rituals-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "shinto-priest"
                  ]
                },
                "effect": "change",
                "value": 40,
                "type": "passive"
              },
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "shinto-priest"
                  ]
                },
                "effect": "multiply",
                "value": 1.6,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "shinto-priest"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "shogunate-castle",
        "name": "Shogunate Castle",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Town Center Improvement 3/3"
        ],
        "classes": [
          "town",
          "center",
          "improvement",
          "3/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/shogunate-castle-3.png",
        "description": "Increases the production cap of Bannerman Samurai by +3 and provides a free Villager.\nIncreases Town Center health by +3000, fire armor by +3, adds an aura which enhances Villagers harvest rate from Farms by +75%, and equips a Rocket Emplacement.",
        "variations": [
          {
            "id": "shogunate-castle-3",
            "baseId": "shogunate-castle",
            "type": "technology",
            "name": "Shogunate Castle",
            "pbgid": 2122006,
            "attribName": "upgrade_capital_tier_3_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Increases the production cap of Bannerman Samurai by +3 and provides a free Villager.\nIncreases Town Center health by +3000, fire armor by +3, adds an aura which enhances Villagers harvest rate from Farms by +75%, and equips a Rocket Emplacement.",
            "classes": [
              "town",
              "center",
              "improvement",
              "3/3"
            ],
            "displayClasses": [
              "Town Center Improvement 3/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 1200,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1200,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/shogunate-castle-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "town-center",
                    "capital-towncenter"
                  ]
                },
                "effect": "change",
                "value": 3000,
                "type": "passive"
              },
              {
                "property": "fireArmor",
                "select": {
                  "id": [
                    "town-center",
                    "capital-towncenter"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              },
              {
                "property": "farmGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.75,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "takezaiku",
        "name": "Takezaiku",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology 2/3"
        ],
        "classes": [
          "villager",
          "technology",
          "2/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/takezaiku-2.png",
        "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
        "variations": [
          {
            "id": "takezaiku-2",
            "baseId": "takezaiku",
            "type": "technology",
            "name": "Takezaiku",
            "pbgid": 2137905,
            "attribName": "upgrade_unit_town_center_wheelbarrow_2_jpn",
            "age": 2,
            "civs": [
              "ja"
            ],
            "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
            "classes": [
              "villager",
              "technology",
              "2/3"
            ],
            "displayClasses": [
              "Villager Technology 2/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 0,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 150,
              "popcap": 0,
              "time": 40
            },
            "producedBy": [
              "farmhouse",
              "kura-storehouse"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/takezaiku-2.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              },
              {
                "property": "berryGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "tatara",
        "name": "Tatara",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Damage Technology 1/4"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "1/4"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/tatara-1.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "tatara-1",
            "baseId": "tatara",
            "type": "technology",
            "name": "Tatara",
            "pbgid": 2136857,
            "attribName": "upgrade_melee_damage_i_jpn",
            "age": 1,
            "civs": [
              "ja"
            ],
            "description": "Increase the melee damage of all non-siege units by +1.",
            "classes": [
              "melee",
              "damage",
              "technology",
              "1/4"
            ],
            "displayClasses": [
              "Melee Damage Technology 1/4"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 25,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 100,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "forge"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/tatara-1.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "towara",
        "name": "Towara",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology 1/3"
        ],
        "classes": [
          "villager",
          "technology",
          "1/3"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/towara-1.png",
        "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
        "variations": [
          {
            "id": "towara-1",
            "baseId": "towara",
            "type": "technology",
            "name": "Towara",
            "pbgid": 2137904,
            "attribName": "upgrade_unit_town_center_wheelbarrow_1_jpn",
            "age": 1,
            "civs": [
              "ja"
            ],
            "description": "Increase the carry capacity of Villagers by +3, their movement speed by +7%, and +25% gather rate from Berry Bushes.",
            "classes": [
              "villager",
              "technology",
              "1/3"
            ],
            "displayClasses": [
              "Villager Technology 1/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 25,
              "stone": 0,
              "gold": 50,
              "vizier": 0,
              "oliveoil": 0,
              "total": 75,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "farmhouse",
              "kura-storehouse"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/towara-1.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              },
              {
                "property": "berryGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-shinobi-3",
        "name": "Castle Age Shinobi",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": false,
        "displayClasses": [
          "Shinobi Scaling Technology"
        ],
        "classes": [
          "shinobi",
          "scaling",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
        "description": "Increases the health and damage of Shinobi when reaching Castle Age.",
        "variations": [
          {
            "id": "upgrade-shinobi-3",
            "baseId": "upgrade-shinobi-3",
            "type": "technology",
            "name": "Castle Age Shinobi",
            "pbgid": 2140388,
            "attribName": "upgrade_unit_shinobi_3",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Increases the health and damage of Shinobi when reaching Castle Age.",
            "classes": [
              "shinobi",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "Shinobi Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              },
              {
                "property": "meleeAttack",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              },
              {
                "property": "fireAttack",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-shinobi-4",
        "name": "Imperial Age Shinobi",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": false,
        "displayClasses": [
          "Shinobi Scaling Technology"
        ],
        "classes": [
          "shinobi",
          "scaling",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
        "description": "Increases the health and damage of of Shinobi when reaching Imperial Age.",
        "variations": [
          {
            "id": "upgrade-shinobi-4",
            "baseId": "upgrade-shinobi-4",
            "type": "technology",
            "name": "Imperial Age Shinobi",
            "pbgid": 2140389,
            "attribName": "upgrade_unit_shinobi_4",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increases the health and damage of of Shinobi when reaching Imperial Age.",
            "classes": [
              "shinobi",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "Shinobi Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              },
              {
                "property": "meleeAttack",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              },
              {
                "property": "fireAttack",
                "value": 1.15,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "shinobi"
                  ]
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "yaki-ire",
        "name": "Yaki-ire",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Damage Technology 4/4"
        ],
        "classes": [
          "melee",
          "damage",
          "technology",
          "4/4"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/yaki-ire-4.png",
        "description": "Increase the melee damage of all non-siege units by +1.",
        "variations": [
          {
            "id": "yaki-ire-4",
            "baseId": "yaki-ire",
            "type": "technology",
            "name": "Yaki-ire",
            "pbgid": 2145773,
            "attribName": "upgrade_melee_damage_iv_jpn",
            "age": 4,
            "civs": [
              "ja"
            ],
            "description": "Increase the melee damage of all non-siege units by +1.",
            "classes": [
              "melee",
              "damage",
              "technology",
              "4/4"
            ],
            "displayClasses": [
              "Melee Damage Technology 4/4"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 175,
              "gold": 275,
              "vizier": 0,
              "oliveoil": 0,
              "total": 450,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "forge"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/yaki-ire-4.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "zen",
        "name": "Zen",
        "type": "technology",
        "civs": [
          "ja"
        ],
        "unique": true,
        "displayClasses": [
          "Buddhist Technology"
        ],
        "classes": [
          "buddhist",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/zen-3.png",
        "description": "Buddhist Monks generate 25 gold every 60 seconds.",
        "variations": [
          {
            "id": "zen-3",
            "baseId": "zen",
            "type": "technology",
            "name": "Zen",
            "pbgid": 2158005,
            "attribName": "upgrade_temple_zen_jpn",
            "age": 3,
            "civs": [
              "ja"
            ],
            "description": "Buddhist Monks generate 25 gold every 60 seconds.",
            "classes": [
              "buddhist",
              "technology"
            ],
            "displayClasses": [
              "Buddhist Technology"
            ],
            "unique": true,
            "costs": {
              "food": 200,
              "wood": 300,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 35
            },
            "producedBy": [
              "temple-of-equality",
              "buddhist-temple"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/zen-3.png",
            "effects": [
              {
                "property": "goldGeneration",
                "select": {
                  "id": [
                    "buddhist-monk"
                  ]
                },
                "effect": "change",
                "value": 25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "companion-equipment",
        "name": "Companion Equipment",
        "type": "technology",
        "civs": [
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Companion Upgrade"
        ],
        "classes": [
          "companion",
          "upgrade"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/companion-equipment-1.png",
        "description": "Increase Jeanne d'Arc's health and damage by 25% and gain +1 armor. Increase the health and damage of Jeanne's Companions by 20%.",
        "variations": [
          {
            "id": "companion-equipment-1",
            "pbgid": 2146393,
            "attribName": "upgrade_landmark_keep_companion_upgrade_fre_ha_01",
            "civs": [
              "je"
            ]
          },
          {
            "id": "companion-equipment-3",
            "pbgid": 2144435,
            "attribName": "upgrade_keep_companion_upgrade_fre_ha_01",
            "civs": [
              "je"
            ]
          }
        ],
        "baseId": "companion-equipment",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 150,
          "stone": 0,
          "gold": 350,
          "vizier": 0,
          "oliveoil": 0,
          "total": 500,
          "popcap": 0,
          "time": 60
        },
        "producedBy": [
          "royal-institute"
        ],
        "effects": [
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "jeannes-champion",
                "jeannes-rider"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "meleeAttack",
            "select": {
              "id": [
                "jeannes-companion",
                "jeannes-rider"
              ]
            },
            "effect": "multiply",
            "value": 1.2,
            "type": "passive"
          },
          {
            "property": "rangedAttack",
            "select": {
              "id": [
                "jeanne-darc-mounted-archer",
                "jeanne-darc-knight",
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "meleeAttack",
            "select": {
              "id": [
                "jeanne-darc-mounted-archer",
                "jeanne-darc-knight",
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "jeanne-darc-mounted-archer",
                "jeanne-darc-knight",
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "meleeArmor",
            "select": {
              "id": [
                "jeanne-darc-mounted-archer",
                "jeanne-darc-knight",
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          },
          {
            "property": "rangedArmor",
            "select": {
              "id": [
                "jeanne-darc-mounted-archer",
                "jeanne-darc-knight",
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          },
          {
            "property": "rangedAttack",
            "select": {
              "id": [
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "meleeAttack",
            "select": {
              "id": [
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "hitpoints",
            "select": {
              "id": [
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "multiply",
            "value": 1.25,
            "type": "passive"
          },
          {
            "property": "meleeArmor",
            "select": {
              "id": [
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          },
          {
            "property": "rangedArmor",
            "select": {
              "id": [
                "jeanne-darc-markswoman",
                "jeanne-darc-blast-cannon"
              ]
            },
            "effect": "change",
            "value": 1,
            "type": "passive"
          }
        ],
        "shared": {
          "companion-equipment-3": {
            "name": "Companion Equipment",
            "age": 3,
            "description": "Increases the damage and health of Jeanne's Companions by 20%.",
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "keep",
              "red-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/companion-equipment-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "jeannes-champion",
                    "jeannes-rider"
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              },
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "jeannes-companion",
                    "jeannes-rider"
                  ]
                },
                "effect": "multiply",
                "value": 1.2,
                "type": "passive"
              }
            ],
            "id": "companion-equipment-3"
          }
        }
      },
      {
        "id": "level-2-path-of-the-archer",
        "name": "Path of the Archer",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-path-of-the-archer-1.png",
        "description": "Level 2 option\n\nJeanne chooses the path of the Archer, equipping a bow to engage foes from afar.\nGains the Divine Arrow ability, which deals high damage to a single target.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-2-path-of-the-archer-0",
            "baseId": "level-2-path-of-the-archer",
            "type": "technology",
            "name": "Path of the Archer",
            "pbgid": 2136273,
            "attribName": "jeanne_d_arc_journey_of_a_hero_archer_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 2 option\n\nJeanne chooses the path of the Archer, equipping a bow to engage foes from afar.\nGains the Divine Arrow ability, which deals high damage to a single target.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-path-of-the-archer-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "level-2-path-of-the-warrior",
        "name": "Path of the Warrior",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-path-of-the-warrior-1.png",
        "description": "Level 2 option\n\nJeanne chooses the path of the Warrior, equipping a two handed sword to engage foes in close combat.\nGains the Holy Wrath ability, which deals area of effect damage around Jeanne.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-2-path-of-the-warrior-0",
            "baseId": "level-2-path-of-the-warrior",
            "type": "technology",
            "name": "Path of the Warrior",
            "pbgid": 2136274,
            "attribName": "jeanne_d_arc_journey_of_a_hero_womanatarms_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 2 option\n\nJeanne chooses the path of the Warrior, equipping a two handed sword to engage foes in close combat.\nGains the Holy Wrath ability, which deals area of effect damage around Jeanne.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-path-of-the-warrior-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "level-3-champion-companions",
        "name": "Champion Companions",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-champion-companions-1.png",
        "description": "Level 3 option\n\nJeanne's Champions become available to train at Keeps.\nGains \"To Arms, Men!\", which rallies 3 Champions to her side.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-3-champion-companions-0",
            "baseId": "level-3-champion-companions",
            "type": "technology",
            "name": "Champion Companions",
            "pbgid": 2136348,
            "attribName": "jeanne_d_arc_journey_of_a_hero_manatarms_companions_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 3 option\n\nJeanne's Champions become available to train at Keeps.\nGains \"To Arms, Men!\", which rallies 3 Champions to her side.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-champion-companions-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "level-3-rider-companions",
        "name": "Rider Companions",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-rider-companions-1.png",
        "description": "Level 3 option\n\nJeanne's Riders become available to train at Keeps.\nGains \"Riders, Ready!\", which rallies 3 Riders to her side.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-3-rider-companions-0",
            "baseId": "level-3-rider-companions",
            "type": "technology",
            "name": "Rider Companions",
            "pbgid": 2127601,
            "attribName": "jeanne_d_arc_journey_of_a_hero_crossbow_companions_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 3 option\n\nJeanne's Riders become available to train at Keeps.\nGains \"Riders, Ready!\", which rallies 3 Riders to her side.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-rider-companions-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "level-4-field-commander",
        "name": "Field Commander",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-field-commander-1.png",
        "description": "Level 4 option\n\nJeanne's Rally Call ability will now call 7 of her chosen companions onto the Battlefield.\nGains the Strength of Heaven ultimate ability, which greatly empowers a single unit.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-4-field-commander-0",
            "baseId": "level-4-field-commander",
            "type": "technology",
            "name": "Field Commander",
            "pbgid": 2136347,
            "attribName": "jeanne_d_arc_journey_of_a_hero_commander_monarch_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 4 option\n\nJeanne's Rally Call ability will now call 7 of her chosen companions onto the Battlefield.\nGains the Strength of Heaven ultimate ability, which greatly empowers a single unit.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-field-commander-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "level-4-gunpowder-monarch",
        "name": "Gunpowder Monarch",
        "type": "technology",
        "civs": [
          "je"
        ],
        "displayClasses": [
          "Hero Level Up Choice"
        ],
        "classes": [
          "hero",
          "level-up-choice"
        ],
        "minAge": 0,
        "icon": "https://data.aoe4world.com/images/abilities/ability-gunpowder-monarch-1.png",
        "description": "Level 4 option\n\nJeanne's Rally Call ability will now call 3 of her chosen companions and a powerful Cannon onto the Battlefield.\nGains the Valorous Inspiration ultimate ability, which greatly increases the attack speed of nearby allies.\n\nRequires 500XP",
        "variations": [
          {
            "id": "level-4-gunpowder-monarch-0",
            "baseId": "level-4-gunpowder-monarch",
            "type": "technology",
            "name": "Gunpowder Monarch",
            "pbgid": 2127603,
            "attribName": "jeanne_d_arc_journey_of_a_hero_gunpowder_monarch_fre_ha_01",
            "age": 0,
            "civs": [
              "je"
            ],
            "description": "Level 4 option\n\nJeanne's Rally Call ability will now call 3 of her chosen companions and a powerful Cannon onto the Battlefield.\nGains the Valorous Inspiration ultimate ability, which greatly increases the attack speed of nearby allies.\n\nRequires 500XP",
            "classes": [
              "hero",
              "level-up-choice"
            ],
            "displayClasses": [
              "Hero Level Up Choice"
            ],
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/abilities/ability-gunpowder-monarch-1.png",
            "active": "always",
            "auraRange": 0.0025,
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "ordinance-company",
        "name": "Ordinance Company",
        "type": "technology",
        "civs": [
          "je"
        ],
        "unique": true,
        "displayClasses": [
          "Influence Technology"
        ],
        "classes": [
          "influence",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/ordinance-company-3.png",
        "description": "Consecrated buildings also reduce the Wood and Gold cost of units by 25%.",
        "variations": [
          {
            "id": "ordinance-company-3",
            "baseId": "ordinance-company",
            "type": "technology",
            "name": "Ordinance Company",
            "pbgid": 2144375,
            "attribName": "upgrade_landmark_enlistment_incentives_fre_ha_01",
            "age": 3,
            "civs": [
              "je"
            ],
            "description": "Consecrated buildings also reduce the Wood and Gold cost of units by 25%.",
            "classes": [
              "influence",
              "technology"
            ],
            "displayClasses": [
              "Influence Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "royal-institute"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/ordinance-company-3.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "banco-repairs",
        "name": "Banco Repairs",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Building Technology"
        ],
        "classes": [
          "building",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/banco-repairs-2.png",
        "description": "Buildings are repaired +50% faster.",
        "variations": [
          {
            "id": "banco-repairs-2",
            "baseId": "banco-repairs",
            "type": "technology",
            "name": "Banco Repairs",
            "pbgid": 2064216,
            "attribName": "upgrade_banco_repairs_mal",
            "age": 2,
            "civs": [
              "ma"
            ],
            "description": "Buildings are repaired +50% faster.",
            "classes": [
              "building",
              "technology"
            ],
            "displayClasses": [
              "Building Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/banco-repairs-2.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "canoe-tactics",
        "name": "Canoe Tactics",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/canoe-tactics-2.png",
        "description": "Archer Ships fire an additional 2 Javelin weapons.",
        "variations": [
          {
            "id": "canoe-tactics-2",
            "baseId": "canoe-tactics",
            "type": "technology",
            "name": "Canoe Tactics",
            "pbgid": 2102140,
            "attribName": "upgrade_naval_javelin_ships_mal",
            "age": 2,
            "civs": [
              "ma"
            ],
            "description": "Archer Ships fire an additional 2 Javelin weapons.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/canoe-tactics-2.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "class": [
                    [
                      "archer",
                      "ship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1.6,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "select": {
                  "class": [
                    [
                      "archer",
                      "ship"
                    ]
                  ]
                },
                "target": {
                  "class": [
                    [
                      "incendiary",
                      "ship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 20,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "farima-leadership",
        "name": "Farima Leadership",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/farima-leadership-4.png",
        "description": "Sofa increase the movement speed of nearby infantry by +15%.",
        "variations": [
          {
            "id": "farima-leadership-4",
            "baseId": "farima-leadership",
            "type": "technology",
            "name": "Farima Leadership",
            "pbgid": 2064217,
            "attribName": "upgrade_sofa_farima_leadership_mal",
            "age": 4,
            "civs": [
              "ma"
            ],
            "description": "Sofa increase the movement speed of nearby infantry by +15%.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 350,
              "wood": 0,
              "stone": 0,
              "gold": 650,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/farima-leadership-4.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "sofa"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "imported-armor",
        "name": "Imported Armor",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/imported-armor-3.png",
        "description": "Increase armor of Sofa by +2.",
        "variations": [
          {
            "id": "imported-armor-3",
            "baseId": "imported-armor",
            "type": "technology",
            "name": "Imported Armor",
            "pbgid": 2064205,
            "attribName": "upgrade_sofa_armor_mal",
            "age": 3,
            "civs": [
              "ma"
            ],
            "description": "Increase armor of Sofa by +2.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/imported-armor-3.png",
            "effects": [
              {
                "property": "meleeArmor",
                "select": {
                  "id": [
                    "sofa"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "sofa"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "local-knowledge",
        "name": "Local Knowledge",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Healing Technology"
        ],
        "classes": [
          "healing",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/local-knowledge-3.png",
        "description": "Musofadi units heal while in Stealth for +2 every 1 seconds.",
        "variations": [
          {
            "id": "local-knowledge-3",
            "baseId": "local-knowledge",
            "type": "technology",
            "name": "Local Knowledge",
            "pbgid": 2064215,
            "attribName": "upgrade_stealth_healing_mal",
            "age": 3,
            "civs": [
              "ma"
            ],
            "description": "Musofadi units heal while in Stealth for +2 every 1 seconds.",
            "classes": [
              "healing",
              "technology"
            ],
            "displayClasses": [
              "Healing Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "barracks",
              "farimba-garrison"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/local-knowledge-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "musofadi-gunner",
                    "musofadi-warrior"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "mounted-guns",
        "name": "Mounted Guns",
        "type": "technology",
        "civs": [
          "ma",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/mounted-guns-4.png",
        "description": "Replaces Springald Ship weaponry with Cannons which provide greater range and damage.",
        "variations": [
          {
            "id": "mounted-guns-4",
            "pbgid": 196882,
            "attribName": "upgrade_naval_mounted_guns",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "mounted-guns-4",
            "pbgid": 196882,
            "attribName": "upgrade_naval_mounted_guns",
            "civs": [
              "ru"
            ]
          }
        ],
        "baseId": "mounted-guns",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 200,
          "stone": 0,
          "gold": 500,
          "vizier": 0,
          "oliveoil": 0,
          "total": 700,
          "popcap": 0,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "effects": [],
        "shared": {}
      },
      {
        "id": "poisoned-arrows",
        "name": "Poisoned Arrows",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Archer Technology"
        ],
        "classes": [
          "archer",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/poisoned-arrows-3.png",
        "description": "Archer arrows deal an additional 3 damage over 6 seconds.",
        "variations": [
          {
            "id": "poisoned-arrows-3",
            "baseId": "poisoned-arrows",
            "type": "technology",
            "name": "Poisoned Arrows",
            "pbgid": 2064213,
            "attribName": "upgrade_archer_poison_arrow_mal",
            "age": 3,
            "civs": [
              "ma"
            ],
            "description": "Archer arrows deal an additional 3 damage over 6 seconds.",
            "classes": [
              "archer",
              "technology"
            ],
            "displayClasses": [
              "Archer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 175,
              "wood": 0,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 675,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/poisoned-arrows-3.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "archer"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "precision-training",
        "name": "Precision Training",
        "type": "technology",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Ranged Technology"
        ],
        "classes": [
          "ranged",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/precision-training-4.png",
        "description": "Increase ranged damage of Donso by +6, Archers by +2, and Javelin Throwers by +3.",
        "variations": [
          {
            "id": "precision-training-4",
            "baseId": "precision-training",
            "type": "technology",
            "name": "Precision Training",
            "pbgid": 2064214,
            "attribName": "upgrade_donso_precision_training_mal",
            "age": 4,
            "civs": [
              "ma"
            ],
            "description": "Increase ranged damage of Donso by +6, Archers by +2, and Javelin Throwers by +3.",
            "classes": [
              "ranged",
              "technology"
            ],
            "displayClasses": [
              "Ranged Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/precision-training-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "donso"
                  ]
                },
                "effect": "change",
                "value": 6,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "archer"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "javelin-thrower"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "acid-distillation-improved",
        "name": "Acid Distillation (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Mining Technology 2/3"
        ],
        "classes": [
          "mining",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/acid-distillation-improved-3.png",
        "description": "Increase Villagers' gathering rate for Gold by 22.5%.\nIf Acid Distillation has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "acid-distillation-improved-3",
            "baseId": "acid-distillation-improved",
            "type": "technology",
            "name": "Acid Distillation (Improved)",
            "pbgid": 171826,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_3_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Gold by 22.5%.\nIf Acid Distillation has already been researched, increase it by 7.5% instead.",
            "classes": [
              "mining",
              "technology",
              "2/3"
            ],
            "displayClasses": [
              "Mining Technology 2/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/acid-distillation-improved-3.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "additional-torches",
        "name": "Additional Torches",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/additional-torches-3.png",
        "description": "Increase the torch damage of all infantry and cavalry by +3.",
        "variations": [
          {
            "id": "additional-torches-3",
            "baseId": "additional-torches",
            "type": "technology",
            "name": "Additional Torches",
            "pbgid": 205552,
            "attribName": "upgrade_weapon_fire_damage_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase the torch damage of all infantry and cavalry by +3.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 200,
              "wood": 0,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/additional-torches-3.png",
            "effects": [
              {
                "property": "fireAttack",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "cavalry",
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "additional-torches-improved",
        "name": "Additional Torches (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/additional-torches-improved-3.png",
        "description": "Increase the torch damage of all infantry and cavalry by +5.\nIf Additional Torches has already been researched, increase the torch damage from all infantry and cavalry by +2.",
        "variations": [
          {
            "id": "additional-torches-improved-3",
            "baseId": "additional-torches-improved",
            "type": "technology",
            "name": "Additional Torches (Improved)",
            "pbgid": 205811,
            "attribName": "upgrade_weapon_fire_damage_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase the torch damage of all infantry and cavalry by +5.\nIf Additional Torches has already been researched, increase the torch damage from all infantry and cavalry by +2.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 200,
              "wood": 0,
              "stone": 700,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1400,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/additional-torches-improved-3.png",
            "effects": [
              {
                "property": "fireAttack",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "cavalry",
                      "melee"
                    ]
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "adjustable-crossbars-improved",
        "name": "Adjustable Crossbars (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Mangonel Technology"
        ],
        "classes": [
          "mangonel",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/adjustable-crossbars-improved-4.png",
        "description": "Increase the attack speed of Mangonels by +35%.\nIf Adjustable Crossbars has already been researched, increase attack speed by +10% instead.",
        "variations": [
          {
            "id": "adjustable-crossbars-improved-4",
            "baseId": "adjustable-crossbars-improved",
            "type": "technology",
            "name": "Adjustable Crossbars (Improved)",
            "pbgid": 191363,
            "attribName": "upgrade_siege_adjustable_crossbar_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the attack speed of Mangonels by +35%.\nIf Adjustable Crossbars has already been researched, increase attack speed by +10% instead.",
            "classes": [
              "mangonel",
              "technology"
            ],
            "displayClasses": [
              "Mangonel Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 200,
              "stone": 700,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1400,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/adjustable-crossbars-improved-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "mangonel"
                  ]
                },
                "effect": "multiply",
                "value": 0.91,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "biology-improved",
        "name": "Biology (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Lancer Technology"
        ],
        "classes": [
          "lancer",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/biology-improved-4.png",
        "description": "Increase the health of all cavalry by +30%.\nIf Biology has already been researched, increase it by +10% instead.",
        "variations": [
          {
            "id": "biology-improved-4",
            "baseId": "biology-improved",
            "type": "technology",
            "name": "Biology (Improved)",
            "pbgid": 188502,
            "attribName": "upgrade_tech_university_biology_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the health of all cavalry by +30%.\nIf Biology has already been researched, increase it by +10% instead.",
            "classes": [
              "lancer",
              "technology"
            ],
            "displayClasses": [
              "Lancer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 1000,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/biology-improved-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "crosscut-saw-improved",
        "name": "Crosscut Saw (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Wood Gathering Technology 3/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/crosscut-saw-improved-4.png",
        "description": "Increase Villagers' gathering rate for Wood by 22.5% and Wood gatherers carry capacity by +5.\nIf Crosscut Saw has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "crosscut-saw-improved-4",
            "baseId": "crosscut-saw-improved",
            "type": "technology",
            "name": "Crosscut Saw (Improved)",
            "pbgid": 175068,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_4_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Wood by 22.5% and Wood gatherers carry capacity by +5.\nIf Crosscut Saw has already been researched, increase it by 7.5% instead.",
            "classes": [
              "wood",
              "gathering",
              "technology",
              "3/3"
            ],
            "displayClasses": [
              "Wood Gathering Technology 3/3"
            ],
            "unique": true,
            "costs": {
              "food": 250,
              "wood": 0,
              "stone": 750,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1500,
              "popcap": 0,
              "time": 75
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/crosscut-saw-improved-4.png",
            "effects": [
              {
                "property": "woodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "cupellation-improved",
        "name": "Cupellation (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Mining Technology 3/3"
        ],
        "classes": [
          "mining",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/cupellation-improved-4.png",
        "description": "Gold gatherers drop off 22.5% more resources.\nIf Cupellation has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "cupellation-improved-4",
            "baseId": "cupellation-improved",
            "type": "technology",
            "name": "Cupellation (Improved)",
            "pbgid": 175058,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_4_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Gold gatherers drop off 22.5% more resources.\nIf Cupellation has already been researched, increase it by 7.5% instead.",
            "classes": [
              "mining",
              "technology",
              "3/3"
            ],
            "displayClasses": [
              "Mining Technology 3/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 250,
              "stone": 750,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1500,
              "popcap": 0,
              "time": 75
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/cupellation-improved-4.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "double-broadax-improved",
        "name": "Double Broadax (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Wood Gathering Technology 1/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/double-broadax-improved-2.png",
        "description": "Increase Villagers' gathering rate for Wood by 22.5%.\nIf Double Broadax has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "double-broadax-improved-2",
            "baseId": "double-broadax-improved",
            "type": "technology",
            "name": "Double Broadax (Improved)",
            "pbgid": 169035,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_2_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Wood by 22.5%.\nIf Double Broadax has already been researched, increase it by 7.5% instead.",
            "classes": [
              "wood",
              "gathering",
              "technology",
              "1/3"
            ],
            "displayClasses": [
              "Wood Gathering Technology 1/3"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 150,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/double-broadax-improved-2.png",
            "effects": [
              {
                "property": "woodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "elite-army-tactics-improved",
        "name": "Elite Army Tactics (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Infantry Technology"
        ],
        "classes": [
          "melee",
          "infantry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/elite-army-tactics-improved-4.png",
        "description": "Increase the health of all melee infantry by +30% and their damage by +30%.\nIf Elite Army Tactics has already been researched, increase health and damage by +10% instead.",
        "variations": [
          {
            "id": "elite-army-tactics-improved-4",
            "baseId": "elite-army-tactics-improved",
            "type": "technology",
            "name": "Elite Army Tactics (Improved)",
            "pbgid": 191421,
            "attribName": "upgrade_manatarms_elite_army_tactics_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the health of all melee infantry by +30% and their damage by +30%.\nIf Elite Army Tactics has already been researched, increase health and damage by +10% instead.",
            "classes": [
              "melee",
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Melee Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 1000,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/elite-army-tactics-improved-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "melee",
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              },
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "melee",
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fertilization-improved",
        "name": "Fertilization (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Food Gathering Technology 2/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/fertilization-improved-3.png",
        "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Fertilization has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "fertilization-improved-3",
            "baseId": "fertilization-improved",
            "type": "technology",
            "name": "Fertilization (Improved)",
            "pbgid": 171296,
            "attribName": "upgrade_econ_resource_food_harvest_rate_3_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Fertilization has already been researched, increase it by 7.5% instead.",
            "classes": [
              "food",
              "gathering",
              "technology",
              "2/3"
            ],
            "displayClasses": [
              "Food Gathering Technology 2/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fertilization-improved-3.png",
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "forestry-improved",
        "name": "Forestry (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Woodcutting Technology"
        ],
        "classes": [
          "woodcutting",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/forestry-improved-1.png",
        "description": "Villagers fell trees in a single chop.",
        "variations": [
          {
            "id": "forestry-improved-1",
            "baseId": "forestry-improved",
            "type": "technology",
            "name": "Forestry (Improved)",
            "pbgid": 172000,
            "attribName": "upgrade_econ_resource_wood_fell_rate_1_improved_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Villagers fell trees in a single chop.",
            "classes": [
              "woodcutting",
              "technology"
            ],
            "displayClasses": [
              "Woodcutting Technology"
            ],
            "unique": true,
            "costs": {
              "food": 25,
              "wood": 0,
              "stone": 75,
              "gold": 50,
              "vizier": 0,
              "oliveoil": 0,
              "total": 150,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/forestry-improved-1.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 4,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "geometry-improved",
        "name": "Geometry (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/geometry-improved-4.png",
        "description": "Increase damage of Trebuchets by +30%.\nIf Geometry has already been researched, increase their damage by +10% instead.",
        "variations": [
          {
            "id": "geometry-improved-4",
            "baseId": "geometry-improved",
            "type": "technology",
            "name": "Geometry (Improved)",
            "pbgid": 2077146,
            "attribName": "upgrade_siege_mathematics_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase damage of Trebuchets by +30%.\nIf Geometry has already been researched, increase their damage by +10% instead.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 325,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 650,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/geometry-improved-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "huihui-pao",
                    "trebuchet"
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "greased-axles-improved",
        "name": "Greased Axles (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/greased-axles-improved-3.png",
        "description": "Increase the movement speed of siege engines by +20%.\nIf Greased Axles has already been researched, increase it by +5% instead.",
        "variations": [
          {
            "id": "greased-axles-improved-3",
            "baseId": "greased-axles-improved",
            "type": "technology",
            "name": "Greased Axles (Improved)",
            "pbgid": 191390,
            "attribName": "upgrade_siege_weapon_speed_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase the movement speed of siege engines by +20%.\nIf Greased Axles has already been researched, increase it by +5% instead.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 500,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/greased-axles-improved-3.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.15,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "herbal-medicine-improved",
        "name": "Herbal Medicine (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Healing Technology"
        ],
        "classes": [
          "healing",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/herbal-medicine-improved-3.png",
        "description": "Increase the healing rate of religious units by +90%.\nIf Herbal Medicine has already been researched, increase it by +30% instead.",
        "variations": [
          {
            "id": "herbal-medicine-improved-3",
            "baseId": "herbal-medicine-improved",
            "type": "technology",
            "name": "Herbal Medicine (Improved)",
            "pbgid": 173459,
            "attribName": "upgrade_unit_religious_herbal_medicine_4_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase the healing rate of religious units by +90%.\nIf Herbal Medicine has already been researched, increase it by +30% instead.",
            "classes": [
              "healing",
              "technology"
            ],
            "displayClasses": [
              "Healing Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 275,
              "gold": 275,
              "vizier": 0,
              "oliveoil": 0,
              "total": 550,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "prayer-tent"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/herbal-medicine-improved-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "monk",
                    "scholar",
                    "imam",
                    "dervish",
                    "warrior-monk",
                    "shaman",
                    "prelate",
                    "shinto-priest",
                    "buddhist-monk",
                    "shaolin-monk"
                  ]
                },
                "effect": "multiply",
                "value": 1.3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "horticulture-improved",
        "name": "Horticulture (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Food Gathering Technology 1/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/horticulture-improved-2.png",
        "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Horticulture has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "horticulture-improved-2",
            "baseId": "horticulture-improved",
            "type": "technology",
            "name": "Horticulture (Improved)",
            "pbgid": 171295,
            "attribName": "upgrade_econ_resource_food_harvest_rate_2_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Horticulture has already been researched, increase it by 7.5% instead.",
            "classes": [
              "food",
              "gathering",
              "technology",
              "1/3"
            ],
            "displayClasses": [
              "Food Gathering Technology 1/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 150,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/horticulture-improved-2.png",
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "lightweight-beams-improved",
        "name": "Lightweight Beams (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Battering Ram Technology"
        ],
        "classes": [
          "battering",
          "ram",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/lightweight-beams-improved-4.png",
        "description": "Increase Battering Ram attack speed by +30% and reduce their field construction time by -75%.\nIf Lightweight Beams has already been researched, increase attack speed by +10% and reduce field construction time by -25% instead.",
        "variations": [
          {
            "id": "lightweight-beams-improved-4",
            "baseId": "lightweight-beams-improved",
            "type": "technology",
            "name": "Lightweight Beams (Improved)",
            "pbgid": 2117416,
            "attribName": "upgrade_ram_scaling_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase Battering Ram attack speed by +30% and reduce their field construction time by -75%.\nIf Lightweight Beams has already been researched, increase attack speed by +10% and reduce field construction time by -25% instead.",
            "classes": [
              "battering",
              "ram",
              "technology"
            ],
            "displayClasses": [
              "Battering Ram Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 700,
              "gold": 400,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1400,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/lightweight-beams-improved-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "battering-ram"
                  ]
                },
                "effect": "multiply",
                "value": 1.08,
                "type": "passive"
              },
              {
                "property": "buildTime",
                "select": {
                  "id": [
                    "battering-ram"
                  ]
                },
                "effect": "multiply",
                "value": 0.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "lumber-preservation-improved",
        "name": "Lumber Preservation (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Wood Gathering Technology 2/3"
        ],
        "classes": [
          "wood",
          "gathering",
          "technology",
          "2/3"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/lumber-preservation-improved-3.png",
        "description": "Increase Villagers' gathering rate for Wood by 22.5%.\nIf Lumber Preservation has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "lumber-preservation-improved-3",
            "baseId": "lumber-preservation-improved",
            "type": "technology",
            "name": "Lumber Preservation (Improved)",
            "pbgid": 171838,
            "attribName": "upgrade_econ_resource_wood_harvest_rate_3_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Wood by 22.5%.\nIf Lumber Preservation has already been researched, increase it by 7.5% instead.",
            "classes": [
              "wood",
              "gathering",
              "technology",
              "2/3"
            ],
            "displayClasses": [
              "Wood Gathering Technology 2/3"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/lumber-preservation-improved-3.png",
            "effects": [
              {
                "property": "woodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "military-academy-improved",
        "name": "Military Academy (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Production Technology"
        ],
        "classes": [
          "production",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/military-academy-improved-3.png",
        "description": "Increase the production speed of military and transport units at buildings by 53%.\nDoes not affect religious or other support units.\nIf Military Academy has already been researched, increase production speed by 20% instead.",
        "variations": [
          {
            "id": "military-academy-improved-3",
            "baseId": "military-academy-improved",
            "type": "technology",
            "name": "Military Academy (Improved)",
            "pbgid": 175024,
            "attribName": "upgrade_tech_military_academy_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase the production speed of military and transport units at buildings by 53%.\nDoes not affect religious or other support units.\nIf Military Academy has already been researched, increase production speed by 20% instead.",
            "classes": [
              "production",
              "technology"
            ],
            "displayClasses": [
              "Production Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-academy-improved-3.png",
            "effects": [
              {
                "property": "buildTime",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "melee",
                      "cavalry"
                    ],
                    [
                      "ranged",
                      "cavalry"
                    ],
                    [
                      "siege"
                    ],
                    [
                      "transport"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.7,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "monastic-shrines",
        "name": "Monastic Shrines",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Production Technology"
        ],
        "classes": [
          "production",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/monastic-shrines-4.png",
        "description": "Prayer Tents allow Improved Production within their influence even without an Ovoo.",
        "variations": [
          {
            "id": "monastic-shrines-4",
            "baseId": "monastic-shrines",
            "type": "technology",
            "name": "Monastic Shrines",
            "pbgid": 193988,
            "attribName": "upgrade_religious_monastery_ovoo_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Prayer Tents allow Improved Production within their influence even without an Ovoo.",
            "classes": [
              "production",
              "technology"
            ],
            "displayClasses": [
              "Production Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "prayer-tent"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/monastic-shrines-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "prayer-tent"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "pax-mongolica",
        "name": "Pax Mongolica",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Defensive Technology"
        ],
        "classes": [
          "defensive",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/pax-mongolica-4.png",
        "description": "Add +300 health and +3 fire armor to all Outposts.",
        "variations": [
          {
            "id": "pax-mongolica-4",
            "baseId": "pax-mongolica",
            "type": "technology",
            "name": "Pax Mongolica",
            "pbgid": 2146759,
            "attribName": "upgrade_outpost_stone_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Add +300 health and +3 fire armor to all Outposts.",
            "classes": [
              "defensive",
              "technology"
            ],
            "displayClasses": [
              "Defensive Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 300,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/pax-mongolica-4.png",
            "effects": [
              {
                "property": "fireArmor",
                "value": 3,
                "effect": "change",
                "type": "passive"
              },
              {
                "property": "hitpoints",
                "value": 300,
                "effect": "change",
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "piety-improved",
        "name": "Piety (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/piety-improved-4.png",
        "description": "Increase all Shamans' health by +60.\nIf Piety has already been researched, increase it by +20 instead.",
        "variations": [
          {
            "id": "piety-improved-4",
            "baseId": "piety-improved",
            "type": "technology",
            "name": "Piety (Improved)",
            "pbgid": 173546,
            "attribName": "upgrade_unit_religious_piety_4_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase all Shamans' health by +60.\nIf Piety has already been researched, increase it by +20 instead.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 325,
              "gold": 325,
              "vizier": 0,
              "oliveoil": 0,
              "total": 650,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "prayer-tent"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/piety-improved-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "monk",
                    "scholar",
                    "imam",
                    "dervish",
                    "warrior-monk",
                    "shaman",
                    "prelate",
                    "shinto-priest",
                    "buddhist-monk",
                    "shaolin-monk"
                  ]
                },
                "effect": "change",
                "value": 20,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "piracy",
        "name": "Piracy",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/piracy-2.png",
        "description": "Gain +25 Wood and +25 Gold when sinking an enemy ship.",
        "variations": [
          {
            "id": "piracy-2",
            "baseId": "piracy",
            "type": "technology",
            "name": "Piracy",
            "pbgid": 2033835,
            "attribName": "upgrade_naval_piracy_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Gain +25 Wood and +25 Gold when sinking an enemy ship.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/piracy-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "light-junk",
                    "explosive-junk",
                    "war-junk",
                    "baochuan"
                  ]
                },
                "effect": "change",
                "value": 25,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "precision-cross-breeding-improved",
        "name": "Precision Cross-Breeding (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Food Gathering Technology 3/3"
        ],
        "classes": [
          "food",
          "gathering",
          "technology",
          "3/3"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/precision-cross-breeding-improved-4.png",
        "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Precision Cross-Breeding has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "precision-cross-breeding-improved-4",
            "baseId": "precision-cross-breeding-improved",
            "type": "technology",
            "name": "Precision Cross-Breeding (Improved)",
            "pbgid": 175042,
            "attribName": "upgrade_econ_resource_food_harvest_rate_4_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Food by 22.5%. Does not apply to hunted meat.\nIf Precision Cross-Breeding has already been researched, increase it by 7.5% instead.",
            "classes": [
              "food",
              "gathering",
              "technology",
              "3/3"
            ],
            "displayClasses": [
              "Food Gathering Technology 3/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 250,
              "stone": 750,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1500,
              "popcap": 0,
              "time": 75
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/precision-cross-breeding-improved-4.png",
            "effects": [
              {
                "property": "foodGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "professional-scouts-improved",
        "name": "Professional Scouts (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Hunting Technology"
        ],
        "classes": [
          "hunting",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/professional-scouts-improved-2.png",
        "description": "Scouts gain the ability to carry animal carcasses and +200% damage against wild animals. Scouts move -35% slower while carrying a carcass and cannot pick up Boar.\nIf Professional Scouts has already been researched, increase damage by +100% instead.",
        "variations": [
          {
            "id": "professional-scouts-improved-2",
            "baseId": "professional-scouts-improved",
            "type": "technology",
            "name": "Professional Scouts (Improved)",
            "pbgid": 168857,
            "attribName": "upgrade_scout_forester_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Scouts gain the ability to carry animal carcasses and +200% damage against wild animals. Scouts move -35% slower while carrying a carcass and cannot pick up Boar.\nIf Professional Scouts has already been researched, increase damage by +100% instead.",
            "classes": [
              "hunting",
              "technology"
            ],
            "displayClasses": [
              "Hunting Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 100,
              "gold": 275,
              "vizier": 0,
              "oliveoil": 0,
              "total": 450,
              "popcap": 0,
              "time": 75
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/professional-scouts-improved-2.png",
            "effects": [
              {
                "property": "huntCarryCapacity",
                "select": {
                  "id": [
                    "scout"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "hunt"
                    ]
                  ]
                },
                "select": {
                  "id": [
                    "scout"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "raid-bounty",
        "name": "Raid Bounty",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/raid-bounty-2.png",
        "description": "Increase the raid income for igniting a building to +50 Food and Gold.",
        "variations": [
          {
            "id": "raid-bounty-2",
            "baseId": "raid-bounty",
            "type": "technology",
            "name": "Raid Bounty",
            "pbgid": 205550,
            "attribName": "upgrade_raid_bounty_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase the raid income for igniting a building to +50 Food and Gold.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/raid-bounty-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ],
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 50,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "raid-bounty-improved",
        "name": "Raid Bounty (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/raid-bounty-improved-2.png",
        "description": "Increase the raid income for igniting a building to +75 Food and Gold.\nIf Raid Bounty has already been researched, increase the raid income for igniting a building by +25 Food and Gold.",
        "variations": [
          {
            "id": "raid-bounty-improved-2",
            "baseId": "raid-bounty-improved",
            "type": "technology",
            "name": "Raid Bounty (Improved)",
            "pbgid": 205807,
            "attribName": "upgrade_raid_bounty_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase the raid income for igniting a building to +75 Food and Gold.\nIf Raid Bounty has already been researched, increase the raid income for igniting a building by +25 Food and Gold.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/raid-bounty-improved-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ],
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 50,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "roller-shutter-triggers-improved",
        "name": "Roller Shutter Triggers (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Springald Technology"
        ],
        "classes": [
          "springald",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/roller-shutter-triggers-improved-4.png",
        "description": "Increase the weapon range of Springalds by +3 tiles and increase their attack speed by +35%.\nIf Roller Shutter Triggers has already been researched, increase their weapon range by +1 tiles and increase attack speed by +10% instead.",
        "variations": [
          {
            "id": "roller-shutter-triggers-improved-4",
            "baseId": "roller-shutter-triggers-improved",
            "type": "technology",
            "name": "Roller Shutter Triggers (Improved)",
            "pbgid": 175010,
            "attribName": "upgrade_siege_roller_trigger_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the weapon range of Springalds by +3 tiles and increase their attack speed by +35%.\nIf Roller Shutter Triggers has already been researched, increase their weapon range by +1 tiles and increase attack speed by +10% instead.",
            "classes": [
              "springald",
              "technology"
            ],
            "displayClasses": [
              "Springald Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 500,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/roller-shutter-triggers-improved-4.png",
            "effects": [
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "springald"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              },
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "springald"
                  ]
                },
                "effect": "multiply",
                "value": 0.72,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-engineering-improved",
        "name": "Siege Engineering (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Unit Unlock"
        ],
        "classes": [
          "siege",
          "unit",
          "unlock"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/siege-engineering-improved-2.png",
        "description": "Melee and ranged infantry can construct Siege Towers and Battering Rams in the field. Improved Siege Engineering allows for the construction of Mangonels, Springalds and Trebuchets as well.",
        "variations": [
          {
            "id": "siege-engineering-improved-2",
            "baseId": "siege-engineering-improved",
            "type": "technology",
            "name": "Siege Engineering (Improved)",
            "pbgid": 177939,
            "attribName": "upgrade_improved_siege_engineers_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Melee and ranged infantry can construct Siege Towers and Battering Rams in the field. Improved Siege Engineering allows for the construction of Mangonels, Springalds and Trebuchets as well.",
            "classes": [
              "siege",
              "unit",
              "unlock"
            ],
            "displayClasses": [
              "Siege Unit Unlock"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 175,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siege-engineering-improved-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-works-improved",
        "name": "Siege Works (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/siege-works-improved-4.png",
        "description": "Increase the health of siege engines by +30% and their ranged armor by +15.\nIf Siege Works has already been researched, increase their health by +10% and ranged armor by +5 instead.",
        "variations": [
          {
            "id": "siege-works-improved-4",
            "baseId": "siege-works-improved",
            "type": "technology",
            "name": "Siege Works (Improved)",
            "pbgid": 184769,
            "attribName": "upgrade_siege_works_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the health of siege engines by +30% and their ranged armor by +15.\nIf Siege Works has already been researched, increase their health by +10% and ranged armor by +5 instead.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 1000,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siege-works-improved-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 1.18,
                "type": "passive"
              },
              {
                "property": "rangedArmor",
                "select": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siha-bow-limbs",
        "name": "Siha Bow Limbs",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Ranged Damage Technology"
        ],
        "classes": [
          "ranged",
          "damage",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/siha-bow-limbs-4.png",
        "description": "Increase the ranged damage of Mangudai and the Khan by +1.",
        "variations": [
          {
            "id": "siha-bow-limbs-4",
            "baseId": "siha-bow-limbs",
            "type": "technology",
            "name": "Siha Bow Limbs",
            "pbgid": 205553,
            "attribName": "upgrade_mangudai_weapon_damage_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the ranged damage of Mangudai and the Khan by +1.",
            "classes": [
              "ranged",
              "damage",
              "technology"
            ],
            "displayClasses": [
              "Ranged Damage Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siha-bow-limbs-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "khan",
                    "mangudai",
                    "khaganate-elite-mangudai"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siha-bow-limbs-improved",
        "name": "Siha Bow Limbs (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Ranged Damage Technology"
        ],
        "classes": [
          "ranged",
          "damage",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/siha-bow-limbs-improved-4.png",
        "description": "Increase the ranged damage of Mangudai and the Khan by +2.\nIf Siha Bow Limbs has already been researched, increase the ranged damage of Mangudai and the Khan by +1.",
        "variations": [
          {
            "id": "siha-bow-limbs-improved-4",
            "baseId": "siha-bow-limbs-improved",
            "type": "technology",
            "name": "Siha Bow Limbs (Improved)",
            "pbgid": 205803,
            "attribName": "upgrade_mangudai_weapon_damage_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase the ranged damage of Mangudai and the Khan by +2.\nIf Siha Bow Limbs has already been researched, increase the ranged damage of Mangudai and the Khan by +1.",
            "classes": [
              "ranged",
              "damage",
              "technology"
            ],
            "displayClasses": [
              "Ranged Damage Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 275,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 550,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siha-bow-limbs-improved-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "khan",
                    "mangudai",
                    "khaganate-elite-mangudai"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "specialized-pick-improved",
        "name": "Specialized Pick (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Mining Technology 1/3"
        ],
        "classes": [
          "mining",
          "technology",
          "1/3"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/specialized-pick-improved-2.png",
        "description": "Increase Villagers' gathering rate for Gold by 22.5%.\nIf Specialized Pick has already been researched, increase it by 7.5% instead.",
        "variations": [
          {
            "id": "specialized-pick-improved-2",
            "baseId": "specialized-pick-improved",
            "type": "technology",
            "name": "Specialized Pick (Improved)",
            "pbgid": 171825,
            "attribName": "upgrade_econ_resource_gold_harvest_rate_2_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' gathering rate for Gold by 22.5%.\nIf Specialized Pick has already been researched, increase it by 7.5% instead.",
            "classes": [
              "mining",
              "technology",
              "1/3"
            ],
            "displayClasses": [
              "Mining Technology 1/3"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 150,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/specialized-pick-improved-2.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.07,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "steppe-lancers",
        "name": "Steppe Lancers",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Keshik Technology"
        ],
        "classes": [
          "keshik",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/steppe-lancers-3.png",
        "description": "Increase Keshik healing by +1 Health per attack and attack speed by +10%.",
        "variations": [
          {
            "id": "steppe-lancers-3",
            "baseId": "steppe-lancers",
            "type": "technology",
            "name": "Steppe Lancers",
            "pbgid": 2137100,
            "attribName": "upgrade_lancer_healing_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase Keshik healing by +1 Health per attack and attack speed by +10%.",
            "classes": [
              "keshik",
              "technology"
            ],
            "displayClasses": [
              "Keshik Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/steppe-lancers-3.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "keshik"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              },
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "keshik"
                  ]
                },
                "effect": "multiply",
                "value": 0.91,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "steppe-lancers-improved",
        "name": "Steppe Lancers (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Keshik Technology"
        ],
        "classes": [
          "keshik",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/steppe-lancers-improved-4.png",
        "description": "Increase Keshik healing by +2 Health per attack and attack speed by +20%.\nIf Steppe Lancers has already been researched, increase Keshik healing by +1 Health per attack and attack speed by +10%.",
        "variations": [
          {
            "id": "steppe-lancers-improved-4",
            "baseId": "steppe-lancers-improved",
            "type": "technology",
            "name": "Steppe Lancers (Improved)",
            "pbgid": 2137099,
            "attribName": "upgrade_lancer_healing_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Increase Keshik healing by +2 Health per attack and attack speed by +20%.\nIf Steppe Lancers has already been researched, increase Keshik healing by +1 Health per attack and attack speed by +10%.",
            "classes": [
              "keshik",
              "technology"
            ],
            "displayClasses": [
              "Keshik Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 500,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/steppe-lancers-improved-4.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "keshik"
                  ]
                },
                "effect": "change",
                "value": 20,
                "type": "passive"
              },
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "keshik"
                  ]
                },
                "effect": "multiply",
                "value": 0.91,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "stone-bounty",
        "name": "Stone Bounty",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/stone-bounty-4.png",
        "description": "Add +50 Stone to the raid income for igniting a building.",
        "variations": [
          {
            "id": "stone-bounty-4",
            "baseId": "stone-bounty",
            "type": "technology",
            "name": "Stone Bounty",
            "pbgid": 205555,
            "attribName": "upgrade_raid_stone_bounty_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Add +50 Stone to the raid income for igniting a building.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/stone-bounty-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ],
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 50,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "stone-bounty-improved",
        "name": "Stone Bounty (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Raiding Technology"
        ],
        "classes": [
          "raiding",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/stone-bounty-improved-4.png",
        "description": "Add +75 Stone to the raid income for igniting a building.\nIf Stone Bounty has already been researched, add +25 Stone to the raid income for igniting a building.",
        "variations": [
          {
            "id": "stone-bounty-improved-4",
            "baseId": "stone-bounty-improved",
            "type": "technology",
            "name": "Stone Bounty (Improved)",
            "pbgid": 205808,
            "attribName": "upgrade_raid_stone_bounty_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Add +75 Stone to the raid income for igniting a building.\nIf Stone Bounty has already been researched, add +25 Stone to the raid income for igniting a building.",
            "classes": [
              "raiding",
              "technology"
            ],
            "displayClasses": [
              "Raiding Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 325,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 650,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/stone-bounty-improved-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ],
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 50,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "stone-commerce",
        "name": "Stone Commerce",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/stone-commerce-4.png",
        "description": "Traders supply +10% Stone to their trades.",
        "variations": [
          {
            "id": "stone-commerce-4",
            "baseId": "stone-commerce",
            "type": "technology",
            "name": "Stone Commerce",
            "pbgid": 205556,
            "attribName": "upgrade_trader_silkroad_stone_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Traders supply +10% Stone to their trades.",
            "classes": [
              "trade",
              "technology"
            ],
            "displayClasses": [
              "Trade Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "the-silver-tree",
              "market"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/stone-commerce-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "trader",
                    "trade-ship"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "stone-commerce-improved",
        "name": "Stone Commerce (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Trade Technology"
        ],
        "classes": [
          "trade",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/stone-commerce-improved-4.png",
        "description": "Traders supply +20% Stone to their trades.\nIf Stone Commerce has already been researched, supply +10% Stone instead.",
        "variations": [
          {
            "id": "stone-commerce-improved-4",
            "baseId": "stone-commerce-improved",
            "type": "technology",
            "name": "Stone Commerce (Improved)",
            "pbgid": 205810,
            "attribName": "upgrade_trader_silkroad_stone_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Traders supply +20% Stone to their trades.\nIf Stone Commerce has already been researched, supply +10% Stone instead.",
            "classes": [
              "trade",
              "technology"
            ],
            "displayClasses": [
              "Trade Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 1000,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 2000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "the-silver-tree",
              "market"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/stone-commerce-improved-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "trader",
                    "trade-ship"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "superior-mobility",
        "name": "Superior Mobility",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Packing Technology"
        ],
        "classes": [
          "packing",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/upgrades/packed-buildings-move-and-pack-unpack-50-faster-1.png",
        "description": "Packed buildings move and pack/unpack 50% faster.",
        "variations": [
          {
            "id": "superior-mobility-1",
            "baseId": "superior-mobility",
            "type": "technology",
            "name": "Superior Mobility",
            "pbgid": 178718,
            "attribName": "upgrade_unit_town_center_faster_packing_1_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Packed buildings move and pack/unpack 50% faster.",
            "classes": [
              "packing",
              "technology"
            ],
            "displayClasses": [
              "Packing Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 25,
              "stone": 0,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 100,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/upgrades/packed-buildings-move-and-pack-unpack-50-faster-1.png",
            "unlocks": ""
          }
        ],
        "shared": {}
      },
      {
        "id": "survival-techniques-improved",
        "name": "Survival Techniques (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Hunting Technology"
        ],
        "classes": [
          "hunting",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/survival-techniques-improved-1.png",
        "description": "Increase Villagers' hunted meat gather rate by +20%.\nIf Survival Techniques has already been researched, increase hunted meat gather rate by +5% instead.",
        "variations": [
          {
            "id": "survival-techniques-improved-1",
            "baseId": "survival-techniques-improved",
            "type": "technology",
            "name": "Survival Techniques (Improved)",
            "pbgid": 203469,
            "attribName": "upgrade_econ_villager_hunting_gear_1_improved_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' hunted meat gather rate by +20%.\nIf Survival Techniques has already been researched, increase hunted meat gather rate by +5% instead.",
            "classes": [
              "hunting",
              "technology"
            ],
            "displayClasses": [
              "Hunting Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 25,
              "stone": 100,
              "gold": 75,
              "vizier": 0,
              "oliveoil": 0,
              "total": 200,
              "popcap": 0,
              "time": 25
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/survival-techniques-improved-1.png",
            "effects": [
              {
                "property": "huntGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 1.04,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "textiles-improved",
        "name": "Textiles (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/textiles-improved-3.png",
        "description": "Increase Villagers' health by +50%.\nIf Textiles has already been researched, increase health by +100% instead.",
        "variations": [
          {
            "id": "textiles-improved-3",
            "baseId": "textiles-improved",
            "type": "technology",
            "name": "Textiles (Improved)",
            "pbgid": 2062167,
            "attribName": "upgrade_villager_health_improved_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' health by +50%.\nIf Textiles has already been researched, increase health by +100% instead.",
            "classes": [
              "villager",
              "technology"
            ],
            "displayClasses": [
              "Villager Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 150,
              "gold": 100,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/textiles-improved-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 100,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "tithe-barns-improved",
        "name": "Tithe Barns (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/tithe-barns-improved-4.png",
        "description": "Relics placed in a Prayer Tent provide an income of +60 Food, +60 Wood, and +15 Stone every minute.\nIf Tithe Barns has already been researched, increase the income of Food and Wood by +20 and Stone by +5 instead.",
        "variations": [
          {
            "id": "tithe-barns-improved-4",
            "baseId": "tithe-barns-improved",
            "type": "technology",
            "name": "Tithe Barns (Improved)",
            "pbgid": 173571,
            "attribName": "upgrade_unit_religious_tithe_barn_4_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Relics placed in a Prayer Tent provide an income of +60 Food, +60 Wood, and +15 Stone every minute.\nIf Tithe Barns has already been researched, increase the income of Food and Wood by +20 and Stone by +5 instead.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 500,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "prayer-tent"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/tithe-barns-improved-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "monastery",
                    "mosque",
                    "prayer-tent",
                    "regnitz-cathedral"
                  ]
                },
                "effect": "change",
                "value": 60,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "wheelbarrow-improved",
        "name": "Wheelbarrow (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Villager Technology"
        ],
        "classes": [
          "villager",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/wheelbarrow-improved-1.png",
        "description": "Increase Villagers' resource carry capacity by +9 and movement speed by +15%.\nIf Wheelbarrow has already been researched, increase carry capacity by +4 instead.",
        "variations": [
          {
            "id": "wheelbarrow-improved-1",
            "baseId": "wheelbarrow-improved",
            "type": "technology",
            "name": "Wheelbarrow (Improved)",
            "pbgid": 169038,
            "attribName": "upgrade_unit_wheelbarrow_1_improved_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Increase Villagers' resource carry capacity by +9 and movement speed by +15%.\nIf Wheelbarrow has already been researched, increase carry capacity by +4 instead.",
            "classes": [
              "villager",
              "technology"
            ],
            "displayClasses": [
              "Villager Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 50,
              "stone": 200,
              "gold": 150,
              "vizier": 0,
              "oliveoil": 0,
              "total": 400,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "ger",
              "steppe-redoubt"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/wheelbarrow-improved-1.png",
            "effects": [
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "whistling-arrows",
        "name": "Whistling Arrows",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Khan Technology"
        ],
        "classes": [
          "khan",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/whistling-arrows-2.png",
        "description": "Increase the Khan's Signal Arrow duration by +5 seconds and range by +2 tiles.",
        "variations": [
          {
            "id": "whistling-arrows-2",
            "baseId": "whistling-arrows",
            "type": "technology",
            "name": "Whistling Arrows",
            "pbgid": 205551,
            "attribName": "upgrade_khan_signal_arrow_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase the Khan's Signal Arrow duration by +5 seconds and range by +2 tiles.",
            "classes": [
              "khan",
              "technology"
            ],
            "displayClasses": [
              "Khan Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/whistling-arrows-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "khan"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "whistling-arrows-improved",
        "name": "Whistling Arrows (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Khan Technology"
        ],
        "classes": [
          "khan",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/whistling-arrows-improved-2.png",
        "description": "Increase the Khan's Signal Arrow duration by +7 seconds and range by +3 tiles.\nIf Whistling Arrows has already been researched, increase the Khan's Signal Arrow duration by +2 seconds and range by +1 tile.",
        "variations": [
          {
            "id": "whistling-arrows-improved-2",
            "baseId": "whistling-arrows-improved",
            "type": "technology",
            "name": "Whistling Arrows (Improved)",
            "pbgid": 205802,
            "attribName": "upgrade_khan_signal_arrow_improved_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Increase the Khan's Signal Arrow duration by +7 seconds and range by +3 tiles.\nIf Whistling Arrows has already been researched, increase the Khan's Signal Arrow duration by +2 seconds and range by +1 tile.",
            "classes": [
              "khan",
              "technology"
            ],
            "displayClasses": [
              "Khan Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 175,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "ovoo",
              "the-white-stupa"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/whistling-arrows-improved-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "khan"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "yam-network",
        "name": "Yam Network",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Movement Technology"
        ],
        "classes": [
          "movement",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/yam-network-3.png",
        "description": "Yam speed aura applies to all units instead of just Traders and cavalry units. Does not apply to siege engines.",
        "variations": [
          {
            "id": "yam-network-3",
            "baseId": "yam-network",
            "type": "technology",
            "name": "Yam Network",
            "pbgid": 205554,
            "attribName": "upgrade_ortoo_all_units_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Yam speed aura applies to all units instead of just Traders and cavalry units. Does not apply to siege engines.",
            "classes": [
              "movement",
              "technology"
            ],
            "displayClasses": [
              "Movement Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "outpost"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/yam-network-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "yam-network-improved",
        "name": "Yam Network (Improved)",
        "type": "technology",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Movement Technology"
        ],
        "classes": [
          "movement",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/yam-network-improved-4.png",
        "description": "Yam speed aura applies to all units instead of just Traders and cavalry units. Does not apply to siege engines.\nImproved Yam Network allows Traders to regenerate 1 health every 2 seconds while in Yam's aura.",
        "variations": [
          {
            "id": "yam-network-improved-4",
            "baseId": "yam-network-improved",
            "type": "technology",
            "name": "Yam Network (Improved)",
            "pbgid": 2129166,
            "attribName": "upgrade_ortoo_all_units_improved_mon",
            "age": 4,
            "civs": [
              "mo"
            ],
            "description": "Yam speed aura applies to all units instead of just Traders and cavalry units. Does not apply to siege engines.\nImproved Yam Network allows Traders to regenerate 1 health every 2 seconds while in Yam's aura.",
            "classes": [
              "movement",
              "technology"
            ],
            "displayClasses": [
              "Movement Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 350,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "outpost",
              "deer-stones"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/yam-network-improved-4.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "bodkin-bolts",
        "name": "Bodkin Bolts",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Crossbow Technology"
        ],
        "classes": [
          "crossbow",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/bodkin-bolts-4.png",
        "description": "Gilded Crossbowmen deal +20 damage against Siege units.",
        "variations": [
          {
            "id": "bodkin-bolts-4",
            "baseId": "bodkin-bolts",
            "type": "technology",
            "name": "Bodkin Bolts",
            "pbgid": 2140681,
            "attribName": "upgrade_crossbow_siege_damage_hre_ha_01",
            "age": 4,
            "civs": [
              "od"
            ],
            "description": "Gilded Crossbowmen deal +20 damage against Siege units.",
            "classes": [
              "crossbow",
              "technology"
            ],
            "displayClasses": [
              "Crossbow Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "meinwerk-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/bodkin-bolts-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "gilded-crossbowman"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 20,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "dragon-fire",
        "name": "Dragon Fire",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Spearman Technology"
        ],
        "classes": [
          "spearman",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/dragon-fire-2.png",
        "description": "Gilded Spearman torches deal area of effect damage.",
        "variations": [
          {
            "id": "dragon-fire-3",
            "baseId": "dragon-fire",
            "type": "technology",
            "name": "Dragon Fire",
            "pbgid": 2140414,
            "attribName": "upgrade_dragon_fire_hre_ha_01",
            "age": 3,
            "civs": [
              "od"
            ],
            "description": "Gilded Spearman torches deal area of effect damage.",
            "classes": [
              "spearman",
              "technology"
            ],
            "displayClasses": [
              "Spearman Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/dragon-fire-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "gilded-spearman"
                  ]
                },
                "effect": "change",
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "dragon-scale-leather",
        "name": "Dragon Scale Leather",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Archer Technology"
        ],
        "classes": [
          "archer",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/dragon-scale-leather-3.png",
        "description": "Increase the ranged armor of Gilded Archers by +3.",
        "variations": [
          {
            "id": "dragon-scale-leather-3",
            "baseId": "dragon-scale-leather",
            "type": "technology",
            "name": "Dragon Scale Leather",
            "pbgid": 2140559,
            "attribName": "upgrade_archer_armor_hre_ha_01",
            "age": 3,
            "civs": [
              "od"
            ],
            "description": "Increase the ranged armor of Gilded Archers by +3.",
            "classes": [
              "archer",
              "technology"
            ],
            "displayClasses": [
              "Archer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/dragon-scale-leather-3.png",
            "effects": [
              {
                "property": "rangedArmor",
                "select": {
                  "id": [
                    "gilded-archer"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "golden-cuirass",
        "name": "Golden Cuirass",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Man-at-Arms Technology"
        ],
        "classes": [
          "man-at-arms",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/golden-cuirass-2.png",
        "description": "Gilded Men-at-Arms who fall below 30% health take -20% damage.",
        "variations": [
          {
            "id": "golden-cuirass-2",
            "baseId": "golden-cuirass",
            "type": "technology",
            "name": "Golden Cuirass",
            "pbgid": 2140670,
            "attribName": "upgrade_golden_cuirass_hre_ha_01",
            "age": 2,
            "civs": [
              "od"
            ],
            "description": "Gilded Men-at-Arms who fall below 30% health take -20% damage.",
            "classes": [
              "man-at-arms",
              "technology"
            ],
            "displayClasses": [
              "Man-at-Arms Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 300,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "meinwerk-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/golden-cuirass-2.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "gilded-man-at-arms"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "heavy-torches",
        "name": "Heavy Torches",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Spearman Technology"
        ],
        "classes": [
          "spearman",
          "technology"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/heavy-torches-2.png",
        "description": "Gilded Spearman torches deal area of effect damage.",
        "variations": [
          {
            "id": "heavy-torches-2",
            "baseId": "heavy-torches",
            "type": "technology",
            "name": "Heavy Torches",
            "pbgid": 2140414,
            "attribName": "upgrade_dragon_fire_hre_ha_01",
            "age": 2,
            "civs": [
              "od"
            ],
            "description": "Gilded Spearman torches deal area of effect damage.",
            "classes": [
              "spearman",
              "technology"
            ],
            "displayClasses": [
              "Spearman Technology"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/heavy-torches-2.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "scale-armor",
        "name": "Scale Armor",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Archer Technology"
        ],
        "classes": [
          "archer",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/scale-armor-3.png",
        "description": "Increase the ranged armor of Gilded Archers by +3.",
        "variations": [
          {
            "id": "scale-armor-3",
            "baseId": "scale-armor",
            "type": "technology",
            "name": "Scale Armor",
            "pbgid": 2140559,
            "attribName": "upgrade_archer_armor_hre_ha_01",
            "age": 3,
            "civs": [
              "od"
            ],
            "description": "Increase the ranged armor of Gilded Archers by +3.",
            "classes": [
              "archer",
              "technology"
            ],
            "displayClasses": [
              "Archer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/scale-armor-3.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "war-horses",
        "name": "War Horses",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/war-horses-4.png",
        "description": "Gilded Knights take -25% damage while charging.",
        "variations": [
          {
            "id": "war-horses-4",
            "baseId": "war-horses",
            "type": "technology",
            "name": "War Horses",
            "pbgid": 2140584,
            "attribName": "upgrade_knight_war_horses_hre_ha_01",
            "age": 4,
            "civs": [
              "od"
            ],
            "description": "Gilded Knights take -25% damage while charging.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 200,
              "wood": 0,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/war-horses-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "gilded-knight"
                  ]
                },
                "effect": "multiply",
                "value": 0.75,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "zornhau",
        "name": "Zornhau",
        "type": "technology",
        "civs": [
          "od"
        ],
        "unique": true,
        "displayClasses": [
          "Landsknecht Technology"
        ],
        "classes": [
          "landsknecht",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/zornhau-3.png",
        "description": "Gilded Landsknecht equip a halberd weapon that wounds enemies. When struck by this weapon, a unit will bleed for 2 damage every second. Lasts 10 seconds.\nAny healing effect will remove the bleed.",
        "variations": [
          {
            "id": "zornhau-3",
            "baseId": "zornhau",
            "type": "technology",
            "name": "Zornhau",
            "pbgid": 2140613,
            "attribName": "upgrade_zornhau_hre_ha_01",
            "age": 3,
            "civs": [
              "od"
            ],
            "description": "Gilded Landsknecht equip a halberd weapon that wounds enemies. When struck by this weapon, a unit will bleed for 2 damage every second. Lasts 10 seconds.\nAny healing effect will remove the bleed.",
            "classes": [
              "landsknecht",
              "technology"
            ],
            "displayClasses": [
              "Landsknecht Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "meinwerk-palace"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/zornhau-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "gilded-landsknecht"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "advanced-academy",
        "name": "Advanced Academy",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/advanced-academy-1.png",
        "description": "Outfits Military Schools with the ability to produce Lancers and Janissaries.",
        "variations": [
          {
            "id": "advanced-academy-1",
            "baseId": "advanced-academy",
            "type": "technology",
            "name": "Advanced Academy",
            "pbgid": 2059830,
            "attribName": "upgrade_imperial_blacksmith_stockpile_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Outfits Military Schools with the ability to produce Lancers and Janissaries.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/advanced-academy-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "anatolian-hills",
        "name": "Anatolian Hills",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/anatolian-hills-1.png",
        "description": "Spawn 8 sheep at the Landmark Town Center and increase Villager mining speed by +15%.",
        "variations": [
          {
            "id": "anatolian-hills-1",
            "baseId": "anatolian-hills",
            "type": "technology",
            "name": "Anatolian Hills",
            "pbgid": 2073116,
            "attribName": "upgrade_anatolian_hills_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Spawn 8 sheep at the Landmark Town Center and increase Villager mining speed by +15%.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/anatolian-hills-1.png",
            "effects": [
              {
                "property": "goldGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              },
              {
                "property": "stoneGatherRate",
                "select": {
                  "id": [
                    "villager"
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fast-training",
        "name": "Fast Training",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/fast-training-1.png",
        "description": "Increase production of Military Schools by +25%.",
        "variations": [
          {
            "id": "fast-training-1",
            "baseId": "fast-training",
            "type": "technology",
            "name": "Fast Training",
            "pbgid": 2059527,
            "attribName": "upgrade_imperial_military_training_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Increase production of Military Schools by +25%.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fast-training-1.png",
            "effects": [
              {
                "property": "productionSpeed",
                "select": {
                  "id": [
                    "military-school"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "field-work",
        "name": "Field Work",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/field-work-1.png",
        "description": "Spawn 2 Imams at the Landmark Town Center. Imams area heal nearby units for 1 health every second. Increases to 2 health in Castle Age and 3 health in Imperial Age.",
        "variations": [
          {
            "id": "field-work-1",
            "baseId": "field-work",
            "type": "technology",
            "name": "Field Work",
            "pbgid": 2059627,
            "attribName": "upgrade_imperial_monk_formation_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Spawn 2 Imams at the Landmark Town Center. Imams area heal nearby units for 1 health every second. Increases to 2 health in Castle Age and 3 health in Imperial Age.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/field-work-1.png",
            "effects": [
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "imam"
                  ]
                },
                "target": {
                  "class": [
                    []
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "great-bombard-emplacement",
        "name": "Great Bombard Emplacement",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/great-bombard-emplacement-4.png",
        "description": "Add a defensive Great Bombard emplacement to this structure.",
        "variations": [
          {
            "id": "great-bombard-emplacement-4",
            "baseId": "great-bombard-emplacement",
            "type": "technology",
            "name": "Great Bombard Emplacement",
            "pbgid": 2136153,
            "attribName": "upgrade_keep_great_bombard",
            "age": 4,
            "civs": [
              "ot"
            ],
            "description": "Add a defensive Great Bombard emplacement to this structure.",
            "classes": [
              "weapon",
              "emplacement"
            ],
            "displayClasses": [
              "Weapon Emplacement"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 400,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 650,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "keep",
              "sea-gate-castle"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/great-bombard-emplacement-4.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-fleet",
        "name": "Imperial Fleet",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/imperial-fleet-4.png",
        "description": "Increase the production speed of Gunpowder Ships by 25% and their movement speed by 25%.",
        "variations": [
          {
            "id": "imperial-fleet-4",
            "baseId": "imperial-fleet",
            "type": "technology",
            "name": "Imperial Fleet",
            "pbgid": 2101765,
            "attribName": "upgrade_naval_imperial_fleet_ott",
            "age": 4,
            "civs": [
              "ot"
            ],
            "description": "Increase the production speed of Gunpowder Ships by 25% and their movement speed by 25%.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/imperial-fleet-4.png",
            "effects": [
              {
                "property": "productionSpeed",
                "select": {
                  "id": [
                    "carrack",
                    "grand-galley"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              },
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "carrack",
                    "grand-galley"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "janissary-company",
        "name": "Janissary Company",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/janissary-company-1.png",
        "description": "Spawn 2 Janissaries for each of your Landmark Town Center and Military Schools at the Landmark Town Center.",
        "variations": [
          {
            "id": "janissary-company-1",
            "baseId": "janissary-company",
            "type": "technology",
            "name": "Janissary Company",
            "pbgid": 2059828,
            "attribName": "upgrade_imperial_janissary_company_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Spawn 2 Janissaries for each of your Landmark Town Center and Military Schools at the Landmark Town Center.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/janissary-company-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "janissary-guns",
        "name": "Janissary Guns",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Janissary Technology"
        ],
        "classes": [
          "janissary",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/janissary-guns-4.png",
        "description": "Increase Janissary gun damage by +3.",
        "variations": [
          {
            "id": "janissary-guns-4",
            "baseId": "janissary-guns",
            "type": "technology",
            "name": "Janissary Guns",
            "pbgid": 2063086,
            "attribName": "upgrade_ranged_janissary_guns_ott",
            "age": 4,
            "civs": [
              "ot"
            ],
            "description": "Increase Janissary gun damage by +3.",
            "classes": [
              "janissary",
              "technology"
            ],
            "displayClasses": [
              "Janissary Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/janissary-guns-4.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "janissary"
                  ]
                },
                "effect": "change",
                "value": 3,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "mehter-drums",
        "name": "Mehter Drums",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/mehter-drums-1.png",
        "description": "Spawn 1 Mehter at the Landmark Town Center. Mehters increase move speed to units in the same formation by +15%.",
        "variations": [
          {
            "id": "mehter-drums-1",
            "baseId": "mehter-drums",
            "type": "technology",
            "name": "Mehter Drums",
            "pbgid": 2059346,
            "attribName": "upgrade_imperial_mehter_drums_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Spawn 1 Mehter at the Landmark Town Center. Mehters increase move speed to units in the same formation by +15%.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/mehter-drums-1.png",
            "effects": [
              {
                "property": "moveSpeed",
                "select": {
                  "id": [
                    "mehter"
                  ]
                },
                "target": {
                  "class": [
                    []
                  ]
                },
                "effect": "multiply",
                "value": 0.8999999999999999,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "military-campus",
        "name": "Military Campus",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/military-campus-1.png",
        "description": "Increase Military Schools that can be built by +1.",
        "variations": [
          {
            "id": "military-campus-1",
            "baseId": "military-campus",
            "type": "technology",
            "name": "Military Campus",
            "pbgid": 2059331,
            "attribName": "upgrade_imperial_military_campus_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Increase Military Schools that can be built by +1.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-campus-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-crews",
        "name": "Siege Crews",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/siege-crews-1.png",
        "description": "Allows all siege engines to be garrisoned by infantry. While garrisoned, attack and setup speed is increased by +25%.",
        "variations": [
          {
            "id": "siege-crews-1",
            "baseId": "siege-crews",
            "type": "technology",
            "name": "Siege Crews",
            "pbgid": 2063087,
            "attribName": "upgrade_imperial_manned_siege_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Allows all siege engines to be garrisoned by infantry. While garrisoned, attack and setup speed is increased by +25%.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siege-crews-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "trade-bags",
        "name": "Trade Bags",
        "type": "technology",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Council"
        ],
        "classes": [
          "imperial",
          "council"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/trade-bags-1.png",
        "description": "Increase the amount of Gold Traders collect and Income from the Sultanhani Trade Network by +40%.",
        "variations": [
          {
            "id": "trade-bags-1",
            "baseId": "trade-bags",
            "type": "technology",
            "name": "Trade Bags",
            "pbgid": 2059610,
            "attribName": "upgrade_imperial_trader_capacity_ott",
            "age": 1,
            "civs": [
              "ot"
            ],
            "description": "Increase the amount of Gold Traders collect and Income from the Sultanhani Trade Network by +40%.",
            "classes": [
              "imperial",
              "council"
            ],
            "displayClasses": [
              "Imperial Council"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 1,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/trade-bags-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "adaptable-hulls",
        "name": "Adaptable Hulls",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Naval Technology"
        ],
        "classes": [
          "naval",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/adaptable-hulls-3.png",
        "description": "Converting between Lodya Ship types is 50% faster and no longer has a cost penalty.",
        "variations": [
          {
            "id": "adaptable-hulls-3",
            "baseId": "adaptable-hulls",
            "type": "technology",
            "name": "Adaptable Hulls",
            "pbgid": 2101764,
            "attribName": "upgrade_naval_adaptable_hulls_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Converting between Lodya Ship types is 50% faster and no longer has a cost penalty.",
            "classes": [
              "naval",
              "technology"
            ],
            "displayClasses": [
              "Naval Technology"
            ],
            "unique": true,
            "costs": {
              "food": 75,
              "wood": 0,
              "stone": 0,
              "gold": 175,
              "vizier": 0,
              "oliveoil": 0,
              "total": 250,
              "popcap": 0,
              "time": 20
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/adaptable-hulls-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "lodya-galley",
                    "lodya-attack-ship",
                    "lodya-fishing-boat",
                    "lodya-trade-ship"
                  ]
                },
                "effect": "change",
                "value": 50,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "banded-arms",
        "name": "Banded Arms",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Springald Technology"
        ],
        "classes": [
          "springald",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/banded-arms-4.png",
        "description": "Increase the range of Springalds by +0.5 tiles.",
        "variations": [
          {
            "id": "banded-arms-4",
            "baseId": "banded-arms",
            "type": "technology",
            "name": "Banded Arms",
            "pbgid": 207446,
            "attribName": "upgrade_springald_range_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Increase the range of Springalds by +0.5 tiles.",
            "classes": [
              "springald",
              "technology"
            ],
            "displayClasses": [
              "Springald Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "high-armory"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/banded-arms-4.png",
            "effects": [
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "springald"
                  ]
                },
                "effect": "change",
                "value": 0.5,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "boyars-fortitude",
        "name": "Boyar's Fortitude",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Cavalry Technology"
        ],
        "classes": [
          "cavalry",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/boyars-fortitude-3.png",
        "description": "Increase the health of Rus cavalry by +25.",
        "variations": [
          {
            "id": "boyars-fortitude-3",
            "baseId": "boyars-fortitude",
            "type": "technology",
            "name": "Boyar's Fortitude",
            "pbgid": 182860,
            "attribName": "upgrade_cavalry_hp_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Increase the health of Rus cavalry by +25.",
            "classes": [
              "cavalry",
              "technology"
            ],
            "displayClasses": [
              "Cavalry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "blacksmith"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/boyars-fortitude-3.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "class": [
                    [
                      "cavalry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 25,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-turret",
        "name": "Castle Turret",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Weapon Emplacement"
        ],
        "classes": [
          "weapon",
          "emplacement"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/castle-turret-1.png",
        "description": "Increase the damage of arrows fired from this Wooden Fortress by +2.",
        "variations": [
          {
            "id": "castle-turret-2",
            "baseId": "castle-turret",
            "type": "technology",
            "name": "Castle Turret",
            "pbgid": 135071,
            "attribName": "upgrade_wooden_castle_turret_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Increase the damage of arrows fired from this Wooden Fortress by +2.",
            "classes": [
              "weapon",
              "emplacement"
            ],
            "displayClasses": [
              "Weapon Emplacement"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 75,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 75,
              "popcap": 0,
              "time": 30
            },
            "producedBy": [
              "wooden-fortress"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/castle-turret-1.png",
            "effects": [
              {
                "property": "rangedAttack",
                "select": {
                  "id": [
                    "wooden-fortress"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "castle-watch",
        "name": "Castle Watch",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Vision Emplacement"
        ],
        "classes": [
          "vision",
          "emplacement"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/technologies/castle-watch-1.png",
        "description": "Increase the sight range of this Wooden Fortress by 6 tiles.",
        "variations": [
          {
            "id": "castle-watch-2",
            "baseId": "castle-watch",
            "type": "technology",
            "name": "Castle Watch",
            "pbgid": 135070,
            "attribName": "upgrade_wooden_castle_watch_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Increase the sight range of this Wooden Fortress by 6 tiles.",
            "classes": [
              "vision",
              "emplacement"
            ],
            "displayClasses": [
              "Vision Emplacement"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 50,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 50,
              "popcap": 0,
              "time": 15
            },
            "producedBy": [
              "wooden-fortress"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/castle-watch-1.png",
            "effects": [
              {
                "property": "lineOfSight",
                "select": {
                  "id": [
                    "wooden-fortress"
                  ]
                },
                "effect": "change",
                "value": 6,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "divine-light",
        "name": "Divine Light",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/divine-light-1.png",
        "description": "Increase the duration of Saint's Blessing by +10 seconds.",
        "variations": [
          {
            "id": "divine-light-1",
            "baseId": "divine-light",
            "type": "technology",
            "name": "Divine Light",
            "pbgid": 207442,
            "attribName": "upgrade_saints_blessing_duration_rus",
            "age": 1,
            "civs": [
              "ru"
            ],
            "description": "Increase the duration of Saint's Blessing by +10 seconds.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 75,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "abbey-of-the-trinity",
              "monastery"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/divine-light-1.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "warrior-monk"
                  ]
                },
                "effect": "change",
                "value": 10,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fervor",
        "name": "Fervor",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/fervor-3.png",
        "description": "Improve the range of Saint's Blessing by +5 tiles and the damage granted by Saint's Blessing by +1.",
        "variations": [
          {
            "id": "fervor-3",
            "baseId": "fervor",
            "type": "technology",
            "name": "Fervor",
            "pbgid": 207449,
            "attribName": "upgrade_saints_blessing_buff_effect_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Improve the range of Saint's Blessing by +5 tiles and the damage granted by Saint's Blessing by +1.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 275,
              "vizier": 0,
              "oliveoil": 0,
              "total": 275,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "abbey-of-the-trinity"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fervor-3.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "warrior-monk"
                  ]
                },
                "effect": "change",
                "value": 5,
                "type": "ability"
              },
              {
                "property": "meleeAttack",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "cavalry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "influence"
              },
              {
                "property": "rangedAttack",
                "select": {
                  "class": [
                    [
                      "infantry"
                    ],
                    [
                      "cavalry"
                    ]
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "influence"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "fine-tuned-guns",
        "name": "Fine Tuned Guns",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Bombard Technology"
        ],
        "classes": [
          "bombard",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/fine-tuned-guns-4.png",
        "description": "Increase damage of Bombards by +20%. Bombards gain +50% damage vs Infantry.",
        "variations": [
          {
            "id": "fine-tuned-guns-4",
            "baseId": "fine-tuned-guns",
            "type": "technology",
            "name": "Fine Tuned Guns",
            "pbgid": 207448,
            "attribName": "upgrade_siege_fined_tuned_guns_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Increase damage of Bombards by +20%. Bombards gain +50% damage vs Infantry.",
            "classes": [
              "bombard",
              "technology"
            ],
            "displayClasses": [
              "Bombard Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 200,
              "stone": 0,
              "gold": 500,
              "vizier": 0,
              "oliveoil": 0,
              "total": 700,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "high-armory"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/fine-tuned-guns-4.png",
            "effects": [
              {
                "property": "siegeAttack",
                "select": {
                  "id": [
                    "bombard"
                  ]
                },
                "effect": "multiply",
                "value": 0.8,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "select": {
                  "id": [
                    "bombard"
                  ]
                },
                "target": {
                  "class": [
                    [
                      "infantry"
                    ]
                  ]
                },
                "effect": "multiply",
                "value": 0.7000000000000001,
                "type": "bonus"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "knight-poleaxes",
        "name": "Knight Poleaxes",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Knight Technology"
        ],
        "classes": [
          "knight",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/knight-poleaxes-4.png",
        "description": "Knights equip a poleax, increasing their melee damage by +4.",
        "variations": [
          {
            "id": "knight-poleaxes-4",
            "baseId": "knight-poleaxes",
            "type": "technology",
            "name": "Knight Poleaxes",
            "pbgid": 207441,
            "attribName": "upgrade_cavalry_melee_damage_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Knights equip a poleax, increasing their melee damage by +4.",
            "classes": [
              "knight",
              "technology"
            ],
            "displayClasses": [
              "Knight Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/knight-poleaxes-4.png",
            "effects": [
              {
                "property": "meleeAttack",
                "select": {
                  "id": [
                    "knight"
                  ]
                },
                "effect": "change",
                "value": 4,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "mounted-training",
        "name": "Mounted Training",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Horse Archer Technology"
        ],
        "classes": [
          "horse",
          "archer",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/mounted-training-4.png",
        "description": "Increase weapon range of Horse Archers by +1 and unlock the Gallop ability.\nGallop: Activate to move at maximum speed with +2 tile weapon range for 8 seconds.",
        "variations": [
          {
            "id": "mounted-training-4",
            "baseId": "mounted-training",
            "type": "technology",
            "name": "Mounted Training",
            "pbgid": 2134250,
            "attribName": "upgrade_horse_archer_mounted_training_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Increase weapon range of Horse Archers by +1 and unlock the Gallop ability.\nGallop: Activate to move at maximum speed with +2 tile weapon range for 8 seconds.",
            "classes": [
              "horse",
              "archer",
              "technology"
            ],
            "displayClasses": [
              "Horse Archer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/mounted-training-4.png",
            "effects": [
              {
                "property": "maxRange",
                "select": {
                  "id": [
                    "horse-archer"
                  ]
                },
                "effect": "change",
                "value": 1,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "saints-veneration",
        "name": "Saint's Veneration",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Technology"
        ],
        "classes": [
          "religious",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/saints-veneration-4.png",
        "description": "Increase the health of Warrior Monks by +100.",
        "variations": [
          {
            "id": "saints-veneration-4",
            "baseId": "saints-veneration",
            "type": "technology",
            "name": "Saint's Veneration",
            "pbgid": 2122121,
            "attribName": "upgrade_saints_veneration_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Increase the health of Warrior Monks by +100.",
            "classes": [
              "religious",
              "technology"
            ],
            "displayClasses": [
              "Religious Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 425,
              "vizier": 0,
              "oliveoil": 0,
              "total": 425,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "abbey-of-the-trinity"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/saints-veneration-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "warrior-monk"
                  ]
                },
                "effect": "change",
                "value": 100,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "siege-crew-training",
        "name": "Siege Crew Training",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Mangonel",
          "Trebuchet",
          "and Bombard Technology"
        ],
        "classes": [
          "mangonel",
          "trebuchet",
          "and",
          "bombard",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/siege-crew-training-4.png",
        "description": "Setup and teardown speed of Mangonels, Trebuchets, and Bombards is instant.",
        "variations": [
          {
            "id": "siege-crew-training-4",
            "baseId": "siege-crew-training",
            "type": "technology",
            "name": "Siege Crew Training",
            "pbgid": 207447,
            "attribName": "upgrade_siege_crew_training_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Setup and teardown speed of Mangonels, Trebuchets, and Bombards is instant.",
            "classes": [
              "mangonel",
              "trebuchet",
              "and",
              "bombard",
              "technology"
            ],
            "displayClasses": [
              "Mangonel",
              "Trebuchet",
              "and Bombard Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "high-armory"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/siege-crew-training-4.png",
            "effects": [
              {
                "property": "attackSpeed",
                "select": {
                  "id": [
                    "counterweight-trebuchet",
                    "mangonel",
                    "bombard"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-miltia-3",
        "name": "Castle Age Militia",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Militia Scaling Technology"
        ],
        "classes": [
          "Militia",
          "scaling",
          "technology"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/militia-2.png",
        "description": "Increases the health, attack and armor of Militia when reaching Castle Age.",
        "variations": [
          {
            "id": "upgrade-militia-3",
            "baseId": "upgrade-miltia-3",
            "type": "technology",
            "name": "Castle Age Militia",
            "pbgid": 2124314,
            "attribName": "upgrade_militia_3",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Increases the health, attack and armor of Militia when reaching Castle Age.",
            "classes": [
              "Militia",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "Militia Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/militia-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 30,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              },
              {
                "property": "meleeAttack",
                "value": 4,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              },
              {
                "property": "fireAttack",
                "value": 4,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "upgrade-militia-4",
        "name": "Imperial Age Militia",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Militia Scaling Technology"
        ],
        "classes": [
          "Militia",
          "scaling",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/militia-2.png",
        "description": "Increases the health, attack and armor of Militia when reaching Imperial Age.",
        "variations": [
          {
            "id": "upgrade-militia-4",
            "baseId": "upgrade-militia-4",
            "type": "technology",
            "name": "Imperial Age Militia",
            "pbgid": 2124315,
            "attribName": "upgrade_militia_4",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Increases the health, attack and armor of Militia when reaching Imperial Age.",
            "classes": [
              "Militia",
              "scaling",
              "technology"
            ],
            "displayClasses": [
              "Militia Scaling Technology"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "vizier": 0,
              "oliveoil": 0,
              "total": 0,
              "popcap": 0,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/militia-2.png",
            "effects": [
              {
                "property": "hitpoints",
                "value": 40,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              },
              {
                "property": "meleeAttack",
                "value": 6,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              },
              {
                "property": "fireAttack",
                "value": 6,
                "effect": "change",
                "type": "passive",
                "select": {
                  "id": [
                    "militia"
                  ]
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "wandering-town",
        "name": "Wandering Town",
        "type": "technology",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Ram Technology"
        ],
        "classes": [
          "ram",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/wandering-town-4.png",
        "description": "Ram damage increased by +25%. Rams heal 2 health every 1 second.",
        "variations": [
          {
            "id": "wandering-town-4",
            "baseId": "wandering-town",
            "type": "technology",
            "name": "Wandering Town",
            "pbgid": 182869,
            "attribName": "upgrade_siege_improvements_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Ram damage increased by +25%. Rams heal 2 health every 1 second.",
            "classes": [
              "ram",
              "technology"
            ],
            "displayClasses": [
              "Ram Technology"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 225,
              "vizier": 0,
              "oliveoil": 0,
              "total": 325,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "high-armory"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/wandering-town-4.png",
            "effects": [
              {
                "property": "siegeAttack",
                "select": {
                  "id": [
                    "battering-ram"
                  ]
                },
                "effect": "multiply",
                "value": 1.25,
                "type": "passive"
              },
              {
                "property": "healingRate",
                "select": {
                  "id": [
                    "battering-ram"
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "10000-bolts",
        "name": "10000 Bolts",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Crossbow Technology"
        ],
        "classes": [
          "crossbow",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/10000-bolts-4.png",
        "description": "Zhuge Nu and Crossbowmen fire an extra bolt. The additional bolt for Crossbowmen is 40% as effective as the previous bolt.",
        "variations": [
          {
            "id": "10000-bolts-4",
            "baseId": "10000-bolts",
            "type": "technology",
            "name": "10000 Bolts",
            "pbgid": 2135959,
            "attribName": "upgrade_library_crossbow_upgrade",
            "age": 4,
            "civs": [
              "zx"
            ],
            "description": "Zhuge Nu and Crossbowmen fire an extra bolt. The additional bolt for Crossbowmen is 40% as effective as the previous bolt.",
            "classes": [
              "crossbow",
              "technology"
            ],
            "displayClasses": [
              "Crossbow Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "zhu-xis-library"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/10000-bolts-4.png",
            "effects": [
              {
                "property": "meleeAttack",
                "value": 1.4,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "zhuge-nu",
                    "crossbow"
                  ]
                }
              },
              {
                "property": "rangedAttack",
                "value": 1.4,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "zhuge-nu",
                    "crossbow"
                  ]
                }
              },
              {
                "property": "siegeAttack",
                "value": 1.4,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "zhuge-nu",
                    "crossbow"
                  ]
                }
              },
              {
                "property": "fireAttack",
                "value": 1.4,
                "effect": "multiply",
                "type": "passive",
                "select": {
                  "id": [
                    "zhuge-nu",
                    "crossbow"
                  ]
                }
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "advanced-administration",
        "name": "Advanced Administration",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Imperial Official Technology"
        ],
        "classes": [
          "imperial",
          "official",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/advanced-administration-4.png",
        "description": "Imperial Officials gain 150 health and their maximum Gold carried is increased by +80. Imperial Official limit increased by +2.",
        "variations": [
          {
            "id": "advanced-administration-4",
            "baseId": "advanced-administration",
            "type": "technology",
            "name": "Advanced Administration",
            "pbgid": 2127520,
            "attribName": "upgrade_library_improved_officials",
            "age": 4,
            "civs": [
              "zx"
            ],
            "description": "Imperial Officials gain 150 health and their maximum Gold carried is increased by +80. Imperial Official limit increased by +2.",
            "classes": [
              "imperial",
              "official",
              "technology"
            ],
            "displayClasses": [
              "Imperial Official Technology"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "vizier": 0,
              "oliveoil": 0,
              "total": 500,
              "popcap": 0,
              "time": 60
            },
            "producedBy": [
              "zhu-xis-library"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/advanced-administration-4.png",
            "effects": [
              {
                "property": "hitpoints",
                "select": {
                  "id": [
                    "imperial-official"
                  ]
                },
                "effect": "change",
                "value": 150,
                "type": "passive"
              },
              {
                "property": "carryCapacity",
                "select": {
                  "id": [
                    "imperial-official"
                  ]
                },
                "effect": "change",
                "value": 80,
                "type": "passive"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "cloud-of-terror",
        "name": "Cloud of Terror",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Siege Technology"
        ],
        "classes": [
          "siege",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/cloud-of-terror-4.png",
        "description": "Adds area of effect damage to Bombards.",
        "variations": [
          {
            "id": "cloud-of-terror-4",
            "baseId": "cloud-of-terror",
            "type": "technology",
            "name": "Cloud of Terror",
            "pbgid": 2127461,
            "attribName": "upgrade_library_siege_works",
            "age": 4,
            "civs": [
              "zx"
            ],
            "description": "Adds area of effect damage to Bombards.",
            "classes": [
              "siege",
              "technology"
            ],
            "displayClasses": [
              "Siege Technology"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "zhu-xis-library"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/cloud-of-terror-4.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "dynastic-protectors",
        "name": "Dynastic Protectors",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Lancer Technology"
        ],
        "classes": [
          "lancer",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/dynastic-protectors-4.png",
        "description": "Allows production of unique cavalry units, the Imperial Guard, and the Yuan Raider.",
        "variations": [
          {
            "id": "dynastic-protectors-4",
            "baseId": "dynastic-protectors",
            "type": "technology",
            "name": "Dynastic Protectors",
            "pbgid": 2127464,
            "attribName": "upgrade_library_unfailing_grit",
            "age": 4,
            "civs": [
              "zx"
            ],
            "description": "Allows production of unique cavalry units, the Imperial Guard, and the Yuan Raider.",
            "classes": [
              "lancer",
              "technology"
            ],
            "displayClasses": [
              "Lancer Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "zhu-xis-library"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/dynastic-protectors-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "yuan-raider",
                    "imperial-guard",
                    "stable"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-red-seals",
        "name": "Imperial Red Seals",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Economic Upgrade"
        ],
        "classes": [
          "economic",
          "upgrade"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/technologies/imperial-red-seals-3.png",
        "description": "Imperial Official limit increased by +2. Grants an Imperial Official upon completion.",
        "variations": [
          {
            "id": "imperial-red-seals-3",
            "baseId": "imperial-red-seals",
            "type": "technology",
            "name": "Imperial Red Seals",
            "pbgid": 2127326,
            "attribName": "upgrade_official_limit",
            "age": 3,
            "civs": [
              "zx"
            ],
            "description": "Imperial Official limit increased by +2. Grants an Imperial Official upon completion.",
            "classes": [
              "economic",
              "upgrade"
            ],
            "displayClasses": [
              "Economic Upgrade"
            ],
            "unique": true,
            "costs": {
              "food": 200,
              "wood": 0,
              "stone": 0,
              "gold": 400,
              "vizier": 0,
              "oliveoil": 0,
              "total": 600,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "mount-lu-academy"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/imperial-red-seals-3.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "military-affairs-bureau",
        "name": "Military Affairs Bureau",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Military Upgrade"
        ],
        "classes": [
          "military",
          "upgrade"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/military-affairs-bureau-1.png",
        "description": "Imperial Officials can now supervise Keeps and Outposts to reduce damage taken by 35%.",
        "variations": [
          {
            "id": "military-affairs-bureau-1",
            "baseId": "military-affairs-bureau",
            "type": "technology",
            "name": "Military Affairs Bureau",
            "pbgid": 2127325,
            "attribName": "upgrade_official_supervise_defensive",
            "age": 1,
            "civs": [
              "zx"
            ],
            "description": "Imperial Officials can now supervise Keeps and Outposts to reduce damage taken by 35%.",
            "classes": [
              "military",
              "upgrade"
            ],
            "displayClasses": [
              "Military Upgrade"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 250,
              "vizier": 0,
              "oliveoil": 0,
              "total": 350,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "mount-lu-academy"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/military-affairs-bureau-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "regional-inspection",
        "name": "Regional Inspection",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Economic Upgrade"
        ],
        "classes": [
          "economic",
          "upgrade"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/regional-inspection-1.png",
        "description": "Supervision by Imperial Officials improved from 150% to 300%.",
        "variations": [
          {
            "id": "regional-inspection-1",
            "baseId": "regional-inspection",
            "type": "technology",
            "name": "Regional Inspection",
            "pbgid": 2127324,
            "attribName": "upgrade_official_supervise",
            "age": 1,
            "civs": [
              "zx"
            ],
            "description": "Supervision by Imperial Officials improved from 150% to 300%.",
            "classes": [
              "economic",
              "upgrade"
            ],
            "displayClasses": [
              "Economic Upgrade"
            ],
            "unique": true,
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 125,
              "vizier": 0,
              "oliveoil": 0,
              "total": 175,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "mount-lu-academy"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/regional-inspection-1.png",
            "effects": []
          }
        ],
        "shared": {}
      },
      {
        "id": "roar-of-the-dragon",
        "name": "Roar of the Dragon",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Melee Infantry Technology"
        ],
        "classes": [
          "melee",
          "infantry",
          "technology"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/technologies/roar-of-the-dragon-4.png",
        "description": "Spearmen and Horsemen gain a Fire Lance when charging.",
        "variations": [
          {
            "id": "roar-of-the-dragon-4",
            "baseId": "roar-of-the-dragon",
            "type": "technology",
            "name": "Roar of the Dragon",
            "pbgid": 2127459,
            "attribName": "upgrade_library_flaming_charge",
            "age": 4,
            "civs": [
              "zx"
            ],
            "description": "Spearmen and Horsemen gain a Fire Lance when charging.",
            "classes": [
              "melee",
              "infantry",
              "technology"
            ],
            "displayClasses": [
              "Melee Infantry Technology"
            ],
            "unique": true,
            "costs": {
              "food": 300,
              "wood": 0,
              "stone": 0,
              "gold": 700,
              "vizier": 0,
              "oliveoil": 0,
              "total": 1000,
              "popcap": 0,
              "time": 90
            },
            "producedBy": [
              "zhu-xis-library"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/roar-of-the-dragon-4.png",
            "effects": [
              {
                "property": "unknown",
                "select": {
                  "id": [
                    "spearman",
                    "horseman"
                  ]
                },
                "effect": "change",
                "value": 0,
                "type": "ability"
              }
            ]
          }
        ],
        "shared": {}
      },
      {
        "id": "single-whip-reform",
        "name": "Single Whip Reform",
        "type": "technology",
        "civs": [
          "zx"
        ],
        "unique": true,
        "displayClasses": [
          "Economic Upgrade"
        ],
        "classes": [
          "economic",
          "upgrade"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/technologies/single-whip-reform-1.png",
        "description": "Imperial Officials move 50% faster.",
        "variations": [
          {
            "id": "single-whip-reform-1",
            "baseId": "single-whip-reform",
            "type": "technology",
            "name": "Single Whip Reform",
            "pbgid": 2127323,
            "attribName": "upgrade_official_movement_speed",
            "age": 1,
            "civs": [
              "zx"
            ],
            "description": "Imperial Officials move 50% faster.",
            "classes": [
              "economic",
              "upgrade"
            ],
            "displayClasses": [
              "Economic Upgrade"
            ],
            "unique": true,
            "costs": {
              "food": 75,
              "wood": 0,
              "stone": 0,
              "gold": 175,
              "vizier": 0,
              "oliveoil": 0,
              "total": 250,
              "popcap": 0,
              "time": 45
            },
            "producedBy": [
              "mount-lu-academy"
            ],
            "icon": "https://data.aoe4world.com/images/technologies/single-whip-reform-1.png",
            "effects": []
          }
        ],
        "shared": {}
      }
    ]
  
    module.exports = allOptimizedTechs
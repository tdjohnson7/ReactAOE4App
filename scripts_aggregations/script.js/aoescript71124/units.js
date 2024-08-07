
     const data=  [
      {
        "id": "battering-ram",
        "name": "Battering Ram",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/battering-ram-3.png",
        "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Can only attack buildings\n- Slow movement speed",
        "variations": [
          {
            "id": "battering-ram-1",
            "pbgid": 2108168,
            "attribName": "unit_workshop_ram_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108170,
            "attribName": "unit_workshop_ram_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "siege-workshop",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108172,
            "attribName": "unit_workshop_ram_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108171,
            "attribName": "unit_workshop_ram_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108169,
            "attribName": "unit_workshop_ram_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108177,
            "attribName": "unit_workshop_ram_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108173,
            "attribName": "unit_workshop_ram_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108174,
            "attribName": "unit_workshop_ram_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Ram",
                "type": "siege",
                "damage": 200,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 0.5375
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "wall"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 4
                },
                "attribName": "weapon_ram_3_mon",
                "pbgid": 2033636
              }
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108175,
            "attribName": "unit_workshop_ram_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ]
          },
          {
            "id": "battering-ram-2",
            "pbgid": 2108176,
            "attribName": "unit_workshop_ram_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Ram",
                "type": "siege",
                "damage": 200,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 0.5375
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "wall"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 4
                },
                "attribName": "weapon_ram_3_rus",
                "pbgid": 133283
              }
            ]
          }
        ],
        "baseId": "battering-ram",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 250,
          "stone": 0,
          "gold": 0,
          "total": 250,
          "popcap": 1,
          "time": 30
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 420,
        "sight": {
          "line": 30,
          "height": 10
        },
        "movement": {
          "speed": 0.75
        },
        "garrison": {
          "capacity": 16,
          "classes": [
            "infantry",
            "villager",
            "infantry ranged",
            "monk"
          ]
        },
        "shared": {
          "battering-ram-1": {
            "name": "Battering Ram",
            "weapons": [
              {
                "name": "Ram",
                "type": "siege",
                "damage": 200,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 0.5375
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "wall"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 4
                },
                "attribName": "weapon_ram_3",
                "pbgid": 108918
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 50
              }
            ],
            "id": "battering-ram-1"
          },
          "battering-ram-2": {
            "name": "Battering Ram",
            "age": 2,
            "weapons": [
              {
                "name": "Ram",
                "type": "siege",
                "damage": 200,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 0.5375
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "wall"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 4
                },
                "attribName": "weapon_ram_3",
                "pbgid": 108918
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 50
              }
            ],
            "id": "battering-ram-2"
          }
        }
      },
      {
        "id": "bombard",
        "name": "Bombard",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "hr",
          "ma",
          "mo",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/bombard-4.png",
        "description": "Intimidating siege gun excellent against buildings or any stubborn targets.\n+ High damage\n- Must be set up to fire",
        "variations": [
          {
            "id": "bombard-4",
            "pbgid": 166392,
            "attribName": "unit_bombard_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "siege-workshop",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 134716,
            "attribName": "unit_bombard_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 137559,
            "attribName": "unit_bombard_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 136043,
            "attribName": "unit_bombard_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 199709,
            "attribName": "unit_bombard_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 2356081,
            "attribName": "unit_bombard_4_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 130773,
            "attribName": "unit_bombard_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Cannon",
                "type": "siege",
                "damage": 100,
                "speed": 5.375,
                "range": {
                  "min": 3.75,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 4.75,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "attribName": "weapon_bombard_4_mon",
                "pbgid": 2033628
              }
            ]
          },
          {
            "id": "bombard-4",
            "pbgid": 133455,
            "attribName": "unit_bombard_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Cannon",
                "type": "siege",
                "damage": 100,
                "speed": 5.375,
                "range": {
                  "min": 3.75,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 4.75,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "attribName": "weapon_bombard_4_rus",
                "pbgid": 133301
              }
            ]
          }
        ],
        "baseId": "bombard",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 300,
          "stone": 0,
          "gold": 600,
          "total": 900,
          "popcap": 3,
          "time": 45
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 240,
        "weapons": [
          {
            "name": "Cannon",
            "type": "siege",
            "damage": 100,
            "speed": 5.375,
            "range": {
              "min": 3.75,
              "max": 10
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 410,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "unit"
                    ]
                  ]
                },
                "effect": "change",
                "value": 410,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 4.75,
              "setup": 0,
              "teardown": 1,
              "cooldown": 0
            },
            "attribName": "weapon_bombard_4",
            "pbgid": 127728
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 30
          }
        ],
        "sight": {
          "line": 56,
          "height": 10
        },
        "movement": {
          "speed": 0.625
        },
        "shared": {}
      },
      {
        "id": "carrack",
        "name": "Carrack",
        "type": "unit",
        "civs": [
          "en",
          "fr",
          "hr",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Warship"
        ],
        "classes": [
          "warship"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/carrack-4.png",
        "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
        "variations": [
          {
            "id": "carrack-4",
            "pbgid": 193115,
            "attribName": "unit_naval_carrack_4_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 180,
              "wood": 180,
              "food": 180,
              "stone": 0,
              "total": 540,
              "time": 45
            }
          },
          {
            "id": "carrack-4",
            "pbgid": 193125,
            "attribName": "unit_naval_combat_warship_4_hre",
            "civs": [
              "hr"
            ],
            "sight": {
              "line": 48,
              "height": 10
            }
          },
          {
            "id": "carrack-4",
            "pbgid": 193120,
            "attribName": "unit_naval_combat_warship_4_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "carrack-4",
            "pbgid": 2046447,
            "attribName": "unit_naval_combat_warship_4_ott",
            "civs": [
              "ot"
            ],
            "sight": {
              "line": 52,
              "height": 10
            }
          }
        ],
        "baseId": "carrack",
        "age": 4,
        "costs": {
          "food": 200,
          "wood": 200,
          "stone": 0,
          "gold": 200,
          "total": 600,
          "popcap": 5,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 700,
        "weapons": [
          {
            "name": "Cannon",
            "type": "siege",
            "damage": 45,
            "speed": 5.625,
            "range": {
              "min": 0,
              "max": 9
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 70,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 5,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "burst": {
              "count": 3
            },
            "attribName": "weapon_naval_warship_cannon_ai_western",
            "pbgid": 2033788
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 5
          }
        ],
        "sight": {
          "line": 50,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {}
      },
      {
        "id": "counterweight-trebuchet",
        "name": "Counterweight Trebuchet",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/counterweight-trebuchet-4.png",
        "description": "Powerful siege engine effective at destroying buildings and walls over a great distance.\n+ Bonus damage vs buildings\n- Must be set up to fire\n- Inaccurate against units",
        "variations": [
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 166423,
            "attribName": "unit_trebuchet_4_cw_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "siege-workshop",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 134751,
            "attribName": "unit_trebuchet_4_cw_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 132307,
            "attribName": "unit_trebuchet_4_cw_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 137549,
            "attribName": "unit_trebuchet_4_cw_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 136168,
            "attribName": "unit_trebuchet_4_cw_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 199745,
            "attribName": "unit_trebuchet_4_cw_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 2751274,
            "attribName": "unit_trebuchet_4_cw_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 2046467,
            "attribName": "unit_trebuchet_4_cw_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ],
            "garrison": {
              "capacity": 1,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          },
          {
            "id": "counterweight-trebuchet-3",
            "pbgid": 133489,
            "attribName": "unit_trebuchet_4_cw_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Trebuchet",
                "type": "siege",
                "damage": 50,
                "speed": 12.625,
                "range": {
                  "min": 2.75,
                  "max": 16
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 450,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 7.375,
                  "reload": 4,
                  "setup": 3,
                  "teardown": 2,
                  "cooldown": 0
                },
                "attribName": "weapon_trebuchet_4_cw_rus",
                "pbgid": 133327
              }
            ]
          }
        ],
        "baseId": "counterweight-trebuchet",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 500,
          "stone": 0,
          "gold": 250,
          "total": 750,
          "popcap": 3,
          "time": 40
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 210,
        "weapons": [
          {
            "name": "Trebuchet",
            "type": "siege",
            "damage": 50,
            "speed": 12.625,
            "range": {
              "min": 2.75,
              "max": 16
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 450,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "unit"
                    ]
                  ]
                },
                "effect": "change",
                "value": 200,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0.625,
              "attack": 0.125,
              "winddown": 7.375,
              "reload": 4,
              "setup": 3,
              "teardown": 2,
              "cooldown": 0
            },
            "attribName": "weapon_trebuchet_4_counterweight",
            "pbgid": 130952
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 20
          }
        ],
        "sight": {
          "line": 80,
          "height": 10
        },
        "movement": {
          "speed": 0.625
        },
        "shared": {}
      },
      {
        "id": "crossbowman",
        "name": "Crossbowman",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "hr",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/crossbowman-3.png",
        "description": "High damage ranged unit best against armored targets.\n+ Anti-armor specialist\n- Low health\n- Countered by Horsemen",
        "variations": [
          {
            "id": "crossbowman-3",
            "pbgid": 166394,
            "attribName": "unit_crossbowman_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "council-hall",
              "archery-range",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 134717,
            "attribName": "unit_crossbowman_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 137560,
            "attribName": "unit_crossbowman_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 136044,
            "attribName": "unit_crossbowman_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 199711,
            "attribName": "unit_crossbowman_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 163621,
            "attribName": "unit_crossbowman_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 12,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_3_mon",
                "pbgid": 2033631
              }
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 2046432,
            "attribName": "unit_crossbowman_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "archery-range"
            ]
          },
          {
            "id": "crossbowman-3",
            "pbgid": 133456,
            "attribName": "unit_crossbowman_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 12,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_3_rus",
                "pbgid": 133302
              }
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 166395,
            "attribName": "unit_crossbowman_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "council-hall",
              "archery-range",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 134719,
            "attribName": "unit_crossbowman_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 137561,
            "attribName": "unit_crossbowman_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 136045,
            "attribName": "unit_crossbowman_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 199712,
            "attribName": "unit_crossbowman_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 163623,
            "attribName": "unit_crossbowman_4_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 2046433,
            "attribName": "unit_crossbowman_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "archery-range"
            ]
          },
          {
            "id": "crossbowman-4",
            "pbgid": 133457,
            "attribName": "unit_crossbowman_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 15,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_4_rus",
                "pbgid": 133303
              }
            ]
          }
        ],
        "baseId": "crossbowman",
        "age": 3,
        "costs": {
          "food": 80,
          "wood": 0,
          "stone": 0,
          "gold": 40,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 80,
        "sight": {
          "line": 40,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "crossbowman-3": {
            "name": "Crossbowman",
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 12,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_3",
                "pbgid": 108239
              }
            ],
            "armor": [],
            "id": "crossbowman-3"
          },
          "crossbowman-4": {
            "name": "Elite Crossbowman",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/crossbowman-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 15,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_4",
                "pbgid": 127830
              }
            ],
            "armor": [],
            "id": "crossbowman-4"
          }
        }
      },
      {
        "id": "demolition-ship",
        "name": "Demolition Ship",
        "type": "unit",
        "civs": [
          "en",
          "fr",
          "hr",
          "ma",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Incendiary Ship"
        ],
        "classes": [
          "incendiary",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/demolition-ship-3.png",
        "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
        "variations": [
          {
            "id": "demolition-ship-3",
            "pbgid": 193117,
            "attribName": "unit_naval_fireship_3_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 72,
              "wood": 72,
              "food": 0,
              "stone": 0,
              "total": 144,
              "time": 15
            }
          },
          {
            "id": "demolition-ship-3",
            "pbgid": 193127,
            "attribName": "unit_naval_fireship_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "demolition-ship-3",
            "pbgid": 193122,
            "attribName": "unit_naval_fireship_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "demolition-ship-3",
            "pbgid": 2356678,
            "attribName": "unit_naval_fireship_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "demolition-ship-3",
            "pbgid": 2046448,
            "attribName": "unit_naval_fireship_3_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "demolition-ship",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 80,
          "stone": 0,
          "gold": 80,
          "total": 160,
          "popcap": 2,
          "time": 15
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 145,
        "weapons": [
          {
            "name": "Incendiaries",
            "type": "siege",
            "damage": 95,
            "speed": 0.125,
            "range": {
              "min": 0,
              "max": 2
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "broadside"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_fireship",
            "pbgid": 196723
          }
        ],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 2
        },
        "shared": {}
      },
      {
        "id": "fishing-boat",
        "name": "Fishing Boat",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Worker",
          "Ship"
        ],
        "classes": [
          "worker",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/fishing-boat-2.png",
        "description": "Small boat that gathers Food from either Deep Water Fish or Shoreline Fish. Drops off gathered resources at the Dock.\n+ Can repair\n- No combat",
        "variations": [
          {
            "id": "fishing-boat-2",
            "pbgid": 193116,
            "attribName": "unit_naval_fishing_boat_2_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 0,
              "wood": 68,
              "food": 0,
              "stone": 0,
              "total": 68,
              "time": 25
            }
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 193126,
            "attribName": "unit_naval_fishing_boat_2_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 193121,
            "attribName": "unit_naval_fishing_boat_2_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 193111,
            "attribName": "unit_naval_fishing_boat_2_chi",
            "civs": [
              "ch"
            ],
            "costs": {
              "food": 0,
              "wood": 75,
              "stone": 0,
              "gold": 0,
              "total": 75,
              "popcap": 1,
              "time": 21
            }
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 193141,
            "attribName": "unit_naval_fishing_boat_2_sul",
            "civs": [
              "de"
            ],
            "description": "Small boat that gathers Food from either Deep Water Fish or Shoreline Fish. Drops off gathered resources at the Dock.\n+ Can repair\n+ Fires a low damage arrow",
            "unique": true,
            "hitpoints": 188,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 7,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 4
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_fishing_ship_arrow_sul",
                "pbgid": 2033837
              }
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 199728,
            "attribName": "unit_naval_fishing_boat_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 2553220,
            "attribName": "unit_naval_fishing_boat_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 193131,
            "attribName": "unit_naval_fishing_boat_2_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "fishing-boat-2",
            "pbgid": 2046449,
            "attribName": "unit_naval_fishing_boat_2_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "fishing-boat",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 75,
          "stone": 0,
          "gold": 0,
          "total": 75,
          "popcap": 1,
          "time": 25
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 125,
        "weapons": [],
        "armor": [],
        "sight": {
          "line": 56,
          "height": 501
        },
        "movement": {
          "speed": 1.5
        },
        "shared": {}
      },
      {
        "id": "galley",
        "name": "Galley",
        "type": "unit",
        "civs": [
          "en",
          "fr",
          "hr"
        ],
        "unique": false,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/galley-3.png",
        "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "galley-2",
            "pbgid": 193930,
            "attribName": "unit_naval_war_galley_3_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 0,
              "wood": 135,
              "food": 81,
              "stone": 0,
              "total": 216,
              "time": 25
            }
          },
          {
            "id": "galley-2",
            "pbgid": 193932,
            "attribName": "unit_naval_war_galley_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "galley-2",
            "pbgid": 2101341,
            "attribName": "unit_naval_war_galley_3_fre",
            "civs": [
              "fr"
            ]
          }
        ],
        "baseId": "galley",
        "age": 2,
        "costs": {
          "food": 90,
          "wood": 150,
          "stone": 0,
          "gold": 0,
          "total": 240,
          "popcap": 3,
          "time": 25
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 300,
        "weapons": [
          {
            "name": "Bow",
            "type": "ranged",
            "damage": 6,
            "speed": 1.5,
            "range": {
              "min": 0,
              "max": 6.5
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "fireship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 18,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0.125,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 0.75,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "burst": {
              "count": 5
            },
            "attribName": "weapon_naval_arrow_ship_arrow",
            "pbgid": 2034306
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 1
          }
        ],
        "sight": {
          "line": 48,
          "height": 10
        },
        "movement": {
          "speed": 1.75
        },
        "shared": {}
      },
      {
        "id": "handcannoneer",
        "name": "Handcannoneer",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Light Ranged Gunpowder Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "gunpowder",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/handcannoneer-4.png",
        "description": "Powerful all-purpose ranged infantry.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
        "variations": [
          {
            "id": "handcannoneer-4",
            "pbgid": 166397,
            "attribName": "unit_handcannon_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "council-hall",
              "archery-range",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 134720,
            "attribName": "unit_handcannon_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 132274,
            "attribName": "unit_handcannon_4_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 137562,
            "attribName": "unit_handcannon_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 136046,
            "attribName": "unit_handcannon_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 199714,
            "attribName": "unit_handcannon_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "handcannoneer-4",
            "pbgid": 129634,
            "attribName": "unit_handcannon_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Handcannon",
                "type": "ranged",
                "damage": 35,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_handcannon_4_mon",
                "pbgid": 2033633
              }
            ]
          }
        ],
        "baseId": "handcannoneer",
        "age": 4,
        "costs": {
          "food": 120,
          "wood": 0,
          "stone": 0,
          "gold": 120,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 130,
        "weapons": [
          {
            "name": "Handcannon",
            "type": "ranged",
            "damage": 35,
            "speed": 2.125,
            "range": {
              "min": 0,
              "max": 4
            },
            "modifiers": [],
            "durations": {
              "aim": 0.25,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 1.25,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_handcannon_4",
            "pbgid": 127729
          }
        ],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {}
      },
      {
        "id": "horseman",
        "name": "Horseman",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "mo",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Light Melee Cavalry"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/horseman-1.png",
        "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
        "variations": [
          {
            "id": "horseman-1",
            "pbgid": 129569,
            "attribName": "unit_horseman_1_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 166398,
            "attribName": "unit_horseman_2_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 134721,
            "attribName": "unit_horseman_2_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 132276,
            "attribName": "unit_horseman_2_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "school-of-cavalry",
              "stable"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 137564,
            "attribName": "unit_horseman_2_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 136047,
            "attribName": "unit_horseman_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 199715,
            "attribName": "unit_horseman_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 129570,
            "attribName": "unit_horseman_2_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Saber",
                "type": "melee",
                "damage": 9,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_2_mon",
                "pbgid": 206012
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ]
          },
          {
            "id": "horseman-2",
            "pbgid": 133459,
            "attribName": "unit_horseman_2_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_2_rus",
                "pbgid": 133275
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 166399,
            "attribName": "unit_horseman_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 134722,
            "attribName": "unit_horseman_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 132277,
            "attribName": "unit_horseman_3_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "school-of-cavalry",
              "stable"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 137565,
            "attribName": "unit_horseman_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 136048,
            "attribName": "unit_horseman_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 199716,
            "attribName": "unit_horseman_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 129575,
            "attribName": "unit_horseman_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Saber",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_3_mon",
                "pbgid": 206013
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ]
          },
          {
            "id": "horseman-3",
            "pbgid": 133460,
            "attribName": "unit_horseman_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_3_rus",
                "pbgid": 133276
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 166400,
            "attribName": "unit_horseman_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 134724,
            "attribName": "unit_horseman_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 132278,
            "attribName": "unit_horseman_4_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "school-of-cavalry",
              "stable"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 137567,
            "attribName": "unit_horseman_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 136049,
            "attribName": "unit_horseman_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 199717,
            "attribName": "unit_horseman_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 136251,
            "attribName": "unit_horseman_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Saber",
                "type": "melee",
                "damage": 13,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 13,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_4_mon",
                "pbgid": 206014
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ]
          },
          {
            "id": "horseman-4",
            "pbgid": 133461,
            "attribName": "unit_horseman_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 13,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 13,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_4_rus",
                "pbgid": 133277
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          }
        ],
        "baseId": "horseman",
        "age": 1,
        "costs": {
          "food": 100,
          "wood": 20,
          "stone": 0,
          "gold": 0,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 110,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.875
        },
        "shared": {
          "horseman-1": {
            "name": "Early Horseman",
            "weapons": [
              {
                "name": "Saber",
                "type": "melee",
                "damage": 8,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_1_mon",
                "pbgid": 206011
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "id": "horseman-1"
          },
          "horseman-2": {
            "name": "Horseman",
            "age": 2,
            "icon": "https://data.aoe4world.com/images/units/horseman-2.png",
            "hitpoints": 125,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_2",
                "pbgid": 109275
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "id": "horseman-2"
          },
          "horseman-3": {
            "name": "Veteran Horseman",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/horseman-3.png",
            "hitpoints": 155,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_3",
                "pbgid": 127820
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "horseman-3"
          },
          "horseman-4": {
            "name": "Elite Horseman",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/horseman-4.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 13,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 13,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_4",
                "pbgid": 127821
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "horseman-4"
          }
        }
      },
      {
        "id": "hulk",
        "name": "Hulk",
        "type": "unit",
        "civs": [
          "en",
          "fr",
          "hr",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Springald Ship"
        ],
        "classes": [
          "springald",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/hulk-2.png",
        "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
        "variations": [
          {
            "id": "hulk-2",
            "pbgid": 193114,
            "attribName": "unit_naval_combat_ship_2_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 27,
              "wood": 180,
              "food": 108,
              "stone": 0,
              "total": 315,
              "time": 30
            }
          },
          {
            "id": "hulk-2",
            "pbgid": 193124,
            "attribName": "unit_naval_combat_ship_2_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "hulk-2",
            "pbgid": 193119,
            "attribName": "unit_naval_combat_ship_2_fre",
            "civs": [
              "fr"
            ],
            "unique": true,
            "weapons": [
              {
                "name": "(translation not found)",
                "type": "ranged",
                "damage": 35,
                "speed": 4.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "archer",
                          "ship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_combat_ship_springald_fre",
                "pbgid": 2128677
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 4
              }
            ]
          },
          {
            "id": "hulk-2",
            "pbgid": 2046446,
            "attribName": "unit_naval_combat_ship_2_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "hulk",
        "age": 2,
        "costs": {
          "food": 120,
          "wood": 200,
          "stone": 0,
          "gold": 30,
          "total": 350,
          "popcap": 3,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 450,
        "weapons": [
          {
            "name": "Ballista",
            "type": "ranged",
            "damage": 35,
            "speed": 4.125,
            "range": {
              "min": 0,
              "max": 6
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "archer",
                      "ship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0.25,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 2.75,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_combat_ship_springald",
            "pbgid": 2102494
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 3
          }
        ],
        "sight": {
          "line": 45,
          "height": 10
        },
        "movement": {
          "speed": 1.375
        },
        "shared": {}
      },
      {
        "id": "king",
        "name": "King",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Melee Cavalry"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/king-2.png",
        "description": "A mighty King, a powerful heavy cavalry unit. Heals nearby units by 2 health every 1 seconds.",
        "variations": [
          {
            "id": "king-2",
            "baseId": "king",
            "type": "unit",
            "name": "King",
            "pbgid": 2104832,
            "attribName": "unit_abbey_king_2",
            "age": 2,
            "civs": [
              "en"
            ],
            "description": "A mighty King, a powerful heavy cavalry unit. Heals nearby units by 2 health every 1 seconds.",
            "classes": [
              "heavy",
              "melee",
              "cavalry"
            ],
            "displayClasses": [
              "Heavy Melee Cavalry"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 0,
              "stone": 0,
              "gold": 150,
              "total": 300,
              "popcap": 1,
              "time": 35
            },
            "producedBy": [
              "abbey-of-kings"
            ],
            "icon": "https://data.aoe4world.com/images/units/king-2.png",
            "hitpoints": 220,
            "weapons": [
              {
                "name": "Great Sword",
                "type": "melee",
                "damage": 16,
                "speed": 2.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1
                },
                "attribName": "weapon_abbey_king_axe_eng",
                "pbgid": 2104834
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              },
              {
                "name": "Lance",
                "type": "melee",
                "damage": 24,
                "speed": 0.525,
                "range": {
                  "min": 0,
                  "max": 1.0375
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.4
                },
                "attribName": "weapon_abbey_king_charge_eng",
                "pbgid": 2104855
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 2
              },
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "sight": {
              "line": 28,
              "height": 10
            },
            "movement": {
              "speed": 1.6875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "knight",
        "name": "Knight",
        "type": "unit",
        "civs": [
          "en",
          "hr",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Cavalry"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/knight-2.png",
        "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
        "variations": [
          {
            "id": "knight-2",
            "pbgid": 133509,
            "attribName": "unit_knight_2_rus",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "knight-3",
            "pbgid": 166401,
            "attribName": "unit_knight_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "knight-3",
            "pbgid": 134725,
            "attribName": "unit_knight_3_hre",
            "civs": [
              "hr"
            ],
            "description": "Expensive cavalry with a powerful charge.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen"
          },
          {
            "id": "knight-3",
            "pbgid": 2046440,
            "attribName": "unit_knight_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "stable"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3_ott",
                "pbgid": 2072758
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "knight-3",
            "pbgid": 133462,
            "attribName": "unit_knight_3_rus",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "knight-4",
            "pbgid": 166402,
            "attribName": "unit_knight_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "knight-4",
            "pbgid": 134726,
            "attribName": "unit_knight_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "knight-4",
            "pbgid": 2046441,
            "attribName": "unit_knight_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "stable"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4_ott",
                "pbgid": 2072759
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "knight-4",
            "pbgid": 133463,
            "attribName": "unit_knight_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4_rus",
                "pbgid": 133279
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          }
        ],
        "baseId": "knight",
        "age": 2,
        "costs": {
          "food": 140,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 190,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "knight-2": {
            "name": "Early Knight",
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 19,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_2_rus",
                "pbgid": 133280
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "knight-2"
          },
          "knight-3": {
            "name": "Knight",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/knight-3.png",
            "hitpoints": 230,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3",
                "pbgid": 106614
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "knight-3"
          },
          "knight-4": {
            "name": "Elite Knight",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/knight-4.png",
            "hitpoints": 270,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4",
                "pbgid": 127822
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 5
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "id": "knight-4"
          }
        }
      },
      {
        "id": "longbowman",
        "name": "Longbowman",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/longbowman-2.png",
        "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
        "variations": [
          {
            "id": "longbowman-2",
            "pbgid": 166389,
            "attribName": "unit_archer_2_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "longbowman-3",
            "pbgid": 166390,
            "attribName": "unit_archer_3_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "longbowman-4",
            "pbgid": 166391,
            "attribName": "unit_archer_4_eng",
            "civs": [
              "en"
            ]
          }
        ],
        "baseId": "longbowman",
        "age": 2,
        "costs": {
          "food": 40,
          "wood": 50,
          "stone": 0,
          "gold": 0,
          "total": 90,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "council-hall",
          "archery-range",
          "the-white-tower",
          "keep",
          "berkshire-palace"
        ],
        "hitpoints": 70,
        "sight": {
          "line": 44,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "longbowman-2": {
            "name": "Longbowman",
            "weapons": [
              {
                "name": "Longbow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 7
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_2_eng",
                "pbgid": 129520
              }
            ],
            "armor": [],
            "id": "longbowman-2"
          },
          "longbowman-3": {
            "name": "Veteran Longbowman",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/longbowman-3.png",
            "hitpoints": 80,
            "weapons": [
              {
                "name": "Longbow",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 7
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_3_eng",
                "pbgid": 129379
              }
            ],
            "armor": [],
            "id": "longbowman-3"
          },
          "longbowman-4": {
            "name": "Elite Longbowman",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/longbowman-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Longbow",
                "type": "ranged",
                "damage": 9,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 7
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_4_eng",
                "pbgid": 129380
              }
            ],
            "armor": [],
            "id": "longbowman-4"
          }
        }
      },
      {
        "id": "man-at-arms",
        "name": "Man-at-Arms",
        "type": "unit",
        "civs": [
          "ab",
          "de",
          "en",
          "fr",
          "hr",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Infantry"
        ],
        "classes": [
          "heavy",
          "melee",
          "infantry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/man-at-arms-1.png",
        "description": "Tough infantry with good damage.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
        "variations": [
          {
            "id": "man-at-arms-1",
            "pbgid": 166403,
            "attribName": "unit_manatarms_1_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "man-at-arms-2",
            "pbgid": 166404,
            "attribName": "unit_manatarms_2_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "man-at-arms-2",
            "pbgid": 168040,
            "attribName": "unit_manatarms_2_hre",
            "civs": [
              "hr"
            ],
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 20,
              "total": 120,
              "popcap": 1,
              "time": 22.5
            },
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 10,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2",
                "pbgid": 129615
              },
              {
                "name": "Mace",
                "type": "melee",
                "damage": 10,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2_1handmace_hre",
                "pbgid": 171908
              },
              {
                "name": "Ax",
                "type": "melee",
                "damage": 10,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2_2handaxe_hre",
                "pbgid": 2020386
              },
              {
                "name": "Bludgeon",
                "type": "melee",
                "damage": 10,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2_2handmace_hre",
                "pbgid": 171902
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 166405,
            "attribName": "unit_manatarms_3_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 20,
              "total": 120,
              "popcap": 1,
              "time": 15
            },
            "producedBy": [
              "barracks",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 134727,
            "attribName": "unit_manatarms_3_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3",
                "pbgid": 109253
              },
              {
                "name": "Mace",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_1handmace_hre",
                "pbgid": 171909
              },
              {
                "name": "Ax",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_2handaxe_hre",
                "pbgid": 2020388
              },
              {
                "name": "Bludgeon",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_2handmace_hre",
                "pbgid": 171903
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 132282,
            "attribName": "unit_manatarms_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 136052,
            "attribName": "unit_manatarms_3_sul",
            "civs": [
              "de"
            ],
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_sul",
                "pbgid": 195285
              },
              {
                "name": "Kilij",
                "type": "melee",
                "damage": 15,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_improved_sul",
                "pbgid": 193005
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 199721,
            "attribName": "unit_manatarms_3_abb",
            "civs": [
              "ab"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_abb",
                "pbgid": 199547
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 129619,
            "attribName": "unit_manatarms_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_mon_3",
                "pbgid": 187730
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 2046442,
            "attribName": "unit_manatarms_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ],
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_ott",
                "pbgid": 2072734
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-3",
            "pbgid": 133465,
            "attribName": "unit_manatarms_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_rus",
                "pbgid": 133281
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 166406,
            "attribName": "unit_manatarms_4_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 20,
              "total": 120,
              "popcap": 1,
              "time": 15
            },
            "producedBy": [
              "barracks",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 134728,
            "attribName": "unit_manatarms_4_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4",
                "pbgid": 127823
              },
              {
                "name": "Mace",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_1handmace_hre",
                "pbgid": 171910
              },
              {
                "name": "Ax",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_2handaxe_hre",
                "pbgid": 2020390
              },
              {
                "name": "Bludgeon",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_2handmace_hre",
                "pbgid": 171904
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 132283,
            "attribName": "unit_manatarms_4_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 136053,
            "attribName": "unit_manatarms_4_sul",
            "civs": [
              "de"
            ],
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_sul",
                "pbgid": 195287
              },
              {
                "name": "Kilij",
                "type": "melee",
                "damage": 17,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_improved_sul",
                "pbgid": 193012
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 199722,
            "attribName": "unit_manatarms_4_abb",
            "civs": [
              "ab"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_abb",
                "pbgid": 199551
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 136255,
            "attribName": "unit_manatarms_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_mon_4",
                "pbgid": 187731
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 2046443,
            "attribName": "unit_manatarms_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ],
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_ott",
                "pbgid": 2072738
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          },
          {
            "id": "man-at-arms-4",
            "pbgid": 133466,
            "attribName": "unit_manatarms_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_rus",
                "pbgid": 133282
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ]
          }
        ],
        "baseId": "man-at-arms",
        "age": 1,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 20,
          "total": 120,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "barracks",
          "the-white-tower",
          "keep",
          "berkshire-palace"
        ],
        "hitpoints": 100,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "man-at-arms-1": {
            "name": "Vanguard Man-at-Arms",
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 8,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_1",
                "pbgid": 131040
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "man-at-arms-1"
          },
          "man-at-arms-2": {
            "name": "Early Man-at-Arms",
            "age": 2,
            "icon": "https://data.aoe4world.com/images/units/man-at-arms-2.png",
            "hitpoints": 120,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 10,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2",
                "pbgid": 129615
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "man-at-arms-2"
          },
          "man-at-arms-3": {
            "name": "Man-at-Arms",
            "age": 3,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 20,
              "total": 120,
              "popcap": 1,
              "time": 22.5
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/units/man-at-arms-3.png",
            "hitpoints": 155,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3",
                "pbgid": 109253
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "man-at-arms-3"
          },
          "man-at-arms-4": {
            "name": "Elite Man-at-Arms",
            "age": 4,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 20,
              "total": 120,
              "popcap": 1,
              "time": 22.5
            },
            "producedBy": [
              "barracks"
            ],
            "icon": "https://data.aoe4world.com/images/units/man-at-arms-4.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4",
                "pbgid": 127823
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 5
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "id": "man-at-arms-4"
          }
        }
      },
      {
        "id": "mangonel",
        "name": "Mangonel",
        "type": "unit",
        "civs": [
          "ab",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/mangonel-3.png",
        "description": "Fires multiple projectiles dealing damage in an area.\n+ Effective against massed units\n- Must be set up to fire",
        "variations": [
          {
            "id": "mangonel-3",
            "pbgid": 166407,
            "attribName": "unit_mangonel_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "siege-workshop",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 134729,
            "attribName": "unit_mangonel_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 132284,
            "attribName": "unit_mangonel_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 136054,
            "attribName": "unit_mangonel_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 199723,
            "attribName": "unit_mangonel_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 2589711,
            "attribName": "unit_mangonel_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 129969,
            "attribName": "unit_mangonel_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Mangonel",
                "type": "siege",
                "damage": 12,
                "speed": 6.875,
                "range": {
                  "min": 3,
                  "max": 9
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 24,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 24,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 2.25,
                  "reload": 4,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_mangonel_3_mon",
                "pbgid": 2033635
              },
              {
                "name": "Incendiary",
                "type": "fire",
                "damage": 15,
                "speed": 8.875,
                "range": {
                  "min": 2.5,
                  "max": 9
                },
                "modifiers": [
                  {
                    "property": "fireAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 2.25,
                  "reload": 6,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_mangonel_3_incendiary_mon",
                "pbgid": 136319
              }
            ]
          },
          {
            "id": "mangonel-3",
            "pbgid": 2046444,
            "attribName": "unit_mangonel_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ],
            "garrison": {
              "capacity": 1,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          },
          {
            "id": "mangonel-3",
            "pbgid": 133467,
            "attribName": "unit_mangonel_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Mangonel",
                "type": "siege",
                "damage": 12,
                "speed": 6.875,
                "range": {
                  "min": 3,
                  "max": 9
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 24,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 24,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 2.25,
                  "reload": 4,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_mangonel_3_rus",
                "pbgid": 133314
              },
              {
                "name": "Incendiary",
                "type": "fire",
                "damage": 15,
                "speed": 8.875,
                "range": {
                  "min": 2.5,
                  "max": 9
                },
                "modifiers": [
                  {
                    "property": "fireAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 2.25,
                  "reload": 6,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_mangonel_3_incendiary_rus",
                "pbgid": 133315
              }
            ]
          }
        ],
        "baseId": "mangonel",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 400,
          "stone": 0,
          "gold": 200,
          "total": 600,
          "popcap": 3,
          "time": 40
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 140,
        "weapons": [
          {
            "name": "Mangonel",
            "type": "siege",
            "damage": 12,
            "speed": 6.875,
            "range": {
              "min": 3,
              "max": 9
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 24,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "unit"
                    ]
                  ]
                },
                "effect": "change",
                "value": 24,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "ranged"
                    ]
                  ]
                },
                "effect": "change",
                "value": 6,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 2.25,
              "reload": 4,
              "setup": 0,
              "teardown": 1,
              "cooldown": 0
            },
            "burst": {
              "count": 3
            },
            "attribName": "weapon_mangonel_3",
            "pbgid": 127503
          },
          {
            "name": "Incendiary",
            "type": "fire",
            "damage": 15,
            "speed": 8.875,
            "range": {
              "min": 2.5,
              "max": 9
            },
            "modifiers": [
              {
                "property": "fireAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 2.25,
              "reload": 6,
              "setup": 0,
              "teardown": 1,
              "cooldown": 0
            },
            "burst": {
              "count": 3
            },
            "attribName": "weapon_mangonel_3_incendiary",
            "pbgid": 127724
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 20
          }
        ],
        "sight": {
          "line": 52,
          "height": 10
        },
        "movement": {
          "speed": 0.75
        },
        "shared": {}
      },
      {
        "id": "monk",
        "name": "Monk",
        "type": "unit",
        "civs": [
          "ch",
          "en",
          "fr"
        ],
        "unique": false,
        "displayClasses": [
          "Religious"
        ],
        "classes": [
          "religious"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/monk-3.png",
        "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
        "variations": [
          {
            "id": "monk-3",
            "pbgid": 166408,
            "attribName": "unit_monk_3_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "monk-3",
            "pbgid": 132286,
            "attribName": "unit_monk_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "monk-3",
            "pbgid": 142042,
            "attribName": "unit_monk_3_chi",
            "civs": [
              "ch"
            ]
          }
        ],
        "baseId": "monk",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 150,
          "total": 150,
          "popcap": 1,
          "time": 30
        },
        "producedBy": [
          "monastery"
        ],
        "hitpoints": 90,
        "weapons": [],
        "armor": [],
        "sight": {
          "line": 30,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {}
      },
      {
        "id": "ribauldequin",
        "name": "Ribauldequin",
        "type": "unit",
        "civs": [
          "en",
          "fr",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/ribauldequin-4.png",
        "description": "Five-barreled gunpowder weapon effective against massed units. Deals little damage to buildings.\n+ Can hit multiple targets in a single volley\n- Short range\n- Low ranged armor",
        "variations": [
          {
            "id": "ribauldequin-4",
            "pbgid": 166410,
            "attribName": "unit_ribauldequin_4_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "ribauldequin-4",
            "pbgid": 132291,
            "attribName": "unit_ribauldequin_4_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "siege-workshop"
            ]
          },
          {
            "id": "ribauldequin-4",
            "pbgid": 2046454,
            "attribName": "unit_ribauldequin_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ],
            "garrison": {
              "capacity": 1,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          }
        ],
        "baseId": "ribauldequin",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 300,
          "stone": 0,
          "gold": 600,
          "total": 900,
          "popcap": 3,
          "time": 45
        },
        "producedBy": [
          "the-white-tower",
          "siege-workshop",
          "keep",
          "berkshire-palace"
        ],
        "hitpoints": 350,
        "weapons": [
          {
            "name": "Ribauldequin",
            "type": "ranged",
            "damage": 42,
            "speed": 5.25,
            "range": {
              "min": 0,
              "max": 3.75
            },
            "modifiers": [],
            "durations": {
              "aim": 1.25,
              "windup": 0,
              "attack": 1,
              "winddown": 1,
              "reload": 2,
              "setup": 0.25,
              "teardown": 0.25,
              "cooldown": 0
            },
            "burst": {
              "count": 12
            },
            "attribName": "weapon_ribauldequin_4",
            "pbgid": 130925
          }
        ],
        "armor": [
          {
            "type": "melee",
            "value": 10
          }
        ],
        "sight": {
          "line": 45,
          "height": 10
        },
        "movement": {
          "speed": 0.875
        },
        "shared": {}
      },
      {
        "id": "scout",
        "name": "Scout",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Cavalry"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/scout-1.png",
        "description": "Lightly armed cavalry effective at exploring the world, hunting wildlife, and herding Sheep.\n+ Able to see into Stealth Forests\n+ Health regeneration\n+ High movement speed\n- Very weak in combat",
        "variations": [
          {
            "id": "scout-1",
            "pbgid": 166412,
            "attribName": "unit_scout_1_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "stable",
              "town-center",
              "kings-palace",
              "capital-town-center"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 134737,
            "attribName": "unit_scout_1_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "stable",
              "town-center",
              "palace-of-swabia",
              "capital-town-center"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 132268,
            "attribName": "unit_scout_1_fre",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 70,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 70,
              "popcap": 1,
              "time": 23
            },
            "producedBy": [
              "school-of-cavalry",
              "stable",
              "town-center",
              "capital-town-center"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 137274,
            "attribName": "unit_scout_1_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 136063,
            "attribName": "unit_scout_1_sul",
            "civs": [
              "de"
            ],
            "producedBy": [
              "stable",
              "town-center",
              "keep",
              "capital-town-center"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 199733,
            "attribName": "unit_scout_1_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 2236148,
            "attribName": "unit_scout_1_mal",
            "civs": [
              "ma"
            ],
            "description": "Lightly armed cavalry effective at exploring the world, hunting wildlife, and herding Sheep.\n+ Able to see into Stealth Forests\n+ Health regeneration\n- Very weak in combat",
            "unique": true,
            "costs": {
              "food": 90,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 90,
              "popcap": 1,
              "time": 15
            },
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 1,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_1_mal",
                "pbgid": 2074531
              }
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 129486,
            "attribName": "unit_scout_1_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 2046455,
            "attribName": "unit_scout_1_ott",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "scout-1",
            "pbgid": 133475,
            "attribName": "unit_scout_1_rus",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "hunting-cabin",
              "stable",
              "town-center",
              "capital-town-center"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 1,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_1_rus",
                "pbgid": 133285
              }
            ],
            "sight": {
              "line": 47,
              "height": 501
            }
          },
          {
            "id": "scout-2",
            "pbgid": 2073403,
            "attribName": "unit_scout_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "scout-3",
            "pbgid": 2073646,
            "attribName": "unit_scout_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "scout-4",
            "pbgid": 2073647,
            "attribName": "unit_scout_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "scout",
        "age": 1,
        "costs": {
          "food": 90,
          "wood": 0,
          "stone": 0,
          "gold": 0,
          "total": 90,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "stable",
          "town-center",
          "capital-town-center"
        ],
        "hitpoints": 110,
        "sight": {
          "line": 41,
          "height": 501
        },
        "movement": {
          "speed": 1.875
        },
        "shared": {
          "scout-1": {
            "name": "Scout",
            "unique": false,
            "costs": {
              "food": 70,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 70,
              "popcap": 1,
              "time": 25
            },
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 1,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_1",
                "pbgid": 120622
              }
            ],
            "armor": [],
            "movement": {
              "speed": 1.625
            },
            "id": "scout-1"
          },
          "scout-2": {
            "name": "Warrior Scout",
            "age": 2,
            "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased move speed\n+ Able to see into Stealth Forests\n+ Health regeneration\n- Weak in combat",
            "icon": "https://data.aoe4world.com/images/units/warrior-scout-2.png",
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 7,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_2_mal",
                "pbgid": 2074532
              }
            ],
            "armor": [],
            "id": "scout-2"
          },
          "scout-3": {
            "name": "Veteran Warrior Scout",
            "age": 3,
            "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak in combat",
            "icon": "https://data.aoe4world.com/images/units/warrior-scout-3.png",
            "hitpoints": 130,
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 9,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_3_mal",
                "pbgid": 2074533
              }
            ],
            "armor": [],
            "id": "scout-3"
          },
          "scout-4": {
            "name": "Elite Warrior Scout",
            "age": 4,
            "description": "Fast cavalry effective at raiding and fighting ranged units.\n+ Bonus damage vs ranged\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak vs melee units",
            "icon": "https://data.aoe4world.com/images/units/warrior-scout-4.png",
            "hitpoints": 155,
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 11,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_4_mal",
                "pbgid": 2074534
              }
            ],
            "armor": [],
            "id": "scout-4"
          }
        }
      },
      {
        "id": "siege-tower",
        "name": "Siege Tower",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/siege-tower-3.png",
        "description": "Tall infantry transport with no combat capability. Allows garrisoned infantry to be unloaded directly onto Stone Walls.\n+ High ranged armor\n- Cannot attack\n- Slow movement speed",
        "variations": [
          {
            "id": "siege-tower-1",
            "pbgid": 199685,
            "attribName": "unit_siege_tower_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 128524,
            "attribName": "unit_siege_tower_3",
            "civs": [
              "en"
            ],
            "producedBy": [
              "wynguard-army",
              "wynguard-raiders",
              "wynguard-rangers",
              "wynguard-footmen"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 134700,
            "attribName": "unit_siege_tower_3_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "spearman",
              "man-at-arms",
              "landsknecht",
              "archer",
              "crossbowman",
              "handcannoneer"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 132290,
            "attribName": "unit_siege_tower_3_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "spearman",
              "man-at-arms",
              "archer",
              "arbaletrier",
              "handcannoneer"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 137529,
            "attribName": "unit_siege_tower_3_chi",
            "civs": [
              "ch"
            ],
            "producedBy": [
              "spearman",
              "palace-guard",
              "archer",
              "crossbowman",
              "grenadier",
              "zhuge-nu",
              "handcannoneer"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 135953,
            "attribName": "unit_siege_tower_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 2350796,
            "attribName": "unit_siege_tower_3_mal",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "donso",
              "musofadi-warrior",
              "archer",
              "javelin-thrower",
              "musofadi-gunner"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 129972,
            "attribName": "unit_siege_tower_3_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 2034654,
            "attribName": "unit_siege_tower_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "spearman",
              "man-at-arms",
              "janissary",
              "archer",
              "crossbowman"
            ]
          },
          {
            "id": "siege-tower-2",
            "pbgid": 133340,
            "attribName": "unit_siege_tower_3_rus",
            "civs": [
              "ru"
            ],
            "producedBy": [
              "spearman",
              "man-at-arms",
              "archer",
              "crossbowman",
              "streltsy",
              "militia"
            ]
          }
        ],
        "baseId": "siege-tower",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 125,
          "stone": 0,
          "gold": 0,
          "total": 125,
          "popcap": 1,
          "time": 45
        },
        "producedBy": [
          "spearman",
          "man-at-arms",
          "archer",
          "crossbowman",
          "handcannoneer"
        ],
        "hitpoints": 480,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 0.625
        },
        "garrison": {
          "capacity": 8,
          "classes": [
            "infantry",
            "villager",
            "infantry ranged",
            "monk"
          ]
        },
        "shared": {
          "siege-tower-1": {
            "name": "Siege Tower",
            "weapons": [],
            "armor": [
              {
                "type": "ranged",
                "value": 8
              }
            ],
            "id": "siege-tower-1"
          },
          "siege-tower-2": {
            "name": "Siege Tower",
            "age": 2,
            "weapons": [],
            "armor": [
              {
                "type": "ranged",
                "value": 8
              }
            ],
            "id": "siege-tower-2"
          }
        }
      },
      {
        "id": "spearman",
        "name": "Spearman",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Light Melee Infantry"
        ],
        "classes": [
          "light",
          "melee",
          "infantry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/spearman-1.png",
        "description": "Infantry best used against mounted units.\n+ Anti-cavalry specialist\n- Weak against armored infantry\n- Countered by Archers",
        "variations": [
          {
            "id": "spearman-1",
            "pbgid": 134743,
            "attribName": "unit_spearman_1_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 132299,
            "attribName": "unit_spearman_1_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 143708,
            "attribName": "unit_spearman_1_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 136069,
            "attribName": "unit_spearman_1_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 199736,
            "attribName": "unit_spearman_1_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 136239,
            "attribName": "unit_spearman_1_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 7,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 17,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_1",
                "pbgid": 106762
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 2046458,
            "attribName": "unit_spearman_1_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ]
          },
          {
            "id": "spearman-1",
            "pbgid": 133481,
            "attribName": "unit_spearman_1_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 7,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 17,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_1_rus",
                "pbgid": 133287
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 166417,
            "attribName": "unit_spearman_2_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "barracks",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 134745,
            "attribName": "unit_spearman_2_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 132301,
            "attribName": "unit_spearman_2_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 143710,
            "attribName": "unit_spearman_2_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 136071,
            "attribName": "unit_spearman_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 199738,
            "attribName": "unit_spearman_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 129597,
            "attribName": "unit_spearman_2_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 8,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_2",
                "pbgid": 127825
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 2046460,
            "attribName": "unit_spearman_2_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ]
          },
          {
            "id": "spearman-2",
            "pbgid": 133483,
            "attribName": "unit_spearman_2_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 8,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_2_rus",
                "pbgid": 133288
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 166419,
            "attribName": "unit_spearman_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "barracks",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 134747,
            "attribName": "unit_spearman_3_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 132303,
            "attribName": "unit_spearman_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 143712,
            "attribName": "unit_spearman_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 136073,
            "attribName": "unit_spearman_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 199740,
            "attribName": "unit_spearman_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 129598,
            "attribName": "unit_spearman_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 23,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_3",
                "pbgid": 127826
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 2046462,
            "attribName": "unit_spearman_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ]
          },
          {
            "id": "spearman-3",
            "pbgid": 133485,
            "attribName": "unit_spearman_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 23,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_3_rus",
                "pbgid": 133289
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 166421,
            "attribName": "unit_spearman_4_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "barracks",
              "the-white-tower",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 134749,
            "attribName": "unit_spearman_4_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "barracks",
              "burgrave-palace"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 132305,
            "attribName": "unit_spearman_4_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 143714,
            "attribName": "unit_spearman_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 136075,
            "attribName": "unit_spearman_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 199742,
            "attribName": "unit_spearman_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 136261,
            "attribName": "unit_spearman_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 28,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_4",
                "pbgid": 127827
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_mon",
                "pbgid": 135193
              }
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 2046464,
            "attribName": "unit_spearman_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "barracks",
              "military-school"
            ]
          },
          {
            "id": "spearman-4",
            "pbgid": 133487,
            "attribName": "unit_spearman_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 28,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_4_rus",
                "pbgid": 133290
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ]
          }
        ],
        "baseId": "spearman",
        "age": 1,
        "costs": {
          "food": 60,
          "wood": 20,
          "stone": 0,
          "gold": 0,
          "total": 80,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "barracks"
        ],
        "hitpoints": 80,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {
          "spearman-1": {
            "name": "Spearman",
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 7,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 17,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_1",
                "pbgid": 106762
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "spearman-1"
          },
          "spearman-2": {
            "name": "Hardened Spearman",
            "age": 2,
            "icon": "https://data.aoe4world.com/images/units/spearman-2.png",
            "hitpoints": 90,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 8,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_2",
                "pbgid": 127825
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "spearman-2"
          },
          "spearman-3": {
            "name": "Veteran Spearman",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/spearman-3.png",
            "hitpoints": 110,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 23,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_3",
                "pbgid": 127826
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "spearman-3"
          },
          "spearman-4": {
            "name": "Elite Spearman",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/spearman-4.png",
            "hitpoints": 130,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 28,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_4",
                "pbgid": 127827
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "spearman-4"
          }
        }
      },
      {
        "id": "springald",
        "name": "Springald",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/springald-3.png",
        "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings",
        "variations": [
          {
            "id": "springald-3",
            "pbgid": 166411,
            "attribName": "unit_springald_3_eng",
            "civs": [
              "en"
            ],
            "producedBy": [
              "the-white-tower",
              "siege-workshop",
              "keep",
              "berkshire-palace"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 134735,
            "attribName": "unit_springald_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 132292,
            "attribName": "unit_springald_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 142047,
            "attribName": "unit_springald_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 136061,
            "attribName": "unit_springald_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 199743,
            "attribName": "unit_springald_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 2618732,
            "attribName": "unit_springald_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 129971,
            "attribName": "unit_springald_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Springald",
                "type": "ranged",
                "damage": 30,
                "speed": 4.125,
                "range": {
                  "min": 1.25,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_springald_3_mon",
                "pbgid": 2033638
              }
            ]
          },
          {
            "id": "springald-3",
            "pbgid": 2046465,
            "attribName": "unit_springald_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ],
            "garrison": {
              "capacity": 1,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          },
          {
            "id": "springald-3",
            "pbgid": 133473,
            "attribName": "unit_springald_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Springald",
                "type": "ranged",
                "damage": 30,
                "speed": 4.125,
                "range": {
                  "min": 1.25,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_springald_3_rus",
                "pbgid": 194215
              }
            ]
          }
        ],
        "baseId": "springald",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 250,
          "stone": 0,
          "gold": 250,
          "total": 500,
          "popcap": 3,
          "time": 30
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 125,
        "weapons": [
          {
            "name": "Springald",
            "type": "ranged",
            "damage": 30,
            "speed": 4.125,
            "range": {
              "min": 1.25,
              "max": 10
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 70,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "unit"
                    ]
                  ]
                },
                "effect": "change",
                "value": 70,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0.25,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 2.75,
              "setup": 0,
              "teardown": 0.25,
              "cooldown": 0
            },
            "attribName": "weapon_springald_3",
            "pbgid": 190303
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 20
          }
        ],
        "sight": {
          "line": 56,
          "height": 10
        },
        "movement": {
          "speed": 0.875
        },
        "shared": {}
      },
      {
        "id": "trade-ship",
        "name": "Trade Ship",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Worker",
          "Ship"
        ],
        "classes": [
          "worker",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/trade-ship-3.png",
        "description": "Trade Ships generate Gold when assigned to a trade route with a Coastal Trade Post or another Dock. The distance between the trade target and Market determines the amount of Gold. Once assigned to trade, the Trade Ship will make repeated trips between its Home Dock and the trade target. You can assign a new Home Dock if you wish to.\n- No combat",
        "variations": [
          {
            "id": "trade-ship-2",
            "pbgid": 196681,
            "attribName": "unit_naval_trade_ship_3_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 90,
              "wood": 90,
              "food": 0,
              "stone": 0,
              "total": 180,
              "time": 30
            }
          },
          {
            "id": "trade-ship-2",
            "pbgid": 196684,
            "attribName": "unit_naval_trade_ship_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "trade-ship-2",
            "pbgid": 196682,
            "attribName": "unit_naval_trade_ship_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "trade-ship-2",
            "pbgid": 196680,
            "attribName": "unit_naval_trade_ship_3_chi",
            "civs": [
              "ch"
            ],
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 100,
              "total": 200,
              "popcap": 2,
              "time": 25
            }
          },
          {
            "id": "trade-ship-2",
            "pbgid": 196687,
            "attribName": "unit_naval_trade_ship_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "trade-ship-2",
            "pbgid": 199729,
            "attribName": "unit_naval_trade_ship_3_abb",
            "civs": [
              "ab"
            ],
            "weapons": [
              {
                "name": "Archer",
                "type": "ranged",
                "damage": 12,
                "speed": 2.75,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_archer",
                "pbgid": 193537
              }
            ]
          },
          {
            "id": "trade-ship-2",
            "pbgid": 2226732,
            "attribName": "unit_naval_trade_ship_3_mal",
            "civs": [
              "ma"
            ],
            "description": "Trade Ships generate Gold when assigned to a trade route with a Coastal Trade Post or a Market near the shore. The distance between the trade target and Market determines the amount of Gold. Once assigned to trade, the Trade Ship will make repeated trips between its Home Dock and the trade target. You can assign a new Home Dock if you wish to.\n- No combat"
          },
          {
            "id": "trade-ship-2",
            "pbgid": 196685,
            "attribName": "unit_naval_trade_ship_3_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "trade-ship-2",
            "pbgid": 2110038,
            "attribName": "unit_naval_trade_ship_3_ott",
            "civs": [
              "ot"
            ],
            "movement": {
              "speed": 1.65
            }
          }
        ],
        "baseId": "trade-ship",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 100,
          "total": 200,
          "popcap": 2,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 225,
        "weapons": [],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 1.5
        },
        "shared": {}
      },
      {
        "id": "trader",
        "name": "Trader",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Worker",
          "Cavalry"
        ],
        "classes": [
          "worker",
          "cavalry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/trader-1.png",
        "description": "Traders generate Gold when assigned to trade with a Trade Post or another player’s Market. The distance between the trade target and Market determines the amount of Gold. Once assigned to trade, the Trader makes repeated trips between its Home Market and the trade target. You can assign a new Home Market if you wish to.",
        "variations": [
          {
            "id": "trader-1",
            "pbgid": 166422,
            "attribName": "unit_trade_cart_eng",
            "civs": [
              "en"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 134750,
            "attribName": "unit_trade_cart_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 132306,
            "attribName": "unit_trade_cart_fre",
            "civs": [
              "fr"
            ],
            "producedBy": [
              "chamber-of-commerce",
              "market"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 143716,
            "attribName": "unit_trade_cart_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 136076,
            "attribName": "unit_trade_cart_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 199744,
            "attribName": "unit_trade_cart_abb",
            "civs": [
              "ab"
            ],
            "costs": {
              "food": 0,
              "wood": 40,
              "stone": 0,
              "gold": 40,
              "total": 80,
              "popcap": 1,
              "time": 25
            }
          },
          {
            "id": "trader-1",
            "pbgid": 2201796,
            "attribName": "unit_trade_cart_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 129600,
            "attribName": "unit_trade_cart_mon",
            "civs": [
              "mo"
            ],
            "producedBy": [
              "the-silver-tree",
              "market"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 2046466,
            "attribName": "unit_trade_cart_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "sultanhani-trade-network",
              "market"
            ]
          },
          {
            "id": "trader-1",
            "pbgid": 133488,
            "attribName": "unit_trade_cart_rus",
            "civs": [
              "ru"
            ]
          }
        ],
        "baseId": "trader",
        "age": 1,
        "costs": {
          "food": 0,
          "wood": 60,
          "stone": 0,
          "gold": 60,
          "total": 120,
          "popcap": 1,
          "time": 25
        },
        "producedBy": [
          "market"
        ],
        "hitpoints": 90,
        "weapons": [],
        "armor": [],
        "sight": {
          "line": 35,
          "height": 10
        },
        "movement": {
          "speed": 1
        },
        "shared": {}
      },
      {
        "id": "transport-ship",
        "name": "Transport Ship",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Ship"
        ],
        "classes": [
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/transport-ship-2.png",
        "description": "Large oared vessel able to transport land units across water.\n+ Can be garrisoned by any unit\n+ Uses sight range of units in garrison\n- No combat",
        "variations": [
          {
            "id": "transport-ship-2",
            "pbgid": 193118,
            "attribName": "unit_naval_transport_ship_2_eng",
            "civs": [
              "en"
            ],
            "costs": {
              "gold": 0,
              "wood": 90,
              "food": 0,
              "stone": 0,
              "total": 90,
              "time": 20
            },
            "movement": {
              "speed": 1.625
            }
          },
          {
            "id": "transport-ship-2",
            "pbgid": 193128,
            "attribName": "unit_naval_transport_ship_2_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "transport-ship-2",
            "pbgid": 193123,
            "attribName": "unit_naval_transport_ship_2_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "transport-ship-2",
            "pbgid": 193113,
            "attribName": "unit_naval_transport_ship_2_chi",
            "civs": [
              "ch"
            ],
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 0,
              "total": 100,
              "popcap": 2,
              "time": 17
            }
          },
          {
            "id": "transport-ship-2",
            "pbgid": 193143,
            "attribName": "unit_naval_transport_ship_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "transport-ship-2",
            "pbgid": 199730,
            "attribName": "unit_naval_transport_ship_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "transport-ship-2",
            "pbgid": 2100725,
            "attribName": "unit_naval_transport_ship_2_mal",
            "civs": [
              "ma"
            ],
            "description": "Large oared vessel able to transport land units across water.\n+ Can be garrisoned by any unit\n+ Attacks with javelins for each unit garrisoned\n+ Uses sight range of units in garrison",
            "weapons": [
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 7,
                "speed": 2.75,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_javelin",
                "pbgid": 2100000
              }
            ]
          },
          {
            "id": "transport-ship-2",
            "pbgid": 193133,
            "attribName": "unit_naval_transport_ship_2_mon",
            "civs": [
              "mo"
            ],
            "hitpoints": 600,
            "movement": {
              "speed": 1.725
            }
          },
          {
            "id": "transport-ship-2",
            "pbgid": 2046452,
            "attribName": "unit_naval_transport_ship_2_ott",
            "civs": [
              "ot"
            ],
            "movement": {
              "speed": 1.65
            },
            "garrison": {
              "capacity": 16,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "siege",
                "monk",
                "khan",
                "cavalry",
                "trader"
              ]
            }
          }
        ],
        "baseId": "transport-ship",
        "age": 2,
        "costs": {
          "food": 0,
          "wood": 100,
          "stone": 0,
          "gold": 0,
          "total": 100,
          "popcap": 2,
          "time": 20
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 400,
        "weapons": [],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 1.5
        },
        "garrison": {
          "capacity": 16,
          "classes": [
            "infantry",
            "villager",
            "infantry ranged",
            "siege",
            "monk",
            "khan",
            "cavalry"
          ]
        },
        "shared": {}
      },
      {
        "id": "villager",
        "name": "Villager",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "en",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Worker"
        ],
        "classes": [
          "worker"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/villager-1.png",
        "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units.\n- Weak in combat",
        "variations": [
          {
            "id": "villager-1",
            "pbgid": 166425,
            "attribName": "unit_villager_1_eng",
            "civs": [
              "en"
            ],
            "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units.\n+ Uses a bow to attack\n- Weak in combat",
            "producedBy": [
              "town-center",
              "kings-palace",
              "capital-town-center"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 3.375,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 2
                },
                "attribName": "weapon_villager_militarized_2_eng",
                "pbgid": 128811
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1
                },
                "modifiers": [
                  {
                    "property": "fireAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 2,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_weak",
                "pbgid": 123522
              }
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 134753,
            "attribName": "unit_villager_1_hre",
            "civs": [
              "hr"
            ],
            "producedBy": [
              "town-center",
              "palace-of-swabia",
              "capital-town-center"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 132227,
            "attribName": "unit_villager_1_fre",
            "civs": [
              "fr"
            ],
            "costs": {
              "food": 50,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 50,
              "popcap": 1,
              "time": 19
            }
          },
          {
            "id": "villager-1",
            "pbgid": 137283,
            "attribName": "unit_villager_1_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 136078,
            "attribName": "unit_villager_1_sul",
            "civs": [
              "de"
            ],
            "producedBy": [
              "town-center",
              "keep",
              "capital-town-center"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 199747,
            "attribName": "unit_villager_1_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 2359463,
            "attribName": "unit_villager_1_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 129272,
            "attribName": "unit_villager_1_mon",
            "civs": [
              "mo"
            ],
            "description": "Gathers Wood, Food, and Gold. Builds and repairs buildings and can repair siege engines and naval units.\n- Weak in combat\n- Unable to gather Stone (build an Ovoo to gather Stone)"
          },
          {
            "id": "villager-1",
            "pbgid": 2046469,
            "attribName": "unit_villager_1_ott",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "villager-1",
            "pbgid": 133491,
            "attribName": "unit_villager_1_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1
                },
                "modifiers": [
                  {
                    "property": "fireAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 2,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_weak_rus",
                "pbgid": 133326
              },
              {
                "name": "Knife",
                "type": "melee",
                "damage": 6,
                "speed": 3.875,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 1,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 2
                },
                "attribName": "weapon_villager_1",
                "pbgid": 120606
              }
            ]
          }
        ],
        "baseId": "villager",
        "age": 1,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 0,
          "total": 50,
          "popcap": 1,
          "time": 20
        },
        "producedBy": [
          "town-center",
          "capital-town-center"
        ],
        "hitpoints": 50,
        "weapons": [
          {
            "name": "Torch",
            "type": "fire",
            "damage": 10,
            "speed": 2.125,
            "range": {
              "min": 0,
              "max": 1
            },
            "modifiers": [
              {
                "property": "fireAttack",
                "target": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 2,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0.75,
              "attack": 0.125,
              "winddown": 0,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 1.25
            },
            "attribName": "weapon_torch_weak",
            "pbgid": 123522
          },
          {
            "name": "Knife",
            "type": "melee",
            "damage": 6,
            "speed": 3.875,
            "range": {
              "min": 0,
              "max": 0.2875
            },
            "modifiers": [],
            "durations": {
              "aim": 0,
              "windup": 0.75,
              "attack": 0.125,
              "winddown": 1,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 2
            },
            "attribName": "weapon_villager_1",
            "pbgid": 120606
          }
        ],
        "armor": [],
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {}
      },
      {
        "id": "wynguard-army",
        "name": "Wynguard Army",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "Mixed Force Army"
        ],
        "classes": [
          "mixed",
          "force",
          "army"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/wynguard-army-1.png",
        "description": "Produces an army including two Spearmen, two Crossbowmen, and a Trebuchet.",
        "variations": [
          {
            "id": "wynguard-army-1",
            "baseId": "wynguard-army",
            "type": "unit",
            "name": "Wynguard Army",
            "pbgid": 202514,
            "attribName": "unit_wynguard_army_eng",
            "age": 1,
            "civs": [
              "en"
            ],
            "description": "Produces an army including two Spearmen, two Crossbowmen, and a Trebuchet.",
            "classes": [
              "mixed",
              "force",
              "army"
            ],
            "displayClasses": [
              "Mixed Force Army"
            ],
            "unique": false,
            "costs": {
              "food": 100,
              "wood": 100,
              "stone": 0,
              "gold": 200,
              "total": 400,
              "popcap": 7,
              "time": 75
            },
            "producedBy": [
              "wynguard-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/wynguard-army-1.png",
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 0,
              "height": 0
            },
            "movement": {
              "speed": null
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "wynguard-footman",
        "name": "Wynguard Footman",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Infantry"
        ],
        "classes": [
          "heavy",
          "melee",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/wynguard-footman-4.png",
        "description": "Specialized man at arms with high health and pierce armor.\n- Slow movement\n- Countered by Crossbowmen",
        "variations": [
          {
            "id": "wynguard-footman-4",
            "baseId": "wynguard-footman",
            "type": "unit",
            "name": "Wynguard Footman",
            "pbgid": 2122350,
            "attribName": "unit_footman_wynguard_4_eng",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Specialized man at arms with high health and pierce armor.\n- Slow movement\n- Countered by Crossbowmen",
            "classes": [
              "heavy",
              "melee",
              "infantry"
            ],
            "displayClasses": [
              "Heavy Melee Infantry"
            ],
            "unique": false,
            "costs": {
              "food": 60,
              "wood": 0,
              "stone": 0,
              "gold": 40,
              "total": 100,
              "popcap": 1,
              "time": 35
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/wynguard-footman-4.png",
            "hitpoints": 280,
            "weapons": [
              {
                "name": "Ax",
                "type": "melee",
                "damage": 20,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.25
                },
                "attribName": "weapon_wynguard_footman_eng_4",
                "pbgid": 2122348
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "wynguard-footmen",
        "name": "Wynguard Footmen",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "Mixed Force Army"
        ],
        "classes": [
          "mixed",
          "force",
          "army"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/wynguard-footmen-1.png",
        "description": "Produces an army of 6 Wynguard Footmen.",
        "variations": [
          {
            "id": "wynguard-footmen-1",
            "baseId": "wynguard-footmen",
            "type": "unit",
            "name": "Wynguard Footmen",
            "pbgid": 2122352,
            "attribName": "unit_wynguard_footman_eng",
            "age": 1,
            "civs": [
              "en"
            ],
            "description": "Produces an army of 6 Wynguard Footmen.",
            "classes": [
              "mixed",
              "force",
              "army"
            ],
            "displayClasses": [
              "Mixed Force Army"
            ],
            "unique": false,
            "costs": {
              "food": 200,
              "wood": 0,
              "stone": 0,
              "gold": 500,
              "total": 700,
              "popcap": 6,
              "time": 50
            },
            "producedBy": [
              "wynguard-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/wynguard-footmen-1.png",
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 0,
              "height": 0
            },
            "movement": {
              "speed": null
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "wynguard-raiders",
        "name": "Wynguard Raiders",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "Mixed Force Army"
        ],
        "classes": [
          "mixed",
          "force",
          "army"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/wynguard-raiders-1.png",
        "description": "Produces an army of 3 Horsemen and 3 Knights.",
        "variations": [
          {
            "id": "wynguard-raiders-1",
            "baseId": "wynguard-raiders",
            "type": "unit",
            "name": "Wynguard Raiders",
            "pbgid": 2075742,
            "attribName": "unit_wynguard_raiders_eng",
            "age": 1,
            "civs": [
              "en"
            ],
            "description": "Produces an army of 3 Horsemen and 3 Knights.",
            "classes": [
              "mixed",
              "force",
              "army"
            ],
            "displayClasses": [
              "Mixed Force Army"
            ],
            "unique": false,
            "costs": {
              "food": 650,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "total": 850,
              "popcap": 6,
              "time": 25
            },
            "producedBy": [
              "wynguard-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/wynguard-raiders-1.png",
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 0,
              "height": 0
            },
            "movement": {
              "speed": null
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "wynguard-ranger",
        "name": "Wynguard Ranger",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/wynguard-ranger-4.png",
        "description": "Master longbowmen with increased range and damage, good vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
        "variations": [
          {
            "id": "wynguard-ranger-4",
            "baseId": "wynguard-ranger",
            "type": "unit",
            "name": "Wynguard Ranger",
            "pbgid": 2122538,
            "attribName": "unit_ranger_wynguard_4_eng",
            "age": 4,
            "civs": [
              "en"
            ],
            "description": "Master longbowmen with increased range and damage, good vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
            "classes": [
              "light",
              "ranged",
              "infantry"
            ],
            "displayClasses": [
              "Light Ranged Infantry"
            ],
            "unique": true,
            "costs": {
              "food": 40,
              "wood": 50,
              "stone": 0,
              "gold": 0,
              "total": 90,
              "popcap": 1,
              "time": 15
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/wynguard-ranger-4.png",
            "hitpoints": 125,
            "weapons": [
              {
                "name": "Longbow",
                "type": "ranged",
                "damage": 12,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 9
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 12,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_wynguard_ranger_eng_4",
                "pbgid": 2122533
              }
            ],
            "armor": [],
            "sight": {
              "line": 45,
              "height": 501
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "wynguard-rangers",
        "name": "Wynguard Rangers",
        "type": "unit",
        "civs": [
          "en"
        ],
        "unique": false,
        "displayClasses": [
          "Mixed Force Army"
        ],
        "classes": [
          "mixed",
          "force",
          "army"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/wynguard-rangers-1.png",
        "description": "Produces an army of 6 Wynguard Rangers.",
        "variations": [
          {
            "id": "wynguard-rangers-1",
            "baseId": "wynguard-rangers",
            "type": "unit",
            "name": "Wynguard Rangers",
            "pbgid": 2075743,
            "attribName": "unit_wynguard_rangers_eng",
            "age": 1,
            "civs": [
              "en"
            ],
            "description": "Produces an army of 6 Wynguard Rangers.",
            "classes": [
              "mixed",
              "force",
              "army"
            ],
            "displayClasses": [
              "Mixed Force Army"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 450,
              "stone": 0,
              "gold": 250,
              "total": 700,
              "popcap": 6,
              "time": 50
            },
            "producedBy": [
              "wynguard-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/wynguard-rangers-1.png",
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 0,
              "height": 0
            },
            "movement": {
              "speed": null
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "archer",
        "name": "Archer",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "fr",
          "hr",
          "ma",
          "mo",
          "ot",
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/archer-2.png",
        "description": "Cheap ranged infantry with good damage vs. unarmored targets.\n+ High rate of fire\n- Weak against armored targets\n- Countered by Horsemen",
        "variations": [
          {
            "id": "archer-2",
            "pbgid": 134713,
            "attribName": "unit_archer_2_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 132269,
            "attribName": "unit_archer_2_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 137526,
            "attribName": "unit_archer_2_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 136040,
            "attribName": "unit_archer_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 199706,
            "attribName": "unit_archer_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 2687089,
            "attribName": "unit_archer_2_mal",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "archery-range",
              "farimba-garrison"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_2",
                "pbgid": 106763
              },
              {
                "name": "Poisoned Arrows",
                "type": "ranged",
                "damage": 5,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_poisoned_2_mal",
                "pbgid": 2064939
              }
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 129582,
            "attribName": "unit_archer_2_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_2_mon",
                "pbgid": 2033622
              }
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 2046427,
            "attribName": "unit_archer_2_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "archery-range"
            ]
          },
          {
            "id": "archer-2",
            "pbgid": 133452,
            "attribName": "unit_archer_2_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_2_rus",
                "pbgid": 133297
              }
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 134714,
            "attribName": "unit_archer_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 132270,
            "attribName": "unit_archer_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 137553,
            "attribName": "unit_archer_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 136041,
            "attribName": "unit_archer_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 199707,
            "attribName": "unit_archer_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 2284776,
            "attribName": "unit_archer_3_mal",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "archery-range",
              "farimba-garrison"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 7,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_3",
                "pbgid": 127828
              },
              {
                "name": "Poisoned Arrows",
                "type": "ranged",
                "damage": 7,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_poisoned_3_mal",
                "pbgid": 2064958
              }
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 129583,
            "attribName": "unit_archer_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 7,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_3_mon",
                "pbgid": 2033623
              }
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 2046428,
            "attribName": "unit_archer_3_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "archery-range"
            ]
          },
          {
            "id": "archer-3",
            "pbgid": 133453,
            "attribName": "unit_archer_3_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 7,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_3_rus",
                "pbgid": 133298
              }
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 134715,
            "attribName": "unit_archer_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 132271,
            "attribName": "unit_archer_4_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 137554,
            "attribName": "unit_archer_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 136042,
            "attribName": "unit_archer_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 199708,
            "attribName": "unit_archer_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 2678898,
            "attribName": "unit_archer_4_mal",
            "civs": [
              "ma"
            ],
            "producedBy": [
              "archery-range",
              "farimba-garrison"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_4",
                "pbgid": 127829
              },
              {
                "name": "Poisoned Arrows",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_poisoned_4_mal",
                "pbgid": 2064959
              }
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 136247,
            "attribName": "unit_archer_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_4_mon",
                "pbgid": 2033624
              }
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 2046429,
            "attribName": "unit_archer_4_ott",
            "civs": [
              "ot"
            ],
            "producedBy": [
              "military-school",
              "archery-range"
            ]
          },
          {
            "id": "archer-4",
            "pbgid": 133454,
            "attribName": "unit_archer_4_rus",
            "civs": [
              "ru"
            ],
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_4_rus",
                "pbgid": 133299
              }
            ]
          }
        ],
        "baseId": "archer",
        "age": 2,
        "costs": {
          "food": 30,
          "wood": 50,
          "stone": 0,
          "gold": 0,
          "total": 80,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 70,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {
          "archer-2": {
            "name": "Archer",
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_2",
                "pbgid": 106763
              }
            ],
            "armor": [],
            "id": "archer-2"
          },
          "archer-3": {
            "name": "Veteran Archer",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/archer-3.png",
            "hitpoints": 80,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 7,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_3",
                "pbgid": 127828
              }
            ],
            "armor": [],
            "id": "archer-3"
          },
          "archer-4": {
            "name": "Elite Archer",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/archer-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_archer_4",
                "pbgid": 127829
              }
            ],
            "armor": [],
            "id": "archer-4"
          }
        }
      },
      {
        "id": "culverin",
        "name": "Culverin",
        "type": "unit",
        "civs": [
          "ab",
          "hr",
          "ma"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/culverin-4.png",
        "description": "Long-range cannon made for destroying siege engines.\n+ Bonus damage to siege weapons\n+ Attacks without having to set up\n- Low damage to buildings",
        "variations": [
          {
            "id": "culverin-4",
            "pbgid": 165170,
            "attribName": "unit_culverin_4_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "culverin-4",
            "pbgid": 199713,
            "attribName": "unit_culverin_4_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "culverin-4",
            "pbgid": 2278976,
            "attribName": "unit_culverin_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "culverin",
        "age": 4,
        "costs": {
          "food": 0,
          "wood": 400,
          "stone": 0,
          "gold": 600,
          "total": 1000,
          "popcap": 3,
          "time": 45
        },
        "producedBy": [
          "siege-workshop"
        ],
        "hitpoints": 220,
        "weapons": [
          {
            "name": "Cannon",
            "type": "ranged",
            "damage": 85,
            "speed": 4.375,
            "range": {
              "min": 1.25,
              "max": 12
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "siege"
                    ]
                  ]
                },
                "effect": "change",
                "value": 100,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "unit"
                    ]
                  ]
                },
                "effect": "change",
                "value": 100,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0.75,
              "reload": 3,
              "setup": 0.25,
              "teardown": 0.25,
              "cooldown": 0
            },
            "attribName": "weapon_culverin_4",
            "pbgid": 165122
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 20
          }
        ],
        "sight": {
          "line": 64,
          "height": 10
        },
        "movement": {
          "speed": 0.625
        },
        "shared": {}
      },
      {
        "id": "landsknecht",
        "name": "Landsknecht",
        "type": "unit",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Infantry"
        ],
        "classes": [
          "light",
          "melee",
          "infantry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/landsknecht-3.png",
        "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers",
        "variations": [
          {
            "id": "landsknecht-3",
            "pbgid": 136941,
            "attribName": "unit_landsknecht_3_hre",
            "civs": [
              "hr"
            ]
          },
          {
            "id": "landsknecht-4",
            "pbgid": 168401,
            "attribName": "unit_landsknecht_4_hre",
            "civs": [
              "hr"
            ]
          }
        ],
        "baseId": "landsknecht",
        "age": 3,
        "costs": {
          "food": 60,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "total": 160,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "barracks",
          "burgrave-palace"
        ],
        "hitpoints": 80,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {
          "landsknecht-3": {
            "name": "Landsknecht",
            "weapons": [
              {
                "name": "Zweihander",
                "type": "melee",
                "damage": 17,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_landsknecht_3_hre",
                "pbgid": 136942
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "landsknecht-3"
          },
          "landsknecht-4": {
            "name": "Elite Landsknecht",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/landsknecht-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Zweihander",
                "type": "melee",
                "damage": 20,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_landsknecht_4_hre",
                "pbgid": 184609
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "landsknecht-4"
          }
        }
      },
      {
        "id": "prelate",
        "name": "Prelate",
        "type": "unit",
        "civs": [
          "hr"
        ],
        "unique": true,
        "displayClasses": [
          "Religious"
        ],
        "classes": [
          "religious"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/prelate-1.png",
        "description": "Support unit with no combat capability. Automatically inspires Villagers to greatly improve their gather rate. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
        "variations": [
          {
            "id": "prelate-1",
            "baseId": "prelate",
            "type": "unit",
            "name": "Prelate",
            "pbgid": 136918,
            "attribName": "unit_monk_1_hre",
            "age": 1,
            "civs": [
              "hr"
            ],
            "description": "Support unit with no combat capability. Automatically inspires Villagers to greatly improve their gather rate. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
            "classes": [
              "religious"
            ],
            "displayClasses": [
              "Religious"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 100,
              "total": 100,
              "popcap": 1,
              "time": 20
            },
            "producedBy": [
              "town-center",
              "regnitz-cathedral",
              "monastery",
              "palace-of-swabia",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/units/prelate-1.png",
            "hitpoints": 90,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "arbaletrier",
        "name": "Arbalétrier",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/arbaletrier-3.png",
        "description": "High damage ranged unit with a defensive pavise shield. Best used when supported by others.\n+ Anti-armor specialist\n+ Comes with melee armor\n- Low health\n- Countered by Horsemen",
        "variations": [
          {
            "id": "arbaletrier-3",
            "pbgid": 132231,
            "attribName": "unit_crossbowman_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "arbaletrier-4",
            "pbgid": 132273,
            "attribName": "unit_crossbowman_4_fre",
            "civs": [
              "fr"
            ]
          }
        ],
        "baseId": "arbaletrier",
        "age": 3,
        "costs": {
          "food": 80,
          "wood": 0,
          "stone": 0,
          "gold": 40,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 80,
        "sight": {
          "line": 40,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "arbaletrier-3": {
            "name": "Arbalétrier",
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 12,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_3_fre",
                "pbgid": 132316
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 1
              }
            ],
            "id": "arbaletrier-3"
          },
          "arbaletrier-4": {
            "name": "Elite Arbalétrier",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/arbaletrier-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 15,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_crossbow_4_fre",
                "pbgid": 132317
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 2
              }
            ],
            "id": "arbaletrier-4"
          }
        }
      },
      {
        "id": "cannon",
        "name": "Cannon",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/cannon-4.png",
        "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings",
        "variations": [
          {
            "id": "cannon-4",
            "baseId": "cannon",
            "type": "unit",
            "name": "Cannon",
            "pbgid": 165175,
            "attribName": "unit_cannon_4_fre",
            "age": 4,
            "civs": [
              "fr"
            ],
            "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 600,
              "total": 900,
              "popcap": 3,
              "time": 45
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/units/cannon-4.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Cannon",
                "type": "siege",
                "damage": 100,
                "speed": 5.375,
                "range": {
                  "min": 3.75,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 500,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 500,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 1.75,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_cannon_4",
                "pbgid": 165121
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 30
              }
            ],
            "sight": {
              "line": 56,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "galleass",
        "name": "Galleass",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Ship"
        ],
        "classes": [
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/galleass-4.png",
        "description": "Large oared vessel with a powerful forward mounted bombard.\n+ Long Range\n+ Anti-structure specialist",
        "variations": [
          {
            "id": "galleass-3",
            "baseId": "galleass",
            "type": "unit",
            "name": "Galleass",
            "pbgid": 193931,
            "attribName": "unit_naval_galleass_4_fre",
            "age": 3,
            "civs": [
              "fr"
            ],
            "description": "Large oared vessel with a powerful forward mounted bombard.\n+ Long Range\n+ Anti-structure specialist",
            "classes": [
              "ship"
            ],
            "displayClasses": [
              "Ship"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 360,
              "stone": 0,
              "gold": 300,
              "total": 660,
              "popcap": 5,
              "time": 50
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/galleass-4.png",
            "hitpoints": 700,
            "weapons": [
              {
                "name": "Bombard",
                "type": "ranged",
                "damage": 130,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 8
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 3.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_galleass_bombard_fre",
                "pbgid": 198008
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "royal-cannon",
        "name": "Royal Cannon",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/royal-cannon-4.png",
        "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings",
        "variations": [
          {
            "id": "royal-cannon-4",
            "baseId": "royal-cannon",
            "type": "unit",
            "name": "Royal Cannon",
            "pbgid": 1907351,
            "attribName": "unit_cannon_4_royal_fre",
            "age": 4,
            "civs": [
              "fr"
            ],
            "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 600,
              "total": 900,
              "popcap": 3,
              "time": 45
            },
            "producedBy": [
              "college-of-artillery"
            ],
            "icon": "https://data.aoe4world.com/images/units/royal-cannon-4.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Cannon",
                "type": "siege",
                "damage": 100,
                "speed": 5.375,
                "range": {
                  "min": 3.75,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 500,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 500,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 1.75,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_cannon_4",
                "pbgid": 165121
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 30
              }
            ],
            "sight": {
              "line": 56,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "royal-culverin",
        "name": "Royal Culverin",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/royal-culverin-4.png",
        "description": "Long-range cannon made for destroying siege engines.\n+ Bonus damage to siege weapons\n+ Attacks without having to set up\n- Low damage to buildings",
        "variations": [
          {
            "id": "royal-culverin-4",
            "baseId": "royal-culverin",
            "type": "unit",
            "name": "Royal Culverin",
            "pbgid": 1905981,
            "attribName": "unit_culverin_4_royal_fre",
            "age": 4,
            "civs": [
              "fr"
            ],
            "description": "Long-range cannon made for destroying siege engines.\n+ Bonus damage to siege weapons\n+ Attacks without having to set up\n- Low damage to buildings",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 400,
              "stone": 0,
              "gold": 600,
              "total": 1000,
              "popcap": 3,
              "time": 45
            },
            "producedBy": [
              "college-of-artillery"
            ],
            "icon": "https://data.aoe4world.com/images/units/royal-culverin-4.png",
            "hitpoints": 220,
            "weapons": [
              {
                "name": "Cannon",
                "type": "ranged",
                "damage": 85,
                "speed": 4.375,
                "range": {
                  "min": 1.25,
                  "max": 12
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 100,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 100,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_culverin_4",
                "pbgid": 165122
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 64,
              "height": 10
            },
            "movement": {
              "speed": 0.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "royal-knight",
        "name": "Royal Knight",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Melee Cavalry"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/royal-knight-2.png",
        "description": "Gain bonus damage for 5 seconds after charging. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
        "variations": [
          {
            "id": "royal-knight-2",
            "pbgid": 133147,
            "attribName": "unit_knight_2_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "royal-knight-3",
            "pbgid": 132279,
            "attribName": "unit_knight_3_fre",
            "civs": [
              "fr"
            ]
          },
          {
            "id": "royal-knight-4",
            "pbgid": 132280,
            "attribName": "unit_knight_4_fre",
            "civs": [
              "fr"
            ]
          }
        ],
        "baseId": "royal-knight",
        "age": 2,
        "costs": {
          "food": 140,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "school-of-cavalry",
          "stable"
        ],
        "hitpoints": 190,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "royal-knight-2": {
            "name": "Royal Knight",
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 19,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_2",
                "pbgid": 129602
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "royal-knight-2"
          },
          "royal-knight-3": {
            "name": "Veteran Royal Knight",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/royal-knight-3.png",
            "hitpoints": 230,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3",
                "pbgid": 106614
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "royal-knight-3"
          },
          "royal-knight-4": {
            "name": "Elite Royal Knight",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/royal-knight-4.png",
            "hitpoints": 270,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4",
                "pbgid": 127822
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 5
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "id": "royal-knight-4"
          }
        }
      },
      {
        "id": "royal-ribauldequin",
        "name": "Royal Ribauldequin",
        "type": "unit",
        "civs": [
          "fr"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/royal-ribauldequin-4.png",
        "description": "Five-barreled gunpowder weapon effective against massed units. Deals little damage to buildings.\n+ Can hit multiple targets in a single volley\n- Short range\n- Low ranged armor",
        "variations": [
          {
            "id": "royal-ribauldequin-4",
            "baseId": "royal-ribauldequin",
            "type": "unit",
            "name": "Royal Ribauldequin",
            "pbgid": 1905982,
            "attribName": "unit_ribauldequin_4_royal_fre",
            "age": 4,
            "civs": [
              "fr"
            ],
            "description": "Five-barreled gunpowder weapon effective against massed units. Deals little damage to buildings.\n+ Can hit multiple targets in a single volley\n- Short range\n- Low ranged armor",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 600,
              "total": 900,
              "popcap": 3,
              "time": 45
            },
            "producedBy": [
              "college-of-artillery"
            ],
            "icon": "https://data.aoe4world.com/images/units/royal-ribauldequin-4.png",
            "hitpoints": 350,
            "weapons": [
              {
                "name": "Ribauldequin",
                "type": "ranged",
                "damage": 42,
                "speed": 5.25,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [],
                "durations": {
                  "aim": 1.25,
                  "windup": 0,
                  "attack": 1,
                  "winddown": 1,
                  "reload": 2,
                  "setup": 0.25,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "burst": {
                  "count": 12
                },
                "attribName": "weapon_ribauldequin_4",
                "pbgid": 130925
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 10
              }
            ],
            "sight": {
              "line": 45,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "baochuan",
        "name": "Baochuan",
        "type": "unit",
        "civs": [
          "ch",
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Warship"
        ],
        "classes": [
          "warship"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/baochuan-4.png",
        "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
        "variations": [
          {
            "id": "baochuan-4",
            "pbgid": 193110,
            "attribName": "unit_naval_combat_warship_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "baochuan-4",
            "pbgid": 193130,
            "attribName": "unit_naval_combat_warship_4_mon",
            "civs": [
              "mo"
            ],
            "costs": {
              "food": 200,
              "wood": 200,
              "stone": 0,
              "gold": 200,
              "total": 600,
              "popcap": 5,
              "time": 45
            }
          }
        ],
        "baseId": "baochuan",
        "age": 4,
        "costs": {
          "food": 200,
          "wood": 200,
          "stone": 0,
          "gold": 200,
          "total": 600,
          "popcap": 5,
          "time": 38
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 700,
        "weapons": [
          {
            "name": "Cannon",
            "type": "siege",
            "damage": 45,
            "speed": 5.625,
            "range": {
              "min": 0,
              "max": 9
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 70,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 5,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "burst": {
              "count": 3
            },
            "attribName": "weapon_naval_warship_cannon_ai_western",
            "pbgid": 2033788
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 5
          }
        ],
        "sight": {
          "line": 50,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {}
      },
      {
        "id": "clocktower-battering-ram",
        "name": "Clocktower Battering Ram",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/clocktower-battering-ram-3.png",
        "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Can only attack buildings\n- Slow movement speed",
        "variations": [
          {
            "id": "clocktower-battering-ram-3",
            "baseId": "clocktower-battering-ram",
            "type": "unit",
            "name": "Clocktower Battering Ram",
            "pbgid": 2120982,
            "attribName": "unit_ram_3_clocktower_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Can only attack buildings\n- Slow movement speed",
            "classes": [
              "siege"
            ],
            "displayClasses": [
              "Siege"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 250,
              "stone": 0,
              "gold": 0,
              "total": 250,
              "popcap": 1,
              "time": 30
            },
            "producedBy": [
              "astronomical-clocktower"
            ],
            "icon": "https://data.aoe4world.com/images/units/clocktower-battering-ram-3.png",
            "hitpoints": 630,
            "weapons": [
              {
                "name": "Ram",
                "type": "siege",
                "damage": 200,
                "speed": 5.125,
                "range": {
                  "min": 0,
                  "max": 0.5375
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "wall"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 4
                },
                "attribName": "weapon_ram_3",
                "pbgid": 108918
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 50
              }
            ],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 0.75
            },
            "garrison": {
              "capacity": 16,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "clocktower-bombard",
        "name": "Clocktower Bombard",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/clocktower-bombard-4.png",
        "description": "Intimidating siege gun excellent against buildings or any stubborn targets.\n+ High damage\n- Must be set up to fire",
        "variations": [
          {
            "id": "clocktower-bombard-4",
            "baseId": "clocktower-bombard",
            "type": "unit",
            "name": "Clocktower Bombard",
            "pbgid": 206825,
            "attribName": "unit_bombard_4_clocktower_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Intimidating siege gun excellent against buildings or any stubborn targets.\n+ High damage\n- Must be set up to fire",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 600,
              "total": 900,
              "popcap": 3,
              "time": 45
            },
            "producedBy": [
              "astronomical-clocktower"
            ],
            "icon": "https://data.aoe4world.com/images/units/clocktower-bombard-4.png",
            "hitpoints": 360,
            "weapons": [
              {
                "name": "Cannon",
                "type": "siege",
                "damage": 100,
                "speed": 5.375,
                "range": {
                  "min": 3.75,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 410,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 4.75,
                  "setup": 0,
                  "teardown": 1,
                  "cooldown": 0
                },
                "attribName": "weapon_bombard_4",
                "pbgid": 127728
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 30
              }
            ],
            "sight": {
              "line": 56,
              "height": 10
            },
            "movement": {
              "speed": 0.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "clocktower-counterweight-trebuchet",
        "name": "Clocktower Counterweight Trebuchet",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/clocktower-counterweight-trebuchet-4.png",
        "description": "Powerful siege engine effective at destroying buildings and walls over a great distance.\n+ Bonus damage vs buildings\n- Must be set up to fire\n- Inaccurate against units",
        "variations": [
          {
            "id": "clocktower-counterweight-trebuchet-3",
            "baseId": "clocktower-counterweight-trebuchet",
            "type": "unit",
            "name": "Clocktower Counterweight Trebuchet",
            "pbgid": 2034340,
            "attribName": "unit_trebuchet_4_cw_clocktower_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Powerful siege engine effective at destroying buildings and walls over a great distance.\n+ Bonus damage vs buildings\n- Must be set up to fire\n- Inaccurate against units",
            "classes": [
              "siege"
            ],
            "displayClasses": [
              "Siege"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 500,
              "stone": 0,
              "gold": 250,
              "total": 750,
              "popcap": 3,
              "time": 40
            },
            "producedBy": [
              "astronomical-clocktower"
            ],
            "icon": "https://data.aoe4world.com/images/units/clocktower-counterweight-trebuchet-4.png",
            "hitpoints": 315,
            "weapons": [
              {
                "name": "Trebuchet",
                "type": "siege",
                "damage": 50,
                "speed": 12.625,
                "range": {
                  "min": 2.75,
                  "max": 16
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 450,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 7.375,
                  "reload": 4,
                  "setup": 3,
                  "teardown": 2,
                  "cooldown": 0
                },
                "attribName": "weapon_trebuchet_4_counterweight",
                "pbgid": 130952
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 80,
              "height": 10
            },
            "movement": {
              "speed": 0.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "clocktower-nest-of-bees",
        "name": "Clocktower Nest of Bees",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/clocktower-nest-of-bees-4.png",
        "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded",
        "variations": [
          {
            "id": "clocktower-nest-of-bees-3",
            "baseId": "clocktower-nest-of-bees",
            "type": "unit",
            "name": "Clocktower Nest of Bees",
            "pbgid": 206827,
            "attribName": "unit_nest_of_bees_4_clocktower_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 300,
              "total": 600,
              "popcap": 3,
              "time": 40
            },
            "producedBy": [
              "astronomical-clocktower"
            ],
            "icon": "https://data.aoe4world.com/images/units/clocktower-nest-of-bees-4.png",
            "hitpoints": 210,
            "weapons": [
              {
                "name": "Rocket Arrow",
                "type": "siege",
                "damage": 8,
                "speed": 6.5,
                "range": {
                  "min": 3,
                  "max": 8
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 4,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 1,
                  "winddown": 2,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 8
                },
                "attribName": "weapon_nest_of_bees_4_chi",
                "pbgid": 166609
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 64,
              "height": 10
            },
            "movement": {
              "speed": 0.8125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "clocktower-springald",
        "name": "Clocktower Springald",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/clocktower-springald-3.png",
        "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings",
        "variations": [
          {
            "id": "clocktower-springald-3",
            "baseId": "clocktower-springald",
            "type": "unit",
            "name": "Clocktower Springald",
            "pbgid": 206828,
            "attribName": "unit_springald_3_clocktower_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings",
            "classes": [
              "siege"
            ],
            "displayClasses": [
              "Siege"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 250,
              "stone": 0,
              "gold": 250,
              "total": 500,
              "popcap": 3,
              "time": 30
            },
            "producedBy": [
              "astronomical-clocktower"
            ],
            "icon": "https://data.aoe4world.com/images/units/clocktower-springald-3.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Springald",
                "type": "ranged",
                "damage": 30,
                "speed": 4.125,
                "range": {
                  "min": 1.25,
                  "max": 10
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 70,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0.25,
                  "cooldown": 0
                },
                "attribName": "weapon_springald_3",
                "pbgid": 190303
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 56,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "explosive-junk",
        "name": "Explosive Junk",
        "type": "unit",
        "civs": [
          "ch",
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Incendiary Ship"
        ],
        "classes": [
          "incendiary",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/explosive-junk-3.png",
        "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
        "variations": [
          {
            "id": "explosive-junk-3",
            "pbgid": 193112,
            "attribName": "unit_naval_fireship_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "explosive-junk-3",
            "pbgid": 193132,
            "attribName": "unit_naval_fireship_3_mon",
            "civs": [
              "mo"
            ],
            "costs": {
              "food": 0,
              "wood": 80,
              "stone": 0,
              "gold": 80,
              "total": 160,
              "popcap": 2,
              "time": 15
            }
          }
        ],
        "baseId": "explosive-junk",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 80,
          "stone": 0,
          "gold": 80,
          "total": 160,
          "popcap": 2,
          "time": 13
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 145,
        "weapons": [
          {
            "name": "Incendiaries",
            "type": "siege",
            "damage": 95,
            "speed": 0.125,
            "range": {
              "min": 0,
              "max": 2
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "broadside"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_fireship",
            "pbgid": 196723
          }
        ],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 2
        },
        "shared": {}
      },
      {
        "id": "fire-lancer",
        "name": "Fire Lancer",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Cavalry"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/fire-lancer-3.png",
        "description": "Cavalry wielding explosive-tipped lances for an impressive charge attack.\n+ Charge deals area damage\n+ Effective raiding unit against buildings and siege engines\n+ Comes with ranged armor\n- Weak in melee combat\n- Countered by Spearmen",
        "variations": [
          {
            "id": "fire-lancer-3",
            "pbgid": 156312,
            "attribName": "unit_firelancer_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "fire-lancer-4",
            "pbgid": 156313,
            "attribName": "unit_firelancer_4_chi",
            "civs": [
              "ch"
            ]
          }
        ],
        "baseId": "fire-lancer",
        "age": 3,
        "costs": {
          "food": 120,
          "wood": 20,
          "stone": 0,
          "gold": 20,
          "total": 160,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 155,
        "sight": {
          "line": 45,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "fire-lancer-3": {
            "name": "Fire Lancer",
            "weapons": [
              {
                "name": "Fire Lance",
                "type": "melee",
                "damage": 11,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.625,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.375
                },
                "attribName": "weapon_firelancer_3_chi",
                "pbgid": 156322
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 30,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_strong",
                "pbgid": 1761380
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "id": "fire-lancer-3"
          },
          "fire-lancer-4": {
            "name": "Elite Fire Lancer",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/fire-lancer-4.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Fire Lance",
                "type": "melee",
                "damage": 13,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.625,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.375
                },
                "attribName": "weapon_firelancer_4_chi",
                "pbgid": 156323
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 30,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_strong",
                "pbgid": 1761380
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "sight": {
              "line": 50,
              "height": 10
            },
            "id": "fire-lancer-4"
          }
        }
      },
      {
        "id": "grenadier",
        "name": "Grenadier",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Gunpowder Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "gunpowder",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/grenadier-4.png",
        "description": "Advanced ranged infantry with thrown explosive canisters that deal damage in a small area.\n+ Deals area damage\n- Low single target damage\n- Slow movement speed",
        "variations": [
          {
            "id": "grenadier-4",
            "baseId": "grenadier",
            "type": "unit",
            "name": "Grenadier",
            "pbgid": 156416,
            "attribName": "unit_grenadier_4_chi",
            "age": 4,
            "civs": [
              "ch"
            ],
            "description": "Advanced ranged infantry with thrown explosive canisters that deal damage in a small area.\n+ Deals area damage\n- Low single target damage\n- Slow movement speed",
            "classes": [
              "light",
              "ranged",
              "gunpowder",
              "infantry"
            ],
            "displayClasses": [
              "Light Ranged Gunpowder Infantry"
            ],
            "unique": true,
            "costs": {
              "food": 120,
              "wood": 60,
              "stone": 0,
              "gold": 60,
              "total": 240,
              "popcap": 1,
              "time": 30
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/units/grenadier-4.png",
            "hitpoints": 150,
            "weapons": [
              {
                "name": "Grenade",
                "type": "ranged",
                "damage": 13,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 3
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 65,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 0.375,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_grenade_4",
                "pbgid": 156410
              }
            ],
            "armor": [],
            "sight": {
              "line": 50,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "imperial-official",
        "name": "Imperial Official",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Worker"
        ],
        "classes": [
          "worker"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/imperial-official-1.png",
        "description": "Economic support unit with no combat capability. Will automatically gather Tax (Gold) from buildings.\n+ Can be tasked with improving a building’s efficiency\n- Only a certain number of Officials can exist at a time",
        "variations": [
          {
            "id": "imperial-official-1",
            "baseId": "imperial-official",
            "type": "unit",
            "name": "Imperial Official",
            "pbgid": 181406,
            "attribName": "unit_official_1_chi",
            "age": 1,
            "civs": [
              "ch"
            ],
            "description": "Economic support unit with no combat capability. Will automatically gather Tax (Gold) from buildings.\n+ Can be tasked with improving a building’s efficiency\n- Only a certain number of Officials can exist at a time",
            "classes": [
              "worker"
            ],
            "displayClasses": [
              "Worker"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 50,
              "total": 150,
              "popcap": 1,
              "time": 20
            },
            "producedBy": [
              "imperial-academy",
              "town-center",
              "capital-town-center"
            ],
            "icon": "https://data.aoe4world.com/images/units/imperial-official-1.png",
            "hitpoints": 75,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 28,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "junk",
        "name": "Junk",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": false,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/junk-3.png",
        "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "junk-2",
            "baseId": "junk",
            "type": "unit",
            "name": "Junk",
            "pbgid": 193929,
            "attribName": "unit_naval_war_galley_3_chi",
            "age": 2,
            "civs": [
              "ch"
            ],
            "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
            "classes": [
              "archer",
              "ship"
            ],
            "displayClasses": [
              "Archer Ship"
            ],
            "unique": false,
            "costs": {
              "food": 90,
              "wood": 150,
              "stone": 0,
              "gold": 0,
              "total": 240,
              "popcap": 3,
              "time": 21
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/junk-3.png",
            "hitpoints": 300,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "fireship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 18,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.125,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 5
                },
                "attribName": "weapon_naval_arrow_ship_arrow",
                "pbgid": 2034306
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1.75
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lancer",
        "name": "Lancer",
        "type": "unit",
        "civs": [
          "ab",
          "ch",
          "de",
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Cavalry"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/lancer-3.png",
        "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
        "variations": [
          {
            "id": "lancer-3",
            "pbgid": 137568,
            "attribName": "unit_knight_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "lancer-3",
            "pbgid": 136050,
            "attribName": "unit_knight_3_sul",
            "civs": [
              "de"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3",
                "pbgid": 106614
              },
              {
                "name": "Kilij",
                "type": "melee",
                "damage": 27,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3_improved_sul",
                "pbgid": 193018
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "lancer-3",
            "pbgid": 199719,
            "attribName": "unit_knight_3_abb",
            "civs": [
              "ab"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3",
                "pbgid": 106614
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "lancer-3",
            "pbgid": 129610,
            "attribName": "unit_knight_3_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3",
                "pbgid": 106614
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ]
          },
          {
            "id": "lancer-4",
            "pbgid": 137569,
            "attribName": "unit_knight_4_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "lancer-4",
            "pbgid": 136051,
            "attribName": "unit_knight_4_sul",
            "civs": [
              "de"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4",
                "pbgid": 127822
              },
              {
                "name": "Kilij",
                "type": "melee",
                "damage": 32,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4_improved_sul",
                "pbgid": 193019
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "lancer-4",
            "pbgid": 199720,
            "attribName": "unit_knight_4_abb",
            "civs": [
              "ab"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4",
                "pbgid": 127822
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ]
          },
          {
            "id": "lancer-4",
            "pbgid": 136254,
            "attribName": "unit_knight_4_mon",
            "civs": [
              "mo"
            ],
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4",
                "pbgid": 127822
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman_mon",
                "pbgid": 135190
              }
            ]
          }
        ],
        "baseId": "lancer",
        "age": 3,
        "costs": {
          "food": 140,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 230,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "lancer-3": {
            "name": "Lancer",
            "weapons": [
              {
                "name": "Guandao",
                "type": "melee",
                "damage": 24,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_3_chi",
                "pbgid": 2029874
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "lancer-3"
          },
          "lancer-4": {
            "name": "Elite Lancer",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/lancer-4.png",
            "hitpoints": 270,
            "weapons": [
              {
                "name": "Guandao",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_knight_4_chi",
                "pbgid": 2029876
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 5
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "id": "lancer-4"
          }
        }
      },
      {
        "id": "nest-of-bees",
        "name": "Nest of Bees",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
        "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded",
        "variations": [
          {
            "id": "nest-of-bees-3",
            "baseId": "nest-of-bees",
            "type": "unit",
            "name": "Nest of Bees",
            "pbgid": 166611,
            "attribName": "unit_nest_of_bees_4_chi",
            "age": 3,
            "civs": [
              "ch"
            ],
            "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 300,
              "stone": 0,
              "gold": 300,
              "total": 600,
              "popcap": 3,
              "time": 40
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
            "hitpoints": 140,
            "weapons": [
              {
                "name": "Rocket Arrow",
                "type": "siege",
                "damage": 8,
                "speed": 6.5,
                "range": {
                  "min": 3,
                  "max": 8
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 4,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 1,
                  "winddown": 2,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 8
                },
                "attribName": "weapon_nest_of_bees_4_chi",
                "pbgid": 166609
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 64,
              "height": 10
            },
            "movement": {
              "speed": 0.8125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "palace-guard",
        "name": "Palace Guard",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Melee Infantry"
        ],
        "classes": [
          "heavy",
          "melee",
          "infantry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/palace-guard-3.png",
        "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Armored\n- Countered by Knights, Lancers, and Crossbowmen.",
        "variations": [
          {
            "id": "palace-guard-3",
            "pbgid": 137570,
            "attribName": "unit_manatarms_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "palace-guard-4",
            "pbgid": 137574,
            "attribName": "unit_manatarms_4_chi",
            "civs": [
              "ch"
            ]
          }
        ],
        "baseId": "palace-guard",
        "age": 3,
        "costs": {
          "food": 100,
          "wood": 0,
          "stone": 0,
          "gold": 20,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "barracks"
        ],
        "hitpoints": 155,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.375
        },
        "shared": {
          "palace-guard-3": {
            "name": "Palace Guard",
            "weapons": [
              {
                "name": "Guandao",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_chi",
                "pbgid": 137337
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "palace-guard-3"
          },
          "palace-guard-4": {
            "name": "Elite Palace Guard",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/palace-guard-4.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Guandao",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_chi",
                "pbgid": 137339
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "palace-guard-4"
          }
        }
      },
      {
        "id": "war-junk",
        "name": "War Junk",
        "type": "unit",
        "civs": [
          "ch",
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Springald Ship"
        ],
        "classes": [
          "springald",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/war-junk-2.png",
        "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
        "variations": [
          {
            "id": "war-junk-3",
            "pbgid": 193109,
            "attribName": "unit_naval_combat_ship_2_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "war-junk-3",
            "pbgid": 193129,
            "attribName": "unit_naval_combat_ship_2_mon",
            "civs": [
              "mo"
            ],
            "costs": {
              "food": 120,
              "wood": 200,
              "stone": 0,
              "gold": 30,
              "total": 350,
              "popcap": 3,
              "time": 30
            }
          }
        ],
        "baseId": "war-junk",
        "age": 3,
        "costs": {
          "food": 120,
          "wood": 200,
          "stone": 0,
          "gold": 30,
          "total": 350,
          "popcap": 3,
          "time": 25
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 450,
        "weapons": [
          {
            "name": "Ballista",
            "type": "ranged",
            "damage": 35,
            "speed": 4.125,
            "range": {
              "min": 0,
              "max": 6
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "archer",
                      "ship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0.25,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 2.75,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_combat_ship_springald",
            "pbgid": 2102494
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 3
          }
        ],
        "sight": {
          "line": 45,
          "height": 10
        },
        "movement": {
          "speed": 1.375
        },
        "shared": {}
      },
      {
        "id": "zhuge-nu",
        "name": "Zhuge Nu",
        "type": "unit",
        "civs": [
          "ch"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/zhuge-nu-2.png",
        "description": "Fires bolts with a ferocious damage potential against enemy units.\n+ High rate of fire\n- Ineffective vs armored targets\n- Countered by Horsemen",
        "variations": [
          {
            "id": "zhuge-nu-2",
            "pbgid": 166629,
            "attribName": "unit_repeater_crossbowman_2_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "zhuge-nu-3",
            "pbgid": 166630,
            "attribName": "unit_repeater_crossbowman_3_chi",
            "civs": [
              "ch"
            ]
          },
          {
            "id": "zhuge-nu-4",
            "pbgid": 166631,
            "attribName": "unit_repeater_crossbowman_4_chi",
            "civs": [
              "ch"
            ]
          }
        ],
        "baseId": "zhuge-nu",
        "age": 2,
        "costs": {
          "food": 20,
          "wood": 30,
          "stone": 0,
          "gold": 30,
          "total": 80,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 70,
        "sight": {
          "line": 40,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "zhuge-nu-2": {
            "name": "Zhuge Nu",
            "weapons": [
              {
                "name": "Repeater Crossbow",
                "type": "ranged",
                "damage": 4,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.5,
                  "winddown": 0,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_repeater_crossbow_2_chi",
                "pbgid": 166640
              }
            ],
            "armor": [],
            "id": "zhuge-nu-2"
          },
          "zhuge-nu-3": {
            "name": "Veteran Zhuge Nu",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/zhuge-nu-3.png",
            "hitpoints": 80,
            "weapons": [
              {
                "name": "Repeater Crossbow",
                "type": "ranged",
                "damage": 5,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.5,
                  "winddown": 0,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_repeater_crossbow_3_chi",
                "pbgid": 166641
              }
            ],
            "armor": [],
            "id": "zhuge-nu-3"
          },
          "zhuge-nu-4": {
            "name": "Elite Zhuge Nu",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/zhuge-nu-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Repeater Crossbow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.5,
                  "winddown": 0,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_repeater_crossbow_4_chi",
                "pbgid": 166642
              }
            ],
            "armor": [],
            "id": "zhuge-nu-4"
          }
        }
      },
      {
        "id": "baghlah",
        "name": "Baghlah",
        "type": "unit",
        "civs": [
          "ab",
          "de"
        ],
        "unique": false,
        "displayClasses": [
          "Springald Ship"
        ],
        "classes": [
          "springald",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/baghlah-2.png",
        "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
        "variations": [
          {
            "id": "baghlah-2",
            "pbgid": 193139,
            "attribName": "unit_naval_combat_ship_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "baghlah-2",
            "pbgid": 199725,
            "attribName": "unit_naval_combat_ship_2_abb",
            "civs": [
              "ab"
            ]
          }
        ],
        "baseId": "baghlah",
        "age": 2,
        "costs": {
          "food": 120,
          "wood": 200,
          "stone": 0,
          "gold": 30,
          "total": 350,
          "popcap": 3,
          "time": 30
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 450,
        "weapons": [
          {
            "name": "Ballista",
            "type": "ranged",
            "damage": 35,
            "speed": 4.125,
            "range": {
              "min": 0,
              "max": 6
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "archer",
                      "ship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              },
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 45,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0.25,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 2.75,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_combat_ship_springald",
            "pbgid": 2102494
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 3
          }
        ],
        "sight": {
          "line": 45,
          "height": 10
        },
        "movement": {
          "speed": 1.375
        },
        "shared": {}
      },
      {
        "id": "dhow",
        "name": "Dhow",
        "type": "unit",
        "civs": [
          "ab",
          "de",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/dhow-2.png",
        "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "dhow-2",
            "pbgid": 2033847,
            "attribName": "unit_naval_dhow_2_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "dhow-2",
            "pbgid": 2033846,
            "attribName": "unit_naval_dhow_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "dhow-2",
            "pbgid": 2101917,
            "attribName": "unit_naval_dhow_2_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "dhow",
        "age": 2,
        "costs": {
          "food": 90,
          "wood": 150,
          "stone": 0,
          "gold": 0,
          "total": 240,
          "popcap": 3,
          "time": 25
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 300,
        "weapons": [
          {
            "name": "Bow",
            "type": "ranged",
            "damage": 6,
            "speed": 1.5,
            "range": {
              "min": 0,
              "max": 6.5
            },
            "modifiers": [
              {
                "property": "rangedAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "fireship"
                    ]
                  ]
                },
                "effect": "change",
                "value": 18,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0.125,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 0.75,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "burst": {
              "count": 5
            },
            "attribName": "weapon_naval_arrow_ship_arrow",
            "pbgid": 2034306
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 1
          }
        ],
        "sight": {
          "line": 48,
          "height": 10
        },
        "movement": {
          "speed": 1.75
        },
        "shared": {}
      },
      {
        "id": "explosive-dhow",
        "name": "Explosive Dhow",
        "type": "unit",
        "civs": [
          "ab",
          "de"
        ],
        "unique": false,
        "displayClasses": [
          "Incendiary Ship"
        ],
        "classes": [
          "incendiary",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/explosive-dhow-3.png",
        "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
        "variations": [
          {
            "id": "explosive-dhow-3",
            "pbgid": 193142,
            "attribName": "unit_naval_fireship_3_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "explosive-dhow-3",
            "pbgid": 199727,
            "attribName": "unit_naval_fireship_3_abb",
            "civs": [
              "ab"
            ]
          }
        ],
        "baseId": "explosive-dhow",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 80,
          "stone": 0,
          "gold": 80,
          "total": 160,
          "popcap": 2,
          "time": 15
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 145,
        "weapons": [
          {
            "name": "Incendiaries",
            "type": "siege",
            "damage": 95,
            "speed": 0.125,
            "range": {
              "min": 0,
              "max": 2
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "naval",
                      "broadside"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              },
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 300,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "attribName": "weapon_naval_fireship",
            "pbgid": 196723
          }
        ],
        "armor": [],
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 2
        },
        "shared": {}
      },
      {
        "id": "scholar",
        "name": "Scholar",
        "type": "unit",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Religious"
        ],
        "classes": [
          "religious"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/scholar-2.png",
        "description": "Support unit with no combat capability. Can be garrisoned in a Mosque or Madrasa to research technology more quickly. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
        "variations": [
          {
            "id": "scholar-2",
            "baseId": "scholar",
            "type": "unit",
            "name": "Scholar",
            "pbgid": 136056,
            "attribName": "unit_monk_2_sul",
            "age": 2,
            "civs": [
              "de"
            ],
            "description": "Support unit with no combat capability. Can be garrisoned in a Mosque or Madrasa to research technology more quickly. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
            "classes": [
              "religious"
            ],
            "displayClasses": [
              "Religious"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 130,
              "total": 130,
              "popcap": 1,
              "time": 30
            },
            "producedBy": [
              "mosque",
              "dome-of-the-faith"
            ],
            "icon": "https://data.aoe4world.com/images/units/scholar-2.png",
            "hitpoints": 90,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "sultans-elite-tower-elephant",
        "name": "Sultan's Elite Tower Elephant",
        "type": "unit",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Ranged Cavalry",
          "Elephant"
        ],
        "classes": [
          "ranged",
          "cavalry",
          "elephant"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/sultans-elite-tower-elephant-4.png",
        "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with Handcannoneers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
        "variations": [
          {
            "id": "sultans-elite-tower-elephant-4",
            "baseId": "sultans-elite-tower-elephant",
            "type": "unit",
            "name": "Sultan's Elite Tower Elephant",
            "pbgid": 2104689,
            "attribName": "unit_war_elephant_tower2_4_sul",
            "age": 4,
            "civs": [
              "de"
            ],
            "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with Handcannoneers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
            "classes": [
              "ranged",
              "cavalry",
              "elephant"
            ],
            "displayClasses": [
              "Ranged Cavalry",
              "Elephant"
            ],
            "unique": true,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "total": 1000,
              "popcap": 3,
              "time": 200
            },
            "producedBy": [
              "palace-of-the-sultan"
            ],
            "icon": "https://data.aoe4world.com/images/units/sultans-elite-tower-elephant-4.png",
            "hitpoints": 600,
            "weapons": [
              {
                "name": "Tusks",
                "type": "melee",
                "damage": 30,
                "speed": 2.875,
                "range": {
                  "min": 0,
                  "max": 1
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 2,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_tower_war_elephant_melee_sul",
                "pbgid": 2024371
              },
              {
                "name": "Handcannon",
                "type": "ranged",
                "damage": 35,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.5,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 2
                },
                "attribName": "weapon_war_elephant_tower_handcannon_4_sul",
                "pbgid": 2104700
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 7
              }
            ],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "tower-elephant",
        "name": "Tower Elephant",
        "type": "unit",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Ranged Cavalry",
          "Elephant"
        ],
        "classes": [
          "ranged",
          "cavalry",
          "elephant"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/tower-elephant-4.png",
        "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with powerful Archers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
        "variations": [
          {
            "id": "tower-elephant-4",
            "baseId": "tower-elephant",
            "type": "unit",
            "name": "Tower Elephant",
            "pbgid": 136091,
            "attribName": "unit_war_elephant_tower_4_sul",
            "age": 4,
            "civs": [
              "de"
            ],
            "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with powerful Archers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
            "classes": [
              "ranged",
              "cavalry",
              "elephant"
            ],
            "displayClasses": [
              "Ranged Cavalry",
              "Elephant"
            ],
            "unique": true,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 600,
              "total": 1000,
              "popcap": 3,
              "time": 60
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/units/tower-elephant-4.png",
            "hitpoints": 600,
            "weapons": [
              {
                "name": "Tusks",
                "type": "melee",
                "damage": 30,
                "speed": 2.875,
                "range": {
                  "min": 0,
                  "max": 1
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 2,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_tower_war_elephant_melee_sul",
                "pbgid": 2024371
              },
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 15,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.5,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_war_elephant_tower_archer_4_sul",
                "pbgid": 136204
              },
              {
                "name": "Crossbow",
                "type": "ranged",
                "damage": 15,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.5,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_war_elephant_tower_crossbow_4_sul",
                "pbgid": 181352
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 7
              }
            ],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 0.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "war-elephant",
        "name": "War Elephant",
        "type": "unit",
        "civs": [
          "de"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Melee Cavalry",
          "Elephant"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry",
          "elephant"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/war-elephant-3.png",
        "description": "Heavy cavalry effective against cavalry, siege engines, walls, and buildings.\n+ High health and armor\n+ Mounted with an advanced Spearman\n+ Capable of attacking Stone Walls\n- Slow movement speed",
        "variations": [
          {
            "id": "war-elephant-3",
            "baseId": "war-elephant",
            "type": "unit",
            "name": "War Elephant",
            "pbgid": 136090,
            "attribName": "unit_war_elephant_3_sul",
            "age": 3,
            "civs": [
              "de"
            ],
            "description": "Heavy cavalry effective against cavalry, siege engines, walls, and buildings.\n+ High health and armor\n+ Mounted with an advanced Spearman\n+ Capable of attacking Stone Walls\n- Slow movement speed",
            "classes": [
              "heavy",
              "melee",
              "cavalry",
              "elephant"
            ],
            "displayClasses": [
              "Heavy Melee Cavalry",
              "Elephant"
            ],
            "unique": true,
            "costs": {
              "food": 400,
              "wood": 0,
              "stone": 0,
              "gold": 350,
              "total": 750,
              "popcap": 3,
              "time": 60
            },
            "producedBy": [
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/units/war-elephant-3.png",
            "hitpoints": 850,
            "weapons": [
              {
                "name": "Tusks",
                "type": "melee",
                "damage": 50,
                "speed": 2.875,
                "range": {
                  "min": 0,
                  "max": 1
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 2,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_war_elephant_melee_3_sul",
                "pbgid": 184643
              },
              {
                "name": "Spear",
                "type": "melee",
                "damage": 25,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 40,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_war_elephant_spear_3_sul",
                "pbgid": 144673
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 1
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "xebec",
        "name": "Xebec",
        "type": "unit",
        "civs": [
          "ab",
          "de"
        ],
        "unique": false,
        "displayClasses": [
          "Warship"
        ],
        "classes": [
          "warship"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/xebec-4.png",
        "description": "Large sailed war vessel armed with broadside cannons.\n+ Anti-structure specialist\n- Low movement speed",
        "variations": [
          {
            "id": "xebec-4",
            "pbgid": 193140,
            "attribName": "unit_naval_combat_warship_4_sul",
            "civs": [
              "de"
            ]
          },
          {
            "id": "xebec-4",
            "pbgid": 199726,
            "attribName": "unit_naval_combat_warship_4_abb",
            "civs": [
              "ab"
            ],
            "sight": {
              "line": 50,
              "height": 10
            }
          }
        ],
        "baseId": "xebec",
        "age": 4,
        "costs": {
          "food": 200,
          "wood": 200,
          "stone": 0,
          "gold": 200,
          "total": 600,
          "popcap": 5,
          "time": 45
        },
        "producedBy": [
          "dock"
        ],
        "hitpoints": 700,
        "weapons": [
          {
            "name": "Cannon",
            "type": "siege",
            "damage": 45,
            "speed": 5.625,
            "range": {
              "min": 0,
              "max": 9
            },
            "modifiers": [
              {
                "property": "siegeAttack",
                "target": {
                  "class": [
                    [
                      "building"
                    ]
                  ]
                },
                "effect": "change",
                "value": 70,
                "type": "passive"
              }
            ],
            "durations": {
              "aim": 0.5,
              "windup": 0,
              "attack": 0.125,
              "winddown": 0,
              "reload": 5,
              "setup": 0,
              "teardown": 0,
              "cooldown": 0
            },
            "burst": {
              "count": 3
            },
            "attribName": "weapon_naval_warship_cannon_ai_western",
            "pbgid": 2033788
          }
        ],
        "armor": [
          {
            "type": "ranged",
            "value": 5
          }
        ],
        "sight": {
          "line": 48,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {}
      },
      {
        "id": "camel-archer",
        "name": "Camel Archer",
        "type": "unit",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Cavalry",
          "Camel"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry",
          "camel"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/camel-archer-2.png",
        "description": "Highly mobile and durable ranged unit.\n+Bonus damage vs Spearmen\n-High cost",
        "variations": [
          {
            "id": "camel-archer-2",
            "pbgid": 199999,
            "attribName": "unit_camel_archer_2_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "camel-archer-3",
            "pbgid": 200000,
            "attribName": "unit_camel_archer_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "camel-archer-4",
            "pbgid": 200001,
            "attribName": "unit_camel_archer_4_abb",
            "civs": [
              "ab"
            ]
          }
        ],
        "baseId": "camel-archer",
        "age": 2,
        "costs": {
          "food": 180,
          "wood": 60,
          "stone": 0,
          "gold": 0,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 140,
        "sight": {
          "line": 38,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "camel-archer-2": {
            "name": "Camel Archer",
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 12,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.25,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_camel_archer_2_abb",
                "pbgid": 200014
              }
            ],
            "armor": [],
            "id": "camel-archer-2"
          },
          "camel-archer-3": {
            "name": "Veteran Camel Archer",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/camel-archer-3.png",
            "hitpoints": 170,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 14,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.25,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_camel_archer_3_abb",
                "pbgid": 200015
              }
            ],
            "armor": [],
            "id": "camel-archer-3"
          },
          "camel-archer-4": {
            "name": "Elite Camel Archer",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/camel-archer-4.png",
            "hitpoints": 200,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 15,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 3.75
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "light",
                          "melee",
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 15,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.25,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_camel_archer_4_abb",
                "pbgid": 200016
              }
            ],
            "armor": [],
            "id": "camel-archer-4"
          }
        }
      },
      {
        "id": "camel-rider",
        "name": "Camel Rider",
        "type": "unit",
        "civs": [
          "ab"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Cavalry",
          "Camel"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry",
          "camel"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/camel-rider-3.png",
        "description": "Highly mobile and durable melee unit effective against all cavalry.\n+Bonus damage to cavalry\n+Causes enemy cavalry to deal less damage\n-High cost",
        "variations": [
          {
            "id": "camel-rider-3",
            "pbgid": 200051,
            "attribName": "unit_camel_rider_3_abb",
            "civs": [
              "ab"
            ]
          },
          {
            "id": "camel-rider-4",
            "pbgid": 200052,
            "attribName": "unit_camel_rider_4_abb",
            "civs": [
              "ab"
            ]
          }
        ],
        "baseId": "camel-rider",
        "age": 3,
        "costs": {
          "food": 180,
          "wood": 0,
          "stone": 0,
          "gold": 60,
          "total": 240,
          "popcap": 1,
          "time": 35
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 270,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "camel-rider-3": {
            "name": "Camel Rider",
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 14,
                "speed": 1.125,
                "range": {
                  "min": 0,
                  "max": 0.42
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 14,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_mameluke_sword_3",
                "pbgid": 204178
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [],
            "id": "camel-rider-3"
          },
          "camel-rider-4": {
            "name": "Elite Camel Rider",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/camel-rider-4.png",
            "hitpoints": 320,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 16,
                "speed": 1.125,
                "range": {
                  "min": 0,
                  "max": 0.42
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 16,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_mameluke_sword_4",
                "pbgid": 204181
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [],
            "id": "camel-rider-4"
          }
        }
      },
      {
        "id": "imam",
        "name": "Imam",
        "type": "unit",
        "civs": [
          "ab",
          "ma",
          "ot"
        ],
        "unique": false,
        "displayClasses": [
          "Religious"
        ],
        "classes": [
          "religious"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/imam-3.png",
        "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
        "variations": [
          {
            "id": "imam-3",
            "pbgid": 200107,
            "attribName": "unit_monk_3_abb",
            "civs": [
              "ab"
            ],
            "weapons": []
          },
          {
            "id": "imam-3",
            "pbgid": 2059001,
            "attribName": "unit_monk_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "imam-3",
            "pbgid": 2046445,
            "attribName": "unit_monk_3_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "imam",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 0,
          "stone": 0,
          "gold": 150,
          "total": 150,
          "popcap": 1,
          "time": 30
        },
        "producedBy": [
          "mosque"
        ],
        "hitpoints": 90,
        "weapons": [
          {
            "name": "(translation not found)",
            "type": "ranged",
            "damage": 0,
            "speed": 10002.725,
            "range": {
              "min": 0,
              "max": 7.5
            },
            "modifiers": [],
            "durations": {
              "aim": 10000,
              "windup": 0.25,
              "attack": 0.125,
              "winddown": 0.5,
              "reload": 0,
              "setup": 0,
              "teardown": 0,
              "cooldown": 1.85
            },
            "attribName": "weapon_dummy",
            "pbgid": 129908
          }
        ],
        "armor": [],
        "sight": {
          "line": 30,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {}
      },
      {
        "id": "donso",
        "name": "Donso",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Infantry"
        ],
        "classes": [
          "light",
          "melee",
          "infantry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/donso-1.png",
        "description": "Infantry best used against mounted units. Periodically throws a javelin when attacking from ranged.\n+ Anti-cavalry specialist\n+ Comes with melee armor\n- Weak against armored infantry\n- Countered by Archers and Longbowmen",
        "variations": [
          {
            "id": "donso-1",
            "pbgid": 2304555,
            "attribName": "unit_spearman_1_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "donso-2",
            "pbgid": 2299118,
            "attribName": "unit_spearman_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "donso-3",
            "pbgid": 2959907,
            "attribName": "unit_spearman_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "donso-4",
            "pbgid": 2851821,
            "attribName": "unit_spearman_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "donso",
        "age": 1,
        "costs": {
          "food": 60,
          "wood": 30,
          "stone": 0,
          "gold": 0,
          "total": 90,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "barracks",
          "farimba-garrison"
        ],
        "hitpoints": 80,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {
          "donso-1": {
            "name": "Donso",
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 7,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 17,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_1_mal",
                "pbgid": 2072749
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              },
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 5,
                "speed": 0.75,
                "range": {
                  "min": 2.5,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 5,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_1_donso",
                "pbgid": 2062219
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 1
              }
            ],
            "id": "donso-1"
          },
          "donso-2": {
            "name": "Hardened Donso",
            "age": 2,
            "icon": "https://data.aoe4world.com/images/units/donso-2.png",
            "hitpoints": 100,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 8,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_2_mal",
                "pbgid": 2072750
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              },
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 7,
                "speed": 0.75,
                "range": {
                  "min": 2.5,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 7,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_donso_2_mal",
                "pbgid": 2089282
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 1
              }
            ],
            "id": "donso-2"
          },
          "donso-3": {
            "name": "Veteran Donso",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/donso-3.png",
            "hitpoints": 120,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 23,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_3_mal",
                "pbgid": 2072751
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              },
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 8,
                "speed": 0.75,
                "range": {
                  "min": 2.5,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_donso_3_mal",
                "pbgid": 2089283
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 1
              }
            ],
            "id": "donso-3"
          },
          "donso-4": {
            "name": "Elite Donso",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/donso-4.png",
            "hitpoints": 140,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.875,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 28,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.75
                },
                "attribName": "weapon_spearman_4_mal",
                "pbgid": 2072752
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              },
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 10,
                "speed": 0.75,
                "range": {
                  "min": 2.5,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_donso_4_mal",
                "pbgid": 2089284
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 1
              }
            ],
            "id": "donso-4"
          }
        }
      },
      {
        "id": "hunting-canoe",
        "name": "Hunting Canoe",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": false,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/hunting-canoe-2.png",
        "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "hunting-canoe-2",
            "baseId": "hunting-canoe",
            "type": "unit",
            "name": "Hunting Canoe",
            "pbgid": 2071545,
            "attribName": "unit_naval_light_combat_ship_2_mal",
            "age": 2,
            "civs": [
              "ma"
            ],
            "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
            "classes": [
              "archer",
              "ship"
            ],
            "displayClasses": [
              "Archer Ship"
            ],
            "unique": false,
            "costs": {
              "food": 90,
              "wood": 150,
              "stone": 0,
              "gold": 0,
              "total": 240,
              "popcap": 3,
              "time": 25
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/hunting-canoe-2.png",
            "hitpoints": 300,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "fireship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 18,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.125,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 5
                },
                "attribName": "weapon_naval_arrow_ship_arrow",
                "pbgid": 2034306
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1.75
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "javelin-thrower",
        "name": "Javelin Thrower",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/javelin-thrower-2.png",
        "description": "Ranged infantry effective against other ranged units.\n+ Anti-ranged specialist\n+Increased weapon range\n- Comes with ranged armor\n- Low health\n- Countered by Horsemen",
        "variations": [
          {
            "id": "javelin-thrower-2",
            "pbgid": 2062109,
            "attribName": "unit_javelin_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "javelin-thrower-3",
            "pbgid": 2062104,
            "attribName": "unit_javelin_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "javelin-thrower-4",
            "pbgid": 2062105,
            "attribName": "unit_javelin_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "javelin-thrower",
        "age": 2,
        "costs": {
          "food": 80,
          "wood": 0,
          "stone": 0,
          "gold": 40,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "archery-range",
          "farimba-garrison"
        ],
        "hitpoints": 70,
        "sight": {
          "line": 40,
          "height": 10
        },
        "movement": {
          "speed": 1.25
        },
        "shared": {
          "javelin-thrower-2": {
            "name": "Javelin Thrower",
            "weapons": [
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 8,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 4,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.875,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_2",
                "pbgid": 2059094
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "javelin-thrower-2"
          },
          "javelin-thrower-3": {
            "name": "Veteran Javelin Thrower",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/javelin-thrower-3.png",
            "hitpoints": 80,
            "weapons": [
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 8,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.875,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_3",
                "pbgid": 2059095
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "javelin-thrower-3"
          },
          "javelin-thrower-4": {
            "name": "Elite Javelin Thrower",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/javelin-thrower-4.png",
            "hitpoints": 95,
            "weapons": [
              {
                "name": "Javelin",
                "type": "ranged",
                "damage": 13,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 13,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.125,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.875,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_javelin_4",
                "pbgid": 2059096
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "id": "javelin-thrower-4"
          }
        }
      },
      {
        "id": "musofadi-gunner",
        "name": "Musofadi Gunner",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Gunpowder Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "gunpowder",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/musofadi-gunner-4.png",
        "description": "Powerful ranged infantry effective at ambush attacks.\n+ Increased movement speed\n+ Can enter stealth\n+ High damage\n- High cost",
        "variations": [
          {
            "id": "musofadi-gunner-4",
            "baseId": "musofadi-gunner",
            "type": "unit",
            "name": "Musofadi Gunner",
            "pbgid": 2810898,
            "attribName": "unit_handcannon_4_mal",
            "age": 4,
            "civs": [
              "ma"
            ],
            "description": "Powerful ranged infantry effective at ambush attacks.\n+ Increased movement speed\n+ Can enter stealth\n+ High damage\n- High cost",
            "classes": [
              "light",
              "ranged",
              "gunpowder",
              "infantry"
            ],
            "displayClasses": [
              "Light Ranged Gunpowder Infantry"
            ],
            "unique": true,
            "costs": {
              "food": 110,
              "wood": 0,
              "stone": 0,
              "gold": 130,
              "total": 240,
              "popcap": 1,
              "time": 35
            },
            "producedBy": [
              "archery-range",
              "farimba-garrison"
            ],
            "icon": "https://data.aoe4world.com/images/units/musofadi-gunner-4.png",
            "hitpoints": 115,
            "weapons": [
              {
                "name": "Handcannon",
                "type": "ranged",
                "damage": 38,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_handcannon_4_mal",
                "pbgid": 2102847
              }
            ],
            "armor": [],
            "sight": {
              "line": 32,
              "height": 10
            },
            "movement": {
              "speed": 1.25
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "musofadi-warrior",
        "name": "Musofadi Warrior",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Infantry"
        ],
        "classes": [
          "light",
          "melee",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/musofadi-warrior-2.png",
        "description": "Infantry effective at ambush attacks and countering heavy armored targets.\n+ Can enter stealth\n+ Anti-armor specialist\n- Low health\n- Countered by Archers",
        "variations": [
          {
            "id": "musofadi-warrior-2",
            "pbgid": 2059654,
            "attribName": "unit_gbeto_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "musofadi-warrior-3",
            "pbgid": 2059655,
            "attribName": "unit_gbeto_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "musofadi-warrior-4",
            "pbgid": 2059656,
            "attribName": "unit_gbeto_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "musofadi-warrior",
        "age": 2,
        "costs": {
          "food": 50,
          "wood": 0,
          "stone": 0,
          "gold": 30,
          "total": 80,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "barracks",
          "farimba-garrison"
        ],
        "hitpoints": 85,
        "sight": {
          "line": 36,
          "height": 10
        },
        "movement": {
          "speed": 1.375
        },
        "shared": {
          "musofadi-warrior-2": {
            "name": "Musofadi Warrior",
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 8,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_2_mal",
                "pbgid": 2072969
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "musofadi-warrior-2"
          },
          "musofadi-warrior-3": {
            "name": "Veteran Musofadi Warrior",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/musofadi-warrior-3.png",
            "hitpoints": 105,
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 9,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 15,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_3_mal",
                "pbgid": 2072743
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "musofadi-warrior-3"
          },
          "musofadi-warrior-4": {
            "name": "Elite Musofadi Warrior",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/musofadi-warrior-4.png",
            "hitpoints": 130,
            "weapons": [
              {
                "name": "Khanda",
                "type": "melee",
                "damage": 12,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "heavy"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 18,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_mal",
                "pbgid": 2072747
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "musofadi-warrior-4"
          }
        }
      },
      {
        "id": "sofa",
        "name": "Sofa",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Heavy Melee Cavalry"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/sofa-2.png",
        "description": "Cheaper heavy cavalry for reduced health and armor.\n+ High movement speed\n+ Cheaper cost\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
        "variations": [
          {
            "id": "sofa-2",
            "pbgid": 2748913,
            "attribName": "unit_horseman_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "sofa-3",
            "pbgid": 2106325,
            "attribName": "unit_horseman_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "sofa-4",
            "pbgid": 2705913,
            "attribName": "unit_horseman_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "sofa",
        "age": 2,
        "costs": {
          "food": 120,
          "wood": 0,
          "stone": 0,
          "gold": 60,
          "total": 180,
          "popcap": 1,
          "time": 30
        },
        "producedBy": [
          "stable"
        ],
        "hitpoints": 155,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.725
        },
        "shared": {
          "sofa-2": {
            "name": "Sofa",
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 16,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 2,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1
                },
                "attribName": "weapon_horseman_2_mal",
                "pbgid": 2072970
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 2
              },
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "id": "sofa-2"
          },
          "sofa-3": {
            "name": "Veteran Sofa",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/sofa-3.png",
            "hitpoints": 195,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 20,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 3,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1
                },
                "attribName": "weapon_horseman_3_mal",
                "pbgid": 2072973
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 3
              },
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "sofa-3"
          },
          "sofa-4": {
            "name": "Elite Sofa",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/sofa-4.png",
            "hitpoints": 230,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 25,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
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
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1
                },
                "attribName": "weapon_horseman_4_mal",
                "pbgid": 2072975
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "sofa-4"
          }
        }
      },
      {
        "id": "war-canoe",
        "name": "War Canoe",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": false,
        "displayClasses": [
          "Springald Ship"
        ],
        "classes": [
          "springald",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/war-canoe-2.png",
        "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
        "variations": [
          {
            "id": "war-canoe-2",
            "baseId": "war-canoe",
            "type": "unit",
            "name": "War Canoe",
            "pbgid": 2229104,
            "attribName": "unit_naval_combat_ship_2_mal",
            "age": 2,
            "civs": [
              "ma"
            ],
            "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
            "classes": [
              "springald",
              "ship"
            ],
            "displayClasses": [
              "Springald Ship"
            ],
            "unique": false,
            "costs": {
              "food": 120,
              "wood": 200,
              "stone": 0,
              "gold": 30,
              "total": 350,
              "popcap": 3,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/war-canoe-2.png",
            "hitpoints": 450,
            "weapons": [
              {
                "name": "Ballista",
                "type": "ranged",
                "damage": 35,
                "speed": 4.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "archer",
                          "ship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_combat_ship_springald",
                "pbgid": 2102494
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "sight": {
              "line": 45,
              "height": 10
            },
            "movement": {
              "speed": 1.375
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "warrior-scout",
        "name": "Warrior Scout",
        "type": "unit",
        "civs": [
          "ma"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Cavalry"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/warrior-scout-2.png",
        "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased move speed\n+ Able to see into Stealth Forests\n+ Health regeneration\n- Weak in combat",
        "variations": [
          {
            "id": "warrior-scout-2",
            "pbgid": 2073403,
            "attribName": "unit_scout_2_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "warrior-scout-3",
            "pbgid": 2073646,
            "attribName": "unit_scout_3_mal",
            "civs": [
              "ma"
            ]
          },
          {
            "id": "warrior-scout-4",
            "pbgid": 2073647,
            "attribName": "unit_scout_4_mal",
            "civs": [
              "ma"
            ]
          }
        ],
        "baseId": "warrior-scout",
        "age": 2,
        "costs": {
          "food": 90,
          "wood": 0,
          "stone": 0,
          "gold": 0,
          "total": 90,
          "popcap": 1,
          "time": 15
        },
        "producedBy": [
          "stable",
          "town-center",
          "capital-town-center"
        ],
        "hitpoints": 110,
        "sight": {
          "line": 41,
          "height": 501
        },
        "movement": {
          "speed": 1.875
        },
        "shared": {
          "warrior-scout-2": {
            "name": "Warrior Scout",
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 7,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_2_mal",
                "pbgid": 2074532
              },
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 3,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 2.875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_scout_hunt_ranged_1",
                "pbgid": 174090
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "warrior-scout-2"
          },
          "warrior-scout-3": {
            "name": "Veteran Warrior Scout",
            "age": 3,
            "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak in combat",
            "icon": "https://data.aoe4world.com/images/units/warrior-scout-3.png",
            "hitpoints": 130,
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 9,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_3_mal",
                "pbgid": 2074533
              },
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 3,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 2.875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_scout_hunt_ranged_1",
                "pbgid": 174090
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "warrior-scout-3"
          },
          "warrior-scout-4": {
            "name": "Elite Warrior Scout",
            "age": 4,
            "description": "Fast cavalry effective at raiding and fighting ranged units.\n+ Bonus damage vs ranged\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak vs melee units",
            "icon": "https://data.aoe4world.com/images/units/warrior-scout-4.png",
            "hitpoints": 155,
            "weapons": [
              {
                "name": "Tamba",
                "type": "melee",
                "damage": 11,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "scout"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "siege"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 10,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.375,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.5
                },
                "attribName": "weapon_scout_4_mal",
                "pbgid": 2074534
              },
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 3,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 2.875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_scout_hunt_ranged_1",
                "pbgid": 174090
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [],
            "id": "warrior-scout-4"
          }
        }
      },
      {
        "id": "huihui-pao",
        "name": "Huihui Pao",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Khaganate Unit"
        ],
        "classes": [
          "siege",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/huihui-pao-1.png",
        "description": "Massive siege engine with incredible range, extra effective at destroying buildings and walls.\n+ Extremely long range\n- Must be set up to fire\n\nRandomly spawns from the Khaganate Palace.",
        "variations": [
          {
            "id": "huihui-pao-1",
            "baseId": "huihui-pao",
            "type": "unit",
            "name": "Huihui Pao",
            "pbgid": 2117335,
            "attribName": "unit_khaganate_great_trebuchet_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Massive siege engine with incredible range, extra effective at destroying buildings and walls.\n+ Extremely long range\n- Must be set up to fire\n\nRandomly spawns from the Khaganate Palace.",
            "classes": [
              "siege",
              "khaganate"
            ],
            "displayClasses": [
              "Siege",
              "Khaganate Unit"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 3,
              "time": 63
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/huihui-pao-1.png",
            "hitpoints": 260,
            "weapons": [
              {
                "name": "Huihui Pao",
                "type": "siege",
                "damage": 75,
                "speed": 13.625,
                "range": {
                  "min": 2.75,
                  "max": 18
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 600,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.625,
                  "attack": 0.125,
                  "winddown": 7.375,
                  "reload": 5,
                  "setup": 5,
                  "teardown": 2,
                  "cooldown": 0
                },
                "attribName": "weapon_khaganate_huihui_pao",
                "pbgid": 2117338
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 80,
              "height": 10
            },
            "movement": {
              "speed": 0.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-horse-archer",
        "name": "Khaganate Elite Horse Archer",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Light Ranged Cavalry",
          "Khaganate Unit"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/horse-archer-1.png",
        "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-horse-archer-1",
            "baseId": "khaganate-horse-archer",
            "type": "unit",
            "name": "Khaganate Elite Horse Archer",
            "pbgid": 2104798,
            "attribName": "unit_khaganate_horsearcher_rus_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
            "classes": [
              "light",
              "ranged",
              "cavalry",
              "khaganate"
            ],
            "displayClasses": [
              "Light Ranged Cavalry",
              "Khaganate Unit"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 5,
              "time": 50
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/horse-archer-1.png",
            "hitpoints": 100,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 14,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.375,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_4_rus",
                "pbgid": 134964
              }
            ],
            "armor": [],
            "sight": {
              "line": 34,
              "height": 10
            },
            "movement": {
              "speed": 1.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-knight",
        "name": "Khaganate Elite Knight",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Cavalry",
          "Khaganate Unit"
        ],
        "classes": [
          "heavy",
          "melee",
          "cavalry",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/knight-1.png",
        "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRandomly spawns 3 at the time from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-knight-1",
            "baseId": "khaganate-knight",
            "type": "unit",
            "name": "Khaganate Elite Knight",
            "pbgid": 2117332,
            "attribName": "unit_khaganate_knight_rus_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRandomly spawns 3 at the time from the Khaganate Palace.",
            "classes": [
              "heavy",
              "melee",
              "cavalry",
              "khaganate"
            ],
            "displayClasses": [
              "Heavy Melee Cavalry",
              "Khaganate Unit"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 3,
              "time": 60
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/knight-1.png",
            "hitpoints": 270,
            "weapons": [
              {
                "name": "Sword",
                "type": "melee",
                "damage": 29,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.875
                },
                "attribName": "weapon_khagnate_knight_rus_mon",
                "pbgid": 2117334
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 5
              },
              {
                "type": "ranged",
                "value": 5
              }
            ],
            "sight": {
              "line": 28,
              "height": 10
            },
            "movement": {
              "speed": 1.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-mangudai",
        "name": "Khaganate Elite Mangudai",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Cavalry",
          "Khaganate Unit"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/mangudai-1.png",
        "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range\n\nRandomly spawns from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-mangudai-1",
            "baseId": "khaganate-mangudai",
            "type": "unit",
            "name": "Khaganate Elite Mangudai",
            "pbgid": 2122464,
            "attribName": "unit_khaganate_mangudai_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range\n\nRandomly spawns from the Khaganate Palace.",
            "classes": [
              "light",
              "ranged",
              "cavalry",
              "khaganate"
            ],
            "displayClasses": [
              "Light Ranged Cavalry",
              "Khaganate Unit"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 1,
              "time": 50
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/mangudai-1.png",
            "hitpoints": 120,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 0.875,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.125,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_4_mon",
                "pbgid": 136276
              }
            ],
            "armor": [],
            "sight": {
              "line": 34,
              "height": 10
            },
            "movement": {
              "speed": 1.5625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-nest-of-bees",
        "name": "Khaganate Nest of Bees",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Siege",
          "Gunpowder",
          "Khaganate Unit"
        ],
        "classes": [
          "siege",
          "gunpowder",
          "khaganate"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
        "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded\n\nRandomly spawns from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-nest-of-bees-3",
            "baseId": "khaganate-nest-of-bees",
            "type": "unit",
            "name": "Khaganate Nest of Bees",
            "pbgid": 2104797,
            "attribName": "unit_khaganate_nest_of_bees_4_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded\n\nRandomly spawns from the Khaganate Palace.",
            "classes": [
              "siege",
              "gunpowder",
              "khaganate"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder",
              "Khaganate Unit"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 3,
              "time": 50
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
            "hitpoints": 140,
            "weapons": [
              {
                "name": "Rocket Arrow",
                "type": "siege",
                "damage": 8,
                "speed": 6.5,
                "range": {
                  "min": 3,
                  "max": 8
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 4,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 1,
                  "winddown": 2,
                  "reload": 3,
                  "setup": 0.25,
                  "teardown": 1,
                  "cooldown": 0
                },
                "burst": {
                  "count": 8
                },
                "attribName": "weapon_nest_of_bees_4_chi",
                "pbgid": 166609
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "sight": {
              "line": 64,
              "height": 10
            },
            "movement": {
              "speed": 0.8125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-palace-guard",
        "name": "Khaganate Elite Palace Guard",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Heavy Melee Infantry",
          "Khaganate Unit"
        ],
        "classes": [
          "heavy",
          "melee",
          "infantry",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/palace-guard-1.png",
        "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Armored\n- Countered by Knights, Lancers, and Crossbowmen.\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-palace-guard-1",
            "baseId": "khaganate-palace-guard",
            "type": "unit",
            "name": "Khaganate Elite Palace Guard",
            "pbgid": 2104796,
            "attribName": "unit_khaganate_manatarms_china_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Armored\n- Countered by Knights, Lancers, and Crossbowmen.\n\nRandomly spawns 5 at the time from the Khaganate Palace.",
            "classes": [
              "heavy",
              "melee",
              "infantry",
              "khaganate"
            ],
            "displayClasses": [
              "Heavy Melee Infantry",
              "Khaganate Unit"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 5,
              "time": 50
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/palace-guard-1.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Guandao",
                "type": "melee",
                "damage": 14,
                "speed": 1.375,
                "range": {
                  "min": 0,
                  "max": 0.295
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_manatarms_4_chi",
                "pbgid": 137339
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch",
                "pbgid": 123518
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 4
              },
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 1.375
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khaganate-warrior-monk",
        "name": "Khaganate Warrior Monk",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Religious Cavalry",
          "Khaganate Unit"
        ],
        "classes": [
          "religious",
          "cavalry",
          "khaganate"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/warrior-monk-1.png",
        "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage\n\nRandomly spawns 2 at the time from the Khaganate Palace.",
        "variations": [
          {
            "id": "khaganate-warrior-monk-1",
            "baseId": "khaganate-warrior-monk",
            "type": "unit",
            "name": "Khaganate Warrior Monk",
            "pbgid": 2104799,
            "attribName": "unit_khaganate_monk_rus_mon",
            "age": 1,
            "civs": [
              "mo"
            ],
            "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage\n\nRandomly spawns 2 at the time from the Khaganate Palace.",
            "classes": [
              "religious",
              "cavalry",
              "khaganate"
            ],
            "displayClasses": [
              "Religious Cavalry",
              "Khaganate Unit"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 0,
              "popcap": 2,
              "time": 40
            },
            "producedBy": [
              "khaganate-palace"
            ],
            "icon": "https://data.aoe4world.com/images/units/warrior-monk-1.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.75
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.625,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.5
                },
                "attribName": "weapon_monk_3_rus",
                "pbgid": 2031620
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ],
            "armor": [],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 1.625
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "khan",
        "name": "Khan",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Cavalry"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry"
        ],
        "minAge": 1,
        "icon": "https://data.aoe4world.com/images/units/khan-1.png",
        "description": "Potent ranged cavalry leader able to ignite Signal Arrows to improve the combat capabilities of nearby military units. Reappears at a Town Center if killed.\n+ Vision of a Scout\n+ Herds sheep\n+ High utility in large armies\n+ Automatically improves as the Ages are advanced\n- Only a single Khan per Mongol Civilization at a time",
        "variations": [
          {
            "id": "khan-1",
            "pbgid": 129651,
            "attribName": "unit_khan_1_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "khan-2",
            "pbgid": 130820,
            "attribName": "unit_khan_2_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "khan-3",
            "pbgid": 130821,
            "attribName": "unit_khan_3_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "khan-4",
            "pbgid": 1261685,
            "attribName": "unit_khan_4_mon",
            "civs": [
              "mo"
            ]
          }
        ],
        "baseId": "khan",
        "age": 1,
        "costs": {
          "gold": 0,
          "wood": 0,
          "food": 0,
          "stone": 0,
          "total": 0,
          "time": 22.5
        },
        "producedBy": [],
        "hitpoints": 90,
        "sight": {
          "line": 41,
          "height": 501
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "khan-1": {
            "name": "Khan",
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 2,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_khan_1_mon",
                "pbgid": 172306
              }
            ],
            "armor": [],
            "id": "khan-1"
          },
          "khan-2": {
            "name": "Hardened Khan",
            "age": 2,
            "icon": "https://data.aoe4world.com/images/units/khan-2.png",
            "hitpoints": 115,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 3,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 5.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_khan_2_mon",
                "pbgid": 172307
              }
            ],
            "armor": [],
            "sight": {
              "line": 50,
              "height": 501
            },
            "id": "khan-2"
          },
          "khan-3": {
            "name": "Veteran Khan",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/khan-3.png",
            "hitpoints": 300,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 5.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_khan_3_mon",
                "pbgid": 172308
              }
            ],
            "armor": [],
            "sight": {
              "line": 55,
              "height": 501
            },
            "id": "khan-3"
          },
          "khan-4": {
            "name": "Elite Khan",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/khan-4.png",
            "hitpoints": 450,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 24,
                "speed": 2,
                "range": {
                  "min": 0,
                  "max": 5.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_khan_4_mon",
                "pbgid": 1261612
              }
            ],
            "armor": [
              {
                "type": "melee",
                "value": 2
              },
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "sight": {
              "line": 60,
              "height": 501
            },
            "id": "khan-4"
          }
        }
      },
      {
        "id": "light-junk",
        "name": "Light Junk",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/light-junk-2.png",
        "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "light-junk-2",
            "baseId": "light-junk",
            "type": "unit",
            "name": "Light Junk",
            "pbgid": 2033751,
            "attribName": "unit_naval_light_junk_2_mon",
            "age": 2,
            "civs": [
              "mo"
            ],
            "description": "Light war vessel armed with a crew of archers.\n+ Increased maneuverability and speed.\n+ Benefits from ranged damage Blacksmith technology",
            "classes": [
              "archer",
              "ship"
            ],
            "displayClasses": [
              "Archer Ship"
            ],
            "unique": false,
            "costs": {
              "food": 90,
              "wood": 150,
              "stone": 0,
              "gold": 0,
              "total": 240,
              "popcap": 3,
              "time": 25
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/light-junk-2.png",
            "hitpoints": 300,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "fireship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 18,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.125,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 5
                },
                "attribName": "weapon_naval_arrow_ship_arrow",
                "pbgid": 2034306
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1.75
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "mangudai",
        "name": "Mangudai",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Cavalry"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/mangudai-2.png",
        "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range",
        "variations": [
          {
            "id": "mangudai-2",
            "pbgid": 129666,
            "attribName": "unit_horsearcher_2_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "mangudai-3",
            "pbgid": 129667,
            "attribName": "unit_horsearcher_3_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "mangudai-4",
            "pbgid": 136250,
            "attribName": "unit_horsearcher_4_mon",
            "civs": [
              "mo"
            ]
          }
        ],
        "baseId": "mangudai",
        "age": 2,
        "costs": {
          "food": 120,
          "wood": 0,
          "stone": 0,
          "gold": 40,
          "total": 160,
          "popcap": 1,
          "time": 30
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 85,
        "sight": {
          "line": 34,
          "height": 10
        },
        "movement": {
          "speed": 1.5625
        },
        "shared": {
          "mangudai-2": {
            "name": "Mangudai",
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 5,
                "speed": 0.875,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.125,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_2_mon",
                "pbgid": 131184
              }
            ],
            "armor": [],
            "id": "mangudai-2"
          },
          "mangudai-3": {
            "name": "Veteran Mangudai",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/mangudai-3.png",
            "hitpoints": 105,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 0.875,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.125,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_3_mon",
                "pbgid": 131185
              }
            ],
            "armor": [],
            "id": "mangudai-3"
          },
          "mangudai-4": {
            "name": "Elite Mangudai",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/mangudai-4.png",
            "hitpoints": 120,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 8,
                "speed": 0.875,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.125,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_4_mon",
                "pbgid": 136276
              }
            ],
            "armor": [],
            "id": "mangudai-4"
          }
        }
      },
      {
        "id": "shaman",
        "name": "Shaman",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Religious"
        ],
        "classes": [
          "religious"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/shaman-3.png",
        "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
        "variations": [
          {
            "id": "shaman-3",
            "baseId": "shaman",
            "type": "unit",
            "name": "Shaman",
            "pbgid": 137169,
            "attribName": "unit_monk_3_mon",
            "age": 3,
            "civs": [
              "mo"
            ],
            "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
            "classes": [
              "religious"
            ],
            "displayClasses": [
              "Religious"
            ],
            "unique": false,
            "costs": {
              "food": 0,
              "wood": 0,
              "stone": 0,
              "gold": 150,
              "total": 150,
              "popcap": 1,
              "time": 30
            },
            "producedBy": [
              "prayer-tent"
            ],
            "icon": "https://data.aoe4world.com/images/units/shaman-3.png",
            "hitpoints": 90,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "traction-trebuchet",
        "name": "Traction Trebuchet",
        "type": "unit",
        "civs": [
          "mo"
        ],
        "unique": false,
        "displayClasses": [
          "Siege"
        ],
        "classes": [
          "siege"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/traction-trebuchet-3.png",
        "description": "Powerful siege engine effective at destroying buildings and walls over a long distance.\n+ Bonus damage vs buildings\n+ High mobility\n- Must be set up to fire\n- Inaccurate against units",
        "variations": [
          {
            "id": "traction-trebuchet-3",
            "pbgid": 174217,
            "attribName": "unit_trebuchet_4_tr_field_construct_mon",
            "civs": [
              "mo"
            ]
          },
          {
            "id": "traction-trebuchet-4",
            "pbgid": 171143,
            "attribName": "unit_trebuchet_4_tr_mon",
            "civs": [
              "mo"
            ]
          }
        ],
        "baseId": "traction-trebuchet",
        "age": 3,
        "costs": {
          "food": 0,
          "wood": 400,
          "stone": 0,
          "gold": 150,
          "total": 550,
          "popcap": 3,
          "time": 80
        },
        "producedBy": [
          "spearman",
          "man-at-arms",
          "archer",
          "crossbowman",
          "handcannoneer"
        ],
        "hitpoints": 190,
        "sight": {
          "line": 68,
          "height": 10
        },
        "movement": {
          "speed": 0.875
        },
        "shared": {
          "traction-trebuchet-3": {
            "name": "Traction Trebuchet",
            "weapons": [
              {
                "name": "Trebuchet",
                "type": "siege",
                "damage": 50,
                "speed": 9.625,
                "range": {
                  "min": 2.75,
                  "max": 14
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 250,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 1.875,
                  "attack": 0.125,
                  "winddown": 6.125,
                  "reload": 1,
                  "setup": 1,
                  "teardown": 1,
                  "cooldown": 0
                },
                "attribName": "weapon_trebuchet_4_traction",
                "pbgid": 127504
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "id": "traction-trebuchet-3"
          },
          "traction-trebuchet-4": {
            "name": "Traction Trebuchet",
            "age": 4,
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 400,
              "stone": 0,
              "gold": 150,
              "total": 550,
              "popcap": 3,
              "time": 35
            },
            "producedBy": [
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/units/traction-trebuchet-4.png",
            "weapons": [
              {
                "name": "Trebuchet",
                "type": "siege",
                "damage": 50,
                "speed": 9.625,
                "range": {
                  "min": 2.75,
                  "max": 14
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 250,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 200,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 1.875,
                  "attack": 0.125,
                  "winddown": 6.125,
                  "reload": 1,
                  "setup": 1,
                  "teardown": 1,
                  "cooldown": 0
                },
                "attribName": "weapon_trebuchet_4_traction_mon",
                "pbgid": 2033641
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 20
              }
            ],
            "id": "traction-trebuchet-4"
          }
        }
      },
      {
        "id": "grand-galley",
        "name": "Grand Galley",
        "type": "unit",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Ship"
        ],
        "classes": [
          "ship"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/grand-galley-4.png",
        "description": "Large oared vessel which can be upgraded into a naval Military School.\n+ Large hold which can be garrisoned by any unit once upgraded into a Military School\n+ Very long range\n- Lower damage",
        "variations": [
          {
            "id": "grand-galley-4",
            "baseId": "grand-galley",
            "type": "unit",
            "name": "Grand Galley",
            "pbgid": 2056917,
            "attribName": "unit_naval_galleass_4_ott",
            "age": 4,
            "civs": [
              "ot"
            ],
            "description": "Large oared vessel which can be upgraded into a naval Military School.\n+ Large hold which can be garrisoned by any unit once upgraded into a Military School\n+ Very long range\n- Lower damage",
            "classes": [
              "ship"
            ],
            "displayClasses": [
              "Ship"
            ],
            "unique": true,
            "costs": {
              "food": 150,
              "wood": 360,
              "stone": 0,
              "gold": 300,
              "total": 810,
              "popcap": 5,
              "time": 50
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/grand-galley-4.png",
            "hitpoints": 750,
            "weapons": [
              {
                "name": "Bombard",
                "type": "siege",
                "damage": 35,
                "speed": 4,
                "range": {
                  "min": 0,
                  "max": 9.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.75,
                  "winddown": 0.5,
                  "reload": 2,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 3
                },
                "attribName": "weapon_naval_galley_bombard_ott",
                "pbgid": 2064709
              }
            ],
            "armor": [],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1
            },
            "garrison": {
              "capacity": 25,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "siege",
                "monk",
                "khan",
                "cavalry",
                "trader"
              ]
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "great-bombard",
        "name": "Great Bombard",
        "type": "unit",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Siege",
          "Gunpowder"
        ],
        "classes": [
          "siege",
          "gunpowder"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/great-bombard-4.png",
        "description": "Largest cannon that can be fielded. Excellent against buildings or groups of targets.\n+ High damage\n+ Area damage\n+ Long Range\n- Must be set up to fire",
        "variations": [
          {
            "id": "great-bombard-4",
            "baseId": "great-bombard",
            "type": "unit",
            "name": "Great Bombard",
            "pbgid": 2058832,
            "attribName": "unit_great_bombard_4_ott",
            "age": 4,
            "civs": [
              "ot"
            ],
            "description": "Largest cannon that can be fielded. Excellent against buildings or groups of targets.\n+ High damage\n+ Area damage\n+ Long Range\n- Must be set up to fire",
            "classes": [
              "siege",
              "gunpowder"
            ],
            "displayClasses": [
              "Siege",
              "Gunpowder"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 450,
              "stone": 0,
              "gold": 900,
              "total": 1350,
              "popcap": 4,
              "time": 60
            },
            "producedBy": [
              "mehmed-imperial-armory",
              "siege-workshop"
            ],
            "icon": "https://data.aoe4world.com/images/units/great-bombard-4.png",
            "hitpoints": 350,
            "weapons": [
              {
                "name": "Great Bombard",
                "type": "siege",
                "damage": 190,
                "speed": 7.75,
                "range": {
                  "min": 3.75,
                  "max": 11
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 580,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "unit"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 580,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "infantry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 100,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 1.375,
                  "reload": 5.75,
                  "setup": 2,
                  "teardown": 2,
                  "cooldown": 0
                },
                "attribName": "weapon_great_bombard_4_ott",
                "pbgid": 2063083
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 30
              }
            ],
            "sight": {
              "line": 56,
              "height": 10
            },
            "movement": {
              "speed": 0.625
            },
            "garrison": {
              "capacity": 1,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "monk"
              ]
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "janissary",
        "name": "Janissary",
        "type": "unit",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Light Gunpowder Infantry"
        ],
        "classes": [
          "light",
          "gunpowder",
          "infantry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/janissary-3.png",
        "description": "Powerful infantry effective against cavalry and can repair siege engines.\n+ High damage\n+ Bonus damage against cavalry\n- High cost\n- Slow movement speed\n- Receives +50% ranged damage",
        "variations": [
          {
            "id": "janissary-3",
            "pbgid": 2059265,
            "attribName": "unit_handcannon_3_ott",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "janissary-4",
            "pbgid": 2046435,
            "attribName": "unit_handcannon_4_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "janissary",
        "age": 3,
        "costs": {
          "food": 60,
          "wood": 0,
          "stone": 0,
          "gold": 100,
          "total": 160,
          "popcap": 1,
          "time": 24
        },
        "producedBy": [
          "military-school",
          "archery-range"
        ],
        "hitpoints": 90,
        "sight": {
          "line": 32,
          "height": 10
        },
        "movement": {
          "speed": 1.125
        },
        "shared": {
          "janissary-3": {
            "name": "Janissary",
            "weapons": [
              {
                "name": "Trench Gun",
                "type": "ranged",
                "damage": 16,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 16,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.625,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_handcannon_3_ott",
                "pbgid": 2063080
              }
            ],
            "armor": [],
            "id": "janissary-3"
          },
          "janissary-4": {
            "name": "Elite Janissary",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/janissary-4.png",
            "hitpoints": 105,
            "weapons": [
              {
                "name": "Trench Gun",
                "type": "ranged",
                "damage": 20,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 3.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 20,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.625,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_handcannon_4_ott",
                "pbgid": 2063081
              }
            ],
            "armor": [],
            "id": "janissary-4"
          }
        }
      },
      {
        "id": "mehter",
        "name": "Mehter",
        "type": "unit",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Light Cavalry"
        ],
        "classes": [
          "light",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/mehter-2.png",
        "description": "War drummer that enhances units in an area, except Villagers and Traders.\n+ War drum military enhancements\n+ High movement speed\n- No weapons",
        "variations": [
          {
            "id": "mehter-2",
            "baseId": "mehter",
            "type": "unit",
            "name": "Mehter",
            "pbgid": 2059263,
            "attribName": "unit_mehter_2_ott",
            "age": 2,
            "civs": [
              "ot"
            ],
            "description": "War drummer that enhances units in an area, except Villagers and Traders.\n+ War drum military enhancements\n+ High movement speed\n- No weapons",
            "classes": [
              "light",
              "cavalry"
            ],
            "displayClasses": [
              "Light Cavalry"
            ],
            "unique": true,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 80,
              "total": 180,
              "popcap": 1,
              "time": 28
            },
            "producedBy": [
              "military-school",
              "stable"
            ],
            "icon": "https://data.aoe4world.com/images/units/mehter-2.png",
            "hitpoints": 180,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 0,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.375,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_mehter_2_ott",
                "pbgid": 2063059
              }
            ],
            "armor": [],
            "sight": {
              "line": 28,
              "height": 10
            },
            "movement": {
              "speed": 1.875
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "sipahi",
        "name": "Sipahi",
        "type": "unit",
        "civs": [
          "ot"
        ],
        "unique": true,
        "displayClasses": [
          "Light Melee Cavalry"
        ],
        "classes": [
          "light",
          "melee",
          "cavalry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/sipahi-2.png",
        "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Has the ability to attack faster while also taking additional damage from melee sources.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen",
        "variations": [
          {
            "id": "sipahi-2",
            "pbgid": 2046436,
            "attribName": "unit_horseman_2_ott",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "sipahi-3",
            "pbgid": 2046437,
            "attribName": "unit_horseman_3_ott",
            "civs": [
              "ot"
            ]
          },
          {
            "id": "sipahi-4",
            "pbgid": 2046438,
            "attribName": "unit_horseman_4_ott",
            "civs": [
              "ot"
            ]
          }
        ],
        "baseId": "sipahi",
        "age": 2,
        "costs": {
          "food": 110,
          "wood": 20,
          "stone": 0,
          "gold": 0,
          "total": 130,
          "popcap": 1,
          "time": 24
        },
        "producedBy": [
          "military-school",
          "stable"
        ],
        "hitpoints": 135,
        "sight": {
          "line": 28,
          "height": 10
        },
        "movement": {
          "speed": 1.875
        },
        "shared": {
          "sipahi-2": {
            "name": "Sipahi",
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 9,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 9,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_2_ott",
                "pbgid": 2063077
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 2
              }
            ],
            "id": "sipahi-2"
          },
          "sipahi-3": {
            "name": "Veteran Sipahi",
            "age": 3,
            "icon": "https://data.aoe4world.com/images/units/sipahi-3.png",
            "hitpoints": 165,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 11,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_3_ott",
                "pbgid": 2063078
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "id": "sipahi-3"
          },
          "sipahi-4": {
            "name": "Elite Sipahi",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/sipahi-4.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 13,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "ranged"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 13,
                    "type": "passive"
                  },
                  {
                    "property": "meleeAttack",
                    "target": {
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
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.125
                },
                "attribName": "weapon_horseman_4_ott",
                "pbgid": 2063079
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_horseman",
                "pbgid": 127935
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 4
              }
            ],
            "id": "sipahi-4"
          }
        }
      },
      {
        "id": "horse-archer",
        "name": "Horse Archer",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Cavalry"
        ],
        "classes": [
          "light",
          "ranged",
          "cavalry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/horse-archer-3.png",
        "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units",
        "variations": [
          {
            "id": "horse-archer-3",
            "pbgid": 133493,
            "attribName": "unit_horsearcher_3_rus",
            "civs": [
              "ru"
            ]
          },
          {
            "id": "horse-archer-4",
            "pbgid": 133494,
            "attribName": "unit_horsearcher_4_rus",
            "civs": [
              "ru"
            ]
          }
        ],
        "baseId": "horse-archer",
        "age": 3,
        "costs": {
          "food": 80,
          "wood": 40,
          "stone": 0,
          "gold": 0,
          "total": 120,
          "popcap": 1,
          "time": 22.5
        },
        "producedBy": [
          "archery-range"
        ],
        "hitpoints": 85,
        "sight": {
          "line": 34,
          "height": 10
        },
        "movement": {
          "speed": 1.625
        },
        "shared": {
          "horse-archer-3": {
            "name": "Horse Archer",
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 12,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.375,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_3_rus",
                "pbgid": 134963
              }
            ],
            "armor": [],
            "id": "horse-archer-3"
          },
          "horse-archer-4": {
            "name": "Elite Horse Archer",
            "age": 4,
            "icon": "https://data.aoe4world.com/images/units/horse-archer-4.png",
            "hitpoints": 100,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 14,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4.5
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.125,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.375,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_horsearcher_4_rus",
                "pbgid": 134964
              }
            ],
            "armor": [],
            "id": "horse-archer-4"
          }
        }
      },
      {
        "id": "lodya-attack-ship",
        "name": "Lodya Attack Ship",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Springald Ship"
        ],
        "classes": [
          "springald",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/lodya-attack-ship-2.png",
        "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
        "variations": [
          {
            "id": "lodya-attack-ship-2",
            "baseId": "lodya-attack-ship",
            "type": "unit",
            "name": "Lodya Attack Ship",
            "pbgid": 193134,
            "attribName": "unit_naval_combat_ship_2_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
            "classes": [
              "springald",
              "ship"
            ],
            "displayClasses": [
              "Springald Ship"
            ],
            "unique": true,
            "costs": {
              "food": 120,
              "wood": 200,
              "stone": 0,
              "gold": 30,
              "total": 350,
              "popcap": 3,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-attack-ship-2.png",
            "hitpoints": 450,
            "weapons": [
              {
                "name": "Ballista",
                "type": "ranged",
                "damage": 35,
                "speed": 4.125,
                "range": {
                  "min": 0,
                  "max": 6
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "archer",
                          "ship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  },
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 45,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0.5,
                  "windup": 0.25,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 2.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_combat_ship_springald",
                "pbgid": 2102494
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 3
              }
            ],
            "sight": {
              "line": 45,
              "height": 10
            },
            "movement": {
              "speed": 1.375
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lodya-demolition-ship",
        "name": "Lodya Demolition Ship",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Incendiary Ship"
        ],
        "classes": [
          "incendiary",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/lodya-demolition-ship-3.png",
        "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n+ The Lodya can be converted to any other type of ship\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
        "variations": [
          {
            "id": "lodya-demolition-ship-3",
            "baseId": "lodya-demolition-ship",
            "type": "unit",
            "name": "Lodya Demolition Ship",
            "pbgid": 193137,
            "attribName": "unit_naval_fireship_3_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Small ship packed with explosives. Detonates when killed, damaging any units in the area.\n+ The Lodya can be converted to any other type of ship\n- Damage is reduced further from the explosion center\n- No weapons other than self-destruction",
            "classes": [
              "incendiary",
              "ship"
            ],
            "displayClasses": [
              "Incendiary Ship"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 80,
              "stone": 0,
              "gold": 80,
              "total": 160,
              "popcap": 2,
              "time": 15
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-demolition-ship-3.png",
            "hitpoints": 145,
            "weapons": [
              {
                "name": "Incendiaries",
                "type": "siege",
                "damage": 95,
                "speed": 0.125,
                "range": {
                  "min": 0,
                  "max": 2
                },
                "modifiers": [
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "broadside"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 300,
                    "type": "passive"
                  },
                  {
                    "property": "siegeAttack",
                    "target": {
                      "class": [
                        [
                          "building"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 300,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_naval_fireship",
                "pbgid": 196723
              }
            ],
            "armor": [],
            "sight": {
              "line": 32,
              "height": 10
            },
            "movement": {
              "speed": 2
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lodya-fishing-boat",
        "name": "Lodya Fishing Boat",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Worker",
          "Ship"
        ],
        "classes": [
          "worker",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/lodya-fishing-boat-2.png",
        "description": "Small boat that gathers Food from either Deep Water Fish or Shoreline Fish. Does not require a Dock to drop off gathered Food and gathers faster than a regular Fishing Boat.\n- No combat\nThe Lodya Fishing Boat can be converted to any other type of ship.",
        "variations": [
          {
            "id": "lodya-fishing-boat-2",
            "baseId": "lodya-fishing-boat",
            "type": "unit",
            "name": "Lodya Fishing Boat",
            "pbgid": 193136,
            "attribName": "unit_naval_fishing_boat_2_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Small boat that gathers Food from either Deep Water Fish or Shoreline Fish. Does not require a Dock to drop off gathered Food and gathers faster than a regular Fishing Boat.\n- No combat\nThe Lodya Fishing Boat can be converted to any other type of ship.",
            "classes": [
              "worker",
              "ship"
            ],
            "displayClasses": [
              "Worker",
              "Ship"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 150,
              "stone": 0,
              "gold": 0,
              "total": 150,
              "popcap": 2,
              "time": 38
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-fishing-boat-2.png",
            "hitpoints": 250,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 56,
              "height": 501
            },
            "movement": {
              "speed": 1.5
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lodya-galley",
        "name": "Lodya Galley",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Archer Ship"
        ],
        "classes": [
          "archer",
          "ship"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/lodya-galley-3.png",
        "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
        "variations": [
          {
            "id": "lodya-galley-3",
            "baseId": "lodya-galley",
            "type": "unit",
            "name": "Lodya Galley",
            "pbgid": 2102829,
            "attribName": "unit_naval_war_galley_3_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Oared war vessel armed with a crew of archers.\n+ Increased maneuverability\n+ Benefits from ranged damage Blacksmith technology",
            "classes": [
              "archer",
              "ship"
            ],
            "displayClasses": [
              "Archer Ship"
            ],
            "unique": true,
            "costs": {
              "food": 90,
              "wood": 150,
              "stone": 0,
              "gold": 0,
              "total": 240,
              "popcap": 3,
              "time": 25
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-galley-3.png",
            "hitpoints": 300,
            "weapons": [
              {
                "name": "Bow",
                "type": "ranged",
                "damage": 6,
                "speed": 1.5,
                "range": {
                  "min": 0,
                  "max": 6.5
                },
                "modifiers": [
                  {
                    "property": "rangedAttack",
                    "target": {
                      "class": [
                        [
                          "naval",
                          "fireship"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 18,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.125,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 0.75,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "burst": {
                  "count": 5
                },
                "attribName": "weapon_naval_arrow_ship_arrow",
                "pbgid": 2034306
              }
            ],
            "armor": [
              {
                "type": "ranged",
                "value": 1
              }
            ],
            "sight": {
              "line": 48,
              "height": 10
            },
            "movement": {
              "speed": 1.75
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lodya-trade-ship",
        "name": "Lodya Trade Ship",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Worker",
          "Ship"
        ],
        "classes": [
          "worker",
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/lodya-trade-ship-3.png",
        "description": "Trade Ships generate Gold when assigned to a trade route with a Coastal Trade Post or a Market near the shore. Once assigned to trade, the Trade Ship will make repeated trips between its home Dock and the trade target. You can assign a new home Dock if you wish to.\nThe Lodya can be converted to any other type of ship.",
        "variations": [
          {
            "id": "lodya-trade-ship-2",
            "baseId": "lodya-trade-ship",
            "type": "unit",
            "name": "Lodya Trade Ship",
            "pbgid": 196686,
            "attribName": "unit_naval_trade_ship_3_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Trade Ships generate Gold when assigned to a trade route with a Coastal Trade Post or a Market near the shore. Once assigned to trade, the Trade Ship will make repeated trips between its home Dock and the trade target. You can assign a new home Dock if you wish to.\nThe Lodya can be converted to any other type of ship.",
            "classes": [
              "worker",
              "ship"
            ],
            "displayClasses": [
              "Worker",
              "Ship"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 100,
              "total": 200,
              "popcap": 2,
              "time": 30
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-trade-ship-3.png",
            "hitpoints": 225,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 32,
              "height": 10
            },
            "movement": {
              "speed": 1.5
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "lodya-transport-ship",
        "name": "Lodya Transport Ship",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Ship"
        ],
        "classes": [
          "ship"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/lodya-transport-ship-2.png",
        "description": "Can be garrisoned by any unit and uses their sight range. Allows garrisoned units to be transport across water.\nThe Lodya can be converted to any other type of ship.",
        "variations": [
          {
            "id": "lodya-transport-ship-2",
            "baseId": "lodya-transport-ship",
            "type": "unit",
            "name": "Lodya Transport Ship",
            "pbgid": 193138,
            "attribName": "unit_naval_transport_ship_2_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Can be garrisoned by any unit and uses their sight range. Allows garrisoned units to be transport across water.\nThe Lodya can be converted to any other type of ship.",
            "classes": [
              "ship"
            ],
            "displayClasses": [
              "Ship"
            ],
            "unique": true,
            "costs": {
              "food": 0,
              "wood": 100,
              "stone": 0,
              "gold": 0,
              "total": 100,
              "popcap": 2,
              "time": 20
            },
            "producedBy": [
              "dock"
            ],
            "icon": "https://data.aoe4world.com/images/units/lodya-transport-ship-2.png",
            "hitpoints": 400,
            "weapons": [],
            "armor": [],
            "sight": {
              "line": 32,
              "height": 10
            },
            "movement": {
              "speed": 1.5
            },
            "garrison": {
              "capacity": 16,
              "classes": [
                "infantry",
                "villager",
                "infantry ranged",
                "siege",
                "monk",
                "khan",
                "cavalry"
              ]
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "militia",
        "name": "Militia",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": false,
        "displayClasses": [
          "Light Melee Infantry"
        ],
        "classes": [
          "light",
          "melee",
          "infantry"
        ],
        "minAge": 2,
        "icon": "https://data.aoe4world.com/images/units/militia-2.png",
        "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Has a 90 second lifespan",
        "variations": [
          {
            "id": "militia-2",
            "baseId": "militia",
            "type": "unit",
            "name": "Militia",
            "pbgid": 2104839,
            "attribName": "unit_militia_2_rus",
            "age": 2,
            "civs": [
              "ru"
            ],
            "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Has a 90 second lifespan",
            "classes": [
              "light",
              "melee",
              "infantry"
            ],
            "displayClasses": [
              "Light Melee Infantry"
            ],
            "unique": false,
            "costs": {
              "food": 100,
              "wood": 0,
              "stone": 0,
              "gold": 0,
              "total": 100,
              "popcap": 1,
              "time": 0
            },
            "producedBy": [],
            "icon": "https://data.aoe4world.com/images/units/militia-2.png",
            "hitpoints": 85,
            "weapons": [
              {
                "name": "Militia Axe",
                "type": "melee",
                "damage": 6,
                "speed": 1.625,
                "range": {
                  "min": 0,
                  "max": 0.2875
                },
                "modifiers": [
                  {
                    "property": "meleeAttack",
                    "target": {
                      "class": [
                        [
                          "cavalry"
                        ]
                      ]
                    },
                    "effect": "change",
                    "value": 6,
                    "type": "passive"
                  }
                ],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.75,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.25
                },
                "attribName": "weapon_shield_militia_2_rus",
                "pbgid": 2104847
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ],
            "armor": [],
            "sight": {
              "line": 36,
              "height": 10
            },
            "movement": {
              "speed": 1.5
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "streltsy",
        "name": "Streltsy",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Light Ranged Gunpowder Infantry"
        ],
        "classes": [
          "light",
          "ranged",
          "gunpowder",
          "infantry"
        ],
        "minAge": 4,
        "icon": "https://data.aoe4world.com/images/units/streltsy-4.png",
        "description": "Most powerful ranged infantry with reasonable melee capabilities. Increased attack speed while stationary.\n+ High damage\n+ Lower cost than Handcannoneer\n- Slow movement speed",
        "variations": [
          {
            "id": "streltsy-4",
            "baseId": "streltsy",
            "type": "unit",
            "name": "Streltsy",
            "pbgid": 133458,
            "attribName": "unit_handcannon_4_rus",
            "age": 4,
            "civs": [
              "ru"
            ],
            "description": "Most powerful ranged infantry with reasonable melee capabilities. Increased attack speed while stationary.\n+ High damage\n+ Lower cost than Handcannoneer\n- Slow movement speed",
            "classes": [
              "light",
              "ranged",
              "gunpowder",
              "infantry"
            ],
            "displayClasses": [
              "Light Ranged Gunpowder Infantry"
            ],
            "unique": true,
            "costs": {
              "food": 90,
              "wood": 0,
              "stone": 0,
              "gold": 90,
              "total": 180,
              "popcap": 1,
              "time": 35
            },
            "producedBy": [
              "archery-range"
            ],
            "icon": "https://data.aoe4world.com/images/units/streltsy-4.png",
            "hitpoints": 130,
            "weapons": [
              {
                "name": "Handcannon",
                "type": "ranged",
                "damage": 35,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 4
                },
                "modifiers": [],
                "durations": {
                  "aim": 0.25,
                  "windup": 0,
                  "attack": 0.125,
                  "winddown": 0.5,
                  "reload": 1.25,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0
                },
                "attribName": "weapon_handcannon_4_rus",
                "pbgid": 133305
              }
            ],
            "armor": [],
            "sight": {
              "line": 32,
              "height": 10
            },
            "movement": {
              "speed": 1.125
            }
          }
        ],
        "shared": {}
      },
      {
        "id": "warrior-monk",
        "name": "Warrior Monk",
        "type": "unit",
        "civs": [
          "ru"
        ],
        "unique": true,
        "displayClasses": [
          "Religious Cavalry"
        ],
        "classes": [
          "religious",
          "cavalry"
        ],
        "minAge": 3,
        "icon": "https://data.aoe4world.com/images/units/warrior-monk-3.png",
        "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage",
        "variations": [
          {
            "id": "warrior-monk-3",
            "baseId": "warrior-monk",
            "type": "unit",
            "name": "Warrior Monk",
            "pbgid": 133469,
            "attribName": "unit_monk_3_rus",
            "age": 3,
            "civs": [
              "ru"
            ],
            "description": "Military-minded support unit that improves combat capabilities of nearby units after it attacks. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n+ High utility in large armies\n- Low damage",
            "classes": [
              "religious",
              "cavalry"
            ],
            "displayClasses": [
              "Religious Cavalry"
            ],
            "unique": true,
            "costs": {
              "food": 40,
              "wood": 0,
              "stone": 0,
              "gold": 200,
              "total": 240,
              "popcap": 1,
              "time": 35
            },
            "producedBy": [
              "abbey-of-the-trinity",
              "monastery"
            ],
            "icon": "https://data.aoe4world.com/images/units/warrior-monk-3.png",
            "hitpoints": 190,
            "weapons": [
              {
                "name": "Spear",
                "type": "melee",
                "damage": 11,
                "speed": 1.75,
                "range": {
                  "min": 0,
                  "max": 0.75
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.5,
                  "attack": 0.125,
                  "winddown": 0.625,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 0.5
                },
                "attribName": "weapon_monk_3_rus",
                "pbgid": 2031620
              },
              {
                "name": "Torch",
                "type": "fire",
                "damage": 10,
                "speed": 2.125,
                "range": {
                  "min": 0,
                  "max": 1.25
                },
                "modifiers": [],
                "durations": {
                  "aim": 0,
                  "windup": 0.75,
                  "attack": 0.125,
                  "winddown": 0,
                  "reload": 0,
                  "setup": 0,
                  "teardown": 0,
                  "cooldown": 1.25
                },
                "attribName": "weapon_torch_rus",
                "pbgid": 133324
              }
            ],
            "armor": [],
            "sight": {
              "line": 30,
              "height": 10
            },
            "movement": {
              "speed": 1.625
            }
          }
        ],
        "shared": {}
      }
    ]

    module.exports = data
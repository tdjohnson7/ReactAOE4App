const allOptimizedUnits = [
    {
      "id": "archer",
      "name": "Archer",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
        "by",
        "ch",
        "de",
        "fr",
        "hr",
        "je",
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
          "pbgid": 199706,
          "attribName": "unit_archer_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "archer-2",
          "pbgid": 4667268,
          "attribName": "unit_archer_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "archer-2",
          "pbgid": 5669457,
          "attribName": "unit_archer_2_byz",
          "civs": [
            "by"
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
          "pbgid": 132269,
          "attribName": "unit_archer_2_fre",
          "civs": [
            "fr"
          ]
        },
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
            "je"
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
          "pbgid": 199707,
          "attribName": "unit_archer_3_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "archer-3",
          "pbgid": 3600109,
          "attribName": "unit_archer_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "archer-3",
          "pbgid": 4797287,
          "attribName": "unit_archer_3_byz",
          "civs": [
            "by"
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
          "pbgid": 132270,
          "attribName": "unit_archer_3_fre",
          "civs": [
            "fr"
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
            "je"
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
          "pbgid": 199708,
          "attribName": "unit_archer_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "archer-4",
          "pbgid": 4326724,
          "attribName": "unit_archer_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "archer-4",
          "pbgid": 4097251,
          "attribName": "unit_archer_4_byz",
          "civs": [
            "by"
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
          "pbgid": 132271,
          "attribName": "unit_archer_4_fre",
          "civs": [
            "fr"
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
            "je"
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "baghlah",
      "name": "Baghlah",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
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
          "pbgid": 199725,
          "attribName": "unit_naval_combat_ship_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "baghlah-2",
          "pbgid": 7784420,
          "attribName": "unit_naval_combat_ship_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "baghlah-2",
          "pbgid": 193139,
          "attribName": "unit_naval_combat_ship_2_sul",
          "civs": [
            "de"
          ]
        }
      ],
      "baseId": "baghlah",
      "age": 2,
      "costs": {
        "food": 110,
        "wood": 200,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 340,
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
              "value": 55,
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
      "id": "battering-ram",
      "name": "Battering Ram",
      "type": "unit",
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
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/battering-ram-3.png",
      "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Takes bonus damage from melee attacks\n- Can only attack buildings\n- Slow movement speed",
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
          "pbgid": 2145221,
          "attribName": "unit_workshop_ram_3_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 2108171,
          "attribName": "unit_workshop_ram_3_fre",
          "civs": [
            "fr"
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
          "pbgid": 2140594,
          "attribName": "unit_workshop_ram_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "battering-ram-2",
          "pbgid": 2145246,
          "attribName": "unit_workshop_ram_3_fre_ha_01",
          "civs": [
            "je"
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
          "pbgid": 2145247,
          "attribName": "unit_workshop_ram_3_hre_ha_01",
          "civs": [
            "od"
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
        },
        {
          "id": "battering-ram-2",
          "pbgid": 2145222,
          "attribName": "unit_workshop_ram_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "costs": {
            "food": 0,
            "wood": 200,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 40
          },
          "hitpoints": 340
        }
      ],
      "baseId": "battering-ram",
      "age": 1,
      "costs": {
        "food": 0,
        "wood": 200,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 200,
        "popcap": 1,
        "time": 35
      },
      "producedBy": [
        "siege-workshop"
      ],
      "hitpoints": 370,
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
        "ru",
        "zx"
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
          "pbgid": 199709,
          "attribName": "unit_bombard_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "bombard-4",
          "pbgid": 6861017,
          "attribName": "unit_bombard_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "bombard-4",
          "pbgid": 8552218,
          "attribName": "unit_bombard_4_byz",
          "civs": [
            "by"
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
          "pbgid": 7319578,
          "attribName": "unit_bombard_4_jpn",
          "civs": [
            "ja"
          ],
          "producedBy": [
            "siege-workshop",
            "tanegashima-gunsmith"
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
          "pbgid": 4034775,
          "attribName": "unit_bombard_4_hre_ha_01",
          "civs": [
            "od"
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
        },
        {
          "id": "bombard-4",
          "pbgid": 2946683,
          "attribName": "unit_bombard_4_chi_ha_01",
          "civs": [
            "zx"
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 35
            }
          ]
        }
      ],
      "baseId": "bombard",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 350,
        "stone": 0,
        "gold": 500,
        "vizier": 0,
        "oliveoil": 0,
        "total": 850,
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
          "value": 40
        }
      ],
      "sight": {
        "line": 56,
        "height": 10
      },
      "movement": {
        "speed": 0.75
      },
      "shared": {}
    },
    {
      "id": "camel-archer",
      "name": "Camel Archer",
      "type": "unit",
      "civs": [
        "ab",
        "by"
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
          "id": "camel-archer-2",
          "pbgid": 2104155,
          "attribName": "unit_camel_archer_2_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Highly mobile and durable ranged unit.\n+Bonus damage vs Spearmen\n-High cost\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
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
          "id": "camel-archer-3",
          "pbgid": 2104156,
          "attribName": "unit_camel_archer_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Highly mobile and durable ranged unit.\n+Bonus damage vs Spearmen\n-High cost\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "camel-archer-4",
          "pbgid": 200001,
          "attribName": "unit_camel_archer_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "camel-archer-4",
          "pbgid": 2104157,
          "attribName": "unit_camel_archer_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Highly mobile and durable ranged unit.\n+Bonus damage vs Spearmen\n-High cost\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        }
      ],
      "baseId": "camel-archer",
      "age": 2,
      "costs": {
        "food": 170,
        "wood": 60,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 230,
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
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
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
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
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
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
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
        "ab",
        "by"
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
          "id": "camel-rider-3",
          "pbgid": 2104158,
          "attribName": "unit_camel_rider_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Highly mobile and durable melee unit effective against all cavalry.\n+Bonus damage to cavalry\n+Causes enemy cavalry to deal less damage\n-High cost\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nRequires the Silk Road Contract.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 73
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "technologies/silk-road-contract",
            "technologies/veteran-contract"
          ]
        },
        {
          "id": "camel-rider-4",
          "pbgid": 200052,
          "attribName": "unit_camel_rider_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "camel-rider-4",
          "pbgid": 2104159,
          "attribName": "unit_camel_rider_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Highly mobile and durable melee unit effective against all cavalry.\n+Bonus damage to cavalry\n+Causes enemy cavalry to deal less damage\n-High cost\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nRequires the Silk Road Contract.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 73
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "technologies/silk-road-contract",
            "technologies/veteran-contract"
          ]
        }
      ],
      "baseId": "camel-rider",
      "age": 3,
      "costs": {
        "food": 160,
        "wood": 30,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 220,
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
      "id": "counterweight-trebuchet",
      "name": "Counterweight Trebuchet",
      "type": "unit",
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
          "pbgid": 199745,
          "attribName": "unit_trebuchet_4_cw_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "counterweight-trebuchet-3",
          "pbgid": 3961697,
          "attribName": "unit_trebuchet_4_cw_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "counterweight-trebuchet-3",
          "pbgid": 2190555,
          "attribName": "unit_trebuchet_4_cw_byz",
          "civs": [
            "by"
          ],
          "weapons": [
            {
              "name": "Trebuchet",
              "type": "siege",
              "damage": 40,
              "speed": 11.375,
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
                  "value": 375,
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
                "reload": 2.75,
                "setup": 3,
                "teardown": 2,
                "cooldown": 0
              },
              "attribName": "weapon_trebuchet_4_counterweight",
              "pbgid": 130952
            },
            {
              "name": "Greek Fire",
              "type": "siege",
              "damage": 40,
              "speed": 11.375,
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
                  "value": 375,
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
                "reload": 2.75,
                "setup": 3,
                "teardown": 2,
                "cooldown": 0
              },
              "attribName": "weapon_trebuchet_4_greek_fire",
              "pbgid": 2117316
            }
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
          "pbgid": 132307,
          "attribName": "unit_trebuchet_4_cw_fre",
          "civs": [
            "fr"
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
          "pbgid": 3600511,
          "attribName": "unit_trebuchet_4_cw_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "counterweight-trebuchet-3",
          "pbgid": 132307,
          "attribName": "unit_trebuchet_4_cw_fre",
          "civs": [
            "je"
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
          "pbgid": 4857694,
          "attribName": "unit_trebuchet_4_cw_hre_ha_01",
          "civs": [
            "od"
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
              "damage": 40,
              "speed": 11.375,
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
                  "value": 375,
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
                "reload": 2.75,
                "setup": 3,
                "teardown": 2,
                "cooldown": 0
              },
              "attribName": "weapon_trebuchet_4_cw_rus",
              "pbgid": 133327
            }
          ]
        },
        {
          "id": "counterweight-trebuchet-3",
          "pbgid": 6588234,
          "attribName": "unit_trebuchet_4_cw_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "counterweight-trebuchet",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 400,
        "stone": 0,
        "gold": 150,
        "vizier": 0,
        "oliveoil": 0,
        "total": 550,
        "popcap": 3,
        "time": 30
      },
      "producedBy": [
        "siege-workshop"
      ],
      "hitpoints": 170,
      "weapons": [
        {
          "name": "Trebuchet",
          "type": "siege",
          "damage": 40,
          "speed": 11.375,
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
              "value": 375,
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
            "reload": 2.75,
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
          "value": 30
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
        "ay",
        "by",
        "ch",
        "de",
        "en",
        "hr",
        "mo",
        "ot",
        "ru",
        "zx"
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
          "pbgid": 199711,
          "attribName": "unit_crossbowman_3_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "crossbowman-3",
          "pbgid": 7892137,
          "attribName": "unit_crossbowman_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "crossbowman-3",
          "pbgid": 7735570,
          "attribName": "unit_crossbowman_3_byz",
          "civs": [
            "by"
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
          "id": "crossbowman-3",
          "pbgid": 5031957,
          "attribName": "unit_crossbowman_3_chi_ha_01",
          "civs": [
            "zx"
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
              "attribName": "weapon_crossbow_3",
              "pbgid": 108239
            },
            {
              "name": "(translation not found) (undefined)",
              "type": "ranged",
              "damage": 12,
              "speed": 2,
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
                "attack": 0.5,
                "winddown": 0,
                "reload": 1.25,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "burst": {
                "count": 1.5
              },
              "attribName": "weapon_crossbow_3_library_upgrade_incendiary_chi_ha_01",
              "pbgid": 2135966
            }
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
          "pbgid": 3802575,
          "attribName": "unit_crossbowman_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "crossbowman-4",
          "pbgid": 4075376,
          "attribName": "unit_crossbowman_4_byz",
          "civs": [
            "by"
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
        },
        {
          "id": "crossbowman-4",
          "pbgid": 2947175,
          "attribName": "unit_crossbowman_4_chi_ha_01",
          "civs": [
            "zx"
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "culverin",
      "name": "Culverin",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
        "hr",
        "ma",
        "od"
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
      "description": "Long-range cannon made for destroying siege engines. Fires after quickly setting up.\n+ Bonus damage vs. siege engines\n- Low damage vs. buildings",
      "variations": [
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
          "pbgid": 3302284,
          "attribName": "unit_culverin_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
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
          "pbgid": 2278976,
          "attribName": "unit_culverin_4_mal",
          "civs": [
            "ma"
          ]
        },
        {
          "id": "culverin-4",
          "pbgid": 7541634,
          "attribName": "unit_culverin_4_hre_ha_01",
          "civs": [
            "od"
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
        "vizier": 0,
        "oliveoil": 0,
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
          "speed": 3.375,
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
              "value": 60,
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
              "value": 60,
              "type": "passive"
            }
          ],
          "durations": {
            "aim": 0.5,
            "windup": 0,
            "attack": 0.125,
            "winddown": 0.75,
            "reload": 2,
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
          "value": 10
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
      "id": "dhow",
      "name": "Dhow",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
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
          "pbgid": 2033846,
          "attribName": "unit_naval_dhow_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "dhow-2",
          "pbgid": 3179988,
          "attribName": "unit_naval_dhow_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
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
        "food": 80,
        "wood": 150,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 230,
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
        "ay",
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
          "pbgid": 199727,
          "attribName": "unit_naval_fireship_3_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "explosive-dhow-3",
          "pbgid": 7949762,
          "attribName": "unit_naval_fireship_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "explosive-dhow-3",
          "pbgid": 193142,
          "attribName": "unit_naval_fireship_3_sul",
          "civs": [
            "de"
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
        "vizier": 0,
        "oliveoil": 0,
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
                    "massive"
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
        "zx"
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
          "pbgid": 199728,
          "attribName": "unit_naval_fishing_boat_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 6306556,
          "attribName": "unit_naval_fishing_boat_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 8626667,
          "attribName": "unit_naval_fishing_boat_2_byz",
          "civs": [
            "by"
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
            "vizier": 0,
            "oliveoil": 0,
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
          "hitpoints": 150,
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
          "pbgid": 193116,
          "attribName": "unit_naval_fishing_boat_2_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 0,
            "wood": 68,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 68,
            "popcap": 1,
            "time": 25
          }
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
          "pbgid": 193126,
          "attribName": "unit_naval_fishing_boat_2_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 6326214,
          "attribName": "unit_naval_fishing_boat_2_jpn",
          "civs": [
            "ja"
          ],
          "costs": {
            "food": 0,
            "wood": 45,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 45,
            "popcap": 1,
            "time": 25
          }
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 193121,
          "attribName": "unit_naval_fishing_boat_2_fre",
          "civs": [
            "je"
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
          "pbgid": 6922142,
          "attribName": "unit_naval_fishing_boat_2_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 2046449,
          "attribName": "unit_naval_fishing_boat_2_ott",
          "civs": [
            "ot"
          ],
          "movement": {
            "speed": 1.65
          }
        },
        {
          "id": "fishing-boat-2",
          "pbgid": 3615217,
          "attribName": "unit_naval_fishing_boat_2_chi_ha_01",
          "civs": [
            "zx"
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
        "vizier": 0,
        "oliveoil": 0,
        "total": 75,
        "popcap": 1,
        "time": 25
      },
      "producedBy": [
        "dock"
      ],
      "hitpoints": 100,
      "weapons": [],
      "armor": [],
      "sight": {
        "line": 44,
        "height": 501
      },
      "movement": {
        "speed": 1.5
      },
      "shared": {}
    },
    {
      "id": "ghulam",
      "name": "Ghulam",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
        "by"
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
      "icon": "https://data.aoe4world.com/images/units/ghulam-3.png",
      "description": "Tough infantry that deal two attacks in rapid succession.\n+ High armor\n+ Higher attack damage on charge\n- Lower base attack damage than a Man-at-Arms\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
      "variations": [
        {
          "id": "ghulam-3",
          "pbgid": 199721,
          "attribName": "unit_manatarms_3_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "ghulam-3",
          "pbgid": 7313360,
          "attribName": "unit_manatarms_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "ghulam-3",
          "pbgid": 2136963,
          "attribName": "unit_ghulam_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Tough infantry that deal two attacks in rapid succession.\n+ High armor\n+ Higher attack damage on charge\n- Lower base attack damage than a Man-at-Arms\n- Can build Mangonels and Springalds on the field without requiring Siege Engineers\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen\n\nMercenary that can be purchased per 3 units for a total of 450 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 150,
            "total": 150,
            "popcap": 1,
            "time": 75
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "technologies/eastern-mercenary-contract",
            "technologies/veteran-contract"
          ]
        },
        {
          "id": "ghulam-4",
          "pbgid": 199722,
          "attribName": "unit_manatarms_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "ghulam-4",
          "pbgid": 3255471,
          "attribName": "unit_manatarms_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "ghulam-4",
          "pbgid": 2136964,
          "attribName": "unit_ghulam_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Tough infantry that deal two attacks in rapid succession.\n+ High armor\n+ Higher attack damage on charge\n- Lower base attack damage than a Man-at-Arms\n- Can build Mangonels and Springalds on the field without requiring Siege Engineers\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen\n\nMercenary that can be purchased per 3 units for a total of 450 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 150,
            "total": 150,
            "popcap": 1,
            "time": 75
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "technologies/eastern-mercenary-contract",
            "technologies/veteran-contract"
          ]
        }
      ],
      "baseId": "ghulam",
      "age": 3,
      "costs": {
        "food": 120,
        "wood": 0,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 150,
        "popcap": 1,
        "time": 26
      },
      "producedBy": [
        "barracks"
      ],
      "hitpoints": 195,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.1875
      },
      "shared": {
        "ghulam-3": {
          "name": "Ghulam",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 10,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
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
          "id": "ghulam-3"
        },
        "ghulam-4": {
          "name": "Elite Ghulam",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/ghulam-4.png",
          "hitpoints": 225,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 12,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
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
          "id": "ghulam-4"
        }
      }
    },
    {
      "id": "handcannoneer",
      "name": "Handcannoneer",
      "type": "unit",
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
          "pbgid": 199714,
          "attribName": "unit_handcannon_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "handcannoneer-4",
          "pbgid": 3891093,
          "attribName": "unit_handcannon_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "handcannoneer-4",
          "pbgid": 7157228,
          "attribName": "unit_handcannon_4_byz",
          "civs": [
            "by"
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
          "pbgid": 132274,
          "attribName": "unit_handcannon_4_fre",
          "civs": [
            "fr"
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
          "pbgid": 4137773,
          "attribName": "unit_handcannon_4_jpn",
          "civs": [
            "ja"
          ],
          "producedBy": [
            "archery-range",
            "tanegashima-gunsmith"
          ]
        },
        {
          "id": "handcannoneer-4",
          "pbgid": 132274,
          "attribName": "unit_handcannon_4_fre",
          "civs": [
            "je"
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
        "vizier": 0,
        "oliveoil": 0,
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
        "ay",
        "by",
        "ch",
        "en",
        "fr",
        "hr",
        "ja",
        "je",
        "mo",
        "ru",
        "zx"
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
          "pbgid": 199715,
          "attribName": "unit_horseman_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "horseman-2",
          "pbgid": 3677103,
          "attribName": "unit_horseman_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "horseman-2",
          "pbgid": 7576265,
          "attribName": "unit_horseman_2_byz",
          "civs": [
            "by"
          ],
          "producedBy": [
            "imperial-hippodrome",
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
          "pbgid": 134721,
          "attribName": "unit_horseman_2_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "horseman-2",
          "pbgid": 2314729,
          "attribName": "unit_horseman_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "horseman-2",
          "pbgid": 132276,
          "attribName": "unit_horseman_2_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "school-of-cavalry",
            "stable"
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
          "id": "horseman-2",
          "pbgid": 5013470,
          "attribName": "unit_horseman_2_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "stable"
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
          "pbgid": 4128483,
          "attribName": "unit_horseman_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "horseman-3",
          "pbgid": 3096230,
          "attribName": "unit_horseman_3_byz",
          "civs": [
            "by"
          ],
          "producedBy": [
            "imperial-hippodrome",
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
          "pbgid": 134722,
          "attribName": "unit_horseman_3_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "horseman-3",
          "pbgid": 2691843,
          "attribName": "unit_horseman_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "horseman-3",
          "pbgid": 132277,
          "attribName": "unit_horseman_3_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "school-of-cavalry",
            "stable"
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
          "id": "horseman-3",
          "pbgid": 5825703,
          "attribName": "unit_horseman_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "stable"
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
          "pbgid": 5340402,
          "attribName": "unit_horseman_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "horseman-4",
          "pbgid": 2986328,
          "attribName": "unit_horseman_4_byz",
          "civs": [
            "by"
          ],
          "producedBy": [
            "imperial-hippodrome",
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
          "pbgid": 134724,
          "attribName": "unit_horseman_4_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "horseman-4",
          "pbgid": 6769486,
          "attribName": "unit_horseman_4_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "horseman-4",
          "pbgid": 132278,
          "attribName": "unit_horseman_4_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "school-of-cavalry",
            "stable"
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
        },
        {
          "id": "horseman-4",
          "pbgid": 5308342,
          "attribName": "unit_horseman_4_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "stable"
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
        "vizier": 0,
        "oliveoil": 0,
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
        "vizier": 0,
        "oliveoil": 0,
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
          "name": "(translation not found) (undefined)",
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
      "id": "lancer",
      "name": "Lancer",
      "type": "unit",
      "civs": [
        "ab",
        "ch",
        "de",
        "ot",
        "zx"
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
      "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
      "variations": [
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
          "id": "lancer-3",
          "pbgid": 4272248,
          "attribName": "unit_knight_3_chi_ha_01",
          "civs": [
            "zx"
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
          "id": "lancer-4",
          "pbgid": 8427199,
          "attribName": "unit_knight_4_chi_ha_01",
          "civs": [
            "zx"
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "mangonel",
      "name": "Mangonel",
      "type": "unit",
      "civs": [
        "ab",
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
          "pbgid": 199723,
          "attribName": "unit_mangonel_3_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "mangonel-3",
          "pbgid": 3602537,
          "attribName": "unit_mangonel_3_byz",
          "civs": [
            "by"
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
          "pbgid": 132284,
          "attribName": "unit_mangonel_3_fre",
          "civs": [
            "fr"
          ],
          "hitpoints": 140
        },
        {
          "id": "mangonel-3",
          "pbgid": 134729,
          "attribName": "unit_mangonel_3_hre",
          "civs": [
            "hr"
          ],
          "description": "Ranged siege unit. Fires multiple projectiles dealing damage in an area.\n+ Bonus damage vs infantry\n+ Effective against massed units\n- Must be set up to fire",
          "hitpoints": 140
        },
        {
          "id": "mangonel-3",
          "pbgid": 8461993,
          "attribName": "unit_mangonel_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "mangonel-3",
          "pbgid": 132284,
          "attribName": "unit_mangonel_3_fre",
          "civs": [
            "je"
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
              "damage": 2,
              "speed": 7,
              "range": {
                "min": 3,
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
                  "value": 14,
                  "type": "passive"
                },
                {
                  "property": "fireAttack",
                  "target": {
                    "class": [
                      [
                        "naval",
                        "unit"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 16,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0,
                "attack": 0.25,
                "winddown": 2.25,
                "reload": 4,
                "setup": 0,
                "teardown": 1,
                "cooldown": 0
              },
              "burst": {
                "count": 12
              },
              "attribName": "weapon_mangonel_3_incendiary_mon",
              "pbgid": 136319
            }
          ]
        },
        {
          "id": "mangonel-3",
          "pbgid": 6182386,
          "attribName": "unit_mangonel_3_hre_ha_01",
          "civs": [
            "od"
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
              "damage": 2,
              "speed": 7,
              "range": {
                "min": 3,
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
                  "value": 14,
                  "type": "passive"
                },
                {
                  "property": "fireAttack",
                  "target": {
                    "class": [
                      [
                        "naval",
                        "unit"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 16,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0,
                "attack": 0.25,
                "winddown": 2.25,
                "reload": 4,
                "setup": 0,
                "teardown": 1,
                "cooldown": 0
              },
              "burst": {
                "count": 12
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
        "vizier": 0,
        "oliveoil": 0,
        "total": 600,
        "popcap": 3,
        "time": 40
      },
      "producedBy": [
        "siege-workshop"
      ],
      "hitpoints": 130,
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
          "damage": 2,
          "speed": 7,
          "range": {
            "min": 3,
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
              "value": 14,
              "type": "passive"
            },
            {
              "property": "fireAttack",
              "target": {
                "class": [
                  [
                    "naval",
                    "unit"
                  ]
                ]
              },
              "effect": "change",
              "value": 16,
              "type": "passive"
            }
          ],
          "durations": {
            "aim": 0.5,
            "windup": 0,
            "attack": 0.25,
            "winddown": 2.25,
            "reload": 4,
            "setup": 0,
            "teardown": 1,
            "cooldown": 0
          },
          "burst": {
            "count": 12
          },
          "attribName": "weapon_mangonel_3_incendiary",
          "pbgid": 127724
        }
      ],
      "armor": [
        {
          "type": "ranged",
          "value": 30
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
      "id": "scout",
      "name": "Scout",
      "type": "unit",
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
          "pbgid": 199733,
          "attribName": "unit_scout_1_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "scout-1",
          "pbgid": 3949072,
          "attribName": "unit_scout_1_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "scout-1",
          "pbgid": 4180705,
          "attribName": "unit_scout_1_byz",
          "civs": [
            "by"
          ],
          "producedBy": [
            "imperial-hippodrome",
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
          ],
          "weapons": [
            {
              "name": "Dao",
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
              "attribName": "weapon_scout_1_chi",
              "pbgid": 2150563
            }
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
            "capital-town-center",
            "keep"
          ]
        },
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
            "capital-town-center",
            "kings-palace"
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 70,
            "popcap": 1,
            "time": 23
          },
          "producedBy": [
            "school-of-cavalry",
            "stable",
            "town-center",
            "capital-town-center"
          ],
          "weapons": [
            {
              "name": "Ax",
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
              "attribName": "weapon_scout_1_fre",
              "pbgid": 2150564
            }
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
            "capital-town-center",
            "palace-of-swabia"
          ]
        },
        {
          "id": "scout-1",
          "pbgid": 6075109,
          "attribName": "unit_scout_1_jpn",
          "civs": [
            "ja"
          ],
          "weapons": [
            {
              "name": "Wakizashi",
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
              "attribName": "weapon_scout_1_jpn",
              "pbgid": 2150566
            }
          ]
        },
        {
          "id": "scout-1",
          "pbgid": 132268,
          "attribName": "unit_scout_1_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "school-of-cavalry",
            "stable",
            "capital-town-center",
            "town-center"
          ],
          "weapons": [
            {
              "name": "Ax",
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
              "attribName": "weapon_scout_1_fre",
              "pbgid": 2150564
            }
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 90,
            "popcap": 1,
            "time": 15
          },
          "weapons": [
            {
              "name": "Tamba",
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
          "pbgid": 8092678,
          "attribName": "unit_scout_1_hre_ha_01",
          "civs": [
            "od"
          ],
          "producedBy": [
            "stable",
            "town-center",
            "capital-town-center",
            "palace-of-swabia"
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
              "name": "Short Sword",
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
          ]
        },
        {
          "id": "scout-1",
          "pbgid": 4207698,
          "attribName": "unit_scout_1_chi_ha_01",
          "civs": [
            "zx"
          ],
          "weapons": [
            {
              "name": "Dao",
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
              "attribName": "weapon_scout_1_chi",
              "pbgid": 2150563
            }
          ]
        }
      ],
      "baseId": "scout",
      "age": 1,
      "costs": {
        "food": 70,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 70,
        "popcap": 1,
        "time": 25
      },
      "producedBy": [
        "stable",
        "town-center",
        "capital-town-center"
      ],
      "hitpoints": 110,
      "weapons": [
        {
          "name": "Short Sword",
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
      "sight": {
        "line": 41,
        "height": 501
      },
      "movement": {
        "speed": 1.625
      },
      "shared": {}
    },
    {
      "id": "spearman",
      "name": "Spearman",
      "type": "unit",
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
        "mo",
        "ot",
        "ru",
        "zx"
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
          "pbgid": 199736,
          "attribName": "unit_spearman_1_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "spearman-1",
          "pbgid": 6832042,
          "attribName": "unit_spearman_1_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 132299,
          "attribName": "unit_spearman_1_fre",
          "civs": [
            "fr"
          ]
        },
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
          "pbgid": 4830033,
          "attribName": "unit_spearman_1_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "spearman-1",
          "pbgid": 132299,
          "attribName": "unit_spearman_1_fre",
          "civs": [
            "je"
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
          "id": "spearman-1",
          "pbgid": 5551219,
          "attribName": "unit_spearman_1_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "barracks",
            "jiangnan-tower"
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
              "attribName": "weapon_torch",
              "pbgid": 123518
            },
            {
              "name": "Fire Lance",
              "type": "melee",
              "damage": 7,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.545
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 1
              },
              "attribName": "weapon_spearman_1_charge_fire_chi_ha_01",
              "pbgid": 2135919
            }
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
          "pbgid": 8681000,
          "attribName": "unit_spearman_2_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 132301,
          "attribName": "unit_spearman_2_fre",
          "civs": [
            "fr"
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
          "pbgid": 3688536,
          "attribName": "unit_spearman_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "spearman-2",
          "pbgid": 132301,
          "attribName": "unit_spearman_2_fre",
          "civs": [
            "je"
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
          "id": "spearman-2",
          "pbgid": 6749113,
          "attribName": "unit_spearman_2_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "barracks",
            "jiangnan-tower"
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
              "attribName": "weapon_torch",
              "pbgid": 123518
            },
            {
              "name": "Fire Lance",
              "type": "melee",
              "damage": 8,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.545
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 1
              },
              "attribName": "weapon_spearman_2_charge_fire_chi_ha_01",
              "pbgid": 2135918
            }
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
          "pbgid": 2191193,
          "attribName": "unit_spearman_3_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 132303,
          "attribName": "unit_spearman_3_fre",
          "civs": [
            "fr"
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
          "pbgid": 6201479,
          "attribName": "unit_spearman_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "spearman-3",
          "pbgid": 132303,
          "attribName": "unit_spearman_3_fre",
          "civs": [
            "je"
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
          "id": "spearman-3",
          "pbgid": 8693055,
          "attribName": "unit_spearman_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "barracks",
            "jiangnan-tower"
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
              "attribName": "weapon_torch",
              "pbgid": 123518
            },
            {
              "name": "Fire Lance",
              "type": "melee",
              "damage": 9,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.545
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 1
              },
              "attribName": "weapon_spearman_3_charge_fire_chi_ha_01",
              "pbgid": 2135916
            }
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
          "pbgid": 5864359,
          "attribName": "unit_spearman_4_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 132305,
          "attribName": "unit_spearman_4_fre",
          "civs": [
            "fr"
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
          "pbgid": 6816972,
          "attribName": "unit_spearman_4_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "spearman-4",
          "pbgid": 132305,
          "attribName": "unit_spearman_4_fre",
          "civs": [
            "je"
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
        },
        {
          "id": "spearman-4",
          "pbgid": 4109073,
          "attribName": "unit_spearman_4_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "barracks",
            "jiangnan-tower"
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
              "attribName": "weapon_torch",
              "pbgid": 123518
            },
            {
              "name": "Fire Lance",
              "type": "melee",
              "damage": 11,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.545
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 1
              },
              "attribName": "weapon_spearman_4_charge_fire_chi_ha_01",
              "pbgid": 2135917
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
        "vizier": 0,
        "oliveoil": 0,
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
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/springald-3.png",
      "description": "Effective at taking out siege engines at long range. Fires after quickly setting up.\n+ Long range\n+ Bonus damage vs. siege engines\n- Trivial damage vs. buildings",
      "variations": [
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
          "pbgid": 2539420,
          "attribName": "unit_springald_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "springald-3",
          "pbgid": 2129716,
          "attribName": "unit_springald_3_byz",
          "civs": [
            "by"
          ],
          "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings"
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
          "pbgid": 132292,
          "attribName": "unit_springald_3_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "springald-3",
          "pbgid": 134735,
          "attribName": "unit_springald_3_hre",
          "civs": [
            "hr"
          ],
          "description": "Ranged siege unit.\n+ Bonus damage vs siege"
        },
        {
          "id": "springald-3",
          "pbgid": 4856887,
          "attribName": "unit_springald_3_jpn",
          "civs": [
            "ja"
          ],
          "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings"
        },
        {
          "id": "springald-3",
          "pbgid": 132292,
          "attribName": "unit_springald_3_fre",
          "civs": [
            "je"
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
              "speed": 3.125,
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
                  "value": 60,
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
                  "value": 60,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1.75,
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
          "pbgid": 2998550,
          "attribName": "unit_springald_3_hre_ha_01",
          "civs": [
            "od"
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
              "speed": 3.125,
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
                  "value": 60,
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
                  "value": 60,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1.75,
                "setup": 0,
                "teardown": 0.25,
                "cooldown": 0
              },
              "attribName": "weapon_springald_3_rus",
              "pbgid": 194215
            }
          ]
        },
        {
          "id": "springald-3",
          "pbgid": 4458259,
          "attribName": "unit_springald_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "description": "Effective at taking out siege engines at long range.\n+ Long range\n+ Bonus damage vs. siege engines\n+ Attacks without having to set up\n- Trivial damage vs. buildings"
        }
      ],
      "baseId": "springald",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 250,
        "stone": 0,
        "gold": 250,
        "vizier": 0,
        "oliveoil": 0,
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
          "speed": 3.125,
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
              "value": 60,
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
              "value": 60,
              "type": "passive"
            }
          ],
          "durations": {
            "aim": 0.5,
            "windup": 0.25,
            "attack": 0.125,
            "winddown": 0.5,
            "reload": 1.75,
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
          "value": 10
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
        "zx"
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
      "description": "Trade Ships generate Gold and Wood when assigned to a trade route with a Coastal Trade Post or another player's Dock.\n- No combat",
      "variations": [
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
          "pbgid": 7433153,
          "attribName": "unit_naval_trade_ship_3_abb_ha_01",
          "civs": [
            "ay"
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
          "pbgid": 2958354,
          "attribName": "unit_naval_trade_ship_3_byz",
          "civs": [
            "by"
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
            "vizier": 0,
            "oliveoil": 0,
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
          "pbgid": 196681,
          "attribName": "unit_naval_trade_ship_3_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 0,
            "wood": 90,
            "stone": 0,
            "gold": 90,
            "vizier": 0,
            "oliveoil": 0,
            "total": 180,
            "popcap": 2,
            "time": 30
          }
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
          "pbgid": 196684,
          "attribName": "unit_naval_trade_ship_3_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "trade-ship-2",
          "pbgid": 2672613,
          "attribName": "unit_naval_trade_ship_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "trade-ship-2",
          "pbgid": 196682,
          "attribName": "unit_naval_trade_ship_3_fre",
          "civs": [
            "je"
          ]
        },
        {
          "id": "trade-ship-2",
          "pbgid": 2226732,
          "attribName": "unit_naval_trade_ship_3_mal",
          "civs": [
            "ma"
          ]
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
          "pbgid": 3676139,
          "attribName": "unit_naval_trade_ship_3_hre_ha_01",
          "civs": [
            "od"
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
        },
        {
          "id": "trade-ship-2",
          "pbgid": 3437361,
          "attribName": "unit_naval_trade_ship_3_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "trade-ship",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 100,
        "stone": 0,
        "gold": 100,
        "vizier": 0,
        "oliveoil": 0,
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
        "Worker"
      ],
      "classes": [
        "worker"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/trader-1.png",
      "description": "Traders generate Gold when assigned to trade with a Trade Post or another player’s Market. The distance between the trade target and Market determines the amount of Gold. Once assigned to trade, the Trader makes repeated trips between its Home Market and the trade target. You can assign a new Home Market if you wish to.",
      "variations": [
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 80,
            "popcap": 1,
            "time": 30
          }
        },
        {
          "id": "trader-1",
          "pbgid": 2762454,
          "attribName": "unit_trade_cart_abb_ha_01",
          "civs": [
            "ay"
          ],
          "costs": {
            "food": 0,
            "wood": 40,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 80,
            "popcap": 1,
            "time": 30
          }
        },
        {
          "id": "trader-1",
          "pbgid": 5080225,
          "attribName": "unit_trade_cart_byz",
          "civs": [
            "by"
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
          "pbgid": 166422,
          "attribName": "unit_trade_cart_eng",
          "civs": [
            "en"
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
          "pbgid": 134750,
          "attribName": "unit_trade_cart_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "trader-1",
          "pbgid": 3765649,
          "attribName": "unit_trade_cart_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "trader-1",
          "pbgid": 132306,
          "attribName": "unit_trade_cart_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "chamber-of-commerce",
            "market"
          ]
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
          "pbgid": 5309942,
          "attribName": "unit_trade_cart_hre_ha_01",
          "civs": [
            "od"
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
        },
        {
          "id": "trader-1",
          "pbgid": 143716,
          "attribName": "unit_trade_cart_chi",
          "civs": [
            "zx"
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
        "vizier": 0,
        "oliveoil": 0,
        "total": 120,
        "popcap": 1,
        "time": 30
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
        "zx"
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
          "pbgid": 199730,
          "attribName": "unit_naval_transport_ship_2_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "transport-ship-2",
          "pbgid": 3991723,
          "attribName": "unit_naval_transport_ship_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "transport-ship-2",
          "pbgid": 5465446,
          "attribName": "unit_naval_transport_ship_2_byz",
          "civs": [
            "by"
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
            "vizier": 0,
            "oliveoil": 0,
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
          "pbgid": 193118,
          "attribName": "unit_naval_transport_ship_2_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 0,
            "wood": 90,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 90,
            "popcap": 1,
            "time": 20
          },
          "movement": {
            "speed": 1.625
          }
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
          "pbgid": 193128,
          "attribName": "unit_naval_transport_ship_2_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "transport-ship-2",
          "pbgid": 7831339,
          "attribName": "unit_naval_transport_ship_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "transport-ship-2",
          "pbgid": 193123,
          "attribName": "unit_naval_transport_ship_2_fre",
          "civs": [
            "je"
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
          "pbgid": 5886437,
          "attribName": "unit_naval_transport_ship_2_hre_ha_01",
          "civs": [
            "od"
          ]
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
        },
        {
          "id": "transport-ship-2",
          "pbgid": 6555999,
          "attribName": "unit_naval_transport_ship_2_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "transport-ship",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 100,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
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
        "ot",
        "ru",
        "zx"
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
          "pbgid": 199747,
          "attribName": "unit_villager_1_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "villager-1",
          "pbgid": 3989658,
          "attribName": "unit_villager_1_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "villager-1",
          "pbgid": 2803786,
          "attribName": "unit_villager_1_byz",
          "civs": [
            "by"
          ]
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
            "capital-town-center",
            "keep"
          ]
        },
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
            "capital-town-center",
            "kings-palace"
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
              "attribName": "weapon_torch_weak",
              "pbgid": 123522
            }
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 50,
            "popcap": 1,
            "time": 19
          }
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
            "capital-town-center",
            "palace-of-swabia"
          ]
        },
        {
          "id": "villager-1",
          "pbgid": 2148179,
          "attribName": "unit_villager_free_jpn",
          "civs": [
            "ja"
          ],
          "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units.\n- Weak in combat.\nWhen 5 or more stone is deposited an extra 20% gold is produced and when 5 or more gold is deposited an extra 20% stone is produced.",
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 0,
            "popcap": 1
          },
          "producedBy": [
            "capital-town-center",
            "town-center"
          ]
        },
        {
          "id": "villager-1",
          "pbgid": 5786526,
          "attribName": "unit_villager_1_fre_ha_01",
          "civs": [
            "je"
          ],
          "producedBy": [
            "capital-town-center",
            "town-center"
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
        },
        {
          "id": "villager-1",
          "pbgid": 2145865,
          "attribName": "unit_villager_free_chi_ha_01",
          "civs": [
            "zx"
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
          "producedBy": [
            "capital-town-center",
            "town-center"
          ],
          "weapons": [
            null
          ],
          "sight": {
            "line": 0,
            "height": 0
          },
          "movement": {
            "speed": null
          }
        }
      ],
      "baseId": "villager",
      "age": 1,
      "costs": {
        "food": 50,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "xebec",
      "name": "Xebec",
      "type": "unit",
      "civs": [
        "ab",
        "ay",
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
          "pbgid": 199726,
          "attribName": "unit_naval_combat_warship_4_abb",
          "civs": [
            "ab"
          ]
        },
        {
          "id": "xebec-4",
          "pbgid": 8469447,
          "attribName": "unit_naval_combat_warship_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "xebec-4",
          "pbgid": 193140,
          "attribName": "unit_naval_combat_warship_4_sul",
          "civs": [
            "de"
          ],
          "sight": {
            "line": 48,
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "atabeg",
      "name": "Atabeg",
      "type": "unit",
      "civs": [
        "ay"
      ],
      "unique": true,
      "displayClasses": [
        "Worker"
      ],
      "classes": [
        "worker"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/atabeg-1.png",
      "description": "Can be garrisoned into any military production building to grant +20% health to newly trained units.",
      "variations": [
        {
          "id": "atabeg-1",
          "baseId": "atabeg",
          "type": "unit",
          "name": "Atabeg",
          "pbgid": 2144832,
          "attribName": "unit_trade_camel_abb_ha_01",
          "age": 1,
          "civs": [
            "ay"
          ],
          "description": "Can be garrisoned into any military production building to grant +20% health to newly trained units.",
          "classes": [
            "worker"
          ],
          "displayClasses": [
            "Worker"
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
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "house-of-wisdom"
          ],
          "icon": "https://data.aoe4world.com/images/units/atabeg-1.png",
          "hitpoints": 90,
          "weapons": [],
          "armor": [],
          "sight": {
            "line": 35,
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
      "id": "bedouin-skirmisher",
      "name": "Bedouin Skirmisher",
      "type": "unit",
      "civs": [
        "ay"
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
      "icon": "https://data.aoe4world.com/images/units/bedouin-skirmisher-2.png",
      "description": "Ranged infantry wielding a javelin to fend off lightly armored enemies.\n+ Bonus against light infantry\n+ Long Range\n- Weak against cavalry\n\nRequires the Trade Wing - Bazaar",
      "variations": [
        {
          "id": "bedouin-skirmisher-2",
          "baseId": "bedouin-skirmisher",
          "type": "unit",
          "name": "Bedouin Skirmisher",
          "pbgid": 2146020,
          "attribName": "unit_javelin_2_abb_ha_01",
          "age": 2,
          "civs": [
            "ay"
          ],
          "description": "Ranged infantry wielding a javelin to fend off lightly armored enemies.\n+ Bonus against light infantry\n+ Long Range\n- Weak against cavalry\n\nRequires the Trade Wing - Bazaar",
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
            "food": 80,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/bedouin-skirmisher-2.png",
          "hitpoints": 70,
          "weapons": [
            {
              "name": "Javelin",
              "type": "ranged",
              "damage": 7,
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
                        "infantry",
                        "light"
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
                "winddown": 0.5,
                "reload": 0.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_javelin_2_abb_ha_01",
              "pbgid": 2146032
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
              "value": 1
            }
          ],
          "sight": {
            "line": 40,
            "height": 10
          },
          "movement": {
            "speed": 1.25
          },
          "unlockedBy": [
            "technologies/feudal-trade-wing-bazaar",
            "technologies/castle-trade-wing-bazaar",
            "technologies/imperial-trade-wing-bazaar"
          ]
        }
      ],
      "shared": {}
    },
    {
      "id": "bedouin-swordsman",
      "name": "Bedouin Swordsman",
      "type": "unit",
      "civs": [
        "ay"
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
      "icon": "https://data.aoe4world.com/images/units/bedouin-swordsman-1.png",
      "description": "Master Swordsman who excels in melee combat\n+ Bonus vs Melee units\n- Weak to ranged units\n\nRequires the Trade Wing - Bazaar",
      "variations": [
        {
          "id": "bedouin-swordsman-1",
          "baseId": "bedouin-swordsman",
          "type": "unit",
          "name": "Bedouin Swordsman",
          "pbgid": 2146044,
          "attribName": "unit_pirate_abb_ha_01",
          "age": 1,
          "civs": [
            "ay"
          ],
          "description": "Master Swordsman who excels in melee combat\n+ Bonus vs Melee units\n- Weak to ranged units\n\nRequires the Trade Wing - Bazaar",
          "classes": [
            "light",
            "melee",
            "infantry"
          ],
          "displayClasses": [
            "Light Melee Infantry"
          ],
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 60,
            "popcap": 1,
            "time": 10
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/bedouin-swordsman-1.png",
          "hitpoints": 140,
          "weapons": [
            {
              "name": "Short Sword",
              "type": "melee",
              "damage": 9,
              "speed": 1.125,
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
                        "melee"
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_pirate_abb_ha_01",
              "pbgid": 2146045
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
          "sight": {
            "line": 36,
            "height": 10
          },
          "movement": {
            "speed": 1.25
          },
          "unlockedBy": [
            "technologies/feudal-trade-wing-bazaar",
            "technologies/castle-trade-wing-bazaar",
            "technologies/imperial-trade-wing-bazaar"
          ]
        }
      ],
      "shared": {}
    },
    {
      "id": "camel-lancer",
      "name": "Camel Lancer",
      "type": "unit",
      "civs": [
        "ay"
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
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/camel-lancer-3.png",
      "description": "Higher mobility Lancer with a more powerful charge, but less powerful melee attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
      "variations": [
        {
          "id": "camel-lancer-3",
          "pbgid": 8987181,
          "attribName": "unit_knight_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "camel-lancer-4",
          "pbgid": 3260271,
          "attribName": "unit_knight_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        }
      ],
      "baseId": "camel-lancer",
      "age": 3,
      "costs": {
        "food": 130,
        "wood": 0,
        "stone": 0,
        "gold": 110,
        "vizier": 0,
        "oliveoil": 0,
        "total": 240,
        "popcap": 1,
        "time": 35
      },
      "producedBy": [
        "stable"
      ],
      "hitpoints": 210,
      "sight": {
        "line": 38,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "shared": {
        "camel-lancer-3": {
          "name": "Camel Lancer",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 22,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_knight_3_abb_ha_01",
              "pbgid": 2126332
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
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 32,
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
              "attribName": "weapon_knight_3_charge_abb_ha_01",
              "pbgid": 2126329
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
          "id": "camel-lancer-3"
        },
        "camel-lancer-4": {
          "name": "Elite Camel Lancer",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/camel-lancer-4.png",
          "hitpoints": 245,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 27,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_knight_4_abb_ha_01",
              "pbgid": 2126331
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
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 39,
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
              "attribName": "weapon_knight_4_charge_abb_ha_01",
              "pbgid": 2126330
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
          "id": "camel-lancer-4"
        }
      }
    },
    {
      "id": "dervish",
      "name": "Dervish",
      "type": "unit",
      "civs": [
        "ay"
      ],
      "unique": true,
      "displayClasses": [
        "Religious"
      ],
      "classes": [
        "religious"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/dervish-3.png",
      "description": "Mounted Religious unit. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Uses a powerful Mass Heal ability to heal friendly units in an area.\n+ Gains increased Healing when carrying a relic.\n+ High speed.",
      "variations": [
        {
          "id": "dervish-3",
          "baseId": "dervish",
          "type": "unit",
          "name": "Dervish",
          "pbgid": 2528652,
          "attribName": "unit_monk_3_cambulance_abb_ha_01",
          "age": 3,
          "civs": [
            "ay"
          ],
          "description": "Mounted Religious unit. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Uses a powerful Mass Heal ability to heal friendly units in an area.\n+ Gains increased Healing when carrying a relic.\n+ High speed.",
          "classes": [
            "religious"
          ],
          "displayClasses": [
            "Religious"
          ],
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 120,
            "vizier": 0,
            "oliveoil": 0,
            "total": 180,
            "popcap": 1,
            "time": 40
          },
          "producedBy": [
            "mosque"
          ],
          "icon": "https://data.aoe4world.com/images/units/dervish-3.png",
          "hitpoints": 120,
          "weapons": [],
          "armor": [],
          "sight": {
            "line": 38,
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
      "id": "desert-raider",
      "name": "Desert Raider",
      "type": "unit",
      "civs": [
        "ay",
        "by"
      ],
      "unique": true,
      "displayClasses": [
        "Light Ranged and Melee Camel"
      ],
      "classes": [
        "light",
        "ranged",
        "and",
        "melee",
        "camel"
      ],
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/desert-raider-2.png",
      "description": "Versatile Cavalry unit that can swap between ranged and melee attacks with a toggle.\n+ Effective against Light Infantry in Ranged Mode\n+ Effective against Cavalry in Melee Mode\n- High cost\n- Weak to Ranged units",
      "variations": [
        {
          "id": "desert-raider-2",
          "pbgid": 6946920,
          "attribName": "unit_mamluk_2_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "desert-raider-2",
          "pbgid": 2136950,
          "attribName": "unit_mamluk_2_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Versatile Cavalry unit that can swap between ranged and melee attacks with a toggle.\n+ Effective against Light Infantry in Ranged Mode\n+ Effective against Cavalry in Melee Mode\n- High cost\n- Weak to Ranged units\n\nMercenary that can be purchased per 3 units for a total of 540 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 180,
            "total": 180,
            "popcap": 1,
            "time": 90
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "desert-raider-3",
          "pbgid": 7844054,
          "attribName": "unit_mamluk_3_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "desert-raider-3",
          "pbgid": 2136951,
          "attribName": "unit_mamluk_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Versatile Cavalry unit that can swap between ranged and melee attacks with a toggle.\n+ Effective against Light Infantry in Ranged Mode\n+ Effective against Cavalry in Melee Mode\n- High cost\n- Weak to Ranged units\n\nMercenary that can be purchased per 3 units for a total of 540 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 180,
            "total": 180,
            "popcap": 1,
            "time": 90
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "desert-raider-4",
          "pbgid": 8731241,
          "attribName": "unit_mamluk_4_abb_ha_01",
          "civs": [
            "ay"
          ]
        },
        {
          "id": "desert-raider-4",
          "pbgid": 2136952,
          "attribName": "unit_mamluk_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Versatile Cavalry unit that can swap between ranged and melee attacks with a toggle.\n+ Effective against Light Infantry in Ranged Mode\n+ Effective against Cavalry in Melee Mode\n- High cost\n- Weak to Ranged units\n\nMercenary that can be purchased per 3 units for a total of 540 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 180,
            "total": 180,
            "popcap": 1,
            "time": 90
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        }
      ],
      "baseId": "desert-raider",
      "age": 2,
      "costs": {
        "food": 80,
        "wood": 50,
        "stone": 0,
        "gold": 50,
        "vizier": 0,
        "oliveoil": 0,
        "total": 180,
        "popcap": 1,
        "time": 30
      },
      "producedBy": [
        "archery-range",
        "stable"
      ],
      "hitpoints": 120,
      "sight": {
        "line": 38,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "shared": {
        "desert-raider-2": {
          "name": "Desert Raider",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 13,
              "speed": 1.375,
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
                  "value": 13,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_mamluk_melee_2_abb_ha_01",
              "pbgid": 2135406
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
            },
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 7,
              "speed": 1.25,
              "range": {
                "min": 0,
                "max": 4.5
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.25,
                "reload": 0.625,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_mamluk_ranged_2_abb_ha_01",
              "pbgid": 2135407
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 5
            }
          ],
          "id": "desert-raider-2"
        },
        "desert-raider-3": {
          "name": "Veteran Desert Raider",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/desert-raider-3.png",
          "hitpoints": 145,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 15,
              "speed": 1.375,
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
                  "value": 15,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_mamluk_melee_3_abb_ha_01",
              "pbgid": 2135408
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
            },
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 9,
              "speed": 1.25,
              "range": {
                "min": 0,
                "max": 4.5
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.25,
                "reload": 0.625,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_mamluk_ranged_3_abb_ha_01",
              "pbgid": 2135409
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 6
            }
          ],
          "id": "desert-raider-3"
        },
        "desert-raider-4": {
          "name": "Elite Desert Raider",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/desert-raider-4.png",
          "hitpoints": 175,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 19,
              "speed": 1.375,
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
                  "value": 19,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_mamluk_melee_4_abb_ha_01",
              "pbgid": 2135413
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
            },
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 11,
              "speed": 1.25,
              "range": {
                "min": 0,
                "max": 4.5
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.25,
                "reload": 0.625,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_mamluk_ranged_4_abb_ha_01",
              "pbgid": 2135415
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 7
            }
          ],
          "id": "desert-raider-4"
        }
      }
    },
    {
      "id": "manjaniq",
      "name": "Manjaniq",
      "type": "unit",
      "civs": [
        "ay"
      ],
      "unique": true,
      "displayClasses": [
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/manjaniq-3.png",
      "description": "Fires multiple projectiles dealing damage in an area.\n+ Effective against massed units\n+ Can use Incendiary projectiles for devastating area damage\n - Must be set up to fire",
      "variations": [
        {
          "id": "manjaniq-3",
          "baseId": "manjaniq",
          "type": "unit",
          "name": "Manjaniq",
          "pbgid": 2890619,
          "attribName": "unit_mangonel_3_abb_ha_01",
          "age": 3,
          "civs": [
            "ay"
          ],
          "description": "Fires multiple projectiles dealing damage in an area.\n+ Effective against massed units\n+ Can use Incendiary projectiles for devastating area damage\n - Must be set up to fire",
          "classes": [
            "siege"
          ],
          "displayClasses": [
            "Siege"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 400,
            "stone": 0,
            "gold": 200,
            "vizier": 0,
            "oliveoil": 0,
            "total": 600,
            "popcap": 3,
            "time": 40
          },
          "producedBy": [
            "siege-workshop"
          ],
          "icon": "https://data.aoe4world.com/images/units/manjaniq-3.png",
          "hitpoints": 130,
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
              "damage": 2,
              "speed": 7,
              "range": {
                "min": 3,
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
                  "value": 14,
                  "type": "passive"
                },
                {
                  "property": "fireAttack",
                  "target": {
                    "class": [
                      [
                        "naval",
                        "unit"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 16,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0,
                "attack": 0.25,
                "winddown": 2.25,
                "reload": 4,
                "setup": 0,
                "teardown": 1,
                "cooldown": 0
              },
              "burst": {
                "count": 12
              },
              "attribName": "weapon_mangonel_3_incendiary",
              "pbgid": 127724
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 30
            }
          ],
          "sight": {
            "line": 52,
            "height": 10
          },
          "movement": {
            "speed": 0.75
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "tower-of-the-sultan",
      "name": "Tower of the Sultan",
      "type": "unit",
      "civs": [
        "ay"
      ],
      "unique": true,
      "displayClasses": [
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/tower-of-the-sultan-3.png",
      "description": "Massive infantry transport effective against buildings and walls. Move speed increases for each unit garrisoned inside.\n+ Fires arrows\n+ High ranged armor\n+ High health\n- Slow move speed when empty",
      "variations": [
        {
          "id": "tower-of-the-sultan-3",
          "baseId": "tower-of-the-sultan",
          "type": "unit",
          "name": "Tower of the Sultan",
          "pbgid": 2141356,
          "attribName": "unit_ram_tower_3_abb_ha_01",
          "age": 3,
          "civs": [
            "ay"
          ],
          "description": "Massive infantry transport effective against buildings and walls. Move speed increases for each unit garrisoned inside.\n+ Fires arrows\n+ High ranged armor\n+ High health\n- Slow move speed when empty",
          "classes": [
            "siege"
          ],
          "displayClasses": [
            "Siege"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 650,
            "stone": 0,
            "gold": 350,
            "vizier": 0,
            "oliveoil": 0,
            "total": 1000,
            "popcap": 3,
            "time": 140
          },
          "producedBy": [
            "scout",
            "spearman",
            "ghulam",
            "archer",
            "crossbowman",
            "handcannoneer",
            "desert-raider",
            "horseman",
            "camel-lancer",
            "bedouin-skirmisher",
            "bedouin-swordsman"
          ],
          "icon": "https://data.aoe4world.com/images/units/tower-of-the-sultan-3.png",
          "hitpoints": 800,
          "weapons": [
            {
              "name": "Ram",
              "type": "siege",
              "damage": 600,
              "speed": 8.125,
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
                "cooldown": 7
              },
              "attribName": "weapon_ram_tower_3_abb_ha_01",
              "pbgid": 2141358
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 30
            }
          ],
          "sight": {
            "line": 30,
            "height": 10
          },
          "movement": {
            "speed": 0.5
          },
          "garrison": {
            "capacity": 20,
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
      "id": "arbaletrier",
      "name": "Arbalétrier",
      "type": "unit",
      "civs": [
        "by",
        "fr",
        "je"
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
          "pbgid": 2121101,
          "attribName": "unit_crossbowman_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "High damage ranged unit with a defensive pavise shield. Best used when supported by others.\n+ Anti-armor specialist\n+ Comes with melee armor\n- Low health\n- Countered by Horsemen\n\nMercenary that can be purchased per 4 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 120,
            "total": 120,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post",
            "technologies/veteran-contract"
          ]
        },
        {
          "id": "arbaletrier-3",
          "pbgid": 132231,
          "attribName": "unit_crossbowman_3_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "arbaletrier-3",
          "pbgid": 132231,
          "attribName": "unit_crossbowman_3_fre",
          "civs": [
            "je"
          ]
        },
        {
          "id": "arbaletrier-4",
          "pbgid": 2121102,
          "attribName": "unit_crossbowman_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "High damage ranged unit with a defensive pavise shield. Best used when supported by others.\n+ Anti-armor specialist\n+ Comes with melee armor\n- Low health\n- Countered by Horsemen\n\nMercenary that can be purchased per 4 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 120,
            "total": 120,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post",
            "technologies/veteran-contract"
          ]
        },
        {
          "id": "arbaletrier-4",
          "pbgid": 132273,
          "attribName": "unit_crossbowman_4_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "arbaletrier-4",
          "pbgid": 132273,
          "attribName": "unit_crossbowman_4_fre",
          "civs": [
            "je"
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "carrack",
      "name": "Carrack",
      "type": "unit",
      "civs": [
        "by",
        "en",
        "fr",
        "hr",
        "je",
        "od",
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
          "pbgid": 2616092,
          "attribName": "unit_naval_combat_warship_4_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "carrack-4",
          "pbgid": 193115,
          "attribName": "unit_naval_carrack_4_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 180,
            "wood": 180,
            "stone": 0,
            "gold": 180,
            "vizier": 0,
            "oliveoil": 0,
            "total": 540,
            "popcap": 5,
            "time": 45
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
            "je"
          ]
        },
        {
          "id": "carrack-4",
          "pbgid": 8922530,
          "attribName": "unit_naval_combat_warship_4_hre_ha_01",
          "civs": [
            "od"
          ],
          "sight": {
            "line": 48,
            "height": 10
          }
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "cataphract",
      "name": "Cataphract",
      "type": "unit",
      "civs": [
        "by"
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
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/cataphract-3.png",
      "description": "Expensive cavalry with high damage and a powerful Trample ability that charges through enemies.\n+ Heavy armor\n+ Trample deals area damage\n- No base charge attack\n- Slower move speed\n- Countered by Spearmen and Crossbowmen",
      "variations": [
        {
          "id": "cataphract-3",
          "pbgid": 6027069,
          "attribName": "unit_knight_3_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "cataphract-4",
          "pbgid": 5598691,
          "attribName": "unit_knight_4_byz",
          "civs": [
            "by"
          ]
        }
      ],
      "baseId": "cataphract",
      "age": 3,
      "costs": {
        "food": 180,
        "wood": 0,
        "stone": 0,
        "gold": 150,
        "vizier": 0,
        "oliveoil": 0,
        "total": 330,
        "popcap": 1,
        "time": 40
      },
      "producedBy": [
        "imperial-hippodrome",
        "stable",
        "palatine-school"
      ],
      "hitpoints": 360,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.5
      },
      "shared": {
        "cataphract-3": {
          "name": "Cataphract",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 27,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_knight_3_byz",
              "pbgid": 2145240
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
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 36,
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
              "attribName": "weapon_knight_3_charge_byz",
              "pbgid": 2121959
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
          "id": "cataphract-3"
        },
        "cataphract-4": {
          "name": "Elite Cataphract",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/cataphract-4.png",
          "hitpoints": 405,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 32,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_knight_4_byz",
              "pbgid": 2145252
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
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 36,
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
              "attribName": "weapon_knight_3_charge_byz",
              "pbgid": 2121959
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
          "id": "cataphract-4"
        }
      }
    },
    {
      "id": "cheirosiphon",
      "name": "Cheirosiphon",
      "type": "unit",
      "civs": [
        "by"
      ],
      "unique": true,
      "displayClasses": [
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/cheirosiphon-3.png",
      "description": "Durable infantry transport equipped with Greek Fire, effective against Buildings and Walls.\n+ Greek Fire persists on ground\n+ High ranged armor\n+ High health\n- Only attacks buildings\n- Slow move speed",
      "variations": [
        {
          "id": "cheirosiphon-3",
          "baseId": "cheirosiphon",
          "type": "unit",
          "name": "Cheirosiphon",
          "pbgid": 2140764,
          "attribName": "unit_workshop_fire_ram_3_byz",
          "age": 3,
          "civs": [
            "by"
          ],
          "description": "Durable infantry transport equipped with Greek Fire, effective against Buildings and Walls.\n+ Greek Fire persists on ground\n+ High ranged armor\n+ High health\n- Only attacks buildings\n- Slow move speed",
          "classes": [
            "siege"
          ],
          "displayClasses": [
            "Siege"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 200,
            "stone": 0,
            "gold": 60,
            "vizier": 0,
            "oliveoil": 0,
            "total": 260,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "siege-workshop",
            "palatine-school"
          ],
          "icon": "https://data.aoe4world.com/images/units/cheirosiphon-3.png",
          "hitpoints": 310,
          "weapons": [
            {
              "name": "Greek Fire",
              "type": "siege",
              "damage": 10,
              "speed": 8.5,
              "range": {
                "min": 0,
                "max": 2.5
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
                  "value": 5,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0,
                "attack": 4,
                "winddown": 2,
                "reload": 2,
                "setup": 0,
                "teardown": 1,
                "cooldown": 0
              },
              "burst": {
                "count": 28
              },
              "attribName": "weapon_ram_flame_thrower_byz",
              "pbgid": 2108831
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
      "id": "demolition-ship",
      "name": "Demolition Ship",
      "type": "unit",
      "civs": [
        "by",
        "en",
        "fr",
        "hr",
        "je",
        "ma",
        "od",
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
          "pbgid": 4028254,
          "attribName": "unit_naval_fireship_3_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "demolition-ship-3",
          "pbgid": 193117,
          "attribName": "unit_naval_fireship_3_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 0,
            "wood": 72,
            "stone": 0,
            "gold": 72,
            "vizier": 0,
            "oliveoil": 0,
            "total": 144,
            "popcap": 2,
            "time": 15
          }
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
            "je"
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
          "pbgid": 2280488,
          "attribName": "unit_naval_fireship_3_hre_ha_01",
          "civs": [
            "od"
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
        "vizier": 0,
        "oliveoil": 0,
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
                    "massive"
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
      "id": "dromon",
      "name": "Dromon",
      "type": "unit",
      "civs": [
        "by"
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
      "icon": "https://data.aoe4world.com/images/units/dromon-2.png",
      "description": "Military ship equipped a flamethrower that can be upgraded to use Greek Fire.\n+ Strong against Arrow Ships\n- Low weapon range\n- Countered by Demolition Ships",
      "variations": [
        {
          "id": "dromon-2",
          "baseId": "dromon",
          "type": "unit",
          "name": "Dromon",
          "pbgid": 8953580,
          "attribName": "unit_naval_combat_ship_2_byz",
          "age": 2,
          "civs": [
            "by"
          ],
          "description": "Military ship equipped a flamethrower that can be upgraded to use Greek Fire.\n+ Strong against Arrow Ships\n- Low weapon range\n- Countered by Demolition Ships",
          "classes": [
            "springald",
            "ship"
          ],
          "displayClasses": [
            "Springald Ship"
          ],
          "unique": true,
          "costs": {
            "food": 100,
            "wood": 200,
            "stone": 0,
            "gold": 60,
            "vizier": 0,
            "oliveoil": 0,
            "total": 360,
            "popcap": 3,
            "time": 30
          },
          "producedBy": [
            "dock"
          ],
          "icon": "https://data.aoe4world.com/images/units/dromon-2.png",
          "hitpoints": 500,
          "weapons": [
            {
              "name": "Greek Fire",
              "type": "siege",
              "damage": 6,
              "speed": 3,
              "range": {
                "min": 0,
                "max": 4
              },
              "modifiers": [
                {
                  "property": "siegeAttack",
                  "target": {
                    "class": [
                      [
                        "archer",
                        "ship"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 8,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0,
                "windup": 0,
                "attack": 1.5,
                "winddown": 1.5,
                "reload": 0,
                "setup": 0,
                "teardown": 1,
                "cooldown": 0
              },
              "burst": {
                "count": 6
              },
              "attribName": "weapon_dromon_flame_thrower_byz",
              "pbgid": 2140310
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
      "id": "galley",
      "name": "Galley",
      "type": "unit",
      "civs": [
        "by",
        "en",
        "fr",
        "hr",
        "je",
        "od"
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
          "pbgid": 6590831,
          "attribName": "unit_naval_war_galley_3_byz",
          "civs": [
            "by"
          ],
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
              "attribName": "weapon_naval_arrow_ship_arrow_western",
              "pbgid": 2034308
            }
          ]
        },
        {
          "id": "galley-2",
          "pbgid": 193930,
          "attribName": "unit_naval_war_galley_3_eng",
          "civs": [
            "en"
          ],
          "costs": {
            "food": 72,
            "wood": 135,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 207,
            "popcap": 3,
            "time": 25
          }
        },
        {
          "id": "galley-2",
          "pbgid": 2101341,
          "attribName": "unit_naval_war_galley_3_fre",
          "civs": [
            "fr"
          ]
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
            "je"
          ]
        },
        {
          "id": "galley-2",
          "pbgid": 8686565,
          "attribName": "unit_naval_war_galley_3_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "galley",
      "age": 2,
      "costs": {
        "food": 80,
        "wood": 150,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 230,
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
      "id": "grenadier",
      "name": "Grenadier",
      "type": "unit",
      "civs": [
        "by",
        "ch",
        "zx"
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
          "pbgid": 2104164,
          "attribName": "unit_grenadier_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Advanced ranged infantry with thrown explosive canisters that deal damage in a small area.\n+ Deals area damage\n- Low single target damage\n- Slow movement speed\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nRequires the Silk Road Contract.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "technologies/silk-road-contract",
            "technologies/elite-contract"
          ]
        },
        {
          "id": "grenadier-4",
          "pbgid": 156416,
          "attribName": "unit_grenadier_4_chi",
          "civs": [
            "ch"
          ]
        },
        {
          "id": "grenadier-4",
          "pbgid": 7123292,
          "attribName": "unit_grenadier_4_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "grenadier",
      "age": 4,
      "costs": {
        "food": 120,
        "wood": 60,
        "stone": 0,
        "gold": 60,
        "vizier": 0,
        "oliveoil": 0,
        "total": 240,
        "popcap": 1,
        "time": 30
      },
      "producedBy": [
        "archery-range"
      ],
      "hitpoints": 150,
      "weapons": [
        {
          "name": "Grenade",
          "type": "siege",
          "damage": 10,
          "speed": 1.625,
          "range": {
            "min": 0,
            "max": 3
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
              "value": 20,
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
      },
      "shared": {}
    },
    {
      "id": "horse-archer",
      "name": "Horse Archer",
      "type": "unit",
      "civs": [
        "by",
        "ru"
      ],
      "unique": false,
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
      "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units\n\nMercenary that can be purchased per 3 units for a total of 360 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
      "variations": [
        {
          "id": "horse-archer-3",
          "pbgid": 2136965,
          "attribName": "unit_horsearcher_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "horse-archer-3",
          "pbgid": 133493,
          "attribName": "unit_horsearcher_3_rus",
          "civs": [
            "ru"
          ],
          "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units",
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 40,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "horse-archer-4",
          "pbgid": 2136966,
          "attribName": "unit_horsearcher_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "horse-archer-4",
          "pbgid": 133494,
          "attribName": "unit_horsearcher_4_rus",
          "civs": [
            "ru"
          ],
          "description": "Highly mobile ranged cavalry effective against slower melee units.\n+ High mobility\n- Weak vs ranged units",
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 40,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "archery-range"
          ]
        }
      ],
      "baseId": "horse-archer",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 120,
        "total": 120,
        "popcap": 1,
        "time": 60
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 85,
      "sight": {
        "line": 34,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "unlockedBy": [
        "buildings/trade-post",
        "technologies/veteran-contract"
      ],
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
      "id": "huihui-pao",
      "name": "Huihui Pao",
      "type": "unit",
      "civs": [
        "by",
        "mo"
      ],
      "unique": false,
      "displayClasses": [
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/huihui-pao-1.png",
      "description": "Massive siege engine with incredible range, extra effective at destroying buildings and walls.\n+ Extremely long range\n- Must be set up to fire\n\nMercenary that can be purchased for 1000 Olive Oil.",
      "variations": [
        {
          "id": "huihui-pao-1",
          "pbgid": 2138873,
          "attribName": "unit_khaganate_great_trebuchet_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "huihui-pao-1",
          "pbgid": 2117335,
          "attribName": "unit_khaganate_great_trebuchet_mon",
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 0,
            "popcap": 3,
            "time": 63
          },
          "producedBy": [
            "khaganate-palace"
          ],
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
          ]
        }
      ],
      "baseId": "huihui-pao",
      "age": 1,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 1000,
        "total": 1000,
        "popcap": 3,
        "time": 63
      },
      "producedBy": [
        "foreign-engineering-company"
      ],
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
        },
        {
          "name": "Greek Fire",
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
          "attribName": "weapon_khagnate_huihui_pao_merc_byz",
          "pbgid": 2150874
        }
      ],
      "armor": [
        {
          "type": "ranged",
          "value": 30
        }
      ],
      "sight": {
        "line": 80,
        "height": 10
      },
      "movement": {
        "speed": 0.625
      },
      "unlockedBy": [
        "buildings/foreign-engineering-company"
      ],
      "shared": {}
    },
    {
      "id": "javelin-thrower",
      "name": "Javelin Thrower",
      "type": "unit",
      "civs": [
        "by",
        "ma"
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
      "icon": "https://data.aoe4world.com/images/units/javelin-thrower-2.png",
      "description": "Ranged infantry effective against other ranged units.\n+ Anti-ranged specialist\n+ Increased weapon range\n+ Comes with ranged armor\n- Low health\n- Countered by Horsemen",
      "variations": [
        {
          "id": "javelin-thrower-2",
          "pbgid": 2104194,
          "attribName": "unit_javelin_2_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "javelin-thrower-2",
          "pbgid": 2062109,
          "attribName": "unit_javelin_2_mal",
          "civs": [
            "ma"
          ],
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "archery-range",
            "farimba-garrison"
          ]
        },
        {
          "id": "javelin-thrower-3",
          "pbgid": 2104195,
          "attribName": "unit_javelin_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "javelin-thrower-3",
          "pbgid": 2062104,
          "attribName": "unit_javelin_3_mal",
          "civs": [
            "ma"
          ],
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "archery-range",
            "farimba-garrison"
          ]
        },
        {
          "id": "javelin-thrower-4",
          "pbgid": 2104196,
          "attribName": "unit_javelin_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "javelin-thrower-4",
          "pbgid": 2062105,
          "attribName": "unit_javelin_4_mal",
          "civs": [
            "ma"
          ],
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "archery-range",
            "farimba-garrison"
          ]
        }
      ],
      "baseId": "javelin-thrower",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 115,
        "total": 115,
        "popcap": 1,
        "time": 80
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
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
      "id": "keshik",
      "name": "Keshik",
      "type": "unit",
      "civs": [
        "by",
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
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/keshik-2.png",
      "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n+ Restores health after every attack\n- Less health than Lancers\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 400 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
      "variations": [
        {
          "id": "keshik-2",
          "pbgid": 2136775,
          "attribName": "unit_keshik_2_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "keshik-2",
          "pbgid": 129609,
          "attribName": "unit_knight_2_mon",
          "civs": [
            "mo"
          ],
          "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n+ Restores health after every attack\n- Less health than Lancers\n- Countered by Spearmen and Crossbowmen",
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 80,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "stable",
            "khaganate-palace"
          ]
        },
        {
          "id": "keshik-3",
          "pbgid": 2136776,
          "attribName": "unit_keshik_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "keshik-3",
          "pbgid": 129610,
          "attribName": "unit_knight_3_mon",
          "civs": [
            "mo"
          ],
          "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n+ Restores health after every attack\n- Less health than Lancers\n- Countered by Spearmen and Crossbowmen",
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 80,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "stable",
            "khaganate-palace"
          ]
        },
        {
          "id": "keshik-4",
          "pbgid": 2136777,
          "attribName": "unit_keshik_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "keshik-4",
          "pbgid": 136254,
          "attribName": "unit_knight_4_mon",
          "civs": [
            "mo"
          ],
          "description": "Expensive cavalry with high damage and a powerful charge attack. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n+ Restores health after every attack\n- Less health than Lancers\n- Countered by Spearmen and Crossbowmen",
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 80,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "stable",
            "khaganate-palace"
          ]
        }
      ],
      "baseId": "keshik",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 200,
        "total": 200,
        "popcap": 1,
        "time": 66
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 145,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "unlockedBy": [
        "technologies/eastern-mercenary-contract"
      ],
      "shared": {
        "keshik-2": {
          "name": "Keshik",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 15,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_lancer_2_mon",
              "pbgid": 2131334
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
              "attribName": "weapon_torch_lancer_mon",
              "pbgid": 2135368
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 23,
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
              "attribName": "weapon_lancer_2_charge_mon",
              "pbgid": 2131336
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
          "id": "keshik-2"
        },
        "keshik-3": {
          "name": "Veteran Keshik",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/keshik-3.png",
          "hitpoints": 175,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 19,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_lancer_3_mon",
              "pbgid": 2131337
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
              "attribName": "weapon_torch_lancer_mon",
              "pbgid": 2135368
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 29,
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
              "attribName": "weapon_lancer_3_charge_mon",
              "pbgid": 2131338
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
          "id": "keshik-3"
        },
        "keshik-4": {
          "name": "Elite Keshik",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/keshik-4.png",
          "hitpoints": 210,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 23,
              "speed": 1.375,
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
                "cooldown": 0.75
              },
              "attribName": "weapon_lancer_4_mon",
              "pbgid": 2131339
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
              "attribName": "weapon_torch_lancer_mon",
              "pbgid": 2135368
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 35,
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
              "attribName": "weapon_lancer_4_charge_mon",
              "pbgid": 2131340
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
          "id": "keshik-4"
        }
      }
    },
    {
      "id": "landsknecht",
      "name": "Landsknecht",
      "type": "unit",
      "civs": [
        "by",
        "hr"
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
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/landsknecht-3.png",
      "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers\n\nMercenary that can be purchased per 3 units for a total of 480 Olive Oil.\n\nRequires the Western Mercenary Contract.",
      "variations": [
        {
          "id": "landsknecht-3",
          "pbgid": 2104174,
          "attribName": "unit_landsknecht_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "landsknecht-3",
          "pbgid": 136941,
          "attribName": "unit_landsknecht_3_hre",
          "civs": [
            "hr"
          ],
          "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers",
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 100,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "barracks",
            "burgrave-palace"
          ]
        },
        {
          "id": "landsknecht-4",
          "pbgid": 2104175,
          "attribName": "unit_landsknecht_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "landsknecht-4",
          "pbgid": 168401,
          "attribName": "unit_landsknecht_4_hre",
          "civs": [
            "hr"
          ],
          "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers",
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 100,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "barracks",
            "burgrave-palace"
          ]
        }
      ],
      "baseId": "landsknecht",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 160,
        "total": 160,
        "popcap": 1,
        "time": 80
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 85,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.25
      },
      "unlockedBy": [
        "technologies/western-mercenary-contract",
        "technologies/veteran-contract"
      ],
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
          "hitpoints": 100,
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
      "id": "limitanei",
      "name": "Limitanei",
      "type": "unit",
      "civs": [
        "by"
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
      "icon": "https://data.aoe4world.com/images/units/limitanei-1.png",
      "description": "Infantry best used against cavalry. Can enter Shield Wall to take reduced ranged damage.\n+ Anti-cavalry specialist\n+ Increased health\n- Shield Wall reduces move speed\n- Weak vs armored infantry\n- Countered by Archers",
      "variations": [
        {
          "id": "limitanei-1",
          "pbgid": 4820556,
          "attribName": "unit_spearman_1_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "limitanei-2",
          "pbgid": 5995641,
          "attribName": "unit_spearman_2_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "limitanei-3",
          "pbgid": 6911610,
          "attribName": "unit_spearman_3_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "limitanei-4",
          "pbgid": 8162420,
          "attribName": "unit_spearman_4_byz",
          "civs": [
            "by"
          ]
        }
      ],
      "baseId": "limitanei",
      "age": 1,
      "costs": {
        "food": 80,
        "wood": 10,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 90,
        "popcap": 1,
        "time": 17
      },
      "producedBy": [
        "barracks",
        "palatine-school"
      ],
      "hitpoints": 90,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.25
      },
      "shared": {
        "limitanei-1": {
          "name": "Limitanei",
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 7,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.4425
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
              "attribName": "weapon_spearman_1_byz",
              "pbgid": 2136366
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
          "id": "limitanei-1"
        },
        "limitanei-2": {
          "name": "Hardened Limitanei",
          "age": 2,
          "icon": "https://data.aoe4world.com/images/units/limitanei-2.png",
          "hitpoints": 100,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 8,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.4425
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
              "attribName": "weapon_spearman_2_byz",
              "pbgid": 2136368
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
          "id": "limitanei-2"
        },
        "limitanei-3": {
          "name": "Veteran Limitanei",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/limitanei-3.png",
          "hitpoints": 120,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 9,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.4425
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
              "attribName": "weapon_spearman_3_byz",
              "pbgid": 2136370
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
          "id": "limitanei-3"
        },
        "limitanei-4": {
          "name": "Elite Limitanei",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/limitanei-4.png",
          "hitpoints": 140,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 11,
              "speed": 1.875,
              "range": {
                "min": 0,
                "max": 0.4425
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
              "attribName": "weapon_spearman_4_byz",
              "pbgid": 2136372
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
          "id": "limitanei-4"
        }
      }
    },
    {
      "id": "longbowman",
      "name": "Longbowman",
      "type": "unit",
      "civs": [
        "by",
        "en"
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
      "icon": "https://data.aoe4world.com/images/units/longbowman-2.png",
      "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 450 Olive Oil.\n\nRequires the Western Mercenary Contract.",
      "variations": [
        {
          "id": "longbowman-2",
          "pbgid": 2104168,
          "attribName": "unit_longbowman_2_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "longbowman-2",
          "pbgid": 166389,
          "attribName": "unit_archer_2_eng",
          "civs": [
            "en"
          ],
          "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
          "unique": true,
          "costs": {
            "food": 40,
            "wood": 50,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
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
          ]
        },
        {
          "id": "longbowman-3",
          "pbgid": 2104169,
          "attribName": "unit_longbowman_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "longbowman-3",
          "pbgid": 166390,
          "attribName": "unit_archer_3_eng",
          "civs": [
            "en"
          ],
          "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
          "unique": true,
          "costs": {
            "food": 40,
            "wood": 50,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
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
          ]
        },
        {
          "id": "longbowman-4",
          "pbgid": 2104170,
          "attribName": "unit_longbowman_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "longbowman-4",
          "pbgid": 166391,
          "attribName": "unit_archer_4_eng",
          "civs": [
            "en"
          ],
          "description": "Cheap long-ranged infantry with good damage vs. unarmored targets.\n+ Long range\n+ Can construct Palings to fend off cavalry charges\n- Slow movement speed\n- Countered by Horsemen",
          "unique": true,
          "costs": {
            "food": 40,
            "wood": 50,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
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
          ]
        }
      ],
      "baseId": "longbowman",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 90,
        "total": 90,
        "popcap": 1,
        "time": 75
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 70,
      "sight": {
        "line": 44,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "unlockedBy": [
        "technologies/western-mercenary-contract"
      ],
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
      "id": "mangudai",
      "name": "Mangudai",
      "type": "unit",
      "civs": [
        "by",
        "mo"
      ],
      "unique": false,
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
      "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range\n\nMercenary that can be purchased per 3 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
      "variations": [
        {
          "id": "mangudai-2",
          "pbgid": 2104176,
          "attribName": "unit_mangudai_2_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "mangudai-2",
          "pbgid": 129666,
          "attribName": "unit_horsearcher_2_mon",
          "civs": [
            "mo"
          ],
          "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "mangudai-3",
          "pbgid": 2104177,
          "attribName": "unit_mangudai_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "mangudai-3",
          "pbgid": 129667,
          "attribName": "unit_horsearcher_3_mon",
          "civs": [
            "mo"
          ],
          "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "mangudai-4",
          "pbgid": 2104178,
          "attribName": "unit_mangudai_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "mangudai-4",
          "pbgid": 136250,
          "attribName": "unit_horsearcher_4_mon",
          "civs": [
            "mo"
          ],
          "description": "Confounding mobile ranged cavalry that can fire while moving.\n+ High rate of fire\n- Low weapon range",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 40,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "archery-range"
          ]
        }
      ],
      "baseId": "mangudai",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 160,
        "total": 160,
        "popcap": 1,
        "time": 80
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 85,
      "sight": {
        "line": 34,
        "height": 10
      },
      "movement": {
        "speed": 1.5625
      },
      "unlockedBy": [
        "buildings/trade-post"
      ],
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
      "id": "monk",
      "name": "Monk",
      "type": "unit",
      "civs": [
        "by",
        "ch",
        "en",
        "fr",
        "je",
        "zx"
      ],
      "unique": false,
      "displayClasses": [
        "Religious"
      ],
      "classes": [
        "religious"
      ],
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/monk-2.png",
      "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Slow movement speed",
      "variations": [
        {
          "id": "monk-2",
          "pbgid": 6782850,
          "attribName": "unit_monk_2_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "monk-3",
          "pbgid": 142042,
          "attribName": "unit_monk_3_chi",
          "civs": [
            "ch"
          ]
        },
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
          "pbgid": 132286,
          "attribName": "unit_monk_3_fre",
          "civs": [
            "je"
          ]
        },
        {
          "id": "monk-3",
          "pbgid": 2874147,
          "attribName": "unit_monk_3_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "monk",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 150,
        "vizier": 0,
        "oliveoil": 0,
        "total": 150,
        "popcap": 1,
        "time": 30
      },
      "producedBy": [
        "grand-winery",
        "monastery"
      ],
      "hitpoints": 90,
      "sight": {
        "line": 30,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "shared": {
        "monk-2": {
          "name": "Monk",
          "weapons": [],
          "armor": [],
          "id": "monk-2"
        },
        "monk-3": {
          "name": "Monk",
          "age": 3,
          "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Heals friendly units\n- Slow movement speed",
          "producedBy": [
            "monastery"
          ],
          "icon": "https://data.aoe4world.com/images/units/monk-3.png",
          "weapons": [],
          "armor": [],
          "id": "monk-3"
        }
      }
    },
    {
      "id": "musofadi-warrior",
      "name": "Musofadi Warrior",
      "type": "unit",
      "civs": [
        "by",
        "ma"
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
      "icon": "https://data.aoe4world.com/images/units/musofadi-warrior-2.png",
      "description": "Infantry effective at ambush attacks and countering heavy armored targets.\n+ Can enter stealth\n+ Anti-armor specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth\n\nMercenary that can be purchased per 5 units for a total of 400 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
      "variations": [
        {
          "id": "musofadi-warrior-2",
          "pbgid": 2104190,
          "attribName": "unit_gbeto_2_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "musofadi-warrior-2",
          "pbgid": 2059654,
          "attribName": "unit_gbeto_2_mal",
          "civs": [
            "ma"
          ],
          "description": "Infantry effective at ambush attacks and countering heavy armored targets.\n+ Can enter stealth\n+ Anti-armor specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth",
          "unique": true,
          "costs": {
            "food": 50,
            "wood": 0,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 80,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "barracks",
            "farimba-garrison"
          ]
        },
        {
          "id": "musofadi-warrior-3",
          "pbgid": 2104191,
          "attribName": "unit_gbeto_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "musofadi-warrior-3",
          "pbgid": 2059655,
          "attribName": "unit_gbeto_3_mal",
          "civs": [
            "ma"
          ],
          "description": "Infantry effective at ambush attacks and countering heavy armored targets.\n+ Can enter stealth\n+ Anti-armor specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth",
          "unique": true,
          "costs": {
            "food": 50,
            "wood": 0,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 80,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "barracks",
            "farimba-garrison"
          ]
        },
        {
          "id": "musofadi-warrior-4",
          "pbgid": 2104192,
          "attribName": "unit_gbeto_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "musofadi-warrior-4",
          "pbgid": 2059656,
          "attribName": "unit_gbeto_4_mal",
          "civs": [
            "ma"
          ],
          "description": "Infantry effective at ambush attacks and countering heavy armored targets.\n+ Can enter stealth\n+ Anti-armor specialist\n- Low health\n- Countered by Archers\n- Capital Town Centers, Outposts, and Scouts can spot stealth",
          "unique": true,
          "costs": {
            "food": 50,
            "wood": 0,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 80,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "barracks",
            "farimba-garrison"
          ]
        }
      ],
      "baseId": "musofadi-warrior",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 80,
        "total": 80,
        "popcap": 1,
        "time": 68
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 90,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.375
      },
      "unlockedBy": [
        "buildings/trade-post"
      ],
      "shared": {
        "musofadi-warrior-2": {
          "name": "Musofadi Warrior",
          "weapons": [
            {
              "name": "Mace",
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
          "hitpoints": 110,
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
          "hitpoints": 135,
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
      "id": "nest-of-bees",
      "name": "Nest of Bees",
      "type": "unit",
      "civs": [
        "by",
        "ch",
        "zx"
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
          "pbgid": 2124175,
          "attribName": "unit_nest_of_bees_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Innovative field weapon capable of firing a barrage of rockets to damage defensive positions and clumped enemy troops.\n+ Good area of effect damage against most targets\n- Slowest movement speed\n- Weak if surrounded\n\nMercenary that can be purchased for 600 Olive Oil.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 600,
            "total": 600,
            "popcap": 3,
            "time": 40
          },
          "producedBy": [
            "foreign-engineering-company"
          ],
          "unlockedBy": [
            "buildings/foreign-engineering-company"
          ]
        },
        {
          "id": "nest-of-bees-3",
          "pbgid": 166611,
          "attribName": "unit_nest_of_bees_4_chi",
          "civs": [
            "ch"
          ],
          "hitpoints": 130
        },
        {
          "id": "nest-of-bees-3",
          "pbgid": 4524503,
          "attribName": "unit_nest_of_bees_4_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "nest-of-bees",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 300,
        "stone": 0,
        "gold": 300,
        "vizier": 0,
        "oliveoil": 0,
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
          "value": 30
        }
      ],
      "sight": {
        "line": 64,
        "height": 10
      },
      "movement": {
        "speed": 0.8125
      },
      "shared": {}
    },
    {
      "id": "royal-cannon",
      "name": "Royal Cannon",
      "type": "unit",
      "civs": [
        "by",
        "fr",
        "je"
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
          "pbgid": 2138874,
          "attribName": "unit_cannon_4_royal_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Most powerful siege cannon. Excellent against buildings or any stubborn targets.\n+ Bonus damage to buildings\n\nMercenary that can be purchased for 900 Olive Oil.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 900,
            "total": 900,
            "popcap": 3,
            "time": 45
          },
          "producedBy": [
            "foreign-engineering-company"
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 35
            }
          ],
          "unlockedBy": [
            "buildings/foreign-engineering-company"
          ]
        },
        {
          "id": "royal-cannon-4",
          "pbgid": 1907351,
          "attribName": "unit_cannon_4_royal_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "royal-cannon-4",
          "pbgid": 6131332,
          "attribName": "unit_cannon_4_royal_fre_ha_01",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "royal-cannon",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 300,
        "stone": 0,
        "gold": 600,
        "vizier": 0,
        "oliveoil": 0,
        "total": 900,
        "popcap": 3,
        "time": 45
      },
      "producedBy": [
        "college-of-artillery"
      ],
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
          "value": 40
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
      "id": "royal-knight",
      "name": "Royal Knight",
      "type": "unit",
      "civs": [
        "by",
        "fr",
        "je"
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
          "pbgid": 2104171,
          "attribName": "unit_royal_knight_2_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Gain bonus damage for 5 seconds after charging. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "royal-knight-2",
          "pbgid": 133147,
          "attribName": "unit_knight_2_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "royal-knight-2",
          "pbgid": 133147,
          "attribName": "unit_knight_2_fre",
          "civs": [
            "je"
          ]
        },
        {
          "id": "royal-knight-3",
          "pbgid": 2104172,
          "attribName": "unit_royal_knight_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Gain bonus damage for 5 seconds after charging. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
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
          "id": "royal-knight-3",
          "pbgid": 132279,
          "attribName": "unit_knight_3_fre",
          "civs": [
            "je"
          ]
        },
        {
          "id": "royal-knight-4",
          "pbgid": 2104173,
          "attribName": "unit_royal_knight_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Gain bonus damage for 5 seconds after charging. Effective against most units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nMercenary that can be purchased per 2 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 240,
            "total": 240,
            "popcap": 1,
            "time": 80
          },
          "producedBy": [
            "mercenary-house",
            "golden-horn-tower"
          ],
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "royal-knight-4",
          "pbgid": 132280,
          "attribName": "unit_knight_4_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "royal-knight-4",
          "pbgid": 132280,
          "attribName": "unit_knight_4_fre",
          "civs": [
            "je"
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
        "vizier": 0,
        "oliveoil": 0,
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
      "id": "siege-tower",
      "name": "Siege Tower",
      "type": "unit",
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
        "Siege"
      ],
      "classes": [
        "siege"
      ],
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/siege-tower-3.png",
      "description": "Tall infantry transport with no combat capability. Allows garrisoned infantry to be unloaded directly onto Stone Walls.\n+ High ranged armor\n- Cannot attack\n- Slow movement speed",
      "variations": [
        {
          "id": "siege-tower-2",
          "pbgid": 8185573,
          "attribName": "unit_siege_tower_3_byz",
          "civs": [
            "by"
          ],
          "producedBy": [
            "limitanei",
            "varangian-guard",
            "archer",
            "crossbowman",
            "handcannoneer",
            "musofadi-warrior",
            "landsknecht",
            "grenadier",
            "streltsy",
            "javelin-thrower",
            "longbowman",
            "zhuge-nu",
            "arbaletrier",
            "ghulam"
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
          "pbgid": 5450004,
          "attribName": "unit_siege_tower_3_jpn",
          "civs": [
            "ja"
          ],
          "producedBy": [
            "spearman",
            "samurai",
            "onna-bugeisha",
            "katana-bannerman",
            "shinobi",
            "yumi-ashigaru",
            "handcannon-ashigaru",
            "yumi-bannerman",
            "ozutsu"
          ]
        },
        {
          "id": "siege-tower-2",
          "pbgid": 132290,
          "attribName": "unit_siege_tower_3_fre",
          "civs": [
            "je"
          ],
          "producedBy": [
            "spearman",
            "man-at-arms",
            "archer",
            "arbaletrier",
            "handcannoneer",
            "jeannes-champion",
            "jeanne-darc-hunter",
            "jeanne-darc-woman-at-arms"
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
          "pbgid": 2367445,
          "attribName": "unit_siege_tower_3_hre_ha_01",
          "civs": [
            "od"
          ],
          "producedBy": [
            "gilded-spearman",
            "gilded-man-at-arms",
            "gilded-landsknecht",
            "gilded-archer",
            "gilded-crossbowman",
            "gilded-handcannoneer"
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
        },
        {
          "id": "siege-tower-2",
          "pbgid": 128524,
          "attribName": "unit_siege_tower_3",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "imperial-official",
            "crossbowman",
            "grenadier"
          ]
        }
      ],
      "baseId": "siege-tower",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 125,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 125,
        "popcap": 1,
        "time": 30
      },
      "producedBy": [
        "spearman",
        "man-at-arms",
        "archer",
        "crossbowman",
        "handcannoneer"
      ],
      "hitpoints": 480,
      "weapons": [],
      "armor": [
        {
          "type": "ranged",
          "value": 50
        }
      ],
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 0.8125
      },
      "garrison": {
        "capacity": 10,
        "classes": [
          "infantry",
          "villager",
          "infantry ranged",
          "monk"
        ]
      },
      "shared": {}
    },
    {
      "id": "sipahi",
      "name": "Sipahi",
      "type": "unit",
      "civs": [
        "by",
        "ot"
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
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/sipahi-2.png",
      "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Can gain attack speed at the cost of melee defense.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen\n\nMercenary that can be purchased per 3 units for a total of 480 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
      "variations": [
        {
          "id": "sipahi-2",
          "pbgid": 2136769,
          "attribName": "unit_sipahi_2_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "sipahi-2",
          "pbgid": 2046436,
          "attribName": "unit_horseman_2_ott",
          "civs": [
            "ot"
          ],
          "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Can gain attack speed at the cost of melee defense.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 40,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "military-school",
            "stable"
          ]
        },
        {
          "id": "sipahi-3",
          "pbgid": 2136770,
          "attribName": "unit_sipahi_3_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "sipahi-3",
          "pbgid": 2046437,
          "attribName": "unit_horseman_3_ott",
          "civs": [
            "ot"
          ],
          "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Can gain attack speed at the cost of melee defense.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 40,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "military-school",
            "stable"
          ]
        },
        {
          "id": "sipahi-4",
          "pbgid": 2136771,
          "attribName": "unit_sipahi_4_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "sipahi-4",
          "pbgid": 2046438,
          "attribName": "unit_horseman_4_ott",
          "civs": [
            "ot"
          ],
          "description": "Fast cavalry effective at raiding, flanking, and countering ranged units. Can gain attack speed at the cost of melee defense.\n+ High movement speed\n+ Strong against ranged units\n- Weak against melee units\n- Countered by Spearmen",
          "unique": true,
          "costs": {
            "food": 120,
            "wood": 40,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "military-school",
            "stable"
          ]
        }
      ],
      "baseId": "sipahi",
      "age": 2,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 160,
        "total": 160,
        "popcap": 1,
        "time": 80
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
      "hitpoints": 155,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.75
      },
      "unlockedBy": [
        "buildings/trade-post"
      ],
      "shared": {
        "sipahi-2": {
          "name": "Sipahi",
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 12,
              "speed": 1.75,
              "range": {
                "min": 0,
                "max": 0.75
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
                  "value": 12,
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
          "hitpoints": 185,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 15,
              "speed": 1.75,
              "range": {
                "min": 0,
                "max": 0.75
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
                  "value": 15,
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
          "hitpoints": 220,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 18,
              "speed": 1.75,
              "range": {
                "min": 0,
                "max": 0.75
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
                  "value": 18,
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
      "id": "streltsy",
      "name": "Streltsy",
      "type": "unit",
      "civs": [
        "by",
        "ru"
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
      "icon": "https://data.aoe4world.com/images/units/streltsy-4.png",
      "description": "Most powerful ranged infantry with reasonable melee capabilities. Increased attack speed while stationary.\n+ High damage\n+ Lower cost than Handcannoneer\n- Slow movement speed\n\nMercenary that can be purchased per 3 units for a total of 720 Olive Oil.\n\nRequires the Western Mercenary Contract.",
      "variations": [
        {
          "id": "streltsy-4",
          "pbgid": 2104181,
          "attribName": "unit_streltsy_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "streltsy-4",
          "pbgid": 133458,
          "attribName": "unit_handcannon_4_rus",
          "civs": [
            "ru"
          ],
          "description": "Most powerful ranged infantry with reasonable melee capabilities. Increased attack speed while stationary.\n+ High damage\n+ Lower cost than Handcannoneer\n- Slow movement speed",
          "unique": true,
          "costs": {
            "food": 90,
            "wood": 0,
            "stone": 0,
            "gold": 90,
            "vizier": 0,
            "oliveoil": 0,
            "total": 180,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "archery-range"
          ]
        }
      ],
      "baseId": "streltsy",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 240,
        "total": 240,
        "popcap": 1,
        "time": 90
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
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
      },
      "unlockedBy": [
        "technologies/western-mercenary-contract",
        "technologies/veteran-contract"
      ],
      "shared": {}
    },
    {
      "id": "tower-elephant",
      "name": "Tower Elephant",
      "type": "unit",
      "civs": [
        "by",
        "de"
      ],
      "unique": false,
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
      "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with powerful Archers\n+ Capable of attacking Stone Walls\n- Slow movement speed\n\nMercenary that can be purchased for 1000 Olive Oil.\n\nRequires the Eastern Mercenary Contract.",
      "variations": [
        {
          "id": "tower-elephant-4",
          "pbgid": 2104184,
          "attribName": "unit_war_elephant_tower_4_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "tower-elephant-4",
          "pbgid": 136091,
          "attribName": "unit_war_elephant_tower_4_sul",
          "civs": [
            "de"
          ],
          "description": "Powerful ranged cavalry that can fire while moving.\n+ High health\n+ Mounted with powerful Archers\n+ Capable of attacking Stone Walls\n- Slow movement speed",
          "unique": true,
          "costs": {
            "food": 400,
            "wood": 0,
            "stone": 0,
            "gold": 600,
            "vizier": 0,
            "oliveoil": 0,
            "total": 1000,
            "popcap": 3,
            "time": 60
          },
          "producedBy": [
            "archery-range"
          ]
        }
      ],
      "baseId": "tower-elephant",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 1000,
        "total": 1000,
        "popcap": 3,
        "time": 130
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
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
          "modifiers": [
            {
              "property": "meleeAttack",
              "target": {
                "class": [
                  [
                    "building"
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
      },
      "unlockedBy": [
        "technologies/eastern-mercenary-contract",
        "technologies/elite-contract"
      ],
      "shared": {}
    },
    {
      "id": "varangian-guard",
      "name": "Varangian Guard",
      "type": "unit",
      "civs": [
        "by"
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
      "icon": "https://data.aoe4world.com/images/units/varangian-guard-3.png",
      "description": "Tough infantry with good damage. Can use Berserking to increase damage for reduced armor.\n+ Heavy armor\n+ Increases armor of Transports\n+ Increased armor near allied Wonders\n- Slow move speed\n- Countered by Crossbowmen",
      "variations": [
        {
          "id": "varangian-guard-3",
          "pbgid": 7621527,
          "attribName": "unit_manatarms_3_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "varangian-guard-4",
          "pbgid": 8390959,
          "attribName": "unit_manatarms_4_byz",
          "civs": [
            "by"
          ]
        }
      ],
      "baseId": "varangian-guard",
      "age": 3,
      "costs": {
        "food": 90,
        "wood": 0,
        "stone": 0,
        "gold": 40,
        "vizier": 0,
        "oliveoil": 0,
        "total": 130,
        "popcap": 1,
        "time": 25
      },
      "producedBy": [
        "barracks",
        "palatine-school"
      ],
      "hitpoints": 140,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "shared": {
        "varangian-guard-3": {
          "name": "Varangian Guard",
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 13,
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
              "attribName": "weapon_manatarms_3_byz",
              "pbgid": 2136350
            },
            {
              "name": "Ax",
              "type": "melee",
              "damage": 13,
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
              "attribName": "weapon_manatarms_3_2handaxe_byz",
              "pbgid": 2105268
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
              "value": 4
            }
          ],
          "id": "varangian-guard-3"
        },
        "varangian-guard-4": {
          "name": "Elite Varangian Guard",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/varangian-guard-4.png",
          "hitpoints": 170,
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 16,
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
              "attribName": "weapon_manatarms_4_byz",
              "pbgid": 2136352
            },
            {
              "name": "Ax",
              "type": "melee",
              "damage": 16,
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
              "attribName": "weapon_manatarms_4_2handaxe_byz",
              "pbgid": 2105270
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
              "value": 6
            },
            {
              "type": "ranged",
              "value": 5
            }
          ],
          "id": "varangian-guard-4"
        }
      }
    },
    {
      "id": "war-elephant",
      "name": "War Elephant",
      "type": "unit",
      "civs": [
        "by",
        "de"
      ],
      "unique": false,
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
      "description": "Heavy cavalry effective against cavalry, siege engines, walls, and buildings.\n+ High health and armor\n+ Mounted with an advanced Spearman\n+ Capable of attacking Stone Walls\n- Slow movement speed\n\nMercenary that can be purchased for 750 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
      "variations": [
        {
          "id": "war-elephant-3",
          "pbgid": 2104183,
          "attribName": "unit_war_elephant_3_merc_byz",
          "civs": [
            "by"
          ]
        },
        {
          "id": "war-elephant-3",
          "pbgid": 136090,
          "attribName": "unit_war_elephant_3_sul",
          "civs": [
            "de"
          ],
          "description": "Heavy cavalry effective against cavalry, siege engines, walls, and buildings.\n+ High health and armor\n+ Mounted with an advanced Spearman\n+ Capable of attacking Stone Walls\n- Slow movement speed",
          "unique": true,
          "costs": {
            "food": 400,
            "wood": 0,
            "stone": 0,
            "gold": 350,
            "vizier": 0,
            "oliveoil": 0,
            "total": 750,
            "popcap": 3,
            "time": 60
          },
          "producedBy": [
            "stable"
          ]
        }
      ],
      "baseId": "war-elephant",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 750,
        "total": 750,
        "popcap": 3,
        "time": 100
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
      ],
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
          "modifiers": [
            {
              "property": "meleeAttack",
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
      },
      "unlockedBy": [
        "buildings/trade-post",
        "technologies/elite-contract"
      ],
      "shared": {}
    },
    {
      "id": "zhuge-nu",
      "name": "Zhuge Nu",
      "type": "unit",
      "civs": [
        "by",
        "ch",
        "zx"
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
          "pbgid": 2104165,
          "attribName": "unit_repeater_crossbowman_2_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Fires bolts with a ferocious damage potential against enemy units.\n+ High rate of fire\n- Ineffective vs armored targets\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 400 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 80,
            "total": 80,
            "popcap": 1,
            "time": 67
          },
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "zhuge-nu-2",
          "pbgid": 166629,
          "attribName": "unit_repeater_crossbowman_2_chi",
          "civs": [
            "ch"
          ],
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "zhuge-nu-2",
          "pbgid": 2555054,
          "attribName": "unit_repeater_crossbowman_2_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "archery-range"
          ]
        },
        {
          "id": "zhuge-nu-3",
          "pbgid": 2104166,
          "attribName": "unit_repeater_crossbowman_3_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Fires bolts with a ferocious damage potential against enemy units.\n+ High rate of fire\n- Ineffective vs armored targets\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 400 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 80,
            "total": 80,
            "popcap": 1,
            "time": 67
          },
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "zhuge-nu-3",
          "pbgid": 166630,
          "attribName": "unit_repeater_crossbowman_3_chi",
          "civs": [
            "ch"
          ],
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "zhuge-nu-3",
          "pbgid": 7079241,
          "attribName": "unit_repeater_crossbowman_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "archery-range"
          ]
        },
        {
          "id": "zhuge-nu-4",
          "pbgid": 2104167,
          "attribName": "unit_repeater_crossbowman_4_merc_byz",
          "civs": [
            "by"
          ],
          "description": "Fires bolts with a ferocious damage potential against enemy units.\n+ High rate of fire\n- Ineffective vs armored targets\n- Countered by Horsemen\n\nMercenary that can be purchased per 5 units for a total of 400 Olive Oil.\n\nThis Mercenary can only be purchased on Mercenary Houses built near a neutral Trade Post that list this unit. The chance of this unit being available on a Trade Post is 20%.",
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 80,
            "total": 80,
            "popcap": 1,
            "time": 67
          },
          "unlockedBy": [
            "buildings/trade-post"
          ]
        },
        {
          "id": "zhuge-nu-4",
          "pbgid": 166631,
          "attribName": "unit_repeater_crossbowman_4_chi",
          "civs": [
            "ch"
          ],
          "producedBy": [
            "archery-range"
          ]
        },
        {
          "id": "zhuge-nu-4",
          "pbgid": 8111470,
          "attribName": "unit_repeater_crossbowman_4_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "jiangnan-tower",
            "archery-range"
          ]
        }
      ],
      "baseId": "zhuge-nu",
      "age": 2,
      "costs": {
        "food": 30,
        "wood": 30,
        "stone": 0,
        "gold": 20,
        "vizier": 0,
        "oliveoil": 0,
        "total": 80,
        "popcap": 1,
        "time": 15
      },
      "producedBy": [
        "mercenary-house",
        "golden-horn-tower"
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
      "id": "baochuan",
      "name": "Baochuan",
      "type": "unit",
      "civs": [
        "ch",
        "mo",
        "zx"
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
          ],
          "costs": {
            "food": 200,
            "wood": 200,
            "stone": 0,
            "gold": 200,
            "vizier": 0,
            "oliveoil": 0,
            "total": 600,
            "popcap": 5,
            "time": 38
          }
        },
        {
          "id": "baochuan-4",
          "pbgid": 193130,
          "attribName": "unit_naval_combat_warship_4_mon",
          "civs": [
            "mo"
          ]
        },
        {
          "id": "baochuan-4",
          "pbgid": 3681048,
          "attribName": "unit_naval_combat_warship_4_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "baochuan",
      "age": 4,
      "costs": {
        "food": 200,
        "wood": 200,
        "stone": 0,
        "gold": 200,
        "vizier": 0,
        "oliveoil": 0,
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
      "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Takes bonus damage from melee attacks\n- Can only attack buildings\n- Slow movement speed",
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
          "description": "Durable infantry transport effective against buildings and walls.\n+ High ranged armor\n+ High health\n- Takes bonus damage from melee attacks\n- Can only attack buildings\n- Slow movement speed",
          "classes": [
            "siege"
          ],
          "displayClasses": [
            "Siege"
          ],
          "unique": false,
          "costs": {
            "food": 0,
            "wood": 200,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "astronomical-clocktower"
          ],
          "icon": "https://data.aoe4world.com/images/units/clocktower-battering-ram-3.png",
          "hitpoints": 555,
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
            "wood": 350,
            "stone": 0,
            "gold": 500,
            "vizier": 0,
            "oliveoil": 0,
            "total": 850,
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
              "value": 40
            }
          ],
          "sight": {
            "line": 56,
            "height": 10
          },
          "movement": {
            "speed": 0.75
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
            "wood": 400,
            "stone": 0,
            "gold": 150,
            "vizier": 0,
            "oliveoil": 0,
            "total": 550,
            "popcap": 3,
            "time": 30
          },
          "producedBy": [
            "astronomical-clocktower"
          ],
          "icon": "https://data.aoe4world.com/images/units/clocktower-counterweight-trebuchet-4.png",
          "hitpoints": 255,
          "weapons": [
            {
              "name": "Trebuchet",
              "type": "siege",
              "damage": 40,
              "speed": 11.375,
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
                  "value": 375,
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
                "reload": 2.75,
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
              "value": 30
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 600,
            "popcap": 3,
            "time": 40
          },
          "producedBy": [
            "astronomical-clocktower"
          ],
          "icon": "https://data.aoe4world.com/images/units/clocktower-nest-of-bees-4.png",
          "hitpoints": 195,
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
              "value": 30
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
      "description": "Effective at taking out siege engines at long range. Fires after quickly setting up.\n+ Long range\n+ Bonus damage vs. siege engines\n- Trivial damage vs. buildings",
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
          "description": "Effective at taking out siege engines at long range. Fires after quickly setting up.\n+ Long range\n+ Bonus damage vs. siege engines\n- Trivial damage vs. buildings",
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
            "vizier": 0,
            "oliveoil": 0,
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
              "speed": 3.125,
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
                  "value": 60,
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
                  "value": 60,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1.75,
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
              "value": 10
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
        "ja",
        "mo",
        "zx"
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
          ],
          "costs": {
            "food": 0,
            "wood": 80,
            "stone": 0,
            "gold": 80,
            "vizier": 0,
            "oliveoil": 0,
            "total": 160,
            "popcap": 2,
            "time": 13
          }
        },
        {
          "id": "explosive-junk-3",
          "pbgid": 3737428,
          "attribName": "unit_naval_fireship_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "explosive-junk-3",
          "pbgid": 193132,
          "attribName": "unit_naval_fireship_3_mon",
          "civs": [
            "mo"
          ]
        },
        {
          "id": "explosive-junk-3",
          "pbgid": 5140347,
          "attribName": "unit_naval_fireship_3_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "explosive-junk",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 80,
        "stone": 0,
        "gold": 80,
        "vizier": 0,
        "oliveoil": 0,
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
                    "massive"
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
      "description": "Cavalry wielding explosive-tipped lances.\n+ Charge deals area damage\n+ Effective at raiding buildings and siege engines\n+ Good ranged armor\n- Weak in melee combat\n- Countered by Spearmen",
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
        "vizier": 0,
        "oliveoil": 0,
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
              "damage": 24,
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
              "damage": 24,
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
      "id": "imperial-official",
      "name": "Imperial Official",
      "type": "unit",
      "civs": [
        "ch",
        "zx"
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
      "description": "Economic support unit with no combat capability. Automatically gathers Tax (Gold) from buildings.\n+ Can supervise buildings to improve their efficiency\n- Only a certain number of Officials can exist at a time",
      "variations": [
        {
          "id": "imperial-official-1",
          "pbgid": 181406,
          "attribName": "unit_official_1_chi",
          "civs": [
            "ch"
          ]
        },
        {
          "id": "imperial-official-1",
          "pbgid": 2631059,
          "attribName": "unit_official_1_chi_ha_01",
          "civs": [
            "zx"
          ],
          "producedBy": [
            "town-center",
            "capital-town-center"
          ]
        }
      ],
      "baseId": "imperial-official",
      "age": 1,
      "costs": {
        "food": 100,
        "wood": 0,
        "stone": 0,
        "gold": 50,
        "vizier": 0,
        "oliveoil": 0,
        "total": 150,
        "popcap": 1,
        "time": 20
      },
      "producedBy": [
        "imperial-academy",
        "town-center",
        "capital-town-center"
      ],
      "hitpoints": 75,
      "weapons": [],
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
      "id": "junk",
      "name": "Junk",
      "type": "unit",
      "civs": [
        "ch",
        "ja",
        "zx"
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
          "pbgid": 193929,
          "attribName": "unit_naval_war_galley_3_chi",
          "civs": [
            "ch"
          ]
        },
        {
          "id": "junk-2",
          "pbgid": 4159607,
          "attribName": "unit_naval_war_galley_3_jpn",
          "civs": [
            "ja"
          ],
          "costs": {
            "food": 80,
            "wood": 150,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 230,
            "popcap": 3,
            "time": 25
          }
        },
        {
          "id": "junk-2",
          "pbgid": 2693967,
          "attribName": "unit_naval_war_galley_3_chi_ha_01",
          "civs": [
            "zx"
          ],
          "costs": {
            "food": 90,
            "wood": 150,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 240,
            "popcap": 3,
            "time": 25
          }
        }
      ],
      "baseId": "junk",
      "age": 2,
      "costs": {
        "food": 80,
        "wood": 150,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 230,
        "popcap": 3,
        "time": 21
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
      "id": "palace-guard",
      "name": "Palace Guard",
      "type": "unit",
      "civs": [
        "ch",
        "zx"
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
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/palace-guard-2.png",
      "description": "Tough infantry with good damage. Move faster than Men-At-Arms, but with reduced armor.\n+ Armored\n- Countered by Knights, Lancers, and Crossbowmen.",
      "variations": [
        {
          "id": "palace-guard-2",
          "pbgid": 2138270,
          "attribName": "unit_manatarms_2_chi_ha_01",
          "civs": [
            "zx"
          ]
        },
        {
          "id": "palace-guard-3",
          "pbgid": 137570,
          "attribName": "unit_manatarms_3_chi",
          "civs": [
            "ch"
          ]
        },
        {
          "id": "palace-guard-3",
          "pbgid": 4841125,
          "attribName": "unit_manatarms_3_chi_ha_01",
          "civs": [
            "zx"
          ]
        },
        {
          "id": "palace-guard-4",
          "pbgid": 137574,
          "attribName": "unit_manatarms_4_chi",
          "civs": [
            "ch"
          ]
        },
        {
          "id": "palace-guard-4",
          "pbgid": 2320449,
          "attribName": "unit_manatarms_4_chi_ha_01",
          "civs": [
            "zx"
          ]
        }
      ],
      "baseId": "palace-guard",
      "age": 2,
      "costs": {
        "food": 100,
        "wood": 0,
        "stone": 0,
        "gold": 25,
        "vizier": 0,
        "oliveoil": 0,
        "total": 125,
        "popcap": 1,
        "time": 22.5
      },
      "producedBy": [
        "barracks"
      ],
      "hitpoints": 120,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.375
      },
      "shared": {
        "palace-guard-2": {
          "name": "Early Palace Guard",
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 9,
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
              "attribName": "weapon_manatarms_2_chi_ha_01",
              "pbgid": 2138268
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
              "value": 2
            }
          ],
          "id": "palace-guard-2"
        },
        "palace-guard-3": {
          "name": "Palace Guard",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/palace-guard-3.png",
          "hitpoints": 155,
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
        "ja",
        "mo",
        "zx"
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
          ],
          "costs": {
            "food": 110,
            "wood": 200,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 340,
            "popcap": 3,
            "time": 25
          }
        },
        {
          "id": "war-junk-3",
          "pbgid": 2522875,
          "attribName": "unit_naval_combat_ship_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "war-junk-3",
          "pbgid": 193129,
          "attribName": "unit_naval_combat_ship_2_mon",
          "civs": [
            "mo"
          ]
        },
        {
          "id": "war-junk-3",
          "pbgid": 7436149,
          "attribName": "unit_naval_combat_ship_2_chi_ha_01",
          "civs": [
            "zx"
          ],
          "costs": {
            "food": 120,
            "wood": 200,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 350,
            "popcap": 3,
            "time": 30
          }
        }
      ],
      "baseId": "war-junk",
      "age": 3,
      "costs": {
        "food": 110,
        "wood": 200,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 340,
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
              "value": 55,
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
      "id": "ghazi-raider",
      "name": "Ghazi Raider",
      "type": "unit",
      "civs": [
        "de"
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
      "icon": "https://data.aoe4world.com/images/units/ghazi-raider-2.png",
      "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n+ Increased effectiveness against armored units\n- Countered by Spearmen",
      "variations": [
        {
          "id": "ghazi-raider-2",
          "pbgid": 136047,
          "attribName": "unit_horseman_2_sul",
          "civs": [
            "de"
          ]
        },
        {
          "id": "ghazi-raider-3",
          "pbgid": 136048,
          "attribName": "unit_horseman_3_sul",
          "civs": [
            "de"
          ]
        },
        {
          "id": "ghazi-raider-4",
          "pbgid": 136049,
          "attribName": "unit_horseman_4_sul",
          "civs": [
            "de"
          ]
        }
      ],
      "baseId": "ghazi-raider",
      "age": 2,
      "costs": {
        "food": 110,
        "wood": 30,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 140,
        "popcap": 1,
        "time": 25
      },
      "producedBy": [
        "stable"
      ],
      "hitpoints": 140,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.875
      },
      "shared": {
        "ghazi-raider-2": {
          "name": "Ghazi Raider",
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 12,
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
                        "ranged"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 12,
                  "type": "passive"
                },
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
                  "value": 2,
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
                "cooldown": 1.375
              },
              "attribName": "weapon_horseman_2_sul",
              "pbgid": 2132741
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 7,
              "speed": 2,
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
                "cooldown": 1.125
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
          "id": "ghazi-raider-2"
        },
        "ghazi-raider-3": {
          "name": "Veteran Ghazi Raider",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/ghazi-raider-3.png",
          "hitpoints": 170,
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 15,
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
                        "ranged"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 15,
                  "type": "passive"
                },
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
                  "value": 3,
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
                "cooldown": 1.375
              },
              "attribName": "weapon_horseman_3_sul",
              "pbgid": 2132742
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 7,
              "speed": 2,
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
                "cooldown": 1.125
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
          "id": "ghazi-raider-3"
        },
        "ghazi-raider-4": {
          "name": "Elite Ghazi Raider",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/ghazi-raider-4.png",
          "hitpoints": 200,
          "weapons": [
            {
              "name": "Mace",
              "type": "melee",
              "damage": 18,
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
                        "ranged"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 18,
                  "type": "passive"
                },
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
                  "value": 4,
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
                "cooldown": 1.375
              },
              "attribName": "weapon_horseman_4_sul",
              "pbgid": 2132743
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 7,
              "speed": 2,
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
                "cooldown": 1.125
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
          "id": "ghazi-raider-4"
        }
      }
    },
    {
      "id": "man-at-arms",
      "name": "Man-at-Arms",
      "type": "unit",
      "civs": [
        "de",
        "en",
        "fr",
        "hr",
        "je",
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
            "vizier": 0,
            "oliveoil": 0,
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
              "name": "Mace",
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
            "vizier": 0,
            "oliveoil": 0,
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
          "pbgid": 132282,
          "attribName": "unit_manatarms_3_fre",
          "civs": [
            "fr"
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
              "name": "Mace",
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
            "je"
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
              "name": "Mace",
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
              "name": "Mace",
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
            "vizier": 0,
            "oliveoil": 0,
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
          "pbgid": 132283,
          "attribName": "unit_manatarms_4_fre",
          "civs": [
            "fr"
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
              "name": "Mace",
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
            "je"
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
            },
            {
              "name": "Mace",
              "type": "melee",
              "damage": 14,
              "speed": 1.375,
              "range": {
                "min": 0,
                "max": 0.545
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0.5
              },
              "attribName": "weapon_manatarms_4_charge",
              "pbgid": 137014
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
              "name": "Mace",
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
        "vizier": 0,
        "oliveoil": 0,
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
              "name": "Mace",
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
              "value": 2
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
              "name": "Mace",
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
            "vizier": 0,
            "oliveoil": 0,
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
              "name": "Mace",
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
            "vizier": 0,
            "oliveoil": 0,
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
              "name": "Mace",
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
            "vizier": 0,
            "oliveoil": 0,
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
            "vizier": 0,
            "oliveoil": 0,
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
              "modifiers": [
                {
                  "property": "meleeAttack",
                  "target": {
                    "class": [
                      [
                        "building"
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
      "id": "hulk",
      "name": "Hulk",
      "type": "unit",
      "civs": [
        "en",
        "hr",
        "od",
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
            "food": 99,
            "wood": 180,
            "stone": 0,
            "gold": 27,
            "vizier": 0,
            "oliveoil": 0,
            "total": 306,
            "popcap": 3,
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
          "pbgid": 2265911,
          "attribName": "unit_naval_combat_ship_2_hre_ha_01",
          "civs": [
            "od"
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
        "food": 110,
        "wood": 200,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 340,
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
              "value": 55,
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
      "description": "A mighty King, a powerful heavy cavalry unit. Heals nearby out of combat units by 2 health every 1 seconds.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
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
          "description": "A mighty King, a powerful heavy cavalry unit. Heals nearby out of combat units by 2 health every 1 seconds.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
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
            "food": 100,
            "wood": 0,
            "stone": 0,
            "gold": 100,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
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
      "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
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
          "pbgid": 133462,
          "attribName": "unit_knight_3_rus",
          "civs": [
            "ru"
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
              "attribName": "weapon_knight_3_rus",
              "pbgid": 133278
            },
            {
              "name": "Poleax",
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
              "attribName": "weapon_knight_3_axe_rus",
              "pbgid": 2133555
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
              "name": "Poleax",
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
              "attribName": "weapon_knight_4_axe_rus",
              "pbgid": 2133554
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
        "vizier": 0,
        "oliveoil": 0,
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
              "name": "Poleax",
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
              "attribName": "weapon_knight_2_axe_rus",
              "pbgid": 2133556
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
      "id": "ribauldequin",
      "name": "Ribauldequin",
      "type": "unit",
      "civs": [
        "en",
        "fr",
        "ja",
        "je",
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
          ],
          "producedBy": [
            "the-white-tower",
            "siege-workshop",
            "keep",
            "berkshire-palace"
          ]
        },
        {
          "id": "ribauldequin-4",
          "pbgid": 132291,
          "attribName": "unit_ribauldequin_4_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "ribauldequin-4",
          "pbgid": 2143534,
          "attribName": "unit_ribauldequin_4_jpn",
          "civs": [
            "ja"
          ],
          "producedBy": [
            "tanegashima-gunsmith"
          ]
        },
        {
          "id": "ribauldequin-4",
          "pbgid": 132291,
          "attribName": "unit_ribauldequin_4_fre",
          "civs": [
            "je"
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
        "wood": 350,
        "stone": 0,
        "gold": 500,
        "vizier": 0,
        "oliveoil": 0,
        "total": 850,
        "popcap": 3,
        "time": 45
      },
      "producedBy": [
        "siege-workshop"
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
            "aim": 0,
            "windup": 0,
            "attack": 1,
            "winddown": 1,
            "reload": 3.25,
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/wynguard-army-1.png",
      "description": "Produces an army including two Spearmen, two Crossbowmen, and a Trebuchet.",
      "variations": [
        {
          "id": "wynguard-army-4",
          "baseId": "wynguard-army",
          "type": "unit",
          "name": "Wynguard Army",
          "pbgid": 202514,
          "attribName": "unit_wynguard_army_eng",
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/wynguard-footmen-1.png",
      "description": "Produces an army of 6 Wynguard Footmen.",
      "variations": [
        {
          "id": "wynguard-footmen-4",
          "baseId": "wynguard-footmen",
          "type": "unit",
          "name": "Wynguard Footmen",
          "pbgid": 2122352,
          "attribName": "unit_wynguard_footman_eng",
          "age": 4,
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
            "food": 300,
            "wood": 0,
            "stone": 0,
            "gold": 400,
            "vizier": 0,
            "oliveoil": 0,
            "total": 700,
            "popcap": 6,
            "time": 45
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/wynguard-raiders-1.png",
      "description": "Produces an army of 3 Horsemen and 3 Knights.",
      "variations": [
        {
          "id": "wynguard-raiders-4",
          "baseId": "wynguard-raiders",
          "type": "unit",
          "name": "Wynguard Raiders",
          "pbgid": 2075742,
          "attribName": "unit_wynguard_raiders_eng",
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/wynguard-rangers-1.png",
      "description": "Produces an army of 6 Wynguard Rangers.",
      "variations": [
        {
          "id": "wynguard-rangers-4",
          "baseId": "wynguard-rangers",
          "type": "unit",
          "name": "Wynguard Rangers",
          "pbgid": 2075743,
          "attribName": "unit_wynguard_rangers_eng",
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 700,
            "popcap": 6,
            "time": 45
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
      "id": "cannon",
      "name": "Cannon",
      "type": "unit",
      "civs": [
        "fr",
        "je"
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
          "pbgid": 165175,
          "attribName": "unit_cannon_4_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "cannon-4",
          "pbgid": 165175,
          "attribName": "unit_cannon_4_fre",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "cannon",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 300,
        "stone": 0,
        "gold": 600,
        "vizier": 0,
        "oliveoil": 0,
        "total": 900,
        "popcap": 3,
        "time": 45
      },
      "producedBy": [
        "siege-workshop"
      ],
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
          "value": 40
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
      "id": "galleass",
      "name": "Galleass",
      "type": "unit",
      "civs": [
        "fr",
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Gunpowder Ship"
      ],
      "classes": [
        "gunpowder",
        "ship"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/galleass-4.png",
      "description": "Large oared vessel with a powerful forward mounted bombard.\n+ Long Range\n+ Anti-structure specialist",
      "variations": [
        {
          "id": "galleass-3",
          "pbgid": 193931,
          "attribName": "unit_naval_galleass_4_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "galleass-3",
          "pbgid": 193931,
          "attribName": "unit_naval_galleass_4_fre",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "galleass",
      "age": 3,
      "costs": {
        "food": 0,
        "wood": 360,
        "stone": 0,
        "gold": 300,
        "vizier": 0,
        "oliveoil": 0,
        "total": 660,
        "popcap": 5,
        "time": 50
      },
      "producedBy": [
        "dock"
      ],
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
      },
      "shared": {}
    },
    {
      "id": "royal-culverin",
      "name": "Royal Culverin",
      "type": "unit",
      "civs": [
        "fr",
        "je"
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
      "description": "Long-range cannon made for destroying siege engines. Fires after quickly setting up.\n+ Bonus damage vs. siege engines\n- Low damage vs. buildings",
      "variations": [
        {
          "id": "royal-culverin-4",
          "pbgid": 1905981,
          "attribName": "unit_culverin_4_royal_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "royal-culverin-4",
          "pbgid": 8041328,
          "attribName": "unit_culverin_4_royal_fre_ha_01",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "royal-culverin",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 400,
        "stone": 0,
        "gold": 600,
        "vizier": 0,
        "oliveoil": 0,
        "total": 1000,
        "popcap": 3,
        "time": 45
      },
      "producedBy": [
        "college-of-artillery"
      ],
      "hitpoints": 220,
      "weapons": [
        {
          "name": "Cannon",
          "type": "ranged",
          "damage": 85,
          "speed": 3.375,
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
              "value": 60,
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
              "value": 60,
              "type": "passive"
            }
          ],
          "durations": {
            "aim": 0.5,
            "windup": 0,
            "attack": 0.125,
            "winddown": 0.75,
            "reload": 2,
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
          "value": 10
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
      "id": "royal-ribauldequin",
      "name": "Royal Ribauldequin",
      "type": "unit",
      "civs": [
        "fr",
        "je"
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
          "pbgid": 1905982,
          "attribName": "unit_ribauldequin_4_royal_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "royal-ribauldequin-4",
          "pbgid": 6779101,
          "attribName": "unit_ribauldequin_4_royal_fre_ha_01",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "royal-ribauldequin",
      "age": 4,
      "costs": {
        "food": 0,
        "wood": 350,
        "stone": 0,
        "gold": 500,
        "vizier": 0,
        "oliveoil": 0,
        "total": 850,
        "popcap": 3,
        "time": 45
      },
      "producedBy": [
        "college-of-artillery"
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
            "aim": 0,
            "windup": 0,
            "attack": 1,
            "winddown": 1,
            "reload": 3.25,
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
      "id": "war-cog",
      "name": "War Cog",
      "type": "unit",
      "civs": [
        "fr",
        "je"
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
      "icon": "https://data.aoe4world.com/images/units/war-cog-2.png",
      "description": "Ship equipped with broadside ballistae.\n+ Strong against Arrow Ships\n- Lower maneuverability",
      "variations": [
        {
          "id": "war-cog-2",
          "pbgid": 193119,
          "attribName": "unit_naval_combat_ship_2_fre",
          "civs": [
            "fr"
          ]
        },
        {
          "id": "war-cog-2",
          "pbgid": 193119,
          "attribName": "unit_naval_combat_ship_2_fre",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "war-cog",
      "age": 2,
      "costs": {
        "food": 75,
        "wood": 200,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 305,
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
              "value": 55,
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
        },
        {
          "name": "Cannon",
          "type": "siege",
          "damage": 40,
          "speed": 4.125,
          "range": {
            "min": 0,
            "max": 8
          },
          "modifiers": [
            {
              "property": "siegeAttack",
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
              "property": "siegeAttack",
              "target": {
                "class": [
                  [
                    "building"
                  ]
                ]
              },
              "effect": "change",
              "value": 80,
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
          "attribName": "weapon_naval_mounted_gun",
          "pbgid": 2101775
        }
      ],
      "armor": [
        {
          "type": "ranged",
          "value": 4
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
      "id": "prelate",
      "name": "Prelate",
      "type": "unit",
      "civs": [
        "hr",
        "od"
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
          "pbgid": 136918,
          "attribName": "unit_monk_1_hre",
          "civs": [
            "hr"
          ]
        },
        {
          "id": "prelate-1",
          "pbgid": 5982677,
          "attribName": "unit_monk_1_hre_ha_01",
          "civs": [
            "od"
          ],
          "description": "Support unit with no combat capability. Can pick up Relics, convert enemy units, and capture Sacred Sites starting in the Castle Age (III).\n+ Heals friendly units\n- Low health",
          "producedBy": [
            "regnitz-cathedral",
            "monastery",
            "palace-of-swabia"
          ]
        }
      ],
      "baseId": "prelate",
      "age": 1,
      "costs": {
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 100,
        "vizier": 0,
        "oliveoil": 0,
        "total": 100,
        "popcap": 1,
        "time": 20
      },
      "producedBy": [
        "town-center",
        "capital-town-center",
        "regnitz-cathedral",
        "monastery",
        "palace-of-swabia"
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
      "id": "atakebune",
      "name": "Atakebune",
      "type": "unit",
      "civs": [
        "ja"
      ],
      "unique": true,
      "displayClasses": [
        "Warship"
      ],
      "classes": [
        "warship"
      ],
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/atakebune-4.png",
      "description": "Large sailed war vessel armed with rockets.\n+ Anti-structure specialist\n- Vulnerable vs. Incendiary Ships\n- Low movement speed",
      "variations": [
        {
          "id": "atakebune-4",
          "baseId": "atakebune",
          "type": "unit",
          "name": "Atakebune",
          "pbgid": 4708845,
          "attribName": "unit_naval_combat_warship_4_jpn",
          "age": 4,
          "civs": [
            "ja"
          ],
          "description": "Large sailed war vessel armed with rockets.\n+ Anti-structure specialist\n- Vulnerable vs. Incendiary Ships\n- Low movement speed",
          "classes": [
            "warship"
          ],
          "displayClasses": [
            "Warship"
          ],
          "unique": true,
          "costs": {
            "food": 170,
            "wood": 220,
            "stone": 0,
            "gold": 220,
            "vizier": 0,
            "oliveoil": 0,
            "total": 610,
            "popcap": 5,
            "time": 45
          },
          "producedBy": [
            "dock"
          ],
          "icon": "https://data.aoe4world.com/images/units/atakebune-4.png",
          "hitpoints": 650,
          "weapons": [
            {
              "name": "Rocket",
              "type": "siege",
              "damage": 30,
              "speed": 5.5,
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
                  "value": 50,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0,
                "reload": 4.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_naval_warship_rocket_ai_jpn",
              "pbgid": 2127414
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
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "buddhist-monk",
      "name": "Buddhist Monk",
      "type": "unit",
      "civs": [
        "ja"
      ],
      "unique": true,
      "displayClasses": [
        "Religious"
      ],
      "classes": [
        "religious"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/buddhist-monk-3.png",
      "description": "Support unit with the ability to decrease enemy attack damage. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Reduced cost\n+ Conversion enhances friendly unit damage\n+ Automatically reduces enemy attack damage\n+ Heals units",
      "variations": [
        {
          "id": "buddhist-monk-3",
          "baseId": "buddhist-monk",
          "type": "unit",
          "name": "Buddhist Monk",
          "pbgid": 6891673,
          "attribName": "unit_monk_buddhist_3_jpn",
          "age": 3,
          "civs": [
            "ja"
          ],
          "description": "Support unit with the ability to decrease enemy attack damage. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Reduced cost\n+ Conversion enhances friendly unit damage\n+ Automatically reduces enemy attack damage\n+ Heals units",
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 100,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "temple-of-equality",
            "buddhist-temple"
          ],
          "icon": "https://data.aoe4world.com/images/units/buddhist-monk-3.png",
          "hitpoints": 90,
          "weapons": [],
          "armor": [],
          "sight": {
            "line": 30,
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
      "id": "handcannon-ashigaru",
      "name": "Handcannon Ashigaru",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/handcannon-ashigaru-4.png",
      "description": "Powerful all-purpose ranged infantry.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
      "variations": [
        {
          "id": "handcannon-ashigaru-4",
          "baseId": "handcannon-ashigaru",
          "type": "unit",
          "name": "Handcannon Ashigaru",
          "pbgid": 4137773,
          "attribName": "unit_handcannon_4_jpn",
          "age": 4,
          "civs": [
            "ja"
          ],
          "description": "Powerful all-purpose ranged infantry.\n+ High damage\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
          "classes": [
            "light",
            "ranged",
            "gunpowder",
            "infantry"
          ],
          "displayClasses": [
            "Light Ranged Gunpowder Infantry"
          ],
          "unique": false,
          "costs": {
            "food": 120,
            "wood": 0,
            "stone": 0,
            "gold": 120,
            "vizier": 0,
            "oliveoil": 0,
            "total": 240,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "archery-range",
            "tanegashima-gunsmith"
          ],
          "icon": "https://data.aoe4world.com/images/units/handcannon-ashigaru-4.png",
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
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "katana-bannerman",
      "name": "Katana Bannerman",
      "type": "unit",
      "civs": [
        "ja"
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
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/katana-bannerman-2.png",
      "description": "Samurai with an aura that increases damage of melee infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Heavy armor\n+ Increased move speed\n- Countered by Knights, Lancers, and Crossbowmen",
      "variations": [
        {
          "id": "katana-bannerman-2",
          "baseId": "katana-bannerman",
          "type": "unit",
          "name": "Katana Bannerman",
          "pbgid": 2143512,
          "attribName": "unit_banner_samurai_melee_2_jpn",
          "age": 2,
          "civs": [
            "ja"
          ],
          "description": "Samurai with an aura that increases damage of melee infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Heavy armor\n+ Increased move speed\n- Countered by Knights, Lancers, and Crossbowmen",
          "classes": [
            "heavy",
            "melee",
            "infantry"
          ],
          "displayClasses": [
            "Heavy Melee Infantry"
          ],
          "unique": true,
          "costs": {
            "food": 100,
            "wood": 0,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 130,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "barracks"
          ],
          "icon": "https://data.aoe4world.com/images/units/katana-bannerman-2.png",
          "hitpoints": 155,
          "weapons": [
            {
              "name": "Katana",
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
              "attribName": "weapon_banner_samurai_2_jpn",
              "pbgid": 2145975
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
      "id": "mounted-samurai",
      "name": "Mounted Samurai",
      "type": "unit",
      "civs": [
        "ja"
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
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/mounted-samurai-3.png",
      "description": "Expensive cavalry with high damage and a powerful charge attack. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Heavy armor\n+ Deflective Armor recharges out of combat\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
      "variations": [
        {
          "id": "mounted-samurai-3",
          "pbgid": 4489795,
          "attribName": "unit_knight_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "mounted-samurai-4",
          "pbgid": 6119866,
          "attribName": "unit_knight_4_jpn",
          "civs": [
            "ja"
          ]
        }
      ],
      "baseId": "mounted-samurai",
      "age": 3,
      "costs": {
        "food": 140,
        "wood": 0,
        "stone": 0,
        "gold": 110,
        "vizier": 0,
        "oliveoil": 0,
        "total": 250,
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
        "mounted-samurai-3": {
          "name": "Mounted Samurai",
          "weapons": [
            {
              "name": "Katana",
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
              "attribName": "weapon_mounted_samurai_3_jpn",
              "pbgid": 2146154
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
            },
            {
              "name": "Naginata",
              "type": "melee",
              "damage": 36,
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
              "attribName": "weapon_mounted_samurai_3_charge_jpn",
              "pbgid": 2146156
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
          "id": "mounted-samurai-3"
        },
        "mounted-samurai-4": {
          "name": "Elite Mounted Samurai",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/mounted-samurai-4.png",
          "hitpoints": 270,
          "weapons": [
            {
              "name": "Katana",
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
              "attribName": "weapon_mounted_samurai_4_jpn",
              "pbgid": 2146155
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
            },
            {
              "name": "Naginata",
              "type": "melee",
              "damage": 43,
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
              "attribName": "weapon_mounted_samurai_4_charge_jpn",
              "pbgid": 2146157
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
          "id": "mounted-samurai-4"
        }
      }
    },
    {
      "id": "onna-bugeisha",
      "name": "Onna-Bugeisha",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/onna-bugeisha-2.png",
      "description": "Light melee infantry with fast attack speed and long weapon range.\n+ Fast attack speed\n+ Fast move speed\n+ Long weapon range\n- Weak against armored targets\n- Countered by Archers, Knights",
      "variations": [
        {
          "id": "onna-bugeisha-2",
          "pbgid": 2127199,
          "attribName": "unit_onna_bugeisha_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "onna-bugeisha-3",
          "pbgid": 2127200,
          "attribName": "unit_onna_bugeisha_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "onna-bugeisha-4",
          "pbgid": 2127201,
          "attribName": "unit_onna_bugeisha_4_jpn",
          "civs": [
            "ja"
          ]
        }
      ],
      "baseId": "onna-bugeisha",
      "age": 2,
      "costs": {
        "food": 60,
        "wood": 0,
        "stone": 0,
        "gold": 20,
        "vizier": 0,
        "oliveoil": 0,
        "total": 80,
        "popcap": 1,
        "time": 15
      },
      "producedBy": [
        "barracks"
      ],
      "hitpoints": 85,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.5
      },
      "shared": {
        "onna-bugeisha-2": {
          "name": "Onna-Bugeisha",
          "weapons": [
            {
              "name": "Naginata",
              "type": "melee",
              "damage": 6,
              "speed": 0.9,
              "range": {
                "min": 0,
                "max": 1
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.375,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0.15
              },
              "attribName": "weapon_onna_bugeisha_2_jpn",
              "pbgid": 2127410
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
          "id": "onna-bugeisha-2"
        },
        "onna-bugeisha-3": {
          "name": "Veteran Onna-Bugeisha",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/onna-bugeisha-3.png",
          "hitpoints": 100,
          "weapons": [
            {
              "name": "Naginata",
              "type": "melee",
              "damage": 7,
              "speed": 0.9,
              "range": {
                "min": 0,
                "max": 1
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.375,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0.15
              },
              "attribName": "weapon_onna_bugeisha_3_jpn",
              "pbgid": 2127411
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
          "id": "onna-bugeisha-3"
        },
        "onna-bugeisha-4": {
          "name": "Elite Onna-Bugeisha",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/onna-bugeisha-4.png",
          "hitpoints": 125,
          "weapons": [
            {
              "name": "Naginata",
              "type": "melee",
              "damage": 8,
              "speed": 0.9,
              "range": {
                "min": 0,
                "max": 1
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.375,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0.15
              },
              "attribName": "weapon_onna_bugeisha_4_jpn",
              "pbgid": 2127412
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
          "id": "onna-bugeisha-4"
        }
      }
    },
    {
      "id": "onna-musha",
      "name": "Onna-Musha",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/onna-musha-3.png",
      "description": "Highly mobile ranged cavalry effective against heavy units.\n+ Fast move speed\n+ Long weapon range\n+ Bonus damage vs. heavy units\n- Weak vs ranged units",
      "variations": [
        {
          "id": "onna-musha-3",
          "pbgid": 2121972,
          "attribName": "unit_horsearcher_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "onna-musha-4",
          "pbgid": 2121980,
          "attribName": "unit_horsearcher_4_jpn",
          "civs": [
            "ja"
          ]
        }
      ],
      "baseId": "onna-musha",
      "age": 3,
      "costs": {
        "food": 80,
        "wood": 0,
        "stone": 0,
        "gold": 60,
        "vizier": 0,
        "oliveoil": 0,
        "total": 140,
        "popcap": 1,
        "time": 24
      },
      "producedBy": [
        "archery-range"
      ],
      "hitpoints": 80,
      "sight": {
        "line": 34,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "shared": {
        "onna-musha-3": {
          "name": "Onna-Musha",
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 10,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 5.5
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
                "aim": 0.125,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1.375,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_horsearcher_3_jpn",
              "pbgid": 2127204
            },
            {
              "name": "Yumi Incendiary",
              "type": "ranged",
              "damage": 10,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 5.5
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
                "aim": 0.125,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1.375,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_horsearcher_incendiary_3_jpn",
              "pbgid": 2145573
            }
          ],
          "armor": [],
          "id": "onna-musha-3"
        },
        "onna-musha-4": {
          "name": "Elite Onna-Musha",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/onna-musha-4.png",
          "hitpoints": 95,
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 13,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 5.5
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
                  "value": 12,
                  "type": "passive"
                }
              ],
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
              "attribName": "weapon_horsearcher_4_jpn",
              "pbgid": 2127205
            },
            {
              "name": "Yumi Incendiary",
              "type": "ranged",
              "damage": 13,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 5.5
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
                  "value": 12,
                  "type": "passive"
                }
              ],
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
              "attribName": "weapon_horsearcher_incendiary_4_jpn",
              "pbgid": 2145574
            }
          ],
          "armor": [],
          "id": "onna-musha-4"
        }
      }
    },
    {
      "id": "ozutsu",
      "name": "Ozutsu",
      "type": "unit",
      "civs": [
        "ja"
      ],
      "unique": true,
      "displayClasses": [
        "Heavy Ranged Gunpowder Infantry"
      ],
      "classes": [
        "heavy",
        "ranged",
        "gunpowder",
        "infantry"
      ],
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/ozutsu-4.png",
      "description": "Heavy ranged infantry equipped with a huge gunpowder weapon that has good weapon range, siege, and splash damage.\n+ Heavy armor\n+ Anti-building\n- Slow move speed\n- Slow attack speed\n- Countered by Horsemen and Crossbowmen",
      "variations": [
        {
          "id": "ozutsu-4",
          "baseId": "ozutsu",
          "type": "unit",
          "name": "Ozutsu",
          "pbgid": 2124339,
          "attribName": "unit_ozutsu_4_jpn",
          "age": 4,
          "civs": [
            "ja"
          ],
          "description": "Heavy ranged infantry equipped with a huge gunpowder weapon that has good weapon range, siege, and splash damage.\n+ Heavy armor\n+ Anti-building\n- Slow move speed\n- Slow attack speed\n- Countered by Horsemen and Crossbowmen",
          "classes": [
            "heavy",
            "ranged",
            "gunpowder",
            "infantry"
          ],
          "displayClasses": [
            "Heavy Ranged Gunpowder Infantry"
          ],
          "unique": true,
          "costs": {
            "food": 85,
            "wood": 0,
            "stone": 0,
            "gold": 155,
            "vizier": 0,
            "oliveoil": 0,
            "total": 240,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "tanegashima-gunsmith"
          ],
          "icon": "https://data.aoe4world.com/images/units/ozutsu-4.png",
          "hitpoints": 160,
          "weapons": [
            {
              "name": "Ozutsu",
              "type": "ranged",
              "damage": 28,
              "speed": 4.75,
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
                        "building"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 130,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.5,
                "windup": 0.125,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 3.5,
                "setup": 0,
                "teardown": 0.5,
                "cooldown": 0
              },
              "attribName": "weapon_ozutsu_4_jpn",
              "pbgid": 2127413
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 4
            }
          ],
          "sight": {
            "line": 32,
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
      "id": "samurai",
      "name": "Samurai",
      "type": "unit",
      "civs": [
        "ja"
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
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/samurai-1.png",
      "description": "Heavy infantry with good damage and defense. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Heavy armor\n+ Deflective Armor recharges out of combat\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen",
      "variations": [
        {
          "id": "samurai-1",
          "pbgid": 2121968,
          "attribName": "unit_samurai_1_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "samurai-2",
          "pbgid": 2121967,
          "attribName": "unit_samurai_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "samurai-3",
          "pbgid": 2124176,
          "attribName": "unit_samurai_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "samurai-4",
          "pbgid": 2124177,
          "attribName": "unit_samurai_4_jpn",
          "civs": [
            "ja"
          ]
        }
      ],
      "baseId": "samurai",
      "age": 1,
      "costs": {
        "food": 100,
        "wood": 0,
        "stone": 0,
        "gold": 30,
        "vizier": 0,
        "oliveoil": 0,
        "total": 130,
        "popcap": 1,
        "time": 22.5
      },
      "producedBy": [
        "barracks"
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
        "samurai-1": {
          "name": "Samurai",
          "weapons": [
            {
              "name": "Naginata",
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
              "attribName": "weapon_manatarms_1_jpn",
              "pbgid": 2127560
            },
            {
              "name": "Odachi",
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
                "winddown": 0.75,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_odachi_1_jpn",
              "pbgid": 2127561
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
              "value": 2
            },
            {
              "type": "ranged",
              "value": 3
            }
          ],
          "id": "samurai-1"
        },
        "samurai-2": {
          "name": "Hardened Samurai",
          "age": 2,
          "icon": "https://data.aoe4world.com/images/units/samurai-2.png",
          "hitpoints": 120,
          "weapons": [
            {
              "name": "Naginata",
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
              "attribName": "weapon_manatarms_2_jpn",
              "pbgid": 2127559
            },
            {
              "name": "Odachi",
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
                "winddown": 0.75,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_odachi_2_jpn",
              "pbgid": 2127562
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
          "id": "samurai-2"
        },
        "samurai-3": {
          "name": "Veteran Samurai",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/samurai-3.png",
          "hitpoints": 155,
          "weapons": [
            {
              "name": "Naginata",
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
              "attribName": "weapon_manatarms_3_jpn",
              "pbgid": 2127558
            },
            {
              "name": "Odachi",
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
                "winddown": 0.75,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_odachi_3_jpn",
              "pbgid": 2127563
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
          "id": "samurai-3"
        },
        "samurai-4": {
          "name": "Elite Samurai",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/samurai-4.png",
          "hitpoints": 180,
          "weapons": [
            {
              "name": "Naginata",
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
              "attribName": "weapon_manatarms_4_jpn",
              "pbgid": 2127557
            },
            {
              "name": "Odachi",
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
                "winddown": 0.75,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_odachi_4_jpn",
              "pbgid": 2127564
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
          "id": "samurai-4"
        }
      }
    },
    {
      "id": "shinobi",
      "name": "Shinobi",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
      "description": "Melee infantry that specializes in scouting, sabotage, and assassination.\n+ Disguise as enemy Villagers\n+ Bonus damage vs. melee\n+ Health regeneration\n- Capital Town Centers, Outposts, and Scouts can spot disguises\n\nHeals passively.",
      "variations": [
        {
          "id": "shinobi-2",
          "baseId": "shinobi",
          "type": "unit",
          "name": "Shinobi",
          "pbgid": 2151449,
          "attribName": "unit_shinobi_2_free_jpn",
          "age": 2,
          "civs": [
            "ja"
          ],
          "description": "Melee infantry that specializes in scouting, sabotage, and assassination.\n+ Disguise as enemy Villagers\n+ Bonus damage vs. melee\n+ Health regeneration\n- Capital Town Centers, Outposts, and Scouts can spot disguises\n\nHeals passively.",
          "classes": [
            "light",
            "melee",
            "infantry"
          ],
          "displayClasses": [
            "Light Melee Infantry"
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
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "koka-township"
          ],
          "icon": "https://data.aoe4world.com/images/units/shinobi-2.png",
          "hitpoints": 80,
          "weapons": [
            {
              "name": "Wakizashi",
              "type": "melee",
              "damage": 20,
              "speed": 1.25,
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
                        "melee"
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
                "windup": 1,
                "attack": 0.125,
                "winddown": 0.125,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_shinobi_2_jpn",
              "pbgid": 2127418
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
          "sight": {
            "line": 36,
            "height": 250
          },
          "movement": {
            "speed": 1.375
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "shinto-priest",
      "name": "Shinto Priest",
      "type": "unit",
      "civs": [
        "ja"
      ],
      "unique": true,
      "displayClasses": [
        "Religious"
      ],
      "classes": [
        "religious"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/shinto-priest-3.png",
      "description": "Support unit with unique privileges to hold and deposit Yorishiro into buildings. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Yorishiro provide unique bonuses\n+ Heals friendly units\n- Slow move speed",
      "variations": [
        {
          "id": "shinto-priest-3",
          "baseId": "shinto-priest",
          "type": "unit",
          "name": "Shinto Priest",
          "pbgid": 2124341,
          "attribName": "unit_monk_shinto_3_jpn",
          "age": 3,
          "civs": [
            "ja"
          ],
          "description": "Support unit with unique privileges to hold and deposit Yorishiro into buildings. Can pick up Relics, convert enemy units, and capture Sacred Sites.\n+ Yorishiro provide unique bonuses\n+ Heals friendly units\n- Slow move speed",
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
            "gold": 150,
            "vizier": 0,
            "oliveoil": 0,
            "total": 150,
            "popcap": 1,
            "time": 30
          },
          "producedBy": [
            "shinto-shrine"
          ],
          "icon": "https://data.aoe4world.com/images/units/shinto-priest-3.png",
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
      "id": "uma-bannerman",
      "name": "Uma Bannerman",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/uma-bannerman-2.png",
      "description": "Mounted Samurai with an aura that increases damage of cavalry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n+ Heavy armor\n- Countered by Spearmen and Crossbowmen",
      "variations": [
        {
          "id": "uma-bannerman-2",
          "baseId": "uma-bannerman",
          "type": "unit",
          "name": "Uma Bannerman",
          "pbgid": 2127064,
          "attribName": "unit_banner_samurai_cavalry_2_jpn",
          "age": 2,
          "civs": [
            "ja"
          ],
          "description": "Mounted Samurai with an aura that increases damage of cavalry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n+ Heavy armor\n- Countered by Spearmen and Crossbowmen",
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
            "food": 140,
            "wood": 0,
            "stone": 0,
            "gold": 110,
            "vizier": 0,
            "oliveoil": 0,
            "total": 250,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "stable"
          ],
          "icon": "https://data.aoe4world.com/images/units/uma-bannerman-2.png",
          "hitpoints": 230,
          "weapons": [
            {
              "name": "Katana",
              "type": "melee",
              "damage": 16,
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
              "attribName": "weapon_banner_cavalry_2_jpn",
              "pbgid": 2145977
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
            },
            {
              "name": "Naginata",
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
              "attribName": "weapon_banner_cavalry_2_charge_jpn",
              "pbgid": 2145978
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
      "id": "yumi-ashigaru",
      "name": "Yumi Ashigaru",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/yumi-ashigaru-2.png",
      "description": "Quick and cheap ranged infantry with good damage vs. unarmored targets.\n+ Increased move speed\n+ Cheaper than Archers\n- Reduced health\n- Weak against armored targets\n- Countered by Horsemen",
      "variations": [
        {
          "id": "yumi-ashigaru-2",
          "pbgid": 3427645,
          "attribName": "unit_archer_2_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "yumi-ashigaru-3",
          "pbgid": 8329353,
          "attribName": "unit_archer_3_jpn",
          "civs": [
            "ja"
          ]
        },
        {
          "id": "yumi-ashigaru-4",
          "pbgid": 7635493,
          "attribName": "unit_archer_4_jpn",
          "civs": [
            "ja"
          ]
        }
      ],
      "baseId": "yumi-ashigaru",
      "age": 2,
      "costs": {
        "food": 30,
        "wood": 35,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 65,
        "popcap": 1,
        "time": 13
      },
      "producedBy": [
        "archery-range"
      ],
      "hitpoints": 60,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.375
      },
      "shared": {
        "yumi-ashigaru-2": {
          "name": "Yumi Ashigaru",
          "weapons": [
            {
              "name": "Yumi",
              "type": "ranged",
              "damage": 4,
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
                  "value": 4,
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
              "attribName": "weapon_archer_2_jpn",
              "pbgid": 2127613
            },
            {
              "name": "Yumi Incendiary",
              "type": "ranged",
              "damage": 4,
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
              "attribName": "weapon_archer_incendiary_2_jpn",
              "pbgid": 2145559
            }
          ],
          "armor": [],
          "id": "yumi-ashigaru-2"
        },
        "yumi-ashigaru-3": {
          "name": "Veteran Yumi Ashigaru",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/yumi-ashigaru-3.png",
          "hitpoints": 70,
          "weapons": [
            {
              "name": "Yumi",
              "type": "ranged",
              "damage": 6,
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
              "attribName": "weapon_archer_3_jpn",
              "pbgid": 2127614
            },
            {
              "name": "Yumi Incendiary",
              "type": "ranged",
              "damage": 6,
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
              "attribName": "weapon_archer_incendiary_3_jpn",
              "pbgid": 2145560
            }
          ],
          "armor": [],
          "id": "yumi-ashigaru-3"
        },
        "yumi-ashigaru-4": {
          "name": "Elite Yumi Ashigaru",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/yumi-ashigaru-4.png",
          "hitpoints": 85,
          "weapons": [
            {
              "name": "Yumi",
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
              "attribName": "weapon_archer_4_jpn",
              "pbgid": 2127615
            },
            {
              "name": "Yumi Incendiary",
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
              "attribName": "weapon_archer_incendiary_4_jpn",
              "pbgid": 2145561
            }
          ],
          "armor": [],
          "id": "yumi-ashigaru-4"
        }
      }
    },
    {
      "id": "yumi-bannerman",
      "name": "Yumi Bannerman",
      "type": "unit",
      "civs": [
        "ja"
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
      "icon": "https://data.aoe4world.com/images/units/yumi-bannerman-2.png",
      "description": "Ranged Samurai with an aura that increases damage of ranged infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n- Weak against armored targets\n- Countered by Horsemen",
      "variations": [
        {
          "id": "yumi-bannerman-2",
          "baseId": "yumi-bannerman",
          "type": "unit",
          "name": "Yumi Bannerman",
          "pbgid": 2127061,
          "attribName": "unit_banner_samurai_range_2_jpn",
          "age": 2,
          "civs": [
            "ja"
          ],
          "description": "Ranged Samurai with an aura that increases damage of ranged infantry. Comes with the Deflective Armor ability that periodically blocks attacks.\n+ Banner drops on death\n+ Fast move speed\n- Weak against armored targets\n- Countered by Horsemen",
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
            "food": 100,
            "wood": 0,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 130,
            "popcap": 1,
            "time": 15
          },
          "producedBy": [
            "archery-range"
          ],
          "icon": "https://data.aoe4world.com/images/units/yumi-bannerman-2.png",
          "hitpoints": 140,
          "weapons": [
            {
              "name": "Yumi",
              "type": "ranged",
              "damage": 5,
              "speed": 1.625,
              "range": {
                "min": 0,
                "max": 5.25
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
              "attribName": "weapon_banner_ranged_2_jpn",
              "pbgid": 2145981
            },
            {
              "name": "Yumi Incendiary",
              "type": "ranged",
              "damage": 5,
              "speed": 1.625,
              "range": {
                "min": 0,
                "max": 5.25
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
              "attribName": "weapon_banner_ranged_incendiary_2_jpn",
              "pbgid": 2145984
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            },
            {
              "type": "ranged",
              "value": 1
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
      "id": "jeanne-darc-blast-cannon",
      "name": "Jeanne d'Arc - Blast Cannon",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Heavy Siege Cavalry",
        "Hero"
      ],
      "classes": [
        "heavy",
        "siege",
        "cavalry",
        "hero"
      ],
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-blast-cannon-4.png",
      "description": "Elite siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center. \n+ Heavy armor\n+ Good damage vs buildings\n- Countered only by superior numbers",
      "variations": [
        {
          "id": "jeanne-darc-blast-cannon-4",
          "baseId": "jeanne-darc-blast-cannon",
          "type": "unit",
          "name": "Jeanne d'Arc - Blast Cannon",
          "pbgid": 2136361,
          "attribName": "unit_jeanne_d_arc_4_melee_monarch_fre_ha_01",
          "age": 4,
          "civs": [
            "je"
          ],
          "description": "Elite siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center. \n+ Heavy armor\n+ Good damage vs buildings\n- Countered only by superior numbers",
          "classes": [
            "heavy",
            "siege",
            "cavalry",
            "hero"
          ],
          "displayClasses": [
            "Heavy Siege Cavalry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 1000,
            "vizier": 0,
            "oliveoil": 0,
            "total": 1000,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-blast-cannon-4.png",
          "hitpoints": 480,
          "weapons": [
            {
              "name": "Handcannon",
              "type": "siege",
              "damage": 40,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 1.25
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
                  "value": 200,
                  "type": "passive"
                }
              ],
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
              "attribName": "weapon_handcannon_4_melee_jeanne_fre_ha_01",
              "pbgid": 2137101
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
      "id": "jeanne-darc-hunter",
      "name": "Jeanne d'Arc - Hunter",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Light Ranged Infantry",
        "Hero"
      ],
      "classes": [
        "light",
        "ranged",
        "infantry",
        "hero"
      ],
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-hunter-2.png",
      "description": "Strong ranged infantry with good damage vs unarmored targets, and bonus damage vs spearmen. If Jeanne is defeated, she can be brought back at a Town Center.\n+ High rate of fire\n- Countered by Horsemen",
      "variations": [
        {
          "id": "jeanne-darc-hunter-2",
          "baseId": "jeanne-darc-hunter",
          "type": "unit",
          "name": "Jeanne d'Arc - Hunter",
          "pbgid": 2136265,
          "attribName": "unit_jeanne_d_arc_2_archer_fre_ha_01",
          "age": 2,
          "civs": [
            "je"
          ],
          "description": "Strong ranged infantry with good damage vs unarmored targets, and bonus damage vs spearmen. If Jeanne is defeated, she can be brought back at a Town Center.\n+ High rate of fire\n- Countered by Horsemen",
          "classes": [
            "light",
            "ranged",
            "infantry",
            "hero"
          ],
          "displayClasses": [
            "Light Ranged Infantry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 250,
            "vizier": 0,
            "oliveoil": 0,
            "total": 250,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-hunter-2.png",
          "hitpoints": 225,
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
                  "value": 8,
                  "type": "passive"
                },
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 14,
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
              "attribName": "weapon_archer_2_jeanne_fre_ha_01",
              "pbgid": 2136861
            },
            {
              "name": "(translation not found) (undefined)",
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
                },
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "gaia"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 14,
                  "type": "passive"
                },
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
                "reload": 0.75,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_archer_incendiary_2_jeanne_fre_ha_01",
              "pbgid": 2136860
            }
          ],
          "armor": [],
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
      "id": "jeanne-darc-knight",
      "name": "Jeanne d'Arc - Knight",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Heavy Melee Cavalry",
        "Hero"
      ],
      "classes": [
        "heavy",
        "melee",
        "cavalry",
        "hero"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-knight-3.png",
      "description": "Powerful heavy cavalry leader with high damage and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n+ Fast movement\n- Countered by Spearmen",
      "variations": [
        {
          "id": "jeanne-darc-knight-3",
          "baseId": "jeanne-darc-knight",
          "type": "unit",
          "name": "Jeanne d'Arc - Knight",
          "pbgid": 2136358,
          "attribName": "unit_jeanne_d_arc_3_melee_knight_fre_ha_01",
          "age": 3,
          "civs": [
            "je"
          ],
          "description": "Powerful heavy cavalry leader with high damage and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n+ Fast movement\n- Countered by Spearmen",
          "classes": [
            "heavy",
            "melee",
            "cavalry",
            "hero"
          ],
          "displayClasses": [
            "Heavy Melee Cavalry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 500,
            "vizier": 0,
            "oliveoil": 0,
            "total": 500,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-knight-3.png",
          "hitpoints": 360,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 16,
              "speed": 1.5,
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
                        "animal",
                        "huntable"
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
                "cooldown": 0.875
              },
              "attribName": "weapon_knight_3_jeanne_fre_ha_01",
              "pbgid": 2127617
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 12,
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
              "attribName": "weapon_torch_jeanne",
              "pbgid": 2127618
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
              "modifiers": [
                {
                  "property": "meleeAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
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
                "windup": 0,
                "attack": 0.125,
                "winddown": 0,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0.4
              },
              "attribName": "weapon_knight_3_charge_jeanne_fre_ha_01",
              "pbgid": 2127619
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
      "id": "jeanne-darc-markswoman",
      "name": "Jeanne d'Arc - Markswoman",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Siege Cavalry",
        "Hero"
      ],
      "classes": [
        "siege",
        "cavalry",
        "hero"
      ],
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-markswoman-4.png",
      "description": "Elite heavy siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center.\n+ Heavy armor \n+ Long range \n+ Good damage vs buildings\n- Countered only by superior buildings",
      "variations": [
        {
          "id": "jeanne-darc-markswoman-4",
          "baseId": "jeanne-darc-markswoman",
          "type": "unit",
          "name": "Jeanne d'Arc - Markswoman",
          "pbgid": 2136360,
          "attribName": "unit_jeanne_d_arc_4_ranged_monarch_fre_ha_01",
          "age": 4,
          "civs": [
            "je"
          ],
          "description": "Elite heavy siege cavalry leader with high damage. Exceptionally effective vs buildings. If Jeanne is defeated, she will reappear at a Town Center.\n+ Heavy armor \n+ Long range \n+ Good damage vs buildings\n- Countered only by superior buildings",
          "classes": [
            "siege",
            "cavalry",
            "hero"
          ],
          "displayClasses": [
            "Siege Cavalry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 1000,
            "vizier": 0,
            "oliveoil": 0,
            "total": 1000,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-markswoman-4.png",
          "hitpoints": 400,
          "weapons": [
            {
              "name": "Handcannon",
              "type": "ranged",
              "damage": 28,
              "speed": 2.125,
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
                        "building"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 200,
                  "type": "passive"
                },
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "infantry"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 10,
                  "type": "passive"
                }
              ],
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
              "attribName": "weapon_handcannon_4_ranged_jeanne_fre_ha_01",
              "pbgid": 2127616
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
            "speed": 1.625
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "jeanne-darc-mounted-archer",
      "name": "Jeanne d'Arc - Mounted Archer",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Light Ranged Cavalry",
        "Hero"
      ],
      "classes": [
        "light",
        "ranged",
        "cavalry",
        "hero"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-mounted-archer-3.png",
      "description": "A powerful cavalry archer with exceptional range and damage. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Long range\n+ Good damage\n- Countered by Horsemen",
      "variations": [
        {
          "id": "jeanne-darc-mounted-archer-3",
          "baseId": "jeanne-darc-mounted-archer",
          "type": "unit",
          "name": "Jeanne d'Arc - Mounted Archer",
          "pbgid": 2136359,
          "attribName": "unit_jeanne_d_arc_3_ranged_knight_fre_ha_01",
          "age": 3,
          "civs": [
            "je"
          ],
          "description": "A powerful cavalry archer with exceptional range and damage. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Long range\n+ Good damage\n- Countered by Horsemen",
          "classes": [
            "light",
            "ranged",
            "cavalry",
            "hero"
          ],
          "displayClasses": [
            "Light Ranged Cavalry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 500,
            "vizier": 0,
            "oliveoil": 0,
            "total": 500,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-mounted-archer-3.png",
          "hitpoints": 280,
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 15,
              "speed": 1.625,
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
                        "light",
                        "melee",
                        "infantry"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 8,
                  "type": "passive"
                },
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 14,
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
              "attribName": "weapon_archer_4_jeanne_fre_ha_01",
              "pbgid": 2136854
            },
            {
              "name": "(translation not found) (undefined)",
              "type": "ranged",
              "damage": 15,
              "speed": 1.625,
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
                        "light",
                        "melee",
                        "infantry"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 8,
                  "type": "passive"
                },
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "gaia"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 14,
                  "type": "passive"
                },
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
                "reload": 0.75,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_archer_incendiary_4_jeanne_fre_ha_01",
              "pbgid": 2136855
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            },
            {
              "type": "ranged",
              "value": 1
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
      "id": "jeanne-darc-peasant",
      "name": "Jeanne d'Arc - Peasant",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Villager",
        "Hero"
      ],
      "classes": [
        "villager",
        "hero"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-peasant-1.png",
      "description": "Jeanne gathers resources and constructs buildings as a Villager. She constructs buildings more quickly, and generates more XP while constructing buildings compared to other tasks. If Jeanne is defeated, she can be brought back at a Town Center. \n - Weak in combat",
      "variations": [
        {
          "id": "jeanne-darc-peasant-1",
          "baseId": "jeanne-darc-peasant",
          "type": "unit",
          "name": "Jeanne d'Arc - Peasant",
          "pbgid": 2127584,
          "attribName": "unit_jeanne_d_arc_1_fre_ha_01",
          "age": 1,
          "civs": [
            "je"
          ],
          "description": "Jeanne gathers resources and constructs buildings as a Villager. She constructs buildings more quickly, and generates more XP while constructing buildings compared to other tasks. If Jeanne is defeated, she can be brought back at a Town Center. \n - Weak in combat",
          "classes": [
            "villager",
            "hero"
          ],
          "displayClasses": [
            "Villager",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 100,
            "vizier": 0,
            "oliveoil": 0,
            "total": 100,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-peasant-1.png",
          "hitpoints": 150,
          "weapons": [
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
              "attribName": "weapon_torch_weak",
              "pbgid": 123522
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
              "modifiers": [
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
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
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 1,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_scout_hunt_ranged_1_jeanne_fre_ha_01",
              "pbgid": 2127625
            },
            {
              "name": "Crook",
              "type": "melee",
              "damage": 12,
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
              "attribName": "weapon_villager_hunt_herd",
              "pbgid": 173518
            },
            {
              "name": "Spear",
              "type": "melee",
              "damage": 12,
              "speed": 3.075,
              "range": {
                "min": 0,
                "max": 0.5
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
                "cooldown": 1.7
              },
              "attribName": "weapon_villager_hunt_melee",
              "pbgid": 173517
            }
          ],
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
      "id": "jeanne-darc-woman-at-arms",
      "name": "Jeanne d'Arc - Woman-at-Arms",
      "type": "unit",
      "civs": [
        "je"
      ],
      "unique": true,
      "displayClasses": [
        "Heavy Melee Infantry",
        "Hero"
      ],
      "classes": [
        "heavy",
        "melee",
        "infantry",
        "hero"
      ],
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/jeanne-darc-woman-at-arms-2.png",
      "description": "Strong heavy infantry leader with good armor and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n- Countered by Knights, Lancers, and Crossbowmen",
      "variations": [
        {
          "id": "jeanne-darc-woman-at-arms-2",
          "baseId": "jeanne-darc-woman-at-arms",
          "type": "unit",
          "name": "Jeanne d'Arc - Woman-at-Arms",
          "pbgid": 2136262,
          "attribName": "unit_jeanne_d_arc_2_womanatarms_fre_ha_01",
          "age": 2,
          "civs": [
            "je"
          ],
          "description": "Strong heavy infantry leader with good armor and health. If Jeanne is defeated, she can be brought back at a Town Center.\n+ Heavy armor\n- Countered by Knights, Lancers, and Crossbowmen",
          "classes": [
            "heavy",
            "melee",
            "infantry",
            "hero"
          ],
          "displayClasses": [
            "Heavy Melee Infantry",
            "Hero"
          ],
          "unique": true,
          "costs": {
            "food": 0,
            "wood": 0,
            "stone": 0,
            "gold": 250,
            "vizier": 0,
            "oliveoil": 0,
            "total": 250,
            "time": 0,
            "popcap": 1
          },
          "producedBy": [],
          "icon": "https://data.aoe4world.com/images/units/jeanne-darc-woman-at-arms-2.png",
          "hitpoints": 225,
          "weapons": [
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
                        "animal",
                        "huntable"
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
              "attribName": "weapon_womanatarms_3_jeanne_fre_ha_01",
              "pbgid": 2136588
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 12,
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
              "attribName": "weapon_torch_jeanne",
              "pbgid": 2127618
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 3
            },
            {
              "type": "ranged",
              "value": 2
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
      "id": "jeannes-champion",
      "name": "Jeanne's Champion",
      "type": "unit",
      "civs": [
        "je"
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
      "icon": "https://data.aoe4world.com/images/units/jeannes-champion-3.png",
      "description": "Tough infantry that excels at countering Spearmen.\n+ High armor\n+ Bonus damage against Spearmen\n- Slow move speed\n- Countered by Knights, Lancers, and Crossbowmen\n\nUpgrades to Elite when Jeanne reaches level 4.",
      "variations": [
        {
          "id": "jeannes-champion-3",
          "pbgid": 2143628,
          "attribName": "unit_rally_manatarms_3_fre_ha_01",
          "civs": [
            "je"
          ]
        },
        {
          "id": "jeannes-champion-4",
          "pbgid": 2143629,
          "attribName": "unit_rally_manatarms_4_fre_ha_01",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "jeannes-champion",
      "age": 3,
      "costs": {
        "food": 160,
        "wood": 0,
        "stone": 0,
        "gold": 40,
        "vizier": 0,
        "oliveoil": 0,
        "total": 200,
        "popcap": 1,
        "time": 15
      },
      "producedBy": [
        "keep",
        "red-palace"
      ],
      "hitpoints": 175,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "shared": {
        "jeannes-champion-3": {
          "name": "Jeanne's Champion",
          "weapons": [
            {
              "name": "Ax",
              "type": "melee",
              "damage": 13,
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
                        "spearman"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 8,
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
              "attribName": "weapon_jeanne_follower_3",
              "pbgid": 2144061
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
          "id": "jeannes-champion-3"
        },
        "jeannes-champion-4": {
          "name": "Jeanne's Elite Champion",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/jeannes-elite-champion-4.png",
          "hitpoints": 210,
          "weapons": [
            {
              "name": "Ax",
              "type": "melee",
              "damage": 16,
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
                        "spearman"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 9,
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
              "attribName": "weapon_jeanne_follower_4",
              "pbgid": 2144426
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
          "id": "jeannes-champion-4"
        }
      }
    },
    {
      "id": "jeannes-rider",
      "name": "Jeanne's Rider",
      "type": "unit",
      "civs": [
        "je"
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
      "icon": "https://data.aoe4world.com/images/units/jeannes-rider-3.png",
      "description": "Fast cavalry effective at raiding, flanking, and countering Crossbowmen.\n+ High movement speed\n+ Bonus damage against Crossbowmen\n- Weak against melee units\n- Countered by Spearmen\n\nUpgrades to Elite when Jeanne reaches level 4.",
      "variations": [
        {
          "id": "jeannes-rider-3",
          "pbgid": 2143836,
          "attribName": "unit_rally_horseman_3_fre_ha_01",
          "civs": [
            "je"
          ]
        },
        {
          "id": "jeannes-rider-4",
          "pbgid": 2143835,
          "attribName": "unit_rally_horseman_4_fre_ha_01",
          "civs": [
            "je"
          ]
        }
      ],
      "baseId": "jeannes-rider",
      "age": 3,
      "costs": {
        "food": 180,
        "wood": 0,
        "stone": 0,
        "gold": 20,
        "vizier": 0,
        "oliveoil": 0,
        "total": 200,
        "popcap": 1,
        "time": 15
      },
      "producedBy": [
        "keep",
        "red-palace"
      ],
      "hitpoints": 185,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.875
      },
      "shared": {
        "jeannes-rider-3": {
          "name": "Jeanne's Rider",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 14,
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
                        "crossbowman"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 7,
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
              "attribName": "weapon_jeanne_rider_3",
              "pbgid": 2144062
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
              "value": 6
            }
          ],
          "id": "jeannes-rider-3"
        },
        "jeannes-rider-4": {
          "name": "Jeanne's Elite Rider",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/jeannes-elite-rider-4.png",
          "hitpoints": 220,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 17,
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
                        "crossbowman"
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
              "attribName": "weapon_jeanne_rider_4",
              "pbgid": 2144428
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
              "value": 7
            }
          ],
          "id": "jeannes-rider-4"
        }
      }
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
        "vizier": 0,
        "oliveoil": 0,
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
            "food": 80,
            "wood": 150,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 230,
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 240,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "archery-range",
            "farimba-garrison"
          ],
          "icon": "https://data.aoe4world.com/images/units/musofadi-gunner-4.png",
          "hitpoints": 130,
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
        "vizier": 0,
        "oliveoil": 0,
        "total": 180,
        "popcap": 1,
        "time": 26
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
            "food": 110,
            "wood": 200,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 340,
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
                  "value": 55,
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
      "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak in combat",
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
        "vizier": 0,
        "oliveoil": 0,
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
            }
          ],
          "armor": [],
          "movement": {
            "speed": 1.75
          },
          "id": "warrior-scout-2"
        },
        "warrior-scout-3": {
          "name": "Veteran Warrior Scout",
          "age": 3,
          "description": "Fast cavalry effective at raiding, exploring the world, hunting wildlife, and herding Sheep.\n+ Bonus damage vs ranged\n+ Increased health regeneration\n+ Increased move speed\n+ Able to see into Stealth Forests\n- Weak in combat",
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
                  "value": 9,
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
            }
          ],
          "armor": [],
          "id": "warrior-scout-4"
        }
      }
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
      "minAge": 4,
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
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/knight-1.png",
      "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRandomly spawns 3 at the time from the Khaganate Palace.",
      "variations": [
        {
          "id": "khaganate-knight-1",
          "baseId": "khaganate-knight",
          "type": "unit",
          "name": "Khaganate Elite Knight",
          "pbgid": 2117332,
          "attribName": "unit_khaganate_knight_rus_mon",
          "age": 4,
          "civs": [
            "mo"
          ],
          "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRandomly spawns 3 at the time from the Khaganate Palace.",
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
            "vizier": 0,
            "oliveoil": 0,
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
              "name": "Poleax",
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
              "attribName": "weapon_knight_4_axe_rus",
              "pbgid": 2133554
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
      "minAge": 4,
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
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "minAge": 4,
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
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 0,
            "popcap": 3,
            "time": 50
          },
          "producedBy": [
            "khaganate-palace"
          ],
          "icon": "https://data.aoe4world.com/images/units/nest-of-bees-4.png",
          "hitpoints": 130,
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
              "value": 30
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
      "minAge": 4,
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
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "minAge": 4,
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
          "age": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "description": "Ranged cavalry leader able to use Signal Arrows to enhance nearby military units. Reappears at a Town Center if killed.\n+ Vision and herding of a Scout\n+ Automatically improves with each Age\n- Only one Khan per Mongol player",
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
        "food": 0,
        "wood": 0,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 0,
        "time": 22.5,
        "popcap": 0
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
              "modifiers": [
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 1,
                  "type": "passive"
                }
              ],
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
              "modifiers": [
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 1,
                  "type": "passive"
                }
              ],
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
              "modifiers": [
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 1,
                  "type": "passive"
                }
              ],
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
              "modifiers": [
                {
                  "property": "rangedAttack",
                  "target": {
                    "class": [
                      [
                        "animal",
                        "huntable"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 1,
                  "type": "passive"
                }
              ],
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
            "food": 80,
            "wood": 150,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 230,
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
            "vizier": 0,
            "oliveoil": 0,
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
        "wood": 300,
        "stone": 0,
        "gold": 100,
        "vizier": 0,
        "oliveoil": 0,
        "total": 400,
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
      "hitpoints": 150,
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
              "damage": 40,
              "speed": 8.625,
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
                  "value": 200,
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
                "winddown": 5.125,
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
              "value": 30
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
            "wood": 300,
            "stone": 0,
            "gold": 100,
            "vizier": 0,
            "oliveoil": 0,
            "total": 400,
            "popcap": 3,
            "time": 30
          },
          "producedBy": [
            "siege-workshop"
          ],
          "icon": "https://data.aoe4world.com/images/units/traction-trebuchet-4.png",
          "weapons": [
            {
              "name": "Trebuchet",
              "type": "siege",
              "damage": 40,
              "speed": 8.625,
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
                  "value": 200,
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
                "winddown": 5.125,
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
              "value": 30
            }
          ],
          "id": "traction-trebuchet-4"
        }
      }
    },
    {
      "id": "dragon-handcannoneer",
      "name": "Dragon Handcannoneer",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/dragon-handcannoneer-4.png",
      "description": "More powerful all-purpose ranged infantry with increased attack speed.\n+ High damage\n+ Increased attack speed\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
      "variations": [
        {
          "id": "dragon-handcannoneer-4",
          "baseId": "dragon-handcannoneer",
          "type": "unit",
          "name": "Dragon Handcannoneer",
          "pbgid": 6642514,
          "attribName": "unit_handcannon_4_hre_ha_01",
          "age": 4,
          "civs": [
            "od"
          ],
          "description": "More powerful all-purpose ranged infantry with increased attack speed.\n+ High damage\n+ Increased attack speed\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
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
            "food": 240,
            "wood": 0,
            "stone": 0,
            "gold": 240,
            "vizier": 0,
            "oliveoil": 0,
            "total": 480,
            "popcap": 2,
            "time": 35
          },
          "producedBy": [
            "archery-range"
          ],
          "icon": "https://data.aoe4world.com/images/units/dragon-handcannoneer-4.png",
          "hitpoints": 250,
          "weapons": [
            {
              "name": "Handcannon",
              "type": "ranged",
              "damage": 38,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 4.5
              },
              "modifiers": [],
              "durations": {
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.25,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_handcannon_4_hre_ha_1",
              "pbgid": 2140297
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
      "id": "dragon-villager",
      "name": "Dragon Villager",
      "type": "unit",
      "civs": [
        "od"
      ],
      "unique": true,
      "displayClasses": [
        "Worker"
      ],
      "classes": [
        "worker"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/dragon-villager-1.png",
      "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units. Gathers resources +25% quicker and builds +20% faster than regular Villagers.\n- Weak in combat",
      "variations": [
        {
          "id": "dragon-villager-1",
          "baseId": "dragon-villager",
          "type": "unit",
          "name": "Dragon Villager",
          "pbgid": 2513732,
          "attribName": "unit_villager_1_hre_ha_01",
          "age": 1,
          "civs": [
            "od"
          ],
          "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units. Gathers resources +25% quicker and builds +20% faster than regular Villagers.\n- Weak in combat",
          "classes": [
            "worker"
          ],
          "displayClasses": [
            "Worker"
          ],
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 60,
            "popcap": 1,
            "time": 24
          },
          "producedBy": [
            "town-center",
            "capital-town-center",
            "palace-of-swabia"
          ],
          "icon": "https://data.aoe4world.com/images/units/dragon-villager-1.png",
          "hitpoints": 65,
          "weapons": [
            {
              "name": "Knife",
              "type": "melee",
              "damage": 7,
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
              "attribName": "weapon_villager_1_hre_ha_01",
              "pbgid": 2141048
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 12,
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
              "attribName": "weapon_torch_weak_hre_ha_01",
              "pbgid": 2141047
            },
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 3,
              "speed": 3,
              "range": {
                "min": 0,
                "max": 2.875
              },
              "modifiers": [],
              "durations": {
                "aim": 0.125,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 2
              },
              "attribName": "weapon_villager_hunt_ranged",
              "pbgid": 173519
            },
            {
              "name": "Crook",
              "type": "melee",
              "damage": 12,
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
              "attribName": "weapon_villager_hunt_herd",
              "pbgid": 173518
            },
            {
              "name": "Spear",
              "type": "melee",
              "damage": 12,
              "speed": 3.075,
              "range": {
                "min": 0,
                "max": 0.5
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
                "cooldown": 1.7
              },
              "attribName": "weapon_villager_hunt_melee",
              "pbgid": 173517
            }
          ],
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
      "id": "gilded-archer",
      "name": "Gilded Archer",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-archer-2.png",
      "description": "Cheap ranged infantry with good damage vs. unarmored targets.\n+ High rate of fire\n- Weak against armored targets\n- Countered by Horsemen",
      "variations": [
        {
          "id": "gilded-archer-2",
          "pbgid": 3407191,
          "attribName": "unit_archer_2_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-archer-3",
          "pbgid": 7608893,
          "attribName": "unit_archer_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-archer-4",
          "pbgid": 3838492,
          "attribName": "unit_archer_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-archer",
      "age": 2,
      "costs": {
        "food": 60,
        "wood": 100,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 160,
        "popcap": 2,
        "time": 18
      },
      "producedBy": [
        "archery-range"
      ],
      "hitpoints": 125,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.25
      },
      "shared": {
        "gilded-archer-2": {
          "name": "Gilded Archer",
          "description": "Ranged infantry with good damage vs. unarmored targets and increased fire rate and longer weapon range than standard Archers.\n+ Increased weapon range\n+ Faster attack speed\n- Weak against armored targets\n- Countered by Horsemen",
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 6,
              "speed": 1,
              "range": {
                "min": 0,
                "max": 5.5
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
                "reload": 0.125,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_archer_2_hre_ha_01",
              "pbgid": 2127087
            }
          ],
          "armor": [],
          "id": "gilded-archer-2"
        },
        "gilded-archer-3": {
          "name": "Veteran Gilded Archer",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/gilded-archer-3.png",
          "hitpoints": 145,
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 8,
              "speed": 1,
              "range": {
                "min": 0,
                "max": 5.5
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
                "reload": 0.125,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_archer_3_hre_ha_01",
              "pbgid": 2126949
            }
          ],
          "armor": [],
          "id": "gilded-archer-3"
        },
        "gilded-archer-4": {
          "name": "Elite Gilded Archer",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-archer-4.png",
          "hitpoints": 160,
          "weapons": [
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 10,
              "speed": 1,
              "range": {
                "min": 0,
                "max": 5.5
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
                  "value": 10,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.125,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_archer_4_hre_ha_01",
              "pbgid": 2127086
            }
          ],
          "armor": [],
          "id": "gilded-archer-4"
        }
      }
    },
    {
      "id": "gilded-crossbowman",
      "name": "Gilded Crossbowman",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-crossbowman-3.png",
      "description": "Crossbowmen with increased range and exceptionally high damage against armored units.\n+ Anti-armor specialist\n+ Long range\n- Low health\n- Countered by Horsemen",
      "variations": [
        {
          "id": "gilded-crossbowman-3",
          "pbgid": 6903464,
          "attribName": "unit_crossbowman_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-crossbowman-4",
          "pbgid": 4526942,
          "attribName": "unit_crossbowman_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-crossbowman",
      "age": 3,
      "costs": {
        "food": 160,
        "wood": 0,
        "stone": 0,
        "gold": 80,
        "vizier": 0,
        "oliveoil": 0,
        "total": 240,
        "popcap": 2,
        "time": 27
      },
      "producedBy": [
        "archery-range"
      ],
      "hitpoints": 140,
      "sight": {
        "line": 40,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "shared": {
        "gilded-crossbowman-3": {
          "name": "Gilded Crossbowman",
          "weapons": [
            {
              "name": "Crossbow",
              "type": "ranged",
              "damage": 16,
              "speed": 1.75,
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
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_crossbow_3_hre_ha_01",
              "pbgid": 2127088
            },
            {
              "name": "(translation not found) (undefined)",
              "type": "ranged",
              "damage": 16,
              "speed": 1.75,
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
                        "heavy"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 18,
                  "type": "passive"
                },
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
                  "value": 20,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_crossbow_incendiary_siege_damage_hre_ha_01",
              "pbgid": 2140697
            }
          ],
          "armor": [],
          "id": "gilded-crossbowman-3"
        },
        "gilded-crossbowman-4": {
          "name": "Elite Gilded Crossbowman",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-crossbowman-4.png",
          "hitpoints": 170,
          "weapons": [
            {
              "name": "Crossbow",
              "type": "ranged",
              "damage": 19,
              "speed": 1.75,
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
                        "heavy"
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
                "reload": 0.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_crossbow_4_hre_ha_01",
              "pbgid": 2127089
            },
            {
              "name": "(translation not found) (undefined)",
              "type": "ranged",
              "damage": 16,
              "speed": 1.75,
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
                        "heavy"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 18,
                  "type": "passive"
                },
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
                  "value": 20,
                  "type": "passive"
                }
              ],
              "durations": {
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.875,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_crossbow_incendiary_siege_damage_hre_ha_01",
              "pbgid": 2140697
            }
          ],
          "armor": [],
          "id": "gilded-crossbowman-4"
        }
      }
    },
    {
      "id": "gilded-handcannoneer",
      "name": "Gilded Handcannoneer",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-handcannoneer-4.png",
      "description": "More powerful all-purpose ranged infantry with increased attack speed.\n+ High damage\n+ Increased attack speed\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
      "variations": [
        {
          "id": "gilded-handcannoneer-4",
          "baseId": "gilded-handcannoneer",
          "type": "unit",
          "name": "Gilded Handcannoneer",
          "pbgid": 6642514,
          "attribName": "unit_handcannon_4_hre_ha_01",
          "age": 4,
          "civs": [
            "od"
          ],
          "description": "More powerful all-purpose ranged infantry with increased attack speed.\n+ High damage\n+ Increased attack speed\n- High cost\n- Slow movement speed\n- Countered by Horsemen",
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
            "food": 240,
            "wood": 0,
            "stone": 0,
            "gold": 240,
            "vizier": 0,
            "oliveoil": 0,
            "total": 480,
            "popcap": 2,
            "time": 35
          },
          "producedBy": [
            "archery-range"
          ],
          "icon": "https://data.aoe4world.com/images/units/gilded-handcannoneer-4.png",
          "hitpoints": 250,
          "weapons": [
            {
              "name": "Handcannon",
              "type": "ranged",
              "damage": 38,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 4.5
              },
              "modifiers": [],
              "durations": {
                "aim": 0.25,
                "windup": 0,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0.25,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_handcannon_4_hre_ha_1",
              "pbgid": 2140297
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
      "id": "gilded-horseman",
      "name": "Gilded Horseman",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-horseman-2.png",
      "description": "Fast cavalry effective at raiding, flanking, and countering ranged units.\n+ High movement speed\n- Weak against melee units\n- Countered by Spearmen",
      "variations": [
        {
          "id": "gilded-horseman-2",
          "pbgid": 3581644,
          "attribName": "unit_horseman_2_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-horseman-3",
          "pbgid": 8642669,
          "attribName": "unit_horseman_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-horseman-4",
          "pbgid": 6249668,
          "attribName": "unit_horseman_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-horseman",
      "age": 2,
      "costs": {
        "food": 200,
        "wood": 40,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 240,
        "popcap": 2,
        "time": 27
      },
      "producedBy": [
        "stable"
      ],
      "hitpoints": 250,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.875
      },
      "shared": {
        "gilded-horseman-2": {
          "name": "Gilded Horseman",
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 15,
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
                  "value": 15,
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
                  "value": 15,
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
              "attribName": "weapon_horseman_2_hre_ha_01",
              "pbgid": 2126997
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_horseman_hre_ha_01",
              "pbgid": 2126944
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 2
            }
          ],
          "id": "gilded-horseman-2"
        },
        "gilded-horseman-3": {
          "name": "Veteran Gilded Horseman",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/gilded-horseman-3.png",
          "hitpoints": 310,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 18,
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
                  "value": 18,
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
                  "value": 15,
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
              "attribName": "weapon_horseman_3_hre_ha_01",
              "pbgid": 2126999
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_horseman_hre_ha_01",
              "pbgid": 2126944
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 3
            }
          ],
          "id": "gilded-horseman-3"
        },
        "gilded-horseman-4": {
          "name": "Elite Gilded Horseman",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-horseman-4.png",
          "hitpoints": 360,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 20,
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
                  "value": 20,
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
                  "value": 15,
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
              "attribName": "weapon_horseman_4_hre_ha_01",
              "pbgid": 2127001
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_horseman_hre_ha_01",
              "pbgid": 2126944
            }
          ],
          "armor": [
            {
              "type": "ranged",
              "value": 4
            }
          ],
          "id": "gilded-horseman-4"
        }
      }
    },
    {
      "id": "gilded-knight",
      "name": "Gilded Knight",
      "type": "unit",
      "civs": [
        "od"
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
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/gilded-knight-3.png",
      "description": "Expensive cavalry with a powerful charge.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
      "variations": [
        {
          "id": "gilded-knight-3",
          "pbgid": 4832700,
          "attribName": "unit_knight_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-knight-4",
          "pbgid": 7628156,
          "attribName": "unit_knight_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-knight",
      "age": 3,
      "costs": {
        "food": 280,
        "wood": 0,
        "stone": 0,
        "gold": 200,
        "vizier": 0,
        "oliveoil": 0,
        "total": 480,
        "popcap": 2,
        "time": 42
      },
      "producedBy": [
        "stable"
      ],
      "hitpoints": 400,
      "sight": {
        "line": 28,
        "height": 10
      },
      "movement": {
        "speed": 1.625
      },
      "shared": {
        "gilded-knight-3": {
          "name": "Gilded Knight",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 36,
              "speed": 1.25,
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
                "cooldown": 0.625
              },
              "attribName": "weapon_knight_3_hre_ha_01",
              "pbgid": 2127044
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_knight_hre_ha_01",
              "pbgid": 2127046
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 45,
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
              "attribName": "weapon_knight_3_charge_hre_ha_01",
              "pbgid": 2127045
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 5
            },
            {
              "type": "ranged",
              "value": 4
            }
          ],
          "id": "gilded-knight-3"
        },
        "gilded-knight-4": {
          "name": "Elite Gilded Knight",
          "age": 4,
          "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen",
          "icon": "https://data.aoe4world.com/images/units/gilded-knight-4.png",
          "hitpoints": 460,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 42,
              "speed": 1.25,
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
                "cooldown": 0.625
              },
              "attribName": "weapon_knight_4_hre_ha_01",
              "pbgid": 2127047
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_knight_hre_ha_01",
              "pbgid": 2127046
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 57,
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
              "attribName": "weapon_knight_4_charge_hre_ha_01",
              "pbgid": 2127048
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 7
            },
            {
              "type": "ranged",
              "value": 6
            }
          ],
          "id": "gilded-knight-4"
        }
      }
    },
    {
      "id": "gilded-landsknecht",
      "name": "Gilded Landsknecht",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-landsknecht-3.png",
      "description": "Brave unarmored infantry with an enormous two-handed sword, effective in mixed armies.\n+ Melee attack deals area damage\n- Low health\n- Countered by Archers",
      "variations": [
        {
          "id": "gilded-landsknecht-3",
          "pbgid": 4625630,
          "attribName": "unit_landsknecht_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-landsknecht-4",
          "pbgid": 2670797,
          "attribName": "unit_landsknecht_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-landsknecht",
      "age": 3,
      "costs": {
        "food": 120,
        "wood": 0,
        "stone": 0,
        "gold": 200,
        "vizier": 0,
        "oliveoil": 0,
        "total": 320,
        "popcap": 2,
        "time": 27
      },
      "producedBy": [
        "barracks",
        "burgrave-palace"
      ],
      "hitpoints": 180,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.25
      },
      "shared": {
        "gilded-landsknecht-3": {
          "name": "Gilded Landsknecht",
          "weapons": [
            {
              "name": "Zweihander",
              "type": "melee",
              "damage": 21,
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
              "attribName": "weapon_landsknecht_3_hre_ha_01",
              "pbgid": 2127093
            },
            {
              "name": "Halberd",
              "type": "melee",
              "damage": 21,
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
              "attribName": "weapon_landsknecht_3_halberd_hre_ha_01",
              "pbgid": 2140617
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_knight_hre_ha_01",
              "pbgid": 2127046
            }
          ],
          "armor": [],
          "id": "gilded-landsknecht-3"
        },
        "gilded-landsknecht-4": {
          "name": "Elite Gilded Landsknecht",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-landsknecht-4.png",
          "hitpoints": 210,
          "weapons": [
            {
              "name": "Zweihander",
              "type": "melee",
              "damage": 25,
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
              "attribName": "weapon_landsknecht_4_hre_ha_01",
              "pbgid": 2127095
            },
            {
              "name": "Halberd",
              "type": "melee",
              "damage": 25,
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
              "attribName": "weapon_landsknecht_4_halberd_hre_ha_01",
              "pbgid": 2140660
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_knight_hre_ha_01",
              "pbgid": 2127046
            }
          ],
          "armor": [],
          "id": "gilded-landsknecht-4"
        }
      }
    },
    {
      "id": "gilded-man-at-arms",
      "name": "Gilded Man-at-Arms",
      "type": "unit",
      "civs": [
        "od"
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
      "minAge": 2,
      "icon": "https://data.aoe4world.com/images/units/gilded-man-at-arms-2.png",
      "description": "Tough infantry with good damage.\n+ High armor\n- Slow movement\n- Countered by Knights, Lancers, and Crossbowmen",
      "variations": [
        {
          "id": "gilded-man-at-arms-2",
          "pbgid": 8377303,
          "attribName": "unit_manatarms_2_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-man-at-arms-3",
          "pbgid": 6291367,
          "attribName": "unit_manatarms_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-man-at-arms-4",
          "pbgid": 4252958,
          "attribName": "unit_manatarms_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-man-at-arms",
      "age": 2,
      "costs": {
        "food": 200,
        "wood": 0,
        "stone": 0,
        "gold": 40,
        "vizier": 0,
        "oliveoil": 0,
        "total": 240,
        "popcap": 2,
        "time": 27
      },
      "producedBy": [
        "barracks",
        "burgrave-palace"
      ],
      "hitpoints": 230,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.125
      },
      "shared": {
        "gilded-man-at-arms-2": {
          "name": "Early Gilded Man-at-Arms",
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 14,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_2_hre_ha_01",
              "pbgid": 2127003
            },
            {
              "name": "Ax",
              "type": "melee",
              "damage": 15,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_2_2handaxe_hre_ha_01",
              "pbgid": 2127007
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
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
          "id": "gilded-man-at-arms-2"
        },
        "gilded-man-at-arms-3": {
          "name": "Gilded Man-at-Arms",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/gilded-man-at-arms-3.png",
          "hitpoints": 290,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 17,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_3_hre_ha_01",
              "pbgid": 2127011
            },
            {
              "name": "Mace",
              "type": "melee",
              "damage": 18,
              "speed": 1.125,
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_3_1handmace_hre_ha_01",
              "pbgid": 2127013
            },
            {
              "name": "Ax",
              "type": "melee",
              "damage": 18,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_3_2handaxe_hre_ha_01",
              "pbgid": 2127015
            },
            {
              "name": "Bludgeon",
              "type": "melee",
              "damage": 18,
              "speed": 1.125,
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_3_2handmace_hre_ha_01",
              "pbgid": 2127017
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
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
          "id": "gilded-man-at-arms-3"
        },
        "gilded-man-at-arms-4": {
          "name": "Elite Gilded Man-at-Arms",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-man-at-arms-4.png",
          "hitpoints": 340,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 21,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_4_hre_ha_01",
              "pbgid": 2127019
            },
            {
              "name": "Ax",
              "type": "melee",
              "damage": 22,
              "speed": 1.125,
              "range": {
                "min": 0,
                "max": 0.295
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.5,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_4_2handaxe_hre_ha_01",
              "pbgid": 2127023
            },
            {
              "name": "Bludgeon",
              "type": "melee",
              "damage": 22,
              "speed": 1.125,
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
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_manatarms_4_2handmace_hre_ha_01",
              "pbgid": 2127025
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
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
          "id": "gilded-man-at-arms-4"
        }
      }
    },
    {
      "id": "gilded-spearman",
      "name": "Gilded Spearman",
      "type": "unit",
      "civs": [
        "od"
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
      "icon": "https://data.aoe4world.com/images/units/gilded-spearman-1.png",
      "description": "Infantry best used against mounted units.\n+ Anti-cavalry specialist\n- Weak against armored infantry\n- Countered by Archers",
      "variations": [
        {
          "id": "gilded-spearman-1",
          "pbgid": 3735944,
          "attribName": "unit_spearman_1_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-spearman-2",
          "pbgid": 3834129,
          "attribName": "unit_spearman_2_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-spearman-3",
          "pbgid": 4502609,
          "attribName": "unit_spearman_3_hre_ha_01",
          "civs": [
            "od"
          ]
        },
        {
          "id": "gilded-spearman-4",
          "pbgid": 7605490,
          "attribName": "unit_spearman_4_hre_ha_01",
          "civs": [
            "od"
          ]
        }
      ],
      "baseId": "gilded-spearman",
      "age": 1,
      "costs": {
        "food": 120,
        "wood": 40,
        "stone": 0,
        "gold": 0,
        "vizier": 0,
        "oliveoil": 0,
        "total": 160,
        "popcap": 2,
        "time": 18
      },
      "producedBy": [
        "barracks",
        "burgrave-palace"
      ],
      "hitpoints": 160,
      "sight": {
        "line": 36,
        "height": 10
      },
      "movement": {
        "speed": 1.25
      },
      "shared": {
        "gilded-spearman-1": {
          "name": "Gilded Spearman",
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 10,
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
                  "value": 34,
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
              "attribName": "weapon_spearman_1_hre_ha_01",
              "pbgid": 2126956
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            }
          ],
          "id": "gilded-spearman-1"
        },
        "gilded-spearman-2": {
          "name": "Hardened Gilded Spearman",
          "age": 2,
          "icon": "https://data.aoe4world.com/images/units/gilded-spearman-2.png",
          "hitpoints": 180,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 12,
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
              "attribName": "weapon_spearman_2_hre_ha_01",
              "pbgid": 2126958
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            }
          ],
          "id": "gilded-spearman-2"
        },
        "gilded-spearman-3": {
          "name": "Veteran Gilded Spearman",
          "age": 3,
          "icon": "https://data.aoe4world.com/images/units/gilded-spearman-3.png",
          "hitpoints": 220,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 14,
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
                  "value": 46,
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
              "attribName": "weapon_spearman_3_hre_ha_01",
              "pbgid": 2126960
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            }
          ],
          "id": "gilded-spearman-3"
        },
        "gilded-spearman-4": {
          "name": "Elite Gilded Spearman",
          "age": 4,
          "icon": "https://data.aoe4world.com/images/units/gilded-spearman-4.png",
          "hitpoints": 260,
          "weapons": [
            {
              "name": "Spear",
              "type": "melee",
              "damage": 18,
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
                  "value": 56,
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
              "attribName": "weapon_spearman_4_hre_ha_01",
              "pbgid": 2126962
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 18,
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
              "attribName": "weapon_torch_hre_ha_01",
              "pbgid": 2126943
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 1
            }
          ],
          "id": "gilded-spearman-4"
        }
      }
    },
    {
      "id": "gilded-villager",
      "name": "Gilded Villager",
      "type": "unit",
      "civs": [
        "od"
      ],
      "unique": true,
      "displayClasses": [
        "Worker"
      ],
      "classes": [
        "worker"
      ],
      "minAge": 1,
      "icon": "https://data.aoe4world.com/images/units/gilded-villager-1.png",
      "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units. Gathers resources 28% quicker and builds and repairs 20% faster than regular Villagers.\n- Weak in combat",
      "variations": [
        {
          "id": "gilded-villager-1",
          "baseId": "gilded-villager",
          "type": "unit",
          "name": "Gilded Villager",
          "pbgid": 2513732,
          "attribName": "unit_villager_1_hre_ha_01",
          "age": 1,
          "civs": [
            "od"
          ],
          "description": "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units. Gathers resources 28% quicker and builds and repairs 20% faster than regular Villagers.\n- Weak in combat",
          "classes": [
            "worker"
          ],
          "displayClasses": [
            "Worker"
          ],
          "unique": true,
          "costs": {
            "food": 60,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 60,
            "popcap": 1,
            "time": 24
          },
          "producedBy": [
            "town-center",
            "capital-town-center",
            "palace-of-swabia"
          ],
          "icon": "https://data.aoe4world.com/images/units/gilded-villager-1.png",
          "hitpoints": 65,
          "weapons": [
            {
              "name": "Knife",
              "type": "melee",
              "damage": 7,
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
              "attribName": "weapon_villager_1_hre_ha_01",
              "pbgid": 2141048
            },
            {
              "name": "Torch",
              "type": "fire",
              "damage": 12,
              "speed": 2.125,
              "range": {
                "min": 0,
                "max": 1
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
              "attribName": "weapon_torch_weak_hre_ha_01",
              "pbgid": 2141047
            },
            {
              "name": "Bow",
              "type": "ranged",
              "damage": 3,
              "speed": 3,
              "range": {
                "min": 0,
                "max": 2.875
              },
              "modifiers": [],
              "durations": {
                "aim": 0.125,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.5,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 2
              },
              "attribName": "weapon_villager_hunt_ranged",
              "pbgid": 173519
            },
            {
              "name": "Crook",
              "type": "melee",
              "damage": 12,
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
              "attribName": "weapon_villager_hunt_herd",
              "pbgid": 173518
            },
            {
              "name": "Spear",
              "type": "melee",
              "damage": 12,
              "speed": 3.075,
              "range": {
                "min": 0,
                "max": 0.5
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
                "cooldown": 1.7
              },
              "attribName": "weapon_villager_hunt_melee",
              "pbgid": 173517
            }
          ],
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
      "id": "grand-galley",
      "name": "Grand Galley",
      "type": "unit",
      "civs": [
        "ot"
      ],
      "unique": true,
      "displayClasses": [
        "Gunpowder Ship"
      ],
      "classes": [
        "gunpowder",
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
            "gunpowder",
            "ship"
          ],
          "displayClasses": [
            "Gunpowder Ship"
          ],
          "unique": true,
          "costs": {
            "food": 135,
            "wood": 360,
            "stone": 0,
            "gold": 300,
            "vizier": 0,
            "oliveoil": 0,
            "total": 795,
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
            "gold": 800,
            "vizier": 0,
            "oliveoil": 0,
            "total": 1250,
            "popcap": 4,
            "time": 60
          },
          "producedBy": [
            "mehmed-imperial-armory",
            "siege-workshop"
          ],
          "icon": "https://data.aoe4world.com/images/units/great-bombard-4.png",
          "hitpoints": 300,
          "weapons": [
            {
              "name": "Great Bombard",
              "type": "siege",
              "damage": 190,
              "speed": 7,
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
                "aim": 0,
                "windup": 0,
                "attack": 0.125,
                "winddown": 1.375,
                "reload": 5.5,
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
              "value": 40
            }
          ],
          "sight": {
            "line": 56,
            "height": 10
          },
          "movement": {
            "speed": 0.75
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
        "vizier": 0,
        "oliveoil": 0,
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 180,
            "popcap": 1,
            "time": 28
          },
          "producedBy": [
            "military-school",
            "stable"
          ],
          "icon": "https://data.aoe4world.com/images/units/mehter-2.png",
          "hitpoints": 160,
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
            "food": 110,
            "wood": 200,
            "stone": 0,
            "gold": 30,
            "vizier": 0,
            "oliveoil": 0,
            "total": 340,
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
                  "value": 55,
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
            "vizier": 0,
            "oliveoil": 0,
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
                        "massive"
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
            "vizier": 0,
            "oliveoil": 0,
            "total": 150,
            "popcap": 2,
            "time": 38
          },
          "producedBy": [
            "dock"
          ],
          "icon": "https://data.aoe4world.com/images/units/lodya-fishing-boat-2.png",
          "hitpoints": 200,
          "weapons": [],
          "armor": [],
          "sight": {
            "line": 44,
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
            "food": 80,
            "wood": 150,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 230,
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
      "description": "Trade Ships generate Gold and Wood when assigned to a trade route with a Coastal Trade Post or another player's Dock.\nThe Lodya can be converted to any other type of ship.",
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
          "description": "Trade Ships generate Gold and Wood when assigned to a trade route with a Coastal Trade Post or another player's Dock.\nThe Lodya can be converted to any other type of ship.",
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
            "vizier": 0,
            "oliveoil": 0,
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
            "vizier": 0,
            "oliveoil": 0,
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
      "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Has a 65 second lifespan",
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
          "description": "Light melee infantry equipped with a polearm.\n+ Fast moving\n- Countered by Archers\n- Can't garrison\n- Has a 65 second lifespan",
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
            "food": 20,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 20,
            "time": 0,
            "popcap": 0
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
                  "value": 4,
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
            "vizier": 0,
            "oliveoil": 0,
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
    },
    {
      "id": "imperial-guard",
      "name": "Imperial Guard",
      "type": "unit",
      "civs": [
        "zx"
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/imperial-guard-1.png",
      "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
      "variations": [
        {
          "id": "imperial-guard-4",
          "baseId": "imperial-guard",
          "type": "unit",
          "name": "Imperial Guard",
          "pbgid": 2143642,
          "attribName": "unit_ming_guard_chi_ha_01",
          "age": 4,
          "civs": [
            "zx"
          ],
          "description": "Expensive cavalry with high damage and melee armor. Effective against melee units.\n+ Heavy armor\n+ Strong in melee combat\n- Countered by Spearmen and Crossbowmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
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
            "food": 140,
            "wood": 0,
            "stone": 0,
            "gold": 140,
            "vizier": 0,
            "oliveoil": 0,
            "total": 280,
            "popcap": 1,
            "time": 35
          },
          "producedBy": [
            "stable"
          ],
          "icon": "https://data.aoe4world.com/images/units/imperial-guard-1.png",
          "hitpoints": 340,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 28,
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
              "attribName": "weapon_ming_guard_chi",
              "pbgid": 2143707
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
            },
            {
              "name": "Lance",
              "type": "melee",
              "damage": 45,
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
              "attribName": "weapon_ming_guard_charge_chi",
              "pbgid": 2143708
            }
          ],
          "armor": [
            {
              "type": "melee",
              "value": 10
            },
            {
              "type": "ranged",
              "value": 3
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
      "id": "shaolin-monk",
      "name": "Shaolin Monk",
      "type": "unit",
      "civs": [
        "zx"
      ],
      "unique": true,
      "displayClasses": [
        "Battle Monk"
      ],
      "classes": [
        "battle",
        "monk"
      ],
      "minAge": 3,
      "icon": "https://data.aoe4world.com/images/units/shaolin-monk-3.png",
      "description": "Monk with strong combat capabilities.\n+ Strong against ranged units \n+ Can heal themselves\n- Cannot heal others",
      "variations": [
        {
          "id": "shaolin-monk-3",
          "baseId": "shaolin-monk",
          "type": "unit",
          "name": "Shaolin Monk",
          "pbgid": 2127467,
          "attribName": "unit_monk_shaolin_3_chi_ha_01",
          "age": 3,
          "civs": [
            "zx"
          ],
          "description": "Monk with strong combat capabilities.\n+ Strong against ranged units \n+ Can heal themselves\n- Cannot heal others",
          "classes": [
            "battle",
            "monk"
          ],
          "displayClasses": [
            "Battle Monk"
          ],
          "unique": true,
          "costs": {
            "food": 200,
            "wood": 0,
            "stone": 0,
            "gold": 0,
            "vizier": 0,
            "oliveoil": 0,
            "total": 200,
            "popcap": 1,
            "time": 20
          },
          "producedBy": [
            "shaolin-monastery",
            "pagoda"
          ],
          "icon": "https://data.aoe4world.com/images/units/shaolin-monk-3.png",
          "hitpoints": 170,
          "weapons": [
            {
              "name": "Bo Staff",
              "type": "melee",
              "damage": 15,
              "speed": 0.75,
              "range": {
                "min": 0,
                "max": 0.3325
              },
              "modifiers": [],
              "durations": {
                "aim": 0,
                "windup": 0.25,
                "attack": 0.125,
                "winddown": 0.375,
                "reload": 0,
                "setup": 0,
                "teardown": 0,
                "cooldown": 0
              },
              "attribName": "weapon_monk_shaolin_3_chi",
              "pbgid": 2127469
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
          "armor": [
            {
              "type": "melee",
              "value": 2
            }
          ],
          "sight": {
            "line": 30,
            "height": 10
          },
          "movement": {
            "speed": 1.1875
          }
        }
      ],
      "shared": {}
    },
    {
      "id": "yuan-raider",
      "name": "Yuan Raider",
      "type": "unit",
      "civs": [
        "zx"
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
      "minAge": 4,
      "icon": "https://data.aoe4world.com/images/units/yuan-raider-4.png",
      "description": "Extremely swift light cavalry which deals bonus damage to economic units.\n+ Fast move speed\n+ Bonus damage vs Villagers\n- Weak in melee combat\n- Countered by Spearmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
      "variations": [
        {
          "id": "yuan-raider-4",
          "baseId": "yuan-raider",
          "type": "unit",
          "name": "Yuan Raider",
          "pbgid": 2143640,
          "attribName": "unit_yuan_guard_4_chi_ha_01",
          "age": 4,
          "civs": [
            "zx"
          ],
          "description": "Extremely swift light cavalry which deals bonus damage to economic units.\n+ Fast move speed\n+ Bonus damage vs Villagers\n- Weak in melee combat\n- Countered by Spearmen\n\nRequires Dynastic Protectors researched at Zhu Xi's Library.",
          "classes": [
            "light",
            "melee",
            "cavalry"
          ],
          "displayClasses": [
            "Light Melee Cavalry"
          ],
          "unique": true,
          "costs": {
            "food": 80,
            "wood": 20,
            "stone": 0,
            "gold": 20,
            "vizier": 0,
            "oliveoil": 0,
            "total": 120,
            "popcap": 1,
            "time": 22.5
          },
          "producedBy": [
            "stable"
          ],
          "icon": "https://data.aoe4world.com/images/units/yuan-raider-4.png",
          "hitpoints": 200,
          "weapons": [
            {
              "name": "Sword",
              "type": "melee",
              "damage": 15,
              "speed": 1.5,
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
                        "worker"
                      ]
                    ]
                  },
                  "effect": "change",
                  "value": 5,
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
                "cooldown": 0.875
              },
              "attribName": "weapon_yuan_guard_chi_ha_01",
              "pbgid": 2143702
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
          "sight": {
            "line": 50,
            "height": 10
          },
          "movement": {
            "speed": 2
          }
        }
      ],
      "shared": {}
    }
  ]
module.exports = allOptimizedUnits
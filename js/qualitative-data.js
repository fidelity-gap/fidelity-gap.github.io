window.QUALITATIVE_ADDITIONS = {
  "schemaVersion": 1,
  "methodLabel": "Nano baseline",
  "scoreDefinition": "Mean mask IoU over predicted frames 1–16; conditioning frame 0 excluded. Higher is better.",
  "ladder": [
    {
      "id": "ladder-115",
      "title": "Folding paper",
      "caption": "The hands better follow the reference, while the paper remains open instead of forming the compact fold.",
      "sceneGroup": "695b798389872b615c99247d",
      "source": "Matched Nano baseline evaluation outputs",
      "methodLabel": "Nano baseline",
      "evaluationLabel": "Legacy validation examples",
      "reviewed": true,
      "frames": 156,
      "fps": 12,
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/idx115-300h-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx115-300h-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.31277944237667643,
          "objectScs": 0.23811737499259272
        },
        {
          "hours": 3000,
          "src": "videos/ladder/idx115-3kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx115-3kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.5867490037174874,
          "objectScs": 0.2381608379092464
        },
        {
          "hours": 30000,
          "src": "videos/ladder/idx115-30kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx115-30kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.7407632893524884,
          "objectScs": 0.2774475353182707
        }
      ],
      "sourceFrames": 17,
      "durationSeconds": 13,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "shared-bbox",
          "start": 4.25,
          "end": 5
        },
        {
          "region": "zoom",
          "start": 5,
          "end": 6
        },
        {
          "region": "zoomed-rgb",
          "start": 6,
          "end": 6.5
        },
        {
          "region": "simultaneous-mask-fade",
          "start": 6.5,
          "end": 7
        },
        {
          "region": "simultaneous-masks",
          "start": 7,
          "end": 13
        }
      ],
      "displaySize": [
        720,
        406
      ],
      "displayLabelRendering": "No baked text labels.",
      "selectionStatus": "selected for publication",
      "sharedFocusCrop": [
        69,
        22,
        496,
        449
      ],
      "maskColors": {
        "handsOverlap": "#C3D9EA",
        "objectOverlap": "#F4D9C3",
        "gtOnly": "#DC5A7F",
        "predictedOnly": "#7062BB",
        "conflict": "diagonal GT-only/predicted-only stripes"
      },
      "meetsPreferredObjectThreshold": true
    },
    {
      "id": "ladder-012",
      "title": "Small-part assembly",
      "caption": "Small-part assembly across three training scales.",
      "sceneGroup": "6951a713080df4713a9c44f2",
      "source": "Matched Nano baseline evaluation outputs",
      "methodLabel": "Nano baseline",
      "evaluationLabel": "Legacy validation examples",
      "reviewed": true,
      "frames": 156,
      "fps": 12,
      "sourceFrames": 17,
      "durationSeconds": 13,
      "displaySize": [
        720,
        406
      ],
      "selectionStatus": "selected for publication",
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "shared-bbox",
          "start": 4.25,
          "end": 5
        },
        {
          "region": "zoom",
          "start": 5,
          "end": 6
        },
        {
          "region": "zoomed-rgb",
          "start": 6,
          "end": 6.5
        },
        {
          "region": "simultaneous-mask-fade",
          "start": 6.5,
          "end": 7
        },
        {
          "region": "simultaneous-masks",
          "start": 7,
          "end": 13
        }
      ],
      "displayLabelRendering": "No baked text labels.",
      "sharedFocusCrop": [
        121,
        192,
        441,
        512
      ],
      "maskColors": {
        "handsOverlap": "#C3D9EA",
        "objectOverlap": "#F4D9C3",
        "gtOnly": "#DC5A7F",
        "predictedOnly": "#7062BB",
        "conflict": "diagonal GT-only/predicted-only stripes"
      },
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/idx012-300h-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx012-300h-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.6562913485628818,
          "objectScs": 0.25696449876503474
        },
        {
          "hours": 3000,
          "src": "videos/ladder/idx012-3kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx012-3kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.753578826936227,
          "objectScs": 0.36139673629864255
        },
        {
          "hours": 30000,
          "src": "videos/ladder/idx012-30kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx012-30kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.7897335196707868,
          "objectScs": 0.5450524516689923
        }
      ],
      "meetsPreferredObjectThreshold": false
    },
    {
      "id": "ladder-023",
      "title": "Box pressing",
      "caption": "Box pressing across three training scales.",
      "sceneGroup": "6951be4c816c305ad9a228e4",
      "source": "Matched Nano baseline evaluation outputs",
      "methodLabel": "Nano baseline",
      "evaluationLabel": "Legacy validation examples",
      "reviewed": true,
      "frames": 156,
      "fps": 12,
      "sourceFrames": 17,
      "durationSeconds": 13,
      "displaySize": [
        720,
        406
      ],
      "selectionStatus": "selected for publication",
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "shared-bbox",
          "start": 4.25,
          "end": 5
        },
        {
          "region": "zoom",
          "start": 5,
          "end": 6
        },
        {
          "region": "zoomed-rgb",
          "start": 6,
          "end": 6.5
        },
        {
          "region": "simultaneous-mask-fade",
          "start": 6.5,
          "end": 7
        },
        {
          "region": "simultaneous-masks",
          "start": 7,
          "end": 13
        }
      ],
      "displayLabelRendering": "No baked text labels.",
      "sharedFocusCrop": [
        104,
        124,
        492,
        512
      ],
      "maskColors": {
        "handsOverlap": "#C3D9EA",
        "objectOverlap": "#F4D9C3",
        "gtOnly": "#DC5A7F",
        "predictedOnly": "#7062BB",
        "conflict": "diagonal GT-only/predicted-only stripes"
      },
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/idx023-300h-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx023-300h-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.30856779777288773,
          "objectScs": 0.4846055251034789
        },
        {
          "hours": 3000,
          "src": "videos/ladder/idx023-3kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx023-3kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.6135184002877243,
          "objectScs": 0.5690408533343639
        },
        {
          "hours": 30000,
          "src": "videos/ladder/idx023-30kh-bbox-zoom-v3-20261008.mp4",
          "poster": "img/ladder/idx023-30kh-bbox-zoom-v3-20261008.jpg",
          "handScs": 0.7609880321831469,
          "objectScs": 0.6138031846677028
        }
      ],
      "meetsPreferredObjectThreshold": false
    }
  ]
};

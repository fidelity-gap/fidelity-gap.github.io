window.QUALITATIVE_ADDITIONS = {
  "schemaVersion": 1,
  "methodLabel": "Nano + skeleton",
  "scoreDefinition": "Mean mask IoU over predicted frames 1–16; conditioning frame 0 excluded. Higher is better.",
  "ladder": [
    {
      "id": "ladder-115",
      "title": "Folding paper",
      "caption": "With skeleton conditioning, hand fidelity remains high while object fidelity stays lower.",
      "sceneGroup": "695b798389872b615c99247d",
      "source": "Matched Nano + skeleton EMA evaluation outputs",
      "methodLabel": "Nano + skeleton",
      "evaluationLabel": "Final validation examples",
      "reviewed": true,
      "frames": 156,
      "fps": 12,
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/nano-skeleton-idx115-300h-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx115-300h-zoom-v5-20261008.jpg",
          "handScs": 0.702805670333521,
          "objectScs": 0.3060796239640654
        },
        {
          "hours": 3000,
          "src": "videos/ladder/nano-skeleton-idx115-3kh-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx115-3kh-zoom-v5-20261008.jpg",
          "handScs": 0.7253434768258142,
          "objectScs": 0.2235387079686619
        },
        {
          "hours": 30000,
          "src": "videos/ladder/nano-skeleton-idx115-30kh-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx115-30kh-zoom-v5-20261008.jpg",
          "handScs": 0.7759618346189352,
          "objectScs": 0.22630319363606607
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
        63,
        55,
        457,
        449
      ],
      "maskColors": {
        "handsOverlap": "#C3D9EA",
        "objectOverlap": "#F4D9C3",
        "gtOnly": "#DC5A7F",
        "predictedOnly": "#7062BB",
        "conflict": "diagonal GT-only/predicted-only stripes"
      },
      "meetsPreferredObjectThreshold": true,
      "groundTruth": {
        "src": "videos/ladder/nano-skeleton-idx115-gt-zoom-v5-20261008.mp4",
        "poster": "img/ladder/nano-skeleton-idx115-gt-zoom-v5-20261008.jpg"
      },
      "clipId": "695b798389872b615c99247d_0_48_s344",
      "seed": 12460,
      "model": "nano-skeleton",
      "scoreSource": "Fresh SAM2 mask evaluation over future frames 1-16 on the displayed raw predictions."
    },
    {
      "id": "ladder-012",
      "title": "Small-part assembly",
      "caption": "With skeleton conditioning, hand fidelity remains high while object fidelity stays lower.",
      "sceneGroup": "6951a713080df4713a9c44f2",
      "source": "Matched Nano + skeleton EMA evaluation outputs",
      "methodLabel": "Nano + skeleton",
      "evaluationLabel": "Final validation examples",
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
        122,
        192,
        442,
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
          "src": "videos/ladder/nano-skeleton-idx012-300h-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx012-300h-zoom-v5-20261008.jpg",
          "handScs": 0.7636989361250223,
          "objectScs": 0.352764849683297
        },
        {
          "hours": 3000,
          "src": "videos/ladder/nano-skeleton-idx012-3kh-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx012-3kh-zoom-v5-20261008.jpg",
          "handScs": 0.8086774156102111,
          "objectScs": 0.5087114945695088
        },
        {
          "hours": 30000,
          "src": "videos/ladder/nano-skeleton-idx012-30kh-zoom-v5-20261008.mp4",
          "poster": "img/ladder/nano-skeleton-idx012-30kh-zoom-v5-20261008.jpg",
          "handScs": 0.8211789823255758,
          "objectScs": 0.5166642357778375
        }
      ],
      "meetsPreferredObjectThreshold": false,
      "groundTruth": {
        "src": "videos/ladder/nano-skeleton-idx012-gt-zoom-v5-20261008.mp4",
        "poster": "img/ladder/nano-skeleton-idx012-gt-zoom-v5-20261008.jpg"
      },
      "clipId": "6951a713080df4713a9c44f2_0_48_s30",
      "seed": 12357,
      "model": "nano-skeleton",
      "scoreSource": "Fresh SAM2 mask evaluation over future frames 1-16 on the displayed raw predictions."
    }
  ]
};

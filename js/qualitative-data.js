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
      "source": "Matched Nano baseline checkpoint replay",
      "methodLabel": "Nano baseline",
      "evaluationLabel": "Legacy validation examples",
      "reviewed": true,
      "frames": 99,
      "fps": 12,
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/idx115-300h-mask-wide-v3.mp4",
          "poster": "img/ladder/idx115-300h-mask-wide-v3.jpg",
          "handScs": 0.31277944237667643,
          "objectScs": 0.23811737499259272
        },
        {
          "hours": 3000,
          "src": "videos/ladder/idx115-3kh-mask-wide-v3.mp4",
          "poster": "img/ladder/idx115-3kh-mask-wide-v3.jpg",
          "handScs": 0.5867490037174874,
          "objectScs": 0.2381608379092464
        },
        {
          "hours": 30000,
          "src": "videos/ladder/idx115-30kh-mask-wide-v3.mp4",
          "poster": "img/ladder/idx115-30kh-mask-wide-v3.jpg",
          "handScs": 0.7407632893524884,
          "objectScs": 0.2774475353182707
        }
      ],
      "sourceFrames": 17,
      "durationSeconds": 8.25,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "agent",
          "start": 4.25,
          "end": 6.25
        },
        {
          "region": "object",
          "start": 6.25,
          "end": 8.25
        }
      ],
      "displaySize": [
        720,
        406
      ],
      "displayLabelRendering": "Agent/Object labels drawn after the image reaches 720x406; no subsequent anisotropic resize."
    },
    {
      "id": "ladder-107",
      "title": "Produce handling",
      "caption": "Hand alignment improves across the ladder, while the held produce remains different from the reference.",
      "sceneGroup": "695b515015b498da819b8743",
      "source": "Matched Nano baseline checkpoint replay",
      "methodLabel": "Nano baseline",
      "evaluationLabel": "Legacy validation examples",
      "reviewed": true,
      "frames": 99,
      "fps": 12,
      "panels": [
        {
          "hours": 300,
          "src": "videos/ladder/idx107-300h-mask-wide-v3.mp4",
          "poster": "img/ladder/idx107-300h-mask-wide-v3.jpg",
          "handScs": 0.5222048034763662,
          "objectScs": 0.4073220322409604
        },
        {
          "hours": 3000,
          "src": "videos/ladder/idx107-3kh-mask-wide-v3.mp4",
          "poster": "img/ladder/idx107-3kh-mask-wide-v3.jpg",
          "handScs": 0.6340526085778571,
          "objectScs": 0.33877944902110635
        },
        {
          "hours": 30000,
          "src": "videos/ladder/idx107-30kh-mask-wide-v3.mp4",
          "poster": "img/ladder/idx107-30kh-mask-wide-v3.jpg",
          "handScs": 0.7666721680952499,
          "objectScs": 0.32116223062368177
        }
      ],
      "sourceFrames": 17,
      "durationSeconds": 8.25,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "agent",
          "start": 4.25,
          "end": 6.25
        },
        {
          "region": "object",
          "start": 6.25,
          "end": 8.25
        }
      ],
      "displaySize": [
        720,
        406
      ],
      "displayLabelRendering": "Agent/Object labels drawn after the image reaches 720x406; no subsequent anisotropic resize."
    }
  ],
  "handFailures": [
    {
      "id": "hand-1015",
      "title": "Brush reach",
      "caption": "The left forearm drifts inward during the brush reach.",
      "cause": "Arm motion",
      "sceneGroup": "S04",
      "source": "Ours (dynamic-region supervision), 30k-hour Nano",
      "methodLabel": "Ours",
      "evaluationLabel": "In-domain examples",
      "reviewed": true,
      "frames": 81,
      "fps": 12,
      "src": "videos/hand-failures/1015-gt-ours-agent-mask.mp4",
      "poster": "img/hand-failures/1015-gt-ours-agent-mask.jpg",
      "handScs": 0.6014354476091476,
      "objectScs": 0.6603198678194142,
      "displaySize": [
        1440,
        406
      ],
      "sourceFrames": 17,
      "durationSeconds": 6.75,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "agent",
          "start": 4.25,
          "end": 6.75
        }
      ],
      "displayLabelRendering": "Native 24px Agent label drawn after final 720x406 panel resize.",
      "failureCategory": "Arm Motion"
    },
    {
      "id": "hand-1004",
      "title": "Arm extension",
      "caption": "The extended forearm drifts left of the reference during the reach.",
      "cause": "Arm motion",
      "sceneGroup": "S01",
      "source": "Ours (dynamic-region supervision), 30k-hour Nano",
      "methodLabel": "Ours",
      "evaluationLabel": "In-domain examples",
      "reviewed": true,
      "frames": 81,
      "fps": 12,
      "src": "videos/hand-failures/1004-gt-ours-agent-mask.mp4",
      "poster": "img/hand-failures/1004-gt-ours-agent-mask.jpg",
      "handScs": 0.7319065771760039,
      "objectScs": 0.289930291980377,
      "displaySize": [
        1440,
        406
      ],
      "sourceFrames": 17,
      "durationSeconds": 6.75,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "agent",
          "start": 4.25,
          "end": 6.75
        }
      ],
      "displayLabelRendering": "Native 24px Agent label drawn after final 720x406 panel resize.",
      "failureCategory": "Arm Motion"
    },
    {
      "id": "hand-1030",
      "title": "Arm retraction",
      "caption": "The left forearm retracts differently after cutting the cardboard.",
      "cause": "Arm motion",
      "sceneGroup": "S07",
      "source": "Ours (dynamic-region supervision), 30k-hour Nano",
      "methodLabel": "Ours",
      "evaluationLabel": "In-domain examples",
      "reviewed": true,
      "frames": 81,
      "fps": 12,
      "src": "videos/hand-failures/1030-gt-ours-agent-mask.mp4",
      "poster": "img/hand-failures/1030-gt-ours-agent-mask.jpg",
      "handScs": 0.7504264685376199,
      "objectScs": 0.35678516813923294,
      "displaySize": [
        1440,
        406
      ],
      "sourceFrames": 17,
      "durationSeconds": 6.75,
      "displayPhases": [
        {
          "region": "original",
          "start": 0,
          "end": 4.25
        },
        {
          "region": "agent",
          "start": 4.25,
          "end": 6.75
        }
      ],
      "displayLabelRendering": "Native 24px Agent label drawn after final 720x406 panel resize.",
      "failureCategory": "Arm Motion"
    }
  ]
};

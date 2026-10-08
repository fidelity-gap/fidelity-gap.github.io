// Optional power-law fitted asymptotes; five measured checkpoints per fit.
window.LPIPS_FITS = {
  "hand": {
    "edge_skeleton": {
      "asymptote": 0.252952995312754,
      "coefficients": {
        "A": 0.252952995312754,
        "B": 0.03706630580600869,
        "c": 0.5492977465232712
      },
      "rmse": 0.0011490683249453517,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.4985016193799253,
          0.6008961240916905
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.25295299498063667,
            "B": 0.037066306058689935,
            "c": 0.5492977320986868
          },
          "best_sse": 6.601790076963416e-06,
          "absolute_sse_difference": 1.6686549060909717e-19,
          "all_starts_sse_range": [
            6.601790076963416e-06,
            0.0005613968208058257
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.2529529951169837,
        "broader_search_sse": 6.6017900769634085e-06,
        "unconstrained_A": 0.252952995312754,
        "unconstrained_sse": 6.601790076963583e-06,
        "paper_solver_absolute_A_difference": 4.2396247623699423e-10,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.25627338901867225,
            "B": 0.06096473195841518,
            "c": 1.041289476597486,
            "rmse": 0.00021059475935822865,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.255520532237555,
            "B": 0.034145310667251697,
            "c": 0.7398100914728921,
            "rmse": 0.0003412731641184392,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.25204022972325923,
            "B": 0.03780190582249927,
            "c": 0.48751865476611,
            "rmse": 0.0008854704903323362,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.2536216564451818,
            "B": 0.03634533704563706,
            "c": 0.5575850452366475,
            "rmse": 0.0011797427329735067,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.24782772197496836,
            "B": 0.04203026118750632,
            "c": 0.4352766703696894,
            "rmse": 0.0008553831432628353,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.24782772197496836,
          0.25627338901867225
        ],
        "leave_one_out_A_span_over_observed_loss_span": 0.2585669263311089,
        "sensitive_to_checkpoint_selection": false,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    },
    "nano_skeleton": {
      "asymptote": 0.22807818859127893,
      "coefficients": {
        "A": 0.22807818859127893,
        "B": 0.04949945725595055,
        "c": 0.5220555857983451
      },
      "rmse": 0.0002212378288856683,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.5154120628456793,
          0.5293525175257559
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.22807818869274002,
            "B": 0.0494994571772915,
            "c": 0.522055588797819
          },
          "best_sse": 2.447308846502226e-07,
          "absolute_sse_difference": 1.376428539288238e-21,
          "all_starts_sse_range": [
            2.447308846502226e-07,
            0.0010590287459227945
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.22807818852029674,
        "broader_search_sse": 2.447308846502354e-07,
        "unconstrained_A": 0.22807818859127893,
        "unconstrained_sse": 2.447308846502212e-07,
        "paper_solver_absolute_A_difference": 3.3306690738754696e-16,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.2282094478654726,
            "B": 0.04968690238656655,
            "c": 0.5283880762098254,
            "rmse": 0.0002462133858918737,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.228275062342703,
            "B": 0.0492829610759929,
            "c": 0.5286705790888286,
            "rmse": 0.00023777065524403134,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.22787108167472572,
            "B": 0.04966562336215351,
            "c": 0.5121746484651916,
            "rmse": 0.00017194535978573962,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.22777705129158884,
            "B": 0.04982376503224603,
            "c": 0.5195858221241524,
            "rmse": 0.00010771100462713514,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.22883988913778316,
            "B": 0.048769875673309974,
            "c": 0.5377063495480694,
            "rmse": 0.0001931795278819851,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.22777705129158884,
          0.22883988913778316
        ],
        "leave_one_out_A_span_over_observed_loss_span": 0.023519033005972564,
        "sensitive_to_checkpoint_selection": false,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    },
    "super_skeleton": {
      "asymptote": 0.21832439106423587,
      "coefficients": {
        "A": 0.21832439106423587,
        "B": 0.06568026124967681,
        "c": 0.6640084680543962
      },
      "rmse": 0.0004007016839911938,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.6553423230988707,
          0.6730674999305021
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.2183243911978963,
            "B": 0.0656802611551469,
            "c": 0.6640084727893771
          },
          "best_sse": 8.028091977668841e-07,
          "absolute_sse_difference": 8.682087709356578e-21,
          "all_starts_sse_range": [
            8.028091977668841e-07,
            0.002253482563673066
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.2183243912381057,
        "broader_search_sse": 8.028091977668848e-07,
        "unconstrained_A": 0.21832439106423587,
        "unconstrained_sse": 8.028091977668928e-07,
        "paper_solver_absolute_A_difference": 1.978069652519565e-10,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.21763820041698584,
            "B": 0.06345440168138763,
            "c": 0.6218644628234645,
            "rmse": 0.0004128681498232807,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.21810082301000422,
            "B": 0.06592676157779186,
            "c": 0.6544240177972834,
            "rmse": 0.00043610207095389614,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.21829015555233128,
            "B": 0.06569557080145164,
            "c": 0.6603479647957141,
            "rmse": 0.00043751072512239,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.21773065118284354,
            "B": 0.0663025074223473,
            "c": 0.657036590513966,
            "rmse": 4.8602685216274224e-05,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.21968060445347196,
            "B": 0.06439054929349088,
            "c": 0.6949053642057262,
            "rmse": 0.00017254569734130246,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.21763820041698584,
          0.21968060445347196
        ],
        "leave_one_out_A_span_over_observed_loss_span": 0.032355552391449084,
        "sensitive_to_checkpoint_selection": false,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    }
  },
  "object": {
    "edge_skeleton": {
      "asymptote": 0.37328939418192797,
      "coefficients": {
        "A": 0.37328939418192797,
        "B": 0.035438474548071495,
        "c": 0.4425062672477992
      },
      "rmse": 0.0012076191493880434,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.3894532521288409,
          0.4985016193799253
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.3732893934020352,
            "B": 0.03543847518759541,
            "c": 0.44250624340010913
          },
          "best_sse": 7.291720049843413e-06,
          "absolute_sse_difference": 9.486769009248164e-20,
          "all_starts_sse_range": [
            7.291720049843413e-06,
            0.00035943676881513035
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.3732893938039391,
        "broader_search_sse": 7.291720049843523e-06,
        "unconstrained_A": 0.37328939418192797,
        "unconstrained_sse": 7.291720049843508e-06,
        "paper_solver_absolute_A_difference": 3.3854807846012136e-11,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.37803961749372306,
            "B": 0.05439496461769136,
            "c": 0.9258066198639753,
            "rmse": 9.112497609582479e-05,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.3768536239051381,
            "B": 0.031427278929011496,
            "c": 0.6207241329072142,
            "rmse": 0.0002518349902710143,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.3711195855841515,
            "B": 0.03741033845039949,
            "c": 0.3682577943785511,
            "rmse": 0.0009196890162514465,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.3739089046439351,
            "B": 0.034754227531383235,
            "c": 0.4461496940166998,
            "rmse": 0.0012622830474611415,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.365502714747665,
            "B": 0.043042292316923324,
            "c": 0.32178900277638434,
            "rmse": 0.000984139129023619,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.365502714747665,
          0.37803961749372306
        ],
        "leave_one_out_A_span_over_observed_loss_span": 0.42676005377215526,
        "sensitive_to_checkpoint_selection": false,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    },
    "nano_skeleton": {
      "asymptote": 0.3412796125434242,
      "coefficients": {
        "A": 0.3412796125434242,
        "B": 0.04956966318164409,
        "c": 0.4731308397279092
      },
      "rmse": 0.0016560087560743852,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.4135554458768461,
          0.5364635077250043
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.34127961264207346,
            "B": 0.049569663102485464,
            "c": 0.47313084215896273
          },
          "best_sse": 1.3711825000974767e-05,
          "absolute_sse_difference": 3.9810548520952116e-19,
          "all_starts_sse_range": [
            1.3711825000974767e-05,
            0.0008975095886235508
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.3412796124290428,
        "broader_search_sse": 1.3711825000975114e-05,
        "unconstrained_A": 0.3412796125434242,
        "unconstrained_sse": 1.3711825000975165e-05,
        "paper_solver_absolute_A_difference": 7.965036408208448e-10,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.21313341084553614,
            "B": 0.16242041491471987,
            "c": 0.0445461043366439,
            "rmse": 0.00039459199754334113,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.3327343526278969,
            "B": 0.05869785737468251,
            "c": 0.3276055076017248,
            "rmse": 0.00011687610715091962,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.34330550439954893,
            "B": 0.04795253637622979,
            "c": 0.5669801679497135,
            "rmse": 0.0010766786038084505,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.3405934811030153,
            "B": 0.05031216050889251,
            "c": 0.46881525494776255,
            "rmse": 0.0017832063982652715,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.3476539935450971,
            "B": 0.04354262041121081,
            "c": 0.6213800703604828,
            "rmse": 0.0013911383248896628,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.21313341084553614,
          0.3476539935450971
        ],
        "leave_one_out_A_span_over_observed_loss_span": 2.9360375964817087,
        "sensitive_to_checkpoint_selection": true,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    },
    "super_skeleton": {
      "asymptote": 0.32475181306641165,
      "coefficients": {
        "A": 0.32475181306641165,
        "B": 0.06754766950043059,
        "c": 0.5707085028758654
      },
      "rmse": 0.0009477937120142483,
      "n_observations": 5,
      "diagnostics": {
        "coefficient_boundary_hit": false,
        "exponent_boundary_hit": false,
        "profile_local_minimum_count": 1,
        "exponent_range_within_10_percent_min_sse": [
          0.5473095019628547,
          0.5929310595762999
        ],
        "multistart": {
          "starts": 18,
          "method": "18 overlapping bounded log-exponent brackets, with exact constrained linear projection",
          "best_coefficients": {
            "A": 0.32475181322612207,
            "B": 0.06754766938066686,
            "c": 0.5707085069691906
          },
          "best_sse": 4.491564602668765e-06,
          "absolute_sse_difference": 2.625802136488331e-20,
          "all_starts_sse_range": [
            4.491564602668765e-06,
            0.0020681077526856946
          ]
        },
        "broader_exponent_bounds": [
          0.0001,
          10.0
        ],
        "broader_search_A": 0.3247518130380121,
        "broader_search_sse": 4.491564602668726e-06,
        "unconstrained_A": 0.32475181306641165,
        "unconstrained_sse": 4.491564602668739e-06,
        "paper_solver_absolute_A_difference": 2.9920788069404125e-10,
        "leave_one_out": [
          {
            "omitted_hours": 300,
            "A": 0.319825027568132,
            "B": 0.06290292953473192,
            "c": 0.4185321554073131,
            "rmse": 0.0007665925155909585,
            "boundary_hit": false
          },
          {
            "omitted_hours": 1000,
            "A": 0.32316572103888,
            "B": 0.06927839188065342,
            "c": 0.528379266936894,
            "rmse": 0.0008989216959428502,
            "boundary_hit": false
          },
          {
            "omitted_hours": 3000,
            "A": 0.3248029247023265,
            "B": 0.06751071383769122,
            "c": 0.5731910418293561,
            "rmse": 0.0010579130536994509,
            "boundary_hit": false
          },
          {
            "omitted_hours": 10000,
            "A": 0.32341718642180567,
            "B": 0.06896741553482888,
            "c": 0.5603625324967417,
            "rmse": 0.00040911073974027524,
            "boundary_hit": false
          },
          {
            "omitted_hours": 30000,
            "A": 0.3289342997932236,
            "B": 0.06357176009006603,
            "c": 0.6511958421937777,
            "rmse": 8.280581714315492e-05,
            "boundary_hit": false
          }
        ],
        "leave_one_out_A_range": [
          0.319825027568132,
          0.3289342997932236
        ],
        "leave_one_out_A_span_over_observed_loss_span": 0.14221065412112174,
        "sensitive_to_checkpoint_selection": false,
        "sensitivity_rule": "Flag when leave-one-out A range exceeds the entire observed loss range, or any leave-one-out fit reaches a bound. Descriptive heuristic, not statistical significance.",
        "profile_note": "The 10%-of-minimum-SSE exponent range is an objective-function diagnostic, not a confidence interval.",
        "identification_note": "Five checkpoints and three fit parameters leave only two residual degrees of freedom; fitted A is not an established irreducible error floor."
      }
    }
  },
  "shared_y_domain": [
    0.2,
    0.45
  ],
  "source": {
    "definition": "Horizontal asymptotes fitted independently to five measured GT-region LPIPS checkpoints.",
    "formula": "L(h)=A+B*(h/300)^(-c)",
    "provenance": "data/lpips-fit-provenance.json",
    "provenance_sha256": "4364b571fc5f6029503a954c701854ce0219e33e51e2783282c4f8eef52b09c4",
    "measured_data_sha256": "99d6d396faea4f0687ae10adc120c1a46aeead525a30d5a615eeeac922ec6e14",
    "measured_provenance_sha256": "ab6049821324afd370c898dbad7e6e87d93fe3349569fc6f239b42bfbbe37f63",
    "observations_per_fit": 5,
    "frame_indices": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "is_measurement": false,
    "fit_selection": "SCS-matched skeleton-only",
    "selected_models": [
      "edge-skeleton",
      "nano-skeleton",
      "super-skeleton"
    ],
    "warning": "Model-dependent fitted asymptotes; not measured or statistically established error floors."
  }
};

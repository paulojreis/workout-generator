export const EXERCISE_DATABASE_JSON = `
{
  "exercises": {
    "chest": [
      {
        "id": "chest_001",
        "name": "Barbell Bench Press",
        "category": "compound",
        "equipment": ["barbell", "bench", "rack"],
        "primary": ["chest_middle"],
        "secondary": ["triceps", "front_delts"],
        "description": "The king of chest exercises. Lie on bench and press loaded barbell from chest to full arm extension. Builds massive chest, shoulder, and tricep strength while engaging your entire body for stability."
      },
      {
        "id": "chest_002",
        "name": "Incline Dumbbell Press",
        "category": "compound",
        "equipment": ["dumbbells", "incline_bench"],
        "primary": ["chest_upper"],
        "secondary": ["front_delts", "triceps"],
        "description": "Target upper chest by pressing dumbbells on an inclined bench (30-45°). Allows greater range of motion than barbell variation and helps develop balanced chest development from top to bottom."
      },
      {
        "id": "chest_003",
        "name": "Cable Crossover",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["chest_middle"],
        "secondary": ["chest_lower", "chest_upper"],
        "description": "Stand between cable stacks and bring handles together in hugging motion. Provides constant tension throughout movement, creating intense pump and helping sculpt chest definition and inner chest."
      },
      {
        "id": "chest_004",
        "name": "Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["chest_middle"],
        "secondary": ["triceps", "front_delts"],
        "description": "Classic bodyweight exercise building functional pushing strength. Keep body straight as you lower to ground and press back up. Perfect for home workouts and can be modified for any fitness level."
      },
      {
        "id": "chest_005",
        "name": "Chest Dips",
        "category": "compound",
        "equipment": ["dip_bars"],
        "primary": ["chest_lower"],
        "secondary": ["triceps", "front_delts"],
        "description": "Lean forward on dip bars to emphasize chest over triceps. Lower until you feel chest stretch, then drive back up. Excellent for building lower chest mass and overall pushing power."
      },
      {
        "id": "chest_006",
        "name": "Dumbbell Flyes",
        "category": "isolation",
        "equipment": ["dumbbells", "bench"],
        "primary": ["chest_middle"],
        "secondary": ["chest_upper", "chest_lower"],
        "description": "Lie on bench with dumbbells, lower weights in wide arc until chest stretch is felt, then return. Isolates pectorals for focused development and creates excellent muscle stretch and contraction."
      },
      {
        "id": "chest_007",
        "name": "Decline Barbell Press",
        "category": "compound",
        "equipment": ["barbell", "decline_bench", "rack"],
        "primary": ["chest_lower"],
        "secondary": ["chest_middle", "triceps"],
        "description": "Press barbell while lying on decline bench, targeting lower chest fibers. Allows heavier loads than flat bench for some lifters and provides unique angle for complete chest development."
      },
      {
        "id": "chest_008",
        "name": "Pec Deck Machine",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["chest_middle"],
        "secondary": ["chest_inner"],
        "description": "Sit at machine and bring arms together in controlled arc. Eliminates stability requirements allowing complete focus on chest contraction. Great for beginners and finishing chest workouts."
      },
      {
        "id": "chest_009",
        "name": "Landmine Press",
        "category": "compound",
        "equipment": ["barbell", "landmine"],
        "primary": ["chest_upper"],
        "secondary": ["front_delts", "triceps"],
        "description": "Press barbell anchored at landmine attachment at an angle. Unique pressing angle that's shoulder-friendly while building functional strength. Great for athletes and those with shoulder issues."
      },
      {
        "id": "chest_010",
        "name": "Diamond Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["chest_inner", "triceps"],
        "secondary": ["chest_middle"],
        "description": "Form diamond shape with hands and perform push-ups. Shifts emphasis to inner chest and triceps while maintaining bodyweight training benefits. Excellent for pressing strength and definition."
      },
      {
        "id": "chest_011",
        "name": "Wide-Grip Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["chest_outer"],
        "secondary": ["chest_middle"],
        "description": "Place hands wider than shoulder-width for push-ups. Emphasizes outer chest and creates greater stretch. Excellent variation for targeting different chest fibers and preventing adaptation."
      },
      {
        "id": "chest_012",
        "name": "Incline Push-Ups",
        "category": "compound",
        "equipment": ["bench"],
        "primary": ["chest_lower"],
        "secondary": ["triceps"],
        "description": "Hands elevated on bench, feet on ground. Easier variation targeting lower chest. Perfect for beginners or as high-rep finisher. Adjust bench height to modify difficulty level."
      },
      {
        "id": "chest_013",
        "name": "Decline Push-Ups",
        "category": "compound",
        "equipment": ["bench"],
        "primary": ["chest_upper"],
        "secondary": ["front_delts", "triceps"],
        "description": "Feet elevated on bench, hands on ground. Advanced variation emphasizing upper chest and shoulders. Increases difficulty and shifts angle to target clavicular head of pectorals."
      },
      {
        "id": "chest_014",
        "name": "Cable Flyes",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["chest_middle"],
        "secondary": [],
        "description": "Perform flyes using cables for constant tension. Superior to dumbbells for maintaining tension throughout entire range of motion. Adjust cable height to target different chest areas."
      },
      {
        "id": "chest_015",
        "name": "Hex Press",
        "category": "compound",
        "equipment": ["dumbbells", "bench"],
        "primary": ["chest_inner"],
        "secondary": ["triceps"],
        "description": "Press dumbbells together with neutral grip throughout movement. Creates intense inner chest contraction while reducing shoulder stress. Excellent for building chest thickness and tricep strength."
      },
      {
        "id": "chest_016",
        "name": "Svend Press",
        "category": "isolation",
        "equipment": ["weight_plate"],
        "primary": ["chest_inner"],
        "secondary": [],
        "description": "Press weight plates together at chest level and extend arms forward. Creates intense isometric chest contraction. Unique exercise for inner chest development and mind-muscle connection."
      },
      {
        "id": "chest_017",
        "name": "Floor Press",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["chest_middle"],
        "secondary": ["triceps"],
        "description": "Bench press performed lying on floor, limiting range of motion. Removes leg drive and focuses on lockout strength. Excellent for breaking through bench press plateaus and tricep development."
      },
      {
        "id": "chest_018",
        "name": "Single-Arm Dumbbell Press",
        "category": "compound",
        "equipment": ["dumbbell", "bench"],
        "primary": ["chest_middle"],
        "secondary": ["triceps", "core"],
        "description": "Press one dumbbell at a time while stabilizing core. Identifies and corrects imbalances while building anti-rotation strength. Great for athletes needing unilateral power development."
      },
      {
        "id": "chest_019",
        "name": "Machine Chest Press",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["chest_middle"],
        "secondary": ["triceps", "front_delts"],
        "description": "Seated or lying machine press with guided path. Perfect for beginners learning movement patterns or advanced lifters training to failure safely. Allows focus on muscle without stability concerns."
      },
      {
        "id": "chest_020",
        "name": "Squeeze Press",
        "category": "compound",
        "equipment": ["dumbbells", "bench"],
        "primary": ["chest_inner"],
        "secondary": ["triceps"],
        "description": "Press dumbbells while actively squeezing them together throughout movement. Combines pressing with isometric contraction for intense inner chest activation and improved mind-muscle connection."
      }
    ],
    "back": [
      {
        "id": "back_001",
        "name": "Pull-Ups",
        "category": "compound",
        "equipment": ["pull_up_bar"],
        "primary": ["lats", "middle_back"],
        "secondary": ["biceps", "rhomboids"],
        "description": "Hang from bar with overhand grip and pull body up until chin clears bar. The ultimate test of relative strength that builds impressive back width and arm strength. Master of bodyweight exercises."
      },
      {
        "id": "back_002",
        "name": "Barbell Row",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["rhomboids", "middle_back", "lats"],
        "secondary": ["biceps", "rear_delts"],
        "description": "Bend forward holding barbell and row to lower chest. Builds thick, powerful back muscles and improves posture. Essential for balanced development with pressing movements."
      },
      {
        "id": "back_003",
        "name": "Deadlift",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["lower_back", "glutes", "hamstrings"],
        "secondary": ["traps", "lats", "quads"],
        "description": "Lift loaded barbell from floor to hip level. The king of all exercises working more muscles than any other movement. Builds total body strength, muscle mass, and athletic power."
      },
      {
        "id": "back_004",
        "name": "Cable Row",
        "category": "compound",
        "equipment": ["cable_machine"],
        "primary": ["rhomboids", "middle_back"],
        "secondary": ["lats", "biceps"],
        "description": "Seated cable row pulling handle to midsection. Provides constant tension and allows various grip positions. Excellent for building back thickness and improving posture through controlled movement."
      },
      {
        "id": "back_005",
        "name": "T-Bar Row",
        "category": "compound",
        "equipment": ["barbell", "landmine"],
        "primary": ["middle_back", "rhomboids"],
        "secondary": ["lats", "biceps"],
        "description": "Row barbell secured at landmine or T-bar attachment. Allows heavy loading with reduced lower back stress. Builds impressive back thickness and creates dense, muscular look."
      },
      {
        "id": "back_006",
        "name": "Dumbbell Row",
        "category": "compound",
        "equipment": ["dumbbells", "bench"],
        "primary": ["lats", "rhomboids"],
        "secondary": ["biceps", "middle_back"],
        "description": "Support body on bench and row dumbbell to hip. Allows unilateral training to correct imbalances. Great range of motion with reduced lower back stress while building serious muscle."
      },
      {
        "id": "back_007",
        "name": "Rack Pulls",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["traps", "upper_back"],
        "secondary": ["lats", "rhomboids", "lower_back"],
        "description": "Partial deadlift from knee height in power rack. Allows heavier loads than full deadlift for massive trap and upper back development. Builds incredible pulling power and grip strength."
      },
      {
        "id": "back_008",
        "name": "Chin-Ups",
        "category": "compound",
        "equipment": ["pull_up_bar"],
        "primary": ["lats", "biceps"],
        "secondary": ["middle_back", "rhomboids"],
        "description": "Pull-up variation with underhand grip. Places more emphasis on biceps while still building impressive lat width. Often easier than pull-ups, making it great for progression."
      },
      {
        "id": "back_009",
        "name": "Pendlay Row",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["middle_back", "lats"],
        "secondary": ["biceps", "rear_delts", "rhomboids"],
        "description": "Strict barbell row from floor with torso parallel to ground. Each rep starts from dead stop, eliminating momentum. Builds explosive pulling power and thick back musculature."
      },
      {
        "id": "back_010",
        "name": "Inverted Row",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["middle_back", "lats"],
        "secondary": ["biceps", "rhomboids"],
        "description": "Horizontal pull-up holding bar underneath. Adjustable difficulty by changing body angle. Perfect for building pulling strength when regular pull-ups are too challenging."
      },
      {
        "id": "back_011",
        "name": "Kroc Row",
        "category": "compound",
        "equipment": ["dumbbell"],
        "primary": ["lats", "middle_back"],
        "secondary": ["biceps", "grip"],
        "description": "High-rep, heavy dumbbell rows with controlled cheating. Uses momentum strategically for overload. Builds incredible back thickness, grip strength, and muscular endurance."
      },
      {
        "id": "back_012",
        "name": "Chest-Supported Row",
        "category": "compound",
        "equipment": ["dumbbells", "incline_bench"],
        "primary": ["rhomboids", "middle_back"],
        "secondary": ["lats", "rear_delts"],
        "description": "Row weights while lying face down on incline bench. Eliminates lower back stress and momentum. Perfect for isolating back muscles and maintaining strict form throughout set."
      },
      {
        "id": "back_013",
        "name": "Meadows Row",
        "category": "compound",
        "equipment": ["barbell", "landmine"],
        "primary": ["lats", "middle_back"],
        "secondary": ["biceps", "rear_delts"],
        "description": "Single-arm landmine row standing perpendicular to bar. Unique angle provides incredible lat stretch and contraction. Named after bodybuilder John Meadows, excellent for back thickness."
      },
      {
        "id": "back_014",
        "name": "Seal Row",
        "category": "compound",
        "equipment": ["barbell", "bench"],
        "primary": ["middle_back", "rhomboids"],
        "secondary": ["lats", "rear_delts"],
        "description": "Row barbell while lying on elevated bench. Completely eliminates momentum and lower back involvement. Pure back exercise for maximum muscle isolation."
      },
      {
        "id": "back_015",
        "name": "Yates Row",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["lats", "middle_back"],
        "secondary": ["biceps", "traps"],
        "description": "Underhand barbell row with more upright torso. Named after Dorian Yates, emphasizes lats and allows heavier weight. Less lower back stress than conventional rows."
      }
    ],
    "lats": [
      {
        "id": "lats_001",
        "name": "Lat Pulldown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": ["biceps"],
        "description": "Pull cable bar down to upper chest while seated. Excellent pull-up alternative allowing progressive overload. Targets lats for that impressive V-taper look while building pulling strength."
      },
      {
        "id": "lats_002",
        "name": "Straight Arm Pulldown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": [],
        "description": "Pull cable down with straight arms in arc motion. Isolates lats without bicep involvement. Excellent for improving lat activation and creating mind-muscle connection before compound movements."
      },
      {
        "id": "lats_003",
        "name": "Cable Pullover",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": ["triceps", "chest"],
        "description": "Pull cable from overhead to waist level with slight arm bend. Unique lat exercise that also stretches chest. Creates excellent lat activation and helps improve overhead mobility."
      },
      {
        "id": "lats_004",
        "name": "Wide-Grip Pulldown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": ["rhomboids"],
        "description": "Lat pulldown with hands wider than shoulders. Emphasizes lat width and reduces bicep involvement. Creates that coveted V-taper by targeting outer lat fibers more effectively."
      },
      {
        "id": "lats_005",
        "name": "Close-Grip Pulldown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": ["biceps", "middle_back"],
        "description": "Pulldown with close grip for different lat angle. Allows heavier weight and more bicep involvement. Builds lat thickness and creates complete back development."
      },
      {
        "id": "lats_006",
        "name": "Single-Arm Pulldown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": [],
        "description": "Unilateral cable pulldown for lat isolation. Identifies and corrects imbalances between sides. Allows for greater range of motion and mind-muscle connection."
      },
      {
        "id": "lats_007",
        "name": "Kayak Rows",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["lats"],
        "secondary": ["obliques"],
        "description": "Alternating pulling motion mimicking kayak paddling. Combines lat work with core rotation. Functional exercise building pulling strength and rotational power."
      }
    ],
    "traps": [
      {
        "id": "traps_001",
        "name": "Barbell Shrugs",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Elevate shoulders straight up holding barbell. Classic trap builder for that yoked appearance. Use heavy weight with controlled tempo for maximum development."
      },
      {
        "id": "traps_002",
        "name": "Dumbbell Shrugs",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Shrug shoulders with dumbbells at sides. Allows for slightly better range of motion than barbell. Focus on straight up and down movement, not rolling shoulders."
      },
      {
        "id": "traps_003",
        "name": "Cable Shrugs",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Shrugs using cable for constant tension. Different resistance curve than free weights. Perfect for drop sets and high-rep burnouts."
      },
      {
        "id": "traps_004",
        "name": "Trap Bar Shrugs",
        "category": "isolation",
        "equipment": ["trap_bar"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Shrugs using hexagonal trap bar. More comfortable hand position and centered weight distribution. Allows for heaviest loading of all shrug variations."
      },
      {
        "id": "traps_005",
        "name": "Behind-the-Back Shrugs",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Barbell shrugs with bar held behind body. Slightly different angle hitting traps uniquely. Prevents leaning forward and cheating the movement."
      },
      {
        "id": "traps_006",
        "name": "Overhead Shrugs",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["traps"],
        "secondary": ["core"],
        "description": "Shrug weight while holding barbell overhead. Works upper traps while challenging stability. Advanced exercise requiring good shoulder mobility."
      },
      {
        "id": "traps_007",
        "name": "Power Shrugs",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["traps"],
        "secondary": [],
        "description": "Explosive shrugs using momentum from hips. Allows heavier weight for overload. Popular with athletes for building power and size."
      }
    ],
    "rhomboids": [
      {
        "id": "rhomboids_001",
        "name": "Face Pulls",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["rhomboids", "rear_delts"],
        "secondary": ["traps"],
        "description": "Pull rope to face level with elbows high. Targets rear delts and upper back for improved posture. Essential for balancing pressing movements and preventing injuries."
      },
      {
        "id": "rhomboids_002",
        "name": "Band Pull-Aparts",
        "category": "isolation",
        "equipment": ["resistance_band"],
        "primary": ["rhomboids", "rear_delts"],
        "secondary": [],
        "description": "Pull resistance band apart at chest level. High-rep exercise perfect for shoulder health and posture. Can be done anywhere, ideal for warm-ups or active recovery."
      },
      {
        "id": "rhomboids_003",
        "name": "Prone Y-Raises",
        "category": "isolation",
        "equipment": ["dumbbells", "bench"],
        "primary": ["rhomboids", "lower_traps"],
        "secondary": [],
        "description": "Lying face down, raise arms forming Y shape. Targets often-neglected lower traps and rhomboids. Excellent for posture and shoulder stability."
      },
      {
        "id": "rhomboids_004",
        "name": "Reverse Cable Flyes",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["rhomboids", "rear_delts"],
        "secondary": [],
        "description": "Pull cables back in reverse fly motion. Constant tension on rhomboids and rear delts. Perfect for building upper back thickness and definition."
      },
      {
        "id": "rhomboids_005",
        "name": "Scapular Wall Slides",
        "category": "activation",
        "equipment": ["bodyweight"],
        "primary": ["rhomboids", "lower_traps"],
        "secondary": [],
        "description": "Slide arms up wall while retracting shoulder blades. Corrective exercise for posture and shoulder health. Teaches proper scapular movement patterns."
      }
    ],
    "lower_back": [
      {
        "id": "lower_back_001",
        "name": "Hyperextensions",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["lower_back"],
        "secondary": ["glutes", "hamstrings"],
        "description": "Extend torso on hyperextension bench. Strengthens spinal erectors and helps prevent lower back pain. Essential for building strong posterior chain and improving deadlift."
      },
      {
        "id": "lower_back_002",
        "name": "Good Mornings",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["lower_back", "hamstrings"],
        "secondary": ["glutes"],
        "description": "Hip hinge with barbell on back. Old-school posterior chain builder. Use light weight with perfect form to avoid injury while building back strength."
      },
      {
        "id": "lower_back_003",
        "name": "Reverse Hyperextensions",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["lower_back", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Raise legs behind while torso stays fixed. Decompresses spine while strengthening. Popular in powerlifting for building bulletproof lower back."
      },
      {
        "id": "lower_back_004",
        "name": "Superman",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["lower_back"],
        "secondary": ["glutes"],
        "description": "Lying face down, raise chest and legs simultaneously. Bodyweight exercise for lower back strength. Can be done anywhere, perfect for home workouts."
      },
      {
        "id": "lower_back_005",
        "name": "Bird Dog",
        "category": "stability",
        "equipment": ["bodyweight"],
        "primary": ["lower_back", "core"],
        "secondary": [],
        "description": "Extend opposite arm and leg from quadruped position. Builds core stability and lower back endurance. Excellent rehab and prehab exercise."
      },
      {
        "id": "lower_back_006",
        "name": "Jefferson Curl",
        "category": "mobility",
        "equipment": ["dumbbells"],
        "primary": ["lower_back"],
        "secondary": ["hamstrings"],
        "description": "Controlled spinal flexion with light weight. Controversial but effective for building resilient spine. Start very light and progress slowly."
      }
    ],
    "shoulders": [
      {
        "id": "shoulder_001",
        "name": "Overhead Press",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["triceps"],
        "description": "Press barbell from shoulders overhead. Builds boulder shoulders and tests true upper body strength. Standing variation engages core and creates functional, transferable strength."
      },
      {
        "id": "shoulder_002",
        "name": "Lateral Raises",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["middle_delts"],
        "secondary": [],
        "description": "Raise dumbbells to sides until parallel with shoulders. Creates width and caps to shoulders for impressive V-taper. Light weight with perfect form beats ego lifting for this movement."
      },
      {
        "id": "shoulder_003",
        "name": "Front Raises",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["front_delts"],
        "secondary": [],
        "description": "Raise weight forward to shoulder height with straight arms. Isolates front deltoids for complete shoulder development. Can be performed with various equipment for constant progression."
      },
      {
        "id": "shoulder_004",
        "name": "Rear Delt Flyes",
        "category": "isolation",
        "equipment": ["dumbbells", "bench"],
        "primary": ["rear_delts"],
        "secondary": [],
        "description": "Bent over, raise weights to sides targeting rear delts. Often neglected but crucial for balanced shoulders and posture. Helps prevent injuries and creates 3D shoulder development."
      },
      {
        "id": "shoulder_005",
        "name": "Arnold Press",
        "category": "compound",
        "equipment": ["dumbbells", "bench"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["triceps"],
        "description": "Rotating dumbbell press named after Arnold Schwarzenegger. Hits all three deltoid heads through full range of motion. Combines benefits of multiple exercises in one smooth movement."
      },
      {
        "id": "shoulder_006",
        "name": "Upright Row",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["middle_delts", "traps"],
        "secondary": ["biceps"],
        "description": "Pull weight up along body to chin level with elbows high. Works deltoids and traps simultaneously. Use proper form to avoid shoulder impingement while building impressive shoulders."
      },
      {
        "id": "shoulder_007",
        "name": "Cable Lateral Raise",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["middle_delts"],
        "secondary": [],
        "description": "Lateral raises using cable for constant tension. Superior to dumbbells for maintaining tension throughout entire range of motion. Perfect for creating burn and pump in medial delts."
      },
      {
        "id": "shoulder_008",
        "name": "Dumbbell Shoulder Press",
        "category": "compound",
        "equipment": ["dumbbells", "bench"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["triceps"],
        "description": "Press dumbbells overhead from shoulder position. Allows natural movement pattern and helps identify/correct imbalances. Builds functional pressing strength while developing impressive shoulders."
      },
      {
        "id": "shoulder_009",
        "name": "Handstand Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["triceps"],
        "description": "Advanced bodyweight exercise pressing body weight overhead while inverted. Builds incredible shoulder strength and stability. Ultimate test of relative strength and body control."
      },
      {
        "id": "shoulder_010",
        "name": "Machine Shoulder Press",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["triceps"],
        "description": "Press weight on shoulder press machine with guided path. Safe option for training to failure or beginners learning form. Allows heavy loading without balance requirements."
      },
      {
        "id": "shoulder_011",
        "name": "Pike Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["front_delts"],
        "secondary": ["triceps"],
        "description": "Push-up variation with hips high targeting shoulders. Great progression toward handstand push-ups. Adjustable difficulty by changing foot position and elevation."
      },
      {
        "id": "shoulder_012",
        "name": "Cable Front Raise",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["front_delts"],
        "secondary": [],
        "description": "Front raises using cable for constant tension. Smooth resistance curve maintains tension at all points. Excellent for front delt isolation and creating impressive shoulder definition."
      },
      {
        "id": "shoulder_013",
        "name": "Band Pull-Aparts",
        "category": "isolation",
        "equipment": ["resistance_band"],
        "primary": ["rear_delts"],
        "secondary": ["rhomboids"],
        "description": "Pull resistance band apart at chest level. High-rep exercise perfect for shoulder health and posture. Can be done anywhere, making it ideal for warm-ups or active recovery."
      },
      {
        "id": "shoulder_014",
        "name": "Behind-the-Neck Press",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["middle_delts", "rear_delts"],
        "secondary": ["triceps"],
        "description": "Press barbell from behind neck to overhead. Emphasizes middle and rear delts more than front press. Use caution and proper shoulder mobility to avoid injury."
      },
      {
        "id": "shoulder_015",
        "name": "Bradford Press",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["rear_delts"],
        "description": "Press barbell from front to back of head repeatedly. Unique exercise maintaining constant tension on all deltoid heads. Creates incredible burn and muscle endurance."
      },
      {
        "id": "shoulder_016",
        "name": "Lu Raises",
        "category": "isolation",
        "equipment": ["weight_plate"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": [],
        "description": "Hold plate with arms extended and raise overhead. Named after Olympic weightlifter Lu Xiaojun. Combines front and lateral raise for comprehensive shoulder development."
      },
      {
        "id": "shoulder_017",
        "name": "Cable Y-Raises",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["middle_delts", "rear_delts"],
        "secondary": ["lower_traps"],
        "description": "Raise cables up and out forming Y shape. Targets often-neglected lower traps and rear delts. Excellent for shoulder stability and preventing impingement issues."
      },
      {
        "id": "shoulder_018",
        "name": "Dumbbell Scaption",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["front_delts", "middle_delts"],
        "secondary": ["serratus"],
        "description": "Raise dumbbells at 30-degree angle from body (between front and lateral). Natural scapular plane movement reducing impingement risk. Great for shoulder health and balanced development."
      },
      {
        "id": "shoulder_019",
        "name": "Cuban Press",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["rear_delts", "rotator_cuff"],
        "secondary": ["middle_delts"],
        "description": "Complex movement combining upright row, external rotation, and press. Builds shoulder stability and rotator cuff strength. Excellent prehab exercise preventing shoulder injuries."
      },
      {
        "id": "shoulder_020",
        "name": "Monkey Raises",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["middle_delts", "rear_delts"],
        "secondary": [],
        "description": "Lateral raises with arms slightly behind body. Unique angle targets posterior portion of middle delts. Creates 3D shoulder appearance and improves shoulder aesthetics."
      }
    ],
    "legs": [
      {
        "id": "legs_001",
        "name": "Back Squat",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "The king of lower body exercises. Barbell on upper back, squat until thighs parallel to floor. Builds massive leg strength, muscle mass, and triggers whole-body growth through hormonal response."
      },
      {
        "id": "legs_002",
        "name": "Romanian Deadlift",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["hamstrings", "glutes"],
        "secondary": ["lower_back"],
        "description": "Lower barbell by pushing hips back with slight knee bend. Targets hamstrings and glutes while teaching proper hip hinge. Essential for building posterior chain strength and preventing injuries."
      },
      {
        "id": "legs_003",
        "name": "Leg Press",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": ["glutes", "hamstrings"],
        "description": "Press weight away using legs while seated in machine. Allows heavy loading without balance requirements. Perfect for building massive quad strength and size with reduced injury risk."
      },
      {
        "id": "legs_004",
        "name": "Lunges",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Step forward and lower until both knees at 90 degrees. Builds unilateral leg strength and improves balance. Functional movement that transfers to sports and daily activities."
      },
      {
        "id": "legs_005",
        "name": "Leg Curls",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["hamstrings"],
        "secondary": [],
        "description": "Curl weight using hamstrings while lying or seated. Isolates hamstrings for targeted development. Essential for balancing quad-dominant training and protecting knees from injury."
      },
      {
        "id": "legs_006",
        "name": "Leg Extensions",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Extend legs against resistance while seated. Isolates quadriceps for focused development. Great for pre-exhaust or finishing quad workouts with skin-splitting pump."
      },
      {
        "id": "legs_007",
        "name": "Calf Raises",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Rise onto toes against resistance. Simple yet effective for building stubborn calves. Use full range of motion with pause at top for maximum muscle activation."
      },
      {
        "id": "legs_008",
        "name": "Bulgarian Split Squats",
        "category": "compound",
        "equipment": ["bench", "dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Single-leg squat with rear foot elevated on bench. Brutal exercise building strength, balance, and muscle. Identifies and corrects imbalances while providing intense stimulus."
      },
      {
        "id": "legs_009",
        "name": "Hip Thrusts",
        "category": "compound",
        "equipment": ["barbell", "bench"],
        "primary": ["glutes"],
        "secondary": ["hamstrings"],
        "description": "Drive hips upward with shoulders on bench and barbell on hips. The best exercise for building powerful glutes. Improves athletic performance and creates aesthetic lower body."
      },
      {
        "id": "legs_010",
        "name": "Front Squat",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["quads"],
        "secondary": ["glutes", "core"],
        "description": "Squat with barbell in front rack position. Emphasizes quads while demanding core strength and mobility. Builds bulletproof legs and core while improving posture."
      },
      {
        "id": "legs_011",
        "name": "Goblet Squat",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["core"],
        "description": "Hold dumbbell at chest and squat. Teaches perfect squat form while building leg strength. Self-correcting movement pattern perfect for beginners and effective for all levels."
      },
      {
        "id": "legs_012",
        "name": "Walking Lunges",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Continuous lunges moving forward with each rep. Combines strength, balance, and cardiovascular challenge. Burns massive calories while building athletic legs."
      },
      {
        "id": "legs_013",
        "name": "Hack Squat",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Machine squat with back support and angled platform. Allows heavy loading with reduced spinal stress. Perfect for quad development with controlled movement path."
      },
      {
        "id": "legs_014",
        "name": "Step-Ups",
        "category": "compound",
        "equipment": ["box", "dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Step onto elevated platform one leg at a time. Functional exercise building unilateral strength and power. Height adjustable for different difficulty and muscle emphasis."
      },
      {
        "id": "legs_015",
        "name": "Nordic Curls",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["hamstrings"],
        "secondary": [],
        "description": "Control descent using hamstrings from kneeling position. Extremely challenging bodyweight hamstring exercise. Builds incredible eccentric strength and prevents hamstring injuries."
      },
      {
        "id": "legs_016",
        "name": "Box Jumps",
        "category": "plyometric",
        "equipment": ["box"],
        "primary": ["quads", "glutes"],
        "secondary": ["calves"],
        "description": "Explosively jump onto elevated platform. Develops power, explosiveness, and athletic performance. Start low and progress height as technique and confidence improve."
      },
      {
        "id": "legs_017",
        "name": "Pistol Squats",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["quads", "glutes"],
        "secondary": ["core"],
        "description": "Single-leg squat with non-working leg extended forward. Advanced bodyweight exercise requiring strength, balance, and mobility. Ultimate test of unilateral leg strength."
      },
      {
        "id": "legs_018",
        "name": "Glute Bridge",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["glutes"],
        "secondary": ["hamstrings"],
        "description": "Lie on back and drive hips upward. Beginner-friendly glute exercise that can be progressed with weight. Excellent for glute activation and building foundation for hip thrusts."
      },
      {
        "id": "legs_019",
        "name": "Sissy Squat",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Lean back while bending knees and rising on toes. Intense quadriceps isolation exercise. Creates incredible quad burn and separation when performed correctly."
      },
      {
        "id": "legs_020",
        "name": "Good Mornings",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["hamstrings", "lower_back"],
        "secondary": ["glutes"],
        "description": "Hinge at hips with barbell on back. Strengthens entire posterior chain while teaching hip hinge pattern. Use light weight and perfect form to avoid injury."
      },
      {
        "id": "legs_021",
        "name": "Reverse Lunges",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Step backward into lunge position. Easier on knees than forward lunges while building same muscles. Great for those with knee issues or learning lunge pattern."
      },
      {
        "id": "legs_022",
        "name": "Zercher Squat",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["quads", "glutes"],
        "secondary": ["core", "upper_back"],
        "description": "Squat with barbell held in elbow crooks. Unique squat variation that crushes core and upper back. Builds functional strength and mental toughness."
      },
      {
        "id": "legs_023",
        "name": "Split Squat",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads", "glutes"],
        "secondary": ["hamstrings"],
        "description": "Static lunge position, move up and down without stepping. Builds unilateral strength with less balance challenge than lunges. Perfect for identifying and correcting imbalances."
      },
      {
        "id": "legs_024",
        "name": "Wall Sits",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Hold squat position with back against wall. Isometric exercise building muscular endurance and mental toughness. Adjust time and depth for different difficulty levels."
      },
      {
        "id": "legs_025",
        "name": "Single-Leg Deadlift",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["hamstrings", "glutes"],
        "secondary": ["core"],
        "description": "Deadlift standing on one leg. Challenges balance while building unilateral posterior chain strength. Excellent for runners and athletes needing single-leg stability."
      }
    ],
    "biceps": [
      {
        "id": "biceps_001",
        "name": "Barbell Curl",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Stand and curl barbell from thighs to shoulders. The classic mass-builder for biceps allowing heavy progressive overload. Use strict form to maximize bicep activation and build impressive arms."
      },
      {
        "id": "biceps_002",
        "name": "Hammer Curl",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["biceps", "brachialis"],
        "secondary": ["forearms"],
        "description": "Curl dumbbells with neutral grip (palms facing). Builds biceps and brachialis for complete arm development. Creates arm thickness and improves grip strength."
      },
      {
        "id": "biceps_003",
        "name": "Preacher Curl",
        "category": "isolation",
        "equipment": ["barbell", "preacher_bench"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Curl with arms supported on angled bench. Eliminates momentum and creates intense bicep isolation. Perfect for creating bicep peak and ensuring strict form."
      },
      {
        "id": "biceps_004",
        "name": "Cable Curl",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Curl cable attachment from low position. Provides constant tension throughout entire range of motion. Perfect for drop sets and achieving maximum pump."
      },
      {
        "id": "biceps_005",
        "name": "Concentration Curl",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Seated curl with elbow braced against inner thigh. Arnold's favorite for bicep peak. Maximum isolation and mind-muscle connection for detailed arm development."
      },
      {
        "id": "biceps_006",
        "name": "Chin-Ups",
        "category": "compound",
        "equipment": ["pull_up_bar"],
        "primary": ["biceps", "lats"],
        "secondary": ["middle_back"],
        "description": "Pull-up with underhand grip emphasizing biceps. Builds functional pulling strength while developing impressive arms. Often easier than pull-ups for beginners."
      },
      {
        "id": "biceps_007",
        "name": "Spider Curls",
        "category": "isolation",
        "equipment": ["dumbbells", "incline_bench"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Curl lying face down on incline bench. Eliminates momentum and creates constant tension. Unique angle provides intense peak contraction for bicep development."
      },
      {
        "id": "biceps_008",
        "name": "21s",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "7 bottom half reps, 7 top half reps, 7 full reps. Classic intensity technique creating massive pump. Burns biceps from multiple angles in one brutal set."
      },
      {
        "id": "biceps_009",
        "name": "Zottman Curl",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["biceps"],
        "secondary": ["forearms"],
        "description": "Curl up with palms up, lower with palms down. Works biceps concentrically and forearms eccentrically. Two exercises in one for complete arm development."
      },
      {
        "id": "biceps_010",
        "name": "Cable Hammer Curl",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["biceps", "brachialis"],
        "secondary": [],
        "description": "Rope hammer curls using cable. Constant tension on brachialis and biceps. Builds arm thickness while being easier on wrists than free weights."
      },
      {
        "id": "biceps_011",
        "name": "Incline Dumbbell Curl",
        "category": "isolation",
        "equipment": ["dumbbells", "incline_bench"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Curl dumbbells lying on incline bench. Creates intense stretch on biceps long head. Builds fuller biceps by targeting often-neglected muscle fibers."
      },
      {
        "id": "biceps_012",
        "name": "Drag Curl",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Drag barbell up body keeping elbows back. Unique movement pattern emphasizing bicep peak. Eliminates front delt involvement for pure bicep isolation."
      },
      {
        "id": "biceps_013",
        "name": "Cross-Body Hammer Curl",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["biceps", "brachialis"],
        "secondary": [],
        "description": "Curl dumbbell across body toward opposite shoulder. Targets long head of biceps and brachialis. Creates impressive arm thickness and peak."
      },
      {
        "id": "biceps_014",
        "name": "Machine Curl",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["biceps"],
        "secondary": [],
        "description": "Curl weight on bicep machine. Perfect for beginners or training to failure safely. Consistent resistance curve and no stabilization required."
      },
      {
        "id": "biceps_015",
        "name": "Reverse Curl",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["brachioradialis", "biceps"],
        "secondary": ["forearms"],
        "description": "Curl barbell with overhand grip. Targets brachioradialis and forearms while working biceps. Builds complete arm development and grip strength."
      }
    ],
    "triceps": [
      {
        "id": "triceps_001",
        "name": "Tricep Pushdown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Push cable down by extending elbows. One of the best exercises for tricep isolation. Use various attachments to hit triceps from different angles."
      },
      {
        "id": "triceps_002",
        "name": "Overhead Tricep Extension",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Extend weight overhead targeting long head. Creates complete tricep development and impressive arm size. The stretch position maximizes muscle activation."
      },
      {
        "id": "triceps_003",
        "name": "Close-Grip Bench Press",
        "category": "compound",
        "equipment": ["barbell", "bench", "rack"],
        "primary": ["triceps"],
        "secondary": ["chest", "front_delts"],
        "description": "Bench press with hands closer together. Builds serious tricep mass and strength. Essential compound movement for building bigger, stronger arms."
      },
      {
        "id": "triceps_004",
        "name": "Dips",
        "category": "compound",
        "equipment": ["dip_bars"],
        "primary": ["triceps"],
        "secondary": ["chest_lower", "front_delts"],
        "description": "Lower and raise body on parallel bars. Stay upright to emphasize triceps. Builds incredible pressing strength and muscle mass."
      },
      {
        "id": "triceps_005",
        "name": "Tricep Kickback",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Extend arm backward while bent over. Creates intense peak contraction in triceps. Light weight with perfect form for maximum muscle activation."
      },
      {
        "id": "triceps_006",
        "name": "Diamond Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["triceps"],
        "secondary": ["chest_inner"],
        "description": "Push-ups with hands forming diamond. Bodyweight tricep destroyer. Perfect for home workouts or finishing arms with brutal pump."
      },
      {
        "id": "triceps_007",
        "name": "Skull Crushers",
        "category": "isolation",
        "equipment": ["barbell", "bench"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Lower weight to forehead by bending elbows. Classic tricep mass builder targeting long head. Use EZ-bar to reduce wrist strain."
      },
      {
        "id": "triceps_008",
        "name": "Cable Overhead Extension",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Overhead extension using cable for constant tension. Superior to free weights for maintaining tension. Creates incredible stretch and contraction."
      },
      {
        "id": "triceps_009",
        "name": "Bench Dips",
        "category": "compound",
        "equipment": ["bench"],
        "primary": ["triceps"],
        "secondary": ["chest", "front_delts"],
        "description": "Dips with hands on bench behind you. Adjustable difficulty by changing foot position. Great bodyweight exercise for tricep development."
      },
      {
        "id": "triceps_010",
        "name": "JM Press",
        "category": "compound",
        "equipment": ["barbell", "bench"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Hybrid between close-grip bench and skull crusher. Named after powerlifter JM Blakley. Builds massive tricep strength and size."
      },
      {
        "id": "triceps_011",
        "name": "Rope Pushdown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Pushdown using rope attachment. Allows natural wrist rotation and spread at bottom. Creates intense peak contraction hitting all tricep heads."
      },
      {
        "id": "triceps_012",
        "name": "Single-Arm Pushdown",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Unilateral cable pushdown. Identifies and corrects imbalances. Allows for better mind-muscle connection and complete tricep development."
      },
      {
        "id": "triceps_013",
        "name": "Tate Press",
        "category": "isolation",
        "equipment": ["dumbbells", "bench"],
        "primary": ["triceps"],
        "secondary": [],
        "description": "Unique dumbbell movement with elbows flared. Targets lateral head of triceps. Creates horseshoe shape and adds detail to arms."
      },
      {
        "id": "triceps_014",
        "name": "California Press",
        "category": "compound",
        "equipment": ["barbell", "bench"],
        "primary": ["triceps"],
        "secondary": ["chest"],
        "description": "Close-grip press transitioning to skull crusher. Combines two exercises for maximum tricep activation. Builds strength through multiple movement patterns."
      },
      {
        "id": "triceps_015",
        "name": "Tiger Push-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["triceps"],
        "secondary": ["shoulders"],
        "description": "Push-up variation moving from forearms to hands. Intense tricep and core challenge. Advanced bodyweight exercise for serious arm development."
      }
    ],
    "abs": [
      {
        "id": "abs_001",
        "name": "Plank",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["abs", "core"],
        "secondary": [],
        "description": "Hold push-up position with straight body. Builds incredible core stability and endurance. Foundation of core strength that transfers to all exercises."
      },
      {
        "id": "abs_002",
        "name": "Crunches",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["abs"],
        "secondary": [],
        "description": "Classic ab exercise lifting shoulders off ground. Targets upper abs effectively. Focus on controlled movement and squeezing abs, not pulling on neck."
      },
      {
        "id": "abs_003",
        "name": "Russian Twist",
        "category": "rotation",
        "equipment": ["weight_plate"],
        "primary": ["obliques"],
        "secondary": ["abs"],
        "description": "Rotate torso side to side holding weight. Builds rotational strength and sculpts obliques. Essential for athletes and complete core development."
      },
      {
        "id": "abs_004",
        "name": "Leg Raises",
        "category": "hip_flexion",
        "equipment": ["bodyweight"],
        "primary": ["lower_abs"],
        "secondary": ["hip_flexors"],
        "description": "Raise legs while lying or hanging. Targets stubborn lower abs. Progress from lying to hanging for increased difficulty."
      },
      {
        "id": "abs_005",
        "name": "Cable Woodchoppers",
        "category": "rotation",
        "equipment": ["cable_machine"],
        "primary": ["obliques"],
        "secondary": ["abs"],
        "description": "Pull cable diagonally across body in chopping motion. Builds functional rotational power. Creates impressive oblique development through full range."
      },
      {
        "id": "abs_006",
        "name": "Ab Wheel Rollout",
        "category": "anti_extension",
        "equipment": ["ab_wheel"],
        "primary": ["abs"],
        "secondary": ["lats", "triceps"],
        "description": "Extend body forward using ab wheel. One of the most challenging core exercises. Builds incredible strength throughout entire core."
      },
      {
        "id": "abs_007",
        "name": "Side Plank",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["obliques"],
        "secondary": ["abs"],
        "description": "Hold body straight in side position. Builds lateral core stability and oblique endurance. Essential for preventing injuries and improving posture."
      },
      {
        "id": "abs_008",
        "name": "Bicycle Crunches",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["abs", "obliques"],
        "secondary": [],
        "description": "Alternate bringing knees to opposite elbows. Combines rotation with flexion for complete ab workout. High-rep burner creating impressive definition."
      },
      {
        "id": "abs_009",
        "name": "Dead Bug",
        "category": "stability",
        "equipment": ["bodyweight"],
        "primary": ["abs", "core"],
        "secondary": [],
        "description": "Lie on back, extend opposite arm and leg. Teaches core stability and coordination. Excellent for preventing lower back pain."
      },
      {
        "id": "abs_010",
        "name": "Mountain Climbers",
        "category": "dynamic",
        "equipment": ["bodyweight"],
        "primary": ["abs"],
        "secondary": ["hip_flexors"],
        "description": "Rapidly alternate bringing knees to chest in plank. Combines core strength with cardio. Burns calories while building abs."
      },
      {
        "id": "abs_011",
        "name": "Pallof Press",
        "category": "anti_rotation",
        "equipment": ["cable_machine"],
        "primary": ["obliques", "core"],
        "secondary": ["abs"],
        "description": "Press cable straight out resisting rotation. Builds incredible anti-rotation strength. Teaches body to resist unwanted movement."
      },
      {
        "id": "abs_012",
        "name": "Hanging Knee Raises",
        "category": "hip_flexion",
        "equipment": ["pull_up_bar"],
        "primary": ["lower_abs"],
        "secondary": ["hip_flexors"],
        "description": "Hang from bar and raise knees to chest. Builds lower abs and grip strength. Progress to straight legs for increased difficulty."
      },
      {
        "id": "abs_013",
        "name": "Cable Crunches",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["abs"],
        "secondary": [],
        "description": "Crunch using cable for resistance. Allows progressive overload unlike bodyweight crunches. Perfect for building thick, blocky abs."
      },
      {
        "id": "abs_014",
        "name": "V-Ups",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["abs"],
        "secondary": ["hip_flexors"],
        "description": "Simultaneously raise legs and torso forming V shape. Advanced exercise hitting entire abdominal wall. Requires flexibility and coordination."
      },
      {
        "id": "abs_015",
        "name": "Hollow Body Hold",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["abs", "core"],
        "secondary": [],
        "description": "Hold position with lower back pressed to floor. Gymnastic exercise building incredible core strength. Harder than it looks, humbling for beginners."
      },
      {
        "id": "abs_016",
        "name": "Dragon Flag",
        "category": "advanced",
        "equipment": ["bench"],
        "primary": ["abs", "core"],
        "secondary": [],
        "description": "Bruce Lee's favorite ab exercise. Lower body from vertical position keeping it straight. Extremely advanced requiring incredible core strength."
      },
      {
        "id": "abs_017",
        "name": "L-Sit",
        "category": "isometric",
        "equipment": ["dip_bars"],
        "primary": ["abs", "hip_flexors"],
        "secondary": [],
        "description": "Hold legs parallel to ground while supporting body. Gymnastic strength exercise. Builds incredible core and hip flexor strength."
      },
      {
        "id": "abs_018",
        "name": "Farmer's Walk",
        "category": "carry",
        "equipment": ["dumbbells"],
        "primary": ["core", "obliques"],
        "secondary": ["traps", "forearms"],
        "description": "Walk holding heavy weights at sides. Full-body exercise with intense core demands. Builds functional strength and mental toughness."
      },
      {
        "id": "abs_019",
        "name": "Turkish Get-Up",
        "category": "complex",
        "equipment": ["kettlebell"],
        "primary": ["core", "abs"],
        "secondary": ["shoulders", "hips"],
        "description": "Complex movement from lying to standing holding weight overhead. Tests and builds total-body coordination and core stability."
      },
      {
        "id": "abs_020",
        "name": "Landmine 180s",
        "category": "rotation",
        "equipment": ["barbell", "landmine"],
        "primary": ["obliques", "core"],
        "secondary": ["abs"],
        "description": "Rotate barbell side to side in half-circle motion. Builds rotational power and oblique strength. Great for athletes needing rotational power."
      }
    ],
    "forearms": [
      {
        "id": "forearms_001",
        "name": "Wrist Curls",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["forearms"],
        "secondary": [],
        "description": "Curl wrists upward with palms facing up. Basic forearm builder for flexor muscles. Use full range of motion for maximum development."
      },
      {
        "id": "forearms_002",
        "name": "Reverse Wrist Curls",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["forearms"],
        "secondary": [],
        "description": "Curl wrists upward with palms facing down. Targets extensor muscles on top of forearms. Essential for balanced forearm development."
      },
      {
        "id": "forearms_003",
        "name": "Farmer's Walk",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["forearms", "grip"],
        "secondary": ["traps", "core"],
        "description": "Walk holding heavy dumbbells at sides. Builds crushing grip strength and mental toughness. Simple but brutally effective for forearm development."
      },
      {
        "id": "forearms_004",
        "name": "Plate Pinch",
        "category": "isometric",
        "equipment": ["weight_plate"],
        "primary": ["forearms", "grip"],
        "secondary": [],
        "description": "Hold plates together using finger strength. Develops pinch grip and thumb strength. Unique exercise for complete grip development."
      },
      {
        "id": "forearms_005",
        "name": "Dead Hang",
        "category": "isometric",
        "equipment": ["pull_up_bar"],
        "primary": ["forearms", "grip"],
        "secondary": [],
        "description": "Simply hang from pull-up bar for time. Builds grip endurance and mental toughness. Foundation for all pulling exercises."
      },
      {
        "id": "forearms_006",
        "name": "Towel Pull-Ups",
        "category": "compound",
        "equipment": ["pull_up_bar", "towel"],
        "primary": ["forearms", "grip"],
        "secondary": ["lats", "biceps"],
        "description": "Pull-ups gripping towel draped over bar. Crushes forearms while building back. Advanced exercise for serious grip strength."
      },
      {
        "id": "forearms_007",
        "name": "Wrist Roller",
        "category": "isolation",
        "equipment": ["wrist_roller"],
        "primary": ["forearms"],
        "secondary": [],
        "description": "Roll weight up and down using wrist rotation. Intense forearm burn from continuous tension. Adjustable resistance for progressive overload."
      },
      {
        "id": "forearms_008",
        "name": "Behind-Back Barbell Curls",
        "category": "isolation",
        "equipment": ["barbell"],
        "primary": ["forearms"],
        "secondary": ["biceps"],
        "description": "Wrist curls with barbell held behind back. Unique angle for forearm development. Emphasizes brachioradialis and wrist flexors."
      },
      {
        "id": "forearms_009",
        "name": "Cable Hammer Curls",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["brachioradialis", "forearms"],
        "secondary": ["biceps"],
        "description": "Hammer curls using rope attachment. Constant tension on forearms and brachioradialis. Builds arm thickness and grip strength."
      },
      {
        "id": "forearms_010",
        "name": "Fat Bar Training",
        "category": "various",
        "equipment": ["thick_bar"],
        "primary": ["forearms", "grip"],
        "secondary": [],
        "description": "Any exercise using thicker bar diameter. Forces greater grip activation on all exercises. Simple way to add forearm work to regular training."
      }
    ],
    "calves": [
      {
        "id": "calves_001",
        "name": "Standing Calf Raises",
        "category": "isolation",
        "equipment": ["dumbbells"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Rise onto toes holding weight. Basic calf builder targeting gastrocnemius. Use full range of motion with pause at top for maximum growth."
      },
      {
        "id": "calves_002",
        "name": "Seated Calf Raises",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Calf raises while seated with weight on knees. Targets soleus muscle for complete calf development. Essential for building calf thickness."
      },
      {
        "id": "calves_003",
        "name": "Calf Press on Leg Press",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Press with toes on leg press machine. Allows heavy loading for stubborn calves. Use various foot positions for complete development."
      },
      {
        "id": "calves_004",
        "name": "Single-Leg Calf Raises",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Calf raises one leg at a time. Identifies and corrects imbalances. Can be done anywhere making it perfect for high-frequency training."
      },
      {
        "id": "calves_005",
        "name": "Jump Rope",
        "category": "cardio",
        "equipment": ["jump_rope"],
        "primary": ["calves"],
        "secondary": ["cardiovascular"],
        "description": "Classic cardio exercise hitting calves repeatedly. Builds calf endurance and coordination. Great warm-up or finisher for leg days."
      },
      {
        "id": "calves_006",
        "name": "Box Jumps",
        "category": "plyometric",
        "equipment": ["box"],
        "primary": ["calves", "quads"],
        "secondary": ["glutes"],
        "description": "Explosive jumps onto elevated platform. Develops calf power and explosiveness. Start low and progress height as technique improves."
      },
      {
        "id": "calves_007",
        "name": "Donkey Calf Raises",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Bent-over calf raises with weight on lower back. Arnold's favorite for massive calves. Unique angle providing intense stretch."
      },
      {
        "id": "calves_008",
        "name": "Farmer's Walk on Toes",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["calves"],
        "secondary": ["core", "grip"],
        "description": "Walk on tiptoes holding heavy weights. Combines calf work with functional training. Burns calves while building overall conditioning."
      },
      {
        "id": "calves_009",
        "name": "Calf Raise Hold",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Hold top position of calf raise for time. Builds muscular endurance and creates intense burn. Perfect finisher for stubborn calves."
      },
      {
        "id": "calves_010",
        "name": "Stair Calf Raises",
        "category": "isolation",
        "equipment": ["stairs"],
        "primary": ["calves"],
        "secondary": [],
        "description": "Calf raises on edge of stairs for deeper stretch. Greater range of motion than floor raises. Can be done anywhere with stairs available."
      }
    ],
    "glutes": [
      {
        "id": "glutes_001",
        "name": "Hip Thrusts",
        "category": "compound",
        "equipment": ["barbell", "bench"],
        "primary": ["glutes"],
        "secondary": ["hamstrings"],
        "description": "Drive hips up with shoulders on bench. The king of glute exercises. Builds powerful, well-developed glutes for aesthetics and performance."
      },
      {
        "id": "glutes_002",
        "name": "Glute Bridge",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["glutes"],
        "secondary": ["hamstrings"],
        "description": "Hip thrusts from floor position. Beginner-friendly glute builder. Can be progressed with weight or single-leg variations."
      },
      {
        "id": "glutes_003",
        "name": "Cable Pull-Through",
        "category": "compound",
        "equipment": ["cable_machine"],
        "primary": ["glutes"],
        "secondary": ["hamstrings"],
        "description": "Pull cable through legs using hip hinge. Teaches hip hinge pattern while building glutes. Constant tension throughout movement."
      },
      {
        "id": "glutes_004",
        "name": "Cable Kickbacks",
        "category": "isolation",
        "equipment": ["cable_machine"],
        "primary": ["glutes"],
        "secondary": [],
        "description": "Kick leg backward against cable resistance. Isolates glutes for focused development. Use various angles for complete glute activation."
      },
      {
        "id": "glutes_005",
        "name": "Clamshells",
        "category": "isolation",
        "equipment": ["resistance_band"],
        "primary": ["glute_medius"],
        "secondary": [],
        "description": "Open knees while lying on side. Targets often-neglected glute medius. Essential for hip stability and preventing knee injuries."
      },
      {
        "id": "glutes_006",
        "name": "Lateral Band Walks",
        "category": "activation",
        "equipment": ["resistance_band"],
        "primary": ["glute_medius"],
        "secondary": ["glute_minimus"],
        "description": "Walk sideways with band around legs. Activates glute medius and minimus. Perfect warm-up or burnout for complete glute development."
      },
      {
        "id": "glutes_007",
        "name": "Single-Leg Glute Bridge",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["glutes"],
        "secondary": ["core"],
        "description": "Glute bridge with one leg extended. Unilateral exercise identifying imbalances. Requires core stability while building each glute independently."
      },
      {
        "id": "glutes_008",
        "name": "Curtsy Lunges",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["glutes"],
        "secondary": ["quads"],
        "description": "Lunge crossing one leg behind the other. Unique angle targeting glute medius and maximus. Creates rounder, fuller glute development."
      },
      {
        "id": "glutes_009",
        "name": "Sumo Deadlift",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["glutes", "hamstrings"],
        "secondary": ["quads", "lower_back"],
        "description": "Wide-stance deadlift emphasizing glutes. Less lower back stress than conventional. Builds powerful hips and impressive glute development."
      },
      {
        "id": "glutes_010",
        "name": "Reverse Lunge to Knee Drive",
        "category": "compound",
        "equipment": ["bodyweight"],
        "primary": ["glutes"],
        "secondary": ["quads", "hip_flexors"],
        "description": "Reverse lunge immediately into knee raise. Dynamic exercise building glute power. Great for athletes needing explosive hip extension."
      }
    ],
    "hamstrings": [
      {
        "id": "hamstrings_001",
        "name": "Romanian Deadlift",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["hamstrings"],
        "secondary": ["glutes", "lower_back"],
        "description": "Hip hinge with slight knee bend. The best hamstring mass builder. Teaches proper hip hinge while building posterior chain."
      },
      {
        "id": "hamstrings_002",
        "name": "Lying Leg Curls",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["hamstrings"],
        "secondary": [],
        "description": "Curl weight lying face down. Classic hamstring isolation exercise. Focus on controlled negative for maximum muscle damage."
      },
      {
        "id": "hamstrings_003",
        "name": "Nordic Curls",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["hamstrings"],
        "secondary": [],
        "description": "Control descent from kneeling position. Extremely challenging bodyweight exercise. Builds incredible eccentric strength preventing injuries."
      },
      {
        "id": "hamstrings_004",
        "name": "Good Mornings",
        "category": "compound",
        "equipment": ["barbell"],
        "primary": ["hamstrings", "lower_back"],
        "secondary": ["glutes"],
        "description": "Hip hinge with barbell on back. Old-school posterior chain builder. Use light weight with perfect form to avoid injury."
      },
      {
        "id": "hamstrings_005",
        "name": "Stiff-Leg Deadlift",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["hamstrings"],
        "secondary": ["lower_back", "glutes"],
        "description": "Deadlift with minimal knee bend. Creates intense hamstring stretch. Excellent for hamstring flexibility and strength."
      },
      {
        "id": "hamstrings_006",
        "name": "Seated Leg Curls",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["hamstrings"],
        "secondary": [],
        "description": "Leg curls from seated position. Different angle than lying curls. Targets lower hamstring insertion more effectively."
      },
      {
        "id": "hamstrings_007",
        "name": "Single-Leg Romanian Deadlift",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["hamstrings"],
        "secondary": ["glutes", "core"],
        "description": "RDL standing on one leg. Challenges balance while building unilateral strength. Excellent for runners and athletes."
      },
      {
        "id": "hamstrings_008",
        "name": "Swiss Ball Curls",
        "category": "isolation",
        "equipment": ["swiss_ball"],
        "primary": ["hamstrings"],
        "secondary": ["glutes"],
        "description": "Curl heels to glutes using stability ball. Combines hamstring work with core stability. Great for home workouts."
      },
      {
        "id": "hamstrings_009",
        "name": "Glute-Ham Raise",
        "category": "compound",
        "equipment": ["ghd_machine"],
        "primary": ["hamstrings", "glutes"],
        "secondary": ["lower_back"],
        "description": "Specialized machine exercise for posterior chain. Builds incredible hamstring and glute strength. Common in athletic training facilities."
      },
      {
        "id": "hamstrings_010",
        "name": "Deficit Deadlift",
        "category": "compound",
        "equipment": ["barbell", "platform"],
        "primary": ["hamstrings", "glutes"],
        "secondary": ["lower_back", "traps"],
        "description": "Deadlift standing on elevated platform. Increased range of motion emphasizes hamstrings. Builds strength from disadvantaged position."
      }
    ],
    "quads": [
      {
        "id": "quads_001",
        "name": "Front Squat",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["quads"],
        "secondary": ["glutes", "core"],
        "description": "Squat with bar in front rack position. Quad-dominant squat variation. Builds incredible leg and core strength."
      },
      {
        "id": "quads_002",
        "name": "Leg Extensions",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Extend legs against resistance while seated. Pure quad isolation exercise. Perfect for pre-exhaust or finishing with pump."
      },
      {
        "id": "quads_003",
        "name": "Hack Squat",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Machine squat with back support. Allows heavy loading with reduced spinal stress. Excellent for building massive quads."
      },
      {
        "id": "quads_004",
        "name": "Sissy Squat",
        "category": "isolation",
        "equipment": ["bodyweight"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Lean back while bending knees. Intense quadriceps isolation. Creates incredible quad burn and separation."
      },
      {
        "id": "quads_005",
        "name": "Wall Sits",
        "category": "isometric",
        "equipment": ["bodyweight"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Hold squat position against wall. Isometric exercise building muscular endurance. Simple but brutally effective."
      },
      {
        "id": "quads_006",
        "name": "Cyclist Squat",
        "category": "compound",
        "equipment": ["dumbbells"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Squat with heels elevated on plates. Increases quad emphasis and reduces mobility requirements. Great for those with ankle restrictions."
      },
      {
        "id": "quads_007",
        "name": "Leg Press (High Foot Placement)",
        "category": "compound",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Leg press with feet high on platform. Emphasizes quads over glutes. Allows massive loading for quad development."
      },
      {
        "id": "quads_008",
        "name": "Single-Leg Extension",
        "category": "isolation",
        "equipment": ["machines"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Leg extensions one leg at a time. Identifies and corrects imbalances. Better mind-muscle connection than bilateral version."
      },
      {
        "id": "quads_009",
        "name": "Narrow-Stance Squat",
        "category": "compound",
        "equipment": ["barbell", "rack"],
        "primary": ["quads"],
        "secondary": ["glutes"],
        "description": "Squat with feet closer than hip-width. Increases quad emphasis over glutes. Requires good ankle and hip mobility."
      },
      {
        "id": "quads_010",
        "name": "Spanish Squat",
        "category": "isolation",
        "equipment": ["resistance_band"],
        "primary": ["quads"],
        "secondary": [],
        "description": "Squat with band behind knees pulling forward. Creates unique quad activation. Excellent for rehab and muscle activation."
      }
    ]
  },
  "metadata": {
    "version": "5.0",
    "total_exercises": 285,
    "last_updated": "2024-01-01",
    "muscle_groups": [
      "chest",
      "back",
      "lats",
      "traps",
      "rhomboids",
      "lower_back",
      "shoulders",
      "legs",
      "biceps",
      "triceps",
      "abs",
      "forearms",
      "calves",
      "glutes",
      "hamstrings",
      "quads"
    ],
    "organization": "Hybrid approach - compound movements in general categories, isolation exercises in specific muscle groups"
  }
}`;

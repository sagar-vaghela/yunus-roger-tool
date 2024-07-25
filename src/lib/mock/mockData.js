import { type } from "@testing-library/user-event/dist/type";

export const sidebarData = [
  {
    text: "Home",
  },
  {
    text: "Physical Assessments",
    subItems: [
      {
        text: "Visit Summary and Plan",
      },
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Goals and Interventions",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Mileage",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
  {
    text: "Plan Of Care",
    subItems: [
      {
        text: "Care coordination",
      },
      {
        text: "patient identifier",
      },
    ],
  },
];

export const questionData = [
  {
    id: 1,
    question:
      "SUMMARIZE THE EVENTS LEADING TO THE PATIENT'S REFERRAL TO HOME HEALTH AS IDENTIFIED ON THE CLINICAL COMMENT INTAKE NOTE:",
    type: "text",
  },
  {
    id: 2,
    question: "ARE FUTURE SKILLED NURSING VISITS PLANNED?",
    type: "radio",
    values: ["Yes", "NO"],
    subitems: {
      Yes: [
        {
          question:
            "WHAT IS THE FOCUS OF THE NEXT SKILLED NURSING VISIT (INCLUDE HANDS-ON SKILLS, TEACHING REQUIRED, IDENTIFIED BARRIERS, AND CLINICAL NEEDS):",
          type: "text",
        },
        {
          question:
            "ESTIMATE THE NUMBER OF NURSING VISITS THAT WILL ADDRESS THE FOCUS OF CARE FOR EACH 30-DAY PERIOD. VISIT REQUEST IS ENTERED FOR CONSIDERATION WITH THE POC REVIEW.",
          type: null,
        },
        {
          question:
            "PERIOD 1 - REQUESTING THE FOLLOWING VISITS FOR THE FIRST 30-DAY PERIOD:",
          type: "text",
        },
        {
          question:
            "PERIOD 2 - REQUESTING THE FOLLOWING VISITS FOR THE SECOND 30-DAY PERIOD:",
          type: "text",
        },
      ],
      NO: [
        {
          question:
            "SELECT REASON WHY THERE IS NOT A SKILLED NEED FOR NURSING CARE:",
          type: "multiselect",
          values: [
            "PATIENT/CAREGIVER HAS DEMONSTRATED INDEPENDENCE TO SELF-MANAGE CONDITION. PHYSICIAN NOTIFIED THAT FURTHER SKILLED NURSING VISITS ARE NOT INDICATED.",
            "PATIENT/CAREGIVER REFUSES FURTHER VISITS",
            "PATIENT IS TRANSITIONING TO HOSPICE CARE",
            "OTHER",
          ],
          subitems: {
            "PATIENT/CAREGIVER REFUSES FURTHER VISITS": [
              {
                question: "INDICATE REASONS WHY FURTHER VISITS ARE REFUSED:",
                type: "multiselect",
                values: [
                  "PATIENT IS SCHEDULED TO BE TRANSITIONED TO AN OUTPATIENT CLINIC",
                  "PATIENT WILL FOLLOW UP WITH THE PHYSICIAN OFFICE FOR CARE NEEDS.",
                  "PATIENT NO LONGER FEELS SERVICES ARE NEEDED.",
                  "OTHER",
                ],
                subitems: {
                  OTHER: [
                    {
                      question: "OTHER REASON WHY VISITS ARE REFUSED:",
                      type: "text",
                    },
                  ],
                },
              },
            ],
            OTHER: [
              {
                question:
                  "EXPLAIN WHY THERE ISN'T A SKILLED NEED FOR NURSING CARE:",
                type: "text",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 3,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id: 4,
    question: "SELECT REASON WHY THERE IS NOT A SKILLED NEED FOR NURSING CARE:",
    type: "multiselect",
    values: [
      "PATIENT/CAREGIVER HAS DEMONSTRATED INDEPENDENCE TO SELF-MANAGE CONDITION. PHYSICIAN NOTIFIED THAT FURTHER SKILLED NURSING VISITS ARE NOT INDICATED.",
      "PATIENT/CAREGIVER REFUSES FURTHER VISITS",
      "PATIENT IS TRANSITIONING TO HOSPICE CARE",
      "OTHER",
    ],
  },
  {
    id: 5,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id: 6,
    question: "SELECT REASON WHY THERE IS NOT A SKILLED NEED FOR NURSING CARE:",
    type: "multiselect",
    values: [
      "PATIENT/CAREGIVER HAS DEMONSTRATED INDEPENDENCE TO SELF-MANAGE CONDITION. PHYSICIAN NOTIFIED THAT FURTHER SKILLED NURSING VISITS ARE NOT INDICATED.",
      "PATIENT/CAREGIVER REFUSES FURTHER VISITS",
      "PATIENT IS TRANSITIONING TO HOSPICE CARE",
      "OTHER",
    ],
  },
  {
    id: 7,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id: 8,
    question: "SELECT REASON WHY THERE IS NOT A SKILLED NEED FOR NURSING CARE:",
    type: "multiselect",
    values: [
      "PATIENT/CAREGIVER HAS DEMONSTRATED INDEPENDENCE TO SELF-MANAGE CONDITION. PHYSICIAN NOTIFIED THAT FURTHER SKILLED NURSING VISITS ARE NOT INDICATED.",
      "PATIENT/CAREGIVER REFUSES FURTHER VISITS",
      "PATIENT IS TRANSITIONING TO HOSPICE CARE",
      "OTHER",
    ],
  },
  {
    id: 9,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id: 7,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
  {
    id: 10,
    question:
      "NAME OF PROVIDER CONTACTED TO OBTAIN APPROVAL OF HOME HEALTH PLAN OF CARE AND CONFIRMATION TO SIGN ORDERS:",
    type: "text",
  },
];
